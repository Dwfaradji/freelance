import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agence Digitale & Web Médico-Social : Sites, Applications & Logiciels',
  description:
    'Agence digitale spécialisée dans le secteur médico-social : création et refonte de sites internet, applications web et mobiles, logiciels métiers sur-mesure et accompagnement pour ESMS, associations gestionnaires, IME, SESSAD, DITEP, ESAT et EHPAD.',
  keywords: [
    'agence digitale médico-social',
    'agence web médico-social',
    'transformation numérique médico-social',
    'création site internet médico-social',
    'refonte site internet association médico-sociale',
    'solution digitale médico-social',
    'digitalisation association médico-sociale',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/agence-digitale-medico-social',
  },
  openGraph: {
    title: 'Agence Digitale & Web Spécialisée Médico-Social | DevEvoke',
    description:
      'Ingénierie logicielle, création de sites web et transformation numérique pour les établissements et associations médico-sociales en France.',
    url: 'https://www.devevoke.com/agence-digitale-medico-social',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'DevEvoke - Agence Digitale Médico-Social',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence Digitale Spécialisée Médico-Social | DevEvoke',
    description:
      'Sites web, applications mobiles et logiciels métiers sur-mesure pour associations gestionnaires, ESMS, IME, SESSAD, DITEP, ESAT et EHPAD.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
