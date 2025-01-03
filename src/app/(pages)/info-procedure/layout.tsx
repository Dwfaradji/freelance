import React from 'react';

export const metadata = {
  title: 'Processus de création de site web sur mesure',
  description:
`Découvrez notre processus de création de site web sur mesure. De la conception à la mise en ligne, nous vous accompagnons à chaque étape de votre projet.`,
  alternates: {
    canonical: 'https://www.devevoke.com/info-procedure',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
