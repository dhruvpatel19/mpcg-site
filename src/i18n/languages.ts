import type { LanguageMeta } from "./types";

/**
 * Languages the full guide is available in. Each language is labelled by its
 * own native name; never by an English-only shorthand.
 */
export const LANGUAGES: ReadonlyArray<LanguageMeta> = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
    htmlLang: "en-CA",
    localeTag: "en-CA",
    dir: "ltr",
  },
  {
    code: "fr",
    nativeName: "Français",
    englishName: "French",
    htmlLang: "fr-CA",
    localeTag: "fr-CA",
    dir: "ltr",
  },
  {
    code: "es",
    nativeName: "Español",
    englishName: "Spanish",
    htmlLang: "es",
    localeTag: "es",
    dir: "ltr",
  },
  {
    code: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
    htmlLang: "ar",
    localeTag: "ar",
    dir: "rtl",
  },
  {
    code: "zh",
    nativeName: "中文（简体）",
    englishName: "Chinese (Simplified)",
    htmlLang: "zh-Hans",
    localeTag: "zh-CN",
    dir: "ltr",
  },
] as const;

export const getLanguageMeta = (code: string) =>
  LANGUAGES.find((language) => language.code === code) ?? LANGUAGES[0];
