import React from 'react';
import { Hr } from '@react-email/components';
import { emailTokens } from '../design-tokens';

interface EmailDividerProps {
  style?: React.CSSProperties;
}

export function EmailDivider({ style }: EmailDividerProps) {
  const dividerStyle: React.CSSProperties = {
    borderColor: emailTokens.colors.border,
    borderWidth: '1px',
    borderStyle: 'solid',
    margin: '24px 0',
    ...style,
  };

  return <Hr style={dividerStyle} />;
}
