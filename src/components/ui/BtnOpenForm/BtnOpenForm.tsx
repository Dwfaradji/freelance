"use client";
import React, { useState } from "react";
import Modal from "../../ui/Modal/Modal";

const BtnOpenForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div>
      <button className="btn-contact" onClick={(e) => handleOpenModal(e)}>
        Contactez-nous
      </button>
      {isOpen && (
        <Modal showModal={isOpen} setIsOpen={setIsOpen} typeModal="form" />
      )}
    </div>
  );
};

export default BtnOpenForm;
