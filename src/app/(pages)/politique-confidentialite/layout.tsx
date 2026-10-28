import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & Protection des Données (RGPD)',
  description:
    'Politique de confidentialité de DevEvoke : engagements RGPD, hébergement souverain en France, finalités de collecte des formulaires et exercice des droits informatiques et libertés.',
  alternates: {
    canonical: 'https://www.devevoke.com/politique-confidentialite',
  },
  robots: {
    follow: true,
    index: true,
  },
};
export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
