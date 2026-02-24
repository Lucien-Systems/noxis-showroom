import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HowViz from "../components/HowViz";

type Step = 1 | 2 | 3 | 4 | 5;

export default function How() {
  const [active, setActive] = useState<Step>(1);

  const variant = {
    initial: { opacity: 0, y: 10, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, filter: "blur(2px)", transition: { duration: 0.2 } }
  };

  return (
    <section id="how" className="section">
      <div className="card p-6 md:p-8 max-w-[1200px] mx-auto">

        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setActive(s as Step)}
              className={`px-3 py-1.5 rounded-xl border text-sm transition ${
                active === s
                  ? "border-accent2 text-ink shadow-glow-strong"
                  : "border-line text-mute hover:text-ink hover:shadow-glow"
              }`}
            >
              {s === 1 && "1. Targeted Collection"}
              {s === 2 && "2. Narrative Analysis"}
              {s === 3 && "3. Manipulation Mapping"}
              {s === 4 && "4. Decision Brief"}
              {s === 5 && "5. Cryptographic Receipt"}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-4">
            <AnimatePresence mode="wait">
              {active === 1 && (
                <motion.div key="signals" {...variant}>
                  <h3 className="font-semibold mb-2">Targeted Collection</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Public OSINT: media, RSS, licensed APIs</li>
                    <li>Optional state-tier feeds under legal mandate</li>
                    <li>Need-to-know and minimization controls</li>
                  </ul>
                </motion.div>
              )}
              {active === 2 && (
                <motion.div key="analysis" {...variant}>
                  <h3 className="font-semibold mb-2">Narrative Analysis</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>NLP + computer vision on text and visuals</li>
                    <li>Synthetic signal layer for safer model tuning</li>
                    <li>Narrative structure extraction beyond keywords</li>
                  </ul>
                </motion.div>
              )}
              {active === 3 && (
                <motion.div key="graphs" {...variant}>
                  <h3 className="font-semibold mb-2">Manipulation Mapping</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Narrative graphs: actors, channels, propagation</li>
                    <li>Anomaly burst lens for coordinated spikes</li>
                    <li>Ownership/finance correlation for attribution paths</li>
                  </ul>
                </motion.div>
              )}
              {active === 4 && (
                <motion.div key="decision" {...variant}>
                  <h3 className="font-semibold mb-2">Decision Brief</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Compact operational brief with clear risk level</li>
                    <li>Evidence bundle for review and legal workflow</li>
                    <li>Governor-tier immunity veto on tainted inputs</li>
                  </ul>
                </motion.div>
              )}
              {active === 5 && (
                <motion.div key="audit" {...variant}>
                  <h3 className="font-semibold mb-2">Cryptographic Receipt</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Hash + provenance for each key output</li>
                    <li>Reproducible config fingerprint</li>
                    <li>Court-ready audit trail for independent verification</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-line p-0 overflow-hidden">
            <HowViz step={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
