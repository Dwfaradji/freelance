import React from "react";
import "@/app/Styles/globals.scss";

export const metadata = {
  title: "processus de création de site web sur mesure",
  description:
    "Découvrez le processus de création de site web sur mesure. De la conception à la mise en ligne, nous vous accompagnons tout au long de votre projet.",
  alternates: {
    canonical: "https://www.devevoke.com/info-procedure",
    languages: {
      fr: "https://www.devevoke.com/",
    },
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
