import React from 'react';
// @ts-ignore
import style from './pagesInfo.module.css';

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
    <div className="mx-auto max-w-4xl rounded-2xl p-8 text-white shadow-md shadow-pink">
      <header className={`${style.header} text-center`}>
        <h1 className={'text-2xl text-white'}>
          {infosText[0].titleH1 ?? 'Mentions légales'}
        </h1>
      </header>
      <section className={style.tarifsSection}>
        {infosText.map((item, i) => (
          <article key={i.toString()} className={style.tarifCard}>
            <h2 className={'mb-3 mt-8 text-xl'}>{item.title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: item.text ?? '' }} // Fournir une chaîne vide par défaut
            />
          </article>
        ))}
      </section>
    </div>
  );
};
export default PagesInfo;
