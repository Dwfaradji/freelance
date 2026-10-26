import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Création de Sites Web Médico-Sociaux & Portails RGAA | DevEvoke',
  description:
    'Conception et refonte de sites internet accessibles (RGAA) pour établissements médico-sociaux (IME, ESAT, EHPAD, FAM, associations gestionnaires). Valorisation de vos pôles, information familles et recrutement.',
  keywords: [
    'création site web médico-social',
    'refonte site internet ehpad ime esat',
    'site internet accessible rgaa',
    'portail usagers médico-social',
    'site web association gestionnaire handicap',
    'agence web médico-sociale',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/site-web',
  },
  openGraph: {
    title: 'Création de Sites Web Médico-Sociaux & Portails RGAA | DevEvoke',
    description:
      'Sites web modernes, inclusifs et conformes aux normes d’accessibilité RGAA pour les acteurs du médico-social. Présentation claire, espace recrutement et transparence avec les familles.',
    url: 'https://www.devevoke.com/solutions/site-web',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Création de site web médico-social DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SiteWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
