import React from 'react';
import { emailTokens } from '../design-tokens';

interface EmailFieldProps {
  label: string;
  value?: React.ReactNode;
  fallback?: string;
  hideIfEmpty?: boolean;
  isLast?: boolean;
}

export function EmailField({
  label,
  value,
  fallback,
  hideIfEmpty = false,
  isLast = false,
}: EmailFieldProps) {
  // Détection des valeurs vides, null ou undefined
  const isEmpty =
    value === null ||
    value === undefined ||
    value === '' ||
    value === 'undefined' ||
    value === 'null';

  if (isEmpty && hideIfEmpty) {
    return null;
  }

  const displayValue = isEmpty ? (fallback || 'Non renseigné') : value;

  const rowStyle: React.CSSProperties = {
    borderBottom: isLast ? 'none' : `1px solid ${emailTokens.colors.border}`,
  };

  const labelStyle: React.CSSProperties = {
    padding: '9px 12px 9px 0',
    fontSize: emailTokens.typography.sizes.sm,
    color: emailTokens.colors.textDimmed,
    fontWeight: emailTokens.typography.mediumWeight,
    width: '36%',
    verticalAlign: 'top',
    fontFamily: emailTokens.typography.fontFamily,
  };

  const valueStyle: React.CSSProperties = {
    padding: '9px 0 9px 12px',
    fontSize: emailTokens.typography.sizes.sm,
    color: emailTokens.colors.text,
    fontWeight: emailTokens.typography.bodyWeight,
    width: '64%',
    verticalAlign: 'top',
    fontFamily: emailTokens.typography.fontFamily,
    wordBreak: 'break-word',
  };

  return (
    <tr style={rowStyle}>
      <td style={labelStyle}>{label}</td>
      <td style={valueStyle}>{displayValue}</td>
    </tr>
  );
}
