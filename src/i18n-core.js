import { createContext, useContext } from "react";
export const DEFAULT_LANG = "en";
export const STORAGE_KEY = "noxis-language";
export const I18nContext = createContext(null);
export function normalizeLanguage(value) {
    return value === "cs" ? "cs" : "en";
}
export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return ctx;
}
