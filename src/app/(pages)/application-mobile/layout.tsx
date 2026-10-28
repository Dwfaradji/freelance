import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Application Mobile Médico-Social & Équipes Terrain',
  description:
    'Conception d’applications mobiles iOS et Android sur-mesure (React Native, PWA) pour le secteur médico-social : mode hors-ligne garanti pour SESSAD, éducateurs spécialisés, intervenants à domicile et équipes mobiles.',
  alternates: {
    canonical: 'https://www.devevoke.com/application-mobile',
  },
  openGraph: {
    title: 'Développement Application Mobile Médico-Social & Terrain | DevEvoke',
    description:
      'Applications mobiles sur-mesure pour professionnels médico-sociaux et équipes en tournée. Fonctionnement 100% hors-ligne, synchronisation automatique et conformité RGPD.',
    url: 'https://www.devevoke.com/application-mobile',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Application mobile médico-sociale hors-ligne DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ApplicationMobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
