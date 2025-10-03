import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';

const AnimatedStats = () => (
  <section className="mt-10 grid size-full grid-cols-1 gap-4 md:grid-cols-4">
    <Fade cascade>
      <article className="flex flex-col justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center transition duration-500 ease-in-out hover:from-purple hover:to-pink">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={20} duration={2.75} suffix="+" />
        </h2>
        <h3 className="text-white">Projets livrés</h3>
      </article>
      <article className="flex flex-col justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center transition duration-500 ease-in-out hover:from-purple hover:to-pink">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={15} duration={3} suffix="+" />
        </h2>
        <h3 className="text-white">Clients accompagnés</h3>
      </article>
      <article className="flex flex-col justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center transition duration-500 ease-in-out hover:from-purple hover:to-pink">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={99} duration={2} suffix="%" />
        </h2>
        <h3 className="text-white">Satisfaction client</h3>
      </article>
      <article className="flex flex-col justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack p-5 text-center transition duration-500 ease-in-out hover:from-purple hover:to-pink">
        <h2 className="text-5xl text-white">
          <CountUp start={0} end={8} duration={3.5} suffix="+" />
        </h2>
        <h3 className="text-white">Technologies maîtrisées</h3>
      </article>
    </Fade>
  </section>
);

export default AnimatedStats;