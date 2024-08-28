'use client';
import React from 'react';
import FormulaireDevis from '@/components/SlideDevis/formDevis';
import Slider from '@/components/SlideDevis/slider/slider';
import { data } from '@/data/dataSlideDevis';
import blogData from "@/data/dataBlog";
import { slugify } from "@/utils/slugify";
import { prices } from "@/data/data";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props ) {
  const { slug } = params;

  // Trouver les données du blog correspondant en utilisant le slug
  const devis = prices.find((devis) => slugify(devis.title) === slug);

if(!devis){
  return <div>Devis no exist</div>
}
  console.log(devis.id);
  return (
    <div className={'mainSwiperSlide'}>
      {prices.map((price,i)=>(
        devis.id === price.id && devis.id !== "2" && (
            <section key={i}>
              <h1 className=" text-center text-xl text-white"> {devis.subtitle}</h1>
              <Slider data={data} />
            </section>
          )
      ))}

      {devis.id === '2' && (
        <section className="m-8 h-full">
          <h1 className="m-6 text-center text-xl text-white">
            {devis.subtitle}
          </h1>
          <p className=" text-left text-white">
            <span className="mb-2 block font-bold">
              Prêt à donner vie à votre Application ?
            </span>
            Commencez par remplir notre formulaire complémentaire. Ce premier
            pas essentiel nous permet de comprendre en profondeur vos
            aspirations et besoins spécifiques, assurant que chaque aspect de
            votre site reflète parfaitement votre vision et vos objectifs. Chez
            Devevoke, chaque projet débute par une écoute attentive et une
            planification minutieuse, garantissant une personnalisation sans
            faille. <br />
          </p>
          <p className="mt-2 block font-bold">
            Remplissez le formulaire dès maintenant et embarquez vers la
            réalisation de votre site idéal.
          </p>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      )}
    </div>
  );
}
