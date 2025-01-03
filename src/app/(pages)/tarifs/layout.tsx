import React from 'react';

export const metadata = {
  title:
    'Plans et tarifs de DevEvoke - Découvrez nos offres de formation en développement web',
  description:
`Découvrez les services de développement web de DevEvoke. Choisissez parmi nos offres adaptées à vos besoins et lancez votre projet numérique dès aujourd’hui.`,
  alternates: {
    canonical: 'https://www.devevoke.com/tarifs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
