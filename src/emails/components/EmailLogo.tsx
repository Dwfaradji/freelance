import React from 'react';
import { Link } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function EmailLogo({ size = 'md' }: EmailLogoProps) {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 36 : 28;
  const fontSize = size === 'sm' ? '16px' : size === 'lg' ? '22px' : '18px';

  return (
    <Link
      href={emailTokens.brand.website}
      target="_blank"
      style={{
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      <table border={0} cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'middle', paddingRight: '10px' }}>
              {/* Badge Icone DevEvoke */}
              <div
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  borderRadius: '7px',
                  backgroundColor: '#1d4ed8',
                  border: '1px solid #3b82f6',
                  textAlign: 'center',
                  lineHeight: `${iconSize}px`,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: `${Math.round(iconSize * 0.55)}px`,
                  fontFamily: emailTokens.typography.fontFamily,
                  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)',
                }}
              >
                D
              </div>
            </td>
            <td style={{ verticalAlign: 'middle' }}>
              <div
                style={{
                  fontFamily: emailTokens.typography.fontFamily,
                  fontSize,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  lineHeight: '1',
                }}
              >
                Dev<span style={{ color: emailTokens.colors.primaryLight }}>Evoke</span>
              </div>
              <div
                style={{
                  fontFamily: emailTokens.typography.fontFamily,
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: emailTokens.colors.textDimmed,
                  textTransform: 'uppercase',
                  marginTop: '3px',
                  lineHeight: '1',
                }}
              >
                Agence digitale
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Link>
  );
}
