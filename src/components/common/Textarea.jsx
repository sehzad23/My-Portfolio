import cn from "../../utils/cn";

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-white/60">
        {label}
      </span>

      <textarea
        {...props}
        rows={5}
        className={cn(
          "w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] outline-none",
          "placeholder:text-white/40 focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20"
        )}
      />
    </label>
  );
}

export default Textarea;