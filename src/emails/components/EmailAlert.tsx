import React from 'react';
import { Section } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailAlertProps {
  title?: string;
  variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailAlert({
  title,
  variant = 'info',
  children,
  style,
}: EmailAlertProps) {
  let bg: string = emailTokens.colors.infoSurface;
  let border: string = emailTokens.colors.infoBorder;
  let titleColor: string = emailTokens.colors.infoText;

  switch (variant) {
    case 'success':
      bg = emailTokens.colors.successSurface;
      border = emailTokens.colors.successBorder;
      titleColor = emailTokens.colors.successText;
      break;
    case 'warning':
      bg = emailTokens.colors.warningSurface;
      border = emailTokens.colors.warningBorder;
      titleColor = emailTokens.colors.warningText;
      break;
    case 'danger':
      bg = emailTokens.colors.dangerSurface;
      border = emailTokens.colors.dangerBorder;
      titleColor = emailTokens.colors.dangerText;
      break;
    case 'neutral':
      bg = emailTokens.colors.surfaceRaised;
      border = emailTokens.colors.borderLight;
      titleColor = '#ffffff';
      break;
    case 'info':
    default:
      bg = emailTokens.colors.infoSurface;
      border = emailTokens.colors.infoBorder;
      titleColor = emailTokens.colors.infoText;
      break;
  }

  const alertStyle: React.CSSProperties = {
    backgroundColor: bg,
    border: `1px solid ${border}`,
    borderRadius: emailTokens.radius.card,
    padding: '16px 20px',
    margin: '20px 0',
    fontFamily: emailTokens.typography.fontFamily,
    ...style,
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 8px 0',
    fontSize: emailTokens.typography.sizes.sm,
    fontWeight: emailTokens.typography.boldWeight,
    color: titleColor,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    lineHeight: '1.3',
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: emailTokens.typography.sizes.sm,
    color: emailTokens.colors.muted,
    lineHeight: emailTokens.typography.lineHeights.relaxed,
    margin: 0,
  };

  return (
    <Section style={alertStyle}>
      {title && <div style={titleStyle}>{title}</div>}
      <div style={bodyStyle}>{children}</div>
    </Section>
  );
}
