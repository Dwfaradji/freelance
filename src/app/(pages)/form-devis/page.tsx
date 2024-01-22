import React, { Suspense } from "react";
import FormulaireDevis from "../../../components/ui/FormDevis/formDevis";
import Loading from "@/app/(src)/form-ui/loading";

const Page = () => {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <FormulaireDevis />
      </Suspense>
    </section>

  );
};

export default Page;
