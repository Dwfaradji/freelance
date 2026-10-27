import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agence Digitale Médico-Social | Transformation Numérique & Logiciels',
  description:
    'DevEvoke est une agence digitale spécialisée dans le secteur médico-social. Nous concevons des logiciels métiers, solutions SaaS, applications mobiles et outils de gestion de flotte pour IME, SESSAD, ESAT, EHPAD et associations gestionnaires.',
  keywords: [
    'agence digitale médico-social',
    'agence web médico-social',
    'transformation numérique médico-social',
    'logiciel médico-social',
    'solution numérique médico-sociale',
    'digitalisation association médico-sociale',
    'logiciel IME',
    'logiciel SESSAD',
    'logiciel ESAT',
    'logiciel EHPAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/agence-digitale-medico-social',
  },
  openGraph: {
    title: 'Agence Digitale Médico-Social | DevEvoke',
    description:
      'Ingénierie logicielle et transformation numérique pour les établissements et associations médico-sociales en France. Logiciels métiers, conformité RGPD et gestion de flotte.',
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
      'Solutions numériques et logiciels métiers sur-mesure pour associations gestionnaires, IME, SESSAD, ESAT et EHPAD.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
