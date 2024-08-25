import React from 'react';
// Assets
import HeaderImage from '@/images/home/header-main.webp';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const Header = () => {
  return (
    <header className="mx-auto mb-8 px-8">
      <Fade>
        <div>
          <h2 className="font-poppins text-xs font-semibold text-white opacity-50 xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Nous fournissons une solution créative haut de gamme
          </h2>

          <h1 className="font-poppins  text-2xl font-semibold text-white lg:text-4xl xl:text-7xl ">
            Développeur Freelance <br></br> Expert{' '}
            <span className="bg-gradient-to-r from-pink to-purple text-gradient">
              React NextJs
            </span>
            <br />
          </h1>
          <h2 className="mt-8 text-xl text-white lg:text-3xl">
            Créez Votre Présence en Ligne avec Nos Services
          </h2>
          <p className={'mt-2 text-lg text-white lg:text-2xl'}>
            Bienvenue sur{' '}
            <span className="bg-gradient-to-r from-pink to-purple text-gradient">
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
        <div className=" mt-10 xxs:flex xxs:flex-row">
          <Link href={'/contact'}>
            <Button
              colorClass="bg-gradient-to-r from-pink to-purple "
              title="Contactez-Nous"
              textColor="text-white text-xl"
            ></Button>
          </Link>
        </div>
      </Fade>
      <div className="mx-auto  mt-10">
        <div className="h-auto w-full overflow-hidden rounded-xl">
          <Image
            priority
            width={1000}
            height={1000}
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
