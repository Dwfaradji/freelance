'use client';
import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, LinkedIn, X, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="mt-10 w-full rounded-xl bg-lightblack p-8 md:p-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center text-white">
        <div className="flex w-full flex-wrap justify-between gap-8">
          <div className="sm:col-span-12 md:col-span-4">
            <h3 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
              Infos général
            </h3>
            <ul className={''}>
              <li>
                <Link
                  className={' xxs:block xxs:h-12 md:h-auto'}
                  href={'/info-procedure'}
                >
                  Procédure
                </Link>
              </li>
              <li>
                <Link
                  className={' xxs:block xxs:h-12 md:h-auto'}
                  href={'/info-tarif'}
                >
                  Les tarifs
                </Link>
              </li>
              <li>
                <Link
                  className={' xxs:block xxs:h-12 md:h-auto'}
                  href={'/mentions-legal'}
                >
                  Mentions légal
                </Link>
              </li>
              <li>
                <Link
                  className={' xxs:block xxs:h-12 md:h-auto'}
                  href={'/politique-confidentialite'}
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  className={' xxs:block xxs:h-12 md:h-auto'}
                  href={'/foire-aux-questions'}
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
              Services
            </h3>
            <ul>
              <li className="mb-1">Web design</li>
              <li>Développement web</li>
              <li>{"Développement d'applications mobiles"}</li>
              <li>Référencement (SEO)</li>
              <li>Hébergement</li>
              <li>Maintenance</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
              Contact
            </h3>
            <p className={'mb-1 flex flex-wrap justify-between'}>
              Email:
              <a className="ml-1 text-white" href="mailto:contact@devevoke.com">
                contact@devevoke.com
              </a>
            </p>
            <p className={'mb-1 flex flex-wrap justify-between'}>
              Téléphone: 04 34 29 76 40
            </p>
            <p className={'mb-1 flex flex-wrap justify-between'}>
              Adresse: 5 impasse des vergers,
              <br /> 66370 Pézilla la rivière
            </p>
          </div>
        </div>

        <div className=" w-full p-8 md:w-3/4 lg:w-2/4">
          <div className="my-8 flex justify-between">
            <Link
              href="https://www.facebook.com/profile.php?id=100094324716136"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <FacebookOutlined className="text-blue" />
            </Link>
            <Link
              href="https://github.com/Dwfaradji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'github'}
            >
              <GitHub className="text-blue" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/devevoke/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'linkedin'}
            >
              <LinkedIn className="text-blue" />
            </Link>
            <Link
              href="https://twitter.com/DevEvoke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'twitter'}
            >
              <X className="text-blue" />
            </Link>
          </div>
        </div>
        <div className="col-12 mb-5 text-center">
          <p>
            &copy; {new Date().getFullYear()} DevEvoke - Tous droits réservés.
          </p>
        </div>
      </div>

      {/*</div>*/}
    </footer>
  );
};

export default Footer;
