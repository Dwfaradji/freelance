import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';

const BlogHeader = () => {
  const sortByDateDescending = blogData.sort((a: any, b: any) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  const dataHeader = sortByDateDescending[0];
  return (
    <div>
      <Fade>
        <Link
          className="flex justify-center"
          href={`/blog/${slugify(dataHeader.title).toString()}`}
        >
          <section
            id={dataHeader.id}
            className="mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row"
          >
            <article className="m-5 h-full overflow-hidden rounded-xl object-cover">
              <Image
                src={dataHeader.img}
                width={1000}
                height={800}
                alt={dataHeader.alt}
                priority
              />
            </article>
            <article className="m-5">
              <h2 className="text-sm opacity-50">Develop Process</h2>
              <h1 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl">
                {dataHeader.title}
              </h1>
              <p className="mt-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
                {dataHeader.descriptionShort}
              </p>
              <div className="mt-5 flex items-center">
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
              </div>
            </article>
          </section>
        </Link>
      </Fade>
    </div>
  );
};

export default BlogHeader;
