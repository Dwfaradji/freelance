import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logo from '@/images/logocv.svg';
import Image from 'next/image';
import Link from "next/link";
import Button from "@/components/ui/Atoms/button";

const Testimonial = () => {
  return (
    <section className="mx-auto my-20 h-auto">
      <Fade>
        <article className="flex w-full flex-row justify-between rounded-lg bg-gradient-to-b from-pink align-middle xxs:flex-col xs:flex-col sm:flex-row  ">
          <div className="w-3/4 p-12 xxs:w-full xs:w-full sm:w-3/4">
            <h2 className="text-xl text-white lg:text-3xl">
              Expertise digitale à votre service
            </h2>
            <p className="mt-10 text-lg text-white opacity-50 lg:text-2xl">
              {`DevEvoke est une entreprise de développement web et mobile. Nous
              sommes spécialisés dans la création de sites web et d'applications
              mobiles. Nous proposons également des services de référencement et
              de web marketing. Nous sommes situés à Perpignan, mais nous
              travaillons avec des clients du monde entier. Nous sommes une équipe
              de développeurs passionnés par notre travail. Nous sommes toujours à
              la recherche de nouveaux défis et de nouvelles technologies. Nous
              sommes à votre disposition pour vous aider à réaliser vos projets.`}
            </p>
            <div className="mt-10 w-full items-center justify-center xxs:flex xxs:flex-row  ">
              <Link href={'/a_propos'}>
                <Button
                  colorClass="bg-gradient-to-r from-pink to-purple "
                  title="Qui nous sommes ?"
                  textColor="text-white text-xl"
                ></Button>
              </Link>
            </div>
            <div className="mt-10">
              <h2 className="font-poppins text-xl font-bold text-white">
                Boucif Faradji{' '}
              </h2>
              <h3 className="font-poppins text-sm font-semibold text-white opacity-50">
                Développeur
              </h3>
            </div>
          </div>
          <div className="flex w-1/4 items-center justify-center overflow-hidden align-middle xxs:hidden sm:flex">
            <div className={'overflow-hidden py-8 pl-8'}>
              <Image
                width={100}
                height={100}
                src={logo.src}
                alt={'logo_devevoke'}
                className="size-auto overflow-hidden rounded-xl"
                // src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </div>
        </article>
      </Fade>

    </section>
  );
};

export default Testimonial;
