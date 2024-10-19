// layout.tsx
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Loading from "@/app/loading";

import AppHead from "@/config/AppHead";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Metadata as NextMetadata } from "next/dist/lib/metadata/types/metadata-interface";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: NextMetadata = {
  title:
    "DevEvoke : Développement Web & Applications de Qualité Supérieure à Perpignan",
  description:
    "DevEvoke Agence web & mobile experte à Perpignan. Développez votre succès numérique avec des solutions innovantes et intuitives.",
  alternates: {
    canonical: "https://www.devevoke.com/"
  }
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
    <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
    <AppHead />
    <body className={`${inter.variable} antialiased`}>
    <Navbar />
    <main className={"mx-auto max-w-7xl p-2 md:container"}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
    <Footer />
    </body>
    </html>
  );
}
