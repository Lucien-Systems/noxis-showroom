import { motion } from "framer-motion";
import { FiInfo, FiShield, FiZap } from "react-icons/fi";

const ITEMS = [
  {
    icon: <FiInfo className="h-5 w-5" />,
    title: "Strategic Role",
    desc:
      "NOXIS is a specialized security layer inside the wider ΛRCHΞON ecosystem, built as a digital immune system for information space, data integrity and decision workflows.",
  },
  {
    icon: <FiShield className="h-5 w-5" />,
    title: "Rights-first Architecture",
    desc:
      "No blanket population monitoring. Targeted OSINT scope, need-to-know modular access, synthetic training signals, and strict minimization are enforced by design.",
  },
  {
    icon: <FiZap className="h-5 w-5" />,
    title: "Narrative Intelligence Core",
    desc:
      "Narrative graphs, anomaly burst detection, and multimodal analysis (text + image/video) are paired with cryptographic audit trails for verifiable, decision-ready outputs.",
  },
];

export default function WhatIs() {
  return (
    <section id="about" className="section">
      <div className="card p-6 md:p-8 max-w-[1200px] mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.12 }}
              className="rounded-2xl border border-line bg-panel p-6 shadow-glow hover:shadow-glow-strong hover:-translate-y-1 transition"
            >
              <div className="icon-badge mb-4">
                {it.icon}
              </div>
              <h3 className="text-xl font-semibold m-0">{it.title}</h3>
              <p className="text-mute mt-2 text-sm leading-relaxed">{it.desc}</p>
              <div className="mt-4 h-px w-16 bg-accent/40" />
            </motion.div>
          ))}
        </div>
        <div className="mt-6 panel p-4 text-sm text-mute">
          Chief architect: <span className="text-ink font-medium">Adam Karl Lucien</span>.
        </div>
      </div>
    </section>
  );
}
