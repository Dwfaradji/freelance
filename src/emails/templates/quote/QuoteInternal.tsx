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
import { QuoteEmailData } from '../../email-types';
import { formatName, formatCompany, formatPhone, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface QuoteInternalProps {
  data: QuoteEmailData;
  referenceId: string;
}

export function QuoteInternalEmail({ data, referenceId }: QuoteInternalProps) {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);
  const replySubject = encodeURIComponent(`DevEvoke : Cadrage de votre devis pour ${company} [Réf: ${referenceId}]`);
  const mailtoUrl = `mailto:${data.email}?subject=${replySubject}`;
  const project = data.projectType || 'Projet digital';

  return (
    <EmailLayout
      preview={`Nouvelle demande de devis de ${fullName} (${company}) : ${project}`}
      referenceId={referenceId}
    >
      <EmailBadge variant="amber">Demande de Devis</EmailBadge>

      <EmailHeading as="h1">
        Nouvelle demande de devis
      </EmailHeading>

      <EmailText variant="muted">
        Un prospect vient de soumettre une demande de devis et un besoin de cadrage technique.
      </EmailText>

      {/* SECTION 1 : PROJET */}
      <EmailCard title="PROJET" variant="highlight">
        <EmailFieldGroup>
          <EmailField
            label="Type de projet :"
            value={<strong style={{ color: emailTokens.colors.primaryLight }}>{project}</strong>}
          />
          <EmailField
            label="Budget estimé :"
            value={<strong>{data.budget || 'En cours de cadrage'}</strong>}
          />
          <EmailField label="Délai souhaité :" value={data.delay || '1 à 3 mois'} />
          {data.establishmentType && <EmailField label="Type d'organisation :" value={data.establishmentType} />}
          {data.siteCount && <EmailField label="Périmètre / Sites :" value={data.siteCount} />}
        </EmailFieldGroup>

        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: `1px solid ${emailTokens.colors.border}` }}>
          <div style={{ fontSize: '11px', color: emailTokens.colors.textDimmed, textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
            Description du besoin & fonctionnalités :
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
            {data.description}
          </div>
        </div>
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

      {/* SECTION 3 : CONTEXTE */}
      <EmailCard title="CONTEXTE">
        <EmailFieldGroup>
          <EmailField
            label="Référence dossier :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
          />
          <EmailField label="Date de soumission :" value={formatDate(new Date())} isLast />
        </EmailFieldGroup>
      </EmailCard>

      <EmailButton href={mailtoUrl} align="center">
        Répondre au prospect en 1 clic
      </EmailButton>
    </EmailLayout>
  );
}

export function renderQuoteInternalText(data: QuoteEmailData, referenceId: string): string {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);

  return `
==================================================
NOUVELLE DEMANDE DE DEVIS — DEVEVOKE
Réf : ${referenceId}
==================================================

PROJET
- Type de projet : ${data.projectType}
- Budget : ${data.budget || 'Non précisé'}
- Délai : ${data.delay || 'Non précisé'}
${data.establishmentType ? `- Organisation : ${data.establishmentType}\n` : ''}${data.siteCount ? `- Périmètre / Sites : ${data.siteCount}\n` : ''}- Description :
${data.description}

CONTACT
- Nom : ${fullName}
- Entreprise / Asso : ${company}
${data.role ? `- Fonction : ${data.role}\n` : ''}- Email : ${data.email}
- Téléphone : ${phone}

CONTEXTE
- Référence : ${referenceId}
- Date : ${formatDate(new Date())}

Pour répondre, écrivez directement à : ${data.email}
`.trim();
}
