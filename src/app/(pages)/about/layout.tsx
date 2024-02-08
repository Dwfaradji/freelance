import React from "react";

export const metadata = {
  title: "A propos de Devevoke",
  description:
    " a propos de Devevoke, agence web à Paris. Nous créons des sites web sur mesure pour les entreprises et les particuliers.",
  alternates: {
    canonical: "https://www.devevoke.com/a_propos",
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
