import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState("");

  const handleOpenDocument = (docPath) => {
    setCurrentDoc(docPath);
    setIsModalOpen(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <section
      id="projects" className="pt-2 py-5" data-label="projects"
    >
      <div className="space-y-5">

        {/* CARD TESIS YOLO */}
        <div
          className="group p-6 md:p-10 transition-all duration-200 border border-transparent rounded-none md:rounded-md"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                2025 — PRESENTE
              </span>
              <h3 className="text-sm text-slate-100 tracking-tight group-hover:text-[#64ffda] transition-colors">
                Proyecto de Tesis · Detección de EPP con YOLO
              </h3>

              <p className="text-sm text-slate-400 mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Entrenamiento de modelos YOLO, creación del primer dataset de uso de EPP en escenarios reales de
                obra civil en el Perú y desarrollo de un sistema de detección de uso de EPP con YOLO. Mejor
                resultado obtenido con datos locales: mAP50 = 0.905 con YOLOv8s en el dataset PPE Perú.
              </p>

              <div className="mt-3">
                <span
                  className="
                    inline-block text-[12px] italic text-emerald-400 bg-white/5 backdrop-blur
                    px-3 py-2 rounded-md border border-white/10 leading-relaxed
                  "
                >
                  Dataset actualmente en acceso restringido por motivos de tesis.
                  Si estás interesado en acceso para investigación o industria,
                  acceso disponible bajo solicitud mediante redes de contacto.
                </span>
              </div>

              <div className="flex justify-center mt-5">
                <video
                  src="/assets/proyectos/video/videoYolo.mp4"
                  controls
                  className="rounded-sm w-full max-w-xl h-70 shadow-md border border-slate-700/30 transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-5 flex justify-center">
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-300 ring-yellow-400/20 ring-1 ring-inset">YOLO</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-green-400/10 text-green-300 ring-green-400/20 ring-1 ring-inset">Python</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-purple-400/10 text-purple-300 ring-purple-400/20 ring-1 ring-inset">Visión por Computadora</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 ring-blue-400/20 ring-1 ring-inset">Roboflow</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset">Dataset PPE Perú</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-lime-400/10 text-lime-300 ring-lime-400/20 ring-1 ring-inset">mAP50 · 0.905</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-700/30"></div>
        {/* CARD PUBLICACIÓN LEIRD */}
        <div
          className="group p-6 md:p-10 transition-all duration-200 border border-transparent rounded-none md:rounded-md"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                2025 — PUBLICACIÓN ACEPTADA
              </span>
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-medium text-slate-100 tracking-tight group-hover:text-[#64ffda] transition-colors">
                  Publicación Científica · LEIRD / LACCEI
                </h3>
                <button
                  onClick={() => handleOpenDocument("/assets/docs/Contribution_420_final_a.pdf")}
                  className="
                    text-xs font-medium text-cyan-400 
                    border border-cyan-400 rounded px-2 py-0.5
                    hover:bg-cyan-400/10 transition-colors
                    cursor-pointer inline-flex items-center gap-1
                  "
                >
                  <DocumentTextIcon className="w-3.5 h-3.5" />
                  Ver artículo
                </button>
              </div>

              <p className="text-sm text-slate-400 mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Artículo aceptado como autor principal sobre métodos de inteligencia artificial aplicados
                a la automatización de procesos en la conferencia LEIRD 2025.
              </p>

              <div className="flex justify-center mt-5">
                <img
                  src="/assets/img/LEIRD-2025.png"
                  alt="LEIRD 2025 Banner"
                  className="rounded-sm w-full max-w-xl h-auto shadow-md border border-slate-700/30 transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-5 flex justify-center">
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-purple-400/10 text-purple-300 ring-purple-400/20 ring-1 ring-inset">Revisión Sistemática</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 ring-indigo-400/20 ring-1 ring-inset">IA</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-green-400/10 text-green-300 ring-green-400/20 ring-1 ring-inset">Automatización</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 ring-blue-400/20 ring-1 ring-inset">Investigación</span>
                <span className="inline-flex items-center flex justify-center rounded-md px-2 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-300 ring-cyan-400/20 ring-1 ring-inset">LEIRD 2025</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] flex flex-col animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <iframe
              src={currentDoc}
              className="w-full h-full rounded-md shadow-2xl bg-slate-900"
              title="Documento"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
