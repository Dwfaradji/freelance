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

      <div className="text grid col-span-12 xl:col-span-1">
        <h1 className="font-bold text-h1 mb-10 text-center xl:text-5xl">
          Développeur Freelance spécialisé en
          <span className="text-regal-blue"> Web Design</span> <br /> et <br />
          <span className="text-regal-blue">
            {"Développement d'Applications"}
          </span>
        </h1>
        <TypingAnimation
          text={
            "Besoin d'un site web ou d'une appli ?  Notre équipe freelance crée des solutions personnalisées. Design attrayant, fonctionnalités performantes."
          }
        />
      </div>
    </header>
  );
};

export default Header;
