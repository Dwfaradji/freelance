import React from 'react';
import { Fade } from 'react-awesome-reveal';
import myPhoto from '@/images/about/photo-profil.png';
import back from '@/images/about/Nakamoto-1920.webp';
import front from '@/images/about/africain-1920.webp';
import design from '@/images/about/designer-1920.webp';

import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-center text-3xl font-semibold text-white">
        Rencontrez Mon Équipe
      </h2>

      <p className="mb-8 px-4 text-center text-lg text-gray-300 sm:px-10">
        {` Chez Devevoke, nous croyons que le succès d'un projet repose sur la
        collaboration et l'expertise de chaque membre de l'équipe. Voici les
        talents qui contribuent à la réalisation de vos projets numériques, avec
        passion et professionnalisme.`}
      </p>

      {/* Grid d'équipe */}
      <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Membre 1 */}
        <Fade direction="up" duration={2000} triggerOnce>
          <div className="flex flex-col items-center rounded-lg bg-lightblack p-6 shadow-lg">
            <Image
              width={400}
              height={400}
              className="mb-4 size-32 rounded-full object-cover"
              src={front}
              alt={'photo_du_gérant_devevoke'}
            />
            <h3 className="text-xl font-semibold text-white">George Palonga</h3>
            <p className="text-lg text-gray-300">Développeur Frontend</p>
            <p className="mt-2 text-center text-white opacity-75">
              {`Spécialisée dans la création d'interfaces utilisateur modernes et
              fluides, George s'assure que chaque projet offre une expérience
              utilisateur optimale.`}
            </p>
          </div>
        </Fade>

        {/* Membre 2 */}
        <Fade direction="up" delay={200} duration={2000} triggerOnce>
          <div className="flex flex-col items-center rounded-lg bg-lightblack p-6 shadow-lg">
            <Image
              width={400}
              height={400}
              className="mb-4 size-32 rounded-full object-cover"
              src={back}
              alt={'photo_du_gérant_devevoke'}
            />

            <h3 className="text-xl font-semibold text-white">Léo Zang</h3>
            <p className="text-lg text-gray-300">Développeur Backend</p>
            <p className="mt-2 text-center text-white opacity-75">
              Léo est un expert en architecture de systèmes et en gestion de
              bases de données. Il crée des infrastructures robustes pour des
              applications performantes.
            </p>
          </div>
        </Fade>

        {/* Membre 3 */}
        <Fade direction="up" delay={400} duration={2000} triggerOnce>
          <div className="flex flex-col items-center rounded-lg bg-lightblack p-6 shadow-lg">
            <Image
              width={400}
              height={400}
              className="mb-4 size-32 rounded-full object-cover"
              src={design}
              alt={'photo_du_gérant_devevoke'}
            />
            <h3 className="text-xl font-semibold text-white">Sophie Cartin</h3>
            <p className="text-lg text-gray-300">UX/UI Designer</p>
            <p className="mt-2 text-center text-white opacity-75">
              Sophie se passionne pour la création de designs intuitifs et
              esthétiques. Elle veille à ce que chaque projet soit non seulement
              fonctionnel mais aussi agréable à utiliser.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TeamSection;
