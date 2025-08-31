import { useMemo, useState } from "react";

type Node = { id:string; title:string; sub:string; info:string; x?:number; y?:number };
  id:"brief",
  title:"Briefing Desk",
  sub:"Decision-ready outputs",
  info:"Aggregates analyses into audit-ready outputs aligned with governance constraints."
};

const ringBase:Node[] = [
  {id:"signals",   title:"Signals",        sub:"Open-source streams",  info:"Synthetic OSINT inputs: media, RSS, public APIs."},
  {id:"narrative", title:"Narrative Graph",sub:"Actors & channels",    info:"Story arcs, actors and propagation dynamics."},
  {id:"audit",     title:"Audit Trail",    sub:"Receipts & provenance",info:"Cryptographic receipts enable verifiable review."},
  {id:"analysis",  title:"Analysis",       sub:"NLP/CV, anomalies",    info:"NLP clustering, CV tags and anomaly detection."},
  {id:"ingestion", title:"Ingestion",      sub:"Normalize & dedupe",   info:"Safety filters, normalization and deduplication."},
  {id:"anomaly",   title:"Anomaly Lens",   sub:"Bursts & coordination",info:"Detects bursts, coordination and synthetic noise."},
  {id:"governance",title:"Governance",     sub:"Targeted • lawful",    info:"Rights-first constraints: scope, retention, auditability."},
];

export default function Atlas(){
  const [hi,setHi] = useState<string|null>(null);

  const ring = useMemo(()=>{
    const r = 190, n = ringBase.length;
    return ringBase.map((node,i)=>({
      ...node,
      x: Math.cos((i/n)*Math.PI*2 - Math.PI/2)*r,
      y: Math.sin((i/n)*Math.PI*2 - Math.PI/2)*r
    }));
  },[]);

  const edgeOn = (id:string)=> hi==='all'||hi===id||hi==='brief';

  const pts = ring.map(n=>`${n.x},${n.y}`);
  const starPts = ring.map((_,i)=>{
    const j = (i+2) % ring.length;
    return `${ring[i].x},${ring[i].y} ${ring[j].x},${ring[j].y}`;
  });

  return (
    <section id="atlas" className="section">
      <div className="card p-6 md:p-8 max-w-[1200px] mx-auto">
        <p className="m-0 mb-4 text-center text-mute">
          The Noxis heptagram — intelligence modules in context
        </p>

        {/* SLUČENÝ VNITŘNÍ PANEL (zůstává jen jeden) */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-panel shadow-glow">
          <svg viewBox="-320 -260 640 520" width="100%" height="100%" aria-label="Noxis Atlas">
            <defs>
              <linearGradient id="a" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1EE9A6"/><stop offset="100%" stopColor="#FFCC55"/>
              </linearGradient>
              <radialGradient id="halo" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(30,233,166,0.35)"/>
                <stop offset="70%" stopColor="rgba(30,233,166,0.10)"/>
                <stop offset="100%" stopColor="rgba(30,233,166,0.00)"/>
              </radialGradient>
            </defs>

            {/* background rings */}
            {[70,120,170].map((r,i)=>(
              <circle key={r} cx={0} cy={0} r={r}
                stroke="#203246" strokeWidth={i===2?1.2:1} fill="none" opacity={0.25}/>
            ))}

            {/* heptagon outline */}
            <polyline
              points={pts.concat(pts[0]).join(" ")}
              fill="none" stroke="#1F3046" strokeWidth="1.5" opacity="0.55"
            />

            {/* heptagram star */}
            {starPts.map((pair,i)=>{
              const [ax,ay,bx,by] = pair.split(/[ ,]/).map(Number);
              const active = hi ? edgeOn(ring[i].id) || edgeOn(ring[(i+2)%ring.length].id) : false;
              return (
                <line key={"star-"+i}
                  x1={ax} y1={ay} x2={bx} y2={by}
                  stroke={active ? "url(#a)" : "#203246"} strokeWidth={active ? 2.5 : 1.2}
                  opacity={active ? 0.9 : 0.45}/>
              );
            })}

            {/* rays */}
            {ring.map(n=>(
              <line key={"ray-"+n.id}
                x1={0} y1={0} x2={n.x!} y2={n.y!}
                stroke={edgeOn(n.id)?'url(#a)':'#1F3046'}
                strokeWidth={edgeOn(n.id)?3:1.5} opacity={edgeOn(n.id)?1:.5}/>
            ))}

            {/* CENTER — halo + malá ikonka; štítek jako pilulka POD středem */}
            <g onMouseEnter={()=>setHi("brief")} onMouseLeave={()=>setHi(null)}>
              <circle r={36} fill="url(#halo)"/>
              <circle r={36} fill="none" stroke="url(#a)" strokeWidth="1.25" opacity="0.8"/>
              <g transform="translate(-8,-10)" opacity="0.9">
                <path d="M2 2 h10 l4 4 v10 a2 2 0 0 1 -2 2 h-12 a2 2 0 0 1 -2 -2 v-12 a2 2 0 0 1 2 -2 z" fill="#0E1626" opacity="0.25"/>
                <path d="M2 2 h10 l4 4 v10 a2 2 0 0 1 -2 2 h-12 a2 2 0 0 1 -2 -2 v-12 a2 2 0 0 1 2 -2 z" stroke="#9ADAC6" strokeWidth="1" fill="none"/>
                <path d="M12 2 v4 h4" stroke="#9ADAC6" strokeWidth="1" fill="none"/>
                <path d="M4 9 h10 M4 12 h10" stroke="#9ADAC6" strokeWidth="1" opacity="0.9"/>
              </g>
              <line x1={0} y1={36} x2={0} y2={54} stroke="#1F3046" strokeWidth="1"/>
              <g transform="translate(-60,54)">
                <rect x="0" y="0" rx="12" ry="12" width="120" height="28"
                      fill="#111A2D" stroke="#1F3046" strokeWidth="1.25"/>
                <text x="60" y="18" textAnchor="middle" fill="#E7EEF8"
                      style={{fontWeight:700,fontSize:12}}>Briefing Desk</text>
              </g>
            </g>

            {/* outer nodes */}
            {ring.map(n=>(
              <g key={n.id} transform={`translate(${n.x},${n.y})`}
                 onMouseEnter={()=>setHi(n.id)} onMouseLeave={()=>setHi(null)}>
                <rect x={-95} y={-26} rx="14" ry="14" width="190" height="52"
                      fill="#111A2D" stroke={edgeOn(n.id)?'url(#a)':'#1F3046'}
                      strokeWidth={2}/>
                <text x={0} y={-4} textAnchor="middle" fill="#E7EEF8"
                      style={{fontWeight:700,fontSize:12}}>{n.title}</text>
                <text x={0} y={12} textAnchor="middle" fill="#9AA6BF"
                      style={{fontSize:10}}>{n.sub}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
