"use client";
import React, { useEffect, useRef } from "react";
import "./Banner.scss";
import { gsap } from "gsap";

const Banner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = sectionElement.querySelector("#ma-section");
            gsap.set(items, {  opacity: 0 }); // Masquer tous les éléments au départ

            gsap.fromTo(
              items,
              { translateX: -1000 },
              {
                translateX: 0,
                opacity: 1,
                duration: 2.5,
                stagger: 0.5,
                ease: "bounce.out",
              }
            ); // Animation de fondu (fade-in) pour chaque élément avec un délai de 0.5 seconde entre eux
            observer.unobserve(entry.target); // Arrêter d'observer une fois que l'animation est déclenchée
          }
        });
      },
      { threshold: 0.2 } // Définir le seuil d'intersection à 0.2 (lorsque 20% de la section est visible)
    );
    observer.observe(sectionElement);
    return () => {
      observer.disconnect(); // Arrêter d'observer lorsque le composant est démonté
    };
  }, []);
  return (
    <div ref={sectionRef}>
      <div id={"ma-section"} className={"container-banner"}>
        <div id="ma-section" className={"content-banner container"}>
          <h2>Vous souhaitez connaitre mes compétences ?</h2>
          <p className={"title-banner"}>
            Mon profil vous intéresse, mais vous souhaitez savoir comment je
            peux vous aider concrètement ? Découvrez les diverses compétences
            qui peuvent me permettre de vous accompagner.
          </p>

          <button>Découvrir mes compétences</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
