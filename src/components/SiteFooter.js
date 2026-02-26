import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpenText, Building2, Send, Shield } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
function FooterLink({ label, path, onNavigate }) {
    return (_jsx("a", { href: path, className: "footer-link", onClick: (event) => {
            event.preventDefault();
            onNavigate(path);
        }, children: label }));
}
export default function SiteFooter({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            newsletterTitle: "Odebírejte operační aktualizace",
            newsletterText: "Získejte přehledy o nasazení, threat briefy a metodické poznámky z praxe.",
            newsletterPlaceholder: "Pracovní e-mail",
            subscribe: "Odebírat",
            platformLinks: [
                { label: "Constellation Command Grid", path: "/platform" },
                { label: "Realtime Vision Core", path: "/platform#vision" },
                { label: "Narrative Risk Engine", path: "/platform#narrative" },
                { label: "Aerial ISR Fabric", path: "/platform#aerial" },
            ],
            companyLinks: [
                { label: "Mise a dohled", path: "/company" },
                { label: "Aliance", path: "/company#alliances" },
                { label: "Vedení", path: "/company#leadership" },
                { label: "Kontakt", path: "/pricing#contact" },
            ],
            learnLinks: [
                { label: "LAB reporty", path: "/lab" },
                { label: "Architektura vrstev", path: "/platform#tiers" },
                { label: "Matice scénářů", path: "/solutions#use-cases" },
                { label: "Governance model", path: "/company#governance" },
            ],
            colPlatform: "Platforma",
            colCompany: "Společnost",
            colLearn: "Zdroje",
            matrixTier: "Tier stack",
            matrixIndustry: "Odvětví",
            matrixRole: "Role",
            matrixUseCases: "Scénáře",
            copyright: "© 2026 NOXIS // Suverénní zpravodajské operace.",
            signoff: "Postaveno pro mandatované nasazení a dohledatelné rozhodování.",
        }
        : {
            newsletterTitle: "Subscribe to Mission Updates",
            newsletterText: "Receive deployment notes, threat briefs, and operational methodology updates.",
            newsletterPlaceholder: "Work email address",
            subscribe: "Subscribe",
            platformLinks: [
                { label: "Constellation Command Grid", path: "/platform" },
                { label: "Realtime Vision Core", path: "/platform#vision" },
                { label: "Narrative Risk Engine", path: "/platform#narrative" },
                { label: "Aerial ISR Fabric", path: "/platform#aerial" },
            ],
            companyLinks: [
                { label: "Mission and Oversight", path: "/company" },
                { label: "Alliances", path: "/company#alliances" },
                { label: "Leadership", path: "/company#leadership" },
                { label: "Contact", path: "/pricing#contact" },
            ],
            learnLinks: [
                { label: "LAB Reports", path: "/lab" },
                { label: "Tier Architecture", path: "/platform#tiers" },
                { label: "Use Case Matrix", path: "/solutions#use-cases" },
                { label: "Governance Model", path: "/company#governance" },
            ],
            colPlatform: "Platform",
            colCompany: "Company",
            colLearn: "Learn",
            matrixTier: "Tier Stack",
            matrixIndustry: "Industries",
            matrixRole: "Roles",
            matrixUseCases: "Use Cases",
            copyright: "© 2026 NOXIS // Sovereign intelligence operations.",
            signoff: "Built for mandate-based deployment and accountable oversight.",
        };
    return (_jsx("footer", { className: "site-footer", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "site-footer__top", children: [_jsxs("div", { className: "newsletter-card", children: [_jsx("h3", { children: copy.newsletterTitle }), _jsx("p", { children: copy.newsletterText }), _jsxs("form", { className: "newsletter-form", onSubmit: (event) => {
                                        event.preventDefault();
                                    }, children: [_jsx("input", { type: "email", placeholder: copy.newsletterPlaceholder, "aria-label": copy.newsletterPlaceholder, required: true }), _jsx("button", { type: "submit", className: "pill-cta", children: copy.subscribe })] })] }), _jsxs("div", { className: "footer-columns", children: [_jsxs("div", { children: [_jsxs("h4", { className: "footer-heading", children: [_jsx(Building2, { size: 14, "aria-hidden": "true" }), copy.colPlatform] }), _jsx("div", { className: "footer-list", children: copy.platformLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] }), _jsxs("div", { children: [_jsxs("h4", { className: "footer-heading", children: [_jsx(Shield, { size: 14, "aria-hidden": "true" }), copy.colCompany] }), _jsx("div", { className: "footer-list", children: copy.companyLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] }), _jsxs("div", { children: [_jsxs("h4", { className: "footer-heading", children: [_jsx(BookOpenText, { size: 14, "aria-hidden": "true" }), copy.colLearn] }), _jsx("div", { className: "footer-list", children: copy.learnLinks.map((link) => (_jsx(FooterLink, { label: link.label, path: link.path, onNavigate: onNavigate }, link.path))) })] })] })] }), _jsxs("div", { className: "site-footer__matrix", children: [_jsxs("article", { children: [_jsx("h5", { children: copy.matrixTier }), _jsx("ul", { children: data.tiers.map((tier) => (_jsx("li", { children: tier.name }, tier.id))) })] }), _jsxs("article", { children: [_jsx("h5", { children: copy.matrixIndustry }), _jsx("ul", { children: data.industries.map((entry) => (_jsx("li", { children: entry }, entry))) })] }), _jsxs("article", { children: [_jsx("h5", { children: copy.matrixRole }), _jsx("ul", { children: data.roles.map((entry) => (_jsx("li", { children: entry }, entry))) })] }), _jsxs("article", { children: [_jsx("h5", { children: copy.matrixUseCases }), _jsx("ul", { children: data.useCases.map((entry) => (_jsx("li", { children: entry.title }, entry.title))) })] })] }), _jsxs("div", { className: "site-footer__bottom", children: [_jsx("span", { children: copy.copyright }), _jsxs("span", { className: "footer-signoff", children: [_jsx(Send, { size: 13, "aria-hidden": "true" }), copy.signoff] })] })] }) }));
}
