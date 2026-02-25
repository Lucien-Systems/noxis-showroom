import type { LucideIcon } from "lucide-react";
import { Calculator, CheckCircle2, Globe, Layers3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { tiers } from "../content/siteData";

type PricingPageProps = {
  onNavigate: (path: string) => void;
};

type PricingBand = {
  name: string;
  target: string;
  includes: string[];
  icon: LucideIcon;
};

const pricingBands: PricingBand[] = [
  {
    name: "Command Core",
    target: "For institutional teams launching Tier A + Tier B",
    includes: [
      "Narrative intelligence workspace",
      "Realtime camera operations board",
      "Baseline governance and receipt trail",
    ],
    icon: Layers3,
  },
  {
    name: "Sovereign Operations",
    target: "For national and multi-agency command centers",
    includes: [
      "Full Tier A/B/C orchestration",
      "Advanced geospatial and drone relay",
      "Cross-domain escalation playbooks",
    ],
    icon: Globe,
  },
  {
    name: "Custom Strategic Program",
    target: "For mission-specific high-complexity deployments",
    includes: [
      "Jurisdiction-tailored governance model",
      "Dedicated operator training and simulation",
      "Long-horizon alliance and rollout support",
    ],
    icon: Sparkles,
  },
];

const pricingSignals = [
  "Scope by active tiers",
  "Adjust by stream volume",
  "Align with legal controls",
];

const pricingFactors = [
  "Tier combination and mission criticality",
  "Realtime stream volume and command concurrency",
  "Retention, audit window, and legal trace depth",
  "Integration scope with existing VMS and UAV systems",
  "Operator training and simulation requirements",
];

const deliveryModel = [
  "On-prem sovereign infrastructure",
  "Hybrid sovereign-cloud topology",
  "Mission rehearsal and readiness program",
  "Dedicated governance advisory lane",
  "Operational review cadence and support window",
];

export default function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <>
      <section className="hero-band hero-pricing" id="contact">
        <div className="container pricing-hero-grid">
          <div className="hero-content">
            <p className="kicker">Pricing</p>
            <h1 className="display-title">Build your NOXIS deployment model</h1>
            <p className="hero-copy">
              Configure pricing by active tiers, command coverage, data residency requirements, and oversight
              obligations.
            </p>
            <div className="hero-kpis" aria-label="Pricing indicators">
              {pricingSignals.map((signal) => (
                <span key={signal} className="hero-kpi">
                  <Calculator size={16} aria-hidden="true" />
                  {signal}
                </span>
              ))}
            </div>
            <div className="pill-grid compact">
              {tiers.map((tier) => (
                <span key={tier.id} className="line-pill">
                  <Layers3 size={14} aria-hidden="true" />
                  {tier.name}
                </span>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <p className="contact-form__title">Request commercial brief</p>
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
            <h2 className="section-title section-title--with-icon">
              <Layers3 className="section-icon" aria-hidden="true" />
              Deployment bands
            </h2>
          </div>
          <div className="case-grid">
            {pricingBands.map((band) => {
              const Icon = band.icon;
              return (
                <article key={band.name} className="case-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{band.target}</p>
                  </div>
                  <h3>{band.name}</h3>
                  <ul>
                    {band.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container section-2col">
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <ShieldCheck size={18} />
              </span>
              <p className="card-eyebrow">What affects pricing</p>
            </div>
            <ul>
              {pricingFactors.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <MapPinned size={18} />
              </span>
              <p className="card-eyebrow">Delivery model</p>
            </div>
            <ul>
              {deliveryModel.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
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
