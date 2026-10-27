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
  EmailStats,
  EmailMetric,
  EmailAlert,
} from '../../components';
import { DiagnosticEmailData } from '../../email-types';
import { formatName, formatCompany, formatPhone, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface DiagnosticInternalProps {
  data: DiagnosticEmailData;
  referenceId: string;
}

export function DiagnosticInternalEmail({ data, referenceId }: DiagnosticInternalProps) {
  const fullName = formatName(data.firstName, data.lastName);
  const organization = formatCompany(data.organization);
  const phone = formatPhone(data.phone);
  const replySubject = encodeURIComponent(`DevEvoke : Restitution de votre diagnostic numérique pour ${organization} [Réf: ${referenceId}]`);
  const mailtoUrl = `mailto:${data.email}?subject=${replySubject}`;

  // Choix de couleur de score
  const score = data.globalScore ?? (data as any).score ?? 0;
  const level = data.maturityLevel ?? (data as any).level ?? 'Évaluation initiale';
  const scoreVariant = score >= 70 ? 'success' : score >= 40 ? 'primary' : 'warning';
  const risksCount = data.criticalRisksCount || (data.criticalRisksSummary ? data.criticalRisksSummary.length : 0);

  return (
    <EmailLayout
      preview={`Nouveau diagnostic complété — ${organization} : ${score}/100 (${level})`}
      referenceId={referenceId}
    >
      <EmailBadge variant="purple">Diagnostic Médico-Social Complété</EmailBadge>

      <EmailHeading as="h1">
        Nouveau diagnostic complété
      </EmailHeading>

      <EmailText variant="muted">
        Un responsable d'établissement vient de finaliser l'évaluation de maturité numérique sur le site DevEvoke.
      </EmailText>

      {/* BLOC 1 : CARTE PRINCIPALE SCORE & NIVEAU */}
      <EmailStats columns={2}>
        <EmailMetric
          label="SCORE GLOBAL D'ANALYSE"
          value={`${score} / 100`}
          subtext="Indice indicatif sur 100 points"
          variant={scoreVariant}
        />
        <EmailMetric
          label="NIVEAU DE MATURITÉ"
          value={level}
          subtext={`${risksCount} point(s) d'attention`}
          variant={score >= 70 ? 'success' : 'purple'}
        />
      </EmailStats>

      {/* Mention de prudence analytique */}
      <EmailAlert variant="neutral">
        <strong style={{ color: '#ffffff' }}>Indicateur d'analyse :</strong> ce score reflète les réponses déclaratives fournies lors du questionnaire d'auto-évaluation et constitue une base de cadrage technique.
      </EmailAlert>

      {/* BLOC 2 : RISQUES & RECOMMANDATIONS */}
      {data.criticalRisksSummary && data.criticalRisksSummary.length > 0 && (
        <EmailCard title="Principaux Risques Détectés" variant="warning">
          <ul style={{ margin: '0', paddingLeft: '20px', color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.6' }}>
            {data.criticalRisksSummary.map((risk, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>
                <strong style={{ color: emailTokens.colors.warningText }}>{risk}</strong>
              </li>
            ))}
          </ul>
        </EmailCard>
      )}

      {data.topPriorities && data.topPriorities.length > 0 && (
        <EmailCard title="Recommandations Prioritaires" variant="surface">
          <ul style={{ margin: '0', paddingLeft: '20px', color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.6' }}>
            {data.topPriorities.map((rec, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#ffffff' }}>{rec}</strong>
              </li>
            ))}
          </ul>
        </EmailCard>
      )}

      {/* BLOC 3 : INFORMATIONS DU PROSPECT */}
      <EmailCard title="Informations du Prospect">
        <EmailFieldGroup>
          <EmailField label="Établissement / Asso :" value={<strong>{organization}</strong>} />
          {data.structureType && <EmailField label="Type de structure :" value={data.structureType} />}
          {data.siteCount && <EmailField label="Nombre de sites :" value={data.siteCount} />}
          <EmailField label="Contact référent :" value={<strong>{fullName}</strong>} />
          {data.role && <EmailField label="Fonction :" value={data.role} />}
          <EmailField
            label="Email :"
            value={
              <a href={`mailto:${data.email}`} style={{ color: emailTokens.colors.primaryLight, textDecoration: 'none' }}>
                {data.email}
              </a>
            }
          />
          <EmailField
            label="Téléphone :"
            value={
              phone !== 'Non renseigné' ? (
                <a href={`tel:${phone}`} style={{ color: emailTokens.colors.primaryLight, textDecoration: 'none' }}>
                  {phone}
                </a>
              ) : (
                'Non renseigné'
              )
            }
            isLast
          />
        </EmailFieldGroup>
      </EmailCard>

      {/* BLOC 4 : CONTEXTE */}
      <EmailCard title="Contexte">
        <EmailFieldGroup>
          <EmailField
            label="Référence dossier :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
          />
          <EmailField label="Date d'évaluation :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      <EmailButton href={mailtoUrl} align="center">
        Contacter le responsable de l'établissement
      </EmailButton>
    </EmailLayout>
  );
}

export function renderDiagnosticInternalText(data: DiagnosticEmailData, referenceId: string): string {
  const fullName = formatName(data.firstName, data.lastName);
  const organization = formatCompany(data.organization);
  const phone = formatPhone(data.phone);

  return `
==================================================
NOUVEAU DIAGNOSTIC COMPLÉTÉ — DEVEVOKE
Réf : ${referenceId}
==================================================

SCORE D'ANALYSE
- Score global : ${data.globalScore} / 100
- Niveau de maturité : ${data.maturityLevel}
- Points d'attention : ${data.criticalRisksCount || 0} détecté(s)

INFORMATIONS DU PROSPECT
- Établissement : ${organization}
${data.structureType ? `- Type : ${data.structureType}\n` : ''}${data.siteCount ? `- Sites : ${data.siteCount}\n` : ''}- Contact : ${fullName}
${data.role ? `- Fonction : ${data.role}\n` : ''}- Email : ${data.email}
- Téléphone : ${phone}

${data.criticalRisksSummary && data.criticalRisksSummary.length > 0 ? `RISQUES IDENTIFIÉS :\n${data.criticalRisksSummary.map(r => `- ${r}`).join('\n')}\n\n` : ''}${data.topPriorities && data.topPriorities.length > 0 ? `RECOMMANDATIONS :\n${data.topPriorities.map(p => `- ${p}`).join('\n')}\n\n` : ''}Réf dossier : ${referenceId}
Date : ${formatDate(new Date())}

Pour répondre, écrivez directement à : ${data.email}
`.trim();
}
