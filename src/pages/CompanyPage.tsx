import type { LucideIcon } from "lucide-react";
import { Compass, Gavel, Handshake, ShieldCheck, Sparkles, Users, Waypoints } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type CompanyPageProps = {
  onNavigate: (path: string) => void;
};

type LeadershipItem = {
  name: string;
  role: string;
  brief: string;
  icon: LucideIcon;
};

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "Společnost",
          title: "Strážci informační a operační integrity",
          hero:
            "NOXIS pomáhá institucím fungovat pod tlakem s vyšší důvěryhodností informací, rychlejším situačním přehledem a jasnou odpovědností za rozhodnutí.",
          heroSignals: ["Governance na prvním místě", "Institucionální provoz", "Nasazení s vysokou odpovědností"],
          heroAria: "Postoj společnosti",
          visualTop: "Strategické aliance",
          visualBottom: "Policy + Operace + Právo",
          governanceKicker: "Governance",
          governanceTitle: "Mise a rámec odpovědnosti",
          governanceIntroA:
            "Stavíme suverénní zpravodajské systémy pro prostředí, kde se střetává informační tlak, požadavky dohledu a provozní riziko.",
          governanceIntroB:
            "Každé nasazení navrhujeme pro instituce, které vyžadují právně obhajitelný dohled, mandátové hranice a plnou dohledatelnost.",
          governanceListTitle: "Governance kontrolní prvky",
          governancePoints: [
            "Mandátové hranice přístupu a viditelnost podle rolí",
            "Průběžná odpovědnost operátorů a ledger zásahů",
            "Kryptografické receipts pro právně obhajitelný replay",
            "Pravidla minimalizace a retence dat podle jurisdikce",
            "Supervizní override řetězec pro kritické incidenty",
            "Red-team a syntetické rehearsal prostředí",
          ],
          leadershipKicker: "Vedení",
          leadershipTitle: "Tým postavený pro provoz s vysokou odpovědností",
          allianceKicker: "Aliance",
          allianceTitle: "Partnerství napříč policy, bezpečností a infrastrukturou",
          alliances: [
            "Národní velitelské instituce",
            "Správa kritické infrastruktury",
            "Cyber a threat intelligence sítě",
            "Složky krizové odezvy",
            "Týmy veřejné komunikace a mediálních rizik",
            "Právní a compliance dohledové autority",
          ],
          timelineKicker: "Timeline",
          timelineTitle: "Evoluce NOXIS",
          ctaKicker: "Strategický kontakt",
          ctaTitle: "Chcete řešit alianci, policy nebo cestu nasazení?",
          ctaText: "Spojte se s týmem NOXIS a nastavme implementaci podle vašich cílů.",
          ctaButton: "Kontaktovat strategický tým",
          leadership: [
            {
              name: "Adam Karl Lucien",
              role: "Hlavní architekt, NOXIS",
              brief:
                "Navrhuje vícevrstvou architekturu inteligence a governance doktrínu pro institucionální nasazení.",
              icon: Compass,
            },
            {
              name: "Strategic Operations Cell",
              role: "Jednotka plánování misí",
              brief:
                "Tvoří cross-tier playbooky pro eskalaci narativních hrozeb, dohledové operace a koordinaci ISR.",
              icon: Waypoints,
            },
            {
              name: "Oversight and Legal Team",
              role: "Governance autorita",
              brief:
                "Zajišťuje soulad s mandáty, odpovědnost přístupů a auditní připravenost v aktivním provozu.",
              icon: Gavel,
            },
          ] as LeadershipItem[],
        }
      : {
          kicker: "Company",
          title: "Protectors of Narrative and Operational Integrity",
          hero:
            "NOXIS helps institutions operate under pressure with stronger information integrity, faster situational awareness, and accountable decision authority.",
          heroSignals: ["Governance first", "Institutional operations", "High-accountability deployment"],
          heroAria: "Company posture",
          visualTop: "Strategic Alliances",
          visualBottom: "Policy + Operations + Legal",
          governanceKicker: "Governance",
          governanceTitle: "Mission and governance stance",
          governanceIntroA:
            "We build sovereign intelligence systems for environments where narrative pressure, surveillance demands, and operational risk converge.",
          governanceIntroB:
            "Every deployment is designed for institutions that require legal-grade oversight, mandate controls, and full traceability.",
          governanceListTitle: "Governance controls",
          governancePoints: [
            "Mandate-aware access boundaries and role-scoped visibility",
            "Continuous operator accountability and intervention ledger",
            "Cryptographic receipts for court-compatible replay",
            "Data minimization and retention controls by jurisdiction",
            "Supervisory override chain for critical incidents",
            "Red-team and synthetic rehearsal environments",
          ],
          leadershipKicker: "Leadership",
          leadershipTitle: "Mission team built for high-accountability operations",
          allianceKicker: "Alliance Framework",
          allianceTitle: "Partnerships across policy, security, and infrastructure domains",
          alliances: [
            "National command partners",
            "Critical infrastructure agencies",
            "Cyber and threat intelligence networks",
            "Emergency response authorities",
            "Public communication and media risk units",
            "Judicial and compliance oversight bodies",
          ],
          timelineKicker: "Timeline",
          timelineTitle: "NOXIS evolution",
          ctaKicker: "Strategic Contact",
          ctaTitle: "Discuss alliance, policy, or deployment pathways.",
          ctaText: "Connect with the NOXIS team to align mission objectives with tiered implementation.",
          ctaButton: "Contact Strategic Team",
          leadership: [
            {
              name: "Adam Karl Lucien",
              role: "Chief Architect, NOXIS",
              brief: "Designs the tiered intelligence architecture and governance doctrine for institutional deployments.",
              icon: Compass,
            },
            {
              name: "Strategic Operations Cell",
              role: "Mission Planning Unit",
              brief: "Builds cross-tier playbooks for narrative escalation, surveillance response, and ISR coordination.",
              icon: Waypoints,
            },
            {
              name: "Oversight and Legal Team",
              role: "Governance Authority",
              brief: "Ensures mandate compliance, access accountability, and audit readiness across active operations.",
              icon: Gavel,
            },
          ] as LeadershipItem[],
        };

  return (
    <>
      <section className="hero-band hero-company">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display-title">{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="hero-kpis" aria-label={copy.heroAria}>
              {copy.heroSignals.map((label, index) => {
                const Icon = [ShieldCheck, Users, Sparkles][index] ?? ShieldCheck;
                return (
                  <span key={label} className="hero-kpi">
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

      <section id="governance" className="section-block section-dark">
        <div className="container section-2col">
          <article className="content-panel">
            <p className="kicker">{copy.governanceKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <ShieldCheck className="section-icon" aria-hidden="true" />
              {copy.governanceTitle}
            </h2>
            <p>{copy.governanceIntroA}</p>
            <p>{copy.governanceIntroB}</p>
          </article>
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <Gavel size={18} />
              </span>
              <p className="card-eyebrow">{copy.governanceListTitle}</p>
            </div>
            <ul>
              {copy.governancePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="leadership" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.leadershipKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Users className="section-icon" aria-hidden="true" />
              {copy.leadershipTitle}
            </h2>
          </div>
          <div className="case-grid">
            {copy.leadership.map((person) => {
              const Icon = person.icon;
              return (
                <article key={person.name} className="case-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{person.role}</p>
                  </div>
                  <h3>{person.name}</h3>
                  <p>{person.brief}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="alliances" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.allianceKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Handshake className="section-icon" aria-hidden="true" />
              {copy.allianceTitle}
            </h2>
          </div>
          <div className="pill-grid">
            {copy.alliances.map((item) => (
              <span key={item} className="line-pill">
                <Handshake size={14} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">{copy.timelineKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              {copy.timelineTitle}
            </h2>
          </div>
          <div className="timeline-grid">
            {data.companyMilestones.map((milestone) => (
              <article key={milestone.year} className="timeline-card">
                <p className="timeline-year">{milestone.year}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.note}</p>
              </article>
            ))}
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
