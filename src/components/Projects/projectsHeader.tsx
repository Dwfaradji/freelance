import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import projectKw from '@/images/projects/kw.webp';
import projectFs from '@/images/projects/fenixSolutions.webp';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const ProjectsHeader = () => {
  return (
    <div className="mx-auto">
      <Fade direction={'up'} delay={1000}>
        <h1
          className={
            'mb-8 text-center font-poppins text-2xl font-semibold text-white lg:text-4xl xl:text-7xl bg-gradient-to-r from-pink to-purple text-gradient'
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
      </div>

      {/*<Fade cascade>*/}
      {/*  <div className="mt-10 flex flex-wrap md:flex-nowrap">*/}
      {/*    <div className="m-2 w-full rounded-xl bg-lightblack p-8 text-white md:w-2/4">*/}
      {/*      <h2 className="text-sm font-semibold opacity-50">*/}
      {/*        {' '}*/}
      {/*        Group Art Photos*/}
      {/*      </h2>*/}
      {/*      <h2 className="text-xl font-bold  lg:text-3xl">*/}
      {/*        {"Création d'application"}*/}
      {/*      </h2>*/}
      {/*      <div className={'h-full overflow-hidden'}>*/}
      {/*        <p className="mt-5 line-clamp-4 text-lg opacity-70  hover:line-clamp-none lg:text-2xl">*/}
      {/*          🚀 Chargé de développer une application innovante pour présenter*/}
      {/*          les produits de manière immersive, stimulant ainsi les ventes.*/}
      {/*          <br />*/}
      {/*          🎯 Objectif : Créer une interface intuitive pour captiver les*/}
      {/*          clients et favoriser les conversions.*/}
      {/*          <br />*/}
      {/*          🚀{' '}*/}
      {/*          {`Approche : Allier Next.js et React avec Vercel pour un déploiement fluide, ajoutant*/}
      {/*        l'esthétique soignée de Tailwind CSS.`}*/}
      {/*          <br />*/}
      {/*          💼{' '}*/}
      {/*          {`Mission : Transformer des idées en une application web percutante, stimulant l'engagement*/}
      {/*        du client et boostant les ventes.`}*/}
      {/*          <br />*/}
      {/*          ⚙️ Méthodologie : Agile et orientée pour une livraison rapide et*/}
      {/*          une satisfaction client optimaux.*/}
      {/*          <br />*/}
      {/*          📈 Résultats Attendus : Une application performante et*/}
      {/*          esthétiquement attrayante prête à propulser votre entreprise*/}
      {/*          vers de nouveaux sommets de réussite.*/}
      {/*        </p>*/}
      {/*        <br />*/}
      {/*        🔧 Technologies Clés : Next.js, React, Vercel, Tailwind CSS,*/}
      {/*        TypeScript, Node.js.*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className=" m-2 overflow-hidden rounded-xl md:w-2/4 ">*/}
      {/*      <Image*/}
      {/*        className=""*/}
      {/*        src={projectKw}*/}
      {/*        alt={'image_project_gap'}*/}
      {/*        width={1000}*/}
      {/*        height={300}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Fade>*/}
    </div>
  );
};

export default ProjectsHeader;
