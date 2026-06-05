'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // On bloque l'écran au minimum pour laisser le temps au premier chargement
    // aux images lourdes (comme le portfolio) de se télécharger en arrière-plan.
    const minTime = 2000;
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minTime - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };

    // Si c'est le chargement initial de la page complète
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
      // Fallback sécurité si load ne se déclenche pas
      setTimeout(() => setIsLoading(false), minTime + 3000);
    }

    return () => window.removeEventListener('load', hideLoader);
  }, []); // Se lance uniquement au premier chargement du site

  // Si on scrolle pendant le loading, on force la position en haut
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--color-bg)] overflow-hidden"
          >
            {/* Dynamic Background Glows */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] bg-[var(--color-primary-400)]/10 rounded-full blur-[120px]" 
              />
              <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute w-[400px] h-[400px] bg-[var(--color-secondary-400)]/10 rounded-full blur-[100px]" 
              />
            </div>
            
            {/* 3D Core Orbital Animation */}
            <div className="relative flex items-center justify-center w-40 h-40 [perspective:1000px]">
              {/* Ring 1 - X-Axis */}
              <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 180], rotateZ: [0, 90] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border border-white/5 border-t-[var(--color-primary-400)] shadow-[0_0_15px_rgba(96,165,250,0.2)]"
              />
              
              {/* Ring 2 - Y-Axis */}
              <motion.div
                animate={{ rotateY: [0, 360], rotateX: [0, 90], rotateZ: [0, 180] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border border-white/5 border-r-[var(--color-secondary-400)] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              />

              {/* Ring 3 - Z-Axis */}
              <motion.div
                animate={{ rotateZ: [0, 360], rotateX: [0, 180], rotateY: [0, 90] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-white/5 border-b-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              />
              
              {/* Pulsing Center Core */}
              <motion.div
                animate={{ 
                  scale: [0.6, 1.2, 0.6], 
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-white shadow-[0_0_20px_#fff,0_0_50px_var(--color-primary-400)]"
              />
            </div>

            {/* Typography & Loading Bar Animation */}
            <div className="mt-16 flex flex-col items-center gap-4 relative z-10">
              <div className="flex space-x-3">
                {['D', 'E', 'V', 'E', 'V', 'O', 'K', 'E'].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0.2, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="font-grotesk text-2xl font-bold tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary-400)]"
                  animate={{ scaleX: [0, 1, 0], originX: [1, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-[10px] text-[var(--color-muted-light)] font-light tracking-[0.5em] uppercase">
                  Initialisation
                </p>
                <motion.div 
                  className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-secondary-400)]"
                  animate={{ scaleX: [0, 1, 0], originX: [0, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Contenu de la page qui charge en arrière-plan */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        {children}
      </div>
    </>
  );
}
