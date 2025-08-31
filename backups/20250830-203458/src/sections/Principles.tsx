import { FiZap, FiEye, FiCheckCircle, FiShield } from "react-icons/fi";
const items = [
  {title:'Rapid Response',desc:'Operational insights in hours, not months.',icon:FiZap},
  {title:'Narrative Intelligence',desc:'Stories, memes, cultural signals — not just keywords.',icon:FiEye},
  {title:'Transparency & Auditability',desc:'Every brief can carry a verifiable receipt.',icon:FiCheckCircle},
  {title:'Rights-first',desc:'No blanket scanning; targeted, lawful outputs.',icon:FiShield},
  {title:'Targeted Scope',desc:'Minimal necessary data only.',icon:FiShield},
  {title:'Reproducibility',desc:'Deterministic configs & runs.',icon:FiCheckCircle},
  {title:'Explainability',desc:'Short rationale on decisions.',icon:FiEye},
  {title:'Civic Alignment',desc:'Pro-citizen constraints.',icon:FiZap},
];
export default function Principles(){
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {items.map(({title,desc,icon:Icon})=>(
        <div key={title} className="card p-5 hover:shadow-glow-strong transition">
          <div className="flex items-center gap-2 font-semibold">
            <Icon className="text-accent2" /> {title}
          </div>
          <p className="text-mute mt-2">{desc}</p>
          <div className="h-1 rounded bg-gradient-to-r from-accent to-accent2 mt-3" />
        </div>
      ))}
    </div>
  );
}
