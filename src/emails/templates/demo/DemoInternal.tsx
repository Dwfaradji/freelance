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
} from '../../components';
import { DemoEmailData } from '../../email-types';
import { formatName, formatCompany, formatPhone, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface DemoInternalProps {
  data: DemoEmailData;
  referenceId: string;
}

export function DemoInternalEmail({ data, referenceId }: DemoInternalProps) {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);
  const solution = data.demoFocus || 'Solution DevEvoke';
  const slot = data.preferredSlot || 'À convenir';
  const replySubject = encodeURIComponent(`DevEvoke : Confirmation de votre créneau de démonstration ${solution} [Réf: ${referenceId}]`);
  const mailtoUrl = `mailto:${data.email}?subject=${replySubject}`;

  return (
    <EmailLayout
      preview={`Nouvelle demande de démonstration de ${fullName} (${company}) — ${solution}`}
      referenceId={referenceId}
    >
      <EmailBadge variant="purple">Demande de Démonstration</EmailBadge>

      <EmailHeading as="h1">
        Nouvelle demande de démonstration
      </EmailHeading>

      <EmailText variant="muted">
        Un responsable d'établissement souhaite assister à une démonstration guidée en visioconférence.
      </EmailText>

      {/* SECTION 1 : DEMANDE */}
      <EmailCard title="DEMANDE" variant="highlight">
        <EmailFieldGroup>
          <EmailField
            label="Solution concernée :"
            value={<strong style={{ color: emailTokens.colors.primaryLight }}>{solution}</strong>}
          />
          <EmailField
            label="Disponibilités :"
            value={<strong>{slot}</strong>}
          />
          {data.establishmentType && <EmailField label="Type d'établissement :" value={data.establishmentType} />}
          {data.vehicleCount && <EmailField label="Taille de flotte / Sites :" value={data.vehicleCount} isLast />}
        </EmailFieldGroup>

        {data.notes && (
          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: `1px solid ${emailTokens.colors.border}` }}>
            <div style={{ fontSize: '11px', color: emailTokens.colors.textDimmed, textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
              Besoin spécifique / Attentes :
            </div>
            <div
              style={{
                backgroundColor: emailTokens.colors.canvas,
                padding: '12px 14px',
                borderRadius: emailTokens.radius.sm,
                border: `1px solid ${emailTokens.colors.border}`,
                fontSize: '13px',
                lineHeight: '1.6',
                color: emailTokens.colors.text,
                whiteSpace: 'pre-wrap',
              }}
            >
              {data.notes}
            </div>
          </div>
        )}
      </EmailCard>

      {/* SECTION 2 : CONTACT */}
      <EmailCard title="CONTACT">
        <EmailFieldGroup>
          <EmailField label="Nom complet :" value={<strong>{fullName}</strong>} />
          <EmailField label="Entreprise / Asso :" value={<strong>{company}</strong>} />
          {data.role && <EmailField label="Fonction :" value={data.role} />}
          <EmailField
            label="Email direct :"
            value={
              <a href={`mailto:${data.email}`} style={{ color: emailTokens.colors.primaryLight, textDecoration: 'none' }}>
                {data.email}
              </a>
            }
          />
          <EmailField
            label="Téléphone direct :"
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

      {/* SECTION 3 : CONTEXTE */}
      <EmailCard title="CONTEXTE">
        <EmailFieldGroup>
          <EmailField label="Page d'origine :" value="Page Démonstration (/demande-demo)" />
          <EmailField
            label="Référence dossier :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
          />
          <EmailField label="Date & heure :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      <EmailButton href={mailtoUrl} align="center">
        Répondre au prospect & envoyer le lien visio
      </EmailButton>
    </EmailLayout>
  );
}

export function renderDemoInternalText(data: DemoEmailData, referenceId: string): string {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);

  return `
==================================================
NOUVELLE DEMANDE DE DÉMONSTRATION — DEVEVOKE
Réf : ${referenceId}
==================================================

DEMANDE
- Solution concernée : ${data.demoFocus}
- Disponibilités : ${data.preferredSlot}
${data.establishmentType ? `- Établissement : ${data.establishmentType}\n` : ''}${data.vehicleCount ? `- Flotte / Sites : ${data.vehicleCount}\n` : ''}${data.notes ? `- Besoin / Notes : ${data.notes}\n` : ''}
CONTACT
- Nom : ${fullName}
- Entreprise / Asso : ${company}
${data.role ? `- Fonction : ${data.role}\n` : ''}- Email : ${data.email}
- Téléphone : ${phone}

CONTEXTE
- Référence : ${referenceId}
- Date : ${formatDate(new Date())}
- Page : /demande-demo

Pour répondre, écrivez directement à : ${data.email}
`.trim();
}
