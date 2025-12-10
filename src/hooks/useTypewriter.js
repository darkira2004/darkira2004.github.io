import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 20) { // función personalizada para efecto de máquina de escribir
  const [displayed, setDisplayed] = useState(""); // estado para el texto que se muestra

  useEffect(() => { // efecto de maquina de escribir
    let index = 0; // índice para rastrear la posición actual en el texto
    const interval = setInterval(() => { // intervalo para agregar caracteres uno por uno
      setDisplayed(text.slice(0, index)); // actualizar el texto mostrado
      index++; // incrementar el índice

      if (index > text.length) clearInterval(interval); // limpiar el intervalo cuando se complete el texto
    }, speed); // velocidad del efecto

    return () => clearInterval(interval); // limpiar el intervalo al desmontar el componente
  }, [text, speed]); // dependencias del efecto

  return displayed; // texto que se muestra
}
