import Section from "../common/Section";
import FAQItem from "../common/FAQItem";
import faqs from "../../data/faqs";

function FAQSection() {
  return (
    <Section
      id="faq"
      title="FAQ"
      subtitle="Answers to common questions"
    >
      <div className="mx-auto max-w-[900px] divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
        {faqs.map((faq, index) => (
          <FAQItem key={index} q={faq.q} a={faq.a} />
        ))}
      </div>
    </Section>
  );
}

export default FAQSection;