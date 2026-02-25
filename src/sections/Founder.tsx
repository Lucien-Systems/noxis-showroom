import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";

type Tab = "Principles" | "Bio" | "Timeline";

const PRINCIPLES = [
  "Targeted scope over mass collection",
  "Reproducibility and versioned runs",
  "Cryptographic evidence chain by default",
  "Privacy-first operating boundaries",
  "Clear review trail for governance",
  "Clarity over narrative noise",
];

type Row = { y: string; t: string; d: string; brief?: string };
const TIMELINE: Row[] = [
  {
    y: "2025-Present",
    t: "Chief Architect, NOXIS",
    d: "Lucien Systems LLC (USA)",
    brief: "Rights-first narrative security architecture across OSINT, hybrid-threat analytics, and auditability.",
  },
  {
    y: "2022-Present",
    t: "Founder & Managing Shareholder",
    d: "Lucien Systems LLC (USA)",
    brief: "R&D and advisory on AI systems, governance controls, and resilient operational design.",
  },
  {
    y: "2023-2024",
    t: "Interim Project Consultancy",
    d: "Deutsche Mechatronics GmbH (DE)",
  },
  {
    y: "2022-2023",
    t: "Industrial & IT Engineer / Data Analyst",
    d: "L.I.T. Gruppe (DE)",
  },
];

export default function Founder() {
  const [tab, setTab] = useState<Tab>("Principles");

  const variant = useMemo(
    () => ({
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.24 } },
      exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
    }),
    []
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-[320px_1fr]">
        <aside className="panel p-5">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-accent2/50 bg-[#0b1220] text-lg font-medium text-accent2">
              AKL
            </div>
            <div>
              <h3 className="m-0 text-[1rem]">Adam Karl Lucien</h3>
              <p className="mt-1 mb-0 text-sm text-mute">Systems architect, governance and narrative security</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-mute">
            <span className="rounded-lg border border-line bg-[#0b1220] px-2 py-1">AI/ML</span>
            <span className="rounded-lg border border-line bg-[#0b1220] px-2 py-1">OSINT</span>
            <span className="rounded-lg border border-line bg-[#0b1220] px-2 py-1">Governance</span>
            <span className="rounded-lg border border-line bg-[#0b1220] px-2 py-1">Auditability</span>
          </div>
        </aside>

        <section>
          <div className="mb-4 flex flex-wrap gap-2">
            {(["Principles", "Bio", "Timeline"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-xl border px-3 py-1.5 text-xs uppercase tracking-[0.08em] transition ${
                  tab === t ? "border-accent2 text-ink shadow-glow" : "border-line text-mute hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === "Principles" && (
              <motion.div key="p" {...variant} className="grid gap-2 md:grid-cols-2">
                {PRINCIPLES.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg border border-line bg-[#0b1220] px-3 py-2">
                    <FiCheckCircle className="mt-0.5 text-accent" />
                    <span className="text-sm text-mute">{item}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {tab === "Bio" && (
              <motion.div key="b" {...variant} className="panel p-5 text-mute text-sm leading-relaxed">
                Adam Karl Lucien leads NOXIS as a rights-first security architecture designed to detect coordinated
                influence operations, protect institutional decision chains, and maintain legal-grade auditability across
                the full analytical workflow.
              </motion.div>
            )}

            {tab === "Timeline" && (
              <motion.div key="t" {...variant} className="grid gap-3">
                {TIMELINE.map((row) => (
                  <article key={row.y + row.t} className="panel p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="m-0 text-sm">{row.t}</h4>
                      <span className="inline-flex items-center gap-1 rounded-md border border-accent2/50 bg-accent2/10 px-2 py-0.5 text-[11px] text-accent2">
                        <FiCalendar /> {row.y}
                      </span>
                    </div>
                    <p className="mt-1 mb-0 text-sm text-mute">{row.d}</p>
                    {row.brief ? <p className="mt-2 mb-0 text-xs text-mute">{row.brief}</p> : null}
                  </article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
