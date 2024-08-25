'use client';
import React from 'react';
import BlogPage from '@/components/Blog/blogPage'

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <div>
      <BlogPage id={id} />
    </div>
  );
};

export default Page;
