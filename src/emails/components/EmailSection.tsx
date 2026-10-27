import React from 'react';
import { Section, Heading } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailSectionProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'card' | 'plain' | 'highlight' | 'surface';
  style?: React.CSSProperties;
}

export function EmailSection({
  title,
  children,
  variant = 'card',
  style,
}: EmailSectionProps) {
  let bg = 'transparent';
  let border = 'none';
  let padding = '0';

  if (variant === 'card') {
    bg = emailTokens.colors.surface;
    border = `1px solid ${emailTokens.colors.border}`;
    padding = '18px 20px';
  } else if (variant === 'highlight') {
    bg = '#0f172a';
    border = `1px solid ${emailTokens.colors.primary}`;
    padding = '18px 20px';
  } else if (variant === 'surface') {
    bg = emailTokens.colors.surfaceRaised;
    border = `1px solid ${emailTokens.colors.borderLight}`;
    padding = '18px 20px';
  }

  const sectionStyle: React.CSSProperties = {
    backgroundColor: bg,
    border,
    borderRadius: emailTokens.radius.md,
    padding,
    margin: '20px 0',
    fontFamily: emailTokens.typography.fontFamily,
    ...style,
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 14px 0',
    fontSize: emailTokens.typography.sizes.sm,
    fontWeight: emailTokens.typography.boldWeight,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    borderBottom: title ? `1px solid ${emailTokens.colors.border}` : 'none',
    paddingBottom: title ? '8px' : '0',
    fontFamily: emailTokens.typography.fontFamily,
  };

  return (
    <Section style={sectionStyle}>
      {title && <Heading as="h3" style={titleStyle}>{title}</Heading>}
      {children}
    </Section>
  );
}
