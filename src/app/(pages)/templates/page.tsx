'use client';
import React, { useState } from 'react';

import { articles } from '@/data/dataSlideDevis';
import Template from '@/components/Template/template';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...Array.from(new Set(articles.map(a => a.type)))];

  // Filtrer les articles
  const filteredArticles = activeCategory === 'Tous' 
    ? articles 
    : articles.filter(a => a.type === activeCategory);

  return (
    <div className="min-h-screen pb-24">
      <header className="mx-auto mb-12 text-center mt-20 px-4 relative z-10">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Inspiration par métier</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos <span className="text-gradient drop-shadow-sm">Templates</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto mb-4">
            Bienvenue dans notre collection de modèles de sites web triés par profession. Explorez notre sélection et trouvez l'inspiration parfaite pour votre activité.
          </p>
        </Fade>
      </header>

      {/* Barre de filtres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white border-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grille de templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Template
                  image={article.image}
                  link={article.link}
                  name={article.type}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            Aucun template trouvé pour cette catégorie.
          </div>
        )}
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-4 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Un template a retenu votre attention ?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Démarrez votre projet avec l'un de nos modèles de base. Nous nous chargeons de la personnalisation complète pour l'adapter parfaitement à votre image.
          </p>
          <Link href="/devis/presence-digitale" className="btn-primary inline-flex">
            Choisir mon template →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
