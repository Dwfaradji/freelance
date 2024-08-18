'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeatureSection = () => {
  return (
    <section className="mx-auto">
      <Fade cascade>
        <div className="mt-10 flex w-full flex-row justify-between xxs:flex-col xs:flex-col sm:flex-row">
          <div className="m-5  flex h-52 flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink md:w-full">
            <h2 className="text-5xl text-white">21</h2>
            <h3 className="text-white">Projet réaliser</h3>
          </div>
          <div className="m-5 flex  h-52 flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink md:w-full">
            <h2 className="text-5xl text-white">3400h</h2>
            <h3 className="text-white">Formation </h3>
          </div>
          <div className="m-5 flex  h-52 flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink md:w-full">
            <h2 className="text-5xl text-white">99%</h2>
            <h3 className="text-white">Taux Satisfaction</h3>
          </div>
          <div className="m-5 flex  h-52 flex-col content-center justify-center rounded-xl bg-gradient-to-r from-lightblack to-lightblack text-center align-middle transition duration-500 ease-in-out hover:from-purple hover:to-pink md:w-full">
            <h2 className="text-5xl text-white">49K</h2>
            <h3 className="text-white">{"Chiffre d'affaires"}</h3>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default FeatureSection;
