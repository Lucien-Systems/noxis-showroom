import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Calculator, CheckCircle2, Globe, Layers3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
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
        icon: Layers3,
    },
    {
        name: "Sovereign Operations",
        target: "For national and multi-agency command centers",
        includes: [
            "Full Tier A/B/C orchestration",
            "Advanced geospatial and drone relay",
            "Cross-domain escalation playbooks",
        ],
        icon: Globe,
    },
    {
        name: "Custom Strategic Program",
        target: "For mission-specific high-complexity deployments",
        includes: [
            "Jurisdiction-tailored governance model",
            "Dedicated operator training and simulation",
            "Long-horizon alliance and rollout support",
        ],
        icon: Sparkles,
    },
];
const pricingSignals = [
    "Scope by active tiers",
    "Adjust by stream volume",
    "Align with legal controls",
];
const pricingFactors = [
    "Tier combination and mission criticality",
    "Realtime stream volume and command concurrency",
    "Retention, audit window, and legal trace depth",
    "Integration scope with existing VMS and UAV systems",
    "Operator training and simulation requirements",
];
const deliveryModel = [
    "On-prem sovereign infrastructure",
    "Hybrid sovereign-cloud topology",
    "Mission rehearsal and readiness program",
    "Dedicated governance advisory lane",
    "Operational review cadence and support window",
];
export default function PricingPage({ onNavigate }) {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-pricing", id: "contact", children: _jsxs("div", { className: "container pricing-hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: "Pricing" }), _jsx("h1", { className: "display-title", children: "Build your NOXIS deployment model" }), _jsx("p", { className: "hero-copy", children: "Configure pricing by active tiers, command coverage, data residency requirements, and oversight obligations." }), _jsx("div", { className: "hero-kpis", "aria-label": "Pricing indicators", children: pricingSignals.map((signal) => (_jsxs("span", { className: "hero-kpi", children: [_jsx(Calculator, { size: 16, "aria-hidden": "true" }), signal] }, signal))) }), _jsx("div", { className: "pill-grid compact", children: tiers.map((tier) => (_jsxs("span", { className: "line-pill", children: [_jsx(Layers3, { size: 14, "aria-hidden": "true" }), tier.name] }, tier.id))) })] }), _jsxs("form", { className: "contact-form", onSubmit: (event) => event.preventDefault(), children: [_jsx("p", { className: "contact-form__title", children: "Request commercial brief" }), _jsxs("div", { className: "contact-form__row", children: [_jsx("input", { placeholder: "First name*", required: true }), _jsx("input", { placeholder: "Last name*", required: true })] }), _jsx("input", { placeholder: "Work email address*", type: "email", required: true }), _jsx("input", { placeholder: "Organization*", required: true }), _jsx("input", { placeholder: "Country / jurisdiction" }), _jsx("textarea", { rows: 4, placeholder: "Tell us your tier scope, use-case, and deployment timeline" }), _jsxs("label", { className: "checkbox-row", children: [_jsx("input", { type: "checkbox", required: true }), _jsx("span", { children: "I confirm this request is for legitimate institutional or mission-authorized use." })] }), _jsx("button", { type: "submit", className: "pill-cta", children: "Request Pricing Brief" })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: "Packaging" }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Layers3, { className: "section-icon", "aria-hidden": "true" }), "Deployment bands"] })] }), _jsx("div", { className: "case-grid", children: pricingBands.map((band) => {
                                const Icon = band.icon;
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: band.target })] }), _jsx("h3", { children: band.name }), _jsx("ul", { children: band.includes.map((item) => (_jsx("li", { children: item }, item))) })] }, band.name));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(ShieldCheck, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: "What affects pricing" })] }), _jsx("ul", { children: pricingFactors.map((item) => (_jsxs("li", { children: [_jsx(CheckCircle2, { size: 15, "aria-hidden": "true" }), item] }, item))) })] }), _jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(MapPinned, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: "Delivery model" })] }), _jsx("ul", { children: deliveryModel.map((item) => (_jsxs("li", { children: [_jsx(CheckCircle2, { size: 15, "aria-hidden": "true" }), item] }, item))) })] })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: "Need more context first?" }), _jsx("h2", { children: "Review platform and solutions before commercial scoping." }), _jsx("p", { children: "We recommend aligning your tier model before final pricing workshop." })] }), _jsx("a", { href: "/platform", className: "ghost-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/platform");
                            }, children: "Review Platform" })] }) })] }));
}
