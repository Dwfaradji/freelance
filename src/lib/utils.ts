import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const scrollToSection = (sectionId: string, scroll: boolean) => {
  const section = document.getElementById(sectionId) as HTMLElement;
  if (!scroll) {
    window.location.href = `${sectionId}`;
  }
  if (section && scroll) {
    const y = section.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "auto" });
  }
};
export default scrollToSection;
