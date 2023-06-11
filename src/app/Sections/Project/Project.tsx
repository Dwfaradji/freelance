import React from "react";
import "./Project.scss";
import Image from "next/image";
interface Project {
  id: number;
  title: string;
  image: string;
  tech: string[];
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className="container-project">
      <div className="content-project">
        <div id="project"></div>
        <h2>Découvrez notre portfolio</h2>
        <p>
          {`Découvrez notre portfolio de projets exceptionnels dans le domaine de
                la création de sites web et d'applications. Notre section "Projets"
                met en avant notre expertise en utilisant des technologies modernes
                telles que React, Vue.js et Node.js. Explorez nos réalisations pour
                voir comment nous avons aidé nos clients à concrétiser leur vision en
                ligne. De sites vitrines élégants à des applications mobiles
                performantes, notre équipe freelance est prête à relever de nouveaux
                défis et à créer des expériences utilisateur remarquables. Consultez
                nos projets et contactez-nous pour discuter de votre prochain projet
                de développement web ou d'application en freelance.`}
        </p>
        <article className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                width="1024"
                height="100"
              />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                {project.tech.map((tech) => (
                  <span className="w-17 md:w-32 lg:w-40" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ProjectsGrid;
