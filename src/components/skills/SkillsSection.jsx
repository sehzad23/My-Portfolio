import Section from "../common/Section";
import skills from "../../data/skills";

function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills & Stack"
      subtitle="Modern tools for modern products"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-[1px]">
        <div className="rounded-[27px] bg-[#0b0b0c]/70 p-8 backdrop-blur-xl">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/80"
              >
                <span className="relative z-10">{skill}</span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillsSection;