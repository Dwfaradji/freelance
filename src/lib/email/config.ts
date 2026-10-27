/**
 * Configuration centralisée du système d'emails DevEvoke.
 * Aucune information secrète n'est hardcodée ici : tout est extrait des variables d'environnement.
 */

export interface EmailConfig {
  from: {
    name: string;
    address: string;
  };
  internalRecipient: string;
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
  };
  isConfigured: boolean;
}

export function getEmailConfig(): EmailConfig {
  const host = process.env.SMTP_HOST || '';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  const resendKey = process.env.RESEND_API_KEY || '';
  const isResendConfigured = Boolean(resendKey && resendKey !== 're_placeholder' && resendKey.startsWith('re_'));
  const isSmtpConfigured = Boolean(host && port && user && pass);
  const isConfigured = isResendConfigured || isSmtpConfigured || process.env.NODE_ENV !== 'production';

  const internalRecipient =
    process.env.DEVOKE_CONTACT_EMAIL ||
    process.env.EMAIL_TO ||
    user ||
    'contact@devevoke.com';

  const rawFromAddress =
    process.env.EMAIL_FROM_ADDRESS ||
    process.env.EMAIL_FROM ||
    user ||
    'contact@devevoke.com';
  const match = rawFromAddress.match(/<([^>]+)>/);
  const fromAddress = match ? match[1].trim() : rawFromAddress.trim();

  return {
    from: {
      name: 'DevEvoke',
      address: fromAddress,
    },
    internalRecipient,
    smtp: {
      host,
      port,
      secure: port === 465,
      user,
      pass,
    },
    isConfigured,
  };
}
