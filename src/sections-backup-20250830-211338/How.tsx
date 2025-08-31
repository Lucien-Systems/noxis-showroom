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
        <h2 className="m-0 text-2xl md:text-3xl font-bold mb-6">How Noxis Works</h2>

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
              {s === 1 && "1. Signals"}
              {s === 2 && "2. Analysis"}
              {s === 3 && "3. Graphs"}
              {s === 4 && "4. Decision Brief"}
              {s === 5 && "5. Audit Receipt"}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-4">
            <AnimatePresence mode="wait">
              {active === 1 && (
                <motion.div key="signals" {...variant}>
                  <h3 className="font-semibold mb-2">Signals</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Media, RSS, APIs</li>
                    <li>Synthetic inputs</li>
                    <li>Safety filters</li>
                  </ul>
                </motion.div>
              )}
              {active === 2 && (
                <motion.div key="analysis" {...variant}>
                  <h3 className="font-semibold mb-2">Analysis</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>NLP clustering</li>
                    <li>CV tags</li>
                    <li>Anomaly detection</li>
                  </ul>
                </motion.div>
              )}
              {active === 3 && (
                <motion.div key="graphs" {...variant}>
                  <h3 className="font-semibold mb-2">Graphs</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Narrative graph</li>
                    <li>Actors & channels</li>
                    <li>Propagation</li>
                  </ul>
                </motion.div>
              )}
              {active === 4 && (
                <motion.div key="decision" {...variant}>
                  <h3 className="font-semibold mb-2">Decision Brief</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Concise brief</li>
                    <li>Evidence bundle</li>
                    <li>Governance-aligned</li>
                  </ul>
                </motion.div>
              )}
              {active === 5 && (
                <motion.div key="audit" {...variant}>
                  <h3 className="font-semibold mb-2">Audit Receipt</h3>
                  <ul className="text-mute list-disc list-inside space-y-1">
                    <li>Hash receipt</li>
                    <li>Reproducible config</li>
                    <li>Review trail</li>
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
