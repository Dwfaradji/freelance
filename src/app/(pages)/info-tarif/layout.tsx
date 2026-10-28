import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modalités d’Accompagnement et Conditions Tarifaires',
  description:
    'Modalités contractuelles de tarification, devis forfaitaires et conditions de règlement de DevEvoke pour les projets numériques et logiciels médico-sociaux.',
  alternates: {
    canonical: 'https://www.devevoke.com/tarifs',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Modalités d’Accompagnement et Tarification | DevEvoke',
    description:
      'Transparence budgétaire, forfaits et modalités d’accompagnement pour le secteur médico-social.',
    url: 'https://www.devevoke.com/tarifs',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Tarifs DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function PriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
