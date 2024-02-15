"use client";
import React, { useEffect } from "react";
import "./AboutPage.scss";
import images from "../../../assets/Gallery";
import Banner from "../../ui/Banner/Banner";
import Image from "next/image";


const AboutPage = () => {
  // fonction qui active l'animation lorsque l'utilisateur arrive sur un élément
  const handleScroll = () => {
    const elements = document.querySelectorAll(".item-skill .item");
    elements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;
      if (top < window.innerHeight && bottom > 0) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-about-page  pt-8 pb-8 bg-slate-50 ">
      <div className={"container"} >
        <div className="header-about">
          <h1>À propos</h1>
          {/*<ChevronRight className={}/>*/}
        </div>
        <h2>Qui nous sommes ? </h2>
        <div className="section-about flex justify-center md:justify-between flex-wrap-reverse p-2 rounded-2xl shadow-md">
          <div className="container-text w-full md:w-3/6 flex items-center justify-center">
            <p>
              {`DevEvoke est une entreprise de développement web et mobile. Nous
              sommes spécialisés dans la création de sites web et d'applications
              mobiles. Nous proposons également des services de référencement et
              de webmarketing. Nous sommes situés à Perpignan, mais nous
              travaillons avec des clients du monde entier. Nous sommes une équipe
              de développeurs passionnés par notre travail. Nous sommes toujours à
              la recherche de nouveaux défis et de nouvelles technologies. Nous
              sommes à votre disposition pour vous aider à réaliser vos projets.`}
            </p>
          </div>
          <div className="container-item overflow-hidden m-8 md:m-0">
            <Image
              className={"object-cover h-full"}
              width={"300"}
              height={300}
              src={images.imageHead}
              alt="photo developpeur devevoke"
            />
          </div>
        </div>
        <div className="section-skill">
          <h2 className={"mb-8 mt-8"}>Mes Spécialité</h2>
          <div className="item-skill shadow-md bg-white p-4">
            <div className="item">
              <Image
                width={"300"}
                height={"300"}
                src={images.reactImage}
                alt="react"
              />
              <h3 className={"text-base md:text-xl"}>React</h3>
            </div>
            <div className="item">
              <Image
                width={"300"}
                height={"300"}
                src={images.nextImage}
                alt="nextjs"
              />
              <h3 className={"text-base md:text-xl"}>NextJs</h3>
            </div>
            <div className="item">
              <Image
                width={"300"}
                height={"300"}
                src={images.reduxImage}
                alt="redux"
              />
              <h3 className={"text-base md:text-xl"}>Redux</h3>
            </div>
            <div className="item">
              <Image
                width={"300"}
                height={"300"}
                src={images.symfonyImage}
                alt="synfony"
              />
              <h3 className={"text-base md:text-xl"}>Symfony</h3>
            </div>
          </div>
          <p className={"mt-8 mb-8 bg-white p-3 rounded-2xl shadow-md"}>
            {`Bienvenue sur mon espace professionnel en ligne, où je fusionne
              créativité et expertise technique pour construire des expériences
              Web captivantes et fonctionnelles. Spécialisé dans les solutions
              avant-gardistes, je maîtrise l'art de créer des interfaces fluides
              et réactives grâce à ma solide connaissance de React et Next.js. Mon
              approche centrée sur l'utilisateur et ma quête constante
              d"optimisation m"ont permis de développer des applications web
              hautement interactives, performantes et accessibles. Avec Redux, je
              gère les états d'applications complexes avec aisance, assurant une
              synchronisation parfaite et une réactivité sans faille. Mon
              expertise dans la gestion d'état global fait de chaque projet un
              modèle de clarté et d'efficacité. Côté back-end, je transforme les
              exigences fonctionnelles en architectures robustes avec Symfony,
              créant des fondations solides pour des applications web évolutives.
              Ma maîtrise de ce framework PHP me permet de développer des API
              performantes et sécurisées, capables de gérer de grandes quantités
              de données avec une facilité déconcertante. Chaque ligne de code est
              rédigée avec la même attention, chaque projet est une nouvelle
              aventure où je mets en œuvre mon expertise pour dépasser les
              attentes. Découvrez mes projets, mes collaborations réussies, et
              entamez avec moi le chemin vers une solution digitale sans
              précédent. Vos idées méritent le meilleur des développements web, et
              je suis là pour les réaliser.`}
          </p>
        </div>
        <div className="section-studies">
          <h2 className={"mb-8 mt-8"}>Mon Parcours</h2>
          <div className="item-studies shadow-md bg-white p-4">
            <div className="item ">
              <div className="icon-studies ">
                {/*<i className="fa-solid fa-graduation-cap"></i>*/}
                <Image
                  width={"200"}
                  height={"200"}
                  src={images.etudeImage}
                  alt="etudes"
                />
              </div>
              <h3 className={"text-base md:text-xl"}>Études </h3>
            </div>
            <div className="item">
              <div className="icon-studies">
                <Image
                  width={"300"}
                  height={"300"}
                  src={images.formationImage}
                  alt="formation"
                />
              </div>
              <h3 className={"text-base md:text-xl"}>Formation</h3>
            </div>
            <div className="item">
              <div className="icon-studies">
                <Image
                  width={"300"}
                  height={"300"}
                  src={images.passionImage}
                  alt="passion"
                />
              </div>
              <h3 className={"text-base md:text-xl"}>Passion</h3>
            </div>
          </div>
          <p className={"mt-8 mb-8 bg-white p-3 rounded-2xl shadow-md"}>
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
            potentiel pour créer des expériences utilisateurs dynamiques. J'ai
            plongé dans l'écosystème React, embrassant Next.js pour ses
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
        </div>
      </div>
      <div className="section-banner">
        <div className="item-banner">{/*<Banner />*/}</div>
      </div>
    </div>
  );
};

export default AboutPage;
