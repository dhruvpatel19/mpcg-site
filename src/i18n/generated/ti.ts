import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "ገጽ ይጽዓን ኣሎ...",
    directoryEnglishNote:
      "ዝርዝር ኣገልግሎታት ብእንግሊዝኛ ይርአዩ። ከምኡ ስለዝኾነ ኣስማት ኣገልግሎት፣ ኣድራሻታት፣ ቁጽርታት ተሌፎንን ሰዓታት ስራሕን ምስ ወግዓዊ ምንጭታት ብልክዕ ይሰማምዑ።",
  },
  header: {
    emergencyBanner: "ህይወት ኣብ ሓደጋ ዘእቱ ህጹጽ ኩነታት ድዩ? ሕጂ ናብ 911 ደውሉ።",
    tagline: "Kingston, Ontario — ንሓደስቲ መጻእቲ ቀዳምነት ዝህብ መምርሒ ክንክን ጥዕና",
    languageButton: "ቋንቋ",
    languageButtonAria: "ሓገዝ ቋንቋን ተርጓምን",
    openNavigation: "መምርሒ ገጽ ክፈት",
    primaryNavLabel: "ቀንዲ",
  },
  languageModal: {
    title: "ሓገዝ ቋንቋን ተርጓምን",
    description:
      "ነዚ መምርሒ በቲ ዝቐለለልኩም ቋንቋ ኣንብብዎ። ንዘረባታት ጥዕና ግን ተርጓሚ ምስ ዘድልየኩም ሕተቱ።",
    chooseLanguageTitle: "ቋንቋኹም ምረጹ",
    chooseLanguageNote:
      "እዚ መምርሒ ኣብዚ መርበብ ብ33 ቋንቋታት ምሉእ ብምሉእ ተተርጒሙ ኣሎ፤ ብዙሓት ካልኦት ቋንቋታት ድማ ብኣውቶማቲክ ትርጉም ይኽፈታ። ዝርዝር ኣገልግሎታት ምስ ወግዓዊ ምንጭታት ብልክዕ ምእንቲ ክሰማማዕ ብእንግሊዝኛ ይተርፍ። ገለ ነገር ዘይንጹር እንተመሲሉ፣ እቲ እንግሊዝኛ እዩ መወከሲ ቅዳሕ።",
    safetyTitle: "መዘኻኸሪ ድሕነት",
    safetyBody:
      "ትርጉም መርበብ ንምንባብን ንምርዳእን እዩ። ንቆጸራታት፣ ንመምርሒ መርመራ፣ ንመድሃኒታት ወይ ንፍቓድ ሕክምና፣ እታ ክሊኒክ ወይ ሆስፒታል ሞያዊ ተርጓሚ ከተቕርብ ትኽእል እንተኾይና ሕተቱ። Health811 (ናብ 811 ደውሉ) ብብዙሕ ቋንቋታት ናይ ተሌፎን ደገፍ ይህብ።",
    phrasesTitle: "ንሰራሕተኛታት እተርእይዎም ቅልጡፋት ሓረጋት",
    phrasesNote:
      "ቋንቋኹም ኣመልክቱ እሞ ነዘን መስመራት ንተቐበልቲ ወይ ንሰራሕተኛታት ሕክምና ኣርእዩ።",
    callHealth811: "ናብ Health811 ደውሉ",
    accessibilityCta: "ተበጻሕነትን እምነትን",
    close: "ናይ ሓገዝ ቋንቋ መስኮት ዕጾ",
  },
  moreLanguages: {
    title: "ተወሰኽቲ ቋንቋታት (ኣውቶማቲክ ትርጉም)",
    description:
      "ነፍሲ ወከፍ ቋንቋ ካብዚ ሓደ ዝርዝር ይሰርሕ — ሶማሊ፣ ዮሩባ፣ ኢግቦ፣ ሃውሳ፣ ኣምሓርኛ፣ ትግርኛ፣ ስዋሂሊ፣ ዩክሬንኛ፣ ፋርሲ፣ ኡርዱ፣ ፑንጃቢ፣ ታሚልን ቬትናምኛን ሓዊሱ።",
    selectLabel: "ዝኾነ ቋንቋ ምረጹ",
    selectPlaceholder: "ኩለን ቋንቋታት — ሓንቲ ምረጹ…",
    openButton: "በዚ ቋንቋ ክፈት",
    disclaimer:
      "ኣውቶማቲክ ዝብል ምልክት ዘለወን ቋንቋታት ነዚ ገጽ ብ Google Translate ይኸፍታኦ፣ ክትድህስሱ ከለኹም ድማ ብቋንቋኹም ይቕጽል። ኣውቶማቲክ ትርጉም በዚ ፕሮጀክት ኣይተገምገመን — ንምንባብ ጽቡቕ እዩ፣ ሕክምናዊ ዝርዝራት ግን ምስ ሓኪም ወይ ተርጓሚ ኣረጋግጹ።",
  },
  funding: {
    acknowledgment:
      "እዚ ፕሮጀክት እዚ ካብ Ontario Medical Students Association (OMSA) ብዝረኸቦ ናይ ገንዘብ ሓገዝ ይድገፍ።",
    logoAlt: "ናይ Ontario Medical Students Association (OMSA) ኣርማ",
  },
  languagePicker: {
    searchPlaceholder: "ቋንቋታት ድለዩ…",
    onSiteGroup: "ኣብዚ መርበብ ዝተተርጎማ",
    proxyGroup: "ብ Google Translate ተወሰኽቲ ቋንቋታት",
    reviewedBadge: "ዝተገምገመ",
    automaticBadge: "ኣውቶማቲክ",
    interpreterTab: "ሓገዝ ተርጓምን ሓረጋትን",
    noMatches: "ምስ ድለያኹም ዝሰማማዕ ቋንቋ የለን።",
    note: "ትርጉማት ብማሽን ዝተሓገዙ እዮም፤ ገለ ነገር ዘይንጹር እንተመሲሉ እቲ እንግሊዝኛ እዩ መወከሲ ቅዳሕ። ኣብቲ ጉጅለ Google Translate ዘለዋ ቋንቋታት ነዚ ገጽ ኣብ ናይ ወጻኢ መርበብ Google ይኸፍታኦ። ዝርዝር ኣገልግሎታት ምስ ወግዓዊ ምንጭታት ብልክዕ ምእንቲ ክሰማማዕ ብእንግሊዝኛ ይተርፍ።",
  },
  navigation: [
    {
      title: "ኣብዚ ጀምሩ",
      items: [
        {
          label: "ሕጂ ሓገዝ የድልየኒ",
          to: "/need-help-now",
          description: "ህጹጽ ውሳነታትን ደገፍ ቅልውላውን",
        },
        {
          label: "ኣብዚ ጀምሩ",
          to: "/start-here",
          description: "ንክንክን ጥዕና ኦንታርዮ ሓድሽ ዲኹም",
        },
        {
          label: "ቀንዲ ክንክን ርኸቡ",
          to: "/get-a-family-doctor",
          description: "ሓካይም፣ ነርስ ፕራክቲሽነራት፣ ማእከላት ጥዕና ማሕበረሰብን ኣማራጺታት ተመሃሮን",
        },
      ],
    },
    {
      title: "ክንክን ተረድኡ",
      items: [
        {
          label: "ወጻኢታትን ሽፋንን",
          to: "/costs-and-coverage",
          description: "OHIP፣ IFHP፣ ውልቃዊ መድሕንን ሽፋን መድሃኒትን",
        },
        {
          label: "ብጽሖትኩም",
          to: "/your-visit",
          description: "እንታይ ከም እትማልኡን ከመይ ጌርኩም ሕቶ ከም እትሓቱን",
        },
        {
          label: "ድሕሪ ብጽሖት",
          to: "/after-visit",
          description: "መርመራታት፣ requisition፣ ሪፈራልን ክትትልን",
        },
        {
          label: "መድሃኒታትን ፋርማሲታትን",
          to: "/medicines-and-pharmacies",
          description: "ወረቐት መድሃኒት፣ መመላእታ መድሃኒትን ሓገዝ ፋርማሲስትን",
        },
      ],
    },
    {
      title: "ናይ ከባቢ ሓገዝ",
      items: [
        {
          label: "ናይ ከባቢ ኣገልግሎታት",
          to: "/local-services",
          description: "ኣገልግሎታት ኪንግስተን ድለዩ",
        },
        {
          label: "ጥዕና ኣእምሮ",
          to: "/mental-health",
          description: "ቅልውላው፣ ህጹጽ፣ ስሩዕን ናይ መንእሰያትን ደገፍ",
        },
        {
          label: "ምልላይ መርመራን ምክልኻልን",
          to: "/screening-prevention",
          description: "ክታበታትን ናይ ምክልኻል ክንክንን",
        },
        {
          label: "ሓጋዚ ክንክንን ክንክን ማሕበረሰብን",
          to: "/community-allied-health",
          description: "ክንክን ኣብ ገዛ፣ ተሃድሶ፣ ስኒን ደገፋት ማሕበረሰብን",
        },
        {
          label: "ሕቶታት (FAQ)",
          to: "/faq",
          description: "ልሙዳት ኩነታት ሓደስቲ መጻእትን መግለጺ ቃላትን",
        },
        {
          label: "ብዛዕባን እምነትን",
          to: "/about",
          description: "ምንጭታት፣ ብሕትውና፣ ተበጻሕነትን ርእይቶን",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "ሕጂ ሓገዝ የድልየኩም ድዩ?",
    items: {
      "call-911": {
        label: "ናብ 911 ደውሉ",
        description: "ህይወት ኣብ ሓደጋ ዘእቱ ህጹጽ ኩነታት",
      },
      "call-811": {
        label: "ናብ Health811 ደውሉ",
        description: "ምኽሪ ነርስ፣ 24/7",
      },
      "call-988": {
        label: "ናብ 9-8-8 ደውሉ ወይ መልእኽቲ ስደዱ",
        description: "መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት፣ 24/7",
      },
      "call-crisis": {
        label: "ናብ መስመር ቅልውላው ደውሉ",
        description: "መስመር ቅልውላው AMHS-KFLA",
      },
      "urgent-guide": {
        label: "መምርሒ ህጹጽ ክንክን",
        description: "ድሕሪ ሰዓታት ስራሕን ናይ ሎሚ መዓልቲ ኣማራጺታትን",
      },
      "mental-health": {
        label: "ደገፍ ጥዕና ኣእምሮ",
        description: "መንገድታት ቅልውላው፣ ህጹጽን ስሩዕን",
      },
    },
  },
  home: {
    seoTitle: "መምርሒ ክንክን ጥዕና ኪንግስተን",
    seoDescription:
      "ንሓደስቲ መጻእቲ ቀዳምነት ዝህብ መምርሒ ክንክን ጥዕና ንኪንግስተን፣ ኦንታርዮ፦ ህጹጽ ሓገዝ፣ ናይ ከባቢ ኣገልግሎታት፣ መሰረታት ሽፋን፣ መምርሒ ተርጓምን ድሕሪ ብጽሖት ዝስዕቡ ስጉምትታትን።",
    kicker: "ኪንግስተን፣ ኦንታርዮ",
    heroTitle: "ኣብ ኪንግስተን ቅኑዕ ክንክን ብዘይ ምግማት ርኸቡ",
    heroLead:
      "ብህጹጽ ሓገዝ፣ ብመሰረታት ሓደስቲ መጻእቲ፣ ብሽፋን ወይ ብዝርዝር ናይ ከባቢ ኣገልግሎታት ጀምሩ። እዚ መምርሒ ብቐሊል ቋንቋ ዝተጻሕፈ፣ ንሞባይል ዝሰማማዕን ብዛዕባ እንታይ ገና ዳግማይ ምርግጋጽ ከም ዘድልዮ ቅኑዕን እዩ።",
    cardNeedHelp: {
      title: "ሕጂ ሓገዝ የድልየኒ",
      body: "ህጹጽ ኩነታት፣ ቅልጡፍ ክንክን፣ ቅልውላውን መምርሒ ድሕሪ ሰዓታት ስራሕን።",
    },
    cardStartHere: {
      title: "ኣብዚ ጀምሩ",
      body: "ክንክን ጥዕና ኦንታርዮ ከመይ ከም ዝሰርሕን መጀመርታ እንታይ ከም እትገብሩን።",
    },
    cardSearch: {
      title: "ኣገልግሎታት ድለዩ",
      body: "መርመራ ደም፣ መመላእታ መድሃኒት፣ ክንክን ብዘይ ቆጸራ፣ ጥዕና ኣእምሮን ካልእን ድለዩ።",
    },
    cardLanguage: {
      title: "ሓገዝ ቋንቋ",
      body: "ነዚ መምርሒ ብቋንቋኹም ኣንብብዎ፣ ከምኡ'ውን መምርሒ ተርጓምን ቅልጡፋት ሓረጋትን።",
    },
    quickDecisionsKicker: "ቅልጡፋት ውሳነታት",
    quickDecisionsTitle: "በዘን ሕቶታት ጀምሩ",
    quickDecisionLines: [
      "ህይወት ኣብ ሓደጋ ዘእቱ ክኸውን ይኽእል እዩ እንተኾይኑ፣ ሕጂ ናብ 911 ደውሉ።",
      "ሎሚ ምሸት ናበይ ከም እትኸዱ ርግጸኛታት እንተዘይኮንኩም፣ ናብ Health811 ደውሉ።",
      "ንሓሳባት ነብሰ-ቅትለት ወይ ከቢድ ጭንቀት፣ ኣብ ዝኾነ እዋን ናብ 9-8-8 ደውሉ ወይ መልእኽቲ ስደዱ።",
      "ሓኪም ስድራቤት እንተዘይብልኩም፣ ክሊኒክ ብዘይ ቆጸራ (walk-in)፣ ጥዕና ማሕበረሰብን ኣማራጺታት ተመሃሮን ኣብ መደብኩም ሓዙ።",
      "መርመራ ደም፣ ራጂ፣ መመላእታ መድሃኒት ወይ ሓበሬታ ሪፈራል ምስ ዘድልየኩም፣ ነቲ ዝስዕብ ስጉምቲ ንምርካብ ነቲ ናይ ከባቢ ዝርዝር ተጠቐሙ።",
    ],
    trustNoteTitle: "መዘኻኸሪ እምነት",
    trustNoteBody:
      "እዚ ቀዋሚ መምርሒ እዩ። ቀጥታዊ ግዜ ምጽባይ ኣይነርእን ኢና። ከም ሰዓታት ስራሕን ምዝገባን ዝኣመሰሉ ብግዜ ዝቕየዱ ዝርዝራት ቀልጢፎም ክቕየሩ ይኽእሉ እዮም፣ ስለዚ ነፍሲ ወከፍ ዝርዝር ሊንክ ምንጪን ኩነታት ግምገማን ኣለዎ።",
    newcomerKicker: "ቅልጡፍ መጀመሪ ንሓደስቲ መጻእቲ",
    newcomerTitle: "ናብ ኪንግስተን ሓደስቲ እንተኾንኩም ቀዳሞት ስጉምትታት",
    newcomerSteps: [
      {
        title: "1. ሽፋንኩም ፍለጡ",
        body: "OHIP፣ IFHP፣ ውልቃዊ መድሕንን መብዛሕትኡ ግዜ ዘይሽፈን እንታይ ምዃኑን ተረድኡ። ንOHIP ናይ ምጽባይ ግዜ የለን - ምስ መጻእኩም ብኡንብኡ ኣመልክቱ።",
      },
      {
        title: "2. መንገዲ ቀንዲ ክንክንኩም ኣዳልዉ",
        body: "ኣብ መንጎ ሓካይም ስድራቤት፣ ነርስ ፕራክቲሽነራት፣ ክሊኒካት ተመሃሮ፣ ማእከላት ጥዕና ማሕበረሰብን ክንክን ብዘይ ቆጸራን ዘሎ ፍልልይ ፍለጡ።",
      },
      {
        title: "3. ቀጺሉ እንታይ ከም ዝኸውን ፍለጡ",
        body: "requisition (ወረቐት ትእዛዝ መርመራ)፣ ሪፈራል፣ ውጽኢት መርመራን ናይ ክትትል ጻውዒታትን መብዛሕትኡ ግዜ እንታይ ማለት ምዃኖም ተምሃሩ።",
      },
    ],
    languageSupportKicker: "ደገፍ ቋንቋ",
    languageSupportTitle: "ሓገዝ ምስ ዘድልየኩም ነዘን ሓረጋት ኣርእዩ",
    openLanguageHelp: "ሓገዝ ቋንቋ ክፈት",
    commonTasksKicker: "ልሙዳት ዕማማት",
    commonTasksTitle: "በቲ ክትውድእዎ እትደልዩ ዕማም ድለዩ",
    openDirectory: "ምሉእ ዝርዝር ክፈት",
    tasks: [
      {
        title: "መርመራ ደም ወይ ራጂ",
        body: "ላቦራቶሪታትን ኣገልግሎታት ስእላዊ መርመራን ርኸቡ።",
      },
      {
        title: "መመላእታ መድሃኒት",
        body: "ፋርማሲታትን ሓገዝ መመላእታ መድሃኒትን ርኸቡ።",
      },
      {
        title: "ደገፍ ጥዕና ኣእምሮ",
        body: "ቅልውላው፣ ህጹጽ፣ ስሩዕን ናይ መንእሰያትን ደገፍ።",
      },
      {
        title: "ካርድ ጥዕና ወይ ደገፍ ሓደስቲ መጻእቲ",
        body: "ServiceOntario፣ ISKAን ምኽሪ ብተሌፎንን ርኸቡ።",
      },
    ],
    featuredKicker: "ዝተመርጹ ኣገልግሎታት",
    featuredTitle: "ጽቡቓት መበገሲ ቦታታት",
    trustKicker: "እምነትን ምንጭታትን",
    trustTitle: "እንታይ ከም ዝተረጋገጸን እንታይ ገና ዳግማይ ምርግጋጽ ከም ዘድልዮን ብቕንዕና ንገልጽ",
    trustBody:
      "ገለ ዝርዝራት ምስ ወግዓዊ ናይ ከባቢ ምንጭታት ተራእዮም እዮም። ካልኦት ግን ሰዓታት ስራሕ፣ ምዝገባ ወይ ሕግታት ኣታዊ ብተደጋጋሚ ስለ ዝቕየሩ ገና ናይ ከባቢ ዳግመ-ምርግጋጽ የድልዮም። ነዚ ኩነታት ብግልጺ ነርእዮ፣ ተጠቀምቲ ድማ ዝኣረገ ሓበሬታ ክሕብሩ ነተባብዕ።",
    trustChecklistTitle: "ኣብ ሓደ ዝርዝር ቅድሚ ምምርኳስኩም ኣንብቡ",
    trustChecklist: [
      "ነቲ ወግዓዊ ሊንክ ምንጪ ርኣዩ።",
      "ዕለት ናይ መወዳእታ ግምገማ ርኣዩ።",
      "ቅድሚ ምኻድኩም ሰዓታት ናይታ መዓልትን ምእታው ብዘይ ቆጸራን ኣረጋግጹ።",
      "ለውጢ እንተርኢኹም ነቲ ናይ ጸብጻብ ቅጥዒ ተጠቐሙ።",
    ],
    trustLink: "ምንጭታትን መዘኻኸሪታት እምነትን ርኣዩ",
  },
  contentPage: {
    breadcrumbHome: "መበገሲ ገጽ",
    badge: "መምርሒ ብቐሊል ቋንቋ",
    reviewStatusTitle: "ኩነታት ግምገማ",
    reviewLabels: {
      reviewed: "ምስቲ እዚ ፕሮጀክት ዝጥቀመሉ ህሉው እኩብ ምንጭታት ተገምጊሙ።",
      "general-guidance":
        "ከም ሓፈሻዊ መምርሒ ተገምጊሙ። ናይ ከባቢ ዝርዝራት ገና ቀልጢፎም ክቕየሩ ይኽእሉ እዮም።",
      "needs-local-recheck":
        "ጠቓሚ መምርሒ እዩ፣ ናይ ከባቢ ዝርዝራት ግን ገና ተወሳኺ ምርግጋጽ የድልዮም።",
    },
    lastReviewPrefix: "ናይ መወዳእታ ግምገማ ገጽ:",
    noReviewDate: "እዚ ገጽ ዝተመዝገበ ናይ ገጽ ደረጃ ዕለት ግምገማ የብሉን።",
    translationAside:
      "ነዚ ገጽ ብዝርዝር ቋንቋ ተጠቒምኩም ብብዙሕ ቋንቋታት ከተንብብዎ ትኽእሉ ኢኹም። ንቆጸራታት፣ መድሃኒታት፣ ፍቓድ ሕክምናን መምርሒ መርመራን ግን ደገፍ ተርጓሚ ይርከብ እንተኾይኑ ሕተቱ።",
    share: "ኣካፍሉ",
    print: "ሕተሙ",
    sourcesTitle: "ምንጭታት ናይዚ ገጽ",
    sourcesNote:
      "እዚኣቶም ነቲ ህሉው ግምገማ ገጽ ዝተጠቕሙ ቀንዲ ወግዓውያን ወይ ቀዳሞት ምንጭታት እዮም። ናይ ከባቢ ኣሰራርሓታት ኣብ መንጎ ዙርያታት ግምገማ ክቕየሩ ይኽእሉ እዮም።",
    onThisPage: "ኣብዚ ገጽ",
    sourcesAnchorLabel: "ምንጭታት",
    translationReminderTitle: "መዘኻኸሪ ትርጉም",
    translationReminderBody:
      "ሓደ ነገር ንሕክምናኹም ወይ ድሕነትኩም ዝጸሉ እንተኾይኑ፣ ኣብ ትርጉም ጥራይ ኣይትመርኮሱ፤ ምስ ሓኪም ወይ ተርጓሚ ኣረጋግጽዎ።",
    linkCopiedTitle: "ሊንክ ተቐዲሑ",
    linkCopiedBody: "ሕጂ ነዚ ሊንክ ገጽ ኣብ ዝኾነ ቦታ ክትለጥፍዎ ትኽእሉ ኢኹም።",
    shareCancelled: "ምክፋል ተሰሪዙ",
  },
  directory: {
    seoTitle: "ናይ ከባቢ ኣገልግሎታት",
    seoDescription:
      "ንሓደስቲ መጻእቲ ዝሰማማዕ ክንክን ጥዕና፣ ጥዕና ኣእምሮ፣ ፋርማሲ፣ ሽፋንን ኣገልግሎታት ምምራሕን ኣብ ኪንግስተን፣ ኦንታርዮ ድለዩ።",
    kicker: "ዝርዝር ኪንግስተን",
    title: "ናይ ከባቢ ኣገልግሎታት ጥዕና ድለዩ",
    lead: "ብኣገልግሎት፣ ብምልክት ሕማም፣ ብሰነድ ወይ ብዕማም ድለዩ። ኣብነታት፦ ብዘይ ቆጸራ፣ ድሕሪ ሰዓታት ስራሕ፣ መርመራ ደም፣ መመላእታ መድሃኒት፣ ካርድ ጥዕና፣ ክሊኒክ ተመሃሮ ወይ ደገፍ ሓደስቲ መጻእቲ።",
    searchPlaceholder: "ብድሌት፣ ብስም ኣገልግሎት፣ ብኣድራሻ ወይ ብቓል ድለዩ",
    sortAriaLabel: "ውጽኢታት ሰርዑ",
    sortRelevance: "ኣሰራርዓ: ብኣገዳስነት",
    sortAlphabetical: "ኣሰራርዓ: ካብ A ክሳብ Z",
    sortRecentlyReviewed: "ኣሰራርዓ: ብቐረባ ዝተገምገሙ",
    sortArea: "ኣሰራርዓ: ብኸባቢ",
    gridViewLabel: "ትርኢት ሰሌዳ",
    listViewLabel: "ትርኢት ዝርዝር",
    allServices: "ኩሎም ኣገልግሎታት",
    audienceTitle: "ተጠቀምቲ",
    accessTitle: "ኣገባብ ምእታው",
    careLevelTitle: "ደረጃ ክንክን",
    coverageAreaTitle: "ሽፋንን ከባብን",
    areaLabel: "ከባቢ",
    showingServices: "{count} ኣገልግሎታት ይርአዩ ኣለዉ",
    resetFilters: "መጻረዪታት ዳግም ኣጀምር",
    trustPanelTitle: "እምነትን ኩነታት ግምገማን",
    trustPanelBody:
      "እዚ ዝርዝር ቀዋሚ እዩ፣ ቀጥታዊ ኣይኮነን። ናይ መወዳእታ ዝተመዝገበ ዕለት ግምገማ፣ ወግዓውያን ሊንክታት ምንጪ ምስ ዝህልዉ፣ ከምኡ'ውን ኣየኖት ዝርዝራት ገና ናይ ከባቢ ዳግመ-ምርግጋጽ ከም ዘድልዮም ነርኢ። ቅድሚ ምኻድኩም ሰዓታት ስራሕን ምእታው ናይታ መዓልትን ኣረጋግጹ።",
    verifiedLabel: "ዝተረጋገጸ",
    needsRecheckLabel: "ዳግመ-ምርግጋጽ የድልዮ",
    noResultsTitle: "ምስቶም መጻረዪታት ዝሰማማዕ ኣገልግሎት ኣይተረኽበን",
    noResultsBody:
      "ከም መርመራ ደም፣ መመላእታ መድሃኒት፣ ጥዕና ኣእምሮ፣ ካርድ ጥዕና ወይ ብዘይ ቆጸራ ዝኣመሰለ ዝገፍሐ ድልያ ፈትኑ። ኩሎም መጻረዪታት ኣጽሪኹም ድማ ካብ መጀመርታ ክትጅምሩ ትኽእሉ ኢኹም።",
    notSureTitle: "ካበይ ከም እትጅምሩ ርግጸኛታት ኣይኮንኩምን?",
    notSureBody:
      "ህጹጽ ረድኤት፣ ቅልጡፍ ክንክን፣ ክሊኒክ ብዘይ ቆጸራ ወይ ሓገዝ ፋርማሲ ዘድልየኩም እንተኾይኑ ርግጸኛታት እንተዘይኮንኩም፣ በቲ ገጽ መምርሒ ህጹጽ ኩነታት ጀምሩ ወይ ንምኽሪ ነርስ ናብ Health811 ደውሉ።",
    needHelpNowCta: "ሕጂ ሓገዝ የድልየኒ",
    callHealth811: "ናብ Health811 ደውሉ",
  },
  filters: {
    audience: {
      newcomers: "ሓደስቲ መጻእቲ",
      students: "ንተመሃሮ ጥራይ ወይ ካምፓስ",
      "children-youth": "ቆልዓ ወይ መንእሰይ",
      adults: "ዓበይቲ",
      families: "ስድራቤታት",
      "unattached-patients": "ሓኪም ስድራቤት ዘይብሎም",
    },
    access: {
      "walk-in": "ብዘይ ቆጸራ (walk-in)",
      appointment: "ብቆጸራ",
      referral: "ሪፈራል የድሊ",
      virtual: "ብኦንላይን",
    },
    level: {
      emergency: "ህጹጽ ረድኤት",
      urgent: "ቅልጡፍ",
      primary: "ቀንዲ ክንክን",
      community: "ማሕበረሰብ",
    },
    payment: {
      public: "ብህዝባዊ መንግስታዊ ገንዘብ ዝምወል",
      community: "ማሕበረሰባዊ / ቀሊል ቅድመ-ኩነት",
      mixed: "ሕውስዋስ ሽፋን",
      "student-plan": "መደብ ተመሃሮ",
      private: "ብውልቂ ዝኽፈል",
    },
    location: {
      downtown: "ማእከል ከተማ",
      "north-end": "ሰሜናዊ ወገን",
      "west-end": "ምዕራባዊ ወገን",
      campus: "ካምፓስ",
      online: "ኦንላይን",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "ህጹጽ ረድኤትን ቅልጡፍ ክንክንን",
      shortLabel: "ህጹጽን ቅልጡፍን",
    },
    "primary-care": { label: "ቀንዲ ክንክን", shortLabel: "ቀንዲ ክንክን" },
    "community-health": {
      label: "ማእከላት ጥዕና ማሕበረሰብ",
      shortLabel: "ጥዕና ማሕበረሰብ",
    },
    "mental-health": {
      label: "ጥዕና ኣእምሮን ደገፍ ቅልውላውን",
      shortLabel: "ጥዕና ኣእምሮ",
    },
    "public-health": { label: "ህዝባዊ ጥዕና", shortLabel: "ህዝባዊ ጥዕና" },
    "labs-imaging": {
      label: "ላቦራቶሪታትን ስእላዊ መርመራን",
      shortLabel: "ላቦራቶሪን ራጂን",
    },
    pharmacies: {
      label: "መድሃኒታትን ፋርማሲታትን",
      shortLabel: "ፋርማሲታት",
    },
    "allied-community": {
      label: "ሓጋዚ ክንክንን ክንክን ማሕበረሰብን",
      shortLabel: "ሓጋዚ ክንክን",
    },
    "navigation-support": {
      label: "ደገፍ ምምራሕን ሽፋንን",
      shortLabel: "ምምራሕ",
    },
  },
  serviceCard: {
    whenToUse: "መዓስ ትጥቀምሉ:",
    accessLabel: "ኣገባብ ምእታው",
    eligibilityLabel: "ብቕዓት",
    eligibilityFallback:
      "እቲ ወግዓዊ ምንጪ ካልእ እንተዘይበለ ንኹሉ ህዝቢ ክፉት እዩ።",
    hoursLabel: "ሰዓታት ስራሕ",
    phoneLabel: "ተሌፎን",
    trustDetails: "ዝርዝር እምነትን ምንጭን",
    lastReview: "ናይ መወዳእታ ግምገማ:",
    officialSource: "ወግዓዊ ምንጪ",
    call: "ደውሉ",
    officialWebsite: "ወግዓዊ መርበብ",
    directions: "ኣንፈት መንገዲ",
    viewDetails: "ዝርዝር ርኣዩ",
  },
  serviceDetail: {
    backToServices: "ናብ ናይ ከባቢ ኣገልግሎታት ተመለሱ",
    whenToUseTitle: "ነዚ ኣገልግሎት መዓስ ትጥቀምሉ",
    eligibilityTitle: "ብቕዓትን ኣገባብ ምእታውን",
    eligibilityFallback:
      "እዚ ኣገልግሎት ንዓኹም ክፉት እንተኾይኑ ርግጸኛታት እንተዘይኮንኩም ነቲ ወግዓዊ ምንጪ ርኣዩ።",
    whatToBringTitle: "እንታይ ትማልኡ",
    contactTitle: "መራኸብን ስጉምትታትን",
    callNow: "ሕጂ ደውሉ",
    officialWebsite: "ወግዓዊ መርበብ",
    directions: "ኣንፈት መንገዲ",
    trustTitle: "እምነትን ምንጪን",
    lastReview: "ናይ መወዳእታ ግምገማ:",
    viewOfficialSource: "ወግዓዊ ምንጪ ርኣዩ",
  },
  verification: {
    verified: {
      label: "ምስ ወግዓዊ ምንጪ ዝተረጋገጸ",
      shortLabel: "ዝተረጋገጸ",
      description:
        "ቀንዲ ዝርዝራት ኣብቲ ናይ መወዳእታ ዙርያ ግምገማ ምስ ወግዓዊ ምንጪ ተራእዮም እዮም።",
    },
    "partially-verified": {
      label: "ወግዓዊ ምንጪ ተኣሳሲሩ ኣሎ",
      shortLabel: "ወግዓዊ ሊንክ",
      description:
        "ወግዓዊ ምንጪ ተኣሳሲሩ ኣሎ፣ ሓደ ወይ ካብኡ ንላዕሊ ዝርዝራት ግን ብተደጋጋሚ ክቕየሩ ስለ ዝኽእሉ ቅድሚ ምኻድኩም ክረጋገጹ ኣለዎም።",
    },
    "community-reported": {
      label: "ብማሕበረሰብ ዝተሓበረ",
      shortLabel: "ጸብጻብ ማሕበረሰብ",
      description:
        "እዚ ሓበሬታ ካብ ጸብጻብ ማሕበረሰብ ዝመጸ እዩ፣ ገና ነጻ ምርግጋጽ የድልዮ።",
    },
    "needs-recheck": {
      label: "ዳግመ-ምርግጋጽ የድልዮ",
      shortLabel: "ዳግመ-ምርግጋጽ የድልዮ",
      description:
        "እዚ ዝርዝር ገና ክሕግዝ ስለ ዝኽእል ይርአ ኣሎ፣ ቀንዲ ዝርዝራት ግን ዝኣረጉ ክኾኑ ይኽእሉ እዮም። ቅድሚ ምምርኳስኩም ኣረጋግጹ።",
    },
  },
  feedback: {
    badge: "ዝኣረገ ሓበሬታ ሓብሩ",
    title: "እዚ መምርሒ ቅኑዕ ኮይኑ ክቕጽል ሓግዙና",
    body: "እዚ ቅድሚ ሕጂ ዝተመልአ ኢመይል ምስ ሓበሬታ ገጽ ወይ ኣገልግሎት ይሰድድ። ውልቃዊ ሕክምናዊ ሓበሬታ ኣይትእለኹ።",
    issueTypeLabel: "ዓይነት ጸገም",
    issueTypes: {
      "outdated hours": "ዝኣረጉ ሰዓታት ስራሕ",
      "wrong phone or website": "ጌጋ ተሌፎን ወይ መርበብ",
      "eligibility or access issue": "ጸገም ብቕዓት ወይ ምእታው",
      "translation or accessibility problem": "ጸገም ትርጉም ወይ ተበጻሕነት",
      "missing service or content": "ዝጎደለ ኣገልግሎት ወይ ትሕዝቶ",
      other: "ካልእ",
    },
    detailsLabel: "እንታይ ክንርኢ ኣለና?",
    detailsPlaceholder:
      "ኣብነት፦ ቁጽሪ ተሌፎን ተቐዪሩ፣ ሓንቲ ክሊኒክ ሕጂ ብቆጸራ ጥራይ እያ፣ ወይ ሓደ ሊንክ ተሰይሩ።",
    contactLabel: "መራኸቢ (ኣማራጺ)",
    contactPlaceholder: "መልሲ እንተደሊኹም ኣድራሻ ኢመይል",
    openEmail: "ኢመይል ጸብጻብ ክፈት",
    copyText: "ጽሑፍ ጸብጻብ ቅዳሕ",
    thanks:
      "የቐንየልና። ጸብጻባት ንዝኣረጉ ገጻት፣ ዝተሰብሩ ሊንክታትን ናይ ከባቢ ዳግመ-ምርግጋጽ ዘድልዮም ዝርዝራትን ቀዳምነት ክንህብ ይሕግዙና።",
    toastEmailTitle: "ንድፊ ኢመይል ተኸፊቱ",
    toastEmailBody: "ጸብጻብኩም ሓበሬታ ገጽ ወይ ኣገልግሎት ይሓቁፍ።",
    toastCopyTitle: "ጽማቝ ጸገም ተቐዲሑ",
    toastCopyBody: "ምስ ዘድሊ ኣብ ናይ ገዛእ ርእስኹም ኢመይል ክትለጥፍዎ ትኽእሉ ኢኹም።",
  },
  footer: {
    description:
      "ብቐሊል ቋንቋ ዝተጻሕፈ መምርሒ ምምራሕ ክንክን ጥዕና ንኪንግስተን፣ ኦንታርዮ። እዚ መርበብ ሕክምናዊ ምኽሪ ወይ ቀጥታዊ ግዜ ምጽባይ ኣይህብን እዩ። ብግዜ ዝቕየዱ ዝርዝራት ቅድሚ ምኻድኩም ኩሉ ግዜ ምስቲ ወግዓዊ ምንጪ ኣረጋግጹ።",
    trustModelTitle: "ኣገባብ እምነት",
    trustModelBody:
      "ወግዓውያን ሊንክታት ምንጪ፣ ዕለታት ግምገማን ገና ዳግመ-ምርግጋጽ ዘድልዮም ዝርዝራትን ነርኢ። ሓደ ነገር ጌጋ እንተመሲሉ፣ ካብቲ ገጽ ወይ ኣገልግሎት ሓብሩ።",
    beforeYouGo: {
      title: "ቅድሚ ምኻድኩም",
      body: "ወግዓውያን ሰዓታት ስራሕ፣ ቆጸራ ወይ ሪፈራል ዘድሊ እንተኾይኑን እንታይ ሰነዳት ከም እትማልኡን ኣረጋግጹ።",
    },
    languageHelp: {
      title: "ሓገዝ ቋንቋ",
      body: "ዝርዝር ቋንቋ ተጠቒምኩም ነዚ መምርሒ ብቋንቋኹም ኣንብብዎ። ልክዕነት ኣገዳሲ ኣብ ዝኾነሉ ሕክምናዊ ዘረባታት ተርጓሚ ሕተቱ።",
    },
    privacy: {
      title: "ብሕትውና",
      body: "እዚ መርበብ ኣብ ብራውዘርኩም ዝተዓቀቡ ናይ ከባቢ፣ ንብሕትውና ዝሕልዉ መዛግብቲ ምምሕያሽ ይጥቀም። ውልቃዊ ስታቲስቲክስ ናብ ርሑቕ ሰርቨር ኣይሰድድን እዩ።",
    },
    copyrightSuffix: "ሓበሬታዊ ጸጋ ማሕበረሰብ ንኪንግስተን፣ ኦንታርዮ።",
    disclaimer: "መሕበሪ ሓላፍነት",
    privacyLink: "ብሕትውና",
    sourcesLink: "ምንጭታት",
    reportLink: "ዝኣረገ ሓበሬታ ሓብሩ",
  },
  notFound: {
    seoTitle: "ገጽ ኣይተረኽበን",
    seoDescription:
      "እቲ ዝሓተትኩሞ ገጽ ኣይተረኽበን። ብህጹጽ ሓገዝ፣ ብመሰረታት ሓደስቲ መጻእቲ፣ ብናይ ከባቢ ኣገልግሎታት ወይ ብሕቶታት (FAQ) ጀምሩ።",
    badge: "404",
    title: "ነቲ ገጽ ክንረኽቦ ኣይከኣልናን",
    body: "ቀልጢፍኩም ክንክን ክትረኽቡ ትፍትኑ እንተሃሊኹም፣ ብመምርሒ ህጹጽ ኩነታት ጀምሩ ወይ ኣብ ዝርዝር ኣገልግሎታት ኪንግስተን ድለዩ።",
    startHere: "ኣብዚ ጀምሩ",
    needHelpNow: "ሕጂ ሓገዝ የድልየኒ",
    localServices: "ናይ ከባቢ ኣገልግሎታት",
    faq: "ሕቶታት (FAQ)",
  },
};

const homePage: PageContent = {
  title: "መምርሒ ምምራሕ ክንክን ጥዕና ኪንግስተን",
  description:
    "ንሓደስቲ መጻእቲ ቀዳምነት ዝህብ፣ ብቐሊል ቋንቋ ዝተጻሕፈ መምርሒ ንምርካብ ክንክን ጥዕና ኣብ ኪንግስተን፣ ኦንታርዮ።",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "ኣብዚ ጀምሩ",
  description:
    "ናብ ኪንግስተን ወይ ናብ ክንክን ጥዕና ኦንታርዮ ሓደስቲ ዲኹም? እቲ ስርዓት ከመይ ከም ዝሰርሕን መጀመርታ እንታይ ከም እትገብሩን ንምፍላጥ ኣብዚ ጀምሩ።",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "ኦንታርዮ: ክንክን ጥዕና ኣብ ኦንታርዮ",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "ሓፈሻዊ መግለጺ ብዛዕባ መድሕን ዘለዎ ክንክን ኣብ ኦንታርዮ ከመይ ከም ዝሰርሕ።",
    },
    {
      title: "ኦንታርዮ: ንOHIP ኣመልክቱን ካርድ ጥዕና ውሰዱን",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "ወግዓዊ ሓበሬታ መመልከቲ OHIPን ብቕዓትን።",
    },
    {
      title: "ኦንታርዮ: ሓኪም ስድራቤት ወይ ነርስ ፕራክቲሽነር ርኸቡ",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "መምርሒ Health Care Connectን ምእታው ቀንዲ ክንክንን።",
    },
    {
      title: "ካናዳ: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "ፌደራላዊ ሓበሬታ ሽፋን ንብቑዓት ስደተኛታትን ሓተትቲ ዑቕባን።",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "ክንክን ጥዕና ኣብ ኦንታርዮ ከመይ ይሰርሕ",
      type: "default",
      content: `ክንክን ጥዕና ኦንታርዮ ኣብ **ቀንዲ ክንክን** እዩ ዝምስረት። ቀንዲ ክንክን ማለት እቲ ንስሩዕ ድሌታት ጥዕና፣ ንቐጻሊ ሕማማት፣ ንወረቐት መድሃኒት፣ ንሪፈራልን ንምክልኻልን መብዛሕትኡ ግዜ እትጅምርሉ ቦታ እዩ። ወሃቢ ቀንዲ ክንክንኩም ሓኪም ስድራቤት፣ ነርስ ፕራክቲሽነር (ልዑል ስልጠና ዘለዋ ነርስ)፣ ጉጅለ ማእከል ጥዕና ማሕበረሰብ፣ ወይ ብቑዓት እንተኾንኩም ክሊኒክ ጥዕና ተመሃሮ ክኸውን ይኽእል እዩ።

**ሪፈራል (referral)** ማለት ሓደ ሰብ ሞያ ሕክምና ካልእ ኣገልግሎት ወይ ስፐሻሊስት ክርእየኩም ምስ ዝሓትት እዩ። **requisition** ማለት ንላቦራቶሪ ወይ ንክሊኒክ ስእላዊ መርመራ ኣየናይ መርመራ ከም ዘድልየኩም ዝነግር ቅጥዒ እዩ።

ኣብ መጀመርታ መዓልቲ ንኹሉ ክፋል ናይቲ ስርዓት ክትርድእዎ ኣየድልየኩምን እዩ። እቶም ዝያዳ ኣገደስቲ ስጉምትታት እዞም እዮም፦ ሽፋንኩም ፍለጡ፣ ንህጹጻት ጸገማት ናበይ ከም እትኸዱ ፍለጡ፣ ስሩዕ ወሃቢ ክንክን እንተዘይብልኩም ድማ ንስሩዕ ክንክን መደብ ግበሩ።`,
    },
    {
      id: "first-decisions",
      title: "ቀዳሞት ውሳነታት",
      type: "grid",
      gridItems: [
        {
          title: "ህጹጽ ሓገዝ ከድልየኒ ይኽእል እዩ",
          content:
            "ሎሚ ወይ ሎሚ ምሸት ሃንደበታዊ ጸገም እንተሃልዩኩም፣ ብመምርሒ ህጹጽ ረድኤት ኣንጻር ቅልጡፍ ክንክን ጀምሩ።",
          icon: "alert",
          link: { text: "ሕጂ ሓገዝ የድልየኒ", url: "/need-help-now" },
        },
        {
          title: "ሓኪም ስድራቤት የብለይን",
          content:
            "ሓካይም ስድራቤት፣ ነርስ ፕራክቲሽነራት፣ ማእከላት ጥዕና ማሕበረሰብ፣ ክሊኒካት ብዘይ ቆጸራን ክሊኒካት ተመሃሮን ከመይ ከም ዝተኣሳሰሩ ፍለጡ።",
          icon: "stethoscope",
          link: { text: "ቀንዲ ክንክን ርኸቡ", url: "/get-a-family-doctor" },
        },
        {
          title: "እንታይ ከም ዝሽፈን ክርዳእ የድልየኒ",
          content:
            "ብዛዕባ OHIP፣ IFHP፣ ውልቃዊ መድሕን፣ መደባት ተመሃሮ፣ ሽፋን መድሃኒትን ልሙዳት ካብ ጁባ ዝኽፈሉ ወጻኢታትን ኣንብቡ።",
          icon: "shield",
          link: { text: "ወጻኢታትን ሽፋንን", url: "/costs-and-coverage" },
        },
        {
          title: "ሓገዝ ቋንቋ የድልየኒ",
          content:
            "ዝርዝር ቋንቋ ተጠቒምኩም ነዚ መምርሒ ብ33 ቋንቋታት ኣንብብዎ፣ ንሕክምናዊ ዘረባታትን ፍቓድ ሕክምናን ድማ ብዛዕባ ደገፍ ተርጓሚ ሕተቱ።",
          icon: "info",
          link: { text: "ተበጻሕነትን ቋንቋን", url: "/about#accessibility" },
        },
        {
          title: "መርመራ ደም፣ ስእላዊ መርመራ ወይ መመላእታ መድሃኒት የድልየኒ",
          content:
            "ድሕሪ ብጽሖት ነቲ ዝስዕብ ግብራዊ ስጉምቲ ንምርካብ ነቲ ናይ ከባቢ ዝርዝር ተጠቐሙ።",
          icon: "file",
          link: { text: "ናይ ከባቢ ኣገልግሎታት ድለዩ", url: "/local-services" },
        },
        {
          title: "ካበይ ከም ዝጅምር ርግጸኛ ኣይኮንኩን",
          content:
            "ኩነታትኩም ክሳብ ክንደይ ህጹጽ ምዃኑ ርግጸኛታት እንተዘይኮንኩም፣ ንምኽሪ ነርስ ናብ Health811 ደውሉ።",
          icon: "clock",
          link: { text: "Health811ን መምርሒ ህጹጽ ኩነታትን", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "ኣብ ቀዳመይቲ ሰሙንኩም ጽቡቓት ቀዳሞት ስጉምትታት",
      type: "steps",
      items: [
        "ሽፋንኩም ፍለጡ: OHIP፣ IFHP፣ ውልቃዊ መድሕንን መደባት ተመሃሮን መብዛሕትኡ ግዜ እንታይ ከም ዝሽፍኑ ኣንብቡ። ንOHIP ብቑዓት ክትኮኑ ትኽእሉ እንተኾንኩም፣ ብዝተኻእለ ፍጥነት ኣመልክቱ።",
        "ናይ ህጹጽ ኩነታት መደብኩም ምረጹ: መዓስ ናብ 911 ከም እትድውሉ፣ መዓስ ብ Health811 ከም እትጅምሩን ኣብ ኪንግስተን ቅልጡፍ ወይ ናይታ መዓልቲ ክንክን ኣበይ ከም እትረኽቡን ፍለጡ።",
        "ንስሩዕ ክንክን መደብ ግበሩ: ስሩዕ ወሃቢ ክንክን እንተዘይብልኩም፣ ኣማራጺታትኩም ንሓካይም ስድራቤት፣ ነርስ ፕራክቲሽነራት፣ ማእከላት ጥዕና ማሕበረሰብ፣ ክሊኒካት ተመሃሮ፣ ክሊኒካት ብዘይ ቆጸራን ክንክን ብኦንላይንን ፍለጡ።",
        "ሓበሬታ ጥዕናኹም ብሓደ ሓዙ: ካርድ ጥዕናኹም ወይ ወረቓቕቲ IFHP፣ ዝርዝር መድሃኒት፣ መዝገብ ክታበትን ቅዳሓት ናይ ዝኾነ requisition ወይ ሪፈራልን ዓቅቡ።",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "ገና OHIP እንተዘይብልኩም",
      type: "callout",
      content:
        "መንገዲ ሽፋንኩም ንምፍላጥ ክሳብ እትሓሙ ኣይትጸበዩ። ንOHIP ብቑዓት እንተኾንኩም፣ ኣቐዲምኩም ኣመልክቱ። ብ IFHP ወይ ብናይ ቤት ትምህርቲ ወይ ውልቃዊ መደብ ሽፋን እንተሃልዩኩም፣ ነቲ ሓበሬታ ምሳኹም ሓዝዎ። መድሕን እንተዘይብልኩም፣ ቅድሚ ብጽሖት ብዛዕባ ክፍሊት ሕተቱ፣ ኣብ ዝምችወሉ ድማ ማሕበረሰባዊ ወይ ቀሊል ቅድመ-ኩነት ዘለዎም ኣገልግሎታት ድለዩ።",
      link: { text: "ብዛዕባ ሽፋን ኣንብቡ", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "እዞም ነገራት ድሉዋት ሓዙ",
      type: "checklist",
      items: [
        "ካርድ ጥዕናኹም፣ ወረቓቕቲ IFHP ወይ ሓበሬታ መድሕንኩም",
        "ውሑዳት መድሃኒታት ጥራይ እትወስዱ እንተኾንኩም እውን፣ ዝርዝር መድሃኒት",
        "ስምን ቁጽሪ ተሌፎንን ናይታ ናይ መወዳእታ ክሊኒክኩም ወይ ወሃቢ ክንክንኩም፣ እንተሃልዩኩም",
        "ዝኾነ ናይ ቀረባ ግዜ requisition፣ ሪፈራል፣ ወረቓቕቲ ምውጻእ ሆስፒታል ወይ መምርሒ መርመራ",
        "ብቐሊል ቋንቋ ክትሓትዎም እትደልዩ ሕቶታት",
        "ምሕታት ምእንቲ ከይትርስዑ፣ ድሌት ተርጓሚ ጽሒፍኩም ሓዙ",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "ሕጂ ሓገዝ የድልየኩም ድዩ?",
  description:
    "ሎሚ ወይ ሎሚ ምሸት ጸገም ጥዕና ሃልዩኩም ካበይ ከም እትጅምሩ ርግጸኛታት እንተዘይኮንኩም ነዚ ገጽ ተጠቐሙ።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "ኦንታርዮ: ካብ Health811 ሕክምናዊ ምኽሪ ርኸቡ",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "ወግዓዊ 24/7 ኣገልግሎት ምኽሪ ነርስ።",
    },
    {
      title: "9-8-8: መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት",
      url: "https://988.ca/",
      note: "ወግዓዊ ሃገራዊ መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት። ናብ 9-8-8 ደውሉ ወይ መልእኽቲ ስደዱ፣ ብናጻ፣ 24/7።",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "ወግዓዊ መርበብ ሆስፒታል ንሓበሬታ ህጹጽ ረድኤት፣ ቅልጡፍ ክንክንን ስእላዊ መርመራን።",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "ወግዓዊ ናይ ከባቢ ትካል ጥዕና ኣእምሮን ደገፍ ቅልውላውን።",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "ህጹጽ ረድኤት ድዩ ወይስ ቅልጡፍ ክንክን?",
      type: "comparison",
      comparison: {
        left: {
          title: "ንኸምዚኦም ዝኣመሰሉ ጸገማት ብኡንብኡ ናብ ህጹጽ ረድኤት ኪዱ፦",
          items: [
            "ቃንዛ ኣፍ ልቢ፣ ከቢድ ጸገም ምስትንፋስ ወይ ምልክታት ወቕዒ ሓንጎል (stroke)",
            "ከቢድ ምፍሳስ ደም፣ ዓቢ መጉዳእቲ ወይ ምጥፋእ ንቕሓት",
            "ሃንደበታዊ ምድንጋር፣ ምንፍርፋር ወይ ከቢድ ኣለርጂካዊ ግብረመልሲ",
            "ምጽባይ ንህይወት ወይ ንኣካል ኣብ ሓደጋ ዘእቱ ናይ ድሕነት ህጹጽ ኩነታት",
          ],
        },
        right: {
          title: "ንኸምዚኦም ዝኣመሰሉ ጸገማት ብቕልጡፍ ክንክን፣ ብ Health811 ወይ ብናይታ መዓልቲ ክሊኒክ ጀምሩ፦",
          items: [
            "ምጥዋይ መላግቦ፣ ንኣሽቱ ቁስልታት፣ ሕማም ቆርበት፣ ቃንዛ እዝኒ ወይ ረስኒ ብዘይ ምልክታት ህጹጽ ሓደጋ",
            "ንስሩዕ ቆጸራ ክጽበዩ ዘይክእሉ ጸገማት መመላእታ መድሃኒት",
            "ሎሚ ምሸት ቅልጡፍ ክንክን የድልየኒ ድዩ ዝብል ሕቶታት",
            "ህጹጽ ኮይኑ ዝስመዓኩም ግን ብንጹር ህይወት ኣብ ሓደጋ ዘየእቱ ጸገም",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "ልሙዳት ኩነታት ድሕሪ ሰዓታት ስራሕ",
      type: "table",
      columns: ["ኩነታት", "ጽቡቕ ቀዳማይ ስጉምቲ", "ዝዝከር ነገር"],
      rows: [
        {
          cells: [
            "እዚ ክሳብ ክንደይ ህጹጽ ምዃኑ ርግጸኛ ኣይኮንኩን",
            "ናብ Health811 ደውሉ",
            "ሓንቲ ነርስ ኣብ ገዛ ክትጸንሑ፣ ቅልጡፍ ክንክን ክትደልዩ ወይ ናብ ህጹጽ ረድኤት ክትኸዱ ንምውሳን ክትሕግዘኩም ትኽእል እያ።",
          ],
        },
        {
          cells: [
            "ሓኪመይ ዕጹው እዩ፣ ሎሚ ምሸት ምኽሪ የድልየኒ",
            "Health811 ወይ መምርሒ ቅልጡፍ ክንክን",
            "ምልክታት ህጹጽ ሓደጋ እንተዘየለ፣ ህጹጽ ረድኤት እንኮ ኣማራጺኹም እዩ ኢልኩም ኣይትገምቱ።",
          ],
        },
        {
          cells: [
            "ንውላደይ ክንክን የድልየኒ",
            "ነቶም ሓደ ዓይነት ምልክታት ህጹጽ ሓደጋ ተጠቐሙ፣ ድሕሪኡ ናይታ መዓልቲ ክንክን ድለዩ ወይ ርግጸኛታት እንተዘይኮንኩም ናብ Health811 ደውሉ",
            "ምስ ዝከኣል፣ ካርድ ጥዕና ናይቲ ቆልዓ፣ ዝርዝር መድሃኒትን ግዜ ምጅማር ምልክታት ሕማምን ኣምጽኡ።",
          ],
        },
        {
          cells: [
            "ሎሚ ምሸት ሓገዝ ጥዕና ኣእምሮ የድልየኒ",
            "ናብ 9-8-8 (መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት) ደውሉ ወይ መልእኽቲ ስደዱ፣ ወይ ናብቲ 24/7 መስመር ቅልውላው AMHS-KFLA ደውሉ",
            "ቅጽበታዊ ሓደጋ ኣብ ልዕሊ ድሕነት እንተሃልዩ፣ ናብ 911 ደውሉ።",
          ],
        },
      ],
      caption:
        "እዚ ሰሌዳ ሓፈሻዊ መምርሒ ጥራይ እዩ። ሓደ ሰብ ኣብ ቅጽበታዊ ሓደጋ ክህሉ ይኽእል እዩ እንተኾይኑ፣ ናብ 911 ደውሉ።",
    },
    {
      id: "kingston-start-points",
      title: "መበገሲ ቦታታት ኪንግስተን",
      type: "grid",
      gridItems: [
        {
          title: "ክፍሊ ህጹጽ ረድኤት",
          content:
            "ንህይወት ኣብ ሓደጋ ዘእትዉ ወይ ከእትዉ ዝኽእሉ ጸገማት ህጹጽ ረድኤት ተጠቐሙ።",
          icon: "alert",
          link: {
            text: "ዝርዝራት ህጹጽን ቅልጡፍን",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "ማእከል ቅልጡፍ ክንክን",
          content:
            "ክጽበዩ ንዘይክእሉ ግን ንጹራት ህጹጻት ኩነታት ንዘይኮኑ ብዙሓት ናይታ መዓልቲ ጸገማት ጠቓሚ እዩ።",
          icon: "clock",
          link: {
            text: "ቅልጡፍን ናይታ መዓልትን ክንክን",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "ናበይ ከም እትኸዱ ርግጸኛታት እንተዘይኮንኩም፣ ምኽሪ ነርስ ብተሌፎን ወይ ብኦንላይን። ደገፍ ተሌፎን ብብዙሕ ቋንቋታት ይርከብ እዩ።",
          icon: "info",
          link: { text: "ዝርዝር Health811", url: "/local-services/health811" },
        },
        {
          title: "ደገፍ ቅልውላው ጥዕና ኣእምሮ",
          content:
            "ኣብ ዝኾነ እዋን ናብ 9-8-8 (መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት) ደውሉ ወይ መልእኽቲ ስደዱ፣ ወይ ከም እቲ 24/7 መስመር ቅልውላው AMHS-KFLA ዝኣመሰለ ናይ ከባቢ ደገፍ ቅልውላው ተጠቐሙ።",
          icon: "heart",
          link: { text: "ዝርዝራት ጥዕና ኣእምሮ", url: "/local-services?category=mental-health" },
        },
        {
          title: "ደገፍ ጾታዊ ዓመጽ",
          content:
            "ቅጽበታዊ ስምዒታዊ ደገፍ፣ ጥብቅና ወይ ውጥን ድሕነት ምስ ዘድልየኩም ፍሉይ ደገፍ ቅልውላው ተጠቐሙ።",
          icon: "shield",
          link: {
            text: "ዝርዝራት ደገፍ",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "ህጹጻት ኣማራጺታት ተመሃሮ",
          content:
            "ተመሃራይ እንተኾንኩም፣ ንዘይህጹጻት ድሌታት እቲ ናይ ካምፓስ ኣገልግሎት ጥዕናኹም ዝበለጸ ቀዳማይ መዕረፊ እንተኾይኑ ርኣዩ።",
          icon: "stethoscope",
          link: { text: "ዝርዝራት ጥዕና ተመሃሮ", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "ገና ርግጸኛታት እንተዘይኮንኩም",
      type: "callout",
      content:
        "እቲ ጸገም ብንጹር ህይወት ኣብ ሓደጋ ዘየእቱ ኮይኑ ግን ምጽባይ ዘሻቕለኩም እንተኾይኑ፣ ብ Health811 ጀምሩ። ሓደ ሰብ ድሕነቱ ኣብ ሓደጋ ክኸውን ይኽእል እዩ፣ ብቕልጡፍ ይገድድ ኣሎ፣ ወይ ቅኑዕ ሓገዝ ኣብ ግዜኡ ክትረኽቡ ኣይትኽእሉን እንተኾንኩም፣ ኣገልግሎታት ህጹጽ ረድኤት ተጠቐሙ።",
      link: { text: "ናብ Health811 ደውሉ", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "ምስ ዝከኣል እዞም ነገራት ኣምጽኡ",
      type: "checklist",
      items: [
        "ካርድ ጥዕና፣ ወረቓቕቲ IFHP ወይ ዘለኩም ዝኾነ ካርድ መድሕን",
        "ዝርዝር መድሃኒት ወይ ስእልታት ጥርሙዛት መድሃኒት",
        "ምልክታት ሕማም ዝጀመሩሉ ግዜን ዘጋደዶም ነገርን",
        "ጸኒሕኩም ብጭንቀት ምሕታት ከይትርስዑ፣ ድሌት ተርጓሚ ጽሒፍኩም ሓዙ",
        "ቻርጀር ተሌፎንን ዝሕግዘኩም እንተኾይኑ ደጋፊ ሰብን",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "ቀንዲ ክንክን ምርካብ",
  description:
    "ስሩዕ ወሃቢ ክንክን እንተዘይብልኩም፣ ኣብ ኪንግስተን ናብ ስሩዕ ክንክን ጥዕና ዘብጽሑ ዝተፈላለዩ መንገድታት ፍለጡ።",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "ኦንታርዮ: ሓኪም ስድራቤት ወይ ነርስ ፕራክቲሽነር ርኸቡ",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "ወግዓዊ መምርሒ Health Care Connect።",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "ወግዓዊ ሓበሬታ ብዛዕባ ኣገልግሎታት ናይ ከባቢ ማእከል ጥዕና ማሕበረሰብ።",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "ወግዓዊ ሓበሬታ ጥዕና ተመሃሮ ንተመሃሮ Queen's።",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "ወግዓዊ ሓበሬታ ጥዕና ተመሃሮ ንተመሃሮ St. Lawrence College።",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "ቀንዲ ክንክን እንታይ ማለት እዩ",
      type: "default",
      content:
        "ቀንዲ ክንክን እቲ ንስሩዕ ድሌታት ጥዕና መብዛሕትኡ ግዜ መጀመርታ እትኸድሉ ቦታ እዩ። እዚ ምርመራ ጥዕና፣ ምሕዳስ መድሃኒት፣ ክንክን ቀጻሊ ሕማማት፣ ሪፈራላት፣ ናይ ምክልኻል ክንክንን ድሕሪ ህጹጻት ጸገማት ዝግበር ክትትልን የጠቓልል።\n\nኣብ ኪንግስተን፣ ስሩዕ መንገዲ ቀንዲ ክንክንኩም ሓኪም ስድራቤት፣ ነርስ ፕራክቲሽነር፣ ማእከል ጥዕና ማሕበረሰብ፣ ክሊኒክ ካምፓስ፣ ወይ ዝያዳ ርጉእ ክንክን ክሳብ እትረኽቡ ሕውስዋስ ግዝያውያን ኣማራጺታት ክሓቁፍ ይኽእል እዩ።",
    },
    {
      id: "access-matrix",
      title: "መንገድታት ምእታው ቀንዲ ክንክን",
      type: "table",
      columns: ["መንገዲ", "ዝበለጸ ንምንታይ", "መን ክጥቀመሉ ይኽእል", "ከመይ ትጅምሩ"],
      rows: [
        {
          cells: [
            "ሓኪም ስድራቤት ወይ ነርስ ፕራክቲሽነር",
            "ቀጻሊ ስሩዕ ክንክንን ናይ ነዊሕ ግዜ ውጥን ጥዕናን",
            "ኣብ ዝርዝር ተሓከምቲ ሓደ ወሃቢ ክንክን ክምዝገቡ ዝኽእሉ ተሓከምቲ",
            "Health Care Connect ተጠቐሙ፣ ናይ ከባቢ ክፉታት ቦታታት ድማ ተኸታተሉ",
          ],
        },
        {
          cells: [
            "ማእከል ጥዕና ማሕበረሰብ",
            "ኣብ ማሕበረሰብ ዝምስረት ክንክን፣ ቀሊል ቅድመ-ኩነት ዘለዎ ደገፍን ገለ ክንክን ንሓደስቲ መጻእቲ ወይ ንዝተሓላለኹ ድሌታትን",
            "ብቕዓት ብመደብን ኩነታት ምዝገባን ይፈላለ",
            "ነቲ ትካል ብቐጥታ ተወከሱ፣ ብዛዕባ ምዝገባ ድማ ሕተቱ",
          ],
        },
        {
          cells: [
            "ኣገልግሎት ጥዕና ተመሃሮ",
            "ንዝተመዝገቡ ተመሃሮ ዝቐልጠፈ ምእታው",
            "ብመንገዲ ቤት ትምህርቶም ብቑዓት ዝኾኑ ተመሃሮ ጥራይ",
            "ናይ ካምፓስኩም ኣገልግሎት ጥዕና ወይ ድሕነት ተጠቐሙ",
          ],
        },
        {
          cells: [
            "ክሊኒክ ብዘይ ቆጸራ ወይ ቅልጡፍ ናይታ መዓልቲ ክንክን",
            "ክትጽበዩ ከለኹም ወይ ስሩዕ ወሃቢ ክንክንኩም ኣብ ዘይርከበሉ ግዜ ናይ ሓጺር ግዜ ክንክን",
            "ኩሉ ህዝቢ፣ ብናይ መዓልቲ ሕግታት ምዝገባ ተደሪቱ",
            "ቅድሚ ምኻድኩም ህሉው ኩነታት ምእታው ኣረጋግጹ",
          ],
        },
        {
          cells: [
            "ቀንዲ ክንክን ብኦንላይን",
            "ገለ መመላእታ መድሃኒት፣ ምኽርን ስሩዓት ጉዳያትን",
            "ብወሃቢ ኣገልግሎትን ሽፋንን ይፈላለ",
            "እቲ ወሃቢ ኣገልግሎት ብኦንላይን እንታይ ብውሕስነት ክኣሊ ከም ዝኽእልን ዘይክእልን ኣረጋግጹ",
          ],
        },
      ],
      caption:
        "እቲ ዝበለጸ መንገዲ ኣብ ብቕዓትኩም፣ ህጹጽነትኩምን ናይ ሓጺር ግዜ ወይ ቀጻሊ ክንክን ምድላይኩምን ይምርኮስ።",
    },
    {
      id: "if-you-have-no-provider",
      title: "ስሩዕ ወሃቢ ክንክን እንተዘይብልኩም",
      type: "steps",
      items: [
        "በቲ ወግዓዊ ናይ ኣውራጃ መንገዲ ተመዝገቡ: ሓኪም ስድራቤት ወይ ነርስ ፕራክቲሽነር እንተዘይብልኩም Health Care Connect ተጠቐሙ።",
        "ንናይ ካምፓስ ወይ ናይ ማሕበረሰብ ጥዕና ኣማራጺታት ብቑዓት እንተኾንኩም ርኣዩ: ተመሃሮ ብክሊኒክ ቤት ትምህርቶም ክጅምሩ ኣለዎም። ገለ ኣገልግሎታት ጥዕና ማሕበረሰብ ፍሉያት ቀዳምነታት ምዝገባ ኣለዎም።",
        "ውሑስ ግዝያዊ መደብ ኣዳልዉ: ክትጽበዩ ከለኹም ኣየኖት ኣገልግሎታት ብዘይ ቆጸራ፣ ህጹጽ፣ ኦንላይን፣ ፋርማስን ጥዕና ኣእምሮን ክትጥቀሙ ከም እትኽእሉ ፍለጡ።",
        "ናይ ገዛእ ርእስኹም መዛግብቲ ሓዙ: ዝርዝራት መድሃኒት፣ ውጽኢታት መርመራ፣ ሪፈራላትን ኣስማት ዝረኣዩኹም ሰብ ሞያ ሕክምናን ዓቅቡ።",
      ],
    },
    {
      id: "while-you-wait",
      title: "ክትጽበዩ ከለኹም እንታይ ትገብሩ",
      type: "checklist",
      items: [
        "ኣብ ዝምችወሉ ንናይ ሓጺር ግዜ ድሌታት ክንክን ብዘይ ቆጸራ፣ ቅልጡፍ ወይ ብኦንላይን ተጠቐሙ",
        "ነታ ፋርማሲ እንታይ ሓገዝ መመላእታ መድሃኒት ወይ ክንክን ቀለልቲ ሕማማት ከም ዝርከብ ሕተቱ",
        "ሓደ ዝተሓደሰ ዝርዝር መድሃኒት ሓዙ፣ ናብ ነፍሲ ወከፍ ብጽሖት ድማ ተማልእዎ",
        "ክንክን ዝተበታተነ ምስ ዝኸውን፣ ቅዳሓት ኣገደስቲ ውጽኢታት ወይ ወረቓቕቲ ምውጻእ ሆስፒታል ኣምጽኡ",
        "ክንክንኩም ቁሩብ ዝያዳ ቀጻሊ ምእንቲ ክኸውን፣ ምስ ዝከኣል ንክትትል ሓንቲ ክሊኒክ ተጠቐሙ",
      ],
    },
    {
      id: "next-best-option",
      title: "ድሌትኩም ህጹጽ ኮይኑ ግን ህጹጽ ረድኤት ዘየድልዮ እንተኾይኑ",
      type: "callout",
      content:
        "ሓኪም ስድራቤት ዘይምህላው ኣገዳሲ ክንክን ከተደናጉዩ ኣለኩም ማለት ኣይኮነን። ነቲ ኣብ ቅድሜኹም ዘሎ ጸገም ቅኑዕ ናይ ሓጺር ግዜ ኣማራጺ ተጠቐሙ፣ ድሕሪ ምሕካም እቲ ህጹጽ ጸገም ድማ ንቐጻልነት ክንክን መደብ ግበሩ።",
      link: { text: "ኣማራጺታት ቀንዲ ክንክን ድለዩ", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "ወጻኢታትን ሽፋንን",
  description:
    "ብቐሊል ቋንቋ ዝተጻሕፈ መምርሒ ሽፋን ንOHIP፣ IFHP፣ Canadian Dental Care Plan፣ ናይ ተመሃሮ ወይ ውልቃዊ መደባትን ልሙዳት ካብ ጁባ ዝኽፈሉ ወጻኢታትን።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "ኦንታርዮ: ንOHIP ኣመልክቱን ካርድ ጥዕና ውሰዱን",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "ወግዓዊ መምርሒ OHIP።",
    },
    {
      title: "ካናዳ: Interim Federal Health Program (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "ወግዓዊ ሓበሬታ ሽፋን IFHP።",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "ወግዓዊ ናይ ኣውራጃ መምርሒ ሽፋን መድሃኒት።",
    },
    {
      title: "ኦንታርዮ: ንልዑል ወጻኢታት መድሃኒት ሓገዝ ርኸቡ",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "ወግዓዊ መምርሒ Trillium Drug Program።",
    },
    {
      title: "ካናዳ: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "ወግዓዊ ሓበሬታ ፌደራላዊ መደብ ሽፋን ክንክን ስኒን ብቕዓትን።",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "መሰረታት ሽፋን",
      type: "default",
      content:
        "ሽፋን ኣብ ኦንታርዮ ኣብ ሕጋዊ ኩነታትኩም፣ ዕድመኹም፣ ኣታዊኹም፣ ብቕዓት መደብን ናይ ቤት ትምህርቲ ወይ ውልቃዊ መድሕን ምህላውኩምን ይምርኮስ።\n\nንብቑዓት ተሓከምቲ OHIP ብዙሓት ብሕክምና ኣገደስቲ ኣገልግሎታት ሓኪምን ሆስፒታልን ይሽፈኑ እዮም። እዚ ግን ኩሉ ነገር ብናጻ እዩ ማለት **ኣይኮነን**። መድሃኒታት፣ ክንክን ስኒ፣ ክንክን ዓይኒ፣ ቅጥዕታት፣ ወረቐት ሕማምን ብዙሓት ሓገዝቲ ኣገልግሎታት ጥዕናን መብዛሕትኡ ግዜ ፍሉይ ሽፋን ወይ ካብ ጁባ ክፍሊት የድልዮም።\n\nሓደስቲ እንተኾንኩም ጽቡቕ ዜና ኣሎ፦ **ንOHIP ናይ ምጽባይ ግዜ የለን**። ብቑዓት እንተኾንኩም፣ ናብ ኦንታርዮ ምስ መጻእኩም ብኡንብኡ ከተመልክቱ ትኽእሉ ኢኹም፣ ሽፋን ድማ መመልከቲኹም ምስ ጸደቐ ይጅምር። ከተመልክቱ ክሳብ እትሓሙ ኣይትጸበዩ።",
    },
    {
      id: "coverage-matrix",
      title: "መንገድታት ሽፋን ብሓጺሩ",
      type: "table",
      columns: [
        "ዓይነት ሽፋን",
        "መብዛሕትኡ ግዜ ዝሕግዘሉ",
        "ዘይሽፈን ክኸውን ዝኽእል",
        "ቀጺሉ እንታይ ትገብሩ",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "ብዙሓት ብሕክምና ኣገደስቲ ኣገልግሎታት ሓኪምን ሆስፒታልን",
            "ብዙሓት መድሃኒታት፣ ክንክን ስኒ፣ ክንክን ዓይንን ቅጥዕታትን",
            "ብቑዓት እንተኾንኩም ኣመልክቱ፣ ካርድኹም ድማ ህሉው ሓዝዎ",
          ],
        },
        {
          cells: [
            "IFHP",
            "ብመሰረት እቲ ፌደራላዊ መደብ፣ ሽፋን ንብቑዓት ስደተኛታትን ሓተትቲ ዑቕባን",
            "ዝርዝራት ብምድብን ኣገልግሎትን ይፈላለዩ",
            "ነቲ ወግዓዊ መምርሒ IFHP ርኣዩ፣ ነታ ክሊኒክ ወይ ፋርማሲ ድማ ይቕበልዎ እንተኾይኖም ሕተቱ",
          ],
        },
        {
          cells: [
            "ናይ ቤት ትምህርቲ ወይ ውልቃዊ መድሕን",
            "መብዛሕትኡ ግዜ ንመድሃኒታት፣ ምኽሪ (counselling)፣ ስኒ፣ ዓይንን ሓጋዚ ክንክን ጥዕናን ይሕግዝ",
            "ደረታት ሽፋን፣ ናይ ብጽሒት ክፍሊትን ሕግታት መርበብን ይፈላለዩ",
            "ሓደ ኣገልግሎት ይሽፈን እዩ ኢልኩም ቅድሚ ምግማትኩም ነቲ ጽሑፍ መደብ ኣንብቡ",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "ሽፋን ክንክን ስኒ ንብቑዓት ነበርቲ፣ ውልቃዊ መድሕን ስኒ ዘይብሎምን ዝተመዓራረየ ኣታዊ ስድራቤቶም ካብ $90,000 ንታሕቲ ዝኾነን",
            "ኩሉ ኣገባብ ሕክምና ኣይሽፈንን እዩ፣ ከም ኣታዊ ድማ ናይ ብጽሒት ክፍሊት ክህሉ ይኽእል እዩ",
            "ብቕዓትኩም ርኣዩ፣ በቲ ወግዓዊ ገጽ CDCP ናይ መንግስቲ ካናዳ ድማ ኣመልክቱ",
          ],
        },
        {
          cells: [
            "ንጡፍ ሽፋን ዘይምህላው",
            "ገና ገለ ኣገልግሎታት ክትረኽቡ ትኽእሉ ኢኹም፣ ክፍሊት ግን ክህሉ ይኽእል እዩ",
            "ወጻኢታት ንብጽሖታት፣ መርመራታት ወይ መድሃኒታት ዓበይቲ ክኾኑ ይኽእሉ እዮም",
            "ቅድሚ ብጽሖት ብዛዕባ ክፍሊት ሕተቱ፣ ኣብ ዝምችወሉ ድማ ማሕበረሰባውያን ኣማራጺታት ድለዩ",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "መብዛሕትኡ ግዜ ምሉእ ብምሉእ ዘይሽፈን",
      type: "checklist",
      items: [
        "ንህዝባዊ መደብ ብቑዓት እንተዘይኮንኩም ወይ ካልእ መደብ እንተዘይብልኩም፣ ብዙሓት መድሃኒታት",
        "ክንክን ስኒ፣ ንCanadian Dental Care Plan፣ Healthy Smiles Ontario፣ ማሕበረሰባዊ መደብ ስኒ ወይ መደብ ጥቕሚ ብቑዓት እንተዘይኮንኩም",
        "ክንክን ዓይኒ ካብ ፍሉያት መንገድታት ብቕዓት ወጻኢ",
        "ፊዚዮተራፒ፣ ምኽሪ (counselling)፣ ማሳጅን ካልኦት ሓገዝቲ ኣገልግሎታት ጥዕናን፣ ሓደ መደብ እንተዘይሸፊንዎም",
        "ቅጥዕታት፣ ደብዳቤታት፣ ክፍሊት ዝተሳእነ ቆጸራን ብዙሓት ካልኦት ምምሕዳራዊ ክፍሊታትን",
      ],
    },
    {
      id: "drug-coverage",
      title: "መንገድታት ሽፋን መድሃኒት",
      type: "default",
      content:
        "ሽፋን መድሃኒት መብዛሕትኡ ግዜ ሓደስቲ መጻእቲ ዝግረሙሉ ቦታ እዩ። ብጽሖት ሓኪም ክሽፈን ይኽእል እዩ፣ እቲ መድሃኒት ግን ገና ገንዘብ ከኽፍል ይኽእል እዩ።\n\nህዝባውያን መደባት መድሃኒት ከም ዕድመ፣ ኣታውን ብቕዓትን ክሕግዙ ይኽእሉ እዮም። **Ontario Drug Benefit** ንሰብ 65 ዓመትን ካብኡ ንላዕልን ከምኡ'ውን ኣብ ገለ መደባት ንዘለዉ ሰባት ብዙሓት መድሃኒታት ይሽፍን፣ **OHIP+** ድማ ውልቃዊ መደብ ንዘይብሎም ሰብ 24 ዓመትን ካብኡ ንታሕትን ብዙሓት መድሃኒታት ይሽፍን። ኦንታርዮ ምስ ኣታዊ ስድራቤት ክወዳደር ከሎ ልዑል ወጻኢ መድሃኒት ንዘለዎም ገለ ሰባት **Trillium Drug Program** እውን ኣለዋ። ናይ ቤት ትምህርቲ ወይ ውልቃዊ መደብ እንተሃልዩኩም፣ ምስ ህዝባዊ ሽፋን ይተሓባበር ድዩ ወይስ ይትክኦ ኣረጋግጹ።",
    },
    {
      id: "coverage-scenarios",
      title: "ልሙዳት ሕቶታት ሽፋን",
      type: "faq",
      faqs: [
        {
          question: "ገና OHIP የብለይን። ክንክን ክረክብ ይኽእል ድየ?",
          answer:
            "እወ፣ ግን ክፍሊት ክህሉ ይኽእል እዩ፣ እቲ ዝበለጸ መንገዲ ድማ ኣብ ኩነታትኩምን ህጹጽነትኩምን ይምርኮስ። ምስ ዝከኣል ቅድሚ ዘይህጹጽ ክንክን ብዛዕባ ወጻኢታት ሕተቱ፣ ንዓኹም ዝምልከት እንተኾይኑ ድማ ብቕዓት IFHP ወይ ናይ ቤት ትምህርቲ ወይ ውልቃዊ መደብ ርኣዩ።",
        },
        {
          question: "ወጻእተኛ ተመሃራይ እየ። OHIP እንኮ ኣማራጺየይ ድዩ?",
          answer:
            "ኩሉ ግዜ ኣይኮነን። ብዙሓት ተመሃሮ ኣብ ክንዲ OHIP ኣብ ናይ ቤት ትምህርቲ ወይ ውልቃዊ መደብ መድሕን ይምርኮሱ። እንታይ ከም ዝሽፈን ንምርግጋጽ ወግዓውያን ሰነዳት መደብ ቤት ትምህርትኹምን ኣገልግሎታት ጥዕና ተመሃሮን ተጠቐሙ።",
        },
        {
          question: "ቆጸራይ ተሸፊኑ እንተኾይኑ መድሃኒተይ ብናጻ ድዩ ዝኸውን?",
          answer:
            "ብግድን ኣይኮነን። ሽፋን ቆጸራን ሽፋን መድሃኒትን መብዛሕትኡ ግዜ ፍሉያት እዮም።",
        },
        {
          question: "ክንክን ስኒ ይሽፈን ድዩ?",
          answer:
            "ንመብዛሕትኦም ዓበይቲ ክንክን ስኒ ካብ OHIP ፍሉይ እዩ። እቲ ፌደራላዊ Canadian Dental Care Plan ሕጂ ንብዙሓት ነበርቲ፣ ውልቃዊ መድሕን ስኒ ዘይብሎምን ዝተመዓራረየ ኣታዊ ስድራቤቶም ካብ $90,000 ንታሕቲ ዝኾነን ይሽፍን — ንምብቃዕ መብዛሕትኡ ግዜ ናይ ካናዳ ግብሪ ኣታዊ ኣቕሪብኩም ክትኮኑ የድሊ። ቆልዑ ናይ ትሑት ኣታዊ ስድራቤታት ንHealthy Smiles Ontario ብቑዓት ክኾኑ ይኽእሉ እዮም፣ ኪንግስተን ድማ ኣብ ፍሉያት መደባት ንዘለዉ ሰባት ማሕበረሰባዊ ክሊኒክ ስኒ ኣለዋ።",
        },
        {
          question: "ሓደ ኣገልግሎት ህዝባዊ፣ ማሕበረሰባዊ ወይ ውልቃዊ ምዃኑ ከመይ ጌረ እፈልጥ?",
          answer:
            "ነቶም መጻረዪታት ዝርዝር ተጠቐሙ፣ ነቲ ዝርዝር ሓበሬታ ድማ ርኣዩ። ርግጸኛታት እንተዘይኮንኩም፣ ቅድሚ ቆጸራ ምሓዝኩም ነቲ ኣገልግሎት ተወከሱ።",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "ብጽሖት ሕክምናኹም",
  description:
    "ኣብ እዋን ብጽሖት ሕክምና እንታይ ከም እትማልኡ፣ ከመይ ጌርኩም ሕቶ ከም እትሓቱን ብውሕስነት ከም እትረዳድኡን።",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "ኦንታርዮ: ክንክን ጥዕና ኣብ ኦንታርዮ",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "ሓፈሻዊ መምርሒ ስርዓት።",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "እንታይ ትማልኡ",
      type: "checklist",
      items: [
        "ካርድ ጥዕናኹም፣ ወረቓቕቲ IFHP ወይ ካልእ ሓበሬታ መድሕን",
        "ቪታሚናትን ብዘይ ትእዛዝ ሓኪም ዝሽየጡ መድሃኒታትን ሓዊሱ፣ ምሉእ ዝርዝር መድሃኒት",
        "ኣስማት ምልክታት ሕማም፣ መዓስ ከም ዝጀመሩን እንታይ ከም ዝተቐየረን",
        "ቅድሚ ምውጻእኩም መልሲ ክትረኽቡሎም እትደልዩ ሕቶታት",
        "ዝኾነ ናይ ቀረባ ግዜ requisition፣ ሪፈራል፣ ወረቓቕቲ ምውጻእ ሆስፒታል ወይ ውጽኢት መርመራ",
        "ምሕታት ምእንቲ ከይትርስዑ፣ ድሌት ተርጓሚ ጽሒፍኩም ሓዙ",
      ],
    },
    {
      id: "during-the-visit",
      title: "ኣብ እዋን ብጽሖት",
      type: "steps",
      items: [
        "ብቐንዲ ጸገምኩም ጀምሩ: ብዙሓት ቆጸራታት ሓጸርቲ እዮም፣ ስለዚ በቲ ሎሚ ዝያዳ ዘገድስ ጉዳይ ጀምሩ።",
        "ቀሊል ቋንቋ ተጠቐሙ: 'ነዛ ቃል ኣይተረዳእክዋን' ወይ 'ብዝቐለለ መንገዲ ክትገልጹለይ ትኽእሉ ዶ?' ምባል ጸገም የብሉን።",
        "ነቲ መደብ መሊስኩም ድገምዎ: ቅድሚ ምውጻእኩም፣ መርመራ፣ ሪፈራል፣ መመላእታ መድሃኒት ወይ ቆጸራ ክትትል ዘድልየኩም እንተኾይኑ ምእንቲ ክትፈልጡ ነቶም ዝስዕቡ ስጉምትታት ብቓልኩም በልዎም።",
        "ኩነታት እንተገደደ እንታይ ከም ዝኸውን ሕተቱ: መዓስ መሊስኩም ከም እትድውሉ፣ መዓስ ቅልጡፍ ክንክን ከም እትጥቀሙን መዓስ ህጹጽ ረድኤት ከም እትጥቀሙን ክትፈልጡ ኣለኩም።",
      ],
    },
    {
      id: "interpreter-help",
      title: "ሓገዝ ተርጓምን ምርድዳእን",
      type: "default",
      content:
        "ሓገዝ ቋንቋ ምስ ዘድልየኩም፣ ኣቐዲምኩም ሕተቱ። ክሳብ መወዳእታ ቆጸራ ኣይትጸበዩ። ዝርዝር ቋንቋ ተጠቒምኩም ነዚ መርበብ ብብዙሕ ቋንቋታት ከተንብብዎ ትኽእሉ ኢኹም፣ ትርጉም መርበብ ግን ንውሳነታት ሕክምና፣ መምርሒ መድሃኒት ወይ ፍቓድ ሕክምና ኣብ ክንዲ ደገፍ ተርጓሚ ክትክእ የብሉን።\n\nከምዚ ክትብሉ ትኽእሉ ኢኹም፦ **'ተርጓሚ የድልየኒ እዩ፣ በጃኹም።'** Health811 (ናብ 811 ደውሉ) እውን ብብዙሕ ቋንቋታት ደገፍ ተሌፎን ይህብ እዩ። ደጋፊ ሰብ ምሳኹም እንተመጺኡ፣ ኣባል ስድራቤት ንዝተሓላለኸ ወይ ተኣፋፊ ሕክምናዊ ሓበሬታ ንምትርጓም ኩሉ ግዜ እቲ ዝበለጸ ወይ ዝውሓሰ ሰብ ከም ዘይከውን ዘክሩ።",
    },
    {
      id: "questions-to-ask",
      title: "ክሕተቱ ዝግብኦም ሕቶታት",
      type: "checklist",
      items: [
        "እንታይ ይኸውን ኣሎ ትብሉ?",
        "ቀጺለ እንታይ ክገብር ኣለኒ?",
        "መርመራ፣ requisition፣ ሪፈራል ወይ ብጽሖት ክትትል የድልየኒ ድዩ?",
        "ውጽኢት መዓስ ክሰምዕ እጽበ?",
        "ኣየኖት ምልክታት ሓደጋ መሊሰ ክድውል ወይ ህጹጽ ሓገዝ ክደሊ ከም ዘለኒ የመልክቱ?",
      ],
    },
    {
      id: "privacy",
      title: "ብሕትውናን ፍቓድን",
      type: "default",
      content:
        "ሓበሬታ ጥዕናኹም ተኣፋፊ እዩ። ሓበሬታኹም መን ከም ዝርእዮ ርግጸኛታት እንተዘይኮንኩም፣ ሕተቱ። ሓደ ቅጥዒ፣ ዘረባ ፍቓድ ወይ መደብ ሕክምና እንተዘይተረዲኡኩም፣ ነቲ መስርሕ ኣዝሕልዎ እሞ ዝነጸረ መግለጺ ሕተቱ።",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "ድሕሪ ብጽሖት",
  description:
    "ድሕሪ ብጽሖት እንታይ ከም ዝኸውን ፍለጡ፣ requisition፣ ውጽኢት መርመራ፣ ሪፈራላትን መዓስ መሊስኩም ከም እትድውሉን ሓዊሱ።",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "ሓበሬታ ናይ ከባቢ ስርዓት ሆስፒታል።",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "ሓበሬታ ኣሰራርሓ ማሕበረሰባዊ ላቦራቶሪን መእተዊ ተሓካሚን።",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "ድሕሪ ብጽሖት መብዛሕትኡ ግዜ ዝኸውን",
      type: "steps",
      items: [
        "ምስ መደብ ትወጹ: እዚ መድሃኒት፣ requisition፣ ሪፈራል፣ ቆጸራ ክትትል ወይ ምልክታት ሓደጋ ናይ ምክትታል መምርሒ ክሓቁፍ ይኽእል እዩ።",
        "ነቲ ዝስዕብ ስጉምቲ ባዕልኹም ክትገብርዎ ከድልየኩም ይኽእል እዩ: ንኣብነት፣ መርመራ ደም፣ ስእላዊ መርመራ፣ ምውሳድ መድሃኒት ካብ ፋርማሲ ወይ ብጽሖት ክትትል ቆጸራ ክትሕዙ ከድልየኩም ይኽእል እዩ።",
        "ውጽኢታት መብዛሕትኡ ግዜ ናብቲ ዝኣዘዞም ሰብ ሞያ ሕክምና ይምለሱ: እቲ ላቦራቶሪ ወይ ቦታ ስእላዊ መርመራ ነቲ ውጽኢት ኣብ ቦታኡ ምናልባት ኣይገልጸልኩምን ይኸውን።",
        "ንነፍሲ ወከፍ ንቡር ውጽኢት ጻውዒት ምናልባት ኣይትረኽቡን ትኾኑ: እንታይ ከም እትጽበዩ ምእንቲ ክትፈልጡ ኣሰራርሓ ክትትል ናይታ ክሊኒክ እንታይ ምዃኑ ሕተቱ።",
      ],
    },
    {
      id: "common-terms",
      title: "ልሙዳት ቃላት ድሕሪ ብጽሖት",
      type: "table",
      columns: ["ቃል", "ብቐሊል ቋንቋ እንታይ ማለት እዩ", "መብዛሕትኡ ግዜ ቀጺልኩም እትገብርዎ"],
      rows: [
        {
          cells: [
            "Requisition",
            "ንላቦራቶሪ ወይ ንክሊኒክ ስእላዊ መርመራ ኣየናይ መርመራ ከም ዘድልየኩም ዝነግር ቅጥዒ",
            "ቆጸራ ሓዙ ወይ ናብቲ መርመራ ኪዱ፣ ምስ ዝከኣል ድማ ቅዳሕ ሓዙ",
          ],
        },
        {
          cells: [
            "ሪፈራል (referral)",
            "ካብ ሓደ ሰብ ሞያ ሕክምና ናብ ካልእ ኣገልግሎት ወይ ስፐሻሊስት ዝቐርብ ሕቶ",
            "ክሳብ ዝረኽቡኹም ተጸበዩ፣ ክትትል ግበሩ ተባሂልኩም ዋላ ሓንቲ እንተዘይተገብረ ድማ መሊስኩም ደውሉ",
          ],
        },
        {
          cells: [
            "ክትትል (follow-up)",
            "ድሕሪ ሕክምና፣ መርመራ ወይ ለውጢ ምልክታት ሕማም ዝግበር ምርኣይ",
            "ቅድሚ ምውጻእኩም እቲ ክትትል መዓስን ከመይን ከም ዝግበር ሕተቱ",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "መዓስ መሊስኩም ትድውሉ",
      type: "checklist",
      items: [
        "ነቲ requisition፣ ሪፈራል ወይ መምርሒ መድሃኒት እንተዘይተረዲኡኩም",
        "ሰብ ክረኽበኩም እዩ ተባሂልኩም ኣብቲ ትጽቢት ዝተገብረሉ ግዜ ዋላ ሓንቲ እንተዘይሰሚዕኩም",
        "ምልክታት ሕማምኩም ይገድዱ እንተሃልዮም ወይ ከምቲ ዝተነግረኩም እንተዘይተመሓየሹ",
        "እታ ፋርማሲ፣ ላቦራቶሪ ወይ ክሊኒክ ስእላዊ መርመራ ካብቲ ወረቓቕቲ ገለ ጎዲሉ ኣሎ እንተኢላትኩም",
        "ሓደ ውጽኢት ተዘንጊዑ ክኸውን ይኽእል እዩ ኢልኩም እንተሓሲብኩም ወይ ገና ተሻቒልኩም እንተሃሊኹም",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "ልሙዳት ኩነታት",
      type: "faq",
      faqs: [
        {
          question: "ድሕሪ ብጽሖት መርመራ ደም የድልየኒ። እንታይ ክገብር ኣለኒ?",
          answer:
            "requisition ከም ዘለኩምን እቲ ላቦራቶሪ ቆጸራ ይደሊ እንተኾይኑን ኣረጋግጹ። ድሕሪኡ ቦታ ላቦራቶሪ ንምርካብ ነቲ ዝርዝር ተጠቐሙ። ነቲ requisitionን ሓበሬታ ሽፋንኩምን ኣምጽኡ።",
        },
        {
          question: "ነቲ requisition ወይ ቅጥዒ ሪፈራል ኣይተረዳእክዎን።",
          answer:
            "ናብታ ዝሃበትኩም ክሊኒክ ደውሉ እሞ ብቐሊል ቋንቋ ክገልጹልኩም ሕተቱ። እቲ ቅጥዒ ንምንታይ ምዃኑ፣ ናበይ ከም ዝኸይድን ባዕልኹም ቆጸራ ክትሕዙ ዘድልየኩም እንተኾይኑን ምሕታት ቅቡል እዩ።",
        },
        {
          question: "ንውጽኢት መርመራ መን ይከታተሎ?",
          answer:
            "መብዛሕትኡ ግዜ እቲ ነቲ መርመራ ዝኣዘዞ ሰብ ሞያ ሕክምና እዩ። ንቤት ጽሕፈት ናይቲ ሰብ ሞያ ንንቡርን ዘይንቡርን ውጽኢታት ልሙድ ኣሰራርሕኦም እንታይ ምዃኑ ሕተቱ።",
        },
        {
          question: "ሪፈራላት ክንደይ ግዜ ይወስዱ?",
          answer:
            "ግዜ ሪፈራል ብዙሕ ይፈላለ እዩ። ንኹነታትኩም እንታይ ዓይነት ምጽባይ ንቡር ምዃኑን መልሲ እንተዘይሰሚዕኩም እንታይ ከም እትገብሩን ሕተቱ።",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "ጠቐምቲ ዝስዕቡ ስጉምትታት",
      type: "grid",
      gridItems: [
        {
          title: "ላቦራቶሪታትን ስእላዊ መርመራን ርኸቡ",
          content:
            "ንዝርዝራት መርመራ ደም፣ ራጂ፣ ኣልትራሳውንድን ስእላዊ መርመራን ነቲ ዝርዝር ተጠቐሙ።",
          icon: "file",
          link: { text: "ላቦራቶሪን ስእላዊ መርመራን", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "ፋርማሲ ርኸቡ",
          content:
            "ንፋርማሲታት፣ ሓገዝ መመላእታ መድሃኒትን ደገፍ መድሃኒትን ነቲ ዝርዝር ተጠቐሙ።",
          icon: "shield",
          link: { text: "ፋርማሲታት", url: "/local-services?category=pharmacies" },
        },
        {
          title: "ክንክን ክትትል ክትውጥኑ የድልየኩም ድዩ?",
          content:
            "ናይ ነዊሕ ግዜ ክትትል ኣበይ ከም ዝግበር እንተዘይትፈልጡ፣ ነቲ ገጽ ቀንዲ ክንክን ተጠቐሙ።",
          icon: "stethoscope",
          link: { text: "ቀንዲ ክንክን ርኸቡ", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "መድሃኒታትን ፋርማሲታትን",
  description:
    "ወረቐት መድሃኒት፣ መመላእታ መድሃኒት፣ ሓገዝ ፋርማሲስትን ኣብ ኦንታርዮ መድሃኒት ከመይ ከም ዝኽፈልን ተረድኡ።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "ኦንታርዮ: ፋርማሲስታት እንታይ ክገብሩ ይኽእሉ",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "ወግዓዊ ናይ ኣውራጃ ሓበሬታ ፋርማሲስትን ፋርማሲን።",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "ወግዓዊ ናይ ኣውራጃ መምርሒ ሽፋን መድሃኒት።",
    },
    {
      title: "ኦንታርዮ: ንልዑል ወጻኢታት መድሃኒት ሓገዝ ርኸቡ",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "ወግዓዊ መምርሒ Trillium Drug Program።",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "ፋርማሲስት ብምንታይ ክሕግዝ ይኽእል",
      type: "default",
      content:
        "ፋርማሲስታት መድሃኒት ምሃብ ጥራይ ኣይኮነን ስርሖም። ሓደ መድሃኒት ብውሕስነት ከመይ ከም እትወስድዎ ክገልጹ፣ ምትሕውዋስ መድሃኒታት ክምርምሩን ሳዕቤናት ክግምግሙን ይኽእሉ እዮም።\n\nኣብ ኦንታርዮ፣ ፋርማሲስታት **ን19 ልሙዳት ቀለልቲ ሕማማት ክግምግሙን ክእዝዙን** እውን ይኽእሉ እዮም — ሕማም ዓይኒ (pink eye)፣ ቁስሊ ከንፈር፣ ረኽሲ ሽንቲ (ኣብ ደቂ ኣንስትዮ)፣ ንኽስታት ሓሳኹን ወቕታዊ ኣለርጂን ሓዊሱ። እቲ ገምጋም ብካርድ ጥዕና ኦንታርዮኹም ብናጻ እዩ፣ እቲ ዝርዝር ሕማማት ድማ ክቕጽል ክሰፍሕ ይኽእል እዩ።\n\nፋርማሲ ከም እዚኦም ዝኣመሰሉ ግብራውያን ሕቶታት ንምሕታት እውን ካብቶም ዝበለጹ ቦታታት ሓደ እያ፦ **እዚ መመላእታ ህጹጽ ድዩ? ዝሓሰረ ኣማራጺ ኣሎ ድዩ? ሓንቲ ዶዝ እንተረሲዐ እንታይ ክገብር ኣለኒ?**",
    },
    {
      id: "fill-a-prescription",
      title: "ወረቐት መድሃኒት ከመይ ተውጽኡ",
      type: "steps",
      items: [
        "ነቲ ወረቐት መድሃኒት ውሰዱ: ብወረቐት፣ ብፋክስ ወይ ብኤሌክትሮኒካዊ መንገዲ ክለኣኽ ይኽእል እዩ።",
        "ፋርማሲ ምረጹ: ስሩዕ ሓንቲ ፋርማሲ ምጥቃም ምትሕውዋስ መድሃኒታትን ጸገማት ታሪኽ መመላእታን ንኽርእዩ ይሕግዞም።",
        "ብዛዕባ ግዜን ወጻኢን ሕተቱ: እታ ፋርማሲ መዓስ ድሉው ከም ዝኸውንን መደብኩም ይሽፍኖ እንተኾይኑን ክትነግረኩም ትኽእል እያ።",
        "ነቲ ምኽሪ ስምዑ: እቲ መድሃኒት ንምንታይ ምዃኑ፣ ከመይ ከም እትወስድዎን እንተዘይሓጊዙ መዓስ መሊስኩም ከም እትድውሉን ሕተቱ።",
      ],
    },
    {
      id: "refill-options",
      title: "ጸገማት መመላእታን መድሃኒትን",
      type: "table",
      columns: ["ኩነታት", "ጽቡቕ ቀዳማይ ስጉምቲ", "ስለምንታይ"],
      rows: [
        {
          cells: [
            "ስሩዕ መመላእታ መድሃኒት የድልየኒ",
            "ብልምዲ እትጥቀሙላ ፋርማሲ ወይ ስሩዕ ሰብ ሞያ ሕክምናኹም ጀምሩ",
            "መመላእታ፣ ምሕዳስ ወይ ሓድሽ ቆጸራ ዘድሊ እንተኾይኑ ክነግሩኹም ይኽእሉ እዮም",
          ],
        },
        {
          cells: [
            "ሓኪመይ ኣይርከብን እዩ፣ መድሃኒተይ ክውዳእ ይኽእል እዩ",
            "ነታ ፋርማሲ እንታይ ኣማራጺታት ከም ዘለዉ ሕተቱ፣ ምስ ዘድሊ ድማ ክንክን ብዘይ ቆጸራ፣ ብኦንላይን ወይ ቅልጡፍ ክንክን ተጠቐሙ",
            "እቲ ዝውሓሰ ዝስዕብ ስጉምቲ ኣብቲ መድሃኒትን ኩነታትኩምን ይምርኮስ",
          ],
        },
        {
          cells: [
            "እዚ መድሃኒት ከመይ ከም ዝውሰድ ኣይተረዳእክዎን",
            "ነቲ ፋርማሲስት ብቐሊል ቋንቋ ደጊሙ ክገልጾ ሕተቱ",
            "እዚ ክፋል ውሑስ ኣጠቓቕማ መድሃኒት እዩ",
          ],
        },
        {
          cells: [
            "እቲ መድሃኒት ኣዝዩ ክቡር እዩ",
            "ብዛዕባ ጀነሪክ (generic) ዓይነታት፣ ሽፋን መደብን ህዝባውያን መደባትን ሕተቱ",
            "ወጻኢታት መድሃኒት ይፈላለዩ እዮም፣ ሽፋን ድማ መብዛሕትኡ ግዜ ካብቲ ብጽሖት ባዕሉ ፍሉይ እዩ",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "መድሃኒታት ክኽፈሉ ዝኽእሉሉ መንገድታት",
      type: "checklist",
      items: [
        "ብቑዓት እንተኾንኩም፣ ህዝባዊ መደብ መድሃኒት",
        "ናይ ቤት ትምህርቲ ወይ ውልቃዊ መድሕን",
        "ሕውስዋስ ህዝባውን ውልቃውን ሽፋን",
        "ዋላ ሓደ መደብ ነቲ መድሃኒት እንተዘይሸፊንዎ፣ ካብ ጁባ",
      ],
    },
    {
      id: "pharmacy-links",
      title: "ናይ ከባቢ ሓገዝ ፋርማሲ የድልየኩም ድዩ?",
      type: "callout",
      content:
        "ጸገም መድሃኒት ቀልጢፍኩም ክትፈትሑ ክትፍትኑ ከለኹም፣ ፋርማሲታት፣ ደገፍ መመላእታን ናይ ኦንላይን ወይ ናይታ መዓልቲ ኣማራጺታትን ንምርካብ ነቲ ዝርዝር ተጠቐሙ።",
      link: { text: "ዝርዝራት ፋርማሲ ድለዩ", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "ደገፍ ጥዕና ኣእምሮ",
  description:
    "ናይ ከባቢ ጥዕና ኣእምሮ፣ ምኽሪ (counselling)፣ ደገፍ መንእሰያትን መንገድታት ቅልውላውን ኣብ ኪንግስተን።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት",
      url: "https://988.ca/",
      note: "ወግዓዊ ሃገራዊ መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት። ናብ 9-8-8 ደውሉ ወይ መልእኽቲ ስደዱ፣ ብናጻ፣ 24/7።",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "ወግዓዊ ሓበሬታ ጥዕና ኣእምሮ ዓበይትን ደገፍ ቅልውላውን።",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "ወግዓዊ መስመር ሓገዝ ጥዕና ኣእምሮን ወልፍን ኦንታርዮ።",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "ወግዓዊ ሓበሬታ ጥዕና ኣእምሮ ቆልዑን መንእሰያትን።",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "ሓደ ሰብ ድሕነቱ ኣብ ሓደጋ ክኸውን ይኽእል እንተኾይኑ",
      type: "callout",
      content:
        "ቅጽበታዊ ሓደጋ ኣብ ልዕሊ ህይወት ወይ ድሕነት እንተሃልዩ፣ ናብ 911 ደውሉ። ንሓሳባት ነብሰ-ቅትለት ወይ ከቢድ ጭንቀት፣ ኣብ ዝኾነ እዋን ናብ **9-8-8 ክትድውሉ ወይ መልእኽቲ ክትሰዱ** ትኽእሉ ኢኹም (መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት) — ብናጻ፣ ምስጢራውን 24/7 ብእንግሊዝኛን ፈረንሳይኛን ዝርከብን እዩ። ናብቲ 24/7 መስመር ቅልውላው AMHS-KFLA ኣብ 613-544-4229 እውን ክትድውሉ ትኽእሉ ኢኹም። ንስሩዕ ቆጸራ ኣይትጸበዩ።",
      link: { text: "ዝርዝራት ጥዕና ኣእምሮ", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "ዓይነታት ደገፍ",
      type: "grid",
      gridItems: [
        {
          title: "ደገፍ ቅልውላው",
          content:
            "ንቕጽበታዊ ጭንቀት፣ ስግኣታት ድሕነት ወይ ምጽባይ ውሑስ ኣብ ዘይኮነሉ ግዜ ነዚ ተጠቐሙ።",
          icon: "alert",
        },
        {
          title: "ህጹጽ ደገፍ",
          content:
            "እቲ ኩነታት ከቢድ ኮይኑ ቀልጢፍኩም ሓገዝ ምስ እትደልዩ፣ ግን ቅጽበታዊ ህይወት ኣብ ሓደጋ ዘእቱ ህጹጽ ኩነታት ኣብ ዘይኮነሉ ነዚ ተጠቐሙ።",
          icon: "clock",
        },
        {
          title: "ስሩዕ ምኽሪ (counselling)",
          content:
            "ንቐጻሊ ጭንቀት፣ ጓሂ መንፈስ (depression)፣ ጸቕጢ፣ ሓዘን፣ ጸገማት ዝምድና ወይ ምስግጋራት ህይወት ነዚ ተጠቐሙ።",
          icon: "heart",
        },
        {
          title: "ኣገልግሎታት ቆልዑን መንእሰያትን",
          content:
            "እቲ ክንክን ዘድልዮ ሰብ ቆልዓ ወይ ጎበዝ ምስ ዝኸውን፣ ፍሉያት ኣገልግሎታት ጥዕና ኣእምሮ መንእሰያት ተጠቐሙ።",
          icon: "info",
        },
        {
          title: "ደገፍ ካምፓስ",
          content:
            "ተመሃሮ መጀመርታ በቲ ናይ ካምፓሶም መንገድታት ድሕነት ወይ ምኽሪ ዝበለጸ ኣገልግሎት ክረኽቡ ይኽእሉ እዮም።",
          icon: "stethoscope",
        },
        {
          title: "ደገፍ ጾታዊ ዓመጽ",
          content:
            "ድሕሪ ጾታዊ ዓመጽ ንቕልውላው፣ ምኽሪ፣ ጥብቅናን ውጥን ድሕነትን ፍሉይ ደገፍ ተጠቐሙ።",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "ኣብ ልሙዳት ኩነታት ካበይ ትጅምሩ",
      type: "table",
      columns: ["ኩነታት", "ዝበለጸ ቀዳማይ መዕረፊ", "ስለምንታይ"],
      rows: [
        {
          cells: [
            "ሎሚ ምሸት ሓገዝ ጥዕና ኣእምሮ የድልየኒ",
            "ናብ 9-8-8 ደውሉ ወይ መልእኽቲ ስደዱ፣ ናብ መስመር ቅልውላው AMHS-KFLA ደውሉ፣ ወይ ድሕነት ኣብ ሓደጋ እንተሃልዩ ህጹጽ ረድኤት ተጠቐሙ",
            "እቲ ኩነታት ውሑስ ዘይኮነ ኮይኑ ኣብ ዝስመዓሉ ግዜ ንስሩዕ ቆጸራ ኣይትጸበዩ",
          ],
        },
        {
          cells: [
            "ምኽሪ የድልየኒ፣ ሕጂ ግን ውሑስ እየ",
            "ማሕበረሰባዊ ምኽሪ፣ ሓኪም ስድራቤት፣ ነርስ ፕራክቲሽነር ወይ ደገፋት ውልቃዊ መደብ",
            "እዚኦም ብቐጻሊ ክንክንን ሪፈራላትን ክሕግዙ ይኽእሉ እዮም",
          ],
        },
        {
          cells: [
            "ንውላደይ ሓገዝ የድልየኒ",
            "ኣገልግሎታት ጥዕና ኣእምሮ ቆልዑ ወይ መንእሰያት፣ ምስ ዘድሊ ድማ መምርሒ ህጹጽ ኩነታት",
            "ቆልዑን መንእሰያትን መብዛሕትኡ ግዜ ፍሉያት መንገድታት ኣለዎም",
          ],
        },
        {
          cells: [
            "ተመሃራይ እየ",
            "እቲ ኩነታት ውሑስ ዘይኮነ ወይ ከቢድ እንተዘይኮይኑ፣ መጀመርታ ጥዕና ወይ ምኽሪ ካምፓስ",
            "ንተመሃሮ ኣገልግሎታት ካምፓስ እቲ ዝቐልጠፈ መእተዊ ክኾኑ ይኽእሉ እዮም",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "ልሙዳት ሕቶታት",
      type: "faq",
      faqs: [
        {
          question: "ሕጂ ናብ መን ክድውል ወይ መልእኽቲ ክሰድድ እኽእል?",
          answer:
            "ኣብ ዝኾነ እዋን ናብ **9-8-8** (መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት) ደውሉ ወይ መልእኽቲ ስደዱ፣ ብናጻ፣ 24/7 — ሪፈራል ኣየድልን እዩ። ኣብ ኪንግስተን፣ እቲ መስመር ቅልውላው AMHS-KFLA ኣብ 613-544-4229 እውን 24/7 ይምልስ እዩ። ድሕነት ኣብ ቅጽበታዊ ሓደጋ እንተሃልዩ፣ ናብ 911 ደውሉ።",
        },
        {
          question: "እዚ ቅልውላው ድዩ ኣይኮነን ዘይፈልጥ እንተኾይነ ኸ?",
          answer:
            "ሓደ ሰብ ድሕነቱ ኣብ ሓደጋ ክኸውን ይኽእል እዩ እንተኾይኑ፣ ርግጸኝነት ኣይትጸበዩ። ደገፍ ቅልውላው ወይ ኣገልግሎታት ህጹጽ ረድኤት ተጠቐሙ።",
        },
        {
          question: "ሎሚ ምሸት ሓገዝ የድልየኒ ግን ናብ መን ከም ዝድውል ርግጸኛ ኣይኮንኩን እንተኾይነ ኸ?",
          answer:
            "ክሳብ ንግሆ ኣብ ክንዲ ምጽባይ፣ ነቲ ናይ ከባቢ ገጽ ዝርዝር ጥዕና ኣእምሮ ወይ መንገዲ ደገፍ ቅልውላው ተጠቐሙ።",
        },
        {
          question: "እቲ ሓገዝ ዘድልዮ ሰብ ውላደይ እንተኾይኑ ኸ?",
          answer:
            "ብፍላይ ኣገልግሎታት ቆልዑን መንእሰያትን ድለዩ። መንገድታት ጥዕና ኣእምሮ መንእሰያት መብዛሕትኡ ግዜ ካብ ክንክን ዓበይቲ ፍሉያት እዮም።",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "ምልላይ መርመራን ምክልኻልን",
  description:
    "መሰረታት ናይ ምክልኻል ክንክን፣ ክታበታትን ምልላይ መርመራ (screening)ን ኣብ ኦንታርዮ ፍለጡ።",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "ናይ ከባቢ ሓበሬታ ክታበትን ህዝባዊ ጥዕናን።",
    },
    {
      title: "ኦንታርዮ: ክንክን ጥዕና ኣብ ኦንታርዮ",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "ሓፈሻዊ መምርሒ ክንክን ጥዕና።",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "ናይ ምክልኻል ክንክን ስለምንታይ የገድስ",
      type: "default",
      content:
        "ናይ ምክልኻል ክንክን ማለት ጸገማት ኣቐዲምካ ምሓዝ ወይ ቅድሚ ምግዳዶም ደው ምባል ምፍታን እዩ። እዚ ክታበታት፣ መርመራታት ምልላይ (screening)፣ ስሩዕ ምልካዕ ጸቕጢ ደምን ምስ ሰብ ሞያ ሕክምና ብዛዕባ ረቛሒታት ሓደጋ ዝግበር ዘረባን የጠቓልል።",
    },
    {
      id: "common-prevention",
      title: "ልሙዳት ዕማማት ምክልኻል",
      type: "checklist",
      items: [
        "ክታበታትኩም ህሉዋት ሓዙ",
        "ንዕድመኹም ወይ ንታሪኽ ጥዕናኹም መርመራታት ምልላይ ይምከሩ እንተኾይኖም ሕተቱ",
        "ሕቶታትኩም ብዛዕባ ጸቕጢ ደም፣ ሽኮር (ዲያበጢስ) ወይ ካልኦት ረቛሒታት ሓደጋ ናብ ስሩዓት ብጽሖታት ኣምጽኡ",
        "ሓበሬታ ክታበት ወይ ምክልኻል ምስ ዘድልየኩም ጸጋታት ህዝባዊ ጥዕና ተጠቐሙ",
      ],
    },
    {
      id: "prevention-next",
      title: "ናይ ከባቢ ኣገልግሎታት ምክልኻል የድልየኩም ድዩ?",
      type: "callout",
      content:
        "ኣብ ኪንግስተን ጭቡጥ መበገሲ ቦታ ምስ ዘድልየኩም፣ ንዝርዝራት ህዝባዊ ጥዕና፣ ምልላይ መርመራን ፋርማሲን ነቲ ዝርዝር ናይ ከባቢ ኣገልግሎታት ተጠቐሙ።",
      link: {
        text: "ዝርዝራት ህዝባዊ ጥዕናን ፋርማሲን",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "ሓጋዚ ክንክንን ክንክን ማሕበረሰብን",
  description:
    "ክንክን ኣብ ገዛ፣ ስኒ፣ ተሃድሶ፣ ምኽሪ (counselling)፣ ደገፍ ዓይንን እንታይ ህዝባዊ፣ ማሕበረሰባዊ፣ ናይ ተመሃሮ ወይ ውልቃዊ ክኸውን ከም ዝኽእልን ንምርዳእ ነዚ ገጽ ተጠቐሙ።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "ወግዓዊ ሓበሬታ ምውህሃድ ክንክን ገዛን ማሕበረሰብን።",
    },
    {
      title: "ካናዳ: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "ወግዓዊ ሓበሬታ ፌደራላዊ መደብ ሽፋን ክንክን ስኒን ብቕዓትን።",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "ወግዓዊ ሓበሬታ ኣገልግሎታት ማሕበረሰብን ስኒን።",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "ወግዓዊ ሓበሬታ ደገፍ ዓይኒ።",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "ሓጋዚ ክንክንን ክንክን ማሕበረሰብን እንታይ ማለት እዩ",
      type: "default",
      content:
        "ሓጋዚ ክንክን ጥዕና (allied health) ማለት ካብ ከም ፊዚዮተራፒስታት፣ ሞያውያን ተራፒስታት (occupational therapists)፣ ክኢላታት መኣዛ ምግቢ፣ ማሕበራውያን ሰራሕተኛታት፣ ኣማኸርቲ፣ ሓካይም ስኒ ወይ ጉጅለታት ደገፍ ዓይኒ ዝኣመሰሉ ሰብ ሞያ ዝወሃብ ክንክን እዩ። ክንክን ማሕበረሰብ መብዛሕትኡ ግዜ ካብ ሆስፒታል ወጻኢ ዝግበር ክንክን ማለት እዩ፣ ሓድሓደ ግዜ ኣብ ገዛኹም፣ ቤት ትምህርቲ፣ ክሊኒክ ወይ መደብ ማሕበረሰብ።",
    },
    {
      id: "access-payment-matrix",
      title: "ሰሌዳ ምእታውን ክፍሊትን",
      type: "table",
      columns: ["መንገዲ", "ኣብነታት", "ክፍሊት መብዛሕትኡ ግዜ ከመይ ይሰርሕ", "ከመይ ትጅምሩ"],
      rows: [
        {
          cells: [
            "ብህዝባዊ ገንዘብ ዝምወል ክንክን ገዛን ማሕበረሰብን",
            "ነርሲንግ ኣብ ገዛ፣ ተራፒ ኣብ ገዛ፣ ምውህሃድ ክንክን",
            "ሕግታት መደብ እንተማሊእኩም ህዝባውያን መደባት ክምልከቱ ይኽእሉ እዮም",
            "ብሪፈራል ሰብ ሞያ ሕክምና ወይ ብወግዓዊ መንገዲ ክንክን ገዛ ጀምሩ",
          ],
        },
        {
          cells: [
            "ኣብ ማሕበረሰብ ዝምስረቱ ኣገልግሎታት",
            "ስኒ ማእከል ጥዕና ማሕበረሰብ ወይ ቀሊል ቅድመ-ኩነት ዘለዎም ደገፋት",
            "ከም እቲ ኣገልግሎት ህዝባዊ ወይ ማሕበረሰባዊ ምወላ ክምልከት ይኽእል እዩ",
            "ነቲ መደብ ብቐጥታ ተወከሱ፣ ብዛዕባ ብቕዓት ድማ ሕተቱ",
          ],
        },
        {
          cells: [
            "ኣብ ቤት ትምህርቲ ዝምስረቱ ደገፋት",
            "ምኽሪ ካምፓስ ወይ ምስ ጥዕና ዝተኣሳሰሩ ደገፋት",
            "መብዛሕትኡ ግዜ ምስ ብቕዓት ተመሃሮን ክፍሊታት ወይ መደባት ተመሃሮን ዝተኣሳሰረ እዩ",
            "መጀመርታ ወግዓውያን ገጻት ኣገልግሎት ቤት ትምህርትኹም ተጠቐሙ",
          ],
        },
        {
          cells: [
            "ውልቃዊ ሓጋዚ ክንክን",
            "ፊዚዮተራፒ፣ ምኽሪ፣ ማሳጅ፣ ውልቃዊ ስኒ፣ ውልቃውያን ኣገልግሎታት ዓይኒ",
            "ካልእ መደብ እንተዘይሸፊንዎ መብዛሕትኡ ግዜ ብውልቂ ይኽፈል",
            "ቅድሚ ቆጸራ ምሓዝኩም ምሉእ ክፍሊትን ሕግታት ሽፋንን ሕተቱ",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "ኣብነታት ሓጋዚ ክንክንን ክንክን ማሕበረሰብን",
      type: "grid",
      gridItems: [
        {
          title: "ክንክን ኣብ ገዛ",
          content:
            "ሓደ ሰብ ድሕሪ ሕማም፣ መጉዳእቲ ወይ ክንክን ሆስፒታል ኣብ ገዛ ደገፍ ምስ ዘድልዮ ጠቓሚ እዩ።",
          icon: "clock",
          link: {
            text: "ዝርዝራት ክንክን ገዛ",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "ክንክን ስኒ",
          content:
            "ሽፋን ስኒ ካብ ስሩዕ ሽፋን ሓኪም ፍሉይ እዩ። እቲ ፌደራላዊ Canadian Dental Care Plan ሕጂ ንብዙሓት ውልቃዊ መድሕን ስኒ ዘይብሎም ሰባት ይሽፍን፣ ከም Healthy Smiles Ontarioን ማሕበረሰባውያን ክሊኒካት ስኒን ዝኣመሰሉ መደባት ድማ ንፍሉያት ጉጅለታት ይሕግዙ።",
          icon: "shield",
          link: {
            text: "ዝርዝራት ስኒን ማሕበረሰብን",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "ተሃድሶን ተራፒን",
          content:
            "ፊዚዮተራፒ፣ ሞያዊ ተራፒን ተዛመድቲ ኣገልግሎታትን ከም መንገድኹም ህዝባዊ፣ ማሕበረሰባዊ ወይ ውልቃዊ ክኾኑ ይኽእሉ እዮም።",
          icon: "stethoscope",
          link: { text: "ዝርዝራት ሓጋዚ ክንክን", url: "/local-services?category=allied-community" },
        },
        {
          title: "ደገፍ ዓይኒ",
          content:
            "ደገፍ ዓይኒ ብተወሳኺ ሕክምናዊ ክንክን ዓይኒ፣ መሳርሒታት፣ ሓገዝ ምምልላስን ደገፋት ማሕበረሰብን ክሓቁፍ ይኽእል እዩ።",
          icon: "info",
          link: {
            text: "ዝርዝራት ደገፍ ዓይኒ",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "ቅድሚ ቆጸራ ምሓዝኩም",
      type: "checklist",
      items: [
        "ሪፈራል የድሊ እንተኾይኑ ሕተቱ",
        "እቲ ኣገልግሎት ህዝባዊ፣ ብማሕበረሰብ ዝምወል ወይ ብውልቂ ዝኽፈል ምዃኑ ሕተቱ",
        "እቲ ኣገልግሎት ውልቃዊ እንተኾይኑ ልክዕ ክፍሊትን ሕግታት ምስራዝን ሕተቱ",
        "ናይ ቤት ትምህርትኹም ወይ ውልቃዊ መደብኩም ክፋል ናይቲ ወጻኢ ይሽፍን እንተኾይኑ ርኣዩ",
        "መዛግብቲ፣ ስእላዊ መርመራ ወይ ወረቐት ሓኪም ከተምጽኡ ዘድልየኩም እንተኾይኑ ሕተቱ",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "ሕቶታትን መግለጺ ቃላትን",
  description:
    "ልሙዳት ኩነታት ሓደስቲ መጻእቲ፣ ግብራውያን ሕቶታትን ብቐሊል ቋንቋ ዝተጻሕፉ ትርጉማት ቃላትን።",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "ኦንታርዮ: ክንክን ጥዕና ኣብ ኦንታርዮ",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "ሓፈሻዊ ናይ ኣውራጃ መምርሒ ክንክን ጥዕና።",
    },
    {
      title: "ኦንታርዮ: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "ወግዓዊ መምርሒ ምኽሪ ነርስ።",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "ልሙዳት ኩነታት ሓደስቲ መጻእቲ",
      type: "faq",
      faqs: [
        {
          question: "ገና OHIP የብለይን። መጀመርታ እንታይ ክገብር ኣለኒ?",
          answer:
            "መጀመርታ መንገዲ ሽፋንኩም ፍለጡ፣ ድሕሪኡ ውሑስ ግዝያዊ መደብ ንምግባር ነቲ ናይ ከባቢ ዝርዝርን ገጻት መምርሒ ህጹጽ ኩነታትን ተጠቐሙ።",
        },
        {
          question: "ወጻእተኛ ተመሃራይ እየ። ካበይ ክጅምር ኣለኒ?",
          answer:
            "ብናይ ካምፓስኩም ኣገልግሎት ጥዕና ወይ ድሕነትን ሰነዳት መድሕን ቤት ትምህርትኹምን ጀምሩ፣ እዚኦም እኹላት ኣብ ዘይኮኑሉ ድማ ማሕበረሰባውያን ወይ ህጹጻት ኣገልግሎታት ተጠቐሙ።",
        },
        {
          question: "ተርጓሚ የድልየኒ።",
          answer:
            "ኣቐዲምኩም ሕተቱ። ዝርዝር ቋንቋ ተጠቒምኩም ነዚ መርበብ ብ33 ቋንቋታት ከተንብብዎ ትኽእሉ ኢኹም፣ ኣብቲ መስኮት ሓገዝ ተርጓሚ ዘለዋ ቅልጡፋት ሓረጋት ድማ ንሰራሕተኛታት ከተርእዩ ትኽእሉ ኢኹም። ንቆጸራታት፣ መምርሒ መድሃኒት፣ ፍቓድ ሕክምናን ዘረባታት መርመራን ብዛዕባ ሞያዊ ደገፍ ተርጓሚ ሕተቱ። Health811 (ናብ 811 ደውሉ) ብብዙሕ ቋንቋታት ደገፍ ተሌፎን ይህብ እዩ።",
        },
        {
          question: "ድሕሪ ብጽሖት መርመራ ደም የድልየኒ።",
          answer:
            "requisition ከም ዘለኩም ኣረጋግጹ፣ ድሕሪኡ ኣብቲ ዝርዝር ላቦራቶሪታትን ስእላዊ መርመራን ድለዩ።",
        },
        {
          question: "መመላእታ መድሃኒት የድልየኒ፣ ሓኪመይ ድማ ኣይርከብን እዩ።",
          answer:
            "ብፋርማሲኹም ጀምሩ፣ ድሕሪኡ ከም እቲ መድሃኒትን ህጹጽነቱን ብዝምችው፣ መንገድታት ብዘይ ቆጸራ፣ ብኦንላይን ወይ ህጹጽ ክንክን ተጠቐሙ።",
        },
        {
          question: "ንውላደይ ክንክን የድልየኒ።",
          answer:
            "መጀመርታ ምልክታት ህጹጽ ሓደጋ ተጠቐሙ፣ ድሕሪኡ ናይታ መዓልቲ ወይ ህጹጽ መምርሒ። መንገድታት ጥዕና ኣእምሮ ቆልዑን መንእሰያትን መብዛሕትኡ ግዜ ካብ ክንክን ዓበይቲ ፍሉያት እዮም።",
        },
        {
          question: "ሎሚ ምሸት ሓገዝ ጥዕና ኣእምሮ የድልየኒ።",
          answer:
            "ኣብ ዝኾነ እዋን ናብ 9-8-8 (መስመር ሓገዝ ቅልውላው ነብሰ-ቅትለት) ደውሉ ወይ መልእኽቲ ስደዱ፣ ወይ ናብቲ 24/7 መስመር ቅልውላው AMHS-KFLA ኣብ 613-544-4229 ደውሉ። ድሕነት ኣብ ሓደጋ እንተሃልዩ ህጹጽ ረድኤት ተጠቐሙ። ንስሩዕ ቆጸራ ኣይትጸበዩ።",
        },
        {
          question: "requisition ወይ ሪፈራል ኣይተረዳእክዎን።",
          answer:
            "ናብታ ዝሃበትኩም ክሊኒክ ደውሉ እሞ ብቐሊል ቋንቋ ክገልጹልኩም ሕተቱ። ንምንታይ ምዃኑ፣ ናበይ ከም ዝኸይድን መን ክከታተሎ ከም ዘለዎን ክትሓቱ ትኽእሉ ኢኹም።",
        },
      ],
    },
    {
      id: "more-questions",
      title: "ተወሰኽቲ ልሙዳት ሕቶታት",
      type: "faq",
      faqs: [
        {
          question: "ሓኪም እንተዘይብለይ ብቐጥታ ናብ ህጹጽ ረድኤት ክኸይድ እኽእል ድየ?",
          answer:
            "ህጹጽ ረድኤት ንህጹጻት ኩነታት እዩ። እቲ ጸገም ብንጹር ህይወት ኣብ ሓደጋ ዘየእቱ እንተኾይኑ፣ በቲ ገጽ መምርሒ ህጹጽ ኩነታት፣ ብ Health811፣ ብክሊኒክ ብዘይ ቆጸራ ወይ ብኻልእ ናይታ መዓልቲ ክንክን ጀምሩ።",
        },
        {
          question: "ሓድሽ እየ፣ ኣየናይ ኣገልግሎት ከም ዝሰማማዓኒ ድማ ኣይፈልጥን እየ እንተኾይነ ኸ?",
          answer:
            "ነቶም መጻረዪታት ዝርዝር ንተመሃሮ፣ ሓደስቲ መጻእቲ፣ ቆልዑን መንእሰያትን፣ ብዘይ ቆጸራ፣ ብኦንላይን፣ ሪፈራል ዘድልዮምን ዓይነት ሽፋንን ተጠቐሙ።",
        },
        {
          question: "ኣብዚ መርበብ ዘሎ ሓበሬታ ዝኣረገ እንተመሲሉ ኸ?",
          answer:
            "እቲ ዝስዕብ ግምገማ ኣብቲ ዝረኸብኩሞ ለውጢ ምእንቲ ከተኩር፣ ነቲ ኣብቲ ገጽ ወይ ዝርዝር ዘሎ ቅጥዒ ጸብጻብ ተጠቐሙ።",
        },
      ],
    },
    {
      id: "glossary",
      title: "መግለጺ ቃላት",
      type: "checklist",
      items: [
        "ቀንዲ ክንክን (primary care): ንስሩዓትን ቀጸልትን ድሌታት ጥዕና ስሩዕ መንገዲ ክንክንኩም።",
        "ነርስ ፕራክቲሽነር (NP): ኣብ ብዙሓት ኩነታት ክትግምግም፣ ሕማም ክትፈሊ፣ መድሃኒት ክትእዝዝን ሪፈራል ክትህብን እትኽእል ልዑል ስልጠና ዘለዋ ነርስ።",
        "ሪፈራል (referral): ካብ ሓደ ሰብ ሞያ ሕክምና ናብ ካልእ ኣገልግሎት ወይ ስፐሻሊስት ዝቐርብ ሕቶ።",
        "Requisition: ንላቦራቶሪ ወይ ንክሊኒክ ስእላዊ መርመራ ኣየናይ መርመራ ከም ዘድልየኩም ዝነግር ቅጥዒ።",
        "ትሪያጅ (triage): ኣብ ድሕነትን ክብደትን ተመስሪቱ መን ቅድም ህጹጽ ክንክን ከም ዘድልዮ ናይ ምውሳን መስርሕ።",
        "ክሊኒክ ብዘይ ቆጸራ (walk-in clinic): ብናይ መዓልቲ ምዝገባ ተደሪታ፣ ብዘይ ዝተሓዘ ቆጸራ ተሓከምቲ ክትርኢ እትኽእል ክሊኒክ።",
        "ቅልጡፍ ክንክን (urgent care): ብንጹር ህይወት ኣብ ሓደጋ ንዘየእትዉ ህጹጻት ጸገማት ናይታ መዓልቲ ክንክን።",
        "ዝተመዝገበ ወይ ዝተኣሳሰረ ተሓካሚ: ምስ ስሩዕ ወሃቢ ቀንዲ ክንክን ቀጻሊ ዝምድና ዘለዎ ተሓካሚ።",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "ብዛዕባ፣ እምነትን ብሕትውናን",
  description:
    "እዚ መምርሒ ከመይ ከም ዝሰርሕ፣ ምንጭታትን ኩነታት ግምገማን ከመይ ከም ዝተሓዙን ለውጥታት ከመይ ከም እትሕብሩን ፍለጡ።",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "መዘኻኸሪታት ምንጪ ፕሮጀክት",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "ንህዝቢ ዝቐርብ ጽማቝ ብዛዕባ እቲ ፕሮጀክት እምነትን ምንጭታትን ከመይ ከም ዝሕዝ።",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "እዚ መርበብ ንምንታይ እዩ",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca ንሓደስቲ መጻእቲ ቀዳምነት ዝህብ መምርሒ ምምራሕ ክንክን ጥዕና ንኪንግስተን፣ ኦንታርዮ እዩ። ሰባት ቅኑዕ ዝስዕብ ስጉምቲ ክመርጹ፣ ልሙዳት ቃላት ስርዓት ክርድኡን ዝተኣመኑ ዝርዝራት ናይ ከባቢ ኣገልግሎት ክረኽቡን ንምሕጋዝ ዝተዳለወ እዩ።\n\nእዚ መርበብ መሳርሒ ቀጥታዊ ግዜ ምጽባይ፣ መድረኽ ምሓዝ ቆጸራ ወይ ኣገልግሎት ሕክምናዊ ምኽሪ **ኣይኮነን**።",
    },
    {
      id: "sources",
      title: "እምነትን ኣመንጫጭዋን ከመይ ይሰርሑ",
      type: "default",
      content:
        "ምስ ዝከኣል ናይ ከባቢ ዝርዝራት ምስ ወግዓውያን ገጻት ኣገልግሎት ከነተኣሳስር ንፍትን ኢና። ነፍሲ ወከፍ ዝርዝር ኩነታት ግምገማን ዕለት ናይ መወዳእታ ግምገማን የርኢ። ገለ ኣታዊታት ምስ ወግዓውያን ምንጭታት ምሉእ ብምሉእ ዝተረጋገጹ እዮም። ካልኦት ግን ሰዓታት ስራሕ፣ ምዝገባ ወይ ሕግታት ምእታው ብተደጋጋሚ ስለ ዝቕየሩ ገና ናይ ከባቢ ዳግመ-ምርግጋጽ የድልዮም።\n\nናይ ገጽ ደረጃ ሕጡባት ምንጪ ነቲ ህሉው ዙርያ ግምገማ ዝተጠቕሙ ቀንዲ ወግዓውያን መወከሲታት የርእዩ።",
    },
    {
      id: "accessibility",
      title: "ተበጻሕነትን ቋንቋን",
      type: "default",
      content:
        "እዚ መርበብ ንመፍትሕ ሰሌዳ ዝሰማማዕ፣ ንሞባይል ቀዳምነት ዝህብን ብቐሊል ቋንቋ ዝንበብን ኮይኑ እዩ ተሃኒጹ።\n\nዝርዝር ቋንቋ ኣብቲ ላዕለዋይ ክፋል ተጠቒምኩም ነቲ ምሉእ መምርሒ ብ **33 ቋንቋታት** ከተንብብዎ ትኽእሉ ኢኹም — ካብ العربية ን Soomaali ን ክሳብ ਪੰਜਾਬੀ፣ ትግርኛ፣ Yorùbá ን Українська ን — ነፍሲ ወከፍ ገጽን ዝርዝርን ድማ ብቐጥታ ኣብዚ መርበብ ይቐርብ። ኩሎም ትርጉማት ብማሽን ዝተሓገዙ እዮም፤ ፈረንሳይኛ፣ ስጳንኛ፣ ዓረብኛን ቀሊል ቻይንኛን ተወሳኺ ዙርያ ግምገማ ተገይሩሎም፣ እቶም ዝተረፉ ድማ ከም ኣውቶማቲክ ትርጉም ተመልኪቶም ኣለዉ። **እንግሊዝኛ መወከሲ ቅዳሕ ኮይኑ ይቕጽል** — ሓንቲ ዝተተርጎመት ምሉእ ሓሳብ ዘይንጽርቲ ወይ ዘገርም እንተመሲላ፣ ነቲ ጽሑፍ እንግሊዝኛ ርኣዩ ወይ ሰብ ከረጋግጾ ሕተቱ።\n\nካብቲ ሓደ ዝርዝር ብ Google Translate ብዙሓት ተወሰኽቲ ቋንቋታት ነዚ መርበብ ክኸፍታኦ ይኽእላ እየን፣ እቲ መስኮት ሓገዝ ተርጓሚ ድማ ንሰራሕተኛታት እተርእይወን ህጹጻት ቅልጡፋት ሓረጋት ብልዕሊ 20 ቋንቋታት ኣለዎ።\n\nዝርዝር ኣገልግሎታት (ኣስማት ኣገልግሎት፣ ኣድራሻታት፣ ቁጽርታት ተሌፎንን ሰዓታት ስራሕን) ምስ ወግዓውያን ምንጭታት ብልክዕ ምእንቲ ክሰማምዑ ብእንግሊዝኛ ይተርፉ።\n\nዝኾነ ዓይነት ትርጉም ንሕክምናዊ ዝርዝራት ገና ጌጋ ክኸውን ይኽእል እዩ፣ ስለዚ ንቆጸራታት፣ መምርሒ መድሃኒትን ፍቓድ ሕክምናን ብዛዕባ ሞያዊ ደገፍ ተርጓሚ ሕተቱ። Health811 (ናብ 811 ደውሉ) ብብዙሕ ቋንቋታት ደገፍ ተሌፎን ይህብ እዩ።",
    },
    {
      id: "privacy",
      title: "ብሕትውና",
      type: "default",
      content:
        "እዚ መርበብ ወራሪ ርሑቕ ስታቲስቲክስ ኣይጥቀምን እዩ። ኣለይቲ እቲ መርበብ ልሙዳት ድልያታት፣ ውጽኢት ዘይብሎም ድልያታት፣ ምርኣይ ኣገልግሎታትን ጸብጻባት ጸገማትን ምእንቲ ክርድኡ፣ እቲ ሓበሬታ ንዕላማ ጽገና ብፍላጥ ምስ ዝስደድ፣ ቀለልቲ ቁጽርታት ምምሕያሽ ኣብ ናይ ገዛእ ርእስኹም ብራውዘር ይዕቅብ።\n\nብቕጥዒ ርእይቶ ወይ ብኢመይል ውልቃዊ ሕክምናዊ ሓበሬታ ኣይትስደዱ።",
    },
    {
      id: "contact",
      title: "መራኸብን ምሕባር ለውጥታትን",
      type: "default",
      content:
        "ሓደ ገጽ ወይ ዝርዝር ጌጋ እንተመሲሉ፣ ነቲ ኣብቲ ገጽ ዘሎ ቅጥዒ ጸብጻብ ተጠቐሙ። ጸብጻባት ነቲ ጸገም እዮም ክገልጹ ዘለዎም፣ ንውልቃዊ ኩነታት ጥዕናኹም ኣይኮኑን።\n\nሓፈሻዊ ኢመይል መራኸቢ፦ **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "መሕበሪ ሓላፍነት",
      type: "default",
      content:
        "እዚ መርበብ ንምምራሕን ንትምህርትን ጥራይ እዩ። ሕክምናዊ ምኽሪ ኣይኮነን፣ ንሞያዊ ምልላይ ሕማም፣ ሕክምና ወይ ህጹጽ ሓገዝ ድማ መተካእታ ኣይኮነን። ሓደ ኩነታት ህይወት ኣብ ሓደጋ ዘእቱ ክኸውን ይኽእል እዩ እንተኾይኑ፣ ናብ 911 ደውሉ።",
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
