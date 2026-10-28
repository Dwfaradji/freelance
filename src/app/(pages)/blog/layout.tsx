import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ressources & Guides : Transformation Numérique & Logiciels Médico-Sociaux',
  description:
    'Articles, guides pratiques et analyses pour les directions d’ESMS et associations médico-sociales : digitalisation des processus, choix d’un logiciel sur-mesure, ergonomie UX, sécurité des données et conformité RGPD.',
  alternates: {
    canonical: 'https://www.devevoke.com/blog',
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: 'Ressources & Guides Numériques Médico-Social | DevEvoke',
    description:
      'Guides pratiques sur la transformation digitale des établissements médico-sociaux, les logiciels métiers sur-mesure, le RGPD et l’interopérabilité.',
    url: 'https://www.devevoke.com/blog',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Blog et ressources DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
