import React, { useState, useEffect } from "react";
import "./AnnimationText.scss";
import scrollToSection from "@/app/Utils/Utils";

interface TypingAnimationProps {
  text: string;
}

const TypingAnimation = ({ text }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [displayBtn, setDisplayBtn] = useState("Contactez-nous");
  const [styleBtn, setStyleBtn] = useState("displayNone");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        setStyleBtn("displayNone");
      } else {
        clearInterval(intervalId);
        setStyleBtn("btn btn-header");
        setDisplayBtn(displayBtn.substring(0, currentIndex));
      }
    }, 50); // Vitesse de frappe (100ms)

    return () => {
      clearInterval(intervalId); // Nettoyage de l'intervalle lors de la suppression du composant
    };
  }, [displayBtn, text]);

  return (
    <div className="animation-text">
      <p className="lead mb-10 text-xl">
        {"Besoin d'un site web ou d'une appli ?"} <br /> {displayedText}
      </p>
      <button onClick={() => scrollToSection("contact")} className={styleBtn}>
        {displayBtn}
      </button>
    </div>
  );
};

export default TypingAnimation;
