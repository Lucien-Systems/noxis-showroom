import { motion } from "framer-motion";
import { FiShield, FiTarget, FiUsers, FiGitBranch, FiLock, FiCheckCircle } from "react-icons/fi";

type Item = { title: string; desc: string; Icon: React.ComponentType<{ className?: string }> };

const ITEMS: Item[] = [
  {
    title: "Rights-first Control",
    desc: "Civil rights constraints are mandatory boundaries, not optional policy text.",
    Icon: FiShield,
  },
  {
    title: "Targeted Scope",
    desc: "Public and lawful channels only, with strict mission limitation and minimization.",
    Icon: FiTarget,
  },
  {
    title: "Need-to-know Access",
    desc: "Role-based modular visibility prevents uncontrolled data spread inside operations.",
    Icon: FiUsers,
  },
  {
    title: "Narrative Graph Model",
    desc: "Actors, channels, and propagation paths are mapped to reveal campaign architecture.",
    Icon: FiGitBranch,
  },
  {
    title: "Cryptographic Receipts",
    desc: "Every critical output includes hash, provenance, and replay context for verification.",
    Icon: FiLock,
  },
  {
    title: "Immunity Veto",
    desc: "Tainted inputs can be blocked before they influence strategic decision workflows.",
    Icon: FiCheckCircle,
  },
];

export default function Principles() {
  return (
    <div className="card p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ITEMS.map(({ title, desc, Icon }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.28, delay: i * 0.04 }}
            className="panel p-4"
          >
            <div className="flex items-center gap-3">
              <span className="icon-badge !h-9 !w-9 rounded-lg">
                <Icon className="text-base" />
              </span>
              <h3 className="m-0 text-[0.95rem] leading-tight">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mute">{desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
