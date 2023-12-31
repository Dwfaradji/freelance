import React from "react";
import BlogData from "@/app/Data/blog";
import "./CardBlog.scss";
import Link from "next/link";
import Card from "@/app/Components/Card/Card";

interface BlogData {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  descriptionShort: string;
}

interface Props {
  blogData: BlogData[];
}

const CardBlog = ({ blogData }: Props) => {
  return (
    <>
      {blogData.map((val, i) => {
        return <Card key={i} val={val} />;
      })}
    </>
  );
};

export default CardBlog;
