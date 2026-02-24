import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCpu, FiLink, FiDatabase, FiEyeOff, FiGrid, FiActivity } from "react-icons/fi";

type Tech = { id:string; title:string; deck:string; points:string[]; why:string; Icon:any };
const TECH:Tech[]=[
  {id:"aiml", title:"AI/ML (NLP + CV)", deck:"Configurable pipelines. Deterministic runs.", points:["Topic clustering","Embeddings & retrieval","Vision tags"], why:"Turns chaotic streams into structured signals with repeatable outcomes — critical for trust and policy review.", Icon:FiCpu},
  {id:"ingest", title:"OSINT Ingestion", deck:"Public/licensed sources with safety filters.", points:["Media/RSS/API adapters","Normalization & dedupe","Ethics guards"], why:"Brings many sources together safely, preventing over-collection and keeping scope targeted.", Icon:FiLink},
  {id:"receipts", title:"Cryptographic Receipts", deck:"Hash + provenance for verifiable briefs.", points:["Run receipt","Data fingerprint","Repro playback"], why:"Lets oversight verify what was run, on what, and when — no black boxes.", Icon:FiDatabase},
  {id:"privacy", title:"Privacy Controls", deck:"Minimization & redaction by design.", points:["Scope limits","PII redaction","Retention guards"], why:"Builds civil safeguards into the pipeline so discovery never becomes dragnet.", Icon:FiEyeOff},
  {id:"stores", title:"Decentralized Stores", deck:"Distributed artifacts for review rooms.", points:["Bundle shards","Signed artifacts","Access policies"], why:"Keeps evidence tamper-resistant and shareable with institutions without central chokepoints.", Icon:FiGrid},
  {id:"viz", title:"Visualization", deck:"Briefing & narrative graphs.", points:["Story arcs","Actors & channels","Propagation lens"], why:"Surfaces what matters at a glance so decisions happen fast and auditable.", Icon:FiActivity},
];

function Illustration({id}:{id:string}){
  if(id==="aiml"){
    return (
      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E9C25B"/><stop offset="100%" stopColor="#FFD84F"/></linearGradient></defs>
        {[0,1,2].map((k)=>(
          <polyline key={k} points={`0,${80-k*8} 40,${50-k*6} 80,${65-k*10} 120,${40-k*4} 160,${55-k*9} 200,${30-k*5} 240,${60-k*7} 280,${35-k*6} 320,${50-k*8}`} fill="none" stroke="url(#g1)" strokeOpacity={0.45-(k*0.12)} strokeWidth={2}/>
        ))}
        {Array.from({length:12}).map((_,i)=>(
          <circle key={i} cx={i*28} cy={40+(i%3)*10} r="2.5" fill="#E9C25B" opacity="0.6"/>
        ))}
      </svg>
    );
  }
  if(id==="ingest"){
    return (
      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
        <rect x="12" y="20" width="80" height="22" rx="6" fill="#0A132B" stroke="#24345C"/>
        <rect x="12" y="52" width="80" height="22" rx="6" fill="#0A132B" stroke="#24345C"/>
        <rect x="12" y="84" width="80" height="22" rx="6" fill="#0A132B" stroke="#24345C"/>
        <rect x="210" y="45" width="98" height="30" rx="10" fill="#0A132B" stroke="url(#g2)"/>
        <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E9C25B"/><stop offset="100%" stopColor="#FFD84F"/></linearGradient></defs>
        {[30,62,94].map((y,i)=>(
          <g key={i}><path d={`M92 ${y+11} C 140 ${y+11}, 170 60, 210 60`} stroke="url(#g2)" strokeWidth="3" fill="none"/><circle cx="92" cy={y+11} r="3" fill="#E9C25B"/></g>
        ))}
      </svg>
    );
  }
  if(id==="receipts"){
    return (
      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
        <rect x="40" y="18" width="160" height="84" rx="10" fill="#0A132B" stroke="#24345C"/>
        <path d="M60 38 h120" stroke="#E9C25B" strokeWidth="3"/>
        <path d="M60 58 h100" stroke="#E9C25B" strokeWidth="3" opacity=".7"/>
        <path d="M60 78 h80" stroke="#FFD84F" strokeWidth="3" opacity=".8"/>
        <rect x="210" y="34" width="70" height="52" rx="8" fill="#0A132B" stroke="url(#g3)"/>
        <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FFD84F"/><stop offset="100%" stopColor="#E9C25B"/></linearGradient></defs>
        <circle cx="245" cy="60" r="18" fill="none" stroke="url(#g3)" strokeWidth="3"/>
        <path d="M238 60 l6 6 l10 -12" fill="none" stroke="#E9C25B" strokeWidth="3"/>
      </svg>
    );
  }
  if(id==="privacy"){
    return (
      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E9C25B"/><stop offset="100%" stopColor="#FFD84F"/></linearGradient></defs>
        <rect x="40" y="26" width="240" height="68" rx="14" fill="#0A132B" stroke="#24345C"/>
        <rect x="70" y="46" width="100" height="28" rx="8" fill="#040816" stroke="url(#g4)"/>
        <rect x="190" y="46" width="70" height="28" rx="8" fill="#040816" stroke="#24345C"/>
        <path d="M215 34 v-10 a10 10 0 0 0 -20 0 v10" stroke="#FFD84F" strokeWidth="3" fill="none"/>
      </svg>
    );
  }
  if(id==="stores"){
    return (
      <svg viewBox="0 0 320 120" className="w-full h-[120px]">
        <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E9C25B"/><stop offset="100%" stopColor="#FFD84F"/></linearGradient></defs>
        {Array.from({length:6}).map((_,i)=>(
          <rect key={i} x={30 + (i%3)*90} y={20 + Math.floor(i/3)*50} width="70" height="40" rx="10" fill="#0A132B" stroke={i%2===0?"url(#g5)":"#24345C"} />
        ))}
        <path d="M65 40 L155 40 L245 40" stroke="#24345C" strokeDasharray="4 6" />
        <path d="M65 90 L155 90 L245 90" stroke="#24345C" strokeDasharray="4 6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 120" className="w-full h-[120px]">
      <defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E9C25B"/><stop offset="100%" stopColor="#FFD84F"/></linearGradient></defs>
      {Array.from({length:7}).map((_,i)=>(
        <rect key={i} x={24+i*36} y={20+(i%3)*10} width="26" height={60-(i%3)*12} rx="6" fill="url(#g6)" opacity={0.5+(i%3)*0.15}/>
      ))}
      <circle cx="250" cy="40" r="20" fill="none" stroke="#24345C"/>
      <circle cx="250" cy="40" r="8" fill="#E9C25B" opacity=".8"/>
      <path d="M250 60 L270 90" stroke="#FFD84F"/>
      <circle cx="270" cy="90" r="6" fill="#FFD84F"/>
    </svg>
  );
}

export default function Technology(){
  const [idx,setIdx]=useState(0);
  const T=useMemo(()=>TECH[idx],[idx]);

  return (
    <div className="card p-6">
      <div className="grid gap-4 md:grid-cols-[300px_1fr]">
        <div className="grid gap-3">
          {TECH.map((x,i)=>(
            <button
              key={x.id}
              onClick={()=>setIdx(i)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition ${i===idx?'border-accent2 shadow-glow-strong':'border-line bg-panel hover:shadow-glow'}`}>
              <x.Icon className={`${i===idx?'text-accent2':'text-accent'}`} />
              <div className="text-left">
                <div className="font-extrabold text-base md:text-lg">{x.title}</div>
                <div className="text-mute text-sm">{x.deck}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden card p-6">
          <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_-120px_-160px,rgba(255,216,79,.12),transparent_70%)]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={T.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              transition={{duration:.25}}
              className="relative grid gap-3"
            >
              <div className="flex items-center gap-3">
                <T.Icon className="text-accent2" />
                <h2 className="m-0 text-2xl font-bold">{T.title}</h2>
              </div>
              <p className="text-mute text-base">{T.deck}</p>

              <Illustration id={T.id} />

              <div className="grid md:grid-cols-2 gap-3">
                <ul className="text-mute list-disc ml-5 text-[15px]">
                  {T.points.map(p=><li key={p}>{p}</li>)}
                </ul>
                <div className="panel p-4">
                  <h4 className="m-0 text-sm font-semibold">Why it matters</h4>
                  <p className="text-mute text-sm mt-1">{T.why}</p>
                  <div className="h-1 rounded bg-gradient-to-r from-accent to-accent2 mt-2" />
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <button className="btn-primary">Download sample config</button>
                <a className="btn" href="#roadmap">See roadmap linkage</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
