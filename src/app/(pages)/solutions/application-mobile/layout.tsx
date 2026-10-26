import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications Mobiles Terrain Médico-Sociales (SESSAD, SAVS) | DevEvoke',
  description:
    'Applications mobiles et tablettes pour professionnels médico-sociaux nomades (SESSAD, SAVS, SAMSAH). Fonctionnement hors-ligne, comptes-rendus d’interventions rapides et synchronisation sécurisée.',
  keywords: [
    'application mobile médico-social',
    'application mobile sessad savs samsah',
    'application éducateurs nomades',
    'outil mobile hors ligne médico social',
    'tablette éducateur spécialisé tournée',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/application-mobile',
  },
  openGraph: {
    title: 'Applications Mobiles Terrain pour Équipes Nomades | DevEvoke',
    description:
      'Conception d’applications tactiles hors-ligne pour les éducateurs et professionnels itinérants du médico-social. Moins de ressaisie, plus de temps auprès des personnes accompagnées.',
    url: 'https://www.devevoke.com/solutions/application-mobile',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Application mobile médico-sociale DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ApplicationMobileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
