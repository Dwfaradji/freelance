// layout.tsx
import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import PageTransition from '@/components/ui/PageTransition';
import { MyProvider } from '@/context/context';
import { Metadata as NextMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import AppHead from '@/config/AppHead';

import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-var',
  display: 'swap',
});

export const metadata: NextMetadata = {
  metadataBase: new URL('https://www.devevoke.com'),
  title: 'DevEvoke | Agence Digital Santé & Logiciels Médico-Sociaux',
  description: 'Agence experte en développement de logiciels et applications e-santé sur-mesure. Solutions sécurisées, hébergement HDS et conformité stricte au RGPD pour le secteur médico-social.',
  keywords: ['Agence digitale santé', 'Logiciel EHPAD', 'Application e-santé', 'Hébergement HDS', 'Développement médico-social', 'Editeur logiciel santé', 'DevEvoke'],
  alternates: {
    canonical: 'https://www.devevoke.com/',
  },
  openGraph: {
    title: 'DevEvoke | Agence Digital Santé & Médico-Social',
    description: 'Expertise technologique et développement sur-mesure pour les acteurs de la santé.',
    url: 'https://www.devevoke.com/',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png', // The dynamic high-res icon
        width: 800,
        height: 600,
        alt: 'DevEvoke Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevEvoke | Agence Digital Santé',
    description: 'Agence experte en création de logiciels santé et médico-sociaux.',
    images: ['/icon.png'],
  },
};

export const viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DevEvoke',
    image: 'https://www.devevoke.com/icon.png',
    description: 'Agence digitale spécialisée en e-santé, développement d\'applications médico-sociales et hébergement HDS.',
    url: 'https://www.devevoke.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Perpignan',
      addressCountry: 'FR',
    },
    priceRange: '€€€',
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
      <AppHead />
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <MyProvider>
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </MyProvider>
      </body>
    </html>
  );
}
