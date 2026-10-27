import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Applications Mobiles iOS & Android Perpignan',
  description:
    'Conception d’applications mobiles professionnelles sous React Native et Expo. Mode hors-ligne (offline-first), ergonomie tactile et intégration système pour équipes terrain et entreprises en Occitanie et toute la France.',
  alternates: {
    canonical: 'https://www.devevoke.com/application-mobile',
  },
  openGraph: {
    title: 'Développement Applications Mobiles iOS & Android | DevEvoke',
    description:
      'Applications mobiles sur-mesure pour professionnels et équipes de terrain. Fonctionnement 100% hors-ligne, synchronisation automatique et sécurité des données.',
    url: 'https://www.devevoke.com/application-mobile',
    siteName: 'DevEvoke',
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
