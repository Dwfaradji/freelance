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
import { ContactEmailData } from '../../email-types';
import { formatSalutation, formatCompany, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface ContactConfirmationProps {
  data: ContactEmailData;
  referenceId: string;
}

export function ContactConfirmationEmail({ data, referenceId }: ContactConfirmationProps) {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);

  const timelineSteps = [
    {
      step: 1,
      title: 'Prise de connaissance de votre demande',
      description: 'Notre équipe et nos architectes étudient les éléments transmis.',
    },
    {
      step: 2,
      title: 'Retour personnalisé sous 24 à 48h ouvrées',
      description: 'Nous revenons vers vous par email ou téléphone selon votre préférence.',
    },
    {
      step: 3,
      title: 'Échange technique sans engagement',
      description: 'Cadrage de votre périmètre et réponses à toutes vos interrogations.',
    },
  ];

  return (
    <EmailLayout
      preview={`DevEvoke — Votre demande a bien été reçue [Réf: ${referenceId}]`}
      referenceId={referenceId}
    >
      <EmailBadge variant="success">Demande prise en compte</EmailBadge>

      <EmailHeading as="h1">
        Votre demande a bien été reçue
      </EmailHeading>

      <EmailText variant="bold" size="md">
        {salutation}
      </EmailText>

      <EmailText variant="default">
        Merci d'avoir contacté DevEvoke. Nous avons bien reçu votre demande concernant{' '}
        <strong style={{ color: '#ffffff' }}>{data.subject || company}</strong>.
      </EmailText>

      <EmailText variant="muted">
        Notre équipe va maintenant étudier votre besoin et reviendra vers vous dans les meilleurs délais.
      </EmailText>

      {/* Carte Récapitulatif */}
      <EmailCard title="Référence de votre demande">
        <EmailFieldGroup>
          <EmailField
            label="Numéro de dossier :"
            value={
              <strong style={{ fontFamily: emailTokens.typography.monoFamily, color: emailTokens.colors.successText }}>
                {referenceId}
              </strong>
            }
          />
          <EmailField label="Entreprise / Asso :" value={company} />
          {data.subject && <EmailField label="Sujet :" value={data.subject} />}
          <EmailField label="Date d'enregistrement :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      {/* Prochaines étapes */}
      <EmailTimeline steps={timelineSteps} title="Prochaines étapes" />

      {/* Signature DevEvoke */}
      <EmailSignature />
    </EmailLayout>
  );
}

export function renderContactConfirmationText(data: ContactEmailData, referenceId: string): string {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);

  return `
==================================================
DEVEVOKE — VOTRE DEMANDE A BIEN ÉTÉ REÇUE
Réf : ${referenceId}
==================================================

${salutation}

Merci d'avoir contacté DevEvoke.

Nous avons bien reçu votre demande concernant :
${data.subject || company}

Notre équipe va maintenant étudier votre besoin et reviendra vers vous dans les meilleurs délais.

RÉFÉRENCE DE VOTRE DEMANDE
- Référence : ${referenceId}
- Entreprise / Asso : ${company}
${data.subject ? `- Sujet : ${data.subject}\n` : ''}- Date : ${formatDate(new Date())}

PROCHAINES ÉTAPES :
1. Prise de connaissance par nos architectes techniques.
2. Retour personnalisé sous 24 à 48 heures ouvrées.
3. Échange sans engagement pour qualifier précisément votre projet.

À bientôt,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
