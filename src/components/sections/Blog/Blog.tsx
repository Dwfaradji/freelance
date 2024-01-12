"use client";
import React from "react";
import Link from "next/link";
import CardBlog from "../../../components/ui/CardBlog/CardBlog";
import "./Blog.scss";
import BlogData from "../../../data/blog";

const Blog = () => {
  const [search, setSearch] = React.useState<any>(BlogData);
  const [displayHeader, setDisplayHeader] = React.useState<boolean>(true);
  const [notFound, setNotFound] = React.useState<boolean>(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayHeader(e.target.value.length <= 0);
    const data = BlogData.filter((data) => {
      // fonction qui gere les majuscules et minuscules et les accents
      const normalize = (str: string) =>
        str
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

      if (
        normalize(data.title).includes(normalize(e.target.value)) ||
        normalize(data.descriptionShort).includes(normalize(e.target.value))
      ) {
        return data;
      }
    });
    setSearch(data);
    setNotFound(data.length <= 0);
  };
  return (
    <section className="container-blog">
      <div className="container-header">
        <h1>DevEvoke Blog</h1>
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Rechercher" onChange={handleSearch} />
      </div>
      <div className="container-cards  container mx-auto">
        {displayHeader && (
          <div className="header-blog">
            <h2> À la une </h2>
            <div className="container-first-card">
              <CardBlog blogData={new Array(BlogData[0])} />
            </div>
          </div>
        )}
        <div className="item-cards">
          <CardBlog blogData={search} />
        </div>
        {notFound && <p className="not-found-msg"> Aucun article trouvé </p>}
      </div>
    </section>
  );
};

export default Blog;
