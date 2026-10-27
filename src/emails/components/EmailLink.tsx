import React from 'react';
import { Link } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailLink({ href, children, style }: EmailLinkProps) {
  const linkStyle: React.CSSProperties = {
    color: emailTokens.colors.primaryLight,
    textDecoration: 'none',
    fontWeight: emailTokens.typography.mediumWeight,
    fontFamily: emailTokens.typography.fontFamily,
    ...style,
  };

  return (
    <Link href={href} style={linkStyle}>
      {children}
    </Link>
  );
}
