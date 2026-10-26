import React from 'react';
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Atoms/button';

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center p-8 text-center text-white">
      <FaceFrownIcon className="w-24 h-24 text-primary-400 mb-6" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page introuvable (404)</h1>
      <p className="text-muted text-base max-w-md mb-8">
        {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
      </p>

      <Link href="/" aria-label="Retour à la page d'accueil">
        <Button
          title={"Retour à l'accueil"}
          colorClass="bg-gradient-to-r from-primary-500 to-secondary-500"
          textColor="text-white"
        />
      </Link>
    </main>
  );
};

export default NotFound;
