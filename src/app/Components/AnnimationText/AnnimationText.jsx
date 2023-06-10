import React, { useState, useEffect } from "react";
import "./AnnimationText.scss";
import scrollToSection from "@/app/Utils/Utils";

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [displayBtn, setDisplayBtn] = useState("");
  const [styleBtn, setStyleBtn] = useState("displayNone");
  const textBtn = "Contactez-nous";

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
        setDisplayBtn(textBtn.substring(0, currentIndex));
      }
    }, 50); // Vitesse de frappe (100ms)

    return () => {
      clearInterval(intervalId); // Nettoyage de l'intervalle lors de la suppression du composant
    };
  }, [text]);

  return (
    <div className="animation-text">
      <p className="lead">{displayedText}</p>
      <button onClick={() => scrollToSection("contact")} className={styleBtn}>
        {displayBtn}
      </button>
    </div>
  );
};

export default TypingAnimation;
