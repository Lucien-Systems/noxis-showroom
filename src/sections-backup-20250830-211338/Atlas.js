import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import Modal from "../components/Modal";
const center = { id: "brief", title: "Briefing Desk", sub: "Decision-ready outputs", info: "Aggregates analyses into audit-ready outputs aligned with governance constraints. Synthetic demo — no live data." };
const ringBase = [
    { id: "signals", title: "Signals", sub: "Open-source streams", info: "Synthetic OSINT inputs: media, RSS, public APIs." },
    { id: "narrative", title: "Narrative Graph", sub: "Actors & channels", info: "Story arcs, actors and propagation dynamics." },
    { id: "audit", title: "Audit Trail", sub: "Receipts & provenance", info: "Cryptographic receipts enable verifiable review." },
    { id: "analysis", title: "Analysis", sub: "NLP/CV, anomalies", info: "NLP clustering, CV tags and anomaly detection." },
    { id: "ingestion", title: "Ingestion", sub: "Normalize & dedupe", info: "Safety filters, normalization and deduplication." },
    { id: "anomaly", title: "Anomaly Lens", sub: "Bursts & coordination", info: "Detects bursts, coordination and synthetic noise." },
    { id: "governance", title: "Governance", sub: "Targeted • lawful", info: "Rights-first constraints: scope, retention, auditability." },
];
export default function Atlas() {
    const [hi, setHi] = useState(null);
    const [open, setOpen] = useState(null);
    const ring = useMemo(() => {
        const r = 190, n = ringBase.length;
        return ringBase.map((node, i) => ({ ...node, x: Math.cos((i / n) * Math.PI * 2 - Math.PI / 2) * r, y: Math.sin((i / n) * Math.PI * 2 - Math.PI / 2) * r }));
    }, []);
    const edgeOn = (id) => hi === 'all' || hi === id || hi === 'brief';
    return (_jsxs("div", { className: "atlas-wrap", role: "region", "aria-label": "Interactive Atlas", children: [_jsxs("div", { style: { display: "flex", gap: 8, marginBottom: 12 }, children: [_jsx("button", { className: "btn", "aria-pressed": hi === 'all', onClick: () => setHi(h => h ? null : 'all'), children: "Highlight" }), _jsx("button", { className: "btn", onClick: () => { setHi(null); }, children: "Reset" })] }), _jsx("div", { className: "atlas-stage", children: _jsxs("svg", { viewBox: "-300 -300 600 600", style: { position: "absolute", inset: 0 }, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "a", x1: "0", y1: "0", x2: "1", y2: "0", children: [_jsx("stop", { offset: "0%", stopColor: "#1EE9A6" }), _jsx("stop", { offset: "100%", stopColor: "#FFCC55" })] }), _jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: _jsx("feDropShadow", { dx: "0", dy: "0", stdDeviation: "4", floodColor: "rgba(255,204,85,.25)" }) })] }), ring.map(n => (_jsx("line", { x1: 0, y1: 0, x2: n.x, y2: n.y, stroke: edgeOn(n.id) ? 'url(#a)' : '#1F3046', strokeWidth: edgeOn(n.id) ? 3 : 2 }, "edge-" + n.id))), _jsxs("g", { className: "atlas-node", onMouseEnter: () => setHi("brief"), onMouseLeave: () => setHi(null), onClick: () => setOpen(center), children: [_jsx("rect", { x: -90, y: -28, rx: "14", ry: "14", width: "180", height: "56", fill: "#111A2D", stroke: "#1F3046", strokeWidth: "2", filter: "url(#shadow)" }), _jsx("text", { x: 0, y: -4, textAnchor: "middle", fill: "#E7EEF8", style: { fontWeight: 700, fontSize: 13 }, children: center.title }), _jsx("text", { x: 0, y: 12, textAnchor: "middle", fill: "#9AA6BF", style: { fontSize: 11 }, children: center.sub })] }), ring.map(n => (_jsxs("g", { transform: `translate(${n.x},${n.y})`, className: "atlas-node", onMouseEnter: () => setHi(n.id), onMouseLeave: () => setHi(null), onClick: () => setOpen(n), children: [_jsx("rect", { x: -95, y: -26, rx: "14", ry: "14", width: "190", height: "52", fill: "#111A2D", stroke: edgeOn(n.id) ? 'url(#a)' : '#1F3046', strokeWidth: 2, filter: "url(#shadow)" }), _jsx("text", { x: 0, y: -4, textAnchor: "middle", fill: "#E7EEF8", style: { fontWeight: 700, fontSize: 12 }, children: n.title }), _jsx("text", { x: 0, y: 12, textAnchor: "middle", fill: "#9AA6BF", style: { fontSize: 10 }, children: n.sub })] }, n.id)))] }) }), _jsxs(Modal, { open: !!open, onClose: () => setOpen(null), title: open?.title ?? "", descId: "atlas-desc", children: [_jsx("p", { id: "atlas-desc", children: open?.info }), _jsx("p", { className: "sub", children: "Synthetic demo \u2014 no live data." }), _jsx("p", { children: _jsx("a", { className: "btn", href: "#", children: "Open example" }) })] })] }));
}
