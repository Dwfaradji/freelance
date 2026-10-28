import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description:
    'Mentions légales du site DevEvoke : informations sur l’éditeur Boucif Faradji, l’hébergement souverain en France, la propriété intellectuelle et les conditions d’utilisation.',
  alternates: {
    canonical: 'https://www.devevoke.com/mentions-legal',
  },
};

export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
