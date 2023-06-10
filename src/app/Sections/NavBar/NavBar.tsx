import React, { useEffect, useState } from "react";
import scrollToSection from "@/app/Utils/Utils";
import "./NavBar.scss";
import logoSVG from "../../Components/Logo/logo";
import Link from "next/link";

interface Item {
  title: string;
  link: string;
}

interface NavProps {
  items: Item[];
}

const Navbar = ({ items }: NavProps) => {
  const [itemsNav] = useState<Item[]>(items);
  const [liItems, setLiItems] = useState<string>("");
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector(".nav");
      const openElement = document.querySelector(".openCollapse .navlinks");
      const closeElement = document.querySelector(".closeCollapse .navlinks");
      const navTrigger = document.querySelector(".navTrigger");
      if (navElement) {
        if (window.scrollY > 900) {
          navElement.classList.add("affix");
          openElement && openElement.classList.add("affix");
          closeElement && closeElement.classList.add("affix");
          navTrigger && navTrigger.classList.add("affixTrigger");
          setLiItems("items-nav");
        } else {
          navElement.classList.remove("affix");
          openElement && openElement.classList.remove("affix");
          closeElement && closeElement.classList.remove("affix");
          navTrigger && navTrigger.classList.remove("affixTrigger");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768 && openNav) {
      setOpenNav(false);
    }
  };

  if (typeof window !== "undefined") {
    // Votre code utilisant "window" ici
    window.addEventListener("resize", handleResize);
  }

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const renderNavLinks = (isCollapsed: boolean) => (
    <ul className="navlinks">
      {itemsNav.map((item, index) => (
        <li
          key={index}
          className={liItems}
          onClick={() => scrollToSection(item.link)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );

  const svgElement = logoSVG();

  return (
    <nav className="nav">
      <div className="block">
        <div className="logo">
          <Link className="logoSvg" href="/" aria-label="link logo">
            {svgElement}
          </Link>
        </div>
        <div id="mainListDiv" className="main_list">
          {renderNavLinks(false)}
        </div>
        <span onClick={toggleNav} className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div className={openNav ? "openCollapse" : "closeCollapse"}>
        {renderNavLinks(true)}
      </div>
    </nav>
  );
};

export default Navbar;
