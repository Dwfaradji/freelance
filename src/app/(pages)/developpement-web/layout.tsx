import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Web Sur-Mesure & Next.js Perpignan & France',
  description:
    'Création de sites internet haut de gamme, plateformes web réactives et applications métier sur-mesure sous Next.js et React. Performance SEO, ergonomie UX et hébergement sécurisé en France.',
  alternates: {
    canonical: 'https://www.devevoke.com/developpement-web',
  },
  openGraph: {
    title: 'Développement Web Sur-Mesure & Next.js | DevEvoke',
    description:
      'Sites web d’entreprise, plateformes SaaS et intranets métier. Architecture moderne, temps de chargement ultra-rapides et conformité RGPD.',
    url: 'https://www.devevoke.com/developpement-web',
    siteName: 'DevEvoke',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function DeveloppementWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
