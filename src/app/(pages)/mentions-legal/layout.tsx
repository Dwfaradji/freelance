import React from 'react';

export const metadata = {
  title: 'Mentions légales - DevEvoke',
  description:
    'Mentions légales du site DevEvoke. Découvrez les informations légales et les conditions d’utilisation de notre site.',
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
