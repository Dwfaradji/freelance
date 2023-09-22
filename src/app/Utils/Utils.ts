const scrollToSection = (sectionId: string, scroll: boolean) => {
  const section = document.getElementById(sectionId);
  if (section && scroll) {
    const y = section.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  if (!scroll) {
    window.location.href = `${sectionId}`;
  }

};
export default scrollToSection;
