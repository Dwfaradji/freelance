"use client";
import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Importation corrigée
// Import Swiper styles globalement
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import TextHidden from "@/components/ui/TextHidden/textHidden";
import FormulaireDevis from "@/components/SlideDevis/formDevis";

interface Slide {
  data: {
    title: string;
    content: string;
    ComponentType: any; // Replace 'any' with specific props type
    props?: {}; // Allow optional props // Utilisez un type plus général pour les props
    button?: string;
  }[];
  onSubmitForm?: (formData: any) => void;
}

const Slider = ({ data }: Slide) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [textButton, setNextTextButton] = useState("");
  const [prevTextButton, setPrevTextButton] = useState("");
  const [display, setDisplay] = useState("");
  const [displaySlide, setDisplaySlide] = useState(false);
  const [hiddenSlide, setHiddenSlide] = useState("block");

  useEffect(() => {
    updateButtonText();
    updateDisplay();
  }, [activeSlide, data]);

  const updateButtonText = () => {
    const nextSlideIndex = activeSlide + 1;
    const nextButtonText = data[nextSlideIndex]?.button || "Formulaire";
    setNextTextButton(nextButtonText);
    const prevSlideIndex = activeSlide - 1;
    const prevButtonText = data[prevSlideIndex]?.button || "";
    setPrevTextButton(prevButtonText);
  };

  const updateDisplay = () => {
    const prevButtonText = data[activeSlide - 1]?.button || "";
    setDisplay(prevButtonText === "" ? "hiddenDisplay" : "");
  };

  const getNextSlideTitle = () => {
    // Masque le slide et affiche le formulaire ajouter le scroll en haut de la page
    if (textButton === "Formulaire") {
      setDisplaySlide(true);
      setHiddenSlide("hidden");
    }
    swiperRef.current?.slideNext();
  };

  const getPrevSlideTitle = () => {
    swiperRef.current?.slidePrev();
  };

  const back = () => {
    setHiddenSlide("block");
    setDisplaySlide(false);
  };

  return (
    <>
      <section className={`${hiddenSlide} text-white`}>
        <Swiper
          onSwiper={(swiper: any) => (swiperRef.current = swiper)} // Mise à jour correcte de la référence
          pagination={{
            type: "progressbar"
          }}
          parallax={true}
          slidesPerView={1}
          navigation={false}
          modules={[Pagination, Navigation]}
          allowTouchMove={false}
          className="mySwiperSlide"
        >
          {data.map(({ title, content, ComponentType, props }, index) => (
            <SwiperSlide key={index}>
              <Fade>
                <h2 className=" m-10 text-xl">{title}</h2>
                <div className={"hidden md:block"}>
                  <p className="text-left m-0 md:m-3 min-h-max mb-7 h-6 hover:h-full overflow-hidden md:h-auto">
                    {content}
                  </p>
                </div>
                <div className={"block md:hidden"}>
                  <TextHidden
                    text={content}
                    style={"text-black text-left"}
                    heightVisible={"h-16"}
                  />
                </div>
              </Fade>
              <div className="w-full m-4 ">
                <ComponentType {...props} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*Bouton de navigation*/}
        <div className="swiper-navigation lg:mt-6">
          <button
            aria-label="precedent"
            className={`${display} w-1/4 md:w-2/6 lg:w-60  justify-center lg:justify-between bg-blue px-3 py-2 rounded-lg text-sm transform scale-100 transition hover:scale-110 active:scale-95 focus:outline-none focus:ring-1 focus:ring-offset-1 sm:width-full md:width-full lg:width-full`}
            onClick={() => {
              getPrevSlideTitle();
              setActiveSlide((prev) => Math.max(prev - 1, 0)); // Mise à jour de activeSlide
            }}
          >
            <i className="fa-solid fa-chevron-left mr-3"></i>
            <span className={"hidden md:block lg:block"}>{prevTextButton}</span>
          </button>
          <button
            aria-label="suivant"
            className={
              "w-1/4 md:w-2/6 lg:w-60 justify-center lg:justify-between bg-blue px-3 py-2 rounded-lg text-sm transform scale-100 transition hover:scale-110 active:scale-95 focus:outline-none focus:ring-1 focus:ring-offset-1 sm:width-full md:width-full lg:width-full"
            }
            onClick={() => {
              getNextSlideTitle();
              setActiveSlide((prev) =>
                Math.min(prev + 1, data.length - 1)
              ); // Mise à jour d'activeSlide
            }}
          >
            <span className={"hidden md:block lg:block"}>{textButton}</span>
            <i className="fa-solid fa-chevron-right ml-3"></i>
          </button>
        </div>
      </section>
      {/*Affiche le formulaire lorsque displaySlide est true*/}
        {displaySlide && (
          <Fade>
            <div className="mx-auto text-white">
              <p className=" text-left">
                <span className="font-bold block mb-2">
                  Prêt à donner vie à votre site web personnalisé ?
                </span>
                Commencez par remplir notre formulaire complémentaire. Ce premier
                pas essentiel nous permet de comprendre en profondeur vos
                aspirations et besoins spécifiques, assurant que chaque aspect de
                votre site reflète parfaitement votre vision et vos objectifs.
                Chez Devevoke, chaque projet débute par une écoute attentive et
                une planification minutieuse, garantissant une personnalisation
                sans faille. <br />
              </p>
              <p className="font-bold block mt-2">
                Remplissez le formulaire dès maintenant et embarquez vers la
                réalisation de votre site idéal.
              </p>
              <br />
              <div className="shadow-md rounded-2xl text-center">
                <h2 className="text-white text-xl mb-5">{"Formulaire"}</h2>
                <FormulaireDevis onClickBack={back} hrefLink={"#"}/>
              </div>
            </div>
          </Fade>
        )}
      </>
  );
};
export default Slider;
