'use client';
import React from 'react';
import FormulaireDevis from '@/components/SlideDevis/formDevis';
import Slider from '@/components/SlideDevis/slider/slider';
import { data } from '@/data/dataSlideDevis';

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
      {id === '0' && (
        <section className="m-8 h-full">
          <h1 className="m-6 text-center text-xl text-white"> SITE VITRINE </h1>
          <Slider data={data} />
        </section>
      )}

      {id === '1' && (
        <section className="m-8 h-full">
          <h1 className="m-6 text-center text-xl text-white">
            {' '}
            Site E-commerce
          </h1>
          <Slider data={data} />
        </section>
      )}

      {id === '2' && (
        <section className="m-8 h-full">
          <h1 className="m-6 text-center text-xl text-white">
            Application Web
          </h1>
          <p className=" text-left text-white">
              <span className="mb-2 block font-bold">
                Prêt à donner vie à votre Application ?
              </span>
            Commencez par remplir notre formulaire complémentaire. Ce premier
            pas essentiel nous permet de comprendre en profondeur vos
            aspirations et besoins spécifiques, assurant que chaque aspect de
            votre site reflète parfaitement votre vision et vos objectifs.
            Chez Devevoke, chaque projet débute par une écoute attentive et
            une planification minutieuse, garantissant une personnalisation
            sans faille. <br />
          </p>
          <p className="mt-2 block font-bold">
            Remplissez le formulaire dès maintenant et embarquez vers la
            réalisation de votre site idéal.
          </p>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      )}
    </main>
  );
}
