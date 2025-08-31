import { useMemo, useState } from "react";
import Modal from "../components/Modal";

type Node = { id:string; title:string; sub:string; info:string; link?:string; x?:number;y?:number };
const center:Node={id:"brief",title:"Briefing Desk",sub:"Decision-ready outputs",info:"Aggregates analyses into audit-ready outputs aligned with governance constraints. Synthetic demo — no live data."};
const ringBase:Node[]=[
  {id:"signals",title:"Signals",sub:"Open-source streams",info:"Synthetic OSINT inputs: media, RSS, public APIs."},
  {id:"narrative",title:"Narrative Graph",sub:"Actors & channels",info:"Story arcs, actors and propagation dynamics."},
  {id:"audit",title:"Audit Trail",sub:"Receipts & provenance",info:"Cryptographic receipts enable verifiable review."},
  {id:"analysis",title:"Analysis",sub:"NLP/CV, anomalies",info:"NLP clustering, CV tags and anomaly detection."},
  {id:"ingestion",title:"Ingestion",sub:"Normalize & dedupe",info:"Safety filters, normalization and deduplication."},
  {id:"anomaly",title:"Anomaly Lens",sub:"Bursts & coordination",info:"Detects bursts, coordination and synthetic noise."},
  {id:"governance",title:"Governance",sub:"Targeted • lawful",info:"Rights-first constraints: scope, retention, auditability."},
];

export default function Atlas(){
  const [hi,setHi]=useState<string|null>(null);
  const [open,setOpen]=useState<Node|null>(null);

  const ring=useMemo(()=>{
    const r=190, n=ringBase.length;
    return ringBase.map((node,i)=>({ ...node, x:Math.cos((i/n)*Math.PI*2 - Math.PI/2)*r, y:Math.sin((i/n)*Math.PI*2 - Math.PI/2)*r }));
  },[]);

  const edgeOn=(id:string)=> hi==='all'||hi===id||hi==='brief';

  return (
    <div className="atlas-wrap" role="region" aria-label="Interactive Atlas">
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button className="btn" aria-pressed={hi==='all'} onClick={()=>setHi(h=>h?null:'all')}>Highlight</button>
        <button className="btn" onClick={()=>{setHi(null);}}>Reset</button>
      </div>

      <div className="atlas-stage">
        <svg viewBox="-300 -300 600 600" style={{position:"absolute",inset:0}}>
          <defs>
            <linearGradient id="a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1EE9A6"/><stop offset="100%" stopColor="#FFCC55"/></linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="rgba(255,204,85,.25)"/></filter>
          </defs>

          {ring.map(n=>(
            <line key={"edge-"+n.id} x1={0} y1={0} x2={n.x!} y2={n.y!} stroke={edgeOn(n.id)?'url(#a)':'#1F3046'} strokeWidth={edgeOn(n.id)?3:2}/>
          ))}

          <g className="atlas-node" onMouseEnter={()=>setHi("brief")} onMouseLeave={()=>setHi(null)} onClick={()=>setOpen(center)}>
            <rect x={-90} y={-28} rx="14" ry="14" width="180" height="56" fill="#111A2D" stroke="#1F3046" strokeWidth="2" filter="url(#shadow)"/>
            <text x={0} y={-4} textAnchor="middle" fill="#E7EEF8" style={{fontWeight:700,fontSize:13}}>{center.title}</text>
            <text x={0} y={12} textAnchor="middle" fill="#9AA6BF" style={{fontSize:11}}>{center.sub}</text>
          </g>

          {ring.map(n=>(
            <g key={n.id} transform={`translate(${n.x},${n.y})`} className="atlas-node" onMouseEnter={()=>setHi(n.id)} onMouseLeave={()=>setHi(null)} onClick={()=>setOpen(n)}>
              <rect x={-95} y={-26} rx="14" ry="14" width="190" height="52" fill="#111A2D" stroke={edgeOn(n.id)?'url(#a)':'#1F3046'} strokeWidth={2} filter="url(#shadow)"/>
              <text x={0} y={-4} textAnchor="middle" fill="#E7EEF8" style={{fontWeight:700,fontSize:12}}>{n.title}</text>
              <text x={0} y={12} textAnchor="middle" fill="#9AA6BF" style={{fontSize:10}}>{n.sub}</text>
            </g>
          ))}
        </svg>
      </div>

      <Modal open={!!open} onClose={()=>setOpen(null)} title={open?.title ?? ""} descId="atlas-desc">
        <p id="atlas-desc">{open?.info}</p>
        <p className="sub">Synthetic demo — no live data.</p>
        <p><a className="btn" href="#">Open example</a></p>
      </Modal>
    </div>
  );
}
