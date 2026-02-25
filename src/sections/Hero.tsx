import { motion, useMotionValue, useTransform } from "framer-motion";

const METRICS = [
  { label: "Collection Scope", value: "Public + mandated feeds", note: "No dragnet ingestion" },
  { label: "Narrative Lens", value: "Graph + anomaly burst", note: "Coordination pattern detection" },
  { label: "Audit Integrity", value: "Hash + provenance", note: "Replayable decision trail" },
];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tX = useTransform(mx, [-220, 220], [-8, 8]);
  const tY = useTransform(my, [-220, 220], [-7, 7]);

  return (
    <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] items-end">
      <div>
        <p className="section__eyebrow">NOXIS / Rights-first Intelligence</p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          className="m-0 max-w-[20ch] text-[2.15rem] leading-[1.12] md:text-[3.1rem]"
        >
          Narrative defense without mass surveillance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.36 }}
          className="mt-4 max-w-[70ch] text-[1.02rem] leading-relaxed text-mute"
        >
          NOXIS is the strategic security layer inside the Lambda ARCHEON ecosystem. It protects information
          space, data integrity, and decision pipelines through targeted OSINT, narrative graph analysis, and
          cryptographically verifiable outputs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.34 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <a className="btn-primary" href="#how">
            Open Operational Flow
          </a>
          <a className="btn" href="#ecosystem">
            Explore Ecosystem Links
          </a>
        </motion.div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {METRICS.map((item) => (
            <div key={item.label} className="panel px-4 py-4">
              <p className="m-0 text-[11px] uppercase tracking-[0.13em] text-mute">{item.label}</p>
              <p className="mt-2 mb-1 text-sm font-medium text-ink">{item.value}</p>
              <p className="m-0 text-xs text-mute">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative h-[290px] md:h-[360px] overflow-hidden rounded-[22px] border border-line bg-[radial-gradient(700px_300px_at_60%_10%,rgba(216,169,58,.12),transparent_72%),linear-gradient(160deg,#121a2a_0%,#0a111d_100%)]"
        onMouseMove={(e) => {
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          mx.set(e.clientX - (r.left + r.width / 2));
          my.set(e.clientY - (r.top + r.height / 2));
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        style={{ translateX: tX, translateY: tY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(600px_260px_at_50%_120%,rgba(244,200,74,.14),transparent_68%)]" />
        <img
          src="/assets/noxis-hero.png"
          alt="NOXIS visual identity"
          className="absolute inset-0 h-full w-full object-contain p-7 md:p-9 pointer-events-none select-none"
        />
      </motion.div>
    </div>
  );
}
