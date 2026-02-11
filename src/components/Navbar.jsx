import { UserIcon, BriefcaseIcon, CodeBracketIcon, TrophyIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ThemeSelector from "./ThemeSelector";

export default function Navbar({ activeSection, onSectionSelect, themeColor, onThemeChange }) {
  const items = [
    { id: "about", icon: UserIcon, label: "Sobre Mí" },
    { id: "experience", icon: BriefcaseIcon, label: "Exp." },
    { id: "projects", icon: CodeBracketIcon, label: "Proyectos" },
    { id: "certificates", icon: TrophyIcon, label: "Cert." },
    { id: "techstack", icon: CpuChipIcon, label: "Tech" }
  ];

  /* Fallback simple si no recibe prop (aunque App.jsx ya lo maneja) */
  const active = activeSection || "about";

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center lg:hidden pointer-events-none">
      <nav
        className="flex items-center gap-1 p-2 backdrop-blur-xl rounded-2xl border shadow-2xl pointer-events-auto transition-all duration-300 max-w-[92vw] overflow-x-auto [&::-webkit-scrollbar]:hidden"
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
                className={`relative flex items-center justify-center h-12 px-2.5 rounded-xl transition-all duration-500 ease-out`}
                style={{
                  minWidth: isActive ? "auto" : "40px"
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: themeColor || "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <item.icon className={`w-5 h-5 z-10 transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/50'}`} />

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="text-[11px] font-bold uppercase tracking-wide text-white whitespace-nowrap overflow-hidden z-10"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </LayoutGroup>

        <div className="w-px h-5 bg-white/10 mx-1 shrink-0" />

        <div className="mr-1">
          <ThemeSelector
            value={themeColor}
            onChange={onThemeChange}
            direction="up"
            className="scale-90"
          />
        </div>
      </nav>
    </div>
  );
}
