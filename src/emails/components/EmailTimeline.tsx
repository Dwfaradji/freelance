import React from 'react';
import { emailTokens } from '../design-tokens';

export interface TimelineStep {
  step: number | string;
  title: string;
  description: string;
}

interface EmailTimelineProps {
  steps: TimelineStep[];
  title?: string;
}

export function EmailTimeline({ steps, title }: EmailTimelineProps) {
  const containerStyle: React.CSSProperties = {
    backgroundColor: emailTokens.colors.surface,
    border: `1px solid ${emailTokens.colors.border}`,
    borderRadius: emailTokens.radius.card,
    padding: '20px 22px',
    margin: '22px 0',
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: emailTokens.typography.sizes.sm,
    fontWeight: emailTokens.typography.boldWeight,
    color: emailTokens.colors.primaryLight,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: emailTokens.typography.fontFamily,
  };

  return (
    <div style={containerStyle}>
      {title && <div style={titleStyle}>{title}</div>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;
            return (
              <tr key={index}>
                <td
                  style={{
                    width: '36px',
                    verticalAlign: 'top',
                    paddingBottom: isLast ? '0' : '16px',
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: '#1e3a8a',
                      border: '1px solid #3b82f6',
                      textAlign: 'center',
                      lineHeight: '26px',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: emailTokens.typography.fontFamily,
                    }}
                  >
                    {item.step}
                  </div>
                </td>
                <td
                  style={{
                    verticalAlign: 'top',
                    paddingLeft: '10px',
                    paddingBottom: isLast ? '0' : '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: emailTokens.typography.sizes.sm,
                      fontWeight: emailTokens.typography.headingWeight,
                      color: '#ffffff',
                      marginBottom: '3px',
                      fontFamily: emailTokens.typography.fontFamily,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: emailTokens.colors.textDimmed,
                      lineHeight: '1.45',
                      fontFamily: emailTokens.typography.fontFamily,
                    }}
                  >
                    {item.description}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
