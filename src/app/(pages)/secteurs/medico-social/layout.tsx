import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Numérique & Digitalisation Médico-Sociale | DevEvoke',
  description:
    'Découvrez comment DevEvoke accompagne les associations et établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD) dans leur transformation numérique : logiciels sur-mesure, applications, outils internes et gestion de flotte.',
  keywords: [
    'numérique médico-social',
    'digitalisation médico-social',
    'transformation numérique médico-social',
    'agence digitale médico-social',
    'solutions numériques médico-sociales',
    'logiciel métier médico-social',
    'outils médico-sociaux',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/secteurs/medico-social',
  },
  openGraph: {
    title: 'Digitalisation & Solutions Numériques Médico-Sociales | DevEvoke',
    description:
      'Accompagnement technologique sur-mesure pour les structures médico-sociales. Outils métiers, plateformes web, applications nomades et conformité RGPD.',
    url: 'https://www.devevoke.com/secteurs/medico-social',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions numériques médico-sociales' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
