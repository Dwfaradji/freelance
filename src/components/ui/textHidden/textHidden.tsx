"use client";
import React, { useState } from "react";

interface TextProps {
  text: string;
  style: string;
}

const TextHidden = ({ text, style}: TextProps) => {
  const [visibleText, setVisibleText] = useState("h-36");
  const [textButton, setTextButton] = useState("Lire la suite ...");
  const handleShowText = (e: any) => {
    setVisibleText("h-full");
    setTextButton("Fermer");
    if (textButton == "Fermer") {
      setVisibleText("h-36");
      setTextButton("Lire la suite ...");
    }
  };
  return (
    <div>
      <p className={`${visibleText} ${style} overflow-hidden`}>{text}</p>
      <span className={"cursor-pointer"} onClick={handleShowText}>
        {textButton}
      </span>
    </div>
  );
};

export default TextHidden;
