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
import { ContactEmailData } from '../../email-types';
import { formatName, formatCompany, formatPhone, formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface ContactInternalProps {
  data: ContactEmailData;
  referenceId: string;
}

export function ContactInternalEmail({ data, referenceId }: ContactInternalProps) {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);
  const dateFormatted = formatDate(new Date());
  const replySubject = encodeURIComponent(`RE: Votre demande DevEvoke [Réf: ${referenceId}]`);
  const mailtoUrl = `mailto:${data.email}?subject=${replySubject}`;

  return (
    <EmailLayout
      preview={`Nouvelle demande de contact de ${fullName} (${company}) — DevEvoke`}
      referenceId={referenceId}
    >
      <EmailBadge variant="info">Nouvelle Demande de Contact</EmailBadge>

      <EmailHeading as="h1">
        Nouvelle prise de contact
      </EmailHeading>

      <EmailText variant="muted">
        Une nouvelle demande vient d'être envoyée depuis le formulaire de contact du site DevEvoke.
      </EmailText>

      {/* BLOC 1 : Coordonnées du contact */}
      <EmailCard title="Contact">
        <EmailFieldGroup>
          <EmailField label="Nom complet :" value={<strong>{fullName}</strong>} />
          <EmailField label="Entreprise / Asso :" value={<strong>{company}</strong>} />
          {data.role && <EmailField label="Fonction :" value={data.role} />}
          {data.establishmentType && <EmailField label="Type d'organisation :" value={data.establishmentType} />}
          {data.siteCount && <EmailField label="Périmètre / Sites :" value={data.siteCount} />}
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

      {/* BLOC 2 : Demande */}
      <EmailCard title="Demande" variant="highlight">
        {data.subject && (
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', color: emailTokens.colors.textDimmed, textTransform: 'uppercase', fontWeight: 700 }}>
              Sujet :{' '}
            </span>
            <strong style={{ fontSize: '14px', color: emailTokens.colors.primaryLight }}>{data.subject}</strong>
          </div>
        )}
        <div
          style={{
            backgroundColor: emailTokens.colors.canvas,
            padding: '14px 16px',
            borderRadius: emailTokens.radius.sm,
            border: `1px solid ${emailTokens.colors.border}`,
            fontSize: '13px',
            lineHeight: '1.6',
            color: emailTokens.colors.text,
            whiteSpace: 'pre-wrap',
          }}
        >
          {data.message}
        </div>
      </EmailCard>

      {/* BLOC 3 : Contexte */}
      <EmailCard title="Contexte">
        <EmailFieldGroup>
          <EmailField label="Page d'origine :" value="Formulaire de Contact (/contact)" />
          <EmailField
            label="Référence dossier :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
          />
          <EmailField label="Date & heure :" value={dateFormatted} isLast />
        </EmailFieldGroup>
      </EmailCard>

      <EmailButton href={mailtoUrl} align="center">
        Répondre au prospect en 1 clic
      </EmailButton>
    </EmailLayout>
  );
}

export function renderContactInternalText(data: ContactEmailData, referenceId: string): string {
  const fullName = formatName(data.firstName, data.lastName);
  const company = formatCompany(data.business);
  const phone = formatPhone(data.phone);

  return `
==================================================
NOUVELLE DEMANDE DE CONTACT — DEVEVOKE
Réf : ${referenceId}
==================================================

CONTACT
- Nom complet : ${fullName}
- Entreprise / Asso : ${company}
${data.role ? `- Fonction : ${data.role}\n` : ''}${data.establishmentType ? `- Type d'organisation : ${data.establishmentType}\n` : ''}${data.siteCount ? `- Périmètre / Sites : ${data.siteCount}\n` : ''}- Email : ${data.email}
- Téléphone : ${phone}

DEMANDE
${data.subject ? `- Sujet : ${data.subject}\n` : ''}- Message :
${data.message}

CONTEXTE
- Page d'origine : Formulaire de Contact (/contact)
- Référence : ${referenceId}
- Date : ${formatDate(new Date())}

Pour répondre, écrivez directement à : ${data.email}
`.trim();
}
