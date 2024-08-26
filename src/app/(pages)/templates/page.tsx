'use client';
import React from 'react';

import { articles } from '@/data/dataSlideDevis';
import Template from '@/components/Template/template';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
      <div className={"pt-12"}>
        <Fade cascade delay={500} direction={'left'}>
          <h1
            className={
              'font-poppins  text-2xl font-semibold text-white lg:text-4xl xl:text-7xl '
            }
          >
            Nos Templates
          </h1>

          <p className={'mt-8 text-lg text-white lg:text-2xl'}>
            {`Bienvenue dans notre collection de modèles de site web ! Explorez dès
          aujourd'hui notre sélection variée et trouvez le modèle parfaitement
          adapté à votre entreprise. Chez DevEvoke, nous sommes déterminés à vous
          fournir les outils nécessaires pour réussir en ligne.`}
          </p>
          <p className={'mt-3 text-lg text-white lg:text-2xl'}>
            {` Restez à jour avec les dernières tendances en vous abonnant à notre
          newsletter ou en nous suivant sur les réseaux sociaux. Ne manquez aucune
          nouveauté et soyez toujours informé des opportunités pour améliorer
          votre présence en ligne.`}
          </p>
          <p className={'mt-3 text-lg text-white lg:text-2xl'}>
            Découvrez comment nos modèles peuvent aider à renforcer votre image
            de marque, à attirer de nouveaux clients et à maximiser votre succès
            sur le web. Chez DevEvoke, votre réussite est notre priorité.
          </p>
        </Fade>

        <article
          className={
            'mt-20 grid grid-cols-3 gap-20 rounded-2xl p-8 xxs:grid-cols-1 lg:grid-cols-3'
          }
        >
          <Fade cascade triggerOnce delay={500} direction={'bottom-left'}>
            {articles.map((article, i) => (
              <div key={i}>
                <Template
                  image={article.image}
                  link={article.link}
                  name={article.type}
                  id={article.id}
                />
              </div>
            ))}
          </Fade>
        </article>
      </div>
  );
};

export default Page;
