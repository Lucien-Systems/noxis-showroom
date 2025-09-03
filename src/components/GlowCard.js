import { jsx as _jsx } from "react/jsx-runtime";
export default function GlowCard({ children, className = "" }) {
    return _jsx("div", { className: `card hover-glow ${className}`, children: children });
}
