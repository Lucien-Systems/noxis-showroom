import type { LucideIcon } from "lucide-react";
import { Camera, CheckCircle2, Database, Fingerprint, Orbit, Radar, Shield, Workflow } from "lucide-react";
import { platformModules, tiers } from "../content/siteData";

type PlatformPageProps = {
  onNavigate: (path: string) => void;
};

const tierIcons: Record<string, LucideIcon> = {
  "tier-a": Radar,
  "tier-b": Camera,
  "tier-c": Orbit,
};

const moduleIcons: LucideIcon[] = [Workflow, Camera, Radar, Orbit, Fingerprint, Shield];

const flowSteps = [
  {
    title: "Ingest",
    detail: "Narrative, camera, and aerial streams enter policy-scoped gateways.",
    icon: Database,
  },
  {
    title: "Correlate",
    detail: "NOXIS links actors, locations, and event threads across tiers.",
    icon: Workflow,
  },
  {
    title: "Decide",
    detail: "Teams receive risk-scored outputs with mandate-aware controls.",
    icon: CheckCircle2,
  },
  {
    title: "Audit",
    detail: "Every intervention is replayable through cryptographic evidence.",
    icon: Fingerprint,
  },
];

export default function PlatformPage({ onNavigate }: PlatformPageProps) {
  return (
    <>
      <section className="hero-band hero-platform">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">Platform</p>
            <h1 className="display-title">Constellation Tiered Intelligence Platform</h1>
            <p className="hero-copy">
              Illuminate context, coordinate camera and aerial streams, and neutralize narrative attacks through one
              decision fabric.
            </p>
            <div className="hero-kpis" aria-label="Platform highlights">
              <span className="hero-kpi">
                <Radar size={16} aria-hidden="true" />
                Narrative detection
              </span>
              <span className="hero-kpi">
                <Camera size={16} aria-hidden="true" />
                Live camera fusion
              </span>
              <span className="hero-kpi">
                <Orbit size={16} aria-hidden="true" />
                Drone telemetry relay
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">Cross-domain Correlation</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">Replayable Audit Trail</span>
          </div>
        </div>
      </section>

      <section id="tiers" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Operational Layers</p>
            <h2 className="section-title section-title--with-icon">
              <Workflow className="section-icon" aria-hidden="true" />
              Tier model for mandate-based escalation
            </h2>
          </div>
          <div className="tier-grid">
            {tiers.map((tier) => {
              const Icon = tierIcons[tier.id] ?? Shield;
              const anchorId = tier.id === "tier-b" ? "vision" : tier.id === "tier-a" ? "narrative" : "aerial";

              return (
                <article key={tier.id} className="tier-card" id={anchorId}>
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{tier.name}</p>
                  </div>
                  <h3>{tier.tagline}</h3>
                  <p>{tier.description}</p>
                  <ul>
                    {tier.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Module Stack</p>
            <h2 className="section-title section-title--with-icon">
              <Shield className="section-icon" aria-hidden="true" />
              Composable building blocks for command environments
            </h2>
          </div>
          <div className="module-grid">
            {platformModules.map((module, index) => {
              const Icon = moduleIcons[index % moduleIcons.length];
              return (
                <article key={module.title} className="module-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">Operational Module</p>
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.summary}</p>
                  <ul>
                    {module.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Operational Loop</p>
            <h2 className="section-title section-title--with-icon">
              <Database className="section-icon" aria-hidden="true" />
              From ingestion to review in four controlled steps
            </h2>
          </div>
          <div className="flow-grid">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flow-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">Step {index + 1}</p>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">Deployment</p>
            <h2>Need a platform architecture brief?</h2>
            <p>We can map your tier model, command topology, and governance boundaries.</p>
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
