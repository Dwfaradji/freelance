import React from 'react';

export const metadata = {
  title:
    'Actualités et conseils en dev web sur le blog de DevEvoke',
  description:
    'Découvrez des articles, tutoriels et conseils sur le développement web, la programmation et les dernières tendances technologiques sur le blog de DevEvoke.',
  alternates: {
    canonical: 'https://www.devevoke.com/blog',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
