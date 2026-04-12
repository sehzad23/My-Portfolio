import { motion } from "framer-motion";
import { Check } from "lucide-react";

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-[1px]"
    >
      <div className="relative h-full rounded-[23px] bg-[#0b0b0c]/80 p-[32px] backdrop-blur-xl">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-300 shadow-[inset_0_0_20px_rgba(249,115,22,0.15)]">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="text-[18px] font-medium">{title}</h3>

        <p className="mt-3 text-[14px] leading-[1.8] text-white/65">
          {desc}
        </p>

        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition group-hover:bg-orange-500/20" />

        <div className="mt-6 flex items-center gap-2 text-[13px] text-orange-300/90">
          <Check className="h-4 w-4" />
          Premium • Responsive • Fast
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;