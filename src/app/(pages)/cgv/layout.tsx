import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV)',
  description:
    'Consultez les Conditions Générales de Vente (CGV) de DevEvoke relatives aux prestations de développement informatique, logiciels métiers et solutions SaaS médico-sociales.',
  alternates: {
    canonical: 'https://www.devevoke.com/cgv',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
