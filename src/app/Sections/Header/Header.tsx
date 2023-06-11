import React from "react";
import "./Header.scss";
import TypingAnimation from "../../Components/AnnimationText/AnnimationText";

interface Picture {
  id: number;
  imageUrl: string;
}

interface BackgroundProps {
  pictures: Picture[];
}

const Header = ({ pictures }: BackgroundProps) => {
  return (
    <header className="pictures">
      <div className="background"></div>
      <img src={pictures[0].imageUrl} alt="Header" />

      <div className="text container ">
        <h1 className="text-4xl font-bold">
          Développeur Freelance spécialisé en{" "}
          <span className="text-blue-500">Web Design</span> et{" "}
          <span className="text-blue-500">
            {"Développement d'Applications"}
          </span>
        </h1>
        <TypingAnimation text="Besoin d'un site web ou d'une appli ? Notre équipe freelance crée des solutions personnalisées. Design attrayant, fonctionnalités performantes." />
      </div>
    </header>
  );
};

export default Header;
