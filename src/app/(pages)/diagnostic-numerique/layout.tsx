import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diagnostic Numérique Médico-Social Gratuit | Évaluez votre structure',
  description:
    'Évaluez en 3 minutes la maturité numérique de votre établissement ou association médico-sociale (IME, SESSAD, ESAT, EHPAD). Obtenez un score précis, une analyse de vos risques et des recommandations concrètes.',
  alternates: {
    canonical: 'https://www.devevoke.com/diagnostic-numerique',
  },
  openGraph: {
    title: 'Diagnostic Numérique Médico-Social Gratuit | DevEvoke',
    description:
      'Mesurez la maturité digitale de votre structure médico-sociale et découvrez comment supprimer la double saisie et fluidifier vos processus métiers.',
    url: 'https://www.devevoke.com/diagnostic-numerique',
    type: 'website',
  },
};

export default function DiagnosticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
