import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Inapakia ukurasa...",
    directoryEnglishNote:
      "Orodha za huduma zinaonyeshwa kwa Kiingereza ili majina ya huduma, anwani, namba za simu, na saa za kazi zilingane kabisa na vyanzo rasmi.",
  },
  header: {
    emergencyBanner: "Dharura inayohatarisha maisha? Piga simu 911 sasa.",
    tagline:
      "Mwongozo wa huduma za afya unaowalenga wageni wapya kwanza, Kingston, Ontario",
    languageButton: "Lugha",
    languageButtonAria: "Msaada wa lugha na mkalimani",
    openNavigation: "Fungua menyu",
    primaryNavLabel: "Kuu",
  },
  languageModal: {
    title: "Msaada wa lugha na mkalimani",
    description:
      "Soma mwongozo huu kwa lugha unayoifahamu zaidi. Kwa mazungumzo ya huduma za afya, omba mkalimani unapomhitaji.",
    chooseLanguageTitle: "Chagua lugha yako",
    chooseLanguageNote:
      "Mwongozo huu umetafsiriwa kikamilifu katika lugha 33 kwenye tovuti hii, na makumi ya lugha nyingine zinafunguka kupitia tafsiri ya kiotomatiki. Orodha za huduma zinabaki kwa Kiingereza ili zilingane kabisa na vyanzo rasmi. Kiingereza ndiyo toleo la marejeo ikiwa jambo lolote haliko wazi.",
    safetyTitle: "Tahadhari ya usalama",
    safetyBody:
      "Tafsiri ya tovuti ni kwa ajili ya kusoma na kuelewa. Kwa miadi, maelekezo ya vipimo, dawa, au ridhaa, uliza kama kliniki au hospitali inaweza kutoa mkalimani wa kitaalamu. Health811 (piga 811) inatoa msaada wa simu kwa lugha nyingi.",
    phrasesTitle: "Sentensi fupi za kuwaonyesha wafanyakazi",
    phrasesNote:
      "Onyesha lugha yako na uwaonyeshe wafanyakazi wa mapokezi au wa kliniki mistari hii.",
    callHealth811: "Piga Health811",
    accessibilityCta: "Ufikivu na uaminifu",
    close: "Funga kidirisha cha msaada wa lugha",
  },
  moreLanguages: {
    title: "Lugha zaidi (tafsiri ya kiotomatiki)",
    description:
      "Kila lugha inapatikana kupitia menyu hii moja — ikiwa ni pamoja na Kisomali, Kiyoruba, Kiigbo, Kihausa, Kiamhara, Kitigrinya, Kiswahili, Kiukreni, Kifarsi, Kiurdu, Kipunjabi, Kitamil, na Kivietinamu.",
    selectLabel: "Chagua lugha yoyote",
    selectPlaceholder: "Lugha zote — chagua moja…",
    openButton: "Fungua kwa lugha hii",
    disclaimer:
      "Lugha zilizoonyeshwa kama za kiotomatiki hufungua ukurasa huu kupitia Google Translate na hubaki katika lugha yako unapoendelea kuvinjari. Tafsiri ya kiotomatiki haipitiwi na mradi huu — inafaa kwa kusoma, lakini thibitisha maelezo ya kimatibabu na mtaalamu wa afya au mkalimani.",
  },
  funding: {
    acknowledgment:
      "Mradi huu unasaidiwa na ruzuku kutoka Ontario Medical Students Association (OMSA).",
    logoAlt: "Nembo ya Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Tafuta lugha…",
    onSiteGroup: "Imetafsiriwa kwenye tovuti hii",
    proxyGroup: "Lugha zaidi kupitia Google Translate",
    reviewedBadge: "Imepitiwa",
    automaticBadge: "Kiotomatiki",
    interpreterTab: "Msaada wa mkalimani na sentensi",
    noMatches: "Hakuna lugha inayolingana na utafutaji wako.",
    note: "Tafsiri zimesaidiwa na mashine, na Kiingereza ndiyo toleo la marejeo ikiwa jambo lolote haliko wazi. Lugha zilizo katika kundi la Google Translate hufungua ukurasa huu kwenye tovuti ya nje ya Google. Orodha za huduma zinabaki kwa Kiingereza ili zilingane kabisa na vyanzo rasmi.",
  },
  navigation: [
    {
      title: "Anza hapa",
      items: [
        {
          label: "Unahitaji Msaada Sasa",
          to: "/need-help-now",
          description: "Maamuzi ya haraka na msaada wa dharura",
        },
        {
          label: "Anza Hapa",
          to: "/start-here",
          description: "Mgeni katika huduma za afya za Ontario",
        },
        {
          label: "Tafuta Huduma ya Msingi",
          to: "/get-a-family-doctor",
          description:
            "Madaktari, wauguzi wataalamu (NP), vituo vya afya vya jamii (CHC), na chaguo za wanafunzi",
        },
      ],
    },
    {
      title: "Elewa huduma",
      items: [
        {
          label: "Gharama na Bima",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, mipango ya binafsi, na malipo ya dawa",
        },
        {
          label: "Ziara Yako",
          to: "/your-visit",
          description: "Cha kubeba na jinsi ya kuuliza maswali",
        },
        {
          label: "Baada ya Ziara",
          to: "/after-visit",
          description: "Vipimo, fomu za vipimo, rufaa, na ufuatiliaji",
        },
        {
          label: "Dawa na Maduka ya Dawa",
          to: "/medicines-and-pharmacies",
          description:
            "Maagizo ya dawa, kujaza tena dawa, na msaada wa mfamasia",
        },
      ],
    },
    {
      title: "Msaada wa karibu",
      items: [
        {
          label: "Huduma za Karibu",
          to: "/local-services",
          description: "Tafuta huduma za Kingston",
        },
        {
          label: "Afya ya Akili",
          to: "/mental-health",
          description:
            "Msaada wa dharura, wa haraka, wa kawaida, na wa vijana",
        },
        {
          label: "Uchunguzi na Kinga",
          to: "/screening-prevention",
          description: "Chanjo na huduma za kinga",
        },
        {
          label: "Huduma Saidizi na za Jamii",
          to: "/community-allied-health",
          description:
            "Huduma za nyumbani, mazoezi ya viungo, meno, na misaada ya jamii",
        },
        {
          label: "Maswali ya Kawaida (FAQ)",
          to: "/faq",
          description: "Hali za kawaida za wageni wapya na kamusi",
        },
        {
          label: "Kuhusu na Uaminifu",
          to: "/about",
          description: "Vyanzo, faragha, ufikivu, na maoni",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Unahitaji msaada sasa hivi?",
    items: {
      "call-911": {
        label: "Piga 911",
        description: "Dharura inayohatarisha maisha",
      },
      "call-811": {
        label: "Piga Health811",
        description: "Ushauri wa muuguzi, saa 24/7",
      },
      "call-988": {
        label: "Piga au tuma ujumbe 9-8-8",
        description: "Simu ya Dharura ya Kujiua (Suicide Crisis Helpline), 24/7",
      },
      "call-crisis": {
        label: "Piga Simu ya Dharura",
        description: "Simu ya dharura ya AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Mwongozo wa huduma ya haraka",
        description: "Chaguo za nje ya saa za kazi na za siku hiyo hiyo",
      },
      "mental-health": {
        label: "Msaada wa afya ya akili",
        description: "Njia za dharura, za haraka, na za kawaida",
      },
    },
  },
  home: {
    seoTitle: "Mwongozo wa huduma za afya Kingston",
    seoDescription:
      "Mwongozo wa huduma za afya unaowalenga wageni wapya kwanza kwa Kingston, Ontario: msaada wa haraka, huduma za karibu, misingi ya bima, mwongozo wa mkalimani, na hatua zinazofuata baada ya ziara.",
    kicker: "Kingston, Ontario",
    heroTitle: "Pata huduma sahihi Kingston bila kubahatisha",
    heroLead:
      "Anza na msaada wa haraka, misingi kwa wageni wapya, bima, au orodha ya huduma za karibu. Mwongozo huu unatumia lugha rahisi, unafaa kwa simu, na uko wazi kuhusu mambo ambayo bado yanahitaji kukaguliwa upya.",
    cardNeedHelp: {
      title: "Unahitaji msaada sasa",
      body: "Mwongozo wa dharura, huduma ya haraka, msaada wa dharura wa akili, na huduma nje ya saa za kazi.",
    },
    cardStartHere: {
      title: "Anza hapa",
      body: "Jinsi huduma za afya za Ontario zinavyofanya kazi na cha kufanya kwanza.",
    },
    cardSearch: {
      title: "Tafuta huduma",
      body: "Tafuta vipimo vya damu, kujaza tena dawa, huduma bila miadi, afya ya akili, na zaidi.",
    },
    cardLanguage: {
      title: "Msaada wa lugha",
      body: "Soma mwongozo huu kwa lugha yako, pamoja na mwongozo wa mkalimani na sentensi fupi za haraka.",
    },
    quickDecisionsKicker: "Maamuzi ya haraka",
    quickDecisionsTitle: "Anza na maswali haya",
    quickDecisionLines: [
      "Ikiwa inaweza kuhatarisha maisha, piga 911 sasa.",
      "Ikiwa huna uhakika pa kwenda usiku huu, piga Health811.",
      "Kwa mawazo ya kujiua au msongo mkubwa wa moyo, piga au tuma ujumbe 9-8-8 wakati wowote.",
      "Ikiwa huna daktari wa familia, weka kliniki za bila miadi, vituo vya afya vya jamii, na chaguo za wanafunzi katika mpango wako.",
      "Ikiwa unahitaji vipimo vya damu, X-ray, kujaza tena dawa, au taarifa mpya za rufaa, tumia orodha ya huduma za karibu kupata hatua inayofuata.",
    ],
    trustNoteTitle: "Maelezo ya uaminifu",
    trustNoteBody:
      "Huu ni mwongozo usiobadilika moja kwa moja (static). Hatuonyeshi muda wa kusubiri wa papo hapo. Maelezo yanayobadilika haraka kama saa za kazi na taratibu za kupokea wagonjwa yanaweza kubadilika, kwa hiyo kila taarifa ya huduma ina kiungo cha chanzo na hali ya ukaguzi.",
    newcomerKicker: "Mwanzo wa haraka kwa wageni wapya",
    newcomerTitle: "Hatua za kwanza ikiwa wewe ni mgeni Kingston",
    newcomerSteps: [
      {
        title: "1. Jifunze bima yako",
        body: "Elewa OHIP, IFHP, mipango ya binafsi, na yale ambayo kwa kawaida hayalipiwi. Hakuna kipindi cha kusubiri kwa OHIP - omba mara tu unapofika.",
      },
      {
        title: "2. Panga njia yako ya huduma ya msingi",
        body: "Jifunze tofauti kati ya madaktari wa familia, wauguzi wataalamu (nurse practitioners), kliniki za wanafunzi, vituo vya afya vya jamii, na huduma bila miadi.",
      },
      {
        title: "3. Jua kinachofuata",
        body: "Jifunze maana ya fomu za vipimo (requisitions), rufaa, majibu ya vipimo, na simu za ufuatiliaji.",
      },
    ],
    languageSupportKicker: "Msaada wa lugha",
    languageSupportTitle: "Onyesha sentensi hizi ikiwa unahitaji msaada",
    openLanguageHelp: "Fungua msaada wa lugha",
    commonTasksKicker: "Kazi za kawaida",
    commonTasksTitle: "Tafuta kulingana na jambo unalotaka kumaliza",
    openDirectory: "Fungua orodha kamili",
    tasks: [
      {
        title: "Vipimo vya damu au X-ray",
        body: "Tafuta maabara na huduma za picha za mwili.",
      },
      {
        title: "Kujaza tena dawa",
        body: "Tafuta maduka ya dawa na msaada wa kujaza tena dawa.",
      },
      {
        title: "Msaada wa afya ya akili",
        body: "Msaada wa dharura, wa haraka, wa kawaida, na wa vijana.",
      },
      {
        title: "Kadi ya afya au msaada kwa wageni wapya",
        body: "Tafuta ServiceOntario, ISKA, na ushauri kwa simu.",
      },
    ],
    featuredKicker: "Huduma zilizoangaziwa",
    featuredTitle: "Mahali pazuri pa kuanzia",
    trustKicker: "Uaminifu na vyanzo",
    trustTitle:
      "Tuko wazi kuhusu kilichothibitishwa na kile ambacho bado kinahitaji kukaguliwa upya",
    trustBody:
      "Baadhi ya taarifa za huduma zimekaguliwa dhidi ya vyanzo rasmi vya eneo hili. Nyingine bado zinahitaji ukaguzi wa eneo kwa sababu saa za kazi, taratibu za kupokea wagonjwa, au sheria za upatikanaji hubadilika mara kwa mara. Tunaonyesha hali hiyo wazi na tunawahimiza watumiaji kuripoti maelezo yaliyopitwa na wakati.",
    trustChecklistTitle: "Soma kabla ya kutegemea taarifa ya huduma",
    trustChecklist: [
      "Tafuta kiungo cha chanzo rasmi.",
      "Angalia tarehe ya ukaguzi wa mwisho.",
      "Thibitisha saa za siku hiyo hiyo na upatikanaji bila miadi kabla ya kwenda.",
      "Tumia fomu ya kuripoti ukiona badiliko.",
    ],
    trustLink: "Angalia vyanzo na maelezo ya uaminifu",
  },
  contentPage: {
    breadcrumbHome: "Mwanzo",
    badge: "Mwongozo wa lugha rahisi",
    reviewStatusTitle: "Hali ya ukaguzi",
    reviewLabels: {
      reviewed:
        "Imekaguliwa dhidi ya seti ya vyanzo vya sasa vinavyotumiwa na mradi huu.",
      "general-guidance":
        "Imekaguliwa kama mwongozo wa jumla. Maelezo ya eneo bado yanaweza kubadilika haraka.",
      "needs-local-recheck":
        "Mwongozo wenye manufaa, lakini maelezo ya eneo bado yanahitaji ukaguzi zaidi.",
    },
    lastReviewPrefix: "Ukaguzi wa mwisho wa ukurasa:",
    noReviewDate:
      "Ukurasa huu hauna tarehe ya ukaguzi wa ukurasa iliyorekodiwa.",
    translationAside:
      "Unaweza kusoma ukurasa huu kwa lugha kadhaa kwa kutumia menyu ya Lugha. Kwa miadi, dawa, ridhaa, na maelekezo ya vipimo, uliza kama msaada wa mkalimani unapatikana.",
    share: "Shiriki",
    print: "Chapisha",
    sourcesTitle: "Vyanzo vya ukurasa huu",
    sourcesNote:
      "Hivi ndivyo vyanzo vikuu rasmi au vya msingi vilivyotumika kwa ukaguzi wa sasa wa ukurasa huu. Taratibu za eneo bado zinaweza kubadilika kati ya vipindi vya ukaguzi.",
    onThisPage: "Katika ukurasa huu",
    sourcesAnchorLabel: "Vyanzo",
    translationReminderTitle: "Ukumbusho wa tafsiri",
    translationReminderBody:
      "Ikiwa jambo linaathiri matibabu au usalama wako, lithibitishe na mtaalamu wa afya au mkalimani badala ya kutegemea tafsiri pekee.",
    linkCopiedTitle: "Kiungo kimenakiliwa",
    linkCopiedBody:
      "Sasa unaweza kubandika kiungo cha ukurasa huu mahali popote.",
    shareCancelled: "Kushiriki kumeghairiwa",
  },
  directory: {
    seoTitle: "Huduma za karibu",
    seoDescription:
      "Tafuta huduma za afya, afya ya akili, maduka ya dawa, bima, na msaada wa uelekezi zinazofaa wageni wapya Kingston, Ontario.",
    kicker: "Orodha ya Kingston",
    title: "Tafuta huduma za afya za karibu",
    lead: "Tafuta kwa huduma, dalili, hati, au kazi. Mifano: bila miadi (walk in), nje ya saa za kazi, vipimo vya damu, kujaza tena dawa, kadi ya afya, kliniki ya wanafunzi, au msaada kwa wageni wapya.",
    searchPlaceholder: "Tafuta kwa hitaji, jina la huduma, anwani, au neno kuu",
    sortAriaLabel: "Panga matokeo",
    sortRelevance: "Panga: Yanayofaa zaidi",
    sortAlphabetical: "Panga: A hadi Z",
    sortRecentlyReviewed: "Panga: Yaliyokaguliwa hivi karibuni",
    sortArea: "Panga: Eneo",
    gridViewLabel: "Mwonekano wa gridi",
    listViewLabel: "Mwonekano wa orodha",
    allServices: "Huduma zote",
    audienceTitle: "Walengwa",
    accessTitle: "Upatikanaji",
    careLevelTitle: "Kiwango cha huduma",
    coverageAreaTitle: "Bima na eneo",
    areaLabel: "Eneo",
    showingServices: "Zinaonyeshwa huduma {count}",
    resetFilters: "Weka upya vichujio",
    trustPanelTitle: "Hali ya uaminifu na ukaguzi",
    trustPanelBody:
      "Orodha hii haibadiliki moja kwa moja. Tunaonyesha tarehe ya ukaguzi wa mwisho iliyorekodiwa, viungo vya vyanzo rasmi vinapopatikana, na huduma ambazo bado zinahitaji ukaguzi wa eneo. Thibitisha saa za kazi na upatikanaji wa siku hiyo hiyo kabla ya kwenda.",
    verifiedLabel: "Imethibitishwa",
    needsRecheckLabel: "Inahitaji ukaguzi upya",
    noResultsTitle: "Hakuna huduma zilizolingana na vichujio hivyo",
    noResultsBody:
      "Jaribu utafutaji mpana zaidi kama vipimo vya damu, kujaza tena dawa, afya ya akili, kadi ya afya, au bila miadi. Pia unaweza kufuta vichujio vyote na kuanza tena.",
    notSureTitle: "Huna uhakika pa kuanzia?",
    notSureBody:
      "Ikiwa huna uhakika kama unahitaji huduma ya dharura, huduma ya haraka, kliniki ya bila miadi, au msaada wa duka la dawa, anza na ukurasa wa mwongozo wa haraka au piga Health811 kupata ushauri wa muuguzi.",
    needHelpNowCta: "Unahitaji Msaada Sasa",
    callHealth811: "Piga Health811",
  },
  filters: {
    audience: {
      newcomers: "Wageni wapya",
      students: "Wanafunzi tu au chuoni",
      "children-youth": "Mtoto au kijana",
      adults: "Watu wazima",
      families: "Familia",
      "unattached-patients": "Hakuna daktari wa familia",
    },
    access: {
      "walk-in": "Bila miadi",
      appointment: "Kwa miadi",
      referral: "Inahitaji rufaa",
      virtual: "Mtandaoni",
    },
    level: {
      emergency: "Dharura",
      urgent: "Haraka",
      primary: "Msingi",
      community: "Jamii",
    },
    payment: {
      public: "Inalipiwa na serikali",
      community: "Jamii / vikwazo vichache",
      mixed: "Bima mchanganyiko",
      "student-plan": "Mpango wa wanafunzi",
      private: "Malipo binafsi",
    },
    location: {
      downtown: "Katikati ya jiji",
      "north-end": "Upande wa Kaskazini",
      "west-end": "Upande wa Magharibi",
      campus: "Chuoni",
      online: "Mtandaoni",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Huduma za dharura na za haraka",
      shortLabel: "Dharura na haraka",
    },
    "primary-care": {
      label: "Huduma ya msingi",
      shortLabel: "Huduma ya msingi",
    },
    "community-health": {
      label: "Vituo vya afya vya jamii",
      shortLabel: "Afya ya jamii",
    },
    "mental-health": {
      label: "Afya ya akili na msaada wa dharura",
      shortLabel: "Afya ya akili",
    },
    "public-health": { label: "Afya ya umma", shortLabel: "Afya ya umma" },
    "labs-imaging": {
      label: "Maabara na picha za mwili",
      shortLabel: "Maabara na picha",
    },
    pharmacies: {
      label: "Dawa na maduka ya dawa",
      shortLabel: "Maduka ya dawa",
    },
    "allied-community": {
      label: "Huduma saidizi na za jamii",
      shortLabel: "Huduma saidizi",
    },
    "navigation-support": {
      label: "Msaada wa uelekezi na bima",
      shortLabel: "Uelekezi",
    },
  },
  serviceCard: {
    whenToUse: "Wakati wa kutumia:",
    accessLabel: "Upatikanaji",
    eligibilityLabel: "Sifa za kustahili",
    eligibilityFallback:
      "Inapatikana kwa umma kwa ujumla isipokuwa chanzo rasmi kiseme vinginevyo.",
    hoursLabel: "Saa za kazi",
    phoneLabel: "Simu",
    trustDetails: "Maelezo ya uaminifu na chanzo",
    lastReview: "Ukaguzi wa mwisho:",
    officialSource: "Chanzo rasmi",
    call: "Piga simu",
    officialWebsite: "Tovuti rasmi",
    directions: "Maelekezo ya njia",
    viewDetails: "Angalia maelezo",
  },
  serviceDetail: {
    backToServices: "Rudi kwenye huduma za karibu",
    whenToUseTitle: "Wakati wa kutumia huduma hii",
    eligibilityTitle: "Sifa za kustahili na upatikanaji",
    eligibilityFallback:
      "Angalia chanzo rasmi ikiwa huna uhakika kama huduma hii iko wazi kwako.",
    whatToBringTitle: "Cha kubeba",
    contactTitle: "Mawasiliano na hatua",
    callNow: "Piga simu sasa",
    officialWebsite: "Tovuti rasmi",
    directions: "Maelekezo ya njia",
    trustTitle: "Uaminifu na chanzo",
    lastReview: "Ukaguzi wa mwisho:",
    viewOfficialSource: "Angalia chanzo rasmi",
  },
  verification: {
    verified: {
      label: "Imethibitishwa dhidi ya chanzo rasmi",
      shortLabel: "Imethibitishwa",
      description:
        "Maelezo makuu yalikaguliwa dhidi ya chanzo rasmi katika kipindi cha hivi karibuni cha ukaguzi.",
    },
    "partially-verified": {
      label: "Chanzo rasmi kimeunganishwa",
      shortLabel: "Kiungo rasmi",
      description:
        "Chanzo rasmi kimeunganishwa, lakini maelezo moja au zaidi yanaweza kubadilika mara kwa mara na yanapaswa kuthibitishwa kabla ya kwenda.",
    },
    "community-reported": {
      label: "Imeripotiwa na jamii",
      shortLabel: "Ripoti ya jamii",
      description:
        "Taarifa hii ilitoka kwa ripoti za jamii na bado inahitaji uthibitisho huru.",
    },
    "needs-recheck": {
      label: "Inahitaji ukaguzi upya",
      shortLabel: "Inahitaji ukaguzi upya",
      description:
        "Taarifa hii ya huduma inabaki kuonekana kwa sababu bado inaweza kusaidia, lakini maelezo muhimu yanaweza kuwa yamepitwa na wakati. Thibitisha kabla ya kuitegemea.",
    },
  },
  feedback: {
    badge: "Ripoti taarifa zilizopitwa na wakati",
    title: "Tusaidie kuweka mwongozo huu sahihi",
    body: "Hii hutuma barua pepe iliyojazwa awali yenye muktadha wa ukurasa au huduma. Usijumuishe taarifa binafsi za matibabu.",
    issueTypeLabel: "Aina ya tatizo",
    issueTypes: {
      "outdated hours": "Saa za kazi zilizopitwa na wakati",
      "wrong phone or website": "Simu au tovuti isiyo sahihi",
      "eligibility or access issue":
        "Tatizo la sifa za kustahili au upatikanaji",
      "translation or accessibility problem": "Tatizo la tafsiri au ufikivu",
      "missing service or content": "Huduma au maudhui yanayokosekana",
      other: "Nyingine",
    },
    detailsLabel: "Tunapaswa kukagua nini?",
    detailsPlaceholder:
      "Mfano: namba ya simu imebadilika, kliniki sasa inapokea kwa miadi tu, au kiungo hakifanyi kazi.",
    contactLabel: "Mawasiliano (hiari)",
    contactPlaceholder: "Anwani ya barua pepe ikiwa unataka jibu",
    openEmail: "Fungua barua pepe ya ripoti",
    copyText: "Nakili maandishi ya ripoti",
    thanks:
      "Asante. Ripoti zinatusaidia kuweka kipaumbele kwa kurasa zilizopitwa na wakati, viungo visivyofanya kazi, na taarifa za huduma zinazohitaji ukaguzi wa eneo.",
    toastEmailTitle: "Rasimu ya barua pepe imefunguliwa",
    toastEmailBody: "Ripoti yako inajumuisha muktadha wa ukurasa au huduma.",
    toastCopyTitle: "Muhtasari wa tatizo umenakiliwa",
    toastCopyBody:
      "Unaweza kuubandika kwenye programu yako ya barua pepe ikihitajika.",
  },
  footer: {
    description:
      "Mwongozo wa lugha rahisi wa kuelekeza huduma za afya kwa Kingston, Ontario. Tovuti hii haitoi ushauri wa kimatibabu wala muda wa kusubiri wa papo hapo. Daima thibitisha maelezo yanayobadilika haraka na chanzo rasmi kabla ya kwenda.",
    trustModelTitle: "Mfumo wa uaminifu",
    trustModelBody:
      "Tunaonyesha viungo vya vyanzo rasmi, tarehe za ukaguzi, na huduma ambazo bado zinahitaji ukaguzi upya. Ikiwa jambo linaonekana si sahihi, liripoti kutoka kwenye ukurasa au huduma husika.",
    beforeYouGo: {
      title: "Kabla ya kwenda",
      body: "Angalia saa rasmi za kazi, kama unahitaji miadi au rufaa, na hati gani za kubeba.",
    },
    languageHelp: {
      title: "Msaada wa lugha",
      body: "Soma mwongozo huu kwa lugha yako kwa kutumia menyu ya Lugha. Omba mkalimani kwa mazungumzo ya kimatibabu wakati usahihi ni muhimu.",
    },
    privacy: {
      title: "Faragha",
      body: "Tovuti hii hutumia kumbukumbu za maboresho zinazohifadhiwa kwenye kivinjari chako kwa kuzingatia faragha. Haitumi takwimu binafsi kwenye seva ya mbali.",
    },
    copyrightSuffix: "Rasilimali ya taarifa za jamii kwa Kingston, Ontario.",
    disclaimer: "Kanusho",
    privacyLink: "Faragha",
    sourcesLink: "Vyanzo",
    reportLink: "Ripoti taarifa zilizopitwa na wakati",
  },
  notFound: {
    seoTitle: "Ukurasa haukupatikana",
    seoDescription:
      "Ukurasa ulioomba haukupatikana. Anza na msaada wa haraka, misingi kwa wageni wapya, huduma za karibu, au maswali ya kawaida (FAQ).",
    badge: "404",
    title: "Hatukuweza kupata ukurasa huo",
    body: "Ikiwa unajaribu kupata huduma haraka, anza na mwongozo wa haraka au tafuta orodha ya huduma za Kingston.",
    startHere: "Anza Hapa",
    needHelpNow: "Unahitaji Msaada Sasa",
    localServices: "Huduma za Karibu",
    faq: "Maswali ya Kawaida (FAQ)",
  },
};

const homePage: PageContent = {
  title: "Mwongozo wa Kuelekeza Huduma za Afya Kingston",
  description:
    "Mwongozo wa lugha rahisi, unaowalenga wageni wapya kwanza, wa kupata huduma za afya Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Anza Hapa",
  description:
    "Wewe ni mgeni Kingston au mgeni katika huduma za afya za Ontario? Anza hapa kujifunza jinsi mfumo unavyofanya kazi na cha kufanya kwanza.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Huduma za afya Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Muhtasari wa jinsi huduma zinazolipiwa zinavyofanya kazi Ontario.",
    },
    {
      title: "Ontario: Omba OHIP na upate kadi ya afya",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Taarifa rasmi za maombi ya OHIP na sifa za kustahili.",
    },
    {
      title:
        "Ontario: Tafuta daktari wa familia au muuguzi mtaalamu (nurse practitioner)",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Mwongozo wa Health Care Connect na upatikanaji wa huduma ya msingi.",
    },
    {
      title: "Canada: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Taarifa za bima ya shirikisho kwa wakimbizi na waombaji ukimbizi wanaostahili.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Jinsi huduma za afya zinavyofanya kazi Ontario",
      type: "default",
      content:
        "Huduma za afya za Ontario zimepangwa kuzunguka **huduma ya msingi**. Huduma ya msingi inamaanisha mahali unapoanzia kwa kawaida kwa mahitaji ya kiafya ya kawaida, magonjwa yanayoendelea, maagizo ya dawa, rufaa, na kinga. Mtoa huduma wako wa msingi anaweza kuwa daktari wa familia, muuguzi mtaalamu (nurse practitioner), timu ya kituo cha afya cha jamii, au kliniki ya afya ya wanafunzi ikiwa unastahili.\n\n**Rufaa** ni pale mtaalamu mmoja anapoomba huduma au mtaalamu mwingine akuone. **Fomu ya vipimo (requisition)** ni fomu inayoiambia maabara au kliniki ya picha za mwili kipimo gani unahitaji.\n\nHuhitaji kuelewa kila sehemu ya mfumo siku ya kwanza. Hatua muhimu zaidi ni: jifunze bima yako, jua pa kwenda kwa matatizo ya haraka, na panga huduma ya kawaida ikiwa huna mtoa huduma tayari.",
    },
    {
      id: "first-decisions",
      title: "Maamuzi ya kwanza",
      type: "grid",
      gridItems: [
        {
          title: "Huenda nahitaji msaada wa haraka",
          content:
            "Anza na mwongozo wa dharura dhidi ya huduma ya haraka ikiwa una tatizo la ghafla leo au usiku huu.",
          icon: "alert",
          link: { text: "Unahitaji Msaada Sasa", url: "/need-help-now" },
        },
        {
          title: "Sina daktari wa familia",
          content:
            "Jifunze jinsi madaktari wa familia, wauguzi wataalamu, vituo vya afya vya jamii, kliniki za bila miadi, na kliniki za wanafunzi zinavyoshikamana.",
          icon: "stethoscope",
          link: { text: "Tafuta Huduma ya Msingi", url: "/get-a-family-doctor" },
        },
        {
          title: "Nahitaji kuelewa kinacholipiwa",
          content:
            "Soma kuhusu OHIP, IFHP, bima ya binafsi, mipango ya wanafunzi, malipo ya dawa, na gharama za kawaida za mfukoni.",
          icon: "shield",
          link: { text: "Gharama na Bima", url: "/costs-and-coverage" },
        },
        {
          title: "Nahitaji msaada wa lugha",
          content:
            "Soma mwongozo huu kwa lugha 33 kwa kutumia menyu ya Lugha, na uulize kuhusu msaada wa mkalimani kwa mazungumzo ya kimatibabu na ridhaa.",
          icon: "info",
          link: { text: "Ufikivu na lugha", url: "/about#accessibility" },
        },
        {
          title: "Nahitaji vipimo vya damu, picha za mwili, au kujaza tena dawa",
          content:
            "Tumia orodha ya huduma za karibu kupata hatua ya vitendo inayofuata baada ya ziara.",
          icon: "file",
          link: { text: "Tafuta Huduma za Karibu", url: "/local-services" },
        },
        {
          title: "Sina uhakika pa kuanzia",
          content:
            "Piga Health811 kupata ushauri wa muuguzi ikiwa huna uhakika jinsi hali yako ilivyo ya haraka.",
          icon: "clock",
          link: { text: "Health811 na mwongozo wa haraka", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Hatua nzuri za kwanza katika wiki yako ya kwanza",
      type: "steps",
      items: [
        "Jifunze bima yako: Soma yale ambayo OHIP, IFHP, bima ya binafsi, na mipango ya wanafunzi kwa kawaida hulipia. Ikiwa unaweza kustahili OHIP, omba haraka iwezekanavyo.",
        "Chagua mpango wako wa dharura: Jua wakati wa kupiga 911, wakati wa kuanza na Health811, na mahali pa kupata huduma ya haraka au ya siku hiyo hiyo Kingston.",
        "Panga huduma ya kawaida: Ikiwa huna mtoa huduma wa kawaida, jifunze chaguo zako za madaktari wa familia, wauguzi wataalamu, vituo vya afya vya jamii, kliniki za wanafunzi, kliniki za bila miadi, na huduma za mtandaoni.",
        "Weka taarifa zako za afya pamoja: Hifadhi kadi yako ya afya au karatasi za IFHP, orodha ya dawa, rekodi ya chanjo, na nakala za fomu za vipimo au rufaa zozote.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Ikiwa huna OHIP bado",
      type: "callout",
      content:
        "Usisubiri hadi uugue ndipo ujifunze njia yako ya bima. Ikiwa unastahili OHIP, omba mapema. Ikiwa unalipiwa kupitia IFHP au mpango wa shule au wa binafsi, weka taarifa hiyo nawe. Ikiwa huna bima, uliza kuhusu ada kabla ya ziara na utafute huduma za jamii au zenye vikwazo vichache inapofaa.",
      link: { text: "Soma kuhusu bima", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Weka vitu hivi tayari",
      type: "checklist",
      items: [
        "Kadi yako ya afya, karatasi za IFHP, au taarifa za bima",
        "Orodha ya dawa, hata kama unatumia dawa chache tu",
        "Jina na namba ya simu ya kliniki au mtoa huduma wako wa mwisho, ikiwa unaye",
        "Fomu za vipimo, rufaa, karatasi za kuruhusiwa hospitalini, au maelekezo ya vipimo ya hivi karibuni",
        "Maswali unayotaka kuuliza kwa lugha rahisi",
        "Mahitaji ya mkalimani yameandikwa ili ukumbuke kuomba",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Unahitaji Msaada Sasa?",
  description:
    "Tumia ukurasa huu unapokuwa na tatizo la kiafya leo au usiku huu na huna uhakika pa kuanzia.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Pata ushauri wa kimatibabu kutoka Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Huduma rasmi ya ushauri wa muuguzi, saa 24/7.",
    },
    {
      title: "9-8-8: Simu ya Dharura ya Kujiua (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Simu rasmi ya kitaifa ya dharura ya kujiua. Piga au tuma ujumbe 9-8-8, bila malipo, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Mtandao rasmi wa hospitali kwa taarifa za dharura, huduma ya haraka, na picha za mwili.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Shirika rasmi la eneo la afya ya akili na msaada wa dharura.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Dharura au haraka?",
      type: "comparison",
      comparison: {
        left: {
          title: "Nenda kwenye dharura mara moja kwa matatizo kama vile:",
          items: [
            "Maumivu ya kifua, shida kubwa ya kupumua, au dalili za kiharusi",
            "Kutokwa damu nyingi, jeraha kubwa, au kupoteza fahamu",
            "Kuchanganyikiwa kwa ghafla, degedege (kifafa), au mzio mkali",
            "Dharura ya usalama ambapo kusubiri kunaweza kuhatarisha maisha au kiungo cha mwili",
          ],
        },
        right: {
          title:
            "Anza na huduma ya haraka, Health811, au kliniki ya siku hiyo hiyo kwa matatizo kama vile:",
          items: [
            "Kuteguka, michubuko midogo, vipele, maumivu ya sikio, au homa bila dalili za hatari za dharura",
            "Matatizo ya kujaza tena dawa ambayo hayawezi kusubiri miadi ya kawaida",
            "Maswali kuhusu kama unahitaji huduma ya haraka usiku huu",
            "Tatizo linalohisi kuwa la haraka lakini si wazi kuwa linahatarisha maisha",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Hali za kawaida nje ya saa za kazi",
      type: "table",
      columns: ["Hali", "Hatua nzuri ya kwanza", "Cha kukumbuka"],
      rows: [
        {
          cells: [
            "Sina uhakika jinsi hili lilivyo la haraka",
            "Piga Health811",
            "Muuguzi anaweza kukusaidia kuamua kama ubaki nyumbani, utafute huduma ya haraka, au uende kwenye dharura.",
          ],
        },
        {
          cells: [
            "Daktari wangu amefunga na nahitaji ushauri usiku huu",
            "Health811 au mwongozo wa huduma ya haraka",
            "Usidhanie dharura ndiyo chaguo lako pekee ikiwa hakuna dalili za hatari za dharura.",
          ],
        },
        {
          cells: [
            "Nahitaji huduma kwa mtoto wangu",
            "Tumia dalili zilezile za hatari za dharura, kisha tafuta huduma ya siku hiyo hiyo au piga Health811 ikiwa huna uhakika",
            "Beba kadi ya afya ya mtoto, orodha ya dawa, na mfuatano wa dalili ikiwezekana.",
          ],
        },
        {
          cells: [
            "Nahitaji msaada wa afya ya akili usiku huu",
            "Piga au tuma ujumbe 9-8-8 (Suicide Crisis Helpline), au piga simu ya dharura ya AMHS-KFLA inayofanya kazi 24/7",
            "Ikiwa kuna hatari ya papo hapo kwa usalama, piga 911.",
          ],
        },
      ],
      caption:
        "Jedwali hili ni mwongozo wa jumla tu. Ikiwa mtu anaweza kuwa katika hatari ya papo hapo, piga 911.",
    },
    {
      id: "kingston-start-points",
      title: "Mahali pa kuanzia Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Idara ya Dharura",
          content:
            "Tumia huduma ya dharura kwa matatizo yanayohatarisha maisha au yanayoweza kuhatarisha maisha.",
          icon: "alert",
          link: {
            text: "Orodha za dharura na za haraka",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Kituo cha Huduma ya Haraka",
          content:
            "Kinafaa kwa matatizo mengi ya siku hiyo hiyo ambayo hayawezi kusubiri lakini si dharura wazi.",
          icon: "clock",
          link: {
            text: "Huduma ya haraka na ya siku hiyo hiyo",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Ushauri wa muuguzi kwa simu au mtandaoni ikiwa huna uhakika pa kwenda. Msaada wa simu unapatikana kwa lugha nyingi.",
          icon: "info",
          link: { text: "Taarifa ya Health811", url: "/local-services/health811" },
        },
        {
          title: "Msaada wa dharura wa afya ya akili",
          content:
            "Piga au tuma ujumbe 9-8-8 (Suicide Crisis Helpline) wakati wowote, au tumia msaada wa dharura wa eneo hili kama simu ya dharura ya AMHS-KFLA inayofanya kazi 24/7.",
          icon: "heart",
          link: { text: "Orodha za afya ya akili", url: "/local-services?category=mental-health" },
        },
        {
          title: "Msaada baada ya ukatili wa kingono",
          content:
            "Tumia msaada maalumu wa dharura ikiwa unahitaji msaada wa kihisia wa papo hapo, utetezi, au kupanga usalama.",
          icon: "shield",
          link: {
            text: "Orodha za msaada",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Chaguo za haraka kwa wanafunzi",
          content:
            "Ikiwa wewe ni mwanafunzi, angalia kama huduma ya afya ya chuo chako ndiyo kituo bora cha kwanza kwa mahitaji yasiyo ya dharura.",
          icon: "stethoscope",
          link: { text: "Orodha za afya za wanafunzi", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Ikiwa bado huna uhakika",
      type: "callout",
      content:
        "Wakati tatizo si wazi kuwa linahatarisha maisha lakini una wasiwasi wa kusubiri, anza na Health811. Ikiwa mtu anaweza kuwa si salama, anaweza kuwa anazidi kuwa mbaya haraka, au huwezi kupata msaada sahihi kwa wakati, tumia huduma za dharura.",
      link: { text: "Piga Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Beba vitu hivi ukiweza",
      type: "checklist",
      items: [
        "Kadi ya afya, karatasi za IFHP, au kadi yoyote ya bima uliyo nayo",
        "Orodha ya dawa au picha za chupa za dawa",
        "Muda dalili zilipoanza na chochote kilichozifanya kuwa mbaya zaidi",
        "Mahitaji ya mkalimani yameandikwa ikiwa unaweza kuwa na msongo mkubwa kiasi cha kusahau baadaye",
        "Chaja ya simu na mtu wa kukusindikiza ikiwa hilo linakusaidia",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Kupata Huduma ya Msingi",
  description:
    "Jifunze njia mbalimbali za kupata huduma za afya za kawaida Kingston ikiwa huna mtoa huduma tayari.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title:
        "Ontario: Tafuta daktari wa familia au muuguzi mtaalamu (nurse practitioner)",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Mwongozo rasmi wa Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Taarifa rasmi za huduma za vituo vya afya vya jamii vya eneo hili.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Taarifa rasmi za afya ya wanafunzi kwa wanafunzi wa Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Taarifa rasmi za afya ya wanafunzi kwa wanafunzi wa St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Maana ya huduma ya msingi",
      type: "default",
      content:
        "Huduma ya msingi ni mahali unapoenda kwanza kwa kawaida kwa mahitaji ya kiafya ya kawaida. Hii inajumuisha uchunguzi wa afya, kuhuisha dawa, huduma za magonjwa sugu, rufaa, huduma za kinga, na ufuatiliaji baada ya matatizo ya haraka.\n\nKingston, njia yako ya kawaida ya huduma ya msingi inaweza kuhusisha daktari wa familia, muuguzi mtaalamu, kituo cha afya cha jamii, kliniki ya chuoni, au mchanganyiko wa chaguo za muda unaposubiri huduma thabiti zaidi.",
    },
    {
      id: "access-matrix",
      title: "Njia za kupata huduma ya msingi",
      type: "table",
      columns: ["Njia", "Inafaa zaidi kwa", "Nani anaweza kuitumia", "Jinsi ya kuanza"],
      rows: [
        {
          cells: [
            "Daktari wa familia au muuguzi mtaalamu",
            "Huduma ya kawaida inayoendelea na upangaji wa afya wa muda mrefu",
            "Wagonjwa wanaoweza kusajiliwa kwa mtoa huduma",
            "Tumia Health Care Connect na ufuatilie nafasi zinazofunguka katika eneo hili",
          ],
        },
        {
          cells: [
            "Kituo cha afya cha jamii",
            "Huduma za kijamii, msaada wenye vikwazo vichache, na baadhi ya huduma kwa wageni wapya au wenye mahitaji magumu",
            "Kustahili kunategemea programu na hali ya upokeaji",
            "Wasiliana na shirika moja kwa moja na uulize kuhusu upokeaji",
          ],
        },
        {
          cells: [
            "Huduma ya afya ya wanafunzi",
            "Upatikanaji wa haraka zaidi kwa wanafunzi waliosajiliwa",
            "Wanafunzi tu wanaostahili kupitia shule",
            "Tumia huduma ya afya au ustawi ya chuo chako",
          ],
        },
        {
          cells: [
            "Kliniki ya bila miadi au huduma ya haraka ya siku hiyo hiyo",
            "Huduma ya muda mfupi unaposubiri au mtoa huduma wako wa kawaida hapatikani",
            "Umma kwa ujumla, kulingana na sheria za upokeaji za kila siku",
            "Angalia upatikanaji wa sasa kabla ya kwenda",
          ],
        },
        {
          cells: [
            "Huduma ya msingi ya mtandaoni",
            "Baadhi ya masuala ya kujaza tena dawa, ushauri, na ya kawaida",
            "Inatofautiana kulingana na mtoa huduma na bima",
            "Angalia kile mtoa huduma anachoweza na asichoweza kusimamia kwa usalama mtandaoni",
          ],
        },
      ],
      caption:
        "Njia bora inategemea sifa zako za kustahili, uharaka, na kama unahitaji huduma ya muda mfupi au inayoendelea.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Ikiwa huna mtoa huduma wa kawaida",
      type: "steps",
      items: [
        "Jisajili kupitia njia rasmi ya mkoa: Tumia Health Care Connect ikiwa huna daktari wa familia au muuguzi mtaalamu.",
        "Angalia kama unastahili chaguo za chuoni au za afya ya jamii: Wanafunzi waanze na kliniki ya shule yao. Baadhi ya huduma za afya za jamii zina vipaumbele maalumu vya upokeaji.",
        "Jenga mpango salama wa muda: Jua ni huduma zipi za bila miadi, za haraka, za mtandaoni, za duka la dawa, na za afya ya akili unazoweza kutumia unaposubiri.",
        "Tunza rekodi zako mwenyewe: Hifadhi orodha za dawa, majibu ya vipimo, rufaa, na majina ya wataalamu uliowaona.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Cha kufanya unaposubiri",
      type: "checklist",
      items: [
        "Tumia huduma za bila miadi, za haraka, au za mtandaoni kwa mahitaji ya muda mfupi inapofaa",
        "Uliza duka la dawa msaada gani wa kujaza tena dawa au huduma ya magonjwa madogo inaweza kupatikana",
        "Weka orodha moja ya dawa iliyosasishwa na uibebe kila ziara",
        "Beba nakala za majibu muhimu au karatasi za kuruhusiwa wakati huduma yako imegawanyika",
        "Tumia kliniki ileile kwa ufuatiliaji inapowezekana ili huduma yako iwe na mfululizo zaidi",
      ],
    },
    {
      id: "next-best-option",
      title: "Ikiwa hitaji lako ni la haraka lakini si dharura",
      type: "callout",
      content:
        "Kutokuwa na daktari wa familia hakumaanishi unapaswa kuchelewesha huduma muhimu. Tumia chaguo sahihi la muda mfupi kwa tatizo lililo mbele yako, kisha panga mwendelezo wa huduma baada ya tatizo la haraka kutibiwa.",
      link: { text: "Tafuta chaguo za huduma ya msingi", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Gharama na Bima",
  description:
    "Mwongozo wa bima kwa lugha rahisi kuhusu OHIP, IFHP, Canadian Dental Care Plan, mipango ya wanafunzi au ya binafsi, na gharama za kawaida za mfukoni.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Omba OHIP na upate kadi ya afya",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Mwongozo rasmi wa OHIP.",
    },
    {
      title: "Canada: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Taarifa rasmi za bima ya IFHP.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Mwongozo rasmi wa mkoa wa malipo ya dawa.",
    },
    {
      title: "Ontario: Pata msaada kwa gharama kubwa za dawa",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Mwongozo rasmi wa Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Taarifa rasmi za mpango wa shirikisho wa bima ya meno na sifa za kustahili.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Misingi ya bima",
      type: "default",
      content:
        "Bima Ontario inategemea hadhi yako ya kisheria, umri, kipato, kustahili kwa programu, na kama una mpango wa bima wa shule au wa binafsi.\n\nHuduma nyingi za daktari na hospitali zinazohitajika kimatibabu zinalipiwa kwa wagonjwa wanaostahili OHIP. Hiyo **haimaanishi** kila kitu ni bure. Dawa, huduma za meno, huduma za macho, fomu, vyeti vya ugonjwa, na huduma nyingi saidizi mara nyingi zinahitaji bima tofauti au malipo ya mfukoni.\n\nHabari njema ikiwa wewe ni mgeni: **hakuna kipindi cha kusubiri kwa OHIP**. Ikiwa unastahili, unaweza kuomba mara tu unapofika Ontario, na bima huanza mara ombi lako linapokubaliwa. Usisubiri hadi uugue ndipo uombe.",
    },
    {
      id: "coverage-matrix",
      title: "Muhtasari wa njia za bima",
      type: "table",
      columns: [
        "Aina ya bima",
        "Kwa kawaida husaidia na",
        "Kinachoweza kutolipiwa bado",
        "Cha kufanya baadaye",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Huduma nyingi za daktari na hospitali zinazohitajika kimatibabu",
            "Dawa nyingi, huduma za meno, huduma za macho, na fomu",
            "Omba ikiwa unastahili na uhakikishe kadi yako iko hai",
          ],
        },
        {
          cells: [
            "IFHP",
            "Bima kwa wakimbizi na waombaji ukimbizi wanaostahili kulingana na programu ya shirikisho",
            "Maelezo hutofautiana kulingana na kundi na huduma",
            "Angalia mwongozo rasmi wa IFHP na uulize kliniki au duka la dawa kama wanaikubali",
          ],
        },
        {
          cells: [
            "Bima ya shule au ya binafsi",
            "Mara nyingi husaidia na dawa, ushauri nasaha, meno, macho, na huduma saidizi",
            "Vikomo vya bima, malipo ya pamoja (co-pay), na sheria za mtandao wa watoa huduma hutofautiana",
            "Soma kitabu cha mpango kabla ya kudhani huduma imelipiwa",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Bima ya meno kwa wakazi wanaostahili wasio na bima ya binafsi ya meno na wenye kipato cha familia kilichorekebishwa chini ya $90,000",
            "Si kila utaratibu unalipiwa, na malipo ya pamoja yanaweza kutumika kulingana na kipato",
            "Angalia kustahili na uombe kupitia ukurasa rasmi wa CDCP wa Serikali ya Canada",
          ],
        },
        {
          cells: [
            "Hakuna bima hai",
            "Bado unaweza kupata baadhi ya huduma, lakini ada zinaweza kutumika",
            "Gharama zinaweza kuwa kubwa kwa ziara, vipimo, au dawa",
            "Uliza kuhusu ada kabla ya ziara na utafute chaguo za jamii inapofaa",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Yale ambayo mara nyingi hayalipiwi kikamilifu",
      type: "checklist",
      items: [
        "Dawa nyingi za maagizo isipokuwa unastahili programu ya umma au una mpango mwingine",
        "Huduma za meno, isipokuwa unastahili Canadian Dental Care Plan, Healthy Smiles Ontario, programu ya meno ya jamii, au mpango wa manufaa",
        "Huduma za macho nje ya njia maalumu za kustahili",
        "Tiba ya viungo (physiotherapy), ushauri nasaha, masaji, na huduma nyingine saidizi isipokuwa programu au mpango unazilipia",
        "Fomu, barua, ada za kukosa miadi, na malipo mengine mengi ya kiutawala",
      ],
    },
    {
      id: "drug-coverage",
      title: "Njia za malipo ya dawa",
      type: "default",
      content:
        "Malipo ya dawa mara nyingi ndiyo mahali wageni wapya wanaposhangazwa. Ziara ya daktari inaweza kulipiwa, lakini dawa bado inaweza kugharimu pesa.\n\nProgramu za umma za dawa zinaweza kusaidia kulingana na umri, kipato, na kustahili. **Ontario Drug Benefit** hulipia dawa nyingi kwa watu wenye umri wa miaka 65 na zaidi na watu walio katika programu fulani, na **OHIP+** hulipia maagizo mengi ya dawa kwa watu wenye umri wa miaka 24 na chini wasio na mpango wa binafsi. Ontario pia ina **Trillium Drug Program** kwa baadhi ya watu wenye gharama kubwa za dawa ikilinganishwa na kipato cha kaya. Ikiwa una mpango wa shule au wa binafsi, angalia kama unashirikiana na bima ya umma au unachukua nafasi yake.",
    },
    {
      id: "coverage-scenarios",
      title: "Maswali ya kawaida ya bima",
      type: "faq",
      faqs: [
        {
          question: "Sina OHIP bado. Je, bado naweza kupata huduma?",
          answer:
            "Ndiyo, lakini ada zinaweza kutumika na njia bora inategemea hadhi yako na uharaka. Uliza kuhusu gharama kabla ya huduma isiyo ya dharura inapowezekana, na uangalie kustahili kwa IFHP au mpango wa shule au wa binafsi ikiwa inakuhusu.",
        },
        {
          question: "Mimi ni mwanafunzi wa kimataifa. Je, OHIP ndiyo chaguo langu pekee?",
          answer:
            "Si mara zote. Wanafunzi wengi hutegemea mpango wa bima wa shule au wa binafsi badala ya OHIP. Tumia hati rasmi za mpango wa shule yako na huduma za afya za wanafunzi kuthibitisha kinacholipiwa.",
        },
        {
          question: "Je, dawa yangu itakuwa bure ikiwa miadi yangu ililipiwa?",
          answer:
            "Si lazima. Malipo ya miadi na malipo ya dawa mara nyingi ni tofauti.",
        },
        {
          question: "Je, huduma za meno zinalipiwa?",
          answer:
            "Huduma za meno ziko tofauti na OHIP kwa watu wazima wengi. Canadian Dental Care Plan ya shirikisho sasa inalipia wakazi wengi wasio na bima ya binafsi ya meno na wenye kipato cha familia kilichorekebishwa chini ya $90,000 — kwa kawaida unahitaji kuwa umewasilisha fomu za kodi za Canada ili kustahili. Watoto wa familia zenye kipato cha chini wanaweza kustahili Healthy Smiles Ontario, na Kingston ina kliniki ya meno ya jamii kwa watu walio katika programu maalumu.",
        },
        {
          question: "Ninajuaje kama huduma ni ya umma, ya jamii, au ya binafsi?",
          answer:
            "Tumia vichujio vya orodha na uangalie maelezo ya huduma. Ikiwa huna uhakika, wasiliana na huduma kabla ya kuweka miadi.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Ziara Yako ya Huduma za Afya",
  description:
    "Cha kubeba, jinsi ya kuuliza maswali, na jinsi ya kuwasiliana kwa usalama wakati wa ziara ya huduma za afya.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Huduma za afya Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Mwongozo wa jumla wa mfumo.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Cha kubeba",
      type: "checklist",
      items: [
        "Kadi yako ya afya, karatasi za IFHP, au taarifa nyingine za bima",
        "Orodha kamili ya dawa, ikiwa ni pamoja na vitamini na dawa zinazonunuliwa bila agizo",
        "Majina ya dalili, zilipoanza, na kilichobadilika",
        "Maswali unayotaka yajibiwe kabla ya kuondoka",
        "Fomu za vipimo, rufaa, karatasi za kuruhusiwa, au majibu ya vipimo ya hivi karibuni",
        "Mahitaji ya mkalimani yameandikwa ili ukumbuke kuomba",
      ],
    },
    {
      id: "during-the-visit",
      title: "Wakati wa ziara",
      type: "steps",
      items: [
        "Anza na tatizo lako kuu: Miadi mingi ni mifupi, kwa hiyo anza na jambo linalokuhusu zaidi leo.",
        "Tumia lugha rahisi: Ni sawa kusema, 'Sielewi neno hilo' au 'Unaweza kulieleza kwa njia rahisi zaidi?'",
        "Rudia mpango kwa sauti: Kabla ya kuondoka, sema hatua zinazofuata kwa sauti ili ujue kama unahitaji kipimo, rufaa, kujaza tena dawa, au miadi ya ufuatiliaji.",
        "Uliza kitakachotokea hali ikizidi kuwa mbaya: Unapaswa kujua wakati wa kupiga simu tena, wakati wa kutumia huduma ya haraka, na wakati wa kutumia huduma ya dharura.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Msaada wa mkalimani na mawasiliano",
      type: "default",
      content:
        "Ikiwa unahitaji msaada wa lugha, omba mapema. Usisubiri hadi mwisho wa miadi. Unaweza kusoma tovuti hii kwa lugha kadhaa kwa kutumia menyu ya Lugha, lakini tafsiri ya tovuti haipaswi kuchukua nafasi ya msaada wa mkalimani kwa maamuzi ya matibabu, maelekezo ya dawa, au ridhaa.\n\nUnaweza kusema: **'Nahitaji mkalimani, tafadhali.'** Health811 (piga 811) pia inatoa msaada wa simu kwa lugha nyingi. Ikiwa mtu wa kukusaidia anakuja nawe, kumbuka kwamba mwanafamilia si mara zote mtu bora au salama zaidi wa kutafsiri taarifa za kimatibabu ngumu au nyeti.",
    },
    {
      id: "questions-to-ask",
      title: "Maswali yanayofaa kuuliza",
      type: "checklist",
      items: [
        "Unafikiri nini kinaendelea?",
        "Nifanye nini baadaye?",
        "Je, nahitaji kipimo, fomu ya vipimo, rufaa, au ziara ya ufuatiliaji?",
        "Nitarajie kupata majibu lini?",
        "Dalili gani za hatari zinamaanisha nipige simu tena au nipate msaada wa haraka?",
      ],
    },
    {
      id: "privacy",
      title: "Faragha na ridhaa",
      type: "default",
      content:
        "Taarifa zako za afya ni nyeti. Ikiwa huna uhakika nani ataona taarifa zako, uliza. Ikiwa huelewi fomu, mazungumzo ya ridhaa, au mpango wa matibabu, punguza kasi ya mchakato na uombe maelezo yaliyo wazi zaidi.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Baada ya Ziara",
  description:
    "Jifunze kinachotokea baada ya ziara, ikiwa ni pamoja na fomu za vipimo, majibu ya vipimo, rufaa, na wakati wa kupiga simu tena.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Taarifa za mfumo wa hospitali za eneo hili.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Taarifa za mchakato wa maabara za jamii na tovuti ya wagonjwa.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Kinachotokea mara nyingi baada ya ziara",
      type: "steps",
      items: [
        "Unaondoka na mpango: Huo unaweza kujumuisha dawa, fomu ya vipimo, rufaa, miadi ya ufuatiliaji, au maelekezo ya kuangalia dalili za hatari.",
        "Huenda ukahitaji kufanya hatua inayofuata mwenyewe: Kwa mfano, huenda ukahitaji kuweka miadi ya vipimo vya damu, picha za mwili, kuchukua dawa dukani, au ziara ya ufuatiliaji.",
        "Majibu kwa kawaida hurudi kwa mtaalamu aliyeyaagiza: Maabara au kituo cha picha huenda kisikueleze jibu papo hapo.",
        "Huenda usipigiwe simu kwa kila jibu la kawaida: Uliza mchakato wa ufuatiliaji wa kliniki ili ujue cha kutarajia.",
      ],
    },
    {
      id: "common-terms",
      title: "Maneno ya kawaida baada ya ziara",
      type: "table",
      columns: ["Neno", "Maana yake kwa lugha rahisi", "Unachofanya kwa kawaida baadaye"],
      rows: [
        {
          cells: [
            "Requisition (fomu ya vipimo)",
            "Fomu inayoiambia maabara au kliniki ya picha kipimo gani unahitaji",
            "Weka miadi au hudhuria kipimo na uhifadhi nakala ukiweza",
          ],
        },
        {
          cells: [
            "Rufaa (referral)",
            "Ombi kutoka kwa mtaalamu mmoja kwenda kwa huduma au mtaalamu mwingine",
            "Subiri kuwasiliana nawe, kisha piga simu tena ikiwa uliambiwa ufuatilie na hakuna kinachotokea",
          ],
        },
        {
          cells: [
            "Ufuatiliaji (follow-up)",
            "Ukaguzi baada ya matibabu, vipimo, au mabadiliko ya dalili",
            "Uliza lini na jinsi gani ufuatiliaji unapaswa kufanyika kabla ya kuondoka",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Wakati wa kupiga simu tena",
      type: "checklist",
      items: [
        "Huelewi fomu ya vipimo, rufaa, au maelekezo ya dawa",
        "Uliambiwa mtu atawasiliana nawe na hujasikia chochote ndani ya muda uliotarajiwa",
        "Dalili zako zinazidi kuwa mbaya au haziboreki jinsi ulivyoambiwa kutarajia",
        "Duka la dawa, maabara, au kituo cha picha kilikuambia kuna kitu kinakosekana kwenye makaratasi",
        "Unafikiri jibu huenda limekosekana au bado una wasiwasi",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Hali za kawaida",
      type: "faq",
      faqs: [
        {
          question: "Nahitaji vipimo vya damu baada ya ziara. Nifanye nini?",
          answer:
            "Angalia kama una fomu ya vipimo na kama maabara inahitaji kuweka miadi. Kisha tumia orodha kupata mahali pa maabara. Beba fomu ya vipimo na taarifa zako za bima.",
        },
        {
          question: "Sielewi fomu ya vipimo au fomu ya rufaa.",
          answer:
            "Piga simu kliniki iliyokupa na uwaombe waieleze kwa lugha rahisi. Ni jambo la kawaida kuuliza fomu ni ya nini, inapaswa kwenda wapi, na kama unahitaji kuweka miadi mwenyewe.",
        },
        {
          question: "Nani hufuatilia majibu ya vipimo?",
          answer:
            "Kwa kawaida ni mtaalamu aliyeagiza kipimo. Uliza ofisi ya mtaalamu huyo mchakato wao wa kawaida kwa majibu ya kawaida na yasiyo ya kawaida.",
        },
        {
          question: "Rufaa huchukua muda gani?",
          answer:
            "Muda wa rufaa hutofautiana sana. Uliza ni kusubiri kwa aina gani ni kwa kawaida kwa hali yako na cha kufanya ikiwa husikii chochote.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Hatua muhimu zinazofuata",
      type: "grid",
      gridItems: [
        {
          title: "Tafuta maabara na picha za mwili",
          content:
            "Tumia orodha kwa vipimo vya damu, X-ray, ultrasound, na taarifa za picha za mwili.",
          icon: "file",
          link: { text: "Maabara na picha za mwili", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Tafuta duka la dawa",
          content:
            "Tumia orodha kwa maduka ya dawa, msaada wa kujaza tena dawa, na msaada wa dawa.",
          icon: "shield",
          link: { text: "Maduka ya dawa", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Unahitaji kupanga huduma ya ufuatiliaji?",
          content:
            "Tumia ukurasa wa huduma ya msingi ikiwa hujui ufuatiliaji wa muda mrefu unapaswa kufanyika wapi.",
          icon: "stethoscope",
          link: { text: "Tafuta Huduma ya Msingi", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Dawa na Maduka ya Dawa",
  description:
    "Elewa maagizo ya dawa, kujaza tena dawa, msaada wa mfamasia, na jinsi ya kulipia dawa Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Kile wafamasia wanachoweza kufanya",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Taarifa rasmi za mkoa kuhusu wafamasia na maduka ya dawa.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Mwongozo rasmi wa mkoa wa malipo ya dawa.",
    },
    {
      title: "Ontario: Pata msaada kwa gharama kubwa za dawa",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Mwongozo rasmi wa Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Mambo ambayo mfamasia anaweza kusaidia",
      type: "default",
      content:
        "Wafamasia hufanya zaidi ya kutoa dawa. Wanaweza kueleza jinsi ya kutumia dawa kwa usalama, kuangalia mwingiliano wa dawa, na kupitia madhara yake.\n\nOntario, wafamasia pia wanaweza **kutathmini na kuandika dawa kwa magonjwa madogo 19 ya kawaida** — ikiwa ni pamoja na ugonjwa wa macho mekundu (pink eye), vidonda vya mdomoni vya virusi (cold sores), maambukizi ya njia ya mkojo (kwa wanawake), kuumwa na wadudu, na mzio wa msimu. Tathmini ni bure ukiwa na kadi ya afya ya Ontario, na orodha ya magonjwa inaweza kuendelea kuongezeka.\n\nDuka la dawa pia ni mojawapo ya mahali pazuri pa kuuliza maswali ya vitendo kama vile: **Je, kujaza tena dawa hii ni jambo la haraka? Je, kuna chaguo la bei nafuu zaidi? Nifanye nini ikiwa nimekosa dozi?**",
    },
    {
      id: "fill-a-prescription",
      title: "Jinsi ya kupata dawa kwa agizo",
      type: "steps",
      items: [
        "Pata agizo la dawa: Linaweza kuwa la karatasi, kutumwa kwa faksi, au kutumwa kielektroniki.",
        "Chagua duka la dawa: Kutumia duka moja la dawa mara kwa mara huwasaidia kugundua mwingiliano wa dawa na matatizo ya historia ya kujaza tena.",
        "Uliza kuhusu muda na gharama: Duka la dawa linaweza kukuambia dawa itakuwa tayari lini na kama mpango wako unailipia.",
        "Sikiliza ushauri wa mfamasia: Uliza dawa ni ya nini, jinsi ya kuitumia, na lini upige simu tena ikiwa haisaidii.",
      ],
    },
    {
      id: "refill-options",
      title: "Matatizo ya kujaza tena dawa na ya dawa",
      type: "table",
      columns: ["Hali", "Hatua nzuri ya kwanza", "Kwa nini"],
      rows: [
        {
          cells: [
            "Nahitaji kujaza tena dawa ya kawaida",
            "Anza na duka lako la dawa la kawaida au mtaalamu wako wa kawaida",
            "Wanaweza kukuambia kama kujaza tena, kuhuisha agizo, au miadi mpya inahitajika",
          ],
        },
        {
          cells: [
            "Daktari wangu hapatikani na dawa zinaweza kuniishia",
            "Uliza duka la dawa chaguo gani zinapatikana, kisha tumia huduma ya bila miadi, ya mtandaoni, au ya haraka ikihitajika",
            "Hatua salama zaidi inayofuata inategemea dawa na hali yako",
          ],
        },
        {
          cells: [
            "Sielewi jinsi ya kutumia dawa hii",
            "Omba mfamasia aieleze tena kwa lugha rahisi",
            "Hii ni sehemu ya matumizi salama ya dawa",
          ],
        },
        {
          cells: [
            "Dawa inagharimu sana",
            "Uliza kuhusu dawa mbadala za bei nafuu (generic), bima ya mpango wako, na programu za umma",
            "Gharama za dawa hutofautiana na bima mara nyingi iko tofauti na ziara yenyewe",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Njia ambazo dawa zinaweza kulipiwa",
      type: "checklist",
      items: [
        "Programu ya umma ya dawa, ikiwa unastahili",
        "Mpango wa bima wa shule au wa binafsi",
        "Mchanganyiko wa bima ya umma na ya binafsi",
        "Kutoka mfukoni ikiwa hakuna programu inayolipia dawa hiyo",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Unahitaji msaada wa duka la dawa la karibu?",
      type: "callout",
      content:
        "Tumia orodha kupata maduka ya dawa, msaada wa kujaza tena dawa, na chaguo za mtandaoni au za siku hiyo hiyo unapojaribu kutatua tatizo la dawa haraka.",
      link: { text: "Tafuta orodha za maduka ya dawa", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Msaada wa Afya ya Akili",
  description:
    "Afya ya akili ya eneo hili, ushauri nasaha, msaada wa vijana, na njia za dharura Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Simu ya Dharura ya Kujiua (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Simu rasmi ya kitaifa ya dharura ya kujiua. Piga au tuma ujumbe 9-8-8, bila malipo, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Taarifa rasmi za afya ya akili ya watu wazima na msaada wa dharura.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Simu rasmi ya Ontario ya msaada wa afya ya akili na uraibu.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Taarifa rasmi za afya ya akili ya watoto na vijana.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Ikiwa mtu anaweza kuwa si salama",
      type: "callout",
      content:
        "Ikiwa kuna hatari ya papo hapo kwa maisha au usalama, piga 911. Kwa mawazo ya kujiua au msongo mkubwa wa moyo, unaweza **kupiga au kutuma ujumbe 9-8-8** (Suicide Crisis Helpline) wakati wowote — ni bure, ya siri, na inapatikana 24/7 kwa Kiingereza na Kifaransa. Pia unaweza kupiga simu ya dharura ya AMHS-KFLA inayofanya kazi 24/7 kwa 613-544-4229. Usisubiri miadi ya kawaida.",
      link: { text: "Orodha za afya ya akili", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Aina za msaada",
      type: "grid",
      gridItems: [
        {
          title: "Msaada wa dharura (crisis)",
          content:
            "Tumia huu kwa dhiki ya papo hapo, wasiwasi wa usalama, au wakati kusubiri si salama.",
          icon: "alert",
        },
        {
          title: "Msaada wa haraka",
          content:
            "Tumia huu wakati hali ni mbaya na unahitaji msaada hivi karibuni, lakini si dharura ya papo hapo inayohatarisha maisha.",
          icon: "clock",
        },
        {
          title: "Ushauri nasaha wa kawaida",
          content:
            "Tumia huu kwa wasiwasi unaoendelea, sonona, msongo, huzuni ya kufiwa, matatizo ya mahusiano, au mabadiliko ya maisha.",
          icon: "heart",
        },
        {
          title: "Huduma za watoto na vijana",
          content:
            "Tumia huduma maalumu za afya ya akili ya vijana wakati anayehitaji huduma ni mtoto au kijana.",
          icon: "info",
        },
        {
          title: "Msaada wa chuoni",
          content:
            "Wanafunzi wanaweza kuhudumiwa vizuri zaidi kwa kuanza na njia za ustawi au ushauri nasaha za chuo chao.",
          icon: "stethoscope",
        },
        {
          title: "Msaada baada ya ukatili wa kingono",
          content:
            "Tumia msaada maalumu kwa dharura, ushauri nasaha, utetezi, na kupanga usalama baada ya ukatili wa kingono.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Pa kuanzia katika hali za kawaida",
      type: "table",
      columns: ["Hali", "Kituo bora cha kwanza", "Kwa nini"],
      rows: [
        {
          cells: [
            "Nahitaji msaada wa afya ya akili usiku huu",
            "Piga au tuma ujumbe 9-8-8, piga simu ya dharura ya AMHS-KFLA, au tumia huduma ya dharura ikiwa usalama uko hatarini",
            "Usisubiri miadi ya kawaida wakati hali inahisi si salama",
          ],
        },
        {
          cells: [
            "Nahitaji ushauri nasaha lakini niko salama sasa hivi",
            "Ushauri nasaha wa jamii, daktari wa familia, muuguzi mtaalamu, au misaada ya mpango wa binafsi",
            "Hizi zinaweza kusaidia na huduma inayoendelea na rufaa",
          ],
        },
        {
          cells: [
            "Nahitaji msaada kwa mtoto wangu",
            "Huduma za afya ya akili za watoto au vijana na, ikihitajika, mwongozo wa haraka",
            "Watoto na vijana mara nyingi wana njia tofauti",
          ],
        },
        {
          cells: [
            "Mimi ni mwanafunzi",
            "Afya ya chuoni au ushauri nasaha kwanza, isipokuwa hali si salama au ni kali",
            "Huduma za chuoni zinaweza kuwa mlango wa haraka zaidi kwa wanafunzi",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Maswali ya kawaida",
      type: "faq",
      faqs: [
        {
          question: "Naweza kumpigia nani simu au kumtumia ujumbe sasa hivi?",
          answer:
            "Piga au tuma ujumbe **9-8-8** (Suicide Crisis Helpline) wakati wowote, bure, 24/7 — hakuna rufaa inayohitajika. Kingston, simu ya dharura ya AMHS-KFLA kwa 613-544-4229 pia hujibu 24/7. Ikiwa usalama uko hatarini papo hapo, piga 911.",
        },
        {
          question: "Vipi ikiwa sijui kama hili linahesabika kama dharura?",
          answer:
            "Ikiwa mtu anaweza kuwa si salama, usisubiri uhakika. Tumia msaada wa dharura au huduma za dharura.",
        },
        {
          question: "Vipi ikiwa nahitaji msaada usiku huu lakini sina uhakika nimpigie nani?",
          answer:
            "Tumia ukurasa wa orodha ya afya ya akili ya eneo hili au njia ya msaada wa dharura badala ya kusubiri hadi asubuhi.",
        },
        {
          question: "Vipi ikiwa anayehitaji msaada ni mtoto wangu?",
          answer:
            "Tafuta huduma za watoto na vijana hasa. Njia za afya ya akili ya vijana mara nyingi ni tofauti na huduma za watu wazima.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Uchunguzi na Kinga",
  description:
    "Jifunze misingi ya huduma za kinga, chanjo, na uchunguzi wa mapema Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Taarifa za chanjo na afya ya umma za eneo hili.",
    },
    {
      title: "Ontario: Huduma za afya Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Mwongozo wa jumla wa huduma za afya.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Kwa nini huduma ya kinga ni muhimu",
      type: "default",
      content:
        "Huduma ya kinga inamaanisha kujaribu kugundua matatizo mapema au kuyazuia kabla hayajawa makubwa zaidi. Hii inajumuisha chanjo, vipimo vya uchunguzi, ukaguzi wa mara kwa mara wa shinikizo la damu, na mazungumzo kuhusu vihatarishi na mtaalamu wa afya.",
    },
    {
      id: "common-prevention",
      title: "Kazi za kawaida za kinga",
      type: "checklist",
      items: [
        "Hakikisha chanjo zako ziko sawa kila wakati",
        "Uliza kama vipimo vya uchunguzi vinapendekezwa kwa umri wako au historia yako ya afya",
        "Leta maswali yako kuhusu shinikizo la damu, kisukari, au vihatarishi vingine kwenye ziara za kawaida",
        "Tumia rasilimali za afya ya umma unapohitaji taarifa za chanjo au kinga",
      ],
    },
    {
      id: "prevention-next",
      title: "Unahitaji huduma za kinga za karibu?",
      type: "callout",
      content:
        "Tumia orodha ya huduma za karibu kwa afya ya umma, uchunguzi, na taarifa za maduka ya dawa ikiwa unahitaji mahali halisi pa kuanzia Kingston.",
      link: {
        text: "Orodha za afya ya umma na maduka ya dawa",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Huduma Saidizi na za Jamii",
  description:
    "Tumia ukurasa huu kuelewa huduma za nyumbani, meno, mazoezi ya viungo, ushauri nasaha, msaada wa macho, na kile kinachoweza kuwa cha umma, cha jamii, cha wanafunzi, au cha binafsi.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Taarifa rasmi za uratibu wa huduma za nyumbani na za jamii.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Taarifa rasmi za mpango wa shirikisho wa bima ya meno na sifa za kustahili.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Taarifa rasmi za huduma za jamii na za meno.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Taarifa rasmi za msaada wa macho.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Maana ya huduma saidizi na za jamii",
      type: "default",
      content:
        "Huduma saidizi (allied health) inamaanisha huduma kutoka kwa wataalamu kama vile wataalamu wa tiba ya viungo (physiotherapists), wataalamu wa tiba ya kazi (occupational therapists), wataalamu wa lishe, wafanyakazi wa ustawi wa jamii, washauri nasaha, madaktari wa meno, au timu za msaada wa macho. Huduma za jamii mara nyingi zinamaanisha huduma inayofanyika nje ya hospitali, wakati mwingine nyumbani kwako, shuleni, kliniki, au katika programu ya jamii.",
    },
    {
      id: "access-payment-matrix",
      title: "Jedwali la upatikanaji na malipo",
      type: "table",
      columns: ["Njia", "Mifano", "Jinsi malipo yanavyofanya kazi kwa kawaida", "Jinsi ya kuanza"],
      rows: [
        {
          cells: [
            "Huduma za nyumbani na za jamii zinazolipiwa na serikali",
            "Uuguzi wa nyumbani, tiba ya nyumbani, uratibu wa huduma",
            "Programu za umma zinaweza kutumika ikiwa unakidhi masharti ya programu",
            "Anza na rufaa ya mtaalamu au njia rasmi ya huduma za nyumbani",
          ],
        },
        {
          cells: [
            "Huduma za kijamii",
            "Huduma za meno za kituo cha afya cha jamii au misaada yenye vikwazo vichache",
            "Ufadhili wa umma au wa jamii unaweza kutumika kulingana na huduma",
            "Wasiliana na programu moja kwa moja na uulize kuhusu kustahili",
          ],
        },
        {
          cells: [
            "Misaada ya shuleni",
            "Ushauri nasaha wa chuoni au misaada inayohusiana na afya",
            "Kwa kawaida inahusiana na kustahili kwa mwanafunzi na ada au mipango ya wanafunzi",
            "Tumia kurasa rasmi za huduma za shule yako kwanza",
          ],
        },
        {
          cells: [
            "Huduma saidizi za binafsi",
            "Tiba ya viungo, ushauri nasaha, masaji, meno ya binafsi, huduma za macho za binafsi",
            "Mara nyingi ni malipo binafsi isipokuwa mpango mwingine unalipia",
            "Omba ada kamili na sheria za bima kabla ya kuweka miadi",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Mifano ya huduma saidizi na za jamii",
      type: "grid",
      gridItems: [
        {
          title: "Huduma za nyumbani",
          content:
            "Zinafaa wakati mtu anahitaji msaada nyumbani baada ya ugonjwa, jeraha, au huduma ya hospitali.",
          icon: "clock",
          link: {
            text: "Orodha za huduma za nyumbani",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Huduma za meno",
          content:
            "Bima ya meno iko tofauti na bima ya kawaida ya daktari. Canadian Dental Care Plan ya shirikisho sasa inalipia watu wengi wasio na bima ya binafsi ya meno, na programu kama Healthy Smiles Ontario na kliniki za meno za jamii husaidia makundi maalumu.",
          icon: "shield",
          link: {
            text: "Orodha za meno na za jamii",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Mazoezi ya viungo na tiba",
          content:
            "Tiba ya viungo, tiba ya kazi, na huduma zinazohusiana zinaweza kuwa za umma, za jamii, au za binafsi kulingana na njia yako.",
          icon: "stethoscope",
          link: { text: "Orodha za huduma saidizi", url: "/local-services?category=allied-community" },
        },
        {
          title: "Msaada wa macho",
          content:
            "Msaada wa macho unaweza kuhusisha vifaa, msaada wa mwelekeo, na misaada ya jamii pamoja na huduma za kimatibabu za macho.",
          icon: "info",
          link: {
            text: "Orodha za msaada wa macho",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Kabla ya kuweka miadi",
      type: "checklist",
      items: [
        "Uliza kama rufaa inahitajika",
        "Uliza kama huduma ni ya umma, inafadhiliwa na jamii, au ni malipo binafsi",
        "Omba ada kamili na sheria za kughairi ikiwa huduma ni ya binafsi",
        "Angalia kama mpango wako wa shule au wa binafsi unalipia sehemu ya gharama",
        "Uliza kama unahitaji kubeba rekodi, picha za mwili, au barua ya daktari",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "Maswali ya Kawaida na Kamusi",
  description:
    "Hali za kawaida za wageni wapya, maswali ya vitendo, na maana za maneno kwa lugha rahisi.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Huduma za afya Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Mwongozo wa jumla wa huduma za afya wa mkoa.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Mwongozo rasmi wa ushauri wa muuguzi.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Hali za kawaida za wageni wapya",
      type: "faq",
      faqs: [
        {
          question: "Sina OHIP bado. Nifanye nini kwanza?",
          answer:
            "Jifunze njia yako ya bima kwanza, kisha tumia orodha ya huduma za karibu na kurasa za mwongozo wa haraka kuandaa mpango salama wa muda.",
        },
        {
          question: "Mimi ni mwanafunzi wa kimataifa. Nianzie wapi?",
          answer:
            "Anza na huduma ya afya au ustawi ya chuo chako na hati za bima za shule yako, kisha tumia huduma za jamii au za haraka wakati hizo hazitoshi.",
        },
        {
          question: "Nahitaji mkalimani.",
          answer:
            "Omba mapema. Unaweza kusoma tovuti hii kwa lugha 33 kwa kutumia menyu ya Lugha, na unaweza kuwaonyesha wafanyakazi sentensi fupi zilizo katika kichupo cha msaada wa mkalimani. Kwa miadi, maelekezo ya dawa, ridhaa, na mazungumzo ya vipimo, uliza kuhusu msaada wa mkalimani wa kitaalamu. Health811 (piga 811) inatoa msaada wa simu kwa lugha nyingi.",
        },
        {
          question: "Nahitaji vipimo vya damu baada ya ziara.",
          answer:
            "Hakikisha una fomu ya vipimo, kisha tafuta maabara na picha za mwili kwenye orodha.",
        },
        {
          question: "Nahitaji kujaza tena dawa na daktari wangu hapatikani.",
          answer:
            "Anza na duka lako la dawa, kisha tumia njia za bila miadi, za mtandaoni, au za haraka inavyofaa kulingana na dawa na uharaka.",
        },
        {
          question: "Nahitaji huduma kwa mtoto wangu.",
          answer:
            "Tumia dalili za hatari za dharura kwanza, kisha mwongozo wa siku hiyo hiyo au wa haraka. Njia za afya ya akili za watoto na vijana mara nyingi ziko tofauti na huduma za watu wazima.",
        },
        {
          question: "Nahitaji msaada wa afya ya akili usiku huu.",
          answer:
            "Piga au tuma ujumbe 9-8-8 (Suicide Crisis Helpline) wakati wowote, au piga simu ya dharura ya AMHS-KFLA inayofanya kazi 24/7 kwa 613-544-4229. Tumia huduma ya dharura ikiwa usalama uko hatarini. Usisubiri miadi ya kawaida.",
        },
        {
          question: "Sielewi fomu ya vipimo au rufaa.",
          answer:
            "Piga simu kliniki iliyokupa na uwaombe waieleze kwa lugha rahisi. Unaweza kuuliza ni ya nini, inaenda wapi, na nani anapaswa kufuatilia.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Maswali mengine ya kawaida",
      type: "faq",
      faqs: [
        {
          question: "Je, naweza kwenda tu kwenye dharura ikiwa sina daktari?",
          answer:
            "Dharura ni kwa ajili ya dharura. Ikiwa tatizo si wazi kuwa linahatarisha maisha, anza na ukurasa wa mwongozo wa haraka, Health811, kliniki ya bila miadi, au huduma nyingine ya siku hiyo hiyo.",
        },
        {
          question: "Vipi ikiwa mimi ni mgeni na sijui huduma gani inanifaa?",
          answer:
            "Tumia vichujio vya orodha kwa wanafunzi, wageni wapya, watoto na vijana, bila miadi, mtandaoni, rufaa inahitajika, na aina ya bima.",
        },
        {
          question: "Vipi ikiwa taarifa kwenye tovuti hii zinaonekana zimepitwa na wakati?",
          answer:
            "Tumia fomu ya kuripoti kwenye ukurasa au taarifa ya huduma husika ili ukaguzi unaofuata uweze kuzingatia badiliko ulilogundua.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Kamusi",
      type: "checklist",
      items: [
        "Huduma ya msingi (primary care): Njia yako ya kawaida ya huduma za afya kwa mahitaji ya kawaida na yanayoendelea.",
        "Muuguzi mtaalamu (nurse practitioner, NP): Muuguzi mwenye mafunzo ya juu anayeweza kutathmini, kutambua ugonjwa, kuandika dawa, na kutoa rufaa katika hali nyingi.",
        "Rufaa (referral): Ombi kutoka kwa mtaalamu mmoja kwenda kwa huduma au mtaalamu mwingine.",
        "Fomu ya vipimo (requisition): Fomu inayoiambia maabara au kliniki ya picha kipimo gani unahitaji.",
        "Triage (kupanga uharaka): Mchakato wa kuamua nani anahitaji huduma ya haraka kwanza kulingana na usalama na ukali.",
        "Kliniki ya bila miadi (walk-in clinic): Kliniki inayoweza kuona wagonjwa bila miadi iliyowekwa, kulingana na upokeaji wa kila siku.",
        "Huduma ya haraka (urgent care): Huduma ya siku hiyo hiyo kwa matatizo ya haraka ambayo si wazi kuwa yanahatarisha maisha.",
        "Mgonjwa aliyesajiliwa (rostered or attached patient): Mgonjwa mwenye uhusiano unaoendelea na mtoa huduma wa msingi wa kawaida.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Kuhusu, Uaminifu, na Faragha",
  description:
    "Jifunze jinsi mwongozo huu unavyofanya kazi, jinsi vyanzo na hali ya ukaguzi vinavyoshughulikiwa, na jinsi ya kuripoti mabadiliko.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Maelezo ya vyanzo ya mradi",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Muhtasari wa wazi kwa umma wa jinsi mradi unavyoshughulikia uaminifu na vyanzo.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Tovuti hii ni ya nini",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca ni mwongozo wa kuelekeza huduma za afya unaowalenga wageni wapya kwanza kwa Kingston, Ontario. Umeundwa kusaidia watu kuchagua hatua sahihi inayofuata, kuelewa maneno ya kawaida ya mfumo, na kupata orodha za huduma za karibu zinazoaminika.\n\nTovuti hii **si** chombo cha muda wa kusubiri wa papo hapo, jukwaa la kuweka miadi, wala huduma ya ushauri wa kimatibabu.",
    },
    {
      id: "sources",
      title: "Jinsi uaminifu na vyanzo vinavyofanya kazi",
      type: "default",
      content:
        "Tunajaribu kuunganisha orodha za huduma za karibu na kurasa rasmi za huduma kila inapowezekana. Kila taarifa ya huduma inaonyesha hali ya ukaguzi na tarehe ya ukaguzi wa mwisho. Baadhi ya taarifa zimethibitishwa kikamilifu dhidi ya vyanzo rasmi. Nyingine bado zinahitaji ukaguzi wa eneo kwa sababu saa za kazi, upokeaji, au sheria za upatikanaji hubadilika mara kwa mara.\n\nSehemu za vyanzo katika kiwango cha ukurasa zinaonyesha marejeo makuu rasmi yaliyotumika kwa kipindi cha sasa cha ukaguzi.",
    },
    {
      id: "accessibility",
      title: "Ufikivu na lugha",
      type: "default",
      content:
        "Tovuti hii imejengwa kuwa rafiki kwa kibodi, kufaa simu kwanza, na kusomeka kwa lugha rahisi.\n\nUnaweza kusoma mwongozo mzima kwa **lugha 33** kwa kutumia menyu ya Lugha kwenye kichwa cha ukurasa — kuanzia العربية na Soomaali hadi ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, na Українська — huku kila ukurasa na menyu vikipatikana moja kwa moja kwenye tovuti hii. Tafsiri zote zimesaidiwa na mashine; Kifaransa, Kihispania, Kiarabu, na Kichina Rahisi zilipata mapitio ya ziada, na nyingine zimewekwa alama ya tafsiri ya kiotomatiki. **Kiingereza kinabaki kuwa toleo la marejeo** — ikiwa sentensi iliyotafsiriwa inaonekana isiyo wazi au ya kushangaza, angalia maandishi ya Kiingereza au muombe mtu aithibitishe.\n\nMakumi ya lugha nyingine zinaweza kufungua tovuti hii kupitia Google Translate kutoka kwenye menyu ile ile, na kichupo cha msaada wa mkalimani kina sentensi fupi za dharura kwa lugha zaidi ya 20 unazoweza kuwaonyesha wafanyakazi.\n\nOrodha za huduma (majina ya huduma, anwani, namba za simu, na saa za kazi) zinabaki kwa Kiingereza ili zilingane kabisa na vyanzo rasmi.\n\nTafsiri ya aina yoyote bado inaweza kuwa na makosa kwa maelezo ya kimatibabu, kwa hiyo uliza kuhusu msaada wa mkalimani wa kitaalamu kwa miadi, maelekezo ya dawa, na ridhaa. Health811 (piga 811) inatoa msaada wa simu kwa lugha nyingi.",
    },
    {
      id: "privacy",
      title: "Faragha",
      type: "default",
      content:
        "Tovuti hii haitumii takwimu vamizi za seva za mbali. Inahifadhi hesabu nyepesi za maboresho kwenye kivinjari chako mwenyewe ili wasimamizi waweze kuelewa utafutaji wa kawaida, utafutaji usio na matokeo, kuangaliwa kwa huduma, na ripoti za matatizo wakati taarifa hiyo inapohamishwa kwa makusudi kwa ajili ya matengenezo.\n\nUsitume taarifa binafsi za matibabu kupitia fomu ya maoni au barua pepe.",
    },
    {
      id: "contact",
      title: "Mawasiliano na kuripoti mabadiliko",
      type: "default",
      content:
        "Ikiwa ukurasa au taarifa ya huduma inaonekana si sahihi, tumia fomu ya kuripoti kwenye ukurasa huo. Ripoti zinapaswa kueleza tatizo, si hali yako binafsi ya kiafya.\n\nBarua pepe ya mawasiliano ya jumla: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Kanusho",
      type: "default",
      content:
        "Tovuti hii ni kwa ajili ya uelekezi na elimu tu. Si ushauri wa kimatibabu na si mbadala wa utambuzi wa kitaalamu, matibabu, au msaada wa dharura. Ikiwa hali inaweza kuhatarisha maisha, piga 911.",
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
