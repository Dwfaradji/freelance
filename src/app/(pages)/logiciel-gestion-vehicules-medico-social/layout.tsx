import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logiciel Gestion Flotte & Véhicules Association Médico-Sociale (Floticar)',
  description:
    'Floticar est le logiciel SaaS de gestion et suivi de flotte automobile adapté aux associations, IME, SESSAD et établissements médico-sociaux. Réservations, carnets de bord, entretiens et optimisation des coûts.',
  keywords: [
    'logiciel gestion véhicules association',
    'gestion flotte association',
    'gestion véhicules établissement médico-social',
    'logiciel gestion flotte médico-social',
    'suivi véhicules association',
    'gestion parc automobile association',
    'logiciel gestion flotte automobile',
    'gestion véhicules IME',
    'gestion véhicules SESSAD',
    'Floticar',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/logiciel-gestion-vehicules-medico-social',
  },
  openGraph: {
    title: 'Logiciel Gestion Véhicules & Flotte Association Médico-Sociale | Floticar',
    description:
      'Optimisez le suivi de votre parc automobile en association médico-sociale, IME ou SESSAD. Dématérialisation du carnet de bord, alertes entretiens et gestion des réservations.',
    url: 'https://www.devevoke.com/logiciel-gestion-vehicules-medico-social',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Floticar - Logiciel de gestion de flotte automobile pour associations médico-sociales',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de Flotte Automobile pour Associations & IME/SESSAD | Floticar',
    description:
      'La solution SaaS éditée par DevEvoke pour gérer et suivre les véhicules des établissements médico-sociaux.',
    images: ['/icon.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
