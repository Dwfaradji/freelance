import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande envoyée avec succès',
  description: 'Confirmation de réception de votre demande de devis par l’équipe DevEvoke.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.devevoke.com/devis/confirmation',
  },
};

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
