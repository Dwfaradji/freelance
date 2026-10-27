import React from 'react';

export const metadata = {
  title: 'À Propos de l’Agence & Fondateur',
  description:
    'Découvrez DevEvoke, agence digitale indépendante portée par son fondateur. Conception de sites web, applications mobiles, plateformes SaaS et logiciels métier sur mesure.',
  alternates: {
    canonical: 'https://www.devevoke.com/a-propos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
