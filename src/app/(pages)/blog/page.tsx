'use client';
import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import BlogsContainer from '@/components/Blog/blogsContainer';

const Page = () => {
  return (
    <main>
      <BlogHeader />
      <BlogsContainer />
    </main>
  );
};

export default Page;
