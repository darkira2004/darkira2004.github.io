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
      {/* Selector de tema flotante solo en desktop */}
      <div className="hidden lg:block fixed top-6 right-6 z-[9999]">
        <BlueToneSelector value={blueTone} onChange={setBlueTone} />
      </div>
      <FondoEstrellas blueTone={blueTone} />
      
      <div className="lg:flex min-h-screen relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perfil solo visible en mobile */}
        <header className="flex flex-col items-start w-full pt-16 pb-6 lg:hidden">
          <Profile />
          <div className="mt-6">
            <SocialLinks />
          </div>
        </header>

        {/* COLUMNA IZQUIERDA — FIJA EN LG */}
        <aside className="hidden lg:flex flex-col lg:sticky lg:top-0 h-screen w-[45%] xl:w-[40%] py-20 xl:py-28 pr-8 xl:pr-16">
          <div className="flex flex-col w-full h-full">
            <Profile />
            <SideNav activeSection={activeSection} />
            <div className="flex-1 min-h-[100px]" />
            <SocialLinks />
          </div>
        </aside>

        {/* COLUMNA DERECHA — CON SCROLL */}
        <main className="flex-1 lg:w-[55%] xl:w-[60%] py-6 lg:py-24 space-y-2">
          <CurrentSectionHeader blueTone={blueTone} onBlueToneChange={setBlueTone} />
          <AboutSection />
          <div className="w-full h-px bg-slate-700/30" />
          <ExperienceSection />
          <div className="w-full h-px bg-slate-700/30" />
          <ProjectsSection />
          <div className="w-full h-px bg-slate-700/30" />
          <CertificatesSection />
          <div className="w-full h-px bg-slate-700/30" />
          <TechStackSection />
        </main>
      </div>
    </div>
  );
}


