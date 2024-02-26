"use client";
import React from "react";
import { MyProvider } from "@/context/Mycontext";
import { initialState, reducer } from "@/context/reducer";
import FonctionSlide from "@/components/SlideDevis/siteVitrine/fonctionSlide";
import FormulaireDevis from "@/components/SlideDevis/FormDevis/formDevis";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <main>
        {id === "0" && (
          <section className="h-full">
            <h1 className="text-center m-6 text-white text-xl"> SITE VITRINE </h1>
            <FonctionSlide />
          </section>
        )}

        {id === "1" && (
          <div>
            <h1 className="text-center m-6 text-white text-xl"> Site E-commerce</h1>
            <FonctionSlide />
          </div>
        )}

        {id === "2" && (
          <div className="shadow-md shadow-pink rounded-2xl mx-auto w-11/12 ">
            <h2 className="text-center m-6 text-white text-xl">Application Web</h2>
            <FormulaireDevis />
          </div>
        )}
      </main>
    </MyProvider>
  );
}

