import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications Web & Espaces Métier Médico-Sociaux | DevEvoke',
  description:
    'Développement d’applications web sécurisées et d’espaces professionnels pour structures médico-sociales. Coordination des équipes, partage de plannings et centralisation administrative.',
  keywords: [
    'application web médico-social',
    'espace professionnel médico-social',
    'intranet ehpad ime sessad',
    'plateforme web coordination médico-sociale',
    'portail collaboratif secteur social',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/application-web',
  },
  openGraph: {
    title: 'Applications Web & Espaces Métier Médico-Sociaux | DevEvoke',
    description:
      'Portails collaboratifs, plannings partagés et outils de liaison sécurisés accessibles sur tout navigateur pour les professionnels du médico-social.',
    url: 'https://www.devevoke.com/solutions/application-web',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Applications web médico-sociales DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ApplicationWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
