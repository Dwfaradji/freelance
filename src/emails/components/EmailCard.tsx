import React from 'react';
import { Section } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailCardProps {
  title?: string;
  badge?: React.ReactNode;
  variant?: 'default' | 'surface' | 'highlight' | 'warning' | 'danger';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailCard({
  title,
  badge,
  variant = 'default',
  children,
  style,
}: EmailCardProps) {
  let backgroundColor: string = emailTokens.colors.surface;
  let borderColor: string = emailTokens.colors.border;

  switch (variant) {
    case 'surface':
      backgroundColor = emailTokens.colors.surfaceRaised;
      borderColor = emailTokens.colors.borderLight;
      break;
    case 'highlight':
      backgroundColor = '#0b192e';
      borderColor = '#1d4ed8';
      break;
    case 'warning':
      backgroundColor = emailTokens.colors.warningSurface;
      borderColor = emailTokens.colors.warningBorder;
      break;
    case 'danger':
      backgroundColor = emailTokens.colors.dangerSurface;
      borderColor = emailTokens.colors.dangerBorder;
      break;
    case 'default':
    default:
      backgroundColor = emailTokens.colors.surface;
      borderColor = emailTokens.colors.border;
      break;
  }

  const cardStyle: React.CSSProperties = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    borderRadius: emailTokens.radius.card,
    padding: '20px 24px',
    margin: '20px 0',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    borderBottom: `1px solid ${borderColor}`,
    paddingBottom: '12px',
    marginBottom: '16px',
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: emailTokens.typography.sizes.sm,
    fontWeight: emailTokens.typography.boldWeight,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: emailTokens.typography.fontFamily,
  };

  return (
    <Section style={cardStyle}>
      {(title || badge) && (
        <div style={headerStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                {title && (
                  <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
                    <div style={titleStyle}>{title}</div>
                  </td>
                )}
                {badge && (
                  <td style={{ verticalAlign: 'middle', textAlign: 'right' }}>
                    {badge}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {children}
    </Section>
  );
}
