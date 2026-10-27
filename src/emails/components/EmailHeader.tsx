import React from 'react';
import { Section, Text } from '@react-email/components';
import { emailTokens } from '../design-tokens';
import { EmailLogo } from './EmailLogo';

interface EmailHeaderProps {
  referenceId?: string;
}

export function EmailHeader({ referenceId }: EmailHeaderProps) {
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#050811',
    borderBottom: `1px solid ${emailTokens.colors.border}`,
    padding: '24px 32px 20px 32px',
  };

  const refBadgeStyle: React.CSSProperties = {
    margin: 0,
    display: 'inline-block',
    fontSize: '11px',
    fontFamily: emailTokens.typography.monoFamily,
    color: emailTokens.colors.muted,
    backgroundColor: emailTokens.colors.surface,
    padding: '5px 11px',
    borderRadius: emailTokens.radius.sm,
    border: `1px solid ${emailTokens.colors.borderLight}`,
    letterSpacing: '0.02em',
  };

  return (
    <Section style={containerStyle}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
              <EmailLogo size="md" />
            </td>
            {referenceId && (
              <td style={{ verticalAlign: 'middle', textAlign: 'right' }}>
                <Text style={refBadgeStyle}>
                  Réf : <strong style={{ color: emailTokens.colors.primaryLight }}>{referenceId}</strong>
                </Text>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
