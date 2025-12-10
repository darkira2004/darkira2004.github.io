import { useEffect, useState } from "react";

export default function CurrentSectionHeader() {
  const [current, setCurrent] = useState("ABOUT");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(entry.target.dataset.label.toUpperCase());
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-[#0e1525]/60 backdrop-blur-md z-40 border-b border-white/5 px-6 py-4">
      <span className="text-sm tracking-widest text-white/60 font-semibold">
        {current}
      </span>
    </div>
  );
}
