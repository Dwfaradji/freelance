import React from 'react';

export const metadata = {
  title:
    'Découvrez les dernières actualités et conseils en développement web sur le blog de DevEvoke',
  description:
    'Explorez notre blog pour trouver des articles informatifs, des tutoriels et des conseils sur le développement web, la programmation et les dernières tendances technologiques. Restez à jour avec les dernières actualités et astuces pour améliorer vos compétences en développement.',
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
