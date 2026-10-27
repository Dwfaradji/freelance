import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 64,
  height: 64,
};
export const contentType = 'image/png';

export default function Icon() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public/icon.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#030712',
          borderRadius: '14px',
          overflow: 'hidden',
          padding: '6px',
        }}
      >
        <img
          src={logoBase64}
          alt="DevEvoke"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
