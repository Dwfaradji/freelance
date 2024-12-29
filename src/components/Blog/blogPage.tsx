'use client';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '@/components/ui/Atoms/button';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil-1920.webp';

interface PropsBlogPage {
  blog: BlogProps;
}

const BlogPage = ({ blog }: PropsBlogPage) => {
  const [contentBlog, setContentBlog] = useState<BlogProps>();
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    blogData.map((data) => {
      if (data.id === blog.id) {
        setFormattedDate(new Date(data.date).toLocaleDateString('fr-FR'));
        setContentBlog(data);
        return data;
      }
    });
  }, []);

  // nouveau tableau qui contient les 2 derniers articles publiés en fonction de la date de publication
  // const lastBlog = blog
  //     .sort((a, b) => {
  //       return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     })
  //     .slice(0, 2);
  //

  return (
    <>
      {contentBlog && (
        <div className="relative mt-10 flex flex-col text-white xxs:px-3 lg:px-20">
          <h2 className="mb-2 text-sm text-white opacity-50">
            {contentBlog.descriptionShort}
          </h2>

          <header className={'flex flex-col-reverse'}>
            <Fade cascade>
              <h1 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl">
                {contentBlog.title}
              </h1>
            </Fade>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={contentBlog.img}
                width={1000}
                height={800}
                alt={contentBlog.alt}
                className={'w-full md:h-[80dvh] '}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className={'m-3 flex justify-between'}>
                <div className=" my-6 flex items-center">
                  <div className="size-10 overflow-hidden rounded-full object-cover">
                    <Image
                      className="h-10 w-10"
                      priority={true}
                      width={300}
                      height={300}
                      src={myPhoto}
                      alt={'article_blog'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="ml-2 text-left">
                    <h2>Boucif Faradji</h2>
                    <h4 className="text-xs opacity-50">{formattedDate}</h4>
                  </div>
                </div>
                <ButtonNetwork url={contentBlog} />
              </div>
            </div>
          </header>

          <section>
            <p className="my-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
              {contentBlog.descriptionShort}
            </p>

            <article className="mt-8">
              {contentBlog.descriptionLong &&
                contentBlog.descriptionLong.map((val, i) => (
                  <div key={i} className="my-8">
                    <Fade cascade direction="up">
                      <h2 className={'mb-3 text-xl'}>{val.title}</h2>
                      <p>{val.text}</p>
                    </Fade>
                  </div>
                ))}
            </article>
            <article
              className={
                'absolute xl:fixed xl:bottom-[50%] xl:left-0 2xl:left-0'
              }
            >
              <Link href={'/blog'}>
                <Button
                  colorClass="bg-gradient-to-r from-pink to-purple "
                  textColor="text-white"
                  marginClass="ml-2"
                  title="Retour"
                />
              </Link>
            </article>
          </section>
        </div>
      )}
    </>
  );
};

export default BlogPage;
