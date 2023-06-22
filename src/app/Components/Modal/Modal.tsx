import React from "react";
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

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section>
      <div className={`modal ${showModal ? "open" : ""}`}>
        <div className="modal-content ">
          <button className="close-btn" onClick={closeModal}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          {/*content modal*/}
          {typeModal === "price" && <ModalPrice contentModal={contentModal} />}
          {typeModal === "form" && <Form />}
        </div>
      </div>
    </section>
  );
};

export default Modal;
