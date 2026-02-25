import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFlag, FiActivity, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";

type Item = { t:string; d:string; expl:string; icon: IconType };
const ITEMS:Item[]=[
  {
    t:'Phase 1',
    d:'Core architecture & OSINT modules; narrative graph prototype.',
    expl:'Lay the rails. Build ingestion adapters, schema normalization and safety filters. Ship a first narrative-graph that proves signal > noise with synthetic streams.',
    icon:FiFlag
  },
  {
    t:'Phase 2',
    d:'Real-time analytics & visualization; pilot data rooms.',
    expl:'Move from batch to near-real-time. Introduce anomaly lenses, burst detection and briefing views that reduce analysis time from days to hours.',
    icon:FiActivity
  },
  {
    t:'Phase 3',
    d:'Institutional pilots; audit tooling and oversight workflows.',
    expl:'Operationalize trust. Cryptographic receipts, reproducible configs, signed bundles and reviewer workflows aligned with governance requirements.',
    icon:FiTrendingUp
  }
];

export default function Roadmap(){
  const [i,setI]=useState(0);
  const cur=useMemo(()=>ITEMS[i],[i]);

  return (
    <div className="card p-6">
      <div className="grid gap-4 md:grid-cols-[260px_1fr]">
        <div className="grid gap-2">
          {ITEMS.map((x,idx)=>(
            <button
              key={x.t}
              onClick={()=>setI(idx)}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2 text-left transition ${
                idx===i?'border-accent2 shadow-glow-strong':'border-line bg-panel hover:shadow-glow'
              }`}
            >
              <span className="w-6 text-center font-extrabold">{idx+1}</span>
              <div>
                <div className="font-semibold">{x.t}</div>
                <div className="text-mute text-xs">{x.d.slice(0,44)}…</div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative card p-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(650px_220px_at_-80px_-120px,rgba(233,194,91,.10),transparent_70%)]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.t}
              initial={{opacity:0, y:8, scale:.98}}
              animate={{opacity:1, y:0, scale:1}}
              exit={{opacity:0, y:-8, scale:.98}}
              transition={{duration:.28}}
              className="relative"
            >
              <div className="flex items-center gap-2 mb-2">
                <cur.icon className="text-accent2" />
                <h3 className="m-0 text-lg font-semibold">{cur.t}</h3>
              </div>

              <p className="text-mute text-base">{cur.d}</p>

              <div className="panel p-4 mt-3">
                <h4 className="m-0 text-sm font-semibold">Why this phase matters</h4>
                <p className="text-mute text-sm mt-1">{cur.expl}</p>
              </div>

              <div className="mt-4">
                <div className="h-1 w-full bg-line/40 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-accent2"
                    initial={{width:0}}
                    animate={{width:`${((i+1)/ITEMS.length)*100}%`}}
                    transition={{duration:.35}}
                  />
                </div>
                <div className="mt-2 text-xs text-mute">Progress: {(Math.round(((i+1)/ITEMS.length)*100))}%</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
