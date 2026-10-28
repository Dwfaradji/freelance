import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarifs, Forfaits & Devis : Développement Logiciel et Web Médico-Social',
  description:
    'Consultez les formules d’accompagnement, forfaits projets et modalités de devis sur-mesure de DevEvoke pour la création de sites web, applications mobiles et logiciels métiers pour établissements médico-sociaux et associations.',
  alternates: {
    canonical: 'https://www.devevoke.com/tarifs',
  },
  openGraph: {
    title: 'Tarifs, Forfaits & Devis Sur-Mesure Médico-Social | DevEvoke',
    description:
      'Modalités d’accompagnement transparentes pour la conception de sites web, applications et logiciels métiers médico-sociaux.',
    url: 'https://www.devevoke.com/tarifs',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Tarifs et forfaits DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
