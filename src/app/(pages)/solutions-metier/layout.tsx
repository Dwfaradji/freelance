import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logiciel Sur-Mesure Médico-Social & Outils Internes (Remplacement Excel)',
  description:
    'Développement de logiciels sur-mesure et d’outils internes pour établissements médico-sociaux (ESMS) et associations : remplacement des fichiers Excel dispersés, centralisation des données et tableaux de bord de direction.',
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-metier',
  },
  openGraph: {
    title: 'Logiciel Sur-Mesure Médico-Social & Outils Internes | DevEvoke',
    description:
      'Fini les tableurs Excel dispersés et les progiciels rigides. Concevez un outil interne calqué sur les pratiques réelles de vos équipes avec DevEvoke.',
    url: 'https://www.devevoke.com/solutions-metier',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Logiciels métier sur-mesure DevEvoke' }],
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
