'use client';
import React, { useEffect ,useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Scroll: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLastSection, setIsLastSection] = useState(false); // Indique si on est sur la dernière section

  const sectionIds = [
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
    'section6',
    'section7',
  ];

  const navBarHeight = 80; // Hauteur approximative de votre barre de navigation en pixels.

  const scrollToNextSection = () => {
    if (isLastSection) {
      // Si on est sur la dernière section, remonte tout en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSectionIndex(0); // Réinitialise à la première section
    } else {
      // Sinon, scrolle vers la section suivante
      if (currentSectionIndex < sectionIds.length - 1) {
        const nextSectionId = sectionIds[currentSectionIndex + 1];
        const nextSection = document.getElementById(nextSectionId);
        if (nextSection) {
          const offsetPosition =
            nextSection.getBoundingClientRect().top +
            window.scrollY -
            navBarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setCurrentSectionIndex(currentSectionIndex + 1);
        }
      }
    }
  };

  const checkIfLastSection = () => {
    // Vérifie si la dernière section est visible
    const lastSection = document.getElementById(sectionIds[sectionIds.length - 1]);
    if (lastSection) {
      const rect = lastSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsLastSection(isVisible);
    }
  };

  useEffect(() => {
    // Ajoute un écouteur pour détecter si on est sur la dernière section
    window.addEventListener('scroll', checkIfLastSection);
    return () => {
      window.removeEventListener('scroll', checkIfLastSection);
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
  )
};

export default Scroll;