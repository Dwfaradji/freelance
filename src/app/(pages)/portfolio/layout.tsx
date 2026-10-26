import React from 'react';

export const metadata = {
  title: 'Cas Pratiques & Déploiements E-Santé et Médico-Social',
  description:
    'Découvrez les réalisations et solutions logicielles déployées par DevEvoke : gestion de flotte (Floticar), applications cliniques, dossiers usagers et portails sécurisés.',
  alternates: {
    canonical: 'https://www.devevoke.com/realisations',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
