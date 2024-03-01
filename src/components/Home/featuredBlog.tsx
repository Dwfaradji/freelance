import React from 'react';
import tempDesign from '@/images/templates/design_interieur.webp';
import tempEnergy from '@/images/templates/energyTemplate.webp';
import tempOrganic from '@/images/templates/organic-farm.webp';
import Image from 'next/image';

const FeaturedBlog = () => {
  return (
    <section className="mx-auto mt-10 px-8">
      <h2 className="font-poppins text-6xl font-bold text-white xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        Découvrez <br /> Chaque Mois <br /> Nos Nouveaux Templates <br />
      </h2>
      <p className="mt-5 w-3/4 text-lg text-white opacity-50 xxs:w-full lg:w-3/4">
        {`Explorez notre collection de modèles de site web dès aujourd'hui et trouvez celui qui correspond le
                    mieux à votre entreprise. Restez à l'affût des dernières nouveautés en vous abonnant à notre newsletter
                    ou en nous suivant sur les réseaux sociaux. Chez DevEvoke, nous vous offrons les outils
                    dont vous avez besoin pour réussir en ligne.`}
      </p>
      <article className="mt-10 grid grid-cols-3 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-xl opacity-70 hover:opacity-100">
          <Image
            src={tempDesign}
            width={1950}
            height={1300}
            className="h-full"
            alt="template_designer"
          />
          <div className="absolute inset-0 z-auto flex items-center p-2 text-3xl font-bold text-white opacity-0 backdrop-blur-sm duration-300 hover:opacity-100">
            Design
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl opacity-70 hover:opacity-100">
          <Image
            src={tempEnergy}
            width={1950}
            height={1300}
            className=" h-full"
            alt="template_energy"
          />
          <div className="absolute inset-0 z-10 flex items-center p-2 text-3xl font-bold text-white opacity-0 backdrop-blur-sm duration-300 hover:opacity-100">
            Energy renouvelable
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl opacity-70 hover:opacity-100">
          <Image
            src={tempOrganic}
            width={1950}
            height={1300}
            className="h-full"
            alt="template_organic"
          />
          <div className="absolute inset-0 z-10 flex items-center p-2 text-3xl font-bold text-white opacity-0 backdrop-blur-sm duration-300 hover:opacity-100">
            Agriculture
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeaturedBlog;
