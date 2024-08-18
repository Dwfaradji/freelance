import React from 'react';
import './pagesInfo.css';

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
    <div className="mx-auto max-w-7xl rounded-2xl p-8 text-white shadow-md shadow-pink">
      <header className="header text-center">
        <h1 className={'text-2xl text-white'}>{infosText[0].titleH1}</h1>
      </header>
      <section className="tarifs-section">
        {infosText.map((item, i) => (
          <article key={i.toString()} className="tarif-card">
            <h2 className={'mb-3 mt-8 text-xl'}>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
export default PagesInfo;
