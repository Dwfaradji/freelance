import React from 'react';

interface EmailStatsProps {
  children: React.ReactNode[];
  columns?: 2 | 3;
}

export function EmailStats({ children, columns = 2 }: EmailStatsProps) {
  const widthPercentage = columns === 3 ? '33.33%' : '50%';

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '10px 0',
        margin: '18px -10px',
      }}
    >
      <tbody>
        <tr>
          {React.Children.map(children, (child, index) => (
            <td
              key={index}
              style={{
                width: widthPercentage,
                verticalAlign: 'top',
                padding: 0,
              }}
            >
              {child}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
