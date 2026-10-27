import React from 'react';
import { emailTokens } from '../design-tokens';

interface EmailMetricProps {
  label: string;
  value: React.ReactNode;
  subtext?: string;
  variant?: 'primary' | 'success' | 'warning' | 'purple' | 'neutral';
  style?: React.CSSProperties;
}

export function EmailMetric({
  label,
  value,
  subtext,
  variant = 'primary',
  style,
}: EmailMetricProps) {
  let valueColor: string = emailTokens.colors.primaryLight;
  let bg: string = emailTokens.colors.surface;
  let border: string = emailTokens.colors.border;

  switch (variant) {
    case 'success':
      valueColor = emailTokens.colors.successText;
      bg = emailTokens.colors.successSurface;
      border = emailTokens.colors.successBorder;
      break;
    case 'warning':
      valueColor = emailTokens.colors.warningText;
      bg = emailTokens.colors.warningSurface;
      border = emailTokens.colors.warningBorder;
      break;
    case 'purple':
      valueColor = emailTokens.colors.purpleText;
      bg = emailTokens.colors.purpleSurface;
      border = emailTokens.colors.purpleBorder;
      break;
    case 'neutral':
      valueColor = '#ffffff';
      bg = emailTokens.colors.surfaceRaised;
      border = emailTokens.colors.borderLight;
      break;
    case 'primary':
    default:
      valueColor = emailTokens.colors.primaryLight;
      bg = '#0e1f3d';
      border = '#1d4ed8';
      break;
  }

  const metricStyle: React.CSSProperties = {
    backgroundColor: bg,
    border: `1px solid ${border}`,
    borderRadius: emailTokens.radius.md,
    padding: '16px 14px',
    textAlign: 'center',
    fontFamily: emailTokens.typography.fontFamily,
    ...style,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '11px',
    color: emailTokens.colors.textDimmed,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: emailTokens.typography.semiboldWeight,
    margin: '0 0 6px 0',
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: emailTokens.typography.boldWeight,
    color: valueColor,
    lineHeight: '1.2',
    margin: 0,
  };

  const subtextStyle: React.CSSProperties = {
    fontSize: '11px',
    color: emailTokens.colors.muted,
    margin: '6px 0 0 0',
    lineHeight: '1.3',
  };

  return (
    <div style={metricStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
      {subtext && <div style={subtextStyle}>{subtext}</div>}
    </div>
  );
}
