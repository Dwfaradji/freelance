'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '@/data/data';

const Offerings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="section2" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="section-label">Nos expertises</span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Au cœur de notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow-sm">savoir-faire</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl font-light">
            Découvrez nos solutions sur-mesure pour donner vie à vos projets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Menu de navigation (Onglets) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Scroll horizontal sur mobile, vertical sur desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 no-scrollbar snap-x">
              {services.map((service, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 snap-start shrink-0 lg:shrink w-[85vw] sm:w-[60vw] lg:w-full border ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-500/10 to-transparent border-primary-500/30' 
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    {/* Ligne indicatrice */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary-400 rounded-r-full hidden lg:block"
                      />
                    )}
                    
                    <div className={`flex items-center justify-center size-10 rounded-xl transition-colors ${isActive ? 'bg-primary-500/20 text-primary-400' : 'bg-black/20 text-gray-500'}`}>
                      <span className="font-mono text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className={`font-semibold text-sm sm:text-base pr-4 line-clamp-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zone d'affichage du contenu (Panneau actif) */}
          <div className="lg:col-span-7 relative min-h-[400px]">
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
                <div className="h-full flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-surface-2 to-[#0a0a0a] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                  
                  {/* Effet de lueur arrière-plan fixe */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />
                  
                  {/* Contenu textuel qui s'adapte naturellement */}
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
                      {services[activeIndex].title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                      {services[activeIndex].description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">Points clés</h4>
                      <div className="flex flex-wrap gap-3">
                        {services[activeIndex].items.map((item, j) => (
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