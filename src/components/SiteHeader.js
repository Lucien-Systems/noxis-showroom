import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
const navItems = [
    { label: "Platform", path: "/platform" },
    { label: "Solutions", path: "/solutions" },
    { label: "Company", path: "/company" },
    { label: "LAB", path: "/lab" },
    { label: "Pricing", path: "/pricing" },
];
function isActivePath(currentPath, target) {
    if (target === "/")
        return currentPath === "/";
    return currentPath === target || currentPath.startsWith(`${target}/`);
}
export default function SiteHeader({ currentPath, onNavigate }) {
    const activeMap = useMemo(() => {
        const state = new Map();
        for (const item of navItems) {
            state.set(item.path, isActivePath(currentPath, item.path));
        }
        return state;
    }, [currentPath]);
    return (_jsx("header", { className: "site-header", children: _jsxs("div", { className: "site-header__inner container", children: [_jsxs("button", { type: "button", className: "brand-mark", onClick: () => onNavigate("/"), "aria-label": "Go to NOXIS homepage", children: [_jsx("img", { src: "/noxis-logo.svg", alt: "NOXIS", className: "brand-mark__logo" }), _jsx("span", { className: "brand-mark__chip", children: "Sovereign Intelligence Grid" })] }), _jsx("nav", { className: "top-nav", "aria-label": "Primary", children: navItems.map((item) => (_jsx("a", { href: item.path, className: `top-nav__link ${activeMap.get(item.path) ? "is-active" : ""}`, onClick: (event) => {
                            event.preventDefault();
                            onNavigate(item.path);
                        }, children: item.label }, item.path))) }), _jsxs("a", { href: "/pricing#contact", className: "pill-cta", onClick: (event) => {
                        event.preventDefault();
                        onNavigate("/pricing#contact");
                    }, children: ["Book a Demo", _jsx(ArrowUpRight, { size: 16, "aria-hidden": "true" })] })] }) }));
}
