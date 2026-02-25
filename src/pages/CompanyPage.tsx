import { companyMilestones } from "../content/siteData";

type CompanyPageProps = {
  onNavigate: (path: string) => void;
};

const leadership = [
  {
    name: "Adam Karl Lucien",
    role: "Chief Architect, NOXIS",
    brief: "Designs the tiered intelligence architecture and governance doctrine for institutional deployments.",
  },
  {
    name: "Strategic Operations Cell",
    role: "Mission Planning Unit",
    brief: "Builds cross-tier playbooks for narrative escalation, surveillance response, and ISR coordination.",
  },
  {
    name: "Oversight and Legal Team",
    role: "Governance Authority",
    brief: "Ensures mandate compliance, access accountability, and audit readiness across active operations.",
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

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  return (
    <>
      <section className="hero-band hero-company">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Company</p>
            <h1 className="display-title">Protectors of Narrative and Operational Integrity</h1>
            <p className="hero-copy">
              NOXIS exists to help institutions operate under pressure with stronger information integrity, faster
              situational awareness, and accountable decision authority.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
          </div>
        </div>
      </section>

      <section id="governance" className="section-block section-dark">
        <div className="container section-2col">
          <article>
            <h2 className="section-title">Mission and governance stance</h2>
            <p>
              We build sovereign intelligence systems for environments where narrative pressure, surveillance demands,
              and operational risk converge. Every NOXIS deployment is designed for high-control institutions requiring
              legal-grade oversight and traceability.
            </p>
            <p>
              Our architecture supports both national command structures and critical infrastructure operators under
              formal governance protocols.
            </p>
          </article>
          <article className="module-card">
            <h3>Governance controls</h3>
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
            <h2 className="section-title">Mission team built for high-accountability operations</h2>
          </div>
          <div className="case-grid">
            {leadership.map((person) => (
              <article key={person.name} className="case-card">
                <h3>{person.name}</h3>
                <p className="role-label">{person.role}</p>
                <p>{person.brief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="alliances" className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Alliance Framework</p>
            <h2 className="section-title">Partnerships across policy, security, and infrastructure domains</h2>
          </div>
          <div className="pill-grid">
            <span className="line-pill">National command partners</span>
            <span className="line-pill">Critical infrastructure agencies</span>
            <span className="line-pill">Cyber and threat intelligence networks</span>
            <span className="line-pill">Emergency response authorities</span>
            <span className="line-pill">Public communication and media risk units</span>
            <span className="line-pill">Judicial and compliance oversight bodies</span>
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Timeline</p>
            <h2 className="section-title">NOXIS evolution</h2>
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
