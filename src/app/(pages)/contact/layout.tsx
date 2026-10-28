import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Demande de Devis : Projet Web ou Logiciel Médico-Social',
  description:
    'Échangez directement avec le fondateur de DevEvoke pour cadrer votre projet de création ou refonte de site web, application mobile, logiciel métier sur-mesure ou automatisation pour votre établissement médico-social ou association.',
  alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
  openGraph: {
    title: 'Contact & Devis Projet Numérique Médico-Social | DevEvoke',
    description:
      'Présentez votre besoin de développement logiciel, d’application web/mobile ou de refonte de site à DevEvoke. Réponse sous 24h à 48h.',
    url: 'https://www.devevoke.com/contact',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Contacter DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
