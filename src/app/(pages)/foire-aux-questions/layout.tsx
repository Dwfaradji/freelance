import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foire Aux Questions (FAQ) | Solutions Digitales & Logiciels Métier',
  description:
    'Retrouvez les réponses aux questions fréquentes sur la conception de logiciels métier, plateformes SaaS, applications mobiles, l’hébergement souverain en France et la conformité RGPD.',
  alternates: {
    canonical: 'https://www.devevoke.com/foire-aux-questions',
  },
  openGraph: {
    title: 'Foire Aux Questions (FAQ) — DevEvoke',
    description:
      'Questions fréquentes sur nos logiciels métiers, plateformes SaaS, applications mobiles et accompagnement numérique sur mesure.',
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
