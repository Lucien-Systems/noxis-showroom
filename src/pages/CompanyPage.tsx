import type { LucideIcon } from "lucide-react";
import { Compass, Gavel, Handshake, ShieldCheck, Sparkles, Users, Waypoints } from "lucide-react";
import { companyMilestones } from "../content/siteData";

type CompanyPageProps = {
  onNavigate: (path: string) => void;
};

type LeadershipItem = {
  name: string;
  role: string;
  brief: string;
  icon: LucideIcon;
};

const leadership: LeadershipItem[] = [
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
];

const governancePoints = [
  "Mandate-aware access boundaries and role-scoped visibility",
  "Continuous operator accountability and intervention ledger",
  "Cryptographic receipts for court-compatible replay",
  "Data minimization and retention controls by jurisdiction",
  "Supervisory override chain for critical incidents",
  "Red-team and synthetic rehearsal environments",
];

const allianceItems = [
  "National command partners",
  "Critical infrastructure agencies",
  "Cyber and threat intelligence networks",
  "Emergency response authorities",
  "Public communication and media risk units",
  "Judicial and compliance oversight bodies",
];

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  return (
    <>
      <section className="hero-band hero-company">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">Company</p>
            <h1 className="display-title">Protectors of Narrative and Operational Integrity</h1>
            <p className="hero-copy">
              NOXIS helps institutions operate under pressure with stronger information integrity, faster situational
              awareness, and accountable decision authority.
            </p>
            <div className="hero-kpis" aria-label="Company posture">
              <span className="hero-kpi">
                <ShieldCheck size={16} aria-hidden="true" />
                Governance first
              </span>
              <span className="hero-kpi">
                <Users size={16} aria-hidden="true" />
                Institutional operations
              </span>
              <span className="hero-kpi">
                <Sparkles size={16} aria-hidden="true" />
                High-accountability deployment
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">Strategic Alliances</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">Policy + Operations + Legal</span>
          </div>
        </div>
      </section>

      <section id="governance" className="section-block section-dark">
        <div className="container section-2col">
          <article className="content-panel">
            <h2 className="section-title section-title--with-icon">
              <ShieldCheck className="section-icon" aria-hidden="true" />
              Mission and governance stance
            </h2>
            <p>
              We build sovereign intelligence systems for environments where narrative pressure, surveillance demands,
              and operational risk converge.
            </p>
            <p>
              Every deployment is designed for institutions that require legal-grade oversight, mandate controls, and
              full traceability.
            </p>
          </article>
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <Gavel size={18} />
              </span>
              <p className="card-eyebrow">Governance controls</p>
            </div>
            <ul>
              {governancePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="leadership" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Leadership</p>
            <h2 className="section-title section-title--with-icon">
              <Users className="section-icon" aria-hidden="true" />
              Mission team built for high-accountability operations
            </h2>
          </div>
          <div className="case-grid">
            {leadership.map((person) => {
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
            <p className="kicker">Alliance Framework</p>
            <h2 className="section-title section-title--with-icon">
              <Handshake className="section-icon" aria-hidden="true" />
              Partnerships across policy, security, and infrastructure domains
            </h2>
          </div>
          <div className="pill-grid">
            {allianceItems.map((item) => (
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
            <p className="kicker">Timeline</p>
            <h2 className="section-title section-title--with-icon">
              <Waypoints className="section-icon" aria-hidden="true" />
              NOXIS evolution
            </h2>
          </div>
          <div className="timeline-grid">
            {companyMilestones.map((milestone) => (
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
            <p className="kicker">Strategic Contact</p>
            <h2>Discuss alliance, policy, or deployment pathways.</h2>
            <p>Connect with the NOXIS team to align mission objectives with tiered implementation.</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            Contact Strategic Team
          </a>
        </div>
      </section>
    </>
  );
}
