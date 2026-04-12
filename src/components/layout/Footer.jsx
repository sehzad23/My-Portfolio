import { Code2 } from "lucide-react";
import footerLinks from "../../data/footerLinks";

function Footer() {
  return (
    <footer className="relative mt-[60px] border-t border-white/5">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
              <Code2 className="h-5 w-5 text-black" />
            </div>

            <div>
              <p className="text-[15px] font-medium">Sehzad Ansari</p>
              <p className="text-[12px] text-white/55">
                Frontend • Backend • Full Stack
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[13px] text-white/60">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Sehzad Ansari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
