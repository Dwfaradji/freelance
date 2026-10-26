import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Numériques Médico-Social | DevEvoke',
  description:
    'Découvrez les solutions numériques développées par DevEvoke pour le secteur médico-social : sites web accessibles, applications web, apps mobiles terrain, logiciels métier sur-mesure, SaaS et automatisation.',
  keywords: [
    'solutions numériques médico-social',
    'logiciel médico-social sur-mesure',
    'site web accessible rgaa ime ehpad',
    'application mobile sessad éducateurs',
    'saas médico-social',
    'automatisation médico-social',
    'transformation digitale médico-sociale',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions',
  },
  openGraph: {
    title: 'Solutions Numériques sur-mesure pour le Médico-Social | DevEvoke',
    description:
      'Sites web, applications web & mobiles, logiciels métier et outils internes adaptés aux exigences des IME, SESSAD, ESAT, EHPAD et associations gestionnaires.',
    url: 'https://www.devevoke.com/solutions',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions numériques DevEvoke médico-social' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
