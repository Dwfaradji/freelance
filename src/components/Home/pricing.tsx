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
    <section className="py-8 relative">
      {/* Background glow for pricing section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {prices.map((tarif, i) => {
          const isFeatured = tarif.id === '3'; // CRM sur mesure
          
          return (
            <motion.article
              key={tarif.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                isFeatured 
                  ? 'bg-gradient-to-br from-surface-2 to-surface border border-primary-400/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] lg:scale-[1.02] z-10' 
                  : 'glass hover:glass-strong border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Highlight effect for featured */}
              {isFeatured && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400" />
              )}
              
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col lg:flex-row h-full">
                {/* Infos */}
                <div className="flex-1 p-8 sm:p-10 lg:pr-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {tarif.title}
                    </h3>
                    {isFeatured && (
                      <span className="badge bg-primary-600/20 text-primary-400 border-primary-400/30 text-xs font-bold uppercase tracking-wider py-1">
                        Populaire
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-medium text-secondary-400 mb-4">
                    {tarif.subtitle}
                  </h4>
                  
                  <p className="text-muted leading-relaxed max-w-2xl text-base mb-8">
                    {tarif.description}
                  </p>
                  
                  {/* Partial list of details (preview) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                    {tarif.details.slice(0, 4).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-light">
                        <svg className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="truncate" title={detail}>{detail}</span>
                      </li>
                    ))}
                    {tarif.details.length > 4 && (
                      <li className="flex items-start gap-3 text-sm text-muted-light italic">
                        <span className="pl-8">+ {tarif.details.length - 4} autres avantages</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Prix + CTA */}
                <div className="flex flex-col items-center justify-center gap-6 border-t border-white/5 bg-black/20 px-8 py-10 lg:border-l lg:border-t-0 lg:min-w-[320px] backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted uppercase tracking-wider mb-2">À partir de</p>
                    <p className="text-5xl font-bold text-white tracking-tight drop-shadow-sm">
                      {tarif.price}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleOpenModal(tarif.id)}
                    className={isFeatured ? 'btn-primary w-full py-4 text-base shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'btn-outline w-full py-4 text-base'}
                    aria-label={`En savoir plus sur la ${tarif.title}`}
                  >
                    Découvrir l'offre
                  </button>
                  <p className="text-xs text-muted-light text-center mt-2">Paiement flexible : 30% à la commande</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

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
