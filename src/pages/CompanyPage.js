import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Compass, Gavel, Handshake, ShieldCheck, Sparkles, Users, Waypoints } from "lucide-react";
import { companyMilestones } from "../content/siteData";
const leadership = [
    {
        name: "Adam Karl Lucien",
        role: "Chief Architect, NOXIS",
        brief: "Designs the tiered intelligence architecture and governance doctrine for institutional deployments.",
        icon: Compass,
    },
    {
        name: "Strategic Operations Cell",
        role: "Mission Planning Unit",
        brief: "Builds cross-tier playbooks for narrative escalation, surveillance response, and ISR coordination.",
        icon: Waypoints,
    },
    {
        name: "Oversight and Legal Team",
        role: "Governance Authority",
        brief: "Ensures mandate compliance, access accountability, and audit readiness across active operations.",
        icon: Gavel,
    },
];
const governancePoints = [
    "Mandate-aware access boundaries and role-scoped visibility",
    "Continuous operator accountability and intervention ledger",
    "Cryptographic receipts for court-compatible replay",
    "Data minimization and retention controls by jurisdiction",
    "Supervisory override chain for critical incidents",
    "Red-team and synthetic rehearsal environments",
];
const allianceItems = [
    "National command partners",
    "Critical infrastructure agencies",
    "Cyber and threat intelligence networks",
    "Emergency response authorities",
    "Public communication and media risk units",
    "Judicial and compliance oversight bodies",
];
export default function CompanyPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-company", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: "Company" }), _jsx("h1", { className: "display-title", children: "Protectors of Narrative and Operational Integrity" }), _jsx("p", { className: "hero-copy", children: "NOXIS helps institutions operate under pressure with stronger information integrity, faster situational awareness, and accountable decision authority." }), _jsxs("div", { className: "hero-kpis", "aria-label": "Company posture", children: [_jsxs("span", { className: "hero-kpi", children: [_jsx(ShieldCheck, { size: 16, "aria-hidden": "true" }), "Governance first"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Users, { size: 16, "aria-hidden": "true" }), "Institutional operations"] }), _jsxs("span", { className: "hero-kpi", children: [_jsx(Sparkles, { size: 16, "aria-hidden": "true" }), "High-accountability deployment"] })] })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: "Strategic Alliances" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: "Policy + Operations + Legal" })] })] }) }), _jsx("section", { id: "governance", className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(ShieldCheck, { className: "section-icon", "aria-hidden": "true" }), "Mission and governance stance"] }), _jsx("p", { children: "We build sovereign intelligence systems for environments where narrative pressure, surveillance demands, and operational risk converge." }), _jsx("p", { children: "Every deployment is designed for institutions that require legal-grade oversight, mandate controls, and full traceability." })] }), _jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Gavel, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: "Governance controls" })] }), _jsx("ul", { children: governancePoints.map((point) => (_jsx("li", { children: point }, point))) })] })] }) }), _jsx("section", { id: "leadership", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Leadership" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Users, { className: "section-icon", "aria-hidden": "true" }), "Mission team built for high-accountability operations"] })] }), _jsx("div", { className: "case-grid", children: leadership.map((person) => {
                                const Icon = person.icon;
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: person.role })] }), _jsx("h3", { children: person.name }), _jsx("p", { children: person.brief })] }, person.name));
                            }) })] }) }), _jsx("section", { id: "alliances", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Alliance Framework" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Handshake, { className: "section-icon", "aria-hidden": "true" }), "Partnerships across policy, security, and infrastructure domains"] })] }), _jsx("div", { className: "pill-grid", children: allianceItems.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(Handshake, { size: 14, "aria-hidden": "true" }), item] }, item))) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Timeline" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Waypoints, { className: "section-icon", "aria-hidden": "true" }), "NOXIS evolution"] })] }), _jsx("div", { className: "timeline-grid", children: companyMilestones.map((milestone) => (_jsxs("article", { className: "timeline-card", children: [_jsx("p", { className: "timeline-year", children: milestone.year }), _jsx("h3", { children: milestone.title }), _jsx("p", { children: milestone.note })] }, milestone.year))) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Strategic Contact" }), _jsx("h2", { children: "Discuss alliance, policy, or deployment pathways." }), _jsx("p", { children: "Connect with the NOXIS team to align mission objectives with tiered implementation." })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: "Contact Strategic Team" })] }) })] }));
}
