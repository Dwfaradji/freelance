import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisation & Dématérialisation Médico-Sociale | DevEvoke',
  description:
    'Solutions d’automatisation des tâches administratives et dématérialisation des processus pour le secteur médico-social. Fin des doubles saisies, exports automatisés et synchronisation d’outils.',
  keywords: [
    'automatisation médico-social',
    'dématérialisation processus médico-social',
    'suppression double saisie ime ehpad',
    'synchronisation api médico-sociale',
    'gain de temps administratif médico-social',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions/automatisation',
  },
  openGraph: {
    title: 'Automatisation & Dématérialisation Médico-Sociale | DevEvoke',
    description:
      'Automatisez la génération de rapports, synchronisez vos logiciels et supprimez la saisie répétitive pour libérer du temps aux équipes médico-sociales.',
    url: 'https://www.devevoke.com/solutions/automatisation',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Automatisation médico-sociale DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function AutomatisationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
