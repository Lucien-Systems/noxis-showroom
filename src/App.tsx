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

type PageProps = {
  onNavigate: (path: string) => void;
};

type RouteConfig = {
  title: string;
  render: (props: PageProps) => ReactElement;
};

const routes: Record<string, RouteConfig> = {
  "/": { title: "NOXIS | Sovereign Intelligence Grid", render: (props) => <HomePage {...props} /> },
  "/platform": { title: "Platform | NOXIS", render: (props) => <PlatformPage {...props} /> },
  "/solutions": { title: "Solutions | NOXIS", render: (props) => <SolutionsPage {...props} /> },
  "/company": { title: "Company | NOXIS", render: (props) => <CompanyPage {...props} /> },
  "/pricing": { title: "Pricing | NOXIS", render: (props) => <PricingPage {...props} /> },
  "/lab": { title: "LAB | NOXIS", render: (props) => <LabPage {...props} /> },
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
    document.title = route.title;
  }, [route.title]);

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
