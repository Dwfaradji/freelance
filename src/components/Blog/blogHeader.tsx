import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';
import myPhoto from '@/images/about/photo-profil-688.webp';
import Images from '@/images/images';

const BlogHeader = () => {
  //Tri par date
  const sortByDateDescending = blogData.sort((a: any, b: any) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  //Formatage date
  const latestPost = sortByDateDescending[0];
  const formattedDate = new Date(latestPost.date).toLocaleDateString('fr-FR');
  const dataHeader = sortByDateDescending[0];

  return (
    <>
      <Fade triggerOnce={true}>
        <Link
          className="flex justify-center"
          href={`/blog/${slugify(dataHeader.title).toString()}`}
        >
          <section
            id={dataHeader.id}
            className="mx-auto flex columns-2 text-white xxs:flex-col sm:flex-row "
          >
            <article className=" overflow-hidden rounded-xl object-cover">
              <Image
                src={dataHeader.img}
                width={500}
                height={500}
                alt={dataHeader.alt}
                className="h-full"
              />
            </article>
            <article className="m-5">
              <h2 className="mb-2 text-sm opacity-50">Develop Process</h2>
              <h2 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl lg:text-4xl">
                {dataHeader.title}
              </h2>
              <p className="mt-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
                {dataHeader.descriptionShort}
              </p>
              <div className="mt-5 flex">
                <Image
                  width={50}
                  height={50}
                  className="overflow-hidden rounded-full"
                  src={myPhoto.src}
                  alt={'auteur'}
                  sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1600px"
                />

                <div className="ml-2">
                  <h2>Boucif Faradji</h2>
                  <h3 className="text-xs opacity-50">
                    {String(formattedDate)}
                  </h3>
                </div>
              </div>
            </article>
          </section>
        </Link>
      </Fade>
    </>
  );
};

export default BlogHeader;
