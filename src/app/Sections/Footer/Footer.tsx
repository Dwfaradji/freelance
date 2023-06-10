import React from "react";
import "./Footer.scss";
import images from "@/app/Assets/Gallery";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      style={{
        background: `url(${images.footerBackground}) no-repeat center center`,
      }}
    >
      <div className="footer__container">
        <div className="footer__section col-sm-12 col-md-4">
          <h3>À propos de moi</h3>
          <p>
            {`Je suis un développeur freelance passionné par la création de sites
                  web et d'applications innovantes. Contactez-moi pour discuter de
                  votre projet et voir comment je peux vous aider à atteindre vos
                  objectifs.`}
          </p>
        </div>

        <div className="footer__section  col-sm-12 col-md-4">
          <h3>Services</h3>
          <ul>
            <li>Web design</li>
            <li>Développement web</li>
            <li>{"Développement d'applications mobiles"}</li>
            <li>Référencement (SEO)</li>
            <li>Hébergement</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div className="footer__section col-sm-12 col-md-4">
          <h3>Contact</h3>
          <p>Email: dw.faradji66@yahoo.com</p>
          <p>Téléphone: 0618237662</p>
          <p>
            Adresse: 5 impasse des vergers,
            <br /> 66370 Pézilla la rivière
          </p>
        </div>
      </div>

      <div className="footer__bottom col-12">
        <p>
          &copy; {new Date().getFullYear()} Faradji Boucif - Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
