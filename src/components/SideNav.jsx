export default function SideNav({ activeSection, onSectionSelect }) {
  const items = [
    { label: "ACERCA DE", href: "#about", key: "about" },
    { label: "EXPERIENCIA", href: "#experience", key: "experience" },
    { label: "PROYECTOS", href: "#projects", key: "projects" },
    { label: "CERTIFICADOS", href: "#certificates", key: "certificates" },
    { label: "TECNOLOGÍAS", href: "#techstack", key: "techstack" }
  ];

  return (
    <nav className="flex flex-col gap-2.5 font-inter text-white mt-10">
      {items.map((item) => {
        const isActive = activeSection === item.key;
        return (
          <a
            key={item.key}
            href={item.href}
            className="group flex items-center gap-4 py-1 w-fit"
            onClick={() => onSectionSelect && onSectionSelect(item.key)}
          >
            <span
              className={`block h-px transition-all duration-150 ease-out ${isActive
                ? "w-16 bg-white"
                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-white"
                }`}
            />
            <span
              className={`text-[11px] font-semibold uppercase tracking-widest transition-colors ${isActive ? "text-white" : "text-slate-500 group-hover:text-white"
                }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}