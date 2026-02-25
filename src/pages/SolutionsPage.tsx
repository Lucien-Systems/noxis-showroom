import { Fragment } from "react";
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

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <>
      <section className="hero-band hero-solutions">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Solutions</p>
            <h1 className="display-title">Protect institutions from narrative, visual, and aerial threats</h1>
            <p className="hero-copy">
              NOXIS delivers configurable solutions by use case, sector, and command role to prevent escalation across
              information and physical domains.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
          </div>
        </div>
      </section>

      <section id="use-cases" className="section-block section-dark">
        <div className="container section-3col">
          <article>
            <h2 className="section-title">Solutions by Use Case</h2>
            <div className="link-stack">
              {useCases.map((entry) => (
                <div key={entry.title} className="link-stack__item">
                  <h3>{entry.title}</h3>
                  <p>{entry.detail}</p>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h2 className="section-title">Solutions by Industry</h2>
            <div className="pill-grid">
              {industries.map((item) => (
                <span key={item} className="line-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article>
            <h2 className="section-title">Solutions by Role</h2>
            <div className="pill-grid">
              {roles.map((item) => (
                <span key={item} className="line-pill">
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
            <h2 className="section-title">How the three layers work together in live operations</h2>
          </div>
          <div className="matrix-table">
            <div className="matrix-head">Scenario</div>
            <div className="matrix-head">{tiers[0].name}</div>
            <div className="matrix-head">{tiers[1].name}</div>
            <div className="matrix-head">{tiers[2].name}</div>
            {scenarioMatrix.map((row) => (
              <Fragment key={row.scenario}>
                <div className="matrix-cell matrix-cell--scenario">
                  {row.scenario}
                </div>
                <div className="matrix-cell">{row.tierA}</div>
                <div className="matrix-cell">{row.tierB}</div>
                <div className="matrix-cell">{row.tierC}</div>
              </Fragment>
            ))}
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
