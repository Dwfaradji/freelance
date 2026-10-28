import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Logiciel Médico-Social & Application Métier ESMS Sur-Mesure',
  description:
    'Conception et développement de logiciels métiers sur-mesure et d’applications web pour établissements médico-sociaux (ESMS, IME, SESSAD, DITEP, ESAT, EHPAD) et associations gestionnaires. Interopérabilité, hébergement souverain France et RGPD.',
  keywords: [
    'développement logiciel médico-social',
    'logiciel sur mesure médico-social',
    'logiciel ESMS sur mesure',
    'application web ESMS',
    'développement application médico-social',
    'logiciel gestion établissement médico-social',
    'développeur médico-social',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/developpement-logiciel-medico-social',
  },
  openGraph: {
    title: 'Développement Logiciel Médico-Social & ESMS Sur-Mesure | DevEvoke',
    description:
      'Concevez le logiciel métier parfaitement adapté aux besoins de vos professionnels de terrain et directions médico-sociales. Sécurité web et conformité RGPD.',
    url: 'https://www.devevoke.com/developpement-logiciel-medico-social',
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
    title: 'Développement Logiciel Médico-Social Sur-Mesure | DevEvoke',
    description:
      'Logiciels métiers et applications web sur-mesure pour structures médico-sociales (ESMS). Hébergement souverain en France et conformité RGPD.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
