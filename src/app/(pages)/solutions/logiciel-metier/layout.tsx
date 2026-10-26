import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement de Logiciel Métier Médico-Social Sur-Mesure | DevEvoke',
  description:
    'Conception de logiciels métiers sur-mesure pour associations et établissements médico-sociaux (IME, ESAT, EHPAD). Remplacement des tableurs Excel, centralisation des données et automatisation.',
  keywords: [
    'logiciel métier médico-social',
    'développement logiciel sur mesure ime ehpad',
    'remplacer excel médico-social',
    'outil informatique médico-social',
    'progiciel sur mesure association gestionnaire',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/logiciel-metier',
  },
  openGraph: {
    title: 'Logiciel Métier Sur-Mesure pour le Médico-Social | DevEvoke',
    description:
      'Un outil informatique calqué sur vos protocoles internes. Fini la dispersion des tableurs Excel et les progiciels inadaptés. Centralisation, sécurité et pérennité.',
    url: 'https://www.devevoke.com/solutions/logiciel-metier',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Développement logiciel métier médico-social DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function LogicielMetierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
