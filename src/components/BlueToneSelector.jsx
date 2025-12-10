import React, { useState, useEffect, useRef } from "react";
import { SunIcon, CheckIcon } from "@heroicons/react/24/outline";

const blueTones = [
  { name: "Vacío Infinito", value: "#000000ff" },
  { name: "Mar Profundo", value: "#0f172aff" },
  { name: "Trueno del Crepúsculo", value: "#1e293bff" },
  { name: "Eclipse Marino", value: "#0c1b35ff" },
  { name: "Nieve de la Luna", value: "#1a202cff" },
  { name: "Aurora Boreal", value: "#0a3d62ff" },
    { name: "Cielo Nocturno", value: "#121b2bff" },
];

export default function BlueToneSelector({
  value,
  onChange,
  storageKey = "blueTone",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState(blueTones[0]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const initial =
      blueTones.find((b) => b.value === stored) ||
      blueTones.find((b) => b.value === value) ||
      blueTones[0];

    setSelectedTone(initial);
    onChange?.(initial.value);
  }, []);

  // click afuera
  useEffect(() => {
    const close = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleToneChange = (tone) => {
    setSelectedTone(tone);
    localStorage.setItem(storageKey, tone.value);
    onChange?.(tone.value);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`fixed top-6 right-6 z-[9999] ${className}`}>
      {/* ORB */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`
          relative flex items-center justify-center
          w-[46px] h-[46px] rounded-full
          shadow-[0_0_25px_6px_rgba(0,0,0,0.45)]
          ring-1 ring-white/10
          backdrop-blur-xl
          overflow-hidden
          transition-all
          hover:scale-[1.08]
          active:scale-[0.98]
          select-none
        `}
        style={{
          background: `linear-gradient(135deg, ${selectedTone.value} 0%, #ffffff33 100%)`,
        }}
      >
        <SunIcon className="w-5 h-5 text-white drop-shadow-md opacity-90" />
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
      </button>

      {/* PANEL */}
      {open && (
        <div
          className={`
            absolute mt-3 right-0
            w-[250px]
            rounded-[18px]
            p-2.5 space-y-1
            backdrop-blur-2xl
            bg-gradient-to-b from-[#0b0f1ca6] to-[#05060bcc]
            border border-white/10
            shadow-[0_15px_40px_-5px_rgba(0,0,0,0.65)]
            animate-[scaleFade_0.18s_ease-out]
            origin-top-right
          `}
        >
          {blueTones.map((tone) => {
            const active = selectedTone.value === tone.value;
            return (
              <button
                key={tone.value}
                onClick={() => handleToneChange(tone)}
                className={`
                  w-full flex items-center gap-3
                  px-3.5 py-2.5 rounded-[14px]
                  text-[13px]
                  transition-all
                  select-none
                  ${
                    active
                      ? "bg-white/15 text-white shadow-inner backdrop-blur-sm"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }
                `}
              >
                <span
                  className="w-6 h-6 rounded-full border border-white/30 shadow-lg shadow-black/50 flex-shrink-0"
                  style={{ backgroundColor: tone.value }}
                />
                <span className="flex-1 text-left">{tone.name}</span>
                {active && <CheckIcon className="w-4 h-4 text-emerald-300" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
