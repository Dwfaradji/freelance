import React from "react";
import "./Header.scss";
import TypingAnimation from "../../ui/AnnimationText/AnnimationText";
import Images from "next/image";

interface Picture {
  id: number;
  imageUrl: string;
  alt: string;
}

interface HeaderProps {
  pictures: Picture;
}

const Header = ({ pictures }: HeaderProps) => {
  return (
    <header className="pictures">
      <Images
        src={pictures.imageUrl}
        alt={pictures.alt}
        priority
        width="1000"
        height="786"
      />

      <div className="text grid col-span-12 xl:col-span-1">
        <h1 className="font-bold text-h1 mb-10 text-center xl:text-5xl">
          Développeur Web Freelance <br/>
          <span className="text-regal-blue">Expert React & NextJs   </span>
        </h1>
        <TypingAnimation
          text={
            "Notre équipe freelance crée des solutions personnalisées. Design attrayant, fonctionnalités performantes."
          }
        />
      </div>
    </header>
  );
};

export default Header;
