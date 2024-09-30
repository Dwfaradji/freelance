import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/aboutHeader.webp';

const AboutHeader = () => {
  return (
      <section className="mx-auto">
        <Fade  direction={"down"} delay={1000}>
          <article className="mb-10">
            <span className="text-sm text-white opacity-50">A propos</span>
            <h1 className="font-poppins text-7xl font-semibold leading-snug text-white xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl bg-gradient-to-r from-pink to-purple text-gradient">
              Qui nous sommes ?
            </h1>
          </article>
        </Fade>
        <article className="overflow-hidden rounded-xl">
          <Image
            className={'w-full md:h-[85dvh]'}
            width={800}
            height={800}
            src={headerAbout}
            alt={'photo_de_group'}
            priority={true}
          />
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            Nous sommes une entreprise innovante, spécialisée dans développement digital. Notre mission est de fournir des
            solutions sur mesure qui répondent aux besoins spécifiques de nos clients, en utilisant des technologies de
            pointe pour atteindre l'excellence. Découvrez notre histoire, nos valeurs, et la façon dont nous
            transformons votre entreprise grâce à une approche centrée sur l'innovation et la qualité.
          </p>
        </article>
      </section>

  );
};

export default AboutHeader;
