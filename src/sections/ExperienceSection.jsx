import { useState } from "react";


export default function ExperienceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="pt-2 py-5" data-label="experience">
      <div className="space-y-20">
        {/* CARD AC MONSEFU */}
        <div
          className="
            group p-6 md:p-10
            transition-all duration-200
            border border-transparent
            rounded-none md:rounded-md
          "
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                ENE 2026
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="
                    text-sm font-medium text-slate-100 tracking-tight
                    group-hover:text-[#64ffda] transition-colors
                  "
                >
                  Desarrollador Web · AC Monsefú
                </h3>
                <a
                  href="https://acmonsefu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-xs font-medium text-[#64ffda] 
                    border border-[#64ffda] rounded px-2 py-0.5
                    hover:bg-[#64ffda]/10 transition-colors
                    cursor-pointer
                    no-underline
                  "
                >
                  Visitar sitio
                </a>
              </div>
              <p className="text-slate-400 text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollo de la plataforma para el festival <strong>'Golpe Tierra 2026'</strong> de AC Monsefú.
                El sistema permite el registro de concursantes con generación automática de ficha en PDF,
                e incluye un panel administrativo seguro para gestionar inscripciones y exportar reportes a Excel.
              </p>

              <div className="flex justify-center mt-5">
                <img
                  src="/assets/experiencia/img/golpeTierra2026.png"
                  alt="Golpe Tierra 2026"
                  className="rounded-sm w-full max-w-xl h-auto shadow-md border border-slate-700/30 transition-colors"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 ring-blue-400/20 ring-1 ring-inset">React</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-300 ring-cyan-400/20 ring-1 ring-inset">Tailwind</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset">Supabase</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 ring-indigo-400/20 ring-1 ring-inset">PostgreSQL</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-orange-400/10 text-orange-300 ring-orange-400/20 ring-1 ring-inset">Production</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-pink-400/10 text-pink-300 ring-pink-400/20 ring-1 ring-inset">Custom Domain</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD DIMAC */}
        <div
          className="
            group p-6 md:p-10
            transition-all duration-200
            border border-transparent
            rounded-none md:rounded-md
          "
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            {/* CONTENIDO */}
            <div className="flex-1">
              {/* FECHA */}
              <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                JUN — SEP 2025
              </span>
              {/* TÍTULO */}
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="
                    text-sm font-medium text-slate-100 tracking-tight
                    group-hover:text-[#64ffda] transition-colors
                  "
                >
                  Practicante de Desarrollo Web · DIMAC
                </h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="
                    text-xs font-medium text-[#64ffda] 
                    border border-[#64ffda] rounded px-2 py-0.5
                    hover:bg-[#64ffda]/10 transition-colors
                    cursor-pointer
                  "
                >
                  Ver certificado
                </button>
              </div>
              {/* DESCRIPCIÓN */}
              <p className="text-slate-400 text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollo de módulos de registro, exportación a PDF, auditoría con funciones y triggers,
                y gestión integral de datos para la emisión dinámica de carnets de mascotas dentro del sistema
                DIMAC de la Municipalidad Provincial de Chiclayo.
              </p>
              <span className="text-purple-500 block text-[13px] text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Automación del proceso de emisión de carnets en la Municipalidad de Chiclayo
              </span>

              {/* VIDEO */}
              <div className="flex justify-center mt-5">
                <video
                  src="/assets/experiencia/video/dimac.mp4"
                  controls
                  className="rounded-sm w-full max-w-xl h-70 shadow-md border border-slate-700/30 transition-colors"
                />
              </div>
              {/* BADGES */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 ring-blue-400/20 ring-1 ring-inset">PHP</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-300 ring-yellow-400/20 ring-1 ring-inset">JavaScript</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 ring-indigo-400/20 ring-1 ring-inset">PostgreSQL</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-300 ring-yellow-400/20 ring-1 ring-inset">MVC</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-sky-400/10 text-sky-300 ring-sky-400/20 ring-1 ring-inset">Tabler CSS</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset">
                  Digitalización Municipal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <iframe
              src="/assets/docs/Certificado_Practicas.pdf"
              className="w-full h-full rounded-md shadow-2xl bg-slate-900"
              title="Certificado de Prácticas"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
