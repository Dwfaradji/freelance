'use client';
import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import BlogsContainer from '@/components/Blog/blogsContainer';

import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const Page = () => {
  return (
    <div>
      <BlogHeader />
      <BlogsContainer />
      <div className="mt-3 mt-4 text-center">
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
