import { useState } from "react";
import { FaLaptopCode, FaLeaf, FaTools } from "react-icons/fa";
import { MdSchool, MdVerified } from "react-icons/md";

export default function CertificatesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCert, setCurrentCert] = useState("");

    const handleOpenCertificate = (certPath) => {
        setCurrentCert(certPath);
        setIsModalOpen(true);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    const certificates = [
        {
            id: 1,
            title: "Practicante de Desarrollo Web · DIMAC",
            year: "2025",
            icon: <FaLaptopCode className="text-2xl" />,
            description: "Desarrollo full-stack, automatización y gestión de BD.",
            color: "blue",
            path: "/assets/docs/Certificado_Practicas.pdf"
        },
        {
            id: 2,
            title: "Hackaton Ambiental",
            year: "2025",
            icon: <FaLeaf className="text-2xl" />,
            description: "Solución tecnológica orientada a sostenibilidad.",
            color: "emerald",
            path: "/assets/docs/hackatonAmbiental.pdf"
        },
        {
            id: 3,
            title: "CCNA: Introduction to Networks",
            year: "2023",
            image: "/assets/img/CCNAv7_Introduction to Networks.png",
            path: "/assets/docs/CCNA-_Introduction_to_Networks_certificate.pdf"
        },
        {
            id: 4,
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            year: "2024",
            image: "/assets/img/CCNAv7_Switching, Routing, and Wireless Essential.png",
            path: "/assets/docs/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.pdf"
        },
        {
            id: 5,
            title: "Asistente de Docencia en Algoritmos",
            year: "2024",
            icon: <MdSchool className="text-2xl" />,   // Ícono docente / académico
            description: "Acompañamiento académico, resolución de dudas y guía en programación estructurada.",
            color: "violet",
            path: "/assets/docs/Certificado_AsistenteDocenciaAlgoritmos.pdf"
        },

        {
            id: 6,
            title: "Excel Intermedio",
            year: "2024",
            icon: <MdSchool className="text-2xl" />,
            description: "Gestión, análisis y automatización básica de datos.",
            color: "yellow",
            path: "/assets/docs/Certificado_ExcelIntermedio.pdf"
        },
        {
            id: 7,
            title: "Inglés Básico",
            year: "2024",
            icon: <MdSchool className="text-2xl" />,
            description: "Introducción a comunicación y comprensión en inglés.",
            color: "violet",
            path: "/assets/docs/Certificado_InglesBasico.pdf"
        },
        {
            id: 8,
            title: "Soporte Técnico",
            year: "2024",
            icon: <FaTools className="text-2xl" />,
            description: "Atención, diagnóstico y mantenimiento de TI.",
            color: "red",
            path: "/assets/docs/Certificado_SoporteTecnico.pdf"
        }
    ];

    // *** UI ***

    return (
        <section id="certificates" className="pt-2 py-5" data-label="certificates">
            {/* HEADER / DESCRIPTION */}
            <div className="group p-6 md:p-10 transition-all duration-200 border border-transparent rounded-none md:rounded-md mb-2">
                <span className="block text-[12px] font-semibold text-slate-500 mb-1 leading-6">
                    2021 — PRESENTE
                </span>
                <h3 className="text-sm font-medium text-slate-100 tracking-tight group-hover:text-[#64ffda] transition-colors">
                    Certificaciones y Logros
                </h3>
                <p className="text-sm text-slate-400 mt-2.5 max-w-2xl leading-relaxed text-justify-loose">
                    Esta colección reúne los certificados y reconocimientos obtenidos a lo largo de mi formación.
                    Algunos fueron alcanzados hace años, otros más recientes, pero cada uno marcó un momento clave
                    en mi crecimiento técnico y personal. Aunque con el tiempo ciertas habilidades se atenúan,
                    haberlas dominado una vez me permite retomarlas con mayor rapidez. Este conjunto refleja mi
                    compromiso con el aprendizaje continuo y la evolución de mi camino profesional.
                </p>
            </div>

            {/* GRID */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-5 items-center ml-4 mr-4">
                {certificates.map((cert) => {
                    const isBlue = cert.color === "blue";
                    const isGreen = cert.color === "emerald";
                    const isYellow = cert.color === "yellow";
                    const isViolet = cert.color === "violet";
                    const isRed = cert.color === "red";

                    const commonDimensions = "w-32 h-32 md:w-40 md:h-40";
                    const hoverEffect = "transform transition-transform duration-300 hover:scale-105";

                    // === PURE IMAGE BADGE (Cisco)
                    if (cert.image) {
                        return (
                            <div
                                key={cert.id}
                                className={`group relative ${commonDimensions} flex items-center justify-center cursor-pointer ${hoverEffect}`}
                                onClick={() => handleOpenCertificate(cert.path)}
                                title={cert.title}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all rounded-2xl"
                                />
                            </div>
                        );
                    }

                    // === COLOR LOGIC
                    let containerClasses = "";
                    let iconBg = "";
                    let titleHover = "";
                    let yearBadge = "";

                    if (isBlue) {
                        containerClasses = "bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40";
                        iconBg = "bg-blue-500/20 text-blue-400";
                        titleHover = "group-hover:text-blue-300";
                        yearBadge = "bg-blue-500/20 text-blue-300 border border-blue-500/30";
                    }
                    if (isGreen) {
                        containerClasses = "bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40";
                        iconBg = "bg-emerald-500/20 text-emerald-400";
                        titleHover = "group-hover:text-emerald-300";
                        yearBadge = "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
                    }
                    if (isYellow) {
                        containerClasses = "bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10 hover:border-yellow-500/40";
                        iconBg = "bg-yellow-500/20 text-yellow-300";
                        titleHover = "group-hover:text-yellow-200";
                        yearBadge = "bg-yellow-500/20 text-yellow-200 border border-yellow-500/30";
                    }
                    if (isViolet) {
                        containerClasses = "bg-violet-500/5 border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-500/40";
                        iconBg = "bg-violet-500/20 text-violet-300";
                        titleHover = "group-hover:text-violet-200";
                        yearBadge = "bg-violet-500/20 text-violet-300 border border-violet-500/30";
                    }
                    if (isRed) {
                        containerClasses = "bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40";
                        iconBg = "bg-red-500/20 text-red-300";
                        titleHover = "group-hover:text-red-200";
                        yearBadge = "bg-red-500/20 text-red-300 border border-red-500/30";
                    }

                    // === CARD UI
                    return (
                        <div
                            key={cert.id}
                            className={`group relative p-3 rounded-2xl border cursor-pointer 
                            ${commonDimensions} flex flex-col justify-between ${containerClasses} ${hoverEffect}`}
                            onClick={() => handleOpenCertificate(cert.path)}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`p-2 rounded-lg ${iconBg}`}>
                                    {cert.icon}
                                </div>
                                <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded ${yearBadge}`}>
                                    {cert.year}
                                </span>
                            </div>

                            <h3 className={`text-[10px] font-bold text-slate-100 leading-snug line-clamp-3 ${titleHover}`}>
                                {cert.title}
                            </h3>

                            <p className="text-[9px] text-slate-400 leading-tight line-clamp-2">
                                {cert.description}
                            </p>

                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                                <MdVerified className={isBlue ? "text-blue-500" :
                                    isGreen ? "text-emerald-500" :
                                        isYellow ? "text-yellow-400" :
                                            isViolet ? "text-violet-400" :
                                                "text-red-400"} />
                                <span>Ver certificado</span>
                            </div>
                        </div>
                    );
                })}
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
                            src={currentCert}
                            className="w-full h-full rounded-md shadow-2xl bg-slate-900"
                            title="Certificado"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
