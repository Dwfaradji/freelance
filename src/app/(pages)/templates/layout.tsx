import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Socles & Modèles Numériques Médico-Sociaux | DevEvoke',
  description:
    'Explorez nos socles logiciels et modèles pré-conçus pour établissements médico-sociaux et de santé : EHPAD, résidences autonomie, SESSAD, portails usagers et coordination de soins.',
  alternates: {
    canonical: 'https://www.devevoke.com/templates',
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: 'Socles Logiciels Médico-Sociaux | DevEvoke',
    description:
      'Socles numériques pré-configurés pour accélérer la digitalisation des établissements médico-sociaux et sanitaires.',
    url: 'https://www.devevoke.com/templates',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
