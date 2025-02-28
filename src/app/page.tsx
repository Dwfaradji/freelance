'use client';
import Testimonial from '@/components/Home/testimonial';
import Pricing from '@/components/Home/pricing';
import FeaturedTemplate from '@/components/Home/featuredTemplate';
import AnimatedStats from '@/components/Home/AnimatedStats';
import Projects from '@/components/Home/projects';
import Offerings from '@/components/Home/offerings';
import Header from '@/components/Home/header';
import React, { useEffect ,useState} from 'react';
import { MyProvider } from '@/context/context';
import { initialState, reducer } from '@/context/reducer';
import Button from '@/components/ui/Atoms/button';
import NewsLetters from '@/components/ui/Newsletters/newsLetters';
import BlogHome from '@/components/Home/blogHome';
import { Fade } from 'react-awesome-reveal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Scroll from '@/components/ui/scroll';


const Page: React.FC = () => {
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
    <MyProvider initialState={initialState} reducer={reducer}>
    <Scroll/>
      <Header />
      <AnimatedStats />
      <Projects  /> {/* Assurez-vous que la section occupe de l'espace */}
      <Offerings />
      <Fade direction="up">
        <h2 id="section3" className="mb-8 bg-gradient-to-r from-pink to-purple px-4 text-xl font-bold text-gradient lg:text-3xl">
          Découvrez Toutes Nos Formules
        </h2>
      </Fade>

      <Pricing  />
      <div className="mx-auto mt-8 max-w-7xl px-6 text-center lg:block">
        <Button
          colorClass="bg-gradient-to-r from-pink to-purple"
          title="Voir Nos Tarifs"
          textColor="text-white text-xl"
        />
      </div>
      <FeaturedTemplate  />
      <Testimonial  />
      <BlogHome   />
      <NewsLetters  />
    </MyProvider>
  );
};

export default Page;