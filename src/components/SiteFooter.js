import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { industries, roles, tiers, useCases } from "../content/siteData";
const platformLinks = [
    { label: "Constellation Command Grid", path: "/platform" },
    { label: "Realtime Vision Core", path: "/platform#vision" },
    { label: "Narrative Risk Engine", path: "/platform#narrative" },
    { label: "Aerial ISR Fabric", path: "/platform#aerial" },
];
const companyLinks = [
    { label: "Mission and Oversight", path: "/company" },
    { label: "Alliances", path: "/company#alliances" },
    { label: "Leadership", path: "/company#leadership" },
    { label: "Contact", path: "/pricing#contact" },
];
const learnLinks = [
    { label: "LAB Reports", path: "/lab" },
    { label: "Tier Architecture", path: "/platform#tiers" },
    { label: "Use Case Matrix", path: "/solutions#use-cases" },
    { label: "Governance Model", path: "/company#governance" },
];
function FooterLink({ label, path, onNavigate }) {
    return (_jsx("a", { href: path, className: "footer-link", onClick: (event) => {
            event.preventDefault();
            onNavigate(path);
        }, children: label }));
}
export default function SiteFooter({ onNavigate }) {
    return (_jsx("footer", { className: "site-footer", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "site-footer__top", children: [_jsxs("div", { className: "newsletter-card", children: [_jsx("h3", { children: "Subscribe to Mission Updates" }), _jsx("p", { children: "Receive deployment notes, threat briefs, and operational methodology updates." }), _jsxs("form", { className: "newsletter-form", onSubmit: (event) => {
                                        event.preventDefault();
                                    }, children: [_jsx("input", { type: "email", placeholder: "Work email address", "aria-label": "Work email address", required: true }), _jsx("button", { type: "submit", className: "pill-cta", children: "Subscribe" })] })] }), _jsxs("div", { className: "footer-columns", children: [_jsxs("div", { children: [_jsx("h4", { children: "Platform" }), _jsx("div", { className: "footer-list", children: platformLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] }), _jsxs("div", { children: [_jsx("h4", { children: "Company" }), _jsx("div", { className: "footer-list", children: companyLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] }), _jsxs("div", { children: [_jsx("h4", { children: "Learn" }), _jsx("div", { className: "footer-list", children: learnLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] })] })] }), _jsxs("div", { className: "site-footer__matrix", children: [_jsxs("article", { children: [_jsx("h5", { children: "Tier Stack" }), _jsx("ul", { children: tiers.map((tier) => (_jsx("li", { children: tier.name }, tier.id))) })] }), _jsxs("article", { children: [_jsx("h5", { children: "Industries" }), _jsx("ul", { children: industries.map((entry) => (_jsx("li", { children: entry }, entry))) })] }), _jsxs("article", { children: [_jsx("h5", { children: "Roles" }), _jsx("ul", { children: roles.map((entry) => (_jsx("li", { children: entry }, entry))) })] }), _jsxs("article", { children: [_jsx("h5", { children: "Use Cases" }), _jsx("ul", { children: useCases.map((entry) => (_jsx("li", { children: entry.title }, entry.title))) })] })] }), _jsxs("div", { className: "site-footer__bottom", children: [_jsx("span", { children: "\u00A9 2026 NOXIS // Sovereign intelligence operations." }), _jsx("span", { children: "Built for mandate-based deployment and accountable oversight." })] })] }) }));
}
