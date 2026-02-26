import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { I18nContext, normalizeLanguage, STORAGE_KEY } from "./i18n-core";
export function I18nProvider({ children }) {
    const [language, setLanguageState] = useState(() => {
        const fromStorage = window.localStorage.getItem(STORAGE_KEY);
        return normalizeLanguage(fromStorage);
    });
    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language === "cs" ? "cs-CZ" : "en-US";
    }, [language]);
    const value = useMemo(() => ({
        language,
        setLanguage: (lang) => setLanguageState(normalizeLanguage(lang)),
    }), [language]);
    return _jsx(I18nContext.Provider, { value: value, children: children });
}
