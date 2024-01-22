"use client";
import React, { useEffect, useState } from "react";
import "./Modal.scss";
import ModalPrice from "../../../components/ui/ModalPrice/ModalPrice";
import FormContact from "@/components/ui/FormContact/FormContact";

interface ModalProps {
  showModal: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contentModal?: string | undefined;
  typeModal: string;
}
//TODO: regler le bug
const Modal: React.FC<ModalProps> = ({
  showModal,
  setIsOpen,
  contentModal,
  typeModal,
}) => {
  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };
  useEffect(() => {
    showModal && (document.body.style.overflow = "auto");
  }, [showModal]);
  return (
    <section>
      <div className={`modal ${showModal ? "open" : ""}`}>
        <div className="modal-content ">
          <button className="close-btn" onClick={closeModal}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          {/*content modal*/}
          {typeModal === "price" && (
            <ModalPrice contentModal={contentModal} setIsOpen={setIsOpen} />
          )}
          {typeModal === "form" && <FormContact />}
        </div>
      </div>
    </section>
  );
};

export default Modal;
