import React from 'react';
import {
  EmailType,
  EmailTemplateDefinition,
  ContactEmailData,
  QuoteEmailData,
  DemoEmailData,
  DiagnosticEmailData,
  SimulatorEmailData,
  NewsletterEmailData,
} from './email-types';
import { formatName, formatCompany } from './email-utils';

// Import des templates React Email et de leurs versions texte
import {
  ContactInternalEmail,
  renderContactInternalText,
} from './templates/contact/ContactInternal';
import {
  ContactConfirmationEmail,
  renderContactConfirmationText,
} from './templates/contact/ContactConfirmation';
import {
  QuoteInternalEmail,
  renderQuoteInternalText,
} from './templates/quote/QuoteInternal';
import {
  QuoteConfirmationEmail,
  renderQuoteConfirmationText,
} from './templates/quote/QuoteConfirmation';
import {
  DemoInternalEmail,
  renderDemoInternalText,
} from './templates/demo/DemoInternal';
import {
  DemoConfirmationEmail,
  renderDemoConfirmationText,
} from './templates/demo/DemoConfirmation';
import {
  DiagnosticInternalEmail,
  renderDiagnosticInternalText,
} from './templates/diagnostic/DiagnosticInternal';
import {
  DiagnosticConfirmationEmail,
  renderDiagnosticConfirmationText,
} from './templates/diagnostic/DiagnosticConfirmation';
import {
  SimulatorInternalEmail,
  renderSimulatorInternalText,
} from './templates/simulator/SimulatorInternal';
import {
  SimulatorConfirmationEmail,
  renderSimulatorConfirmationText,
} from './templates/simulator/SimulatorConfirmation';
import {
  NewsletterInternalEmail,
  renderNewsletterInternalText,
} from './templates/newsletter/NewsletterInternal';
import {
  NewsletterConfirmationEmail,
  renderNewsletterConfirmationText,
} from './templates/newsletter/NewsletterConfirmation';

/**
 * 1. OBJETS D'EMAIL CENTRALISÉS (Section 42 du Design System)
 */
export const emailSubjects = {
  contactInternal: (_data: ContactEmailData, ref: string) =>
    `Nouvelle demande de contact — DevEvoke [Réf: ${ref}]`,

  contactConfirmation: (_data: ContactEmailData, ref: string) =>
    `DevEvoke — Votre demande a bien été reçue [Réf: ${ref}]`,

  quoteInternal: (_data: QuoteEmailData, ref: string) =>
    `Nouvelle demande de devis — DevEvoke [Réf: ${ref}]`,

  quoteConfirmation: (_data: QuoteEmailData, ref: string) =>
    `DevEvoke — Votre demande de devis [Réf: ${ref}]`,

  demoInternal: (_data: DemoEmailData, ref: string) =>
    `Nouvelle demande de démonstration — DevEvoke [Réf: ${ref}]`,

  demoConfirmation: (_data: DemoEmailData, ref: string) =>
    `DevEvoke — Votre demande de démonstration [Réf: ${ref}]`,

  diagnosticInternal: (_data: DiagnosticEmailData, ref: string) =>
    `Nouveau diagnostic complété — DevEvoke [Réf: ${ref}]`,

  diagnosticConfirmation: (_data: DiagnosticEmailData, ref: string) =>
    `DevEvoke — Votre diagnostic est disponible [Réf: ${ref}]`,

  simulatorInternal: (_data: SimulatorEmailData, ref: string) =>
    `Nouveau résultat du simulateur — DevEvoke [Réf: ${ref}]`,

  simulatorConfirmation: (_data: SimulatorEmailData, ref: string) =>
    `Votre simulation DevEvoke est disponible [Réf: ${ref}]`,

  newsletterInternal: (_data: NewsletterEmailData, ref: string) =>
    `Nouvel abonné newsletter — DevEvoke [Réf: ${ref}]`,

  newsletterConfirmation: () =>
    `Bienvenue dans la newsletter DevEvoke`,
} as const;

/**
 * 2. PREHEADERS CENTRALISÉS (Section 43 du Design System)
 */
export const emailPreheaders = {
  contactInternal: (data: ContactEmailData) =>
    `Une nouvelle demande vient d'être reçue depuis le site DevEvoke de la part de ${formatName(data.firstName, data.lastName)}.`,

  contactConfirmation: () =>
    `Nous avons bien reçu votre demande et notre équipe revient vers vous sous 24 à 48h.`,

  quoteInternal: (data: QuoteEmailData) =>
    `Nouvelle demande de chiffrage pour le projet : ${data.projectType}.`,

  quoteConfirmation: () =>
    `Votre demande de devis a bien été transmise à notre pôle technique.`,

  demoInternal: (data: DemoEmailData) =>
    `Demande de démonstration en visioconférence pour ${data.demoFocus}.`,

  demoConfirmation: () =>
    `Nous préparons votre démonstration personnalisée de 30 minutes.`,

  diagnosticInternal: (data: DiagnosticEmailData) =>
    `Nouveau score d'analyse pour ${formatCompany(data.organization)} : ${data.globalScore}/100 (${data.maturityLevel}).`,

  diagnosticConfirmation: () =>
    `Votre synthèse de maturité numérique et vos points d'attention prioritaires.`,

  simulatorInternal: (data: SimulatorEmailData) =>
    `Nouvelle simulation d'optimisation économique complétée pour ${data.vehicles} véhicule(s).`,

  simulatorConfirmation: () =>
    `Vos estimations d'économies et projections de rentabilité sont prêtes.`,

  newsletterInternal: (data: NewsletterEmailData) =>
    `Nouvelle inscription confirmée : ${data.email}.`,

  newsletterConfirmation: () =>
    `Votre veille technologique et métier commence maintenant.`,
} as const;

/**
 * 3. REGISTRY CENTRALISÉE DES TEMPLATES (Section 44 du Design System)
 * Associe type -> template -> subject -> preheader -> text generator
 */
export const emailTemplates: Record<EmailType, EmailTemplateDefinition<any>> = {
  'contact-internal': {
    subject: (data, ref) => emailSubjects.contactInternal(data, ref),
    preheader: (data) => emailPreheaders.contactInternal(data),
    component: ({ data, referenceId }) => <ContactInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderContactInternalText(data, ref),
    isClientEmail: false,
  },
  'contact-confirmation': {
    subject: (data, ref) => emailSubjects.contactConfirmation(data, ref),
    preheader: () => emailPreheaders.contactConfirmation(),
    component: ({ data, referenceId }) => <ContactConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderContactConfirmationText(data, ref),
    isClientEmail: true,
  },
  'quote-internal': {
    subject: (data, ref) => emailSubjects.quoteInternal(data, ref),
    preheader: (data) => emailPreheaders.quoteInternal(data),
    component: ({ data, referenceId }) => <QuoteInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderQuoteInternalText(data, ref),
    isClientEmail: false,
  },
  'quote-confirmation': {
    subject: (data, ref) => emailSubjects.quoteConfirmation(data, ref),
    preheader: () => emailPreheaders.quoteConfirmation(),
    component: ({ data, referenceId }) => <QuoteConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderQuoteConfirmationText(data, ref),
    isClientEmail: true,
  },
  'demo-internal': {
    subject: (data, ref) => emailSubjects.demoInternal(data, ref),
    preheader: (data) => emailPreheaders.demoInternal(data),
    component: ({ data, referenceId }) => <DemoInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderDemoInternalText(data, ref),
    isClientEmail: false,
  },
  'demo-confirmation': {
    subject: (data, ref) => emailSubjects.demoConfirmation(data, ref),
    preheader: () => emailPreheaders.demoConfirmation(),
    component: ({ data, referenceId }) => <DemoConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderDemoConfirmationText(data, ref),
    isClientEmail: true,
  },
  'diagnostic-internal': {
    subject: (data, ref) => emailSubjects.diagnosticInternal(data, ref),
    preheader: (data) => emailPreheaders.diagnosticInternal(data),
    component: ({ data, referenceId }) => <DiagnosticInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderDiagnosticInternalText(data, ref),
    isClientEmail: false,
  },
  'diagnostic-confirmation': {
    subject: (data, ref) => emailSubjects.diagnosticConfirmation(data, ref),
    preheader: () => emailPreheaders.diagnosticConfirmation(),
    component: ({ data, referenceId }) => <DiagnosticConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderDiagnosticConfirmationText(data, ref),
    isClientEmail: true,
  },
  'simulator-internal': {
    subject: (data, ref) => emailSubjects.simulatorInternal(data, ref),
    preheader: (data) => emailPreheaders.simulatorInternal(data),
    component: ({ data, referenceId }) => <SimulatorInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderSimulatorInternalText(data, ref),
    isClientEmail: false,
  },
  'simulator-confirmation': {
    subject: (data, ref) => emailSubjects.simulatorConfirmation(data, ref),
    preheader: () => emailPreheaders.simulatorConfirmation(),
    component: ({ data, referenceId }) => <SimulatorConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderSimulatorConfirmationText(data, ref),
    isClientEmail: true,
  },
  'newsletter-internal': {
    subject: (data, ref) => emailSubjects.newsletterInternal(data, ref),
    preheader: (data) => emailPreheaders.newsletterInternal(data),
    component: ({ data, referenceId }) => <NewsletterInternalEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderNewsletterInternalText(data, ref),
    isClientEmail: false,
  },
  'newsletter-confirmation': {
    subject: () => emailSubjects.newsletterConfirmation(),
    preheader: () => emailPreheaders.newsletterConfirmation(),
    component: ({ data, referenceId }) => <NewsletterConfirmationEmail data={data} referenceId={referenceId} />,
    text: (data, ref) => renderNewsletterConfirmationText(data, ref),
    isClientEmail: true,
  },
};

// Alias pour compatibilité
export const emailTemplateRegistry = emailTemplates;
