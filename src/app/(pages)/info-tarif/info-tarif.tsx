import React from "react";
import PagesInfo from "@/components/ui/PagesInfo/PagesInfo";
import { pageInfosPrice } from "@/data/data";

const InfoTarif = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosPrice} />
    </div>
  );
};

export default InfoTarif;
