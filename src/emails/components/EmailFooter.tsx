import React from 'react';
import { Section, Text, Link, Hr } from '@react-email/components';
import { emailTokens } from '../design-tokens';

export function EmailFooter() {
  const currentYear = new Date().getFullYear();

  const footerContainerStyle: React.CSSProperties = {
    backgroundColor: '#03060d',
    borderTop: `1px solid ${emailTokens.colors.border}`,
    padding: '24px 32px',
    textAlign: 'center',
    fontFamily: emailTokens.typography.fontFamily,
  };

  const brandHeadingStyle: React.CSSProperties = {
    margin: '0 0 6px 0',
    fontSize: '12px',
    fontWeight: emailTokens.typography.boldWeight,
    color: '#ffffff',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  const textStyle: React.CSSProperties = {
    margin: '0 0 8px 0',
    fontSize: '11px',
    color: emailTokens.colors.muted,
    lineHeight: '1.6',
  };

  const legalTextStyle: React.CSSProperties = {
    margin: '12px 0 0 0',
    fontSize: '10px',
    color: emailTokens.colors.textSubtle,
    lineHeight: '1.5',
  };

  const linkStyle: React.CSSProperties = {
    color: emailTokens.colors.primaryLight,
    textDecoration: 'none',
  };

  return (
    <Section style={footerContainerStyle}>
      <Text style={brandHeadingStyle}>DevEvoke — Agence Digitale</Text>
      <Text style={textStyle}>
        Sites web · Applications · SaaS · Solutions métier
      </Text>
      <Text style={textStyle}>
        <Link href={emailTokens.brand.website} style={linkStyle}>
          www.devevoke.com
        </Link>{' '}
        ·{' '}
        <Link href={`mailto:${emailTokens.brand.contactEmail}`} style={linkStyle}>
          {emailTokens.brand.contactEmail}
        </Link>
      </Text>

      <Hr style={{ borderColor: emailTokens.colors.borderSubtle, margin: '14px 0' }} />

      <Text style={legalTextStyle}>
        DevEvoke | SIREN : {emailTokens.brand.siren} | Hébergement sécurisé en France | Conformité RGPD
        <br />
        Cet email transactionnel a été transmis suite à une interaction sur le site officiel de DevEvoke.
        <br />
        &copy; {currentYear} DevEvoke — Tous droits réservés.
      </Text>
    </Section>
  );
}
