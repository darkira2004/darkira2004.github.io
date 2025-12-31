import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import CurrentSectionHeader from "./components/CurrentSectionHeader";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";
import TechStackSection from "./sections/TechStackSection";
import FondoEstrellas from "./components/FondoEstrellas";
import BlueToneSelector from "./components/BlueToneSelector";

import TourGuide from "./components/TourGuide";

export default function App() {


  const [activeSection, setActiveSection] = useState("about");
  // Inicializa blueTone con el valor guardado en localStorage o el valor por defecto
  const [blueTone, setBlueTone] = useState(() => {
    return localStorage.getItem("blueTone") || "#0f172aff";
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { key: "about", id: "about" },
        { key: "experience", id: "experience" },
        { key: "projects", id: "projects" },
        { key: "certificates", id: "certificates" },
        { key: "techstack", id: "techstack" },
      ];

      const viewportMiddle = window.innerHeight / 3;
      let closest = { key: "about", distance: Infinity };

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Si la sección está visible en el viewport
          if (rect.top < viewportMiddle && rect.bottom > 0) {
            const distance = Math.abs(rect.top);
            if (distance < closest.distance) {
              closest = { key: section.key, distance };
            }
          }
        }
      }
      setActiveSection(closest.key);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full text-white font-inter relative">
      <TourGuide blueTone={blueTone} />
      <BlueToneSelector value={blueTone} onChange={setBlueTone} />
      <FondoEstrellas blueTone={blueTone} />
      <div className="lg:flex min-h-screen relative z-0 max-w-7xl mx-auto">
        {/* Perfil solo visible en mobile */}
        <div className="block lg:hidden pt-12 sm:pt-20 pb-5 px-4 sm:px-6 flex flex-col items-start max-w-3xl mx-auto">
          <Profile />
          <div className="mt-6 sm:mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* COLUMNA IZQUIERDA — FIJA EN LG */}
        <aside className="hidden lg:flex flex-col lg:sticky lg:top-0 h-screen pl-12 xl:pl-24 py-12 overflow-y-auto bg-transparent">
          <div className="flex flex-col gap-y-10 w-full justify-center items-start min-h-full">
            <Profile />
            <SideNav activeSection={activeSection} />
            <div className="flex-1"></div>
            <SocialLinks />
          </div>
        </aside>
        {/* COLUMNA DERECHA — CON SCROLL */}
        <main className="flex flex-col justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:w-[50%]">
          <CurrentSectionHeader />
          <AboutSection />
          {/* Linea dividora */}
          <div className="w-full h-[1px] bg-slate-700/30"></div>
          <ExperienceSection />
          {/* Linea dividora */}
          <div className="w-full h-[1px] bg-slate-700/30"></div>
          <ProjectsSection />
          {/* Linea dividora */}
          <div className="w-full h-[1px] bg-slate-700/30"></div>
          <CertificatesSection />
          {/* Linea dividora */}
          <div className="w-full h-[1px] bg-slate-700/30"></div>
          <TechStackSection />
        </main>
      </div>
    </div>
  );
}


