import React from "react";
import "./pagesInfo.css";

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
    <div className="max-w-7xl mx-auto px-8 text-white shadow-md shadow-pink rounded-2xl p-8">
      <header className="header text-center">
        <h1 className={"text-white text-2xl"}>{infosText[0].titleH1}</h1>
      </header>
      <section className="tarifs-section">
        {infosText.map((item, i) => (
          <article key={i.toString()} className="tarif-card">
            <h2 className={"mt-8 mb-3 text-xl"}>{item.title}</h2>
            <p>{item.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};
export default PagesInfo;
