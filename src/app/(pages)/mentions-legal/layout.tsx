import React from "react";
import "@/app/Styles/globals.scss";

export const metadata = {
  title: "Mentions légales - DevEvoke",
  description:
    "Mentions légales du site DevEvoke. Découvrez les mentions légales du site DevEvoke.",
  alternates: {
    canonical: "https://www.devevoke.com/mentions-legal",
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
