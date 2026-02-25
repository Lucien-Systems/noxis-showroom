import { homepageStats, platformModules, tiers, trustLogos, useCases } from "../content/siteData";

type HomePageProps = {
  onNavigate: (path: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="hero-band hero-home">
        <div className="container hero-grid">
          <div>
            <p className="kicker">NOXIS / Tiered Strategic Surveillance Platform</p>
            <h1 className="display-title">Know the Threat Surface</h1>
            <p className="hero-copy">
              NOXIS unifies narrative intelligence, realtime camera operations, and drone ISR into one sovereign
              command stack. Built for mandate-based deployment, national-scale risk management, and accountable
              oversight.
            </p>
            <div className="hero-actions">
              <a
                href="/pricing#contact"
                className="pill-cta"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/pricing#contact");
                }}
              >
                Book a Demo
              </a>
              <a
                href="/platform"
                className="ghost-cta"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/platform");
                }}
              >
                Explore Platform
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <h2 className="section-title">Trusted by mission-critical organizations</h2>
          <div className="logo-grid">
            {trustLogos.map((logo) => (
              <div key={logo} className="logo-cell">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tiers" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Tier Architecture</p>
            <h2 className="section-title">One command surface, three operational layers</h2>
          </div>
          <div className="tier-grid">
            {tiers.map((tier) => (
              <article key={tier.id} className="tier-card">
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

      <section className="section-block section-dark stats-band">
        <div className="container stats-grid">
          {homepageStats.map((stat) => (
            <article key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Core Modules</p>
            <h2 className="section-title">Constellation-grade components for high-risk operations</h2>
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
        <div className="container">
          <div className="section-head">
            <p className="kicker">Use Cases</p>
            <h2 className="section-title">Built for narrative conflict, urban security, and ISR continuity</h2>
          </div>
          <div className="case-grid">
            {useCases.map((entry) => (
              <article key={entry.title} className="case-card">
                <h3>{entry.title}</h3>
                <p>{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">Command Briefing</p>
            <h2>Deploy NOXIS as a sovereign intelligence backbone.</h2>
            <p>
              Configure a tiered stack for narrative defense, realtime surveillance, and drone oversight with clear
              governance boundaries.
            </p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            Start Briefing
          </a>
        </div>
      </section>
    </>
  );
}
