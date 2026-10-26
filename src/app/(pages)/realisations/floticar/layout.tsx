import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étude de Cas Floticar | Logiciel de Gestion de Flotte Développé par DevEvoke',
  description:
    'Découvrez comment DevEvoke a conçu et développé Floticar, la solution SaaS de gestion de parc automobile dédiée aux associations médico-sociales, IME et SESSAD. Carnets de bord par QR code et alertes automatiques.',
  keywords: [
    'étude de cas floticar',
    'logiciel gestion flotte médico-social',
    'carnet de bord numérique véhicule ehpad ime',
    'gestion véhicules association médico-sociale',
    'saas flotte automobile sur mesure',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/realisations/floticar',
  },
  openGraph: {
    title: 'Étude de Cas Floticar : Gestion de Flotte Médico-Sociale | DevEvoke',
    description:
      'Comment DevEvoke a conçu une plateforme SaaS complète pour éliminer les carnets de bord papier et automatiser le suivi des véhicules dans le médico-social.',
    url: 'https://www.devevoke.com/realisations/floticar',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Étude de cas Floticar DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function FloticarCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
