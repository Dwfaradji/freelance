import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Création & Refonte de Sites Internet et Applications Web Médico-Social',
  description:
    'Création et refonte de sites internet pour associations et établissements médico-sociaux, portails familles et applications web sur-mesure sous Next.js. Accessibilité RGAA, référencement SEO et hébergement souverain en France.',
  alternates: {
    canonical: 'https://www.devevoke.com/developpement-web',
  },
  openGraph: {
    title: 'Création & Refonte de Sites Web et Applications Médico-Sociales | DevEvoke',
    description:
      'Sites internet d’associations et d’ESMS, portails usagers/familles et applications web Next.js. Architecture moderne, SEO et conformité RGPD.',
    url: 'https://www.devevoke.com/developpement-web',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Création de site web et application médico-sociale DevEvoke' }],
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
