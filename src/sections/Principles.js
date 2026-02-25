import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FiShield, FiTarget, FiUsers, FiGitBranch, FiLock, FiCheckCircle } from "react-icons/fi";
const ITEMS = [
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
    return (_jsx("div", { className: "card p-6 md:p-8", children: _jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: ITEMS.map(({ title, desc, Icon }, i) => (_jsxs(motion.article, { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-90px" }, transition: { duration: 0.28, delay: i * 0.04 }, className: "panel p-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "icon-badge !h-9 !w-9 rounded-lg", children: _jsx(Icon, { className: "text-base" }) }), _jsx("h3", { className: "m-0 text-[0.95rem] leading-tight", children: title })] }), _jsx("p", { className: "mt-3 text-sm leading-relaxed text-mute", children: desc })] }, title))) }) }));
}
