import { jsx as _jsx } from "react/jsx-runtime";
export default function Shell({ children }) {
    return (_jsx("div", { className: "min-h-screen bg-bg text-ink", children: _jsx("div", { className: "mx-auto max-w-container px-6 md:px-10", children: children }) }));
}
