import React from 'react';
import {
  EmailLayout,
  EmailBadge,
  EmailHeading,
  EmailText,
  EmailCard,
  EmailField,
  EmailFieldGroup,
  EmailTimeline,
  EmailSignature,
} from '../../components';
import { QuoteEmailData } from '../../email-types';
import { formatSalutation, formatCompany, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface QuoteConfirmationProps {
  data: QuoteEmailData;
  referenceId: string;
}

export function QuoteConfirmationEmail({ data, referenceId }: QuoteConfirmationProps) {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);

  const timelineSteps = [
    {
      step: 1,
      title: 'Analyse technique de votre besoin (24 à 48h ouvrées)',
      description: 'Nos architectes logiciels étudient la faisabilité, les dépendances et la pile cible.',
    },
    {
      step: 2,
      title: 'Visio de cadrage technique offerte (30 min)',
      description: 'Un échange direct sans jargon pour préciser les fonctionnalités et affiner les priorités.',
    },
    {
      step: 3,
      title: 'Proposition de chiffrage forfaitaire transparent',
      description: 'Devis clair avec jalons de livraison progressifs et engagement de résultat.',
    },
  ];

  return (
    <EmailLayout
      preview={`DevEvoke — Votre demande de devis [Réf: ${referenceId}]`}
      referenceId={referenceId}
    >
      <EmailBadge variant="success">Demande de devis enregistrée</EmailBadge>

      <EmailHeading as="h1">
        Votre demande de devis a bien été reçue
      </EmailHeading>

      <EmailText variant="bold" size="md">
        {salutation}
      </EmailText>

      <EmailText variant="default">
        Merci pour les informations transmises concernant votre projet pour <strong style={{ color: '#ffffff' }}>{company}</strong>.
      </EmailText>

      <EmailText variant="muted">
        Votre demande de devis a bien été enregistrée. Notre équipe va analyser votre besoin afin de vous apporter une réponse adaptée à votre projet.
      </EmailText>

      {/* Carte Récapitulatif Projet */}
      <EmailCard title="Récapitulatif du Projet">
        <EmailFieldGroup>
          <EmailField
            label="Référence dossier :"
            value={
              <strong style={{ fontFamily: emailTokens.typography.monoFamily, color: emailTokens.colors.successText }}>
                {referenceId}
              </strong>
            }
          />
          <EmailField label="Organisation :" value={company} />
          <EmailField label="Type de projet :" value={data.projectType || 'Projet digital'} />
          <EmailField label="Budget indicatif :" value={data.budget || 'En cours de cadrage'} />
          <EmailField label="Délai estimé :" value={data.delay || '1 à 3 mois'} isLast />
        </EmailFieldGroup>
      </EmailCard>

      {/* Timeline de qualification */}
      <EmailTimeline steps={timelineSteps} title="Prochaines étapes de chiffrage" />

      {/* Signature DevEvoke */}
      <EmailSignature />
    </EmailLayout>
  );
}

export function renderQuoteConfirmationText(data: QuoteEmailData, referenceId: string): string {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);

  return `
==================================================
DEVEVOKE — VOTRE DEMANDE DE DEVIS
Réf : ${referenceId}
==================================================

${salutation}

Merci pour les informations transmises concernant votre projet.

Votre demande de devis a bien été enregistrée.

Notre équipe va analyser votre besoin afin de vous apporter une réponse adaptée à votre projet.

RÉFÉRENCE DE VOTRE DEMANDE :
- Référence : ${referenceId}
- Organisation : ${company}
- Nature du projet : ${data.projectType}
- Budget : ${data.budget || 'En cours de cadrage'}
- Délai : ${data.delay || '1 à 3 mois'}
- Date : ${formatDate(new Date())}

PROCHAINES ÉTAPES :
1. Analyse technique sous 24 à 48h ouvrées par nos ingénieurs.
2. Proposition d'un court échange de cadrage sans engagement.
3. Chiffrage forfaitaire transparent avec planning réaliste.

À bientôt,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
