import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FiCpu, FiShield, FiSearch } from "react-icons/fi";
const ITEMS = [
    {
        icon: _jsx(FiShield, { className: "h-5 w-5" }),
        title: "Digital Immune Function",
        desc: "NOXIS monitors manipulative influence patterns that target public trust, institutional operations, and decision authority.",
    },
    {
        icon: _jsx(FiSearch, { className: "h-5 w-5" }),
        title: "Targeted, Not Mass Monitoring",
        desc: "Collection stays within public sources or legally mandated channels. Scope control and minimization are enforced by policy and system design.",
    },
    {
        icon: _jsx(FiCpu, { className: "h-5 w-5" }),
        title: "Narrative Intelligence Engine",
        desc: "Graph-driven narrative analysis, burst detection, and multimodal checks produce evidence-ready outputs with transparent provenance.",
    },
];
export default function WhatIs() {
    return (_jsxs("div", { className: "card p-6 md:p-8", children: [_jsx("div", { className: "grid gap-4 md:grid-cols-3", children: ITEMS.map((it, i) => (_jsxs(motion.article, { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.32, delay: i * 0.06 }, className: "panel p-5", children: [_jsx("div", { className: "icon-badge mb-4", children: it.icon }), _jsx("h3", { className: "m-0 text-[1.02rem] leading-snug", children: it.title }), _jsx("p", { className: "mt-3 text-sm leading-relaxed text-mute", children: it.desc })] }, it.title))) }), _jsxs("div", { className: "mt-5 rounded-xl border border-line bg-[#0a101c] px-4 py-3 text-sm text-mute", children: ["Chief architect and system author: ", _jsx("span", { className: "font-medium text-ink", children: "Adam Karl Lucien" }), "."] })] }));
}
