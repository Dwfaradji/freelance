import React from 'react';
import { Container } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailContainer({ children, style }: EmailContainerProps) {
  const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: emailTokens.colors.canvas,
    borderRadius: emailTokens.radius.card,
    overflow: 'hidden',
    border: `1px solid ${emailTokens.colors.border}`,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
    ...style,
  };

  return <Container style={containerStyle}>{children}</Container>;
}
