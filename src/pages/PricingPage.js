import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { tiers } from "../content/siteData";
const pricingBands = [
    {
        name: "Command Core",
        target: "For institutional teams launching Tier A + Tier B",
        includes: [
            "Narrative intelligence workspace",
            "Realtime camera operations board",
            "Baseline governance and receipt trail",
        ],
    },
    {
        name: "Sovereign Operations",
        target: "For national and multi-agency command centers",
        includes: [
            "Full Tier A/B/C orchestration",
            "Advanced geospatial and drone relay",
            "Cross-domain escalation playbooks",
        ],
    },
    {
        name: "Custom Strategic Program",
        target: "For mission-specific high-complexity deployments",
        includes: [
            "Jurisdiction-tailored governance model",
            "Dedicated operator training and simulation",
            "Long-horizon alliance and rollout support",
        ],
    },
];
export default function PricingPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-pricing", id: "contact", children: _jsxs("div", { className: "container pricing-hero-grid", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Pricing" }), _jsx("h1", { className: "display-title", children: "Build your NOXIS deployment model" }), _jsx("p", { className: "hero-copy", children: "Configure pricing based on active tiers, command coverage, data residency requirements, and oversight obligations." }), _jsx("div", { className: "pill-grid compact", children: tiers.map((tier) => (_jsx("span", { className: "line-pill", children: tier.name }, tier.id))) })] }), _jsxs("form", { className: "contact-form", onSubmit: (event) => event.preventDefault(), children: [_jsxs("div", { className: "contact-form__row", children: [_jsx("input", { placeholder: "First name*", required: true }), _jsx("input", { placeholder: "Last name*", required: true })] }), _jsx("input", { placeholder: "Work email address*", type: "email", required: true }), _jsx("input", { placeholder: "Organization*", required: true }), _jsx("input", { placeholder: "Country / jurisdiction" }), _jsx("textarea", { rows: 4, placeholder: "Tell us your tier scope, use-case, and deployment timeline" }), _jsxs("label", { className: "checkbox-row", children: [_jsx("input", { type: "checkbox", required: true }), _jsx("span", { children: "I confirm this request is for legitimate institutional or mission-authorized use." })] }), _jsx("button", { type: "submit", className: "pill-cta", children: "Request Pricing Brief" })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Packaging" }), _jsx("h2", { className: "section-title", children: "Deployment bands" })] }), _jsx("div", { className: "case-grid", children: pricingBands.map((band) => (_jsxs("article", { className: "case-card", children: [_jsx("h3", { children: band.name }), _jsx("p", { className: "role-label", children: band.target }), _jsx("ul", { children: band.includes.map((item) => (_jsx("li", { children: item }, item))) })] }, band.name))) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "module-card", children: [_jsx("h3", { children: "What affects pricing" }), _jsxs("ul", { children: [_jsx("li", { children: "Tier combination and mission-criticality" }), _jsx("li", { children: "Realtime stream volume and command concurrency" }), _jsx("li", { children: "Retention, audit window, and legal trace depth" }), _jsx("li", { children: "Integration scope with existing VMS and UAV systems" }), _jsx("li", { children: "Operator training and simulation requirements" })] })] }), _jsxs("article", { className: "module-card", children: [_jsx("h3", { children: "Delivery model" }), _jsxs("ul", { children: [_jsx("li", { children: "On-prem sovereign infrastructure" }), _jsx("li", { children: "Hybrid sovereign-cloud topology" }), _jsx("li", { children: "Mission rehearsal and readiness program" }), _jsx("li", { children: "Dedicated governance advisory lane" }), _jsx("li", { children: "Operational review cadence and support window" })] })] })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Need more context first?" }), _jsx("h2", { children: "Review platform and solutions before commercial scoping." }), _jsx("p", { children: "We recommend aligning your tier model before final pricing workshop." })] }), _jsx("a", { href: "/platform", className: "ghost-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/platform");
                            }, children: "Review Platform" })] }) })] }));
}
