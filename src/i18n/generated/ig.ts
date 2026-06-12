import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Na-ebudata ibe...",
    directoryEnglishNote:
      "A na-egosi ndepụta ọrụ n'asụsụ Bekee ka aha ọrụ, adreesị, nọmba ekwentị, na awa kwekọọ kpọmkwem n'ebe ọfịshal e si nweta ha.",
  },
  header: {
    emergencyBanner: "Ihe mberede nwere ike igbu mmadụ? Kpọọ 911 ugbu a.",
    tagline:
      "Kingston, Ontario — nduzi nlekọta ahụike nke na-ebute ndị bịara ọhụrụ ụzọ",
    languageButton: "Asụsụ",
    languageButtonAria: "Enyemaka asụsụ na onye ntụgharị okwu",
    openNavigation: "Meghee nduzi",
    primaryNavLabel: "Nke bụ isi",
  },
  languageModal: {
    title: "Enyemaka asụsụ na onye ntụgharị okwu",
    description:
      "Gụọ ntuziaka a n'asụsụ kacha amasị gị. Maka mkparịta ụka gbasara ahụike, rịọ ka e nye gị onye ntụgharị okwu mgbe ị chọrọ ya.",
    chooseLanguageTitle: "Họrọ asụsụ gị",
    chooseLanguageNote:
      "A tụgharịrị ntuziaka a kpamkpam n'asụsụ 33 n'ime saịtị a, ọtụtụ iri asụsụ ndị ọzọ na-emeghekwa site na ntụgharị akpaaka. Ndepụta ọrụ na-anọgide n'asụsụ Bekee ka ha kwekọọ kpọmkwem n'ebe ọfịshal. Bekee bụ ụdị ntụaka ma ọ bụrụ na ihe ọ bụla adịghị edo anya.",
    safetyTitle: "Okwu nchekwa",
    safetyBody:
      "Ntụgharị weebụsaịtị bụ maka ịgụ na ịghọta ihe. Maka oge nleta a kara aka, ntuziaka ule, ọgwụ, ma ọ bụ nkwenye, jụọ ma klinik ma ọ bụ ụlọ ọgwụ ahụ nwere ike inye onye ntụgharị okwu ọkachamara. Health811 (kpọọ 811) na-enye enyemaka ekwentị n'ọtụtụ asụsụ.",
    phrasesTitle: "Ahịrịokwu dị mkpirikpi ị ga-egosi ndị ọrụ",
    phrasesNote:
      "Tụọ aka n'asụsụ gị ma gosi ndị ọrụ nnabata ma ọ bụ ndị ọrụ ahụike ahịrị ndị a.",
    callHealth811: "Kpọọ Health811",
    accessibilityCta: "Nnweta na ntụkwasị obi",
    close: "Mechie igbe enyemaka asụsụ",
  },
  moreLanguages: {
    title: "Asụsụ ndị ọzọ (ntụgharị akpaaka)",
    description:
      "Asụsụ ọ bụla na-arụ ọrụ site n'otu menu a — gụnyere Somali, Yoruba, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukrainian, Farsi, Urdu, Punjabi, Tamil, na Vietnamese.",
    selectLabel: "Họrọ asụsụ ọ bụla",
    selectPlaceholder: "Asụsụ niile — họrọ otu…",
    openButton: "Meghee n'asụsụ a",
    disclaimer:
      "Asụsụ ndị e dere akpaaka na-emeghe ibe a site na Google Translate ma na-anọgide n'asụsụ gị ka ị na-aga n'ihu na nchọgharị. Ndị ọrụ a anaghị enyocha ntụgharị akpaaka — ọ dị mma maka ịgụ ihe, mana jiri onye ọrụ ahụike ma ọ bụ onye ntụgharị okwu kwado nkọwa ahụike.",
  },
  funding: {
    acknowledgment:
      "Ọrụ a na-enweta nkwado site n'onyinye ego sitere n'aka Ontario Medical Students Association (OMSA).",
    logoAlt: "Akara Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Chọọ asụsụ…",
    onSiteGroup: "A tụgharịrị n'ime saịtị a",
    proxyGroup: "Asụsụ ndị ọzọ site na Google Translate",
    reviewedBadge: "E nyochara",
    automaticBadge: "Akpaaka",
    interpreterTab: "Enyemaka onye ntụgharị okwu na ahịrịokwu",
    noMatches: "Ọ dịghị asụsụ dabara n'ọchụchọ gị.",
    note: "Ntụgharị ndị a bụ ndị igwe nyere aka, Bekee bụkwa ụdị ntụaka ma ọ bụrụ na ihe ọ bụla adịghị edo anya. Asụsụ ndị dị n'òtù Google Translate na-emeghe ibe a na saịtị Google dị n'èzí. Ndepụta ọrụ na-anọgide n'asụsụ Bekee ka ha kwekọọ kpọmkwem n'ebe ọfịshal.",
  },
  navigation: [
    {
      title: "Malite ebe a",
      items: [
        {
          label: "Chọrọ Enyemaka Ugbu a",
          to: "/need-help-now",
          description: "Mkpebi ngwa ngwa na nkwado oge crisis",
        },
        {
          label: "Malite Ebe a",
          to: "/start-here",
          description: "Onye ọhụrụ na nlekọta ahụike Ontario",
        },
        {
          label: "Chọta Nlekọta Bụ Isi",
          to: "/get-a-family-doctor",
          description: "Ndị dọkịta, NP, CHC, na nhọrọ ụmụ akwụkwọ",
        },
      ],
    },
    {
      title: "Ghọta nlekọta",
      items: [
        {
          label: "Ụgwọ na Mkpuchi",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, atụmatụ onwe, na mkpuchi ọgwụ",
        },
        {
          label: "Nleta Gị",
          to: "/your-visit",
          description: "Ihe ị ga-ebu na otú ị ga-esi jụọ ajụjụ",
        },
        {
          label: "Mgbe Nleta Gasịrị",
          to: "/after-visit",
          description: "Ule, requisition, referral, na nlekọta na-esote",
        },
        {
          label: "Ọgwụ na Fámasị",
          to: "/medicines-and-pharmacies",
          description: "Akwụkwọ ọgwụ, refill, na enyemaka onye ọkachamara ọgwụ",
        },
      ],
    },
    {
      title: "Enyemaka obodo",
      items: [
        {
          label: "Ọrụ Obodo",
          to: "/local-services",
          description: "Chọọ ọrụ ndị dị na Kingston",
        },
        {
          label: "Ahụike Uche",
          to: "/mental-health",
          description: "Crisis, ngwa ngwa, oge niile, na nkwado ndị ntorobịa",
        },
        {
          label: "Screening na Mgbochi Ọrịa",
          to: "/screening-prevention",
          description: "Ọgwụ mgbochi na nlekọta mgbochi ọrịa",
        },
        {
          label: "Nlekọta Allied na nke Obodo",
          to: "/community-allied-health",
          description: "Nlekọta n'ụlọ, rehab, ezé, na nkwado obodo",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Ọnọdụ ndị bịara ọhụrụ a na-ahụkarị na nkọwa okwu",
        },
        {
          label: "Banyere na Ntụkwasị Obi",
          to: "/about",
          description: "Ebe e si nweta ihe, nzuzo, nnweta, na nzaghachi",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Ị chọrọ enyemaka ugbu a?",
    items: {
      "call-911": {
        label: "Kpọọ 911",
        description: "Ihe mberede nwere ike igbu mmadụ",
      },
      "call-811": {
        label: "Kpọọ Health811",
        description: "Ndụmọdụ nọọsụ, 24/7",
      },
      "call-988": {
        label: "Kpọọ ma ọ bụ zie ozi na 9-8-8",
        description:
          "Suicide Crisis Helpline (laịn enyemaka maka echiche igbu onwe), 24/7",
      },
      "call-crisis": {
        label: "Kpọọ Laịn Crisis",
        description: "Laịn crisis nke AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Ntuziaka nlekọta ngwa ngwa",
        description: "Nhọrọ mgbe oge ọrụ gasịrị na nke otu ụbọchị ahụ",
      },
      "mental-health": {
        label: "Nkwado ahụike uche",
        description: "Ụzọ crisis, ngwa ngwa, na nke oge niile",
      },
    },
  },
  home: {
    seoTitle: "Ntuziaka nlekọta ahụike Kingston",
    seoDescription:
      "Nduzi nlekọta ahụike nke na-ebute ndị bịara ọhụrụ ụzọ maka Kingston, Ontario: enyemaka ngwa ngwa, ọrụ obodo, isi ihe gbasara mkpuchi, nduzi onye ntụgharị okwu, na nzọụkwụ na-esote mgbe nleta gasịrị.",
    kicker: "Kingston, Ontario",
    heroTitle: "Chọta nlekọta kwesịrị ekwesị na Kingston n'enweghị ịkọ nkọ",
    heroLead:
      "Malite site n'enyemaka ngwa ngwa, isi ihe maka ndị bịara ọhụrụ, mkpuchi, ma ọ bụ ndepụta ọrụ obodo. Ntuziaka a dị n'asụsụ doro anya, dabara n'ekwentị, ma na-ekwu eziokwu banyere ihe ka kwesịrị nyochagharị.",
    cardNeedHelp: {
      title: "Chọrọ enyemaka ugbu a",
      body: "Ihe mberede, nlekọta ngwa ngwa, crisis, na nduzi mgbe oge ọrụ gasịrị.",
    },
    cardStartHere: {
      title: "Malite ebe a",
      body: "Otú nlekọta ahụike Ontario si arụ ọrụ na ihe ị ga-ebu ụzọ mee.",
    },
    cardSearch: {
      title: "Chọọ ọrụ",
      body: "Chọọ nyocha ọbara, refill ọgwụ, nlekọta walk-in, ahụike uche, na ndị ọzọ.",
    },
    cardLanguage: {
      title: "Enyemaka asụsụ",
      body: "Gụọ ntuziaka a n'asụsụ gị, tinyere nduzi onye ntụgharị okwu na ahịrịokwu dị mkpirikpi.",
    },
    quickDecisionsKicker: "Mkpebi ngwa ngwa",
    quickDecisionsTitle: "Jiri ajụjụ ndị a malite",
    quickDecisionLines: [
      "Ọ bụrụ na ọ nwere ike igbu mmadụ, kpọọ 911 ugbu a.",
      "Ọ bụrụ na ị maghị ebe ị ga-aga n'abalị a, kpọọ Health811.",
      "Maka echiche igbu onwe ma ọ bụ nnukwu nhụjuanya, kpọọ ma ọ bụ zie ozi na 9-8-8 oge ọ bụla.",
      "Ọ bụrụ na ị nweghị dọkịta ezinụlọ, debe nhọrọ walk-in, ụlọ ọrụ ahụike obodo, na nke ụmụ akwụkwọ n'atụmatụ gị.",
      "Ọ bụrụ na ị chọrọ nyocha ọbara, X-ray, refill, ma ọ bụ mmelite referral, jiri ndepụta obodo chọta nzọụkwụ na-esote.",
    ],
    trustNoteTitle: "Okwu ntụkwasị obi",
    trustNoteBody:
      "Nke a bụ ntuziaka na-adịghị agbanwe ozugbo. Anyị anaghị egosi oge nchere dị ugbu a. Nkọwa ndị na-agbanwe ngwa ngwa dị ka awa na usoro nnabata nwere ike ịgbanwe ọsọ ọsọ, ya mere ndepụta ọ bụla nwere njikọ ebe e si nweta ya na ọnọdụ nyocha ya.",
    newcomerKicker: "Mmalite ngwa ngwa maka ndị bịara ọhụrụ",
    newcomerTitle: "Nzọụkwụ mbụ ma ọ bụrụ na ị bụ ọhụrụ na Kingston",
    newcomerSteps: [
      {
        title: "1. Mụta mkpuchi gị",
        body: "Ghọta OHIP, IFHP, atụmatụ onwe, na ihe a na-adịghị ekpuchikarị. Enweghị oge nchere maka OHIP - tinye akwụkwọ ozugbo ị rutere.",
      },
      {
        title: "2. Mee atụmatụ ụzọ nlekọta bụ isi gị",
        body: "Mụta ihe dị iche n'etiti ndị dọkịta ezinụlọ, nurse practitioner, klinik ụmụ akwụkwọ, ụlọ ọrụ ahụike obodo, na nlekọta walk-in.",
      },
      {
        title: "3. Mara ihe na-eme na-esote",
        body: "Mụta ihe requisition, referral, nsonaazụ ule, na oku nlekọta na-esote na-apụtakarị.",
      },
    ],
    languageSupportKicker: "Nkwado asụsụ",
    languageSupportTitle:
      "Gosi ahịrịokwu ndị a ma ọ bụrụ na ị chọrọ enyemaka",
    openLanguageHelp: "Meghee enyemaka asụsụ",
    commonTasksKicker: "Ọrụ ndị a na-emekarị",
    commonTasksTitle: "Chọọ site n'ọrụ ị chọrọ ịrụcha",
    openDirectory: "Meghee ndepụta zuru ezu",
    tasks: [
      {
        title: "Nyocha ọbara ma ọ bụ X-ray",
        body: "Chọta ụlọ nyocha (lab) na ọrụ imaging (ịse foto ime ahụ).",
      },
      {
        title: "Refill akwụkwọ ọgwụ",
        body: "Chọta fámasị na enyemaka refill.",
      },
      {
        title: "Nkwado ahụike uche",
        body: "Crisis, ngwa ngwa, oge niile, na nkwado ndị ntorobịa.",
      },
      {
        title: "Kaadị ahụike ma ọ bụ nkwado ndị bịara ọhụrụ",
        body: "Chọta ServiceOntario, ISKA, na ndụmọdụ ekwentị.",
      },
    ],
    featuredKicker: "Ọrụ ndị a họpụtara",
    featuredTitle: "Ebe ndị dị mma ibido",
    trustKicker: "Ntụkwasị obi na ebe e si nweta ihe",
    trustTitle:
      "Eziokwu banyere ihe e kwadoro na ihe ka kwesịrị nyochagharị",
    trustBody:
      "E nyochara ụfọdụ ndepụta site n'ebe ọfịshal nke obodo. Ndị ọzọ ka chọrọ nyochagharị obodo n'ihi na awa, nnabata, ma ọ bụ iwu nnweta na-agbanwe ugboro ugboro. Anyị na-egosi ọnọdụ ahụ n'ezoghị ezo ma na-agba ndị ji ya eme ihe ume ka ha kọọ nkọwa ndị mere ochie.",
    trustChecklistTitle: "Gụọ tupu ị dabere na ndepụta",
    trustChecklist: [
      "Chọọ njikọ ebe ọfịshal e si nweta ya.",
      "Lelee ụbọchị nyocha ikpeazụ.",
      "Kwado awa otu ụbọchị ahụ na nnweta walk-in tupu ị gaa.",
      "Jiri fọm nkọ kọọ ya ma ọ bụrụ na ị hụrụ mgbanwe.",
    ],
    trustLink: "Lee ebe e si nweta ihe na okwu ntụkwasị obi",
  },
  contentPage: {
    breadcrumbHome: "Ụlọ",
    badge: "Ntuziaka n'asụsụ doro anya",
    reviewStatusTitle: "Ọnọdụ nyocha",
    reviewLabels: {
      reviewed:
        "E nyochara ya site n'ebe e si nweta ihe nke ọrụ a ji ugbu a.",
      "general-guidance":
        "E nyochara ya dị ka nduzi izugbe. Nkọwa obodo ka nwere ike ịgbanwe ọsọ ọsọ.",
      "needs-local-recheck":
        "Nduzi bara uru, mana nkọwa obodo ka chọrọ nyocha ọzọ.",
    },
    lastReviewPrefix: "Nyocha ibe ikpeazụ:",
    noReviewDate:
      "Ibe a enweghị ụbọchị nyocha e dekọrọ n'ọkwa ibe.",
    translationAside:
      "Ị nwere ike ịgụ ibe a n'ọtụtụ asụsụ site na menu Asụsụ. Maka oge nleta a kara aka, ọgwụ, nkwenye, na ntuziaka ule, jụọ ma nkwado onye ntụgharị okwu ọ dị.",
    share: "Kesaa",
    print: "Bipụta",
    sourcesTitle: "Ebe e si nweta ihe maka ibe a",
    sourcesNote:
      "Ndị a bụ isi ebe ọfịshal ma ọ bụ ebe mbụ e jiri maka nyocha ibe a ugbu a. Usoro obodo ka nwere ike ịgbanwe n'etiti oge nyocha.",
    onThisPage: "N'ibe a",
    sourcesAnchorLabel: "Ebe e si nweta ihe",
    translationReminderTitle: "Ncheta banyere ntụgharị",
    translationReminderBody:
      "Ọ bụrụ na ihe ọ bụla metụtara ọgwụgwọ gị ma ọ bụ nchekwa gị, jiri onye ọrụ ahụike ma ọ bụ onye ntụgharị okwu kwado ya kama ịdabere naanị na ntụgharị.",
    linkCopiedTitle: "E detuola njikọ",
    linkCopiedBody: "Ị nwere ike itinye njikọ ibe a ebe ọ bụla ugbu a.",
    shareCancelled: "A kagburu nkesa",
  },
  directory: {
    seoTitle: "Ọrụ obodo",
    seoDescription:
      "Chọọ ọrụ nlekọta ahụike, ahụike uche, fámasị, mkpuchi, na nduzi dị mma maka ndị bịara ọhụrụ na Kingston, Ontario.",
    kicker: "Ndepụta Kingston",
    title: "Chọọ ọrụ ahụike obodo",
    lead: "Chọọ site n'ọrụ, mgbaàmà, akwụkwọ, ma ọ bụ ihe ị chọrọ ime. Ọmụmaatụ: walk in, mgbe oge ọrụ gasịrị, nyocha ọbara, refill, kaadị ahụike, klinik ụmụ akwụkwọ, ma ọ bụ nkwado ndị bịara ọhụrụ.",
    searchPlaceholder:
      "Chọọ site na mkpa, aha ọrụ, adreesị, ma ọ bụ isiokwu",
    sortAriaLabel: "Hazie nsonaazụ",
    sortRelevance: "Nhazi: Nke kacha dabara",
    sortAlphabetical: "Nhazi: A ruo Z",
    sortRecentlyReviewed: "Nhazi: Nke e nyochara nso nso a",
    sortArea: "Nhazi: Mpaghara",
    gridViewLabel: "Nlele grid",
    listViewLabel: "Nlele ndepụta",
    allServices: "Ọrụ niile",
    audienceTitle: "Ndị ọ dịịrị",
    accessTitle: "Nnweta",
    careLevelTitle: "Ọkwa nlekọta",
    coverageAreaTitle: "Mkpuchi na mpaghara",
    areaLabel: "Mpaghara",
    showingServices: "Na-egosi ọrụ {count}",
    resetFilters: "Weghachi nzacha",
    trustPanelTitle: "Ọnọdụ ntụkwasị obi na nyocha",
    trustPanelBody:
      "Ndepụta a anaghị agbanwe ozugbo. Anyị na-egosi ụbọchị nyocha ikpeazụ e dekọrọ, njikọ ebe ọfịshal mgbe ọ dị, na ndepụta ndị ka chọrọ nyochagharị obodo. Kwado awa na nnweta otu ụbọchị ahụ tupu ị gaa.",
    verifiedLabel: "E kwadoro ya",
    needsRecheckLabel: "Chọrọ nyochagharị",
    noResultsTitle: "Ọ dịghị ọrụ dabara na nzacha ndị ahụ",
    noResultsBody:
      "Nwaa ọchụchọ sara mbara karịa dị ka nyocha ọbara, refill, ahụike uche, kaadị ahụike, ma ọ bụ walk in. Ị nwekwara ike ihichapụ nzacha niile ma malite ọzọ.",
    notSureTitle: "Ị maghị ebe ị ga-amalite?",
    notSureBody:
      "Ọ bụrụ na ị maghị ma ị chọrọ nlekọta mberede, nlekọta ngwa ngwa, klinik walk-in, ma ọ bụ nkwado fámasị, malite n'ibe nduzi ngwa ngwa ma ọ bụ kpọọ Health811 maka ndụmọdụ nọọsụ.",
    needHelpNowCta: "Chọrọ Enyemaka Ugbu a",
    callHealth811: "Kpọọ Health811",
  },
  filters: {
    audience: {
      newcomers: "Ndị bịara ọhụrụ",
      students: "Naanị ụmụ akwụkwọ ma ọ bụ kampos",
      "children-youth": "Nwatakịrị ma ọ bụ onye ntorobịa",
      adults: "Ndị okenye",
      families: "Ezinụlọ",
      "unattached-patients": "Enweghị dọkịta ezinụlọ",
    },
    access: {
      "walk-in": "Walk-in (abanye n'edeghị oge)",
      appointment: "Oge a kara aka",
      referral: "Chọrọ referral",
      virtual: "Onlaịn (virtual)",
    },
    level: {
      emergency: "Mberede",
      urgent: "Ngwa ngwa",
      primary: "Nke bụ isi",
      community: "Obodo",
    },
    payment: {
      public: "Gọọmenti na-akwado ya",
      community: "Obodo / nnweta dị mfe",
      mixed: "Mkpuchi agwakọtara",
      "student-plan": "Atụmatụ ụmụ akwụkwọ",
      private: "Ịkwụ ụgwọ onwe",
    },
    location: {
      downtown: "Etiti obodo",
      "north-end": "North End (akụkụ ugwu)",
      "west-end": "West End (akụkụ ọdịda anyanwụ)",
      campus: "Kampos",
      online: "Onlaịn",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Nlekọta mberede na nke ngwa ngwa",
      shortLabel: "Mberede na ngwa ngwa",
    },
    "primary-care": {
      label: "Nlekọta bụ isi",
      shortLabel: "Nlekọta bụ isi",
    },
    "community-health": {
      label: "Ụlọ ọrụ ahụike obodo",
      shortLabel: "Ahụike obodo",
    },
    "mental-health": {
      label: "Ahụike uche na nkwado crisis",
      shortLabel: "Ahụike uche",
    },
    "public-health": { label: "Ahụike ọha", shortLabel: "Ahụike ọha" },
    "labs-imaging": {
      label: "Ụlọ nyocha na imaging",
      shortLabel: "Lab na imaging",
    },
    pharmacies: {
      label: "Ọgwụ na fámasị",
      shortLabel: "Fámasị",
    },
    "allied-community": {
      label: "Nlekọta allied na nke obodo",
      shortLabel: "Nlekọta allied",
    },
    "navigation-support": {
      label: "Nkwado nduzi na mkpuchi",
      shortLabel: "Nduzi",
    },
  },
  serviceCard: {
    whenToUse: "Mgbe ị ga-eji ya:",
    accessLabel: "Nnweta",
    eligibilityLabel: "Ndị ruru eru",
    eligibilityFallback:
      "Ọ ghere ọha mmadụ oghe belụsọ ma ebe ọfịshal kwuru ihe ọzọ.",
    hoursLabel: "Awa",
    phoneLabel: "Ekwentị",
    trustDetails: "Nkọwa ntụkwasị obi na ebe e si nweta ya",
    lastReview: "Nyocha ikpeazụ:",
    officialSource: "Ebe ọfịshal",
    call: "Kpọọ",
    officialWebsite: "Weebụsaịtị ọfịshal",
    directions: "Ụzọ ịga ebe ahụ",
    viewDetails: "Lee nkọwa",
  },
  serviceDetail: {
    backToServices: "Laghachi n'ọrụ obodo",
    whenToUseTitle: "Mgbe ị ga-eji ọrụ a",
    eligibilityTitle: "Ndị ruru eru na nnweta",
    eligibilityFallback:
      "Lelee ebe ọfịshal ma ọ bụrụ na ị maghị ma ọrụ a ọ ghere gị oghe.",
    whatToBringTitle: "Ihe ị ga-ebu",
    contactTitle: "Kọntaktị na ihe ị ga-eme",
    callNow: "Kpọọ ugbu a",
    officialWebsite: "Weebụsaịtị ọfịshal",
    directions: "Ụzọ ịga ebe ahụ",
    trustTitle: "Ntụkwasị obi na ebe e si nweta ya",
    lastReview: "Nyocha ikpeazụ:",
    viewOfficialSource: "Lee ebe ọfịshal",
  },
  verification: {
    verified: {
      label: "E kwadoro ya site n'ebe ọfịshal",
      shortLabel: "E kwadoro",
      description:
        "E nyochara isi nkọwa site n'ebe ọfịshal n'oge nyocha kacha ọhụrụ.",
    },
    "partially-verified": {
      label: "E jikọrọ ebe ọfịshal",
      shortLabel: "Njikọ ọfịshal",
      description:
        "E jikọrọ ebe ọfịshal, mana otu nkọwa ma ọ bụ karịa nwere ike ịgbanwe ugboro ugboro, ya mere kwado ya tupu ị gaa.",
    },
    "community-reported": {
      label: "Ndị obodo kọrọ ya",
      shortLabel: "Akụkọ obodo",
      description:
        "Ozi a sitere n'akụkọ ndị obodo, ọ ka chọkwara nkwado kwụụrụ onwe ya.",
    },
    "needs-recheck": {
      label: "Chọrọ nyochagharị",
      shortLabel: "Chọrọ nyochagharị",
      description:
        "Ndepụta a ka na-apụta n'ihi na ọ ka nwere ike inye aka, mana isi nkọwa nwere ike abụrụla ndị ochie. Kwado ya tupu ị dabere na ya.",
    },
  },
  feedback: {
    badge: "Kọọ ozi mere ochie",
    title: "Nyere anyị aka idebe ntuziaka a n'izi ezi",
    body: "Nke a na-ezipu email e dejupụtara na mbụ nke nwere nkọwa ibe ma ọ bụ ọrụ. Etinyela ozi ahụike nzuzo.",
    issueTypeLabel: "Ụdị nsogbu",
    issueTypes: {
      "outdated hours": "Awa mere ochie",
      "wrong phone or website": "Ekwentị ma ọ bụ weebụsaịtị na-ezighị ezi",
      "eligibility or access issue": "Nsogbu ntozu ma ọ bụ nnweta",
      "translation or accessibility problem":
        "Nsogbu ntụgharị ma ọ bụ nnweta",
      "missing service or content": "Ọrụ ma ọ bụ ọdịnaya na-efu efu",
      other: "Ihe ọzọ",
    },
    detailsLabel: "Gịnị ka anyị kwesịrị ilele?",
    detailsPlaceholder:
      "Ọmụmaatụ: nọmba ekwentị agbanweela, klinik na-anabata naanị oge a kara aka ugbu a, ma ọ bụ njikọ adịghị arụ ọrụ.",
    contactLabel: "Kọntaktị (ọ bụghị iwu)",
    contactPlaceholder: "Adreesị email ma ọ bụrụ na ị chọrọ nzaghachi",
    openEmail: "Meghee email akụkọ",
    copyText: "Detuo ederede akụkọ",
    thanks:
      "Daalụ. Akụkọ na-enyere anyị aka ibute ụzọ ibe ndị mere ochie, njikọ ndị na-adịghị arụ ọrụ, na ndepụta ndị chọrọ nyochagharị obodo.",
    toastEmailTitle: "E meghere email e dere edere",
    toastEmailBody: "Akụkọ gị gụnyere nkọwa ibe ma ọ bụ ọrụ.",
    toastCopyTitle: "E detuola nchịkọta nsogbu",
    toastCopyBody:
      "Ị nwere ike itinye ya n'ime email nke gị ma ọ bụrụ na ọ dị mkpa.",
  },
  footer: {
    description:
      "Ntuziaka nduzi nlekọta ahụike n'asụsụ doro anya maka Kingston, Ontario. Saịtị a anaghị enye ndụmọdụ ahụike ma ọ bụ oge nchere dị ugbu a. Jiri ebe ọfịshal kwado nkọwa ndị na-agbanwe ngwa ngwa mgbe niile tupu ị gaa.",
    trustModelTitle: "Usoro ntụkwasị obi",
    trustModelBody:
      "Anyị na-egosi njikọ ebe ọfịshal, ụbọchị nyocha, na ndepụta ndị ka chọrọ nyochagharị. Ọ bụrụ na ihe ọ bụla yiri ka ọ na-ezighị ezi, kọọ ya site n'ibe ma ọ bụ ọrụ ahụ.",
    beforeYouGo: {
      title: "Tupu ị gaa",
      body: "Lelee awa ọfịshal, ma ị chọrọ oge a kara aka ma ọ bụ referral, na akwụkwọ ndị ị ga-ebu.",
    },
    languageHelp: {
      title: "Enyemaka asụsụ",
      body: "Gụọ ntuziaka a n'asụsụ gị site na menu Asụsụ. Rịọ onye ntụgharị okwu maka mkparịta ụka ahụike mgbe izi ezi dị mkpa.",
    },
    privacy: {
      title: "Nzuzo",
      body: "Saịtị a na-eji ndekọ mmezi e debere na nchọgharị nke gị, nke na-akwanyere nzuzo ùgwù. Ọ naghị eziga nyocha onwe gị na sava dị anya.",
    },
    copyrightSuffix: "Akụrụngwa ozi obodo maka Kingston, Ontario.",
    disclaimer: "Disclaimer (ịdọ aka ná ntị)",
    privacyLink: "Nzuzo",
    sourcesLink: "Ebe e si nweta ihe",
    reportLink: "Kọọ ozi mere ochie",
  },
  notFound: {
    seoTitle: "Achọtaghị ibe ahụ",
    seoDescription:
      "Enweghị ike ịchọta ibe ị rịọrọ. Malite site n'enyemaka ngwa ngwa, isi ihe ndị bịara ọhụrụ, ọrụ obodo, ma ọ bụ FAQ.",
    badge: "404",
    title: "Anyị enweghị ike ịchọta ibe ahụ",
    body: "Ọ bụrụ na ị na-achọ inweta nlekọta ngwa ngwa, malite na nduzi ngwa ngwa ma ọ bụ chọọ ndepụta ọrụ Kingston.",
    startHere: "Malite Ebe a",
    needHelpNow: "Chọrọ Enyemaka Ugbu a",
    localServices: "Ọrụ Obodo",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Ntuziaka Nduzi Nlekọta Ahụike Kingston",
  description:
    "Ntuziaka n'asụsụ doro anya nke na-ebute ndị bịara ọhụrụ ụzọ maka ịchọta nlekọta ahụike na Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Malite Ebe a",
  description:
    "Ị bụ ọhụrụ na Kingston ma ọ bụ na nlekọta ahụike Ontario? Malite ebe a ka ị mụta otú usoro ahụ si arụ ọrụ na ihe ị ga-ebu ụzọ mee.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nlekọta ahụike na Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Nchịkọta otú nlekọta e kpuchiri si arụ ọrụ na Ontario.",
    },
    {
      title: "Ontario: Tinye akwụkwọ maka OHIP ma nweta kaadị ahụike",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Ozi ọfịshal banyere itinye akwụkwọ OHIP na ntozu ya.",
    },
    {
      title: "Ontario: Chọta dọkịta ezinụlọ ma ọ bụ nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Nduzi Health Care Connect na nnweta nlekọta bụ isi.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Ozi mkpuchi gọọmenti etiti maka ndị gbara ọsọ ndụ ruru eru na ndị na-arịọ ọsọ ndụ.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Otú nlekọta ahụike si arụ ọrụ na Ontario",
      type: "default",
      content: `A na-ahazi nlekọta ahụike Ontario gburugburu **nlekọta bụ isi (primary care)**. Nlekọta bụ isi pụtara ebe ị na-ebukarị ụzọ amalite maka mkpa ahụike oge niile, ọrịa na-adịgide adịgide, akwụkwọ ọgwụ, referral, na mgbochi ọrịa. Onye na-enye gị nlekọta bụ isi nwere ike ịbụ dọkịta ezinụlọ, nurse practitioner (nọọsụ nwere ọzụzụ dị elu), otu ụlọ ọrụ ahụike obodo, ma ọ bụ klinik ahụike ụmụ akwụkwọ ma ọ bụrụ na i ruru eru.

**Referral** bụ mgbe otu onye ọrụ ahụike rịọrọ ọrụ ọzọ ma ọ bụ ọkachamara ka ọ hụ gị. **Requisition** bụ fọm na-agwa ụlọ nyocha (lab) ma ọ bụ klinik imaging ụdị ule ị chọrọ.

Ị kwesịghị ịghọta akụkụ niile nke usoro ahụ n'ụbọchị mbụ. Nzọụkwụ ndị kacha mkpa bụ: mụta mkpuchi gị, mara ebe ị ga-aga maka nsogbu ngwa ngwa, ma mee atụmatụ maka nlekọta oge niile ma ọ bụrụ na ị nwebeghị onye na-elekọta gị.`,
    },
    {
      id: "first-decisions",
      title: "Mkpebi mbụ",
      type: "grid",
      gridItems: [
        {
          title: "Enwere m ike ịchọ enyemaka ngwa ngwa",
          content:
            "Malite na nduzi mberede na nlekọta ngwa ngwa ma ọ bụrụ na ị nwere nsogbu mberede taa ma ọ bụ n'abalị a.",
          icon: "alert",
          link: { text: "Chọrọ Enyemaka Ugbu a", url: "/need-help-now" },
        },
        {
          title: "Enweghị m dọkịta ezinụlọ",
          content:
            "Mụta otú ndị dọkịta ezinụlọ, nurse practitioner, ụlọ ọrụ ahụike obodo, klinik walk-in, na klinik ụmụ akwụkwọ si arụkọ ọrụ.",
          icon: "stethoscope",
          link: { text: "Chọta Nlekọta Bụ Isi", url: "/get-a-family-doctor" },
        },
        {
          title: "Achọrọ m ịghọta ihe e kpuchiri",
          content:
            "Gụọ banyere OHIP, IFHP, inshọransị onwe, atụmatụ ụmụ akwụkwọ, mkpuchi ọgwụ, na ụgwọ ndị a na-akwụkarị n'aka.",
          icon: "shield",
          link: { text: "Ụgwọ na Mkpuchi", url: "/costs-and-coverage" },
        },
        {
          title: "Achọrọ m enyemaka asụsụ",
          content:
            "Gụọ ntuziaka a n'asụsụ 33 site na menu Asụsụ, jụọkwa banyere nkwado onye ntụgharị okwu maka mkparịta ụka ahụike na nkwenye.",
          icon: "info",
          link: { text: "Nnweta na asụsụ", url: "/about#accessibility" },
        },
        {
          title: "Achọrọ m nyocha ọbara, imaging, ma ọ bụ refill",
          content:
            "Jiri ndepụta obodo chọta nzọụkwụ bara uru na-esote mgbe nleta gasịrị.",
          icon: "file",
          link: { text: "Chọọ Ọrụ Obodo", url: "/local-services" },
        },
        {
          title: "Amaghị m ebe m ga-amalite",
          content:
            "Kpọọ Health811 maka ndụmọdụ nọọsụ ma ọ bụrụ na ị maghị otú ọnọdụ gị siri dị ngwa.",
          icon: "clock",
          link: { text: "Health811 na nduzi ngwa ngwa", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Nzọụkwụ mbụ dị mma n'izu mbụ gị",
      type: "steps",
      items: [
        "Mụta mkpuchi gị: Gụọ ihe OHIP, IFHP, inshọransị onwe, na atụmatụ ụmụ akwụkwọ na-ekpuchikarị. Ọ bụrụ na i nwere ike iru eru maka OHIP, tinye akwụkwọ ozugbo i nwere ike.",
        "Họrọ atụmatụ ngwa ngwa gị: Mara mgbe ị ga-akpọ 911, mgbe ị ga-amalite na Health811, na ebe ị ga-achọta nlekọta ngwa ngwa ma ọ bụ nke otu ụbọchị ahụ na Kingston.",
        "Mee atụmatụ maka nlekọta oge niile: Ọ bụrụ na ị nweghị onye na-elekọta gị mgbe niile, mụta nhọrọ gị maka ndị dọkịta ezinụlọ, nurse practitioner, ụlọ ọrụ ahụike obodo, klinik ụmụ akwụkwọ, klinik walk-in, na nlekọta onlaịn.",
        "Debe ozi ahụike gị ọnụ: Chekwaa kaadị ahụike gị ma ọ bụ akwụkwọ IFHP gị, ndepụta ọgwụ, ndekọ ọgwụ mgbochi, na nnomi nke requisition ma ọ bụ referral ọ bụla.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Ọ bụrụ na ị nwebeghị OHIP",
      type: "callout",
      content:
        "Echela ruo mgbe ị na-arịa ọrịa tupu ị mụta ụzọ mkpuchi gị. Ọ bụrụ na i ruru eru maka OHIP, tinye akwụkwọ n'oge. Ọ bụrụ na e kpuchiri gị site na IFHP ma ọ bụ atụmatụ ụlọ akwụkwọ ma ọ bụ nke onwe, debe ozi ahụ n'aka gị. Ọ bụrụ na ị nweghị inshọransị, jụọ banyere ụgwọ tupu nleta ma chọọ ọrụ obodo ma ọ bụ ndị dị mfe ịnweta ebe ọ dabara.",
      link: { text: "Gụọ banyere mkpuchi", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Debe ihe ndị a njikere",
      type: "checklist",
      items: [
        "Kaadị ahụike gị, akwụkwọ IFHP, ma ọ bụ ozi inshọransị gị",
        "Ndepụta ọgwụ, ọ bụrụgodị na ị na-aṅụ naanị ọgwụ ole na ole",
        "Aha na nọmba ekwentị nke klinik ma ọ bụ onye lekọtara gị ikpeazụ, ma ọ bụrụ na i nwere",
        "Requisition, referral, akwụkwọ mwepụ n'ụlọ ọgwụ, ma ọ bụ ntuziaka ule ọ bụla e nyere gị nso nso a",
        "Ajụjụ ị chọrọ ịjụ n'asụsụ doro anya",
        "Mkpa onye ntụgharị okwu e dere ede ka i cheta ịjụ",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Ị Chọrọ Enyemaka Ugbu a?",
  description:
    "Jiri ibe a mgbe ị nwere nsogbu ahụike taa ma ọ bụ n'abalị a ma ị maghị ebe ị ga-amalite.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nweta ndụmọdụ ahụike site na Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Ọrụ ndụmọdụ nọọsụ ọfịshal nke 24/7.",
    },
    {
      title: "9-8-8: Suicide Crisis Helpline",
      url: "https://988.ca/",
      note: "Laịn enyemaka ọfịshal nke mba maka echiche igbu onwe. Kpọọ ma ọ bụ zie ozi na 9-8-8, n'efu, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Netwọk ụlọ ọgwụ ọfịshal maka ozi mberede, nlekọta ngwa ngwa, na imaging.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Òtù ọfịshal nke obodo maka ahụike uche na nkwado crisis.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Mberede ka ọ bụ ngwa ngwa?",
      type: "comparison",
      comparison: {
        left: {
          title: "Gaa ebe mberede (emergency) ozugbo maka nsogbu ndị dị ka:",
          items: [
            "Mgbu obi, nnukwu nsogbu iku ume, ma ọ bụ ihe ngosi ọrịa strok",
            "Ọbara ọgbụgba siri ike, nnukwu mmerụ ahụ, ma ọ bụ ịda mba na-amaghị onwe onye",
            "Mgbagwoju anya mberede, seizure (ịma jijiji), ma ọ bụ mmeghachi nfụkasị ahụ siri ike (allergic reaction)",
            "Ihe mberede nchekwa ebe ichere nwere ike itinye ndụ ma ọ bụ akụkụ ahụ n'ihe ize ndụ",
          ],
        },
        right: {
          title:
            "Malite na nlekọta ngwa ngwa, Health811, ma ọ bụ klinik otu ụbọchị ahụ maka nsogbu ndị dị ka:",
          items: [
            "Mgbatị akwara, obere ọnya, ọkọ ahụ, mgbu ntị, ma ọ bụ ahụ ọkụ na-enweghị ihe ngosi mberede",
            "Nsogbu refill akwụkwọ ọgwụ nke na-enweghị ike ichere oge nleta oge niile",
            "Ajụjụ ma ị chọrọ nlekọta ngwa ngwa n'abalị a",
            "Nsogbu dị ka ọ dị ngwa mana o doghị anya na ọ nwere ike igbu mmadụ",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Ọnọdụ ndị a na-ahụkarị mgbe oge ọrụ gasịrị",
      type: "table",
      columns: ["Ọnọdụ", "Nzọụkwụ mbụ dị mma", "Ihe ị ga-echeta"],
      rows: [
        {
          cells: [
            "Amaghị m otú nke a siri dị ngwa",
            "Kpọọ Health811",
            "Nọọsụ nwere ike inyere gị aka ikpebi ma ị ga-anọ n'ụlọ, chọọ nlekọta ngwa ngwa, ma ọ bụ gaa ebe mberede.",
          ],
        },
        {
          cells: [
            "Dọkịta m emechiela ma achọrọ m ndụmọdụ n'abalị a",
            "Health811 ma ọ bụ nduzi nlekọta ngwa ngwa",
            "Echela na ebe mberede bụ naanị nhọrọ gị ma ọ bụrụ na ọ dịghị ihe ngosi mberede.",
          ],
        },
        {
          cells: [
            "Achọrọ m nlekọta maka nwa m",
            "Jiri otu ihe ngosi mberede ahụ, wee chọọ nlekọta otu ụbọchị ahụ ma ọ bụ kpọọ Health811 ma ọ bụrụ na ị maghị",
            "Buru kaadị ahụike nwa ahụ, ndepụta ọgwụ, na usoro oge mgbaàmà ya ma ọ bụrụ na ọ ga-ekwe omume.",
          ],
        },
        {
          cells: [
            "Achọrọ m enyemaka ahụike uche n'abalị a",
            "Kpọọ ma ọ bụ zie ozi na 9-8-8 (Suicide Crisis Helpline), ma ọ bụ kpọọ laịn crisis AMHS-KFLA nke 24/7",
            "Ọ bụrụ na e nwere ihe ize ndụ ozugbo na nchekwa, kpọọ 911.",
          ],
        },
      ],
      caption:
        "Tebụl a bụ naanị nduzi izugbe. Ọ bụrụ na mmadụ nwere ike ịnọ n'ihe egwu ozugbo, kpọọ 911.",
    },
    {
      id: "kingston-start-points",
      title: "Ebe mmalite na Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Ngalaba Mberede (Emergency Department)",
          content:
            "Jiri nlekọta mberede maka nsogbu ndị nwere ike igbu mmadụ ma ọ bụ ndị nwere ike ibute ọnwụ.",
          icon: "alert",
          link: {
            text: "Ndepụta mberede na ngwa ngwa",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Ebe Nlekọta Ngwa Ngwa (Urgent Care Centre)",
          content:
            "Ọ bara uru maka ọtụtụ nsogbu otu ụbọchị ahụ ndị na-enweghị ike ichere mana ha abụghị ihe mberede doro anya.",
          icon: "clock",
          link: {
            text: "Nlekọta ngwa ngwa na nke otu ụbọchị ahụ",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Ndụmọdụ nọọsụ site n'ekwentị ma ọ bụ onlaịn ma ọ bụrụ na ị maghị ebe ị ga-aga. Enyemaka ekwentị dị n'ọtụtụ asụsụ.",
          icon: "info",
          link: { text: "Ndepụta Health811", url: "/local-services/health811" },
        },
        {
          title: "Nkwado crisis ahụike uche",
          content:
            "Kpọọ ma ọ bụ zie ozi na 9-8-8 (Suicide Crisis Helpline) oge ọ bụla, ma ọ bụ jiri nkwado crisis obodo dị ka laịn crisis AMHS-KFLA nke 24/7.",
          icon: "heart",
          link: { text: "Ndepụta ahụike uche", url: "/local-services?category=mental-health" },
        },
        {
          title: "Nkwado maka ime ihe ike mmekọahụ",
          content:
            "Jiri nkwado crisis pụrụ iche ma ọ bụrụ na ị chọrọ nkwado mmetụta ozugbo, ọkwu ọnụ maka gị, ma ọ bụ atụmatụ nchekwa.",
          icon: "shield",
          link: {
            text: "Ndepụta nkwado",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Nhọrọ ngwa ngwa maka ụmụ akwụkwọ",
          content:
            "Ọ bụrụ na ị bụ nwa akwụkwọ, lelee ma ọrụ ahụike kampos gị ọ bụ ebe mbụ kacha mma maka mkpa ndị na-abụghị mberede.",
          icon: "stethoscope",
          link: { text: "Ndepụta ahụike ụmụ akwụkwọ", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Ọ bụrụ na ị ka na-amaghị",
      type: "callout",
      content:
        "Mgbe nsogbu ahụ adịghị ka ihe ga-egbu mmadụ doro anya mana ị na-echegbu onwe gị banyere ichere, malite na Health811. Ọ bụrụ na mmadụ nwere ike ịnọ n'ihe ize ndụ, na-aka njọ ngwa ngwa, ma ọ bụ na ị gaghị enweta enyemaka kwesịrị ekwesị n'oge, jiri ọrụ mberede.",
      link: { text: "Kpọọ Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Buru ihe ndị a ma ọ bụrụ na i nwere ike",
      type: "checklist",
      items: [
        "Kaadị ahụike, akwụkwọ IFHP, ma ọ bụ kaadị inshọransị ọ bụla i nwere",
        "Ndepụta ọgwụ ma ọ bụ foto karama ọgwụ",
        "Oge mgbaàmà malitere na ihe ọ bụla mere ka ọ ka njọ",
        "Mkpa onye ntụgharị okwu e dere ede ma ọ bụrụ na nchegbu nwere ike ime ka i chefuo ya mgbe e mesịrị",
        "Chaja ekwentị na onye nkwado ma ọ bụrụ na nke ahụ na-enyere gị aka",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Ịchọta Nlekọta Bụ Isi",
  description:
    "Mụta ụzọ dị iche iche e si enweta nlekọta ahụike oge niile na Kingston ma ọ bụrụ na ị nwebeghị onye na-elekọta gị.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Chọta dọkịta ezinụlọ ma ọ bụ nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Nduzi Health Care Connect ọfịshal.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Ozi ọfịshal banyere ọrụ ụlọ ọrụ ahụike obodo.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Ozi ahụike ọfịshal maka ụmụ akwụkwọ Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Ozi ahụike ọfịshal maka ụmụ akwụkwọ St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Ihe nlekọta bụ isi pụtara",
      type: "default",
      content:
        "Nlekọta bụ isi bụ ebe ị na-ebukarị ụzọ aga maka mkpa ahụike oge niile. Nke ahụ gụnyere nyocha ahụike, mmegharị ọgwụ, nlekọta ọrịa na-adịgide adịgide, referral, nlekọta mgbochi, na nlekọta na-esote mgbe nsogbu ngwa ngwa gasịrị.\n\nNa Kingston, ụzọ nlekọta bụ isi gị nwere ike ịgụnye dọkịta ezinụlọ, nurse practitioner, ụlọ ọrụ ahụike obodo, klinik kampos, ma ọ bụ ngwakọta nke nhọrọ nwa oge ka ị na-eche nlekọta kwụsiri ike karịa.",
    },
    {
      id: "access-matrix",
      title: "Ụzọ e si enweta nlekọta bụ isi",
      type: "table",
      columns: ["Ụzọ", "Kacha mma maka", "Ndị nwere ike iji ya", "Otú e si amalite"],
      rows: [
        {
          cells: [
            "Dọkịta ezinụlọ ma ọ bụ nurse practitioner",
            "Nlekọta oge niile na-aga n'ihu na atụmatụ ahụike ogologo oge",
            "Ndị ọrịa nwere ike idebanye aha n'aka onye na-elekọta",
            "Jiri Health Care Connect ma na-ele anya oghere obodo",
          ],
        },
        {
          cells: [
            "Ụlọ ọrụ ahụike obodo",
            "Nlekọta dabere n'obodo, nkwado dị mfe ịnweta, na ụfọdụ nlekọta ndị bịara ọhụrụ ma ọ bụ ndị nwere mkpa gbagwojuru anya",
            "Ntozu dabere na mmemme na ọnọdụ nnabata",
            "Kpọtụrụ òtù ahụ ozugbo ma jụọ banyere nnabata",
          ],
        },
        {
          cells: [
            "Ọrụ ahụike ụmụ akwụkwọ",
            "Nnweta dị ngwa karịa maka ụmụ akwụkwọ debanyere aha",
            "Naanị ụmụ akwụkwọ ruru eru site n'ụlọ akwụkwọ ha",
            "Jiri ọrụ ahụike ma ọ bụ ọdịmma nke kampos gị",
          ],
        },
        {
          cells: [
            "Klinik walk-in ma ọ bụ nlekọta ngwa ngwa otu ụbọchị ahụ",
            "Nlekọta nwa oge ka ị na-eche ma ọ bụ mgbe onye na-elekọta gị anọghị",
            "Ọha mmadụ, dabere n'iwu nnabata kwa ụbọchị",
            "Lelee nnweta dị ugbu a tupu ị gaa",
          ],
        },
        {
          cells: [
            "Nlekọta bụ isi onlaịn (virtual)",
            "Ụfọdụ refill, ndụmọdụ, na nsogbu oge niile",
            "Ọ dị iche dabere n'onye na-enye ya na mkpuchi gị",
            "Lelee ihe onye ahụ nwere ike na nke ọ na-enweghị ike ijikwa onlaịn n'enweghị nsogbu",
          ],
        },
      ],
      caption:
        "Ụzọ kacha mma dabere na ntozu gị, otú ọ dị ngwa, na ma ị chọrọ nlekọta nwa oge ma ọ bụ nke na-aga n'ihu.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Ọ bụrụ na ị nweghị onye na-elekọta gị oge niile",
      type: "steps",
      items: [
        "Debanye aha site n'ụzọ ọfịshal nke gọọmenti Ontario: Jiri Health Care Connect ma ọ bụrụ na ị nweghị dọkịta ezinụlọ ma ọ bụ nurse practitioner.",
        "Lelee ma i ruru eru maka nhọrọ ahụike kampos ma ọ bụ nke obodo: Ụmụ akwụkwọ kwesịrị ibido na klinik ụlọ akwụkwọ ha. Ụfọdụ ọrụ ahụike obodo nwere ndị ha na-ebute ụzọ na nnabata.",
        "Wuo atụmatụ nwa oge dị mma: Mara klinik walk-in, nke ngwa ngwa, nke onlaịn, fámasị, na ọrụ ahụike uche ndị ị nwere ike iji mgbe ị na-eche.",
        "Debe ndekọ nke gị: Chekwaa ndepụta ọgwụ, nsonaazụ ule, referral, na aha ndị ọrụ ahụike ị hụrụ.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Ihe ị ga-eme ka ị na-eche",
      type: "checklist",
      items: [
        "Jiri nlekọta walk-in, ngwa ngwa, ma ọ bụ onlaịn maka mkpa nwa oge mgbe ọ dabara",
        "Jụọ fámasị enyemaka refill ma ọ bụ nlekọta obere ọrịa ndị nwere ike ịdị",
        "Debe otu ndepụta ọgwụ e melitere ma buru ya gaa nleta ọ bụla",
        "Buru nnomi nke nsonaazụ dị mkpa ma ọ bụ akwụkwọ mwepụ mgbe nlekọta gị kewara n'ebe dị iche iche",
        "Jiri otu klinik ahụ maka nlekọta na-esote mgbe ọ ga-ekwe omume ka nlekọta gị wee nọgide n'otu usoro karịa",
      ],
    },
    {
      id: "next-best-option",
      title: "Ọ bụrụ na mkpa gị dị ngwa mana ọ bụghị ihe mberede",
      type: "callout",
      content:
        "Enweghị dọkịta ezinụlọ apụtaghị na i kwesịrị ịhazi nlekọta dị mkpa n'azụ. Jiri nhọrọ nwa oge kwesịrị ekwesị maka nsogbu dị n'ihu gị, wee mee atụmatụ maka nlekọta na-aga n'ihu mgbe a gwọchara nsogbu ngwa ngwa ahụ.",
      link: { text: "Chọọ nhọrọ nlekọta bụ isi", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Ụgwọ na Mkpuchi",
  description:
    "Nduzi mkpuchi n'asụsụ doro anya maka OHIP, IFHP, Canadian Dental Care Plan, atụmatụ ụmụ akwụkwọ ma ọ bụ nke onwe, na ụgwọ ndị a na-akwụkarị n'aka.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Tinye akwụkwọ maka OHIP ma nweta kaadị ahụike",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Nduzi OHIP ọfịshal.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Ozi mkpuchi IFHP ọfịshal.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Nduzi mkpuchi ọgwụ ọfịshal nke gọọmenti Ontario.",
    },
    {
      title: "Ontario: Nweta enyemaka maka ụgwọ ọgwụ dị elu",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Nduzi ọfịshal nke Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Ozi ọfịshal banyere mmemme mkpuchi ezé nke gọọmenti etiti na ntozu ya.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Isi ihe gbasara mkpuchi",
      type: "default",
      content:
        "Mkpuchi na Ontario dabere n'ọkwa iwu gị, afọ gị, ego ị na-enweta, ntozu mmemme, na ma i nwere atụmatụ inshọransị ụlọ akwụkwọ ma ọ bụ nke onwe.\n\nA na-ekpuchi ọtụtụ ọrụ dọkịta na ụlọ ọgwụ ndị dị mkpa n'ahụike maka ndị ọrịa OHIP ruru eru. Nke ahụ **apụtaghị** na ihe niile bụ n'efu. Ọgwụ, nlekọta ezé, nlekọta anya, fọm, akwụkwọ ọrịa, na ọtụtụ ọrụ allied health na-enwekarị mkpuchi dị iche ma ọ bụ ịkwụ ụgwọ n'aka.\n\nOzi ọma ma ọ bụrụ na ị bụ ọhụrụ: **enweghị oge nchere maka OHIP**. Ọ bụrụ na i ruru eru, ị nwere ike itinye akwụkwọ ozugbo i rutere Ontario, mkpuchi ga-amalitekwa ozugbo a nabatara akwụkwọ gị. Echela ruo mgbe ị na-arịa ọrịa tupu i tinye akwụkwọ.",
    },
    {
      id: "coverage-matrix",
      title: "Ụzọ mkpuchi n'otu nlele",
      type: "table",
      columns: [
        "Ụdị mkpuchi",
        "Ihe ọ na-enyekarị aka",
        "Ihe ọ ka nwere ike ghara ikpuchi",
        "Ihe ị ga-eme ọzọ",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Ọtụtụ ọrụ dọkịta na ụlọ ọgwụ ndị dị mkpa n'ahụike",
            "Ọtụtụ ọgwụ, nlekọta ezé, nlekọta anya, na fọm",
            "Tinye akwụkwọ ma ọ bụrụ na i ruru eru ma debe kaadị gị ka ọ dị irè",
          ],
        },
        {
          cells: [
            "IFHP",
            "Mkpuchi maka ndị gbara ọsọ ndụ ruru eru na ndị na-arịọ ọsọ ndụ dị ka mmemme gọọmenti etiti si dị",
            "Nkọwa dị iche dabere n'ụdị na ọrụ",
            "Lelee akwụkwọ ntuziaka IFHP ọfịshal ma jụọ klinik ma ọ bụ fámasị ma ha ọ na-anabata ya",
          ],
        },
        {
          cells: [
            "Inshọransị ụlọ akwụkwọ ma ọ bụ nke onwe",
            "Na-enyekarị aka maka ọgwụ, ndụmọdụ uche, ezé, anya, na allied health",
            "Oke mkpuchi, ụgwọ mgbakwunye (co-pay), na iwu netwọk dị iche",
            "Gụọ akwụkwọ atụmatụ ahụ tupu i chee na e kpuchiri otu ọrụ",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Mkpuchi ezé maka ndị bi ruru eru ndị na-enweghị inshọransị ezé nke onwe na ego ezinụlọ a haziri n'okpuru $90,000",
            "Ọ bụghị usoro ọgwụgwọ niile ka e kpuchiri, ụgwọ mgbakwunye nwekwara ike ịdị dabere n'ego ị na-enweta",
            "Lelee ntozu ma tinye akwụkwọ site n'ibe CDCP ọfịshal nke Gọọmenti Canada",
          ],
        },
        {
          cells: [
            "Enweghị mkpuchi dị irè",
            "Ị ka nwere ike inweta ụfọdụ ọrụ, mana ụgwọ nwere ike ịdị",
            "Ụgwọ nwere ike ịdị ukwuu maka nleta, ule, ma ọ bụ ọgwụ",
            "Jụọ banyere ụgwọ tupu nleta ma chọọ nhọrọ obodo ebe ọ dabara",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Ihe a na-adịghị ekpuchikarị kpamkpam",
      type: "checklist",
      items: [
        "Ọtụtụ ọgwụ e dere n'akwụkwọ ọgwụ belụsọ ma i ruru eru maka mmemme gọọmenti ma ọ bụ nwee atụmatụ ọzọ",
        "Nlekọta ezé, belụsọ ma i ruru eru maka Canadian Dental Care Plan, Healthy Smiles Ontario, mmemme ezé obodo, ma ọ bụ atụmatụ uru",
        "Nlekọta anya na-abụghị site n'ụzọ ntozu ndị a kapịrị ọnụ",
        "Physiotherapy (mmega ahụ ọgwụgwọ), ndụmọdụ uche, masaji, na ọrụ allied health ndị ọzọ belụsọ ma mmemme ma ọ bụ atụmatụ kpuchiri ha",
        "Fọm, akwụkwọ ozi, ụgwọ ọgbụghị oge a kara aka, na ọtụtụ ụgwọ nhazi ndị ọzọ",
      ],
    },
    {
      id: "drug-coverage",
      title: "Ụzọ mkpuchi ọgwụ",
      type: "default",
      content:
        "Mkpuchi ọgwụ bụkarị ebe ihe na-eju ndị bịara ọhụrụ anya. E nwere ike ikpuchi nleta dọkịta, mana akwụkwọ ọgwụ ahụ ka nwere ike iri ego.\n\nMmemme ọgwụ gọọmenti nwere ike inye aka dabere n'afọ, ego ị na-enweta, na ntozu. **Ontario Drug Benefit** na-ekpuchi ọtụtụ ọgwụ maka ndị dị afọ 65 na karịa na ndị nọ n'ụfọdụ mmemme, **OHIP+** na-ekpuchikwa ọtụtụ akwụkwọ ọgwụ maka ndị dị afọ 24 na ala ndị na-enweghị atụmatụ onwe. Ontario nwekwara **Trillium Drug Program** maka ụfọdụ ndị ụgwọ ọgwụ ha dị elu ma e jiri ya tụnyere ego ezinụlọ ha. Ọ bụrụ na i nwere atụmatụ ụlọ akwụkwọ ma ọ bụ nke onwe, lelee ma ọ na-arụkọ ọrụ na mkpuchi gọọmenti ka ọ bụ na ọ na-anọchi ya.",
    },
    {
      id: "coverage-scenarios",
      title: "Ajụjụ mkpuchi a na-ajụkarị",
      type: "faq",
      faqs: [
        {
          question: "Enwebeghị m OHIP. Enwere m ike ka nweta nlekọta?",
          answer:
            "Ee, mana ụgwọ nwere ike ịdị, ụzọ kacha mma dabekwara n'ọkwa gị na otú ọ dị ngwa. Jụọ banyere ụgwọ tupu nlekọta na-abụghị mberede mgbe ọ ga-ekwe omume, ma lelee ntozu IFHP ma ọ bụ atụmatụ ụlọ akwụkwọ ma ọ bụ nke onwe ma ọ bụrụ na ọ metụtara gị.",
        },
        {
          question: "Abụ m nwa akwụkwọ si mba ọzọ. OHIP ọ bụ naanị nhọrọ m?",
          answer:
            "Ọ bụghị mgbe niile. Ọtụtụ ụmụ akwụkwọ na-adabere n'atụmatụ inshọransị ụlọ akwụkwọ ma ọ bụ nke onwe kama OHIP. Jiri akwụkwọ atụmatụ ọfịshal nke ụlọ akwụkwọ gị na ọrụ ahụike ụmụ akwụkwọ kwado ihe e kpuchiri.",
        },
        {
          question: "Ọgwụ m ọ ga-abụ n'efu ma ọ bụrụ na e kpuchiri oge nleta m?",
          answer:
            "Ọ bụchaghị otú ahụ. Mkpuchi oge nleta na mkpuchi akwụkwọ ọgwụ na-adịkarị iche.",
        },
        {
          question: "A na-ekpuchi nlekọta ezé?",
          answer:
            "Nlekọta ezé dị iche na OHIP maka ọtụtụ ndị okenye. Canadian Dental Care Plan nke gọọmenti etiti na-ekpuchi ugbu a ọtụtụ ndị bi ndị na-enweghị inshọransị ezé nke onwe na ego ezinụlọ a haziri n'okpuru $90,000 — ị na-achọkarị ka i buru ụzọ tinye akwụkwọ ụtụ isi Canada ka i wee ruo eru. Ụmụaka nọ n'ezinụlọ ndị ego ha dị ala nwere ike iru eru maka Healthy Smiles Ontario, Kingston nwekwara klinik ezé obodo maka ndị nọ n'ụfọdụ mmemme.",
        },
        {
          question:
            "Olee otú m ga-esi mara ma ọrụ ọ bụ nke gọọmenti, nke obodo, ma ọ bụ nke onwe?",
          answer:
            "Jiri nzacha ndepụta ma lelee nkọwa ndepụta ahụ. Ọ bụrụ na ị maghị, kpọtụrụ ọrụ ahụ tupu i debe oge.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Nleta Nlekọta Ahụike Gị",
  description:
    "Ihe ị ga-ebu, otú ị ga-esi jụọ ajụjụ, na otú ị ga-esi kwurịta okwu n'enweghị nsogbu n'oge nleta nlekọta ahụike.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Nlekọta ahụike na Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Nduzi izugbe nke usoro ahụ.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Ihe ị ga-ebu",
      type: "checklist",
      items: [
        "Kaadị ahụike gị, akwụkwọ IFHP, ma ọ bụ ozi inshọransị ọzọ",
        "Ndepụta ọgwụ zuru ezu, gụnyere vitamin na ọgwụ a na-azụ n'enweghị akwụkwọ ọgwụ",
        "Aha mgbaàmà gị, mgbe ha malitere, na ihe gbanwere",
        "Ajụjụ ị chọrọ ka a zaa tupu ị pụọ",
        "Requisition, referral, akwụkwọ mwepụ, ma ọ bụ nsonaazụ ule ọ bụla e nyere gị nso nso a",
        "Mkpa onye ntụgharị okwu e dere ede ka i cheta ịjụ",
      ],
    },
    {
      id: "during-the-visit",
      title: "N'oge nleta ahụ",
      type: "steps",
      items: [
        "Malite na nsogbu kacha gị mkpa: Ọtụtụ oge nleta dị mkpirikpi, ya mere malite n'ihe kacha gị mkpa taa.",
        "Jiri asụsụ doro anya: Ọ dị mma ịsị, 'Aghọtaghị m okwu ahụ' ma ọ bụ 'Ị nwere ike ịkọwa ya n'ụzọ dị mfe karịa?'",
        "Kwughachi atụmatụ ahụ: Tupu ị pụọ, kwuo nzọụkwụ ndị na-esote n'olu ka ị mara ma ị chọrọ ule, referral, refill, ma ọ bụ oge nleta na-esote.",
        "Jụọ ihe ga-eme ma ọ bụrụ na ihe na-aka njọ: I kwesịrị ịmara mgbe ị ga-akpọghachi, mgbe ị ga-eji nlekọta ngwa ngwa, na mgbe ị ga-eji nlekọta mberede.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Enyemaka onye ntụgharị okwu na nkwurịta okwu",
      type: "default",
      content:
        "Ọ bụrụ na ị chọrọ enyemaka asụsụ, jụọ n'oge. Echela ruo ngwụcha oge nleta. Ị nwere ike ịgụ weebụsaịtị a n'ọtụtụ asụsụ site na menu Asụsụ, mana ntụgharị weebụsaịtị ekwesịghị ịnọchi nkwado onye ntụgharị okwu maka mkpebi ọgwụgwọ, ntuziaka ọgwụ, ma ọ bụ nkwenye.\n\nỊ nwere ike ịsị: **'Achọrọ m onye ntụgharị okwu, biko.'** Health811 (kpọọ 811) na-enyekwa enyemaka ekwentị n'ọtụtụ asụsụ. Ọ bụrụ na onye nkwado so gị bịa, cheta na onye ezinụlọ apụghị ịbụ mgbe niile onye kacha mma ma ọ bụ onye kacha dị mma ịtụgharị ozi ahụike gbagwojuru anya ma ọ bụ nke dị nro.",
    },
    {
      id: "questions-to-ask",
      title: "Ajụjụ kwesịrị ịjụ",
      type: "checklist",
      items: [
        "Gịnị ka i chere na-eme?",
        "Gịnị ka m kwesịrị ime na-esote?",
        "Achọrọ m ule, requisition, referral, ma ọ bụ nleta na-esote?",
        "Olee mgbe m kwesịrị ịtụ anya ịnụ nsonaazụ?",
        "Olee ihe ngosi ịdọ aka ná ntị pụtara na m kwesịrị ịkpọghachi ma ọ bụ nweta enyemaka ngwa ngwa?",
      ],
    },
    {
      id: "privacy",
      title: "Nzuzo na nkwenye",
      type: "default",
      content:
        "Ozi ahụike gị dị nro. Ọ bụrụ na ị maghị onye ga-ahụ ozi gị, jụọ. Ọ bụrụ na ị ghọtaghị fọm, mkparịta ụka nkwenye, ma ọ bụ atụmatụ ọgwụgwọ, mee ka usoro ahụ dị nwayọọ ma rịọ nkọwa doro anya karịa.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Mgbe Nleta Gasịrị",
  description:
    "Mụta ihe na-eme mgbe nleta gasịrị, gụnyere requisition, nsonaazụ ule, referral, na mgbe ị ga-akpọghachi.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Ozi usoro ụlọ ọgwụ obodo.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Ozi usoro ụlọ nyocha obodo na ebe ndị ọrịa si ahụ nsonaazụ ha (patient portal).",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Ihe na-emekarị mgbe nleta gasịrị",
      type: "steps",
      items: [
        "Ị ga-eji atụmatụ pụọ: Nke ahụ nwere ike ịgụnye ọgwụ, requisition, referral, oge nleta na-esote, ma ọ bụ ntuziaka ka ị na-ele anya ihe ngosi ịdọ aka ná ntị.",
        "I nwere ike ime nzọụkwụ na-esote n'onwe gị: Dị ka ọmụmaatụ, i nwere ike ịchọ idebe oge nyocha ọbara, imaging, ịnara ọgwụ na fámasị, ma ọ bụ nleta na-esote.",
        "Nsonaazụ na-alaghachikarị n'aka onye ọrụ ahụike nyere iwu ule ahụ: Ụlọ nyocha ma ọ bụ ebe imaging nwere ike ọ gaghị akọwara gị nsonaazụ ahụ ozugbo.",
        "I nwere ike ghara ịnata oku maka nsonaazụ ọ bụla dị mma: Jụọ usoro nlekọta na-esote nke klinik ahụ ka ị mara ihe ị ga-atụ anya ya.",
      ],
    },
    {
      id: "common-terms",
      title: "Okwu ndị a na-ahụkarị mgbe nleta gasịrị",
      type: "table",
      columns: ["Okwu", "Ihe ọ pụtara n'asụsụ doro anya", "Ihe ị na-emekarị na-esote"],
      rows: [
        {
          cells: [
            "Requisition",
            "Fọm na-agwa ụlọ nyocha ma ọ bụ klinik imaging ụdị ule ị chọrọ",
            "Debe oge ma ọ bụ gaa ule ahụ ma debe otu nnomi ma ọ bụrụ na i nwere ike",
          ],
        },
        {
          cells: [
            "Referral",
            "Arịrịọ sitere n'aka otu onye ọrụ ahụike gaa n'ọrụ ọzọ ma ọ bụ ọkachamara",
            "Chere ka a kpọtụrụ gị, wee kpọghachi ma ọ bụrụ na a gwara gị ka i soro ya ma ọ dịghị ihe mere",
          ],
        },
        {
          cells: [
            "Follow-up (nlekọta na-esote)",
            "Nlele mgbe ọgwụgwọ, ule, ma ọ bụ mgbanwe mgbaàmà gasịrị",
            "Jụọ mgbe na otú nlekọta na-esote kwesịrị isi mee tupu ị pụọ",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Mgbe ị ga-akpọghachi",
      type: "checklist",
      items: [
        "Ị ghọtaghị requisition, referral, ma ọ bụ ntuziaka ọgwụ",
        "A gwara gị na mmadụ ga-akpọtụrụ gị ma ị nụbeghị ihe ọ bụla n'ime oge a tụrụ anya ya",
        "Mgbaàmà gị na-aka njọ ma ọ bụ na ọ naghị adị mma otú a gwara gị ka ị tụọ anya ya",
        "Fámasị, ụlọ nyocha, ma ọ bụ klinik imaging gwara gị na ihe na-efu n'akwụkwọ",
        "I chere na e nwere ike hapụrụ otu nsonaazụ ma ọ bụ na ị ka na-echegbu onwe gị",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Ọnọdụ ndị a na-ahụkarị",
      type: "faq",
      faqs: [
        {
          question: "Achọrọ m nyocha ọbara mgbe nleta gasịrị. Gịnị ka m ga-eme?",
          answer:
            "Lelee ma i nwere requisition na ma ụlọ nyocha ọ chọrọ ka e debe oge. Mgbe ahụ jiri ndepụta chọta ebe ụlọ nyocha dị. Buru requisition na ozi mkpuchi gị.",
        },
        {
          question: "Aghọtaghị m fọm requisition ma ọ bụ referral.",
          answer:
            "Kpọọ klinik nyere gị ya ma rịọ ka ha kọwaa ya n'asụsụ doro anya. O ziri ezi ịjụ ihe fọm ahụ bụ maka ya, ebe o kwesịrị ịga, na ma ị ga-edebe ihe ọ bụla n'onwe gị.",
        },
        {
          question: "Onye na-eso nsonaazụ ule?",
          answer:
            "Ọtụtụ mgbe ọ bụ onye ọrụ ahụike nyere iwu ule ahụ. Jụọ ụlọ ọrụ onye ahụ usoro ha na-ejikarị maka nsonaazụ dị mma na nke na-adịghị mma.",
        },
        {
          question: "Ogologo oge ole ka referral na-ewe?",
          answer:
            "Oge referral na-adị nnọọ iche iche. Jụọ ụdị nchere kwesịrị ekwesị maka ọnọdụ gị na ihe ị ga-eme ma ọ bụrụ na ị nụghị ihe ọ bụla.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Nzọụkwụ ndị bara uru na-esote",
      type: "grid",
      gridItems: [
        {
          title: "Chọta ụlọ nyocha na imaging",
          content:
            "Jiri ndepụta maka nyocha ọbara, X-ray, ultrasound, na ndepụta imaging.",
          icon: "file",
          link: { text: "Ụlọ nyocha na imaging", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Chọta fámasị",
          content:
            "Jiri ndepụta maka fámasị, enyemaka refill, na nkwado ọgwụ.",
          icon: "shield",
          link: { text: "Fámasị", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Ị chọrọ ime atụmatụ nlekọta na-esote?",
          content:
            "Jiri ibe nlekọta bụ isi ma ọ bụrụ na ị maghị ebe nlekọta na-esote nke ogologo oge kwesịrị ime.",
          icon: "stethoscope",
          link: { text: "Chọta Nlekọta Bụ Isi", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Ọgwụ na Fámasị",
  description:
    "Ghọta akwụkwọ ọgwụ, refill, enyemaka onye ọkachamara ọgwụ (pharmacist), na otú e si akwụ ụgwọ ọgwụ na Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Ihe ndị ọkachamara ọgwụ nwere ike ime",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Ozi ọfịshal gọọmenti Ontario banyere ndị ọkachamara ọgwụ na fámasị.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Nduzi mkpuchi ọgwụ ọfịshal nke gọọmenti Ontario.",
    },
    {
      title: "Ontario: Nweta enyemaka maka ụgwọ ọgwụ dị elu",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Nduzi ọfịshal nke Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Ihe onye ọkachamara ọgwụ nwere ike inyere gị aka na ya",
      type: "default",
      content:
        "Ndị ọkachamara ọgwụ (pharmacist) na-eme karịa inye ọgwụ. Ha nwere ike ịkọwa otú e si aṅụ ọgwụ n'enweghị nsogbu, lelee ma ọgwụ na ibe ya ọ na-emekọrịta, ma nyochaa mmetụta ọjọọ.\n\nNa Ontario, ndị ọkachamara ọgwụ nwekwara ike **inyocha ma dee ọgwụ maka obere ọrịa 19 a na-ahụkarị** — gụnyere anya ọbara (pink eye), ọnya egbugbere ọnụ (cold sore), ọrịa akpa mamịrị (n'ahụ ndị inyom), atà ahụhụ, na nfụkasị oge (seasonal allergy). Nyocha ahụ bụ n'efu ma i nwee kaadị ahụike Ontario gị, ndepụta ọrịa ndị ahụ nwekwara ike ịga n'ihu na-abawanye.\n\nFámasị bụkwa otu n'ime ebe kacha mma ịjụ ajụjụ bara uru dị ka: **Refill a ọ dị ngwa? E nwere nhọrọ dị ọnụ ala karịa? Gịnị ka m ga-eme ma ọ bụrụ na m gbaghara otu oge ọgwụ?**",
    },
    {
      id: "fill-a-prescription",
      title: "Otú e si enweta ọgwụ e dere n'akwụkwọ ọgwụ",
      type: "steps",
      items: [
        "Nweta akwụkwọ ọgwụ: Ọ nwere ike ịbụ akwụkwọ, nke e ziri site na fax, ma ọ bụ nke e ziri n'ụzọ eletrọnịkị.",
        "Họrọ fámasị: Iji otu fámasị mgbe niile na-enyere ha aka ịchọpụta mmekọrịta ọgwụ na nsogbu akụkọ refill.",
        "Jụọ banyere oge na ụgwọ: Fámasị nwere ike ịgwa gị mgbe ọ ga-adị njikere na ma atụmatụ gị ọ na-akwụ ụgwọ ya.",
        "Gee ntị na ndụmọdụ: Jụọ ihe ọgwụ ahụ bụ maka ya, otú e si aṅụ ya, na mgbe ị ga-akpọghachi ma ọ bụrụ na o nyeghị aka.",
      ],
    },
    {
      id: "refill-options",
      title: "Nsogbu refill na nke ọgwụ",
      type: "table",
      columns: ["Ọnọdụ", "Nzọụkwụ mbụ dị mma", "Gịnị mere"],
      rows: [
        {
          cells: [
            "Achọrọ m refill oge niile",
            "Malite na fámasị gị mgbe niile ma ọ bụ onye ọrụ ahụike na-elekọta gị",
            "Ha nwere ike ịgwa gị ma refill, mmegharị, ma ọ bụ oge nleta ọhụrụ ka dị mkpa",
          ],
        },
        {
          cells: [
            "Dọkịta m anọghị, ọgwụ m nwekwara ike ịgwụ",
            "Jụọ fámasị nhọrọ ndị dị, wee jiri nlekọta walk-in, onlaịn, ma ọ bụ ngwa ngwa ma ọ dị mkpa",
            "Nzọụkwụ na-esote kacha mma dabere n'ọgwụ ahụ na ọnọdụ gị",
          ],
        },
        {
          cells: [
            "Aghọtaghị m otú e si aṅụ ọgwụ a",
            "Rịọ onye ọkachamara ọgwụ ka ọ kọwaa ya ọzọ n'asụsụ doro anya",
            "Nke a bụ akụkụ nke iji ọgwụ n'enweghị nsogbu",
          ],
        },
        {
          cells: [
            "Ọgwụ ahụ dị oke ọnụ",
            "Jụọ banyere ụdị generic (nke ọnụ ala), mkpuchi atụmatụ gị, na mmemme gọọmenti",
            "Ụgwọ ọgwụ dị iche iche, mkpuchi na-adịkwa iche na nleta n'onwe ya",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Ụzọ e nwere ike isi kwụọ ụgwọ ọgwụ",
      type: "checklist",
      items: [
        "Mmemme ọgwụ gọọmenti, ma ọ bụrụ na i ruru eru",
        "Atụmatụ inshọransị ụlọ akwụkwọ ma ọ bụ nke onwe",
        "Ngwakọta nke mkpuchi gọọmenti na nke onwe",
        "Ịkwụ n'aka ma ọ bụrụ na ọ dịghị mmemme kpuchiri ọgwụ ahụ",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Ị chọrọ enyemaka fámasị obodo?",
      type: "callout",
      content:
        "Jiri ndepụta chọta fámasị, nkwado refill, na nhọrọ onlaịn ma ọ bụ nke otu ụbọchị ahụ mgbe ị na-achọ idozi nsogbu ọgwụ ngwa ngwa.",
      link: { text: "Chọọ ndepụta fámasị", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Nkwado Ahụike Uche",
  description:
    "Ahụike uche obodo, ndụmọdụ uche, nkwado ndị ntorobịa, na ụzọ crisis na Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Suicide Crisis Helpline",
      url: "https://988.ca/",
      note: "Laịn enyemaka ọfịshal nke mba maka echiche igbu onwe. Kpọọ ma ọ bụ zie ozi na 9-8-8, n'efu, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Ozi ọfịshal banyere ahụike uche ndị okenye na nkwado crisis.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Laịn enyemaka ọfịshal Ontario maka ahụike uche na riri ahụ (addiction).",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Ozi ọfịshal banyere ahụike uche ụmụaka na ndị ntorobịa.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Ọ bụrụ na mmadụ nwere ike ịnọ n'ihe ize ndụ",
      type: "callout",
      content:
        "Ọ bụrụ na e nwere ihe ize ndụ ozugbo nye ndụ ma ọ bụ nchekwa, kpọọ 911. Maka echiche igbu onwe ma ọ bụ nnukwu nhụjuanya, ị nwere ike **ịkpọ ma ọ bụ izi ozi na 9-8-8** (Suicide Crisis Helpline) oge ọ bụla — ọ bụ n'efu, nzuzo ka ọ bụ, ọ dịkwa 24/7 n'asụsụ Bekee na Fụrenchị. Ị nwekwara ike ịkpọ laịn crisis AMHS-KFLA nke 24/7 na 613-544-4229. Echela oge nleta oge niile.",
      link: { text: "Ndepụta ahụike uche", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Ụdị nkwado",
      type: "grid",
      gridItems: [
        {
          title: "Nkwado crisis",
          content:
            "Jiri nke a maka nhụjuanya ozugbo, nchegbu nchekwa, ma ọ bụ mgbe ichere na-adịghị mma.",
          icon: "alert",
        },
        {
          title: "Nkwado ngwa ngwa",
          content:
            "Jiri nke a mgbe ọnọdụ ahụ dị njọ ma ị chọrọ enyemaka n'oge na-adịghị anya, mana ọ bụghị ihe mberede nwere ike igbu mmadụ ozugbo.",
          icon: "clock",
        },
        {
          title: "Ndụmọdụ uche oge niile",
          content:
            "Jiri nke a maka nchegbu na-aga n'ihu, ịda mbà n'obi, nrụgide, iru uju, nsogbu mmekọrịta, ma ọ bụ mgbanwe ndụ.",
          icon: "heart",
        },
        {
          title: "Ọrụ ụmụaka na ndị ntorobịa",
          content:
            "Jiri ọrụ ahụike uche ndị ntorobịa pụrụ iche mgbe onye chọrọ nlekọta bụ nwatakịrị ma ọ bụ onye nọ n'afọ iri na ụma.",
          icon: "info",
        },
        {
          title: "Nkwado kampos",
          content:
            "Ụzọ ọdịmma ma ọ bụ ndụmọdụ uche nke kampos nwere ike ibute ụzọ kacha mma maka ụmụ akwụkwọ.",
          icon: "stethoscope",
        },
        {
          title: "Nkwado maka ime ihe ike mmekọahụ",
          content:
            "Jiri nkwado pụrụ iche maka crisis, ndụmọdụ uche, ọkwu ọnụ maka gị, na atụmatụ nchekwa mgbe ime ihe ike mmekọahụ gasịrị.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Ebe ị ga-amalite n'ọnọdụ ndị a na-ahụkarị",
      type: "table",
      columns: ["Ọnọdụ", "Ebe mbụ kacha mma", "Gịnị mere"],
      rows: [
        {
          cells: [
            "Achọrọ m enyemaka ahụike uche n'abalị a",
            "Kpọọ ma ọ bụ zie ozi na 9-8-8, kpọọ laịn crisis AMHS-KFLA, ma ọ bụ jiri nlekọta mberede ma ọ bụrụ na nchekwa nọ n'ihe ize ndụ",
            "Echela oge nleta oge niile mgbe ọnọdụ ahụ dị ka ọ na-adịghị mma",
          ],
        },
        {
          cells: [
            "Achọrọ m ndụmọdụ uche mana adị m mma ugbu a",
            "Ndụmọdụ uche obodo, dọkịta ezinụlọ, nurse practitioner, ma ọ bụ nkwado atụmatụ onwe gị",
            "Ndị a nwere ike inye aka maka nlekọta na-aga n'ihu na referral",
          ],
        },
        {
          cells: [
            "Achọrọ m enyemaka maka nwa m",
            "Ọrụ ahụike uche ụmụaka ma ọ bụ ndị ntorobịa, tinyere nduzi ngwa ngwa ma ọ dị mkpa",
            "Ụmụaka na ndị ntorobịa na-enwekarị ụzọ dị iche",
          ],
        },
        {
          cells: [
            "Abụ m nwa akwụkwọ",
            "Ahụike kampos ma ọ bụ ndụmọdụ uche na mbụ, belụsọ ma ọnọdụ ahụ adịghị mma ma ọ bụ dị njọ",
            "Ọrụ kampos nwere ike ịbụ ụzọ mbata kacha ọsọ maka ụmụ akwụkwọ",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Ajụjụ a na-ajụkarị",
      type: "faq",
      faqs: [
        {
          question: "Onye ka m nwere ike ịkpọ ma ọ bụ zie ozi ugbu a?",
          answer:
            "Kpọọ ma ọ bụ zie ozi na **9-8-8** (Suicide Crisis Helpline) oge ọ bụla, n'efu, 24/7 — ọ chọghị referral. Na Kingston, laịn crisis AMHS-KFLA na 613-544-4229 na-azakwa 24/7. Ọ bụrụ na nchekwa nọ n'ihe ize ndụ ozugbo, kpọọ 911.",
        },
        {
          question: "Gịnị ma ọ bụrụ na amaghị m ma nke a ọ bụ crisis?",
          answer:
            "Ọ bụrụ na mmadụ nwere ike ịnọ n'ihe ize ndụ, echela ka i jide ya n'aka. Jiri nkwado crisis ma ọ bụ ọrụ mberede.",
        },
        {
          question:
            "Gịnị ma ọ bụrụ na m chọrọ enyemaka n'abalị a mana amaghị m onye m ga-akpọ?",
          answer:
            "Jiri ibe ndepụta ahụike uche obodo ma ọ bụ ụzọ nkwado crisis kama ichere ruo ụtụtụ.",
        },
        {
          question: "Gịnị ma ọ bụrụ na onye chọrọ enyemaka bụ nwa m?",
          answer:
            "Chọọ kpọmkwem ọrụ ụmụaka na ndị ntorobịa. Ụzọ ahụike uche ndị ntorobịa na-adịkarị iche na nlekọta ndị okenye.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Screening na Mgbochi Ọrịa",
  description:
    "Mụta isi ihe gbasara nlekọta mgbochi, ọgwụ mgbochi (vaccine), na screening (nyocha ịchọpụta ọrịa n'oge) na Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Ozi ọgwụ mgbochi na ahụike ọha nke obodo.",
    },
    {
      title: "Ontario: Nlekọta ahụike na Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Nduzi nlekọta ahụike izugbe.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Ihe mere nlekọta mgbochi ji dị mkpa",
      type: "default",
      content:
        "Nlekọta mgbochi pụtara ịgbalị ịchọpụta nsogbu n'oge ma ọ bụ igbochi ha tupu ha adịkwuo njọ. Nke ahụ gụnyere ọgwụ mgbochi (vaccine), ule screening, nlele ọbara mgbali oge niile, na mkparịta ụka banyere ihe ize ndụ gị na onye ọrụ ahụike.",
    },
    {
      id: "common-prevention",
      title: "Ọrụ mgbochi ndị a na-emekarị",
      type: "checklist",
      items: [
        "Mee ka ọgwụ mgbochi gị dị ọhụrụ mgbe niile",
        "Jụọ ma a na-atụ aro ule screening maka afọ gị ma ọ bụ akụkọ ahụike gị",
        "Buru ajụjụ gị banyere ọbara mgbali, ọrịa shuga, ma ọ bụ ihe ize ndụ ndị ọzọ gaa nleta oge niile",
        "Jiri akụrụngwa ahụike ọha mgbe ị chọrọ ozi ọgwụ mgbochi ma ọ bụ nke mgbochi ọrịa",
      ],
    },
    {
      id: "prevention-next",
      title: "Ị chọrọ ọrụ mgbochi nke obodo?",
      type: "callout",
      content:
        "Jiri ndepụta ọrụ obodo maka ahụike ọha, screening, na ndepụta fámasị ma ọ bụrụ na ị chọrọ ebe mmalite doro anya na Kingston.",
      link: {
        text: "Ndepụta ahụike ọha na fámasị",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Nlekọta Allied na nke Obodo",
  description:
    "Jiri ibe a ghọta nlekọta n'ụlọ, ezé, rehab (mweghachi ike ahụ), ndụmọdụ uche, nkwado anya, na ihe nwere ike ịbụ nke gọọmenti, obodo, ụmụ akwụkwọ, ma ọ bụ nke onwe.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Ozi ọfịshal banyere nhazi nlekọta n'ụlọ na n'obodo.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Ozi ọfịshal banyere mmemme mkpuchi ezé nke gọọmenti etiti na ntozu ya.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Ozi ọfịshal banyere ọrụ obodo na nke ezé.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Ozi ọfịshal banyere nkwado anya.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Ihe nlekọta allied na nke obodo pụtara",
      type: "default",
      content:
        "Allied health pụtara nlekọta sitere n'aka ndị ọkachamara dị ka physiotherapist (onye na-emega ahụ ọgwụgwọ), occupational therapist, ọkachamara nri, onye ọrụ ọha, onye ndụmọdụ uche, dọkịta ezé, ma ọ bụ ndị otu nkwado anya. Nlekọta obodo na-apụtakarị nlekọta na-eme n'èzí ụlọ ọgwụ, mgbe ụfọdụ n'ụlọ gị, n'ụlọ akwụkwọ, na klinik, ma ọ bụ na mmemme obodo.",
    },
    {
      id: "access-payment-matrix",
      title: "Tebụl nnweta na ịkwụ ụgwọ",
      type: "table",
      columns: ["Ụzọ", "Ọmụmaatụ", "Otú a na-akwụkarị ụgwọ", "Otú e si amalite"],
      rows: [
        {
          cells: [
            "Nlekọta n'ụlọ na n'obodo nke gọọmenti na-akwado",
            "Nọọsụ n'ụlọ, ọgwụgwọ n'ụlọ, nhazi nlekọta",
            "Mmemme gọọmenti nwere ike ịdị ma ọ bụrụ na i mezuru iwu mmemme ahụ",
            "Malite na referral onye ọrụ ahụike ma ọ bụ ụzọ nlekọta n'ụlọ nke ọfịshal",
          ],
        },
        {
          cells: [
            "Ọrụ ndị dabere n'obodo",
            "Ezé nke ụlọ ọrụ ahụike obodo ma ọ bụ nkwado ndị dị mfe ịnweta",
            "Ego gọọmenti ma ọ bụ nke obodo nwere ike ịdị dabere n'ọrụ ahụ",
            "Kpọtụrụ mmemme ahụ ozugbo ma jụọ banyere ntozu",
          ],
        },
        {
          cells: [
            "Nkwado ndị dabere n'ụlọ akwụkwọ",
            "Ndụmọdụ uche kampos ma ọ bụ nkwado ndị metụtara ahụike",
            "Na-ejikọkarị ya na ntozu ụmụ akwụkwọ na ụgwọ ma ọ bụ atụmatụ ụmụ akwụkwọ",
            "Jiri ibe ọrụ ọfịshal nke ụlọ akwụkwọ gị na mbụ",
          ],
        },
        {
          cells: [
            "Nlekọta allied nke onwe",
            "Physiotherapy, ndụmọdụ uche, masaji, ezé nke onwe, ọrụ anya nke onwe",
            "Ọtụtụ mgbe ịkwụ ụgwọ n'aka belụsọ ma atụmatụ ọzọ kpuchiri ya",
            "Jụọ ụgwọ zuru ezu na iwu mkpuchi tupu i debe oge",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Ọmụmaatụ nlekọta allied na nke obodo",
      type: "grid",
      gridItems: [
        {
          title: "Nlekọta n'ụlọ",
          content:
            "Ọ bara uru mgbe mmadụ chọrọ nkwado n'ụlọ mgbe ọrịa, mmerụ ahụ, ma ọ bụ nlekọta ụlọ ọgwụ gasịrị.",
          icon: "clock",
          link: {
            text: "Ndepụta nlekọta n'ụlọ",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Nlekọta ezé",
          content:
            "Mkpuchi ezé dị iche na mkpuchi dọkịta oge niile. Canadian Dental Care Plan nke gọọmenti etiti na-ekpuchi ugbu a ọtụtụ ndị na-enweghị inshọransị ezé nke onwe, mmemme dị ka Healthy Smiles Ontario na klinik ezé obodo na-enyekwara otu ndị a kapịrị ọnụ aka.",
          icon: "shield",
          link: {
            text: "Ndepụta ezé na nke obodo",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehab na ọgwụgwọ",
          content:
            "Physiotherapy, occupational therapy, na ọrụ ndị metụtara ha nwere ike ịbụ nke gọọmenti, obodo, ma ọ bụ nke onwe dabere n'ụzọ gị.",
          icon: "stethoscope",
          link: { text: "Ndepụta nlekọta allied", url: "/local-services?category=allied-community" },
        },
        {
          title: "Nkwado anya",
          content:
            "Nkwado anya nwere ike ịgụnye ngwaọrụ, enyemaka nduzi ebe, na nkwado obodo nakwa nlekọta anya nke ahụike.",
          icon: "info",
          link: {
            text: "Ndepụta nkwado anya",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Tupu i debe oge",
      type: "checklist",
      items: [
        "Jụọ ma referral ọ dị mkpa",
        "Jụọ ma ọrụ ahụ ọ bụ nke gọọmenti, nke obodo na-akwado, ma ọ bụ ịkwụ ụgwọ n'aka",
        "Jụọ ụgwọ kpọmkwem na iwu nkagbu oge ma ọ bụrụ na ọrụ ahụ bụ nke onwe",
        "Lelee ma atụmatụ ụlọ akwụkwọ ma ọ bụ nke onwe gị ọ na-ekpuchi akụkụ nke ụgwọ ahụ",
        "Jụọ ma ị ga-ebu ndekọ, imaging, ma ọ bụ akwụkwọ dọkịta",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ na Nkọwa Okwu",
  description:
    "Ọnọdụ ndị bịara ọhụrụ a na-ahụkarị, ajụjụ bara uru, na nkọwa okwu n'asụsụ doro anya.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Nlekọta ahụike na Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Nduzi nlekọta ahụike izugbe nke gọọmenti Ontario.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Nduzi ndụmọdụ nọọsụ ọfịshal.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Ọnọdụ ndị bịara ọhụrụ a na-ahụkarị",
      type: "faq",
      faqs: [
        {
          question: "Enwebeghị m OHIP. Gịnị ka m ga-ebu ụzọ mee?",
          answer:
            "Buru ụzọ mụta ụzọ mkpuchi gị, wee jiri ndepụta obodo na ibe nduzi ngwa ngwa mee atụmatụ nwa oge dị mma.",
        },
        {
          question: "Abụ m nwa akwụkwọ si mba ọzọ. Ebee ka m ga-amalite?",
          answer:
            "Malite n'ọrụ ahụike ma ọ bụ ọdịmma nke kampos gị na akwụkwọ inshọransị ụlọ akwụkwọ gị, wee jiri ọrụ obodo ma ọ bụ nke ngwa ngwa mgbe ndị ahụ ezughị.",
        },
        {
          question: "Achọrọ m onye ntụgharị okwu.",
          answer:
            "Jụọ n'oge. Ị nwere ike ịgụ saịtị a n'asụsụ 33 site na menu Asụsụ, ị nwekwara ike igosi ndị ọrụ ahịrịokwu dị mkpirikpi ndị dị na taabụ enyemaka onye ntụgharị okwu. Maka oge nleta, ntuziaka ọgwụ, nkwenye, na mkparịta ụka ule, jụọ banyere nkwado onye ntụgharị okwu ọkachamara. Health811 (kpọọ 811) na-enye enyemaka ekwentị n'ọtụtụ asụsụ.",
        },
        {
          question: "Achọrọ m nyocha ọbara mgbe nleta gasịrị.",
          answer:
            "Lelee na i nwere requisition, wee chọọ ụlọ nyocha na imaging na ndepụta.",
        },
        {
          question: "Achọrọ m refill, dọkịta m anọghịkwa.",
          answer:
            "Malite na fámasị gị, wee jiri ụzọ walk-in, onlaịn, ma ọ bụ nke ngwa ngwa dị ka ọ dabara, dabere n'ọgwụ ahụ na otú ọ dị ngwa.",
        },
        {
          question: "Achọrọ m nlekọta maka nwa m.",
          answer:
            "Buru ụzọ jiri ihe ngosi mberede, wee jiri nduzi otu ụbọchị ahụ ma ọ bụ nke ngwa ngwa. Ụzọ ahụike uche ụmụaka na ndị ntorobịa na-adịkarị iche na nlekọta ndị okenye.",
        },
        {
          question: "Achọrọ m enyemaka ahụike uche n'abalị a.",
          answer:
            "Kpọọ ma ọ bụ zie ozi na 9-8-8 (Suicide Crisis Helpline) oge ọ bụla, ma ọ bụ kpọọ laịn crisis AMHS-KFLA nke 24/7 na 613-544-4229. Jiri nlekọta mberede ma ọ bụrụ na nchekwa nọ n'ihe ize ndụ. Echela oge nleta oge niile.",
        },
        {
          question: "Aghọtaghị m requisition ma ọ bụ referral.",
          answer:
            "Kpọọ klinik nyere gị ya ma rịọ ka ha kọwaa ya n'asụsụ doro anya. Ị nwere ike ịjụ ihe ọ bụ maka ya, ebe ọ na-aga, na onye kwesịrị iso ya.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Ajụjụ ndị ọzọ a na-ajụkarị",
      type: "faq",
      faqs: [
        {
          question:
            "Enwere m ike ịga naanị ebe mberede ma ọ bụrụ na enweghị m dọkịta?",
          answer:
            "Ebe mberede bụ maka ihe mberede. Ọ bụrụ na nsogbu ahụ adịghị ka ihe ga-egbu mmadụ doro anya, malite n'ibe nduzi ngwa ngwa, Health811, klinik walk-in, ma ọ bụ nlekọta otu ụbọchị ahụ ọzọ.",
        },
        {
          question:
            "Gịnị ma ọ bụrụ na m bụ ọhụrụ ma amaghị m ọrụ dabara m?",
          answer:
            "Jiri nzacha ndepụta maka ụmụ akwụkwọ, ndị bịara ọhụrụ, ụmụaka na ndị ntorobịa, walk-in, onlaịn, referral dị mkpa, na ụdị mkpuchi.",
        },
        {
          question:
            "Gịnị ma ọ bụrụ na ozi dị na saịtị a yiri ka o mere ochie?",
          answer:
            "Jiri fọm nkọ dị n'ibe ma ọ bụ ndepụta ahụ ka nyocha na-esote wee lekwasị anya na mgbanwe ị hụrụ.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Nkọwa okwu",
      type: "checklist",
      items: [
        "Nlekọta bụ isi (primary care): Ụzọ nlekọta ahụike gị oge niile maka mkpa ahụike oge niile na nke na-aga n'ihu.",
        "Nurse practitioner (NP): Nọọsụ nwere ọzụzụ dị elu nke nwere ike inyocha, ịchọpụta ọrịa, ide ọgwụ, na izipu gị n'ebe ọzọ n'ọtụtụ ọnọdụ.",
        "Referral: Arịrịọ sitere n'aka otu onye ọrụ ahụike gaa n'ọrụ ọzọ ma ọ bụ ọkachamara.",
        "Requisition: Fọm na-agwa ụlọ nyocha ma ọ bụ klinik imaging ụdị ule ị chọrọ.",
        "Triage: Usoro ikpebi onye chọrọ nlekọta ngwa ngwa na mbụ dabere na nchekwa na ogo njọ ya.",
        "Klinik walk-in: Klinik nwere ike ịhụ ndị ọrịa na-enweghị oge e debere, dabere na nnabata kwa ụbọchị.",
        "Nlekọta ngwa ngwa (urgent care): Nlekọta otu ụbọchị ahụ maka nsogbu ngwa ngwa ndị na-adịghị ka ihe ga-egbu mmadụ doro anya.",
        "Onye ọrịa e debanyere aha (rostered ma ọ bụ attached): Onye ọrịa nwere mmekọrịta na-aga n'ihu na onye na-enye ya nlekọta bụ isi oge niile.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Banyere, Ntụkwasị Obi, na Nzuzo",
  description:
    "Mụta otú ntuziaka a si arụ ọrụ, otú e si elekọta ebe e si nweta ihe na ọnọdụ nyocha, na otú e si akọ mgbanwe.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ihe ndekọ ebe e si nweta ihe nke ọrụ a",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Nchịkọta e gosiri ọha banyere otú ọrụ a si elekọta ntụkwasị obi na ebe e si nweta ihe.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Ihe saịtị a bụ maka ya",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca bụ ntuziaka nduzi nlekọta ahụike nke na-ebute ndị bịara ọhụrụ ụzọ maka Kingston, Ontario. E mere ya iji nyere ndị mmadụ aka ịhọrọ nzọụkwụ na-esote kwesịrị ekwesị, ịghọta okwu usoro a na-ahụkarị, na ịchọta ndepụta ọrụ obodo a tụkwasịrị obi.\n\nSaịtị a **abụghị** ngwá ọrụ oge nchere dị ugbu a, ebe e si edebe oge, ma ọ bụ ọrụ ndụmọdụ ahụike.",
    },
    {
      id: "sources",
      title: "Otú ntụkwasị obi na ebe e si nweta ihe si arụ ọrụ",
      type: "default",
      content:
        "Anyị na-agbalị ijikọ ndepụta obodo n'ibe ọrụ ọfịshal mgbe ọ bụla o kwere omume. Ndepụta ọ bụla na-egosi ọnọdụ nyocha na ụbọchị nyocha ikpeazụ. E kwadoro ụfọdụ ndebanye n'ụzọ zuru ezu site n'ebe ọfịshal. Ndị ọzọ ka chọrọ nyochagharị obodo n'ihi na awa, nnabata, ma ọ bụ iwu nnweta na-agbanwe ugboro ugboro.\n\nIgbe ebe e si nweta ihe nke ọkwa ibe na-egosi isi ntụaka ọfịshal e jiri maka oge nyocha dị ugbu a.",
    },
    {
      id: "accessibility",
      title: "Nnweta na asụsụ",
      type: "default",
      content:
        "E wuru saịtị a ka o jiri keyboard dị mfe, buru ekwentị ụzọ, ma dị mfe ịgụ n'asụsụ doro anya.\n\nỊ nwere ike ịgụ ntuziaka a zuru ezu n'asụsụ **33** site na menu Asụsụ dị n'isi ibe — site na العربية na Soomaali ruo ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, na Українська — ebe a na-eweta ibe ọ bụla na menu ọ bụla ozugbo n'ime saịtị a. Ntụgharị niile bụ ndị igwe nyere aka; asụsụ French, Spanish, Arabic, na Simplified Chinese nwetara nyocha ọzọ agbakwunyere, e dekwara ndị fọdụrụ dị ka ntụgharị akpaaka. **Bekee ka bụ ụdị ntụaka** — ọ bụrụ na ahịrịokwu a tụgharịrị adịghị edo anya ma ọ bụ na-eju anya, lelee ederede Bekee ma ọ bụ rịọ mmadụ ka o kwado ya.\n\nỌtụtụ iri asụsụ ndị ọzọ nwere ike imeghe saịtị a site na Google Translate site n'otu menu ahụ, taabụ enyemaka onye ntụgharị okwu nwekwara ahịrịokwu ngwa ngwa maka ihe mberede n'asụsụ karịrị 20 nke ị nwere ike igosi ndị ọrụ.\n\nNdepụta ọrụ (aha ọrụ, adreesị, nọmba ekwentị, na awa) na-anọgide n'asụsụ Bekee ka ha kwekọọ kpọmkwem n'ebe ọfịshal.\n\nNtụgharị ụdị ọ bụla ka nwere ike ihie ụzọ maka nkọwa ahụike, ya mere jụọ banyere nkwado onye ntụgharị okwu ọkachamara maka oge nleta, ntuziaka ọgwụ, na nkwenye. Health811 (kpọọ 811) na-enye enyemaka ekwentị n'ọtụtụ asụsụ.",
    },
    {
      id: "privacy",
      title: "Nzuzo",
      type: "default",
      content:
        "Saịtị a anaghị eji nyocha si n'ebe dị anya nke na-abanye n'ime ndụ mmadụ. Ọ na-edebe ọnụọgụ mmezi dị fechaa na nchọgharị nke gị ka ndị na-elekọta saịtị wee ghọta ọchụchọ ndị a na-emekarị, ọchụchọ ndị na-enweghị nsonaazụ, nlele ọrụ, na akụkọ nsogbu mgbe e ji ụma bupụta ozi ahụ maka nlekọta saịtị.\n\nEzigala ozi ahụike nzuzo site na fọm nzaghachi ma ọ bụ email.",
    },
    {
      id: "contact",
      title: "Kọntaktị na ịkọ mgbanwe",
      type: "default",
      content:
        "Ọ bụrụ na ibe ma ọ bụ ndepụta yiri ka ọ na-ezighị ezi, jiri fọm nkọ dị n'ibe ahụ. Akụkọ kwesịrị ịkọwa nsogbu ahụ, ọ bụghị ọnọdụ ahụike nke gị.\n\nEmail kọntaktị izugbe: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Disclaimer (ịdọ aka ná ntị)",
      type: "default",
      content:
        "Weebụsaịtị a bụ naanị maka nduzi na mmụta. Ọ bụghị ndụmọdụ ahụike, ọ bụghịkwa ihe ga-anọchi nchọpụta ọrịa, ọgwụgwọ, ma ọ bụ enyemaka mberede nke ndị ọkachamara. Ọ bụrụ na ọnọdụ nwere ike igbu mmadụ, kpọọ 911.",
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
