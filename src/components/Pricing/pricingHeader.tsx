import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { Done } from '@mui/icons-material';
import { dataPriceOptions } from '@/data/data';

const PricingHeader = () => {
  return (
    <header className="mx-auto mt-10 flex  flex-col items-center font-poppins text-white">
      <Fade>
        <h1 className="m-5 text-6xl font-bold xxs:text-xl sm:text-4xl lg:text-6xl">
          Une tarification simple et transparente
        </h1>
        <h2 className="text-center text-base opacity-50 xxs:text-sm sm:text-lg">
          Obtenez le plan Devevoke qui correspond à vos besoins avec une
          introduction spéciale de prix.
        </h2>
      </Fade>
      <Fade cascade>
        <div className="mt-10 grid grid-cols-2 gap-4 xxs:grid-cols-1 sm:grid-cols-2">
          {dataPriceOptions.map((dataOption, i) => (
            <div key={i}>
              <div className="flex flex-col justify-between rounded-xl bg-lightblack p-10">
                <h2 className="text-gradient bg-gradient-to-r from-pink to-purple text-2xl ">
                  {dataOption.title}
                </h2>
                <h2 className="mt-2 text-4xl font-bold"> {dataOption.price}</h2>
                <p className="mt-2 text-sm opacity-50">
                  {dataOption.description}
                </p>

                <ul className="mt-5">
                  {dataOption.details.map((details, i) => (
                    <li key={i} className="py-2 text-sm opacity-70">
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
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </header>
  );
};

export default PricingHeader;
