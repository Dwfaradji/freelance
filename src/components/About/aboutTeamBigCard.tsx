import React from 'react';
import myPhoto from '@/images/about/photo-profil.png';
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
        >
          <Image
            width={400}
            height={400}
            className={'w-1/6 overflow-hidden rounded-full lg:w-4/5'}
            src={myPhoto}
            alt={'photo_du_gérant_devevoke'}
          />
        </Fade>

        <div className="flex w-full flex-col justify-between  lg:w-2/3">
          <div className="m-6 text-left font-poppins text-white xxs:text-center sm:text-right">
            <h2 className="text-2xl font-bold">Boucif Faradji</h2>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>

          <Fade direction={'right'} reverse={false} duration={2000}>
            <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              {`Je suis un développeur Full Stack freelance passionné par la
              création d'applications web innovantes. Je suis spécialisé dans le
              développement frontend et backend, ainsi que dans la conception de
              bases de données robustes. Je suis également un développeur
              autodidacte qui aime apprendre de nouvelles technologies et
              acquérir de nouvelles compétences pour améliorer mes capacités de
              développement.`}
            </p>
          </Fade>
        </div>
      </article>
    </section>
  );
};

export default AboutTeamBigCard;
