
import { FaUsers, FaHandshake, FaRocket, FaBolt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const skills = [
    { name: "Trabajo en Equipo", icon: <FaUsers /> },
    { name: "Comunicación", icon: <FaHandshake /> },
    { name: "Adaptabilidad", icon: <GiBrain /> },
    { name: "Proactividad", icon: <FaRocket /> },
    { name: "Aprendizaje Rápido", icon: <FaBolt /> },
];

export default function SoftSkills() {
    return (
        <div className="mt-4 w-full max-w-[600px] mx-auto px-4 mb-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[0.5px] flex-1 bg-slate-700/30"></div>
                <h3 className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                    Habilidades Blandas
                </h3>
                <div className="h-[0.5px] flex-1 bg-slate-700/30"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="
              group flex items-center gap-2.5 px-4 py-2.5
              bg-[#112240]/50 backdrop-blur-sm border border-slate-700/50 rounded-lg
              text-slate-300 text-xs font-medium tracking-wide
              hover:bg-slate-800 hover:border-emerald-500/30 hover:text-emerald-300 hover:-translate-y-1
              transition-all duration-300 cursor-default shadow-sm
            "
                    >
                        <span className="text-emerald-500/80 group-hover:text-emerald-400 text-sm transition-colors">
                            {skill.icon}
                        </span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
