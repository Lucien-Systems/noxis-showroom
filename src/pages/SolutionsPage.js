import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from "react";
import { AlertTriangle, BriefcaseBusiness, Building2, Radar, ShieldCheck, Sparkles, UserRound, Waypoints, } from "lucide-react";
import { industries, roles, tiers, useCases } from "../content/siteData";
const scenarioMatrix = [
    {
        scenario: "Election information protection",
        tierA: "Campaign detection and narrative containment",
        tierB: "Realtime hotspot camera escalation",
        tierC: "Aerial monitoring around critical zones",
    },
    {
        scenario: "Coordinated civil disruption",
        tierA: "Influence cluster and trigger analysis",
        tierB: "Citywide camera fusion and incident relay",
        tierC: "Drone perimeter and route visibility",
    },
    {
        scenario: "Critical infrastructure attack pressure",
        tierA: "Narrative pressure tracking against operators",
        tierB: "Facility camera anomaly correlation",
        tierC: "Aerial corridor inspection and threat confirmation",
    },
    {
        scenario: "Cross-border hybrid operation",
        tierA: "Propaganda and actor-chain mapping",
        tierB: "Entry-point surveillance orchestration",
        tierC: "UAV geospatial event continuity",
    },
];
const useCaseIcons = [ShieldCheck, AlertTriangle, Waypoints, Radar];
export default function SolutionsPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-solutions", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: "Solutions" }), _jsx("h1", { className: "display-title", children: "Protect institutions from narrative, visual, and aerial threats" }), _jsx("p", { className: "hero-copy", children: "NOXIS provides configurable solutions by scenario, sector, and command role across information and physical domains." }), _jsxs("div", { className: "hero-kpis", "aria-label": "Solution outcomes", children: [_jsxs("span", { className: "hero-kpi", children: [_jsx(ShieldCheck, { size: 16, "aria-hidden": "true" }), "Faster incident triage"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Radar, { size: 16, "aria-hidden": "true" }), "Multi-domain correlation"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Sparkles, { size: 16, "aria-hidden": "true" }), "Mandate-ready governance"] })] })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: "Use-case Driven" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: "Tier-aligned Outcomes" })] })] }) }), _jsx("section", { id: "use-cases", className: "section-block section-dark", children: _jsxs("div", { className: "container section-3col", children: [_jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(BriefcaseBusiness, { className: "section-icon", "aria-hidden": "true" }), "Solutions by Use Case"] }), _jsx("div", { className: "link-stack", children: useCases.map((entry, index) => {
                                        const Icon = useCaseIcons[index % useCaseIcons.length];
                                        return (_jsxs("div", { className: "link-stack__item", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: "Mission scenario" })] }), _jsx("h3", { children: entry.title }), _jsx("p", { children: entry.detail })] }, entry.title));
                                    }) })] }), _jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Building2, { className: "section-icon", "aria-hidden": "true" }), "Solutions by Industry"] }), _jsx("div", { className: "pill-grid", children: industries.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(Building2, { size: 14, "aria-hidden": "true" }), item] }, item))) })] }), _jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(UserRound, { className: "section-icon", "aria-hidden": "true" }), "Solutions by Role"] }), _jsx("div", { className: "pill-grid", children: roles.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(UserRound, { size: 14, "aria-hidden": "true" }), item] }, item))) })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Tier-to-Scenario Matrix" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Waypoints, { className: "section-icon", "aria-hidden": "true" }), "How the three layers operate together in live conditions"] })] }), _jsx("div", { className: "matrix-wrap", children: _jsxs("div", { className: "matrix-table", children: [_jsx("div", { className: "matrix-head", children: "Scenario" }), _jsx("div", { className: "matrix-head", children: tiers[0].name }), _jsx("div", { className: "matrix-head", children: tiers[1].name }), _jsx("div", { className: "matrix-head", children: tiers[2].name }), scenarioMatrix.map((row) => (_jsxs(Fragment, { children: [_jsx("div", { className: "matrix-cell matrix-cell--scenario", children: row.scenario }), _jsx("div", { className: "matrix-cell", children: row.tierA }), _jsx("div", { className: "matrix-cell", children: row.tierB }), _jsx("div", { className: "matrix-cell", children: row.tierC })] }, row.scenario)))] }) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Solution Design" }), _jsx("h2", { children: "Need a mission-specific tier configuration?" }), _jsx("p", { children: "We build deployment blueprints by jurisdiction, command model, and threat profile." })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: "Explore Solution Fit" })] }) })] }));
}
