// layout.tsx
import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Loading from '@/app/loading';

import AppHead from '@/config/AppHead';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Metadata as NextMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import GoogleAnalytics from '@/lib/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: NextMetadata = {
  title: 'Agence Web & Mobile à Perpignan – Sites et Applications sur Mesure',
  description:
    'DevEvoke, votre agence experte en développement web et mobile à Perpignan. Boostez votre présence numérique avec des solutions sur mesure, performantes et innovantes.',
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className={'mx-auto max-w-7xl p-2 md:container'}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
