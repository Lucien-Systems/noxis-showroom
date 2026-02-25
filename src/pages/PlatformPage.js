import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Camera, CheckCircle2, Database, Fingerprint, Orbit, Radar, Shield, Workflow } from "lucide-react";
import { platformModules, tiers } from "../content/siteData";
const tierIcons = {
    "tier-a": Radar,
    "tier-b": Camera,
    "tier-c": Orbit,
};
const moduleIcons = [Workflow, Camera, Radar, Orbit, Fingerprint, Shield];
const flowSteps = [
    {
        title: "Ingest",
        detail: "Narrative, camera, and aerial streams enter policy-scoped gateways.",
        icon: Database,
    },
    {
        title: "Correlate",
        detail: "NOXIS links actors, locations, and event threads across tiers.",
        icon: Workflow,
    },
    {
        title: "Decide",
        detail: "Teams receive risk-scored outputs with mandate-aware controls.",
        icon: CheckCircle2,
    },
    {
        title: "Audit",
        detail: "Every intervention is replayable through cryptographic evidence.",
        icon: Fingerprint,
    },
];
export default function PlatformPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-platform", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: "Platform" }), _jsx("h1", { className: "display-title", children: "Constellation Tiered Intelligence Platform" }), _jsx("p", { className: "hero-copy", children: "Illuminate context, coordinate camera and aerial streams, and neutralize narrative attacks through one decision fabric." }), _jsxs("div", { className: "hero-kpis", "aria-label": "Platform highlights", children: [_jsxs("span", { className: "hero-kpi", children: [_jsx(Radar, { size: 16, "aria-hidden": "true" }), "Narrative detection"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Camera, { size: 16, "aria-hidden": "true" }), "Live camera fusion"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Orbit, { size: 16, "aria-hidden": "true" }), "Drone telemetry relay"] })] })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: "Cross-domain Correlation" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: "Replayable Audit Trail" })] })] }) }), _jsx("section", { id: "tiers", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Operational Layers" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Workflow, { className: "section-icon", "aria-hidden": "true" }), "Tier model for mandate-based escalation"] })] }), _jsx("div", { className: "tier-grid", children: tiers.map((tier) => {
                                const Icon = tierIcons[tier.id] ?? Shield;
                                const anchorId = tier.id === "tier-b" ? "vision" : tier.id === "tier-a" ? "narrative" : "aerial";
                                return (_jsxs("article", { className: "tier-card", id: anchorId, children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: tier.name })] }), _jsx("h3", { children: tier.tagline }), _jsx("p", { children: tier.description }), _jsx("ul", { children: tier.capabilities.map((capability) => (_jsx("li", { children: capability }, capability))) })] }, tier.id));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Module Stack" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Shield, { className: "section-icon", "aria-hidden": "true" }), "Composable building blocks for command environments"] })] }), _jsx("div", { className: "module-grid", children: platformModules.map((module, index) => {
                                const Icon = moduleIcons[index % moduleIcons.length];
                                return (_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: "Operational Module" })] }), _jsx("h3", { children: module.title }), _jsx("p", { children: module.summary }), _jsx("ul", { children: module.bullets.map((bullet) => (_jsx("li", { children: bullet }, bullet))) })] }, module.title));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Operational Loop" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Database, { className: "section-icon", "aria-hidden": "true" }), "From ingestion to review in four controlled steps"] })] }), _jsx("div", { className: "flow-grid", children: flowSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (_jsxs("article", { className: "flow-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsxs("p", { className: "card-eyebrow", children: ["Step ", index + 1] })] }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.detail })] }, step.title));
                            }) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Deployment" }), _jsx("h2", { children: "Need a platform architecture brief?" }), _jsx("p", { children: "We can map your tier model, command topology, and governance boundaries." })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: "Request Architecture Brief" })] }) })] }));
}
