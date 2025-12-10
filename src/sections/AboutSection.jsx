import SplineCard from "../components/SplineCard";
import SoftSkills from "../components/SoftSkills";

export default function AboutSection() {
  return (
    <section id="about" data-label="about" className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <SplineCard />
      </div>
      <SoftSkills />
    </section>
  );
}
