// src/components/SideNav.tsx

export default function SideNav({ activeSection }) {
  const items = [
    { label: "ACERCA DE", href: "#about", key: "about" },
    { label: "EXPERIENCIA", href: "#experience", key: "experience" },
    { label: "PROYECTOS", href: "#projects", key: "projects" },
    { label: "CERTIFICADOS", href: "#certificates", key: "certificates" },
    { label: "TECNOLOGÍAS", href: "#techstack", key: "techstack" }
  ];

  return (
    <div className="flex flex-col font-inter text-white ml-9">
      <nav className="flex flex-col gap-4 mt-4">
        {items.map((item) => {
          const isActive = activeSection === item.key;
          return (
            <a
              key={item.key}
              href={item.href}
              className="group flex items-center py-1 gap-4"
            >
              <span
                className={`block transition-all duration-100 ease-in-out
                  ${isActive
                    ? "w-16 h-[1px] bg-white"
                    : "w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white"}
                `}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest
                  ${isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-white"}
                `}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}