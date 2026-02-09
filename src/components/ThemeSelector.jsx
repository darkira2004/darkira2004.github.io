import React, { useState, useEffect, useRef } from "react";
import { SwatchIcon } from "@heroicons/react/24/outline";
import { THEMES, getThemeFromStorageOrValue, STORAGE_KEY } from "../constants/themes";

export default function ThemeSelector({
  value,
  onChange,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const initialSync = useRef(false);

  const selected = getThemeFromStorageOrValue(value);

  useEffect(() => {
    if (!initialSync.current) {
      initialSync.current = true;
      onChange?.(selected.bg);
    }
  }, [onChange, selected.bg]);

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

  const handleSelect = (theme) => {
    localStorage.setItem(STORAGE_KEY, theme.id);
    onChange?.(theme.bg);
    setOpen(false);
  };

  return (
    <div id="theme-selector-tour" ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center w-8 h-8 rounded-full ring-1 ring-white/20 transition-all hover:scale-110 hover:ring-white/40 active:scale-95"
        style={{ backgroundColor: selected.bg }}
        title="Tema"
      >
        <SwatchIcon className="w-4 h-4 text-white/80" />
      </button>

      {open && (
        <div className="absolute mt-2 right-0 grid grid-cols-4 gap-1.5 p-2 min-w-[120px] rounded-xl bg-black/90 border border-white/10 shadow-lg z-50">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleSelect(theme)}
              className={`w-5 h-5 rounded-full border-2 transition-all hover:scale-110 ${selected.id === theme.id
                ? "border-white scale-110"
                : "border-white/20"
                }`}
              style={{ backgroundColor: theme.bg }}
              title={theme.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
