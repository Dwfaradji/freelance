import React from 'react';
import Link from 'next/link';
import { Frown, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center p-8 text-center text-white">
      <div className="w-20 h-20 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-6 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <Frown className="w-10 h-10" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Page introuvable (404)</h1>
      <p className="text-muted text-base max-w-md mb-8">
        {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
      </p>

      <Link
        href="/"
        aria-label="Retour à la page d'accueil"
        className="btn-primary inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour à l&apos;accueil</span>
      </Link>
    </main>
  );
};

export default NotFound;
