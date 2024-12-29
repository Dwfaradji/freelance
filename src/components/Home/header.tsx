import React from 'react';
// Assets
import HeaderImage from '@/images/home/header-main-1700.webp';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="mx-auto mb-8 px-8">
      <h2 className="font-poppins text-xs font-semibold text-white opacity-50 xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
        Nous fournissons une solution créative haut de gamme
      </h2>
      <Fade cascade direction={'up'}>
        <h1 className="font-poppins  text-2xl font-semibold text-white lg:text-4xl xl:text-7xl ">
          Agence Digital <br></br>
          <span className="bg-gradient-to-r from-pink to-purple text-gradient">
            Expert Web et Mobile
          </span>
          <br />
        </h1>
        <h2 className="mt-8 text-xl text-white lg:text-3xl">
          Créez Votre Présence en Ligne avec Nos Services
        </h2>
        <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
          Bienvenue sur{' '}
          <span className="bg-gradient-to-r from-pink to-purple text-gradient">
            DevEvoke
          </span>
          , votre partenaire digital de confiance. Spécialisés dans le
          développement web et le référencement SEO, nous accompagnons les
          entreprises dans leur transformation numérique en leur proposant des
          solutions sur mesure. Notre mission est de renforcer votre présence en
          ligne, d’améliorer votre visibilité sur les moteurs de recherche et de
          créer des plateformes performantes qui soutiennent la croissance de
          votre activité. Avec DevEvoke, chaque projet est une opportunité de
          dépasser vos attentes.
        </p>
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

      <Image
        width={1700}
        height={100}
        src={HeaderImage.src}
        alt={'photo'}
        className="mx-auto"
        priority
      />
    </header>
  );
};

export default Header;
