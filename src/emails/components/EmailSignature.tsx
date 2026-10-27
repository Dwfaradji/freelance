import React from 'react';
import { Section, Text, Link } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailSignatureProps {
  customSignOff?: string;
  style?: React.CSSProperties;
}

export function EmailSignature({
  customSignOff = 'À bientôt,',
  style,
}: EmailSignatureProps) {
  const containerStyle: React.CSSProperties = {
    marginTop: '32px',
    paddingTop: '20px',
    borderTop: `1px solid ${emailTokens.colors.border}`,
    fontFamily: emailTokens.typography.fontFamily,
    ...style,
  };

  return (
    <Section style={containerStyle}>
      <Text
        style={{
          fontSize: emailTokens.typography.sizes.base,
          color: '#ffffff',
          fontWeight: emailTokens.typography.semiboldWeight,
          margin: '0 0 4px 0',
        }}
      >
        {customSignOff}
      </Text>
      <Text
        style={{
          fontSize: emailTokens.typography.sizes.md,
          color: '#ffffff',
          fontWeight: emailTokens.typography.boldWeight,
          margin: '0 0 8px 0',
        }}
      >
        L'équipe {emailTokens.brand.name}
      </Text>
      <Text
        style={{
          fontSize: '12px',
          color: emailTokens.colors.textDimmed,
          margin: '0 0 4px 0',
          lineHeight: '1.4',
        }}
      >
        Agence digitale · {emailTokens.brand.servicesSummary}
      </Text>
      <Link
        href={emailTokens.brand.website}
        target="_blank"
        style={{
          fontSize: '12px',
          color: emailTokens.colors.primaryLight,
          textDecoration: 'none',
          fontWeight: emailTokens.typography.mediumWeight,
        }}
      >
        www.devevoke.com
      </Link>
    </Section>
  );
}
