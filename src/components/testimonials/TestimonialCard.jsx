import { Quote } from "lucide-react";

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-[1px]">
      <div className="relative h-full rounded-[23px] bg-[#0b0b0c]/70 p-6">
        <Quote className="h-5 w-5 text-orange-400/80" />

        <p className="mt-3 text-[15px] leading-[1.8] text-white/80">
          “{quote}”
        </p>

        <div className="mt-5 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[12px]">
            {name.slice(0, 1)}
          </div>

          <div>
            <p className="text-[14px] font-medium">{name}</p>
            <p className="text-[12px] text-white/55">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;