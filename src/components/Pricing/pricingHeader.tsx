'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { dataPriceOptions } from '@/data/data';

const PricingHeader = () => {
  return (
    <>
      {/* Hero Tarifs */}
      <header className="mb-16">
        <span className="section-label">Tarifs</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Une tarification{' '}
          <span
            className="text-gradient"
            style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
          >
            simple & efficace
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-4 max-w-xl text-lg text-muted"
        >
          Obtenez le plan DevEvoke qui correspond à vos besoins.
          Paiement flexible — 30% à la commande, solde à la livraison.
        </motion.p>
      </header>

      {/* Grille de plans */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {dataPriceOptions.map((option, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Titre + Prix */}
              <div>
                <h2
                  className="text-2xl font-bold text-gradient"
                  style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                >
                  {option.title}
                </h2>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{option.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{option.description}</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {option.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-light">
                    <svg
                      className="size-4 shrink-0 text-secondary-400"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn-primary mt-8 justify-center"
              >
                Commencer
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingHeader;
