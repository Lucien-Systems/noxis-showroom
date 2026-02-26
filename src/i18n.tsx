import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { I18nContext, normalizeLanguage, type Language, STORAGE_KEY } from "./i18n-core";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    return normalizeLanguage(fromStorage);
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "cs" ? "cs-CZ" : "en-US";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => setLanguageState(normalizeLanguage(lang)),
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
