import { motion } from "framer-motion";
import { FiInfo, FiShield, FiZap } from "react-icons/fi";

const ITEMS = [
  {
    icon: <FiInfo className="h-5 w-5 text-accent" />,
    title: "Overview",
    desc:
      "Noxis is an AI-powered OSINT & narrative-intelligence demo designed for targeted, transparent and auditable protection of the information space.",
  },
  {
    icon: <FiShield className="h-5 w-5 text-accent2" />,
    title: "Rights-first, not mass scanning",
    desc:
      "No blanket tracking of populations. Purpose limitation, minimization and verifiable audit receipts baked in by design.",
  },
  {
    icon: <FiZap className="h-5 w-5 text-accent" />,
    title: "Why it’s revolutionary",
    desc:
      "Unlike traditional platforms, Noxis unifies synthetic signals, narrative graphs and cryptographic audit trails into one coherent system — delivering decision-ready insights faster while preserving rights-first constraints.",
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
              <div className="h-10 w-10 rounded-full border border-line bg-bg grid place-items-center shadow-glow mb-4">
                {it.icon}
              </div>
              <h3 className="text-xl font-semibold m-0">{it.title}</h3>
              <p className="text-mute mt-2 text-sm leading-relaxed">{it.desc}</p>
              <div className="mt-4 h-px w-16 bg-accent/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}