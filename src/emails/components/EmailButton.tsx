import React from 'react';
import { Button, Section } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  variant?: 'primary' | 'secondary' | 'emerald';
}

export function EmailButton({
  href,
  children,
  align = 'center',
  variant = 'primary',
}: EmailButtonProps) {
  let backgroundColor: string = emailTokens.colors.primaryDark;
  let borderColor: string = emailTokens.colors.primary;
  let shadow: string = '0 4px 14px rgba(37, 99, 235, 0.35)';

  if (variant === 'secondary') {
    backgroundColor = emailTokens.colors.surfaceRaised;
    borderColor = emailTokens.colors.borderLight;
    shadow = 'none';
  } else if (variant === 'emerald') {
    backgroundColor = '#059669';
    borderColor = emailTokens.colors.success;
    shadow = '0 4px 14px rgba(16, 185, 129, 0.35)';
  }

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '13px 28px',
    backgroundColor,
    color: '#ffffff',
    fontSize: emailTokens.typography.sizes.base,
    fontWeight: emailTokens.typography.headingWeight,
    textDecoration: 'none',
    borderRadius: emailTokens.radius.button,
    border: `1px solid ${borderColor}`,
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: emailTokens.typography.fontFamily,
    boxShadow: shadow,
    minWidth: '200px',
  };

  return (
    <Section style={{ textAlign: align, margin: '26px 0 16px 0' }}>
      <Button href={href} style={buttonStyle}>
        {children}
      </Button>
    </Section>
  );
}
