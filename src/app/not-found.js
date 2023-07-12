import React from "react";
import "@/app/Styles/404.scss";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container-404">
      <h1 className="title-404">Page introuvable</h1>
      <p className="subtitle-404">
        {"Désolé, la page que vous recherchez n'existe pas."}
      </p>

      <Link className="btn-404" href={"/"}>
        {"Retour à l'accueil"}
      </Link>
    </div>
  );
};

export default NotFound;
