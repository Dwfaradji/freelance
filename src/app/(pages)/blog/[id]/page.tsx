'use client';
import React from 'react';
import BlogPage from '@/components/Blog/blogPage'

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <main>
      <BlogPage id={id} />
    </main>
  );
};

export default Page;
