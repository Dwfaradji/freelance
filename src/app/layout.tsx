import React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Sites web sur mesure par un développeur web expérimenté et passionné",
  description:
    "Besoin d'un développeur web freelance expérimenté ? Obtenez un site performant, responsive et optimisé pour les moteurs de recherche. Contactez-nous dès maintenant pour bénéficier d'un site sur mesure, créé selon vos besoins spécifiques.",
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

  openGraph: {
    url: "https://www.devevoke.com/",
    title: "Sites web sur mesure par un développeur web freelance expérimenté",
    description:
      "Besoin d'un développeur web freelance expérimenté ? Obtenez un site performant, responsive et optimisé pour les moteurs de recherche. Contactez-nous dès maintenant pour bénéficier d'une solution sur mesure, créée selon vos besoins et attirer davantage de visiteurs.",
    images: [
      {
        url: "https://www.devevoke.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <Script
        strategy="lazyOnload"
        src="https://kit.fontawesome.com/53013b6bdc.js"
        crossOrigin="anonymous"
      ></Script>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
