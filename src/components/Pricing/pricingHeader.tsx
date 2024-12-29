import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { Done } from '@mui/icons-material';
import { dataPriceOptions } from '@/data/data';

const PricingHeader = () => {
  return (
    <>
      <header className="mx-auto flex  flex-col  font-poppins text-white">
        <span className="text-sm text-white opacity-50">Tarifs</span>
        <Fade cascade direction={'up'}>
          <h1 className="mb-8 bg-gradient-to-r from-pink to-purple font-poppins text-2xl font-semibold text-gradient lg:text-4xl xl:text-7xl">
            Une tarification simple et Efficace
          </h1>
          <p className="opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            Obtenez le plan Devevoke qui correspond à vos besoins avec une
            introduction spéciale de prix.
          </p>
        </Fade>
      </header>

      <section>
        <Fade cascade>
          <div className="mt-10 grid grid-cols-2 gap-4 font-poppins text-white xxs:grid-cols-1 sm:grid-cols-2">
            {dataPriceOptions.map((dataOption, i) => (
              <article
                key={i}
                className="flex flex-col justify-between rounded-xl bg-lightblack p-10"
              >
                <h2 className="bg-gradient-to-r from-pink to-purple text-2xl text-gradient ">
                  {dataOption.title}
                </h2>
                <h2 className="mt-2 text-4xl font-bold"> {dataOption.price}</h2>
                <p className="mt-2 text-sm opacity-75">
                  {dataOption.description}
                </p>

                <ul className="mt-5">
                  {dataOption.details.map((details, i) => (
                    <li key={i} className="py-2 text-sm opacity-75">
                      <Done className={'mr-2 text-blue'} />
                      {details}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-5 bg-gradient-to-r from-pink to-purple p-2 px-5 text-center"
                  href={'/contact'}
                >
                  Commencez
                </Link>
              </article>
            ))}
          </div>
        </Fade>
      </section>
    </>
  );
};

export default PricingHeader;
