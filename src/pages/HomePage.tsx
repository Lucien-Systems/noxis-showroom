import type { LucideIcon } from "lucide-react";
import {
  BookCheck,
  Camera,
  ChartSpline,
  Orbit,
  Radar,
  ShieldAlert,
  Waypoints,
  Workflow,
} from "lucide-react";
import { homepageStats, platformModules, tiers, trustLogos, useCases } from "../content/siteData";

type HomePageProps = {
  onNavigate: (path: string) => void;
};

const heroSignals = [
  { label: "Narrative graph", icon: Radar },
  { label: "Realtime camera", icon: Camera },
  { label: "Drone ISR", icon: Orbit },
];

const tierIcons: Record<string, LucideIcon> = {
  "tier-a": ShieldAlert,
  "tier-b": Camera,
  "tier-c": Orbit,
};

const moduleIcons: LucideIcon[] = [Workflow, Camera, ChartSpline, Orbit, BookCheck, Waypoints];

const caseIcons: LucideIcon[] = [ShieldAlert, Camera, Orbit, Waypoints];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="hero-band hero-home">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">NOXIS / Tiered Strategic Surveillance Platform</p>
            <h1 className="display-title">Know the Threat Surface</h1>
            <p className="hero-copy">
              NOXIS combines narrative intelligence, realtime camera operations, and drone ISR into one accountable
              command stack.
            </p>
            <div className="hero-kpis" aria-label="Core capabilities">
              {heroSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <span key={signal.label} className="hero-kpi">
                    <Icon size={16} aria-hidden="true" />
                    {signal.label}
                  </span>
                );
              })}
            </div>
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
            <span className="hero-visual__badge hero-visual__badge--top">Tiered Command</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">Rights and Oversight by Design</span>
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Trusted Network</p>
            <h2 className="section-title section-title--with-icon">
              <Radar className="section-icon" aria-hidden="true" />
              Mission-critical organizations
            </h2>
          </div>
          <div className="logo-grid">
            {trustLogos.map((logo) => (
              <div key={logo} className="logo-cell">
                <span className="logo-cell__dot" aria-hidden="true" />
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
            <h2 className="section-title section-title--with-icon">
              <Workflow className="section-icon" aria-hidden="true" />
              One command surface, three operational layers
            </h2>
          </div>
          <div className="tier-grid">
            {tiers.map((tier) => {
              const Icon = tierIcons[tier.id] ?? ShieldAlert;
              return (
                <article key={tier.id} className="tier-card">
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
            <h2 className="section-title section-title--with-icon">
              <ChartSpline className="section-icon" aria-hidden="true" />
              Constellation-grade components for high-risk operations
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
                    <p className="card-eyebrow">Module</p>
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
            <p className="kicker">Use Cases</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              Built for narrative conflict, urban security, and ISR continuity
            </h2>
          </div>
          <div className="case-grid">
            {useCases.map((entry, index) => {
              const Icon = caseIcons[index % caseIcons.length];
              return (
                <article key={entry.title} className="case-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">Scenario</p>
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">Command Briefing</p>
            <h2>Deploy NOXIS as a sovereign intelligence backbone.</h2>
            <p>Configure narrative, camera, and drone layers with mandate-specific governance controls.</p>
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
