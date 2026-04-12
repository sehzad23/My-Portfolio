import Section from "../common/Section";
import TimelineItem from "./TimelineItem";
import experienceData from "../../data/experience";

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internship & hands-on builds"
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent md:left-1/2" />

        <div className="grid gap-10">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ExperienceSection;