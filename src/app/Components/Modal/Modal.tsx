import React, { useEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  showModal: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dataModal: any;
  contentModal: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setIsOpen,
  dataModal,
  contentModal,
}) => {
  const [modal, setModal] = React.useState<any>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataMap = () => {
    dataModal.map((data: any) => {
      if (data.id === parseInt(contentModal)) {
        setModal(data);
        return data;
      }
    });
  };
  useEffect(() => {
    dataMap();
  }, [contentModal, dataMap, dataModal]);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      //scroll 200px above the section
      const y = section.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className={`modal ${showModal ? "open" : ""}`}>
        <div className="modal-content ">
          <button className="close-btn" onClick={closeModal}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
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
          <button onClick={() => openModal("contact")}>
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
