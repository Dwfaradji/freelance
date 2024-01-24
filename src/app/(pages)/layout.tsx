import React from "react";
import Navbar from "@/components/sections/NavBar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <Navbar items={[ {title: "Accueil", link: "/", scroll: false }, { title: "Blog", link: "/blog", scroll: false }]} />
      {children}
    </div>
  );
}
