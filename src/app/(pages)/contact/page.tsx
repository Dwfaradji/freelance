'use client';
import React from 'react';
import Contact from '@/components/Contact/contact';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="overflow-hidden">
      <header className="mx-auto mb-16 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Projet e-Santé</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digitalisons vos{' '}
            <span className="text-gradient drop-shadow-sm">
              parcours de soin
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Besoin d'un Dossier Patient Informatisé (DPI) ou d'une application de télésurveillance ? Contactez nos experts pour échanger sur vos enjeux de conformité HDS et d'interopérabilité (Ségur).
          </p>
        </Fade>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
