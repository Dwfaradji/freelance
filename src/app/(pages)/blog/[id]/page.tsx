'use client';
import React from 'react';
import BlogPage from '@/components/Blog/blogPage'

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log("toto");
  console.log(id);
  return (
    <>
      <BlogPage id={id} />
    </>
  );
};

export default Page;
