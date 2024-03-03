import React from 'react';

export const metadata = {
  title:
    'Projets de développement web par DevEvoke - Découvrez notre portfolio',
  description:
    "Découvrez les projets de développement web réalisés par DevEvoke. Explorez notre portfolio pour voir nos réalisations et découvrez comment nous pouvons vous aider à concrétiser vos idées. Que vous ayez besoin d'un site web, d'une application web ou d'autres solutions numériques, nous avons l'expertise pour vous accompagner dans votre réussite en ligne.",
  alternates: {
    canonical: 'https://www.devevoke.com/portfolio',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
