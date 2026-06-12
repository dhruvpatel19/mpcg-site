export {
  LanguageProvider,
  useI18n,
  LANGUAGES,
  isInAppLanguage,
  isReviewedLanguage,
  type ResolvedLanguageMeta,
} from "./LanguageContext";
export { getLanguageMeta } from "./languages";
export { QUICK_PHRASES, type QuickPhrase } from "./phrases";
export { MORE_LANGUAGES, buildTranslateUrl, type MoreLanguage } from "./moreLanguages";
export {
  GENERATED_LANGUAGES,
  GENERATED_LANGUAGE_LOADERS,
  coveredProxyCodes,
  isGeneratedLanguage,
  type GeneratedLanguageMeta,
} from "./generated/registry";
export {
  fillTemplate,
  LANGUAGE_CODES,
  type LanguageCode,
  type LanguageMeta,
  type UIStrings,
} from "./types";
