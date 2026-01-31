import { useEffect, useState } from "react";
import BlueToneSelector from "./BlueToneSelector";

export default function CurrentSectionHeader({ blueTone, onBlueToneChange }) {
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
      className="lg:hidden fixed top-0 inset-x-0 backdrop-blur-xl z-40 border-b border-white/10 safe-area-inset"
      style={{ backgroundColor: blueTone ? `${blueTone.slice(0, 7)}e6` : "rgba(0,0,0,0.9)" }}
    >
      <div className="flex items-center justify-between h-12 px-4">
        <span className="text-xs tracking-[0.2em] text-white/90 font-semibold uppercase">
          {current}
        </span>
        <BlueToneSelector value={blueTone} onChange={onBlueToneChange} />
      </div>
    </div>
  );
}
