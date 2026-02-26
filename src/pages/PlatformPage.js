import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Camera, CheckCircle2, Database, Fingerprint, Orbit, Radar, Shield, Workflow } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
const tierIcons = {
    "tier-a": Radar,
    "tier-b": Camera,
    "tier-c": Orbit,
};
const moduleIcons = [Workflow, Camera, Radar, Orbit, Fingerprint, Shield];
export default function PlatformPage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "Platforma",
            title: "Constellation: vícevrstvá zpravodajská platforma",
            hero: "Propojte kontext, koordinujte kamerové i letecké streamy a potlačte informační útoky v jednom rozhodovacím systému.",
            heroSignals: ["Detekce narativů", "Fúze živých kamer", "Relay dronové telemetrie"],
            visualTop: "Korelace napříč doménami",
            visualBottom: "Replay auditní stopy",
            tiersKicker: "Operační vrstvy",
            tiersTitle: "Tier model pro eskalaci podle mandátu",
            modulesKicker: "Modulární stack",
            modulesTitle: "Komponovatelné stavební bloky pro velitelská prostředí",
            moduleEyebrow: "Operační modul",
            loopKicker: "Operační smyčka",
            loopTitle: "Od ingestu po review ve čtyřech řízených krocích",
            loopSteps: [
                {
                    title: "Ingest",
                    detail: "Narativní, kamerové a letecké streamy vstupují přes policy-scoped brány.",
                    icon: Database,
                },
                {
                    title: "Korelace",
                    detail: "NOXIS propojuje aktéry, lokace a události napříč aktivními vrstvami.",
                    icon: Workflow,
                },
                {
                    title: "Rozhodnutí",
                    detail: "Týmy dostávají risk-scored výstupy s mandátovými pravidly přístupu.",
                    icon: CheckCircle2,
                },
                {
                    title: "Audit",
                    detail: "Každý zásah je zpětně dohledatelný pomocí kryptografického důkazu.",
                    icon: Fingerprint,
                },
            ],
            stepLabel: "Krok",
            ctaKicker: "Nasazení",
            ctaTitle: "Potřebujete architektonický briefing platformy?",
            ctaText: "Navrhneme tier model, velitelskou topologii a governance hranice.",
            ctaButton: "Vyžádat architektonický briefing",
            heroAria: "Hlavní schopnosti platformy",
        }
        : {
            kicker: "Platform",
            title: "Constellation Tiered Intelligence Platform",
            hero: "Illuminate context, coordinate camera and aerial streams, and neutralize narrative attacks through one decision fabric.",
            heroSignals: ["Narrative detection", "Live camera fusion", "Drone telemetry relay"],
            visualTop: "Cross-domain Correlation",
            visualBottom: "Replayable Audit Trail",
            tiersKicker: "Operational Layers",
            tiersTitle: "Tier model for mandate-based escalation",
            modulesKicker: "Module Stack",
            modulesTitle: "Composable building blocks for command environments",
            moduleEyebrow: "Operational Module",
            loopKicker: "Operational Loop",
            loopTitle: "From ingestion to review in four controlled steps",
            loopSteps: [
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
            ],
            stepLabel: "Step",
            ctaKicker: "Deployment",
            ctaTitle: "Need a platform architecture brief?",
            ctaText: "We can map your tier model, command topology, and governance boundaries.",
            ctaButton: "Request Architecture Brief",
            heroAria: "Platform highlights",
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-platform", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((label, index) => {
                                        const Icon = [Radar, Camera, Orbit][index] ?? Radar;
                                        return (_jsxs("span", { className: "hero-kpi", children: [_jsx(Icon, { size: 16, "aria-hidden": "true" }), label] }, label));
                                    }) })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: copy.visualTop }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: copy.visualBottom })] })] }) }), _jsx("section", { id: "tiers", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.tiersKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Workflow, { className: "section-icon", "aria-hidden": "true" }), copy.tiersTitle] })] }), _jsx("div", { className: "tier-grid", children: data.tiers.map((tier) => {
                                const Icon = tierIcons[tier.id] ?? Shield;
                                const anchorId = tier.id === "tier-b" ? "vision" : tier.id === "tier-a" ? "narrative" : "aerial";
                                return (_jsxs("article", { className: "tier-card", id: anchorId, children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: tier.name })] }), _jsx("h3", { children: tier.tagline }), _jsx("p", { children: tier.description }), _jsx("ul", { children: tier.capabilities.map((capability) => (_jsx("li", { children: capability }, capability))) })] }, tier.id));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.modulesKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Shield, { className: "section-icon", "aria-hidden": "true" }), copy.modulesTitle] })] }), _jsx("div", { className: "module-grid", children: data.platformModules.map((module, index) => {
                                const Icon = moduleIcons[index % moduleIcons.length];
                                return (_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.moduleEyebrow })] }), _jsx("h3", { children: module.title }), _jsx("p", { children: module.summary }), _jsx("ul", { children: module.bullets.map((bullet) => (_jsx("li", { children: bullet }, bullet))) })] }, module.title));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.loopKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Database, { className: "section-icon", "aria-hidden": "true" }), copy.loopTitle] })] }), _jsx("div", { className: "flow-grid", children: copy.loopSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (_jsxs("article", { className: "flow-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsxs("p", { className: "card-eyebrow", children: [copy.stepLabel, " ", index + 1] })] }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.detail })] }, step.title));
                            }) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.ctaKicker }), _jsx("h2", { children: copy.ctaTitle }), _jsx("p", { children: copy.ctaText })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: copy.ctaButton })] }) })] }));
}
