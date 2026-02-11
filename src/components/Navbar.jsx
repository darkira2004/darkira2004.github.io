import { UserIcon, BriefcaseIcon, CodeBracketIcon, TrophyIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ThemeSelector from "./ThemeSelector";

export default function Navbar({ activeSection, onSectionSelect, themeColor, onThemeChange }) {
  const items = [
    { id: "about", icon: UserIcon, label: "SOBRE MÍ" },
    { id: "experience", icon: BriefcaseIcon, label: "EXPERIENCIA" },
    { id: "projects", icon: CodeBracketIcon, label: "PROYECTOS" },
    { id: "certificates", icon: TrophyIcon, label: "CERTIFICADOS" },
    { id: "techstack", icon: CpuChipIcon, label: "TECNOLOGÍAS" }
  ];

  /* Fallback simple si no recibe prop (aunque App.jsx ya lo maneja) */
  const active = activeSection || "about";

  return (
    <div className="fixed bottom-6 inset-x-0 z-[100] flex justify-center lg:hidden pointer-events-none">
      <nav
        className="flex items-center gap-0.5 p-1.5 backdrop-blur-xl rounded-2xl border shadow-2xl pointer-events-auto transition-all duration-300"
        style={{
          backgroundColor: `${themeColor}15`,
          borderColor: `${themeColor}40`,
        }}
      >
        <LayoutGroup>
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onSectionSelect && onSectionSelect(item.id)}
                className={`relative flex flex-col items-center justify-center h-14 w-14 rounded-xl transition-all duration-500 ease-out`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: themeColor || "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <item.icon className={`w-5 h-5 z-10 transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/60'}`} />
                <span className={`text-[6px] mt-1 z-10 font-bold uppercase tracking-tighter transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/40'}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </LayoutGroup>

        <div className="w-px h-8 bg-white/10 mx-1 shrink-0" />

        <div className="mr-0.5">
          <ThemeSelector
            value={themeColor}
            onChange={onThemeChange}
            direction="up"
            className="scale-75 origin-right"
          />
        </div>
      </nav>
    </div>
  );
}
