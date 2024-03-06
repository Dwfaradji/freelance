import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Loading from '@/app/loading';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title:
    'DevEvoke : Développement Web & Applications de Qualité Supérieure à Perpignan',
  description:
    "DevEvoke  Agence web & mobile experte à Perpignan.Développez votre succès numérique avec des solutions innovantes et intuitives. Sites web | Applications | Logiciels sur mesure 5+ans d'expérience | Code propre & Maintenable | Devis gratuit",

  alternates: {
    canonical: 'https://www.devevoke.com/',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="4dfefc65-d4f0-4409-9174-818a0fabf0d5"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
