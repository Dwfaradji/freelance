"use client";
import React, { useEffect, useMemo, useState } from "react";
import scrollToSection from "../../../lib/utils";
import "./NavBar.scss";
import logoSVG from "../../ui/Logo/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Item {
  title: string;
  link: string;
  scroll: boolean;
}

interface NavProps {
  items: Item[];
}

const Navbar = ({ items }: NavProps) => {
  const router = useRouter();

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

  const handleScroll = () => {
    const navElement = document.querySelector(".nav");
    const openElement = document.querySelector(".openCollapse .navLinks");
    const closeElement = document.querySelector(".closeCollapse .navLinks");
    const navTrigger = document.querySelector(".navTrigger");
    if (navElement) {
      if (window.scrollY > 1000) {
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

  useEffect(() => {
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
    window.addEventListener("resize", handleResize);
  }

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const openNavFunction = (item: any) => {

    if (item.scroll === false) {
      router.push(item.link);
    } else {
      scrollToSection(item.link, item.scroll);
    }
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
    <nav className="nav h-10 md:h-20">
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
