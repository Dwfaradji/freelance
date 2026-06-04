'use client';
import React, { useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '@/components/ui/Atoms/button';
import Link from 'next/link';
import Image from 'next/image';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil-1920.webp';


interface PropsBlogPage {
  blog: BlogProps;
}

const BlogPage = ({ blog }: PropsBlogPage) => {

  // Utilisation de useMemo pour éviter le recalcul à chaque rendu
  const formattedDate = useMemo(() => {
    return blog ? new Date(blog.date).toLocaleDateString('fr-FR') : '';
  }, [blog]);

  return (
    <div className="mt-10 flex flex-col text-white xxs:px-3 lg:px-20">
      <h2 className="mb-2 text-sm text-white opacity-50">
        {blog.descriptionShort}
      </h2>

      <header className="flex flex-col-reverse">
        <h1 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl">
          {blog.title}
        </h1>

        <div className="size-full overflow-hidden">
          <Image
            priority
            src={blog.img}
            width={1920}
            height={600} //
            alt={blog.alt}
            className="size-full rounded-xl object-cover object-center"
          />
          <div className="m-3 flex justify-between">
            <div className="my-6 flex items-center">
              <div className="size-10 overflow-hidden rounded-full object-cover">
                <Image
                  priority
                  width={300}
                  height={300}
                  src={myPhoto}
                  alt="photo_gérant_devevoke"
                  className="size-full bg-black object-cover object-center"
                />
              </div>
              <div className="ml-2 text-left">
                <h2>Boucif Faradji</h2>
                <h3 className="text-xs opacity-50">{formattedDate}</h3>
              </div>
            </div>
            <ButtonNetwork url={blog} />
          </div>
        </div>
      </header>

      <section>
        <p className="my-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
          {blog.descriptionShort}
        </p>

        <article className="mt-8">
          {blog.descriptionLong?.map((val, i) => (
            <div key={i} className="my-8">
              <Fade cascade direction="up">
                <h2 className="mb-3 text-xl">{val.title}</h2>
                <p>{val.text}</p>
              </Fade>
            </div>
          ))}
        </article>

        <article className="absolute xl:fixed xl:bottom-[50%] xl:left-0 2xl:left-0">
          <Link href="/blog">
            <Button
              colorClass="bg-gradient-to-r from-pink to-purple"
              textColor="text-white"
              marginClass="ml-2"
              title="Retour"
            />
          </Link>
        </article>
      </section>
    </div>
  );
};

export default BlogPage;