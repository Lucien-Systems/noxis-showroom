import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from "react";
import { AlertTriangle, BriefcaseBusiness, Building2, Radar, ShieldCheck, Sparkles, UserRound, Waypoints, } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
const useCaseIcons = [ShieldCheck, AlertTriangle, Waypoints, Radar];
export default function SolutionsPage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "Řešení",
            title: "Chraňte instituce před narativními, vizuálními i leteckými hrozbami",
            hero: "NOXIS nabízí konfigurovatelná řešení podle scénáře, sektoru a role v řízení krizí napříč informační i fyzickou doménou.",
            heroSignals: ["Rychlejší incident triáž", "Korelace napříč doménami", "Připravenost na governance"],
            heroAria: "Výstupy řešení",
            visualTop: "Řízeno scénářem",
            visualBottom: "Výstupy navázané na tier",
            useCaseTitle: "Řešení podle scénáře",
            industryTitle: "Řešení podle odvětví",
            roleTitle: "Řešení podle role",
            scenarioEyebrow: "Mise",
            matrixKicker: "Matice scénářů a vrstev",
            matrixTitle: "Jak spolupracují tři vrstvy při živých operacích",
            matrixHeaderScenario: "Scénář",
            ctaKicker: "Návrh řešení",
            ctaTitle: "Potřebujete konfiguraci vrstvy pro konkrétní misi?",
            ctaText: "Připravíme návrh nasazení podle jurisdikce, velitelského modelu a profilu hrozeb.",
            ctaButton: "Prověřit vhodnost řešení",
            scenarioMatrix: [
                {
                    scenario: "Ochrana volebního informačního prostoru",
                    tierA: "Detekce kampaní a containment narativů",
                    tierB: "Eskalace hotspotů z kamer v reálném čase",
                    tierC: "Letecký monitoring klíčových zón",
                },
                {
                    scenario: "Koordinované civilní narušení",
                    tierA: "Analýza vlivových clusterů a spouštěčů",
                    tierB: "Městská kamerová fúze a relay incidentů",
                    tierC: "Dronový perimetr a viditelnost tras",
                },
                {
                    scenario: "Tlak na kritickou infrastrukturu",
                    tierA: "Sledování narativního tlaku na operátory",
                    tierB: "Korelace anomálií z provozních kamer",
                    tierC: "Inspekce koridorů z dronů a potvrzení hrozeb",
                },
                {
                    scenario: "Přeshraniční hybridní operace",
                    tierA: "Mapování propagandy a řetězců aktérů",
                    tierB: "Orchestrace dohledu na vstupních bodech",
                    tierC: "UAV kontinuita geospatial událostí",
                },
            ],
        }
        : {
            kicker: "Solutions",
            title: "Protect institutions from narrative, visual, and aerial threats",
            hero: "NOXIS provides configurable solutions by scenario, sector, and command role across information and physical domains.",
            heroSignals: ["Faster incident triage", "Multi-domain correlation", "Mandate-ready governance"],
            heroAria: "Solution outcomes",
            visualTop: "Use-case Driven",
            visualBottom: "Tier-aligned Outcomes",
            useCaseTitle: "Solutions by Use Case",
            industryTitle: "Solutions by Industry",
            roleTitle: "Solutions by Role",
            scenarioEyebrow: "Mission scenario",
            matrixKicker: "Tier-to-Scenario Matrix",
            matrixTitle: "How the three layers operate together in live conditions",
            matrixHeaderScenario: "Scenario",
            ctaKicker: "Solution Design",
            ctaTitle: "Need a mission-specific tier configuration?",
            ctaText: "We build deployment blueprints by jurisdiction, command model, and threat profile.",
            ctaButton: "Explore Solution Fit",
            scenarioMatrix: [
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
            ],
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-solutions", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((label, index) => {
                                        const Icon = [ShieldCheck, Radar, Sparkles][index] ?? ShieldCheck;
                                        return (_jsxs("span", { className: "hero-kpi", children: [_jsx(Icon, { size: 16, "aria-hidden": "true" }), label] }, label));
                                    }) })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: copy.visualTop }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: copy.visualBottom })] })] }) }), _jsx("section", { id: "use-cases", className: "section-block section-dark", children: _jsxs("div", { className: "container section-3col", children: [_jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(BriefcaseBusiness, { className: "section-icon", "aria-hidden": "true" }), copy.useCaseTitle] }), _jsx("div", { className: "link-stack", children: data.useCases.map((entry, index) => {
                                        const Icon = useCaseIcons[index % useCaseIcons.length];
                                        return (_jsxs("div", { className: "link-stack__item", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.scenarioEyebrow })] }), _jsx("h3", { children: entry.title }), _jsx("p", { children: entry.detail })] }, entry.title));
                                    }) })] }), _jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Building2, { className: "section-icon", "aria-hidden": "true" }), copy.industryTitle] }), _jsx("div", { className: "pill-grid", children: data.industries.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(Building2, { size: 14, "aria-hidden": "true" }), item] }, item))) })] }), _jsxs("article", { className: "content-panel", children: [_jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(UserRound, { className: "section-icon", "aria-hidden": "true" }), copy.roleTitle] }), _jsx("div", { className: "pill-grid", children: data.roles.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(UserRound, { size: 14, "aria-hidden": "true" }), item] }, item))) })] })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.matrixKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Waypoints, { className: "section-icon", "aria-hidden": "true" }), copy.matrixTitle] })] }), _jsx("div", { className: "matrix-wrap", children: _jsxs("div", { className: "matrix-table", children: [_jsx("div", { className: "matrix-head", children: copy.matrixHeaderScenario }), _jsx("div", { className: "matrix-head", children: data.tiers[0].name }), _jsx("div", { className: "matrix-head", children: data.tiers[1].name }), _jsx("div", { className: "matrix-head", children: data.tiers[2].name }), copy.scenarioMatrix.map((row) => (_jsxs(Fragment, { children: [_jsx("div", { className: "matrix-cell matrix-cell--scenario", children: row.scenario }), _jsx("div", { className: "matrix-cell", children: row.tierA }), _jsx("div", { className: "matrix-cell", children: row.tierB }), _jsx("div", { className: "matrix-cell", children: row.tierC })] }, row.scenario)))] }) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.ctaKicker }), _jsx("h2", { children: copy.ctaTitle }), _jsx("p", { children: copy.ctaText })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: copy.ctaButton })] }) })] }));
}
