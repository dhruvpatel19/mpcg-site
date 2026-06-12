import type { UIStrings } from "../types";

export const en: UIStrings = {
  common: {
    loadingPage: "Loading page...",
    directoryEnglishNote:
      "Directory listings are shown in English so service names, addresses, phone numbers, and hours exactly match official sources.",
  },
  header: {
    emergencyBanner: "Life-threatening emergency? Call 911 now.",
    tagline: "Kingston, Ontario newcomer-first healthcare navigation",
    languageButton: "Language",
    languageButtonAria: "Language and interpreter help",
    openNavigation: "Open navigation",
    primaryNavLabel: "Primary",
  },
  languageModal: {
    title: "Language and interpreter help",
    description:
      "Read this guide in the language you are most comfortable with. For healthcare conversations, ask for an interpreter when you need one.",
    chooseLanguageTitle: "Choose your language",
    chooseLanguageNote:
      "This guide is fully translated into 33 languages on this site, and dozens more open through automatic translation. Directory listings stay in English so they match official sources exactly. English is the reference version if anything seems unclear.",
    safetyTitle: "Safety note",
    safetyBody:
      "Website translation is for reading and understanding. For appointments, test instructions, medicines, or consent, ask whether the clinic or hospital can provide a professional interpreter. Health811 (call 811) offers phone support in many languages.",
    phrasesTitle: "Quick phrases to show staff",
    phrasesNote:
      "Point to your language and show these lines to reception or clinical staff.",
    callHealth811: "Call Health811",
    accessibilityCta: "Accessibility and trust",
    close: "Close language help dialog",
  },
  moreLanguages: {
    title: "More languages (automatic translation)",
    description:
      "Every language works from this one menu — including Somali, Yoruba, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukrainian, Farsi, Urdu, Punjabi, Tamil, and Vietnamese.",
    selectLabel: "Choose any language",
    selectPlaceholder: "All languages — select one…",
    openButton: "Open in this language",
    disclaimer:
      "Languages marked automatic open this page through Google Translate and stay in your language as you keep browsing. Automatic translation is not reviewed by this project — good for reading, but confirm medical details with a clinician or interpreter.",
  },
  funding: {
    acknowledgment:
      "This project is supported by a grant from the Ontario Medical Students Association (OMSA).",
    logoAlt: "Ontario Medical Students Association (OMSA) logo",
  },
  languagePicker: {
    searchPlaceholder: "Search languages…",
    onSiteGroup: "Translated on this site",
    proxyGroup: "More languages via Google Translate",
    reviewedBadge: "Reviewed",
    automaticBadge: "Automatic",
    interpreterTab: "Interpreter help and phrases",
    noMatches: "No languages match your search.",
    note: "Translations are machine-assisted and English is the reference version if anything seems unclear. Languages in the Google Translate group open this page on an external Google site. Directory listings stay in English so they match official sources exactly.",
  },
  navigation: [
    {
      title: "Start here",
      items: [
        {
          label: "Need Help Now",
          to: "/need-help-now",
          description: "Urgent decisions and crisis support",
        },
        {
          label: "Start Here",
          to: "/start-here",
          description: "New to Ontario healthcare",
        },
        {
          label: "Find Primary Care",
          to: "/get-a-family-doctor",
          description: "Doctors, NPs, CHCs, and student options",
        },
      ],
    },
    {
      title: "Understand care",
      items: [
        {
          label: "Costs and Coverage",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, private plans, and drug coverage",
        },
        {
          label: "Your Visit",
          to: "/your-visit",
          description: "What to bring and how to ask questions",
        },
        {
          label: "After the Visit",
          to: "/after-visit",
          description: "Tests, requisitions, referrals, and follow-up",
        },
        {
          label: "Medicines and Pharmacies",
          to: "/medicines-and-pharmacies",
          description: "Prescriptions, refills, and pharmacist help",
        },
      ],
    },
    {
      title: "Local help",
      items: [
        {
          label: "Local Services",
          to: "/local-services",
          description: "Search Kingston services",
        },
        {
          label: "Mental Health",
          to: "/mental-health",
          description: "Crisis, urgent, routine, and youth support",
        },
        {
          label: "Screening and Prevention",
          to: "/screening-prevention",
          description: "Vaccines and preventive care",
        },
        {
          label: "Allied and Community Care",
          to: "/community-allied-health",
          description: "Home care, rehab, dental, and community supports",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Common newcomer scenarios and glossary",
        },
        {
          label: "About and Trust",
          to: "/about",
          description: "Sources, privacy, accessibility, and feedback",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Need help right now?",
    items: {
      "call-911": {
        label: "Call 911",
        description: "Life-threatening emergency",
      },
      "call-811": {
        label: "Call Health811",
        description: "Nurse advice, 24/7",
      },
      "call-988": {
        label: "Call or text 9-8-8",
        description: "Suicide Crisis Helpline, 24/7",
      },
      "call-crisis": {
        label: "Call Crisis Line",
        description: "AMHS-KFLA crisis line",
      },
      "urgent-guide": {
        label: "Urgent care guide",
        description: "After-hours and same-day options",
      },
      "mental-health": {
        label: "Mental health support",
        description: "Crisis, urgent, and routine pathways",
      },
    },
  },
  home: {
    seoTitle: "Kingston healthcare guide",
    seoDescription:
      "Newcomer-first healthcare navigation for Kingston, Ontario: urgent help, local services, coverage basics, interpreter guidance, and next steps after a visit.",
    kicker: "Kingston, Ontario",
    heroTitle: "Find the right care in Kingston without guessing",
    heroLead:
      "Start with urgent help, newcomer basics, coverage, or the local services directory. This guide is plain language, mobile friendly, and honest about what still needs rechecking.",
    cardNeedHelp: {
      title: "Need help now",
      body: "Emergency, urgent care, crisis, and after-hours guidance.",
    },
    cardStartHere: {
      title: "Start here",
      body: "How Ontario healthcare works and what to do first.",
    },
    cardSearch: {
      title: "Search services",
      body: "Look up bloodwork, refills, walk-in care, mental health, and more.",
    },
    cardLanguage: {
      title: "Language help",
      body: "Read this guide in your language, plus interpreter guidance and quick phrases.",
    },
    quickDecisionsKicker: "Quick decisions",
    quickDecisionsTitle: "Start with these questions",
    quickDecisionLines: [
      "If it could be life-threatening, call 911 now.",
      "If you are unsure where to go tonight, call Health811.",
      "For suicidal thoughts or overwhelming distress, call or text 9-8-8 any time.",
      "If you do not have a family doctor, keep walk-in, community health, and student options in your plan.",
      "If you need bloodwork, X-ray, a refill, or a referral update, use the local directory to find the next step.",
    ],
    trustNoteTitle: "Trust note",
    trustNoteBody:
      "This is a static guide. We do not show live wait times. Time-sensitive details like hours and intake can change quickly, so every listing includes a source link and review status.",
    newcomerKicker: "Newcomer quick start",
    newcomerTitle: "First steps if you are new to Kingston",
    newcomerSteps: [
      {
        title: "1. Learn your coverage",
        body: "Understand OHIP, IFHP, private plans, and what is usually not covered. There is no waiting period for OHIP - apply as soon as you arrive.",
      },
      {
        title: "2. Plan your primary care path",
        body: "Learn the difference between family doctors, nurse practitioners, student clinics, community health centres, and walk-in care.",
      },
      {
        title: "3. Know what happens next",
        body: "Learn what requisitions, referrals, test results, and follow-up calls usually mean.",
      },
    ],
    languageSupportKicker: "Language support",
    languageSupportTitle: "Show these phrases if you need help",
    openLanguageHelp: "Open language help",
    commonTasksKicker: "Common tasks",
    commonTasksTitle: "Search by the task you need to finish",
    openDirectory: "Open full directory",
    tasks: [
      {
        title: "Bloodwork or X-ray",
        body: "Find labs and imaging services.",
      },
      {
        title: "Prescription refill",
        body: "Find pharmacies and refill help.",
      },
      {
        title: "Mental health support",
        body: "Crisis, urgent, routine, and youth support.",
      },
      {
        title: "Health card or newcomer support",
        body: "Find ServiceOntario, ISKA, and phone advice.",
      },
    ],
    featuredKicker: "Featured services",
    featuredTitle: "Good places to start",
    trustKicker: "Trust and sources",
    trustTitle: "Honest about what is verified and what still needs rechecking",
    trustBody:
      "Some listings are checked against official local sources. Others still need a local recheck because hours, intake, or access rules change often. We show that status openly and encourage users to report outdated details.",
    trustChecklistTitle: "Read before you rely on a listing",
    trustChecklist: [
      "Look for the official source link.",
      "Check the last review date.",
      "Confirm same-day hours and walk-in access before you go.",
      "Use the report form if you notice a change.",
    ],
    trustLink: "View sources and trust notes",
  },
  contentPage: {
    breadcrumbHome: "Home",
    badge: "Plain-language guide",
    reviewStatusTitle: "Review status",
    reviewLabels: {
      reviewed: "Reviewed against the current source set used by this project.",
      "general-guidance":
        "Reviewed as general guidance. Local details can still change quickly.",
      "needs-local-recheck":
        "Useful guidance, but local details still need more checking.",
    },
    lastReviewPrefix: "Last page review:",
    noReviewDate: "This page does not have a recorded page-level review date.",
    translationAside:
      "You can read this page in several languages using the Language menu. For appointments, medicines, consent, and test instructions, ask if interpreter support is available.",
    share: "Share",
    print: "Print",
    sourcesTitle: "Sources for this page",
    sourcesNote:
      "These are the main official or primary sources used for the current page review. Local processes can still change between review cycles.",
    onThisPage: "On this page",
    sourcesAnchorLabel: "Sources",
    translationReminderTitle: "Translation reminder",
    translationReminderBody:
      "If something affects your treatment or safety, confirm it with a clinician or interpreter rather than relying only on translation.",
    linkCopiedTitle: "Link copied",
    linkCopiedBody: "You can now paste this page link anywhere.",
    shareCancelled: "Share cancelled",
  },
  directory: {
    seoTitle: "Local services",
    seoDescription:
      "Search newcomer-friendly healthcare, mental health, pharmacy, coverage, and navigation services in Kingston, Ontario.",
    kicker: "Kingston directory",
    title: "Search local health services",
    lead: "Search by service, symptom, document, or task. Examples: walk in, after hours, bloodwork, refill, health card, student clinic, or newcomer support.",
    searchPlaceholder: "Search by need, service name, address, or keyword",
    sortAriaLabel: "Sort results",
    sortRelevance: "Sort: Relevance",
    sortAlphabetical: "Sort: A to Z",
    sortRecentlyReviewed: "Sort: Recently reviewed",
    sortArea: "Sort: Area",
    gridViewLabel: "Grid view",
    listViewLabel: "List view",
    allServices: "All services",
    audienceTitle: "Audience",
    accessTitle: "Access",
    careLevelTitle: "Care level",
    coverageAreaTitle: "Coverage and area",
    areaLabel: "Area",
    showingServices: "Showing {count} services",
    resetFilters: "Reset filters",
    trustPanelTitle: "Trust and review status",
    trustPanelBody:
      "This directory is static, not live. We show the last recorded review date, official source links when available, and which listings still need a local recheck. Confirm hours and same-day access before you go.",
    verifiedLabel: "Verified",
    needsRecheckLabel: "Needs recheck",
    noResultsTitle: "No services matched those filters",
    noResultsBody:
      "Try a broader search like bloodwork, refill, mental health, health card, or walk in. You can also clear all filters and start again.",
    notSureTitle: "Not sure where to start?",
    notSureBody:
      "If you are unsure whether you need emergency care, urgent care, a walk-in clinic, or pharmacy support, start with the urgent guidance page or call Health811 for nurse advice.",
    needHelpNowCta: "Need Help Now",
    callHealth811: "Call Health811",
  },
  filters: {
    audience: {
      newcomers: "Newcomers",
      students: "Student-only or campus",
      "children-youth": "Child or youth",
      adults: "Adults",
      families: "Families",
      "unattached-patients": "No family doctor",
    },
    access: {
      "walk-in": "Walk-in",
      appointment: "Appointment",
      referral: "Referral needed",
      virtual: "Virtual",
    },
    level: {
      emergency: "Emergency",
      urgent: "Urgent",
      primary: "Primary",
      community: "Community",
    },
    payment: {
      public: "Publicly funded",
      community: "Community / low-barrier",
      mixed: "Mixed coverage",
      "student-plan": "Student plan",
      private: "Private pay",
    },
    location: {
      downtown: "Downtown",
      "north-end": "North End",
      "west-end": "West End",
      campus: "Campus",
      online: "Online",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Emergency and urgent care",
      shortLabel: "Emergency and urgent",
    },
    "primary-care": { label: "Primary care", shortLabel: "Primary care" },
    "community-health": {
      label: "Community health centres",
      shortLabel: "Community health",
    },
    "mental-health": {
      label: "Mental health and crisis support",
      shortLabel: "Mental health",
    },
    "public-health": { label: "Public health", shortLabel: "Public health" },
    "labs-imaging": {
      label: "Labs and imaging",
      shortLabel: "Labs and imaging",
    },
    pharmacies: {
      label: "Medicines and pharmacies",
      shortLabel: "Pharmacies",
    },
    "allied-community": {
      label: "Allied and community care",
      shortLabel: "Allied care",
    },
    "navigation-support": {
      label: "Navigation and coverage support",
      shortLabel: "Navigation",
    },
  },
  serviceCard: {
    whenToUse: "When to use:",
    accessLabel: "Access",
    eligibilityLabel: "Eligibility",
    eligibilityFallback:
      "Open to the general public unless the official source says otherwise.",
    hoursLabel: "Hours",
    phoneLabel: "Phone",
    trustDetails: "Trust and source details",
    lastReview: "Last review:",
    officialSource: "Official source",
    call: "Call",
    officialWebsite: "Official website",
    directions: "Directions",
    viewDetails: "View details",
  },
  serviceDetail: {
    backToServices: "Back to local services",
    whenToUseTitle: "When to use this service",
    eligibilityTitle: "Eligibility and access",
    eligibilityFallback:
      "Check the official source if you are unsure whether this service is open to you.",
    whatToBringTitle: "What to bring",
    contactTitle: "Contact and actions",
    callNow: "Call now",
    officialWebsite: "Official website",
    directions: "Directions",
    trustTitle: "Trust and source",
    lastReview: "Last review:",
    viewOfficialSource: "View official source",
  },
  verification: {
    verified: {
      label: "Verified against official source",
      shortLabel: "Verified",
      description:
        "Core details were checked against an official source in the latest review cycle.",
    },
    "partially-verified": {
      label: "Official source linked",
      shortLabel: "Official link",
      description:
        "An official source is linked, but one or more details may change often and should be confirmed before you go.",
    },
    "community-reported": {
      label: "Community-reported",
      shortLabel: "Community report",
      description:
        "This information came from community reporting and still needs independent confirmation.",
    },
    "needs-recheck": {
      label: "Needs recheck",
      shortLabel: "Needs recheck",
      description:
        "This listing stays visible because it may still help, but key details may be stale. Confirm before relying on it.",
    },
  },
  feedback: {
    badge: "Report outdated information",
    title: "Help us keep this guide accurate",
    body: "This sends a pre-filled email with page or service context. Do not include private medical information.",
    issueTypeLabel: "Issue type",
    issueTypes: {
      "outdated hours": "Outdated hours",
      "wrong phone or website": "Wrong phone or website",
      "eligibility or access issue": "Eligibility or access issue",
      "translation or accessibility problem":
        "Translation or accessibility problem",
      "missing service or content": "Missing service or content",
      other: "Other",
    },
    detailsLabel: "What should we check?",
    detailsPlaceholder:
      "Example: the phone number changed, a clinic is appointment-only now, or a link is broken.",
    contactLabel: "Optional contact",
    contactPlaceholder: "Email address if you want a reply",
    openEmail: "Open report email",
    copyText: "Copy report text",
    thanks:
      "Thanks. Reports help us prioritize stale pages, broken links, and listings that need local rechecks.",
    toastEmailTitle: "Email draft opened",
    toastEmailBody: "Your report includes page or service context.",
    toastCopyTitle: "Issue summary copied",
    toastCopyBody: "You can paste it into your own email client if needed.",
  },
  footer: {
    description:
      "A plain-language healthcare navigation guide for Kingston, Ontario. This site does not provide medical advice or live wait times. Always confirm time-sensitive details with the official source before you go.",
    trustModelTitle: "Trust model",
    trustModelBody:
      "We show official source links, review dates, and listings that still need rechecks. If something looks wrong, report it from the page or service.",
    beforeYouGo: {
      title: "Before you go",
      body: "Check official hours, whether you need an appointment or referral, and what documents to bring.",
    },
    languageHelp: {
      title: "Language help",
      body: "Read this guide in your language using the Language menu. Ask for an interpreter for clinical conversations when accuracy matters.",
    },
    privacy: {
      title: "Privacy",
      body: "This site uses local, privacy-conscious improvement logs stored in your browser. It does not send personal analytics to a remote server.",
    },
    copyrightSuffix: "Community information resource for Kingston, Ontario.",
    disclaimer: "Disclaimer",
    privacyLink: "Privacy",
    sourcesLink: "Sources",
    reportLink: "Report outdated info",
  },
  notFound: {
    seoTitle: "Page not found",
    seoDescription:
      "The page you requested could not be found. Start with urgent help, newcomer basics, local services, or FAQ.",
    badge: "404",
    title: "We could not find that page",
    body: "If you are trying to get care quickly, start with urgent guidance or search the Kingston services directory.",
    startHere: "Start Here",
    needHelpNow: "Need Help Now",
    localServices: "Local Services",
    faq: "FAQ",
  },
};
