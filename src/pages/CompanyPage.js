import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Compass, Gavel, Handshake, ShieldCheck, Sparkles, Users, Waypoints } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";
export default function CompanyPage({ onNavigate }) {
    const { language } = useI18n();
    const data = getSiteData(language);
    const copy = language === "cs"
        ? {
            kicker: "Společnost",
            title: "Strážci informační a operační integrity",
            hero: "NOXIS pomáhá institucím fungovat pod tlakem s vyšší důvěryhodností informací, rychlejším situačním přehledem a jasnou odpovědností za rozhodnutí.",
            heroSignals: ["Governance na prvním místě", "Institucionální provoz", "Nasazení s vysokou odpovědností"],
            heroAria: "Postoj společnosti",
            visualTop: "Strategické aliance",
            visualBottom: "Policy + Operace + Právo",
            governanceKicker: "Governance",
            governanceTitle: "Mise a rámec odpovědnosti",
            governanceIntroA: "Stavíme suverénní zpravodajské systémy pro prostředí, kde se střetává informační tlak, požadavky dohledu a provozní riziko.",
            governanceIntroB: "Každé nasazení navrhujeme pro instituce, které vyžadují právně obhajitelný dohled, mandátové hranice a plnou dohledatelnost.",
            governanceListTitle: "Governance kontrolní prvky",
            governancePoints: [
                "Mandátové hranice přístupu a viditelnost podle rolí",
                "Průběžná odpovědnost operátorů a ledger zásahů",
                "Kryptografické receipts pro právně obhajitelný replay",
                "Pravidla minimalizace a retence dat podle jurisdikce",
                "Supervizní override řetězec pro kritické incidenty",
                "Red-team a syntetické rehearsal prostředí",
            ],
            leadershipKicker: "Vedení",
            leadershipTitle: "Tým postavený pro provoz s vysokou odpovědností",
            allianceKicker: "Aliance",
            allianceTitle: "Partnerství napříč policy, bezpečností a infrastrukturou",
            alliances: [
                "Národní velitelské instituce",
                "Správa kritické infrastruktury",
                "Cyber a threat intelligence sítě",
                "Složky krizové odezvy",
                "Týmy veřejné komunikace a mediálních rizik",
                "Právní a compliance dohledové autority",
            ],
            timelineKicker: "Timeline",
            timelineTitle: "Evoluce NOXIS",
            ctaKicker: "Strategický kontakt",
            ctaTitle: "Chcete řešit alianci, policy nebo cestu nasazení?",
            ctaText: "Spojte se s týmem NOXIS a nastavme implementaci podle vašich cílů.",
            ctaButton: "Kontaktovat strategický tým",
            leadership: [
                {
                    name: "Adam Karl Lucien",
                    role: "Hlavní architekt, NOXIS",
                    brief: "Navrhuje vícevrstvou architekturu inteligence a governance doktrínu pro institucionální nasazení.",
                    icon: Compass,
                },
                {
                    name: "Strategic Operations Cell",
                    role: "Jednotka plánování misí",
                    brief: "Tvoří cross-tier playbooky pro eskalaci narativních hrozeb, dohledové operace a koordinaci ISR.",
                    icon: Waypoints,
                },
                {
                    name: "Oversight and Legal Team",
                    role: "Governance autorita",
                    brief: "Zajišťuje soulad s mandáty, odpovědnost přístupů a auditní připravenost v aktivním provozu.",
                    icon: Gavel,
                },
            ],
        }
        : {
            kicker: "Company",
            title: "Protectors of Narrative and Operational Integrity",
            hero: "NOXIS helps institutions operate under pressure with stronger information integrity, faster situational awareness, and accountable decision authority.",
            heroSignals: ["Governance first", "Institutional operations", "High-accountability deployment"],
            heroAria: "Company posture",
            visualTop: "Strategic Alliances",
            visualBottom: "Policy + Operations + Legal",
            governanceKicker: "Governance",
            governanceTitle: "Mission and governance stance",
            governanceIntroA: "We build sovereign intelligence systems for environments where narrative pressure, surveillance demands, and operational risk converge.",
            governanceIntroB: "Every deployment is designed for institutions that require legal-grade oversight, mandate controls, and full traceability.",
            governanceListTitle: "Governance controls",
            governancePoints: [
                "Mandate-aware access boundaries and role-scoped visibility",
                "Continuous operator accountability and intervention ledger",
                "Cryptographic receipts for court-compatible replay",
                "Data minimization and retention controls by jurisdiction",
                "Supervisory override chain for critical incidents",
                "Red-team and synthetic rehearsal environments",
            ],
            leadershipKicker: "Leadership",
            leadershipTitle: "Mission team built for high-accountability operations",
            allianceKicker: "Alliance Framework",
            allianceTitle: "Partnerships across policy, security, and infrastructure domains",
            alliances: [
                "National command partners",
                "Critical infrastructure agencies",
                "Cyber and threat intelligence networks",
                "Emergency response authorities",
                "Public communication and media risk units",
                "Judicial and compliance oversight bodies",
            ],
            timelineKicker: "Timeline",
            timelineTitle: "NOXIS evolution",
            ctaKicker: "Strategic Contact",
            ctaTitle: "Discuss alliance, policy, or deployment pathways.",
            ctaText: "Connect with the NOXIS team to align mission objectives with tiered implementation.",
            ctaButton: "Contact Strategic Team",
            leadership: [
                {
                    name: "Adam Karl Lucien",
                    role: "Chief Architect, NOXIS",
                    brief: "Designs the tiered intelligence architecture and governance doctrine for institutional deployments.",
                    icon: Compass,
                },
                {
                    name: "Strategic Operations Cell",
                    role: "Mission Planning Unit",
                    brief: "Builds cross-tier playbooks for narrative escalation, surveillance response, and ISR coordination.",
                    icon: Waypoints,
                },
                {
                    name: "Oversight and Legal Team",
                    role: "Governance Authority",
                    brief: "Ensures mandate compliance, access accountability, and audit readiness across active operations.",
                    icon: Gavel,
                },
            ],
        };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-band hero-company", children: _jsxs("div", { className: "container hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("p", { className: "kicker", children: copy.kicker }), _jsx("h1", { className: "display-title", children: copy.title }), _jsx("p", { className: "hero-copy", children: copy.hero }), _jsx("div", { className: "hero-kpis", "aria-label": copy.heroAria, children: copy.heroSignals.map((label, index) => {
                                        const Icon = [ShieldCheck, Users, Sparkles][index] ?? ShieldCheck;
                                        return (_jsxs("span", { className: "hero-kpi", children: [_jsx(Icon, { size: 16, "aria-hidden": "true" }), label] }, label));
                                    }) })] }), _jsxs("div", { className: "hero-visual", "aria-hidden": "true", children: [_jsx("img", { src: "/assets/noxis-hero.png", alt: "" }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--top", children: copy.visualTop }), _jsx("span", { className: "hero-visual__badge hero-visual__badge--bottom", children: copy.visualBottom })] })] }) }), _jsx("section", { id: "governance", className: "section-block section-dark", children: _jsxs("div", { className: "container section-2col", children: [_jsxs("article", { className: "content-panel", children: [_jsx("p", { className: "kicker", children: copy.governanceKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(ShieldCheck, { className: "section-icon", "aria-hidden": "true" }), copy.governanceTitle] }), _jsx("p", { children: copy.governanceIntroA }), _jsx("p", { children: copy.governanceIntroB })] }), _jsxs("article", { className: "module-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Gavel, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: copy.governanceListTitle })] }), _jsx("ul", { children: copy.governancePoints.map((point) => (_jsx("li", { children: point }, point))) })] })] }) }), _jsx("section", { id: "leadership", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.leadershipKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Users, { className: "section-icon", "aria-hidden": "true" }), copy.leadershipTitle] })] }), _jsx("div", { className: "case-grid", children: copy.leadership.map((person) => {
                                const Icon = person.icon;
                                return (_jsxs("article", { className: "case-card", children: [_jsxs("div", { className: "card-head", children: [_jsx("span", { className: "card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsx("p", { className: "card-eyebrow", children: person.role })] }), _jsx("h3", { children: person.name }), _jsx("p", { children: person.brief })] }, person.name));
                            }) })] }) }), _jsx("section", { id: "alliances", className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.allianceKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Handshake, { className: "section-icon", "aria-hidden": "true" }), copy.allianceTitle] })] }), _jsx("div", { className: "pill-grid", children: copy.alliances.map((item) => (_jsxs("span", { className: "line-pill", children: [_jsx(Handshake, { size: 14, "aria-hidden": "true" }), item] }, item))) })] }) }), _jsx("section", { className: "section-block section-dark", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "kicker", children: copy.timelineKicker }), _jsxs("h2", { className: "section-title section-title--with-icon", children: [_jsx(Waypoints, { className: "section-icon", "aria-hidden": "true" }), copy.timelineTitle] })] }), _jsx("div", { className: "timeline-grid", children: data.companyMilestones.map((milestone) => (_jsxs("article", { className: "timeline-card", children: [_jsx("p", { className: "timeline-year", children: milestone.year }), _jsx("h3", { children: milestone.title }), _jsx("p", { children: milestone.note })] }, milestone.year))) })] }) }), _jsx("section", { className: "cta-block", children: _jsxs("div", { className: "container cta-block__inner", children: [_jsxs("div", { children: [_jsx("p", { className: "kicker", children: copy.ctaKicker }), _jsx("h2", { children: copy.ctaTitle }), _jsx("p", { children: copy.ctaText })] }), _jsx("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                                event.preventDefault();
                                onNavigate("/pricing#contact");
                            }, children: copy.ctaButton })] }) })] }));
}
