import React from 'react';

export const metadata = {
  title: 'À propos de DevEvoke - Découvrez notre histoire et notre mission',
  description:
    'Découvrez qui nous sommes et ce que nous faisons chez DevEvoke. Explorez notre histoire, notre équipe et notre mission pour vous fournir les meilleures ressources en développement web et en programmation',
  alternates: {
    canonical: 'https://www.devevoke.com/a-propos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
