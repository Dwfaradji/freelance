import React, { useEffect } from "react";
import "./AboutPage.scss";
import images from "@/app/Assets/Gallery";
import Banner from "@/app/Components/Banner/Banner";

const AboutPage = () => {
  // fonction qui active l'animation lorsque l'utilisateur arrive sur un élément
  const handleScroll = () => {
    const elements = document.querySelectorAll(".item-skill .item");
    elements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;
      if (top < window.innerHeight && bottom > 0) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="container-about-page container">
        <div className="header-about">
          <h1>À propos</h1>
        </div>
        <h2>Qui nous sommes ? </h2>
        <div className="section-about">
          <div className="container-text">
            <p>
              {`DevEvoke est une entreprise de développement web et mobile. Nous
              sommes spécialisés dans la création de sites web et d'applications
              mobiles. Nous proposons également des services de référencement et
              de webmarketing. Nous sommes situés à Perpignan, mais nous
              travaillons avec des clients du monde entier. Nous sommes une équipe
              de développeurs passionnés par notre travail. Nous sommes toujours à
              la recherche de nouveaux défis et de nouvelles technologies. Nous
              sommes à votre disposition pour vous aider à réaliser vos projets.`}
            </p>
          </div>
          <div className="container-item">
            <img src="" alt="" />
          </div>
        </div>
        <div className="section-skill">
          <h2>Mes Spécialité</h2>
          <div className="item-skill">
            <div className="item">
              <img src={images.reactImage} alt="" />
              <h3>React</h3>
            </div>
            <div className="item">
              <img src={images.nextImage} alt="" />
              <h3>NextJs</h3>
            </div>
            <div className="item">
              <img src={images.reduxImage} alt="" />
              <h3>Redux</h3>
            </div>
            <div className="item">
              <img src={images.symfonyImage} alt="" />
              <h3>Symfony</h3>
            </div>
          </div>
        </div>
        <div className="section-studies">
          <h2>Mon Parcours</h2>
          <div className="item-studies">
            <div className="item">
              <div className="icon-studies">
                {/*<i className="fa-solid fa-graduation-cap"></i>*/}
                <img src={images.etudeImage} alt="" />
              </div>
              <h3>Études </h3>

              <p></p>
            </div>
            <div className="item">
              <div className="icon-studies">
                <img src={images.formationImage} alt="" />
              </div>
              <h3>Formation continue</h3>
              <p></p>
            </div>
            <div className="item">
              <div className="icon-studies">
                <img src={images.passionImage} alt="" />
              </div>
              <h3>Passion du code</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-banner">
        <div className="item-banner">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
