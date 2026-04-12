import Section from "../common/Section";
import WhyWorkCard from "./WhyWorkCard";
import whyWork from "../../data/whyWork";

function WhyWorkSection() {
  return (
    <Section
      id="why"
      title="Why Work With Me"
      subtitle="Quality, speed, and business impact"
    >
      <div className="grid gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
        {whyWork.map((item) => (
          <WhyWorkCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}

export default WhyWorkSection;