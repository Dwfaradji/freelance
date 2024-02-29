
import React from "react"
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto p-8 md:p-20 mt-10 bg-lightblack rounded-xl">
        <footer
            className="flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-wrap justify-between w-full ">
            <div className="col-sm-12 col-md-4">
              <h3 className="mb-5 text-left text-xl">Infos général</h3>
              <ul>
                <li>
                  <Link href="/info-procedure">Procédure</Link>
                </li>
                <li>
                  <Link href="/info-tarif">Les tarifs</Link>
                </li>
                <li>
                  <Link href="/mentions-legal">Mentions légal</Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section  col-sm-12 col-md-4">
              <h3 className="mb-5 text-left text-xl">Services</h3>
              <ul>
                <li className="mb-1">Web design</li>
                <li>Développement web</li>
                <li>{"Développement d'applications mobiles"}</li>
                <li>Référencement (SEO)</li>
                <li>Hébergement</li>
                <li>Maintenance</li>
              </ul>
            </div>

            <div className="footer__section col-sm-12 col-md-4">
              <h3 className="mb-5 text-left text-xl">Contact</h3>
              <p className={"mb-1"}>
                Email:
                <a className="ml-1 text-white" href="mailto:contact@devevoke.com">
                  contact@devevoke.com
                </a>
              </p>
              <p className={"mb-1"}>Téléphone: 04 34 29 76 40</p>
              <p className={"mb-1"}>
                Adresse: 5 impasse des vergers,
                <br/> 66370 Pézilla la rivière
              </p>
            </div>
          </div>

          <div className="container-network w-1/3">
            <div className="flex justify-between mb-8 mt-8">
              <Link
                  href="https://www.facebook.com/profile.php?id=100094324716136"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
              >
                FaceBook
                <i className="fa-brands fa-square-facebook"/>
              </Link>
              <Link
                  href="https://github.com/Dwfaradji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"github"}
              >
                Git Hub
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                  href="https://www.linkedin.com/company/devevoke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"linkedin"}
              >
                linkedin
                <i className="fa-brands fa-linkedin"/>
              </Link>
              <Link
                  href="https://twitter.com/DevEvoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"twitter"}
              >
                <i className="fa-brands fa-square-twitter"/>
                twitter
              </Link>
            </div>
          </div>
          <div className="mb-5 text-center col-12">
            <p>
              &copy; {new Date().getFullYear()} DevEvoke - Tous droits réservés.
            </p>
          </div>
        </footer>

      {/*</div>*/}
    </div>
  )
}

export default Footer
