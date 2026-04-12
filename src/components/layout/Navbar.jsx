import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Menu, X } from "lucide-react";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavigation = (href) => {
    setMobileOpen(false);

    setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-orange-500/30 blur-md transition group-hover:bg-orange-500/50" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.35)]">
                <Code2 className="h-5 w-5 text-black" />
              </div>
            </div>

            <div className="leading-tight">
              <p className="text-[17px] font-semibold tracking-tight">
                Sehzad Ansari
              </p>
              <p className="-mt-0.5 text-[11px] text-white/60">
                Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[14px] text-white/70 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:text-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] transition hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-[1200px] gap-3 px-6 py-4">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMobileNavigation(item.href)}
                  className="rounded-lg py-2 text-left text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleMobileNavigation("#projects")}
                  className="flex-1 rounded-full border border-white/10 px-4 py-2 text-center text-sm text-white/80"
                >
                  View Projects
                </button>

                <button
                  onClick={() => handleMobileNavigation("#contact")}
                  className="flex-1 rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-medium text-black"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;