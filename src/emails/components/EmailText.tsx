import React from 'react';
import { Text } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailTextProps {
  variant?: 'default' | 'muted' | 'bold' | 'subtle';
  size?: 'sm' | 'base' | 'md' | 'lg';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailText({
  variant = 'default',
  size = 'base',
  children,
  style,
}: EmailTextProps) {
  let color: string = emailTokens.colors.muted;
  let fontWeight: number = emailTokens.typography.bodyWeight;

  switch (variant) {
    case 'muted':
      color = emailTokens.colors.textDimmed;
      break;
    case 'bold':
      color = '#ffffff';
      fontWeight = emailTokens.typography.semiboldWeight;
      break;
    case 'subtle':
      color = emailTokens.colors.textSubtle;
      break;
    case 'default':
    default:
      color = emailTokens.colors.muted;
      break;
  }

  let fontSize: string = emailTokens.typography.sizes.base;
  switch (size) {
    case 'sm':
      fontSize = emailTokens.typography.sizes.sm;
      break;
    case 'md':
      fontSize = emailTokens.typography.sizes.md;
      break;
    case 'lg':
      fontSize = emailTokens.typography.sizes.lg;
      break;
    case 'base':
    default:
      fontSize = emailTokens.typography.sizes.base;
      break;
  }

  const baseStyle: React.CSSProperties = {
    fontFamily: emailTokens.typography.fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight: emailTokens.typography.lineHeights.relaxed,
    margin: '0 0 16px 0',
    ...style,
  };

  return <Text style={baseStyle}>{children}</Text>;
}
