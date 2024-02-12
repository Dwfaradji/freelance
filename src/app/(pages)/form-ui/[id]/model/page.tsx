"use client";
import React, { Suspense } from "react";
import FonctionSlide from "@/components/sections/siteVitrine/fonctionSlide";
import { MyProvider } from "@/context/Mycontext";
import { initialState, reducer } from "@/context/reducer";
import FormulaireDevis from "@/components/ui/FormDevis/formDevis";
import Loading from "@/app/loading";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <div >
        {id === "0" && (
          <section className="">
            <h1 className="text-center m-6"> SITE VITRINE </h1>
            <FonctionSlide />
          </section>
        )}

        {id === "1" && (
          <div>
            <h1 className="text-center m-6"> Site E-commerce</h1>
            <FonctionSlide />
          </div>
        )}

        {id === "2" && (
          <div>
            <h1 className="text-center m-6"> Application Web</h1>
            <FormulaireDevis />
          </div>
        )}
      </div>
    </MyProvider>
  );
}
