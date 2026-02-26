import type { LucideIcon } from "lucide-react";
import { Camera, CheckCircle2, Database, Fingerprint, Orbit, Radar, Shield, Workflow } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type PlatformPageProps = {
  onNavigate: (path: string) => void;
};

const tierIcons: Record<string, LucideIcon> = {
  "tier-a": Radar,
  "tier-b": Camera,
  "tier-c": Orbit,
};

const moduleIcons: LucideIcon[] = [Workflow, Camera, Radar, Orbit, Fingerprint, Shield];

export default function PlatformPage({ onNavigate }: PlatformPageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "Platforma",
          title: "Constellation: vícevrstvá zpravodajská platforma",
          hero:
            "Propojte kontext, koordinujte kamerové i letecké streamy a potlačte informační útoky v jednom rozhodovacím systému.",
          heroSignals: ["Detekce narativů", "Fúze živých kamer", "Relay dronové telemetrie"],
          visualTop: "Korelace napříč doménami",
          visualBottom: "Replay auditní stopy",
          tiersKicker: "Operační vrstvy",
          tiersTitle: "Tier model pro eskalaci podle mandátu",
          modulesKicker: "Modulární stack",
          modulesTitle: "Komponovatelné stavební bloky pro velitelská prostředí",
          moduleEyebrow: "Operační modul",
          loopKicker: "Operační smyčka",
          loopTitle: "Od ingestu po review ve čtyřech řízených krocích",
          loopSteps: [
            {
              title: "Ingest",
              detail: "Narativní, kamerové a letecké streamy vstupují přes policy-scoped brány.",
              icon: Database,
            },
            {
              title: "Korelace",
              detail: "NOXIS propojuje aktéry, lokace a události napříč aktivními vrstvami.",
              icon: Workflow,
            },
            {
              title: "Rozhodnutí",
              detail: "Týmy dostávají risk-scored výstupy s mandátovými pravidly přístupu.",
              icon: CheckCircle2,
            },
            {
              title: "Audit",
              detail: "Každý zásah je zpětně dohledatelný pomocí kryptografického důkazu.",
              icon: Fingerprint,
            },
          ],
          stepLabel: "Krok",
          ctaKicker: "Nasazení",
          ctaTitle: "Potřebujete architektonický briefing platformy?",
          ctaText: "Navrhneme tier model, velitelskou topologii a governance hranice.",
          ctaButton: "Vyžádat architektonický briefing",
          heroAria: "Hlavní schopnosti platformy",
        }
      : {
          kicker: "Platform",
          title: "Constellation Tiered Intelligence Platform",
          hero:
            "Illuminate context, coordinate camera and aerial streams, and neutralize narrative attacks through one decision fabric.",
          heroSignals: ["Narrative detection", "Live camera fusion", "Drone telemetry relay"],
          visualTop: "Cross-domain Correlation",
          visualBottom: "Replayable Audit Trail",
          tiersKicker: "Operational Layers",
          tiersTitle: "Tier model for mandate-based escalation",
          modulesKicker: "Module Stack",
          modulesTitle: "Composable building blocks for command environments",
          moduleEyebrow: "Operational Module",
          loopKicker: "Operational Loop",
          loopTitle: "From ingestion to review in four controlled steps",
          loopSteps: [
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
          ],
          stepLabel: "Step",
          ctaKicker: "Deployment",
          ctaTitle: "Need a platform architecture brief?",
          ctaText: "We can map your tier model, command topology, and governance boundaries.",
          ctaButton: "Request Architecture Brief",
          heroAria: "Platform highlights",
        };

  return (
    <>
      <section className="hero-band hero-platform">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display-title">{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="hero-kpis" aria-label={copy.heroAria}>
              {copy.heroSignals.map((label, index) => {
                const Icon = [Radar, Camera, Orbit][index] ?? Radar;
                return (
                  <span className="hero-kpi" key={label}>
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

      <section id="tiers" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.tiersKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Workflow className="section-icon" aria-hidden="true" />
              {copy.tiersTitle}
            </h2>
          </div>
          <div className="tier-grid">
            {data.tiers.map((tier) => {
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
            <p className="kicker">{copy.modulesKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Shield className="section-icon" aria-hidden="true" />
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
            <p className="kicker">{copy.loopKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Database className="section-icon" aria-hidden="true" />
              {copy.loopTitle}
            </h2>
          </div>
          <div className="flow-grid">
            {copy.loopSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flow-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">
                      {copy.stepLabel} {index + 1}
                    </p>
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
