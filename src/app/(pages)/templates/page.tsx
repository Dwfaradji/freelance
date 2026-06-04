'use client';
import React from 'react';

import { articles } from '@/data/dataSlideDevis';
import Template from '@/components/Template/template';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <header className="mx-auto mb-16 text-center mt-8 px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Inspiration</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos <span className="text-gradient drop-shadow-sm">Templates</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto mb-4">
            Bienvenue dans notre collection exclusive de modèles de sites web. Explorez notre sélection variée et trouvez l'inspiration parfaite pour votre projet.
          </p>
          <p className="text-muted-light max-w-2xl mx-auto">
            Chez DevEvoke, nous transformons ces bases solides en expériences uniques sur mesure pour renforcer votre image de marque et attirer de nouveaux clients.
          </p>
        </Fade>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade cascade triggerOnce direction="up" damping={0.1} fraction={0.2}>
            {articles.map((article, i) => (
              <Template
                key={i}
                image={article.image}
                link={article.link}
                name={article.type}
                id={article.id}
              />
            ))}
          </Fade>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-4 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Un template vous a inspiré ?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Démarrez votre projet avec l'un de nos modèles de base. Nous nous chargeons de la personnalisation complète pour l'adapter parfaitement à votre image.
          </p>
          <Link href="/devis/formule-essentielle" className="btn-primary inline-flex">
            Choisir mon template →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
