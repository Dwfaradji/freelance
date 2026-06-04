'use client';
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

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
  const mainTitle = infosText[0]?.titleH1 ?? 'Mentions légales';

  return (
    <div className="overflow-hidden pb-24">
      {/* Hero Header */}
      <header className="mx-auto mb-16 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Informations</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {mainTitle.split(' ').map((word, idx, arr) => 
               idx === arr.length - 1 ? (
                 <span key={idx} className="text-gradient drop-shadow-sm">{word}</span>
               ) : (
                 word + ' '
               )
            )}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </Fade>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce delay={200}>
          <article className="glass rounded-3xl border border-white/5 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary-400">
              {infosText.map((item, i) => (
                <div key={i.toString()}>
                  {item.title && <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 mt-12 first:mt-0 border-l-4 border-primary-500 pl-4">{item.title}</h2>}
                  {item.text && (
                    <div
                      className="text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                Besoin d'en savoir plus ?
              </h3>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-white/10 hover:border-white/20 hover:glass-strong text-white font-medium transition-all group">
                Contactez-Nous
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </Fade>
      </div>
    </div>
  );
};

export default PagesInfo;
