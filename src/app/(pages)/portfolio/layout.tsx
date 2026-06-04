import React from 'react';

export const metadata = {
  title:
    'Projets de développement web par DevEvoke - Découvrez notre portfolio',
  description:
`Découvrez les projets réalisés par DevEvoke. Explorez notre portfolio et voyez comment nous pouvons concrétiser vos idées avec nos solutions sur mesure.`,
  alternates: {
    canonical: 'https://www.devevoke.com/portfolio',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
