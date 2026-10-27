import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement SaaS & Logiciels Cloud Sur-Mesure',
  description:
    'Conception et développement de plateformes SaaS multi-tenants, applications cloud B2B et architectures scalables sous Next.js et PostgreSQL. Gestion des abonnements Stripe, authentification RBAC et hébergement souverain.',
  alternates: {
    canonical: 'https://www.devevoke.com/developpement-saas',
  },
  openGraph: {
    title: 'Développement SaaS & Logiciels Cloud Sur-Mesure | DevEvoke',
    description:
      'Créez votre propre plateforme SaaS : multi-tenant sécurisé, facturation récurrente Stripe, API REST et architecture cloud moderne.',
    url: 'https://www.devevoke.com/developpement-saas',
    siteName: 'DevEvoke',
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
