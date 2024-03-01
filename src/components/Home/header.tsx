import React from 'react';
// Assets
import HeaderImage from '@/images/home/header-main.webp';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

import Button from '@/components/ui/Atoms/button';
import Input from '@/components/ui/Atoms/input';

const Header = () => {
  return (
    <header className="mx-auto px-8">
      <Fade>
        <div>
          <h2 className="font-poppins text-xs font-semibold text-white opacity-50 xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Nous fournissons une solution créative haut de gamme
          </h2>

          <h1 className="font-poppins text-2xl font-semibold text-white xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Développeur Freelance <br></br> Expert{' '}
            <span className="text-gradient bg-gradient-to-r from-pink to-purple">
              React NextJs
            </span>
            <br />
          </h1>
          <h2 className="mt-8 text-xl text-white">
            Créez Votre Présence en Ligne avec Nos Services
          </h2>
          <p className={'mt-2 text-xl text-white'}>
            Bienvenue sur{' '}
            <span className="text-gradient bg-gradient-to-r from-pink to-purple">
              DevEvoke
            </span>
            , votre partenaire de confiance pour tous vos besoins en
            développement web et référencement SEO. En tant que développeur web
            freelance, nous nous engageons à vous fournir des solutions sur
            mesure pour optimiser votre présence en ligne et augmenter votre
            visibilité sur les moteurs de recherche.
          </p>
        </div>
      </Fade>
      <Fade>
        {/*<div className=" hidden mt-10 xxs:flex xxs:flex-row sm:hidden">*/}
        {/*    <Input placeholder="email."></Input>*/}
        {/*    <Button*/}
        {/*        colorClass="bg-gradient-to-r from-pink to-purple "*/}
        {/*        title="Envoyer"*/}
        {/*        textColor="text-white"*/}
        {/*        marginClass="ml-5"*/}
        {/*    ></Button>*/}
        {/*</div>*/}
      </Fade>
      <div className="mx-auto  mt-10">
        <div className="h-auto w-full overflow-hidden rounded-xl">
          <Image
            width={1024}
            height={100}
            className="size-full"
            src={HeaderImage}
            alt="Photo_ordinateur_sur_bureau"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
