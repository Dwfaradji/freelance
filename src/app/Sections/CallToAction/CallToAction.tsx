import React from "react";
import "./CallToAction.scss";
import images from "@/app/Assets/Gallery";
import scrollToSection from "@/app/Utils/Utils";

const CallToAction = () => {
  return (
    <section
      className="content-picture "
      style={{
        background: `url(${images.callToActionPicture}) no-repeat center center fixed `,
        backgroundSize: "cover",
      }}
    >
      <div className="background">
        <p>
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
