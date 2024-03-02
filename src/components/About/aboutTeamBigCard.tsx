import React from 'react';

const AboutTeamBigCard = () => {
  return (
    <section className="mx-auto mt-10 max-w-7xl">
      <div className="flex size-full flex-row justify-between rounded-xl bg-lightblack xxs:flex-col sm:flex-row">
        {/*<Image*/}
        {/*  width={300}*/}
        {/*  height={400}*/}
        {/*  className="hidden h-96 w-3/4 rounded-l-lg object-cover xxs:w-full sm:w-3/4"*/}
        {/*  src={''}*/}
        {/*  alt={'photo_du_gerant_devevoke'}*/}
        {/*/>*/}
        <div className="flex flex-col justify-between">
          <div className="m-6 text-right font-poppins text-white xxs:text-center sm:text-right">
            <h2 className="text-5xl font-bold">Boucif Faradji</h2>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>
          <p className="p-6 text-right text-xl text-white xxs:text-center sm:text-right">
            {`Je suis un développeur Full Stack freelance passionné par la
              création d'applications web innovantes. Je suis spécialisé dans le
              développement frontend et backend, ainsi que dans la conception de
              bases de données robustes.Je suis également un développeur
              autodidacte qui aime apprendre de nouvelles technologies et
              acquérir de nouvelles compétences pour améliorer mes capacités de
              développement.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamBigCard;
