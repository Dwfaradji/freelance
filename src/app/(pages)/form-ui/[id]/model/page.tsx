"use client";
import React from "react";
import FonctionSlide from "@/components/sections/siteVitrine/fonctionSlide";
import { MyProvider } from "@/context/Mycontext";
import { initialState, reducer } from "@/context/reducer";
import FormulaireDevis from "@/components/ui/FormDevis/formDevis";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <div >
        {id === "0" && (
          <div >
            <h1 className="text-center m-6"> SITE VITRINE </h1>
            <FonctionSlide />
          </div>
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
