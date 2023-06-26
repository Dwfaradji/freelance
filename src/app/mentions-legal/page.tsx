import React from "react";
import PagesInfo from "@/app/Components/PagesInfo/PagesInfo";
import {  pageMentionsLegales } from "@/app/Data/data";
const Page = () => {
  return (
    <div>
      <PagesInfo infosText={pageMentionsLegales} />
    </div>
  );
};

export default Page;
