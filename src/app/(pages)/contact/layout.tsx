import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez Nos Experts en Digitalisation Médico-Social & E-Santé',
  description:
    'Prenez contact avec les experts DevEvoke pour échanger sur la digitalisation de votre établissement médico-social, vos besoins logiciels ou une démonstration de Floticar.',
  alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
