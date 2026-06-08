import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { projects } from '@/data/data';

import ProjectCard from '../Projects/projectCard';

const ProjectsHeader = () => {
  return (
    <>
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Cas d'usage cliniques</span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Déploiements en{' '}
            <span className="text-gradient drop-shadow-sm">milieu hospitalier</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Nous sommes fiers de partager avec vous nos déploiements les plus récents dans des EHPAD, CHU et cabinets médicaux. 
            Découvrez comment nos architectures sécurisées (HDS) et nos interfaces ergonomiques permettent aux équipes soignantes de diviser leur charge administrative et de se recentrer sur l'essentiel : le patient.
          </p>
        </Fade>
      </header>

      <section className="mx-auto my-20">
        {projects.map((project, index) => (
          <Fade key={index} direction="up" triggerOnce fraction={0.2}>
            <ProjectCard {...project} index={index} />
          </Fade>
        ))}
      </section>
    </>
  );
};

export default ProjectsHeader;
