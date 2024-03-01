import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="shadow-indigo-500/40 m-10 mx-auto flex h-96  w-11/12 flex-col justify-between rounded-lg p-6 text-center shadow-lg md:w-10/12 lg:w-6/12 ">
        <h2>Message envoyé</h2>
        <p className="text-blue-950 mb-13">
          {
            "Merci d'avoir remplis le devis nous reviendrons vers vous une fois le devis effectuer"
          }
        </p>
        <button>
          <Link href="/">{"Retour à l'accueil"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Page;
