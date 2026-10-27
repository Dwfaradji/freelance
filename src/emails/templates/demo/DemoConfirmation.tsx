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
import { DemoEmailData } from '../../email-types';
import { formatSalutation, formatCompany, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface DemoConfirmationProps {
  data: DemoEmailData;
  referenceId: string;
}

export function DemoConfirmationEmail({ data, referenceId }: DemoConfirmationProps) {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);
  const solution = data.demoFocus || 'nos solutions';
  const slot = data.preferredSlot || 'À convenir prochainement';

  const timelineSteps = [
    {
      step: 1,
      title: 'Vérification du créneau sélectionné',
      description: 'Nous confirmons la disponibilité de nos ingénieurs et créons le salon visio sécurisé.',
    },
    {
      step: 2,
      title: 'Envoi du lien de visioconférence (Google Meet / Teams)',
      description: 'Vous recevrez l\'invitation calendrier sous 24h ouvrées.',
    },
    {
      step: 3,
      title: 'Démonstration guidée en conditions réelles (30 min)',
      description: 'Présentation concrète axée sur vos enjeux opérationnels et réponses à vos questions.',
    },
  ];

  return (
    <EmailLayout
      preview={`DevEvoke — Votre demande de démonstration [Réf: ${referenceId}]`}
      referenceId={referenceId}
    >
      <EmailBadge variant="purple">Démonstration Réservée</EmailBadge>

      <EmailHeading as="h1">
        Votre demande de démonstration
      </EmailHeading>

      <EmailText variant="bold" size="md">
        {salutation}
      </EmailText>

      <EmailText variant="default">
        Merci pour votre intérêt pour DevEvoke.
      </EmailText>

      <EmailText variant="muted">
        Nous avons bien reçu votre demande de démonstration concernant{' '}
        <strong style={{ color: '#ffffff' }}>{solution}</strong> pour{' '}
        <strong style={{ color: '#ffffff' }}>{company}</strong>.
      </EmailText>

      <EmailText variant="muted">
        Nous allons revenir vers vous afin de définir le meilleur créneau et de préparer une démonstration adaptée à votre besoin.
      </EmailText>

      {/* Carte Détails de la Réservation */}
      <EmailCard title="Récapitulatif de votre demande">
        <EmailFieldGroup>
          <EmailField
            label="Référence dossier :"
            value={
              <strong style={{ fontFamily: emailTokens.typography.monoFamily, color: emailTokens.colors.purpleText }}>
                {referenceId}
              </strong>
            }
          />
          <EmailField label="Structure :" value={company} />
          <EmailField label="Solution demandée :" value={solution} />
          <EmailField label="Créneau souhaité :" value={slot} />
          <EmailField label="Date de demande :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      {/* Timeline Déroulement */}
      <EmailTimeline steps={timelineSteps} title="Déroulement de la démonstration" />

      {/* Signature DevEvoke */}
      <EmailSignature />
    </EmailLayout>
  );
}

export function renderDemoConfirmationText(data: DemoEmailData, referenceId: string): string {
  const salutation = formatSalutation(data.firstName);
  const company = formatCompany(data.business);

  return `
==================================================
DEVEVOKE — VOTRE DEMANDE DE DÉMONSTRATION
Réf : ${referenceId}
==================================================

${salutation}

Merci pour votre intérêt pour DevEvoke.

Nous avons bien reçu votre demande de démonstration concernant ${data.demoFocus} pour ${company}.

Nous allons revenir vers vous afin de définir le meilleur créneau et de préparer une démonstration adaptée à votre besoin.

RÉFÉRENCE :
- Numéro de dossier : ${referenceId}
- Structure : ${company}
- Solution : ${data.demoFocus}
- Créneau souhaité : ${data.preferredSlot}
- Date : ${formatDate(new Date())}

DÉROULEMENT :
1. Validation du créneau sous 24h ouvrées.
2. Envoi du lien de visioconférence (Google Meet / Teams).
3. Démonstration personnalisée de 30 minutes sans engagement.

À bientôt,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
