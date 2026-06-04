'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { dataPriceOptions } from '@/data/data';

const PricingHeader = () => {
  return (
    <>
      {/* Hero Tarifs */}
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Tarifs</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Une tarification{' '}
            <span className="text-gradient drop-shadow-sm">
              transparente
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Obtenez le plan DevEvoke qui correspond parfaitement à vos besoins.
            Paiement flexible : 30% à la commande, solde à la livraison du projet.
          </p>
        </Fade>
      </header>

      {/* Grille de services additionnels (Maintenance / Hébergement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {dataPriceOptions.map((option, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:glass-strong transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {option.title}
                </h2>
                <div className="mt-3 flex flex-col gap-1 mb-4">
                  {option.price.startsWith('À partir de') ? (
                    <>
                      <span className="text-sm font-medium text-muted uppercase tracking-wider">À partir de</span>
                      <span className="text-4xl font-bold text-gradient">{option.price.replace('À partir de ', '')}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gradient">{option.price}</span>
                  )}
                </div>
                <p className="text-sm text-muted-light leading-relaxed mb-6">
                  {option.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {option.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg
                      className="size-5 shrink-0 text-primary-400 mt-0.5"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-outline w-full justify-center"
              >
                Nous contacter
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingHeader;
