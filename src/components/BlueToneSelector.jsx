import React, { useState, useEffect, useRef, useCallback } from "react";
import { SunIcon } from "@heroicons/react/24/outline";

const blueTones = [
  "#000000ff",
  "#0f172aff",
  "#1e293bff",
  "#0c1b35ff",
  "#1a202cff",
  "#0a3d626d",
  "#121b2bff",
];

export default function BlueToneSelector({
  value,
  onChange,
  storageKey = "blueTone",
  className = "",
}) {
  const getInitialTone = useCallback(() => {
    const stored = localStorage.getItem(storageKey);
    return blueTones.find((b) => b === stored) || blueTones.find((b) => b === value) || blueTones[0];
  }, [storageKey, value]);

  const [open, setOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState(getInitialTone);
  const wrapperRef = useRef(null);

  useEffect(() => {
    onChange?.(selectedTone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleToneChange = (tone) => {
    setSelectedTone(tone);
    localStorage.setItem(storageKey, tone);
    onChange?.(tone);
    setOpen(false);
  };

  return (
    <div id="blue-tone-selector-tour" ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center w-8 h-8 rounded-full ring-1 ring-white/20 transition-all hover:scale-110 hover:ring-white/40 active:scale-95"
        style={{ background: `linear-gradient(135deg, ${selectedTone} 0%, #ffffff20 100%)` }}
      >
        <SunIcon className="w-4 h-4 text-white/80" />
      </button>

      {open && (
        <div className="absolute mt-2 right-0 flex gap-1.5 p-2 rounded-full backdrop-blur-2xl bg-black/80 border border-white/10 shadow-lg z-50">
          {blueTones.map((tone) => (
            <button
              key={tone}
              onClick={() => handleToneChange(tone)}
              className={`w-5 h-5 rounded-full border-2 transition-all hover:scale-110 ${
                selectedTone === tone ? "border-white scale-110" : "border-white/20"
              }`}
              style={{ backgroundColor: tone }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
