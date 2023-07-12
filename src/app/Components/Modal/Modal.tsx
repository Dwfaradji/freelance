import React, { useEffect } from "react";
import "./Modal.scss";
import ModalPrice from "@/app/Components/ModalPrice/ModalPrice";
import Form from "@/app/Components/Form/Form";

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
  console.log(contentModal);

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
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
          {typeModal === "form" && <Form />}
        </div>
      </div>
    </section>
  );
};

export default Modal;
