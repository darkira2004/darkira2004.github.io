import { useEffect, useState } from "react";
import ThemeSelector from "./ThemeSelector";

export default function CurrentSectionHeader({ themeColor, onThemeChange }) {
  const [current, setCurrent] = useState("SOBRE MÍ");

  const sectionNames = {
    about: "ACERCA DE MÍ",
    experience: "EXPERIENCIA",
    projects: "PROYECTOS",
    certificates: "CERTIFICADOS",
    techstack: "TECNOLOGÍAS"
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const viewportMiddle = window.innerHeight / 3;
      let closest = { label: "about", distance: Infinity };

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < viewportMiddle && rect.bottom > 0) {
          const distance = Math.abs(rect.top);
          if (distance < closest.distance) {
            closest = { label: section.dataset.label, distance };
          }
        }
      });

      setCurrent(sectionNames[closest.label] || closest.label.toUpperCase());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="lg:hidden fixed top-0 inset-x-0 backdrop-blur-2xl z-40 border-b border-white/5 safe-area-inset transition-all duration-300"
      style={{ backgroundColor: themeColor ? `${themeColor.slice(0, 7)}cc` : "rgba(26,26,26,0.8)" }}
    >
      <div className="flex items-center justify-between h-14 px-6">
        <span className="text-xs font-bold tracking-widest text-white uppercase drop-shadow-sm">
          {current}
        </span>
        <ThemeSelector value={themeColor} onChange={onThemeChange} className="scale-90" />
      </div>
    </div>
  );
}
