import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prestations & Services : Sites Web, Logiciels Sur-Mesure & Applications Médico-Sociales',
  description:
    'Découvrez les prestations de DevEvoke pour le secteur médico-social et les organisations : création et refonte de sites web, applications mobiles, logiciels métiers sur-mesure, plateformes SaaS, automatisation, SEO et maintenance.',
  alternates: {
    canonical: 'https://www.devevoke.com/services',
  },
  openGraph: {
    title: 'Services & Prestations Numériques Médico-Social | DevEvoke',
    description:
      'Création de sites web, applications mobiles, plateformes SaaS et logiciels métiers sur-mesure pour les établissements médico-sociaux et associations.',
    url: 'https://www.devevoke.com/services',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Services numériques DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
