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
import FormulaireDevis from "@/components/ui/FormDevis/formDevis";
import { useMyContext } from "@/context/Mycontext";
import axios from "axios";

interface Slide {
  slidesData: {
    title: string;
    content: string;
    ComponentType: any; // Replace 'any' with specific props type
    props?: any; // Allow optional props // Utilisez un type plus général pour les props
    button?: string;
  }[];
  onSubmitForm?: (formData: any) => void;
}

// À l'endroit où vous définissez vos interfaces/types
interface FormulaireDevisMethods {
  submit: () => void;
}

const Slider = ({ slidesData }: Slide) => {
  const [{ form }] = useMyContext();
  const sendDataForm = useMyContext()[0];

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [textButton, setTextButton] = useState(
    slidesData[1]?.button || "Suivant"
  ); // Texte initial du bouton
  const [prevTextButton, setPrevTextButton] = useState(
    slidesData[1]?.button || "Suivant"
  ); // Texte initial du bouton

  const [display, setDisplay] = useState("");
  const [displaySlide, setDisplaySlide] = useState("hidden");
  const [hiddenSlide, setHiddenSlide] = useState("block");
  const [dataForm, setDataForm] = useState(form);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Mettre à jour le texte du bouton lorsque le slide change
  useEffect(() => {
    const nextSlideIndex = activeSlide + 1;
    const nextButtonText = slidesData[nextSlideIndex]?.button || "Formulaire";
    setTextButton(nextButtonText);
    if (form) {
      setDataForm(form);
      console.log("test", form);
      sendDevis();
    }
    const prevSlideIndex = activeSlide - 1;
    const prevButtonText = slidesData[prevSlideIndex]?.button || "";
    if (prevButtonText === "") {
      setDisplay("hiddenDisplay");
    } else {
      setDisplay("");
    }
    setPrevTextButton(prevButtonText);
  }, [activeSlide, slidesData, form]);

  // Fonction pour passer au slide suivant
  const getNextSlideTitle = () => {
    if (textButton === "Formulaire") {
      console.log("Formulaire en cours d'envoi");
      setDisplaySlide("block");
      setHiddenSlide("hidden");
    }
    swiperRef.current?.slideNext();
  };

  // Fonction pour passer au slide suivant
  const getPrevSlideTitle = () => {
    swiperRef.current?.slidePrev();
  };

  // Fonction pour revenir au slide précédent
  const back = () => {
    setHiddenSlide("block");
    setDisplaySlide("hidden");
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const formulaireRef = useRef<FormulaireDevisMethods>(null);
  const lastSlideIndex = 0; // Exemple : si vous avez 5 slides
  // Fonction pour aller au slide suivant ou soumettre le formulaire
  const nextOrSubmit = () => {
    if (currentSlide < lastSlideIndex) {
      setCurrentSlide(currentSlide + 1);
    } else if (textButton === "Formulaire") {
      // Soumettre le formulaire seulement lorsque le bouton "Soumettre" est cliqué
      formulaireRef.current && formulaireRef.current.submit();
    }
  };

  async function sendDevis() {
    try {
      const response = await axios.post("/api/devis", sendDataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Traitez la réponse de l'API
      if (response.status === 200) {
        console.log("L'e-mail a été envoyé avec succès.");
      } else {
        console.log("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi du devis:");
    }
  }

  return (
    <div>
      <div className={`${hiddenSlide} m-8 `}>
        <Swiper
          onSwiper={(swiper: any) => (swiperRef.current = swiper)} // Mise à jour correcte de la référence
          pagination={{
            type: "progressbar",
          }}
          parallax={true}
          slidesPerView={1}
          navigation={false}
          modules={[Pagination, Navigation]}
          allowTouchMove={false}
          className="mySwiperSlide"
        >
          {slidesData.map(({ title, content, ComponentType, props }, index) => (
            <SwiperSlide key={index}>
              <div className="mt-7">
                <h2 className="text-black m-0">{title}</h2>
                <p className="text-black text-left m-0 md:m-3 min-h-max mb-7 h-80 md:h-auto   ">
                  {content}
                </p>
              </div>
              <div className="w-full h-96 m-4">
                <ComponentType {...props} />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-navigation lg:mt-6">
          <button
            className={`w-1/4 md:w-2/6 lg:w-60  justify-center lg:justify-between ${display} `}
            onClick={() => {
              getPrevSlideTitle();
              setActiveSlide((prev) => Math.max(prev - 1, 0)); // Mise à jour de activeSlide
            }}
          >
            <i className="fa-solid fa-chevron-left mr-3"></i>
            <span className={"hidden md:block lg:block"}>{prevTextButton}</span>
          </button>
          <button
            className={
              "w-1/4 md:w-2/6 lg:w-60 justify-center lg:justify-between"
            }
            onClick={() => {
              getNextSlideTitle();
              setActiveSlide((prev) =>
                Math.min(prev + 1, slidesData.length - 1)
              ); // Mise à jour d'activeSlide
            }}
          >
            <span className={"hidden md:block lg:block"}>{textButton}</span>
            <i className="fa-solid fa-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
      <div className={`${displaySlide} w-4/5 mx-auto text-center  m-8`}>
        {!dataForm && (
          <div className="mx-auto">
            <p className="text-black text-left m-3">
              <span className="font-bold">
                Prêt à donner vie à votre site web personnalisé ?
              </span>
              <br />
              <br />
              Commencez par remplir notre formulaire complémentaire. Ce premier
              pas essentiel nous permet de comprendre en profondeur vos
              aspirations et besoins spécifiques, assurant que chaque aspect de
              votre site reflète parfaitement votre vision et vos objectifs.
              Chez Devevoke, chaque projet débute par une écoute attentive et
              une planification minutieuse, garantissant une personnalisation
              sans faille. <br />
              <span className="font-bold">
                {" "}
                Remplissez le formulaire dès maintenant et embarquez vers la
                réalisation de votre site idéal.
              </span>
            </p>
            <br />
            <h2 className="text-black mb-5">{"Formulaire"}</h2>

            <FormulaireDevis ref={formulaireRef} />
          </div>
        )}
        <div className="swiper-navigation m-8">
          {!dataForm && (
            <>
              <button className="w-2/3 md:w-1/5" onClick={back}>
                <i className="fa-solid fa-chevron-left mr-3"></i>
                {"Retour"}
              </button>

              <button className="w-2/3 md:w-1/5" onClick={nextOrSubmit}>
                {currentSlide < lastSlideIndex ? "Suivant" : "Soumettre"}
              </button>
            </>
          )}
        </div>
      </div>
      {!!dataForm && (
        <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg text-center m-10 h-96 flex flex-col justify-between ">
          <h2>Message envoyé</h2>
          <p className="text-blue-950 mb-13">
            {
              "Merci d'avoir remplis le devis nous reviendrons vers vous une fois le devis effectuer"
            }
          </p>
          <button>
            <a href="/">{"Retour à l'accueil"}</a>
          </button>
        </div>
      )}
    </div>
  );
};
export default Slider;
