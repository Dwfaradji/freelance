import React from 'react';

export const metadata = {
  title: 'Tarifs de création de site web sur mesure',
  description:
    'Découvrez nos tarifs de création de site web sur mesure. De la conception à la mise en ligne, nous vous accompagnons tout au long de votre projet.',
  alternates: {
    canonical: 'https://www.devevoke.com/info-tarif',
  },
};

export default function PriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
