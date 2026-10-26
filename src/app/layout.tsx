// layout.tsx
import React, { Suspense } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk-var',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: NextMetadata = {
  metadataBase: new URL('https://www.devevoke.com'),
  title: {
    default: 'DevEvoke | Agence digitale spécialisée dans le médico-social',
    template: '%s | DevEvoke',
  },
  description:
    'DevEvoke conçoit des solutions numériques pour les structures médico-sociales : sites web, applications, logiciels métier, SaaS et outils sur mesure.',
  keywords: [
    'Agence digitale médico-social',
    'Agence digitale spécialisée médico-social',
    'Agence web médico-social',
    'Transformation numérique médico-social',
    'Digitalisation médico-social',
    'Solutions numériques médico-sociales',
    'Logiciel médico-social',
    'Logiciel sur mesure médico-social',
    'Développement logiciel médico-social',
    'Application médico-sociale',
    'Application web sur mesure',
    'Application mobile sur mesure',
    'Logiciel métier médico-social',
    'SaaS médico-social',
    'Automatisation médico-social',
    'Outil numérique médico-social',
    'Conformité RGPD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/',
  },
  openGraph: {
    title: 'DevEvoke | Agence Digitale Médico-Social & Solutions Numériques',
    description:
      'Solutions numériques, logiciels métiers et applications web/mobiles pour les associations et établissements médico-sociaux en France.',
    url: 'https://www.devevoke.com/',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'DevEvoke - Agence Digitale Médico-Social',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevEvoke | Agence Digitale Spécialisée Médico-Social',
    description:
      'Solutions logicielles, SaaS de gestion de flotte et applications pour le médico-social.',
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
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.devevoke.com/#organization',
        name: 'DevEvoke',
        url: 'https://www.devevoke.com',
        logo: 'https://www.devevoke.com/icon.png',
        description:
          'Agence digitale française spécialisée dans la conception de solutions numériques, logiciels métiers et outils SaaS pour le secteur médico-social et de la santé.',
        sameAs: [
          'https://www.linkedin.com/company/devevoke/',
          'https://twitter.com/DevEvoke',
          'https://github.com/Dwfaradji',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'contact@devevoke.com',
          availableLanguage: ['French'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.devevoke.com/#website',
        url: 'https://www.devevoke.com',
        name: 'DevEvoke',
        publisher: {
          '@id': 'https://www.devevoke.com/#organization',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.devevoke.com/#localbusiness',
        name: 'DevEvoke',
        image: 'https://www.devevoke.com/icon.png',
        description:
          'Agence digitale spécialisée dans les solutions numériques médico-sociales, développement de logiciels métiers et applications web/mobiles.',
        url: 'https://www.devevoke.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Perpignan',
          addressRegion: 'Occitanie',
          postalCode: '66000',
          addressCountry: 'FR',
        },
        priceRange: '€€€',
      },
    ],
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen antialiased selection:bg-sky-500/30 selection:text-white`}>
        {/* Lien d'accès rapide (Skip Link) pour l'accessibilité RGAA / WCAG */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-primary-500 focus:text-white focus:font-semibold focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Aller au contenu principal
        </a>
        <MyProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 outline-none">
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
