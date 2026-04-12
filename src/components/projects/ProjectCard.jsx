import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function ProjectCard({ title, desc, stack, image, live }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-[1px]"
    >
      <div className="relative overflow-hidden rounded-[25px] bg-[#0c0c0e]">
        <div className="relative h-[220px] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-3 top-3 flex gap-1.5">
            {stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-[18px] font-medium">{title}</h3>

          <p className="mt-2 text-[14px] leading-[1.8] text-white/70">{desc}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 ">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-500 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black"
            >
              Live <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -inset-px rounded-[26px] opacity-0 transition group-hover:opacity-100"
          style={{
            boxShadow:
              "0 0 0 1px rgba(249,115,22,0.25) inset, 0 0 40px rgba(249,115,22,0.12)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
