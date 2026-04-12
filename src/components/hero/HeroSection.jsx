import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profileImg, floatingBadges } from "../../data/constants";

const techStack = [
  {
    label: "React.js",
    className: "top-[12%] left-[8%]",
    float: { y: [0, -10, 0], x: [0, 6, 0] },
  },
  {
    label: "Express.js",
    className: "top-[28%] right-[0%]",
    float: { y: [0, 8, 0], x: [0, -8, 0] },
  },
  {
    label: "Node.js",
    className: "bottom-[24%] left-[16%]",
    float: { y: [0, -8, 0], x: [0, 8, 0] },
  },
  {
    label: "MongoDB",
    className: "bottom-[10%] right-[4%]",
    float: { y: [0, 10, 0], x: [0, -6, 0] },
  },
];

function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-16 py-[60px] md:py-[80px] lg:grid-cols-2 lg:py-[120px]">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-[12px] text-orange-200/90">
              <Sparkles className="h-3.5 w-3.5" />
              Available for freelance & full-time
            </div>

            <h1 className="text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[56px] lg:text-[68px]">
              I Build Modern Websites &
              <br className="hidden md:block" />
              Full Stack Solutions
              <span className="relative ml-3 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  For Businesses
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.8] text-white/70">
              Frontend, Backend, and Full Stack Developer helping local
              businesses, startups, creators, and small companies launch fast,
              responsive, and conversion-focused web apps.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-[15px] font-medium text-black"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[15px] text-white/90 transition hover:border-white/30"
              >
                View Projects
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {floatingBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/70 backdrop-blur-md"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side Image Section */}
          <div className="relative flex items-center justify-center overflow-visible">
            <motion.div
              style={{ y: y1 }}
              className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-400/20 blur-3xl"
            />

            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-8 -right-6 h-56 w-56 rounded-full bg-gradient-to-tr from-orange-600/25 to-yellow-400/15 blur-3xl"
            />

            <div className="relative flex items-center justify-center w-full max-w-[500px] sm:max-w-[420px] md:max-w-[500px] aspect-square">
              {/* Animated Dashed Circle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 z-0 rounded-full border-4 border-dashed border-orange-400/70"
              />

              {/* Floating Tech Boxes */}
              {techStack.map((item, index) => (
                <motion.div
                  key={item.label}
                  animate={item.float}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute z-20 ${item.className}`}
                >
                  <div className="rounded-xl border border-orange-400/40 bg-[#111111]/80 px-4 py-2 text-sm font-medium text-orange-300 shadow-[0_0_20px_rgba(255,140,0,0.15)] backdrop-blur-xl">
                    {item.label}
                  </div>
                </motion.div>
              ))}

              {/* Main Profile Image */}
              <div className="relative z-10 mx-auto h-[88%] w-[88%] max-w-[440px] overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-[5px] backdrop-blur-xl">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0b0b0c]">
                  <img
                    src={profileImg}
                    alt="Sehzad Ansari"
                    className="h-full w-full rounded-full object-cover object-[50%_30%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;