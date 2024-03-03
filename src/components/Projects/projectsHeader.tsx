import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import projectKw from '@/images/projects/kw.webp';
import projectFs from '@/images/projects/fenixSolutions.webp';

const ProjectsHeader = () => {
  return (
    <div className="mx-auto">
      <h1
        className={
          'mb-8 text-center font-poppins text-2xl font-semibold text-white lg:text-4xl xl:text-7xl'
        }
      >
        Nos projects
      </h1>

      <Fade cascade>
        <div className="mt-10 flex flex-wrap md:flex-nowrap">
          <div className="m-2 w-full rounded-xl bg-lightblack p-8 text-white md:w-2/4">
            <h2 className="text-sm font-semibold opacity-50 ">
              {' '}
              Keller Williams
            </h2>
            <h2 className="text-xl font-bold lg:text-3xl">
              Création site web et application
            </h2>
            <div className={'h-full overflow-hidden'}>
              <p className=" mt-5 line-clamp-4  text-lg opacity-70 hover:line-clamp-none  lg:text-2xl">
                🚀{' '}
                {`En tant que développeur Front-End, j'ai contribué à la création d"une plateforme
              immobilière intuitive, utilisant Next.js, React, Bootstrap, Docker, Twig et GitLab.`}
                <br />
                🛠️ Notre mission : concevoir une plateforme conviviale pour les
                agents immobiliers, avec un tableau de bord personnalisable.
                <br />
                🎯 Nous avons opté pour Next.js et React pour des performances
                optimales, Bootstrap pour une esthétique moderne et Docker pour
                une gestion efficiente des conteneurs.
                <br />
                💼{' '}
                {`Résultat majeur : un site web complet, permettant aux clients d'estimer leurs biens et de
              contacter les agents, tout en offrant aux agents un tableau de bord intuitif.`}
                <br />
                ⚙️ Méthodologie : travail en mode agile, avec une adaptation
                continue pour répondre aux besoins évolutifs du projet.
                <br />
                📈 Résultats : une expérience utilisateur exceptionnelle, avec
                un tableau de bord permettant aux agents de modeler leur espace
                virtuel en toute simplicité.
              </p>
              <br />
              🔧 Technologies Clés : Next.js, React, Bootstrap, Docker, Twig,
              GitLab.
            </div>
          </div>
          <div className=" m-2 overflow-hidden rounded-xl md:w-2/4 ">
            <Image
              src={projectKw}
              alt={'image_project_kw'}
              width={1000}
              height={300}
            />
          </div>
        </div>
      </Fade>
      <Fade cascade>
        <div className="mt-10 flex flex-row-reverse flex-wrap md:flex-nowrap">
          <div className="m-2 w-full rounded-xl bg-lightblack p-8 text-white md:w-2/5">
            <h2 className="text-sm font-semibold opacity-50">
              {' '}
              Fenix Solutions{' '}
            </h2>
            <h2 className="text-xl font-bold lg:text-3xl">
              Création Carousel Youtube.
            </h2>
            <div className={'h-full overflow-hidden'}>
              <p className=" mt-5 line-clamp-4  text-lg opacity-70 hover:line-clamp-none lg:text-2xl ">
                🚀{' '}
                {`En tant que développeur Full-Stack, j"ai contribué à la création d"une plateforme de
              gestion des tâches collaboratives, utilisant Vue.js, Node.js, MongoDB, Socket.IO, et GitLab.`}
                <br />
                🛠️ Notre mission : concevoir une application web flexible pour
                la gestion efficace des projets et des équipes, avec des
                fonctionnalités de chat en temps réel.
                <br />
                🎯 Nous avons opté pour Vue.js et Node.js pour une expérience
                utilisateur fluide et réactive, intégrant Socket.IO pour des
                communications en temps réel et MongoDB pour une gestion
                efficace des données.
                <br />
                💼 Résultat majeur : une application web robuste offrant une
                interface intuitive pour la gestion des tâches, des tableaux
                Kanban personnalisables et un chat en temps réel pour une
                collaboration efficace.
                <br />
                ⚙️ Méthodologie : développement itératif en mode agile, avec des
                mises à jour fréquentes basées sur les retours des utilisateurs
                et une intégration continue via GitLab.
                <br />
                📈 Résultats : une augmentation significative de la productivité
                des équipes, une meilleure communication et une gestion plus
                efficace des projets.
              </p>
              🔧 Technologies Clés : Vue.js, Node.js, MongoDB, Socket.IO,
              GitLab.
            </div>
          </div>
          <div className="m-2 overflow-hidden rounded-xl md:w-3/5">
            <Image
              className=""
              src={projectFs}
              alt={'image_project_felix_solutions'}
              width={1000}
              height={600}
            />
          </div>
        </div>
      </Fade>
      <Fade cascade>
        <div className="mt-10 flex flex-wrap md:flex-nowrap">
          <div className="m-2 w-full rounded-xl bg-lightblack p-8 text-white md:w-2/4">
            <h2 className="text-sm font-semibold opacity-50">
              {' '}
              Group Art Photos
            </h2>
            <h2 className="text-xl font-bold  lg:text-3xl">
              {"Création d'application"}
            </h2>
            <div className={'h-full overflow-hidden'}>
              <p className="mt-5 line-clamp-4 text-lg opacity-70  hover:line-clamp-none lg:text-2xl">
                🚀 Chargé de développer une application innovante pour présenter
                les produits de manière immersive, stimulant ainsi les ventes.
                <br />
                🎯 Objectif : Créer une interface intuitive pour captiver les
                clients et favoriser les conversions.
                <br />
                🚀{' '}
                {`Approche : Allier Next.js et React avec Vercel pour un déploiement fluide, ajoutant
              l'esthétique soignée de Tailwind CSS.`}
                <br />
                💼{' '}
                {`Mission : Transformer des idées en une application web percutante, stimulant l'engagement
              du client et boostant les ventes.`}
                <br />
                ⚙️ Méthodologie : Agile et orientée pour une livraison rapide et
                une satisfaction client optimaux.
                <br />
                📈 Résultats Attendus : Une application performante et
                esthétiquement attrayante prête à propulser votre entreprise
                vers de nouveaux sommets de réussite.
              </p>
              <br />
              🔧 Technologies Clés : Next.js, React, Vercel, Tailwind CSS,
              TypeScript, Node.js.
            </div>
          </div>
          <div className=" m-2 overflow-hidden rounded-xl md:w-2/4 ">
            <Image
              className=""
              src={projectKw}
              alt={'image_project_gap'}
              width={1000}
              height={300}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectsHeader;
