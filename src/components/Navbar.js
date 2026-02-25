import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const NAV = [
    { id: "about", label: "About" },
    { id: "principles", label: "Principles" },
    { id: "how", label: "Flow" },
    { id: "audience", label: "Audience" },
    { id: "technology", label: "Technology" },
    { id: "ecosystem", label: "Ecosystem" },
    { id: "founder", label: "Founder" },
];
export default function Navbar() {
    const [active, setActive] = useState("about");
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const h = document.body.scrollHeight - window.innerHeight;
            setProgress(h > 0 ? (y / h) * 100 : 0);
            const top = y + 120;
            let cur = "about";
            for (const item of NAV) {
                const el = document.getElementById(item.id);
                if (el && el.offsetTop <= top)
                    cur = item.id;
            }
            setActive(cur);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (_jsxs("nav", { className: "fixed top-0 left-0 w-full z-50", children: [_jsx("div", { className: "fixed top-0 left-0 h-[2px] bg-accent2", style: { width: `${progress}%`, boxShadow: "0 0 10px rgba(244,200,74,.65)" } }), _jsx("div", { className: "border-b border-line bg-[#0a0c11]/92 backdrop-blur-md", children: _jsxs("div", { className: "container py-3", children: [_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [_jsx("img", { src: "/noxis-logo.svg", alt: "Noxis", className: "h-10 md:h-11 w-auto" }), _jsx("span", { className: "hidden md:inline-flex rounded-md border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-mute", children: "secure vision suite" })] }), _jsx("a", { href: "#how", className: "btn-primary hidden md:inline-flex !text-xs !px-3 !py-1.5 uppercase tracking-[0.08em]", children: "Open Flow" })] }), _jsx("div", { className: "mt-3 flex items-center gap-2 overflow-x-auto pb-1", children: NAV.map((item) => (_jsxs("a", { href: `#${item.id}`, className: "relative shrink-0 rounded-lg px-2 py-1", children: [_jsx("span", { className: `text-xs uppercase tracking-[0.08em] transition ${active === item.id ? "text-ink" : "text-mute"}`, children: item.label }), active === item.id && (_jsx(motion.span, { layoutId: "nav-underline", className: "absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-accent2" }))] }, item.id))) })] }) })] }));
}
