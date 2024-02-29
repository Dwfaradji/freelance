import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div
        className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg text-center m-10 h-96 flex flex-col justify-between ">
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
