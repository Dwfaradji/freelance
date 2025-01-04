import React from 'react';
import BlogHeader from '../Blog/blogHeader';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Button from '../ui/Atoms/button';

const BlogHome = () => {
  return (
    <section className="my-20 text-white">
      <Fade direction={'up'}>
        <h2
          className={
            'mb-10 bg-gradient-to-r from-pink to-purple text-xl text-gradient lg:text-3xl'
          }
        >
          Découvrez notre Blog
        </h2>
      </Fade>
      <BlogHeader />
      <div className=" mt-6 text-center">
        <Link href={'/blog'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Tous nos Articles"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogHome;
