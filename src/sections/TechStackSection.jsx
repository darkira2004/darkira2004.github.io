import React, { useState, useEffect } from "react";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import {
  SiPhp,
  SiTailwindcss,
  SiSwagger,
  SiPostgresql,
  SiJson,
  SiTypescript,
  SiAngular,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";     // ChatGPT icon substitute
import { SiGithubcopilot } from "react-icons/si";
import { MdAssistWalker } from "react-icons/md"; // Claude subtle alt
import "../components/techstack-animations.css";

/* CATEGORÍAS */
const categories = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Angular", icon: <SiAngular className="text-red-600" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Tabler CSS", icon: <FaCss3Alt className="text-blue-300" /> },
    ],
  },
  {
    title: "Backend / API",
    items: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "API REST", icon: <SiJson className="text-green-500" /> },
      { name: "Swagger", icon: <SiSwagger className="text-yellow-500" /> },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-yellow-500" /> },
    ],
  },
  {
    title: "IA & Visión Computacional",
    items: [
      { name: "YOLO — Vision AI", icon: <GiArtificialIntelligence className="text-purple-400" /> },
      { name: "Deep Learning", icon: <FaBrain className="text-pink-400" /> },
    ],
  },
  {
    title: "Herramientas",
    items: [{ name: "Git", icon: <FaGit className="text-red-500" /> }],
  },
  {
    title: "Asistentes con IA",
    items: [
      { name: "ChatGPT", icon: <img src="/assets/img/ChatGPT-Logo.svg.png" alt="ChatGPT" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem' }} /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-[#78dce8]" style={{ fontSize: '2.5rem' }} /> },
      { name: "Claude", icon: <div style={{ width: '5.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1.2rem' }}><img src="/assets/img/Claude_AI_logo.svg.png" alt="Claude" style={{ maxWidth: '95%', maxHeight: '90%' }} /></div> },
    ],
  },
];

const TechStackSection = () => {
  const [hovered, setHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  /* ANIMACIÓN CÍCLICA */
  useEffect(() => {
    let interval;
    if (hovered) {
      let flat = categories.flatMap((c) => c.items);
      let idx = -1;
      interval = setInterval(() => {
        idx = (idx + 1) % flat.length;
        setActiveIdx(idx);
      }, 160);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (!hovered) setActiveIdx(-1);
    };
  }, [hovered]);

  return (
    <section id="techstack" className="pt-2 py-10" data-label="techstack">
      <div className="space-y-20">
        <div className="group p-6 md:p-10 transition-all duration-200 border border-transparent rounded-none md:rounded-md">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                2024 — PRESENTE
              </span>
              <h3 className="text-sm font-medium text-slate-100 tracking-tight group-hover:text-[#64ffda] transition-colors">
                Stack Tecnológico
              </h3>

              <p className="text-sm text-slate-400 mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Tecnologías utilizadas para construir aplicaciones web, APIs, sistemas administrativos y proyectos de visión computacional con inteligencia artificial
                (usadas en proyectos reales y personales; en constante proceso de aprendizaje). Algunas tecnologías han sido utilizadas como base o complemento dentro de proyectos específicos, mientras que otras constituyen el foco principal de desarrollo.
              </p>

              {/* GRID */}
              <div
                className="mt-10 space-y-10"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {categories.map((category, cIdx) => (
                  <div key={cIdx} className="flex flex-col items-center gap-5">
                    <div className="w-full h-[1px] bg-slate-700/30"></div>
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                      {category.title}
                    </span>
                    {/* Linea dividora */}


                    <div className="flex flex-wrap justify-center gap-8">
                      {category.items.map((item, idx) => {
                        const globalIdx =
                          categories
                            .slice(0, cIdx)
                            .flatMap((c) => c.items).length + idx;
                        const isActive = activeIdx === globalIdx;

                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center gap-2 transition-all cursor-pointer ${isActive ? "scale-[1.20]" : "scale-100"
                              }`}
                          >
                            <div
                              className={`text-5xl p-3 rounded-xl transition-all duration-300 ${isActive
                                ? "shadow-[0_0_18px_4px_rgba(100,255,218,0.4)] bg-white/5"
                                : "bg-white/5"
                                }`}
                              title={item.name}
                            >
                              {item.icon}
                            </div>
                            <span className="text-[11px] text-slate-400">
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/* END GRID */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
