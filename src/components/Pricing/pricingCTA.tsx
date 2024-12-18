import React from 'react';
import Button from '@/components/ui/Atoms/button';
import Link from 'next/link';

const PricingCTA = () => {
  return (
    <div className="mx-auto mt-20 flex  max-w-7xl flex-col items-center text-center text-white">
      <h2 className="font-poppins text-4xl font-bold xxs:text-2xl sm:text-4xl">
        {` Besoin d'un coup de pouce pour faire le bon choix ?`}
      </h2>
      {/*<p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">*/}
      <p className="m-3 text-justify opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
        Trouver la solution idéale parmi tant d’options peut sembler
        décourageant, mais ne vous inquiétez plus ! Nos templates sont conçus
        pour vous simplifier la tâche. Que vous recherchiez un design moderne,
        une fonctionnalité avancée ou un modèle adapté à vos besoins, nous avons
        ce qu’il vous faut. Chaque template est pensé pour vous aider à faire un
        choix éclairé, en toute confiance et sans perdre de temps. Cliquez sur
        le bouton ci-dessous pour explorer nos meilleures options et trouver
        celui qui vous correspond parfaitement !
      </p>

      <div className="mt-6">
        <Link href={'/templates'}>
          <Button
            title="Explorer les Templates"
            colorClass="bg-gradient-to-r from-pink to-purple text-xl"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCTA;
