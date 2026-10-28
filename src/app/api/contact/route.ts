import { NextResponse } from 'next/server';
import { validateFormRequest } from '@/lib/security/requestValidation';
import { checkHoneypot } from '@/lib/security/honeypot';
import {
  rateLimiter,
  getClientIp,
  computeSubmissionFingerprint,
} from '@/lib/security/rateLimit';
import { securityLogger, generateRequestId } from '@/lib/security/logger';
import { generateReference } from '@/lib/security/reference';
import { contactSubmissionSchema } from '@/lib/forms/schemas';
import {
  EMAIL_VALIDATION_MESSAGES,
  validateProfessionalEmail,
} from '@/lib/validation/email';
import { verifyEmailDomainDns } from '@/lib/validation/emailDns';
import {
  sendTransactionalEmail,
  detectFormType,
} from '@/lib/email/sendTransactionalEmail';
import { getEmailConfig } from '@/lib/email/config';

export async function POST(request: Request) {
  const startTime = Date.now();
  const requestId = generateRequestId();
  const clientIp = getClientIp(request);

  // 1. Validation de la requête HTTP (méthode, content-type, payload size < 50Ko)
  const validation = await validateFormRequest(request, requestId);
  if (!validation.valid || !validation.parsedBody) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'contact',
      action: 'SUBMIT_ATTEMPT',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: 'Invalid HTTP request structure or payload size',
    });
    return validation.errorResponse!;
  }

  const rawBody = validation.parsedBody as Record<string, unknown>;

  // 2. Détection Anti-Spam / Honeypot
  const honeypotResult = checkHoneypot(rawBody);
  if (honeypotResult.isBot) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'contact',
      action: 'HONEYPOT_TRIGGERED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Honeypot field filled: ${honeypotResult.fieldTriggered}`,
    });
    // Réponse feinte pour tromper les robots spammeurs sans générer d'email
    return NextResponse.json({
      success: true,
      status: 200,
      message: 'EMAIL_SENT',
      referenceId: generateReference('BOT'),
      requestId,
    });
  }

  // 3. Détermination du type de formulaire pour le Rate Limiting
  const formType = detectFormType(rawBody);

  // 4. Rate Limiting par IP et par type de formulaire
  const rateLimitResult = rateLimiter.check(clientIp, formType);
  if (!rateLimitResult.success) {
    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'RATE_LIMITED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Limit exceeded: ${rateLimitResult.limit} per window. Reset in ${rateLimitResult.resetSeconds}s`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 429,
        message: 'RATE_LIMIT_EXCEEDED',
        error: `Trop de requêtes soumises. Veuillez patienter ${rateLimitResult.resetSeconds} secondes avant de réessayer.`,
        requestId,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimitResult.resetSeconds),
          'X-RateLimit-Limit': String(rateLimitResult.limit),
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
        },
      }
    );
  }

  // 5. Validation de l'adresse e-mail professionnelle + Schéma Zod complet
  const emailCheck = validateProfessionalEmail(rawBody.email);
  const parseResult = contactSubmissionSchema.safeParse(rawBody);

  if (!parseResult.success || !emailCheck.isValid) {
    const formattedErrors: Record<string, string[] | undefined> =
      !parseResult.success ? parseResult.error.flatten().fieldErrors : {};

    if (!emailCheck.isValid && !formattedErrors.email) {
      formattedErrors.email = [
        emailCheck.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
      ];
    }

    const logDetails = Object.entries(formattedErrors)
      .map(([field, errs]) => `${field}: ${errs?.join(', ')}`)
      .join(' | ');

    // Message clair en français pour l'utilisateur final (sans préfixe technique)
    const userFacingError = !emailCheck.isValid
      ? (emailCheck.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX)
      : Object.values(formattedErrors).flat().filter(Boolean).join(' ') ||
        'Veuillez vérifier les informations saisies dans le formulaire.';

    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'VALIDATION_FAILED',
      status: 'ERROR',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Form validation failed: ${logDetails}`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 400,
        message: !emailCheck.isValid
          ? (emailCheck.code ?? 'INVALID_PARAMETER')
          : 'INVALID_PARAMETER',
        error: userFacingError,
        fieldErrors: formattedErrors,
        requestId,
      },
      { status: 400 }
    );
  }

  const validatedData = parseResult.data;

  // 6. Vérification DNS / MX côté serveur (avec timeout court et fallback résilient)
  const dnsResult = await verifyEmailDomainDns(validatedData.email);
  if (!dnsResult.allowed) {
    const dnsErrorMessage =
      dnsResult.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX;

    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'VALIDATION_FAILED',
      status: 'ERROR',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `DNS domain validation failed: ${dnsResult.status}`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 400,
        message: 'INVALID_EMAIL_DOMAIN_DNS',
        error: dnsErrorMessage,
        fieldErrors: { email: [dnsErrorMessage] },
        requestId,
      },
      { status: 400 }
    );
  }

  // 7. Protection contre les soumissions répétitives strictement identiques
  const fingerprint = computeSubmissionFingerprint(rawBody);
  const duplicateCheck = rateLimiter.checkDuplicate(
    clientIp,
    formType,
    fingerprint
  );
  if (duplicateCheck.isDuplicate) {
    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'RATE_LIMITED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Duplicate submission blocked (${duplicateCheck.retryAfterSeconds}s remaining)`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 429,
        message: 'DUPLICATE_SUBMISSION',
        error: `Cette demande vient déjà d’être transmise. Veuillez patienter ${duplicateCheck.retryAfterSeconds} secondes avant un nouvel envoi.`,
        requestId,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(duplicateCheck.retryAfterSeconds),
        },
      }
    );
  }

  // 8. Vérifier la configuration du service d'e-mail
  const emailConfig = getEmailConfig();
  if (!emailConfig.isConfigured) {
    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'EMAIL_FAILED',
      status: 'ERROR',
      durationMs: Date.now() - startTime,
      error: 'SMTP_CONFIG_MISSING',
    });

    return NextResponse.json(
      {
        success: false,
        status: 503,
        message: 'SMTP_CONFIG_MISSING',
        error:
          'Le service d’envoi d’emails est temporairement indisponible. Veuillez nous contacter directement par email.',
        requestId,
      },
      { status: 503 }
    );
  }

  // 9. Génération de la référence unique de dossier
  const referenceId = generateReference('DEV');

  // 10. Envoi des emails transactionnels via Resend (Interne DevEvoke + Confirmation Prospect)
  try {
    const sendResult = await sendTransactionalEmail({
      formType,
      data: validatedData,
      referenceId,
      requestId,
    });

    if (!sendResult.internalSent) {
      return NextResponse.json(
        {
          success: false,
          status: 500,
          message: 'EMAIL_SENDING_FAILED',
          error:
            'Une erreur est survenue lors de l’envoi de votre demande. Veuillez réessayer dans quelques instants.',
          requestId,
          referenceId,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: 'EMAIL_SENT',
        referenceId,
        requestId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const internalErrMsg =
      error instanceof Error
        ? error.message
        : 'Unexpected email sending error';

    securityLogger.logFormEvent({
      requestId,
      formType,
      action: 'EMAIL_FAILED',
      status: 'ERROR',
      durationMs: Date.now() - startTime,
      error: internalErrMsg,
    });

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: 'EMAIL_SENDING_FAILED',
        error: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
        requestId,
      },
      { status: 500 }
    );
  }
}
