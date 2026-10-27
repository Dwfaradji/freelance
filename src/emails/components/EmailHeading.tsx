import React from 'react';
import { Heading } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailHeading({ as = 'h1', children, style }: EmailHeadingProps) {
  let defaultStyle: React.CSSProperties = {
    fontFamily: emailTokens.typography.fontFamily,
    color: '#ffffff',
    margin: 0,
    lineHeight: emailTokens.typography.lineHeights.tight,
  };

  switch (as) {
    case 'h1':
      defaultStyle = {
        ...defaultStyle,
        fontSize: emailTokens.typography.sizes.xl,
        fontWeight: emailTokens.typography.boldWeight,
        marginBottom: '14px',
        letterSpacing: '-0.02em',
      };
      break;
    case 'h2':
      defaultStyle = {
        ...defaultStyle,
        fontSize: emailTokens.typography.sizes.lg,
        fontWeight: emailTokens.typography.headingWeight,
        marginBottom: '10px',
        letterSpacing: '-0.01em',
      };
      break;
    case 'h3':
      defaultStyle = {
        ...defaultStyle,
        fontSize: emailTokens.typography.sizes.base,
        fontWeight: emailTokens.typography.semiboldWeight,
        color: emailTokens.colors.primaryLight,
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      };
      break;
  }

  return (
    <Heading as={as} style={{ ...defaultStyle, ...style }}>
      {children}
    </Heading>
  );
}
