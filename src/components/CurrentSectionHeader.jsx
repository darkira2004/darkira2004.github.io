import { useEffect, useState } from "react";

export default function CurrentSectionHeader() {
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
  }, []);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-[#0e1525]/60 backdrop-blur-md z-40 border-b border-white/5 px-6 py-4">
      <span className="text-sm tracking-widest text-white/60 font-semibold">
        {current}
      </span>
    </div>
  );
}
