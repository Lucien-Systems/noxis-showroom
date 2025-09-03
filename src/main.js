import { jsx as _jsx } from "react/jsx-runtime";
// src/main.tsx
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";
// Pokud legacy styly opravdu potřebuješ, nech jeden import. Jinak smaž.
// import "./styles/legacy.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
