/**
 * Définition des types pour le service email DevEvoke.
 */

export interface SendMailOptions {
  to: string;
  from?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
}

export interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

export type EmailTemplateType =
  | 'contact_internal'
  | 'contact_client'
  | 'quote_internal'
  | 'quote_client'
  | 'demo_internal'
  | 'demo_client'
  | 'diagnostic_internal'
  | 'diagnostic_client'
  | 'newsletter_internal'
  | 'newsletter_client';

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface TransactionalEmailResult {
  internalSent: boolean;
  clientSent: boolean;
  referenceId: string;
  errors?: string[];
}
