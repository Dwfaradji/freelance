import React, { Suspense } from "react";

import Home from "@/app/(pages)/home/home";
import Navbar from "@/components/sections/NavBar/NavBar";
import { navItems } from "@/data/data";
import Loading from "@/app/loading";
import FonctionSlide from "@/components/sections/siteVitrine/fonctionSlide";

const Page = () => {
  return (
    <main>
      <Navbar items={navItems} />
      <Home />
    </main>
  );
};

export default Page;
