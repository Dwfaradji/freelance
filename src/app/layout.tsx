import React, { Suspense } from "react";
import Script from "next/script";
import Footer from "../components/sections/Footer/Footer";
import "./globals.scss";
import GoogleAnalytics from "../lib/GoogleAnalytics";
import { Inter } from "next/font/google";
import "./globals.scss";
import Loading from "@/app/loading";


export const metadata = {
  title: "DevEvoke : Développement Web & Applications de Qualité Supérieure à Perpignan",
  description:
     "DevEvoke  Agence web & mobile experte à Perpignan.Développez votre succès numérique avec des solutions innovantes et intuitives. Sites web | Applications | Logiciels sur mesure 5+ans d'expérience | Code propre & Maintenable | Devis gratuit",

  alternates: {
    canonical: "https://www.devevoke.com/",
    languages: {
      fr: "https://www.devevoke.com/",
    },
  },
  robots: {
    follow: true,
    index: true,
  },

  // openGraph: {
  //   url: "https://www.devevoke.com/",
  //   title: "Sites web sur mesure par un développeur web freelance expérimenté",
  //   description :
  //   "Besoin d'un développeur web freelance expérimenté ? Obtenez un site performant, responsive et optimisé pour les moteurs de recherche. Contactez-nous dès maintenant pour bénéficier d'une solution sur mesure, créée selon vos besoins et attirer davantage de visiteurs.",
  //   images: [
  //     {
  //       url: "https://www.devevoke.com/images/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Og Image Alt",
  //     },
  //   ],
  // },
};
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Script
        strategy="lazyOnload"
        src="https://kit.fontawesome.com/53013b6bdc.js"
        crossOrigin="anonymous"
      ></Script>
      <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
      <body className={inter.variable}>
        {/*<Navbar items={navItems} />*/}
        {/*{children}*/}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
