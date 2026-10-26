import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foire Aux Questions (FAQ) — Solutions Médico-Sociales',
  description:
    'Retrouvez les réponses aux questions fréquentes sur les solutions logicielles DevEvoke, le déploiement de Floticar, l’hébergement souverain en France et la conformité RGPD.',
  alternates: {
    canonical: 'https://www.devevoke.com/foire-aux-questions',
  },
  openGraph: {
    title: 'Foire Aux Questions (FAQ) — DevEvoke',
    description:
      'Questions fréquentes sur nos logiciels métiers, notre SaaS Floticar de gestion de flotte et nos prestations pour le médico-social.',
    url: 'https://www.devevoke.com/foire-aux-questions',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'FAQ DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
