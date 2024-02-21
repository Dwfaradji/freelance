import React from "react";
import PagesInfo from "@/components/ui/PagesInfo/PagesInfo";
import { pageInfosProcess } from "@/data/data";


const Page = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosProcess} />
    </div>
  );
};

export default Page;
