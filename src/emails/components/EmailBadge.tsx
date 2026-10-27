import React from 'react';
import { emailTokens, BadgeVariant } from '../design-tokens';

interface EmailBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: React.CSSProperties;
}

export function EmailBadge({ children, variant = 'info', style }: EmailBadgeProps) {
  let bg: string = '#1e3a8a';
  let text: string = emailTokens.colors.primaryLight;
  let border: string = emailTokens.colors.primary;

  switch (variant) {
    case 'success':
    case 'emerald':
      bg = emailTokens.colors.successSurface;
      text = emailTokens.colors.successText;
      border = emailTokens.colors.successBorder;
      break;
    case 'warning':
    case 'amber':
      bg = emailTokens.colors.warningSurface;
      text = emailTokens.colors.warningText;
      border = emailTokens.colors.warningBorder;
      break;
    case 'danger':
    case 'red':
      bg = emailTokens.colors.dangerSurface;
      text = emailTokens.colors.dangerText;
      border = emailTokens.colors.dangerBorder;
      break;
    case 'purple':
      bg = emailTokens.colors.purpleSurface;
      text = emailTokens.colors.purpleText;
      border = emailTokens.colors.purpleBorder;
      break;
    case 'default':
      bg = emailTokens.colors.surfaceRaised;
      text = emailTokens.colors.muted;
      border = emailTokens.colors.borderLight;
      break;
    case 'info':
    case 'blue':
    default:
      bg = '#1e3a8a';
      text = emailTokens.colors.primaryLight;
      border = emailTokens.colors.primary;
      break;
  }

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '4px 11px',
    backgroundColor: bg,
    color: text,
    border: `1px solid ${border}`,
    borderRadius: emailTokens.radius.badge,
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: emailTokens.typography.fontFamily,
    lineHeight: '1.2',
    margin: '0 0 14px 0',
    ...style,
  };

  return <span style={badgeStyle}>{children}</span>;
}
