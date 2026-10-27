import React, { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande de Devis Personnalisé | DevEvoke',
  description: 'Formulaire de cadrage et demande de devis pour votre projet numérique médico-social.',
  robots: {
    index: false,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={null}>{children}</Suspense>
  );
};

export default RootLayout;
