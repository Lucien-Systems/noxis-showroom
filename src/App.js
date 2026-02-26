import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import LabPage from "./pages/LabPage";
import PlatformPage from "./pages/PlatformPage";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";
import { applyRouteSeo } from "./seo";
const routes = {
    "/": { render: (props) => _jsx(HomePage, { ...props }) },
    "/platform": { render: (props) => _jsx(PlatformPage, { ...props }) },
    "/solutions": { render: (props) => _jsx(SolutionsPage, { ...props }) },
    "/company": { render: (props) => _jsx(CompanyPage, { ...props }) },
    "/pricing": { render: (props) => _jsx(PricingPage, { ...props }) },
    "/lab": { render: (props) => _jsx(LabPage, { ...props }) },
};
function normalizePath(pathname) {
    if (!pathname || pathname === "/")
        return "/";
    return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
function splitTarget(target) {
    const [pathname, hash] = target.split("#");
    return {
        pathname: normalizePath(pathname || "/"),
        hash: hash ? `#${hash}` : "",
    };
}
function scrollToHash(hash) {
    if (!hash)
        return;
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
        applyRouteSeo(currentPath);
    }, [currentPath]);
    useEffect(() => {
        if (!window.location.hash) {
            window.scrollTo({ top: 0, behavior: "instant" });
            return;
        }
        requestAnimationFrame(() => {
            scrollToHash(window.location.hash);
        });
    }, [currentPath]);
    const onNavigate = (target) => {
        const { pathname, hash } = splitTarget(target);
        const knownPath = routes[pathname] ? pathname : "/";
        const nextUrl = `${knownPath}${hash}`;
        if (`${currentPath}${window.location.hash}` === nextUrl) {
            if (hash)
                scrollToHash(hash);
            return;
        }
        if (knownPath === currentPath) {
            window.history.pushState({}, "", nextUrl);
            if (hash) {
                scrollToHash(hash);
            }
            else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }
        window.history.pushState({}, "", nextUrl);
        setCurrentPath(knownPath);
    };
    return (_jsxs("div", { className: "site-shell", children: [_jsx(SiteHeader, { currentPath: currentPath, onNavigate: onNavigate }), _jsx("main", { className: "site-main", children: route.render({ onNavigate }) }), _jsx(SiteFooter, { onNavigate: onNavigate })] }));
}
