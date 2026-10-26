import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outils Internes & Modules Logistiques Médico-Sociaux | DevEvoke',
  description:
    'Développement d’outils internes et modules sur-mesure pour les services généraux du médico-social : suivi de maintenance, gestion des locaux et matériels, plannings de salles et formulaires internes.',
  keywords: [
    'outils internes médico-social',
    'gestion logistique ehpad ime',
    'suivi maintenance établissement médico-social',
    'réservation de salles ime foyer de vie',
    'outils services généraux médico-social',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/outils-metier',
  },
  openGraph: {
    title: 'Outils Internes & Modules Logistiques Médico-Sociaux | DevEvoke',
    description:
      'Des modules simples, rapides à prendre en main et efficaces pour fluidifier le quotidien de vos services généraux et administratifs.',
    url: 'https://www.devevoke.com/solutions/outils-metier',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Outils internes médico-sociaux DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function OutilsMetierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
