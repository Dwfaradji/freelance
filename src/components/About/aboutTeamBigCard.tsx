import React from 'react';
import  myPhoto from "@/images/about/photo-profil.png"
import Image from "next/image"
import { Fade } from "react-awesome-reveal";

const AboutTeamBigCard = () => {

  return (
    <section className="mt-10">
      <article className="flex size-full justify-around flex-col-reverse  items-center  rounded-xl bg-lightblack lg:flex-row">
        <Fade className={"w-full lg:w-1/3 items-start flex p-4"} direction={"left"} duration={3000}>
          <Image
            width={400}
            height={400}
            className={"rounded-full overflow-hidden w-1/6 lg:w-[80%] "}
            src={myPhoto}
            alt={'photo_du_gerant_devevoke'}
          />
        </Fade>

        <div className="flex flex-col justify-between w-full  lg:w-2/3">
          <div className="m-6 text-left font-poppins text-white xxs:text-center sm:text-right">
            <h2 className="text-2xl font-bold">Boucif Faradji</h2>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>

          <Fade  direction={"right"} reverse={false} duration={2000}>
            <p className=" p-6  text-lg text-white lg:text-2xl flex items-center size-full">
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
