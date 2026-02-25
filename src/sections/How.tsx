import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HowViz from "../components/HowViz";

type Step = 1 | 2 | 3 | 4 | 5;

const LABELS: Record<Step, string> = {
  1: "Targeted Collection",
  2: "Narrative Analysis",
  3: "Manipulation Mapping",
  4: "Decision Brief",
  5: "Cryptographic Receipt",
};

export default function How() {
  const [active, setActive] = useState<Step>(1);

  const variant = {
    initial: { opacity: 0, y: 8, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -8, filter: "blur(2px)", transition: { duration: 0.18 } },
  };

  return (
    <div className="card p-6 md:p-8">
      <div className="mb-5 flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onClick={() => setActive(s as Step)}
              className={`rounded-xl border px-3 py-1.5 text-xs uppercase tracking-[0.08em] transition ${
                active === s
                  ? "border-accent2 text-ink shadow-glow"
                  : "border-line text-mute hover:border-accent/40 hover:text-ink"
              }`}
            >
            {s}. {LABELS[s as Step]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_0.95fr]">
        <div className="panel p-5">
          <AnimatePresence mode="wait">
            {active === 1 && (
              <motion.div key="signals" {...variant}>
                <h3 className="m-0 text-lg">Targeted Collection</h3>
                <ul className="mt-3 space-y-2 text-sm text-mute">
                  <li>Public OSINT channels (media, RSS, licensed API).</li>
                  <li>Optional state-tier sources under legal mandate.</li>
                  <li>Need-to-know and minimization controls at ingest layer.</li>
                </ul>
              </motion.div>
            )}
            {active === 2 && (
              <motion.div key="analysis" {...variant}>
                <h3 className="m-0 text-lg">Narrative Analysis</h3>
                <ul className="mt-3 space-y-2 text-sm text-mute">
                  <li>NLP + computer vision for text and visual streams.</li>
                  <li>Synthetic signal layer for safer training and tuning.</li>
                  <li>Structure-aware analysis beyond keyword matching.</li>
                </ul>
              </motion.div>
            )}
            {active === 3 && (
              <motion.div key="graphs" {...variant}>
                <h3 className="m-0 text-lg">Manipulation Mapping</h3>
                <ul className="mt-3 space-y-2 text-sm text-mute">
                  <li>Graph model of actors, channels, and propagation nodes.</li>
                  <li>Anomaly burst lens for synchronized campaign spikes.</li>
                  <li>Attribution paths through ownership and risk correlation.</li>
                </ul>
              </motion.div>
            )}
            {active === 4 && (
              <motion.div key="decision" {...variant}>
                <h3 className="m-0 text-lg">Decision Brief</h3>
                <ul className="mt-3 space-y-2 text-sm text-mute">
                  <li>Compact risk summary for command-level decisions.</li>
                  <li>Evidence package for governance and legal review.</li>
                  <li>Governor-tier immunity veto on tainted inputs.</li>
                </ul>
              </motion.div>
            )}
            {active === 5 && (
              <motion.div key="audit" {...variant}>
                <h3 className="m-0 text-lg">Cryptographic Receipt</h3>
                <ul className="mt-3 space-y-2 text-sm text-mute">
                  <li>Hash and provenance bound to each critical output.</li>
                  <li>Reproducible run fingerprint for independent verification.</li>
                  <li>Court-compatible traceability model.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <HowViz step={active} />
        </div>
      </div>
    </div>
  );
}
