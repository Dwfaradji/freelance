import React from 'react';
import BlogPage from '@/components/Blog/blogPage';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

type Props = {
  params: Promise<{ slug: string }>;
};

const Page = ({ params }: Props) => {
  const { slug } = React.use(params); // Util
  // Trouver les données du blog correspondant en utilisant le slug
  const blog = blogData.find((blog) => slugify(blog.title) === slug);
  if (!blog) {
    return 
  }
  return (
    <>
      <BlogPage blog={blog} />
    </>
  );
};

export default Page;
