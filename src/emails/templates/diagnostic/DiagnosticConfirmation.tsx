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
import { DiagnosticEmailData } from '../../email-types';
import { formatSalutation, formatCompany, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface DiagnosticConfirmationProps {
  data: DiagnosticEmailData;
  referenceId: string;
}

export function DiagnosticConfirmationEmail({ data, referenceId }: DiagnosticConfirmationProps) {
  const salutation = formatSalutation(data.firstName);
  const organization = formatCompany(data.organization);
  const score = data.globalScore ?? (data as any).score ?? 0;
  const level = data.maturityLevel ?? (data as any).level ?? 'Évaluation initiale';
  const scoreVariant = score >= 70 ? 'success' : score >= 40 ? 'primary' : 'warning';

  return (
    <EmailLayout
      preview={`DevEvoke — Votre diagnostic de maturité numérique [Réf: ${referenceId}]`}
      referenceId={referenceId}
    >
      <EmailBadge variant="purple">Diagnostic de Maturité Numérique</EmailBadge>

      <EmailHeading as="h1">
        Votre diagnostic a bien été enregistré
      </EmailHeading>

      <EmailText variant="bold" size="md">
        {salutation}
      </EmailText>

      <EmailText variant="default">
        Votre diagnostic DevEvoke pour <strong style={{ color: '#ffffff' }}>{organization}</strong> est terminé.
      </EmailText>

      <EmailText variant="muted">
        Nous avons analysé les différents éléments que vous avez renseignés afin d'identifier les principaux points d'attention et les opportunités d'amélioration de vos outils métier.
      </EmailText>

      {/* BLOC 1 : RÉSULTAT OBTENU */}
      <EmailStats columns={2}>
        <EmailMetric
          label="NIVEAU D'ANALYSE"
          value={level}
          subtext="Palier opérationnel"
          variant={score >= 70 ? 'success' : 'purple'}
        />
        <EmailMetric
          label="SCORE CALCULÉ"
          value={`${score} / 100`}
          subtext="Indice global d'adéquation"
          variant={scoreVariant}
        />
      </EmailStats>

      {/* BLOC 2 : POINTS D'ATTENTION SI DISPONIBLES */}
      {data.criticalRisksSummary && data.criticalRisksSummary.length > 0 && (
        <EmailCard title="Principaux points d'attention" variant="warning">
          <ul style={{ margin: '0', paddingLeft: '20px', color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.6' }}>
            {data.criticalRisksSummary.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>
                <strong style={{ color: emailTokens.colors.warningText }}>{item}</strong>
              </li>
            ))}
          </ul>
        </EmailCard>
      )}

      {/* BLOC 3 : RECOMMANDATIONS PRIORITAIRES */}
      {data.topPriorities && data.topPriorities.length > 0 ? (
        <EmailCard title="Recommandations prioritaires" variant="surface">
          <ul style={{ margin: '0', paddingLeft: '20px', color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.6' }}>
            {data.topPriorities.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#ffffff' }}>{item}</strong>
              </li>
            ))}
          </ul>
        </EmailCard>
      ) : (
        <EmailCard title="Recommandations prioritaires" variant="surface">
          <EmailText variant="muted" style={{ margin: 0 }}>
            Modernisation de vos outils de suivi, centralisation du carnet de bord et sécurisation de la conformité réglementaire.
          </EmailText>
        </EmailCard>
      )}

      {/* BLOC 4 : RÉCAPITULATIF DOSSIER */}
      <EmailCard title="Référence de votre dossier">
        <EmailFieldGroup>
          <EmailField
            label="Numéro de dossier :"
            value={
              <strong style={{ fontFamily: emailTokens.typography.monoFamily, color: emailTokens.colors.purpleText }}>
                {referenceId}
              </strong>
            }
          />
          <EmailField label="Établissement :" value={organization} />
          <EmailField label="Date d'évaluation :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      {/* Proposition d'accompagnement */}
      <EmailAlert variant="neutral">
        Si vous souhaitez aller plus loin, l'équipe DevEvoke peut vous accompagner dans l'analyse détaillée de votre situation et la mise en œuvre de solutions concrètes adaptées à votre quotidien.
      </EmailAlert>

      <EmailButton href={`${emailTokens.brand.website}/contact?ref=${referenceId}`} align="center">
        Échanger avec DevEvoke
      </EmailButton>

      {/* Signature DevEvoke */}
      <EmailSignature />
    </EmailLayout>
  );
}

export function renderDiagnosticConfirmationText(data: DiagnosticEmailData, referenceId: string): string {
  const salutation = formatSalutation(data.firstName);
  const organization = formatCompany(data.organization);

  return `
==================================================
DEVEVOKE — VOTRE DIAGNOSTIC EST DISPONIBLE
Réf : ${referenceId}
==================================================

${salutation}

Votre diagnostic DevEvoke est terminé.

Nous avons analysé les différents éléments que vous avez renseignés afin d'identifier les principaux points d'attention et les opportunités d'amélioration.

VOTRE NIVEAU D'ANALYSE
- Niveau : ${data.maturityLevel}
- Score calculé : ${data.globalScore} / 100
- Organisation : ${organization}

${data.criticalRisksSummary && data.criticalRisksSummary.length > 0 ? `PRINCIPAUX POINTS D'ATTENTION :\n${data.criticalRisksSummary.map(r => `- ${r}`).join('\n')}\n\n` : ''}${data.topPriorities && data.topPriorities.length > 0 ? `RECOMMANDATIONS PRIORITAIRES :\n${data.topPriorities.map(p => `- ${p}`).join('\n')}\n\n` : ''}Si vous souhaitez aller plus loin, l'équipe DevEvoke peut vous accompagner dans l'analyse de votre situation.

Référence dossier : ${referenceId}
Date : ${formatDate(new Date())}

Pour échanger avec un architecte : contact@devevoke.com

À bientôt,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
