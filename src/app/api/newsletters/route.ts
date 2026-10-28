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
import { newsletterSubmissionSchema } from '@/lib/forms/schemas';
import {
  EMAIL_VALIDATION_MESSAGES,
  validateProfessionalEmail,
} from '@/lib/validation/email';
import { verifyEmailDomainDns } from '@/lib/validation/emailDns';
import { sendTransactionalEmail } from '@/lib/email/sendTransactionalEmail';
import { getEmailConfig } from '@/lib/email/config';

export async function POST(request: Request) {
  const startTime = Date.now();
  const requestId = generateRequestId();
  const clientIp = getClientIp(request);

  // 1. Validation de la requête HTTP
  const validation = await validateFormRequest(request, requestId);
  if (!validation.valid || !validation.parsedBody) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'SUBMIT_ATTEMPT',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: 'Invalid HTTP request structure or payload size',
    });
    return validation.errorResponse!;
  }

  const rawBody = validation.parsedBody as Record<string, unknown>;

  // 2. Détection Anti-Spam Honeypot
  const honeypotResult = checkHoneypot(rawBody);
  if (honeypotResult.isBot) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'HONEYPOT_TRIGGERED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Honeypot field filled: ${honeypotResult.fieldTriggered}`,
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: 'EMAIL_SENT',
      referenceId: generateReference('BOT'),
      requestId,
    });
  }

  // 3. Rate Limiting (max 3 inscriptions / 10 minutes par IP)
  const rateLimitResult = rateLimiter.check(clientIp, 'newsletter');
  if (!rateLimitResult.success) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'RATE_LIMITED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Rate limit exceeded: ${rateLimitResult.limit} per window`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 429,
        message: 'RATE_LIMIT_EXCEEDED',
        error: `Trop de requêtes. Veuillez patienter ${rateLimitResult.resetSeconds} secondes avant de réessayer.`,
        requestId,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimitResult.resetSeconds),
        },
      }
    );
  }

  // 4. Validation de l'e-mail professionnel & Schéma Zod
  const emailCheck = validateProfessionalEmail(rawBody.email);
  const parseResult = newsletterSubmissionSchema.safeParse(rawBody);

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

    const userFacingError = !emailCheck.isValid
      ? (emailCheck.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX)
      : Object.values(formattedErrors).flat().filter(Boolean).join(' ') ||
        EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX;

    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
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
          ? (emailCheck.code ?? 'EMAIL_SYNTAX_INCORRECT')
          : 'EMAIL_SYNTAX_INCORRECT',
        error: userFacingError,
        fieldErrors: formattedErrors,
        requestId,
      },
      { status: 400 }
    );
  }

  const validatedData = parseResult.data;

  // 5. Vérification DNS / MX côté serveur
  const dnsResult = await verifyEmailDomainDns(validatedData.email);
  if (!dnsResult.allowed) {
    const dnsErrorMessage =
      dnsResult.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX;

    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
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

  // 6. Protection contre les soumissions répétitives identiques
  const fingerprint = computeSubmissionFingerprint(rawBody);
  const duplicateCheck = rateLimiter.checkDuplicate(
    clientIp,
    'newsletter',
    fingerprint
  );
  if (duplicateCheck.isDuplicate) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'RATE_LIMITED',
      status: 'BLOCKED',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Duplicate newsletter subscription blocked (${duplicateCheck.retryAfterSeconds}s remaining)`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 429,
        message: 'DUPLICATE_SUBMISSION',
        error: `Cette adresse e-mail vient déjà d’être soumise. Veuillez patienter ${duplicateCheck.retryAfterSeconds} secondes.`,
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

  // 7. Vérifier la configuration du service d'e-mail
  const emailConfig = getEmailConfig();
  if (!emailConfig.isConfigured) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
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
        error: 'Le service est temporairement indisponible.',
        requestId,
      },
      { status: 503 }
    );
  }

  // 8. Génération de référence
  const referenceId = generateReference('NL');

  // 9. Envoi de la notification et de la confirmation via Resend
  try {
    const sendResult = await sendTransactionalEmail({
      formType: 'newsletter',
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
            'Une erreur est survenue lors de l’inscription. Veuillez réessayer.',
          requestId,
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
        : 'Unexpected newsletter subscription error';

    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
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
        error: 'Une erreur inattendue est survenue.',
        requestId,
      },
      { status: 500 }
    );
  }
}
