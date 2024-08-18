import React from 'react';
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Atoms/button';

const NotFound = () => {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-8 text-white">
      <FaceFrownIcon className="w-40 text-gray-400" />
      <h1>Page introuvable</h1>
      <p>{"Désolé, la Page que vous recherchez n'existe pas."}</p>

      <Link className="mt-8" href={'/'}>
        <Button
          title={"Retour à l'accueil"}
          colorClass="bg-gradient-to-r from-pink to-purple "
          textColor="text-white"
        ></Button>
      </Link>
    </main>
  );
};

export default NotFound;
