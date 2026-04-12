import Section from "../common/Section";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";

function ServicesSection() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Premium, conversion-focused solutions"
    >
      <div className="grid gap-[32px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default ServicesSection;