import React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "DevEvoke",
  description:
    "Besoin d'un développeur web freelance expérimenté pour créer votre site web sur mesure ? Faites confiance à notre expertise en développement web et obtenez un site performant, responsive et optimisé pour les moteurs de recherche. Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.",
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
