import React from 'react';

export const metadata = {
  title:
    'Contactez DevEvoke pour vos questions sur le développement.',
  description:`Contactez l’équipe de DevEvoke pour toute question ou collaboration en développement web. Nous sommes là pour vous aider à atteindre vos objectifs.`,
 alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
