import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';
import Button from '@/components/ui/Atoms/button';

const Projects = () => {
  return (
    <section>
      <Fade cascade>
        <article className="mt-20 px-8">
          <Fade direction={'up'}>
            <h2 className="text-xl font-bold text-white lg:text-3xl">
              <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                Découvrez Nos Réalisations Web
              </span>
            </h2>
          </Fade>

          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            {`Notre portfolio présente une sélection de projets web que j'ai réalisés en tant que développeur web freelance. Vous y trouverez des sites web, des applications web et des solutions informatiques personnalisées pour répondre aux besoins spécifiques de chaque client.`}
            <br />
            <br />
          </p>
          <span className="text-lg text-white lg:text-2xl">
            Vous souhaitez créer un projet web pour votre entreprise ou pour
            votre équipe ?
          </span>
          <br />
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            Que ce soit pour créer un site web vitrine, une boutique en ligne,
            ou une application mobile, je mets mes compétences en développement
            web au service de votre réussite. Découvrez mes réalisations et
            contactez-moi pour discuter de votre projet.
            <br />
            Découvrez Notre portfolio et explorez une sélection de mes
            réalisations.
          </p>
        </article>
      </Fade>

      <Fade cascade>
        <article className="mt-8 flex h-full flex-col gap-y-8 px-8 lg:flex-row lg:gap-x-8 lg:gap-y-0">
          {/* Swiper Bloc */}
          <div className="flex w-full items-center  rounded-xl bg-gradient-to-b from-pink p-8 lg:w-1/2 lg:bg-gradient-to-r">
            <Swiper
              effect={'flip'}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                reverseDirection: true,
                waitForTransition: true,
              }}
              grabCursor={true}
              modules={[EffectFlip, Autoplay]}
            >
              {projects &&
                projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className={'flex w-full items-center justify-center'}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={664}
                        height={373}
                        priority={true}
                        className={'aspect-video'}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          {/* Text Bloc */}
          <div
            className="flex w-full flex-col justify-between rounded-xl bg-gradient-to-t from-pink p-8 lg:w-1/2 lg:bg-gradient-to-l">
            <h2 className="text-xl text-white lg:text-3xl">
              Explorez nos réalisations et laissez-vous inspirer
            </h2>

            <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              Vous souhaitez donner vie à votre projet web ? Découvrez notre
              portfolio et laissez-vous inspirer par nos réalisations. Notre
              équipe de développeurs web freelance met à votre disposition son
              expertise pour créer des sites internet et des applications
              mobiles performantes et esthétiques.
            </p>

            <p className="my-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              Prêts à relever de nouveaux défis ?
            </p>

            <div className="flex justify-center">
              <Link href={'/portfolio'}>
                <Button
                  colorClass="bg-gradient-to-r from-pink to-purple"
                  title="Voir Tous Nos Projets"
                  textColor="text-white text-xl"
                />
              </Link>
            </div>
          </div>
        </article>
      </Fade>
    </section>
  );
};

export default Projects;
