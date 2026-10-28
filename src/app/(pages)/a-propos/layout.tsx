import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos de DevEvoke : Agence Digitale & Développeur Spécialisé Médico-Social',
  description:
    'Découvrez DevEvoke et son fondateur Boucif Faradji : agence digitale spécialisée dans la conception de solutions numériques, sites web, applications mobiles et logiciels sur-mesure pour le secteur médico-social (ESMS, associations, IME, SESSAD, EHPAD).',
  alternates: {
    canonical: 'https://www.devevoke.com/a-propos',
  },
  openGraph: {
    title: 'À Propos de DevEvoke : Agence Digitale Spécialisée Médico-Social',
    description:
      'Ingénierie logicielle sur-mesure, proximité terrain et hébergement souverain en France pour les établissements médico-sociaux et associations.',
    url: 'https://www.devevoke.com/a-propos',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'À propos de DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
