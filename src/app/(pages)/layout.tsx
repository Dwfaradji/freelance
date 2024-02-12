import React, { Suspense } from "react";
import Navbar from "@/components/sections/NavBar/NavBar";
import Loading from "@/app/loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar
        items={[
          { title: "Accueil", link: "/", scroll: false },
          { title: "Blog", link: "/blog", scroll: false },
        ]}
      />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
