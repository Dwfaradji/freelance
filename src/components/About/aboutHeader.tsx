import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/aboutHeader.webp';

const AboutHeader = () => {
  return (
      <section className="mx-auto">
        <article className="overflow-hidden rounded-xl">
          <Image
            className={'w-full md:h-[85dvh]'}
            width={1000}
            height={1000}
            src={headerAbout}
            alt={'photo_de_group'}
            priority={true}
          />
        </article>
        <Fade  direction={"right"} delay={1000}>
        <article className="mt-5">
          <span className="text-sm text-white opacity-50">A propos</span>
          <h1 className="font-poppins text-7xl font-semibold leading-snug text-white xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Qui nous sommes ?
          </h1>
        </article>
        </Fade>
      </section>

  );
};

export default AboutHeader;
