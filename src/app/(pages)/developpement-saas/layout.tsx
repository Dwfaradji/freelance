import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement SaaS Médico-Social & Plateformes Cloud Multi-Structures',
  description:
    'Conception et développement de plateformes SaaS sur-mesure et logiciels cloud multi-établissements pour le secteur médico-social et associatif : cloisonnement des données, gestion fine des droits (RBAC) et hébergement souverain en France.',
  alternates: {
    canonical: 'https://www.devevoke.com/developpement-saas',
  },
  openGraph: {
    title: 'Développement SaaS Médico-Social & Plateformes Multi-Structures | DevEvoke',
    description:
      'Conception de plateformes SaaS sécurisées pour associations gestionnaires, fédérations et porteurs de projets numériques médico-sociaux.',
    url: 'https://www.devevoke.com/developpement-saas',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Développement SaaS médico-social sur-mesure DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function DeveloppementSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
