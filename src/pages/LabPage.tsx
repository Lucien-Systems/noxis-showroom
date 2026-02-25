import type { LucideIcon } from "lucide-react";
import { Camera, FileText, FlaskConical, Orbit, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { labReports } from "../content/siteData";

type LabPageProps = {
  onNavigate: (path: string) => void;
};

const reportIcons: Record<string, LucideIcon> = {
  "Narrative Intelligence": Radar,
  "Vision Operations": Camera,
  "Drone Operations": Orbit,
  Governance: ShieldCheck,
};

const labStats = [
  { value: "48h", label: "Typical alert cycle analysis" },
  { value: "3", label: "Research tracks" },
  { value: "Weekly", label: "Method and benchmark updates" },
];

export default function LabPage({ onNavigate }: LabPageProps) {
  return (
    <>
      <section className="hero-band hero-lab">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="kicker">LAB / Research and Intelligence Notes</p>
            <h1 className="display-title">Operational intelligence reports for high-risk environments</h1>
            <p className="hero-copy">
              NOXIS LAB publishes method notes, benchmark reports, and strategic briefs from narrative, vision, and
              aerial operations.
            </p>
            <div className="hero-kpis" aria-label="Lab output">
              <span className="hero-kpi">
                <Radar size={16} aria-hidden="true" />
                Narrative intelligence
              </span>
              <span className="hero-kpi">
                <Camera size={16} aria-hidden="true" />
                Vision benchmarks
              </span>
              <span className="hero-kpi">
                <Orbit size={16} aria-hidden="true" />
                ISR method notes
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">Research-backed Operations</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">Decision-grade Intelligence Notes</span>
          </div>
        </div>
      </section>

      <section className="section-block section-dark stats-band">
        <div className="container stats-grid">
          {labStats.map((stat) => (
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
            <p className="kicker">Featured Reports</p>
            <h2 className="section-title section-title--with-icon">
              <FlaskConical className="section-icon" aria-hidden="true" />
              Latest intelligence publications
            </h2>
          </div>
          <div className="case-grid">
            {labReports.map((report) => {
              const Icon = reportIcons[report.category] ?? FileText;
              return (
                <article key={report.title} className="case-card">
                  <div className="card-head">
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p className="card-eyebrow">{report.category}</p>
                  </div>
                  <h3>{report.title}</h3>
                  <p>{report.excerpt}</p>
                  <a
                    href="/pricing#contact"
                    className="ghost-cta"
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate("/pricing#contact");
                    }}
                  >
                    Request Full Brief
                  </a>
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
                <Radar size={18} />
              </span>
              <p className="card-eyebrow">Research tracks</p>
            </div>
            <ul>
              <li>Narrative attack pattern intelligence</li>
              <li>Vision pipeline reliability and latency</li>
              <li>Drone ISR continuity and geospatial correlation</li>
              <li>Oversight, legal traceability, and institutional governance</li>
            </ul>
          </article>
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <Sparkles size={18} />
              </span>
              <p className="card-eyebrow">Publication modes</p>
            </div>
            <ul>
              <li>Executive threat brief</li>
              <li>Operator methodology note</li>
              <li>System benchmark update</li>
              <li>Red-team observation memo</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">RAV3N Cell</p>
            <h2>Need a custom intelligence report for your mission profile?</h2>
            <p>Our analysts can produce targeted briefings for policy, security, and command teams.</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            Request Custom Report
          </a>
        </div>
      </section>
    </>
  );
}
