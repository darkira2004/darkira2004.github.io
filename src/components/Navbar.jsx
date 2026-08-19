import { UserIcon, BriefcaseIcon, CodeBracketIcon, TrophyIcon, CpuChipIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import { motion, LayoutGroup } from "framer-motion";
import ThemeSelector from "./ThemeSelector";

export default function Navbar({ activeSection, onSectionSelect, themeColor, onThemeChange }) {
  const items = [
    { id: "about", icon: UserIcon, label: "SOBRE MÍ", labelMobile: "Sobre mí" },
    { id: "experience", icon: BriefcaseIcon, label: "EXPERIENCIA", labelMobile: "Experiencia" },
    { id: "projects", icon: CodeBracketIcon, label: "PROYECTOS", labelMobile: "Proyectos" },
    { id: "certificates", icon: TrophyIcon, label: "CERTIFICADOS", labelMobile: "Certificados" },
    { id: "techstack", icon: CpuChipIcon, label: "TECNOLOGÍAS", labelMobile: "Tech Stack" },
  ];

  /* Fallback simple si no recibe prop (aunque App.jsx ya lo maneja) */
  const active = activeSection || "about";

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-[100] flex justify-center lg:hidden pointer-events-none px-2">
      <nav
        className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 backdrop-blur-xl rounded-2xl shadow-2xl pointer-events-auto transition-all duration-300 max-w-full"
        style={{
          backgroundColor: `${themeColor}15`,
          border: `1px solid ${themeColor}40`,
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
                className={`relative flex flex-col items-center justify-center min-w-[3rem] sm:min-w-[3.5rem] h-12 sm:h-14 px-2 rounded-xl transition-all duration-500 ease-out touch-manipulation`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: themeColor || "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 z-10 transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/60'} shrink-0`} />
                <span className={`text-[7px] sm:text-[8px] mt-0.5 sm:mt-1 z-10 font-bold tracking-tighter transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-white' : 'text-white/40'}`}>
                  {item.labelMobile}
                </span>
              </a>
            );
          })}
        </LayoutGroup>

        <div className="w-px h-8 sm:h-10 bg-white/10 mx-0.5 sm:mx-1 shrink-0" />

        <div className="shrink-0 relative z-[110]">
          <ThemeSelector
            value={themeColor}
            onChange={onThemeChange}
            direction="up"
            className="scale-90 sm:scale-100"
          />
        </div>
      </nav>
    </div>
  );
}
