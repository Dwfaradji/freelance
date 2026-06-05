import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #030712 100%)', // Dark glass effect
          borderRadius: '16px', // Rounded corners
          border: '4px solid #3b82f6', // Neon blue border
        }}
      >
        <div
          style={{
            color: '#22d3ee', // Neon cyan letter
            fontSize: 42,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            marginTop: '2px', // Optical alignment
            marginLeft: '2px',
          }}
        >
          D
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
