import React, { useEffect } from "react";
import "./ModalPrice.scss";
import { prices } from "@/app/Data/data";

interface ModalPriceProps {
  contentModal: string | undefined;
}


const ModalPrice = ({contentModal}:ModalPriceProps) => {
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

  const openModal = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      //scroll 200px above the section
      const y = section.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
      <button onClick={() => openModal("contact")}>Demander un devis</button>
    </div>
  );
};

export default ModalPrice;
