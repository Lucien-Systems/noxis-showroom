import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Calculator, CheckCircle2, Globe, Layers3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
export default function PricingPage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "Ceník",
            title: "Sestavte model nasazení NOXIS",
            hero: "Cenový návrh nastavujeme podle aktivních vrstev, rozsahu velení, požadavků na data residency a governance pravidel.",
            heroSignals: ["Rozsah podle tierů", "Úprava podle objemu streamů", "Soulad s právním rámcem"],
            heroAria: "Cenové indikátory",
            formTitle: "Vyžádat komerční briefing",
            firstName: "Jméno*",
            lastName: "Příjmení*",
            email: "Pracovní e-mail*",
            org: "Organizace*",
            country: "Země / jurisdikce",
            notes: "Popište rozsah tierů, use-case a plán nasazení",
            consent: "Potvrzuji, že poptávka je určena pro legitimní institucionální nebo schválené operační použití.",
            submit: "Vyžádat cenový návrh",
            bandsKicker: "Balíčky",
            bandsTitle: "Modely nasazení",
            factorsTitle: "Co ovlivňuje cenu",
            deliveryTitle: "Model dodání",
            ctaKicker: "Nejdřív potřebujete víc kontextu?",
            ctaTitle: "Než uzavřeme komerční scope, projděte platformu a řešení.",
            ctaText: "Doporučujeme nejdřív sladit tier model a governance scénáře.",
            ctaButton: "Projít platformu",
            bands: [
                {
                    name: "Command Core",
                    target: "Pro instituce startující Tier A + Tier B",
                    includes: [
                        "Workspace pro narativní inteligenci",
                        "Operační panel pro živé kamery",
                        "Základní governance a receipt trail",
                    ],
                    icon: Layers3,
                },
                {
                    name: "Sovereign Operations",
                    target: "Pro národní a meziresortní velitelská centra",
                    includes: [
                        "Plná orchestrace Tier A/B/C",
                        "Pokročilý geospatial a dronový relay",
                        "Cross-domain eskalační playbooky",
                    ],
                    icon: Globe,
                },
                {
                    name: "Custom Strategic Program",
                    target: "Pro komplexní a mission-specific nasazení",
                    includes: [
                        "Governance model podle jurisdikce",
                        "Dedikovaný výcvik operátorů a simulace",
                        "Dlouhodobá podpora aliančního rolloutu",
                    ],
                    icon: Sparkles,
                },
            ],
            pricingFactors: [
                "Kombinace vrstev a kritičnost mise",
                "Objem streamů v reálném čase a paralelní provoz",
                "Retence dat, auditní okno a hloubka právní stopy",
                "Rozsah integrace s existujícími VMS/UAV systémy",
                "Požadavky na výcvik operátorů a simulace",
            ],
            deliveryModel: [
                "On-prem suverénní infrastruktura",
                "Hybridní sovereign-cloud topologie",
                "Program rehearsal a readiness",
                "Dedikovaná governance advisory linka",
                "Pravidelný operační review a support režim",
            ],
        }
        : {
            kicker: "Pricing",
            title: "Build your NOXIS deployment model",
            hero: "Configure pricing by active tiers, command coverage, data residency requirements, and oversight obligations.",
            heroSignals: ["Scope by active tiers", "Adjust by stream volume", "Align with legal controls"],
            heroAria: "Pricing indicators",
            formTitle: "Request commercial brief",
            firstName: "First name*",
            lastName: "Last name*",
            email: "Work email address*",
            org: "Organization*",
            country: "Country / jurisdiction",
            notes: "Tell us your tier scope, use-case, and deployment timeline",
            consent: "I confirm this request is for legitimate institutional or mission-authorized use.",
            submit: "Request Pricing Brief",
            bandsKicker: "Packaging",
            bandsTitle: "Deployment bands",
            factorsTitle: "What affects pricing",
            deliveryTitle: "Delivery model",
            ctaKicker: "Need more context first?",
            ctaTitle: "Review platform and solutions before commercial scoping.",
            ctaText: "We recommend aligning your tier model before final pricing workshop.",
            ctaButton: "Review Platform",
            bands: [
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
            ],
            pricingFactors: [
                "Tier combination and mission criticality",
                "Realtime stream volume and command concurrency",
                "Retention, audit window, and legal trace depth",
                "Integration scope with existing VMS and UAV systems",
                "Operator training and simulation requirements",
            ],
            deliveryModel: [
                "On-prem sovereign infrastructure",
                "Hybrid sovereign-cloud topology",
                "Mission rehearsal and readiness program",
                "Dedicated governance advisory lane",
                "Operational review cadence and support window",
            ],
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-pricing", id: "contact", children: _jsxs("div", { className: "container pricing-hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((signal) => (_jsxs("span", { className: "hero-kpi", children: [_jsx(Calculator, { size: 16, "aria-hidden": "true" }), signal] }, signal))) }), _jsx("div", { className: "pill-grid compact", children: data.tiers.map((tier) => (_jsxs("span", { className: "line-pill", children: [_jsx(Layers3, { size: 14, "aria-hidden": "true" }), tier.name] }, tier.id))) })] }), _jsxs("form", { className: "contact-form", onSubmit: (event) => event.preventDefault(), children: [_jsx("p", { className: "contact-form__title", children: copy.formTitle }), _jsxs("div", { className: "contact-form__row", children: [_jsx("input", { placeholder: copy.firstName, required: true }), _jsx("input", { placeholder: copy.lastName, required: true })] }), _jsx("input", { placeholder: copy.email, type: "email", required: true }), _jsx("input", { placeholder: copy.org, required: true }), _jsx("input", { placeholder: copy.country }), _jsx("textarea", { rows: 4, placeholder: copy.notes }), _jsxs("label", { className: "checkbox-row", children: [_jsx("input", { type: "checkbox", required: true }), _jsx("span", { children: copy.consent })] }), _jsx("button", { type: "submit", className: "pill-cta", children: copy.submit })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.bandsKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Layers3, { className: "section-icon", "aria-hidden": "true" }), copy.bandsTitle] })] }), _jsx("div", { className: "case-grid", children: copy.bands.map((band) => {
                                const Icon = band.icon;
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: band.target })] }), _jsx("h3", { children: band.name }), _jsx("ul", { children: band.includes.map((item) => (_jsx("li", { children: item }, item))) })] }, band.name));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(ShieldCheck, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.factorsTitle })] }), _jsx("ul", { children: copy.pricingFactors.map((item) => (_jsxs("li", { children: [_jsx(CheckCircle2, { size: 15, "aria-hidden": "true" }), item] }, item))) })] }), _jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(MapPinned, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.deliveryTitle })] }), _jsx("ul", { children: copy.deliveryModel.map((item) => (_jsxs("li", { children: [_jsx(CheckCircle2, { size: 15, "aria-hidden": "true" }), item] }, item))) })] })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.ctaKicker }), _jsx("h2", { children: copy.ctaTitle }), _jsx("p", { children: copy.ctaText })] }), _jsx("a", { href: "/platform", className: "ghost-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/platform");
                            }, children: copy.ctaButton })] }) })] }));
}
