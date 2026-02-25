import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HowViz from "../components/HowViz";
const LABELS = {
    1: "Targeted Collection",
    2: "Narrative Analysis",
    3: "Manipulation Mapping",
    4: "Decision Brief",
    5: "Cryptographic Receipt",
};
export default function How() {
    const [active, setActive] = useState(1);
    const variant = {
        initial: { opacity: 0, y: 8, filter: "blur(2px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.25 } },
        exit: { opacity: 0, y: -8, filter: "blur(2px)", transition: { duration: 0.18 } },
    };
    return (_jsxs("div", { className: "card p-6 md:p-8", children: [_jsx("div", { className: "mb-5 flex flex-wrap gap-2", children: [1, 2, 3, 4, 5].map((s) => (_jsxs("button", { onClick: () => setActive(s), className: `rounded-xl border px-3 py-1.5 text-xs uppercase tracking-[0.08em] transition ${active === s
                        ? "border-accent2 text-ink shadow-glow"
                        : "border-line text-mute hover:border-accent/40 hover:text-ink"}`, children: [s, ". ", LABELS[s]] }, s))) }), _jsxs("div", { className: "grid gap-4 md:grid-cols-[1fr_0.95fr]", children: [_jsx("div", { className: "panel p-5", children: _jsxs(AnimatePresence, { mode: "wait", children: [active === 1 && (_jsxs(motion.div, { ...variant, children: [_jsx("h3", { className: "m-0 text-lg", children: "Targeted Collection" }), _jsxs("ul", { className: "mt-3 space-y-2 text-sm text-mute", children: [_jsx("li", { children: "Public OSINT channels (media, RSS, licensed API)." }), _jsx("li", { children: "Optional state-tier sources under legal mandate." }), _jsx("li", { children: "Need-to-know and minimization controls at ingest layer." })] })] }, "signals")), active === 2 && (_jsxs(motion.div, { ...variant, children: [_jsx("h3", { className: "m-0 text-lg", children: "Narrative Analysis" }), _jsxs("ul", { className: "mt-3 space-y-2 text-sm text-mute", children: [_jsx("li", { children: "NLP + computer vision for text and visual streams." }), _jsx("li", { children: "Synthetic signal layer for safer training and tuning." }), _jsx("li", { children: "Structure-aware analysis beyond keyword matching." })] })] }, "analysis")), active === 3 && (_jsxs(motion.div, { ...variant, children: [_jsx("h3", { className: "m-0 text-lg", children: "Manipulation Mapping" }), _jsxs("ul", { className: "mt-3 space-y-2 text-sm text-mute", children: [_jsx("li", { children: "Graph model of actors, channels, and propagation nodes." }), _jsx("li", { children: "Anomaly burst lens for synchronized campaign spikes." }), _jsx("li", { children: "Attribution paths through ownership and risk correlation." })] })] }, "graphs")), active === 4 && (_jsxs(motion.div, { ...variant, children: [_jsx("h3", { className: "m-0 text-lg", children: "Decision Brief" }), _jsxs("ul", { className: "mt-3 space-y-2 text-sm text-mute", children: [_jsx("li", { children: "Compact risk summary for command-level decisions." }), _jsx("li", { children: "Evidence package for governance and legal review." }), _jsx("li", { children: "Governor-tier immunity veto on tainted inputs." })] })] }, "decision")), active === 5 && (_jsxs(motion.div, { ...variant, children: [_jsx("h3", { className: "m-0 text-lg", children: "Cryptographic Receipt" }), _jsxs("ul", { className: "mt-3 space-y-2 text-sm text-mute", children: [_jsx("li", { children: "Hash and provenance bound to each critical output." }), _jsx("li", { children: "Reproducible run fingerprint for independent verification." }), _jsx("li", { children: "Court-compatible traceability model." })] })] }, "audit"))] }) }), _jsx("div", { className: "overflow-hidden rounded-2xl border border-line", children: _jsx(HowViz, { step: active }) })] })] }));
}
