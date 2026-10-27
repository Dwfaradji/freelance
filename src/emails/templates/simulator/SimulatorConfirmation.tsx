import React from 'react';
import {
  EmailLayout,
  EmailBadge,
  EmailHeading,
  EmailText,
  EmailCard,
  EmailField,
  EmailFieldGroup,
  EmailButton,
  EmailAlert,
  EmailStats,
  EmailMetric,
  EmailSignature,
} from '../../components';
import { SimulatorEmailData } from '../../email-types';
import { formatSalutation, formatCurrency, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface SimulatorConfirmationProps {
  data: SimulatorEmailData;
  referenceId: string;
}

export function SimulatorConfirmationEmail({ data, referenceId }: SimulatorConfirmationProps) {
  const salutation = formatSalutation(data.firstName);
  const vehicles = data.vehicles ?? 0;
  const savingsFormatted = formatCurrency(data.annualSavings);
  const paybackText = data.paybackMonths ? `~${data.paybackMonths} mois` : '~4 mois';
  const roiText = data.roiPercentage ? `${data.roiPercentage} %` : '220 %';

  return (
    <EmailLayout
      preview={`Votre simulation DevEvoke est disponible [Réf: ${referenceId}]`}
      referenceId={referenceId}
    >
      <EmailBadge variant="success">Simulation d'Économies Disponible</EmailBadge>

      <EmailHeading as="h1">
        Votre simulation DevEvoke est disponible
      </EmailHeading>

      <EmailText variant="bold" size="md">
        {salutation}
      </EmailText>

      <EmailText variant="default">
        Merci d'avoir réalisé votre simulation avec DevEvoke pour votre parc de <strong style={{ color: '#ffffff' }}>{vehicles} véhicule(s)</strong>.
      </EmailText>

      <EmailText variant="muted">
        Votre estimation met en évidence plusieurs leviers potentiels d'amélioration et de rationalisation des coûts de gestion.
      </EmailText>

      {/* BLOC 1 : PROJECTIONS ESTIMÉES */}
      <EmailStats columns={3}>
        <EmailMetric
          label="POTENTIEL ESTIMÉ"
          value={savingsFormatted}
          subtext="Par an (projection)"
          variant="success"
        />
        <EmailMetric
          label="SCÉNARIO OPTIMISÉ"
          value={data.vehicles > 10 ? 'Scénario B2B' : 'Pack Standard'}
          subtext="Formule adaptée"
          variant="primary"
        />
        <EmailMetric
          label="ROI ESTIMÉ"
          value={roiText}
          subtext={`Rentabilisé en ${paybackText}`}
          variant="purple"
        />
      </EmailStats>

      {/* BLOC 2 : SYNTHÈSE DES PARAMÈTRES */}
      <EmailCard title="Synthèse de votre Simulation">
        <EmailFieldGroup>
          <EmailField
            label="Référence dossier :"
            value={
              <strong style={{ fontFamily: emailTokens.typography.monoFamily, color: emailTokens.colors.successText }}>
                {referenceId}
              </strong>
            }
          />
          <EmailField label="Taille de votre parc :" value={`${data.vehicles} véhicule(s)`} />
          <EmailField
            label="Potentiel estimé :"
            value={<strong style={{ fontSize: '15px', color: emailTokens.colors.successText }}>{savingsFormatted} / an</strong>}
          />
          <EmailField label="Scénario optimisé :" value="Dématérialisation et automatisation de flotte" />
          <EmailField label="ROI estimé :" value={roiText} />
          <EmailField label="Date de calcul :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      {/* BLOC 3 : ENGAGEMENT DE TRANSPARENCE */}
      <EmailAlert variant="neutral" title="Notre engagement de transparence">
        Ces résultats constituent une estimation basée sur les informations renseignées lors de la simulation et les moyennes constatées sur le terrain.
        <br /><br />
        Pour aller plus loin, l'équipe DevEvoke peut analyser votre situation plus précisément lors d'un échange personnalisé et vous présenter la solution Floticar sans aucun engagement.
      </EmailAlert>

      <EmailButton href={`${emailTokens.brand.website}/demande-demo?ref=${referenceId}`} align="center">
        Échanger avec DevEvoke
      </EmailButton>

      {/* Signature DevEvoke */}
      <EmailSignature />
    </EmailLayout>
  );
}

export function renderSimulatorConfirmationText(data: SimulatorEmailData, referenceId: string): string {
  const salutation = formatSalutation(data.firstName);
  const savings = formatCurrency(data.annualSavings);
  const roiText = data.roiPercentage ? `${data.roiPercentage} %` : '220 %';

  return `
==================================================
VOTRE SIMULATION DEVEVOKE EST DISPONIBLE
Réf : ${referenceId}
==================================================

${salutation}

Merci d'avoir réalisé votre simulation avec DevEvoke.

Votre estimation met en évidence plusieurs leviers potentiels d'amélioration pour vos ${data.vehicles} véhicules.

RÉSULTATS DE LA PROJECTION :
- Potentiel estimé : ${savings} / an
- Scénario optimisé : Dématérialisation et automatisation
- ROI estimé : ${roiText}
- Temps de retour indicatif : ${data.paybackMonths ? `~${data.paybackMonths} mois` : '~4 mois'}

Ces résultats constituent une estimation basée sur les informations renseignées lors de la simulation.

Pour aller plus loin, l'équipe DevEvoke peut analyser votre situation plus précisément.

Référence dossier : ${referenceId}
Date : ${formatDate(new Date())}

Pour échanger avec un conseiller : contact@devevoke.com

À bientôt,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
