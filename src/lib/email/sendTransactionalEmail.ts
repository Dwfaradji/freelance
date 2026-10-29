import { ContactSubmissionInput, NewsletterSubmissionInput } from '../forms/schemas';
import { TransactionalEmailResult } from './types';
import { sendTransactionalEmail as sendReactEmail } from '../../emails/send-email';
import { EmailType } from '../../emails/email-types';

export type TransactionalFormType =
  | 'contact'
  | 'quote'
  | 'demo'
  | 'diagnostic'
  | 'newsletter';

/**
 * Détermine le type de formulaire à partir des propriétés du payload
 */
export function detectFormType(data: Partial<ContactSubmissionInput>): TransactionalFormType {
  if (data.isDemoRequest) {
    return 'demo';
  }
  if (data.projectType?.toLowerCase().includes('diagnostic')) {
    return 'diagnostic';
  }
  if (data.projectType?.toLowerCase().includes('devis') || data.projectType?.toLowerCase().includes('offre')) {
    return 'quote';
  }
  return 'contact';
}

/**
 * Service centralisé pour l'envoi des emails transactionnels DevEvoke.
 * Déploie les templates React Email et route via Resend (avec fallback SMTP sécurisé).
 */
export async function sendTransactionalEmail(params: {
  formType: TransactionalFormType;
  data: ContactSubmissionInput | NewsletterSubmissionInput;
  referenceId: string;
  requestId: string;
}): Promise<TransactionalEmailResult> {
  const { formType, data, referenceId, requestId } = params;
  const errors: string[] = [];

  const internalEmailType: EmailType = `${formType}-internal` as EmailType;
  const clientEmailType: EmailType = `${formType}-confirmation` as EmailType;

  // Formatage des données pour le registre React Email
  const payloadData: Record<string, any> = {
    ...data,
    firstName: (data as any).firstname || '',
    lastName: (data as any).lastname || '',
    business: (data as any).business || '',
    organization: (data as any).business || '',
    message: (data as any).content || '',
    description: (data as any).content || '',
    fullReportSummary: (data as any).content || '',
    fullSimulationSummary: (data as any).content || '',
    subject: (data as any).projectType || '',
    demoFocus: (data as any).projectType || 'Solution médico-sociale sur-mesure',
    preferredSlot: 'Dans la semaine (matin)',
    annualSavings: '18 400 €',
    vehicles: 10,
    globalScore: 68,
    maturityLevel: 'Niveau 3 — Avancé',
  };

  // 1. Envoi de l'email interne à l'équipe DevEvoke
  const internalResult = await sendReactEmail({
    type: internalEmailType,
    data: payloadData,
    referenceId,
    requestId,
  });

  if (!internalResult.success) {
    errors.push(internalResult.error || 'Échec de transmission de l’email interne');
  }

  // 2. Envoi de l'email de confirmation au client
  const clientResult = await sendReactEmail({
    type: clientEmailType,
    data: payloadData,
    referenceId,
    requestId,
  });

  if (!clientResult.success) {
    errors.push(clientResult.error || 'Échec de transmission de l’email client');
  }

  return {
    internalSent: internalResult.success,
    clientSent: clientResult.success,
    errors,
    referenceId,
  };
}
