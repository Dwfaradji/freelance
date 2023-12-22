"use client";
import React, { useEffect } from "react";
import "./ModalPrice.scss";
import { prices } from "@/app/Data/data";

interface ModalPriceProps {
  contentModal: string | undefined;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalPrice = ({ contentModal, setIsOpen }: ModalPriceProps) => {
  // const [contentModal, setContentModal] = useState("");

  const [modal, setModal] = React.useState<any>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataMap = () => {
    prices.map((data: any) => {
      if (data.id === parseInt(contentModal as string)) {
        setModal(data);
        return data;
      }
    });
  };
  useEffect(() => {
    dataMap();
  }, [contentModal, dataMap]);

  const getPageDevis = () => {
    window.open("/form-devis", "_blank");
  };
  return (
    <div className="container-price">
      <h2>{modal.subtitle}</h2>
      <ul>
        {modal.details &&
          modal.details.map((detail: string, i: number) => (
            <li key={i.toString()}>
              <i className="fa-solid fa-check"></i> {detail}
            </li>
          ))}
      </ul>
      <h3>À partir de: {modal.price}</h3>
      <button onClick={getPageDevis}>Demander un devis</button>
    </div>
  );
};

export default ModalPrice;
