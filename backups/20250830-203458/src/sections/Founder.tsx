import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";

type Tab = "Principles" | "Bio" | "Timeline";

const PRINCIPLES = [
  "Targeted scope over mass collection",
  "Reproducibility and versioned runs",
  "Clear documentation and review trails",
  "Privacy-by-design constraints",
  "Auditability and provenance by default",
  "Deterministic pipelines where possible",
  "Rights-first design ethos",
  "Clarity over noise",
];

type Row = { y:string; t:string; d:string; brief?:string };
const TIMELINE: Row[] = [
  { y:"2025–Present", t:"Chief Architect, NOXIS — AI Surveillance Platform", d:"Lucien Systems LLC (USA)", brief:"Architecture & UX across OSINT, GEOINT, darknet; auditability & governance-by-design." },
  { y:"2023–2024", t:"Interim Project Consultancy", d:"Deutsche Mechatronics GmbH (DE)", brief:"Automation, supply chain, manufacturing systems for AI-era operations." },
  { y:"2022–2023", t:"Industrial & IT Engineer / Data Analyst", d:"L.I.T. Gruppe (DE)", brief:"Process intelligence, data ops; pipelines for logistics decisions." },
  { y:"2022–Present", t:"Founder & Managing Shareholder", d:"Lucien Systems LLC (USA)", brief:"R&D and advisory: AI, OSINT, governance-by-design, reproducible runs." },
];

export default function Founder(){
  const [tab,setTab]=useState<Tab>("Principles");
  const variant = useMemo(()=>({
    initial:{opacity:0, y:10, scale:.98, filter:"blur(3px)"},
    animate:{opacity:1, y:0, scale:1, filter:"blur(0px)", transition:{duration:.25}},
    exit:{opacity:0, y:-8, scale:.98, filter:"blur(2px)", transition:{duration:.18}}
  }),[]);

  return (
    <section id="founder" className="section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="card p-6 md:p-8 w-full">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            
            {/* Levý panel */}
            <div className="md:w-1/3">
              <div className="rounded-2xl border border-line bg-panel p-5 shadow-glow">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full border-2 border-accent2 shadow-glow-strong grid place-items-center text-accent2 font-bold text-xl">
                      AKL
                    </div>
                    <span className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-accent2/90" title="active" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold m-0 flex items-center gap-2">
                      Adam Karl Lucien
                    </h3>
                    <div className="flex items-center gap-1 text-mute text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      AI Systems Architect & Strategist
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-mute">
                  <span className="px-2 py-1 rounded bg-bg border border-line">AI/ML</span>
                  <span className="px-2 py-1 rounded bg-bg border border-line">OSINT</span>
                  <span className="px-2 py-1 rounded bg-bg border border-line">Governance</span>
                  <span className="px-2 py-1 rounded bg-bg border border-line">Narrative Graphs</span>
                </div>
              </div>
            </div>

            {/* Pravý panel */}
            <div className="md:flex-1">
              <div className="flex gap-2 mb-4">
                {(["Principles","Bio","Timeline"] as Tab[]).map(t=>(
                  <button 
                    key={t} 
                    onClick={()=>setTab(t)} 
                    className={`rounded-xl px-3 py-1.5 text-sm border transition ${tab===t ? "border-accent2 text-ink shadow-glow-strong" : "border-line text-mute hover:text-ink hover:shadow-glow"}`}>
                    {t}
                  </button>
                ))}
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {tab==="Principles" && (
                    <motion.div key="p" {...variant} className="grid gap-2 md:grid-cols-2">
                      {PRINCIPLES.map(item=>(
                        <div key={item} className="flex items-start gap-2">
                          <FiCheckCircle className="text-accent mt-0.5"/><span className="text-mute">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {tab==="Bio" && (
                    <motion.div key="b" {...variant} className="text-mute">
                      <p>Architecting rights-first intelligence systems that turn open-source signals into decision-ready briefs — with cryptographic receipts, reproducible configs, and oversight workflows.</p>
                    </motion.div>
                  )}

                  {tab==="Timeline" && (
                    <motion.div key="t" {...variant} className="grid gap-3">
                      {TIMELINE.map(row=>(
                        <div key={row.y+row.t} className="rounded-2xl border border-line bg-panel p-4 hover:shadow-glow transition">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs border border-accent2 text-accent2 bg-accent2/10"><FiCalendar/> {row.y}</span>
                              <div>
                                <div className="font-semibold">{row.t}</div>
                                <div className="text-mute text-sm">{row.d}</div>
                              </div>
                            </div>
                          </div>
                          {row.brief && <div className="text-mute text-sm mt-2">{row.brief}</div>}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}