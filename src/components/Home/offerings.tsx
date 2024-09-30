import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { services } from '@/data/data';

const Offerings = () => {
  const servicesString= [
    'Création et refonte de sites web',
    'Développement d\'applications web et mobile',
    'Optimisation et référencement SEO',
    'Hébergement web',
    'Maintenance de site web',
    'Formation',
  ];

  return (
    <section>
      <Fade cascade>
        <article className=" mx-auto mt-20 px-8">
          <Fade direction={'up'}>
            <h2 className="text-xl font-bold text-white lg:text-3xl">
              <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                Services proposés
              </span>
            </h2>
          </Fade>
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            {`DevEvoke est votre partenaire privilégié pour tous vos besoins web.
                            Notre agence de développement web freelance vous propose une gamme complète de services sur
                            mesure pour vous accompagner dans la création, la refonte et l'optimisation de votre site web ou
                            application web et mobile.`}
          </p>

          <h2 className="mt-5  text-lg text-white lg:text-2xl">
            Nos services incluent :
          </h2>
          <div className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            <ul className="list-disc pl-5 text-white">
              {servicesString.map((service, i) => (
                <Fade direction={'left'} delay={100} key={i}>
                  <li key={i}>
                    <span>{service}</span>
                  </li>
                </Fade>
              ))}
            </ul>
          </div>
        </article>
      </Fade>
      <Fade cascade>
        <article className="mx-auto my-20 flex flex-row flex-wrap justify-between gap-10 p-2 xxs:flex-col xs:flex-col sm:flex-row ">
          {services.map((service, i) => (
            <div
              key={i}
              className="sm:full flex rounded-xl hover:bg-gradient-to-t hover:from-pink lg:w-[30%]"
            >
              <article className="flex h-full flex-col ">
                <Fade direction={'up'}>
                  <h2 className=" p-5 text-2xl text-white">
                    <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                      {service.title}
                    </span>
                  </h2>
                </Fade>

                <div className="flex justify-between p-5 flex-col h-full">
                  <p className="h-full text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
                    {service.description}
                  </p>
                  <ul className={'my-3 text-white list-disc pl-5'}>
                    {service.items.map((item, i) => (
                      <li key={i}>
                        {/*<i className="fa-solid fa-caret-up fa-rotate-90"></i>*/}
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/*<p className="mt-10 text-white opacity-50 text-sm">{service.description}</p>*/}

              </article>
            </div>
          ))}
        </article>
      </Fade>
    </section>
  );
};

export default Offerings;
