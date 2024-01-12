import React from "react";
import Header from "../../../components/sections/Header/Header";
import About from "../../../components/sections/About/About";
import Projet from "../../../components/sections/Project/Project";
import OptiRank from "../../../components/sections/OptiRank/OptiRank";
import Price from "../../../components/sections/Price/Price";
import ContactForm from "../../../components/sections/ContactForm/ContactForm";
import Service from "../../../components/sections/Service/Service";
import CallToAction from "../../../components/sections/CallToAction/CallToAction";
import Ancre from "../../../components/ui/Ancre/Ancre";
import Banner from "../../../components/sections/Banner/Banner";

import {
  projects,
  services,
  prices,
  navItems,
  picturesCarousel,
} from "../../../data/data";

const Home = () => {
  return (
    <>
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
