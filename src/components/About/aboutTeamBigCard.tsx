import React from "react";
import Image from "next/image";

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <Image
          width={300}
          height={400}
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src={""}
          alt={""}
        />
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Boucif Faradji</h1>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
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
    </div>
  );
};

export default AboutTeamBigCard;
