"use client";
import React, { useEffect, useState } from "react";
import "./Ancre.scss";
import scrollToSection from "../../../lib/utils";

const Ancre = () => {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("");
  const ancreDisplay = () => {
    if (window.scrollY > 2000) {
      setShow(true);
      setDisplay(
        "-translate-x-10 animate-in transition-transform duration-200"
      );
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ancreDisplay);
  }, [show, display]);

  return (
    <>
      {show && (
        <div className={`${display}  ancre`}>
          <button
            aria-label="up page"
            onClick={() => scrollToSection("home", true)}
            type="button"
          >
            <i className="fa-solid fa-angles-up animate-bounce "></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Ancre;
