"use client";
import React, { useEffect, useState } from "react";
import Images from "next/image";
import images from "@/assets/Gallery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./template.css";

// import required modules Swiper
import { Navigation } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";
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

//localhost:3000/
//DATA
const url = "http://localhost:3000" || "https://www.devevoke.com";

const articles: Article[] = [
  {
    id: 1,
    title: "HealthPro",
    image: images.templateMedical,
    description:
      "HealthPro est un modèle concis pour les professionnels de santé, offrant clarté, navigation intuitive et sécurité en ligne, parfait pour une communication efficace et sécurisée.",
    link: `${url}/template/mediplus/index.html/`,
  },
  {
    id: 2,
    title: "YogaFlow",
    image: images.templateYoga,
    description:
      "YogaFlow est un template zen et dynamique, idéal pour les studios de yoga ou les instructeurs indépendants. Il met en valeur la pratique du yoga, les cours et les ateliers avec une touche de sérénité et d'inspiration, favorisant une connexion profonde avec les visiteurs.",
    link: `${url}/template/yoga/index.html/`,
  },
  {
    id: 3,
    title: "GreenEnergy",
    image: images.templateEnergy,
    description:
      "GreenEnergy est un modèle vibrant, conçu pour les entreprises d'énergie renouvelable. Il souligne l'engagement envers la durabilité et l'innovation, présentant technologies propres et projets verts de manière claire et attrayante.",
    link: `${url}/template/renewableEnergy/index.html/`,
  },
  // {
  //   id: 4,
  //   title: "CreativeMind",
  //   image: images.fishEyes,
  //   description:
  //     "Un design moderne et interactif, adapté aux entreprises technologiques, aux blogueurs high-tech ou aux startups.",
  // },
  // {
  //   id: 5,
  //   title: "Gastronome",
  //   image: images.ohmyfood,
  //   description:
  //     "Conçu pour les établissements éducatifs, les formateurs ou les sites de e-learning, avec un aspect à la fois professionnel et accessible.",
  // },
  // {
  //   id: 6,
  //   title: "FashionTrend",
  //   image: images.chouetteAgence,
  //   description:
  //     "Parfait pour les artisans, les boutiques de produits faits main ou les petits commerces, offrant un design chaleureux et personnalisé.",
  // },
];

const Template = ({ onTemplateSelect }: MultiCheckboxProps) => {
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
    <>
      <Swiper
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
        className="swipper-template"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.id}>
            <div className="group  w-full relative flex flex-col justify-center items-center cursor-pointer">
              <Images
                width={400}
                height={800}
                src={article.image}
                alt={article.title}
                // style={{ width: "100%", height: "100%" }}
                priority={true}
              />

              <div className="text-base absolute h-full w-full flex-col flex justify-between items-center p-4  bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="flex justify-center items-center h-full">{article.description}</p>
                <Link className="mt-5" href={article.link}>
                  <button>Démo</button>
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center m-5">
              <label htmlFor={String(article.id)}>{article.title}</label>
              <input
                className={"cursor-pointer mt-3"}
                id={String(article.id)}
                type="radio"
                name="articleSelection"
                onChange={() => onTemplateSelect(article.title)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Template;
