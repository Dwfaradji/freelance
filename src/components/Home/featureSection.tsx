"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeatureSection = () => {
  return (
    <section className="mx-auto">
      <Fade cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div
            className="rounded-xl  md:w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h2 className="text-white text-5xl">2</h2>
            <h3 className="text-white">Projet réaliser</h3>
          </div>
          <div
            className="rounded-xl md:w-full  h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h2 className="text-white text-5xl">3400h</h2>
            <h3 className="text-white">Formation </h3>
          </div>
          <div
            className="rounded-xl md:w-full  h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h2 className="text-white text-5xl">99%</h2>
            <h3 className="text-white">Taux Satisfaction</h3>
          </div>
          <div
            className="rounded-xl md:w-full  h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h2 className="text-white text-5xl">49K</h2>
            <h3 className="text-white">{"Chiffre d'affaires"}</h3>
          </div>
        </div>
      </Fade>

    </section>
  );
};

export default FeatureSection;
