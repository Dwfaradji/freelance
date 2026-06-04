import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { projects } from '@/data/data';

import ProjectCard from '../Projects/projectCard';

const ProjectsHeader = () => {
  return (
    <>
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Portfolio</span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Découvrez nos{' '}
            <span className="text-gradient drop-shadow-sm">réalisations</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Nous sommes fiers de partager avec vous nos projets les plus
            récents, réalisés avec passion et expertise. Chacun de nos projets
            est conçu pour répondre aux besoins spécifiques de nos clients, en
            utilisant les technologies les plus avancées pour offrir des
            solutions innovantes et performantes. Explorez nos réalisations et
            découvrez comment nous transformons des idées en succès concrets.
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
