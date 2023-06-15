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
        {
          "Tous les tarifs mentionnés sont hors taxes. * Prix à titre informatif : susceptibles de changer en fonction des demandes et des choix du client. ** Estimation du temps de travail soutenue par un devis, basée sur un tarif journalier de 350€. *** Maintenance annuelle (engagement de 12 mois). Droits d'auteur et propriété intellectuelle : À la fin du projet, vous êtes le propriétaire de toutes les sources (fichiers) qui le composent. Possibilité de paiement échelonné selon les modalités convenues."
        }
      </p>
    </section>
  );
};

export default Price;
