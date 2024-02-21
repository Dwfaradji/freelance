"use client";
import React, { useEffect } from "react";
import "./TemplateBlog.scss";
import blog from "@/data/blog";
import Link from "next/link";
import CardBlog from "@/components/ui/CardBlog/CardBlog";
import Image from "next/image";
import { linkGc } from "next/dist/client/app-link-gc";

const TemplateBlog = () => {
  // fonction qui recupere id dans url nextJs et qui permet de recuperer les données du blog
  const [contentBlog, setContentBlog] = React.useState<any>([]);

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    blog.map((data: any) => {
      if (data.id === parseInt(id as string)) {
        setContentBlog(data);
        return data;
      }
    });
  }, []);

  // nouveau tableau qui contient les 2 derniers articles publiés en fonction de la date de publication
  const lastBlog = blog
    .sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 2);

  return (
    <div className="container-modal-blog ">
      <div className="container-header">
        <h1>{contentBlog.title}</h1>
        <Link href="/blog"> Retour au blog</Link>
      </div>
      <div className="container-text container">
        <p>{contentBlog.descriptionShort}</p>
        <p>
          Mise en ligne le
          <span className={"text-blue-400"}>{contentBlog.date}</span>
        </p>
      </div>
      <div className="container-img">
        <Image
          width={"100"}
          height={"100"}
          src={contentBlog.image}
          alt={contentBlog.alt}
        />
      </div>
      <div className="container-text container">
        {contentBlog.descriptionLong &&
          contentBlog.descriptionLong.map((val: any, i: any) => (
            <div key={i} className="container-description-long">
              <h2>{val.title}</h2>
              <p>{val.text}</p>
            </div>
          ))}
      </div>
      <h2> Articles récents </h2>
      <div className="item-cards container">
        <CardBlog blogData={lastBlog} />
      </div>
    </div>
  );
};

export default TemplateBlog;
