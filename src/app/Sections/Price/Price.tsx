import React, { useState } from "react";
import "./Price.scss";
import Modal from "../../Components/Modal/Modal";

interface Tarif {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  description: string;
}

interface PriceProps {
  dataTarifs: Tarif[];
}

const Price = ({ dataTarifs }: PriceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const handleOpenModal = (e: React.MouseEvent) => {
    const id = e.currentTarget.parentElement?.parentElement?.id;
    setIsOpen(true);
    setContentModal(id || "");
  };

  return (
    <section className=" container-fluid section-tarif">
      <div className="content-tarif">
        <h2 className="section-title text-h2">Nos tarifs</h2>
        <div className="tarif-grid">
          {dataTarifs.map((tarif, i) => (
            <article
              id={i.toString()}
              key={i.toString()}
              className="tarif-card"
            >
              <h3 className="test text-h3">
                {tarif.title} <br /> {tarif.subtitle}
              </h3>
              <div className="tarif-price">
                <p>À partir de {tarif.price}</p>
              </div>
              <p>{tarif.description}</p>
              <div className={!isOpen ? "tarif-overlay" : "offOverlay"}>
                <button onClick={(e) => handleOpenModal(e)}>
                  En savoir plus
                </button>
              </div>
            </article>
          ))}
          {isOpen && (
            <Modal
              showModal={isOpen}
              setIsOpen={setIsOpen}
              dataModal={dataTarifs}
              contentModal={contentModal}
            />
          )}
        </div>
      </div>
      <p className="infos">
        {`L'ensemble des tarifs indiqués sont H.T. * Prix à titre informatif :
              Changement possible selon les demandes et les choix du client. **
              Estimation du temps de travail appuyé par un devis. *** Maintenance
              annuelle (engagement 12 mois). Droit d'auteur & propriété intellectuelle
              : Vous êtes à la fin du projet, propriétaire de l'ensemble des sources
              (fichiers) composant celui-ci. Paiement possible en plusieurs fois`}
      </p>
    </section>
  );
};

export default Price;
