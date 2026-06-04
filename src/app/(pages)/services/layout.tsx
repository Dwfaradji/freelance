import React from 'react';

export const metadata = {
  title:
    'Découvrez les services de développement de DevEvoke.',
  description: `Explorez nos services de développement web, mobile et SaaS sur mesure pour les PME, TPE et start-ups. Faites passer vos projets au niveau supérieur.`,
  alternates: {
    canonical: 'https://www.devevoke.com/services',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
