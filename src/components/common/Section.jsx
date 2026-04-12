function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="py-[60px] md:py-[80px] lg:py-[120px]">
          <div className="mb-[24px] flex items-end justify-between gap-6">
            <div>
              <h2 className="text-[28px] font-semibold tracking-tight md:text-[36px]">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-[8px] md:mt-[12px] text-[14px] text-white/60">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="hidden h-[1px] w-[220px] bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;