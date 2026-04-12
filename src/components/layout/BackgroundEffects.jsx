function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,122,0,0.18),transparent_60%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,140,0,0.12),transparent_55%)]" />

      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}

export default BackgroundEffects;