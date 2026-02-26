import { createContext, useContext } from "react";

export type Language = "en" | "cs";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const DEFAULT_LANG: Language = "en";
export const STORAGE_KEY = "noxis-language";

export const I18nContext = createContext<I18nContextValue | null>(null);

export function normalizeLanguage(value: unknown): Language {
  return value === "cs" ? "cs" : "en";
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
