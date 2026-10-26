import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demander une démonstration | Floticar & Solutions Médico-Sociales',
  description:
    'Réservez une démonstration en direct (30 min) de Floticar ou de nos logiciels métiers pour associations médico-sociales. Échangez avec un architecte logiciel spécialisé.',
  alternates: {
    canonical: 'https://www.devevoke.com/demande-demo',
  },
  openGraph: {
    title: 'Démonstration Floticar & Logiciels Médico-Sociaux | DevEvoke',
    description:
      'Découvrez en visioconférence comment simplifier la gestion de votre flotte et automatiser vos processus administratifs.',
    url: 'https://www.devevoke.com/demande-demo',
    type: 'website',
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
