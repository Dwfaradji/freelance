import { ImageResponse } from 'next/og';
import Images from 'next/image';

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
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '25%',
        }}
      >
        <img
          src={`https://www.devevoke.com/favicon/logo.svg`} // Utilisation de l'URL absolue
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
