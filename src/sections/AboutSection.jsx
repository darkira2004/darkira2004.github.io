import { Suspense, lazy } from "react";
import SoftSkills from "../components/SoftSkills";

const SplineCard = lazy(() => import("../components/SplineCard"));

export default function AboutSection() {
  return (
    <section id="about" data-label="about" className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Suspense fallback={
          <div className="w-full h-[600px] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <SplineCard />
        </Suspense>
      </div>
      <SoftSkills />
    </section>
  );
}
