import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal'; // Assurez-vous que vous avez importé Fade

const AnimatedStats = () => (
  <section className="mt-10 grid size-full  grid-cols-1 justify-between  gap-4  md:grid-cols-4">
    <Fade cascade>
      <article className="flex  flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink ">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={15} duration={2.75} />
        </h2>
        <h3 className="text-white">Projet réaliser</h3>
      </article>
      <article className="flex flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink ">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={800} duration={3} suffix="h" separator={''} />
        </h2>
        <h3 className="text-white">Formation</h3>
      </article>
      <article className="flex flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink ">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={99} duration={2} suffix="%" />
        </h2>
        <h3 className="text-white">Taux Satisfaction</h3>
      </article>
      <article className="flex flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink ">
        <h2 className="text-5xl text-white">
          <CountUp
            start={0}
            end={49208}
            duration={3.5}
            suffix="€"
            separator=","
          />
        </h2>
        <h3 className="text-white">{"Chiffre d'affaires"}</h3>
      </article>
    </Fade>
  </section>
);

export default AnimatedStats;
