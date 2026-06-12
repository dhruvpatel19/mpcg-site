import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Paj la ap chaje...",
    directoryEnglishNote:
      "Lis sèvis yo parèt an angle pou non sèvis yo, adrès yo, nimewo telefòn yo, ak lè ouvèti yo ka matche egzakteman ak sous ofisyèl yo.",
  },
  header: {
    emergencyBanner: "Yon ijans ki ka menase lavi? Rele 911 kounye a.",
    tagline:
      "Gid navigasyon swen sante pou moun ki fèk rive nan Kingston, Ontario",
    languageButton: "Lang",
    languageButtonAria: "Èd pou lang ak entèprèt",
    openNavigation: "Ouvri navigasyon",
    primaryNavLabel: "Prensipal",
  },
  languageModal: {
    title: "Èd pou lang ak entèprèt",
    description:
      "Li gid sa a nan lang ou pi alèz la. Pou konvèsasyon sou swen sante, mande yon entèprèt lè ou bezwen youn.",
    chooseLanguageTitle: "Chwazi lang ou",
    chooseLanguageNote:
      "Gid sa a tradui nèt nan 33 lang sou sit sa a, epi plizyè douzèn lòt lang ouvri ak tradiksyon otomatik. Lis sèvis yo rete an angle pou yo matche egzakteman ak sous ofisyèl yo. Angle se vèsyon referans lan si yon bagay sanble pa klè.",
    safetyTitle: "Nòt sekirite",
    safetyBody:
      "Tradiksyon sit entènèt la se pou li ak konprann. Pou randevou, enstriksyon tès, medikaman, oswa konsantman, mande si klinik la oswa lopital la ka bay yon entèprèt pwofesyonèl. Health811 (rele 811) bay sipò nan telefòn nan anpil lang.",
    phrasesTitle: "Fraz rapid pou montre anplwaye yo",
    phrasesNote:
      "Lonje dwèt sou lang ou epi montre liy sa yo bay resepsyon an oswa anplwaye klinik yo.",
    callHealth811: "Rele Health811",
    accessibilityCta: "Aksesibilite ak konfyans",
    close: "Fèmen dyalòg èd pou lang lan",
  },
  moreLanguages: {
    title: "Plis lang (tradiksyon otomatik)",
    description:
      "Tout lang mache nan yon sèl meni sa a — tankou Somali, Yoruba, Igbo, Hausa, Amarik, Tigrinya, Swahili, Ikrenyen, Farsi, Oudou, Pendjabi, Tamil, ak Vyetnamyen.",
    selectLabel: "Chwazi nenpòt lang",
    selectPlaceholder: "Tout lang — chwazi youn…",
    openButton: "Ouvri nan lang sa a",
    disclaimer:
      "Lang ki make otomatik yo ouvri paj sa a atravè Google Translate epi yo rete nan lang ou pandan w ap kontinye navige. Pwojè sa a pa revize tradiksyon otomatik — li bon pou li, men konfime detay medikal yo ak yon klinisyen oswa yon entèprèt.",
  },
  funding: {
    acknowledgment:
      "Pwojè sa a jwenn sipò atravè yon sibvansyon Ontario Medical Students Association (OMSA).",
    logoAlt: "Logo Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Chèche lang…",
    onSiteGroup: "Tradui sou sit sa a",
    proxyGroup: "Plis lang atravè Google Translate",
    reviewedBadge: "Revize",
    automaticBadge: "Otomatik",
    interpreterTab: "Èd pou entèprèt ak fraz",
    noMatches: "Pa gen okenn lang ki matche ak rechèch ou a.",
    note: "Tradiksyon yo fèt ak èd machin epi angle se vèsyon referans lan si yon bagay sanble pa klè. Lang ki nan gwoup Google Translate la ouvri paj sa a sou yon sit Google ekstèn. Lis sèvis yo rete an angle pou yo matche egzakteman ak sous ofisyèl yo.",
  },
  navigation: [
    {
      title: "Kòmanse isit la",
      items: [
        {
          label: "Bezwen Èd Kounye a",
          to: "/need-help-now",
          description: "Desizyon ijan ak sipò pou kriz",
        },
        {
          label: "Kòmanse Isit La",
          to: "/start-here",
          description: "Ou fèk konnen sistèm sante Ontario",
        },
        {
          label: "Jwenn Swen Primè",
          to: "/get-a-family-doctor",
          description:
            "Doktè, enfimyè praktisyen, sant sante kominotè, ak opsyon pou etidyan",
        },
      ],
    },
    {
      title: "Konprann swen yo",
      items: [
        {
          label: "Pri ak Kouvèti",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, plan prive, ak kouvèti medikaman",
        },
        {
          label: "Vizit Ou",
          to: "/your-visit",
          description: "Sa pou ou pote ak kijan pou ou poze kesyon",
        },
        {
          label: "Apre Vizit La",
          to: "/after-visit",
          description: "Tès, rekizisyon, referans, ak swivi",
        },
        {
          label: "Medikaman ak Famasi",
          to: "/medicines-and-pharmacies",
          description: "Preskripsyon, renouvèlman, ak èd famasyen",
        },
      ],
    },
    {
      title: "Èd lokal",
      items: [
        {
          label: "Sèvis Lokal",
          to: "/local-services",
          description: "Chèche sèvis Kingston yo",
        },
        {
          label: "Sante Mantal",
          to: "/mental-health",
          description: "Kriz, ijan, woutin, ak sipò pou jèn",
        },
        {
          label: "Depistaj ak Prevansyon",
          to: "/screening-prevention",
          description: "Vaksen ak swen prevantif",
        },
        {
          label: "Swen Alye ak Kominotè",
          to: "/community-allied-health",
          description: "Swen lakay, reyabilitasyon, swen dan, ak sipò kominotè",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Sitiyasyon kouran pou moun ki fèk rive ak glosè",
        },
        {
          label: "Konsènan ak Konfyans",
          to: "/about",
          description: "Sous, vi prive, aksesibilite, ak kòmantè",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Bezwen èd kounye a menm?",
    items: {
      "call-911": {
        label: "Rele 911",
        description: "Ijans ki ka menase lavi",
      },
      "call-811": {
        label: "Rele Health811",
        description: "Konsèy enfimyè, 24/7",
      },
      "call-988": {
        label: "Rele oswa voye tèks bay 9-8-8",
        description: "Liy Èd pou Kriz Swisid, 24/7",
      },
      "call-crisis": {
        label: "Rele Liy Kriz la",
        description: "Liy kriz AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Gid swen ijan",
        description: "Opsyon apre lè travay ak menm jou a",
      },
      "mental-health": {
        label: "Sipò sante mantal",
        description: "Chemen pou kriz, ijan, ak woutin",
      },
    },
  },
  home: {
    seoTitle: "Gid swen sante Kingston",
    seoDescription:
      "Navigasyon swen sante pou moun ki fèk rive nan Kingston, Ontario: èd ijan, sèvis lokal, baz sou kouvèti, gid pou entèprèt, ak pwochen etap apre yon vizit.",
    kicker: "Kingston, Ontario",
    heroTitle: "Jwenn bon swen nan Kingston san ou pa devine",
    heroLead:
      "Kòmanse ak èd ijan, baz pou moun ki fèk rive, kouvèti, oswa anyè sèvis lokal yo. Gid sa a ekri nan langaj senp, li mache byen sou telefòn, epi li onèt sou sa ki toujou bezwen verifye ankò.",
    cardNeedHelp: {
      title: "Bezwen èd kounye a",
      body: "Gid pou ijans, swen ijan, kriz, ak apre lè travay.",
    },
    cardStartHere: {
      title: "Kòmanse isit la",
      body: "Kijan sistèm sante Ontario mache ak sa pou ou fè an premye.",
    },
    cardSearch: {
      title: "Chèche sèvis",
      body: "Chèche tès san, renouvèlman medikaman, swen san randevou, sante mantal, ak plis ankò.",
    },
    cardLanguage: {
      title: "Èd pou lang",
      body: "Li gid sa a nan lang ou, plis gid pou entèprèt ak fraz rapid.",
    },
    quickDecisionsKicker: "Desizyon rapid",
    quickDecisionsTitle: "Kòmanse ak kesyon sa yo",
    quickDecisionLines: [
      "Si li ta ka menase lavi, rele 911 kounye a.",
      "Si ou pa sèten ki kote pou ou ale aswè a, rele Health811.",
      "Pou panse swisid oswa gwo detrès, rele oswa voye tèks bay 9-8-8 nenpòt lè.",
      "Si ou pa gen yon doktè fanmi, kenbe opsyon san randevou, sante kominotè, ak opsyon pou etidyan nan plan ou.",
      "Si ou bezwen tès san, radyografi (X-ray), yon renouvèlman, oswa nouvèl sou yon referans, sèvi ak anyè lokal la pou jwenn pwochen etap la.",
    ],
    trustNoteTitle: "Nòt sou konfyans",
    trustNoteBody:
      "Sa a se yon gid estatik. Nou pa montre tan datant an dirèk. Detay ki chanje vit, tankou lè ouvèti ak kondisyon admisyon, ka chanje rapidman, kidonk chak lis gen yon lyen sous ak yon estati revizyon.",
    newcomerKicker: "Kòmansman rapid pou moun ki fèk rive",
    newcomerTitle: "Premye etap si ou fèk rive Kingston",
    newcomerSteps: [
      {
        title: "1. Aprann kouvèti ou",
        body: "Konprann OHIP, IFHP, plan prive, ak sa ki anjeneral pa kouvri. Pa gen peryòd datant pou OHIP - aplike kou ou rive.",
      },
      {
        title: "2. Planifye chemen swen primè ou",
        body: "Aprann diferans ant doktè fanmi, enfimyè praktisyen, klinik pou etidyan, sant sante kominotè, ak swen san randevou.",
      },
      {
        title: "3. Konnen sa k ap vini apre",
        body: "Aprann sa rekizisyon, referans, rezilta tès, ak apèl swivi anjeneral vle di.",
      },
    ],
    languageSupportKicker: "Sipò pou lang",
    languageSupportTitle: "Montre fraz sa yo si ou bezwen èd",
    openLanguageHelp: "Ouvri èd pou lang",
    commonTasksKicker: "Travay kouran",
    commonTasksTitle: "Chèche dapre travay ou bezwen fini an",
    openDirectory: "Ouvri tout anyè a",
    tasks: [
      {
        title: "Tès san oswa radyografi (X-ray)",
        body: "Jwenn laboratwa ak sèvis imajri medikal.",
      },
      {
        title: "Renouvèlman preskripsyon",
        body: "Jwenn famasi ak èd pou renouvèlman.",
      },
      {
        title: "Sipò sante mantal",
        body: "Kriz, ijan, woutin, ak sipò pou jèn.",
      },
      {
        title: "Kat sante oswa sipò pou moun ki fèk rive",
        body: "Jwenn ServiceOntario, ISKA, ak konsèy nan telefòn.",
      },
    ],
    featuredKicker: "Sèvis nou mete devan",
    featuredTitle: "Bon kote pou kòmanse",
    trustKicker: "Konfyans ak sous",
    trustTitle: "Nou onèt sou sa ki verifye ak sa ki toujou bezwen verifye ankò",
    trustBody:
      "Gen kèk lis nou tcheke ak sous ofisyèl lokal yo. Gen lòt ki toujou bezwen yon verifikasyon lokal paske lè ouvèti, admisyon, oswa règ aksè chanje souvan. Nou montre estati sa a aklè epi nou ankouraje itilizatè yo rapòte detay ki pa ajou.",
    trustChecklistTitle: "Li sa anvan ou konte sou yon lis",
    trustChecklist: [
      "Chèche lyen sous ofisyèl la.",
      "Tcheke dat dènye revizyon an.",
      "Konfime lè ouvèti menm jou a ak aksè san randevou anvan ou ale.",
      "Sèvi ak fòm rapò a si ou remake yon chanjman.",
    ],
    trustLink: "Gade sous ak nòt sou konfyans",
  },
  contentPage: {
    breadcrumbHome: "Akèy",
    badge: "Gid nan langaj senp",
    reviewStatusTitle: "Estati revizyon",
    reviewLabels: {
      reviewed: "Revize ak seri sous aktyèl pwojè sa a itilize.",
      "general-guidance":
        "Revize kòm gid jeneral. Detay lokal yo ka toujou chanje vit.",
      "needs-local-recheck":
        "Gid ki itil, men detay lokal yo toujou bezwen plis verifikasyon.",
    },
    lastReviewPrefix: "Dènye revizyon paj la:",
    noReviewDate: "Paj sa a pa gen yon dat revizyon ki anrejistre.",
    translationAside:
      "Ou ka li paj sa a nan plizyè lang ak meni Lang lan. Pou randevou, medikaman, konsantman, ak enstriksyon tès, mande si gen sipò entèprèt disponib.",
    share: "Pataje",
    print: "Enprime",
    sourcesTitle: "Sous pou paj sa a",
    sourcesNote:
      "Sa yo se sous ofisyèl oswa primè prensipal yo te itilize pou revizyon aktyèl paj la. Pwosesis lokal yo ka toujou chanje ant sik revizyon yo.",
    onThisPage: "Sou paj sa a",
    sourcesAnchorLabel: "Sous",
    translationReminderTitle: "Rapèl sou tradiksyon",
    translationReminderBody:
      "Si yon bagay konsène tretman ou oswa sekirite ou, konfime li ak yon klinisyen oswa yon entèprèt olye ou konte sèlman sou tradiksyon.",
    linkCopiedTitle: "Lyen kopye",
    linkCopiedBody: "Kounye a ou ka kole lyen paj sa a nenpòt kote.",
    shareCancelled: "Pataj anile",
  },
  directory: {
    seoTitle: "Sèvis lokal",
    seoDescription:
      "Chèche sèvis swen sante, sante mantal, famasi, kouvèti, ak navigasyon ki fèt pou moun ki fèk rive nan Kingston, Ontario.",
    kicker: "Anyè Kingston",
    title: "Chèche sèvis sante lokal yo",
    lead: "Chèche dapre sèvis, sentòm, dokiman, oswa travay. Egzanp: san randevou, apre lè travay, tès san, renouvèlman, kat sante, klinik pou etidyan, oswa sipò pou moun ki fèk rive.",
    searchPlaceholder: "Chèche dapre bezwen, non sèvis, adrès, oswa mo kle",
    sortAriaLabel: "Klase rezilta yo",
    sortRelevance: "Klase: Pètinans",
    sortAlphabetical: "Klase: A rive Z",
    sortRecentlyReviewed: "Klase: Revize dènyèman",
    sortArea: "Klase: Zòn",
    gridViewLabel: "Afichaj an griy",
    listViewLabel: "Afichaj an lis",
    allServices: "Tout sèvis",
    audienceTitle: "Pou ki moun",
    accessTitle: "Aksè",
    careLevelTitle: "Nivo swen",
    coverageAreaTitle: "Kouvèti ak zòn",
    areaLabel: "Zòn",
    showingServices: "N ap montre {count} sèvis",
    resetFilters: "Reyinisyalize filtè yo",
    trustPanelTitle: "Konfyans ak estati revizyon",
    trustPanelBody:
      "Anyè sa a estatik, li pa an dirèk. Nou montre dènye dat revizyon ki anrejistre, lyen sous ofisyèl lè yo disponib, ak ki lis ki toujou bezwen yon verifikasyon lokal. Konfime lè ouvèti ak aksè menm jou a anvan ou ale.",
    verifiedLabel: "Verifye",
    needsRecheckLabel: "Bezwen verifye ankò",
    noResultsTitle: "Pa gen sèvis ki matche ak filtè sa yo",
    noResultsBody:
      "Eseye yon rechèch pi laj tankou tès san, renouvèlman, sante mantal, kat sante, oswa san randevou. Ou ka efase tout filtè yo epi rekòmanse tou.",
    notSureTitle: "Ou pa sèten ki kote pou ou kòmanse?",
    notSureBody:
      "Si ou pa sèten si ou bezwen swen ijans, swen ijan, yon klinik san randevou, oswa sipò famasi, kòmanse ak paj gid ijan an oswa rele Health811 pou konsèy enfimyè.",
    needHelpNowCta: "Bezwen Èd Kounye a",
    callHealth811: "Rele Health811",
  },
  filters: {
    audience: {
      newcomers: "Moun ki fèk rive",
      students: "Pou etidyan sèlman oswa sou kanpis",
      "children-youth": "Timoun oswa jèn",
      adults: "Granmoun",
      families: "Fanmi",
      "unattached-patients": "San doktè fanmi",
    },
    access: {
      "walk-in": "San randevou",
      appointment: "Sou randevou",
      referral: "Referans obligatwa",
      virtual: "Vityèl",
    },
    level: {
      emergency: "Ijans",
      urgent: "Ijan",
      primary: "Primè",
      community: "Kominotè",
    },
    payment: {
      public: "Finanse ak lajan piblik",
      community: "Kominotè / fasil pou jwenn",
      mixed: "Kouvèti melanje",
      "student-plan": "Plan etidyan",
      private: "Peye prive",
    },
    location: {
      downtown: "Anba lavil",
      "north-end": "Zòn Nò (North End)",
      "west-end": "Zòn Lwès (West End)",
      campus: "Kanpis",
      online: "Sou entènèt",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Swen ijans ak swen ijan",
      shortLabel: "Ijans ak ijan",
    },
    "primary-care": { label: "Swen primè", shortLabel: "Swen primè" },
    "community-health": {
      label: "Sant sante kominotè",
      shortLabel: "Sante kominotè",
    },
    "mental-health": {
      label: "Sante mantal ak sipò pou kriz",
      shortLabel: "Sante mantal",
    },
    "public-health": { label: "Sante piblik", shortLabel: "Sante piblik" },
    "labs-imaging": {
      label: "Laboratwa ak imajri medikal",
      shortLabel: "Laboratwa ak imajri",
    },
    pharmacies: {
      label: "Medikaman ak famasi",
      shortLabel: "Famasi",
    },
    "allied-community": {
      label: "Swen alye ak kominotè",
      shortLabel: "Swen alye",
    },
    "navigation-support": {
      label: "Sipò pou navigasyon ak kouvèti",
      shortLabel: "Navigasyon",
    },
  },
  serviceCard: {
    whenToUse: "Ki lè pou itilize li:",
    accessLabel: "Aksè",
    eligibilityLabel: "Kalifikasyon",
    eligibilityFallback:
      "Ouvri pou tout piblik la sof si sous ofisyèl la di yon lòt bagay.",
    hoursLabel: "Lè ouvèti",
    phoneLabel: "Telefòn",
    trustDetails: "Detay sou konfyans ak sous",
    lastReview: "Dènye revizyon:",
    officialSource: "Sous ofisyèl",
    call: "Rele",
    officialWebsite: "Sit entènèt ofisyèl",
    directions: "Direksyon",
    viewDetails: "Gade detay",
  },
  serviceDetail: {
    backToServices: "Retounen nan sèvis lokal yo",
    whenToUseTitle: "Ki lè pou itilize sèvis sa a",
    eligibilityTitle: "Kalifikasyon ak aksè",
    eligibilityFallback:
      "Tcheke sous ofisyèl la si ou pa sèten si sèvis sa a ouvri pou ou.",
    whatToBringTitle: "Sa pou ou pote",
    contactTitle: "Kontak ak aksyon",
    callNow: "Rele kounye a",
    officialWebsite: "Sit entènèt ofisyèl",
    directions: "Direksyon",
    trustTitle: "Konfyans ak sous",
    lastReview: "Dènye revizyon:",
    viewOfficialSource: "Gade sous ofisyèl la",
  },
  verification: {
    verified: {
      label: "Verifye ak sous ofisyèl",
      shortLabel: "Verifye",
      description:
        "Detay prensipal yo te tcheke ak yon sous ofisyèl nan dènye sik revizyon an.",
    },
    "partially-verified": {
      label: "Sous ofisyèl konekte",
      shortLabel: "Lyen ofisyèl",
      description:
        "Gen yon lyen sous ofisyèl, men youn oswa plizyè detay ka chanje souvan epi ou ta dwe konfime yo anvan ou ale.",
    },
    "community-reported": {
      label: "Rapòte pa kominote a",
      shortLabel: "Rapò kominotè",
      description:
        "Enfòmasyon sa a soti nan rapò kominote a epi li toujou bezwen yon konfimasyon endepandan.",
    },
    "needs-recheck": {
      label: "Bezwen verifye ankò",
      shortLabel: "Bezwen verifye ankò",
      description:
        "Lis sa a rete vizib paske li ka toujou itil, men detay enpòtan yo ka pa ajou. Konfime yo anvan ou konte sou li.",
    },
  },
  feedback: {
    badge: "Rapòte enfòmasyon ki pa ajou",
    title: "Ede nou kenbe gid sa a egzak",
    body: "Sa a voye yon imèl tou pare ak kontèks paj la oswa sèvis la. Pa mete enfòmasyon medikal prive.",
    issueTypeLabel: "Kalite pwoblèm",
    issueTypes: {
      "outdated hours": "Lè ouvèti ki pa ajou",
      "wrong phone or website": "Move nimewo telefòn oswa sit entènèt",
      "eligibility or access issue": "Pwoblèm kalifikasyon oswa aksè",
      "translation or accessibility problem":
        "Pwoblèm tradiksyon oswa aksesibilite",
      "missing service or content": "Sèvis oswa kontni ki manke",
      other: "Lòt",
    },
    detailsLabel: "Kisa nou ta dwe tcheke?",
    detailsPlaceholder:
      "Egzanp: nimewo telefòn lan chanje, yon klinik mache sou randevou sèlman kounye a, oswa yon lyen kase.",
    contactLabel: "Kontak si ou vle",
    contactPlaceholder: "Adrès imèl si ou vle yon repons",
    openEmail: "Ouvri imèl rapò a",
    copyText: "Kopye tèks rapò a",
    thanks:
      "Mèsi. Rapò yo ede nou bay priyorite paj ki pa ajou, lyen ki kase, ak lis ki bezwen verifikasyon lokal.",
    toastEmailTitle: "Bouyon imèl ouvri",
    toastEmailBody: "Rapò ou genyen kontèks paj la oswa sèvis la.",
    toastCopyTitle: "Rezime pwoblèm lan kopye",
    toastCopyBody:
      "Ou ka kole li nan pwòp aplikasyon imèl ou si ou bezwen.",
  },
  footer: {
    description:
      "Yon gid navigasyon swen sante nan langaj senp pou Kingston, Ontario. Sit sa a pa bay konsèy medikal ni tan datant an dirèk. Toujou konfime detay ki chanje vit ak sous ofisyèl la anvan ou ale.",
    trustModelTitle: "Modèl konfyans",
    trustModelBody:
      "Nou montre lyen sous ofisyèl, dat revizyon, ak lis ki toujou bezwen verifikasyon. Si yon bagay sanble pa kòrèk, rapòte li sou paj la oswa sèvis la.",
    beforeYouGo: {
      title: "Anvan ou ale",
      body: "Tcheke lè ouvèti ofisyèl yo, si ou bezwen yon randevou oswa yon referans, ak ki dokiman pou ou pote.",
    },
    languageHelp: {
      title: "Èd pou lang",
      body: "Li gid sa a nan lang ou ak meni Lang lan. Mande yon entèprèt pou konvèsasyon klinik lè presizyon enpòtan.",
    },
    privacy: {
      title: "Vi prive",
      body: "Sit sa a sèvi ak jounal amelyorasyon lokal ki respekte vi prive epi ki rete nan navigatè ou. Li pa voye done analitik pèsonèl bay yon sèvè distan.",
    },
    copyrightSuffix: "Resous enfòmasyon kominotè pou Kingston, Ontario.",
    disclaimer: "Avètisman",
    privacyLink: "Vi prive",
    sourcesLink: "Sous",
    reportLink: "Rapòte enfòmasyon ki pa ajou",
  },
  notFound: {
    seoTitle: "Paj pa jwenn",
    seoDescription:
      "Nou pa t ka jwenn paj ou mande a. Kòmanse ak èd ijan, baz pou moun ki fèk rive, sèvis lokal, oswa FAQ.",
    badge: "404",
    title: "Nou pa t ka jwenn paj sa a",
    body: "Si w ap eseye jwenn swen rapid, kòmanse ak gid ijan an oswa chèche nan anyè sèvis Kingston yo.",
    startHere: "Kòmanse Isit La",
    needHelpNow: "Bezwen Èd Kounye a",
    localServices: "Sèvis Lokal",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Gid Navigasyon Swen Sante Kingston",
  description:
    "Yon gid nan langaj senp, ki fèt anvan tout pou moun ki fèk rive, pou jwenn swen sante nan Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Kòmanse Isit La",
  description:
    "Ou fèk rive Kingston oswa ou fèk konnen sistèm sante Ontario? Kòmanse isit la pou aprann kijan sistèm lan mache ak sa pou ou fè an premye.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Swen sante nan Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Apèsi sou kijan swen ki asire yo mache nan Ontario.",
    },
    {
      title: "Ontario: Aplike pou OHIP epi jwenn yon kat sante",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Enfòmasyon ofisyèl sou aplikasyon OHIP ak kalifikasyon.",
    },
    {
      title: "Ontario: Jwenn yon doktè fanmi oswa yon enfimyè praktisyen",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Gid sou Health Care Connect ak aksè a swen primè.",
    },
    {
      title: "Canada: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Enfòmasyon sou kouvèti federal pou refijye ak moun k ap mande azil ki kalifye.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Kijan swen sante mache nan Ontario",
      type: "default",
      content: `Swen sante Ontario òganize otou **swen primè**. Swen primè vle di kote ou anjeneral kòmanse pou bezwen sante woutin, maladi ki dire lontan, preskripsyon, referans, ak prevansyon. Founisè swen primè ou ka yon doktè fanmi, yon enfimyè praktisyen (nurse practitioner), yon ekip sant sante kominotè, oswa yon klinik sante pou etidyan si ou kalifye.

Yon **referans (referral)** se lè yon klinisyen mande yon lòt sèvis oswa yon espesyalis pou wè ou. Yon **rekizisyon (requisition)** se yon fòm ki di yon laboratwa oswa yon klinik imajri ki tès ou bezwen.

Ou pa bezwen konprann tout pati nan sistèm lan premye jou a. Etap ki pi enpòtan yo se: aprann kouvèti ou, konnen ki kote pou ale pou pwoblèm ijan, epi fè yon plan pou swen regilye si ou poko gen yon founisè.`,
    },
    {
      id: "first-decisions",
      title: "Premye desizyon yo",
      type: "grid",
      gridItems: [
        {
          title: "Mwen ka bezwen èd ijan",
          content:
            "Kòmanse ak gid ijans kont swen ijan si ou gen yon pwoblèm sibit jodi a oswa aswè a.",
          icon: "alert",
          link: { text: "Bezwen Èd Kounye a", url: "/need-help-now" },
        },
        {
          title: "Mwen pa gen doktè fanmi",
          content:
            "Aprann kijan doktè fanmi, enfimyè praktisyen, sant sante kominotè, klinik san randevou, ak klinik pou etidyan mache ansanm.",
          icon: "stethoscope",
          link: { text: "Jwenn Swen Primè", url: "/get-a-family-doctor" },
        },
        {
          title: "Mwen bezwen konprann sa ki kouvri",
          content:
            "Li sou OHIP, IFHP, asirans prive, plan etidyan, kouvèti medikaman, ak depans kouran ou peye nan pòch ou.",
          icon: "shield",
          link: { text: "Pri ak Kouvèti", url: "/costs-and-coverage" },
        },
        {
          title: "Mwen bezwen èd pou lang",
          content:
            "Li gid sa a nan 33 lang ak meni Lang lan, epi mande sou sipò entèprèt pou konvèsasyon klinik ak konsantman.",
          icon: "info",
          link: { text: "Aksesibilite ak lang", url: "/about#accessibility" },
        },
        {
          title: "Mwen bezwen tès san, imajri, oswa yon renouvèlman",
          content:
            "Sèvi ak anyè lokal la pou jwenn pwochen etap pratik apre yon vizit.",
          icon: "file",
          link: { text: "Chèche Sèvis Lokal", url: "/local-services" },
        },
        {
          title: "Mwen pa sèten ki kote pou mwen kòmanse",
          content:
            "Rele Health811 pou konsèy enfimyè si ou pa sèten kijan sitiyasyon ou ijan.",
          icon: "clock",
          link: { text: "Health811 ak gid ijan", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Bon premye etap nan premye semèn ou",
      type: "steps",
      items: [
        "Aprann kouvèti ou: Li sa OHIP, IFHP, asirans prive, ak plan etidyan anjeneral kouvri. Si ou ka kalifye pou OHIP, aplike pi vit ou kapab.",
        "Chwazi plan ijan ou: Konnen ki lè pou rele 911, ki lè pou kòmanse ak Health811, ak ki kote pou jwenn swen ijan oswa menm jou a nan Kingston.",
        "Planifye pou swen regilye: Si ou pa gen yon founisè regilye, aprann opsyon ou yo pou doktè fanmi, enfimyè praktisyen, sant sante kominotè, klinik pou etidyan, klinik san randevou, ak swen vityèl.",
        "Kenbe enfòmasyon sante ou ansanm: Sere kat sante ou oswa papye IFHP ou, lis medikaman ou, kanè vaksen ou, ak kopi nenpòt rekizisyon oswa referans.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Si ou poko gen OHIP",
      type: "callout",
      content:
        "Pa tann ou malad pou aprann chemen kouvèti ou. Si ou kalifye pou OHIP, aplike bonè. Si ou kouvri ak IFHP oswa yon plan lekòl oswa prive, kenbe enfòmasyon sa a sou ou. Si ou pa gen asirans, mande sou frè yo anvan yon vizit epi chèche sèvis kominotè oswa sèvis ki fasil pou jwenn kote sa apwopriye.",
      link: { text: "Li sou kouvèti", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Kenbe bagay sa yo pare",
      type: "checklist",
      items: [
        "Kat sante ou, papye IFHP ou, oswa enfòmasyon asirans ou",
        "Yon lis medikaman, menm si ou pran sèlman kèk medikaman",
        "Non ak nimewo telefòn dènye klinik oswa founisè ou, si ou genyen youn",
        "Nenpòt rekizisyon, referans, papye sòti lopital, oswa enstriksyon tès resan",
        "Kesyon ou vle poze nan langaj senp",
        "Bezwen entèprèt ou ekri sou papye pou ou sonje mande",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Bezwen Èd Kounye a?",
  description:
    "Sèvi ak paj sa a lè ou gen yon pwoblèm sante jodi a oswa aswè a epi ou pa sèten ki kote pou ou kòmanse.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Jwenn konsèy medikal nan Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Sèvis ofisyèl konsèy enfimyè 24/7.",
    },
    {
      title: "9-8-8: Liy Èd pou Kriz Swisid",
      url: "https://988.ca/",
      note: "Liy nasyonal ofisyèl pou kriz swisid. Rele oswa voye tèks bay 9-8-8, gratis, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Rezo lopital ofisyèl pou enfòmasyon sou ijans, swen ijan, ak imajri.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Òganizasyon ofisyèl lokal pou sante mantal ak sipò pou kriz.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Ijans oswa ijan?",
      type: "comparison",
      comparison: {
        left: {
          title: "Ale nan ijans touswit pou pwoblèm tankou:",
          items: [
            "Doulè nan pwatrin, gwo pwoblèm pou respire, oswa siy konjesyon serebral (estwok)",
            "Gwo senyen, gwo blesi, oswa pèt konesans",
            "Konfizyon sibit, kriz konvilsyon, oswa gwo reyaksyon alèjik",
            "Yon ijans sekirite kote tann ta ka mete lavi oswa yon manm kò an danje",
          ],
        },
        right: {
          title:
            "Kòmanse ak swen ijan, Health811, oswa yon klinik menm jou a pou pwoblèm tankou:",
          items: [
            "Antòs, ti koupe, gratèl sou po, doulè nan zòrèy, oswa lafyèv san siy avètisman ijans",
            "Pwoblèm renouvèlman preskripsyon ki pa ka tann yon randevou woutin",
            "Kesyon pou konnen si ou bezwen swen ijan aswè a",
            "Yon pwoblèm ki sanble ijan men ki pa klèman menase lavi",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Sitiyasyon kouran apre lè travay",
      type: "table",
      columns: ["Sitiyasyon", "Bon premye etap", "Sa pou ou sonje"],
      rows: [
        {
          cells: [
            "Mwen pa sèten kijan sa ijan",
            "Rele Health811",
            "Yon enfimyè ka ede ou deside si pou ou rete lakay, chèche swen ijan, oswa ale nan ijans.",
          ],
        },
        {
          cells: [
            "Doktè mwen fèmen epi mwen bezwen konsèy aswè a",
            "Health811 oswa gid swen ijan",
            "Pa sipoze ijans se sèl opsyon ou si pa gen siy avètisman ijans.",
          ],
        },
        {
          cells: [
            "Mwen bezwen swen pou pitit mwen",
            "Sèvi ak menm siy avètisman ijans yo, apre sa chèche swen menm jou a oswa rele Health811 si ou pa sèten",
            "Pote kat sante timoun lan, lis medikaman li, ak istwa sentòm yo si sa posib.",
          ],
        },
        {
          cells: [
            "Mwen bezwen èd sante mantal aswè a",
            "Rele oswa voye tèks bay 9-8-8 (Liy Èd pou Kriz Swisid), oswa rele liy kriz 24/7 AMHS-KFLA a",
            "Si gen yon risk imedya pou sekirite, rele 911.",
          ],
        },
      ],
      caption:
        "Tablo sa a se gid jeneral sèlman. Si yon moun ka an danje imedya, rele 911.",
    },
    {
      id: "kingston-start-points",
      title: "Kote pou kòmanse nan Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Depatman Ijans",
          content:
            "Sèvi ak swen ijans pou pwoblèm ki menase lavi oswa ki ka menase lavi.",
          icon: "alert",
          link: {
            text: "Lis ijans ak swen ijan",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Sant Swen Ijan",
          content:
            "Itil pou anpil pwoblèm menm jou a ki pa ka tann men ki pa klèman ijans.",
          icon: "clock",
          link: {
            text: "Swen ijan ak menm jou a",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Konsèy enfimyè nan telefòn oswa sou entènèt si ou pa sèten ki kote pou ou ale. Sipò nan telefòn disponib nan anpil lang.",
          icon: "info",
          link: { text: "Lis Health811", url: "/local-services/health811" },
        },
        {
          title: "Sipò pou kriz sante mantal",
          content:
            "Rele oswa voye tèks bay 9-8-8 (Liy Èd pou Kriz Swisid) nenpòt lè, oswa sèvi ak sipò kriz lokal tankou liy kriz 24/7 AMHS-KFLA a.",
          icon: "heart",
          link: { text: "Lis sante mantal", url: "/local-services?category=mental-health" },
        },
        {
          title: "Sipò pou vyolans seksyèl",
          content:
            "Sèvi ak sipò espesyalize pou kriz si ou bezwen sipò emosyonèl imedya, defans dwa ou, oswa planifikasyon sekirite.",
          icon: "shield",
          link: {
            text: "Lis sipò",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Opsyon ijan pou etidyan",
          content:
            "Si ou se yon etidyan, tcheke si sèvis sante kanpis ou se pi bon premye etap pou bezwen ki pa ijans.",
          icon: "stethoscope",
          link: { text: "Lis sante pou etidyan", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Si ou toujou pa sèten",
      type: "callout",
      content:
        "Lè pwoblèm lan pa klèman menase lavi men ou enkyete pou tann, kòmanse ak Health811. Si yon moun ka pa an sekirite, ka ap vin pi mal rapidman, oswa ou pa ka jwenn bon èd la atan, sèvi ak sèvis ijans yo.",
      link: { text: "Rele Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Pote bagay sa yo si ou kapab",
      type: "checklist",
      items: [
        "Kat sante, papye IFHP, oswa nenpòt kat asirans ou genyen",
        "Yon lis medikaman oswa foto boutèy medikaman yo",
        "Lè sentòm yo te kòmanse ak nenpòt bagay ki te fè yo vin pi mal",
        "Bezwen entèprèt ou ekri sou papye si ou ka twò strese pou sonje pita",
        "Yon chajè telefòn ak yon moun pou akonpaye ou si sa ede ou",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Jwenn Swen Primè",
  description:
    "Aprann diferan chemen pou jwenn swen sante regilye nan Kingston si ou poko gen yon founisè.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Jwenn yon doktè fanmi oswa yon enfimyè praktisyen",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Gid ofisyèl Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Enfòmasyon ofisyèl sou sèvis sant sante kominotè lokal yo.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Enfòmasyon ofisyèl sou sante etidyan pou etidyan Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Enfòmasyon ofisyèl sou sante etidyan pou etidyan St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Sa swen primè vle di",
      type: "default",
      content:
        "Swen primè se kote ou anjeneral ale an premye pou bezwen sante woutin. Sa gen ladan tchèkòp, renouvèlman medikaman, swen pou maladi kwonik, referans, swen prevantif, ak swivi apre pwoblèm ijan.\n\nNan Kingston, chemen swen primè regilye ou ka gen ladan yon doktè fanmi, yon enfimyè praktisyen, yon sant sante kominotè, yon klinik sou kanpis, oswa yon konbinezon opsyon tanporè pandan w ap tann swen ki pi estab.",
    },
    {
      id: "access-matrix",
      title: "Chemen pou jwenn swen primè",
      type: "table",
      columns: ["Chemen", "Pi bon pou", "Ki moun ki ka itilize li", "Kijan pou kòmanse"],
      rows: [
        {
          cells: [
            "Doktè fanmi oswa enfimyè praktisyen",
            "Swen regilye kontini ak planifikasyon sante alontèm",
            "Pasyan ki ka enskri nan lis yon founisè",
            "Sèvi ak Health Care Connect epi veye plas ki ouvri lokalman",
          ],
        },
        {
          cells: [
            "Sant sante kominotè",
            "Swen ki baze nan kominote a, sipò ki pi fasil pou jwenn, ak kèk swen pou moun ki fèk rive oswa ki gen bezwen konplèks",
            "Kalifikasyon depann de pwogram lan ak estati admisyon an",
            "Kontakte òganizasyon an dirèkteman epi mande sou admisyon",
          ],
        },
        {
          cells: [
            "Sèvis sante pou etidyan",
            "Aksè pi rapid pou etidyan ki enskri",
            "Sèlman etidyan ki kalifye atravè lekòl la",
            "Sèvi ak sèvis sante oswa byennèt kanpis ou",
          ],
        },
        {
          cells: [
            "Klinik san randevou oswa swen ijan menm jou a",
            "Swen kout tèm pandan w ap tann oswa lè founisè regilye ou pa disponib",
            "Piblik jeneral la, dapre règ admisyon chak jou",
            "Tcheke aksè aktyèl la anvan ou ale",
          ],
        },
        {
          cells: [
            "Swen primè vityèl",
            "Kèk renouvèlman, konsèy, ak pwoblèm woutin",
            "Sa varye selon founisè a ak kouvèti a",
            "Tcheke sa founisè a ka jere ak sa li pa ka jere san danje sou entènèt",
          ],
        },
      ],
      caption:
        "Pi bon chemen an depann de kalifikasyon ou, ijans ou, ak si ou bezwen swen kout tèm oswa swen kontini.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Si ou pa gen yon founisè regilye",
      type: "steps",
      items: [
        "Enskri nan chemen ofisyèl pwovens lan: Sèvi ak Health Care Connect si ou pa gen yon doktè fanmi oswa yon enfimyè praktisyen.",
        "Tcheke si ou kalifye pou opsyon kanpis oswa sante kominotè: Etidyan ta dwe kòmanse ak klinik lekòl yo. Gen kèk sèvis sante kominotè ki gen priyorite admisyon espesifik.",
        "Bati yon plan tanporè ki an sekirite: Konnen ki sèvis san randevou, ijan, vityèl, famasi, ak sante mantal ou ka itilize pandan w ap tann.",
        "Kenbe pwòp dosye ou: Sere lis medikaman, rezilta tès, referans, ak non klinisyen ou te wè yo.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Sa pou ou fè pandan w ap tann",
      type: "checklist",
      items: [
        "Sèvi ak swen san randevou, ijan, oswa vityèl pou bezwen kout tèm lè sa apwopriye",
        "Mande famasi a ki èd pou renouvèlman oswa ki swen pou ti maladi ki ka disponib",
        "Kenbe yon sèl lis medikaman ajou epi pote li nan chak vizit",
        "Pote kopi rezilta enpòtan oswa papye sòti lopital lè swen ou divize ant plizyè kote",
        "Sèvi ak menm klinik la pou swivi lè sa posib pou swen ou ka yon ti jan pi konsistan",
      ],
    },
    {
      id: "next-best-option",
      title: "Si bezwen ou ijan men se pa yon ijans",
      type: "callout",
      content:
        "Paske ou pa gen yon doktè fanmi pa vle di ou ta dwe retade swen enpòtan. Sèvi ak bon opsyon kout tèm pou pwoblèm ki devan ou a, apre sa fè yon plan pou kontinuite apre yo fin trete pwoblèm ijan an.",
      link: { text: "Chèche opsyon swen primè", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Pri ak Kouvèti",
  description:
    "Gid nan langaj senp sou kouvèti pou OHIP, IFHP, Canadian Dental Care Plan, plan etidyan oswa prive, ak depans kouran ou peye nan pòch ou.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Aplike pou OHIP epi jwenn yon kat sante",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Gid ofisyèl OHIP.",
    },
    {
      title: "Canada: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Enfòmasyon ofisyèl sou kouvèti IFHP.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Gid ofisyèl pwovens lan sou kouvèti medikaman.",
    },
    {
      title: "Ontario: Jwenn èd pou gwo pri medikaman sou preskripsyon",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Gid ofisyèl Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Enfòmasyon ofisyèl sou pwogram federal kouvèti swen dan ak kalifikasyon.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Baz sou kouvèti",
      type: "default",
      content:
        "Kouvèti nan Ontario depann de estati legal ou, laj ou, revni ou, kalifikasyon pou pwogram yo, ak si ou gen yon plan asirans lekòl oswa prive.\n\nAnpil sèvis doktè ak lopital ki nesesè medikalman kouvri pou pasyan OHIP ki kalifye. Sa **pa** vle di tout bagay gratis. Medikaman, swen dan, swen pou je, fòm, biyè maladi, ak anpil sèvis sante alye souvan mande yon kouvèti apa oswa yon peman nan pòch ou.\n\nBon nouvèl si ou fèk rive: **pa gen peryòd datant pou OHIP**. Si ou kalifye, ou ka aplike kou ou rive nan Ontario, epi kouvèti a kòmanse yon fwa yo apwouve aplikasyon ou. Pa tann ou malad pou aplike.",
    },
    {
      id: "coverage-matrix",
      title: "Chemen kouvèti yo nan yon kout je",
      type: "table",
      columns: [
        "Kalite kouvèti",
        "Anjeneral li ede ak",
        "Sa ki ka toujou pa kouvri",
        "Sa pou fè apre",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Anpil sèvis doktè ak lopital ki nesesè medikalman",
            "Anpil medikaman, swen dan, swen pou je, ak fòm",
            "Aplike si ou kalifye epi kenbe kat ou ajou",
          ],
        },
        {
          cells: [
            "IFHP",
            "Kouvèti pou refijye ak moun k ap mande azil ki kalifye dapre pwogram federal la",
            "Detay yo varye selon kategori ak sèvis",
            "Tcheke gid ofisyèl IFHP la epi mande klinik la oswa famasi a si yo aksepte li",
          ],
        },
        {
          cells: [
            "Asirans lekòl oswa prive",
            "Souvan ede ak medikaman, terapi, swen dan, swen pou je, ak sante alye",
            "Limit kouvèti, ko-peman, ak règ rezo varye",
            "Li dokiman plan an anvan ou sipoze yon sèvis kouvri",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Kouvèti swen dan pou rezidan ki kalifye ki pa gen aksè a asirans dantè prive epi ki gen revni fanmi ajiste anba $90,000",
            "Se pa tout pwosedi ki kouvri, epi yon ko-peman ka aplike selon revni",
            "Tcheke kalifikasyon epi aplike sou paj ofisyèl CDCP Gouvènman Kanada a",
          ],
        },
        {
          cells: [
            "Pa gen kouvèti aktif",
            "Ou ka toujou jwenn aksè a kèk sèvis, men frè ka aplike",
            "Depans yo ka gwo pou vizit, tès, oswa medikaman",
            "Mande sou frè yo anvan vizit la epi chèche opsyon kominotè kote sa apwopriye",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Sa ki souvan pa kouvri nèt",
      type: "checklist",
      items: [
        "Anpil medikaman sou preskripsyon sof si ou kalifye pou yon pwogram piblik oswa ou gen yon lòt plan",
        "Swen dan, sof si ou kalifye pou Canadian Dental Care Plan, Healthy Smiles Ontario, yon pwogram dantè kominotè, oswa yon plan benefis",
        "Swen pou je andeyò kèk chemen kalifikasyon espesifik",
        "Fizyoterapi, terapi, masaj, ak lòt sèvis sante alye sof si yon pwogram oswa yon plan kouvri yo",
        "Fòm, lèt, frè pou randevou ou rate, ak anpil lòt frè administratif",
      ],
    },
    {
      id: "drug-coverage",
      title: "Chemen kouvèti medikaman",
      type: "default",
      content:
        "Kouvèti medikaman se souvan kote moun ki fèk rive yo sezi. Yon vizit kay doktè ka kouvri, men preskripsyon an ka toujou koute lajan.\n\nPwogram piblik pou medikaman ka ede selon laj, revni, ak kalifikasyon. **Ontario Drug Benefit** kouvri anpil medikaman pou moun ki gen 65 an oswa plis ak moun ki nan sèten pwogram, epi **OHIP+** kouvri anpil preskripsyon pou moun ki gen 24 an oswa mwens ki pa gen yon plan prive. Ontario gen tou **Trillium Drug Program** pou kèk moun ki gen gwo depans preskripsyon konpare ak revni fwaye yo. Si ou gen yon plan lekòl oswa prive, tcheke si li mache ansanm ak kouvèti piblik la oswa si li ranplase li.",
    },
    {
      id: "coverage-scenarios",
      title: "Kesyon kouran sou kouvèti",
      type: "faq",
      faqs: [
        {
          question: "Mwen poko gen OHIP. Èske mwen ka toujou jwenn swen?",
          answer:
            "Wi, men frè ka aplike epi pi bon chemen an depann de estati ou ak ijans ou. Mande sou pri yo anvan swen ki pa ijans lè sa posib, epi gade kalifikasyon pou IFHP oswa yon plan lekòl oswa prive si sa aplike pou ou.",
        },
        {
          question: "Mwen se yon etidyan entènasyonal. Èske OHIP se sèl opsyon mwen?",
          answer:
            "Pa toujou. Anpil etidyan konte sou yon plan asirans lekòl oswa prive olye de OHIP. Sèvi ak dokiman ofisyèl plan lekòl ou ak sèvis sante pou etidyan yo pou konfime sa ki kouvri.",
        },
        {
          question: "Èske medikaman mwen ap gratis si randevou mwen te kouvri?",
          answer:
            "Pa nesesèman. Kouvèti randevou ak kouvèti preskripsyon souvan apa.",
        },
        {
          question: "Èske swen dan kouvri?",
          answer:
            "Swen dan apa de OHIP pou pifò granmoun. Canadian Dental Care Plan federal la kounye a kouvri anpil rezidan ki pa gen asirans dantè prive epi ki gen revni fanmi ajiste anba $90,000 — anjeneral ou bezwen te ranpli yon deklarasyon taks Kanadyen pou kalifye. Timoun nan fanmi ki gen revni pi ba ka kalifye pou Healthy Smiles Ontario, epi Kingston gen yon klinik dantè kominotè pou moun ki nan sèten pwogram.",
        },
        {
          question: "Kijan mwen ka konnen si yon sèvis piblik, kominotè, oswa prive?",
          answer:
            "Sèvi ak filtè anyè a epi gade detay lis la. Si ou pa sèten, kontakte sèvis la anvan ou pran randevou.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Vizit Swen Sante Ou",
  description:
    "Sa pou ou pote, kijan pou ou poze kesyon, ak kijan pou ou kominike san danje pandan yon vizit swen sante.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Swen sante nan Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Gid jeneral sou sistèm lan.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Sa pou ou pote",
      type: "checklist",
      items: [
        "Kat sante ou, papye IFHP ou, oswa lòt enfòmasyon asirans",
        "Yon lis konplè medikaman, ki gen ladan vitamin ak medikaman san preskripsyon",
        "Non sentòm yo, ki lè yo te kòmanse, ak sa ki chanje",
        "Kesyon ou vle jwenn repons anvan ou ale",
        "Nenpòt rekizisyon, referans, papye sòti lopital, oswa rezilta tès resan",
        "Bezwen entèprèt ou ekri sou papye pou ou sonje mande",
      ],
    },
    {
      id: "during-the-visit",
      title: "Pandan vizit la",
      type: "steps",
      items: [
        "Kòmanse ak pwoblèm prensipal ou: Anpil randevou kout, kidonk kòmanse ak pwoblèm ki pi enpòtan jodi a.",
        "Sèvi ak langaj senp: Li nòmal pou ou di 'Mwen pa konprann mo sa a' oswa 'Èske ou ka eksplike sa yon fason ki pi senp?'",
        "Repete plan an: Anvan ou ale, di pwochen etap yo awotvwa pou ou konnen si ou bezwen yon tès, yon referans, yon renouvèlman, oswa yon randevou swivi.",
        "Mande sa pou fè si bagay yo vin pi mal: Ou ta dwe konnen ki lè pou rele tounen, ki lè pou sèvi ak swen ijan, ak ki lè pou sèvi ak swen ijans.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Èd pou entèprèt ak kominikasyon",
      type: "default",
      content:
        "Si ou bezwen èd pou lang, mande bonè. Pa tann jouk nan fen randevou a. Ou ka li sit entènèt sa a nan plizyè lang ak meni Lang lan, men tradiksyon sit la pa dwe ranplase sipò entèprèt pou desizyon tretman, enstriksyon medikaman, oswa konsantman.\n\nOu ka di: **'Mwen bezwen yon entèprèt, souple.'** Health811 (rele 811) bay sipò nan telefòn nan anpil lang tou. Si yon moun vin avè ou pou sipòte ou, sonje ke yon manm fanmi ka pa toujou pi bon moun nan oswa moun ki pi an sekirite pou tradui enfòmasyon medikal ki konplèks oswa sansib.",
    },
    {
      id: "questions-to-ask",
      title: "Kesyon ki vo lapenn poze",
      type: "checklist",
      items: [
        "Kisa ou panse k ap pase?",
        "Kisa mwen ta dwe fè apre?",
        "Èske mwen bezwen yon tès, yon rekizisyon, yon referans, oswa yon vizit swivi?",
        "Ki lè mwen ta dwe tann rezilta yo?",
        "Ki siy avètisman ki vle di mwen ta dwe rele tounen oswa jwenn èd ijan?",
      ],
    },
    {
      id: "privacy",
      title: "Vi prive ak konsantman",
      type: "default",
      content:
        "Enfòmasyon sante ou sansib. Si ou pa sèten ki moun k ap wè enfòmasyon ou, mande. Si ou pa konprann yon fòm, yon konvèsasyon sou konsantman, oswa yon plan tretman, ralanti pwosesis la epi mande yon eksplikasyon ki pi klè.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Apre Vizit La",
  description:
    "Aprann sa k ap pase apre yon vizit, tankou rekizisyon, rezilta tès, referans, ak ki lè pou rele tounen.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Enfòmasyon sou sistèm lopital lokal la.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Enfòmasyon sou pwosesis laboratwa kominotè ak pòtay pasyan.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Sa ki souvan rive apre yon vizit",
      type: "steps",
      items: [
        "Ou soti ak yon plan: Sa ka gen ladan yon medikaman, yon rekizisyon, yon referans, yon randevou swivi, oswa enstriksyon pou veye siy avètisman.",
        "Ou ka bezwen fè pwochen etap la ou menm: Pa egzanp, ou ka bezwen pran randevou pou tès san, imajri, ale chèche medikaman nan famasi, oswa yon vizit swivi.",
        "Rezilta yo anjeneral retounen bay klinisyen ki te mande yo a: Laboratwa a oswa sant imajri a ka pa eksplike ou rezilta a sou plas.",
        "Ou ka pa resevwa yon apèl pou chak rezilta nòmal: Mande ki pwosesis swivi klinik la genyen pou ou konnen sa pou ou tann.",
      ],
    },
    {
      id: "common-terms",
      title: "Tèm kouran apre vizit",
      type: "table",
      columns: ["Tèm", "Sa li vle di nan langaj senp", "Sa ou anjeneral fè apre"],
      rows: [
        {
          cells: [
            "Rekizisyon (requisition)",
            "Yon fòm ki di laboratwa a oswa klinik imajri a ki tès ou bezwen",
            "Pran randevou oswa ale fè tès la epi kenbe yon kopi si ou kapab",
          ],
        },
        {
          cells: [
            "Referans (referral)",
            "Yon demann yon klinisyen fè bay yon lòt sèvis oswa yon espesyalis",
            "Tann yo kontakte ou, apre sa rele tounen si yo te di ou fè swivi epi anyen pa rive",
          ],
        },
        {
          cells: [
            "Swivi (follow-up)",
            "Yon kontwòl apre tretman, tès, oswa yon chanjman nan sentòm yo",
            "Mande ki lè ak kijan swivi a ta dwe fèt anvan ou ale",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Ki lè pou rele tounen",
      type: "checklist",
      items: [
        "Ou pa konprann rekizisyon an, referans lan, oswa enstriksyon medikaman yo",
        "Yo te di ou yon moun t ap kontakte ou epi ou pa tande anyen nan tan yo te di a",
        "Sentòm ou yo ap vin pi mal oswa yo pa amelyore jan yo te di ou tann lan",
        "Famasi a, laboratwa a, oswa klinik imajri a di ou gen yon bagay ki manke nan papye yo",
        "Ou panse yo ka rate yon rezilta oswa ou toujou enkyete",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Sitiyasyon kouran",
      type: "faq",
      faqs: [
        {
          question: "Mwen bezwen tès san apre yon vizit. Kisa pou mwen fè?",
          answer:
            "Tcheke si ou gen yon rekizisyon ak si laboratwa a mande randevou. Apre sa, sèvi ak anyè a pou jwenn yon laboratwa. Pote rekizisyon an ak enfòmasyon kouvèti ou.",
        },
        {
          question: "Mwen pa konprann fòm rekizisyon an oswa referans lan.",
          answer:
            "Rele klinik ki te ba ou li a epi mande yo eksplike li nan langaj senp. Li rezonab pou mande pou kisa fòm lan ye, ki kote li dwe ale, ak si ou bezwen pran randevou ou menm.",
        },
        {
          question: "Ki moun ki fè swivi sou rezilta tès yo?",
          answer:
            "Anjeneral se klinisyen ki te mande tès la. Mande biwo klinisyen sa a ki pwosesis nòmal yo pou rezilta nòmal ak rezilta ki pa nòmal.",
        },
        {
          question: "Konbyen tan referans yo pran?",
          answer:
            "Delè referans yo varye anpil. Mande ki kalite datant ki nòmal pou sitiyasyon ou ak sa pou fè si ou pa tande anyen.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Pwochen etap ki itil",
      type: "grid",
      gridItems: [
        {
          title: "Jwenn laboratwa ak imajri",
          content:
            "Sèvi ak anyè a pou lis tès san, radyografi (X-ray), iltrason, ak imajri.",
          icon: "file",
          link: { text: "Laboratwa ak imajri", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Jwenn yon famasi",
          content:
            "Sèvi ak anyè a pou famasi, èd pou renouvèlman, ak sipò pou medikaman.",
          icon: "shield",
          link: { text: "Famasi", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Bezwen planifye swen swivi?",
          content:
            "Sèvi ak paj swen primè a si ou pa konnen ki kote swivi alontèm lan ta dwe fèt.",
          icon: "stethoscope",
          link: { text: "Jwenn Swen Primè", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Medikaman ak Famasi",
  description:
    "Konprann preskripsyon, renouvèlman, èd famasyen, ak kijan pou peye medikaman nan Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Sa famasyen yo ka fè",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Enfòmasyon ofisyèl pwovens lan sou famasyen ak famasi.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Gid ofisyèl pwovens lan sou kouvèti medikaman.",
    },
    {
      title: "Ontario: Jwenn èd pou gwo pri medikaman sou preskripsyon",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Gid ofisyèl Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Sa yon famasyen ka ede ou fè",
      type: "default",
      content:
        "Famasyen fè plis pase bay medikaman. Yo ka eksplike kijan pou pran yon medikaman san danje, tcheke entèraksyon ant medikaman, epi revize efè segondè.\n\nNan Ontario, famasyen ka **evalye epi preskri pou 19 ti maladi kouran** — tankou je wouj (konjonktivit), bouton lafyèv, enfeksyon nan pipi (pou fanm), pike ensèk, ak alèji sezon. Evalyasyon an gratis ak kat sante Ontario ou, epi lis maladi yo ka kontinye grandi.\n\nYon famasi se youn nan pi bon kote tou pou poze kesyon pratik tankou: **Èske renouvèlman sa a ijan? Èske gen yon opsyon ki pi bon mache? Kisa pou mwen fè si mwen rate yon dòz?**",
    },
    {
      id: "fill-a-prescription",
      title: "Kijan pou ou fè ranpli yon preskripsyon",
      type: "steps",
      items: [
        "Jwenn preskripsyon an: Li ka sou papye, voye pa faks, oswa voye elektwonikman.",
        "Chwazi famasi a: Lè ou itilize menm famasi a regilyèman, sa ede yo wè entèraksyon medikaman ak pwoblèm nan istwa renouvèlman ou.",
        "Mande sou delè ak pri: Famasi a ka di ou ki lè li ap pare ak si plan ou ap kouvri li.",
        "Koute konsèy yo: Mande pou kisa medikaman an ye, kijan pou pran li, ak ki lè pou rele tounen si li pa ede.",
      ],
    },
    {
      id: "refill-options",
      title: "Pwoblèm renouvèlman ak medikaman",
      type: "table",
      columns: ["Sitiyasyon", "Bon premye etap", "Poukisa"],
      rows: [
        {
          cells: [
            "Mwen bezwen yon renouvèlman woutin",
            "Kòmanse ak famasi ou konn itilize a oswa klinisyen regilye ou",
            "Yo ka di ou si ou bezwen yon renouvèlman, yon nouvo preskripsyon, oswa yon nouvo randevou",
          ],
        },
        {
          cells: [
            "Doktè mwen pa disponib epi medikaman mwen ka fini",
            "Mande famasi a ki opsyon ki disponib, apre sa sèvi ak swen san randevou, vityèl, oswa ijan si sa nesesè",
            "Pwochen etap ki pi an sekirite a depann de medikaman an ak sitiyasyon ou",
          ],
        },
        {
          cells: [
            "Mwen pa konprann kijan pou pran medikaman sa a",
            "Mande famasyen an eksplike li ankò nan langaj senp",
            "Sa fè pati itilizasyon medikaman san danje",
          ],
        },
        {
          cells: [
            "Medikaman an koute twòp",
            "Mande sou vèsyon jenerik, kouvèti plan ou, ak pwogram piblik yo",
            "Pri medikaman varye epi kouvèti a souvan apa de vizit la li menm",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Fason medikaman ka peye",
      type: "checklist",
      items: [
        "Yon pwogram piblik pou medikaman, si ou kalifye",
        "Yon plan asirans lekòl oswa prive",
        "Yon konbinezon kouvèti piblik ak prive",
        "Nan pòch ou si pa gen okenn pwogram ki kouvri medikaman an",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Bezwen èd famasi lokal?",
      type: "callout",
      content:
        "Sèvi ak anyè a pou jwenn famasi, sipò pou renouvèlman, ak opsyon vityèl oswa menm jou a lè w ap eseye rezoud yon pwoblèm medikaman rapidman.",
      link: { text: "Chèche lis famasi", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Sipò Sante Mantal",
  description:
    "Sante mantal lokal, terapi, sipò pou jèn, ak chemen pou kriz nan Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Liy Èd pou Kriz Swisid",
      url: "https://988.ca/",
      note: "Liy nasyonal ofisyèl pou kriz swisid. Rele oswa voye tèks bay 9-8-8, gratis, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Enfòmasyon ofisyèl sou sante mantal granmoun ak sipò pou kriz.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Liy èd ofisyèl Ontario pou sante mantal ak adiksyon (dejwe).",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Enfòmasyon ofisyèl sou sante mantal timoun ak jèn.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Si yon moun ka pa an sekirite",
      type: "callout",
      content:
        "Si gen yon risk imedya pou lavi oswa sekirite, rele 911. Pou panse swisid oswa gwo detrès, ou ka **rele oswa voye tèks bay 9-8-8** (Liy Èd pou Kriz Swisid) nenpòt lè — li gratis, konfidansyèl, epi disponib 24/7 an angle ak an franse. Ou ka rele tou liy kriz 24/7 AMHS-KFLA a nan 613-544-4229. Pa tann yon randevou woutin.",
      link: { text: "Lis sante mantal", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Kalite sipò",
      type: "grid",
      gridItems: [
        {
          title: "Sipò pou kriz",
          content:
            "Sèvi ak sa pou detrès imedya, enkyetid sou sekirite, oswa lè tann pa an sekirite.",
          icon: "alert",
        },
        {
          title: "Sipò ijan",
          content:
            "Sèvi ak sa lè sitiyasyon an grav epi ou bezwen èd byento, men se pa yon ijans imedya ki menase lavi.",
          icon: "clock",
        },
        {
          title: "Terapi woutin",
          content:
            "Sèvi ak sa pou anksyete, depresyon, estrès, lapenn, pwoblèm relasyon, oswa chanjman nan lavi ki kontinye.",
          icon: "heart",
        },
        {
          title: "Sèvis pou timoun ak jèn",
          content:
            "Sèvi ak sèvis sante mantal espesyalize pou jèn lè moun ki bezwen swen an se yon timoun oswa yon adolesan.",
          icon: "info",
        },
        {
          title: "Sipò sou kanpis",
          content:
            "Pou etidyan, chemen byennèt oswa terapi sou kanpis la ka pi bon premye etap.",
          icon: "stethoscope",
        },
        {
          title: "Sipò pou vyolans seksyèl",
          content:
            "Sèvi ak sipò espesyalize pou kriz, terapi, defans dwa ou, ak planifikasyon sekirite apre vyolans seksyèl.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Ki kote pou kòmanse nan sitiyasyon kouran",
      type: "table",
      columns: ["Sitiyasyon", "Pi bon premye etap", "Poukisa"],
      rows: [
        {
          cells: [
            "Mwen bezwen èd sante mantal aswè a",
            "Rele oswa voye tèks bay 9-8-8, rele liy kriz AMHS-KFLA a, oswa sèvi ak swen ijans si sekirite an danje",
            "Pa tann yon randevou woutin lè sitiyasyon an pa santi an sekirite",
          ],
        },
        {
          cells: [
            "Mwen bezwen terapi men mwen an sekirite kounye a",
            "Terapi kominotè, doktè fanmi, enfimyè praktisyen, oswa sipò plan prive ou",
            "Sa yo ka ede ak swen kontini ak referans",
          ],
        },
        {
          cells: [
            "Mwen bezwen èd pou pitit mwen",
            "Sèvis sante mantal pou timoun oswa jèn epi, si sa nesesè, gid ijan",
            "Timoun ak jèn souvan gen chemen apa",
          ],
        },
        {
          cells: [
            "Mwen se yon etidyan",
            "Sante oswa terapi sou kanpis an premye, sof si sitiyasyon an pa an sekirite oswa li grav",
            "Sèvis kanpis yo ka pòt antre ki pi rapid pou etidyan",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Kesyon kouran",
      type: "faq",
      faqs: [
        {
          question: "Ki moun mwen ka rele oswa voye tèks bay kounye a menm?",
          answer:
            "Rele oswa voye tèks bay **9-8-8** (Liy Èd pou Kriz Swisid) nenpòt lè, gratis, 24/7 — pa bezwen referans. Nan Kingston, liy kriz AMHS-KFLA a nan 613-544-4229 reponn 24/7 tou. Si sekirite an danje imedya, rele 911.",
        },
        {
          question: "E si mwen pa konnen si sa konte kòm yon kriz?",
          answer:
            "Si yon moun ka pa an sekirite, pa tann pou ou sèten. Sèvi ak sipò pou kriz oswa sèvis ijans yo.",
        },
        {
          question: "E si mwen bezwen èd aswè a men mwen pa sèten ki moun pou mwen rele?",
          answer:
            "Sèvi ak paj anyè sante mantal lokal la oswa chemen sipò pou kriz la olye ou tann jouk maten.",
        },
        {
          question: "E si moun ki bezwen èd la se pitit mwen?",
          answer:
            "Chèche sèvis pou timoun ak jèn espesyalman. Chemen sante mantal pou jèn souvan diferan de swen pou granmoun.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Depistaj ak Prevansyon",
  description:
    "Aprann baz swen prevantif, vaksen, ak tès depistaj nan Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Enfòmasyon lokal sou vaksen ak sante piblik.",
    },
    {
      title: "Ontario: Swen sante nan Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Gid jeneral sou swen sante.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Poukisa swen prevantif enpòtan",
      type: "default",
      content:
        "Swen prevantif vle di eseye jwenn pwoblèm yo bonè oswa anpeche yo anvan yo vin pi grav. Sa gen ladan vaksen, tès depistaj, kontwòl tansyon regilye, ak konvèsasyon sou faktè risk ak yon klinisyen.",
    },
    {
      id: "common-prevention",
      title: "Travay prevansyon kouran",
      type: "checklist",
      items: [
        "Kenbe vaksen ou yo ajou",
        "Mande si yo rekòmande tès depistaj pou laj ou oswa istwa sante ou",
        "Pote kesyon ou yo sou tansyon, dyabèt, oswa lòt faktè risk nan vizit woutin yo",
        "Sèvi ak resous sante piblik lè ou bezwen enfòmasyon sou vaksen oswa prevansyon",
      ],
    },
    {
      id: "prevention-next",
      title: "Bezwen sèvis prevansyon lokal?",
      type: "callout",
      content:
        "Sèvi ak anyè sèvis lokal yo pou lis sante piblik, depistaj, ak famasi si ou bezwen yon kote konkrè pou kòmanse nan Kingston.",
      link: {
        text: "Lis sante piblik ak famasi",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Swen Alye ak Kominotè",
  description:
    "Sèvi ak paj sa a pou konprann swen lakay, swen dan, reyabilitasyon, terapi, sipò pou vizyon, ak sa ki ka piblik, kominotè, etidyan, oswa prive.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Enfòmasyon ofisyèl sou kowòdinasyon swen lakay ak swen kominotè.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Enfòmasyon ofisyèl sou pwogram federal kouvèti swen dan ak kalifikasyon.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Enfòmasyon ofisyèl sou sèvis kominotè ak swen dan.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Enfòmasyon ofisyèl sou sipò pou vizyon.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Sa swen alye ak kominotè vle di",
      type: "default",
      content:
        "Sante alye vle di swen ki soti nan pwofesyonèl tankou fizyoterapèt, terapèt okipasyonèl, dyetetisyen, travayè sosyal, konseye, dantis, oswa ekip sipò pou vizyon. Swen kominotè souvan vle di swen ki fèt andeyò lopital la, pafwa lakay ou, nan lekòl ou, nan yon klinik, oswa nan yon pwogram kominotè.",
    },
    {
      id: "access-payment-matrix",
      title: "Tablo aksè ak peman",
      type: "table",
      columns: ["Chemen", "Egzanp", "Kijan peman an anjeneral mache", "Kijan pou kòmanse"],
      rows: [
        {
          cells: [
            "Swen lakay ak kominotè finanse ak lajan piblik",
            "Swen enfimyè lakay, terapi lakay, kowòdinasyon swen",
            "Pwogram piblik ka aplike si ou ranpli kondisyon pwogram lan",
            "Kòmanse ak yon referans klinisyen oswa chemen ofisyèl swen lakay la",
          ],
        },
        {
          cells: [
            "Sèvis ki baze nan kominote a",
            "Swen dan nan sant sante kominotè oswa sipò ki pi fasil pou jwenn",
            "Finansman piblik oswa kominotè ka aplike selon sèvis la",
            "Kontakte pwogram lan dirèkteman epi mande sou kalifikasyon",
          ],
        },
        {
          cells: [
            "Sipò ki baze nan lekòl",
            "Terapi sou kanpis oswa sipò ki gen rapò ak sante",
            "Anjeneral lye ak kalifikasyon etidyan ak frè oswa plan etidyan",
            "Sèvi ak paj sèvis ofisyèl lekòl ou an premye",
          ],
        },
        {
          cells: [
            "Swen alye prive",
            "Fizyoterapi, terapi, masaj, dantis prive, sèvis vizyon prive",
            "Souvan ou peye prive sof si yon lòt plan kouvri li",
            "Mande tout frè yo ak règ kouvèti yo anvan ou pran randevou",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Egzanp swen alye ak kominotè",
      type: "grid",
      gridItems: [
        {
          title: "Swen lakay",
          content:
            "Itil lè yon moun bezwen sipò lakay apre maladi, blesi, oswa swen lopital.",
          icon: "clock",
          link: {
            text: "Lis swen lakay",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Swen dan",
          content:
            "Kouvèti swen dan apa de kouvèti doktè regilye a. Canadian Dental Care Plan federal la kounye a kouvri anpil moun ki pa gen asirans dantè prive, epi pwogram tankou Healthy Smiles Ontario ak klinik dantè kominotè yo ede gwoup espesifik.",
          icon: "shield",
          link: {
            text: "Lis swen dan ak kominotè",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Reyabilitasyon ak terapi",
          content:
            "Fizyoterapi, terapi okipasyonèl, ak sèvis ki gen rapò ka piblik, kominotè, oswa prive selon chemen ou.",
          icon: "stethoscope",
          link: { text: "Lis swen alye", url: "/local-services?category=allied-community" },
        },
        {
          title: "Sipò pou vizyon",
          content:
            "Sipò pou vizyon ka gen ladan aparèy, èd pou oryantasyon, ak sipò kominotè ansanm ak swen medikal pou je.",
          icon: "info",
          link: {
            text: "Lis sipò pou vizyon",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Anvan ou pran randevou",
      type: "checklist",
      items: [
        "Mande si yon referans nesesè",
        "Mande si sèvis la piblik, finanse pa kominote a, oswa peye prive",
        "Mande frè egzak yo ak règ anilasyon yo si sèvis la prive",
        "Tcheke si plan lekòl ou oswa plan prive ou kouvri yon pati nan pri a",
        "Mande si ou bezwen pote dosye, imajri, oswa yon nòt doktè",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ ak Glosè",
  description:
    "Sitiyasyon kouran pou moun ki fèk rive, kesyon pratik, ak definisyon nan langaj senp.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Swen sante nan Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Gid jeneral pwovens lan sou swen sante.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Gid ofisyèl sou konsèy enfimyè.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Sitiyasyon kouran pou moun ki fèk rive",
      type: "faq",
      faqs: [
        {
          question: "Mwen poko gen OHIP. Kisa pou mwen fè an premye?",
          answer:
            "Aprann chemen kouvèti ou an premye, apre sa sèvi ak anyè lokal la ak paj gid ijan yo pou fè yon plan tanporè ki an sekirite.",
        },
        {
          question: "Mwen se yon etidyan entènasyonal. Ki kote pou mwen kòmanse?",
          answer:
            "Kòmanse ak sèvis sante oswa byennèt kanpis ou ak dokiman asirans lekòl ou, apre sa sèvi ak sèvis kominotè oswa ijan lè sa yo pa ase.",
        },
        {
          question: "Mwen bezwen yon entèprèt.",
          answer:
            "Mande bonè. Ou ka li sit sa a nan 33 lang ak meni Lang lan, epi ou ka montre anplwaye yo fraz rapid yo nan tab èd pou entèprèt la. Pou randevou, enstriksyon medikaman, konsantman, ak diskisyon sou tès, mande sou sipò entèprèt pwofesyonèl. Health811 (rele 811) bay sipò nan telefòn nan anpil lang.",
        },
        {
          question: "Mwen bezwen tès san apre yon vizit.",
          answer:
            "Tcheke ke ou gen yon rekizisyon, apre sa chèche laboratwa ak imajri nan anyè a.",
        },
        {
          question: "Mwen bezwen yon renouvèlman epi doktè mwen pa disponib.",
          answer:
            "Kòmanse ak famasi ou, apre sa sèvi ak chemen san randevou, vityèl, oswa ijan jan sa apwopriye selon medikaman an ak ijans lan.",
        },
        {
          question: "Mwen bezwen swen pou pitit mwen.",
          answer:
            "Sèvi ak siy avètisman ijans yo an premye, apre sa gid menm jou a oswa ijan. Chemen sante mantal pou timoun ak jèn souvan apa de swen granmoun.",
        },
        {
          question: "Mwen bezwen èd sante mantal aswè a.",
          answer:
            "Rele oswa voye tèks bay 9-8-8 (Liy Èd pou Kriz Swisid) nenpòt lè, oswa rele liy kriz 24/7 AMHS-KFLA a nan 613-544-4229. Sèvi ak swen ijans si sekirite an danje. Pa tann yon randevou woutin.",
        },
        {
          question: "Mwen pa konprann yon rekizisyon oswa yon referans.",
          answer:
            "Rele klinik ki te ba ou li a epi mande yo eksplike li nan langaj senp. Ou ka mande pou kisa li ye, ki kote li ale, ak ki moun ki dwe fè swivi a.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Plis kesyon kouran",
      type: "faq",
      faqs: [
        {
          question: "Èske mwen ka jis ale nan ijans si mwen pa gen doktè?",
          answer:
            "Ijans se pou ijans. Si pwoblèm lan pa klèman menase lavi, kòmanse ak paj gid ijan an, Health811, yon klinik san randevou, oswa lòt swen menm jou a.",
        },
        {
          question: "E si mwen fèk rive epi mwen pa konnen ki sèvis ki bon pou mwen?",
          answer:
            "Sèvi ak filtè anyè a pou etidyan, moun ki fèk rive, timoun ak jèn, san randevou, vityèl, referans obligatwa, ak kalite kouvèti.",
        },
        {
          question: "E si enfòmasyon sou sit sa a sanble pa ajou?",
          answer:
            "Sèvi ak fòm rapò a sou paj la oswa lis la pou pwochen revizyon an ka konsantre sou chanjman ou jwenn lan.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glosè",
      type: "checklist",
      items: [
        "Swen primè: Chemen swen sante regilye ou pou bezwen sante woutin ak kontini.",
        "Enfimyè praktisyen (NP): Yon enfimyè ki gen fòmasyon avanse ki ka evalye, fè dyagnostik, preskri, epi bay referans nan anpil sitiyasyon.",
        "Referans (referral): Yon demann yon klinisyen fè bay yon lòt sèvis oswa yon espesyalis.",
        "Rekizisyon (requisition): Yon fòm ki di yon laboratwa oswa yon klinik imajri ki tès ou bezwen.",
        "Triyaj: Pwosesis pou deside ki moun ki bezwen swen ijan an premye dapre sekirite ak gravite.",
        "Klinik san randevou (walk-in): Yon klinik ki ka wè pasyan san randevou yo pran davans, dapre limit admisyon chak jou.",
        "Swen ijan: Swen menm jou a pou pwoblèm ijan ki pa klèman menase lavi.",
        "Pasyan enskri oswa atache: Yon pasyan ki gen yon relasyon kontini ak yon founisè swen primè regilye.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Konsènan, Konfyans, ak Vi Prive",
  description:
    "Aprann kijan gid sa a mache, kijan nou jere sous ak estati revizyon, ak kijan pou rapòte chanjman.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Nòt sou sous pwojè a",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Rezime piblik sou kijan pwojè a jere konfyans ak sous.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Pou kisa sit sa a ye",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca se yon gid navigasyon swen sante ki fèt anvan tout pou moun ki fèk rive nan Kingston, Ontario. Li fèt pou ede moun chwazi bon pwochen etap la, konprann tèm kouran nan sistèm lan, epi jwenn lis sèvis lokal yo ka fè konfyans.\n\nSit sa a se **pa** yon zouti tan datant an dirèk, yon platfòm pou pran randevou, oswa yon sèvis konsèy medikal.",
    },
    {
      id: "sources",
      title: "Kijan konfyans ak sous yo mache",
      type: "default",
      content:
        "Nou eseye konekte lis lokal yo ak paj sèvis ofisyèl yo chak fwa sa posib. Chak lis montre yon estati revizyon ak dat dènye revizyon an. Gen kèk antre ki verifye nèt ak sous ofisyèl yo. Gen lòt ki toujou bezwen yon verifikasyon lokal paske lè ouvèti, admisyon, oswa règ aksè chanje souvan.\n\nBlòk sous nan nivo paj yo montre referans ofisyèl prensipal yo te itilize pou sik revizyon aktyèl la.",
    },
    {
      id: "accessibility",
      title: "Aksesibilite ak lang",
      type: "default",
      content:
        "Sit sa a fèt pou li mache byen ak klavye, pou li mache anvan tout sou telefòn, epi pou li fasil pou li nan langaj senp.\n\nOu ka li tout gid la nan **33 lang** ak meni Lang ki nan tèt paj la — soti nan العربية ak Soomaali rive nan ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, ak Українська — ak chak paj ak meni ki sèvi dirèkteman sou sit sa a. Tout tradiksyon yo fèt ak èd machin; franse, panyòl, arab, ak chinwa senplifye resevwa yon pas revizyon anplis, epi rès yo make kòm tradiksyon otomatik. **Angle rete vèsyon referans lan** — si yon fraz tradui sanble pa klè oswa etone ou, tcheke tèks angle a oswa mande yon moun konfime li.\n\nPlizyè douzèn lòt lang ka ouvri sit sa a atravè Google Translate nan menm meni an, epi tab èd pou entèprèt la gen fraz rapid ijan nan plis pase 20 lang ou ka montre anplwaye yo.\n\nLis anyè yo (non sèvis, adrès, nimewo telefòn, ak lè ouvèti) rete an angle pou yo matche egzakteman ak sous ofisyèl yo.\n\nNenpòt kalite tradiksyon ka toujou fè erè sou detay medikal, kidonk mande sou sipò entèprèt pwofesyonèl pou randevou, enstriksyon medikaman, ak konsantman. Health811 (rele 811) bay sipò nan telefòn nan anpil lang.",
    },
    {
      id: "privacy",
      title: "Vi prive",
      type: "default",
      content:
        "Sit sa a pa sèvi ak analitik distan ki anvayisan. Li kenbe kèk konte amelyorasyon lejè nan pwòp navigatè ou pou moun k ap antretni sit la ka konprann rechèch kouran yo, rechèch ki pa bay rezilta, sèvis moun gade yo, ak rapò pwoblèm lè yo ekspòte enfòmasyon an espre pou antretyen.\n\nPa voye enfòmasyon medikal prive nan fòm kòmantè a oswa pa imèl.",
    },
    {
      id: "contact",
      title: "Kontak ak rapòte chanjman",
      type: "default",
      content:
        "Si yon paj oswa yon lis sanble pa kòrèk, sèvi ak fòm rapò a sou paj sa a. Rapò yo ta dwe dekri pwoblèm lan, pa sitiyasyon sante pèsonèl ou.\n\nImèl kontak jeneral: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Avètisman",
      type: "default",
      content:
        "Sit entènèt sa a se pou navigasyon ak edikasyon sèlman. Li pa konsèy medikal epi li pa ranplase dyagnostik pwofesyonèl, tretman, oswa èd ijans. Si yon sitiyasyon ka menase lavi, rele 911.",
    },
  ],
};

export const pages: Record<string, PageContent> = {
  home: homePage,
  "start-here": startHerePage,
  "need-help-now": needHelpNowPage,
  "get-a-family-doctor": getPrimaryCarePage,
  "costs-and-coverage": costsAndCoveragePage,
  "your-visit": yourVisitPage,
  "after-visit": afterVisitPage,
  "medicines-and-pharmacies": medicinesPage,
  "mental-health": mentalHealthPage,
  "screening-prevention": screeningPage,
  "community-allied-health": communityCarePage,
  faq: faqPage,
  about: aboutPage,
};
