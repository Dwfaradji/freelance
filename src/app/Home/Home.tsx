"use client";
import React from "react";
import Navbar from "../Sections/NavBar/NavBar";
import Header from "../Sections/Header/Header";
import About from "../Sections/About/About";
import Projet from "../Sections/Project/Project";
import OptiRank from "../Sections/OptiRank/OptiRank";
import Price from "../Sections/Price/Price";
import ContactForm from "../Sections/ContactForm/ContactForm";
import Service from "../Sections/Service/Service";
import CallToAction from "../Sections/CallToAction/CallToAction";
import Ancre from "../Components/Ancre/Ancre";
import Banner from "../Sections/Banner/Banner";

import {
  projects,
  services,
  prices,
  navItems,
  picturesCarousel,
} from "@/app/Data/data";


const Home: React.FC = () => {
  return (
    <>
      <Navbar items={navItems} />
      <div id="home"></div>
      <Header pictures={picturesCarousel} />
      <Banner typeBanner={"icon"} />
      <Projet projects={projects} />
      <Banner typeBanner={"picture"} />
      <OptiRank />
      <div id="tarif"></div>
      <Price dataTarifs={prices} />
      <div id="contact"></div>
      <ContactForm />
      <div id="services"></div>
      <Service dataServices={services} />
      <div id="about"></div>
      <About />
      <CallToAction />
      <Ancre />
    </>
  );
};

export default Home;
