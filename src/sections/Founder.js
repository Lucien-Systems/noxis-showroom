import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";
const PRINCIPLES = [
    "Targeted scope over mass collection",
    "Reproducibility and versioned runs",
    "Clear documentation and review trails",
    "Privacy-by-design constraints",
    "Auditability and provenance by default",
    "Deterministic pipelines where possible",
    "Rights-first design ethos",
    "Clarity over noise",
];
const TIMELINE = [
    { y: "2025–Present", t: "Chief Architect, NOXIS — AI Surveillance Platform", d: "Lucien Systems LLC (USA)", brief: "Architecture & UX across OSINT, GEOINT, darknet; auditability & governance-by-design." },
    { y: "2023–2024", t: "Interim Project Consultancy", d: "Deutsche Mechatronics GmbH (DE)", brief: "Automation, supply chain, manufacturing systems for AI-era operations." },
    { y: "2022–2023", t: "Industrial & IT Engineer / Data Analyst", d: "L.I.T. Gruppe (DE)", brief: "Process intelligence, data ops; pipelines for logistics decisions." },
    { y: "2022–Present", t: "Founder & Managing Shareholder", d: "Lucien Systems LLC (USA)", brief: "R&D and advisory: AI, OSINT, governance-by-design, reproducible runs." },
];
export default function Founder() {
    const [tab, setTab] = useState("Principles");
    const variant = useMemo(() => ({
        initial: { opacity: 0, y: 10, scale: .98, filter: "blur(3px)" },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: .25 } },
        exit: { opacity: 0, y: -8, scale: .98, filter: "blur(2px)", transition: { duration: .18 } }
    }), []);
    return (_jsx("section", { id: "founder", className: "section", children: _jsx("div", { className: "max-w-[1200px] mx-auto px-6", children: _jsx("div", { className: "card p-6 md:p-8 w-full", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:gap-8", children: [_jsx("div", { className: "md:w-1/3", children: _jsxs("div", { className: "rounded-2xl border border-line bg-panel p-5 shadow-glow", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "h-20 w-20 rounded-full border-2 border-accent2 shadow-glow-strong grid place-items-center text-accent2 font-bold text-xl", children: "AKL" }), _jsx("span", { className: "absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-accent2/90", title: "active" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold m-0 flex items-center gap-2", children: "Adam Karl Lucien" }), _jsxs("div", { className: "flex items-center gap-1 text-mute text-sm", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 text-accent2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }), "AI Systems Architect & Strategist"] })] })] }), _jsxs("div", { className: "mt-4 flex flex-wrap gap-2 text-xs text-mute", children: [_jsx("span", { className: "px-2 py-1 rounded bg-bg border border-line", children: "AI/ML" }), _jsx("span", { className: "px-2 py-1 rounded bg-bg border border-line", children: "OSINT" }), _jsx("span", { className: "px-2 py-1 rounded bg-bg border border-line", children: "Governance" }), _jsx("span", { className: "px-2 py-1 rounded bg-bg border border-line", children: "Narrative Graphs" })] })] }) }), _jsxs("div", { className: "md:flex-1", children: [_jsx("div", { className: "flex gap-2 mb-4", children: ["Principles", "Bio", "Timeline"].map(t => (_jsx("button", { onClick: () => setTab(t), className: `rounded-xl px-3 py-1.5 text-sm border transition ${tab === t ? "border-accent2 text-ink shadow-glow-strong" : "border-line text-mute hover:text-ink hover:shadow-glow"}`, children: t }, t))) }), _jsx("div", { className: "relative", children: _jsxs(AnimatePresence, { mode: "wait", children: [tab === "Principles" && (_jsx(motion.div, { ...variant, className: "grid gap-2 md:grid-cols-2", children: PRINCIPLES.map(item => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(FiCheckCircle, { className: "text-accent mt-0.5" }), _jsx("span", { className: "text-mute", children: item })] }, item))) }, "p")), tab === "Bio" && (_jsx(motion.div, { ...variant, className: "text-mute", children: _jsx("p", { children: "Architecting rights-first intelligence systems that turn open-source signals into decision-ready briefs \u2014 with cryptographic receipts, reproducible configs, and oversight workflows." }) }, "b")), tab === "Timeline" && (_jsx(motion.div, { ...variant, className: "grid gap-3", children: TIMELINE.map(row => (_jsxs("div", { className: "rounded-2xl border border-line bg-panel p-4 hover:shadow-glow transition", children: [_jsx("div", { className: "flex items-start justify-between gap-3", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs border border-accent2 text-accent2 bg-accent2/10", children: [_jsx(FiCalendar, {}), " ", row.y] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: row.t }), _jsx("div", { className: "text-mute text-sm", children: row.d })] })] }) }), row.brief && _jsx("div", { className: "text-mute text-sm mt-2", children: row.brief })] }, row.y + row.t))) }, "t"))] }) })] })] }) }) }) }));
}
