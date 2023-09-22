import React from "react";
import Navbar from "@/app/Sections/NavBar/NavBar";
import { navItems } from "@/app/Data/data";
import TemplateBlog from "@/app/Components/TemplateBlog/TemplateBlog";
import ReturnHome from "@/app/Components/RetunHome/ReturnHome";

const Page = () => {
  return (
    <div>
      <ReturnHome />
      <TemplateBlog  />
    </div>
  );
};

export default Page;
