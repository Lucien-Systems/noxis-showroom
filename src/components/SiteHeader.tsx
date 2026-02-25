import { useMemo } from "react";

type NavItem = {
  label: string;
  path: string;
};

type SiteHeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

const navItems: NavItem[] = [
  { label: "Platform", path: "/platform" },
  { label: "Solutions", path: "/solutions" },
  { label: "Company", path: "/company" },
  { label: "LAB", path: "/lab" },
  { label: "Pricing", path: "/pricing" },
];

function isActivePath(currentPath: string, target: string) {
  if (target === "/") return currentPath === "/";
  return currentPath === target || currentPath.startsWith(`${target}/`);
}

export default function SiteHeader({ currentPath, onNavigate }: SiteHeaderProps) {
  const activeMap = useMemo(() => {
    const state = new Map<string, boolean>();
    for (const item of navItems) {
      state.set(item.path, isActivePath(currentPath, item.path));
    }
    return state;
  }, [currentPath]);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <button
          type="button"
          className="brand-mark"
          onClick={() => onNavigate("/")}
          aria-label="Go to NOXIS homepage"
        >
          <img src="/noxis-logo.svg" alt="NOXIS" className="brand-mark__logo" />
          <span className="brand-mark__chip">Sovereign Intelligence Grid</span>
        </button>

        <nav className="top-nav" aria-label="Primary">
          {navItems.map((item) => (
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

        <a
          href="/pricing#contact"
          className="pill-cta"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/pricing#contact");
          }}
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}
