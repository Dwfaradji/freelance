"use client";
import React, { useEffect, useState } from "react";
import "./Ancre.scss";
import scrollToSection from "../../../lib/utils";

const Ancre = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.scrollY > 100) {
      console.log("test");
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);

  return (
    <div>
      {show === true && (
        <div className="ancre">
          <button
            aria-label="up page"
            onClick={() => scrollToSection("home", true)}
            type="button"
          >
            <i className="fa-solid fa-angles-up"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Ancre;
