import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transformation Numérique Médico-Social & ESMS (IME, SESSAD, DITEP, EHPAD)',
  description:
    'Accompagnement à la transformation numérique et digitalisation des établissements médico-sociaux (ESMS, IME, SESSAD, DITEP, ESAT, EHPAD) et associations gestionnaires : modernisation des outils métiers, mobilité terrain, sécurité et RGPD.',
  alternates: {
    canonical: 'https://www.devevoke.com/medico-social',
  },
  openGraph: {
    title: 'Transformation Numérique Médico-Social & ESMS | DevEvoke',
    description:
      'Modernisation des processus métiers, applications mobiles hors-ligne et logiciels sur-mesure dédiés aux IME, SESSAD, DITEP, ESAT, EHPAD et associations gestionnaires.',
    url: 'https://www.devevoke.com/medico-social',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Transformation numérique médico-social DevEvoke',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function MedicoSocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
