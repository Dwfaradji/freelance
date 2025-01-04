import Link from 'next/link';
import React from 'react';
import Button from '../ui/Atoms/button';

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
    <div className="mx-auto max-w-4xl rounded-2xl p-8 text-white shadow shadow-pink">
      <header className={` text-center`}>
        <h1 className={'text-2xl bg-gradient-to-r from-pink to-purple text-gradient'}>
          {infosText[0].titleH1 ?? 'Mentions légales'}
        </h1>
      </header>
      <section >
        {infosText.map((item, i) => (
          <article key={i.toString()}>
            <h2 className={'mb-3 mt-8 text-xl '}>{item.title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: item.text ?? '' }} // Fournir une chaîne vide par défaut
            />
          </article>
        ))}
           <div className="mx-auto mt-8 max-w-7xl px-6 text-center lg:block">
        <Link href={'/contact'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Contactez-Nous"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
      </section>
    </div>
  );
};
export default PagesInfo;
