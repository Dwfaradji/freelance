import React from "react";
import Blog from "@/app/Sections/Blog/Blog";
import Navbar from "@/app/Sections/NavBar/NavBar";
import { navItems } from "@/app/Data/data";
import ReturnHome from "@/app/Components/RetunHome/ReturnHome";

const Page = () => {
  return (
    <div>
      <ReturnHome />
      <Blog />
    </div>
  );
};

export default Page;
