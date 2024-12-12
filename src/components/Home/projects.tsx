import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data'; // Assurez-vous que ce fichier contient bien des projets
import Button from '@/components/ui/Atoms/button';

const Projects = () => {
  return (
    <section>
      {/* Header Section */}
      <Fade cascade>
        <article className="mt-20 px-4 sm:px-6 md:px-8">
          <Fade direction={'up'}>
            <h2 className="text-xl font-bold text-white lg:text-3xl">
              <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                Découvrez Nos Réalisations Web
              </span>
            </h2>
          </Fade>

          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            {`Plongez dans notre portfolio et explorez une variété de projets web réalisés avec passion. Qu'il s'agisse de sites vitrines professionnels, de boutiques en ligne performantes ou d'applications interactives, chaque réalisation illustre notre expertise et notre engagement à répondre aux besoins uniques de nos clients.
Explorez une sélection de projets web que j'ai réalisés, incluant des sites vitrines, des boutiques en ligne et des applications interactives. Ces réalisations reflètent mon expertise et ma capacité à répondre aux besoins spécifiques de mes clients.`}
          </p>
          <p className="mt-4 text-lg text-white lg:text-2xl">
            Vous avez un projet en tête ?
          </p>
        </article>
      </Fade>

      {/* Projects Section */}
      <Fade cascade>
        <article className="mt-8 flex h-full flex-col gap-y-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-x-8 lg:gap-y-0">
          {/* Swiper Bloc */}
          <div className="flex w-full items-center rounded-xl bg-gradient-to-b from-pink p-8 lg:w-1/2 lg:bg-gradient-to-r">
            <Swiper
              effect={'creative'}
              grabCursor={true}
              autoplay={{
                delay: 3500,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              modules={[EffectCreative, Autoplay]}
            >
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="flex justify-center">
                      <Image
                        src={project.image}
                        alt={project.alt || 'Illustration de projet'}
                        width={664}
                        height={373}
                        priority={true}
                        className=" rounded-lg object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-white">
                  Aucun projet disponible pour le moment.
                </p>
              )}
            </Swiper>
          </div>

          {/* Text Bloc */}
          <div className="flex w-full flex-col justify-between rounded-xl bg-gradient-to-t from-pink p-8 lg:w-1/2 lg:bg-gradient-to-l">
            <h2 className="text-xl text-white lg:text-3xl">
              Transformez votre idée en réalité
            </h2>
            <ul className={'list-disc px-5 py-2 text-white'}>
              <Fade direction={'left'} delay={100}>
                <li>
                  Fenix Solutions : Site vitrine moderne et ergonomique pour une
                  entreprise innovante.
                </li>
                <li>
                  Keller Williams : Plateforme immobilière optimisée pour une
                  navigation fluide.
                </li>
                <li>
                  Menu Interactif pour Pizzeria : Une interface intuitive
                  permettant de consulter le menu, découvrir les offres et
                  personnaliser les commandes en toute simplicité.
                </li>
                <li>EvokeFlow : Application pour prise de commande client</li>
              </Fade>
            </ul>

            <p className="my-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              Prêts à transformer votre restaurant avec une solution moderne et
              fonctionnelle ?
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
