import React from 'react';

interface EmailFieldGroupProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function EmailFieldGroup({ children, style }: EmailFieldGroupProps) {
  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0',
    ...style,
  };

  return (
    <table style={tableStyle}>
      <tbody>{children}</tbody>
    </table>
  );
}
