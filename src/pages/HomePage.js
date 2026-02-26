import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BookCheck, Camera, ChartSpline, Orbit, Radar, ShieldAlert, Waypoints, Workflow, } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
const tierIcons = {
    "tier-a": ShieldAlert,
    "tier-b": Camera,
    "tier-c": Orbit,
};
const moduleIcons = [Workflow, Camera, ChartSpline, Orbit, BookCheck, Waypoints];
const caseIcons = [ShieldAlert, Camera, Orbit, Waypoints];
export default function HomePage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "NOXIS / Vícevrstvá strategická dohledová platforma",
            title: "Poznejte mapu hrozeb",
            hero: "NOXIS propojuje narativní inteligenci, provoz kamer v reálném čase a dronové ISR do jednoho odpovědného velitelského stacku.",
            heroSignals: ["Graf narativů", "Kamery v reálném čase", "Dronové ISR"],
            ctaPrimary: "Domluvit demo",
            ctaSecondary: "Prozkoumat platformu",
            visualTop: "Vrstvené velení",
            visualBottom: "Práva a dohled od návrhu",
            trustedKicker: "Důvěryhodná síť",
            trustedTitle: "Instituce s kritickou odpovědností",
            tierKicker: "Architektura vrstev",
            tierTitle: "Jedno velitelské rozhraní, tři operační vrstvy",
            modulesKicker: "Klíčové moduly",
            modulesTitle: "Komponenty připravené pro provoz ve vysoce rizikovém prostředí",
            moduleEyebrow: "Modul",
            useCasesKicker: "Scénáře použití",
            useCasesTitle: "Navrženo pro informační konflikt, městskou bezpečnost a ISR kontinuitu",
            scenarioEyebrow: "Scénář",
            ctaKicker: "Velitelský briefing",
            ctaTitle: "Nasazení NOXIS jako suverénní zpravodajské páteře",
            ctaText: "Nastavte narativní, kamerovou i dronovou vrstvu s governance pravidly podle mandátu.",
            ctaButton: "Zahájit briefing",
            heroAria: "Klíčové schopnosti",
        }
        : {
            kicker: "NOXIS / Tiered Strategic Surveillance Platform",
            title: "Know the Threat Surface",
            hero: "NOXIS combines narrative intelligence, realtime camera operations, and drone ISR into one accountable command stack.",
            heroSignals: ["Narrative graph", "Realtime camera", "Drone ISR"],
            ctaPrimary: "Book a Demo",
            ctaSecondary: "Explore Platform",
            visualTop: "Tiered Command",
            visualBottom: "Rights and Oversight by Design",
            trustedKicker: "Trusted Network",
            trustedTitle: "Mission-critical organizations",
            tierKicker: "Tier Architecture",
            tierTitle: "One command surface, three operational layers",
            modulesKicker: "Core Modules",
            modulesTitle: "Constellation-grade components for high-risk operations",
            moduleEyebrow: "Module",
            useCasesKicker: "Use Cases",
            useCasesTitle: "Built for narrative conflict, urban security, and ISR continuity",
            scenarioEyebrow: "Scenario",
            ctaKicker: "Command Briefing",
            ctaTitle: "Deploy NOXIS as a sovereign intelligence backbone.",
            ctaText: "Configure narrative, camera, and drone layers with mandate-specific governance controls.",
            ctaButton: "Start Briefing",
            heroAria: "Core capabilities",
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-home", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((label, index) => {
                                        const Icon = [Radar, Camera, Orbit][index] ?? Radar;
                                        return (_jsxs("span", { className: "hero-kpi", children: [_jsx(Icon, { size: 16, "aria-hidden": "true" }), label] }, label));
                                    }) }), _jsxs("div", { className: "hero-actions", children: [_jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                                event.preventDefault();
                                                onNavigate("/pricing#contact");
                                            }, children: copy.ctaPrimary }), _jsx("a", { href: "/platform", className: "ghost-cta", onClick: (event) => {
                                                event.preventDefault();
                                                onNavigate("/platform");
                                            }, children: copy.ctaSecondary })] })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: copy.visualTop }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: copy.visualBottom })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.trustedKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Radar, { className: "section-icon", "aria-hidden": "true" }), copy.trustedTitle] })] }), _jsx("div", { className: "logo-grid", children: data.trustLogos.map((logo) => (_jsxs("div", { className: "logo-cell", children: [_jsx("span", { className: "logo-cell__dot", "aria-hidden": "true" }), logo] }, logo))) })] }) }), _jsx("section", { id: "tiers", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.tierKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Workflow, { className: "section-icon", "aria-hidden": "true" }), copy.tierTitle] })] }), _jsx("div", { className: "tier-grid", children: data.tiers.map((tier) => {
                                const Icon = tierIcons[tier.id] ?? ShieldAlert;
                                return (_jsxs("article", { className: "tier-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: tier.name })] }), _jsx("h3", { children: tier.tagline }), _jsx("p", { children: tier.description }), _jsx("ul", { children: tier.capabilities.map((capability) => (_jsx("li", { children: capability }, capability))) })] }, tier.id));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark stats-band", children: _jsx("div", { className: "container stats-grid", children: data.homepageStats.map((stat) => (_jsxs("article", { children: [_jsx("p", { className: "stat-value", children: stat.value }), _jsx("p", { className: "stat-label", children: stat.label })] }, stat.label))) }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.modulesKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(ChartSpline, { className: "section-icon", "aria-hidden": "true" }), copy.modulesTitle] })] }), _jsx("div", { className: "module-grid", children: data.platformModules.map((module, index) => {
                                const Icon = moduleIcons[index % moduleIcons.length];
                                return (_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.moduleEyebrow })] }), _jsx("h3", { children: module.title }), _jsx("p", { children: module.summary }), _jsx("ul", { children: module.bullets.map((bullet) => (_jsx("li", { children: bullet }, bullet))) })] }, module.title));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.useCasesKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Waypoints, { className: "section-icon", "aria-hidden": "true" }), copy.useCasesTitle] })] }), _jsx("div", { className: "case-grid", children: data.useCases.map((entry, index) => {
                                const Icon = caseIcons[index % caseIcons.length];
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.scenarioEyebrow })] }), _jsx("h3", { children: entry.title }), _jsx("p", { children: entry.detail })] }, entry.title));
                            }) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.ctaKicker }), _jsx("h2", { children: copy.ctaTitle }), _jsx("p", { children: copy.ctaText })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: copy.ctaButton })] }) })] }));
}
