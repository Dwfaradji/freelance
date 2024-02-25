"use client"
import React from 'react';
import BlogPage from "@/components/Blog/blogPage";
import blogData from "@/data/dataBlog";

const Page = () => {
    return (
        <div>
            <BlogPage blogData={blogData}/>
        </div>
    );
};

export default Page;
