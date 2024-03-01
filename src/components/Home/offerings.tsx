import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { services } from '@/data/data';

const Offerings = () => {
  return (
    <section>
      <Fade cascade>
        <div className=" mx-auto mt-10 px-8">
          <h2 className="text-7xl font-bold text-white xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Services proposés
          </h2>
          <p className="mt-5 text-sm text-white opacity-50">
            {`DevEvoke est votre partenaire privilégié pour tous vos besoins web.
                            Notre agence de développement web freelance vous propose une gamme complète de services sur
                            mesure pour vous accompagner dans la création, la refonte et l'optimisation de votre site web ou
                            application web.`}
          </p>
          <p className="mt-5 text-sm text-white opacity-50">
            Nos services incluent :
            <br />
            {`Création et refonte de sites web,
                            Développement d'applications web,
                            Optimisation et référencement SEO,
                            Hébergement web,
                            Maintenance de site web,
                            Formation.`}
          </p>
        </div>
      </Fade>
      <Fade cascade>
        <article className="mx-auto  mt-10 flex flex-row flex-wrap justify-center px-8 xxs:flex-col xs:flex-col sm:flex-row">
          {services.map((service, i) => (
            <div
              key={i}
              className="w-[30%] rounded-xl p-5 hover:bg-gradient-to-r hover:from-pink hover:to-purple xxs:w-full xs:w-full sm:w-[30%]"
            >
              <article className="flex h-full flex-col justify-between">
                <h2 className="text-2xl text-white">{service.title}</h2>
                <div className="flex items-start">
                  <p className="mt-10 text-sm text-white opacity-50">
                    {service.description}
                  </p>
                </div>

                {/*<p className="mt-10 text-white opacity-50 text-sm">{service.description}</p>*/}
                <ul className={'mt-3 text-white'}>
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
