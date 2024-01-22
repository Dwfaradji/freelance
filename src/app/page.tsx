import React from "react";

import "./globals.scss";
import Home from "@/app/(pages)/home/home";
import Navbar from "@/components/sections/NavBar/NavBar";
import { navItems } from "@/data/data";

const Page = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
