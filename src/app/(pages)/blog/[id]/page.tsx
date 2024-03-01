'use client';
import React from 'react';
import BlogPage from '@/components/Blog/blogPage';
import blogData from '@/data/dataBlog';

const Page = async () => {
  return (
    <main>
      <BlogPage />
    </main>
  );
};

export default Page;
