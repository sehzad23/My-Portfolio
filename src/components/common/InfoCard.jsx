function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
      <p className="text-[12px] text-white/55">{label}</p>
      <p className="mt-1 text-[15px]">{value}</p>
    </div>
  );
}

export default InfoCard;