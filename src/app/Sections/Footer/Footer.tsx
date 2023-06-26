import React from "react";
import "./Footer.scss";
import images from "@/app/Assets/Gallery";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      style={{
        background: `url(${images.footerBackground}) no-repeat center center `,
        backgroundSize: "cover",
      }}
    >
      <div className="footer__container">
        <div className="footer__section col-sm-12 col-md-4">
          <h3 className="text-h3">Infos général</h3>
          <ul>
            <li>
              <Link href="/procedure" target="_blank">
                Procédure
              </Link>
            </li>
            <li>
              <Link href="/tarif" target="_blank">
                Les tarifs
              </Link>
            </li>
            <li>
              <Link href="/mentions-legal" target="_blank">
                Mentions légal
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section  col-sm-12 col-md-4">
          <h3 className="text-h3">Services</h3>
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
          <h3 className="text-h3">Contact</h3>
          <p>
            Email:
            <a className="ml-1 text-white" href="mailto:contact@devevoke.com">
               contact@devevoke.com
            </a>
          </p>
          <p>Téléphone: 06 18 23 76 62</p>
          <p>
            Adresse: 5 impasse des vergers,
            <br /> 66370 Pézilla la rivière
          </p>
        </div>
      </div>

      <div className="container-network">
        <div className="network">
          <Link
            href="https://www.facebook.com/Devevoke-103100528585996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </Link>
          <Link
            href="https://github.com/Dwfaradji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            href="https://fr.linkedin.com/in/boucif-faradji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            href="https://twitter.com/Dw_faradji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-twitter"></i>
          </Link>
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
