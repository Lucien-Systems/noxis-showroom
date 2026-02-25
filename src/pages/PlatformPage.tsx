import { platformModules, tiers } from "../content/siteData";

type PlatformPageProps = {
  onNavigate: (path: string) => void;
};

export default function PlatformPage({ onNavigate }: PlatformPageProps) {
  return (
    <>
      <section className="hero-band hero-platform">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Platform</p>
            <h1 className="display-title">Constellation Tiered Intelligence Platform</h1>
            <p className="hero-copy">
              Illuminate context. Orchestrate camera and aerial streams. Neutralize narrative attacks with one
              operational decision fabric.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
          </div>
        </div>
      </section>

      <section id="tiers" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Operational Layers</p>
            <h2 className="section-title">Tier model for mandate-based escalation</h2>
          </div>
          <div className="tier-grid">
            {tiers.map((tier) => (
              <article key={tier.id} className="tier-card" id={tier.id === "tier-b" ? "vision" : tier.id === "tier-a" ? "narrative" : "aerial"}>
                <p className="tier-name">{tier.name}</p>
                <h3>{tier.tagline}</h3>
                <p>{tier.description}</p>
                <ul>
                  {tier.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Module Stack</p>
            <h2 className="section-title">Composable building blocks for command environments</h2>
          </div>
          <div className="module-grid">
            {platformModules.map((module) => (
              <article key={module.title} className="module-card">
                <h3>{module.title}</h3>
                <p>{module.summary}</p>
                <ul>
                  {module.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container flow-grid">
          <article className="flow-card">
            <p className="kicker">Operational Loop</p>
            <h3>Ingest</h3>
            <p>Narrative, camera, and aerial data streams enter policy-scoped ingestion gateways.</p>
          </article>
          <article className="flow-card">
            <p className="kicker">Operational Loop</p>
            <h3>Correlate</h3>
            <p>NOXIS builds actor, location, and event correlations across all active tier channels.</p>
          </article>
          <article className="flow-card">
            <p className="kicker">Operational Loop</p>
            <h3>Decide</h3>
            <p>Command centers receive risk-scored outputs with legal traceability and supervisory controls.</p>
          </article>
          <article className="flow-card">
            <p className="kicker">Operational Loop</p>
            <h3>Audit</h3>
            <p>Every intervention is logged with cryptographic evidence for replay and institutional review.</p>
          </article>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">Deployment</p>
            <h2>Need a platform architecture brief?</h2>
            <p>Our team can map your tier model, command topology, and governance boundaries.</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            Request Architecture Brief
          </a>
        </div>
      </section>
    </>
  );
}
