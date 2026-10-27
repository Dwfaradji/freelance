/**
 * Configuration centralisée du service d'emails DevEvoke.
 * Gère l'authentification Resend, le fallback SMTP/Nodemailer et les adresses autorisées.
 */

export interface EmailSenderConfig {
  name: string;
  address: string;
  formatted: string;
}

export interface EmailAppConfig {
  from: EmailSenderConfig;
  internalRecipient: string;
  resendApiKey?: string;
  isResendConfigured: boolean;
  audienceId?: string;
}

export function getEmailConfig(): EmailAppConfig {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const isResendConfigured = Boolean(
    resendApiKey &&
      resendApiKey !== 're_placeholder' &&
      resendApiKey.startsWith('re_')
  );

  const fromName = process.env.EMAIL_FROM_NAME?.trim() || 'DevEvoke';
  // En l'absence de domaine vérifié dans Resend en environnement de dev, onboarding@resend.dev peut être utilisé
  const rawFromAddress =
    process.env.EMAIL_FROM_ADDRESS?.trim() ||
    process.env.EMAIL_FROM?.trim() ||
    (isResendConfigured ? 'noreply@devevoke.com' : 'contact@devevoke.com');
  const match = rawFromAddress.match(/<([^>]+)>/);
  const fromAddress = match ? match[1].trim() : rawFromAddress.trim();

  const internalRecipient =
    process.env.DEVOKE_CONTACT_EMAIL?.trim() ||
    process.env.EMAIL_TO?.trim() ||
    'contact@devevoke.com';

  return {
    from: {
      name: fromName,
      address: fromAddress,
      formatted: `${fromName} <${fromAddress}>`,
    },
    internalRecipient,
    resendApiKey,
    isResendConfigured,
    audienceId: process.env.RESEND_AUDIENCE_ID?.trim(),
  };
}
