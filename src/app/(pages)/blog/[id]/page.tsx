import React from "react";
import Navbar from "@/app/Sections/NavBar/NavBar";
import { navItems } from "@/app/Data/data";
import TemplateBlog from "@/app/Components/TemplateBlog/TemplateBlog";

const Page = () => {
  return (
    <div>
      <Navbar items={navItems} />
      <TemplateBlog  />
    </div>
  );
};

export default Page;
