import React from 'react';
import BlogPage from '@/components/Blog/blogPage';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const { slug } = params;

  // Trouver les données du blog correspondant en utilisant le slug
  const blog = blogData.find((blog) => slugify(blog.title) === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <BlogPage id={blog.id} />
    </div>
  );
};

export default Page;
