import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Numériques Médico-Social | IME, SESSAD, ESAT, EHPAD',
  description:
    'Solutions numériques sur-mesure pour établissements et associations médico-sociales : logiciels métiers, applications mobiles hors-ligne (SESSAD) et dématérialisation. Hébergement souverain sécurisé en France et conformité RGPD rigoureuse.',
  alternates: {
    canonical: 'https://www.devevoke.com/medico-social',
  },
  openGraph: {
    title: 'Solutions Numériques Médico-Social & Associatif | DevEvoke',
    description:
      'L’ingénierie logicielle au service de l’humain. Découvrez nos solutions dédiées aux IME, SESSAD, ESAT, EHPAD, FAM, MAS et associations gestionnaires.',
    url: 'https://www.devevoke.com/medico-social',
    siteName: 'DevEvoke',
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
