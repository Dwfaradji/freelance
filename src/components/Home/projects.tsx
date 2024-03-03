import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';

const Projects = () => {
  return (
    <section>
      <Fade cascade>
        <div className="mt-20 px-8">
          <h2 className="text-xl font-bold text-white lg:text-3xl">
            Découvrez Nos Projets Web
          </h2>
          <p className="mt-5 text-lg text-white opacity-50 lg:text-2xl">
            {`Mon portfolio présente une sélection de mes réalisations en tant que développeur web freelance.
                            Vous y trouverez des sites web, des applications web et des solutions informatiques sur mesure
                            que j"ai créées pour des clients de différents secteurs d"activité.`}
            <br />
            Vous recherchez un développeur web freelance pour donner vie à vos
            projets web ?
            <br />
            Découvrez mon portfolio et explorez une sélection de mes
            réalisations.
          </p>
        </div>
      </Fade>
      <Fade cascade>
        <article className="mt-10 flex w-full flex-row px-8 xxs:flex-col xs:flex-col sm:flex-row">
          {/*<div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">*/}
          <Swiper
            effect={'flip'}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            pagination={true}
            modules={[EffectFlip, Pagination, Autoplay]}
            className="w-2/6 rounded-xl bg-gradient-to-r from-pink to-purple p-8 xxs:w-full xs:w-full sm:w-2/6"
          >
            <article className="">
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className={'h-full p-3'}>
                    <Link href={project.link}>
                      <Image
                        className="size-full rounded-xl"
                        src={project.image}
                        alt={project.alt}
                        width="400"
                        height="400"
                        priority={true}
                        // objectFit={"cover"}
                        // sizes="(min-width: 300px) 50vw, 100vw"
                      />
                    </Link>
                    {/*  <div className="">*/}
                    {/*    <h3 className="">*/}
                    {/*      {project.title}*/}
                    {/*    </h3>*/}
                    {/*    {project.tech.map((tech) => (*/}
                    {/*        <span*/}
                    {/*            className="text-2xl w-17 md:w-32 lg:w-40"*/}
                    {/*            key={tech}*/}
                    {/*        >*/}
                    {/*  {tech}*/}
                    {/*</span>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                  </div>
                </SwiperSlide>
              ))}
            </article>
          </Swiper>
          {/*</div>*/}

          <div className="w-4/6 rounded-xl bg-lightblack p-8  xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-xl text-white lg:text-3xl">
              {' '}
              Explorez nos réalisations et laissez-vous inspirer
            </h2>
            <p className="mt-8 text-lg text-white opacity-50 lg:text-2xl">
              Découvrez comment nous avons aidé nos clients à concrétiser leur
              vision en ligne. De sites vitrines élégants et responsives à des
              applications mobiles performantes et intuitives, notre équipe
              freelance est capable de répondre à tous vos besoins.
            </p>
            <p className="mt-8 text-lg text-white opacity-50 lg:text-2xl">
              Prêts à relever de nouveaux défis ?
              <br />
              {`Nous sommes toujours à la recherche de nouveaux défis et nous sommes impatients de
                                collaborer avec vous sur votre prochain projet de développement web ou d'application en
                                freelance. Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis
                                gratuit.`}
            </p>
          </div>
        </article>
      </Fade>
    </section>
  );
};

export default Projects;
