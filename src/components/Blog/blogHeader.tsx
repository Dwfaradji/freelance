import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import blogData from '@/data/dataBlog';

const BlogHeader = () => {
  const dataHeader = blogData[3];
  return (
    <div>
      <Fade>
        <section
          id={dataHeader.id}
          className="mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row"
        >
          <div className="m-5 h-full overflow-hidden rounded-xl object-cover">
            <Image
              src={dataHeader.img}
              width={1000}
              height={800}
              alt={dataHeader.alt}
            />
          </div>
          <div className="m-5">
            <h2 className="text-sm opacity-50">Develop Process</h2>
            <h1 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl">
              {dataHeader.title}
            </h1>
            <p className="mt-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
              {dataHeader.descriptionShort}
            </p>
            <article className="mt-5 flex items-center">
              <div className="size-10 overflow-hidden rounded-full object-cover">
                {/*<Image*/}
                {/*  width={30}*/}
                {/*  height={30}*/}
                {/*  className="h-10 w-10"*/}
                {/*  src={""}*/}
                {/*  alt={"auteur"}*/}
                {/*/>*/}
              </div>
              <div className="ml-2">
                <h2>Boucif Faradji</h2>
                <h4 className="text-xs opacity-50">{dataHeader.date}</h4>
              </div>
            </article>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default BlogHeader;
