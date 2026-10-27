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
import { SimulatorEmailData } from '../../email-types';
import { formatName, formatCompany, formatPhone, formatCurrency, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface SimulatorInternalProps {
  data: SimulatorEmailData;
  referenceId: string;
}

export function SimulatorInternalEmail({ data, referenceId }: SimulatorInternalProps) {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);
  const vehicles = data.vehicles ?? 0;
  const savingsFormatted = formatCurrency(data.annualSavings);
  const replySubject = encodeURIComponent(`DevEvoke : Restitution de votre simulation Floticar pour ${company} [Réf: ${referenceId}]`);
  const mailtoUrl = `mailto:${data.email}?subject=${replySubject}`;

  return (
    <EmailLayout
      preview={`Nouveau résultat du simulateur : ${vehicles} véhicules (${company}) — Gain estimé ${savingsFormatted}/an`}
      referenceId={referenceId}
    >
      <EmailBadge variant="success">Simulation Floticar Complétée</EmailBadge>

      <EmailHeading as="h1">
        Nouveau résultat du simulateur
      </EmailHeading>

      <EmailText variant="muted">
        Un responsable vient de calculer une projection de gains économiques pour sa flotte de véhicules sur le site DevEvoke.
      </EmailText>

      {/* BLOC 1 : STATISTIQUES CLÉS DU SIMULATEUR */}
      <EmailStats columns={3}>
        <EmailMetric
          label="VÉHICULES"
          value={vehicles}
          subtext="Taille du parc"
          variant="neutral"
        />
        <EmailMetric
          label="POTENTIEL ESTIMÉ"
          value={savingsFormatted}
          subtext="Par an (projection)"
          variant="success"
        />
        <EmailMetric
          label="PAYBACK ESTIMÉ"
          value={data.paybackMonths ? `${data.paybackMonths} mois` : '~4 mois'}
          subtext="Temps de retour"
          variant="primary"
        />
      </EmailStats>

      {/* BLOC 2 : COMPARAISON DES SCÉNARIOS */}
      <EmailCard title="COMPARAISON DES SCÉNARIOS" variant="highlight">
        <EmailFieldGroup>
          <EmailField
            label="Situation actuelle :"
            value="Gestion manuelle, carnets papier, doubles saisies"
          />
          <EmailField
            label="Scénario optimisé :"
            value="Carnet de bord dématérialisé, alertes d'entretien"
          />
          <EmailField
            label="Scénario automatisé :"
            value="Synchronisation directe des trajets, suivi du carburant et conformité"
          />
          <EmailField
            label="Économie potentielle :"
            value={<strong style={{ color: emailTokens.colors.successText }}>{savingsFormatted} / an</strong>}
          />
          <EmailField
            label="ROI estimé :"
            value={<strong>{data.roiPercentage ? `${data.roiPercentage} %` : '220 %'}</strong>}
            isLast
          />
        </EmailFieldGroup>
      </EmailCard>

      {/* BLOC 3 : PRINCIPAUX LEVIERS D'ÉCONOMIE */}
      <EmailCard title="Principaux Leviers d'Amélioration" variant="surface">
        <ul style={{ margin: '0', paddingLeft: '20px', color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ color: '#ffffff' }}>Allègement administratif :</strong> suppression des ressaisies manuelles des feuilles d'heures et carnets de bord.
          </li>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ color: '#ffffff' }}>Suivi des consommations de carburant :</strong> identification rapide des anomalies kilométriques et éco-conduite.
          </li>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ color: '#ffffff' }}>Anticipation des entretiens & contrôles techniques :</strong> réduction drastique des pannes et immobilisations imprévues.
          </li>
        </ul>
      </EmailCard>

      {/* BLOC 4 : COORDONNÉES DU CONTACT */}
      <EmailCard title="Coordonnées du Contact">
        <EmailFieldGroup>
          <EmailField label="Nom complet :" value={<strong>{fullName}</strong>} />
          <EmailField label="Structure / Entreprise :" value={<strong>{company}</strong>} />
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
          />
          <EmailField
            label="Référence dossier :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
            isLast
          />
        </EmailFieldGroup>
      </EmailCard>

      {/* Prudence analytique */}
      <EmailAlert variant="neutral">
        <strong style={{ color: '#ffffff' }}>Engagement de transparence :</strong> ces chiffres constituent une projection indicative basée sur les paramètres déclarés et les retours d'expérience du secteur.
      </EmailAlert>

      <EmailButton href={mailtoUrl} align="center">
        Proposer une étude personnalisée de flotte
      </EmailButton>
    </EmailLayout>
  );
}

export function renderSimulatorInternalText(data: SimulatorEmailData, referenceId: string): string {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);
  const savings = formatCurrency(data.annualSavings);

  return `
==================================================
NOUVEAU RÉSULTAT DU SIMULATEUR — DEVEVOKE
Réf : ${referenceId}
==================================================

SIMULATEUR DE GAINS FLOTICAR :
- Nombre de véhicules : ${data.vehicles}
- Potentiel d'optimisation estimé : ${savings} / an
- Temps de retour estimé : ${data.paybackMonths ? `${data.paybackMonths} mois` : '~4 mois'}
- ROI estimé : ${data.roiPercentage ? `${data.roiPercentage} %` : '220 %'}

COMPARAISON DES SCÉNARIOS :
- Situation actuelle : carnets papier, doubles saisies manuelles
- Scénario optimisé : dématérialisation et alertes d'entretien
- Scénario automatisé : synchronisation et conformité automatique

PRINCIPAUX LEVIERS :
- Allègement administratif (gain de temps de coordination)
- Suivi du carburant et éco-conduite
- Prévention des pannes et réduction des immobilisations

CONTACT :
- Nom : ${fullName}
- Structure : ${company}
- Email : ${data.email}
- Téléphone : ${phone}
- Réf dossier : ${referenceId}
- Date : ${formatDate(new Date())}

Pour répondre, écrivez directement à : ${data.email}
`.trim();
}
