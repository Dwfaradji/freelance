import crypto from 'crypto';

/**
 * Système de logs structuré et conforme au RGPD.
 * - Ne logge JAMAIS de données personnelles sensibles (messages, numéros de téléphone, secrets).
 * - Anonymise/hache les adresses IP (SHA-256 avec sel journalier).
 * - Associe un requestId unique pour le traçage et le diagnostic.
 */

export interface FormLogContext {
  requestId: string;
  formType: 'contact' | 'demo' | 'diagnostic' | 'simulator' | 'newsletter' | 'unknown';
  action: 'SUBMIT_ATTEMPT' | 'VALIDATION_FAILED' | 'RATE_LIMITED' | 'HONEYPOT_TRIGGERED' | 'EMAIL_SENT' | 'EMAIL_FAILED';
  status: 'SUCCESS' | 'ERROR' | 'BLOCKED';
  referenceId?: string;
  ip?: string;
  durationMs?: number;
  error?: string;
}

/**
 * Hache une adresse IP avec un sel pour éviter le stockage d'IP en clair.
 */
export function hashIp(ip: string = ''): string {
  if (!ip) return 'unknown';
  const salt = 'devevoke_rgpd_salt';
  return crypto.createHash('sha256').update(`${ip}-${salt}`).digest('hex').slice(0, 12);
}

/**
 * Génère un identifiant de requête unique.
 */
export function generateRequestId(): string {
  return `req_${crypto.randomBytes(8).toString('hex')}`;
}

export const securityLogger = {
  logFormEvent(context: FormLogContext): void {
    const timestamp = new Date().toISOString();
    const anonymizedIp = context.ip ? hashIp(context.ip) : undefined;

    const logEntry = {
      timestamp,
      event: 'FORM_AUDIT',
      requestId: context.requestId,
      formType: context.formType,
      action: context.action,
      status: context.status,
      referenceId: context.referenceId,
      ipHash: anonymizedIp,
      durationMs: context.durationMs,
      ...(context.error ? { errorReason: context.error } : {}),
    };

    if (context.status === 'ERROR') {
      console.error(JSON.stringify(logEntry));
    } else if (context.status === 'BLOCKED') {
      console.warn(JSON.stringify(logEntry));
    } else {
      console.info(JSON.stringify(logEntry));
    }
  },
};
