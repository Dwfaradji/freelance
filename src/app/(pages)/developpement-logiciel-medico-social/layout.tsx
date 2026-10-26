import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Logiciel Médico-Social Sur-Mesure',
  description:
    'Conception et développement de logiciels métiers sur-mesure pour établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD) et associations gestionnaires. Hébergement souverain en France, RGPD et sécurité web.',
  keywords: [
    'développement logiciel médico-social',
    'logiciel médico-social sur mesure',
    'application métier médico-social',
    'logiciel gestion établissement médico-social',
    'développement web médico-social',
    'agence digitale médico-sociale',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/logiciel-metier',
  },
  openGraph: {
    title: 'Développement Logiciel Médico-Social Sur-Mesure | DevEvoke',
    description:
      'Créez le logiciel métier parfaitement adapté aux besoins de vos professionnels de terrain et directions médico-sociales. Sécurité web et conformité totale au RGPD.',
    url: 'https://www.devevoke.com/solutions/logiciel-metier',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Développement de logiciel médico-social sur-mesure DevEvoke',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement Logiciel Médico-Social | DevEvoke',
    description:
      'Solutions numériques sur-mesure pour structures médico-sociales. Hébergement souverain en France et sécurité web.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
