import Section from "../common/Section";
import InfoCard from "../common/InfoCard";
import { profileImg } from "../../data/constants";

function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Frontend • Backend • Full Stack"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
            <img
              src={profileImg}
              alt="Sehzad"
              className="h-[420px] w-full rounded-[20px] object-cover scale-70 object-[50%_30%]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[17px] leading-[1.9] text-white/75">
            Frontend Developer with 6 months of internship experience at Arham
            Web Works, specializing in WordPress, Framer Motion, and Vue.js.
            Skilled in React.js, JavaScript, Tailwind CSS, responsive web
            development, and modern UI design. I help businesses build modern
            websites, redesign outdated websites, create booking systems, admin
            dashboards, management tools, and interactive web experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoCard label="Education" value="BCA, VNSGU (2022–2025)" />
            <InfoCard label="Role" value="Frontend | Backend | Full Stack" />
            <InfoCard label="Experience" value="6 months at Arham Web Works" />
            <InfoCard label="Focus" value="Business websites & web apps" />
          </div>

        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
