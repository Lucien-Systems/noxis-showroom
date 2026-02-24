import { motion } from "framer-motion";
import { FiShield, FiTarget, FiUsers, FiActivity, FiGitBranch, FiImage, FiLock, FiCheckCircle } from "react-icons/fi";

type Item = { title:string; desc:string; Icon: React.ComponentType<{className?:string}> };

const ITEMS: Item[] = [
  { title:"Rights-first",                 desc:"Civil-rights constraints are primary, not optional.",                              Icon: FiShield },
  { title:"Targeted Scope",               desc:"Collection is focused on public/legal sources and strict mission scope.",           Icon: FiTarget },
  { title:"Need-to-know Access",          desc:"Modular controls limit visibility and actions by role and mandate.",               Icon: FiUsers },
  { title:"Narrative Graph Intelligence", desc:"Influence flows are modeled as actors, channels, and propagation paths.",          Icon: FiGitBranch },
  { title:"Anomaly Burst Lens",           desc:"Detects synchronized spikes that signal coordinated manipulation operations.",      Icon: FiActivity },
  { title:"Multimodal Detection",         desc:"Text, imagery, and video patterns are analyzed together for copy-paste campaigns.", Icon: FiImage },
  { title:"Cryptographic Audit Trail",    desc:"Each output can be traced via hash, provenance, and reproducible run context.",    Icon: FiLock },
  { title:"Immunity Exception",           desc:"Governor tier can veto tainted inputs before they reach decision processes.",       Icon: FiCheckCircle },
];

export default function Principles(){
  return (
    <section id="principles" className="section">
      <div className="card p-6 md:p-8 max-w-[1200px] mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({title,desc,Icon}, i)=>(
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: .3, delay: i * .04 }}
              className="rounded-2xl border border-line bg-panel p-4 shadow-glow hover:shadow-glow-strong transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="icon-badge !h-8 !w-8 rounded-lg">
                  <Icon className="text-base" />
                </span>
                <div className="font-semibold">{title}</div>
              </div>
              <div className="text-mute text-sm">{desc}</div>
              <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-accent to-accent2/80 opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
