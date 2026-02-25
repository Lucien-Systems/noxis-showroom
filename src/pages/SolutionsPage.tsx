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
import { industries, roles, tiers, useCases } from "../content/siteData";

type SolutionsPageProps = {
  onNavigate: (path: string) => void;
};

const scenarioMatrix = [
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
];

const useCaseIcons = [ShieldCheck, AlertTriangle, Waypoints, Radar];

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <>
      <section className="hero-band hero-solutions">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">Solutions</p>
            <h1 className="display-title">Protect institutions from narrative, visual, and aerial threats</h1>
            <p className="hero-copy">
              NOXIS provides configurable solutions by scenario, sector, and command role across information and
              physical domains.
            </p>
            <div className="hero-kpis" aria-label="Solution outcomes">
              <span className="hero-kpi">
                <ShieldCheck size={16} aria-hidden="true" />
                Faster incident triage
              </span>
              <span className="hero-kpi">
                <Radar size={16} aria-hidden="true" />
                Multi-domain correlation
              </span>
              <span className="hero-kpi">
                <Sparkles size={16} aria-hidden="true" />
                Mandate-ready governance
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">Use-case Driven</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">Tier-aligned Outcomes</span>
          </div>
        </div>
      </section>

      <section id="use-cases" className="section-block section-dark">
        <div className="container section-3col">
          <article className="content-panel">
            <h2 className="section-title section-title--with-icon">
              <BriefcaseBusiness className="section-icon" aria-hidden="true" />
              Solutions by Use Case
            </h2>
            <div className="link-stack">
              {useCases.map((entry, index) => {
                const Icon = useCaseIcons[index % useCaseIcons.length];
                return (
                  <div key={entry.title} className="link-stack__item">
                    <div className="card-head">
                      <span className="card-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <p className="card-eyebrow">Mission scenario</p>
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
              Solutions by Industry
            </h2>
            <div className="pill-grid">
              {industries.map((item) => (
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
              Solutions by Role
            </h2>
            <div className="pill-grid">
              {roles.map((item) => (
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
            <p className="kicker">Tier-to-Scenario Matrix</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              How the three layers operate together in live conditions
            </h2>
          </div>
          <div className="matrix-wrap">
            <div className="matrix-table">
              <div className="matrix-head">Scenario</div>
              <div className="matrix-head">{tiers[0].name}</div>
              <div className="matrix-head">{tiers[1].name}</div>
              <div className="matrix-head">{tiers[2].name}</div>
              {scenarioMatrix.map((row) => (
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
            <p className="kicker">Solution Design</p>
            <h2>Need a mission-specific tier configuration?</h2>
            <p>We build deployment blueprints by jurisdiction, command model, and threat profile.</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            Explore Solution Fit
          </a>
        </div>
      </section>
    </>
  );
}
