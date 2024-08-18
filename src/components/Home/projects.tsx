import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';
import Button from '@/components/ui/Atoms/button';

const Projects = () => {
  return (
    <section>
      <Fade cascade>
        <div className="mt-20 px-8">
          <h2 className="text-xl font-bold text-white lg:text-3xl">
            Découvrez Nos Réalisation Web
          </h2>
          <p className="mt-5 text-lg text-white opacity-50 lg:text-2xl">
            {`Notre portfolio présente une sélection de projets web que j'ai réalisés en tant que développeur web freelance. Vous y trouverez des sites web, des applications web et des solutions informatiques personnalisées pour répondre aux besoins spécifiques de chaque client.`}
            <br />
            <br />
            Vous cherchez un développeur web freelance pour donner vie à votre
            projet ?
            <br />
            Que ce soit pour créer un site web vitrine, une boutique en ligne,
            ou une application mobile, je mets mes compétences en développement
            web au service de votre réussite. Découvrez mes réalisations et
            contactez-moi pour discuter de votre projet.
            <br />
            Découvrez Notre portfolio et explorez une sélection de mes
            réalisations.
          </p>
        </div>
      </Fade>
      <Fade cascade>
        <article className="mt-8  flex h-full flex-row flex-wrap px-8 sm:gap-y-2.5 lg:flex-row">
          <div
            className={
              'size-full from-pink p-8 bg-gradient-to-b  lg:bg-gradient-to-r rounded-tl-xl rounded-tr-xl lg:rounded-tl-xl lg:rounded-bl-xl  lg:w-2/4'
            }
          >
            <Swiper
              effect={'flip'}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              pagination={true}
              modules={[EffectFlip, Pagination, Autoplay]}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Link href={project.link}>
                    <Image
                      className="h-[30rem] object-contain "
                      src={project.image}
                      alt={project.alt}
                      width={1000}
                      height={1000}
                      priority={true}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex w-full flex-col justify-between rounded-xl from-pink bg-gradient-to-t  lg:bg-gradient-to-l  p-8   sm:w-full lg:w-2/4 ">
            <h2 className="text-xl text-white lg:text-3xl">
              Explorez nos réalisations et laissez-vous inspirer
            </h2>

            <p className="mt-8 text-lg text-white opacity-50 lg:text-2xl">
              Vous souhaitez donner vie à votre projet web ? Découvrez notre
              portfolio et laissez-vous inspirer par nos réalisations. Notre
              équipe de développeurs web freelance met à votre disposition son
              expertise pour créer des sites internet et des applications
              mobiles performantes et esthétiques.
            </p>

            <p className="my-5 text-lg text-white opacity-50 lg:text-2xl ">
              Prêts à relever de nouveaux défis ?
            </p>

            <div className=" w-full items-center justify-center xxs:flex xxs:flex-row  ">
              <Link href={'/portfolio'}>
                <Button
                  colorClass="bg-gradient-to-r from-pink to-purple "
                  title="Voir Tout Nos Projets"
                  textColor="text-white text-xl"
                ></Button>
              </Link>
            </div>
          </div>
        </article>
      </Fade>
    </section>
  );
};

export default Projects;
