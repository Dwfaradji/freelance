import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import logo from '@/images/logocv.svg';

const Testimonial = () => {
  return (
    <section className="relative mx-auto my-20 text-white">
      <Fade direction="up" triggerOnce>
        <h2 className="text-xl font-bold text-white lg:text-3xl">
          <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
            Notre Expertise au Service de Votre Vision
          </span>
        </h2>
      </Fade>

      <Fade>
        <div className="mt-12 grid grid-cols-1 gap-8 rounded-lg border border-white shadow-lg lg:grid-cols-2">
          <div className="p-6 md:p-10">
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              DevEvoke est une entreprise dédiée à la transformation numérique.
              Nous aidons les entreprises à se démarquer grâce à des solutions
              modernes, incluant le développement web et mobile, le
              référencement, et le marketing digital. Basés à Perpignan, nous
              collaborons avec des partenaires du monde entier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/a_propos">
                <Button
                  colorClass="bg-gradient-to-r from-pink to-purple hover:text-white py-2 px-4 rounded-md shadow-md md:py-3 md:px-6"
                  title="En savoir plus"
                  textColor="text-sm font-semibold md:text-lg"
                />
              </Link>
              <Link href="/contact">
                <Button
                  colorClass="bg-gray-200 hover:bg-gray text-gray-800 py-2 px-4 rounded-md shadow-md md:py-3 md:px-6"
                  title="Contactez-nous"
                  textColor="text-sm font-semibold md:text-lg"
                />
              </Link>
            </div>

            <div className="mt-10">
              <h3 className="bg-gradient-to-r from-pink to-purple text-xl font-bold text-gradient md:text-2xl">
                Boucif Faradji
              </h3>
              <p className="md:text-md text-sm font-medium">
                Fondateur & Développeur
              </p>
            </div>
          </div>

          <div className="from-indigo-500 to-pink-500 flex hidden items-center justify-center bg-gradient-to-r p-6 lg:flex">
            <div className="relative h-56 w-56 rounded-full shadow-lg sm:h-64 sm:w-64 md:h-72 md:w-72">
              <Image
                src={logo}
                alt="Logo DevEvoke"
                layout="fill"
                className="rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Testimonial;
