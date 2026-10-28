import React from 'react';

export type EmailType =
  | 'contact-internal'
  | 'contact-confirmation'
  | 'quote-internal'
  | 'quote-confirmation'
  | 'demo-internal'
  | 'demo-confirmation'
  | 'diagnostic-internal'
  | 'diagnostic-confirmation'
  | 'newsletter-internal'
  | 'newsletter-confirmation';

export interface BaseEmailData {
  referenceId?: string;
  requestId?: string;
}

export interface ContactEmailData extends BaseEmailData {
  firstName: string;
  lastName?: string;
  business: string;
  email: string;
  phone?: string;
  role?: string;
  establishmentType?: string;
  siteCount?: string;
  subject?: string;
  message: string;
}

export interface QuoteEmailData extends BaseEmailData {
  firstName: string;
  lastName?: string;
  business: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  delay?: string;
  role?: string;
  establishmentType?: string;
  siteCount?: string;
  description: string;
}

export interface DemoEmailData extends BaseEmailData {
  firstName: string;
  lastName?: string;
  business: string;
  email: string;
  phone?: string;
  role?: string;
  establishmentType?: string;
  vehicleCount?: string;
  demoFocus: string;
  preferredSlot: string;
  notes?: string;
}

export interface DiagnosticEmailData extends BaseEmailData {
  firstName: string;
  lastName?: string;
  organization: string;
  email: string;
  phone?: string;
  role?: string;
  structureType?: string;
  siteCount?: string;
  globalScore: number;
  maturityLevel: string;
  criticalRisksCount?: number;
  criticalRisksSummary?: string[];
  topPriorities?: string[];
  fullReportSummary?: string;
}

export interface NewsletterEmailData extends BaseEmailData {
  email: string;
}

export type EmailDataPayload =
  | ContactEmailData
  | QuoteEmailData
  | DemoEmailData
  | DiagnosticEmailData
  | NewsletterEmailData;

export interface SendTransactionalEmailOptions {
  type: EmailType;
  to?: string | string[];
  replyTo?: string;
  data: Record<string, any>;
  referenceId?: string;
  requestId?: string;
}

export interface SendTransactionalEmailResult {
  success: boolean;
  provider: 'resend' | 'smtp' | 'mock';
  messageId?: string;
  error?: string;
}

export interface EmailTemplateDefinition<T = any> {
  subject: (data: T, referenceId: string) => string;
  preheader?: (data: T, referenceId: string) => string;
  component: (props: { data: T; referenceId: string }) => React.ReactElement;
  text: (data: T, referenceId: string) => string;
  isClientEmail: boolean;
}
