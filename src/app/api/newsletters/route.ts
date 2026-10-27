import { NextResponse } from 'next/server';
import { validateFormRequest } from '@/lib/security/requestValidation';
import { checkHoneypot } from '@/lib/security/honeypot';
import { rateLimiter, getClientIp } from '@/lib/security/rateLimit';
import { securityLogger, generateRequestId } from '@/lib/security/logger';
import { generateReference } from '@/lib/security/reference';
import { newsletterSubmissionSchema } from '@/lib/forms/schemas';
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

  const rawBody = validation.parsedBody;

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

  // 4. Validation Zod de l'email
  const parseResult = newsletterSubmissionSchema.safeParse(rawBody);
  if (!parseResult.success) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'VALIDATION_FAILED',
      status: 'ERROR',
      ip: clientIp,
      durationMs: Date.now() - startTime,
      error: 'Invalid email syntax',
    });

    return NextResponse.json(
      {
        success: false,
        status: 400,
        message: 'EMAIL_SYNTAX_INCORRECT',
        error: 'Adresse email invalide. Veuillez renseigner une adresse email correcte.',
        requestId,
      },
      { status: 400 }
    );
  }

  const validatedData = parseResult.data;

  // 5. Vérifier la configuration SMTP
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

  // 6. Génération de référence
  const referenceId = generateReference('NL');

  // 7. Envoi de la notification et de la confirmation
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
          error: 'Une erreur est survenue lors de l’inscription. Veuillez réessayer.',
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
  } catch (error: any) {
    securityLogger.logFormEvent({
      requestId,
      formType: 'newsletter',
      action: 'EMAIL_FAILED',
      status: 'ERROR',
      durationMs: Date.now() - startTime,
      error: error?.message || 'Unexpected newsletter subscription error',
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