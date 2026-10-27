import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logiciels Métier Sur-Mesure & Outils Internes',
  description:
    'Conception de logiciels métier sur-mesure, portails de gestion internes et remplacement de tableurs Excel fragmentés. Centralisation des données opérationnelles, traçabilité et tableaux de bord décisionnels en Occitanie et France entière.',
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-metier',
  },
  openGraph: {
    title: 'Logiciels Métier Sur-Mesure & Outils Internes | DevEvoke',
    description:
      'Fini les tableurs Excel dispersés et les progiciels rigides. Concevez un logiciel calqué sur vos règles métiers réelles avec DevEvoke.',
    url: 'https://www.devevoke.com/solutions-metier',
    siteName: 'DevEvoke',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsMetierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
