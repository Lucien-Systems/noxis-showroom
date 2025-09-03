import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import WhatIs from "./sections/WhatIs";
import Atlas from "./sections/Atlas";
import Principles from "./sections/Principles";
import How from "./sections/How";
import Audience from "./sections/Audience";
import Technology from "./sections/Technology";
import Roadmap from "./sections/Roadmap";
import Founder from "./sections/Founder";
import Press from "./sections/Press";
function Wrap({ id, title, children }) {
    return (_jsx("section", { id: id, className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "section__title", children: title }), _jsx("div", { className: "mt-3", children: children })] }) }));
}
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("main", { style: { paddingTop: 80 }, children: [_jsx("section", { id: "top", className: "section", children: _jsx("div", { className: "container", children: _jsx(Hero, {}) }) }), _jsx(Wrap, { id: "about", title: "What is Noxis", children: _jsx(WhatIs, {}) }), _jsx(Wrap, { id: "atlas", title: "Noxis Atlas", children: _jsx("div", { className: "card p-6", children: _jsx(Atlas, {}) }) }), _jsx(Wrap, { id: "principles", title: "Key Principles", children: _jsx(Principles, {}) }), _jsx(Wrap, { id: "how", title: "How Noxis Works", children: _jsx(How, {}) }), _jsx(Wrap, { id: "audience", title: "Audience (Who it\u2019s for)", children: _jsx(Audience, {}) }), _jsx(Wrap, { id: "technology", title: "Technology (high-level)", children: _jsx(Technology, {}) }), _jsx(Wrap, { id: "roadmap", title: "Status & Roadmap", children: _jsx(Roadmap, {}) }), _jsx(Wrap, { id: "founder", title: "About the Founder", children: _jsx(Founder, {}) }), _jsx(Wrap, { id: "press", title: "Press & Media", children: _jsx(Press, {}) })] }), _jsx(Footer, {})] }));
}
