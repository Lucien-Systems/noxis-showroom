import { Fragment } from "react";
import {
  AlertTriangle,
  BriefcaseBusiness,
  Building2,
  Radar,
  ShieldCheck,
  Sparkles,
  UserRound,
  Waypoints,
} from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type SolutionsPageProps = {
  onNavigate: (path: string) => void;
};

const useCaseIcons = [ShieldCheck, AlertTriangle, Waypoints, Radar];

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "Řešení",
          title: "Chraňte instituce před narativními, vizuálními i leteckými hrozbami",
          hero:
            "NOXIS nabízí konfigurovatelná řešení podle scénáře, sektoru a role v řízení krizí napříč informační i fyzickou doménou.",
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
          hero:
            "NOXIS provides configurable solutions by scenario, sector, and command role across information and physical domains.",
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

  return (
    <>
      <section className="hero-band hero-solutions">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display-title">{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="hero-kpis" aria-label={copy.heroAria}>
              {copy.heroSignals.map((label, index) => {
                const Icon = [ShieldCheck, Radar, Sparkles][index] ?? ShieldCheck;
                return (
                  <span key={label} className="hero-kpi">
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">{copy.visualTop}</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">{copy.visualBottom}</span>
          </div>
        </div>
      </section>

      <section id="use-cases" className="section-block section-dark">
        <div className="container section-3col">
          <article className="content-panel">
            <h2 className="section-title section-title--with-icon">
              <BriefcaseBusiness className="section-icon" aria-hidden="true" />
              {copy.useCaseTitle}
            </h2>
            <div className="link-stack">
              {data.useCases.map((entry, index) => {
                const Icon = useCaseIcons[index % useCaseIcons.length];
                return (
                  <div key={entry.title} className="link-stack__item">
                    <div className="card-head">
                      <span className="card-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <p className="card-eyebrow">{copy.scenarioEyebrow}</p>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.detail}</p>
                  </div>
                );
              })}
            </div>
          </article>
          <article className="content-panel">
            <h2 className="section-title section-title--with-icon">
              <Building2 className="section-icon" aria-hidden="true" />
              {copy.industryTitle}
            </h2>
            <div className="pill-grid">
              {data.industries.map((item) => (
                <span key={item} className="line-pill">
                  <Building2 size={14} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="content-panel">
            <h2 className="section-title section-title--with-icon">
              <UserRound className="section-icon" aria-hidden="true" />
              {copy.roleTitle}
            </h2>
            <div className="pill-grid">
              {data.roles.map((item) => (
                <span key={item} className="line-pill">
                  <UserRound size={14} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.matrixKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              {copy.matrixTitle}
            </h2>
          </div>
          <div className="matrix-wrap">
            <div className="matrix-table">
              <div className="matrix-head">{copy.matrixHeaderScenario}</div>
              <div className="matrix-head">{data.tiers[0].name}</div>
              <div className="matrix-head">{data.tiers[1].name}</div>
              <div className="matrix-head">{data.tiers[2].name}</div>
              {copy.scenarioMatrix.map((row) => (
                <Fragment key={row.scenario}>
                  <div className="matrix-cell matrix-cell--scenario">{row.scenario}</div>
                  <div className="matrix-cell">{row.tierA}</div>
                  <div className="matrix-cell">{row.tierB}</div>
                  <div className="matrix-cell">{row.tierC}</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">{copy.ctaKicker}</p>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            {copy.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
