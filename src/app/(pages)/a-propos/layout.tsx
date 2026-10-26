import React from 'react';

export const metadata = {
  title: 'À Propos de Notre Agence Digitale Médico-Sociale',
  description:
    'Découvrez l’histoire, les valeurs et la mission de DevEvoke : concevoir des solutions numériques éthiques, ergonomiques et sécurisées pour les acteurs du médico-social.',
  alternates: {
    canonical: 'https://www.devevoke.com/a-propos',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
