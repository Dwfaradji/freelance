// config/metadata.ts

interface PropsMetaData {
  index: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
}

export const metadataConfig: PropsMetaData = {
  index: {
    title: 'Accueil - Mon Site Web',
    description:
      'Bienvenue sur notre site. Découvrez nos produits et services.',
  },
  about: {
    title: 'À propos - Mon Site Web',
    description: 'Découvrez qui nous sommes et ce que nous faisons.',
  },
  // Ajoutez d'autres pages ici avec leurs métadonnées
};
