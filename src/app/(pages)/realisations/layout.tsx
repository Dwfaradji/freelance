import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réalisations & Projets Numériques Sur-Mesure',
  description:
    'Découvrez les solutions logicielles et digitales développées par DevEvoke : étude de cas SaaS Floticar, logiciels métier sur-mesure, applications mobiles et plateformes web.',
  keywords: [
    'réalisations logicielles',
    'projets numériques sur mesure',
    'étude de cas floticar saas',
    'développement web et mobile',
    'logiciel métier entreprise',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/realisations',
  },
  openGraph: {
    title: 'Réalisations & Projets Numériques Sur-Mesure | DevEvoke',
    description:
      'Exemples concrets de solutions logicielles, plateformes SaaS et applications mobiles développées par DevEvoke.',
    url: 'https://www.devevoke.com/realisations',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Réalisations DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
