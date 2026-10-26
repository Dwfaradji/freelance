import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Numériques & Logiciels pour le Secteur Médico-Social',
  description:
    'Découvrez les solutions numériques DevEvoke pour le secteur médico-social : logiciels métiers, gestion de flotte automobile (Floticar), applications mobiles et automatisation pour IME, SESSAD, ESAT et EHPAD.',
  keywords: [
    'solutions médico-social',
    'solution numérique médico-sociale',
    'logiciel médico-social',
    'logiciel pour association médico-sociale',
    'outils numériques médico-social',
    'gestion de flotte médico-social',
    'logiciel IME',
    'logiciel SESSAD',
    'logiciel ESAT',
    'logiciel EHPAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions',
  },
  openGraph: {
    title: 'Solutions Numériques Médico-Social | DevEvoke',
    description:
      'Panorama complet des logiciels métiers, applications et outils SaaS développés par DevEvoke pour les organisations médico-sociales en France.',
    url: 'https://www.devevoke.com/solutions',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Solutions numériques DevEvoke pour le médico-social',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Logicielles & Numériques Médico-Social | DevEvoke',
    description:
      'Des solutions créées pour les directeurs d’établissements, DSI et associations du secteur médico-social.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
