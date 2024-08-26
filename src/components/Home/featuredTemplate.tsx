import React from 'react';
import { articles } from '@/data/dataSlideDevis';
import Template from '@/components/Template/template';
import Button from '@/components/ui/Atoms/button';
import Link from 'next/link';

const FeaturedTemplate = () => {
  const sortByDateDescending = articles.sort((a: any, b: any) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  const templateFilter = sortByDateDescending.slice(0, 3);

  return (
    <section className="mx-auto mt-20 px-8">
      <h2 className="font-poppins text-xl font-bold text-white lg:text-3xl">
        Découvrez <br /> Chaque Mois <br /> Nos Nouveaux Templates <br />
      </h2>
      <p className="mt-5 w-3/4 text-lg text-white opacity-50 xxs:w-full lg:w-3/4 lg:text-2xl">
        {`Explorez notre collection de modèles de site web dès aujourd'hui et trouvez celui qui correspond le
                    mieux à votre entreprise. Restez à l'affût des dernières nouveautés en vous abonnant à notre newsletter
                    ou en nous suivant sur les réseaux sociaux. Chez DevEvoke, nous vous offrons les outils
                    dont vous avez besoin pour réussir en ligne.`}
      </p>
      <article className="h-50 mt-10 grid grid-cols-3 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        {templateFilter.map((article) => (
          <Template
            key={article.id}
            image={article.image}
            link={article.link}
            name={article.type}
            id={article.id}
          />
        ))}
      </article>
      <div className="mt-10 w-full items-center justify-center xxs:flex xxs:flex-row  ">
        <Link href={'/templates'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Voir Tout Les Templates"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTemplate;
