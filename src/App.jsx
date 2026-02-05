import { useEffect, useState, Suspense, lazy } from "react";
import SideNav from "./components/SideNav";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import CurrentSectionHeader from "./components/CurrentSectionHeader";
import AboutSection from "./sections/AboutSection";
import FondoEstrellas from "./components/FondoEstrellas";
import BlueToneSelector from "./components/BlueToneSelector";
import TourGuide from "./components/TourGuide";

// Lazy loading de secciones pesadas o que no están en el viewport inicial
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const CertificatesSection = lazy(() => import("./sections/CertificatesSection"));
const TechStackSection = lazy(() => import("./sections/TechStackSection"));

// Componente de carga simple
const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center opacity-50">
    <div className="animate-pulse h-4 w-32 bg-slate-700/50 rounded"></div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  // Inicializa blueTone con el valor guardado en localStorage o el valor por defecto
  const [blueTone, setBlueTone] = useState(() => {
    return localStorage.getItem("blueTone") || "#0f172aff";
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Ajusta la zona de detección al centro de la pantalla
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      // Filtramos solo las entradas que intersectan
      const visibleSections = entries.filter(entry => entry.isIntersecting);

      if (visibleSections.length > 0) {
        // Si hay una sola, esa es. Si hay varias, tomamos la que tenga mayor intersectionRatio
        const bestCandidate = visibleSections.reduce((prev, current) => {
          return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
        });

        if (bestCandidate?.target?.id) {
          setActiveSection(bestCandidate.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
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

          <Suspense fallback={<LoadingFallback />}>
            <ExperienceSection />
          </Suspense>

          <div className="w-full h-px bg-slate-700/30" />

          <Suspense fallback={<LoadingFallback />}>
            <ProjectsSection />
          </Suspense>

          <div className="w-full h-px bg-slate-700/30" />

          <Suspense fallback={<LoadingFallback />}>
            <CertificatesSection />
          </Suspense>

          <div className="w-full h-px bg-slate-700/30" />

          <Suspense fallback={<LoadingFallback />}>
            <TechStackSection />
          </Suspense>
        </main>
      </div>
    </div>
  );
}


