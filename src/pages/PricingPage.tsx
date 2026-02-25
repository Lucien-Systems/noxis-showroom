import { tiers } from "../content/siteData";

type PricingPageProps = {
  onNavigate: (path: string) => void;
};

const pricingBands = [
  {
    name: "Command Core",
    target: "For institutional teams launching Tier A + Tier B",
    includes: [
      "Narrative intelligence workspace",
      "Realtime camera operations board",
      "Baseline governance and receipt trail",
    ],
  },
  {
    name: "Sovereign Operations",
    target: "For national and multi-agency command centers",
    includes: [
      "Full Tier A/B/C orchestration",
      "Advanced geospatial and drone relay",
      "Cross-domain escalation playbooks",
    ],
  },
  {
    name: "Custom Strategic Program",
    target: "For mission-specific high-complexity deployments",
    includes: [
      "Jurisdiction-tailored governance model",
      "Dedicated operator training and simulation",
      "Long-horizon alliance and rollout support",
    ],
  },
];

export default function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <>
      <section className="hero-band hero-pricing" id="contact">
        <div className="container pricing-hero-grid">
          <div>
            <p className="kicker">Pricing</p>
            <h1 className="display-title">Build your NOXIS deployment model</h1>
            <p className="hero-copy">
              Configure pricing based on active tiers, command coverage, data residency requirements, and oversight
              obligations.
            </p>
            <div className="pill-grid compact">
              {tiers.map((tier) => (
                <span key={tier.id} className="line-pill">
                  {tier.name}
                </span>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form__row">
              <input placeholder="First name*" required />
              <input placeholder="Last name*" required />
            </div>
            <input placeholder="Work email address*" type="email" required />
            <input placeholder="Organization*" required />
            <input placeholder="Country / jurisdiction" />
            <textarea rows={4} placeholder="Tell us your tier scope, use-case, and deployment timeline" />
            <label className="checkbox-row">
              <input type="checkbox" required />
              <span>I confirm this request is for legitimate institutional or mission-authorized use.</span>
            </label>
            <button type="submit" className="pill-cta">
              Request Pricing Brief
            </button>
          </form>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Packaging</p>
            <h2 className="section-title">Deployment bands</h2>
          </div>
          <div className="case-grid">
            {pricingBands.map((band) => (
              <article key={band.name} className="case-card">
                <h3>{band.name}</h3>
                <p className="role-label">{band.target}</p>
                <ul>
                  {band.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container section-2col">
          <article className="module-card">
            <h3>What affects pricing</h3>
            <ul>
              <li>Tier combination and mission-criticality</li>
              <li>Realtime stream volume and command concurrency</li>
              <li>Retention, audit window, and legal trace depth</li>
              <li>Integration scope with existing VMS and UAV systems</li>
              <li>Operator training and simulation requirements</li>
            </ul>
          </article>
          <article className="module-card">
            <h3>Delivery model</h3>
            <ul>
              <li>On-prem sovereign infrastructure</li>
              <li>Hybrid sovereign-cloud topology</li>
              <li>Mission rehearsal and readiness program</li>
              <li>Dedicated governance advisory lane</li>
              <li>Operational review cadence and support window</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">Need more context first?</p>
            <h2>Review platform and solutions before commercial scoping.</h2>
            <p>We recommend aligning your tier model before final pricing workshop.</p>
          </div>
          <a
            href="/platform"
            className="ghost-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/platform");
            }}
          >
            Review Platform
          </a>
        </div>
      </section>
    </>
  );
}
