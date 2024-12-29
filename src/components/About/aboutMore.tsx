import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import aboutImg from '@/images/about/about-image-1920.webp';
import Offerings from '../Home/offerings';
import Button from '../ui/Atoms/button';
import Link from 'next/link';

const AboutMore = () => {
  return (
    <div className="mx-auto">
      <section className={'p-8 xxs:p-0 '}>
        <article className="m-8 h-full overflow-hidden">
          <Fade delay={1200} direction={'left'} triggerOnce={true}>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                className="relative z-10 size-full rounded-lg object-cover"
                src={aboutImg}
                alt={'banner_about'}
                width={1000}
                height={500}
              />
            </div>
          </Fade>
        </article>

        <section className="text-white">
          <Fade direction={'right'} delay={1000} triggerOnce={true}>
            <h2 className="bg-gradient-to-r from-pink to-purple text-4xl font-bold text-gradient opacity-90">
              Notre Vision
            </h2>
            <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
              {`Chez Devevoke, nous croyons que chaque entreprise mérite une
              présence numérique à la hauteur de ses ambitions. Nous
              redéfinissons l'expérience digitale en créant des solutions sur
              mesure, alliant innovation et efficacité.`}
              <br />
              {`Découvrez l'engagement de notre équipe pour votre réussite.`}
            </p>
          </Fade>
          {/* Nos Services */}

          <Offerings />

          {/* Pourquoi Choisir Devevoke */}
          <article className="mx-auto mt-16">
            <Fade cascade>
              <div className="mx-auto mt-20 px-8">
                <Fade direction={'up'}>
                  <h2 className="text-xl font-bold text-white lg:text-3xl">
                    <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                      Pourquoi Choisir Devevoke ?
                    </span>
                  </h2>
                </Fade>
                <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
                  Nous sommes une équipe passionnée, déterminée à vous offrir
                  des solutions digitales adaptées à vos besoins. Voici pourquoi
                  vous devriez nous choisir :
                </p>

                <h2 className="mt-5 text-lg text-white lg:text-2xl">
                  Nos points forts :
                </h2>
                <div className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
                  <ul className="list-disc pl-5 text-white">
                    <Fade direction={'left'} delay={100}>
                      <li>
                        <strong>Une équipe d’experts dédiés</strong> : Composée
                        de développeurs passionnés, designers créatifs, et
                        experts SEO.
                      </li>
                    </Fade>
                    <Fade direction={'left'} delay={200}>
                      <li>
                        <strong>Une approche personnalisée</strong> : Chaque
                        projet est unique, et nous offrons des solutions sur
                        mesure.
                      </li>
                    </Fade>
                    <Fade direction={'left'} delay={300}>
                      <li>
                        <strong>Une présence internationale</strong> : Nous
                        travaillons principalement en Europe, aux États-Unis et
                        aux Émirats Arabes.
                      </li>
                    </Fade>
                    <Fade direction={'left'} delay={400}>
                      <li>
                        <strong>Transparence et flexibilité</strong> : Paiement
                        flexible avec 30% à la commande et le solde à la
                        livraison.
                      </li>
                    </Fade>
                  </ul>
                </div>
              </div>
            </Fade>

            {/* Nos Valeurs */}
            <Fade cascade>
              <article className="mb-16 rounded-xl  py-12 shadow-lg">
                <Fade direction={'up'}>
                  <h2 className="mb-6 bg-gradient-to-r from-pink to-purple text-center text-4xl font-semibold text-gradient">
                    Nos Valeurs
                  </h2>
                </Fade>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Fade direction={'up'} delay={100}>
                    <div className="rounded-lg  p-6 shadow-lg hover:bg-gradient-to-t hover:from-pink">
                      <h3 className="mb-4 text-xl font-semibold text-white">
                        Innovation
                      </h3>
                      <p className="text-gray-300">
                        Nous restons à la pointe des nouvelles technologies pour
                        vous offrir des solutions avant-gardistes.
                      </p>
                    </div>
                  </Fade>
                  <Fade direction={'up'} delay={200}>
                    <div className="rounded-lg p-6 shadow-lg hover:bg-gradient-to-t hover:from-pink">
                      <h3 className="mb-4 text-xl font-semibold text-white">
                        Fiabilité
                      </h3>
                      <p className="text-gray-300">
                        Nous nous engageons à livrer des projets de haute
                        qualité dans les délais convenus.
                      </p>
                    </div>
                  </Fade>
                  <Fade direction={'up'} delay={300}>
                    <div className="rounded-lg  p-6 shadow-lg hover:bg-gradient-to-t hover:from-pink">
                      <h3 className="mb-4 text-xl font-semibold text-white">
                        Satisfaction client
                      </h3>
                      <p className="text-gray-300">
                        Votre satisfaction est au cœur de notre démarche. Nous
                        mettons tout en œuvre pour vous offrir un service
                        irréprochable.
                      </p>
                    </div>
                  </Fade>
                </div>
              </article>
            </Fade>

            {/* Contact */}
            <Fade cascade>
              <article className="text-center">
                <p className="mb-6 text-lg text-gray-300">
                  Vous avez un projet ? Vous souhaitez en savoir plus sur nos
                  services ? Contactez-nous dès aujourd’hui pour discuter de vos
                  besoins et de la manière dont nous pouvons vous accompagner.
                </p>
                <Link href={'/contact'}>
                  <Button
                    colorClass="bg-gradient-to-r from-pink to-purple "
                    title="Contactez-Nous"
                    textColor="text-white text-xl"
                  ></Button>
                </Link>
              </article>
            </Fade>
          </article>
        </section>
      </section>
    </div>
  );
};

export default AboutMore;
