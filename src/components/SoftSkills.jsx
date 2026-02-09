import { FaUsers, FaHandshake, FaRocket, FaBolt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

// Paleta psicológica para habilidades blandas
const skills = [
    { name: "Trabajo en Equipo", icon: <FaUsers />, color: "#2dd4bf" }, // Teal: Colaboración y armonía
    { name: "Comunicación", icon: <FaHandshake />, color: "#3b82f6" }, // Blue: Confianza y claridad
    { name: "Adaptabilidad", icon: <GiBrain />, color: "#a855f7" }, // Purple: Transformación y mente
    { name: "Proactividad", icon: <FaRocket />, color: "#f43f5e" }, // Rose: Iniciativa y energía
    { name: "Aprendizaje Rápido", icon: <FaBolt />, color: "#eab308" }, // Amber: Velocidad e intelecto
];

/** Aclara un hex para bordes */
function lightenHex(hex, amount = 22) {
    const h = hex.replace(/^#/, "");
    if (h.length !== 6) return hex;
    const r = Math.min(255, parseInt(h.slice(0, 2), 16) + amount);
    const g = Math.min(255, parseInt(h.slice(2, 4), 16) + amount);
    const b = Math.min(255, parseInt(h.slice(4, 6), 16) + amount);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export default function SoftSkills({ themeColor }) {
    const hex = themeColor ? themeColor.slice(0, 7) : "#1c1c1c";
    const borderColor = lightenHex(hex, 12);

    return (
        <div className="mt-4 w-full max-w-[600px] mx-auto px-4 mb-6 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[0.5px] flex-1" style={{ backgroundColor: borderColor }}></div>
                <h3 className="text-center text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                    Habilidades Blandas
                </h3>
                <div className="h-[0.5px] flex-1" style={{ backgroundColor: borderColor }}></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group flex items-center gap-2.5 px-4 py-2.5 backdrop-blur-sm rounded-lg text-white/90 text-xs font-medium tracking-wide hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm border border-white/5"
                        style={{
                            backgroundColor: `${skill.color}15`, // Fondo sutil con la psicología del color (aprox 8% opacidad)
                            borderColor: `${skill.color}40`, // Borde coordinado
                            boxShadow: `0 0 12px ${skill.color}10` // Glow muy suave
                        }}
                    >
                        <span className="text-sm transition-colors duration-300" style={{ color: skill.color }}>
                            {skill.icon}
                        </span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
