import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Numériques pour le Secteur Médico-Social | DevEvoke',
  description:
    'Découvrez les services d’ingénierie logicielle et de transformation numérique de DevEvoke pour le secteur médico-social : logiciels métiers sur-mesure, applications mobiles terrain, Floticar et conformité RGPD.',
  alternates: {
    canonical: 'https://www.devevoke.com/services',
  },
  openGraph: {
    title: 'Services Numériques Médico-Sociaux | DevEvoke',
    description:
      'Solutions numériques et logiciels métiers conçus pour les associations et établissements médico-sociaux en France.',
    url: 'https://www.devevoke.com/services',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
