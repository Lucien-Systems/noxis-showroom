import { FiZap, FiMessageSquare, FiShield, FiTarget, FiRepeat, FiKey, FiCheckCircle, FiUsers } from "react-icons/fi";

type Item = { title:string; desc:string; Icon: React.ComponentType<{className?:string}> };

const ITEMS: Item[] = [
  { title:"Rapid Response",            desc:"Operational insights in hours, not months.",           Icon: FiZap },
  { title:"Narrative Intelligence",    desc:"Stories, memes, cultural signals — beyond keywords.",  Icon: FiMessageSquare },
  { title:"Transparency & Auditability", desc:"Every brief can carry a verifiable receipt.",        Icon: FiShield },
  { title:"Rights-first",              desc:"No blanket scanning; targeted, lawful outputs.",       Icon: FiTarget },
  { title:"Targeted Scope",            desc:"Minimal necessary data only.",                         Icon: FiUsers },
  { title:"Reproducibility",           desc:"Deterministic configs & runs.",                        Icon: FiRepeat },
  { title:"Explainability",            desc:"Short rationale on decisions.",                        Icon: FiKey },
  { title:"Civic Alignment",           desc:"Pro-citizen constraints.",                             Icon: FiCheckCircle },
];

export default function Principles(){
  return (
    <section id="principles" className="section">
      <div className="card p-6 md:p-8 max-w-[1200px] mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({title,desc,Icon})=>(
            <div key={title} className="rounded-2xl border border-line bg-panel p-4 shadow-glow hover:shadow-glow-strong transition">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="text-accent text-lg" />
                <div className="font-semibold">{title}</div>
              </div>
              <div className="text-mute text-sm">{desc}</div>
              <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-accent to-accent2/80 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
