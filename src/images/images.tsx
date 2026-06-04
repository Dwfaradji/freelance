import React from 'react';
import Image from 'next/image';

interface PropsImage {
  width: number; // Largeur de l'image
  height: number; // Hauteur de l'image
  src: string; // Chemin ou URL de l'image
  alt: string; // Texte alternatif pour l'image
  className?: string; // Classes CSS optionnelles
}

const Images: React.FC<PropsImage> = ({
  width,
  height,
  src,
  alt,
  className = '',
}) => {
  return (
    <Image
      priority
      width={width}
      height={height}
      src={src} // Le chemin de l'image est passé dynamiquement
      alt={alt}
      className={className} // Priorité pour le chargement d'images importantes
    />
  );
};

export default Images;
