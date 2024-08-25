import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Loading from '@/app/loading';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import CookieBanner from '@/lib/cookie/cookiebanner';
import { config, headerScripts } from '@/lib/cookie/index.js';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title:
    'DevEvoke : Développement Web & Applications de Qualité Supérieure à Perpignan',
  description:
    "DevEvoke Agence web & mobile experte à Perpignan. Développez votre succès numérique avec des solutions innovantes et intuitives. Sites web | Applications | Logiciels sur mesure 5+ans d'expérience | Code propre & Maintenable | Devis gratuit",

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
      {/*<GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />*/}
      <body className={`${inter.variable} antialiased `}>
        <Navbar />
        <main className={"mx-auto md:container max-w-7xl p-2"}>
          <Suspense fallback={<Loading />}>
            <CookieBanner config={config} headerScripts={headerScripts} />
            {children}
          </Suspense>
        </main>

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
