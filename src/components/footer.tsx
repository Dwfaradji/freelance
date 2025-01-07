'use client';
import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, LinkedIn, X, GitHub } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-10 w-full rounded-xl bg-lightblack p-8 md:p-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center text-white">
        <div className="flex w-full flex-wrap justify-between gap-8">
          <div className="sm:col-span-12 md:col-span-4">
            <h2 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
              Infos générales
            </h2>
            <ul className={''}>
              <li>
                <Link
                  className={
                    ' hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto'
                  }
                  href={'/info-procedure'}
                >
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link
                  className={
                    ' hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto'
                  }
                  href={'/info-tarif'}
                >
                 Offres et Prestations
                </Link>
              </li>
              <li>
                <Link
                  className={
                    ' hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto'
                  }
                  href={'/mentions-legal'}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  className={
                    ' hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto'
                  }
                  href={'/politique-confidentialite'}
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  className={
                    ' hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto'
                  }
                  href={'/foire-aux-questions'}
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-12 md:col-span-4">
  <h2 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
    Services
  </h2>
  <ul>
    {[
      { id: 'service-0', label: 'Sites Web' },
      { id: 'service-1', label: "Développement d'applications mobiles" },
      { id: 'service-2', label: 'Référencement (SEO)' },
      { id: 'service-3', label: 'Hébergement' },
      { id: 'service-4', label: 'Maintenance' },
      { id: 'service-5', label: 'Formation' },
    ].map(({ id, label }) => (
      <li className="mb-1" key={id}>
        <a
          href={`#${id}`} // Lien ancré vers les sections correspondantes
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById(id);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="hover:bg-gradient-to-r hover:from-pink hover:to-purple hover:text-gradient xxs:block xxs:h-12 md:h-auto"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h3 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient">
              Contact
            </h3>
            <p className={'mb-1 flex flex-wrap '}>
              Email:
              <Link
                className="ml-1 text-white"
                href="mailto:contact@devevoke.com"
              >
                contact@devevoke.com
              </Link>
            </p>
            <p className={'mb-1 flex flex-wrap '}>Téléphone: 04 34 29 76 40</p>
            <p className={'mb-1 flex flex-wrap '}>
              Adresse: 5 impasse des vergers,
              <br /> 66370 Pézilla la rivière
            </p>
          </div>
        </div>

        <div className=" w-full p-8 md:w-3/4 lg:w-2/4">
        <h2 className="mb-5 bg-gradient-to-r from-pink to-purple text-left text-xl text-gradient text-center">
        Suivez-nous sur les réseaux Sociaux </h2>
          <div className="my-8 flex justify-between rounded-full p-3  bg-white drop-shadow-2xl ">
            <Link
              href="https://www.facebook.com/profile.php?id=100094324716136"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <FacebookOutlined className="text-[#0766ff] bg-white overflow-hidden" />
            </Link>
            <Link
              href="https://github.com/Dwfaradji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'github'}
            >
              <GitHub className='text-black'/>
            </Link>
            <Link
              href="https://www.linkedin.com/company/devevoke/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'linkedin'}
            >
              <LinkedIn className="text-[#0a66c2]" />
            </Link>
            <Link
              href="https://twitter.com/DevEvoke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'twitter'}
            >
              <X className='text-black'/>
            </Link>
          </div>
        </div>
        <div className="mb-5 w-full text-center">
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
