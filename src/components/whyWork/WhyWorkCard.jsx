function WhyWorkCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-[1px] backdrop-blur-xl">
      <div className="relative h-full rounded-[23px] bg-[#0b0b0c]/70 p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-300">
          <Icon className="h-5 w-5" />
        </div>

        <p className="text-[16px] font-medium">{title}</p>

        <p className="mt-2 text-[14px] leading-[1.7] text-white/65">
          {desc}
        </p>

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />
      </div>
    </div>
  );
}

export default WhyWorkCard;