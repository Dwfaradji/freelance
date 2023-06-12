import React from "react";
import "./CallToAction.scss";
import images from "@/app/Assets/Gallery";
import scrollToSection from "@/app/Utils/Utils";

const CallToAction = () => {
  return (
    <section
      className="container-call-to-action"
      style={{
        background: `url(${images.bannerPicture4}) no-repeat center center fixed `,
        backgroundSize: "cover",
      }}
    >
      <div className="background"></div>
      <div className="content">
        <h2 className="text-h2">
          Services de conception web professionnels et personnalisés
        </h2>
        <p className="text-xl">
          Vous avez un projet intéressant en tête ? Ne tardez plus,{" "}
          <span onClick={() => scrollToSection("contact")}>contactez-moi</span>{" "}
          dès maintenant pour discuter de vos idées et commencer à travailler
          ensemble !
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
