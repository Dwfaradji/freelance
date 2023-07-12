import React from "react";
import Blog from "@/app/Sections/Blog/Blog";
import Navbar from "@/app/Sections/NavBar/NavBar";
import { navItems } from "@/app/Data/data";

const Page = () => {
  return (
    <div>
      <Navbar items={navItems} />
      <Blog />
    </div>
  );
};

export default Page;
