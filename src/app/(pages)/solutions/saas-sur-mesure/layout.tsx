import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plateformes SaaS Médico-Sociales Multi-Établissements | DevEvoke',
  description:
    'Conception et développement de plateformes SaaS sur-mesure pour associations gestionnaires et réseaux médico-sociaux. Centralisation multi-sites, gouvernance unifiée et évolutivité cloud souverain.',
  keywords: [
    'saas médico-social',
    'plateforme web multi établissements',
    'logiciel saas association gestionnaire handicap',
    'développement saas médico-social',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/saas-sur-mesure',
  },
  openGraph: {
    title: 'Plateformes SaaS Médico-Sociales Multi-Établissements | DevEvoke',
    description:
      'Créez votre propre plateforme SaaS dédiée aux besoins spécifiques de vos établissements. Mutualisation, sécurité et déploiement souverain.',
    url: 'https://www.devevoke.com/solutions/saas-sur-mesure',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Plateforme SaaS médico-sociale DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SaasSurMesureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
