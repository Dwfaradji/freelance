"use client";
import React from "react";
import { MyProvider } from "@/context/Mycontext";
import { initialState, reducer } from "@/context/reducer";
import FormulaireDevis from "@/components/SlideDevis/formDevis";
import Slider from "@/components/SlideDevis/siteVitrine/slider";
import { data } from "@/data/dataSlideDevis";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <main>
        {id === "0" && (
          <section className="h-full m-8">
            <h1 className="text-center m-6 text-white text-xl"> SITE VITRINE </h1>
            <Slider data={data} />
          </section>
        )}

        {id === "1" && (
          <section className="h-full m-8">
            <h1 className="text-center m-6 text-white text-xl"> Site E-commerce</h1>
            <Slider data={data} />
          </section>
        )}

        {id === "2" && (
          <section className="h-full m-8">
            <h1 className="text-center m-6 text-white text-xl">Application Web</h1>
            <FormulaireDevis hrefLink={"/"} />
          </section>
        )}
      </main>
    </MyProvider>
  );
}

