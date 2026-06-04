import React from 'react';

export const metadata = {
  title: 'À propos de DevEvoke - Découvrez notre histoire et notre mission',
  description:
    'DevEvoke : expert en développement web. Découvrez notre histoire, équipe passionnée et mission : fournir des solutions innovantes pour PME, TPE et start-ups.',
  alternates: {
    canonical: 'https://www.devevoke.com/a-propos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
