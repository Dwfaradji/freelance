import React from "react";
import APropos from "@/app/(pages)/a_propos/a_propos";
import NavBar from "@/app/Sections/NavBar/NavBar";

const Page = () => {
  return (
    <div>
      <NavBar items={[]} />
      <APropos />
    </div>
  );
};

export default Page;
