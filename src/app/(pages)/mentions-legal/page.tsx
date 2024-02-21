import React from "react";
import PagesInfo from "@/components/ui/PagesInfo/PagesInfo";
import { pageMentionsLegales } from "@/data/data";

const Page = () => {
  return (
    <div>
      <PagesInfo infosText={pageMentionsLegales} />
    </div>
  );
};

export default Page;
