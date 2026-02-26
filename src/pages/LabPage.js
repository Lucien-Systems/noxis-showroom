import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Camera, FileText, FlaskConical, Orbit, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
const reportIcons = [Radar, Camera, Orbit, ShieldCheck];
export default function LabPage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "LAB / Výzkum a zpravodajské poznámky",
            title: "Operační zpravodajské reporty pro vysoce riziková prostředí",
            hero: "NOXIS LAB publikuje metodické poznámky, benchmark reporty a strategické briefy z narativní, kamerové i letecké domény.",
            heroSignals: ["Narativní inteligence", "Kamerové benchmarky", "Metodika ISR"],
            heroAria: "Výstupy laboratoře",
            visualTop: "Výzkum opřený o provoz",
            visualBottom: "Poznámky pro rozhodování",
            stats: [
                { value: "48 h", label: "Typický cyklus analýzy alertu" },
                { value: "3", label: "Hlavní výzkumné stopy" },
                { value: "Týdně", label: "Metodické a benchmark aktualizace" },
            ],
            reportsKicker: "Vybrané reporty",
            reportsTitle: "Nejnovější zpravodajské publikace",
            ctaReport: "Vyžádat plný briefing",
            tracksTitle: "Výzkumné stopy",
            modesTitle: "Formáty publikací",
            tracks: [
                "Inteligence vzorců narativních útoků",
                "Spolehlivost a latence kamerových pipeline",
                "Kontinuita dronového ISR a geospatial korelace",
                "Oversight, právní dohledatelnost a institucionální governance",
            ],
            modes: ["Executive threat brief", "Metodická poznámka pro operátory", "Systémový benchmark update", "Red-team observační memo"],
            cellKicker: "RAV3N Cell",
            cellTitle: "Potřebujete vlastní zpravodajský report pro svůj mission profil?",
            cellText: "Analytický tým připraví cílené briefingy pro policy, bezpečnostní i velitelské role.",
            cellButton: "Vyžádat vlastní report",
        }
        : {
            kicker: "LAB / Research and Intelligence Notes",
            title: "Operational intelligence reports for high-risk environments",
            hero: "NOXIS LAB publishes method notes, benchmark reports, and strategic briefs from narrative, vision, and aerial operations.",
            heroSignals: ["Narrative intelligence", "Vision benchmarks", "ISR method notes"],
            heroAria: "Lab output",
            visualTop: "Research-backed Operations",
            visualBottom: "Decision-grade Intelligence Notes",
            stats: [
                { value: "48h", label: "Typical alert cycle analysis" },
                { value: "3", label: "Research tracks" },
                { value: "Weekly", label: "Method and benchmark updates" },
            ],
            reportsKicker: "Featured Reports",
            reportsTitle: "Latest intelligence publications",
            ctaReport: "Request Full Brief",
            tracksTitle: "Research tracks",
            modesTitle: "Publication modes",
            tracks: [
                "Narrative attack pattern intelligence",
                "Vision pipeline reliability and latency",
                "Drone ISR continuity and geospatial correlation",
                "Oversight, legal traceability, and institutional governance",
            ],
            modes: ["Executive threat brief", "Operator methodology note", "System benchmark update", "Red-team observation memo"],
            cellKicker: "RAV3N Cell",
            cellTitle: "Need a custom intelligence report for your mission profile?",
            cellText: "Our analysts can produce targeted briefings for policy, security, and command teams.",
            cellButton: "Request Custom Report",
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-lab", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((label, index) => {
                                        const Icon = [Radar, Camera, Orbit][index] ?? Radar;
                                        return (_jsxs("span", { className: "hero-kpi", children: [_jsx(Icon, { size: 16, "aria-hidden": "true" }), label] }, label));
                                    }) })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: copy.visualTop }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: copy.visualBottom })] })] }) }), _jsx("section", { className: "section-block section-dark stats-band", children: _jsx("div", { className: "container stats-grid", children: copy.stats.map((stat) => (_jsxs("article", { children: [_jsx("p", { className: "stat-value", children: stat.value }), _jsx("p", { className: "stat-label", children: stat.label })] }, stat.label))) }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.reportsKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(FlaskConical, { className: "section-icon", "aria-hidden": "true" }), copy.reportsTitle] })] }), _jsx("div", { className: "case-grid", children: data.labReports.map((report, index) => {
                                const Icon = reportIcons[index] ?? FileText;
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: report.category })] }), _jsx("h3", { children: report.title }), _jsx("p", { children: report.excerpt }), _jsx("a", { href: "/pricing#contact", className: "ghost-cta", onClick: (event) => {
                                                event.preventDefault();
                                                onNavigate("/pricing#contact");
                                            }, children: copy.ctaReport })] }, report.title));
                            }) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Radar, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.tracksTitle })] }), _jsx("ul", { children: copy.tracks.map((item) => (_jsx("li", { children: item }, item))) })] }), _jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Sparkles, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.modesTitle })] }), _jsx("ul", { children: copy.modes.map((item) => (_jsx("li", { children: item }, item))) })] })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.cellKicker }), _jsx("h2", { children: copy.cellTitle }), _jsx("p", { children: copy.cellText })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: copy.cellButton })] }) })] }));
}
