import { BookOpenText, Building2, Send, Shield } from "lucide-react";
import { getSiteData } from "../content/siteData";
import { useI18n } from "../i18n-core";

type SiteFooterProps = {
  onNavigate: (path: string) => void;
};

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
  const { language } = useI18n();
  const data = getSiteData(language);

  const copy =
    language === "cs"
      ? {
          newsletterTitle: "Odebírejte operační aktualizace",
          newsletterText: "Získejte přehledy o nasazení, threat briefy a metodické poznámky z praxe.",
          newsletterPlaceholder: "Pracovní e-mail",
          subscribe: "Odebírat",
          platformLinks: [
            { label: "Constellation Command Grid", path: "/platform" },
            { label: "Realtime Vision Core", path: "/platform#vision" },
            { label: "Narrative Risk Engine", path: "/platform#narrative" },
            { label: "Aerial ISR Fabric", path: "/platform#aerial" },
          ],
          companyLinks: [
            { label: "Mise a dohled", path: "/company" },
            { label: "Aliance", path: "/company#alliances" },
            { label: "Vedení", path: "/company#leadership" },
            { label: "Kontakt", path: "/pricing#contact" },
          ],
          learnLinks: [
            { label: "LAB reporty", path: "/lab" },
            { label: "Architektura vrstev", path: "/platform#tiers" },
            { label: "Matice scénářů", path: "/solutions#use-cases" },
            { label: "Governance model", path: "/company#governance" },
          ],
          colPlatform: "Platforma",
          colCompany: "Společnost",
          colLearn: "Zdroje",
          matrixTier: "Tier stack",
          matrixIndustry: "Odvětví",
          matrixRole: "Role",
          matrixUseCases: "Scénáře",
          copyright: "© 2026 NOXIS // Suverénní zpravodajské operace.",
          signoff: "Postaveno pro mandatované nasazení a dohledatelné rozhodování.",
        }
      : {
          newsletterTitle: "Subscribe to Mission Updates",
          newsletterText: "Receive deployment notes, threat briefs, and operational methodology updates.",
          newsletterPlaceholder: "Work email address",
          subscribe: "Subscribe",
          platformLinks: [
            { label: "Constellation Command Grid", path: "/platform" },
            { label: "Realtime Vision Core", path: "/platform#vision" },
            { label: "Narrative Risk Engine", path: "/platform#narrative" },
            { label: "Aerial ISR Fabric", path: "/platform#aerial" },
          ],
          companyLinks: [
            { label: "Mission and Oversight", path: "/company" },
            { label: "Alliances", path: "/company#alliances" },
            { label: "Leadership", path: "/company#leadership" },
            { label: "Contact", path: "/pricing#contact" },
          ],
          learnLinks: [
            { label: "LAB Reports", path: "/lab" },
            { label: "Tier Architecture", path: "/platform#tiers" },
            { label: "Use Case Matrix", path: "/solutions#use-cases" },
            { label: "Governance Model", path: "/company#governance" },
          ],
          colPlatform: "Platform",
          colCompany: "Company",
          colLearn: "Learn",
          matrixTier: "Tier Stack",
          matrixIndustry: "Industries",
          matrixRole: "Roles",
          matrixUseCases: "Use Cases",
          copyright: "© 2026 NOXIS // Sovereign intelligence operations.",
          signoff: "Built for mandate-based deployment and accountable oversight.",
        };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="newsletter-card">
            <h3>{copy.newsletterTitle}</h3>
            <p>{copy.newsletterText}</p>
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input type="email" placeholder={copy.newsletterPlaceholder} aria-label={copy.newsletterPlaceholder} required />
              <button type="submit" className="pill-cta">
                {copy.subscribe}
              </button>
            </form>
          </div>

          <div className="footer-columns">
            <div>
              <h4 className="footer-heading">
                <Building2 size={14} aria-hidden="true" />
                {copy.colPlatform}
              </h4>
              <div className="footer-list">
                {copy.platformLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="footer-heading">
                <Shield size={14} aria-hidden="true" />
                {copy.colCompany}
              </h4>
              <div className="footer-list">
                {copy.companyLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="footer-heading">
                <BookOpenText size={14} aria-hidden="true" />
                {copy.colLearn}
              </h4>
              <div className="footer-list">
                {copy.learnLinks.map((link) => (
                  <FooterLink key={link.path} label={link.label} path={link.path} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__matrix">
          <article>
            <h5>{copy.matrixTier}</h5>
            <ul>
              {data.tiers.map((tier) => (
                <li key={tier.id}>{tier.name}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>{copy.matrixIndustry}</h5>
            <ul>
              {data.industries.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>{copy.matrixRole}</h5>
            <ul>
              {data.roles.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h5>{copy.matrixUseCases}</h5>
            <ul>
              {data.useCases.map((entry) => (
                <li key={entry.title}>{entry.title}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="site-footer__bottom">
          <span>{copy.copyright}</span>
          <span className="footer-signoff">
            <Send size={13} aria-hidden="true" />
            {copy.signoff}
          </span>
        </div>
      </div>
    </footer>
  );
}
