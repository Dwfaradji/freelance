import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solution SaaS de Gestion de Véhicules pour ESMS & Associations (par DevEvoke)',
  description:
    'Découvrez Floticar, la solution SaaS développée par DevEvoke pour simplifier le suivi des véhicules de service en établissement médico-social (IME, SESSAD, ESAT, EHPAD) et association gestionnaire.',
  keywords: [
    'logiciel gestion véhicules établissement médico-social',
    'gestion flotte association médico-sociale',
    'suivi véhicules IME SESSAD',
    'carnet de bord numérique véhicule associatif',
    'solution SaaS développée par DevEvoke',
    'Floticar',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/logiciel-gestion-vehicules-medico-social',
  },
  openGraph: {
    title: 'Solution SaaS de Gestion de Véhicules Médico-Sociale | Conçue par DevEvoke',
    description:
      'Solution développée par DevEvoke pour dématérialiser le carnet de bord, les alertes d’entretien et les réservations de véhicules en ESMS.',
    url: 'https://www.devevoke.com/logiciel-gestion-vehicules-medico-social',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Solution de gestion de flotte médico-sociale développée par DevEvoke',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de Véhicules pour Associations & ESMS | Solution DevEvoke',
    description:
      'Une solution SaaS conçue par DevEvoke pour suivre les véhicules des établissements médico-sociaux.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
