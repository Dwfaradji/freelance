import React from 'react';
import {
  EmailLayout,
  EmailBadge,
  EmailHeading,
  EmailText,
  EmailCard,
  EmailField,
  EmailFieldGroup,
} from '../../components';
import { NewsletterEmailData } from '../../email-types';
import { formatDate } from '../../email-utils';
import { emailTokens } from '../../design-tokens';

interface NewsletterInternalProps {
  data: NewsletterEmailData;
  referenceId: string;
}

export function NewsletterInternalEmail({ data, referenceId }: NewsletterInternalProps) {
  return (
    <EmailLayout
      preview={`Nouvel abonné Newsletter : ${data.email}`}
      referenceId={referenceId}
    >
      <EmailBadge variant="info">Nouvel Abonné</EmailBadge>

      <EmailHeading as="h1">
        Nouvelle inscription à la newsletter
      </EmailHeading>

      <EmailText variant="muted">
        Une nouvelle adresse a rejoint la liste de veille technologique et métier DevEvoke.
      </EmailText>

      <EmailCard title="Abonné">
        <EmailFieldGroup>
          <EmailField
            label="Email :"
            value={
              <a href={`mailto:${data.email}`} style={{ color: emailTokens.colors.primaryLight, textDecoration: 'none' }}>
                <strong>{data.email}</strong>
              </a>
            }
          />
          <EmailField label="Date d'inscription :" value={formatDate(new Date())} />
          <EmailField
            label="Référence audit :"
            value={<strong style={{ fontFamily: emailTokens.typography.monoFamily }}>{referenceId}</strong>}
            isLast
          />
        </EmailFieldGroup>
      </EmailCard>
    </EmailLayout>
  );
}

export function renderNewsletterInternalText(data: NewsletterEmailData, referenceId: string): string {
  return `
==================================================
NOUVELLE INSCRIPTION NEWSLETTER — DEVEVOKE
Réf : ${referenceId}
==================================================

Abonné : ${data.email}
Date : ${formatDate(new Date())}
Référence : ${referenceId}
`.trim();
}
