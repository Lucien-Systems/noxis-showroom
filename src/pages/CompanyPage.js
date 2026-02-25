import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { companyMilestones } from "../content/siteData";
const leadership = [
    {
        name: "Adam Karl Lucien",
        role: "Chief Architect, NOXIS",
        brief: "Designs the tiered intelligence architecture and governance doctrine for institutional deployments.",
    },
    {
        name: "Strategic Operations Cell",
        role: "Mission Planning Unit",
        brief: "Builds cross-tier playbooks for narrative escalation, surveillance response, and ISR coordination.",
    },
    {
        name: "Oversight and Legal Team",
        role: "Governance Authority",
        brief: "Ensures mandate compliance, access accountability, and audit readiness across active operations.",
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
export default function CompanyPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-company", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Company" }), _jsx("h1", { className: "display-title", children: "Protectors of Narrative and Operational Integrity" }), _jsx("p", { className: "hero-copy", children: "NOXIS exists to help institutions operate under pressure with stronger information integrity, faster situational awareness, and accountable decision authority." })] }), _jsx("div", { className: "hero-visual", "aria-hidden": "true", children: _jsx("img", { src: "/assets/noxis-hero.png", alt: "" }) })] }) }), _jsx("section", { id: "governance", className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { children: [_jsx("h2", { className: "section-title", children: "Mission and governance stance" }), _jsx("p", { children: "We build sovereign intelligence systems for environments where narrative pressure, surveillance demands, and operational risk converge. Every NOXIS deployment is designed for high-control institutions requiring legal-grade oversight and traceability." }), _jsx("p", { children: "Our architecture supports both national command structures and critical infrastructure operators under formal governance protocols." })] }), _jsxs("article", { className: "module-card", children: [_jsx("h3", { children: "Governance controls" }), _jsx("ul", { children: governancePoints.map((point) => (_jsx("li", { children: point }, point))) })] })] }) }), _jsx("section", { id: "leadership", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Leadership" }), _jsx("h2", { className: "section-title", children: "Mission team built for high-accountability operations" })] }), _jsx("div", { className: "case-grid", children: leadership.map((person) => (_jsxs("article", { className: "case-card", children: [_jsx("h3", { children: person.name }), _jsx("p", { className: "role-label", children: person.role }), _jsx("p", { children: person.brief })] }, person.name))) })] }) }), _jsx("section", { id: "alliances", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Alliance Framework" }), _jsx("h2", { className: "section-title", children: "Partnerships across policy, security, and infrastructure domains" })] }), _jsxs("div", { className: "pill-grid", children: [_jsx("span", { className: "line-pill", children: "National command partners" }), _jsx("span", { className: "line-pill", children: "Critical infrastructure agencies" }), _jsx("span", { className: "line-pill", children: "Cyber and threat intelligence networks" }), _jsx("span", { className: "line-pill", children: "Emergency response authorities" }), _jsx("span", { className: "line-pill", children: "Public communication and media risk units" }), _jsx("span", { className: "line-pill", children: "Judicial and compliance oversight bodies" })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Timeline" }), _jsx("h2", { className: "section-title", children: "NOXIS evolution" })] }), _jsx("div", { className: "timeline-grid", children: companyMilestones.map((milestone) => (_jsxs("article", { className: "timeline-card", children: [_jsx("p", { className: "timeline-year", children: milestone.year }), _jsx("h3", { children: milestone.title }), _jsx("p", { children: milestone.note })] }, milestone.year))) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Strategic Contact" }), _jsx("h2", { children: "Discuss alliance, policy, or deployment pathways." }), _jsx("p", { children: "Connect with the NOXIS team to align mission objectives with tiered implementation." })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: "Contact Strategic Team" })] }) })] }));
}
