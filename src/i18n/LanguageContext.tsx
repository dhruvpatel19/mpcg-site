import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGUAGES, getLanguageMeta } from "./languages";
import { LANGUAGE_CODES, type LanguageCode, type UIStrings } from "./types";
import {
  GENERATED_LANGUAGE_LOADERS,
  GENERATED_LANGUAGES,
  getGeneratedLanguageMeta,
  isGeneratedLanguage,
} from "./generated/registry";
import { en } from "./strings/en";
import { fr } from "./strings/fr";
import { es } from "./strings/es";
import { ar } from "./strings/ar";
import { zh } from "./strings/zh";

const REVIEWED_STRINGS: Record<LanguageCode, UIStrings> = { en, fr, es, ar, zh };

const STORAGE_KEY = "mpcg.language";

export const isReviewedLanguage = (
  value: string | null | undefined,
): value is LanguageCode =>
  Boolean(value) && (LANGUAGE_CODES as readonly string[]).includes(value as string);

/** Any language served on-domain: reviewed or generated. */
export const isInAppLanguage = (value: string | null | undefined): boolean =>
  isReviewedLanguage(value) || (Boolean(value) && isGeneratedLanguage(value as string));

/** Shared shape for reviewed and generated language metadata. */
export interface ResolvedLanguageMeta {
  code: string;
  nativeName: string;
  englishName: string;
  htmlLang: string;
  localeTag: string;
  dir: "ltr" | "rtl";
}

const resolveMeta = (code: string): ResolvedLanguageMeta => {
  if (isReviewedLanguage(code)) {
    return getLanguageMeta(code);
  }
  return getGeneratedLanguageMeta(code) ?? getLanguageMeta("en");
};

const getInitialLanguage = (): string => {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isInAppLanguage(stored)) {
      return stored;
    }
  } catch {
    // localStorage unavailable (private mode, etc.) - fall through.
  }

  const browserLanguages = window.navigator.languages ?? [window.navigator.language];
  for (const browserLanguage of browserLanguages) {
    if (!browserLanguage) {
      continue;
    }
    const lower = browserLanguage.toLowerCase();
    const prefix = lower.split("-")[0];
    if (isReviewedLanguage(prefix)) {
      return prefix;
    }
    const generatedMatch = GENERATED_LANGUAGES.find(
      (language) =>
        language.code.toLowerCase() === lower ||
        language.code.toLowerCase().split("-")[0] === prefix,
    );
    if (generatedMatch) {
      return generatedMatch.code;
    }
  }

  return "en";
};

interface I18nContextValue {
  /** Active language code: a reviewed code or a generated-language code. */
  language: string;
  setLanguage: (language: string) => void;
  /** UI strings for the active language (English until a lazy chunk loads). */
  t: UIStrings;
  meta: ResolvedLanguageMeta;
  dir: "ltr" | "rtl";
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(getInitialLanguage);
  const [generatedStrings, setGeneratedStrings] = useState<UIStrings | null>(null);

  const setLanguage = (next: string) => {
    if (!isInAppLanguage(next)) {
      return;
    }
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting is best-effort only.
    }
  };

  useEffect(() => {
    if (isReviewedLanguage(language)) {
      setGeneratedStrings(null);
      return undefined;
    }

    let cancelled = false;
    setGeneratedStrings(null);
    const loader = GENERATED_LANGUAGE_LOADERS[language];
    if (!loader) {
      return undefined;
    }

    loader()
      .then((module) => {
        if (!cancelled) {
          setGeneratedStrings(module.strings);
        }
      })
      .catch(() => {
        // If the chunk fails to load, stay on English strings.
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const meta = resolveMeta(language);

  useEffect(() => {
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, [meta]);

  const value = useMemo<I18nContextValue>(() => {
    const t = isReviewedLanguage(language)
      ? REVIEWED_STRINGS[language]
      : (generatedStrings ?? en);

    return {
      language,
      setLanguage,
      t,
      meta,
      dir: meta.dir,
      isRTL: meta.dir === "rtl",
    };
  }, [language, generatedStrings, meta]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
};

export { LANGUAGES };
