// layout.tsx

import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Loading from '@/app/loading';
import { Metadata as NextMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import AppHead from '@/config/AppHead';

import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: NextMetadata = {
  title: 'Agence Web & Mobile à Perpignan – Sites et Applications sur Mesure',
  description:
    'DevEvoke, agence web à Perpignan. Offrez à votre entreprise des solutions innovantes, sur mesure et performantes pour réussir votre transformation numérique.',
  alternates: {
    canonical: 'https://www.devevoke.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
      <AppHead />
      <body className={`${inter.variable} size-full antialiased`}>
        <Navbar />
        <main className={'mx-auto max-w-7xl p-2 md:container'}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
