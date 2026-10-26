import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Processus d’Accompagnement & Méthodologie Médico-Sociale',
  description:
    'Découvrez la méthodologie de réalisation DevEvoke pour le secteur médico-social : immersion terrain, co-conception UX, développement agile et hébergement souverain en France.',
  alternates: {
    canonical: 'https://www.devevoke.com/info-procedure',
  },
  openGraph: {
    title: 'Processus d’Accompagnement & Méthodologie Médico-Sociale | DevEvoke',
    description:
      'Notre méthode structurée pour concevoir vos logiciels métiers et applications médico-sociales en toute sérénité.',
    url: 'https://www.devevoke.com/info-procedure',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Méthodologie DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
