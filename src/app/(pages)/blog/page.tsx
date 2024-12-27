'use client';
import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import BlogsContainer from '@/components/Blog/blogsContainer';

import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div>
      <Fade direction="up" triggerOnce>
        <h1 className="mb-8 bg-gradient-to-r from-pink to-purple font-poppins text-2xl font-semibold text-gradient lg:text-4xl xl:text-7xl">
          Découvrez notre Blogs
        </h1>
        <Fade direction="up" triggerOnce>
          <p className="my-7 text-lg text-white lg:text-xl">
            Nous sommes fiers de partager avec vous nos projets les plus
            récents, réalisés avec passion et expertise. Chacun de nos projets
            est conçu pour répondre aux besoins spécifiques de nos clients, en
            utilisant les technologies les plus avancées pour offrir des
            solutions innovantes et performantes. Explorez nos réalisations et
            découvrez comment nous transformons des idées en succès concrets.
          </p>
        </Fade>
      </Fade>
      <BlogHeader />
      <BlogsContainer />
      <div className="mt-4 text-center">
        <Link href={'/contact'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Contactez-Nous"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
