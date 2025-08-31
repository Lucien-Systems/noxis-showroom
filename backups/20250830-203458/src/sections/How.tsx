import { useMemo, useRef, useState } from "react";
import { FiRadio, FiCpu, FiShare2, FiFileText, FiCheckSquare } from "react-icons/fi";
const steps=[
  {t:'Signals', I:FiRadio, bullets:['Media, RSS, APIs','Synthetic inputs','Safety filters']},
  {t:'Analysis', I:FiCpu, bullets:['NLP clustering','CV tags','Anomaly detection']},
  {t:'Graphs', I:FiShare2, bullets:['Narrative graph','Actors & channels','Propagation']},
  {t:'Decision Brief', I:FiFileText, bullets:['Concise brief','Evidence bundle','Governance-aligned']},
  {t:'Audit Receipt', I:FiCheckSquare, bullets:['Hash receipt','Reproducible config','Review trail']},
];
export default function How(){
  const ref=useRef<HTMLDivElement>(null);
  const [p,setP]=useState(0);
  const onScroll=()=>{const el=ref.current!; const r=el.scrollLeft/(el.scrollWidth-el.clientWidth); setP(isFinite(r)?r:0);}
  const width=useMemo(()=>`${Math.round((p)*100)}%`,[p]);
  return (
    <div className="border border-line rounded-2xl bg-panel p-4 overflow-hidden">
      <div ref={ref} onScroll={onScroll} className="flex gap-3 overflow-x-auto snap-x snap-mandatory">
        {steps.map((s,i)=>(
          <div key={s.t} className="min-w-[280px] snap-start card p-4">
            <div className="flex items-center gap-2">
              <s.I className="text-accent" /><strong>{i+1}. {s.t}</strong>
            </div>
            <ul className="text-mute mt-2 list-disc ml-5">
              {s.bullets.map(b=><li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="h-1 rounded bg-gradient-to-r from-accent to-accent2 mt-3" style={{width}} />
    </div>
  );
}
