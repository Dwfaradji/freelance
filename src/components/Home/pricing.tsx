'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Modal from '@/components/ui/Modal/modal';
import { prices } from '@/data/data';

const PricingMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState('');

  const handleOpenModal = (id: string) => {
    setIsOpen(true);
    setContentModal(id);
  };

  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        {prices.map((tarif, i) => (
          <motion.article
            key={tarif.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-400 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Trait gauche coloré */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary-400 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col sm:flex-row">
              {/* Indicateur de live */}
              <div className="absolute right-6 top-6 flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-secondary-400" />
                </span>
              </div>

              {/* Infos */}
              <div className="flex-1 p-6 sm:p-8">
                <h2
                  className="text-2xl font-bold text-gradient sm:text-3xl"
                  style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                >
                  {tarif.title}
                </h2>
                <h3 className="mt-1 text-lg font-medium text-muted-light">
                  {tarif.subtitle}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg">
                  {tarif.description}
                </p>
              </div>

              {/* Prix + CTA */}
              <div className="flex flex-col items-center justify-center gap-4 border-t border-border bg-gradient-to-br from-primary/5 to-secondary/5 px-8 py-6 sm:border-l sm:border-t-0 sm:min-w-[220px]">
                <div className="text-center">
                  <p className="text-sm text-muted">À partir de</p>
                  <p className="mt-1 text-4xl font-bold text-white lg:text-5xl">
                    {tarif.price}
                  </p>
                </div>
                <button
                  id={tarif.id}
                  onClick={() => handleOpenModal(tarif.id)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {isOpen && (
        <Modal
          showModal={isOpen}
          setIsOpen={setIsOpen}
          contentModal={contentModal}
          prices={prices}
        />
      )}
    </section>
  );
};

export default PricingMain;
