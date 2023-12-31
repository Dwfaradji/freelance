"use client";
import React, { useEffect, useMemo, useState } from "react";
import scrollToSection from "@/app/Utils/Utils";
import "./NavBar.scss";
import logoSVG from "../../Components/Logo/logo";
import Link from "next/link";

interface Item {
  title: string;
  link: string;
  scroll: boolean;
}

interface NavProps {
  items: Item[];
}

const Navbar = ({ items }: NavProps) => {
  const [itemsNav] = useState<Item[]>(items);
  const [liItems, setLiItems] = useState<string>("");
  const [openNav, setOpenNav] = useState<boolean>(false);

  const colorsInit = useMemo(
    () => ({
      colorPrimary: "#3c9dda",
      colorSecondary: "#5e6163",
    }),
    []
  );

  const colorsSecond = useMemo(
    () => ({
      colorPrimary: "#ffffff",
      colorSecondary: "#3c9dda",
    }),
    []
  );

  const [colors, setColors] = useState(colorsInit);

  const svgElement = logoSVG(colors);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector(".nav");
      const openElement = document.querySelector(".openCollapse .navLinks");
      const closeElement = document.querySelector(".closeCollapse .navLinks");
      const navTrigger = document.querySelector(".navTrigger");
      if (navElement) {
        if (window.scrollY > 900) {
          setColors(colorsSecond);
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
          setColors(colorsInit);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [colorsInit, colorsSecond]);

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

  const openNavFunction = (item: any) => {
    scrollToSection(item.link, item.scroll);
    setOpenNav(false);
  };

  const renderNavLinks = (isCollapsed: boolean) => (
    <ul className="navLinks">
      {itemsNav.map((item, index) => (
        <li
          key={index}
          className={liItems}
          onClick={() => {
            openNavFunction(item);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="nav">
      <div className="block">
        <Link
          className="logoSvg flex items-center"
          href="/"
          aria-label="link logo"
        >
          {svgElement}
        </Link>

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
