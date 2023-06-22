import React, { useState } from "react";
import Link from "next/link";
import logoSVG from "../Logo/logo";
import "./ReturnHome.scss";
import Modal from "@/app/Components/Modal/Modal";

const ReturnHome = () => {
  const colorsInit = {
    colorPrimary: "#3c9dda",
    colorSecondary: "#5e6163",
  };

  const svgElement = logoSVG(colorsInit);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div>
      <div className="logoPages ">
        <Link
          className="logoSvg flex items-center"
          href="/"
          aria-label="link logo"
        >
          {svgElement}
          <span>Return Home</span>
        </Link>
        <button onClick={(e) => handleOpenModal(e)}>Contactez-nous</button>
      </div>
      {isOpen && (
        <Modal showModal={isOpen} setIsOpen={setIsOpen} typeModal="form" />
      )}
    </div>
  );
};

export default ReturnHome;
