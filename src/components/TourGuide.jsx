import React, { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function TourGuide({ blueTone }) {
  // ... (useEffect logic remains the same, so we only need to update the function signature start and the return)
  // Actually, I need to replace the whole file or a large chunk to handle the prop destructuring if I don't want to use multi_replace.
  // Let's just use replace_file_content for the signature and the style block separately or together if close.
  // They are far apart. I will do signature first then style.

  // Wait, I can't change signature with simple replace easily if I don't match the lines.
  // The previous file content shows `export default function TourGuide({ blueTone }) {`.
  // I will replace line 5.

  useEffect(() => {
    // Check if the user has already seen the tour
    const hasSeenTour = localStorage.getItem("hasSeenTour");

    if (!hasSeenTour) {
      const driverObj = driver({
        showProgress: true,
        animate: true,
        allowClose: false,
        doneBtnText: "Finalizar",
        nextBtnText: "Siguiente",
        prevBtnText: "Anterior",
        progressText: "{{current}} de {{total}}",
        steps: [
          {
            element: "body", // Center the first step or use a general welcome
            popover: {
              title: "Gracias por visitar mi portafolio",
              description: "Le invito a realizar un breve recorrido para conocer las funcionalidades principales de este sitio web.",
              side: "center",
              align: "center",
            },
          },
          {
            element: "#spline-card-tour",
            popover: {
              title: "Interacción 3D",
              description: "Este componente 3D es completamente interactivo. Puede girarlo haciendo click y arrastrarlo, explorandolo libremente.",
              side: "bottom",
              align: "center",
            },
          },
          {
            element: "#blue-tone-selector-tour",
            popover: {
              title: "Personalización de Tema",
              description: "Seleccione entre diversas tonalidades de azul para ajustar la estética del sitio a su preferencia visual.",
              side: "left",
              align: "start",
            },
          },
        ],
        onDestroyStarted: () => {
          if (!driverObj.hasNextStep() || confirm("¿Seguro que desea salir de la guía?")) {
            driverObj.destroy();
            localStorage.setItem("hasSeenTour", "true");
          }
        },
      });

      // Small delay to ensure elements are mounted
      const timer = setTimeout(() => {
        driverObj.drive();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <style>{`
      /* Driver.js Custom Theme */
      .driver-popover.driverjs-theme {
        background-color: ${blueTone || '#0f172a'};
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px; /* Reduced from 12px to 6px (sm/md) */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        min-width: 300px;
        font-family: 'Inter', sans-serif;
      }

      .driver-popover.driverjs-theme .driver-popover-title {
        color: #f8fafc;
        font-size: 1.05rem;
        font-weight: 600;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .driver-popover.driverjs-theme .driver-popover-description {
        color: #cbd5e1;
        font-size: 0.9rem;
        line-height: 1.5;
        font-weight: 400;
      }

      .driver-popover.driverjs-theme button {
        background-color: rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.2);
        text-shadow: none;
        font-family: 'Inter', sans-serif;
        font-size: 0.8rem;
        padding: 5px 12px;
        border-radius: 4px; /* Smaller radius */
        transition: all 0.2s ease;
      }

      .driver-popover.driverjs-theme button:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      /* Highlight styling */
      .driver-active-element {
        /* Removing the border lines as requested */
        box-shadow: none !important;
        background-color: transparent !important;
      }

      /* Buttons customization */
      .driver-popover.driverjs-theme .driver-popover-next-btn {
        background-color: #ffffff !important; 
        color: ${blueTone || '#0f172a'} !important;
        border: none !important;
        font-weight: 600;
      }

      .driver-popover.driverjs-theme .driver-popover-next-btn:hover {
        opacity: 0.9;
      }
      
      .driver-popover.driverjs-theme .driver-popover-prev-btn {
         opacity: 0.8;
      }
      
      .driver-popover.driverjs-theme .driver-popover-close-btn {
        color: #94a3b8;
      }
      .driver-popover.driverjs-theme .driver-popover-close-btn:hover {
        color: #f8fafc;
      }
      
      .driver-popover.driverjs-theme .driver-popover-progress-text {
        color: #cbd5e1;
        font-size: 0.75rem;
        opacity: 0.7;
      }
    `}</style>
  );
}
