'use client';

import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Scroll: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLastSection, setIsLastSection] = useState(false);

  const sectionIds = [
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
    'section6',
    'section7',
  ];

  const navBarHeight = 80; // Hauteur de la barre de navigation.

  // Fonction pour scroller vers la section suivante
  const scrollToNextSection = () => {
    if (isLastSection) {
      // Si on est à la dernière section, remonte tout en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSectionIndex(0);
    } else if (currentSectionIndex < sectionIds.length - 1) {
      const nextSectionId = sectionIds[currentSectionIndex + 1];
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        const offsetPosition =
          nextSection.getBoundingClientRect().top +
          window.scrollY -
          navBarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  // Fonction pour détecter la section visible actuelle
  const updateCurrentSection = () => {
    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Vérifie si la section est dans la vue (majoritairement visible)
        if (rect.top + navBarHeight >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSectionIndex(i);
          setIsLastSection(i === sectionIds.length - 1);
          break;
        }
      }
    }
  };

  useEffect(() => {
    // Ajoute un écouteur pour détecter la section visible
    window.addEventListener('scroll', updateCurrentSection);
    updateCurrentSection(); // Vérifie au chargement initial
    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 flex justify-center items-center z-50">
      <button
        onClick={scrollToNextSection}
        className="hover:bg-gradient-to-r hover:animate-pulse from-pink to-purple p-4 rounded-full"
      >
        {isLastSection ? (
          <KeyboardArrowUpIcon className="animate-bounce text-white" />
        ) : (
          <KeyboardArrowDownIcon className="animate-bounce text-white" />
        )}
      </button>
    </div>
  );
};

export default Scroll;