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
import FloatingQuickNav from '@/components/ui/FloatingQuickNav';

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
});

export const metadata: NextMetadata = {
  metadataBase: new URL('https://www.devevoke.com'),
  title: {
    default: 'DevEvoke | Agence digitale & solutions métier sur-mesure',
    template: '%s | DevEvoke',
  },
  description:
    'DevEvoke conçoit des solutions digitales pensées pour votre métier : développement web Next.js, applications mobiles nomades, plateformes SaaS, logiciels sur-mesure et automatisation. Basée à Perpignan (Occitanie & toute la France).',
  keywords: [
    'Agence digitale Perpignan',
    'Agence digitale Occitanie',
    'Développement web sur-mesure',
    'Solutions métier sur-mesure',
    'Logiciel métier sur-mesure',
    'Développement application mobile',
    'Conception plateforme SaaS',
    'Automatisation des processus',
    'Agence Next.js France',
    'Solutions médico-social',
    'Hébergement souverain France',
    'Boucif Faradji',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/',
  },
  openGraph: {
    title: 'DevEvoke | Agence Digitale & Solutions Métier Sur-Mesure',
    description:
      'Des solutions digitales pensées pour votre métier : logiciels sur-mesure, applications mobiles nomades, plateformes SaaS et automatisation.',
    url: 'https://www.devevoke.com/',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'DevEvoke - Agence Digitale & Solutions Métier',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevEvoke | Agence Digitale & Solutions Métier Sur-Mesure',
    description:
      'Logiciels sur-mesure, développement web Next.js, applications mobiles et plateformes SaaS pour entreprises et organisations.',
    images: ['/icon.png'],
  },
};

export const viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
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
          'Agence digitale française spécialisée dans la conception de solutions logicielles et numériques sur-mesure : développement web Next.js, applications mobiles, plateformes SaaS et automatisation.',
        founder: {
          '@type': 'Person',
          name: 'Boucif Faradji',
          jobTitle: 'Fondateur & Développeur Full-Stack',
        },
        sameAs: [
          'https://www.linkedin.com/company/devevoke/',
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
          'Agence digitale à Perpignan spécialisée dans le développement web Next.js, applications mobiles, plateformes SaaS et logiciels métiers sur-mesure.',
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
          <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl w-full outline-none">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <FloatingQuickNav />
        </MyProvider>
      </body>
    </html>
  );
}
