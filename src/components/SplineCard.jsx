import Spline from '@splinetool/react-spline';
import { MdViewInAr } from "react-icons/md";

export default function SplineCard() {
  return (
    <>
      <style>{`
        /* TABLET */
        @media (max-width: 1240px) {
          .spline-wrapper {
            width: 600px !important;
            height: 800px !important;
            justify-content: center !important;
          }
        }

        /* CELULAR */
        @media (max-width: 680px) {
          .spline-wrapper {
            width: 500px !important;
            height: 420px !important;
            overflow: visible !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <div
        id="spline-card-tour"
        className="spline-wrapper flex justify-center"
        style={{
          width: "600px",
          height: "700px",
          overflow: "hidden",
          position: "relative",
          touchAction: "none",
        }}
      >
        {/* Ícono y mensaje de objeto 3D */}
        <div style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          background: "rgba(255, 255, 255, 1)",
          borderRadius: "5px",
          padding: "6px 12px 6px 8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <MdViewInAr size={22} color="#333" />
        </div>
        <Spline
          scene="https://prod.spline.design/r9Hdfeg0MWcYfiKP/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
}
