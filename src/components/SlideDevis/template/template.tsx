'use client';
import React, { useEffect, useState } from 'react';
import { useMyContext } from '@/context/context';

import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import Images from 'next/image';
import { articles } from '@/data/dataSlideDevis';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import './template.css';

//DATA
const Template = () => {
  const [{}, dispatch] = useMyContext();
  const [selectedTemplateOption, setSelectedTemplateOption] = useState(''); // Option par défaut

  const [displayNav, setDisplayNav] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 640) {
      setDisplayNav(false);
    } else {
      setDisplayNav(true);
    }
    window.addEventListener('resize', () => {
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
      dispatch({ type: 'ADD_TEMPLATE', payload: selectedTemplateOption });
    }
  }, [selectedTemplateOption]);

  return (
    <section className={'aspect-auto'}>
      <Swiper
        breakpointsBase={'window'}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={displayNav}
        slidesPerView={'auto'}
        pagination={false}
        allowTouchMove={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiperTemplate"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <article className="group relative flex size-full cursor-pointer flex-col items-center justify-between  ">
              <Images
                width={600}
                height={600}
                src={article.image}
                alt={article.title}
                className="size-full"
                priority={true}
              />

              <div className="absolute flex size-full flex-col items-center justify-between rounded-2xl bg-black bg-opacity-0 p-1 text-xs text-white opacity-0  backdrop-blur-sm transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100 md:p-4 lg:text-base">
                <p className=" flex h-full items-center justify-center text-left">
                  {article.description}
                </p>
                <Link className="mt-5" href={article.link} target={'_blank'}>
                  <Button
                    type={'button'}
                    title={'Démo'}
                    colorClass="bg-gradient-to-r from-pink to-purple "
                  ></Button>
                </Link>
              </div>
            </article>

            <div className="border-sky-500 my-8 flex w-full flex-col  items-center justify-center rounded-2xl border p-2">
              <label
                className={'size-full cursor-pointer'}
                htmlFor={String(article.id)}
              >
                {article.title}
              </label>
              <input
                className={'cursor-pointer'}
                id={String(article.id)}
                type="radio"
                name="articleSelection"
                onChange={() => handleTemplateChange(article.title)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Template;
