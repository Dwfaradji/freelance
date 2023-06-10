import React from "react";
import "./OptiRank.scss";
import images from "@/app/Assets/Gallery";

const OptiRank = () => {
  return (
    <section
      className="background-picture"
      style={{ background: `url(${images.backgroundDecoBlack})` }}
    >
      <div className="background-content">
        <h2>Une approche unique du développement web</h2>
        <p>
          {`Découvrez notre approche unique du développement web, alliant
            créativité et référencement. En tant qu'experts en création de sites
            web et d'applications, nous nous engageons à développer des solutions
            sur mesure qui combinent un design attractif et une optimisation SEO
            efficace. Grâce à notre expertise en HTML, CSS, JavaScript et aux
            meilleures pratiques en matière de référencement, nous créons des
            sites web performants et bien positionnés dans les résultats des
            moteurs de recherche. Que vous ayez besoin d'un site vitrine élégant
            ou d'une application complexe, notre équipe freelance est prête à
            relever tous les défis. Contactez-nous dès aujourd'hui pour donner vie
            à votre projet tout en assurant une visibilité en ligne optimale !`}
        </p>
        <img src={images.optiRankPicture} alt="" />
      </div>
    </section>
  );
};

export default OptiRank;
