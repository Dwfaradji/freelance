import React from "react";
import PagesInfo from "@/app/Components/PagesInfo/PagesInfo";
import { pageInfosPrice } from "@/app/Data/data";

const InfoTarif = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosPrice} />
    </div>
  );
};

export default InfoTarif;