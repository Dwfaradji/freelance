import React from "react";

import Home from "@/app/(pages)/home/home";
import Navbar from "@/components/sections/NavBar/NavBar";
import { navItems } from "@/data/data";

const Page = () => {
  return (
    <main>
      <Navbar items={navItems} />
      <Home />
    </main>
  );
};

export default Page;
