import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import { useI18n } from "../i18n-core";

type NavItem = {
  label: string;
  path: string;
};

type SiteHeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

function isActivePath(currentPath: string, target: string) {
  if (target === "/") return currentPath === "/";
  return currentPath === target || currentPath.startsWith(`${target}/`);
}

export default function SiteHeader({ currentPath, onNavigate }: SiteHeaderProps) {
  const { language, setLanguage } = useI18n();

  const copy =
    language === "cs"
      ? {
          brandChip: "Suverénní zpravodajská síť",
          homeAria: "Přejít na domovskou stránku NOXIS",
          nav: [
            { label: "Platforma", path: "/platform" },
            { label: "Řešení", path: "/solutions" },
            { label: "Společnost", path: "/company" },
            { label: "LAB", path: "/lab" },
            { label: "Ceník", path: "/pricing" },
          ] as NavItem[],
          cta: "Domluvit demo",
          navAria: "Hlavní navigace",
          langAria: "Přepínač jazyka",
        }
      : {
          brandChip: "Sovereign Intelligence Grid",
          homeAria: "Go to NOXIS homepage",
          nav: [
            { label: "Platform", path: "/platform" },
            { label: "Solutions", path: "/solutions" },
            { label: "Company", path: "/company" },
            { label: "LAB", path: "/lab" },
            { label: "Pricing", path: "/pricing" },
          ] as NavItem[],
          cta: "Book a Demo",
          navAria: "Primary navigation",
          langAria: "Language switcher",
        };

  const activeMap = useMemo(() => {
    const state = new Map<string, boolean>();
    for (const item of copy.nav) {
      state.set(item.path, isActivePath(currentPath, item.path));
    }
    return state;
  }, [copy.nav, currentPath]);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <button
          type="button"
          className="brand-mark"
          onClick={() => onNavigate("/")}
          aria-label={copy.homeAria}
        >
          <img src="/noxis-logo.svg" alt="NOXIS" className="brand-mark__logo" />
          <span className="brand-mark__chip">{copy.brandChip}</span>
        </button>

        <nav className="top-nav" aria-label={copy.navAria}>
          {copy.nav.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`top-nav__link ${activeMap.get(item.path) ? "is-active" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.path);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch" role="group" aria-label={copy.langAria}>
          <button
            type="button"
            className={`lang-switch__btn ${language === "en" ? "is-active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-switch__btn ${language === "cs" ? "is-active" : ""}`}
            onClick={() => setLanguage("cs")}
          >
            CZ
          </button>
        </div>

        <a
          href="/pricing#contact"
          className="pill-cta"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/pricing#contact");
          }}
        >
          {copy.cta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
