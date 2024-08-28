import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { services } from '@/data/data';

const Offerings = () => {
  return (
    <section>
      <Fade cascade>
        <article className=" mx-auto mt-20 px-8">
          <h2 className="text-xl font-bold text-white lg:text-3xl">
            Services proposés
          </h2>
          <p className="mt-5 text-lg text-white opacity-50 lg:text-2xl">
            {`DevEvoke est votre partenaire privilégié pour tous vos besoins web.
                            Notre agence de développement web freelance vous propose une gamme complète de services sur
                            mesure pour vous accompagner dans la création, la refonte et l'optimisation de votre site web ou
                            application web.`}
          </p>

          <h2 className="mb-2 mt-5 font-poppins text-2xl text-white">
            Nos services incluent :
          </h2>
          <p className=" text-lg text-white opacity-50 lg:text-2xl">
            {`Création et refonte de sites web,
                            Développement d'applications web,
                            Optimisation et référencement SEO,
                            Hébergement web,
                            Maintenance de site web,
                            Formation.`}
          </p>
        </article>
      </Fade>
      <Fade cascade>
        <article className="mx-auto my-20 flex flex-row flex-wrap justify-between gap-10 p-2 xxs:flex-col xs:flex-col sm:flex-row ">
          {services.map((service, i) => (
            <div
              key={i}
              className="sm:full flex rounded-xl hover:bg-gradient-to-r hover:from-pink lg:w-[30%]"
            >
              <article className="flex h-full flex-col justify-between px-8">
                <h2 className="my-3 text-2xl text-white">{service.title}</h2>
                <div className="flex items-start">
                  <p className=" h-full text-sm text-white opacity-50 ">
                    {service.description}
                  </p>
                </div>

                {/*<p className="mt-10 text-white opacity-50 text-sm">{service.description}</p>*/}
                <ul className={'my-3 text-white'}>
                  {service.items.map((item, i) => (
                    <li key={i}>
                      {/*<i className="fa-solid fa-caret-up fa-rotate-90"></i>*/}
                      {item.title}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </article>
      </Fade>
    </section>
  );
};

export default Offerings;
