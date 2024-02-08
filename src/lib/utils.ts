//
// const scrollToSection = (sectionId: string, scroll: boolean) => {
//   const section = document.getElementById(sectionId) as HTMLElement;
//   if (!scroll) {
//     window.location.href = `${sectionId}`;
//   }
//   if (section && scroll) {
//     const y = section.getBoundingClientRect().top + window.scrollY - 64;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   }
// };
// export default scrollToSection;
const scrollToSection = (sectionId:string, scroll:boolean) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    console.error(`La section avec l'ID "${sectionId}" n'a pas été trouvée.`);
    return;
  }

  if (scroll) {
    const yOffset = -64; // Décalage de 64 pixels pour prendre en compte une barre de navigation, si applicable
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  } else {
    window.location.href = `#${sectionId}`;
  }
};

export default scrollToSection;
