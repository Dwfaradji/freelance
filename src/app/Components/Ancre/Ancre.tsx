import React from "react";
import "./Ancre.scss";
import scrollToSection from "@/app/Utils/Utils";

const Ancre = () => {
  return (
    <div className="ancre">
      <button
        aria-label="up page"
        onClick={() => scrollToSection("home")}
        type="button"
      >
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
};

export default Ancre;
