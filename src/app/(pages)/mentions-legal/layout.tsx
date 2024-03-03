import React from 'react';

export const metadata = {
  title: 'Mentions légales - DevEvoke',
  description:
    'Mentions légales du site DevEvoke. Découvrez les mentions légales du site DevEvoke.',
  alternates: {
    canonical: 'https://www.devevoke.com/mentions-legal',
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
