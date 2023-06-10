const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const y = section.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
export default scrollToSection;
