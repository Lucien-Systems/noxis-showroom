import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import { useI18n } from "../i18n-core";
function isActivePath(currentPath, target) {
    if (target === "/")
        return currentPath === "/";
    return currentPath === target || currentPath.startsWith(`${target}/`);
}
export default function SiteHeader({ currentPath, onNavigate }) {
    const { language, setLanguage } = useI18n();
    const copy = language === "cs"
        ? {
            brandChip: "Suverénní zpravodajská síť",
            homeAria: "Přejít na domovskou stránku NOXIS",
            nav: [
                { label: "Platforma", path: "/platform" },
                { label: "Řešení", path: "/solutions" },
                { label: "Společnost", path: "/company" },
                { label: "LAB", path: "/lab" },
                { label: "Ceník", path: "/pricing" },
            ],
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
            ],
            cta: "Book a Demo",
            navAria: "Primary navigation",
            langAria: "Language switcher",
        };
    const activeMap = useMemo(() => {
        const state = new Map();
        for (const item of copy.nav) {
            state.set(item.path, isActivePath(currentPath, item.path));
        }
        return state;
    }, [copy.nav, currentPath]);
    return (_jsx("header", { className: "site-header", children: _jsxs("div", { className: "site-header__inner container", children: [_jsxs("button", { type: "button", className: "brand-mark", onClick: () => onNavigate("/"), "aria-label": copy.homeAria, children: [_jsx("img", { src: "/noxis-logo.svg", alt: "NOXIS", className: "brand-mark__logo" }), _jsx("span", { className: "brand-mark__chip", children: copy.brandChip })] }), _jsx("nav", { className: "top-nav", "aria-label": copy.navAria, children: copy.nav.map((item) => (_jsx("a", { href: item.path, className: `top-nav__link ${activeMap.get(item.path) ? "is-active" : ""}`, onClick: (event) => {
                            event.preventDefault();
                            onNavigate(item.path);
                        }, children: item.label }, item.path))) }), _jsxs("div", { className: "lang-switch", role: "group", "aria-label": copy.langAria, children: [_jsx("button", { type: "button", className: `lang-switch__btn ${language === "en" ? "is-active" : ""}`, onClick: () => setLanguage("en"), children: "EN" }), _jsx("button", { type: "button", className: `lang-switch__btn ${language === "cs" ? "is-active" : ""}`, onClick: () => setLanguage("cs"), children: "CZ" })] }), _jsxs("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                        event.preventDefault();
                        onNavigate("/pricing#contact");
                    }, children: [copy.cta, _jsx(ArrowUpRight, { size: 16, "aria-hidden": "true" })] })] }) }));
}
