import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/aboutHeader.webp';

const AboutHeader = () => {
  return (
    <section className="mx-auto">
      <Fade direction={'down'} triggerOnce={true}>
        <article className="mb-10">
          <span className="text-sm text-white opacity-50">A propos</span>
          <h1 className="bg-gradient-to-r from-pink to-purple font-poppins font-semibold leading-snug text-gradient xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Qui nous sommes ?
          </h1>
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            Nous sommes une équipe passionnée, déterminée à transformer vos
            idées en solutions digitales performantes. À travers des
            technologies de pointe et un service client de qualité, nous vous
            aidons à exceller dans l'univers numérique.
          </p>
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
      </article>
      <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
        Devevoke est une entreprise innovante spécialisée dans le développement
        d’applications et de sites web. Nous accompagnons les PME, TPE et
        start-ups dans la création de solutions digitales adaptées à leurs
        besoins spécifiques. Notre équipe de professionnels passionnés met à
        votre disposition son expertise pour vous aider à réussir dans l'univers
        numérique en constante évolution.
      </p>
    </section>
  );
};

export default AboutHeader;
