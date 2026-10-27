'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Scroll: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navBarHeight = 84;

  // Récupérer toutes les sections et en-têtes principaux de la page
  const getSections = (): HTMLElement[] => {
    if (typeof document === 'undefined') return [];

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('main > header, main > section, main > div > section, header, section, footer')
    );

    // Filtrer les éléments imbriqués, modales, navigations ou invisibles
    const topSections: HTMLElement[] = [];
    for (const el of elements) {
      if (el.closest('nav, .modal, [role="dialog"]')) continue;

      // Ne pas retenir les sous-sections imbriquées dans une autre section
      const parentContainer = el.parentElement?.closest('header, section, footer');
      if (parentContainer) continue;

      const rect = el.getBoundingClientRect();
      if (rect.height > 100 && el.offsetParent !== null) {
        if (!topSections.includes(el)) {
          topSections.push(el);
        }
      }
    }

    // Trier les sections par ordre d'apparition vertical
    return topSections.sort((a, b) => {
      const aTop = a.getBoundingClientRect().top + window.scrollY;
      const bTop = b.getBoundingClientRect().top + window.scrollY;
      return aTop - bTop;
    });
  };

  const scrollToNextSection = () => {
    // Si nous sommes déjà tout en bas de page, remonter tout en haut
    if (isNearBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sections = getSections();
    const currentScrollY = window.scrollY;

    // Trouver la prochaine section dont le haut est après la position courante (+ marge navbar)
    const nextSection = sections.find((sec) => {
      const secTop = sec.getBoundingClientRect().top + window.scrollY;
      return secTop > currentScrollY + navBarHeight + 35;
    });

    if (nextSection) {
      const targetY = nextSection.getBoundingClientRect().top + window.scrollY - navBarHeight;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    } else {
      // Si aucune section suivante n'est trouvée, aller au pied de page
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Visible après 60px de défilement pour ne pas encombrer le premier coup d'œil,
    // mais disponible dès que l'utilisateur commence à naviguer
    setIsVisible(scrollY > 60);

    // Détection de fin de page (seuil 200px)
    setIsNearBottom(scrollY + windowHeight >= docHeight - 200);
  }, []);

  useEffect(() => {
    setMounted(true);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-[max(1.5rem,calc(env(safe-area-inset-bottom)+0.75rem))] right-[max(1.25rem,calc(env(safe-area-inset-right)+0.75rem))] sm:bottom-8 sm:right-8 z-40"
        >
          <button
            onClick={scrollToNextSection}
            aria-label={isNearBottom ? 'Retour en haut de page' : 'Faire défiler vers le composant suivant'}
            title={isNearBottom ? 'Retour en haut' : 'Composant suivant'}
            className="group flex size-12 items-center justify-center rounded-full border border-primary-500/30 bg-neutral-900/90 backdrop-blur-xl text-neutral-300 shadow-xl shadow-black/40 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:text-white hover:bg-neutral-800 hover:shadow-primary-500/20 active:scale-95 cursor-pointer"
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: isNearBottom ? 180 : 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="text-neutral-300 group-hover:text-primary-400 transition-colors"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Scroll;