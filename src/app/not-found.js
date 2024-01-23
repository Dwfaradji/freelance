import React from "react";
import "../styles/404.scss";
import Link from "next/link";
import { FaceFrownIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="container-404">
      <FaceFrownIcon className="w-40 text-gray-400" />
      <h1 className="title-404">Page introuvable</h1>
      <p className="subtitle-404">
        {"Désolé, la layout.tsx que vous recherchez n'existe pas."}
      </p>

      <Link className="btn-404" href={"/"}>
        <button>
          {"Retour à l'accueil"}
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
