import React from 'react';

export const metadata = {
  title:
    'Plans et tarifs de DevEvoke - Découvrez nos offres de formation en développement web',
  description:
    "Découvrez les plans et tarifs de DevEvoke pour accéder à nos formations en développement web. Choisissez parmi une gamme d'options pour développer vos compétences en programmation et progresser dans votre carrière. Trouvez le plan qui vous convient le mieux et commencez dès aujourd'hui votre parcours vers le succès en développement web.",
  alternates: {
    canonical: 'https://www.devevoke.com/tarifs',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
