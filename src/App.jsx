import { useEffect } from "react";

import BackgroundEffects from "./components/layout/BackgroundEffects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollHint from "./components/layout/ScrollHint";

import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ServicesSection from "./components/services/ServicesSection";
import SkillsSection from "./components/skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import WhyWorkSection from "./components/whyWork/WhyWorkSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FAQSection from "./components/faq/FAQSection";
import ContactSection from "./components/contact/ContactSection";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] text-white antialiased selection:bg-orange-500/30 selection:text-orange-200">
      <BackgroundEffects />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WhyWorkSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollHint />
    </div>
  );
}