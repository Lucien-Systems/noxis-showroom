import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiShield, FiRadio, FiTarget, FiGlobe, FiUsers, FiActivity, FiSend } from "react-icons/fi";
import Modal from "../components/Modal";
const tabs = ["Government", "Security", "Newsrooms", "Civil", "Research"];
const META = {
    Government: { Icon: FiGlobe, deck: "Decision protection for state governance flows", colors: { from: "#E9C25B", to: "#FFD84F" }, preset: { scope: 92, min: 88, audit: 98 } },
    Security: { Icon: FiTarget, deck: "Hybrid-threat radar with rights-first constraints", colors: { from: "#FFD84F", to: "#E9C25B" }, preset: { scope: 95, min: 90, audit: 96 } },
    Newsrooms: { Icon: FiRadio, deck: "Narrative traceability and source-pattern verification", colors: { from: "#E0BA57", to: "#FFD84F" }, preset: { scope: 80, min: 92, audit: 94 } },
    Civil: { Icon: FiUsers, deck: "Citizen-safe transparency without mass profiling", colors: { from: "#D2AC4E", to: "#E9C25B" }, preset: { scope: 75, min: 95, audit: 90 } },
    Research: { Icon: FiActivity, deck: "Method validation with reproducible model behavior", colors: { from: "#C8A349", to: "#F1CE66" }, preset: { scope: 78, min: 88, audit: 92 } },
};
const BENEFITS = {
    Government: ["Policy shock detection", "Immunity veto for tainted inputs", "Receipts-ready decisions"],
    Security: ["Coordinated campaign detection", "Signal vs noise separation", "Need-to-know operation mode"],
    Newsrooms: ["Narrative propagation maps", "Visual meme correlation", "Evidence bundles for editorial review"],
    Civil: ["No dragnet monitoring", "Rights-first guardrails", "Explainable public-facing outputs"],
    Research: ["Open method framing", "Reproducible benchmarks", "Auditable experiment chain"],
};
function gaugePath(percent) {
    const p = Math.max(0, Math.min(100, percent));
    const a = (p / 100) * Math.PI * 1.6 + Math.PI * 0.2;
    const r = 38, cx = 40, cy = 40;
    const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
    const startX = cx + r * Math.cos(Math.PI * 0.2), startY = cy + r * Math.sin(Math.PI * 0.2);
    const largeArc = p > 50 ? 1 : 0;
    return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`;
}
function Dial({ label, value, colors }) {
    const d = gaugePath(value);
    return (_jsxs("div", { className: "grid place-items-center", children: [_jsxs("svg", { viewBox: "0 0 80 80", className: "w-24 h-24", children: [_jsx("defs", { children: _jsxs("linearGradient", { id: `g-${label.replace(/\s+/g, '')}`, x1: "0", y1: "0", x2: "1", y2: "0", children: [_jsx("stop", { offset: "0%", stopColor: colors.from }), _jsx("stop", { offset: "100%", stopColor: colors.to })] }) }), _jsx("circle", { cx: "40", cy: "40", r: "38", fill: "none", stroke: "rgba(255,255,255,.08)", strokeWidth: "6" }), _jsx(motion.path, { d: d, fill: "none", stroke: `url(#g-${label.replace(/\s+/g, '')})`, strokeWidth: "6", strokeLinecap: "round", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: .6 } })] }), _jsxs("div", { className: "text-xs text-mute mt-1", children: [label, ": ", _jsxs("span", { className: "text-ink", children: [value, "%"] })] })] }));
}
export default function Audience() {
    const [tab, setTab] = useState("Government");
    const meta = META[tab];
    const [open, setOpen] = useState(false);
    const variant = useMemo(() => ({
        initial: { opacity: 0, y: 10, scale: .98, filter: "blur(3px)" },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: .28 } },
        exit: { opacity: 0, y: -8, scale: .98, filter: "blur(2px)", transition: { duration: .18 } }
    }), []);
    return (_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsx("div", { className: "flex overflow-x-auto gap-2 snap-x snap-mandatory", children: tabs.map(t => (_jsx("button", { onClick: () => setTab(t), className: `snap-start whitespace-nowrap rounded-xl px-3 py-1.5 text-xs uppercase tracking-[0.08em] border transition
              ${tab === t ? "border-accent2 text-ink shadow-glow-strong" : "border-line text-mute hover:text-ink hover:shadow-glow"}`, children: t }, t))) }), _jsxs("span", { className: "hidden md:flex items-center gap-1 text-xs text-mute", children: [_jsx(FiShield, { className: "text-accent2" }), " rights-first"] })] }), _jsx("div", { className: "relative", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { ...variant, className: "card p-5", children: _jsxs("div", { className: "grid gap-5 md:grid-cols-[1fr_360px]", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(meta.Icon, { className: "text-accent2" }), _jsx("h3", { className: "m-0 text-base", children: tab })] }), _jsx("p", { className: "text-mute mt-1 text-sm", children: meta.deck }), _jsx("ul", { className: "text-mute mt-3 grid gap-1.5 list-disc ml-5 text-sm", children: BENEFITS[tab].map(b => _jsx("li", { children: b }, b)) }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsxs("button", { className: "btn-primary", onClick: () => setOpen(true), children: [_jsx(FiSend, {}), " Request policy brief"] }), _jsx("a", { className: "btn", href: "#technology", children: "Explore technology" })] })] }), _jsxs("div", { className: "panel p-4 relative overflow-hidden", children: [_jsx("h4", { className: "m-0 text-base font-semibold", children: "Compliance Dial" }), _jsxs("div", { className: "grid grid-cols-3 gap-3 mt-3", children: [_jsx(Dial, { label: "Targeted Scope", value: meta.preset.scope, colors: meta.colors }), _jsx(Dial, { label: "Minimization", value: meta.preset.min, colors: meta.colors }), _jsx(Dial, { label: "Auditability", value: meta.preset.audit, colors: meta.colors })] }), _jsx("div", { className: "text-xs text-mute mt-3", children: "Presets are synthetic and differ per audience." })] })] }) }, tab) }) }), _jsx(Modal, { open: open, onClose: () => setOpen(false), title: "Request policy brief", descId: "aud-desc", children: _jsxs("form", { className: "grid gap-3", onSubmit: (e) => { e.preventDefault(); setOpen(false); }, children: [_jsx("p", { id: "aud-desc", className: "text-mute", children: "Synthetic form \u2014 no backend. Your submission is not stored." }), _jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [_jsx("input", { className: "w-full rounded-xl border border-line bg-panel px-3 py-2", placeholder: "Full name", required: true }), _jsx("input", { className: "w-full rounded-xl border border-line bg-panel px-3 py-2", placeholder: "Email", type: "email", required: true })] }), _jsx("input", { className: "w-full rounded-xl border border-line bg-panel px-3 py-2", placeholder: "Organization" }), _jsx("textarea", { className: "w-full rounded-xl border border-line bg-panel px-3 py-2", rows: 3, placeholder: "Use-case or policy question" }), _jsxs("div", { className: "flex justify-end gap-2", children: [_jsx("button", { type: "button", className: "btn", onClick: () => setOpen(false), children: "Cancel" }), _jsx("button", { type: "submit", className: "btn-primary", children: "Send" })] })] }) })] }));
}
