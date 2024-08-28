import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '25%',
        }}
      >
        <img
          src={'http://localhost:3000/favicon/logo.svg'} // Utilisation de l'URL absolue
          alt="Logo"
          style={{ width: '100%', height: '100%' }} // Ajuster la taille du logo
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
