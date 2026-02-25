import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { id: "about", label: "About" },
  { id: "principles", label: "Principles" },
  { id: "how", label: "Flow" },
  { id: "audience", label: "Audience" },
  { id: "technology", label: "Technology" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "founder", label: "Founder" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);

      const top = y + 120;
      let cur = "about";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= top) cur = item.id;
      }
      setActive(cur);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent2"
        style={{ width: `${progress}%`, boxShadow: "0 0 10px rgba(244,200,74,.65)" }}
      />
      <div className="border-b border-line bg-[#0a0c11]/92 backdrop-blur-md">
        <div className="container py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <img src="/noxis-logo.svg" alt="Noxis" className="h-10 md:h-11 w-auto" />
              <span className="hidden md:inline-flex rounded-md border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-mute">
                secure vision suite
              </span>
            </a>
            <a
              href="#how"
              className="btn-primary hidden md:inline-flex !text-xs !px-3 !py-1.5 uppercase tracking-[0.08em]"
            >
              Open Flow
            </a>
          </div>

          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="relative shrink-0 rounded-lg px-2 py-1">
                <span
                  className={`text-xs uppercase tracking-[0.08em] transition ${
                    active === item.id ? "text-ink" : "text-mute"
                  }`}
                >
                  {item.label}
                </span>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-accent2"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
