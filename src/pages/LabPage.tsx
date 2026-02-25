import { labReports } from "../content/siteData";

type LabPageProps = {
  onNavigate: (path: string) => void;
};

export default function LabPage({ onNavigate }: LabPageProps) {
  return (
    <>
      <section className="hero-band hero-lab">
        <div className="container hero-grid">
          <div>
            <p className="kicker">LAB / Research and Intelligence Notes</p>
            <h1 className="display-title">Operational intelligence reports for high-risk environments</h1>
            <p className="hero-copy">
              NOXIS LAB publishes method notes, benchmark reports, and strategic intelligence briefs from the narrative,
              vision, and aerial operations domains.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Featured Reports</p>
            <h2 className="section-title">Latest intelligence publications</h2>
          </div>
          <div className="case-grid">
            {labReports.map((report) => (
              <article key={report.title} className="case-card">
                <p className="role-label">{report.category}</p>
                <h3>{report.title}</h3>
                <p>{report.excerpt}</p>
                <a href="/pricing#contact" className="ghost-cta" onClick={(event) => { event.preventDefault(); onNavigate("/pricing#contact"); }}>
                  Request Full Brief
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="container section-2col">
          <article className="module-card">
            <h3>Research tracks</h3>
            <ul>
              <li>Narrative attack pattern intelligence</li>
              <li>Vision pipeline reliability and latency</li>
              <li>Drone ISR continuity and geospatial correlation</li>
              <li>Oversight, legal traceability, and institutional governance</li>
            </ul>
          </article>
          <article className="module-card">
            <h3>Publication modes</h3>
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
            <p>Our analysts can produce targeted briefings for your policy, security, or command teams.</p>
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
