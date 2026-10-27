import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Échange Projet',
  description:
    'Échangez directement avec le fondateur de DevEvoke pour cadrer votre projet de site web, application mobile, plateforme SaaS, logiciel métier ou automatisation.',
  alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
