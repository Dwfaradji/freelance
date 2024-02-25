"use client";
import React, {useEffect, useState} from "react";
import Images from "next/image";
import template1 from "@/images/templates/design_interieur.png"


// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./template.css";

// import required modules Swiper
import {Navigation} from "swiper/modules";
import {EffectCoverflow, Pagination} from "swiper/modules";
import Link from "next/link";

// Type
interface Article {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
}

interface MultiCheckboxProps {
    options: string[];
    selectedOption: string;
    onTemplateSelect: (option: string) => void;
}

//DATA
const url = "https://www.devevoke.com";
// const url = "http://localhost:3000";

const articles: Article[] = [
    {
        id: 1,
        title: "Clinique Bien-Être ⚕️",
        image: "",
        description:
            "Créez un site web professionnel et rassurant pour votre clinique médicale avec ce template intuitif et personnalisable.",
        link: `${url}/template/mediplus/index.html/`,
    },
    {
        id: 2,
        title: "Éveil Intérieur ‍♀️",
        image: "",
        description:
            "Trouvez votre équilibre intérieur et explorez votre potentiel avec ce template conçu pour les yogis de tous niveaux.",
        link: `${url}/template/yoga/index.html/`,
    },
    {
        id: 3,
        title: "Éco-Futur",
        image: "",
        description:
            "Engagez-vous dans la transition écologique et donnez vie à votre projet d'énergie renouvelable avec ce template dynamique et informatif.",
        link: `${url}/template/renewableEnergy/index.html/`,
    },
    {
        id: 4,
        title: "Studio Créatif",
        image: "",
        description:
            "Exprimez votre vision unique et présentez votre entreprise avec style grâce à ce template flexible et adaptable à tous les domaines du design.",
        link: `${url}/template/design-interieur/index.html`,
    },
    {
        id: 5,
        title: "Terre nourricière",
        image: "",
        description:
            "Valorisez votre exploitation agricole et partagez votre passion avec ce template authentique et convivial.",
        link: `${url}/template/organic-farm/index.html`,
    },
    {
        id: 6,
        title: "Salon Tendance ‍♀",
        image: "",
        description:
            "Mettez en valeur votre talent et attirez de nouveaux clients avec ce template élégant et moderne dédié aux professionnels de la coiffure.",
        link: `${url}/template/hairdresser/index.html`,
    },
];

const Template = ({onTemplateSelect}: MultiCheckboxProps) => {
    const [displayNav, setDisplayNav] = useState(true);
    useEffect(() => {
        if (window.innerWidth <= 640) {
            setDisplayNav(false);
        } else {
            setDisplayNav(true);
        }
        window.addEventListener("resize", (e) => {
            if (window.innerWidth <= 640) {
                setDisplayNav(false);
            } else {
                setDisplayNav(true);
            }
        });
    }, [displayNav]);
    return (
        <div>
            <Swiper
                breakpointsBase={"window"}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                navigation={displayNav}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                allowTouchMove={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swipperTemplate"
            >
                {articles.map((article, index) => (
                    <SwiperSlide key={article.id}>
                        <div
                            className="group  w-full relative flex flex-col justify-between items-center cursor-pointer  ">
                            <Images
                                width={400}
                                height={600}
                                // src={article.image}
                                alt={article.title}
                                src={template1}
                                // style={{ width: "100%", height: "100%" }}
                                // priority={true}
                            />

                            <div
                                className="rounded-2xl backdrop-blur-sm text-base absolute h-full w-full flex-col flex justify-between items-center p-4  bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className=" flex justify-center items-center h-full text-left">
                                    {article.description}
                                </p>
                                <Link className="mt-5" href={article.link} target={"_blank"}>
                                    <button>Démo</button>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-8 border border-sky-500 rounded-2xl  w-full flex flex-col justify-center items-center">
                            <label className={"w-full h-full  cursor-pointer"} htmlFor={String(article.id)}>{article.title}</label>
                            <input
                                className={"cursor-pointer mt-3 mb-3"}
                                id={String(article.id)}
                                type="radio"
                                name="articleSelection"
                                onChange={() => onTemplateSelect(article.title)}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Template;
