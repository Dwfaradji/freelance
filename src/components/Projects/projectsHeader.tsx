import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { projects } from '@/data/data';

import ProjectCard from '../Projects/projectCard';

const ProjectsHeader = () => {
  return (
    <div className="mx-auto">
      <Fade direction="up" delay={1000}>
        <h1 className="mb-8 bg-gradient-to-r from-pink to-purple text-center font-poppins text-2xl font-semibold text-gradient lg:text-4xl xl:text-7xl">
          Découvrez nos projets
        </h1>
        <p className="text-center text-lg text-white lg:text-xl">
          Nous sommes fiers de partager avec vous nos projets les plus récents,
          réalisés avec passion et expertise. Chacun de nos projets est conçu
          pour répondre aux besoins spécifiques de nos clients, en utilisant les
          technologies les plus avancées pour offrir des solutions innovantes et
          performantes. Explorez nos réalisations et découvrez comment nous
          transformons des idées en succès concrets.
        </p>
      </Fade>
      <div className="mx-auto my-20">
        {projects.map((project, index) => (
          <Fade key={index} cascade>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProjectsHeader;
