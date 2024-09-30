'use client';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '@/components/ui/Atoms/button';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil.png';

interface PropsBlogPage {
  blog:  BlogProps ;
}

const BlogPage = ({ blog }: PropsBlogPage) => {
  const [contentBlog, setContentBlog] = useState<BlogProps>();
  const[formattedDate, setFormattedDate] = useState<string>();

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
    <div>
      {contentBlog && (
        <div>
          <Fade>
            <section className="relative mt-10 flex flex-col text-white xxs:px-3 lg:px-20">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={contentBlog.img}
                  width={1000}
                  height={800}
                  alt={contentBlog.alt}
                  className={'w-full md:h-[80dvh] '}
                  priority
                />
              </div>
              <div className={'m-3 '}>
                <ButtonNetwork url={contentBlog} />
              </div>
              <div className="">
                <div className=" flex items-center my-6">
                  <div className="size-10 overflow-hidden rounded-full object-cover">
                    <Image className="h-10 w-10" priority={true} width={300} height={300} src={myPhoto}
                           alt={"article_blog"}/>
                  </div>
                  <div className="text-left ml-2">
                    <h2>Boucif Faradji</h2>
                    <h4 className="text-xs opacity-50">{formattedDate}</h4>
                  </div>
                </div>
                <Fade>
                  <h1 className="font-poppins text-5xl font-bold xxs:text-lg sm:text-5xl">
                    {contentBlog.title}
                  </h1>
                  <p className="my-4 text-lg opacity-50 xxs:text-sm sm:text-lg">
                    {contentBlog.descriptionShort}
                  </p>
                </Fade>
                <article className="mt-8">
                  {contentBlog.descriptionLong &&
                    contentBlog.descriptionLong.map((val, i) => (
                      <div key={i} className="my-8">
                        <Fade>
                          <h2 className={'mb-3 text-xl'}>{val.title}</h2>
                          <p>{val.text}</p>
                        </Fade>
                      </div>
                    ))}
                </article>
                <div
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
                </div>
              </div>
            </section>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
