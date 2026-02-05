import SoftSkills from "../components/SoftSkills";
import ProfilePhoto from "../components/ProfilePhoto";

export default function AboutSection() {
  return (
    <section id="about" data-label="about" className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <ProfilePhoto />
      </div>
      <SoftSkills />
    </section>
  );
}
