import { NextResponse } from 'next/server';
import { validateFormRequest } from '@/lib/security/requestValidation';
import { checkHoneypot } from '@/lib/security/honeypot';
import { rateLimiter, getClientIp } from '@/lib/security/rateLimit';
import { securityLogger, generateRequestId } from '@/lib/security/logger';
import { generateReference } from '@/lib/security/reference';
import { contactSubmissionSchema } from '@/lib/forms/schemas';
import { sendTransactionalEmail, detectFormType } from '@/lib/email/sendTransactionalEmail';
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

  const rawBody = validation.parsedBody;

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
      formType: formType as any,
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

  // 5. Validation stricte et sanitisation avec Zod
  const parseResult = contactSubmissionSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const formattedErrors = parseResult.error.flatten().fieldErrors;
    const errorDetails = Object.entries(formattedErrors)
      .map(([field, errs]) => `${field}: ${errs?.join(', ')}`)
      .join(' | ');

    securityLogger.logFormEvent({
      requestId,
      formType: formType as any,
      action: 'VALIDATION_FAILED',
      status: 'ERROR',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: `Form validation failed: ${errorDetails}`,
    });

    return NextResponse.json(
      {
        success: false,
        status: 400,
        message: 'INVALID_PARAMETER',
        error: `Données de formulaire invalides : ${errorDetails}`,
        fieldErrors: formattedErrors,
        requestId,
      },
      { status: 400 }
    );
  }

  const validatedData = parseResult.data;

  // 6. Vérifier la configuration SMTP
  const emailConfig = getEmailConfig();
  if (!emailConfig.isConfigured) {
    securityLogger.logFormEvent({
      requestId,
      formType: formType as any,
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
        error: 'Le service d’envoi d’emails est temporairement indisponible. Veuillez nous contacter directement par email.',
        requestId,
      },
      { status: 503 }
    );
  }

  // 7. Génération de la référence unique de dossier
  const referenceId = generateReference('DEV');

  // 8. Envoi des emails transactionnels (Interne DevEvoke + Confirmation Prospect)
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
          error: 'Une erreur est survenue lors de l’envoi de votre demande. Veuillez réessayer dans quelques instants.',
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
  } catch (error: any) {
    securityLogger.logFormEvent({
      requestId,
      formType: formType as any,
      action: 'EMAIL_FAILED',
      status: 'ERROR',
      durationMs: Date.now() - startTime,
      error: error?.message || 'Unexpected email sending error',
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
