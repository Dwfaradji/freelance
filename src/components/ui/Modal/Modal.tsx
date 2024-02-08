"use client";
import React, { useEffect, useState } from "react";
import "./Modal.scss";
import ModalPrice from "../../../components/ui/ModalPrice/ModalPrice";
import FormContact from "@/components/ui/FormContact/FormContact";
import Link from "next/link";

interface ModalProps {
  showModal: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contentModal?: string | undefined;
  typeModal: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setIsOpen,
  contentModal,
  typeModal,
}) => {
  const [isClick, setIsClick] = useState(false);
  const closeModal = () => {
    document.body.style.overflowY= "auto";
    setIsOpen(false);
  };
  useEffect(() => {
    showModal && (document.body.style.overflowY = "hidden");
    isClick && (document.body.style.overflowY = "auto");
  }, [showModal,isClick]);
  return (
    <section className={""}>
      <div className={`modal ${showModal ? "open" : ""}`}>
        <div className="modal-content ">
          <button className="close-btn" onClick={closeModal}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          {/*content modal*/}
          {typeModal === "price" && (
            <ModalPrice contentModal={contentModal} setIsOpen={setIsClick} />
          )}
          {typeModal === "form" && <FormContact />}
        </div>
      </div>
    </section>
  );
};

export default Modal;
