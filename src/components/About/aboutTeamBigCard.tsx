import React from 'react';
import myPhoto from '@/images/about/photo-profil-1920.webp';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const AboutTeamBigCard = () => {
  return (
    <section className="mt-10">
      <article className="flex size-full flex-col-reverse items-center  justify-around  rounded-xl bg-lightblack lg:flex-row">
        <Fade
          className={'flex w-full items-start p-4 lg:w-1/3'}
          direction={'left'}
          duration={3000}
          triggerOnce={true}
        >
          <Image
            width={400}
            height={400}
            className={'w-1/6 overflow-hidden rounded-full lg:w-4/5'}
            src={myPhoto}
            alt={'photo_du_gérant_devevoke'}
          />
        </Fade>

        <div className="flex w-full flex-col justify-between  lg:w-2/3 ">
          <div className="m-6 text-left font-poppins text-white xxs:text-center sm:text-right">
            <h2 className="text-2xl font-bold">Boucif Faradji</h2>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>

          <Fade
            direction={'right'}
            reverse={false}
            duration={2000}
            triggerOnce={true}
          >
            <p className="m-4 text-lg text-white text-opacity-80 lg:text-xl ">
              {`  Passionné par l'innovation et les nouvelles technologies, je suis
              un développeur Full Stack avec plus de 5 ans d'expérience dans la
              conception de solutions numériques sur mesure. Mon objectif est de
              transformer vos idées en applications web et mobiles performantes,
              évolutives et adaptées à vos besoins spécifiques.`}
              <br />
              <br />
              Devevoke est le fruit de ma vision : offrir aux entreprises une
              expertise technique de pointe alliée à un accompagnement
              personnalisé pour se démarquer dans un univers numérique en
              constante évolution. Que vous soyez une start-up ambitieuse, une
              PME en pleine expansion, ou une grande entreprise en quête
              d’innovation, nous concevons des solutions sur mesure pour relever
              vos défis les plus complexes, tout en plaçant l’expérience
              utilisateur au centre de chaque projet.”
            </p>
          </Fade>
        </div>
      </article>
    </section>
  );
};

export default AboutTeamBigCard;
