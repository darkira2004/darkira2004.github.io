import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './experience-carousel.css';

export default function ExperienceSection() {
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const dimacImages = [
    { src: "/assets/experiencia/dimac/dimacLogin.png", alt: "DIMAC - Login" },
    { src: "/assets/experiencia/dimac/dimacHome.png", alt: "DIMAC - Home" },
    { src: "/assets/experiencia/dimac/dimacRegistro.png", alt: "DIMAC - Registro" },
    { src: "/assets/experiencia/dimac/dimacRegistro2.png", alt: "DIMAC - Registro 2" },
    { src: "/assets/experiencia/dimac/dimacEdicionRegistro.png", alt: "DIMAC - Edición de Registro" },
    { src: "/assets/experiencia/dimac/dimacEmision.png", alt: "DIMAC - Emisión" },
    { src: "/assets/experiencia/dimac/dimacExportacion.png", alt: "DIMAC - Exportación" },
    { src: "/assets/experiencia/dimac/dimacEntrega.png", alt: "DIMAC - Entrega" },
    { src: "/assets/experiencia/dimac/dimacTablasMaestras.png", alt: "DIMAC - Tablas Maestras" },
  ];

  const carouselRef = useRef(null);

  const handleFullscreen = () => {
    if (carouselRef.current) {
      if (!document.fullscreenElement) {
        carouselRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const openCertificate = (path, title) => {
    setCurrentCertificate({ path, title });
  };

  const closeCertificate = () => {
    setCurrentCertificate(null);
  };

  return (
    <section id="experience" className="pt-2 py-5" data-label="experience">
      <div className="space-y-20">
        {/* CARD POLYBAGS */}
        <div
          className="
            group p-6 md:p-10
            transition-all duration-200
            border border-transparent
            rounded-none md:rounded-md
            hover:bg-white/5 hover:border-white/10
          "
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-white/60 mb-1 leading-6">
                FEB — JUL 2026
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="
                    text-sm font-medium text-white/95 tracking-tight
                    group-hover:text-white transition-colors
                  "
                >
                  Practicante de Desarrollo Full Stack y Visión Computacional · Polybags Perú
                </h3>
                <button
                  onClick={() => openCertificate(
                    "/assets/docs/Certificado_Polybags.pdf",
                    "Certificado de prácticas preprofesionales en Polybags Perú"
                  )}
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

              <p className="text-white/70 text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollé de extremo a extremo un prototipo de plataforma web para la captura,
                procesamiento y monitoreo de información visual en un entorno industrial. Construí
                el motor OCR, la API backend y la interfaz web, integrando procesamiento de imágenes
                con filtros HSV, configuración de regiones de interés y actualización de datos en tiempo real.
              </p>
              <span className="text-purple-500 block text-[13px] text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollo integral de una solución full stack con OCR y visión computacional
              </span>

              <figure className="flex flex-col items-center mt-5">
                <img
                  src="/assets/experiencia/polybags/ocr.png"
                  alt="Interfaz de preprocesamiento de una región OCR anonimizada"
                  loading="lazy"
                  className="rounded-sm w-full max-w-xl h-auto shadow-md border border-white/20 transition-colors"
                />
                <figcaption className="mt-2 max-w-xl text-center text-[11px] leading-relaxed text-white/50">
                  Configuración visual del preprocesamiento aplicado a una región OCR anonimizada.
                </figcaption>
              </figure>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 ring-blue-400/20 ring-1 ring-inset">React</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset">Python</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-300 ring-cyan-400/20 ring-1 ring-inset">FastAPI</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 ring-indigo-400/20 ring-1 ring-inset">PostgreSQL</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-orange-400/10 text-orange-300 ring-orange-400/20 ring-1 ring-inset">OpenCV</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-300 ring-yellow-400/20 ring-1 ring-inset">PaddleOCR</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-amber-400/10 text-amber-300 ring-amber-400/20 ring-1 ring-inset">Filtros HSV</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-pink-400/10 text-pink-300 ring-pink-400/20 ring-1 ring-inset">WebSockets</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-violet-400/10 text-violet-300 ring-violet-400/20 ring-1 ring-inset">Visión por Computadora</span>
                <span className="rounded-md px-2 py-1 text-xs font-medium bg-slate-400/10 text-slate-300 ring-slate-400/20 ring-1 ring-inset">shadcn/ui</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD AC MONSEFU */}
        <div
          className="
            group p-6 md:p-10
            transition-all duration-200
            border border-transparent
            rounded-none md:rounded-md
            hover:bg-white/5 hover:border-white/10
          "
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1">
              <span className="block text-[12px] font-semibold text-white/60 mb-1 leading-6">
                ENE 2026
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="
                    text-sm font-medium text-white/95 tracking-tight
                    group-hover:text-white transition-colors
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
              <p className="text-white/70 text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollo de la plataforma para el festival <strong>'Golpe Tierra 2026'</strong> de AC Monsefú.
                El sistema permite el registro de concursantes con generación automática de ficha en PDF,
                e incluye un panel administrativo seguro para gestionar inscripciones y exportar reportes a Excel.
              </p>

              <div className="flex justify-center mt-5">
                <img
                  src="/assets/experiencia/acmonsefu/golpeTierra2026.png"
                  alt="Golpe Tierra 2026"
                  loading="lazy"
                  className="rounded-sm w-full max-w-xl h-auto shadow-md border border-white/20 transition-colors"
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
            hover:bg-white/5 hover:border-white/10
          "
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            {/* CONTENIDO */}
            <div className="flex-1">
              {/* FECHA */}
              <span className="block text-[12px] font-semibold text-white/60 mb-1 leading-6">
                JUN — SEP 2025
              </span>
              {/* TÍTULO */}
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="
                    text-sm font-medium text-white/95 tracking-tight
                    group-hover:text-white transition-colors
                  "
                >
                  Practicante de Desarrollo Web · DIMAC
                </h3>
                <button
                  onClick={() => openCertificate(
                    "/assets/docs/Certificado_Practicas.pdf",
                    "Certificado de prácticas preprofesionales en DIMAC"
                  )}
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
              <p className="text-white/70 text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Desarrollo de módulos de registro, exportación a PDF, auditoría con funciones y triggers,
                y gestión integral de datos para la emisión dinámica de carnets de mascotas dentro del sistema
                DIMAC de la Municipalidad Provincial de Chiclayo.
              </p>
              <span className="text-purple-500 block text-[13px] text-sm mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                Automación del proceso de emisión de carnets en la Municipalidad de Chiclayo
              </span>

              {/* CARRUSEL DE IMÁGENES */}
              <div className="flex justify-center mt-5">
                <div
                  className="w-full max-w-xl dimac-carousel relative group/carousel"
                  ref={carouselRef}
                >
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="rounded-sm shadow-md bg-black"
                  >
                    {dimacImages.map((image, index) => (
                      <SwiperSlide key={index} className="flex items-center justify-center bg-black">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-auto max-h-[500px] object-contain cursor-grab active:cursor-grabbing"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Botón de pantalla completa */}
                  <button
                    onClick={handleFullscreen}
                    className="absolute bottom-2 right-2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/80 hover:text-white transition-all"
                    title="Pantalla completa"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                </div>
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

      {/* MODAL CERTIFICADO */}
      {currentCertificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeCertificate}
        >
          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeCertificate}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar certificado"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <iframe
              src={currentCertificate.path}
              className="w-full h-full rounded-md shadow-2xl bg-black/90"
              title={currentCertificate.title}
            ></iframe>
          </div>
        </div>
      )}


    </section>
  );
}
