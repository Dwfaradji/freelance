import React from 'react';

export const metadata = {
  title: 'Processus de création de site web sur mesure',
  description:
    'Découvrez le processus de création de site web sur mesure. De la conception à la mise en ligne, nous vous accompagnons tout au long de votre projet.',
  alternates: {
    canonical: 'https://www.devevoke.com/info-procedure',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
