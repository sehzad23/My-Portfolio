import { ChevronDown } from "lucide-react";

function ScrollHint() {
  return (
    <a href="#about" className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-xl">
        <ChevronDown className="h-3.5 w-3.5" />
        Scroll
      </div>
    </a>
  );
}

export default ScrollHint;