import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Ana loda shafin...",
    directoryEnglishNote:
      "Ana nuna jerin ayyuka da Turanci domin sunayen ayyuka, adireshi, lambobin waya, da lokutan aiki su yi daidai da majiyoyin hukuma.",
  },
  header: {
    emergencyBanner: "Gaggawar da ka iya hallaka rai? Kira 911 yanzu.",
    tagline:
      "Jagorar neman kiwon lafiya ga sababbin shigowa a Kingston, Ontario",
    languageButton: "Harshe",
    languageButtonAria: "Taimakon harshe da mai fassara",
    openNavigation: "Buɗe menu",
    primaryNavLabel: "Babban menu",
  },
  languageModal: {
    title: "Taimakon harshe da mai fassara",
    description:
      "Karanta wannan jagora a harshen da ka fi jin daɗi. Don tattaunawar kiwon lafiya, ka nemi mai fassara idan kana bukata.",
    chooseLanguageTitle: "Zaɓi harshenka",
    chooseLanguageNote:
      "An fassara wannan jagora gaba ɗaya zuwa harsuna 33 a wannan shafin, kuma wasu harsuna da dama suna buɗewa ta fassarar atomatik. Jerin ayyuka suna nan da Turanci don su yi daidai da majiyoyin hukuma. Turanci shi ne asalin sigar idan wani abu bai bayyana ba.",
    safetyTitle: "Bayanin kariya",
    safetyBody:
      "Fassarar gidan yanar gizo don karatu da fahimta ce kawai. Don alƙawura, umarnin gwaji, magunguna, ko izini, ka tambaya ko asibitin zai iya samar da ƙwararren mai fassara. Health811 (kira 811) yana ba da taimakon waya a harsuna da yawa.",
    phrasesTitle: "Gajerun kalmomi da za ka nuna wa ma'aikata",
    phrasesNote:
      "Nuna harshenka ka kuma nuna waɗannan layuka ga ma'aikatan karɓa ko na jinya.",
    callHealth811: "Kira Health811",
    accessibilityCta: "Sauƙin amfani da amana",
    close: "Rufe taimakon harshe",
  },
  moreLanguages: {
    title: "Ƙarin harsuna (fassarar atomatik)",
    description:
      "Kowane harshe yana aiki daga wannan menu guda — har da Somali, Yoruba, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukrainian, Farsi, Urdu, Punjabi, Tamil, da Vietnamese.",
    selectLabel: "Zaɓi kowane harshe",
    selectPlaceholder: "Dukkan harsuna — zaɓi ɗaya…",
    openButton: "Buɗe a wannan harshen",
    disclaimer:
      "Harsunan da aka yi wa alamar atomatik suna buɗe wannan shafin ta Google Translate kuma suna nan a harshenka yayin da kake ci gaba da bincike. Wannan aikin bai duba fassarar atomatik ba — tana da kyau don karatu, amma ka tabbatar da bayanan likita daga likita ko mai fassara.",
  },
  funding: {
    acknowledgment:
      "Wannan aikin yana samun goyon baya ta tallafin kuɗi daga Ontario Medical Students Association (OMSA).",
    logoAlt: "Tambarin Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Nemo harsuna…",
    onSiteGroup: "An fassara a wannan shafin",
    proxyGroup: "Ƙarin harsuna ta Google Translate",
    reviewedBadge: "An duba",
    automaticBadge: "Atomatik",
    interpreterTab: "Taimakon mai fassara da kalmomi",
    noMatches: "Babu harshen da ya dace da bincikenka.",
    note: "An yi fassarorin da taimakon na'ura kuma Turanci shi ne asalin sigar idan wani abu bai bayyana ba. Harsunan da ke cikin rukunin Google Translate suna buɗe wannan shafin a wani shafin Google na waje. Jerin ayyuka suna nan da Turanci don su yi daidai da majiyoyin hukuma.",
  },
  navigation: [
    {
      title: "Fara nan",
      items: [
        {
          label: "Bukatar Taimako Yanzu",
          to: "/need-help-now",
          description: "Shawarwarin gaggawa da taimakon lokacin rikici",
        },
        {
          label: "Fara Nan",
          to: "/start-here",
          description: "Sabo a tsarin kiwon lafiyar Ontario",
        },
        {
          label: "Nemo Kulawar Farko",
          to: "/get-a-family-doctor",
          description:
            "Likitoci, NPs (ma'aikatan jinya masu rubuta magani), CHCs (cibiyoyin lafiyar al'umma), da zaɓuɓɓukan ɗalibai",
        },
      ],
    },
    {
      title: "Fahimci kulawa",
      items: [
        {
          label: "Kuɗi da Inshora",
          to: "/costs-and-coverage",
          description:
            "OHIP, IFHP, inshora masu zaman kansu, da inshorar magani",
        },
        {
          label: "Ziyararka",
          to: "/your-visit",
          description: "Abin da za ka kawo da yadda za ka yi tambayoyi",
        },
        {
          label: "Bayan Ziyara",
          to: "/after-visit",
          description:
            "Gwaje-gwaje, requisitions (takardun gwaji), referrals (takardun turawa), da bibiya",
        },
        {
          label: "Magunguna da Kantunan Magani",
          to: "/medicines-and-pharmacies",
          description:
            "Takardun magani, sake cika magani, da taimakon mai harhaɗa magani",
        },
      ],
    },
    {
      title: "Taimakon gida",
      items: [
        {
          label: "Ayyukan Gida",
          to: "/local-services",
          description: "Bincika ayyukan Kingston",
        },
        {
          label: "Lafiyar Hankali",
          to: "/mental-health",
          description:
            "Rikici, gaggawa, na yau da kullum, da taimakon matasa",
        },
        {
          label: "Gwajin Bincike da Rigakafi",
          to: "/screening-prevention",
          description: "Alluran rigakafi da kulawar rigakafi",
        },
        {
          label: "Kulawar Ƙwararru da ta Al'umma",
          to: "/community-allied-health",
          description:
            "Kulawa a gida, gyaran jiki, haƙora, da tallafin al'umma",
        },
        {
          label: "FAQ",
          to: "/faq",
          description:
            "Yanayin sababbin shigowa na gama-gari da ƙamus",
        },
        {
          label: "Game da Mu da Amana",
          to: "/about",
          description: "Majiyoyi, sirri, sauƙin amfani, da ra'ayoyi",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Kana bukatar taimako yanzu?",
    items: {
      "call-911": {
        label: "Kira 911",
        description: "Gaggawar da ka iya hallaka rai",
      },
      "call-811": {
        label: "Kira Health811",
        description: "Shawarar ma'aikaciyar jinya, awa 24 kowace rana",
      },
      "call-988": {
        label: "Kira ko aika saƙo zuwa 9-8-8",
        description:
          "Layin Taimakon Rikicin Kashe Kai, awa 24 kowace rana",
      },
      "call-crisis": {
        label: "Kira Layin Rikici",
        description: "Layin rikici na AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Jagorar kulawar gaggawa",
        description:
          "Zaɓuɓɓuka bayan lokutan aiki da na rana ɗaya",
      },
      "mental-health": {
        label: "Taimakon lafiyar hankali",
        description: "Hanyoyin rikici, gaggawa, da na yau da kullum",
      },
    },
  },
  home: {
    seoTitle: "Jagorar kiwon lafiya ta Kingston",
    seoDescription:
      "Jagorar neman kiwon lafiya ga sababbin shigowa a Kingston, Ontario: taimakon gaggawa, ayyukan gida, tushen inshora, jagorar mai fassara, da matakai na gaba bayan ziyara.",
    kicker: "Kingston, Ontario",
    heroTitle: "Nemo kulawar da ta dace a Kingston ba tare da hasashe ba",
    heroLead:
      "Fara da taimakon gaggawa, tushen bayanai ga sababbin shigowa, inshora, ko jerin ayyukan gida. Wannan jagora tana da sauƙin harshe, tana aiki a wayar hannu, kuma tana faɗin gaskiya game da abin da har yanzu ake bukatar sake dubawa.",
    cardNeedHelp: {
      title: "Bukatar taimako yanzu",
      body: "Jagorar gaggawa, urgent care, rikici, da bayan lokutan aiki.",
    },
    cardStartHere: {
      title: "Fara nan",
      body: "Yadda kiwon lafiyar Ontario ke aiki da abin da za ka fara yi.",
    },
    cardSearch: {
      title: "Bincika ayyuka",
      body: "Nemo gwajin jini, sake cika magani, kulawar walk-in (ba tare da alƙawari ba), lafiyar hankali, da ƙari.",
    },
    cardLanguage: {
      title: "Taimakon harshe",
      body: "Karanta wannan jagora a harshenka, da jagorar mai fassara da gajerun kalmomi.",
    },
    quickDecisionsKicker: "Shawarwari masu sauri",
    quickDecisionsTitle: "Fara da waɗannan tambayoyi",
    quickDecisionLines: [
      "Idan abin zai iya hallaka rai, kira 911 yanzu.",
      "Idan ba ka san inda za ka je daren yau ba, kira Health811.",
      "Don tunanin kashe kai ko damuwa mai tsanani, kira ko aika saƙo zuwa 9-8-8 a kowane lokaci.",
      "Idan ba ka da likitan iyali, ka riƙe zaɓin walk-in (ba tare da alƙawari ba), lafiyar al'umma, da na ɗalibai a shirinka.",
      "Idan kana bukatar gwajin jini, X-ray, sake cika magani, ko sabunta referral, yi amfani da jerin ayyukan gida don nemo mataki na gaba.",
    ],
    trustNoteTitle: "Bayanin amana",
    trustNoteBody:
      "Wannan jagora ce tsayayya. Ba ma nuna lokutan jira kai tsaye. Bayanai masu canzawa kamar lokutan aiki da karɓar marasa lafiya na iya canzawa da sauri, don haka kowane jeri yana da hanyar haɗi zuwa majiya da matsayin dubawa.",
    newcomerKicker: "Saurin farawa ga sababbin shigowa",
    newcomerTitle: "Matakan farko idan kai sabo ne a Kingston",
    newcomerSteps: [
      {
        title: "1. Koyi inshorarka",
        body: "Fahimci OHIP, IFHP, inshora masu zaman kansu, da abin da yawanci ba a rufewa. Babu lokacin jira don OHIP - nemi shi da zarar ka iso.",
      },
      {
        title: "2. Tsara hanyarka ta kulawar farko",
        body: "Koyi bambanci tsakanin likitocin iyali, nurse practitioners (ma'aikatan jinya masu rubuta magani), asibitocin ɗalibai, cibiyoyin lafiyar al'umma, da kulawar walk-in.",
      },
      {
        title: "3. San abin da zai biyo baya",
        body: "Koyi abin da requisitions (takardun gwaji), referrals (takardun turawa), sakamakon gwaji, da kiran bibiya yawanci ke nufi.",
      },
    ],
    languageSupportKicker: "Taimakon harshe",
    languageSupportTitle: "Nuna waɗannan kalmomi idan kana bukatar taimako",
    openLanguageHelp: "Buɗe taimakon harshe",
    commonTasksKicker: "Ayyuka na gama-gari",
    commonTasksTitle: "Bincika bisa aikin da kake son kammalawa",
    openDirectory: "Buɗe cikakken jerin ayyuka",
    tasks: [
      {
        title: "Gwajin jini ko X-ray",
        body: "Nemo dakunan gwaje-gwaje da ayyukan ɗaukar hoto.",
      },
      {
        title: "Sake cika magani",
        body: "Nemo kantunan magani da taimakon sake cikawa.",
      },
      {
        title: "Taimakon lafiyar hankali",
        body: "Rikici, gaggawa, na yau da kullum, da taimakon matasa.",
      },
      {
        title: "Katin lafiya ko taimakon sababbin shigowa",
        body: "Nemo ServiceOntario, ISKA, da shawarar waya.",
      },
    ],
    featuredKicker: "Fitattun ayyuka",
    featuredTitle: "Wurare masu kyau don farawa",
    trustKicker: "Amana da majiyoyi",
    trustTitle:
      "Gaskiya game da abin da aka tabbatar da abin da har yanzu ake bukatar sake dubawa",
    trustBody:
      "An duba wasu jerin bisa majiyoyin hukuma na gida. Wasu har yanzu suna bukatar sake dubawa a gida domin lokutan aiki, karɓar marasa lafiya, ko ka'idojin shiga suna canzawa akai-akai. Muna nuna wannan matsayin a fili kuma muna ƙarfafa masu amfani su ba da rahoton bayanan da suka tsufa.",
    trustChecklistTitle: "Karanta kafin ka dogara da wani jeri",
    trustChecklist: [
      "Nemi hanyar haɗi zuwa majiyar hukuma.",
      "Duba ranar dubawa ta ƙarshe.",
      "Tabbatar da lokutan aiki na rana ɗaya da shigar walk-in kafin ka tafi.",
      "Yi amfani da fom ɗin rahoto idan ka lura da canji.",
    ],
    trustLink: "Duba majiyoyi da bayanan amana",
  },
  contentPage: {
    breadcrumbHome: "Gida",
    badge: "Jagora mai sauƙin harshe",
    reviewStatusTitle: "Matsayin dubawa",
    reviewLabels: {
      reviewed:
        "An duba bisa tarin majiyoyin da wannan aikin ke amfani da su a halin yanzu.",
      "general-guidance":
        "An duba a matsayin jagora ta gama-gari. Bayanan gida na iya canzawa da sauri.",
      "needs-local-recheck":
        "Jagora mai amfani, amma bayanan gida har yanzu suna bukatar ƙarin dubawa.",
    },
    lastReviewPrefix: "Dubawar shafi ta ƙarshe:",
    noReviewDate:
      "Wannan shafin ba shi da rubutaccen ranar dubawar shafi.",
    translationAside:
      "Za ka iya karanta wannan shafin a harsuna da dama ta amfani da menu na Harshe. Don alƙawura, magunguna, izini, da umarnin gwaji, ka tambaya ko akwai taimakon mai fassara.",
    share: "Raba",
    print: "Buga",
    sourcesTitle: "Majiyoyin wannan shafi",
    sourcesNote:
      "Waɗannan su ne manyan majiyoyin hukuma ko na asali da aka yi amfani da su don dubawar wannan shafi ta yanzu. Hanyoyin gida na iya canzawa tsakanin zagayen dubawa.",
    onThisPage: "A wannan shafi",
    sourcesAnchorLabel: "Majiyoyi",
    translationReminderTitle: "Tunatarwar fassara",
    translationReminderBody:
      "Idan wani abu ya shafi maganinka ko lafiyarka, tabbatar da shi daga likita ko mai fassara maimakon dogara da fassara kawai.",
    linkCopiedTitle: "An kwafi hanyar haɗi",
    linkCopiedBody:
      "Yanzu za ka iya manna hanyar haɗin wannan shafi a ko'ina.",
    shareCancelled: "An soke rabawa",
  },
  directory: {
    seoTitle: "Ayyukan gida",
    seoDescription:
      "Bincika ayyukan kiwon lafiya, lafiyar hankali, kantin magani, inshora, da jagora masu dacewa da sababbin shigowa a Kingston, Ontario.",
    kicker: "Jerin ayyukan Kingston",
    title: "Bincika ayyukan lafiya na gida",
    lead: "Bincika ta sabis, alamar rashin lafiya, takarda, ko buƙata. Misalai: walk in, bayan lokutan aiki, gwajin jini, sake cika magani, katin lafiya, asibitin ɗalibai, ko taimakon sababbin shigowa.",
    searchPlaceholder:
      "Bincika ta bukata, sunan sabis, adireshi, ko kalma",
    sortAriaLabel: "Tsara sakamako",
    sortRelevance: "Tsari: Dacewa",
    sortAlphabetical: "Tsari: A zuwa Z",
    sortRecentlyReviewed: "Tsari: Wanda aka duba kwanan nan",
    sortArea: "Tsari: Yanki",
    gridViewLabel: "Kallon grid",
    listViewLabel: "Kallon jeri",
    allServices: "Dukkan ayyuka",
    audienceTitle: "Masu amfani",
    accessTitle: "Hanyar shiga",
    careLevelTitle: "Matakin kulawa",
    coverageAreaTitle: "Inshora da yanki",
    areaLabel: "Yanki",
    showingServices: "Ana nuna ayyuka {count}",
    resetFilters: "Sake saita matattara",
    trustPanelTitle: "Amana da matsayin dubawa",
    trustPanelBody:
      "Wannan jerin tsayayye ne, ba kai tsaye ba. Muna nuna ranar dubawa ta ƙarshe da aka rubuta, hanyoyin haɗi zuwa majiyoyin hukuma idan akwai, da jerin da har yanzu ke bukatar sake dubawa a gida. Tabbatar da lokutan aiki da shigar rana ɗaya kafin ka tafi.",
    verifiedLabel: "An tabbatar",
    needsRecheckLabel: "Yana bukatar sake dubawa",
    noResultsTitle: "Babu ayyukan da suka dace da waɗannan matattara",
    noResultsBody:
      "Gwada bincike mafi faɗi kamar gwajin jini, sake cika magani, lafiyar hankali, katin lafiya, ko walk in. Za ka kuma iya share dukkan matattara ka sake farawa.",
    notSureTitle: "Ba ka san inda za ka fara ba?",
    notSureBody:
      "Idan ba ka tabbata ko kana bukatar kulawar gaggawa, urgent care, asibitin walk-in, ko taimakon kantin magani ba, fara da shafin jagorar gaggawa ko kira Health811 don shawarar ma'aikaciyar jinya.",
    needHelpNowCta: "Bukatar Taimako Yanzu",
    callHealth811: "Kira Health811",
  },
  filters: {
    audience: {
      newcomers: "Sababbin shigowa",
      students: "Ɗalibai kawai ko harabar makaranta",
      "children-youth": "Yara ko matasa",
      adults: "Manya",
      families: "Iyalai",
      "unattached-patients": "Babu likitan iyali",
    },
    access: {
      "walk-in": "Walk-in (ba alƙawari)",
      appointment: "Alƙawari",
      referral: "Ana bukatar referral",
      virtual: "Ta intanet ko waya",
    },
    level: {
      emergency: "Gaggawa (emergency)",
      urgent: "Urgent (mai gaggawa)",
      primary: "Kulawar farko",
      community: "Na al'umma",
    },
    payment: {
      public: "Gwamnati ke ɗaukar nauyi",
      community: "Na al'umma / mai sauƙin shiga",
      mixed: "Inshora gauraye",
      "student-plan": "Shirin ɗalibai",
      private: "Biya da kuɗin kanka",
    },
    location: {
      downtown: "Tsakiyar gari",
      "north-end": "Arewacin gari",
      "west-end": "Yammacin gari",
      campus: "Harabar makaranta",
      online: "Ta intanet",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Kulawar gaggawa da urgent care",
      shortLabel: "Gaggawa da urgent",
    },
    "primary-care": {
      label: "Kulawar farko",
      shortLabel: "Kulawar farko",
    },
    "community-health": {
      label: "Cibiyoyin lafiyar al'umma",
      shortLabel: "Lafiyar al'umma",
    },
    "mental-health": {
      label: "Lafiyar hankali da taimakon rikici",
      shortLabel: "Lafiyar hankali",
    },
    "public-health": {
      label: "Lafiyar jama'a",
      shortLabel: "Lafiyar jama'a",
    },
    "labs-imaging": {
      label: "Dakunan gwaje-gwaje da ɗaukar hoto",
      shortLabel: "Gwaje-gwaje da hoto",
    },
    pharmacies: {
      label: "Magunguna da kantunan magani",
      shortLabel: "Kantunan magani",
    },
    "allied-community": {
      label: "Kulawar ƙwararru da ta al'umma",
      shortLabel: "Kulawar ƙwararru",
    },
    "navigation-support": {
      label: "Taimakon jagora da inshora",
      shortLabel: "Jagora",
    },
  },
  serviceCard: {
    whenToUse: "Lokacin amfani:",
    accessLabel: "Hanyar shiga",
    eligibilityLabel: "Cancanta",
    eligibilityFallback:
      "A buɗe yake ga kowa sai dai idan majiyar hukuma ta ce ba haka ba.",
    hoursLabel: "Lokutan aiki",
    phoneLabel: "Waya",
    trustDetails: "Bayanan amana da majiya",
    lastReview: "Dubawa ta ƙarshe:",
    officialSource: "Majiyar hukuma",
    call: "Kira",
    officialWebsite: "Gidan yanar gizo na hukuma",
    directions: "Hanyar zuwa",
    viewDetails: "Duba bayanai",
  },
  serviceDetail: {
    backToServices: "Koma zuwa ayyukan gida",
    whenToUseTitle: "Lokacin amfani da wannan sabis",
    eligibilityTitle: "Cancanta da hanyar shiga",
    eligibilityFallback:
      "Duba majiyar hukuma idan ba ka tabbata ko wannan sabis a buɗe yake gare ka ba.",
    whatToBringTitle: "Abin da za ka kawo",
    contactTitle: "Tuntuɓa da matakai",
    callNow: "Kira yanzu",
    officialWebsite: "Gidan yanar gizo na hukuma",
    directions: "Hanyar zuwa",
    trustTitle: "Amana da majiya",
    lastReview: "Dubawa ta ƙarshe:",
    viewOfficialSource: "Duba majiyar hukuma",
  },
  verification: {
    verified: {
      label: "An tabbatar bisa majiyar hukuma",
      shortLabel: "An tabbatar",
      description:
        "An duba manyan bayanai bisa majiyar hukuma a zagayen dubawa na baya-bayan nan.",
    },
    "partially-verified": {
      label: "An haɗa majiyar hukuma",
      shortLabel: "Haɗin hukuma",
      description:
        "An haɗa majiyar hukuma, amma bayani ɗaya ko fiye na iya canzawa akai-akai kuma ya kamata a tabbatar kafin ka tafi.",
    },
    "community-reported": {
      label: "Rahoton al'umma",
      shortLabel: "Rahoton al'umma",
      description:
        "Wannan bayanin ya zo daga rahoton al'umma kuma har yanzu yana bukatar tabbatarwa mai zaman kanta.",
    },
    "needs-recheck": {
      label: "Yana bukatar sake dubawa",
      shortLabel: "Yana bukatar sake dubawa",
      description:
        "Wannan jerin yana nan a bayyane domin har yanzu zai iya taimakawa, amma muhimman bayanai na iya zama sun tsufa. Tabbatar kafin ka dogara da shi.",
    },
  },
  feedback: {
    badge: "Ba da rahoton bayanan da suka tsufa",
    title: "Taimaka mana mu kiyaye daidaiton wannan jagora",
    body: "Wannan yana aika imel da aka riga aka cika da bayanan shafi ko sabis. Kada ka saka bayanan lafiyarka na sirri.",
    issueTypeLabel: "Irin matsala",
    issueTypes: {
      "outdated hours": "Lokutan aiki da suka tsufa",
      "wrong phone or website":
        "Waya ko gidan yanar gizo da ba daidai ba",
      "eligibility or access issue": "Matsalar cancanta ko shiga",
      "translation or accessibility problem":
        "Matsalar fassara ko sauƙin amfani",
      "missing service or content": "Sabis ko bayanin da ya ɓace",
      other: "Wani abu daban",
    },
    detailsLabel: "Me ya kamata mu duba?",
    detailsPlaceholder:
      "Misali: lambar waya ta canza, wani asibiti yanzu sai da alƙawari ne kawai, ko hanyar haɗi ta lalace.",
    contactLabel: "Tuntuɓa (na zaɓi)",
    contactPlaceholder: "Adireshin imel idan kana son amsa",
    openEmail: "Buɗe imel ɗin rahoto",
    copyText: "Kwafi rubutun rahoto",
    thanks:
      "Mun gode. Rahotanni suna taimaka mana mu ba da fifiko ga shafukan da suka tsufa, hanyoyin haɗi da suka lalace, da jerin da ke bukatar sake dubawa a gida.",
    toastEmailTitle: "An buɗe daftarin imel",
    toastEmailBody: "Rahotonka ya haɗa da bayanan shafi ko sabis.",
    toastCopyTitle: "An kwafi taƙaitaccen matsala",
    toastCopyBody:
      "Za ka iya manna shi a cikin imel ɗinka idan ana bukata.",
  },
  footer: {
    description:
      "Jagorar neman kiwon lafiya mai sauƙin harshe don Kingston, Ontario. Wannan shafin ba ya ba da shawarar likita ko lokutan jira kai tsaye. Kullum ka tabbatar da bayanai masu canzawa daga majiyar hukuma kafin ka tafi.",
    trustModelTitle: "Tsarin amana",
    trustModelBody:
      "Muna nuna hanyoyin haɗi zuwa majiyoyin hukuma, ranakun dubawa, da jerin da har yanzu ke bukatar sake dubawa. Idan wani abu ya yi kama da kuskure, ba da rahoto daga shafin ko sabis ɗin.",
    beforeYouGo: {
      title: "Kafin ka tafi",
      body: "Duba lokutan aiki na hukuma, ko kana bukatar alƙawari ko referral, da takardun da za ka kawo.",
    },
    languageHelp: {
      title: "Taimakon harshe",
      body: "Karanta wannan jagora a harshenka ta menu na Harshe. Nemi mai fassara don tattaunawar likita lokacin da daidaito ke da muhimmanci.",
    },
    privacy: {
      title: "Sirri",
      body: "Wannan shafin yana amfani da bayanan ingantawa na gida masu kiyaye sirri da aka adana a burauzarka. Ba ya aika bayanan sirri zuwa wani sabar nesa.",
    },
    copyrightSuffix: "Tushen bayanan al'umma don Kingston, Ontario.",
    disclaimer: "Sanarwa",
    privacyLink: "Sirri",
    sourcesLink: "Majiyoyi",
    reportLink: "Ba da rahoton tsofaffin bayanai",
  },
  notFound: {
    seoTitle: "Ba a sami shafin ba",
    seoDescription:
      "Ba a iya samun shafin da ka nema ba. Fara da taimakon gaggawa, tushen bayanai ga sababbin shigowa, ayyukan gida, ko FAQ.",
    badge: "404",
    title: "Ba mu iya samun wannan shafin ba",
    body: "Idan kana ƙoƙarin samun kulawa da sauri, fara da jagorar gaggawa ko bincika jerin ayyukan Kingston.",
    startHere: "Fara Nan",
    needHelpNow: "Bukatar Taimako Yanzu",
    localServices: "Ayyukan Gida",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Jagorar Neman Kiwon Lafiya ta Kingston",
  description:
    "Jagora mai sauƙin harshe ga sababbin shigowa don neman kiwon lafiya a Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Fara Nan",
  description:
    "Sabo a Kingston ko sabo a tsarin kiwon lafiyar Ontario? Fara nan don koyon yadda tsarin ke aiki da abin da za ka fara yi.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Kiwon lafiya a Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Bayani kan yadda kulawar da aka rufe ke aiki a Ontario.",
    },
    {
      title: "Ontario: Nemi OHIP ka sami katin lafiya",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Bayanin hukuma kan neman OHIP da cancanta.",
    },
    {
      title: "Ontario: Nemo likitan iyali ko nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Jagorar Health Care Connect da samun kulawar farko.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Bayanin inshorar tarayya ga 'yan gudun hijira masu cancanta da masu neman mafaka.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Yadda kiwon lafiya ke aiki a Ontario",
      type: "default",
      content: `An tsara kiwon lafiyar Ontario a kewayen **kulawar farko (primary care)**. Kulawar farko tana nufin wurin da yawanci kake farawa don bukatun lafiya na yau da kullum, cututtuka masu ɗorewa, takardun magani, referrals (turawa zuwa ƙwararru), da rigakafi. Mai ba ka kulawar farko na iya zama likitan iyali, nurse practitioner (ma'aikaciyar jinya mai rubuta magani), ƙungiyar cibiyar lafiyar al'umma, ko asibitin lafiyar ɗalibai idan ka cancanta.

**Referral** shi ne lokacin da wani likita ya nemi wani sabis ko ƙwararre ya gan ka. **Requisition** fom ne da ke gaya wa dakin gwaje-gwaje ko asibitin ɗaukar hoto irin gwajin da kake bukata.

Ba sai ka fahimci kowane ɓangare na tsarin a rana ta farko ba. Mafi muhimman matakai su ne: koyi inshorarka, san inda za ka je don matsalolin gaggawa, kuma ka tsara shirin kulawa ta yau da kullum idan ba ka da mai ba ka kulawa tukuna.`,
    },
    {
      id: "first-decisions",
      title: "Shawarwari na farko",
      type: "grid",
      gridItems: [
        {
          title: "Watakila ina bukatar taimakon gaggawa",
          content:
            "Fara da jagorar bambanta gaggawa da urgent care idan kana da matsalar da ta taso yau ko daren yau.",
          icon: "alert",
          link: { text: "Bukatar Taimako Yanzu", url: "/need-help-now" },
        },
        {
          title: "Ba ni da likitan iyali",
          content:
            "Koyi yadda likitocin iyali, nurse practitioners, cibiyoyin lafiyar al'umma, asibitocin walk-in, da asibitocin ɗalibai suke haɗuwa.",
          icon: "stethoscope",
          link: { text: "Nemo Kulawar Farko", url: "/get-a-family-doctor" },
        },
        {
          title: "Ina bukatar fahimtar abin da aka rufe",
          content:
            "Karanta game da OHIP, IFHP, inshora masu zaman kansu, shirye-shiryen ɗalibai, inshorar magani, da kuɗaɗen da aka saba biya da kanka.",
          icon: "shield",
          link: { text: "Kuɗi da Inshora", url: "/costs-and-coverage" },
        },
        {
          title: "Ina bukatar taimakon harshe",
          content:
            "Karanta wannan jagora a harsuna 33 ta amfani da menu na Harshe, kuma ka tambaya game da taimakon mai fassara don tattaunawar likita da izini.",
          icon: "info",
          link: { text: "Sauƙin amfani da harshe", url: "/about#accessibility" },
        },
        {
          title: "Ina bukatar gwajin jini, ɗaukar hoto, ko sake cika magani",
          content:
            "Yi amfani da jerin ayyukan gida don nemo mataki na gaba mai amfani bayan ziyara.",
          icon: "file",
          link: { text: "Bincika Ayyukan Gida", url: "/local-services" },
        },
        {
          title: "Ban tabbata inda zan fara ba",
          content:
            "Kira Health811 don shawarar ma'aikaciyar jinya idan ba ka tabbata yadda gaggawar yanayinka take ba.",
          icon: "clock",
          link: { text: "Health811 da jagorar gaggawa", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Kyawawan matakan farko a makonka na farko",
      type: "steps",
      items: [
        "Koyi inshorarka: Karanta abin da OHIP, IFHP, inshora masu zaman kansu, da shirye-shiryen ɗalibai suka saba rufewa. Idan za ka iya cancantar OHIP, nemi shi da wuri-wuri.",
        "Zaɓi shirinka na gaggawa: San lokacin da za ka kira 911, lokacin da za ka fara da Health811, da inda za ka sami urgent care ko kulawar rana ɗaya a Kingston.",
        "Tsara kulawa ta yau da kullum: Idan ba ka da mai ba ka kulawa na yau da kullum, koyi zaɓinka na likitocin iyali, nurse practitioners, cibiyoyin lafiyar al'umma, asibitocin ɗalibai, asibitocin walk-in, da kulawa ta intanet.",
        "Ajiye bayanan lafiyarka wuri ɗaya: Adana katin lafiyarka ko takardun IFHP, jerin magunguna, rikodin rigakafi, da kwafin duk wani requisition ko referral.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Idan ba ka da OHIP tukuna",
      type: "callout",
      content:
        "Kada ka jira sai ka yi rashin lafiya kafin ka koyi hanyar inshorarka. Idan ka cancanci OHIP, nemi shi da wuri. Idan an rufe ka ta IFHP ko shirin makaranta ko mai zaman kansa, riƙe wannan bayanin tare da kai. Idan ba ka da inshora, tambayi kuɗin kafin ziyara kuma nemi ayyukan al'umma ko masu sauƙin shiga inda ya dace.",
      link: { text: "Karanta game da inshora", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Riƙe waɗannan abubuwa a shirye",
      type: "checklist",
      items: [
        "Katin lafiyarka, takardun IFHP, ko bayanan inshora",
        "Jerin magunguna, ko da kana shan magunguna kaɗan ne kawai",
        "Suna da lambar wayar asibitinka ko mai ba ka kulawa na ƙarshe, idan kana da su",
        "Duk wani requisition, referral, takardun sallama daga asibiti, ko umarnin gwaji na kwanan nan",
        "Tambayoyin da kake son yi cikin sauƙin harshe",
        "Bukatun mai fassara a rubuce don kada ka manta da tambaya",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Kana Bukatar Taimako Yanzu?",
  description:
    "Yi amfani da wannan shafin lokacin da kake da matsalar lafiya yau ko daren yau kuma ba ka san inda za ka fara ba.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Sami shawarar likita daga Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Sabis na hukuma na shawarar ma'aikaciyar jinya awa 24 kowace rana.",
    },
    {
      title: "9-8-8: Layin Taimakon Rikicin Kashe Kai",
      url: "https://988.ca/",
      note: "Layin taimakon rikicin kashe kai na ƙasa na hukuma. Kira ko aika saƙo zuwa 9-8-8, kyauta, awa 24 kowace rana.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Cibiyar asibitoci ta hukuma don bayanan gaggawa, urgent care, da ɗaukar hoto.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Ƙungiyar hukuma ta gida don lafiyar hankali da taimakon rikici.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Gaggawa ko urgent?",
      type: "comparison",
      comparison: {
        left: {
          title: "Je sashen gaggawa nan take don matsaloli kamar:",
          items: [
            "Ciwon ƙirji, babbar wahalar numfashi, ko alamun shanyewar jiki",
            "Zubar jini mai tsanani, babban rauni, ko suma",
            "Ruɗewa kwatsam, farfaɗiya, ko mummunan rashin jituwar jiki (allergy)",
            "Gaggawar kariya inda jira zai iya jefa rai ko gaɓa cikin haɗari",
          ],
        },
        right: {
          title:
            "Fara da urgent care, Health811, ko asibitin rana ɗaya don matsaloli kamar:",
          items: [
            "Gocewar jiki, ƙananan yanke, ƙuraje, ciwon kunne, ko zazzaɓi ba tare da alamun haɗarin gaggawa ba",
            "Matsalolin sake cika magani da ba za su iya jiran alƙawari na yau da kullum ba",
            "Tambayoyi kan ko kana bukatar urgent care daren yau",
            "Matsalar da ke jin kamar gaggawa amma ba a fili take barazanar rai ba",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Yanayin gama-gari bayan lokutan aiki",
      type: "table",
      columns: ["Yanayi", "Kyakkyawan mataki na farko", "Abin tunawa"],
      rows: [
        {
          cells: [
            "Ban tabbata yadda gaggawar wannan take ba",
            "Kira Health811",
            "Ma'aikaciyar jinya za ta iya taimaka maka ka yanke shawara ko za ka zauna gida, ka nemi urgent care, ko ka je sashen gaggawa.",
          ],
        },
        {
          cells: [
            "Likitana ya rufe kuma ina bukatar shawara daren yau",
            "Health811 ko jagorar urgent care",
            "Kada ka ɗauka cewa sashen gaggawa shi ne kaɗai zaɓinka idan babu alamun haɗarin gaggawa.",
          ],
        },
        {
          cells: [
            "Ina bukatar kulawa ga yarona",
            "Yi amfani da alamun haɗarin gaggawa iri ɗaya, sannan ka nemi kulawar rana ɗaya ko ka kira Health811 idan ba ka tabbata ba",
            "Kawo katin lafiyar yaron, jerin magunguna, da lokutan da alamun suka fara idan zai yiwu.",
          ],
        },
        {
          cells: [
            "Ina bukatar taimakon lafiyar hankali daren yau",
            "Kira ko aika saƙo zuwa 9-8-8 (Layin Taimakon Rikicin Kashe Kai), ko kira layin rikici na AMHS-KFLA na awa 24",
            "Idan akwai haɗarin kariya nan take, kira 911.",
          ],
        },
      ],
      caption:
        "Wannan tebur jagora ce ta gama-gari kawai. Idan wani na iya kasancewa cikin haɗari nan take, kira 911.",
    },
    {
      id: "kingston-start-points",
      title: "Wuraren farawa a Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Sashen Gaggawa (Emergency)",
          content:
            "Yi amfani da kulawar gaggawa don matsalolin da ke barazanar rai ko masu yiwuwar barazanar rai.",
          icon: "alert",
          link: {
            text: "Jerin gaggawa da urgent",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Cibiyar Urgent Care",
          content:
            "Tana da amfani ga matsaloli da yawa na rana ɗaya da ba za su iya jira ba amma ba gaggawa ba ce a fili.",
          icon: "clock",
          link: {
            text: "Urgent da kulawar rana ɗaya",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Shawarar ma'aikaciyar jinya ta waya ko intanet idan ba ka san inda za ka je ba. Akwai taimakon waya a harsuna da yawa.",
          icon: "info",
          link: { text: "Jerin Health811", url: "/local-services/health811" },
        },
        {
          title: "Taimakon rikicin lafiyar hankali",
          content:
            "Kira ko aika saƙo zuwa 9-8-8 (Layin Taimakon Rikicin Kashe Kai) a kowane lokaci, ko yi amfani da taimakon rikici na gida kamar layin rikici na AMHS-KFLA na awa 24.",
          icon: "heart",
          link: { text: "Jerin lafiyar hankali", url: "/local-services?category=mental-health" },
        },
        {
          title: "Taimako bayan cin zarafin jima'i",
          content:
            "Yi amfani da taimakon rikici na musamman idan kana bukatar tallafin tunani nan take, kāriya, ko tsara kariya.",
          icon: "shield",
          link: {
            text: "Jerin taimako",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Zaɓuɓɓukan gaggawa ga ɗalibai",
          content:
            "Idan kai ɗalibi ne, duba ko sabis ɗin lafiyar harabar makarantarka shi ne mafi kyawun matakin farko don bukatun da ba na gaggawa ba.",
          icon: "stethoscope",
          link: { text: "Jerin lafiyar ɗalibai", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Idan har yanzu ba ka tabbata ba",
      type: "callout",
      content:
        "Lokacin da matsalar ba a fili take barazanar rai ba amma kana damuwa da jira, fara da Health811. Idan wani ba zai iya kasancewa lafiya ba, yana iya taɓarɓarewa da sauri, ko ba za ka iya samun taimakon da ya dace a kan lokaci ba, yi amfani da ayyukan gaggawa.",
      link: { text: "Kira Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Kawo waɗannan idan za ka iya",
      type: "checklist",
      items: [
        "Katin lafiya, takardun IFHP, ko duk wani katin inshora da kake da shi",
        "Jerin magunguna ko hotunan kwalaben magani",
        "Lokacin da alamun suka fara da duk abin da ya tsananta su",
        "Bukatun mai fassara a rubuce idan damuwa za ta iya sa ka mantawa daga baya",
        "Caja na waya da wani da zai goyi bayanka idan hakan zai taimaka maka",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Neman Kulawar Farko",
  description:
    "Koyi hanyoyi daban-daban na samun kiwon lafiya na yau da kullum a Kingston idan ba ka da mai ba ka kulawa tukuna.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nemo likitan iyali ko nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Jagorar hukuma ta Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Bayanan hukuma kan ayyukan cibiyoyin lafiyar al'umma na gida.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Bayanan lafiyar ɗalibai na hukuma ga ɗaliban Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Bayanan lafiyar ɗalibai na hukuma ga ɗaliban St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Abin da kulawar farko ke nufi",
      type: "default",
      content:
        "Kulawar farko ita ce wurin da yawanci kake fara zuwa don bukatun lafiya na yau da kullum. Wannan ya haɗa da duba lafiya, sabunta magunguna, kula da cututtuka masu ɗorewa, referrals (turawa), kulawar rigakafi, da bibiya bayan matsalolin gaggawa.\n\nA Kingston, hanyarka ta kulawar farko na iya haɗawa da likitan iyali, nurse practitioner, cibiyar lafiyar al'umma, asibitin harabar makaranta, ko haɗin zaɓuɓɓuka na ɗan lokaci yayin da kake jiran kulawa mafi ɗorewa.",
    },
    {
      id: "access-matrix",
      title: "Hanyoyin samun kulawar farko",
      type: "table",
      columns: ["Hanya", "Mafi dacewa don", "Wanda zai iya amfani da ita", "Yadda za a fara"],
      rows: [
        {
          cells: [
            "Likitan iyali ko nurse practitioner",
            "Kulawa ta yau da kullum mai ɗorewa da tsara lafiya na dogon lokaci",
            "Marasa lafiya da za su iya yin rajista da wani mai ba da kulawa",
            "Yi amfani da Health Care Connect kuma ka sa ido ga guraben gida",
          ],
        },
        {
          cells: [
            "Cibiyar lafiyar al'umma",
            "Kulawa ta al'umma, tallafi mai sauƙin shiga, da wasu kulawar sababbin shigowa ko masu bukatu masu sarƙaƙiya",
            "Cancanta ta dogara da shirin da matsayin karɓar sababbi",
            "Tuntuɓi ƙungiyar kai tsaye ka tambaya game da karɓar sababbi",
          ],
        },
        {
          cells: [
            "Sabis ɗin lafiyar ɗalibai",
            "Saurin samu ga ɗaliban da aka yi wa rajista",
            "Ɗalibai kaɗai da suka cancanta ta makarantar",
            "Yi amfani da sabis ɗin lafiya ko walwala na harabarka",
          ],
        },
        {
          cells: [
            "Asibitin walk-in ko urgent care na rana ɗaya",
            "Kulawa ta ɗan lokaci yayin da kake jira ko lokacin da mai ba ka kulawa ba ya nan",
            "Jama'a gabaɗaya, bisa ka'idojin karɓa na yau da kullum",
            "Duba yanayin shiga na yanzu kafin ka tafi",
          ],
        },
        {
          cells: [
            "Kulawar farko ta intanet",
            "Wasu batutuwan sake cika magani, shawara, da na yau da kullum",
            "Ya bambanta gwargwadon mai bayarwa da inshora",
            "Duba abin da mai bayarwa zai iya da abin da ba zai iya kula da shi lafiya ta intanet ba",
          ],
        },
      ],
      caption:
        "Hanya mafi kyau ta dogara da cancantarka, gaggawarka, da ko kana bukatar kulawa ta ɗan lokaci ko mai ɗorewa.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Idan ba ka da mai ba ka kulawa na yau da kullum",
      type: "steps",
      items: [
        "Yi rajista ta hanyar hukuma ta lardin: Yi amfani da Health Care Connect idan ba ka da likitan iyali ko nurse practitioner.",
        "Duba ko ka cancanci zaɓuɓɓukan harabar makaranta ko lafiyar al'umma: Ya kamata ɗalibai su fara da asibitin makarantarsu. Wasu ayyukan lafiyar al'umma suna da fifikon karɓa na musamman.",
        "Gina shiri na ɗan lokaci mai aminci: San waɗanne ayyukan walk-in, gaggawa, na intanet, kantin magani, da lafiyar hankali za ka iya amfani da su yayin jira.",
        "Riƙe bayanan kanka: Adana jerin magunguna, sakamakon gwaje-gwaje, referrals, da sunayen likitocin da ka gani.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Abin da za ka yi yayin da kake jira",
      type: "checklist",
      items: [
        "Yi amfani da kulawar walk-in, urgent, ko ta intanet don bukatun ɗan lokaci inda ya dace",
        "Tambayi kantin magani irin taimakon sake cika magani ko kulawar ƙananan cututtuka da ke akwai",
        "Riƙe jerin magunguna guda ɗaya da aka sabunta kuma ka ɗauke shi a kowace ziyara",
        "Kawo kwafin muhimman sakamako ko takardun sallama lokacin da kulawarka ta rarrabu",
        "Yi amfani da asibiti guda don bibiya idan zai yiwu don kulawarka ta ɗan zama mai ɗorewa",
      ],
    },
    {
      id: "next-best-option",
      title: "Idan bukatarka ta gaggawa ce amma ba gaggawar haɗarin rai ba",
      type: "callout",
      content:
        "Rashin likitan iyali ba ya nufin ka jinkirta kulawa mai muhimmanci. Yi amfani da zaɓin ɗan lokaci da ya dace da matsalar da ke gabanka, sannan ka tsara shirin ci gaba da kulawa bayan an magance matsalar gaggawa.",
      link: { text: "Bincika zaɓuɓɓukan kulawar farko", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Kuɗi da Inshora",
  description:
    "Jagorar inshora mai sauƙin harshe kan OHIP, IFHP, Canadian Dental Care Plan, shirye-shiryen ɗalibai ko masu zaman kansu, da kuɗaɗen da aka saba biya da kanka.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nemi OHIP ka sami katin lafiya",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Jagorar OHIP ta hukuma.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Bayanan inshorar IFHP na hukuma.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Jagorar hukuma ta inshorar magani ta lardin.",
    },
    {
      title: "Ontario: Sami taimako kan tsadar magunguna",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Jagorar hukuma ta Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Bayanan hukuma na shirin inshorar haƙora na tarayya da cancanta.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Tushen inshora",
      type: "default",
      content:
        "Inshora a Ontario ta dogara da matsayinka na shari'a, shekarunka, kuɗin shiga, cancantar shirye-shirye, da ko kana da shirin inshorar makaranta ko mai zaman kansa.\n\nAn rufe yawancin ayyukan likita da na asibiti masu muhimmanci ga marasa lafiya masu cancantar OHIP. Wannan **ba** ya nufin komai kyauta ne. Magunguna, kula da haƙora, kula da ido, fom, takardun rashin lafiya, da yawancin sauran ayyukan ƙwararru galibi suna bukatar inshora daban ko biya da kuɗin kanka.\n\nLabari mai daɗi idan kai sabo ne: **babu lokacin jira don OHIP**. Idan ka cancanta, za ka iya nema da zarar ka iso Ontario, kuma inshorar tana farawa da zarar an amince da bukatarka. Kada ka jira sai ka yi rashin lafiya kafin ka nema.",
    },
    {
      id: "coverage-matrix",
      title: "Hanyoyin inshora a taƙaice",
      type: "table",
      columns: [
        "Irin inshora",
        "Yawanci tana taimakawa da",
        "Abin da har yanzu ba za a iya rufewa ba",
        "Abin da za ka yi gaba",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Yawancin ayyukan likita da na asibiti masu muhimmanci",
            "Yawancin magunguna, kula da haƙora, kula da ido, da fom",
            "Nemi idan ka cancanta kuma ka riƙe katinka a sabunta",
          ],
        },
        {
          cells: [
            "IFHP",
            "Inshora ga 'yan gudun hijira masu cancanta da masu neman mafaka bisa shirin tarayya",
            "Bayanai sun bambanta gwargwadon rukuni da sabis",
            "Duba jagorar IFHP ta hukuma kuma ka tambayi asibitin ko kantin magani ko suna karɓarsa",
          ],
        },
        {
          cells: [
            "Inshorar makaranta ko mai zaman kanta",
            "Galibi tana taimakawa da magunguna, shawarwari, haƙora, ido, da sauran ayyukan ƙwararru",
            "Iyakokin inshora, kuɗin haɗin biya (co-pays), da ka'idojin cibiyoyi sun bambanta",
            "Karanta littafin shirin kafin ka ɗauka cewa an rufe wani sabis",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Inshorar haƙora ga mazauna masu cancanta da ba su da inshorar haƙora mai zaman kanta kuma kuɗin shigar iyali da aka daidaita bai kai $90,000 ba",
            "Ba kowane aikin haƙora ake rufewa ba, kuma ana iya biyan wani kaso gwargwadon kuɗin shiga",
            "Duba cancanta ka nema ta shafin CDCP na hukuma na Gwamnatin Canada",
          ],
        },
        {
          cells: [
            "Babu inshora mai aiki",
            "Har yanzu za ka iya samun wasu ayyuka, amma ana iya biyan kuɗi",
            "Kuɗin na iya yin yawa don ziyara, gwaje-gwaje, ko magunguna",
            "Tambayi kuɗin kafin ziyarar kuma nemi zaɓuɓɓukan al'umma inda ya dace",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Abin da galibi ba a rufewa sosai",
      type: "checklist",
      items: [
        "Yawancin magungunan likita sai dai idan ka cancanci shirin gwamnati ko kana da wani shiri",
        "Kula da haƙora, sai dai idan ka cancanci Canadian Dental Care Plan, Healthy Smiles Ontario, shirin haƙora na al'umma, ko shirin fa'ida",
        "Kula da ido banda takamaiman hanyoyin cancanta",
        "Physiotherapy (jinyar motsa jiki), shawarwari, tausa, da sauran ayyukan ƙwararru sai dai idan wani shiri ya rufe su",
        "Fom, wasiƙu, kuɗin rasa alƙawari, da sauran kuɗaɗen gudanarwa da yawa",
      ],
    },
    {
      id: "drug-coverage",
      title: "Hanyoyin inshorar magani",
      type: "default",
      content:
        "Inshorar magani galibi ita ce inda sababbin shigowa ke mamaki. Ana iya rufe ziyarar likita, amma takardar magani na iya ci gaba da kashe kuɗi.\n\nShirye-shiryen magani na gwamnati na iya taimakawa gwargwadon shekaru, kuɗin shiga, da cancanta. **Ontario Drug Benefit** yana rufe magunguna da yawa ga mutane masu shekaru 65 zuwa sama da mutane a wasu shirye-shirye, kuma **OHIP+** yana rufe takardun magani da yawa ga mutane masu shekaru 24 zuwa ƙasa da ba su da shirin inshora mai zaman kansa. Ontario kuma tana da **Trillium Drug Program** ga wasu mutane masu tsadar magani mai yawa idan aka kwatanta da kuɗin shigar gida. Idan kana da shirin makaranta ko mai zaman kansa, duba ko yana haɗa kai da inshorar gwamnati ko yana maye gurbinta.",
    },
    {
      id: "coverage-scenarios",
      title: "Tambayoyin inshora na gama-gari",
      type: "faq",
      faqs: [
        {
          question: "Ba ni da OHIP tukuna. Zan iya samun kulawa?",
          answer:
            "Eh, amma ana iya biyan kuɗi kuma hanya mafi kyau ta dogara da matsayinka da gaggawarka. Tambayi kuɗin kafin kulawar da ba ta gaggawa ba idan zai yiwu, kuma duba cancantar IFHP ko shirin makaranta ko mai zaman kansa idan hakan ya shafe ka.",
        },
        {
          question: "Ni ɗalibin ƙasashen waje ne. OHIP ne kaɗai zaɓina?",
          answer:
            "Ba kullum ba. Ɗalibai da yawa suna dogara da shirin inshorar makaranta ko mai zaman kansa maimakon OHIP. Yi amfani da takardun shirin makarantarka na hukuma da ayyukan lafiyar ɗalibai don tabbatar da abin da aka rufe.",
        },
        {
          question: "Shin maganina zai zama kyauta idan an rufe alƙawarina?",
          answer:
            "Ba lallai ba. Rufe alƙawari da rufe takardar magani galibi abubuwa ne daban.",
        },
        {
          question: "An rufe kula da haƙora?",
          answer:
            "Kula da haƙora ya rabu da OHIP ga yawancin manya. Canadian Dental Care Plan na tarayya yanzu yana rufe mazauna da yawa da ba su da inshorar haƙora mai zaman kanta kuma kuɗin shigar iyali da aka daidaita bai kai $90,000 ba — yawanci kana bukatar ka riga ka shigar da takardar haraji ta Canada don cancanta. Yara a iyalai masu ƙarancin kuɗin shiga na iya cancantar Healthy Smiles Ontario, kuma Kingston tana da asibitin haƙora na al'umma ga mutane a wasu shirye-shirye.",
        },
        {
          question:
            "Ta yaya zan san ko sabis na gwamnati ne, na al'umma ne, ko mai zaman kansa ne?",
          answer:
            "Yi amfani da matattarar jerin ayyuka ka duba bayanan jerin. Idan ba ka tabbata ba, tuntuɓi sabis ɗin kafin ka yi alƙawari.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Ziyararka ta Kiwon Lafiya",
  description:
    "Abin da za ka kawo, yadda za ka yi tambayoyi, da yadda za ka sadar cikin aminci yayin ziyarar kiwon lafiya.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Kiwon lafiya a Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Jagorar tsarin gama-gari.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Abin da za ka kawo",
      type: "checklist",
      items: [
        "Katin lafiyarka, takardun IFHP, ko sauran bayanan inshora",
        "Cikakken jerin magunguna, har da bitamin da magungunan da ake saya ba tare da takardar likita ba",
        "Sunayen alamomi, lokacin da suka fara, da abin da ya canza",
        "Tambayoyin da kake son a amsa kafin ka tafi",
        "Duk wani requisition, referral, takardun sallama, ko sakamakon gwaji na kwanan nan",
        "Bukatun mai fassara a rubuce don kada ka manta da tambaya",
      ],
    },
    {
      id: "during-the-visit",
      title: "Yayin ziyarar",
      type: "steps",
      items: [
        "Fara da babbar matsalarka: Yawancin alƙawura gajeru ne, don haka fara da damuwar da ta fi muhimmanci a yau.",
        "Yi amfani da sauƙin harshe: Babu laifi ka ce, 'Ban fahimci wannan kalmar ba' ko 'Za ka iya bayyana ta a hanya mafi sauƙi?'",
        "Maimaita shirin: Kafin ka tafi, faɗi matakan na gaba da baki don ka san ko kana bukatar gwaji, referral, sake cika magani, ko alƙawarin bibiya.",
        "Tambayi abin da zai faru idan abubuwa suka taɓarɓare: Ya kamata ka san lokacin da za ka sake kira, lokacin amfani da urgent care, da lokacin amfani da kulawar gaggawa.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Taimakon mai fassara da sadarwa",
      type: "default",
      content:
        "Idan kana bukatar taimakon harshe, tambaya da wuri. Kada ka jira har ƙarshen alƙawarin. Za ka iya karanta wannan gidan yanar gizo a harsuna da dama ta menu na Harshe, amma bai kamata fassarar gidan yanar gizo ta maye gurbin taimakon mai fassara ba don shawarar magani, umarnin magunguna, ko izini.\n\nZa ka iya cewa: **'Ina bukatar mai fassara, don Allah.'** Health811 (kira 811) shi ma yana ba da taimakon waya a harsuna da yawa. Idan wani mai goyon baya ya zo tare da kai, ka tuna cewa ɗan iyali ba kullum shi ne mafi kyau ko mafi aminci wajen fassara bayanan likita masu sarƙaƙiya ko masu muhimmanci ba.",
    },
    {
      id: "questions-to-ask",
      title: "Tambayoyin da ya kamata a yi",
      type: "checklist",
      items: [
        "Me kake tunanin yake faruwa?",
        "Me ya kamata in yi gaba?",
        "Ina bukatar gwaji, requisition, referral, ko ziyarar bibiya?",
        "Yaushe zan yi tsammanin jin sakamako?",
        "Waɗanne alamun haɗari ke nufin in sake kira ko in nemi taimakon gaggawa?",
      ],
    },
    {
      id: "privacy",
      title: "Sirri da izini",
      type: "default",
      content:
        "Bayanan lafiyarka na sirri ne. Idan ba ka tabbata wanda zai ga bayananka ba, tambaya. Idan ba ka fahimci fom, tattaunawar izini, ko shirin magani ba, ka rage gudu ka nemi bayani mafi haske.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Bayan Ziyara",
  description:
    "Koyi abin da ke faruwa bayan ziyara, har da requisitions (takardun gwaji), sakamakon gwaji, referrals (turawa), da lokacin sake kira.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Bayanan tsarin asibitin gida.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Bayanan hanyar dakin gwaje-gwaje na al'umma da shafin marasa lafiya.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Abin da galibi ke faruwa bayan ziyara",
      type: "steps",
      items: [
        "Kana tafiya da shiri: Wannan na iya haɗawa da magani, requisition, referral, alƙawarin bibiya, ko umarnin lura da alamun haɗari.",
        "Kana iya bukatar yin mataki na gaba da kanka: Misali, kana iya bukatar shirya gwajin jini, ɗaukar hoto, ɗaukar magani daga kantin magani, ko ziyarar bibiya.",
        "Sakamako yawanci yana komawa ga likitan da ya nemi gwajin: Dakin gwaje-gwaje ko wurin ɗaukar hoto na iya rashin bayyana maka sakamakon nan take.",
        "Ba lallai a kira ka don kowane sakamako na al'ada ba: Tambayi yadda tsarin bibiya na asibitin yake don ka san abin da za ka yi tsammani.",
      ],
    },
    {
      id: "common-terms",
      title: "Kalmomin gama-gari bayan ziyara",
      type: "table",
      columns: ["Kalma", "Ma'anarta a sauƙin harshe", "Abin da yawanci za ka yi gaba"],
      rows: [
        {
          cells: [
            "Requisition",
            "Fom da ke gaya wa dakin gwaje-gwaje ko asibitin ɗaukar hoto irin gwajin da kake bukata",
            "Shirya ko halarci gwajin kuma ka riƙe kwafi idan za ka iya",
          ],
        },
        {
          cells: [
            "Referral",
            "Bukata daga wani likita zuwa wani sabis ko ƙwararre",
            "Jira a tuntuɓe ka, sannan ka sake kira idan an gaya maka ka bi sahu kuma babu abin da ya faru",
          ],
        },
        {
          cells: [
            "Follow-up (bibiya)",
            "Dubawa bayan magani, gwaji, ko canjin alamomi",
            "Tambayi yaushe da yadda bibiyar za ta kasance kafin ka tafi",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Lokacin sake kira",
      type: "checklist",
      items: [
        "Ba ka fahimci requisition, referral, ko umarnin magani ba",
        "An gaya maka wani zai tuntuɓe ka kuma ba ka ji komai ba a cikin lokacin da ake tsammani",
        "Alamunka suna taɓarɓarewa ko ba sa samun sauƙi yadda aka gaya maka za su yi",
        "Kantin magani, dakin gwaje-gwaje, ko asibitin ɗaukar hoto ya gaya maka wani abu ya ɓace daga takardun",
        "Kana tunanin watakila an rasa wani sakamako ko har yanzu kana damuwa",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Yanayin gama-gari",
      type: "faq",
      faqs: [
        {
          question: "Ina bukatar gwajin jini bayan ziyara. Me zan yi?",
          answer:
            "Duba ko kana da requisition da ko dakin gwaje-gwajen yana son a shirya alƙawari. Sannan yi amfani da jerin ayyuka don nemo wurin dakin gwaje-gwaje. Kawo requisition da bayanan inshorarka.",
        },
        {
          question: "Ban fahimci fom ɗin requisition ko referral ba.",
          answer:
            "Kira asibitin da ya ba ka shi ka nemi su bayyana shi cikin sauƙin harshe. Daidai ne ka tambayi abin da fom ɗin yake, inda zai je, da ko kana bukatar yin alƙawari da kanka.",
        },
        {
          question: "Wa ke bibiyar sakamakon gwaji?",
          answer:
            "Yawanci likitan da ya nemi gwajin. Tambayi ofishin wannan likitan irin tsarinsu na yau da kullum don sakamako na al'ada da marasa al'ada.",
        },
        {
          question: "Tsawon wane lokaci referrals ke ɗauka?",
          answer:
            "Lokutan referral sun bambanta sosai. Tambayi irin jiran da ya zama al'ada ga yanayinka da abin da za ka yi idan ba ka ji komai ba.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Matakai masu amfani na gaba",
      type: "grid",
      gridItems: [
        {
          title: "Nemo dakunan gwaje-gwaje da ɗaukar hoto",
          content:
            "Yi amfani da jerin ayyuka don gwajin jini, X-ray, ultrasound, da jerin ɗaukar hoto.",
          icon: "file",
          link: { text: "Gwaje-gwaje da ɗaukar hoto", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Nemo kantin magani",
          content:
            "Yi amfani da jerin ayyuka don kantunan magani, taimakon sake cikawa, da tallafin magunguna.",
          icon: "shield",
          link: { text: "Kantunan magani", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Kana bukatar tsara kulawar bibiya?",
          content:
            "Yi amfani da shafin kulawar farko idan ba ka san inda bibiyar dogon lokaci za ta kasance ba.",
          icon: "stethoscope",
          link: { text: "Nemo Kulawar Farko", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Magunguna da Kantunan Magani",
  description:
    "Fahimci takardun magani, sake cikawa, taimakon mai harhaɗa magani, da yadda ake biyan magunguna a Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Abin da masu harhaɗa magani za su iya yi",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Bayanan hukuma na lardin kan masu harhaɗa magani da kantunan magani.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Jagorar hukuma ta inshorar magani ta lardin.",
    },
    {
      title: "Ontario: Sami taimako kan tsadar magunguna",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Jagorar hukuma ta Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Abin da mai harhaɗa magani zai iya taimakawa",
      type: "default",
      content:
        "Masu harhaɗa magani (pharmacists) suna yin fiye da ba da magani kawai. Za su iya bayyana yadda ake shan magani cikin aminci, duba cuɗanyar magunguna, da nazarin illolin da ka iya tasowa.\n\nA Ontario, masu harhaɗa magani kuma za su iya **dubawa da rubuta magani don ƙananan cututtuka 19 na gama-gari** — har da ciwon ido mai ja (pink eye), ƙurajen leɓe, kamuwa da cutar hanyar fitsari (a mata), cizon kwari, da rashin jituwar yanayi (allergies). Dubawar kyauta ce da katin lafiyarka na Ontario, kuma jerin cututtukan na iya ci gaba da ƙaruwa.\n\nKantin magani kuma yana ɗaya daga cikin mafi kyawun wurare don yin tambayoyi masu amfani kamar: **Shin wannan sake cikawa na gaggawa ne? Akwai zaɓi mai rahusa? Me zan yi idan na manta da sha?**",
    },
    {
      id: "fill-a-prescription",
      title: "Yadda ake cika takardar magani",
      type: "steps",
      items: [
        "Sami takardar magani: Tana iya zama ta takarda, ta fax, ko a aika ta na'ura.",
        "Zaɓi kantin magani: Amfani da kantin magani guda akai-akai yana taimaka musu su gano cuɗanyar magunguna da matsalolin tarihin sake cikawa.",
        "Tambayi lokaci da kuɗi: Kantin magani zai iya gaya maka yaushe zai shirya da ko shirinka yana rufe shi.",
        "Saurari shawarwarin: Tambayi abin da maganin yake yi, yadda ake shan shi, da yaushe ya kamata ka sake kira idan bai taimaka ba.",
      ],
    },
    {
      id: "refill-options",
      title: "Matsalolin sake cikawa da magunguna",
      type: "table",
      columns: ["Yanayi", "Kyakkyawan mataki na farko", "Dalili"],
      rows: [
        {
          cells: [
            "Ina bukatar sake cikawa na yau da kullum",
            "Fara da kantin maganinka na yau da kullum ko likitanka",
            "Za su iya gaya maka ko ana bukatar sake cikawa, sabuntawa, ko sabon alƙawari",
          ],
        },
        {
          cells: [
            "Likitana ba ya nan kuma magani na iya ƙarewa",
            "Tambayi kantin magani waɗanne zaɓuɓɓuka ke akwai, sannan ka yi amfani da walk-in, intanet, ko urgent care idan ana bukata",
            "Mataki na gaba mafi aminci ya dogara da maganin da yanayinka",
          ],
        },
        {
          cells: [
            "Ban fahimci yadda zan sha wannan magani ba",
            "Nemi mai harhaɗa magani ya sake bayyana shi cikin sauƙin harshe",
            "Wannan wani ɓangare ne na amfani da magani cikin aminci",
          ],
        },
        {
          cells: [
            "Maganin ya yi tsada sosai",
            "Tambaya game da nau'ikan generic (magani iri ɗaya mai rahusa), inshorar shirinka, da shirye-shiryen gwamnati",
            "Kuɗin magani ya bambanta kuma inshorar galibi ta rabu da ziyarar kanta",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Hanyoyin da za a iya biyan magunguna",
      type: "checklist",
      items: [
        "Shirin magani na gwamnati, idan ka cancanta",
        "Shirin inshorar makaranta ko mai zaman kansa",
        "Haɗin inshorar gwamnati da mai zaman kansa",
        "Daga aljihu idan babu shirin da ke rufe maganin",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Kana bukatar taimakon kantin magani na gida?",
      type: "callout",
      content:
        "Yi amfani da jerin ayyuka don nemo kantunan magani, taimakon sake cikawa, da zaɓuɓɓukan intanet ko na rana ɗaya lokacin da kake ƙoƙarin magance matsalar magani da sauri.",
      link: { text: "Bincika jerin kantunan magani", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Taimakon Lafiyar Hankali",
  description:
    "Lafiyar hankali ta gida, shawarwari, taimakon matasa, da hanyoyin lokacin rikici a Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Layin Taimakon Rikicin Kashe Kai",
      url: "https://988.ca/",
      note: "Layin taimakon rikicin kashe kai na ƙasa na hukuma. Kira ko aika saƙo zuwa 9-8-8, kyauta, awa 24 kowace rana.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Bayanan hukuma na lafiyar hankalin manya da taimakon rikici.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Layin taimako na hukuma na Ontario don lafiyar hankali da jaraba.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Bayanan hukuma na lafiyar hankalin yara da matasa.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Idan wani ba zai iya kasancewa lafiya ba",
      type: "callout",
      content:
        "Idan akwai haɗarin rai ko kariya nan take, kira 911. Don tunanin kashe kai ko damuwa mai tsanani, za ka iya **kira ko aika saƙo zuwa 9-8-8** (Layin Taimakon Rikicin Kashe Kai) a kowane lokaci — kyauta ne, na sirri, kuma yana nan awa 24 kowace rana a Turanci da Faransanci. Za ka kuma iya kiran layin rikici na AMHS-KFLA na awa 24 a 613-544-4229. Kada ka jira alƙawari na yau da kullum.",
      link: { text: "Jerin lafiyar hankali", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Nau'o'in taimako",
      type: "grid",
      gridItems: [
        {
          title: "Taimakon rikici",
          content:
            "Yi amfani da wannan don damuwa nan take, damuwar kariya, ko lokacin da jira ba shi da aminci.",
          icon: "alert",
        },
        {
          title: "Taimakon gaggawa",
          content:
            "Yi amfani da wannan lokacin da yanayin yake mai tsanani kuma kana bukatar taimako nan ba da jimawa ba, amma ba gaggawar barazanar rai ba ce nan take.",
          icon: "clock",
        },
        {
          title: "Shawarwari na yau da kullum",
          content:
            "Yi amfani da wannan don damuwa mai ɗorewa, baƙin ciki mai zurfi, matsi, juyayi, matsalolin dangantaka, ko sauye-sauyen rayuwa.",
          icon: "heart",
        },
        {
          title: "Ayyukan yara da matasa",
          content:
            "Yi amfani da ayyukan lafiyar hankalin matasa na musamman lokacin da mai bukatar kulawa yaro ne ko matashi.",
          icon: "info",
        },
        {
          title: "Taimakon harabar makaranta",
          content:
            "Ɗalibai na iya samun mafi kyawun hidima ta hanyoyin walwala ko shawarwari na harabarsu da farko.",
          icon: "stethoscope",
        },
        {
          title: "Taimako bayan cin zarafin jima'i",
          content:
            "Yi amfani da taimako na musamman don rikici, shawarwari, kāriya, da tsara kariya bayan cin zarafin jima'i.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Inda za a fara a yanayin gama-gari",
      type: "table",
      columns: ["Yanayi", "Mafi kyawun matakin farko", "Dalili"],
      rows: [
        {
          cells: [
            "Ina bukatar taimakon lafiyar hankali daren yau",
            "Kira ko aika saƙo zuwa 9-8-8, kira layin rikici na AMHS-KFLA, ko yi amfani da kulawar gaggawa idan kariya na cikin haɗari",
            "Kada ka jira alƙawari na yau da kullum lokacin da yanayin ya ji rashin aminci",
          ],
        },
        {
          cells: [
            "Ina bukatar shawarwari amma ina cikin aminci yanzu",
            "Shawarwarin al'umma, likitan iyali, nurse practitioner, ko tallafin shirin mai zaman kansa",
            "Waɗannan za su iya taimakawa da kulawa mai ɗorewa da referrals",
          ],
        },
        {
          cells: [
            "Ina bukatar taimako ga yarona",
            "Ayyukan lafiyar hankalin yara ko matasa kuma, idan ana bukata, jagorar gaggawa",
            "Yara da matasa galibi suna da hanyoyi daban",
          ],
        },
        {
          cells: [
            "Ni ɗalibi ne",
            "Lafiyar harabar makaranta ko shawarwari da farko, sai dai idan yanayin ba shi da aminci ko mai tsanani ne",
            "Ayyukan harabar na iya zama hanyar shiga mafi sauri ga ɗalibai",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Tambayoyin gama-gari",
      type: "faq",
      faqs: [
        {
          question: "Wa zan iya kira ko aika wa saƙo yanzu?",
          answer:
            "Kira ko aika saƙo zuwa **9-8-8** (Layin Taimakon Rikicin Kashe Kai) a kowane lokaci, kyauta, awa 24 kowace rana — ba a bukatar referral. A Kingston, layin rikici na AMHS-KFLA a 613-544-4229 shi ma yana amsawa awa 24 kowace rana. Idan kariya na cikin haɗari nan take, kira 911.",
        },
        {
          question: "Idan ban san ko wannan ya kai matsayin rikici ba fa?",
          answer:
            "Idan wani ba zai iya kasancewa lafiya ba, kada ka jira tabbaci. Yi amfani da taimakon rikici ko ayyukan gaggawa.",
        },
        {
          question:
            "Idan ina bukatar taimako daren yau amma ban san wanda zan kira ba fa?",
          answer:
            "Yi amfani da shafin jerin lafiyar hankali na gida ko hanyar taimakon rikici maimakon jira sai safiya.",
        },
        {
          question: "Idan mai bukatar taimakon yarona ne fa?",
          answer:
            "Nemi ayyukan yara da matasa musamman. Hanyoyin lafiyar hankalin matasa galibi sun bambanta da kulawar manya.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Gwajin Bincike da Rigakafi",
  description:
    "Koyi tushen kulawar rigakafi, alluran rigakafi, da gwajin bincike a Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Bayanan rigakafi da lafiyar jama'a na gida.",
    },
    {
      title: "Ontario: Kiwon lafiya a Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Jagorar kiwon lafiya ta gama-gari.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Dalilin da kulawar rigakafi ke da muhimmanci",
      type: "default",
      content:
        "Kulawar rigakafi tana nufin ƙoƙarin gano matsaloli da wuri ko hana su kafin su yi tsanani. Wannan ya haɗa da alluran rigakafi, gwaje-gwajen bincike (screening), duba hawan jini akai-akai, da tattaunawa kan abubuwan haɗari da likita.",
    },
    {
      id: "common-prevention",
      title: "Ayyukan rigakafi na gama-gari",
      type: "checklist",
      items: [
        "Riƙe alluran rigakafinka a sabunta",
        "Tambaya ko ana ba da shawarar gwaje-gwajen bincike ga shekarunka ko tarihin lafiyarka",
        "Kawo tambayoyinka game da hawan jini, ciwon suga, ko sauran abubuwan haɗari a ziyarar yau da kullum",
        "Yi amfani da albarkatun lafiyar jama'a lokacin da kake bukatar bayanan rigakafi",
      ],
    },
    {
      id: "prevention-next",
      title: "Kana bukatar ayyukan rigakafi na gida?",
      type: "callout",
      content:
        "Yi amfani da jerin ayyukan gida don lafiyar jama'a, gwajin bincike, da jerin kantunan magani idan kana bukatar wurin farawa a Kingston.",
      link: {
        text: "Jerin lafiyar jama'a da kantunan magani",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Kulawar Ƙwararru da ta Al'umma",
  description:
    "Yi amfani da wannan shafin don fahimtar kulawa a gida, haƙora, gyaran jiki, shawarwari, taimakon gani, da abin da zai iya zama na gwamnati, al'umma, ɗalibai, ko mai zaman kansa.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Bayanan hukuma na daidaita kulawa a gida da ta al'umma.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Bayanan hukuma na shirin inshorar haƙora na tarayya da cancanta.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Bayanan hukuma na ayyukan al'umma da haƙora.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Bayanan hukuma na taimakon gani.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Abin da kulawar ƙwararru da ta al'umma ke nufi",
      type: "default",
      content:
        "Allied health (kulawar ƙwararru) tana nufin kulawa daga ƙwararru kamar physiotherapists (masu jinyar motsa jiki), occupational therapists (masu jinyar ayyukan yau da kullum), masana abinci, ma'aikatan jin daɗin jama'a, masu ba da shawara, likitocin haƙora, ko ƙungiyoyin taimakon gani. Kulawar al'umma galibi tana nufin kulawar da ke faruwa a wajen asibiti, wani lokaci a gidanka, makaranta, asibiti, ko shirin al'umma.",
    },
    {
      id: "access-payment-matrix",
      title: "Teburin shiga da biya",
      type: "table",
      columns: ["Hanya", "Misalai", "Yadda biya yawanci ke aiki", "Yadda za a fara"],
      rows: [
        {
          cells: [
            "Kulawa a gida da ta al'umma da gwamnati ke ɗauka",
            "Jinya a gida, jinyar motsa jiki a gida, daidaita kulawa",
            "Shirye-shiryen gwamnati na iya aiki idan ka cika ka'idojin shirin",
            "Fara da referral daga likita ko hanyar kulawa a gida ta hukuma",
          ],
        },
        {
          cells: [
            "Ayyukan al'umma",
            "Haƙorar cibiyar lafiyar al'umma ko tallafi mai sauƙin shiga",
            "Kuɗin gwamnati ko na al'umma na iya aiki gwargwadon sabis ɗin",
            "Tuntuɓi shirin kai tsaye ka tambaya game da cancanta",
          ],
        },
        {
          cells: [
            "Tallafin makaranta",
            "Shawarwarin harabar makaranta ko tallafin da ya shafi lafiya",
            "Yawanci yana da alaƙa da cancantar ɗalibi da kuɗin ɗalibai ko shirye-shirye",
            "Yi amfani da shafukan sabis na makarantarka na hukuma da farko",
          ],
        },
        {
          cells: [
            "Kulawar ƙwararru mai zaman kanta",
            "Physiotherapy, shawarwari, tausa, haƙora mai zaman kansa, ayyukan ido masu zaman kansu",
            "Galibi biya da kuɗin kanka sai dai idan wani shiri ya rufe shi",
            "Tambayi cikakken kuɗi da ka'idojin inshora kafin yin alƙawari",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Misalan kulawar ƙwararru da ta al'umma",
      type: "grid",
      gridItems: [
        {
          title: "Kulawa a gida",
          content:
            "Tana da amfani lokacin da wani ke bukatar tallafi a gida bayan rashin lafiya, rauni, ko kulawar asibiti.",
          icon: "clock",
          link: {
            text: "Jerin kulawa a gida",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Kula da haƙora",
          content:
            "Inshorar haƙora ta rabu da inshorar likita ta yau da kullum. Canadian Dental Care Plan na tarayya yanzu yana rufe mutane da yawa da ba su da inshorar haƙora mai zaman kanta, kuma shirye-shirye kamar Healthy Smiles Ontario da asibitocin haƙora na al'umma suna taimaka wa wasu rukunoni.",
          icon: "shield",
          link: {
            text: "Jerin haƙora da na al'umma",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Gyaran jiki da jinya",
          content:
            "Physiotherapy, occupational therapy, da ayyukan da ke da alaƙa na iya zama na gwamnati, na al'umma, ko masu zaman kansu gwargwadon hanyarka.",
          icon: "stethoscope",
          link: { text: "Jerin kulawar ƙwararru", url: "/local-services?category=allied-community" },
        },
        {
          title: "Taimakon gani",
          content:
            "Taimakon gani na iya haɗawa da na'urori, taimakon fahimtar wuri, da tallafin al'umma da kuma kulawar ido ta likita.",
          icon: "info",
          link: {
            text: "Jerin taimakon gani",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Kafin ka yi alƙawari",
      type: "checklist",
      items: [
        "Tambaya ko ana bukatar referral",
        "Tambaya ko sabis ɗin na gwamnati ne, na al'umma ne, ko biya da kuɗin kanka ne",
        "Tambayi ainihin kuɗi da ka'idojin sokewa idan sabis ɗin mai zaman kansa ne",
        "Duba ko shirin makarantarka ko mai zaman kansa yana rufe wani ɓangare na kuɗin",
        "Tambaya ko kana bukatar kawo bayanai, hotuna, ko takardar likita",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ da Ƙamus",
  description:
    "Yanayin sababbin shigowa na gama-gari, tambayoyi masu amfani, da ma'anoni cikin sauƙin harshe.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Kiwon lafiya a Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Jagorar kiwon lafiya ta lardin gama-gari.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Jagorar hukuma ta shawarar ma'aikaciyar jinya.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Yanayin sababbin shigowa na gama-gari",
      type: "faq",
      faqs: [
        {
          question: "Ba ni da OHIP tukuna. Me zan fara yi?",
          answer:
            "Koyi hanyar inshorarka da farko, sannan yi amfani da jerin ayyukan gida da shafukan jagorar gaggawa don yin shiri na ɗan lokaci mai aminci.",
        },
        {
          question: "Ni ɗalibin ƙasashen waje ne. Ina zan fara?",
          answer:
            "Fara da sabis ɗin lafiya ko walwala na harabar makarantarka da takardun inshorar makarantarka, sannan ka yi amfani da ayyukan al'umma ko na gaggawa lokacin da waɗannan ba su isa ba.",
        },
        {
          question: "Ina bukatar mai fassara.",
          answer:
            "Tambaya da wuri. Za ka iya karanta wannan shafin a harsuna 33 ta menu na Harshe, kuma za ka iya nuna wa ma'aikata gajerun kalmomi a cikin shafin taimakon mai fassara. Don alƙawura, umarnin magunguna, izini, da tattaunawar gwaji, tambaya game da taimakon ƙwararren mai fassara. Health811 (kira 811) yana ba da taimakon waya a harsuna da yawa.",
        },
        {
          question: "Ina bukatar gwajin jini bayan ziyara.",
          answer:
            "Duba cewa kana da requisition, sannan ka bincika jerin ayyuka don dakunan gwaje-gwaje da ɗaukar hoto.",
        },
        {
          question: "Ina bukatar sake cika magani kuma likitana ba ya nan.",
          answer:
            "Fara da kantin maganinka, sannan ka yi amfani da hanyoyin walk-in, intanet, ko na gaggawa kamar yadda ya dace gwargwadon maganin da gaggawar.",
        },
        {
          question: "Ina bukatar kulawa ga yarona.",
          answer:
            "Yi amfani da alamun haɗarin gaggawa da farko, sannan jagorar rana ɗaya ko ta gaggawa. Hanyoyin lafiyar hankalin yara da matasa galibi sun rabu da kulawar manya.",
        },
        {
          question: "Ina bukatar taimakon lafiyar hankali daren yau.",
          answer:
            "Kira ko aika saƙo zuwa 9-8-8 (Layin Taimakon Rikicin Kashe Kai) a kowane lokaci, ko kira layin rikici na AMHS-KFLA na awa 24 a 613-544-4229. Yi amfani da kulawar gaggawa idan kariya na cikin haɗari. Kada ka jira alƙawari na yau da kullum.",
        },
        {
          question: "Ban fahimci requisition ko referral ba.",
          answer:
            "Kira asibitin da ya ba ka shi ka nemi su bayyana shi cikin sauƙin harshe. Za ka iya tambayar abin da yake, inda zai je, da wanda ya kamata ya bi sahu.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Ƙarin tambayoyin gama-gari",
      type: "faq",
      faqs: [
        {
          question: "Zan iya kawai zuwa sashen gaggawa idan ba ni da likita?",
          answer:
            "Sashen gaggawa na gaggawa ne. Idan matsalar ba a fili take barazanar rai ba, fara da shafin jagorar gaggawa, Health811, asibitin walk-in, ko wata kulawar rana ɗaya.",
        },
        {
          question: "Idan ni sabo ne kuma ban san wane sabis ya dace da ni ba fa?",
          answer:
            "Yi amfani da matattarar jerin ayyuka don ɗalibai, sababbin shigowa, yara da matasa, walk-in, intanet, ana bukatar referral, da irin inshora.",
        },
        {
          question: "Idan bayanan wannan shafin sun yi kama da sun tsufa fa?",
          answer:
            "Yi amfani da fom ɗin rahoto a shafin ko jerin domin dubawa ta gaba ta mai da hankali kan canjin da ka samu.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Ƙamus",
      type: "checklist",
      items: [
        "Kulawar farko (primary care): Hanyarka ta kiwon lafiya ta yau da kullum don bukatun lafiya na yau da kullum da masu ɗorewa.",
        "Nurse practitioner (NP): Ma'aikaciyar jinya mai babban horo da za ta iya dubawa, gano cuta, rubuta magani, da turawa a yanayi da yawa.",
        "Referral: Bukata daga wani likita zuwa wani sabis ko ƙwararre.",
        "Requisition: Fom da ke gaya wa dakin gwaje-gwaje ko asibitin ɗaukar hoto irin gwajin da kake bukata.",
        "Triage: Tsarin yanke shawarar wanda ke bukatar kulawar gaggawa da farko bisa kariya da tsananin yanayi.",
        "Walk-in clinic: Asibitin da zai iya ganin marasa lafiya ba tare da alƙawari ba, bisa karɓa na yau da kullum.",
        "Urgent care: Kulawar rana ɗaya don matsalolin gaggawa da ba a fili suke barazanar rai ba.",
        "Rostered ko attached patient: Mara lafiya da ke da dangantaka mai ɗorewa da mai ba da kulawar farko na yau da kullum.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Game da Mu, Amana, da Sirri",
  description:
    "Koyi yadda wannan jagora ke aiki, yadda ake kula da majiyoyi da matsayin dubawa, da yadda za a ba da rahoton canje-canje.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Bayanan majiyoyin aikin",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Taƙaitaccen bayani ga jama'a kan yadda aikin ke kula da amana da majiyoyi.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Abin da wannan shafin yake",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca jagorar neman kiwon lafiya ce ga sababbin shigowa a Kingston, Ontario. An ƙera ta don taimaka wa mutane su zaɓi matakin gaba da ya dace, su fahimci kalmomin tsarin na gama-gari, kuma su sami jerin ayyukan gida abin dogara.\n\nWannan shafin **ba** kayan aikin lokutan jira kai tsaye ba ne, ba dandalin yin alƙawari ba ne, kuma ba sabis ɗin shawarar likita ba ne.",
    },
    {
      id: "sources",
      title: "Yadda amana da majiyoyi ke aiki",
      type: "default",
      content:
        "Muna ƙoƙarin haɗa jerin gida da shafukan sabis na hukuma duk lokacin da zai yiwu. Kowane jeri yana nuna matsayin dubawa da ranar dubawa ta ƙarshe. An tabbatar da wasu shigarwar gaba ɗaya bisa majiyoyin hukuma. Wasu har yanzu suna bukatar sake dubawa a gida domin lokutan aiki, karɓa, ko ka'idojin shiga suna canzawa akai-akai.\n\nSassan majiyoyi na shafi suna nuna manyan majiyoyin hukuma da aka yi amfani da su don zagayen dubawa na yanzu.",
    },
    {
      id: "accessibility",
      title: "Sauƙin amfani da harshe",
      type: "default",
      content:
        "An gina wannan shafin don ya yi aiki da keyboard, ya fara da wayar hannu, kuma a iya karanta shi cikin sauƙin harshe.\n\nZa ka iya karanta cikakkiyar jagorar a **harsuna 33** ta menu na Harshe a saman shafin — daga العربية da Soomaali zuwa ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, da Українська — kuma ana ba da kowane shafi da menu kai tsaye a wannan shafin. An yi dukan fassarorin da taimakon na'ura; Faransanci, Sifaniyanci, Larabci, da Sinanci mai sauƙi sun sami ƙarin matakin dubawa, sauran kuma an yi musu alamar fassarar atomatik. **Turanci ya kasance sigar asali** — idan jumlar da aka fassara ta yi kama da ba ta bayyana ba ko mai ban mamaki, duba rubutun Turanci ko ka nemi wani ya tabbatar.\n\nWasu harsuna da dama na iya buɗe wannan shafin ta Google Translate daga menu ɗin guda, kuma shafin taimakon mai fassara ya haɗa da gajerun kalmomin gaggawa a harsuna sama da 20 da za ka iya nuna wa ma'aikata.\n\nJerin ayyuka (sunayen ayyuka, adireshi, lambobin waya, da lokutan aiki) suna nan da Turanci don su yi daidai da majiyoyin hukuma.\n\nKowace irin fassara na iya zama kuskure ga bayanan likita, don haka tambaya game da taimakon ƙwararren mai fassara don alƙawura, umarnin magunguna, da izini. Health811 (kira 811) yana ba da taimakon waya a harsuna da yawa.",
    },
    {
      id: "privacy",
      title: "Sirri",
      type: "default",
      content:
        "Wannan shafin ba ya amfani da bayanan sa-ido na nesa masu kutse. Yana ajiye ƙananan ƙididdigar ingantawa a burauzarka don masu kula su fahimci binciken gama-gari, binciken da bai sami sakamako ba, kallon ayyuka, da rahotannin matsala lokacin da aka fitar da bayanan da gangan don kulawa.\n\nKada ka aika bayanan lafiyarka na sirri ta fom ɗin ra'ayi ko imel.",
    },
    {
      id: "contact",
      title: "Tuntuɓa da ba da rahoton canje-canje",
      type: "default",
      content:
        "Idan shafi ko jeri ya yi kama da kuskure, yi amfani da fom ɗin rahoto a wannan shafin. Ya kamata rahotanni su bayyana matsalar, ba yanayin lafiyarka na kanka ba.\n\nImel na tuntuɓa na gama-gari: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Sanarwa",
      type: "default",
      content:
        "Wannan gidan yanar gizo don jagora da ilimi ne kawai. Ba shawarar likita ba ce kuma ba madadin ganewar ƙwararru, magani, ko taimakon gaggawa ba ne. Idan yanayi na iya zama barazanar rai, kira 911.",
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
