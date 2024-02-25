import React from 'react';
import {Fade} from "react-awesome-reveal";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFlip, Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Projects = ({data}) => {
    return (
        <div>
            <Fade bottom cascade>
                <div className="mt-10 px-8">
                    <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
                        Découvrez notre portfolio
                    </h1>
                    <h2 className="text-white text-sm mt-5 opacity-50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever
                        <br></br>
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </h2>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className="max-w-7xl  mx-auto px-8 mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
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
                            {data.map((project, index) => (
                                <SwiperSlide key={project.id}>
                                    <div className={"p-3 h-full"}>
                                        <Link href={project.link}>
                                            <Image
                                                className="h-full rounded-xl"
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
                        <h1 className="text-white text-4xl">Découvrez notre portfolio</h1>
                        <p className="mt-10 text-white opacity-50">
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
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
