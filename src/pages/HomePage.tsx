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
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type HomePageProps = {
  onNavigate: (path: string) => void;
};

const tierIcons: Record<string, LucideIcon> = {
  "tier-a": ShieldAlert,
  "tier-b": Camera,
  "tier-c": Orbit,
};

const moduleIcons: LucideIcon[] = [Workflow, Camera, ChartSpline, Orbit, BookCheck, Waypoints];
const caseIcons: LucideIcon[] = [ShieldAlert, Camera, Orbit, Waypoints];

export default function HomePage({ onNavigate }: HomePageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "NOXIS / Vícevrstvá strategická dohledová platforma",
          title: "Poznejte mapu hrozeb",
          hero:
            "NOXIS propojuje narativní inteligenci, provoz kamer v reálném čase a dronové ISR do jednoho odpovědného velitelského stacku.",
          heroSignals: ["Graf narativů", "Kamery v reálném čase", "Dronové ISR"],
          ctaPrimary: "Domluvit demo",
          ctaSecondary: "Prozkoumat platformu",
          visualTop: "Vrstvené velení",
          visualBottom: "Práva a dohled od návrhu",
          trustedKicker: "Důvěryhodná síť",
          trustedTitle: "Instituce s kritickou odpovědností",
          tierKicker: "Architektura vrstev",
          tierTitle: "Jedno velitelské rozhraní, tři operační vrstvy",
          modulesKicker: "Klíčové moduly",
          modulesTitle: "Komponenty připravené pro provoz ve vysoce rizikovém prostředí",
          moduleEyebrow: "Modul",
          useCasesKicker: "Scénáře použití",
          useCasesTitle: "Navrženo pro informační konflikt, městskou bezpečnost a ISR kontinuitu",
          scenarioEyebrow: "Scénář",
          ctaKicker: "Velitelský briefing",
          ctaTitle: "Nasazení NOXIS jako suverénní zpravodajské páteře",
          ctaText: "Nastavte narativní, kamerovou i dronovou vrstvu s governance pravidly podle mandátu.",
          ctaButton: "Zahájit briefing",
          heroAria: "Klíčové schopnosti",
        }
      : {
          kicker: "NOXIS / Tiered Strategic Surveillance Platform",
          title: "Know the Threat Surface",
          hero:
            "NOXIS combines narrative intelligence, realtime camera operations, and drone ISR into one accountable command stack.",
          heroSignals: ["Narrative graph", "Realtime camera", "Drone ISR"],
          ctaPrimary: "Book a Demo",
          ctaSecondary: "Explore Platform",
          visualTop: "Tiered Command",
          visualBottom: "Rights and Oversight by Design",
          trustedKicker: "Trusted Network",
          trustedTitle: "Mission-critical organizations",
          tierKicker: "Tier Architecture",
          tierTitle: "One command surface, three operational layers",
          modulesKicker: "Core Modules",
          modulesTitle: "Constellation-grade components for high-risk operations",
          moduleEyebrow: "Module",
          useCasesKicker: "Use Cases",
          useCasesTitle: "Built for narrative conflict, urban security, and ISR continuity",
          scenarioEyebrow: "Scenario",
          ctaKicker: "Command Briefing",
          ctaTitle: "Deploy NOXIS as a sovereign intelligence backbone.",
          ctaText: "Configure narrative, camera, and drone layers with mandate-specific governance controls.",
          ctaButton: "Start Briefing",
          heroAria: "Core capabilities",
        };

  return (
    <>
      <section className="hero-band hero-home">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display-title">{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="hero-kpis" aria-label={copy.heroAria}>
              {copy.heroSignals.map((label, index) => {
                const Icon = [Radar, Camera, Orbit][index] ?? Radar;
                return (
                  <span key={label} className="hero-kpi">
                    <Icon size={16} aria-hidden="true" />
                    {label}
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
                {copy.ctaPrimary}
              </a>
              <a
                href="/platform"
                className="ghost-cta"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/platform");
                }}
              >
                {copy.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">{copy.visualTop}</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">{copy.visualBottom}</span>
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.trustedKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Radar className="section-icon" aria-hidden="true" />
              {copy.trustedTitle}
            </h2>
          </div>
          <div className="logo-grid">
            {data.trustLogos.map((logo) => (
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
            <p className="kicker">{copy.tierKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Workflow className="section-icon" aria-hidden="true" />
              {copy.tierTitle}
            </h2>
          </div>
          <div className="tier-grid">
            {data.tiers.map((tier) => {
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
          {data.homepageStats.map((stat) => (
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
            <p className="kicker">{copy.modulesKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <ChartSpline className="section-icon" aria-hidden="true" />
              {copy.modulesTitle}
            </h2>
          </div>
          <div className="module-grid">
            {data.platformModules.map((module, index) => {
              const Icon = moduleIcons[index % moduleIcons.length];
              return (
                <article key={module.title} className="module-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{copy.moduleEyebrow}</p>
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
            <p className="kicker">{copy.useCasesKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              {copy.useCasesTitle}
            </h2>
          </div>
          <div className="case-grid">
            {data.useCases.map((entry, index) => {
              const Icon = caseIcons[index % caseIcons.length];
              return (
                <article key={entry.title} className="case-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{copy.scenarioEyebrow}</p>
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
