import React from "react";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaGithub,
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
  SiSupabase,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiGithubcopilot } from "react-icons/si";

/* CATEGORÍAS */
const categories = [
  {
    title: "Frontend",
    span: "md:col-span-2",
    gridCols: "grid-cols-4",
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
    span: "md:col-span-1",
    gridCols: "grid-cols-3",
    items: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
      { name: "API REST", icon: <SiJson className="text-green-500" /> },
      { name: "Swagger", icon: <SiSwagger className="text-yellow-500" /> },
    ],
  },
  {
    title: "Bases de Datos",
    span: "md:col-span-1",
    gridCols: "grid-cols-2",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-yellow-500" /> },
    ],
  },
  {
    title: "IA & Visión Computacional",
    span: "md:col-span-1",
    gridCols: "grid-cols-2",
    items: [
      { name: "YOLO", icon: <GiArtificialIntelligence className="text-purple-400" /> },
      { name: "Deep Learning", icon: <FaBrain className="text-pink-400" /> },
    ],
  },
  {
    title: "Herramientas",
    span: "md:col-span-1",
    gridCols: "grid-cols-2",
    items: [{ name: "Git", icon: <FaGit className="text-red-500" /> }, { name: "GitHub", icon: <FaGithub className="text-gray-500" /> }],
  },
  {
    title: "Asistentes con IA",
    span: "md:col-span-2",
    gridCols: "grid-cols-3",
    items: [
      { name: "ChatGPT", icon: <img src="/assets/img/ChatGPT-Logo.svg.png" alt="ChatGPT" className="w-7 h-7 rounded-lg" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-[#78dce8] text-3xl" /> },
      { name: "Claude", icon: <img src="/assets/img/Claude_AI_logo.svg.png" alt="Claude" className="h-7 rounded-xl" /> },
    ],
  },
];

const TechStackSection = () => {

  return (
    <section id="techstack" className="pt-2 py-10" data-label="techstack">
      <div className="space-y-20">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                2024 — PRESENTE
              </span>
              <h3 className="text-sm font-medium text-slate-100 tracking-tight">
                Stack Tecnológico
              </h3>

              <p className="text-sm text-slate-400 mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Tecnologías utilizadas para construir aplicaciones web, APIs, sistemas administrativos y proyectos de visión computacional con inteligencia artificial
                (usadas en proyectos reales y personales; en constante proceso de aprendizaje).
              </p>

              {/* BENTO GRID */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((category, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${category.span}
                      group/card
                      p-5 rounded-lg
                      bg-white/[0.02] border border-white/10
                      hover:bg-white/[0.05] hover:border-white/20
                      transition-all duration-200
                    `}
                  >
                    {/* TÍTULO CATEGORÍA */}
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-4">
                      {category.title}
                    </h4>

                    {/* GRID DE ICONOS */}
                    <div className={`grid ${category.gridCols} gap-3`}>
                      {category.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group/item flex flex-col items-center gap-1.5"
                          title={item.name}
                        >
                          <div className="text-3xl p-2 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-all">
                            {item.icon}
                          </div>
                          <span className="text-[9px] text-slate-500 group-hover/item:text-slate-300 transition-colors text-center max-w-[55px] leading-tight">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* END BENTO GRID */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
