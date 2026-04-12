import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cn from "../../utils/cn";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium">{q}</span>

        <ChevronDown
          className={cn(
            "h-4 w-4 text-white/60 transition",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-6 text-[14px] leading-[1.8] text-white/70">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQItem;