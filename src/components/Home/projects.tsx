import React from 'react';
import {Fade} from "react-awesome-reveal";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFlip, Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {projects} from "@/data/data";

const Projects = () => {
    return (
        <div>
            <Fade cascade>
                <div className="mt-10 px-8">
                    <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
                        Découvrez Nos Projets Web
                    </h1>
                    <h2 className="text-white text-sm mt-5 opacity-50">
                        {`Mon portfolio présente une sélection de mes réalisations en tant que développeur web freelance.
                            Vous y trouverez des sites web, des applications web et des solutions informatiques sur mesure
                            que j"ai créées pour des clients de différents secteurs d"activité.`}
                        <br/>
                        Vous recherchez un développeur web freelance pour donner vie à vos projets web ?
                        <br/>
                        Découvrez mon portfolio et explorez une sélection de mes réalisations.
                    </h2>
                </div>
            </Fade>
            <Fade cascade>
                <div
                    className=" w-full px-8 mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
                    {/*<div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">*/}
                    <Swiper
                        effect={"flip"}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        pagination={true}
                        navigation={false}
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        className="mySwiperProject w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl xxs:w-full xs:w-full sm:w-2/6"
                    >
                        <article className="">
                            {projects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <div className={"p-3 h-full"}>
                                        <Link href={project.link}>
                                            <Image
                                                className="h-full w-full rounded-xl"
                                                src={project.image}
                                                alt={project.alt}
                                                width="400"
                                                height="400"
                                                priority={true}
                                                // objectFit={"cover"}
                                                // sizes="(min-width: 300px) 50vw, 100vw"
                                            />
                                        </Link>
                                        {/*  <div className="">*/}
                                        {/*    <h3 className="">*/}
                                        {/*      {project.title}*/}
                                        {/*    </h3>*/}
                                        {/*    {project.tech.map((tech) => (*/}
                                        {/*        <span*/}
                                        {/*            className="text-2xl w-17 md:w-32 lg:w-40"*/}
                                        {/*            key={tech}*/}
                                        {/*        >*/}
                                        {/*  {tech}*/}
                                        {/*</span>*/}
                                        {/*    ))}*/}
                                        {/*  </div>*/}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </article>
                    </Swiper>
                    {/*</div>*/}

                    <div className="w-4/6 bg-lightblack p-8 rounded-xl  xxs:w-full xs:w-full sm:w-4/6">
                        <h1 className="text-white text-4xl"> Explorez nos réalisations et laissez-vous inspirer</h1>
                        <p className="mt-8 text-white opacity-50">
                            Découvrez comment nous avons aidé nos clients à concrétiser leur vision en ligne. De sites
                            vitrines élégants et responsives à des applications mobiles performantes et intuitives,
                            notre équipe freelance est capable de répondre à tous vos besoins.
                        </p>
                        <p className="mt-8 text-white opacity-50">
                            Prêts à relever de nouveaux défis ?
                            <br/>
                            {`Nous sommes toujours à la recherche de nouveaux défis et nous sommes impatients de
                                collaborer avec vous sur votre prochain projet de développement web ou d'application en
                                freelance. Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis
                                gratuit.`}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
