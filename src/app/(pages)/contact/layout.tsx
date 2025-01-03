import React from 'react';

export const metadata = {
  title:
    'Contactez DevEvoke - Nous sommes là pour répondre à toutes vos questions sur le développement web',
  description:`Contactez l’équipe de DevEvoke pour toute question ou collaboration en développement web. Nous sommes là pour vous aider à atteindre vos objectifs.`,
 alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
