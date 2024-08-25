'use client';
import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import BlogsContainer from '@/components/Blog/blogsContainer';

const Page = () => {
  return (
    <div>
      <BlogHeader />
      <BlogsContainer />
    </div>
  );
};

export default Page;
