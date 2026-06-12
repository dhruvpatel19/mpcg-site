import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Nilo-load ang pahina...",
    directoryEnglishNote:
      "Ipinapakita sa Ingles ang mga listahan sa directory para eksaktong tumugma ang mga pangalan ng serbisyo, address, numero ng telepono, at oras sa mga opisyal na pinagmulan.",
  },
  header: {
    emergencyBanner: "Emergency na nanganganib ang buhay? Tumawag na po agad sa 911.",
    tagline:
      "Gabay sa pag-navigate sa healthcare ng Kingston, Ontario, na unang-una para sa mga bagong dating",
    languageButton: "Wika",
    languageButtonAria: "Tulong sa wika at interpreter",
    openNavigation: "Buksan ang navigation",
    primaryNavLabel: "Pangunahin",
  },
  languageModal: {
    title: "Tulong sa wika at interpreter",
    description:
      "Basahin ang gabay na ito sa wikang pinaka-komportable ka. Para sa mga usapang pangkalusugan, humingi ng interpreter kapag kailangan mo.",
    chooseLanguageTitle: "Piliin ang iyong wika",
    chooseLanguageNote:
      "Ang gabay na ito ay ganap na isinalin sa 33 wika sa site na ito, at dose-dosenang iba pang wika ang bumubukas sa pamamagitan ng automatic translation. Ang mga listahan sa directory ay nananatili sa Ingles para eksaktong tumugma sa mga opisyal na pinagmulan. Ang Ingles ang reference na bersyon kung may anumang tila hindi malinaw.",
    safetyTitle: "Paalala para sa kaligtasan",
    safetyBody:
      "Ang pagsasalin ng website ay para sa pagbabasa at pag-unawa. Para sa mga appointment, instruksyon sa test, gamot, o consent (pahintulot), itanong kung makakapagbigay ang clinic o ospital ng propesyonal na interpreter. Ang Health811 (tumawag sa 811) ay may suporta sa telepono sa maraming wika.",
    phrasesTitle: "Mga mabilisang parirala na maipapakita sa staff",
    phrasesNote:
      "Ituro ang iyong wika at ipakita ang mga linyang ito sa reception o clinical staff.",
    callHealth811: "Tawagan ang Health811",
    accessibilityCta: "Accessibility at tiwala",
    close: "Isara ang dialog ng tulong sa wika",
  },
  moreLanguages: {
    title: "Higit pang mga wika (automatic translation)",
    description:
      "Lahat ng wika ay gumagana mula sa iisang menu na ito — kasama ang Somali, Yoruba, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukrainian, Farsi, Urdu, Punjabi, Tamil, at Vietnamese.",
    selectLabel: "Pumili ng anumang wika",
    selectPlaceholder: "Lahat ng wika — pumili ng isa…",
    openButton: "Buksan sa wikang ito",
    disclaimer:
      "Ang mga wikang may markang automatic ay nagbubukas ng pahinang ito sa pamamagitan ng Google Translate at nananatili sa iyong wika habang patuloy kang nagba-browse. Ang automatic translation ay hindi sinusuri ng proyektong ito — mainam para sa pagbabasa, pero kumpirmahin ang mga medikal na detalye sa isang clinician o interpreter.",
  },
  funding: {
    acknowledgment:
      "Ang proyektong ito ay sinusuportahan ng grant mula sa Ontario Medical Students Association (OMSA).",
    logoAlt: "Logo ng Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Maghanap ng mga wika…",
    onSiteGroup: "Isinalin sa site na ito",
    proxyGroup: "Higit pang mga wika sa pamamagitan ng Google Translate",
    reviewedBadge: "Sinuri",
    automaticBadge: "Automatic",
    interpreterTab: "Tulong ng interpreter at mga parirala",
    noMatches: "Walang wikang tumutugma sa iyong paghahanap.",
    note: "Ang mga pagsasalin ay tinulungan ng makina at ang Ingles ang reference na bersyon kung may anumang tila hindi malinaw. Ang mga wika sa grupo ng Google Translate ay nagbubukas ng pahinang ito sa isang panlabas na site ng Google. Ang mga listahan sa directory ay nananatili sa Ingles para eksaktong tumugma sa mga opisyal na pinagmulan.",
  },
  navigation: [
    {
      title: "Magsimula dito",
      items: [
        {
          label: "Kailangan ng Tulong Ngayon",
          to: "/need-help-now",
          description: "Mga agarang desisyon at suporta sa krisis",
        },
        {
          label: "Magsimula Dito",
          to: "/start-here",
          description: "Bago sa healthcare ng Ontario",
        },
        {
          label: "Maghanap ng Primary Care",
          to: "/get-a-family-doctor",
          description: "Mga doktor, NP, CHC, at opsyon para sa estudyante",
        },
      ],
    },
    {
      title: "Unawain ang pangangalaga",
      items: [
        {
          label: "Gastos at Coverage",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, mga pribadong plano, at coverage sa gamot",
        },
        {
          label: "Ang Iyong Visit",
          to: "/your-visit",
          description: "Ano ang dadalhin at paano magtanong",
        },
        {
          label: "Pagkatapos ng Visit",
          to: "/after-visit",
          description: "Mga test, requisition, referral, at follow-up",
        },
        {
          label: "Mga Gamot at Parmasya",
          to: "/medicines-and-pharmacies",
          description: "Mga reseta, refill, at tulong ng parmasyutiko",
        },
      ],
    },
    {
      title: "Lokal na tulong",
      items: [
        {
          label: "Mga Lokal na Serbisyo",
          to: "/local-services",
          description: "Hanapin ang mga serbisyo sa Kingston",
        },
        {
          label: "Mental Health",
          to: "/mental-health",
          description: "Suporta sa krisis, agaran, regular, at para sa kabataan",
        },
        {
          label: "Screening at Pag-iwas sa Sakit",
          to: "/screening-prevention",
          description: "Mga bakuna at preventive na pangangalaga",
        },
        {
          label: "Allied at Community Care",
          to: "/community-allied-health",
          description: "Home care, rehab, dental, at mga suporta sa komunidad",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Mga karaniwang sitwasyon ng bagong dating at glossary",
        },
        {
          label: "Tungkol Dito at Tiwala",
          to: "/about",
          description: "Mga pinagmulan, privacy, accessibility, at feedback",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Kailangan ng tulong ngayon din?",
    items: {
      "call-911": {
        label: "Tumawag sa 911",
        description: "Emergency na nanganganib ang buhay",
      },
      "call-811": {
        label: "Tawagan ang Health811",
        description: "Payo mula sa nurse, 24/7",
      },
      "call-988": {
        label: "Tumawag o mag-text sa 9-8-8",
        description: "Suicide Crisis Helpline, 24/7",
      },
      "call-crisis": {
        label: "Tawagan ang Crisis Line",
        description: "Crisis line ng AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Gabay sa urgent care",
        description: "Mga opsyon pagkatapos ng office hours at same-day",
      },
      "mental-health": {
        label: "Suporta sa mental health",
        description: "Mga daan para sa krisis, agaran, at regular na pangangalaga",
      },
    },
  },
  home: {
    seoTitle: "Gabay sa healthcare sa Kingston",
    seoDescription:
      "Gabay sa pag-navigate sa healthcare para sa mga bagong dating sa Kingston, Ontario: agarang tulong, mga lokal na serbisyo, mga batayan ng coverage, gabay sa interpreter, at mga susunod na hakbang pagkatapos ng visit.",
    kicker: "Kingston, Ontario",
    heroTitle: "Hanapin ang tamang pangangalaga sa Kingston nang hindi nanghuhula",
    heroLead:
      "Magsimula sa agarang tulong, mga batayan para sa bagong dating, coverage, o sa directory ng mga lokal na serbisyo. Ang gabay na ito ay nasa simpleng wika, madaling gamitin sa cellphone, at tapat tungkol sa kung ano pa ang kailangang i-recheck.",
    cardNeedHelp: {
      title: "Kailangan ng tulong ngayon",
      body: "Gabay sa emergency, urgent care, krisis, at pagkatapos ng office hours.",
    },
    cardStartHere: {
      title: "Magsimula dito",
      body: "Paano gumagana ang healthcare sa Ontario at ano ang unang gagawin.",
    },
    cardSearch: {
      title: "Maghanap ng mga serbisyo",
      body: "Hanapin ang blood test, refill, walk-in na pangangalaga, mental health, at iba pa.",
    },
    cardLanguage: {
      title: "Tulong sa wika",
      body: "Basahin ang gabay na ito sa iyong wika, kasama ang gabay sa interpreter at mga mabilisang parirala.",
    },
    quickDecisionsKicker: "Mabibilis na desisyon",
    quickDecisionsTitle: "Magsimula sa mga tanong na ito",
    quickDecisionLines: [
      "Kung maaaring nanganganib ang buhay, tumawag po agad sa 911.",
      "Kung hindi ka sigurado kung saan pupunta ngayong gabi, tawagan ang Health811.",
      "Para sa mga pag-iisip ng pagpapakamatay o matinding pagkabalisa, tumawag o mag-text sa 9-8-8 anumang oras.",
      "Kung wala kang family doctor, isama sa iyong plano ang walk-in, community health, at mga opsyon para sa estudyante.",
      "Kung kailangan mo ng blood test, X-ray, refill, o update sa referral, gamitin ang lokal na directory para mahanap ang susunod na hakbang.",
    ],
    trustNoteTitle: "Paalala tungkol sa tiwala",
    trustNoteBody:
      "Ito ay isang static na gabay. Hindi kami nagpapakita ng live na wait times. Ang mga detalyeng sensitibo sa oras tulad ng oras ng bukas at intake ay maaaring mabilis magbago, kaya ang bawat listahan ay may kasamang source link at status ng pagsusuri.",
    newcomerKicker: "Mabilisang simula para sa bagong dating",
    newcomerTitle: "Mga unang hakbang kung bago ka sa Kingston",
    newcomerSteps: [
      {
        title: "1. Alamin ang iyong coverage",
        body: "Unawain ang OHIP, IFHP, mga pribadong plano, at kung ano ang karaniwang hindi sakop. Walang waiting period para sa OHIP - mag-apply sa lalong madaling panahon pagdating mo.",
      },
      {
        title: "2. Planuhin ang iyong daan sa primary care",
        body: "Alamin ang pagkakaiba ng family doctor, nurse practitioner, student clinic, community health centre, at walk-in na pangangalaga.",
      },
      {
        title: "3. Alamin kung ano ang susunod na mangyayari",
        body: "Alamin kung ano ang karaniwang ibig sabihin ng mga requisition, referral, resulta ng test, at follow-up na tawag.",
      },
    ],
    languageSupportKicker: "Suporta sa wika",
    languageSupportTitle: "Ipakita ang mga pariralang ito kung kailangan mo ng tulong",
    openLanguageHelp: "Buksan ang tulong sa wika",
    commonTasksKicker: "Mga karaniwang gawain",
    commonTasksTitle: "Maghanap ayon sa gawaing kailangan mong tapusin",
    openDirectory: "Buksan ang buong directory",
    tasks: [
      {
        title: "Blood test o X-ray",
        body: "Maghanap ng mga lab at serbisyo sa imaging.",
      },
      {
        title: "Refill ng reseta",
        body: "Maghanap ng mga parmasya at tulong sa refill.",
      },
      {
        title: "Suporta sa mental health",
        body: "Suporta sa krisis, agaran, regular, at para sa kabataan.",
      },
      {
        title: "Health card o suporta para sa bagong dating",
        body: "Hanapin ang ServiceOntario, ISKA, at payo sa telepono.",
      },
    ],
    featuredKicker: "Mga tampok na serbisyo",
    featuredTitle: "Magagandang lugar para magsimula",
    trustKicker: "Tiwala at mga pinagmulan",
    trustTitle: "Tapat tungkol sa kung ano ang na-verify at kung ano pa ang kailangang i-recheck",
    trustBody:
      "Ang ilang listahan ay sinuri batay sa mga opisyal na lokal na pinagmulan. Ang iba ay kailangan pa ng lokal na recheck dahil madalas magbago ang oras ng bukas, intake, o mga patakaran sa pag-access. Hayagan naming ipinapakita ang status na iyon at hinihikayat ang mga user na i-report ang mga lumang detalye.",
    trustChecklistTitle: "Basahin bago ka umasa sa isang listahan",
    trustChecklist: [
      "Hanapin ang link sa opisyal na pinagmulan.",
      "Tingnan ang petsa ng huling pagsusuri.",
      "Kumpirmahin ang same-day na oras at walk-in na access bago ka pumunta.",
      "Gamitin ang report form kung may napansin kang pagbabago.",
    ],
    trustLink: "Tingnan ang mga pinagmulan at mga paalala sa tiwala",
  },
  contentPage: {
    breadcrumbHome: "Home",
    badge: "Gabay sa simpleng wika",
    reviewStatusTitle: "Status ng pagsusuri",
    reviewLabels: {
      reviewed:
        "Sinuri batay sa kasalukuyang set ng mga pinagmulang ginagamit ng proyektong ito.",
      "general-guidance":
        "Sinuri bilang pangkalahatang gabay. Maaari pa ring mabilis magbago ang mga lokal na detalye.",
      "needs-local-recheck":
        "Kapaki-pakinabang na gabay, pero kailangan pa ng karagdagang pagsusuri ang mga lokal na detalye.",
    },
    lastReviewPrefix: "Huling pagsusuri ng pahina:",
    noReviewDate:
      "Ang pahinang ito ay walang nakatalang petsa ng pagsusuri sa antas ng pahina.",
    translationAside:
      "Mababasa mo ang pahinang ito sa ilang wika gamit ang Language menu. Para sa mga appointment, gamot, consent, at instruksyon sa test, itanong kung may available na suporta ng interpreter.",
    share: "I-share",
    print: "I-print",
    sourcesTitle: "Mga pinagmulan para sa pahinang ito",
    sourcesNote:
      "Ito ang mga pangunahing opisyal o primaryang pinagmulang ginamit para sa kasalukuyang pagsusuri ng pahina. Maaari pa ring magbago ang mga lokal na proseso sa pagitan ng mga cycle ng pagsusuri.",
    onThisPage: "Sa pahinang ito",
    sourcesAnchorLabel: "Mga pinagmulan",
    translationReminderTitle: "Paalala sa pagsasalin",
    translationReminderBody:
      "Kung may bagay na nakakaapekto sa iyong paggamot o kaligtasan, kumpirmahin ito sa isang clinician o interpreter sa halip na umasa lamang sa pagsasalin.",
    linkCopiedTitle: "Nakopya ang link",
    linkCopiedBody: "Maaari mo nang i-paste ang link ng pahinang ito kahit saan.",
    shareCancelled: "Kinansela ang pag-share",
  },
  directory: {
    seoTitle: "Mga lokal na serbisyo",
    seoDescription:
      "Maghanap ng mga serbisyong healthcare, mental health, parmasya, coverage, at navigation na angkop sa mga bagong dating sa Kingston, Ontario.",
    kicker: "Directory ng Kingston",
    title: "Maghanap ng mga lokal na serbisyong pangkalusugan",
    lead: "Maghanap ayon sa serbisyo, sintomas, dokumento, o gawain. Mga halimbawa: walk in, after hours, blood test, refill, health card, student clinic, o suporta para sa bagong dating.",
    searchPlaceholder: "Maghanap ayon sa pangangailangan, pangalan ng serbisyo, address, o keyword",
    sortAriaLabel: "Pagsunud-sunurin ang mga resulta",
    sortRelevance: "Ayos: Kaugnayan",
    sortAlphabetical: "Ayos: A hanggang Z",
    sortRecentlyReviewed: "Ayos: Pinakabagong nasuri",
    sortArea: "Ayos: Lugar",
    gridViewLabel: "Grid view",
    listViewLabel: "List view",
    allServices: "Lahat ng serbisyo",
    audienceTitle: "Para kanino",
    accessTitle: "Access",
    careLevelTitle: "Antas ng pangangalaga",
    coverageAreaTitle: "Coverage at lugar",
    areaLabel: "Lugar",
    showingServices: "Ipinapakita ang {count} serbisyo",
    resetFilters: "I-reset ang mga filter",
    trustPanelTitle: "Status ng tiwala at pagsusuri",
    trustPanelBody:
      "Ang directory na ito ay static, hindi live. Ipinapakita namin ang huling nakatalang petsa ng pagsusuri, mga link sa opisyal na pinagmulan kung available, at kung aling mga listahan ang kailangan pa ng lokal na recheck. Kumpirmahin ang oras ng bukas at same-day na access bago ka pumunta.",
    verifiedLabel: "Verified",
    needsRecheckLabel: "Kailangan ng recheck",
    noResultsTitle: "Walang serbisyong tumugma sa mga filter na iyon",
    noResultsBody:
      "Subukan ang mas malawak na paghahanap tulad ng blood test, refill, mental health, health card, o walk in. Maaari mo ring i-clear ang lahat ng filter at magsimulang muli.",
    notSureTitle: "Hindi sigurado kung saan magsisimula?",
    notSureBody:
      "Kung hindi ka sigurado kung kailangan mo ng emergency care, urgent care, walk-in clinic, o suporta ng parmasya, magsimula sa pahina ng agarang gabay o tawagan ang Health811 para sa payo ng nurse.",
    needHelpNowCta: "Kailangan ng Tulong Ngayon",
    callHealth811: "Tawagan ang Health811",
  },
  filters: {
    audience: {
      newcomers: "Mga bagong dating",
      students: "Para lang sa estudyante o campus",
      "children-youth": "Bata o kabataan",
      adults: "Mga adult",
      families: "Mga pamilya",
      "unattached-patients": "Walang family doctor",
    },
    access: {
      "walk-in": "Walk-in",
      appointment: "May appointment",
      referral: "Kailangan ng referral",
      virtual: "Virtual",
    },
    level: {
      emergency: "Emergency",
      urgent: "Agaran",
      primary: "Primary",
      community: "Komunidad",
    },
    payment: {
      public: "Pondo ng gobyerno",
      community: "Pang-komunidad / madaling ma-access",
      mixed: "Pinaghalong coverage",
      "student-plan": "Plano ng estudyante",
      private: "Sariling bayad",
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
      label: "Emergency at urgent care",
      shortLabel: "Emergency at urgent",
    },
    "primary-care": { label: "Primary care", shortLabel: "Primary care" },
    "community-health": {
      label: "Mga community health centre",
      shortLabel: "Community health",
    },
    "mental-health": {
      label: "Mental health at suporta sa krisis",
      shortLabel: "Mental health",
    },
    "public-health": { label: "Public health", shortLabel: "Public health" },
    "labs-imaging": {
      label: "Mga lab at imaging",
      shortLabel: "Lab at imaging",
    },
    pharmacies: {
      label: "Mga gamot at parmasya",
      shortLabel: "Mga parmasya",
    },
    "allied-community": {
      label: "Allied at community care",
      shortLabel: "Allied care",
    },
    "navigation-support": {
      label: "Suporta sa navigation at coverage",
      shortLabel: "Navigation",
    },
  },
  serviceCard: {
    whenToUse: "Kailan gagamitin:",
    accessLabel: "Access",
    eligibilityLabel: "Kwalipikasyon",
    eligibilityFallback:
      "Bukas sa pangkalahatang publiko maliban kung iba ang sabi ng opisyal na pinagmulan.",
    hoursLabel: "Oras",
    phoneLabel: "Telepono",
    trustDetails: "Mga detalye ng tiwala at pinagmulan",
    lastReview: "Huling pagsusuri:",
    officialSource: "Opisyal na pinagmulan",
    call: "Tumawag",
    officialWebsite: "Opisyal na website",
    directions: "Direksyon",
    viewDetails: "Tingnan ang mga detalye",
  },
  serviceDetail: {
    backToServices: "Bumalik sa mga lokal na serbisyo",
    whenToUseTitle: "Kailan gagamitin ang serbisyong ito",
    eligibilityTitle: "Kwalipikasyon at access",
    eligibilityFallback:
      "Tingnan ang opisyal na pinagmulan kung hindi ka sigurado kung bukas sa iyo ang serbisyong ito.",
    whatToBringTitle: "Ano ang dadalhin",
    contactTitle: "Contact at mga aksyon",
    callNow: "Tumawag ngayon",
    officialWebsite: "Opisyal na website",
    directions: "Direksyon",
    trustTitle: "Tiwala at pinagmulan",
    lastReview: "Huling pagsusuri:",
    viewOfficialSource: "Tingnan ang opisyal na pinagmulan",
  },
  verification: {
    verified: {
      label: "Na-verify batay sa opisyal na pinagmulan",
      shortLabel: "Verified",
      description:
        "Ang mga pangunahing detalye ay sinuri batay sa isang opisyal na pinagmulan sa pinakahuling cycle ng pagsusuri.",
    },
    "partially-verified": {
      label: "May link sa opisyal na pinagmulan",
      shortLabel: "Opisyal na link",
      description:
        "May naka-link na opisyal na pinagmulan, pero ang isa o higit pang detalye ay maaaring madalas magbago at dapat kumpirmahin bago ka pumunta.",
    },
    "community-reported": {
      label: "Ulat mula sa komunidad",
      shortLabel: "Ulat ng komunidad",
      description:
        "Ang impormasyong ito ay nagmula sa ulat ng komunidad at kailangan pa ng hiwalay na kumpirmasyon.",
    },
    "needs-recheck": {
      label: "Kailangan ng recheck",
      shortLabel: "Kailangan ng recheck",
      description:
        "Nananatiling nakikita ang listahang ito dahil maaari pa itong makatulong, pero maaaring luma na ang mga mahahalagang detalye. Kumpirmahin bago umasa rito.",
    },
  },
  feedback: {
    badge: "I-report ang lumang impormasyon",
    title: "Tulungan kaming panatilihing tama ang gabay na ito",
    body: "Magpapadala ito ng pre-filled na email na may konteksto ng pahina o serbisyo. Huwag maglagay ng pribadong medikal na impormasyon.",
    issueTypeLabel: "Uri ng isyu",
    issueTypes: {
      "outdated hours": "Lumang oras ng bukas",
      "wrong phone or website": "Maling telepono o website",
      "eligibility or access issue": "Isyu sa kwalipikasyon o access",
      "translation or accessibility problem":
        "Problema sa pagsasalin o accessibility",
      "missing service or content": "Kulang na serbisyo o content",
      other: "Iba pa",
    },
    detailsLabel: "Ano ang dapat naming tingnan?",
    detailsPlaceholder:
      "Halimbawa: nagbago ang numero ng telepono, appointment-only na ang isang clinic, o sira ang isang link.",
    contactLabel: "Opsyonal na contact",
    contactPlaceholder: "Email address kung gusto mo ng sagot",
    openEmail: "Buksan ang report na email",
    copyText: "Kopyahin ang teksto ng report",
    thanks:
      "Salamat. Ang mga report ay tumutulong sa aming unahin ang mga lumang pahina, sirang link, at mga listahang kailangan ng lokal na recheck.",
    toastEmailTitle: "Nabuksan ang draft ng email",
    toastEmailBody: "Kasama sa iyong report ang konteksto ng pahina o serbisyo.",
    toastCopyTitle: "Nakopya ang buod ng isyu",
    toastCopyBody: "Maaari mo itong i-paste sa sarili mong email client kung kailangan.",
  },
  footer: {
    description:
      "Isang gabay sa pag-navigate sa healthcare, sa simpleng wika, para sa Kingston, Ontario. Ang site na ito ay hindi nagbibigay ng medikal na payo o live na wait times. Palaging kumpirmahin ang mga detalyeng sensitibo sa oras sa opisyal na pinagmulan bago ka pumunta.",
    trustModelTitle: "Modelo ng tiwala",
    trustModelBody:
      "Ipinapakita namin ang mga link sa opisyal na pinagmulan, mga petsa ng pagsusuri, at mga listahang kailangan pa ng recheck. Kung may mukhang mali, i-report ito mula sa pahina o serbisyo.",
    beforeYouGo: {
      title: "Bago ka pumunta",
      body: "Tingnan ang opisyal na oras ng bukas, kung kailangan mo ng appointment o referral, at kung anong mga dokumento ang dadalhin.",
    },
    languageHelp: {
      title: "Tulong sa wika",
      body: "Basahin ang gabay na ito sa iyong wika gamit ang Language menu. Humingi ng interpreter para sa mga clinical na usapan kapag mahalaga ang katumpakan.",
    },
    privacy: {
      title: "Privacy",
      body: "Gumagamit ang site na ito ng lokal at maingat-sa-privacy na improvement logs na nakaimbak sa iyong browser. Hindi ito nagpapadala ng personal na analytics sa isang remote server.",
    },
    copyrightSuffix: "Mapagkukunan ng impormasyon para sa komunidad ng Kingston, Ontario.",
    disclaimer: "Disclaimer",
    privacyLink: "Privacy",
    sourcesLink: "Mga pinagmulan",
    reportLink: "I-report ang lumang impormasyon",
  },
  notFound: {
    seoTitle: "Hindi nahanap ang pahina",
    seoDescription:
      "Hindi mahanap ang pahinang hiniling mo. Magsimula sa agarang tulong, mga batayan para sa bagong dating, mga lokal na serbisyo, o FAQ.",
    badge: "404",
    title: "Hindi namin mahanap ang pahinang iyon",
    body: "Kung sinusubukan mong makakuha ng pangangalaga nang mabilis, magsimula sa agarang gabay o maghanap sa directory ng mga serbisyo sa Kingston.",
    startHere: "Magsimula Dito",
    needHelpNow: "Kailangan ng Tulong Ngayon",
    localServices: "Mga Lokal na Serbisyo",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Gabay sa Pag-navigate sa Healthcare sa Kingston",
  description:
    "Isang gabay sa simpleng wika, na unang-una para sa mga bagong dating, sa paghahanap ng healthcare sa Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Magsimula Dito",
  description:
    "Bago sa Kingston o bago sa healthcare ng Ontario? Magsimula dito para malaman kung paano gumagana ang sistema at ano ang unang gagawin.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Ang healthcare sa Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Pangkalahatang-ideya kung paano gumagana ang insured na pangangalaga sa Ontario.",
    },
    {
      title: "Ontario: Mag-apply para sa OHIP at kumuha ng health card",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Opisyal na impormasyon sa aplikasyon at kwalipikasyon para sa OHIP.",
    },
    {
      title: "Ontario: Maghanap ng family doctor o nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Gabay sa Health Care Connect at sa pag-access ng primary care.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Impormasyon sa pederal na coverage para sa mga kwalipikadong refugee at refugee claimant.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Paano gumagana ang healthcare sa Ontario",
      type: "default",
      content: `Ang healthcare sa Ontario ay nakaayos sa paligid ng **primary care**. Ang primary care ay ang lugar kung saan ka karaniwang nagsisimula para sa mga pangkaraniwang pangangailangang pangkalusugan, mga tuloy-tuloy na kondisyon, reseta, referral, at pag-iwas sa sakit. Ang iyong primary care provider ay maaaring family doctor, nurse practitioner, team ng community health centre, o student health clinic kung kwalipikado ka.

Ang **referral** ay kapag hinihiling ng isang clinician na makita ka ng ibang serbisyo o espesyalista. Ang **requisition** ay isang form na nagsasabi sa lab o imaging clinic kung anong test ang kailangan mo.

Hindi mo kailangang maintindihan ang bawat bahagi ng sistema sa unang araw. Ang pinakamahahalagang hakbang ay: alamin ang iyong coverage, alamin kung saan pupunta para sa mga agarang isyu, at gumawa ng plano para sa regular na pangangalaga kung wala ka pang provider.`,
    },
    {
      id: "first-decisions",
      title: "Mga unang desisyon",
      type: "grid",
      gridItems: [
        {
          title: "Baka kailangan ko ng agarang tulong",
          content:
            "Magsimula sa gabay sa emergency vs urgent care kung may bigla kang problema ngayon o ngayong gabi.",
          icon: "alert",
          link: { text: "Kailangan ng Tulong Ngayon", url: "/need-help-now" },
        },
        {
          title: "Wala akong family doctor",
          content:
            "Alamin kung paano nagkakaugnay-ugnay ang mga family doctor, nurse practitioner, community health centre, walk-in clinic, at student clinic.",
          icon: "stethoscope",
          link: { text: "Maghanap ng Primary Care", url: "/get-a-family-doctor" },
        },
        {
          title: "Kailangan kong maintindihan kung ano ang sakop",
          content:
            "Basahin ang tungkol sa OHIP, IFHP, pribadong insurance, mga plano ng estudyante, coverage sa gamot, at mga karaniwang gastos mula sa sariling bulsa.",
          icon: "shield",
          link: { text: "Gastos at Coverage", url: "/costs-and-coverage" },
        },
        {
          title: "Kailangan ko ng tulong sa wika",
          content:
            "Basahin ang gabay na ito sa 33 wika gamit ang Language menu, at magtanong tungkol sa suporta ng interpreter para sa mga clinical na usapan at consent.",
          icon: "info",
          link: { text: "Accessibility at wika", url: "/about#accessibility" },
        },
        {
          title: "Kailangan ko ng blood test, imaging, o refill",
          content:
            "Gamitin ang lokal na directory para mahanap ang susunod na praktikal na hakbang pagkatapos ng visit.",
          icon: "file",
          link: { text: "Maghanap sa Mga Lokal na Serbisyo", url: "/local-services" },
        },
        {
          title: "Hindi ako sigurado kung saan magsisimula",
          content:
            "Tawagan ang Health811 para sa payo ng nurse kung hindi ka sigurado kung gaano ka-urgent ang iyong sitwasyon.",
          icon: "clock",
          link: { text: "Health811 at agarang gabay", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Magagandang unang hakbang sa iyong unang linggo",
      type: "steps",
      items: [
        "Alamin ang iyong coverage: Basahin kung ano ang karaniwang sakop ng OHIP, IFHP, pribadong insurance, at mga plano ng estudyante. Kung maaaring kwalipikado ka sa OHIP, mag-apply sa lalong madaling panahon.",
        "Piliin ang iyong plano para sa agarang pangangailangan: Alamin kung kailan tatawag sa 911, kailan magsisimula sa Health811, at saan makakahanap ng urgent o same-day na pangangalaga sa Kingston.",
        "Magplano para sa regular na pangangalaga: Kung wala kang regular na provider, alamin ang iyong mga opsyon para sa family doctor, nurse practitioner, community health centre, student clinic, walk-in clinic, at virtual na pangangalaga.",
        "Pagsama-samahin ang iyong impormasyong pangkalusugan: Itago ang iyong health card o mga papeles ng IFHP, listahan ng gamot, record ng bakuna, at mga kopya ng anumang requisition o referral.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Kung wala ka pang OHIP",
      type: "callout",
      content:
        "Huwag hintaying magkasakit ka bago alamin ang iyong daan sa coverage. Kung kwalipikado ka sa OHIP, mag-apply nang maaga. Kung sakop ka ng IFHP o ng plano ng paaralan o pribadong plano, dalhin palagi ang impormasyong iyon. Kung wala kang insurance, magtanong tungkol sa bayarin bago ang visit at maghanap ng mga serbisyo ng komunidad o mga serbisyong madaling ma-access kung naaangkop.",
      link: { text: "Basahin ang tungkol sa coverage", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Ihanda ang mga bagay na ito",
      type: "checklist",
      items: [
        "Ang iyong health card, mga papeles ng IFHP, o impormasyon ng insurance",
        "Listahan ng gamot, kahit kaunti lang ang gamot na iniinom mo",
        "Pangalan at numero ng telepono ng huli mong clinic o provider, kung mayroon",
        "Anumang kamakailang requisition, referral, discharge papers (papeles ng paglabas sa ospital), o instruksyon sa test",
        "Mga tanong na gusto mong itanong sa simpleng wika",
        "Nakasulat na pangangailangan sa interpreter para hindi mo makalimutang humingi",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Kailangan ng Tulong Ngayon?",
  description:
    "Gamitin ang pahinang ito kapag may problema ka sa kalusugan ngayon o ngayong gabi at hindi ka sigurado kung saan magsisimula.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Kumuha ng medikal na payo mula sa Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Opisyal na 24/7 na serbisyo ng payo ng nurse.",
    },
    {
      title: "9-8-8: Suicide Crisis Helpline",
      url: "https://988.ca/",
      note: "Opisyal na pambansang suicide crisis helpline. Tumawag o mag-text sa 9-8-8, libre, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Opisyal na network ng ospital para sa impormasyon sa emergency, urgent care, at imaging.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Opisyal na lokal na organisasyon para sa mental health at suporta sa krisis.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Emergency o urgent?",
      type: "comparison",
      comparison: {
        left: {
          title: "Pumunta agad sa emergency para sa mga problemang tulad ng:",
          items: [
            "Pananakit ng dibdib, matinding hirap sa paghinga, o mga senyales ng stroke",
            "Matinding pagdurugo, malubhang pinsala, o pagkawala ng malay",
            "Biglaang pagkalito, seizure (kombulsyon), o malubhang allergic reaction",
            "Emergency sa kaligtasan kung saan ang paghihintay ay maaaring maglagay sa panganib ng buhay o ng bahagi ng katawan",
          ],
        },
        right: {
          title: "Magsimula sa urgent care, Health811, o same-day clinic para sa mga problemang tulad ng:",
          items: [
            "Pilay (sprain), maliliit na hiwa, pantal, pananakit ng tainga, o lagnat na walang mga babalang senyales ng emergency",
            "Mga problema sa refill ng reseta na hindi maaaring maghintay ng regular na appointment",
            "Mga tanong kung kailangan mo ba ng urgent care ngayong gabi",
            "Problemang pakiramdam mo ay agaran pero hindi malinaw na nanganganib ang buhay",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Mga karaniwang sitwasyon pagkatapos ng office hours",
      type: "table",
      columns: ["Sitwasyon", "Magandang unang hakbang", "Dapat tandaan"],
      rows: [
        {
          cells: [
            "Hindi ako sigurado kung gaano ito ka-urgent",
            "Tawagan ang Health811",
            "Matutulungan ka ng nurse na magdesisyon kung mananatili sa bahay, hahanap ng urgent care, o pupunta sa emergency.",
          ],
        },
        {
          cells: [
            "Sarado ang doktor ko at kailangan ko ng payo ngayong gabi",
            "Health811 o gabay sa urgent care",
            "Huwag ipagpalagay na emergency lang ang opsyon mo kung walang mga babalang senyales ng emergency.",
          ],
        },
        {
          cells: [
            "Kailangan ko ng pangangalaga para sa anak ko",
            "Gamitin ang parehong mga babalang senyales ng emergency, pagkatapos ay humanap ng same-day na pangangalaga o tawagan ang Health811 kung hindi ka sigurado",
            "Dalhin ang health card ng bata, listahan ng gamot, at ang timeline ng mga sintomas kung maaari.",
          ],
        },
        {
          cells: [
            "Kailangan ko ng tulong sa mental health ngayong gabi",
            "Tumawag o mag-text sa 9-8-8 (Suicide Crisis Helpline), o tawagan ang 24/7 na crisis line ng AMHS-KFLA",
            "Kung may agarang panganib sa kaligtasan, tumawag po sa 911.",
          ],
        },
      ],
      caption:
        "Ang table na ito ay pangkalahatang gabay lamang. Kung may posibleng nasa agarang panganib, tumawag po sa 911.",
    },
    {
      id: "kingston-start-points",
      title: "Mga panimulang punto sa Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Emergency Department",
          content:
            "Gamitin ang emergency care para sa mga problemang nanganganib o posibleng nanganganib ang buhay.",
          icon: "alert",
          link: {
            text: "Mga listahan ng emergency at urgent",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Urgent Care Centre",
          content:
            "Kapaki-pakinabang para sa maraming same-day na problemang hindi maaaring maghintay pero hindi malinaw na emergency.",
          icon: "clock",
          link: {
            text: "Urgent at same-day na pangangalaga",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Payo ng nurse sa telepono o online kung hindi ka sigurado kung saan pupunta. May suporta sa telepono sa maraming wika.",
          icon: "info",
          link: { text: "Listahan ng Health811", url: "/local-services/health811" },
        },
        {
          title: "Suporta sa krisis sa mental health",
          content:
            "Tumawag o mag-text sa 9-8-8 (Suicide Crisis Helpline) anumang oras, o gamitin ang lokal na suporta sa krisis tulad ng 24/7 na crisis line ng AMHS-KFLA.",
          icon: "heart",
          link: { text: "Mga listahan ng mental health", url: "/local-services?category=mental-health" },
        },
        {
          title: "Suporta para sa karahasang sekswal",
          content:
            "Gamitin ang espesyalisadong suporta sa krisis kung kailangan mo ng agarang emosyonal na suporta, adbokasiya, o pagpaplano para sa kaligtasan.",
          icon: "shield",
          link: {
            text: "Mga listahan ng suporta",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Mga agarang opsyon para sa estudyante",
          content:
            "Kung estudyante ka, alamin kung ang health service ng iyong campus ang pinakamainam na unang puntahan para sa mga pangangailangang hindi emergency.",
          icon: "stethoscope",
          link: { text: "Mga listahan ng student health", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Kung hindi ka pa rin sigurado",
      type: "callout",
      content:
        "Kapag ang problema ay hindi malinaw na nanganganib ang buhay pero nag-aalala kang maghintay, magsimula sa Health811. Kung may posibleng hindi ligtas, posibleng mabilis na lumalala, o hindi mo makukuha ang tamang tulong sa tamang oras, gamitin ang mga serbisyong pang-emergency.",
      link: { text: "Tawagan ang Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Dalhin ang mga ito kung kaya",
      type: "checklist",
      items: [
        "Health card, mga papeles ng IFHP, o anumang insurance card na mayroon ka",
        "Listahan ng gamot o mga litrato ng mga bote ng gamot",
        "Kung anong oras nagsimula ang mga sintomas at kung ano ang nagpalala sa mga ito",
        "Nakasulat na pangangailangan sa interpreter kung baka masyado kang ma-stress para maalala ito mamaya",
        "Phone charger at isang kasamang sumusuporta kung makakatulong ito sa iyo",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Paghahanap ng Primary Care",
  description:
    "Alamin ang iba't ibang daan tungo sa regular na healthcare sa Kingston kung wala ka pang provider.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Maghanap ng family doctor o nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Opisyal na gabay sa Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Opisyal na impormasyon sa mga serbisyo ng lokal na community health centre.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Opisyal na impormasyon sa kalusugan ng estudyante para sa mga estudyante ng Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Opisyal na impormasyon sa kalusugan ng estudyante para sa mga estudyante ng St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Ano ang ibig sabihin ng primary care",
      type: "default",
      content:
        "Ang primary care ay ang lugar na karaniwan mong unang pinupuntahan para sa mga pangkaraniwang pangangailangang pangkalusugan. Kasama rito ang mga check-up, pag-renew ng gamot, pangangalaga sa mga chronic (pangmatagalang) sakit, referral, preventive na pangangalaga, at follow-up pagkatapos ng mga agarang isyu.\n\nSa Kingston, ang iyong regular na daan sa primary care ay maaaring family doctor, nurse practitioner, community health centre, campus clinic, o kombinasyon ng mga pansamantalang opsyon habang naghihintay ka ng mas matatag na pangangalaga.",
    },
    {
      id: "access-matrix",
      title: "Mga daan sa pag-access ng primary care",
      type: "table",
      columns: ["Daan", "Pinakamainam para sa", "Sino ang maaaring gumamit", "Paano magsimula"],
      rows: [
        {
          cells: [
            "Family doctor o nurse practitioner",
            "Tuloy-tuloy na regular na pangangalaga at pangmatagalang pagpaplano sa kalusugan",
            "Mga pasyenteng maaaring magparehistro sa panel ng isang provider",
            "Gamitin ang Health Care Connect at bantayan ang mga lokal na bakante",
          ],
        },
        {
          cells: [
            "Community health centre",
            "Pangangalagang nakabase sa komunidad, suportang mas madaling ma-access, at ilang pangangalaga para sa bagong dating o sa may komplikadong pangangailangan",
            "Ang kwalipikasyon ay depende sa programa at status ng intake",
            "Direktang makipag-ugnayan sa organisasyon at magtanong tungkol sa intake",
          ],
        },
        {
          cells: [
            "Student health service",
            "Mas mabilis na access para sa mga rehistradong estudyante",
            "Mga estudyante lamang na kwalipikado sa pamamagitan ng paaralan",
            "Gamitin ang health o wellness service ng iyong campus",
          ],
        },
        {
          cells: [
            "Walk-in clinic o urgent same-day na pangangalaga",
            "Panandaliang pangangalaga habang naghihintay o kapag hindi available ang iyong regular na provider",
            "Pangkalahatang publiko, depende sa mga pang-araw-araw na patakaran sa intake",
            "Tingnan ang kasalukuyang access bago ka pumunta",
          ],
        },
        {
          cells: [
            "Virtual na primary care",
            "Ilang refill, payo, at pangkaraniwang isyu",
            "Iba-iba depende sa provider at coverage",
            "Alamin kung ano ang kaya at hindi kayang ligtas na asikasuhin ng provider online",
          ],
        },
      ],
      caption:
        "Ang pinakamainam na daan ay depende sa iyong kwalipikasyon, sa pagkaapurahan, at kung kailangan mo ng panandalian o tuloy-tuloy na pangangalaga.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Kung wala kang regular na provider",
      type: "steps",
      items: [
        "Magparehistro sa opisyal na daan ng probinsya: Gamitin ang Health Care Connect kung wala kang family doctor o nurse practitioner.",
        "Alamin kung kwalipikado ka sa mga opsyon sa campus o community health: Ang mga estudyante ay dapat magsimula sa clinic ng kanilang paaralan. Ang ilang serbisyo ng community health ay may mga partikular na priyoridad sa intake.",
        "Gumawa ng ligtas na pansamantalang plano: Alamin kung aling mga serbisyong walk-in, urgent, virtual, parmasya, at mental health ang magagamit mo habang naghihintay.",
        "Itago ang sarili mong mga record: I-save ang mga listahan ng gamot, resulta ng test, referral, at mga pangalan ng mga clinician na nakita mo.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Ano ang gagawin habang naghihintay",
      type: "checklist",
      items: [
        "Gumamit ng walk-in, urgent, o virtual na pangangalaga para sa mga panandaliang pangangailangan kung naaangkop",
        "Itanong sa parmasya kung anong tulong sa refill o pangangalaga sa minor ailment ang maaaring available",
        "Magkaroon ng iisang updated na listahan ng gamot at dalhin ito sa bawat visit",
        "Magdala ng mga kopya ng mahahalagang resulta o discharge papers kapag hati-hati ang iyong pangangalaga",
        "Gamitin ang parehong clinic para sa follow-up kung maaari para medyo mas tuloy-tuloy ang iyong pangangalaga",
      ],
    },
    {
      id: "next-best-option",
      title: "Kung agaran ang pangangailangan mo pero hindi emergency",
      type: "callout",
      content:
        "Ang kawalan ng family doctor ay hindi nangangahulugang dapat mong ipagpaliban ang mahalagang pangangalaga. Gamitin ang tamang panandaliang opsyon para sa problemang nasa harap mo, pagkatapos ay gumawa ng plano para sa tuloy-tuloy na pangangalaga matapos magamot ang agarang problema.",
      link: { text: "Maghanap ng mga opsyon sa primary care", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Gastos at Coverage",
  description:
    "Gabay sa coverage sa simpleng wika para sa OHIP, IFHP, Canadian Dental Care Plan, mga plano ng estudyante o pribado, at mga karaniwang gastos mula sa sariling bulsa.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Mag-apply para sa OHIP at kumuha ng health card",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Opisyal na gabay sa OHIP.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Opisyal na impormasyon sa coverage ng IFHP.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Opisyal na gabay sa coverage ng gamot ng probinsya.",
    },
    {
      title: "Ontario: Humingi ng tulong sa mataas na gastos sa resetang gamot",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Opisyal na gabay sa Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Opisyal na impormasyon at kwalipikasyon sa pederal na programa ng coverage sa dental.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Mga batayan ng coverage",
      type: "default",
      content:
        "Ang coverage sa Ontario ay depende sa iyong legal na status, edad, kita, kwalipikasyon sa programa, at kung mayroon kang insurance plan mula sa paaralan o pribado.\n\nMaraming medikal na kinakailangang serbisyo ng doktor at ospital ang sakop para sa mga kwalipikadong pasyente ng OHIP. **Hindi** iyon nangangahulugang libre ang lahat. Ang mga gamot, dental care, pangangalaga sa mata, mga form, sick note, at maraming allied health na serbisyo ay madalas may hiwalay na coverage o bayad mula sa sariling bulsa.\n\nMagandang balita kung bago ka: **walang waiting period para sa OHIP**. Kung kwalipikado ka, maaari kang mag-apply sa sandaling dumating ka sa Ontario, at magsisimula ang coverage kapag naaprubahan ang iyong aplikasyon. Huwag hintaying magkasakit ka bago mag-apply.",
    },
    {
      id: "coverage-matrix",
      title: "Mga daan ng coverage sa isang tingin",
      type: "table",
      columns: [
        "Uri ng coverage",
        "Karaniwang nakakatulong sa",
        "Ano ang maaaring hindi pa rin sakop",
        "Ano ang susunod na gagawin",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Maraming medikal na kinakailangang serbisyo ng doktor at ospital",
            "Maraming gamot, dental care, pangangalaga sa mata, at mga form",
            "Mag-apply kung kwalipikado at panatilihing updated ang iyong card",
          ],
        },
        {
          cells: [
            "IFHP",
            "Coverage para sa mga kwalipikadong refugee at refugee claimant ayon sa pederal na programa",
            "Iba-iba ang mga detalye depende sa kategorya at serbisyo",
            "Tingnan ang opisyal na gabay ng IFHP at itanong sa clinic o parmasya kung tinatanggap nila ito",
          ],
        },
        {
          cells: [
            "Insurance ng paaralan o pribado",
            "Madalas tumutulong sa gamot, counselling, dental, paningin, at allied health",
            "Iba-iba ang mga limitasyon ng coverage, co-pay, at patakaran sa network",
            "Basahin ang booklet ng plano bago ipagpalagay na sakop ang isang serbisyo",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Coverage sa dental para sa mga kwalipikadong residenteng walang access sa pribadong dental insurance at may adjusted family income na mas mababa sa $90,000",
            "Hindi lahat ng procedure ay sakop, at maaaring may co-payment depende sa kita",
            "Tingnan ang kwalipikasyon at mag-apply sa opisyal na pahina ng CDCP ng Government of Canada",
          ],
        },
        {
          cells: [
            "Walang aktibong coverage",
            "Maaari ka pa ring maka-access ng ilang serbisyo, pero maaaring may bayad",
            "Maaaring malaki ang gastos para sa mga visit, test, o gamot",
            "Magtanong tungkol sa bayarin bago ang visit at maghanap ng mga opsyon sa komunidad kung naaangkop",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Ano ang madalas na hindi lubos na sakop",
      type: "checklist",
      items: [
        "Maraming resetang gamot, maliban kung kwalipikado ka sa isang pampublikong programa o may iba kang plano",
        "Dental care, maliban kung kwalipikado ka sa Canadian Dental Care Plan, Healthy Smiles Ontario, isang community dental program, o isang benefit plan",
        "Pangangalaga sa paningin, maliban sa mga partikular na daan ng kwalipikasyon",
        "Physiotherapy, counselling, masahe, at iba pang allied health na serbisyo, maliban kung sakop ng isang programa o plano",
        "Mga form, sulat, bayad sa hindi pagdating sa appointment, at marami pang ibang administratibong singil",
      ],
    },
    {
      id: "drug-coverage",
      title: "Mga daan ng coverage sa gamot",
      type: "default",
      content:
        "Ang coverage sa gamot ang madalas pagkagulatan ng mga bagong dating. Maaaring sakop ang visit sa doktor, pero maaaring may bayad pa rin ang reseta.\n\nMaaaring makatulong ang mga pampublikong programa sa gamot depende sa edad, kita, at kwalipikasyon. Ang **Ontario Drug Benefit** ay sumasakop sa maraming gamot para sa mga taong 65 pataas at sa mga tao sa ilang partikular na programa, at ang **OHIP+** ay sumasakop sa maraming reseta para sa mga taong 24 pababa na walang pribadong plano. May **Trillium Drug Program** din ang Ontario para sa ilang taong may mataas na gastos sa reseta kumpara sa kita ng sambahayan. Kung may plano ka mula sa paaralan o pribado, alamin kung nakikipag-coordinate ito sa pampublikong coverage o pinapalitan nito iyon.",
    },
    {
      id: "coverage-scenarios",
      title: "Mga karaniwang tanong sa coverage",
      type: "faq",
      faqs: [
        {
          question: "Wala pa akong OHIP. Maaari pa rin ba akong magpagamot?",
          answer:
            "Oo, pero maaaring may bayad, at ang pinakamainam na daan ay depende sa iyong status at sa pagkaapurahan. Magtanong tungkol sa gastos bago ang hindi emergency na pangangalaga kung maaari, at tingnan ang kwalipikasyon sa IFHP o sa plano ng paaralan o pribado kung naaangkop sa iyo.",
        },
        {
          question: "International student ako. OHIP lang ba ang opsyon ko?",
          answer:
            "Hindi palagi. Maraming estudyante ang umaasa sa insurance plan ng paaralan o pribado sa halip na OHIP. Gamitin ang mga opisyal na dokumento ng plano ng iyong paaralan at ang student health services para kumpirmahin kung ano ang sakop.",
        },
        {
          question: "Magiging libre ba ang gamot ko kung sakop ang appointment ko?",
          answer:
            "Hindi sa lahat ng pagkakataon. Ang coverage sa appointment at ang coverage sa reseta ay madalas magkahiwalay.",
        },
        {
          question: "Sakop ba ang dental care?",
          answer:
            "Ang dental care ay hiwalay sa OHIP para sa karamihan ng mga adult. Ang pederal na Canadian Dental Care Plan ay sumasakop na ngayon sa maraming residenteng walang pribadong dental insurance at may adjusted family income na mas mababa sa $90,000 — karaniwang kailangan mong nakapag-file na ng Canadian tax return para maging kwalipikado. Ang mga batang nasa pamilyang mas mababa ang kita ay maaaring maging kwalipikado sa Healthy Smiles Ontario, at may community dental clinic ang Kingston para sa mga taong nasa mga partikular na programa.",
        },
        {
          question: "Paano ko malalaman kung ang isang serbisyo ay pampubliko, pang-komunidad, o pribado?",
          answer:
            "Gamitin ang mga filter ng directory at tingnan ang mga detalye ng listahan. Kung hindi ka sigurado, makipag-ugnayan sa serbisyo bago ka mag-book.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Ang Iyong Visit sa Healthcare",
  description:
    "Ano ang dadalhin, paano magtanong, at paano makipag-usap nang ligtas sa isang healthcare visit.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Ang healthcare sa Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Pangkalahatang gabay sa sistema.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Ano ang dadalhin",
      type: "checklist",
      items: [
        "Ang iyong health card, mga papeles ng IFHP, o iba pang impormasyon ng insurance",
        "Kumpletong listahan ng gamot, kasama ang mga bitamina at over-the-counter na gamot",
        "Ang mga sintomas, kung kailan nagsimula ang mga ito, at kung ano ang nagbago",
        "Mga tanong na gusto mong masagot bago ka umalis",
        "Anumang kamakailang requisition, referral, discharge papers, o resulta ng test",
        "Nakasulat na pangangailangan sa interpreter para hindi mo makalimutang humingi",
      ],
    },
    {
      id: "during-the-visit",
      title: "Habang nasa visit",
      type: "steps",
      items: [
        "Magsimula sa pangunahing problema mo: Maraming appointment ang maikli, kaya simulan sa alalahaning pinakamahalaga sa araw na ito.",
        "Gumamit ng simpleng wika: Okay lang sabihin, 'Hindi ko po naiintindihan ang salitang iyon' o 'Maaari po bang ipaliwanag iyon sa mas simpleng paraan?'",
        "Ulitin ang plano: Bago ka umalis, sabihin nang malakas ang mga susunod na hakbang para alam mo kung kailangan mo ng test, referral, refill, o follow-up na appointment.",
        "Itanong kung ano ang gagawin kapag lumala: Dapat mong malaman kung kailan tatawag muli, kailan gagamit ng urgent care, at kailan gagamit ng emergency care.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Tulong sa interpreter at komunikasyon",
      type: "default",
      content:
        "Kung kailangan mo ng tulong sa wika, humingi nang maaga. Huwag maghintay hanggang sa dulo ng appointment. Mababasa mo ang website na ito sa ilang wika gamit ang Language menu, pero ang pagsasalin ng website ay hindi dapat pumalit sa suporta ng interpreter para sa mga desisyon sa paggamot, instruksyon sa gamot, o consent.\n\nMaaari mong sabihin: **'Kailangan ko po ng interpreter.'** Ang Health811 (tumawag sa 811) ay may suporta rin sa telepono sa maraming wika. Kung may kasama kang sumusuporta, tandaang ang isang miyembro ng pamilya ay maaaring hindi palaging ang pinakamainam o pinakaligtas na taong magsalin ng komplikado o sensitibong medikal na impormasyon.",
    },
    {
      id: "questions-to-ask",
      title: "Mga tanong na sulit itanong",
      type: "checklist",
      items: [
        "Ano po sa tingin ninyo ang nangyayari?",
        "Ano po ang susunod kong gagawin?",
        "Kailangan ko po ba ng test, requisition, referral, o follow-up na visit?",
        "Kailan ko po dapat asahan ang mga resulta?",
        "Anong mga babalang senyales po ang nangangahulugang dapat akong tumawag muli o humingi ng agarang tulong?",
      ],
    },
    {
      id: "privacy",
      title: "Privacy at consent",
      type: "default",
      content:
        "Sensitibo ang iyong impormasyong pangkalusugan. Kung hindi ka sigurado kung sino ang makakakita ng iyong impormasyon, magtanong. Kung hindi mo naiintindihan ang isang form, usapan tungkol sa consent, o plano sa paggamot, hinaan muna ang takbo ng proseso at humingi ng mas malinaw na paliwanag.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Pagkatapos ng Visit",
  description:
    "Alamin kung ano ang nangyayari pagkatapos ng visit, kasama ang mga requisition, resulta ng test, referral, at kung kailan tatawag muli.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Impormasyon ng lokal na sistema ng ospital.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Impormasyon sa proseso ng community lab at patient portal.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Ano ang madalas mangyari pagkatapos ng visit",
      type: "steps",
      items: [
        "Aalis kang may plano: Maaaring kasama rito ang gamot, requisition, referral, follow-up na appointment, o mga instruksyong bantayan ang mga babalang senyales.",
        "Maaaring ikaw mismo ang gagawa ng susunod na hakbang: Halimbawa, maaaring kailangan mong mag-book ng blood test, imaging, pagkuha sa parmasya, o follow-up na visit.",
        "Ang mga resulta ay karaniwang bumabalik sa clinician na nag-order ng mga ito: Maaaring hindi ipaliwanag sa iyo ng lab o imaging site ang resulta noon din.",
        "Maaaring hindi ka tawagan para sa bawat normal na resulta: Itanong kung ano ang proseso ng follow-up ng clinic para alam mo kung ano ang aasahan.",
      ],
    },
    {
      id: "common-terms",
      title: "Mga karaniwang termino pagkatapos ng visit",
      type: "table",
      columns: ["Termino", "Ano ang ibig sabihin nito sa simpleng wika", "Ano ang karaniwan mong susunod na gagawin"],
      rows: [
        {
          cells: [
            "Requisition",
            "Form na nagsasabi sa lab o imaging clinic kung anong test ang kailangan mo",
            "I-book o puntahan ang test at magtago ng kopya kung kaya",
          ],
        },
        {
          cells: [
            "Referral",
            "Kahilingan mula sa isang clinician papunta sa ibang serbisyo o espesyalista",
            "Hintayin ang pakikipag-ugnayan, pagkatapos ay tumawag muli kung sinabihan kang mag-follow up at walang nangyari",
          ],
        },
        {
          cells: [
            "Follow-up",
            "Pag-check muli pagkatapos ng paggamot, pag-test, o pagbabago ng mga sintomas",
            "Itanong kung kailan at paano dapat mangyari ang follow-up bago ka umalis",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Kailan tatawag muli",
      type: "checklist",
      items: [
        "Hindi mo naiintindihan ang requisition, referral, o mga instruksyon sa gamot",
        "Sinabihan kang may makikipag-ugnayan sa iyo at wala kang narinig sa loob ng inaasahang panahon",
        "Lumalala ang iyong mga sintomas o hindi bumubuti ayon sa sinabi sa iyong aasahan",
        "Sinabi ng parmasya, lab, o imaging clinic na may kulang sa mga papeles",
        "Sa tingin mo ay maaaring may resultang nakaligtaan o nag-aalala ka pa rin",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Mga karaniwang sitwasyon",
      type: "faq",
      faqs: [
        {
          question: "Kailangan ko ng blood test pagkatapos ng visit. Ano ang gagawin ko?",
          answer:
            "Tingnan kung may requisition ka at kung kailangan ng booking ng lab. Pagkatapos, gamitin ang directory para makahanap ng lokasyon ng lab. Dalhin ang requisition at ang iyong impormasyon sa coverage.",
        },
        {
          question: "Hindi ko naiintindihan ang requisition o referral form.",
          answer:
            "Tawagan ang clinic na nagbigay nito sa iyo at hilinging ipaliwanag ito sa simpleng wika. Makatwirang itanong kung para saan ang form, saan ito dapat dalhin, at kung kailangan mo bang mag-book ng kahit ano nang ikaw mismo.",
        },
        {
          question: "Sino ang nagfa-follow up sa mga resulta ng test?",
          answer:
            "Karaniwan, ang clinician na nag-order ng test. Itanong sa opisina ng clinician na iyon kung ano ang karaniwan nilang proseso para sa mga normal at abnormal na resulta.",
        },
        {
          question: "Gaano katagal ang mga referral?",
          answer:
            "Malaki ang pagkakaiba-iba ng mga timeline ng referral. Itanong kung anong klaseng paghihintay ang normal para sa iyong sitwasyon at kung ano ang gagawin kung hindi ka makarinig ng balita.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Mga kapaki-pakinabang na susunod na hakbang",
      type: "grid",
      gridItems: [
        {
          title: "Maghanap ng mga lab at imaging",
          content:
            "Gamitin ang directory para sa mga listahan ng blood test, X-ray, ultrasound, at imaging.",
          icon: "file",
          link: { text: "Mga lab at imaging", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Maghanap ng parmasya",
          content:
            "Gamitin ang directory para sa mga parmasya, tulong sa refill, at suporta sa gamot.",
          icon: "shield",
          link: { text: "Mga parmasya", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Kailangang magplano ng follow-up na pangangalaga?",
          content:
            "Gamitin ang pahina ng primary care kung hindi mo alam kung saan dapat mangyari ang pangmatagalang follow-up.",
          icon: "stethoscope",
          link: { text: "Maghanap ng Primary Care", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Mga Gamot at Parmasya",
  description:
    "Unawain ang mga reseta, refill, tulong ng parmasyutiko, at kung paano magbayad para sa mga gamot sa Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Ano ang magagawa ng mga parmasyutiko",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Opisyal na impormasyon ng probinsya tungkol sa mga parmasyutiko at parmasya.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Opisyal na gabay sa coverage ng gamot ng probinsya.",
    },
    {
      title: "Ontario: Humingi ng tulong sa mataas na gastos sa resetang gamot",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Opisyal na gabay sa Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Saan makakatulong ang parmasyutiko",
      type: "default",
      content:
        "Higit pa sa pag-abot ng gamot ang ginagawa ng mga parmasyutiko. Maipapaliwanag nila kung paano ligtas na gamitin ang isang gamot, masusuri ang mga interaction, at marerepaso ang mga side effect.\n\nSa Ontario, ang mga parmasyutiko ay maaari ring **mag-assess at magreseta para sa 19 na karaniwang minor ailments** — kasama ang sore eyes (pink eye), singaw sa labi (cold sores), impeksyon sa ihi (urinary tract infection, sa mga kababaihan), kagat ng insekto, at seasonal allergies. Libre ang assessment gamit ang iyong Ontario health card, at maaaring patuloy pang dumami ang listahan ng mga kondisyon.\n\nAng parmasya rin ang isa sa pinakamagagandang lugar para magtanong ng mga praktikal na tanong tulad ng: **Urgent ba ang refill na ito? May mas murang opsyon ba? Ano ang gagawin ko kung nakalimutan ko ang isang dose?**",
    },
    {
      id: "fill-a-prescription",
      title: "Paano magpa-fill ng reseta",
      type: "steps",
      items: [
        "Kunin ang reseta: Maaari itong nasa papel, naka-fax, o ipinadala nang elektroniko.",
        "Piliin ang parmasya: Ang regular na paggamit ng parehong parmasya ay tumutulong sa kanilang mahuli ang mga interaction ng gamot at mga isyu sa history ng refill.",
        "Itanong ang timing at gastos: Masasabi sa iyo ng parmasya kung kailan ito magiging handa at kung sakop ito ng iyong plano.",
        "Makinig sa counselling: Itanong kung para saan ang gamot, paano ito gagamitin, at kailan ka dapat tumawag muli kung hindi ito nakakatulong.",
      ],
    },
    {
      id: "refill-options",
      title: "Mga problema sa refill at gamot",
      type: "table",
      columns: ["Sitwasyon", "Magandang unang hakbang", "Bakit"],
      rows: [
        {
          cells: [
            "Kailangan ko ng regular na refill",
            "Magsimula sa iyong dating parmasya o regular na clinician",
            "Masasabi nila sa iyo kung refill, renewal, o bagong appointment ang kailangan",
          ],
        },
        {
          cells: [
            "Hindi available ang doktor ko at baka maubusan ako ng gamot",
            "Itanong sa parmasya kung anong mga opsyon ang available, pagkatapos ay gumamit ng walk-in, virtual, o urgent care kung kailangan",
            "Ang pinakaligtas na susunod na hakbang ay depende sa gamot at sa iyong sitwasyon",
          ],
        },
        {
          cells: [
            "Hindi ko naiintindihan kung paano gamitin ang gamot na ito",
            "Hilingin sa parmasyutikong ipaliwanag itong muli sa simpleng wika",
            "Bahagi ito ng ligtas na paggamit ng gamot",
          ],
        },
        {
          cells: [
            "Masyadong mahal ang gamot",
            "Magtanong tungkol sa mga generic na bersyon, coverage ng plano, at mga pampublikong programa",
            "Iba-iba ang presyo ng gamot, at ang coverage ay madalas hiwalay sa visit mismo",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Mga paraan kung paano maaaring mabayaran ang mga gamot",
      type: "checklist",
      items: [
        "Isang pampublikong programa sa gamot, kung kwalipikado ka",
        "Insurance plan ng paaralan o pribado",
        "Kombinasyon ng pampubliko at pribadong coverage",
        "Mula sa sariling bulsa kung walang programang sumasakop sa gamot",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Kailangan ng tulong sa lokal na parmasya?",
      type: "callout",
      content:
        "Gamitin ang directory para makahanap ng mga parmasya, suporta sa refill, at mga virtual o same-day na opsyon kapag sinusubukan mong lutasin nang mabilis ang isang problema sa gamot.",
      link: { text: "Maghanap sa mga listahan ng parmasya", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Suporta sa Mental Health",
  description:
    "Mga lokal na daan para sa mental health, counselling, suporta sa kabataan, at krisis sa Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Suicide Crisis Helpline",
      url: "https://988.ca/",
      note: "Opisyal na pambansang suicide crisis helpline. Tumawag o mag-text sa 9-8-8, libre, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Opisyal na impormasyon sa mental health ng mga adult at sa suporta sa krisis.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Opisyal na helpline ng Ontario para sa mental health at adiksyon.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Opisyal na impormasyon sa mental health ng mga bata at kabataan.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Kung may posibleng hindi ligtas",
      type: "callout",
      content:
        "Kung may agarang panganib sa buhay o kaligtasan, tumawag po sa 911. Para sa mga pag-iisip ng pagpapakamatay o matinding pagkabalisa, maaari kang **tumawag o mag-text sa 9-8-8** (Suicide Crisis Helpline) anumang oras — libre ito, kumpidensyal, at available 24/7 sa English at French. Maaari mo ring tawagan ang 24/7 na crisis line ng AMHS-KFLA sa 613-544-4229. Huwag maghintay ng regular na appointment.",
      link: { text: "Mga listahan ng mental health", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Mga uri ng suporta",
      type: "grid",
      gridItems: [
        {
          title: "Suporta sa krisis",
          content:
            "Gamitin ito para sa agarang matinding pagkabalisa, mga alalahanin sa kaligtasan, o kapag hindi ligtas ang maghintay.",
          icon: "alert",
        },
        {
          title: "Agarang suporta",
          content:
            "Gamitin ito kapag seryoso ang sitwasyon at kailangan mo ng tulong sa lalong madaling panahon, pero hindi ito agarang emergency na nanganganib ang buhay.",
          icon: "clock",
        },
        {
          title: "Regular na counselling",
          content:
            "Gamitin ito para sa patuloy na anxiety (pagkabalisa), depresyon, stress, pagdadalamhati, mga problema sa relasyon, o mga pagbabago sa buhay.",
          icon: "heart",
        },
        {
          title: "Mga serbisyo para sa bata at kabataan",
          content:
            "Gumamit ng espesyalisadong serbisyo sa mental health ng kabataan kapag ang nangangailangan ng pangangalaga ay bata o teenager.",
          icon: "info",
        },
        {
          title: "Suporta sa campus",
          content:
            "Para sa mga estudyante, madalas na pinakamainam munang magsimula sa wellness o counselling ng kanilang campus.",
          icon: "stethoscope",
        },
        {
          title: "Suporta para sa karahasang sekswal",
          content:
            "Gumamit ng espesyalisadong suporta para sa krisis, counselling, adbokasiya, at pagpaplano para sa kaligtasan pagkatapos ng karahasang sekswal.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Saan magsisimula sa mga karaniwang sitwasyon",
      type: "table",
      columns: ["Sitwasyon", "Pinakamainam na unang puntahan", "Bakit"],
      rows: [
        {
          cells: [
            "Kailangan ko ng tulong sa mental health ngayong gabi",
            "Tumawag o mag-text sa 9-8-8, tawagan ang crisis line ng AMHS-KFLA, o gumamit ng emergency care kung nanganganib ang kaligtasan",
            "Huwag maghintay ng regular na appointment kapag pakiramdam mo ay hindi ligtas ang sitwasyon",
          ],
        },
        {
          cells: [
            "Kailangan ko ng counselling pero ligtas ako sa ngayon",
            "Community counselling, family doctor, nurse practitioner, o mga suporta ng pribadong plano",
            "Makakatulong ang mga ito sa tuloy-tuloy na pangangalaga at mga referral",
          ],
        },
        {
          cells: [
            "Kailangan ko ng tulong para sa anak ko",
            "Mga serbisyo sa mental health ng bata o kabataan at, kung kailangan, agarang gabay",
            "Ang mga bata at kabataan ay madalas may hiwalay na mga daan",
          ],
        },
        {
          cells: [
            "Estudyante ako",
            "Health o counselling muna ng campus, maliban kung hindi ligtas o malala ang sitwasyon",
            "Ang mga serbisyo ng campus ang maaaring pinakamabilis na daan ng pagpasok para sa mga estudyante",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Mga karaniwang tanong",
      type: "faq",
      faqs: [
        {
          question: "Sino ang maaari kong tawagan o i-text ngayon din?",
          answer:
            "Tumawag o mag-text sa **9-8-8** (Suicide Crisis Helpline) anumang oras, libre, 24/7 — hindi kailangan ng referral. Sa Kingston, sumasagot din nang 24/7 ang crisis line ng AMHS-KFLA sa 613-544-4229. Kung may agarang panganib sa kaligtasan, tumawag po sa 911.",
        },
        {
          question: "Paano kung hindi ko alam kung maituturing ba itong krisis?",
          answer:
            "Kung may posibleng hindi ligtas, huwag maghintay ng kasiguruhan. Gamitin ang suporta sa krisis o ang mga serbisyong pang-emergency.",
        },
        {
          question: "Paano kung kailangan ko ng tulong ngayong gabi pero hindi ako sigurado kung sino ang tatawagan?",
          answer:
            "Gamitin ang pahina ng lokal na directory ng mental health o ang daan ng suporta sa krisis sa halip na maghintay hanggang umaga.",
        },
        {
          question: "Paano kung ang nangangailangan ng tulong ay ang anak ko?",
          answer:
            "Partikular na hanapin ang mga serbisyo para sa bata at kabataan. Ang mga daan sa mental health ng kabataan ay madalas naiiba sa pangangalaga sa mga adult.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Screening at Pag-iwas sa Sakit",
  description:
    "Alamin ang mga batayan ng preventive na pangangalaga, mga bakuna, at screening sa Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Lokal na impormasyon sa bakuna at public health.",
    },
    {
      title: "Ontario: Ang healthcare sa Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Pangkalahatang gabay sa healthcare.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Bakit mahalaga ang preventive na pangangalaga",
      type: "default",
      content:
        "Ang preventive na pangangalaga ay ang pagsisikap na mahuli nang maaga ang mga problema o mapigilan ang mga ito bago pa lumala. Kasama rito ang mga bakuna, screening test, regular na pagsukat ng presyon ng dugo, at mga usapan tungkol sa mga risk factor kasama ang isang clinician.",
    },
    {
      id: "common-prevention",
      title: "Mga karaniwang gawain sa pag-iwas",
      type: "checklist",
      items: [
        "Panatilihing updated ang iyong mga bakuna",
        "Itanong kung may inirerekomendang screening test para sa iyong edad o history ng kalusugan",
        "Dalhin sa mga regular na visit ang iyong mga tanong tungkol sa presyon ng dugo, diabetes, o iba pang risk factor",
        "Gamitin ang mga resource ng public health kapag kailangan mo ng impormasyon sa bakuna o pag-iwas sa sakit",
      ],
    },
    {
      id: "prevention-next",
      title: "Kailangan ng mga lokal na serbisyo sa pag-iwas?",
      type: "callout",
      content:
        "Gamitin ang directory ng mga lokal na serbisyo para sa mga listahan ng public health, screening, at parmasya kung kailangan mo ng kongkretong panimulang punto sa Kingston.",
      link: {
        text: "Mga listahan ng public health at parmasya",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Allied at Community Care",
  description:
    "Gamitin ang pahinang ito para maunawaan ang home care, dental, rehab, counselling, suporta sa paningin, at kung alin ang maaaring pampubliko, pang-komunidad, pang-estudyante, o pribado.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Opisyal na impormasyon sa koordinasyon ng pangangalaga sa bahay at komunidad.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Opisyal na impormasyon at kwalipikasyon sa pederal na programa ng coverage sa dental.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Opisyal na impormasyon sa mga serbisyo ng komunidad at dental.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Opisyal na impormasyon sa suporta sa paningin.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Ano ang ibig sabihin ng allied at community care",
      type: "default",
      content:
        "Ang allied health ay pangangalaga mula sa mga propesyonal tulad ng mga physiotherapist, occupational therapist, dietitian, social worker, counsellor, dentista, o mga team na sumusuporta sa paningin. Ang community care ay madalas nangangahulugang pangangalagang nangyayari sa labas ng ospital, minsan sa iyong bahay, paaralan, clinic, o programa ng komunidad.",
    },
    {
      id: "access-payment-matrix",
      title: "Matrix ng access at bayad",
      type: "table",
      columns: ["Ruta", "Mga halimbawa", "Paano karaniwang gumagana ang bayad", "Paano magsimula"],
      rows: [
        {
          cells: [
            "Pampublikong pondo ng pangangalaga sa bahay at komunidad",
            "Pag-aalaga ng nurse sa bahay, therapy sa bahay, koordinasyon ng pangangalaga",
            "Maaaring may pampublikong programa kung natutugunan mo ang mga patakaran ng programa",
            "Magsimula sa referral ng clinician o sa opisyal na daan ng home care",
          ],
        },
        {
          cells: [
            "Mga serbisyong nakabase sa komunidad",
            "Dental ng community health centre o mga suportang mas madaling ma-access",
            "Maaaring may pampubliko o pang-komunidad na pondo depende sa serbisyo",
            "Direktang makipag-ugnayan sa programa at magtanong tungkol sa kwalipikasyon",
          ],
        },
        {
          cells: [
            "Mga suportang nakabase sa paaralan",
            "Counselling ng campus o mga suportang may kinalaman sa kalusugan",
            "Karaniwang nakatali sa kwalipikasyon ng estudyante at sa mga bayarin o plano ng estudyante",
            "Gamitin muna ang mga opisyal na pahina ng serbisyo ng iyong paaralan",
          ],
        },
        {
          cells: [
            "Pribadong allied na pangangalaga",
            "Physiotherapy, counselling, masahe, pribadong dental, mga pribadong serbisyo sa paningin",
            "Madalas sariling bayad maliban kung may ibang planong sumasakop dito",
            "Hingin ang buong bayarin at ang mga patakaran sa coverage bago mag-book",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Mga halimbawa ng allied at community care",
      type: "grid",
      gridItems: [
        {
          title: "Home care",
          content:
            "Kapaki-pakinabang kapag may nangangailangan ng suporta sa bahay pagkatapos ng sakit, pinsala, o pangangalaga sa ospital.",
          icon: "clock",
          link: {
            text: "Mga listahan ng home care",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Dental care",
          content:
            "Ang coverage sa dental ay hiwalay sa regular na coverage sa doktor. Ang pederal na Canadian Dental Care Plan ay sumasakop na ngayon sa maraming taong walang pribadong dental insurance, at ang mga programang tulad ng Healthy Smiles Ontario at mga community dental clinic ay tumutulong sa mga partikular na grupo.",
          icon: "shield",
          link: {
            text: "Mga listahan ng dental at komunidad",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehab at therapy",
          content:
            "Ang physiotherapy, occupational therapy, at mga kaugnay na serbisyo ay maaaring pampubliko, pang-komunidad, o pribado depende sa iyong daan.",
          icon: "stethoscope",
          link: { text: "Mga listahan ng allied care", url: "/local-services?category=allied-community" },
        },
        {
          title: "Suporta sa paningin",
          content:
            "Ang suporta sa paningin ay maaaring may kasamang mga device, tulong sa oryentasyon, at mga suporta ng komunidad, pati na rin ang medikal na pangangalaga sa mata.",
          icon: "info",
          link: {
            text: "Mga listahan ng suporta sa paningin",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Bago ka mag-book",
      type: "checklist",
      items: [
        "Itanong kung kailangan ng referral",
        "Itanong kung ang serbisyo ay pampubliko, pinopondohan ng komunidad, o sariling bayad",
        "Hingin ang eksaktong bayarin at ang mga patakaran sa pagkansela kung pribado ang serbisyo",
        "Tingnan kung sakop ng plano ng iyong paaralan o pribadong plano ang bahagi ng gastos",
        "Itanong kung kailangan mong magdala ng mga record, imaging, o sulat ng doktor",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ at Glossary",
  description:
    "Mga karaniwang sitwasyon ng bagong dating, mga praktikal na tanong, at mga kahulugan sa simpleng wika.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Ang healthcare sa Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Pangkalahatang gabay sa healthcare ng probinsya.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Opisyal na gabay sa payo ng nurse.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Mga karaniwang sitwasyon ng bagong dating",
      type: "faq",
      faqs: [
        {
          question: "Wala pa akong OHIP. Ano ang dapat kong unang gawin?",
          answer:
            "Alamin muna ang iyong daan sa coverage, pagkatapos ay gamitin ang lokal na directory at ang mga pahina ng agarang gabay para gumawa ng ligtas na pansamantalang plano.",
        },
        {
          question: "International student ako. Saan ako magsisimula?",
          answer:
            "Magsimula sa health o wellness service ng iyong campus at sa mga dokumento ng insurance ng iyong paaralan, pagkatapos ay gumamit ng mga serbisyo ng komunidad o mga agarang serbisyo kapag hindi sapat ang mga iyon.",
        },
        {
          question: "Kailangan ko ng interpreter.",
          answer:
            "Humingi nang maaga. Mababasa mo ang site na ito sa 33 wika gamit ang Language menu, at maipapakita mo sa staff ang mga mabilisang parirala sa tab ng tulong ng interpreter. Para sa mga appointment, instruksyon sa gamot, consent, at usapan tungkol sa test, magtanong tungkol sa propesyonal na suporta ng interpreter. Ang Health811 (tumawag sa 811) ay may suporta sa telepono sa maraming wika.",
        },
        {
          question: "Kailangan ko ng blood test pagkatapos ng visit.",
          answer:
            "Siguraduhing may requisition ka, pagkatapos ay hanapin sa directory ang mga lab at imaging.",
        },
        {
          question: "Kailangan ko ng refill at hindi available ang doktor ko.",
          answer:
            "Magsimula sa iyong parmasya, pagkatapos ay gumamit ng walk-in, virtual, o agarang daan kung naaangkop, depende sa gamot at sa pagkaapurahan.",
        },
        {
          question: "Kailangan ko ng pangangalaga para sa anak ko.",
          answer:
            "Gamitin muna ang mga babalang senyales ng emergency, pagkatapos ay ang same-day o agarang gabay. Ang mga daan sa mental health ng bata at kabataan ay madalas hiwalay sa pangangalaga sa mga adult.",
        },
        {
          question: "Kailangan ko ng tulong sa mental health ngayong gabi.",
          answer:
            "Tumawag o mag-text sa 9-8-8 (Suicide Crisis Helpline) anumang oras, o tawagan ang 24/7 na crisis line ng AMHS-KFLA sa 613-544-4229. Gumamit ng emergency care kung nanganganib ang kaligtasan. Huwag maghintay ng regular na appointment.",
        },
        {
          question: "Hindi ko naiintindihan ang isang requisition o referral.",
          answer:
            "Tawagan ang clinic na nagbigay nito sa iyo at hilinging ipaliwanag ito sa simpleng wika. Maaari mong itanong kung para saan ito, saan ito pupunta, at kung sino ang dapat mag-follow up.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Higit pang mga karaniwang tanong",
      type: "faq",
      faqs: [
        {
          question: "Maaari ba akong dumiretso sa emergency kung wala akong doktor?",
          answer:
            "Ang emergency ay para sa mga emergency. Kung ang problema ay hindi malinaw na nanganganib ang buhay, magsimula sa pahina ng agarang gabay, sa Health811, sa isang walk-in clinic, o sa iba pang same-day na pangangalaga.",
        },
        {
          question: "Paano kung bago ako at hindi ko alam kung aling serbisyo ang bagay sa akin?",
          answer:
            "Gamitin ang mga filter ng directory para sa mga estudyante, bagong dating, bata at kabataan, walk-in, virtual, kailangan ng referral, at uri ng coverage.",
        },
        {
          question: "Paano kung mukhang luma na ang impormasyon sa site na ito?",
          answer:
            "Gamitin ang report form sa pahina o listahan para matutukan ng susunod na pagsusuri ang pagbabagong nakita mo.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossary",
      type: "checklist",
      items: [
        "Primary care: Ang iyong regular na daan sa healthcare para sa mga pangkaraniwan at tuloy-tuloy na pangangailangang pangkalusugan.",
        "Nurse practitioner (NP): Isang advanced practice nurse na maaaring mag-assess, mag-diagnose, magreseta, at mag-refer sa maraming sitwasyon.",
        "Referral: Kahilingan mula sa isang clinician papunta sa ibang serbisyo o espesyalista.",
        "Requisition: Form na nagsasabi sa lab o imaging clinic kung anong test ang kailangan mo.",
        "Triage: Ang proseso ng pagdedesisyon kung sino ang unang nangangailangan ng agarang pangangalaga batay sa kaligtasan at kalubhaan.",
        "Walk-in clinic: Clinic na maaaring tumanggap ng mga pasyente nang walang naka-book na appointment, depende sa pang-araw-araw na intake.",
        "Urgent care: Same-day na pangangalaga para sa mga agarang problemang hindi malinaw na nanganganib ang buhay.",
        "Rostered o attached na pasyente: Pasyenteng may tuloy-tuloy na relasyon sa isang regular na primary care provider.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Tungkol Dito, Tiwala, at Privacy",
  description:
    "Alamin kung paano gumagana ang gabay na ito, paano hinahawakan ang mga pinagmulan at status ng pagsusuri, at paano mag-report ng mga pagbabago.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Mga tala sa pinagmulan ng proyekto",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Pampublikong buod kung paano hinahawakan ng proyekto ang tiwala at mga pinagmulan.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Para saan ang site na ito",
      type: "default",
      content:
        "Ang MyPrimaryCareGuide.ca ay isang gabay sa pag-navigate sa healthcare na unang-una para sa mga bagong dating sa Kingston, Ontario. Dinisenyo ito para tulungan ang mga tao na piliin ang tamang susunod na hakbang, maunawaan ang mga karaniwang termino ng sistema, at makahanap ng mga mapagkakatiwalaang listahan ng lokal na serbisyo.\n\nAng site na ito ay **hindi** isang live na wait-time tool, booking platform, o serbisyo ng medikal na payo.",
    },
    {
      id: "sources",
      title: "Paano gumagana ang tiwala at ang paggamit ng pinagmulan",
      type: "default",
      content:
        "Sinisikap naming i-link ang mga lokal na listahan sa mga opisyal na pahina ng serbisyo hangga't maaari. Ang bawat listahan ay nagpapakita ng status ng pagsusuri at ng petsa ng huling pagsusuri. Ang ilang entry ay ganap na na-verify batay sa mga opisyal na pinagmulan. Ang iba ay kailangan pa ng lokal na recheck dahil madalas magbago ang oras ng bukas, intake, o mga patakaran sa pag-access.\n\nAng mga source block sa antas ng pahina ay nagpapakita ng mga pangunahing opisyal na sangguniang ginamit para sa kasalukuyang cycle ng pagsusuri.",
    },
    {
      id: "accessibility",
      title: "Accessibility at wika",
      type: "default",
      content:
        "Ang site na ito ay ginawa para maging keyboard friendly, mobile first, at nababasa sa simpleng wika.\n\nMababasa mo ang buong gabay sa **33 wika** gamit ang Language menu sa header — mula العربية at Soomaali hanggang ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, at Українська — at ang bawat pahina at menu ay direktang inihahatid sa site na ito. Ang lahat ng pagsasalin ay tinulungan ng makina; ang French, Spanish, Arabic, at Simplified Chinese ay nakatanggap ng karagdagang pagsusuri, at ang iba pa ay may markang automatic translation. **Ang Ingles pa rin ang reference na bersyon** — kung ang isang isinaling pangungusap ay tila hindi malinaw o nakakagulat, tingnan ang tekstong Ingles o hilingin sa isang taong kumpirmahin ito.\n\nDose-dosenang iba pang wika ang maaaring magbukas ng site na ito sa pamamagitan ng Google Translate mula sa parehong menu, at ang tab ng tulong ng interpreter ay may mga mabilisang parirala para sa agarang sitwasyon sa mahigit 20 wika na maipapakita mo sa staff.\n\nAng mga listahan sa directory (mga pangalan ng serbisyo, address, numero ng telepono, at oras) ay nananatili sa Ingles para eksaktong tumugma sa mga opisyal na pinagmulan.\n\nAng anumang uri ng pagsasalin ay maaari pa ring magkamali sa mga medikal na detalye, kaya magtanong tungkol sa propesyonal na suporta ng interpreter para sa mga appointment, instruksyon sa gamot, at consent. Ang Health811 (tumawag sa 811) ay may suporta sa telepono sa maraming wika.",
    },
    {
      id: "privacy",
      title: "Privacy",
      type: "default",
      content:
        "Hindi gumagamit ang site na ito ng mapanghimasok na remote analytics. Nagtatago ito ng magagaan na improvement count sa sarili mong browser para maunawaan ng mga maintainer ang mga karaniwang paghahanap, mga paghahanap na walang resulta, mga view ng serbisyo, at mga report ng isyu kapag sadyang ini-export ang impormasyon para sa maintenance.\n\nHuwag magpadala ng pribadong medikal na impormasyon sa pamamagitan ng feedback form o email.",
    },
    {
      id: "contact",
      title: "Contact at pag-report ng mga pagbabago",
      type: "default",
      content:
        "Kung mukhang mali ang isang pahina o listahan, gamitin ang report form sa pahinang iyon. Ang mga report ay dapat naglalarawan ng isyu, hindi ng iyong personal na sitwasyon sa kalusugan.\n\nPangkalahatang contact email: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      type: "default",
      content:
        "Ang website na ito ay para sa navigation at edukasyon lamang. Hindi ito medikal na payo at hindi ito kapalit ng propesyonal na diagnosis, paggamot, o tulong na pang-emergency. Kung ang isang sitwasyon ay maaaring nanganganib ang buhay, tumawag po sa 911.",
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
