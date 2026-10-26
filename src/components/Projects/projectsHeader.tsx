import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { projects } from '@/data/data';

import ProjectCard from '../Projects/projectCard';

const ProjectsHeader = () => {
  return (
    <>
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Réalisations & Retours d’Expérience</span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projets numériques pour le{' '}
            <span className="text-highlight">secteur médico-social</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Découvrez nos développements sur-mesure et nos solutions concrètes déployées pour des associations gestionnaires, IME, SESSAD et EHPAD. Des outils simples, sécurisés et pensés pour alléger la charge administrative des équipes de terrain.
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
