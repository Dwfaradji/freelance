import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const scrollToSection = (sectionId:string, scroll:boolean) => {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`La section avec l'ID "${sectionId}" n'a pas été trouvée.`);
    return;
  }

  if (scroll) {
    const yOffset = -64; // Décalage de 64 pixels pour prendre en compte une barre de navigation, si applicable
    const y =
      section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  } else {
    window.location.href = `#${sectionId}`;
  }
};

export default scrollToSection;
