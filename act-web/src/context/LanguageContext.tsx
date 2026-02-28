"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { translations, type Lang, type Translations } from "@/lib/i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  t: translations.fr,
  toggle: () => {},
});

const STORAGE_KEY = "act-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "fr") setLang(stored);
    } catch {
      // localStorage unavailable (e.g. SSR or private mode)
    }
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "fr" ? "en" : "fr";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang] as Translations, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
