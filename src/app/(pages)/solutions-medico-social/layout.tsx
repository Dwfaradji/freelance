import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Digitales & Outils Numériques pour Établissements Médico-Sociaux',
  description:
    'Catalogue des solutions digitales DevEvoke pour les établissements médico-sociaux (ESMS) : logiciels métiers sur-mesure, applications web et mobiles, automatisation des processus et outils spécialisés pour IME, SESSAD, DITEP, ESAT, EHPAD et associations.',
  keywords: [
    'solution digitale médico-social',
    'outils numériques établissements médico-sociaux',
    'solutions médico-social',
    'logiciel ESMS sur mesure',
    'application web ESMS',
    'logiciel pour association médico-sociale',
    'logiciel IME',
    'logiciel SESSAD',
    'logiciel ESAT',
    'logiciel EHPAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social',
  },
  openGraph: {
    title: 'Solutions Digitales & Outils Numériques Médico-Social | DevEvoke',
    description:
      'Panorama complet des logiciels métiers, applications web et mobiles et outils numériques développés par DevEvoke pour les structures médico-sociales.',
    url: 'https://www.devevoke.com/solutions-medico-social',
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
    title: 'Solutions Digitales & Outils Numériques Médico-Social | DevEvoke',
    description:
      'Des solutions créées pour les directeurs d’établissements, DSI et associations du secteur médico-social.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
