'use client';
import React from 'react';
import { motion } from 'motion/react';
import { articles } from '@/data/dataSlideDevis';
import Template from '@/components/Template/template';
import Link from 'next/link';

const FeaturedTemplate = () => {
  const templateFilter = [...articles]
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="section4" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="section-label">Socles Logiciels Santé</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-xl">
              Accélérez votre{' '}
              <span
                className="text-gradient"
                style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                déploiement
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-muted text-base">
              Découvrez nos socles pré-configurés pour le secteur médico-social (Portails Patients, Intranet EHPAD, Téléconsultation). Gagnez du temps et bénéficiez d'une conformité immédiate.
            </p>
          </div>
          <Link href="/templates" className="btn-outline self-start shrink-0 text-sm">
            Voir tous les socles →
          </Link>
        </motion.div>

        {/* Grille de templates */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templateFilter.map((article: any, i: number) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Template
                image={article.image}
                link={article.link}
                name={article.type}
                id={article.id}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/devis/formule-essentielle" className="btn-primary">
            Je veux ce type de solution →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTemplate;
