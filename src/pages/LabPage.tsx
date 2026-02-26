import { Camera, FileText, FlaskConical, Orbit, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type LabPageProps = {
  onNavigate: (path: string) => void;
};

const reportIcons = [Radar, Camera, Orbit, ShieldCheck];

export default function LabPage({ onNavigate }: LabPageProps) {
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          kicker: "LAB / Výzkum a zpravodajské poznámky",
          title: "Operační zpravodajské reporty pro vysoce riziková prostředí",
          hero:
            "NOXIS LAB publikuje metodické poznámky, benchmark reporty a strategické briefy z narativní, kamerové i letecké domény.",
          heroSignals: ["Narativní inteligence", "Kamerové benchmarky", "Metodika ISR"],
          heroAria: "Výstupy laboratoře",
          visualTop: "Výzkum opřený o provoz",
          visualBottom: "Poznámky pro rozhodování",
          stats: [
            { value: "48 h", label: "Typický cyklus analýzy alertu" },
            { value: "3", label: "Hlavní výzkumné stopy" },
            { value: "Týdně", label: "Metodické a benchmark aktualizace" },
          ],
          reportsKicker: "Vybrané reporty",
          reportsTitle: "Nejnovější zpravodajské publikace",
          ctaReport: "Vyžádat plný briefing",
          tracksTitle: "Výzkumné stopy",
          modesTitle: "Formáty publikací",
          tracks: [
            "Inteligence vzorců narativních útoků",
            "Spolehlivost a latence kamerových pipeline",
            "Kontinuita dronového ISR a geospatial korelace",
            "Oversight, právní dohledatelnost a institucionální governance",
          ],
          modes: ["Executive threat brief", "Metodická poznámka pro operátory", "Systémový benchmark update", "Red-team observační memo"],
          cellKicker: "RAV3N Cell",
          cellTitle: "Potřebujete vlastní zpravodajský report pro svůj mission profil?",
          cellText: "Analytický tým připraví cílené briefingy pro policy, bezpečnostní i velitelské role.",
          cellButton: "Vyžádat vlastní report",
        }
      : {
          kicker: "LAB / Research and Intelligence Notes",
          title: "Operational intelligence reports for high-risk environments",
          hero:
            "NOXIS LAB publishes method notes, benchmark reports, and strategic briefs from narrative, vision, and aerial operations.",
          heroSignals: ["Narrative intelligence", "Vision benchmarks", "ISR method notes"],
          heroAria: "Lab output",
          visualTop: "Research-backed Operations",
          visualBottom: "Decision-grade Intelligence Notes",
          stats: [
            { value: "48h", label: "Typical alert cycle analysis" },
            { value: "3", label: "Research tracks" },
            { value: "Weekly", label: "Method and benchmark updates" },
          ],
          reportsKicker: "Featured Reports",
          reportsTitle: "Latest intelligence publications",
          ctaReport: "Request Full Brief",
          tracksTitle: "Research tracks",
          modesTitle: "Publication modes",
          tracks: [
            "Narrative attack pattern intelligence",
            "Vision pipeline reliability and latency",
            "Drone ISR continuity and geospatial correlation",
            "Oversight, legal traceability, and institutional governance",
          ],
          modes: ["Executive threat brief", "Operator methodology note", "System benchmark update", "Red-team observation memo"],
          cellKicker: "RAV3N Cell",
          cellTitle: "Need a custom intelligence report for your mission profile?",
          cellText: "Our analysts can produce targeted briefings for policy, security, and command teams.",
          cellButton: "Request Custom Report",
        };

  return (
    <>
      <section className="hero-band hero-lab">
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
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/noxis-hero.png" alt="" />
            <span className="hero-visual__badge hero-visual__badge--top">{copy.visualTop}</span>
            <span className="hero-visual__badge hero-visual__badge--bottom">{copy.visualBottom}</span>
          </div>
        </div>
      </section>

      <section className="section-block section-dark stats-band">
        <div className="container stats-grid">
          {copy.stats.map((stat) => (
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
            <p className="kicker">{copy.reportsKicker}</p>
            <h2 className="section-title section-title--with-icon">
              <FlaskConical className="section-icon" aria-hidden="true" />
              {copy.reportsTitle}
            </h2>
          </div>
          <div className="case-grid">
            {data.labReports.map((report, index) => {
              const Icon = reportIcons[index] ?? FileText;
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
                    {copy.ctaReport}
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
              <p className="card-eyebrow">{copy.tracksTitle}</p>
            </div>
            <ul>
              {copy.tracks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="module-card">
            <div className="card-head">
              <span className="card-icon" aria-hidden="true">
                <Sparkles size={18} />
              </span>
              <p className="card-eyebrow">{copy.modesTitle}</p>
            </div>
            <ul>
              {copy.modes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-block">
        <div className="container cta-block__inner">
          <div>
            <p className="kicker">{copy.cellKicker}</p>
            <h2>{copy.cellTitle}</h2>
            <p>{copy.cellText}</p>
          </div>
          <a
            href="/pricing#contact"
            className="pill-cta"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/pricing#contact");
            }}
          >
            {copy.cellButton}
          </a>
        </div>
      </section>
    </>
  );
}
