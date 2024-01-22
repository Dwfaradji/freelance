"use client";
import React from "react";
import "./Project.scss";
import Image from "next/image";

// Import Swiper React components
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// import "./styles.css";

// import required modules

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  tech: string[];
  link: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {

  return (
    <section className="container-project">
      <div className="content-project">
        <div id="project"></div>
        <h2 className="text-h2">Découvrez notre portfolio</h2>
        <p className="text-xl">
          {`Découvrez notre portfolio de projets exceptionnels dans le domaine de
                la création de site web et d'application. Notre section "Projets"
                met en avant notre expertise en utilisant des technologies modernes
                telles que React, Vue.js et Node.js. Explorez nos réalisations pour
                voir comment nous avons aidé nos clients à concrétiser leur vision en
                ligne. De site vitrine élégants à des applications mobiles
                performantes, notre équipe freelance est prête à relever de nouveaux
                défis et à créer des expériences utilisateur remarquables. Consultez
                nos projets et contactez-nous pour discuter de votre prochain projet
                de développement web ou d'application en freelance.`}
        </p>

        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiperProject bg-white border rounded "
        >
          <article className="projects-grid project-card">
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <Link href={project.link}>
                  <Image
                    className="project-card"
                    src={project.image}
                    alt={project.alt}
                    width="300"
                    height="300"
                  />
                </Link>
                <div className="text-center bg-white m-5">
                  <h3 className="text-4xl">{project.title}</h3>
                  {project.tech.map((tech) => (
                    <span
                      className="text-2xl w-17 md:w-32 lg:w-40"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </article>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsGrid;
