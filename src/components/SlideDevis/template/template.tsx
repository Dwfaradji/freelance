"use client";
import React, { useEffect, useState } from "react";
import Images from "next/image";
import { articles } from "@/data/dataSlideDevis";


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
import { useMyContext } from "@/context/Mycontext";
import Button from "@/components/ui/Atoms/button";

// Type

interface MultiCheckboxProps {
  options: string[];
  selectedOption: string;
  onTemplateSelect: (option: string) => void;
}

//DATA
const Template = ({ onTemplateSelect }: MultiCheckboxProps) => {
  const [{}, dispatch] = useMyContext();
  const [selectedTemplateOption, setSelectedTemplateOption] = useState(""); // Option par défaut

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

  const handleTemplateChange = (option: string) => {
    setSelectedTemplateOption(option);
  };

  useEffect(() => {
    if (selectedTemplateOption) {
      dispatch({ type: "ADD_TEMPLATE", payload: selectedTemplateOption });
    }
  }, [selectedTemplateOption]);


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
          slideShadows: true
        }}
        pagination={false}
        allowTouchMove={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swipperTemplate"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.id}>
            <div
              className="group relative flex flex-col justify-between items-center cursor-pointer  ">
              <Images
                width={400}
                height={600}
                src={article.image}
                alt={article.title}
              />

              <div
                className="rounded-2xl backdrop-blur-sm text-xs lg:text-base absolute h-full w-full flex-col flex justify-between items-center p-1 md:p-4  bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className=" flex justify-center items-center h-full text-left">
                  {article.description}
                </p>
                <Link className="mt-5" href={article.link} target={"_blank"}>
                  <Button
                    type={"button"}
                    title={"Démo"}
                    colorClass="bg-gradient-to-r from-pink to-purple "
                  ></Button>
                </Link>
              </div>
            </div>

            <div
              className="m-8 p-2 border border-sky-500 rounded-2xl  w-full flex flex-col justify-center items-center">
              <label className={" h-full cursor-pointer"} htmlFor={String(article.id)}>{article.title}</label>
              <input
                className={"cursor-pointer"}
                id={String(article.id)}
                type="radio"
                name="articleSelection"
                onChange={() => handleTemplateChange(article.title)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Template;
