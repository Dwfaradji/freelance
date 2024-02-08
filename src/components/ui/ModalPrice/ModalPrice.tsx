"use client";
import React, { useEffect } from "react";
import "./ModalPrice.scss";
import { prices } from "@/data/data";
import Link from "next/link";

interface ModalPriceProps {
  contentModal: string | undefined;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalPrice = ({ contentModal, setIsOpen }: ModalPriceProps) => {
  // const [contentModal, setContentModal] = useState("");

  const [modal, setModal] = React.useState<any>([]);

  useEffect(() => {
    prices.map((data: any) => {
      if (data.id === parseInt(contentModal as string)) {
        setModal(data);
        return data;
      }
    });
  }, [contentModal]);

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
      <Link href={`/form-ui/${modal.id}/model/`}>
        <span className="relative inline-flex">
          <button className="relative animate-pulse" onClick={() => setIsOpen(true)}>
            Demander un devis
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default ModalPrice;
