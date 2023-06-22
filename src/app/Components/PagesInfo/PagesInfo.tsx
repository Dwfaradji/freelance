"use client";
import React from "react";
import "./PagesInfo.scss";
import ReturnHome from "@/app/Components/RetunHome/ReturnHome";

interface Text {
  titleH1?: string;
  title?: string;
  text?: string;
  titleFooter?: string;
  textFooter?: string;
}

interface PagesInfoProps {
  infosText: Text[];
}

const PagesInfo = ({ infosText }: PagesInfoProps) => {
  return (
    <div className="container-pages-info">
      <ReturnHome />;
      <header className="header">
        <h1>{infosText[0].titleH1}</h1>
      </header>
      <section className="tarifs-section">
        {infosText.map((item, i) => (
          <article key={i.toString()} className="tarif-card">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      {/*{isOpen && (*/}
      {/*  <Modal showModal={isOpen} setIsOpen={setIsOpen} typeModal="form" />*/}
      {/*)}*/}
    </div>
  );
};
export default PagesInfo;
