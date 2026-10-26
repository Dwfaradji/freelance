import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modalités d’Accompagnement et Tarification Médico-Sociale',
  description:
    'Découvrez les modalités de tarification et d’accompagnement DevEvoke pour vos projets de logiciels sur-mesure, applications mobiles nomades et plateformes SaaS médico-sociales.',
  alternates: {
    canonical: 'https://www.devevoke.com/info-tarif',
  },
  openGraph: {
    title: 'Modalités d’Accompagnement et Tarification Médico-Sociale | DevEvoke',
    description:
      'Transparence budgétaire, forfaits et modalités d’accompagnement pour le secteur médico-social.',
    url: 'https://www.devevoke.com/info-tarif',
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
