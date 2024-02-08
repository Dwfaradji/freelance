"use client";
import React, { useEffect, useRef } from "react";
import "./AnimationPicture.scss";
import Image from "next/image";
import { gsap } from "gsap";

interface AnimationPictureProps {
  itemsPicture: any[];
}

const AnimationPicture = ({ itemsPicture }: AnimationPictureProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = sectionElement.querySelectorAll(".item");

            gsap.set(items, { opacity: 0 }); // Masquer tous les éléments au départ

            gsap.fromTo(
              items,
              { opacity: 0 },
              { opacity: 1, duration: 1, stagger: 0.5, ease: "power2.inOut" }
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
    <>
      <h2 className="text-h2">Processus de développement web freelance</h2>
      <div className="about-images xl:container" ref={sectionRef}>
        {itemsPicture.map((item, i) => (
          <div key={i} className="item">
            <Image
              className="image-container"
              src={item.picture}
              alt={item.alt}
              width="100"
              height="100"
            />
            <div className="item2">
              <h3 className="text-h3">{item.title}</h3>
              {i !== 3 ? (
                <i
                  id={String(i)}
                  className="fa-solid fa-chevron-right chevron"
                ></i>
              ) : (
                <i className="fa-regular fa-circle-check check"></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimationPicture;
