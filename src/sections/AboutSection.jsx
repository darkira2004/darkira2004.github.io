import SoftSkills from "../components/SoftSkills";
import ProfilePhoto from "../components/ProfilePhoto";

export default function AboutSection({ themeColor }) {
  return (
    <section id="about" data-label="about" className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <ProfilePhoto />
      </div>
      <SoftSkills themeColor={themeColor} />
    </section>
  );
}
