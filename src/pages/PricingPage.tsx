import type { LucideIcon } from "lucide-react";
import { Calculator, CheckCircle2, Globe, Layers3, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type PricingPageProps = {
  onNavigate: (path: string) => void;
};

type PricingBand = {
  name: string;
  target: string;
  includes: string[];
  icon: LucideIcon;
};

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "Ceník",
          title: "Sestavte model nasazení NOXIS",
          hero:
            "Cenový návrh nastavujeme podle aktivních vrstev, rozsahu velení, požadavků na data residency a governance pravidel.",
          heroSignals: ["Rozsah podle tierů", "Úprava podle objemu streamů", "Soulad s právním rámcem"],
          heroAria: "Cenové indikátory",
          formTitle: "Vyžádat komerční briefing",
          firstName: "Jméno*",
          lastName: "Příjmení*",
          email: "Pracovní e-mail*",
          org: "Organizace*",
          country: "Země / jurisdikce",
          notes: "Popište rozsah tierů, use-case a plán nasazení",
          consent: "Potvrzuji, že poptávka je určena pro legitimní institucionální nebo schválené operační použití.",
          submit: "Vyžádat cenový návrh",
          bandsKicker: "Balíčky",
          bandsTitle: "Modely nasazení",
          factorsTitle: "Co ovlivňuje cenu",
          deliveryTitle: "Model dodání",
          ctaKicker: "Nejdřív potřebujete víc kontextu?",
          ctaTitle: "Než uzavřeme komerční scope, projděte platformu a řešení.",
          ctaText: "Doporučujeme nejdřív sladit tier model a governance scénáře.",
          ctaButton: "Projít platformu",
          bands: [
            {
              name: "Command Core",
              target: "Pro instituce startující Tier A + Tier B",
              includes: [
                "Workspace pro narativní inteligenci",
                "Operační panel pro živé kamery",
                "Základní governance a receipt trail",
              ],
              icon: Layers3,
            },
            {
              name: "Sovereign Operations",
              target: "Pro národní a meziresortní velitelská centra",
              includes: [
                "Plná orchestrace Tier A/B/C",
                "Pokročilý geospatial a dronový relay",
                "Cross-domain eskalační playbooky",
              ],
              icon: Globe,
            },
            {
              name: "Custom Strategic Program",
              target: "Pro komplexní a mission-specific nasazení",
              includes: [
                "Governance model podle jurisdikce",
                "Dedikovaný výcvik operátorů a simulace",
                "Dlouhodobá podpora aliančního rolloutu",
              ],
              icon: Sparkles,
            },
          ] as PricingBand[],
          pricingFactors: [
            "Kombinace vrstev a kritičnost mise",
            "Objem streamů v reálném čase a paralelní provoz",
            "Retence dat, auditní okno a hloubka právní stopy",
            "Rozsah integrace s existujícími VMS/UAV systémy",
            "Požadavky na výcvik operátorů a simulace",
          ],
          deliveryModel: [
            "On-prem suverénní infrastruktura",
            "Hybridní sovereign-cloud topologie",
            "Program rehearsal a readiness",
            "Dedikovaná governance advisory linka",
            "Pravidelný operační review a support režim",
          ],
        }
      : {
          kicker: "Pricing",
          title: "Build your NOXIS deployment model",
          hero:
            "Configure pricing by active tiers, command coverage, data residency requirements, and oversight obligations.",
          heroSignals: ["Scope by active tiers", "Adjust by stream volume", "Align with legal controls"],
          heroAria: "Pricing indicators",
          formTitle: "Request commercial brief",
          firstName: "First name*",
          lastName: "Last name*",
          email: "Work email address*",
          org: "Organization*",
          country: "Country / jurisdiction",
          notes: "Tell us your tier scope, use-case, and deployment timeline",
          consent: "I confirm this request is for legitimate institutional or mission-authorized use.",
          submit: "Request Pricing Brief",
          bandsKicker: "Packaging",
          bandsTitle: "Deployment bands",
          factorsTitle: "What affects pricing",
          deliveryTitle: "Delivery model",
          ctaKicker: "Need more context first?",
          ctaTitle: "Review platform and solutions before commercial scoping.",
          ctaText: "We recommend aligning your tier model before final pricing workshop.",
          ctaButton: "Review Platform",
          bands: [
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
          ] as PricingBand[],
          pricingFactors: [
            "Tier combination and mission criticality",
            "Realtime stream volume and command concurrency",
            "Retention, audit window, and legal trace depth",
            "Integration scope with existing VMS and UAV systems",
            "Operator training and simulation requirements",
          ],
          deliveryModel: [
            "On-prem sovereign infrastructure",
            "Hybrid sovereign-cloud topology",
            "Mission rehearsal and readiness program",
            "Dedicated governance advisory lane",
            "Operational review cadence and support window",
          ],
        };

  return (
    <>
      <section className="hero-band hero-pricing" id="contact">
        <div className="container pricing-hero-grid">
          <div className="hero-content">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display-title">{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="hero-kpis" aria-label={copy.heroAria}>
              {copy.heroSignals.map((signal) => (
                <span key={signal} className="hero-kpi">
                  <Calculator size={16} aria-hidden="true" />
                  {signal}
                </span>
              ))}
            </div>
            <div className="pill-grid compact">
              {data.tiers.map((tier) => (
                <span key={tier.id} className="line-pill">
                  <Layers3 size={14} aria-hidden="true" />
                  {tier.name}
                </span>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <p className="contact-form__title">{copy.formTitle}</p>
            <div className="contact-form__row">
              <input placeholder={copy.firstName} required />
              <input placeholder={copy.lastName} required />
            </div>
            <input placeholder={copy.email} type="email" required />
            <input placeholder={copy.org} required />
            <input placeholder={copy.country} />
            <textarea rows={4} placeholder={copy.notes} />
            <label className="checkbox-row">
              <input type="checkbox" required />
              <span>{copy.consent}</span>
            </label>
            <button type="submit" className="pill-cta">
              {copy.submit}
            </button>
          </form>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.bandsKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Layers3 className="section-icon" aria-hidden="true" />
              {copy.bandsTitle}
            </h2>
          </div>
          <div className="case-grid">
            {copy.bands.map((band) => {
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
              <p className="card-eyebrow">{copy.factorsTitle}</p>
            </div>
            <ul>
              {copy.pricingFactors.map((item) => (
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
              <p className="card-eyebrow">{copy.deliveryTitle}</p>
            </div>
            <ul>
              {copy.deliveryModel.map((item) => (
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
            <p className="kicker">{copy.ctaKicker}</p>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
          </div>
          <a
            href="/platform"
            className="ghost-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/platform");
            }}
          >
            {copy.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
