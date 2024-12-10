import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import projectKw from '@/images/projects/kw-1920.webp';
import projectFs from '@/images/projects/fenixSolutions-1920.webp';
import projectPizza from '@/images/projects/appPizza-card-1920.webp';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const ProjectsHeader = () => {
  return (
    <div className="mx-auto">
      <Fade direction={'up'} delay={1000}>
        <h1
          className={
            'mb-8 bg-gradient-to-r from-pink to-purple text-center font-poppins text-2xl font-semibold text-gradient lg:text-4xl xl:text-7xl'
          }
        >
          Découvrez nos projets
        </h1>
      </Fade>

      <div className={'mx-auto'}>
        <Fade cascade>
          <div className="mt-10 flex flex-wrap justify-center  lg:flex-nowrap ">
            <div className="m-2 flex w-full flex-col justify-between rounded-xl bg-lightblack p-3 text-white">
              <h2 className="text-sm font-semibold opacity-50 ">
                {' '}
                Keller Williams
              </h2>
              <h2 className="text-xl font-bold lg:text-3xl">
                Création site web et application
              </h2>
              <div
                className={
                  'flex h-full flex-col justify-around overflow-hidden'
                }
              >
                <p className=" my-5 text-lg opacity-70 lg:text-2xl">
                  🚀{' '}
                  {`En tant que développeur Front-End, j'ai contribué à la création d"une plateforme
              immobilière intuitive.`}
                </p>
                <p className={'xxl:block hidden'}>
                  🛠️ Notre mission : concevoir une plateforme conviviale pour
                  les agents immobiliers, avec un tableau de bord
                  personnalisable.
                </p>
                <p>
                  📈 Résultats : une expérience utilisateur exceptionnelle, avec
                  un tableau de bord permettant aux agents de modeler leur
                  espace virtuel en toute simplicité.
                </p>
                <br />
                <p>
                  🔧 Technologies Clés : Next.js, React, Bootstrap, Docker,
                  Twig, GitLab.
                </p>
              </div>
            </div>
            <div className=" m-2 overflow-hidden rounded-xl ">
              <div className="relative size-full overflow-hidden rounded-xl">
                <div
                  className={
                    '  absolute size-full items-center justify-center opacity-0  hover:flex hover:bg-gray-800 hover:bg-opacity-50 hover:opacity-95'
                  }
                >
                  <Link href="https://kwoxygene.fr/" target={'_blank'}>
                    <Button
                      colorClass="bg-gradient-to-r from-pink to-purple "
                      title="Voir le site"
                      textColor="text-white text-xl"
                    ></Button>
                  </Link>
                </div>

                <Image
                  src={projectKw}
                  alt={'image_project_kw'}
                  width={1000}
                  height={800}
                  className={'relative -z-10 size-full'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </Fade>

        <Fade cascade>
          <div className="mt-10 flex flex-row-reverse flex-wrap justify-center lg:flex-nowrap">
            <div className="m-2 flex  w-full flex-col justify-between rounded-xl bg-lightblack p-3 text-white">
              <h2 className="text-sm font-semibold opacity-50">
                {' '}
                Fenix Solutions{' '}
              </h2>
              <h2 className="text-xl font-bold lg:text-3xl">
                Création Carousel Youtube.
              </h2>
              <div
                className={
                  'flex h-full  flex-col justify-around overflow-hidden'
                }
              >
                <p className=" my-5 text-lg opacity-70 lg:text-2xl ">
                  🚀{' '}
                  {`En tant que développeur Full-Stack, j"ai contribué à la création d"une plateforme de
              gestion des tâches collaboratives.`}
                </p>
                <p className={'xxl:block hidden'}>
                  🛠️ Notre mission : concevoir une application web flexible pour
                  la gestion efficace des projets et des équipes, avec des
                  fonctionnalités de chat en temps réel.
                </p>
                <p>
                  📈 Résultats : une augmentation significative de la
                  productivité des équipes, une meilleure communication et une
                  gestion plus efficace des projets.
                </p>
                <br />
                <p>
                  🔧 Technologies Clés : Vue.js, Node.js, MongoDB, Socket.IO,
                  GitLab.
                </p>
              </div>
            </div>
            <div className="relative m-2   overflow-hidden rounded-xl">
              <div
                className={
                  '  absolute size-full items-center justify-center opacity-0  hover:flex hover:bg-gray-800 hover:bg-opacity-50 hover:opacity-95'
                }
              >
                <Link href="https://www.fenixsolutions.fr/" target={'_blank'}>
                  <Button
                    colorClass="bg-gradient-to-r from-pink to-purple "
                    title="Voir le site"
                    textColor="text-white text-xl"
                  ></Button>
                </Link>
              </div>

              <Image
                src={projectFs}
                alt={'image_project_felix_solutions'}
                width={1000}
                height={800}
                className={'relative -z-10 size-full'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Fade>

        {/* ----------------------- */}
        <Fade cascade>
          <div className="mt-10 flex flex-row flex-wrap justify-center lg:flex-nowrap">
            <div className="m-2 flex w-full flex-col justify-between rounded-xl bg-lightblack p-3 text-white">
              <h2 className="text-sm font-semibold opacity-50"> Pizzeria </h2>
              <h2 className="text-xl font-bold lg:text-3xl">
                Menu interactif pour Pizzeria
              </h2>
              <div className="flex h-full flex-col justify-around overflow-hidden">
                <p className="my-5 text-lg opacity-70 lg:text-2xl">
                  🚀
                  {`En tant que développeur Front-End, j'ai conçu une application web intuitive permettant aux pizzerias de présenter un menu interactif à leurs clients.`}
                </p>
                <p className="xxl:block hidden">
                  🛠️ Notre mission : proposer une solution moderne et élégante
                  pour les pizzerias, leur permettant de digitaliser leur menu
                  tout en offrant une expérience utilisateur fluide et adaptée
                  aux appareils mobiles.
                </p>
                <p>
                  📈 Résultats : une augmentation de l'engagement des clients
                  grâce à une navigation fluide et une présentation visuellement
                  attrayante des produits. Les propriétaires peuvent gérer les
                  mises à jour de leur menu via un système simple.
                </p>
                <br />
                <p>
                  🔧 Technologies Clés : Next.js, Tailwind CSS, React.js,
                  GitHub, Vercel.
                </p>
              </div>
            </div>
            <div className="relative m-2 overflow-hidden rounded-xl">
              <div className="absolute size-full items-center justify-center opacity-0 hover:flex hover:bg-gray-800 hover:bg-opacity-50 hover:opacity-95">
                <Link
                  href="https://restaurant-pizza-rho.vercel.app/"
                  target={'_blank'}
                >
                  <Button
                    colorClass="bg-gradient-to-r from-pink to-purple"
                    title="Voir le site"
                    textColor="text-white text-xl"
                  ></Button>
                </Link>
              </div>

              <Image
                src={projectPizza}
                alt={'Menu interactif pour pizzeria'}
                width={1000}
                height={800}
                className={'relative -z-10 size-full'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectsHeader;
