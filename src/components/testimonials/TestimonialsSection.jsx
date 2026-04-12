import Section from "../common/Section";
import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What clients say"
    >
      <div className="grid gap-[32px] md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}

export default TestimonialsSection;