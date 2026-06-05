'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '@/data/data';

const Offerings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="section2" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center mb-16"
        >
          <span className="section-label">Notre Expertise</span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Conçus pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow-sm">performer</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl font-light">
            De la conception à la mise en ligne, nous maîtrisons chaque étape de votre succès technologique. Fini les sites vitrines obsolètes, place aux applications nouvelle génération.
          </p>
        </motion.div>

        {/* --- MOBILE LAYOUT: ACCORDION --- */}
        <div className="flex flex-col gap-4 lg:hidden">
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={i} className={`flex flex-col rounded-3xl border transition-all duration-300 overflow-hidden ${isActive
                ? 'bg-gradient-to-br from-surface-2 to-[#0a0a0a] border-primary-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                : 'bg-white/[0.02] border-white/5'
                }`}>
                {/* Accordion Header (Button) */}
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : i)}
                  className="flex items-center justify-between p-5 text-left w-full"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center size-10 rounded-xl transition-colors shrink-0 ${isActive ? 'bg-primary-500/20 text-primary-400' : 'bg-black/20 text-gray-500'}`}>
                      <span className="font-mono text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className={`font-semibold text-sm sm:text-base pr-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-primary-400' : 'text-gray-500'}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 sm:p-6 sm:pt-2 border-t border-white/5 mt-2">
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                          {service.description}
                        </p>

                        <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">Points clés</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-500/20 bg-primary-900/10 text-gray-300 text-xs font-medium"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              {item.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP LAYOUT: TABS --- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch">

          {/* Menu de navigation (Onglets) */}
          <div className="col-span-5 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              {services.map((service, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 w-full border ${isActive
                      ? 'bg-gradient-to-r from-primary-500/10 to-transparent border-primary-500/30'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                      }`}
                  >
                    {/* Ligne indicatrice */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary-400 rounded-r-full"
                      />
                    )}

                    <div className={`flex items-center justify-center size-10 rounded-xl transition-colors shrink-0 ${isActive ? 'bg-primary-500/20 text-primary-400' : 'bg-black/20 text-gray-500'}`}>
                      <span className="font-mono text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    <h3 className={`font-semibold text-base pr-4 line-clamp-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zone d'affichage du contenu (Panneau actif) */}
          <div className="col-span-7 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                {/* Le conteneur principal */}
                <div className="h-full flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-surface-2 to-[#0a0a0a] p-12 shadow-2xl relative overflow-hidden">

                  {/* Effet de lueur arrière-plan fixe */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Contenu textuel */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center justify-center size-16 rounded-2xl bg-white/5 border border-white/10 text-primary-400 shadow-inner">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                      {services[activeIndex]?.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                      {services[activeIndex]?.description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">Points clés</h4>
                      <div className="flex flex-wrap gap-3">
                        {services[activeIndex]?.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-900/10 text-gray-300 text-sm font-medium"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {item.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offerings;