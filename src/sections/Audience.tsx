import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiShield, FiRadio, FiTarget, FiGlobe, FiUsers, FiActivity, FiSend } from "react-icons/fi";
import Modal from "../components/Modal.tsx";

const tabs = ["Government","Security","Newsrooms","Civil","Research"] as const;
type Tab = typeof tabs[number];

type Meta = {
  Icon:any;
  deck:string;
  colors:{from:string;to:string};
  preset:{scope:number;min:number;audit:number};
};

const META: Record<Tab, Meta> = {
  Government: { Icon:FiGlobe, deck:"Policy alignment & verifiable briefs", colors:{from:"#1EE9A6",to:"#FFCC55"}, preset:{scope:92,min:88,audit:98} },
  Security:   { Icon:FiTarget, deck:"Targeted intel within strict limits",   colors:{from:"#FFCC55",to:"#1EE9A6"}, preset:{scope:95,min:90,audit:96} },
  Newsrooms:  { Icon:FiRadio,  deck:"Narrative maps & evidence bundles",     colors:{from:"#7dd3fc",to:"#FFCC55"}, preset:{scope:80,min:92,audit:94} },
  Civil:      { Icon:FiUsers,  deck:"Public methods; no profiling",          colors:{from:"#a78bfa",to:"#1EE9A6"}, preset:{scope:75,min:95,audit:90} },
  Research:   { Icon:FiActivity,  deck:"Open configs & reproducibility",     colors:{from:"#34d399",to:"#60a5fa"}, preset:{scope:78,min:88,audit:92} },
};

const BENEFITS: Record<Tab, string[]> = {
  Government: ["Policy briefs","Receipts-ready outputs","Hours-to-insight"],
  Security:   ["Targeted intel","Minimization","Governance-by-design"],
  Newsrooms:  ["Narrative maps","Evidence bundles","Ethical limits"],
  Civil:      ["Public methods","No profiling","Sample datasets"],
  Research:   ["Open configs","Reproducibility","Validation paths"],
};

function gaugePath(percent:number){
  const p=Math.max(0,Math.min(100,percent));
  const a=(p/100)*Math.PI*1.6 + Math.PI*0.2;
  const r=38, cx=40, cy=40;
  const x=cx + r*Math.cos(a), y=cy + r*Math.sin(a);
  const startX=cx + r*Math.cos(Math.PI*0.2), startY=cy + r*Math.sin(Math.PI*0.2);
  const largeArc = p>50 ? 1 : 0;
  return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`;
}

function Dial({label,value,colors}:{label:string;value:number;colors:{from:string;to:string}}){
  const d=gaugePath(value);
  return (
    <div className="grid place-items-center">
      <svg viewBox="0 0 80 80" className="w-24 h-24">
        <defs>
          <linearGradient id={`g-${label.replace(/\s+/g,'')}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={colors.from}/><stop offset="100%" stopColor={colors.to}/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6" />
        <motion.path
          d={d}
          fill="none"
          stroke={`url(#g-${label.replace(/\s+/g,'')})`}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: .6 }}
        />
      </svg>
      <div className="text-xs text-mute mt-1">{label}: <span className="text-ink">{value}%</span></div>
    </div>
  );
}

export default function Audience(){
  const [tab,setTab]=useState<Tab>("Government");
  const meta = META[tab];
  const [open,setOpen]=useState(false);

  const variant = useMemo(()=>({
    initial:{opacity:0, y:10, scale:.98, filter:"blur(3px)"},
    animate:{opacity:1, y:0, scale:1, filter:"blur(0px)", transition:{duration:.28}},
    exit:{opacity:0, y:-8, scale:.98, filter:"blur(2px)", transition:{duration:.18}}
  }),[]);

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <div className="flex overflow-x-auto gap-2 snap-x snap-mandatory">
          {tabs.map(t=>(
            <button
              key={t}
              onClick={()=>setTab(t)}
              className={`snap-start whitespace-nowrap rounded-xl px-3 py-1.5 text-sm border transition
              ${tab===t ? "border-accent2 text-ink shadow-glow-strong" : "border-line text-mute hover:text-ink hover:shadow-glow"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <span className="hidden md:flex items-center gap-1 text-xs text-mute">
          <FiShield className="text-accent2"/> rights-first
        </span>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div key={tab} {...variant} className="card p-5">
            <div className="grid gap-5 md:grid-cols-[1fr_360px]">
              <div>
                <div className="flex items-center gap-2">
                  <meta.Icon className="text-accent2" />
                  <h3 className="m-0 text-lg font-semibold">{tab}</h3>
                </div>
                <p className="text-mute mt-1">{meta.deck}</p>
                <ul className="text-mute mt-2 grid gap-1 list-disc ml-5">
                  {BENEFITS[tab].map(b=><li key={b}>{b}</li>)}
                </ul>
                <div className="flex gap-2 mt-4">
                  <button className="btn-primary" onClick={()=>setOpen(true)}><FiSend/> Request policy brief</button>
                  <a className="btn" href="#technology">Explore technology</a>
                </div>
              </div>

              <div className="panel p-4 relative overflow-hidden">
                <h4 className="m-0 text-base font-semibold">Compliance Dial</h4>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <Dial label="Targeted Scope" value={meta.preset.scope} colors={meta.colors}/>
                  <Dial label="Minimization" value={meta.preset.min} colors={meta.colors}/>
                  <Dial label="Auditability" value={meta.preset.audit} colors={meta.colors}/>
                </div>
                <div className="text-xs text-mute mt-3">Presets are synthetic and differ per audience.</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Request policy brief" descId="aud-desc">
        <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); setOpen(false);}}>
          <p id="aud-desc" className="text-mute">Synthetic form — no backend. Your submission is not stored.</p>
          <div className="grid md:grid-cols-2 gap-3">
            <input className="w-full rounded-xl border border-line bg-panel px-3 py-2" placeholder="Full name" required />
            <input className="w-full rounded-xl border border-line bg-panel px-3 py-2" placeholder="Email" type="email" required />
          </div>
          <input className="w-full rounded-xl border border-line bg-panel px-3 py-2" placeholder="Organization" />
          <textarea className="w-full rounded-xl border border-line bg-panel px-3 py-2" rows={3} placeholder="Use-case or policy question"></textarea>
          <div className="flex justify-end gap-2">
            <button type="button" className="btn" onClick={()=>setOpen(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
