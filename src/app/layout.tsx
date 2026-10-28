// layout.tsx
import React from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import PageTransition from '@/components/ui/PageTransition';
import { Metadata as NextMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import AppHead from '@/config/AppHead';
import FloatingQuickNav from '@/components/ui/FloatingQuickNav';

import './globals.css';

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
    default:
      'DevEvoke | Solutions Digitales & Développement Sur-Mesure pour le Médico-Social',
    template: '%s | DevEvoke',
  },
  description:
    'Agence digitale spécialisée dans les solutions numériques pour le secteur médico-social : logiciels métiers sur-mesure, applications web et mobiles, plateformes SaaS, création et refonte de sites pour ESMS, associations, IME, SESSAD, DITEP, ESAT et EHPAD.',
  keywords: [
    'agence digitale médico-social',
    'agence web médico-social',
    'solutions digitales médico-social',
    'développement logiciel médico-social',
    'logiciel sur mesure médico-social',
    'application web ESMS',
    'application mobile médico-social',
    'transformation numérique médico-social',
    'création site internet médico-social',
    'automatisation processus médico-social',
    'hébergement souverain France RGPD',
    'Boucif Faradji',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com',
  },
  openGraph: {
    title:
      'DevEvoke | Solutions Digitales & Logiciels Sur-Mesure pour le Médico-Social',
    description:
      'Conception de logiciels métiers, applications web et mobiles, plateformes SaaS et sites internet pour les établissements et associations du secteur médico-social.',
    url: 'https://www.devevoke.com',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'DevEvoke - Solutions digitales et développement sur-mesure pour le médico-social',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'DevEvoke | Solutions Digitales & Développement Sur-Mesure Médico-Social',
    description:
      'Logiciels métiers sur-mesure, applications web et mobiles, SaaS et automatisation pour ESMS, associations gestionnaires, IME, SESSAD, DITEP, ESAT et EHPAD.',
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
          'Agence digitale française spécialisée dans la conception de solutions numériques et le développement sur-mesure pour le secteur médico-social (ESMS, associations gestionnaires, IME, SESSAD, DITEP, ESAT, EHPAD) : logiciels métiers, applications web et mobiles, plateformes SaaS et automatisation.',
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
          'Agence digitale basée à Perpignan (Occitanie) accompagnant les établissements médico-sociaux, associations et organisations partout en France dans le développement web Next.js, les applications mobiles, les plateformes SaaS et les logiciels métiers sur-mesure.',
        url: 'https://www.devevoke.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Perpignan',
          addressRegion: 'Occitanie',
          postalCode: '66000',
          addressCountry: 'FR',
        },
        areaServed: {
          '@type': 'Country',
          name: 'France',
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
        <Navbar />
        <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl w-full outline-none">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatingQuickNav />
      </body>
    </html>
  );
}
