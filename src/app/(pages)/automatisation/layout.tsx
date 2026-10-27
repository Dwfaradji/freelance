import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisation des Processus & Suppression Double Saisie',
  description:
    'Automatisation de processus métier, suppression des doubles saisies et synchronisation de données via API. Génération automatique de bilans, alertes intelligentes et gain de temps administratif en Occitanie et toute la France.',
  alternates: {
    canonical: 'https://www.devevoke.com/automatisation',
  },
  openGraph: {
    title: 'Automatisation des Processus & Suppression Double Saisie | DevEvoke',
    description:
      'Gagnez des heures chaque semaine : connectez vos outils, supprimez les saisies manuelles et automatisez vos flux administratifs avec DevEvoke.',
    url: 'https://www.devevoke.com/automatisation',
    siteName: 'DevEvoke',
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
