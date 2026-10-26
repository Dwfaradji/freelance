import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réalisations & Études de Cas Médico-Sociales | DevEvoke',
  description:
    'Découvrez les solutions numériques conçues par DevEvoke pour les acteurs médico-sociaux : étude de cas SaaS Floticar, applications nomades SESSAD, gestion d’ateliers ESAT et portails de coordination.',
  keywords: [
    'réalisations numériques médico-social',
    'étude de cas floticar',
    'projets web associations médico-sociales',
    'applications médico-sociales développées',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/realisations',
  },
  openGraph: {
    title: 'Réalisations & Retours d’Expérience Médico-Social | DevEvoke',
    description:
      'Exemples concrets de solutions logicielles et web développées par DevEvoke pour répondre aux problématiques de terrain des structures médico-sociales.',
    url: 'https://www.devevoke.com/realisations',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Réalisations DevEvoke médico-social' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
