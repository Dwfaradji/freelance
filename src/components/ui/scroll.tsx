'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sectionIds = [
  'section1',
  'section2',
  'section3',
  'section4',
  'section5',
  'section6',
  'section7',
];

const Scroll: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLastSection, setIsLastSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navBarHeight = 80;

  const scrollToNextSection = () => {
    if (isLastSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSectionIndex(0);
    } else if (currentSectionIndex < sectionIds.length - 1) {
      const nextSection = document.getElementById(sectionIds[currentSectionIndex + 1]);
      if (nextSection) {
        const offsetPosition = nextSection.getBoundingClientRect().top + window.scrollY - navBarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const updateCurrentSection = () => {
    setIsVisible(window.scrollY > 200);
    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top + navBarHeight >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSectionIndex(i);
          setIsLastSection(i === sectionIds.length - 1);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    updateCurrentSection();
    return () => window.removeEventListener('scroll', updateCurrentSection);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={scrollToNextSection}
            aria-label={isLastSection ? 'Retour en haut' : 'Section suivante'}
            className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-surface/90 backdrop-blur-md text-muted shadow-lg shadow-black/20 transition-all duration-300 hover:border-primary/60 hover:text-primary-400 hover:shadow-primary/10"
          >
            <motion.svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              animate={{ rotate: isLastSection ? 180 : 0 }}
              transition={{ duration: 0.3 }}
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