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
          <FormulaireDevis hrefLink={'/'} />
        </section>
      )}
    </main>
  );
}
