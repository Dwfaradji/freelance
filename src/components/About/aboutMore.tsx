import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import setup from '@/images/about/setup.webp';
import me from '@/images/about/presentation.webp';
import aboutImg from '@/images/about/about-image.webp';

const AboutMore = () => {
  return (
    <section className="mx-auto mt-10">
      <article className="grid h-full lg:grid-cols-2 overflow-hidden xxs:grid-cols-1 xxs:gap-0  xs:grid-cols-1 sm:grid-cols-2 sm:gap-4">
        <Fade direction={"bottom-left"}>
          <div className="col-start-1 col-end-3 overflow-hidden rounded-xl">
            <Image
              width={800}
              height={300}
              src={setup}
              alt={'image_decor'}
              className="hidden h-96 w-full object-cover sm:block"
            />
          </div>
        </Fade>
        <Fade direction={"bottom-right"}>
          <div className="col-start-3 h-96 overflow-hidden rounded-xl xxs:col-start-1 sm:col-start-3 ">
            <Image
              className=" size-full"
              src={me}
              alt={'image_personne_costume'}
              width={800}
              height={300}
            />
          </div>
        </Fade>
      </article>

      <article className={'p-8 xxs:p-0'}>
        <Fade direction={"right"} delay={1000}>
          <p className="mt-10 text-lg text-white lg:text-2xl -z-10 relative">
            {`Mon voyage dans l'univers du développement web a débuté par une
            fascination pour la technologie et une curiosité insatiable pour les
            dernières innovations. Au fil des années, j'ai forgé un parcours qui
            reflète mon engagement envers l'excellence et ma passion pour la
            programmation. Les Fondations : Une Passion pour le Code Tout a
            commencé par des projets personnels, des sites web pour des amis et
            des connaissances, où j'ai rapidement saisi l'importance de la
            structure et de l'organisation du code. J'ai alors décidé de
            renforcer mes compétences en intégrant une formation spécialisée en
            développement web, où j'ai pu me familiariser avec les fondamentaux
            de la programmation et les langages clés de l'industrie. L'Ascension
            : Maîtrise des Frameworks Modernes Ma rencontre avec React a été un
            tournant décisif. J'ai été captivé par sa flexibilité et son
            potentiel pour créer des expériences utilisateurs dynamiques.`}
          </p>
        </Fade>


        <div
          className="h-full overflow-hidden ">
          <Fade delay={1000} direction={"left"}>
            <div className="col-start-3 overflow-hidden rounded-xl xxs:col-start-1 sm:col-start-3">
              <Image
                className=" size-full z-10 relative"
                src={aboutImg}
                alt={'image_personne_costume'}
                width={800}
                height={300}
              />
            </div>
          </Fade>
        </div>


        <Fade direction={"down"} delay={1000} className={"-z-20 relative"}>
          <p className=" mt-10 text-lg text-white lg:text-2xl">
            {`J'ai plongé dans l'écosystème React, embrassant Next.js pour ses
            capacités de rendu côté serveur et d'optimisation des performances.
            J'ai également maîtrisé Redux pour gérer l'état global des
            applications avec précision et élégance. L'Élargissement : Vers le
            Full Stack avec Symfony Conscient que le développement front-end
            n'était qu'une partie de l'équation, j'ai étendu mon expertise au
            back-end. Le framework Symfony s'est révélé être l'outil idéal pour
            construire des back-ends robustes et évolutifs, me permettant de
            livrer des solutions complètes et intégrées. La Réalisation :
            Projets Complets et Satisfactions Clients Au cours de ma carrière,
            j'ai eu l'opportunité de travailler sur des projets variés, allant
            de startups innovantes à des entreprises de renom. Ces
            collaborations m'ont permis de raffiner mes compétences et d'adopter
            une approche agile et réactive aux besoins en constante évolution du
            domaine web. Aujourd'hui, je continue d'apprendre, d'explorer et de
            me dépasser, toujours à la recherche de la prochaine innovation qui
            révolutionnera la manière dont nous interagissons avec le web.`}
          </p>
        </Fade>
      </article>
    </section>
  );
};

export default AboutMore;
