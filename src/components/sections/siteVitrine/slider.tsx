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
  const [dataForm, setDataForm] = useState(undefined);
  // Mettre à jour le texte du bouton lorsque le slide change
  useEffect(() => {
    const nextSlideIndex = activeSlide + 1;
    const nextButtonText = slidesData[nextSlideIndex]?.button || "Formulaire";
    setTextButton(nextButtonText);

    const prevSlideIndex = activeSlide - 1;
    const prevButtonText = slidesData[prevSlideIndex]?.button || "";
    if (prevButtonText === "") {
      setDisplay("hiddenDisplay");
    } else {
      setDisplay("");
    }

    setDataForm(form);
    setPrevTextButton(prevButtonText);
  }, [activeSlide, slidesData, dataForm, form]);

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

  const [currentSlide, setCurrentSlide] = useState(0);

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
    // const lastSlideIndex = activeSlide;
    if (currentSlide < lastSlideIndex) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Soumettre le formulaire
      formulaireRef.current && formulaireRef.current.submit();
    }
  };

  const sendDataForm = useMyContext()[0];

  const sendDevis = async () => {
    if (dataForm !== undefined) {
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
  };
  sendDevis();
  return (
    <div>
      <div className={`${hiddenSlide} m-8`}>
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
              <div className="m-7 tex">
                <h2 className="text-black m-0">{title}</h2>
                <p className="text-black text-left m-3">{content}</p>
              </div>
              <ComponentType {...props} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-navigation">
          <button
            className={display}
            onClick={() => {
              getPrevSlideTitle();
              setActiveSlide((prev) => Math.max(prev - 1, 0)); // Mise à jour de activeSlide
            }}
          >
            <i className="fa-solid fa-chevron-left mr-3"></i>
            {prevTextButton}
          </button>
          <button
            onClick={() => {
              getNextSlideTitle();
              setActiveSlide((prev) =>
                Math.min(prev + 1, slidesData.length - 1)
              ); // Mise à jour d'activeSlide
            }}
          >
            {textButton}
            <i className="fa-solid fa-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
      <div className={`${displaySlide} w-4/5 mx-auto text-center  m-8`}>
        {!dataForm && (
          <div className="m-7">
            <h2 className="text-black m-0">{"Formulaire"}</h2>
            <p className="text-black text-left m-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              dolore ea exercitationem inventore natus nisi, numquam
              praesentium, quibusdam reiciendis sapiente soluta sunt vel vero?
              Dignissimos dolore doloremque odit voluptas voluptatum!
            </p>
            <FormulaireDevis ref={formulaireRef} />
          </div>
        )}
        <div className="swiper-navigation m-8">
          {!dataForm && (
            <>
              <button onClick={back}>
                <i className="fa-solid fa-chevron-left mr-3"></i>
                {"Retour"}
              </button>

              <button onClick={nextOrSubmit}>
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
