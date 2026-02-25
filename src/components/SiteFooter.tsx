import { industries, roles, tiers, useCases } from "../content/siteData";

type SiteFooterProps = {
  onNavigate: (path: string) => void;
};

const platformLinks = [
  { label: "Constellation Command Grid", path: "/platform" },
  { label: "Realtime Vision Core", path: "/platform#vision" },
  { label: "Narrative Risk Engine", path: "/platform#narrative" },
  { label: "Aerial ISR Fabric", path: "/platform#aerial" },
];

const companyLinks = [
  { label: "Mission and Oversight", path: "/company" },
  { label: "Alliances", path: "/company#alliances" },
  { label: "Leadership", path: "/company#leadership" },
  { label: "Contact", path: "/pricing#contact" },
];

const learnLinks = [
  { label: "LAB Reports", path: "/lab" },
  { label: "Tier Architecture", path: "/platform#tiers" },
  { label: "Use Case Matrix", path: "/solutions#use-cases" },
  { label: "Governance Model", path: "/company#governance" },
];

function FooterLink({ label, path, onNavigate }: { label: string; path: string; onNavigate: (path: string) => void }) {
  return (
    <a
      href={path}
      className="footer-link"
      onClick={(event) => {
        event.preventDefault();
        onNavigate(path);
      }}
    >
      {label}
    </a>
  );
}

export default function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="newsletter-card">
            <h3>Subscribe to Mission Updates</h3>
            <p>Receive deployment notes, threat briefs, and operational methodology updates.</p>
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input type="email" placeholder="Work email address" aria-label="Work email address" required />
              <button type="submit" className="pill-cta">
                Subscribe
              </button>
            </form>
          </div>

          <div className="footer-columns">
            <div>
              <h4>Platform</h4>
              <div className="footer-list">
                {platformLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="footer-list">
                {companyLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
            <div>
              <h4>Learn</h4>
              <div className="footer-list">
                {learnLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__matrix">
          <article>
            <h5>Tier Stack</h5>
            <ul>
              {tiers.map((tier) => (
                <li key={tier.id}>{tier.name}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>Industries</h5>
            <ul>
              {industries.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>Roles</h5>
            <ul>
              {roles.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>Use Cases</h5>
            <ul>
              {useCases.map((entry) => (
                <li key={entry.title}>{entry.title}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 NOXIS // Sovereign intelligence operations.</span>
          <span>Built for mandate-based deployment and accountable oversight.</span>
        </div>
      </div>
    </footer>
  );
}
