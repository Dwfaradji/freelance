import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services & Solutions Numériques',
  description:
    'Découvrez les services d’ingénierie logicielle de DevEvoke : développement web sur-mesure, applications mobiles, plateformes SaaS, logiciels métier et automatisation des processus.',
  alternates: {
    canonical: 'https://www.devevoke.com/services',
  },
  openGraph: {
    title: 'Services & Solutions Numériques | DevEvoke',
    description:
      'Solutions numériques, plateformes SaaS et logiciels métier sur mesure pour entreprises et organisations.',
    url: 'https://www.devevoke.com/services',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
