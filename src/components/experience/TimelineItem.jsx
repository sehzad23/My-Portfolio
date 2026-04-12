import { Check } from "lucide-react";
import cn from "../../utils/cn";

function TimelineItem({ side, title, meta, points }) {
  return (
    <div
      className={cn(
        "relative grid items-start gap-6 md:grid-cols-2",
        side === "right" && "md:[&>*:first-child]:order-2"
      )}
    >
      <div className={cn("relative", side === "left" ? "md:pr-10" : "md:pl-10")}>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl" />

          <p className="text-[11px] uppercase tracking-wider text-orange-300/80">
            {meta}
          </p>

          <h4 className="mt-1 text-[18px] font-medium">{title}</h4>

          <ul className="mt-3 space-y-2 text-[14px] leading-[1.8] text-white/75">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <Check className="mt-1 h-4 w-4 text-orange-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={cn(
          "hidden md:block",
          side === "left" ? "md:pl-10" : "md:pr-10"
        )}
      />

      <div className="pointer-events-none absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-orange-400/60 bg-orange-400/80 shadow-[0_0_20px_rgba(249,115,22,0.6)] md:left-1/2" />
    </div>
  );
}

export default TimelineItem;