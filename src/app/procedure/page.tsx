import React from "react";
import PagesInfo from "@/app/Components/PagesInfo/PagesInfo";
import { pageInfosProcess } from "@/app/Data/data";

const Page = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosProcess} />
    </div>
  );
};

export default Page;
