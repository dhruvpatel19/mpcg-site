import type {
  AccessMode,
  AudienceTag,
  PaymentModel,
  ServiceCategorySlug,
  ServiceLevel,
  ServiceVerificationStatus,
} from "../types";

export const LANGUAGE_CODES = ["en", "fr", "es", "ar", "zh"] as const;
export type LanguageCode = (typeof LANGUAGE_CODES)[number];

export interface LanguageMeta {
  code: LanguageCode;
  /** Native name, shown in the switcher in every language. */
  nativeName: string;
  /** English name, shown as a secondary label. */
  englishName: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Locale tag for date formatting. */
  localeTag: string;
  dir: "ltr" | "rtl";
}

export interface NavItemStrings {
  label: string;
  to: string;
  description: string;
}

export interface NavGroupStrings {
  title: string;
  items: NavItemStrings[];
}

export type LocationFilterKey =
  | "downtown"
  | "north-end"
  | "west-end"
  | "campus"
  | "online";

export type IssueTypeKey =
  | "outdated hours"
  | "wrong phone or website"
  | "eligibility or access issue"
  | "translation or accessibility problem"
  | "missing service or content"
  | "other";

/**
 * Every user-facing string in the UI chrome. Page body content lives in the
 * per-language content files under src/data/cities/kingston/.
 */
export interface UIStrings {
  common: {
    loadingPage: string;
    /** Shown in non-English languages above directory results. */
    directoryEnglishNote: string;
  };
  header: {
    emergencyBanner: string;
    tagline: string;
    languageButton: string;
    languageButtonAria: string;
    openNavigation: string;
    primaryNavLabel: string;
  };
  languageModal: {
    title: string;
    description: string;
    chooseLanguageTitle: string;
    chooseLanguageNote: string;
    safetyTitle: string;
    safetyBody: string;
    phrasesTitle: string;
    phrasesNote: string;
    callHealth811: string;
    accessibilityCta: string;
    close: string;
  };
  moreLanguages: {
    title: string;
    description: string;
    selectLabel: string;
    selectPlaceholder: string;
    openButton: string;
    disclaimer: string;
  };
  /**
   * Funder acknowledgment. Optional so translation files can lag behind;
   * the UI falls back to English when missing.
   */
  funding?: {
    /** Shown next to the OMSA logo in the footer. */
    acknowledgment: string;
    logoAlt: string;
  };
  /**
   * Strings for the unified language picker. Optional so translation files
   * can lag behind; the UI falls back to English for missing namespaces.
   */
  languagePicker?: {
    searchPlaceholder: string;
    onSiteGroup: string;
    proxyGroup: string;
    reviewedBadge: string;
    automaticBadge: string;
    interpreterTab: string;
    noMatches: string;
    note: string;
  };
  navigation: NavGroupStrings[];
  emergencyActions: {
    heading: string;
    items: Record<string, { label: string; description: string }>;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    heroTitle: string;
    heroLead: string;
    cardNeedHelp: { title: string; body: string };
    cardStartHere: { title: string; body: string };
    cardSearch: { title: string; body: string };
    cardLanguage: { title: string; body: string };
    quickDecisionsKicker: string;
    quickDecisionsTitle: string;
    quickDecisionLines: string[];
    trustNoteTitle: string;
    trustNoteBody: string;
    newcomerKicker: string;
    newcomerTitle: string;
    newcomerSteps: Array<{ title: string; body: string }>;
    languageSupportKicker: string;
    languageSupportTitle: string;
    openLanguageHelp: string;
    commonTasksKicker: string;
    commonTasksTitle: string;
    openDirectory: string;
    tasks: Array<{ title: string; body: string }>;
    featuredKicker: string;
    featuredTitle: string;
    trustKicker: string;
    trustTitle: string;
    trustBody: string;
    trustChecklistTitle: string;
    trustChecklist: string[];
    trustLink: string;
  };
  contentPage: {
    breadcrumbHome: string;
    badge: string;
    reviewStatusTitle: string;
    reviewLabels: Record<
      "reviewed" | "general-guidance" | "needs-local-recheck",
      string
    >;
    lastReviewPrefix: string;
    noReviewDate: string;
    translationAside: string;
    share: string;
    print: string;
    sourcesTitle: string;
    sourcesNote: string;
    onThisPage: string;
    sourcesAnchorLabel: string;
    translationReminderTitle: string;
    translationReminderBody: string;
    linkCopiedTitle: string;
    linkCopiedBody: string;
    shareCancelled: string;
  };
  directory: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    lead: string;
    searchPlaceholder: string;
    sortAriaLabel: string;
    sortRelevance: string;
    sortAlphabetical: string;
    sortRecentlyReviewed: string;
    sortArea: string;
    gridViewLabel: string;
    listViewLabel: string;
    allServices: string;
    audienceTitle: string;
    accessTitle: string;
    careLevelTitle: string;
    coverageAreaTitle: string;
    areaLabel: string;
    /** Template containing "{count}". */
    showingServices: string;
    resetFilters: string;
    trustPanelTitle: string;
    trustPanelBody: string;
    verifiedLabel: string;
    needsRecheckLabel: string;
    noResultsTitle: string;
    noResultsBody: string;
    notSureTitle: string;
    notSureBody: string;
    needHelpNowCta: string;
    callHealth811: string;
  };
  filters: {
    audience: Record<AudienceTag, string>;
    access: Record<AccessMode, string>;
    level: Record<ServiceLevel, string>;
    payment: Record<PaymentModel, string>;
    location: Record<LocationFilterKey, string>;
  };
  categories: Record<ServiceCategorySlug, { label: string; shortLabel: string }>;
  serviceCard: {
    whenToUse: string;
    accessLabel: string;
    eligibilityLabel: string;
    eligibilityFallback: string;
    hoursLabel: string;
    phoneLabel: string;
    trustDetails: string;
    lastReview: string;
    officialSource: string;
    call: string;
    officialWebsite: string;
    directions: string;
    viewDetails: string;
  };
  serviceDetail: {
    backToServices: string;
    whenToUseTitle: string;
    eligibilityTitle: string;
    eligibilityFallback: string;
    whatToBringTitle: string;
    contactTitle: string;
    callNow: string;
    officialWebsite: string;
    directions: string;
    trustTitle: string;
    lastReview: string;
    viewOfficialSource: string;
  };
  verification: Record<
    ServiceVerificationStatus,
    { label: string; shortLabel: string; description: string }
  >;
  feedback: {
    badge: string;
    title: string;
    body: string;
    issueTypeLabel: string;
    issueTypes: Record<IssueTypeKey, string>;
    detailsLabel: string;
    detailsPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    openEmail: string;
    copyText: string;
    thanks: string;
    toastEmailTitle: string;
    toastEmailBody: string;
    toastCopyTitle: string;
    toastCopyBody: string;
  };
  footer: {
    description: string;
    trustModelTitle: string;
    trustModelBody: string;
    beforeYouGo: { title: string; body: string };
    languageHelp: { title: string; body: string };
    privacy: { title: string; body: string };
    copyrightSuffix: string;
    disclaimer: string;
    privacyLink: string;
    sourcesLink: string;
    reportLink: string;
  };
  notFound: {
    seoTitle: string;
    seoDescription: string;
    badge: string;
    title: string;
    body: string;
    startHere: string;
    needHelpNow: string;
    localServices: string;
    faq: string;
  };
}

/** Fill a "{placeholder}" template. */
export const fillTemplate = (
  template: string,
  values: Record<string, string | number>,
) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
