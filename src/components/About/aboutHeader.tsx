import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/aboutHeader-1920.webp';

const AboutHeader = () => {
  return (
    <>
      <header className="mx-auto">
        <h2 className="text-sm text-white opacity-50">A propos</h2>

        <article className="mb-10">
          <Fade cascade direction={'up'} triggerOnce={true}>
            <h1 className="mb-8 bg-gradient-to-r from-pink to-purple  font-poppins text-2xl font-semibold text-gradient lg:text-4xl xl:text-7xl">
              Qui sommes-nous ?
            </h1>

            <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              {` Nous sommes une équipe passionnée, déterminée à transformer vos
            idées en solutions digitales performantes. À travers des
            technologies de pointe et un service client de qualité, nous vous
            aidons à exceller dans l'univers numérique.`}
            </p>
          </Fade>
        </article>
      </header>
      <section>
        <article className="overflow-hidden rounded-xl">
          <Image
            width={1264}
            height={843}
            src={headerAbout}
            alt={'photo_de_group'}
            priority={true}
          />
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            {`Devevoke est une entreprise innovante spécialisée dans le développement
        d’applications et de sites web. Nous accompagnons les PME, TPE et
        start-ups dans la création de solutions digitales adaptées à leurs
        besoins spécifiques. Notre équipe de professionnels passionnés met à
        votre disposition son expertise pour vous aider à réussir dans l'univers
        numérique en constante évolution.`}
          </p>
        </article>
      </section>
    </>
  );
};

export default AboutHeader;
