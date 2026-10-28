import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Socles Logiciels & Modèles Web Pré-Configurés pour le Médico-Social',
  description:
    'Explorez nos socles logiciels et modèles web pré-conçus pour établissements médico-sociaux et sanitaires : EHPAD, résidences autonomie, SESSAD, portails usagers et coordination de soins.',
  alternates: {
    canonical: 'https://www.devevoke.com/templates',
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: 'Socles Logiciels & Modèles Web Médico-Sociaux | DevEvoke',
    description:
      'Socles numériques pré-configurés pour accélérer la digitalisation des établissements médico-sociaux et sanitaires.',
    url: 'https://www.devevoke.com/templates',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Socles et templates médico-sociaux DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
