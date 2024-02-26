import React from "react";

export const metadata = {
  title: "tarifs de création de site web sur mesure",
  description: "Découvrez nos tarifs de création de site web sur mesure. De la conception à la mise en ligne, nous vous accompagnons tout au long de votre projet.",
  alternates: {
    canonical: "https://www.devevoke.com/info-tarif/",
    languages: {
      fr: "https://www.devevoke.com/"
    }
  },
  robots: {
    follow: true,
    index: true
  }
};

export default function PriceLayout({
                                      children
                                    }: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
