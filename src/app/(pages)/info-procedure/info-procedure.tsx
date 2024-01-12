import React from "react";
import PagesInfo from "@/components/ui/PagesInfo/PagesInfo";
import { pageInfosProcess } from "@/data/data";

const InfoProcedure = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosProcess} />
    </div>
  );
};

export default InfoProcedure;
