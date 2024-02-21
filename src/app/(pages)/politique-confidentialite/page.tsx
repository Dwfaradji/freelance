import React from "react";
import PagesInfo from "@/components/ui/PagesInfo/PagesInfo";
import { politiqueConfidentialite } from "@/data/data";

const Page = () => {
  return (
    <div>
      <PagesInfo infosText={politiqueConfidentialite} />
    </div>
  );
};

export default Page;
