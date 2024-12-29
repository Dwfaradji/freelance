import React from 'react';
import Input from '@/components/ui/Atoms/input';
import Button from '@/components/ui/Atoms/button';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import blogData from '@/data/dataBlog';
import Image from 'next/image';
import { slugify } from '@/utils/slugify';

const BlogsContainer = () => {
  const sortByDateDescending = blogData.sort((a: any, b: any) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  const dataHeader = sortByDateDescending.slice(1, sortByDateDescending.length);
  return (
    <section className="mx-auto mt-10 text-white">
      <article className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Fade direction="down" triggerOnce={true}>
          {dataHeader.map((blog, i) => (
            <Link
              key={i}
              className="flex justify-center"
              href={`/blog/${slugify(blog.title).toString()}`}
            >
              <div id={blog.id} className={'m-3'}>
                <div className="h-72 w-full overflow-hidden rounded-xl xxs:w-full sm:w-full">
                  <Image
                    width={500}
                    height={300}
                    src={blog.img}
                    alt={blog.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2 className="mt-2 font-poppins text-3xl font-bold">
                  {blog.title}
                </h2>
                <div className={'h-[6] overflow-hidden'}>
                  <p className="mt-2 line-clamp-4 text-sm opacity-50 hover:line-clamp-none ">
                    {blog.descriptionShort}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Fade>
      </article>

      <div className="mt-10 hidden h-72 w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-pink to-purple">
        <h2 className="font-poppins text-3xl font-bold">
          Rester dans la boucle
        </h2>
        <h2 className="mt-2 text-lg opacity-50">
          Abonnez-vous à notre newsletter pour recevoir les meilleures nouvelles
          avant tout le monde
        </h2>
        <div className="mt-10 flex-row">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-white"
            title="S'abonner"
            textColor="text-black"
            marginClass="ml-5"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsContainer;
