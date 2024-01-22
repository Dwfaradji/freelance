"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { useMyContext } from "@/context/Mycontext";

// Type
interface Article {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface MultiCheckboxProps {
  options: string[];
  selectedOption: string;
  onTemplateSelect: (option: string) => void;
}

//DATA
const articles: Article[] = [
  {
    id: 1,
    title: "ElegancePro",
    image: images.hrnet,
    description:
      "Un template sophistiqué et élégant, idéal pour les entreprises qui souhaitent projeter une image de luxe et de raffinement.",
  },
  {
    id: 2,
    title: "TechSavvy",
    image: images.kasa,
    description:
      "Un design moderne et interactif, adapté aux entreprises technologiques, aux blogueurs high-tech ou aux startups.",
  },
  {
    id: 3,
    title: "InnovaTech",
    image: images.gameOne,
    description:
      "Un design moderne et interactif, adapté aux entreprises technologiques, aux blogueurs high-tech ou aux startups.",
  },
  {
    id: 4,
    title: "CreativeMind",
    image: images.fishEyes,
    description:
      "Un design moderne et interactif, adapté aux entreprises technologiques, aux blogueurs high-tech ou aux startups.",
  },
  {
    id: 5,
    title: "Gastronome",
    image: images.ohmyfood,
    description:
      "Conçu pour les établissements éducatifs, les formateurs ou les sites de e-learning, avec un aspect à la fois professionnel et accessible.",
  },
  {
    id: 6,
    title: "FashionTrend",
    image: images.chouetteAgence,
    description:
      "Parfait pour les artisans, les boutiques de produits faits main ou les petits commerces, offrant un design chaleureux et personnalisé.",
  },
];

const Template = ({ onTemplateSelect }: MultiCheckboxProps) => {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        allowTouchMove={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.id}>
            <div className="group  w-full relative flex flex-col justify-center items-center cursor-pointer">
              <Images
                width={150}
                height={100}
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: "215px" }}
              />
              <div className="absolute h-full w-full flex items-center p-4  bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {article.description}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center m-5">
              <label htmlFor={String(article.id)}>{article.title}</label>
              <input
                className={"cursor-pointer"}
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
