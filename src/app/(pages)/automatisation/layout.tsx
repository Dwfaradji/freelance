import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisation des Processus Métier & Interopérabilité Médico-Sociale',
  description:
    'Digitalisation des processus métier, suppression des doubles saisies et interopérabilité entre logiciels pour établissements médico-sociaux (ESMS) et associations : synchronisation API, consolidation CPOM et gain de temps administratif.',
  alternates: {
    canonical: 'https://www.devevoke.com/automatisation',
  },
  openGraph: {
    title: 'Automatisation des Processus & Interopérabilité Médico-Sociale | DevEvoke',
    description:
      'Libérez du temps pour l’accompagnement humain : connectez vos outils, supprimez les ressaisies manuelles et automatisez vos bilans d’activité.',
    url: 'https://www.devevoke.com/automatisation',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Automatisation des processus médico-sociaux DevEvoke' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function AutomatisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
