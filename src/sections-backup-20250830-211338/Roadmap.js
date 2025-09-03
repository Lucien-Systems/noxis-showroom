import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFlag, FiActivity, FiTrendingUp } from "react-icons/fi";
const ITEMS = [
    {
        t: 'Phase 1',
        d: 'Core architecture & OSINT modules; narrative graph prototype.',
        expl: 'Lay the rails. Build ingestion adapters, schema normalization and safety filters. Ship a first narrative-graph that proves signal > noise with synthetic streams.',
        icon: FiFlag
    },
    {
        t: 'Phase 2',
        d: 'Real-time analytics & visualization; pilot data rooms.',
        expl: 'Move from batch to near-real-time. Introduce anomaly lenses, burst detection and briefing views that reduce analysis time from days to hours.',
        icon: FiActivity
    },
    {
        t: 'Phase 3',
        d: 'Institutional pilots; audit tooling and oversight workflows.',
        expl: 'Operationalize trust. Cryptographic receipts, reproducible configs, signed bundles and reviewer workflows aligned with governance requirements.',
        icon: FiTrendingUp
    }
];
export default function Roadmap() {
    const [i, setI] = useState(0);
    const cur = useMemo(() => ITEMS[i], [i]);
    return (_jsx("div", { className: "card p-6", children: _jsxs("div", { className: "grid gap-4 md:grid-cols-[260px_1fr]", children: [_jsx("div", { className: "grid gap-2", children: ITEMS.map((x, idx) => (_jsxs("button", { onClick: () => setI(idx), className: `flex items-center gap-3 rounded-xl border px-3 py-2 text-left transition ${idx === i ? 'border-accent2 shadow-glow-strong' : 'border-line bg-panel hover:shadow-glow'}`, children: [_jsx("span", { className: "w-6 text-center font-extrabold", children: idx + 1 }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: x.t }), _jsxs("div", { className: "text-mute text-xs", children: [x.d.slice(0, 44), "\u2026"] })] })] }, x.t))) }), _jsxs("div", { className: "relative card p-6 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(650px_220px_at_-80px_-120px,rgba(30,233,166,.10),transparent_70%)]" }), _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: 8, scale: .98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: .98 }, transition: { duration: .28 }, className: "relative", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(cur.icon, { className: "text-accent2" }), _jsx("h3", { className: "m-0 text-lg font-semibold", children: cur.t })] }), _jsx("p", { className: "text-mute text-base", children: cur.d }), _jsxs("div", { className: "panel p-4 mt-3", children: [_jsx("h4", { className: "m-0 text-sm font-semibold", children: "Why this phase matters" }), _jsx("p", { className: "text-mute text-sm mt-1", children: cur.expl })] }), _jsxs("div", { className: "mt-4", children: [_jsx("div", { className: "h-1 w-full bg-line/40 rounded overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-gradient-to-r from-accent to-accent2", initial: { width: 0 }, animate: { width: `${((i + 1) / ITEMS.length) * 100}%` }, transition: { duration: .35 } }) }), _jsxs("div", { className: "mt-2 text-xs text-mute", children: ["Progress: ", (Math.round(((i + 1) / ITEMS.length) * 100)), "%"] })] })] }, cur.t) })] })] }) }));
}
