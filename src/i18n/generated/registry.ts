import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

/**
 * Registry of generated (machine-translated, unreviewed) languages that are
 * served on-domain exactly like the reviewed languages, but labelled as
 * automatic translation in the UI.
 *
 * Each language lives in src/i18n/generated/<code>.ts exporting:
 *   export const strings: UIStrings = { ... };
 *   export const pages: Record<string, PageContent> = { ... };
 *
 * Modules are lazy-loaded so each language is its own chunk and the default
 * bundle stays small.
 */
export interface GeneratedLanguageMeta {
  code: string;
  /** Native name, shown in the switcher in every language. */
  nativeName: string;
  englishName: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Locale tag for date formatting. */
  localeTag: string;
  dir: "ltr" | "rtl";
  /**
   * Google Translate proxy code this language replaces in the long-tail list
   * (defaults to `code` when omitted).
   */
  proxyCode?: string;
}

export interface GeneratedLanguageModule {
  strings: UIStrings;
  pages: Record<string, PageContent>;
}

export const GENERATED_LANGUAGES: ReadonlyArray<GeneratedLanguageMeta> = [
  { code: "am", nativeName: "አማርኛ", englishName: "Amharic", htmlLang: "am", localeTag: "am", dir: "ltr" },
  { code: "bn", nativeName: "বাংলা", englishName: "Bengali", htmlLang: "bn", localeTag: "bn", dir: "ltr" },
  { code: "zh-Hant", nativeName: "中文（繁體）", englishName: "Chinese (Traditional)", htmlLang: "zh-Hant", localeTag: "zh-TW", dir: "ltr", proxyCode: "zh-TW" },
  { code: "gu", nativeName: "ગુજરાતી", englishName: "Gujarati", htmlLang: "gu", localeTag: "gu", dir: "ltr" },
  { code: "ht", nativeName: "Kreyòl ayisyen", englishName: "Haitian Creole", htmlLang: "ht", localeTag: "ht", dir: "ltr" },
  { code: "ha", nativeName: "Hausa", englishName: "Hausa", htmlLang: "ha", localeTag: "ha", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi", htmlLang: "hi", localeTag: "hi", dir: "ltr" },
  { code: "ig", nativeName: "Igbo", englishName: "Igbo", htmlLang: "ig", localeTag: "ig", dir: "ltr" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese", htmlLang: "ja", localeTag: "ja", dir: "ltr" },
  { code: "ko", nativeName: "한국어", englishName: "Korean", htmlLang: "ko", localeTag: "ko", dir: "ltr" },
  { code: "ne", nativeName: "नेपाली", englishName: "Nepali", htmlLang: "ne", localeTag: "ne", dir: "ltr" },
  { code: "ps", nativeName: "پښتو", englishName: "Pashto", htmlLang: "ps", localeTag: "ps", dir: "rtl" },
  { code: "fa", nativeName: "فارسی / دری", englishName: "Persian / Dari", htmlLang: "fa", localeTag: "fa", dir: "rtl" },
  { code: "pl", nativeName: "Polski", englishName: "Polish", htmlLang: "pl", localeTag: "pl", dir: "ltr" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese", htmlLang: "pt", localeTag: "pt", dir: "ltr" },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", englishName: "Punjabi", htmlLang: "pa", localeTag: "pa", dir: "ltr" },
  { code: "ru", nativeName: "Русский", englishName: "Russian", htmlLang: "ru", localeTag: "ru", dir: "ltr" },
  { code: "si", nativeName: "සිංහල", englishName: "Sinhala", htmlLang: "si", localeTag: "si", dir: "ltr" },
  { code: "so", nativeName: "Soomaali", englishName: "Somali", htmlLang: "so", localeTag: "so", dir: "ltr" },
  { code: "sw", nativeName: "Kiswahili", englishName: "Swahili", htmlLang: "sw", localeTag: "sw", dir: "ltr" },
  { code: "tl", nativeName: "Tagalog", englishName: "Tagalog (Filipino)", htmlLang: "tl", localeTag: "fil", dir: "ltr" },
  { code: "ta", nativeName: "தமிழ்", englishName: "Tamil", htmlLang: "ta", localeTag: "ta", dir: "ltr" },
  { code: "ti", nativeName: "ትግርኛ", englishName: "Tigrinya", htmlLang: "ti", localeTag: "ti", dir: "ltr" },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish", htmlLang: "tr", localeTag: "tr", dir: "ltr" },
  { code: "uk", nativeName: "Українська", englishName: "Ukrainian", htmlLang: "uk", localeTag: "uk", dir: "ltr" },
  { code: "ur", nativeName: "اردو", englishName: "Urdu", htmlLang: "ur", localeTag: "ur", dir: "rtl" },
  { code: "vi", nativeName: "Tiếng Việt", englishName: "Vietnamese", htmlLang: "vi", localeTag: "vi", dir: "ltr" },
  { code: "yo", nativeName: "Yorùbá", englishName: "Yoruba", htmlLang: "yo", localeTag: "yo", dir: "ltr" },
];

export const GENERATED_LANGUAGE_LOADERS: Record<
  string,
  () => Promise<GeneratedLanguageModule>
> = {
  am: () => import("./am"),
  bn: () => import("./bn"),
  "zh-Hant": () => import("./zh-Hant"),
  gu: () => import("./gu"),
  ht: () => import("./ht"),
  ha: () => import("./ha"),
  hi: () => import("./hi"),
  ig: () => import("./ig"),
  ja: () => import("./ja"),
  ko: () => import("./ko"),
  ne: () => import("./ne"),
  ps: () => import("./ps"),
  fa: () => import("./fa"),
  pl: () => import("./pl"),
  pt: () => import("./pt"),
  pa: () => import("./pa"),
  ru: () => import("./ru"),
  si: () => import("./si"),
  so: () => import("./so"),
  sw: () => import("./sw"),
  tl: () => import("./tl"),
  ta: () => import("./ta"),
  ti: () => import("./ti"),
  tr: () => import("./tr"),
  uk: () => import("./uk"),
  ur: () => import("./ur"),
  vi: () => import("./vi"),
  yo: () => import("./yo"),
};

export const isGeneratedLanguage = (code: string): boolean =>
  Object.prototype.hasOwnProperty.call(GENERATED_LANGUAGE_LOADERS, code);

export const getGeneratedLanguageMeta = (
  code: string,
): GeneratedLanguageMeta | undefined =>
  GENERATED_LANGUAGES.find((language) => language.code === code);

/** Proxy codes already covered by an on-domain generated language. */
export const coveredProxyCodes = (): Set<string> =>
  new Set(
    GENERATED_LANGUAGES.map((language) => language.proxyCode ?? language.code),
  );
