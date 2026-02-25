import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";
const PRINCIPLES = [
    "Targeted scope over mass collection",
    "Reproducibility and versioned runs",
    "Cryptographic evidence chain by default",
    "Privacy-first operating boundaries",
    "Clear review trail for governance",
    "Clarity over narrative noise",
];
const TIMELINE = [
    {
        y: "2025-Present",
        t: "Chief Architect, NOXIS",
        d: "Lucien Systems LLC (USA)",
        brief: "Rights-first narrative security architecture across OSINT, hybrid-threat analytics, and auditability.",
    },
    {
        y: "2022-Present",
        t: "Founder & Managing Shareholder",
        d: "Lucien Systems LLC (USA)",
        brief: "R&D and advisory on AI systems, governance controls, and resilient operational design.",
    },
    {
        y: "2023-2024",
        t: "Interim Project Consultancy",
        d: "Deutsche Mechatronics GmbH (DE)",
    },
    {
        y: "2022-2023",
        t: "Industrial & IT Engineer / Data Analyst",
        d: "L.I.T. Gruppe (DE)",
    },
];
export default function Founder() {
    const [tab, setTab] = useState("Principles");
    const variant = useMemo(() => ({
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.24 } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
    }), []);
    return (_jsx("div", { className: "card p-6 md:p-8", children: _jsxs("div", { className: "grid gap-5 md:grid-cols-[320px_1fr]", children: [_jsxs("aside", { className: "panel p-5", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "grid h-16 w-16 place-items-center rounded-full border border-accent2/50 bg-[#0b1220] text-lg font-medium text-accent2", children: "AKL" }), _jsxs("div", { children: [_jsx("h3", { className: "m-0 text-[1rem]", children: "Adam Karl Lucien" }), _jsx("p", { className: "mt-1 mb-0 text-sm text-mute", children: "Systems architect, governance and narrative security" })] })] }), _jsxs("div", { className: "mt-4 flex flex-wrap gap-2 text-xs text-mute", children: [_jsx("span", { className: "rounded-lg border border-line bg-[#0b1220] px-2 py-1", children: "AI/ML" }), _jsx("span", { className: "rounded-lg border border-line bg-[#0b1220] px-2 py-1", children: "OSINT" }), _jsx("span", { className: "rounded-lg border border-line bg-[#0b1220] px-2 py-1", children: "Governance" }), _jsx("span", { className: "rounded-lg border border-line bg-[#0b1220] px-2 py-1", children: "Auditability" })] })] }), _jsxs("section", { children: [_jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: ["Principles", "Bio", "Timeline"].map((t) => (_jsx("button", { onClick: () => setTab(t), className: `rounded-xl border px-3 py-1.5 text-xs uppercase tracking-[0.08em] transition ${tab === t ? "border-accent2 text-ink shadow-glow" : "border-line text-mute hover:text-ink"}`, children: t }, t))) }), _jsxs(AnimatePresence, { mode: "wait", children: [tab === "Principles" && (_jsx(motion.div, { ...variant, className: "grid gap-2 md:grid-cols-2", children: PRINCIPLES.map((item) => (_jsxs("div", { className: "flex items-start gap-2 rounded-lg border border-line bg-[#0b1220] px-3 py-2", children: [_jsx(FiCheckCircle, { className: "mt-0.5 text-accent" }), _jsx("span", { className: "text-sm text-mute", children: item })] }, item))) }, "p")), tab === "Bio" && (_jsx(motion.div, { ...variant, className: "panel p-5 text-mute text-sm leading-relaxed", children: "Adam Karl Lucien leads NOXIS as a rights-first security architecture designed to detect coordinated influence operations, protect institutional decision chains, and maintain legal-grade auditability across the full analytical workflow." }, "b")), tab === "Timeline" && (_jsx(motion.div, { ...variant, className: "grid gap-3", children: TIMELINE.map((row) => (_jsxs("article", { className: "panel p-4", children: [_jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [_jsx("h4", { className: "m-0 text-sm", children: row.t }), _jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-accent2/50 bg-accent2/10 px-2 py-0.5 text-[11px] text-accent2", children: [_jsx(FiCalendar, {}), " ", row.y] })] }), _jsx("p", { className: "mt-1 mb-0 text-sm text-mute", children: row.d }), row.brief ? _jsx("p", { className: "mt-2 mb-0 text-xs text-mute", children: row.brief }) : null] }, row.y + row.t))) }, "t"))] })] })] }) }));
}
