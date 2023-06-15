import React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title:
    "Services de développement web freelance de qualité - Votre partenaire pour des solutions numériques sur mesure",
  description:
    "Besoin d'un développeur web freelance expérimenté ? Obtenez un site performant, responsive et optimisé pour les moteurs de recherche. Contactez-nous dès maintenant pour un site sur mesure.",
  alternates: {
    canonical: "https://www.devevoke.com/",
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
