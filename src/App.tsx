import { useEffect, useMemo, useState } from "react";
import type { ReactElement } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import LabPage from "./pages/LabPage";
import PlatformPage from "./pages/PlatformPage";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";
import { useI18n } from "./i18n-core";
import { applyRouteSeo } from "./seo";

type PageProps = {
  onNavigate: (path: string) => void;
};

type RouteConfig = {
  render: (props: PageProps) => ReactElement;
};

const routes: Record<string, RouteConfig> = {
  "/": { render: (props) => <HomePage {...props} /> },
  "/platform": { render: (props) => <PlatformPage {...props} /> },
  "/solutions": { render: (props) => <SolutionsPage {...props} /> },
  "/company": { render: (props) => <CompanyPage {...props} /> },
  "/pricing": { render: (props) => <PricingPage {...props} /> },
  "/lab": { render: (props) => <LabPage {...props} /> },
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function splitTarget(target: string) {
  const [pathname, hash] = target.split("#");
  return {
    pathname: normalizePath(pathname || "/"),
    hash: hash ? `#${hash}` : "",
  };
}

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function App() {
  const { language } = useI18n();
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  const route = useMemo(() => routes[currentPath] ?? routes["/"], [currentPath]);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash);
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    applyRouteSeo(currentPath, language);
  }, [currentPath, language]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    requestAnimationFrame(() => {
      scrollToHash(window.location.hash);
    });
  }, [currentPath]);

  const onNavigate = (target: string) => {
    const { pathname, hash } = splitTarget(target);
    const knownPath = routes[pathname] ? pathname : "/";
    const nextUrl = `${knownPath}${hash}`;

    if (`${currentPath}${window.location.hash}` === nextUrl) {
      if (hash) scrollToHash(hash);
      return;
    }

    if (knownPath === currentPath) {
      window.history.pushState({}, "", nextUrl);
      if (hash) {
        scrollToHash(hash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    window.history.pushState({}, "", nextUrl);
    setCurrentPath(knownPath);
  };

  return (
    <div className="site-shell">
      <SiteHeader currentPath={currentPath} onNavigate={onNavigate} />
      <main className="site-main">{route.render({ onNavigate })}</main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
