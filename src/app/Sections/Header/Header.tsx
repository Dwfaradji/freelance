import React from "react";
import "./Header.scss";
import TypingAnimation from "../../Components/AnnimationText/AnnimationText";
import Images from "next/image";
interface Picture {
  id: number;
  imageUrl: string;
}
interface HeaderProps {
  pictures: Picture;
}

const Header = ({ pictures }: HeaderProps) => {
  return (
    <header className="pictures">
      <Images
        src={pictures.imageUrl}
        alt="Header"
        priority
        width="1000"
        height="786"
      />

      <div className="text container ">
        <h1 className="font-bold text-h1">
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
