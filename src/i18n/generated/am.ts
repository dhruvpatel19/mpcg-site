import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "ገጹ በመጫን ላይ ነው...",
    directoryEnglishNote:
      "የአገልግሎት ስሞች፣ አድራሻዎች፣ ስልክ ቁጥሮች እና የሥራ ሰዓታት ከኦፊሴላዊ ምንጮች ጋር በትክክል እንዲመሳሰሉ የማውጫ ዝርዝሮች በእንግሊዝኛ ይታያሉ።",
  },
  header: {
    emergencyBanner: "ሕይወትን አደጋ ላይ የሚጥል ድንገተኛ ሁኔታ ነው? አሁኑኑ 911 ይደውሉ።",
    tagline: "Kingston, Ontario — ለአዲስ መጤዎች ቅድሚያ የሚሰጥ የጤና አገልግሎት መመሪያ",
    languageButton: "ቋንቋ",
    languageButtonAria: "የቋንቋ እና የአስተርጓሚ እርዳታ",
    openNavigation: "የገጽ ማውጫን ይክፈቱ",
    primaryNavLabel: "ዋና",
  },
  languageModal: {
    title: "የቋንቋ እና የአስተርጓሚ እርዳታ",
    description:
      "ይህን መመሪያ በሚመችዎት ቋንቋ ያንብቡ። ስለ ጤና በሚደረጉ ንግግሮች አስተርጓሚ ሲያስፈልግዎ ይጠይቁ።",
    chooseLanguageTitle: "ቋንቋዎን ይምረጡ",
    chooseLanguageNote:
      "ይህ መመሪያ በዚህ ድረ-ገጽ ላይ ወደ 33 ቋንቋዎች ሙሉ በሙሉ ተተርጉሟል፤ በደርዘኖች የሚቆጠሩ ተጨማሪ ቋንቋዎችም በራስ-ሰር ትርጉም ይከፈታሉ። የማውጫ ዝርዝሮች ከኦፊሴላዊ ምንጮች ጋር በትክክል እንዲመሳሰሉ በእንግሊዝኛ ይቆያሉ። አንድ ነገር ግልጽ ካልሆነ እንግሊዝኛው ዋቢ ቅጂ ነው።",
    safetyTitle: "የደህንነት ማስታወሻ",
    safetyBody:
      "የድረ-ገጽ ትርጉም ለማንበብ እና ለመረዳት ነው። ለቀጠሮዎች፣ ለምርመራ መመሪያዎች፣ ለመድኃኒቶች ወይም ለፈቃድ፣ ክሊኒኩ ወይም ሆስፒታሉ ሙያዊ አስተርጓሚ ማቅረብ ይችል እንደሆነ ይጠይቁ። Health811 (811 ይደውሉ) በብዙ ቋንቋዎች የስልክ ድጋፍ ይሰጣል።",
    phrasesTitle: "ለሠራተኞች የሚያሳዩ ፈጣን ሐረጎች",
    phrasesNote:
      "ቋንቋዎን ጠቁመው እነዚህን መስመሮች ለመስተንግዶ ወይም ለሕክምና ሠራተኞች ያሳዩ።",
    callHealth811: "ለ Health811 ይደውሉ",
    accessibilityCta: "ተደራሽነት እና እምነት",
    close: "የቋንቋ እርዳታ መስኮቱን ዝጋ",
  },
  moreLanguages: {
    title: "ተጨማሪ ቋንቋዎች (ራስ-ሰር ትርጉም)",
    description:
      "እያንዳንዱ ቋንቋ ከዚህ አንድ ምናሌ ይሠራል — ሶማልኛ፣ ዮሩባ፣ ኢግቦ፣ ሃውሳ፣ አማርኛ፣ ትግርኛ፣ ስዋሂሊ፣ ዩክሬንኛ፣ ፋርስኛ፣ ኡርዱ፣ ፑንጃብኛ፣ ታሚልኛ እና ቬትናምኛን ጨምሮ።",
    selectLabel: "ማንኛውንም ቋንቋ ይምረጡ",
    selectPlaceholder: "ሁሉም ቋንቋዎች — አንዱን ይምረጡ…",
    openButton: "በዚህ ቋንቋ ይክፈቱ",
    disclaimer:
      "ራስ-ሰር ተብለው የተመለከቱ ቋንቋዎች ይህን ገጽ በ Google Translate በኩል ይከፍታሉ፤ መቃኘት ሲቀጥሉም በቋንቋዎ ይቆያሉ። ራስ-ሰር ትርጉም በዚህ ፕሮጀክት አልተገመገመም — ለማንበብ ጥሩ ነው፣ ነገር ግን የሕክምና ዝርዝሮችን ከሐኪም ወይም ከአስተርጓሚ ጋር ያረጋግጡ።",
  },
  funding: {
    acknowledgment:
      "ይህ ፕሮጀክት ከ Ontario Medical Students Association (OMSA) በተገኘ የገንዘብ ድጋፍ የተደገፈ ነው።",
    logoAlt: "የ Ontario Medical Students Association (OMSA) አርማ",
  },
  languagePicker: {
    searchPlaceholder: "ቋንቋዎችን ይፈልጉ…",
    onSiteGroup: "በዚህ ድረ-ገጽ የተተረጎሙ",
    proxyGroup: "ተጨማሪ ቋንቋዎች በ Google Translate በኩል",
    reviewedBadge: "የተገመገመ",
    automaticBadge: "ራስ-ሰር",
    interpreterTab: "የአስተርጓሚ እርዳታ እና ሐረጎች",
    noMatches: "ከፍለጋዎ ጋር የሚዛመድ ቋንቋ የለም።",
    note: "ትርጉሞቹ በማሽን የታገዙ ናቸው፤ አንድ ነገር ግልጽ ካልሆነ እንግሊዝኛው ዋቢ ቅጂ ነው። በ Google Translate ቡድን ውስጥ ያሉ ቋንቋዎች ይህን ገጽ በውጫዊ የ Google ድረ-ገጽ ላይ ይከፍታሉ። የማውጫ ዝርዝሮች ከኦፊሴላዊ ምንጮች ጋር በትክክል እንዲመሳሰሉ በእንግሊዝኛ ይቆያሉ።",
  },
  navigation: [
    {
      title: "ከዚህ ይጀምሩ",
      items: [
        {
          label: "አሁን እርዳታ ይፈልጋሉ",
          to: "/need-help-now",
          description: "አስቸኳይ ውሳኔዎች እና የቀውስ ድጋፍ",
        },
        {
          label: "ከዚህ ይጀምሩ",
          to: "/start-here",
          description: "ለ Ontario ጤና አገልግሎት አዲስ ለሆኑ",
        },
        {
          label: "የመጀመሪያ ደረጃ ሕክምና ያግኙ",
          to: "/get-a-family-doctor",
          description:
            "ሐኪሞች፣ nurse practitioners (NP)፣ የማኅበረሰብ ጤና ማዕከላት እና የተማሪ አማራጮች",
        },
      ],
    },
    {
      title: "ሕክምናን ይረዱ",
      items: [
        {
          label: "ወጪዎች እና ሽፋን",
          to: "/costs-and-coverage",
          description: "OHIP፣ IFHP፣ የግል ዕቅዶች እና የመድኃኒት ሽፋን",
        },
        {
          label: "የእርስዎ ጉብኝት",
          to: "/your-visit",
          description: "ምን መያዝ እንዳለብዎ እና ጥያቄዎችን እንዴት እንደሚጠይቁ",
        },
        {
          label: "ከጉብኝቱ በኋላ",
          to: "/after-visit",
          description:
            "ምርመራዎች፣ requisitions (የምርመራ ማዘዣዎች)፣ ሪፈራሎች እና ክትትል",
        },
        {
          label: "መድኃኒቶች እና ፋርማሲዎች",
          to: "/medicines-and-pharmacies",
          description: "የሐኪም ማዘዣዎች፣ መድኃኒት መሙላት እና የፋርማሲስት እርዳታ",
        },
      ],
    },
    {
      title: "የአካባቢ እርዳታ",
      items: [
        {
          label: "የአካባቢ አገልግሎቶች",
          to: "/local-services",
          description: "የ Kingston አገልግሎቶችን ይፈልጉ",
        },
        {
          label: "የአእምሮ ጤና",
          to: "/mental-health",
          description: "የቀውስ፣ አስቸኳይ፣ መደበኛ እና የወጣቶች ድጋፍ",
        },
        {
          label: "ቅድመ ምርመራ እና መከላከል",
          to: "/screening-prevention",
          description: "ክትባቶች እና የመከላከያ እንክብካቤ",
        },
        {
          label: "ተጓዳኝ እና የማኅበረሰብ እንክብካቤ",
          to: "/community-allied-health",
          description:
            "የቤት እንክብካቤ፣ ተሃድሶ (rehab)፣ የጥርስ ሕክምና እና የማኅበረሰብ ድጋፎች",
        },
        {
          label: "ተደጋጋሚ ጥያቄዎች",
          to: "/faq",
          description: "የተለመዱ የአዲስ መጤ ሁኔታዎች እና መዝገበ-ቃላት",
        },
        {
          label: "ስለ እኛ እና እምነት",
          to: "/about",
          description: "ምንጮች፣ ግላዊነት፣ ተደራሽነት እና አስተያየት",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "አሁኑኑ እርዳታ ይፈልጋሉ?",
    items: {
      "call-911": {
        label: "911 ይደውሉ",
        description: "ሕይወትን አደጋ ላይ የሚጥል ድንገተኛ ሁኔታ",
      },
      "call-811": {
        label: "ለ Health811 ይደውሉ",
        description: "የነርስ ምክር፣ 24/7",
      },
      "call-988": {
        label: "9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ",
        description: "Suicide Crisis Helpline (የራስን ሕይወት ማጥፋት ቀውስ መስመር)፣ 24/7",
      },
      "call-crisis": {
        label: "ለቀውስ መስመር ይደውሉ",
        description: "የ AMHS-KFLA የቀውስ መስመር",
      },
      "urgent-guide": {
        label: "የአስቸኳይ ሕክምና መመሪያ",
        description: "ከሥራ ሰዓት ውጭ እና የዕለቱ አማራጮች",
      },
      "mental-health": {
        label: "የአእምሮ ጤና ድጋፍ",
        description: "የቀውስ፣ አስቸኳይ እና መደበኛ መንገዶች",
      },
    },
  },
  home: {
    seoTitle: "የ Kingston ጤና አገልግሎት መመሪያ",
    seoDescription:
      "ለ Kingston, Ontario አዲስ መጤዎች ቅድሚያ የሚሰጥ የጤና አገልግሎት መመሪያ፦ አስቸኳይ እርዳታ፣ የአካባቢ አገልግሎቶች፣ የሽፋን መሠረታዊ ነገሮች፣ የአስተርጓሚ መመሪያ እና ከጉብኝት በኋላ ቀጣይ እርምጃዎች።",
    kicker: "Kingston, Ontario",
    heroTitle: "በ Kingston ትክክለኛውን ሕክምና ሳይገምቱ ያግኙ",
    heroLead:
      "በአስቸኳይ እርዳታ፣ በአዲስ መጤ መሠረታዊ ነገሮች፣ በሽፋን ወይም በአካባቢ አገልግሎቶች ማውጫ ይጀምሩ። ይህ መመሪያ በቀላል ቋንቋ የተጻፈ፣ ለሞባይል ምቹ እና እንደገና መረጋገጥ ስለሚያስፈልጋቸው ነገሮች ሐቀኛ ነው።",
    cardNeedHelp: {
      title: "አሁን እርዳታ ይፈልጋሉ",
      body: "የድንገተኛ፣ የአስቸኳይ ሕክምና፣ የቀውስ እና ከሥራ ሰዓት ውጭ መመሪያ።",
    },
    cardStartHere: {
      title: "ከዚህ ይጀምሩ",
      body: "የ Ontario ጤና አገልግሎት እንዴት እንደሚሠራ እና መጀመሪያ ምን ማድረግ እንዳለብዎ።",
    },
    cardSearch: {
      title: "አገልግሎቶችን ይፈልጉ",
      body: "የደም ምርመራ፣ መድኃኒት መሙላት፣ ያለቀጠሮ ሕክምና፣ የአእምሮ ጤና እና ሌሎችንም ይፈልጉ።",
    },
    cardLanguage: {
      title: "የቋንቋ እርዳታ",
      body: "ይህን መመሪያ በቋንቋዎ ያንብቡ፤ የአስተርጓሚ መመሪያ እና ፈጣን ሐረጎችም አሉ።",
    },
    quickDecisionsKicker: "ፈጣን ውሳኔዎች",
    quickDecisionsTitle: "በእነዚህ ጥያቄዎች ይጀምሩ",
    quickDecisionLines: [
      "ሕይወትን አደጋ ላይ የሚጥል ሊሆን የሚችል ከሆነ አሁኑኑ 911 ይደውሉ።",
      "ዛሬ ማታ ወዴት መሄድ እንዳለብዎ እርግጠኛ ካልሆኑ ለ Health811 ይደውሉ።",
      "ለራስን ማጥፋት ሐሳቦች ወይም ለከባድ ጭንቀት በማንኛውም ጊዜ 9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ።",
      "የቤተሰብ ሐኪም ከሌለዎት ያለቀጠሮ ክሊኒክ፣ የማኅበረሰብ ጤና እና የተማሪ አማራጮችን በዕቅድዎ ውስጥ ያስቀምጡ።",
      "የደም ምርመራ፣ ራጅ (X-ray)፣ መድኃኒት መሙላት ወይም የሪፈራል መረጃ ካስፈለገዎ ቀጣዩን እርምጃ ለማግኘት የአካባቢውን ማውጫ ይጠቀሙ።",
    ],
    trustNoteTitle: "የእምነት ማስታወሻ",
    trustNoteBody:
      "ይህ ቋሚ (static) መመሪያ ነው። የቀጥታ የመጠበቂያ ጊዜዎችን አናሳይም። እንደ የሥራ ሰዓታት እና የመግቢያ ሂደት ያሉ ጊዜን የሚነኩ ዝርዝሮች በፍጥነት ሊለወጡ ይችላሉ፤ ስለዚህ እያንዳንዱ ዝርዝር የምንጭ አገናኝ እና የግምገማ ሁኔታ አለው።",
    newcomerKicker: "የአዲስ መጤ ፈጣን ጅምር",
    newcomerTitle: "ለ Kingston አዲስ ከሆኑ የመጀመሪያ እርምጃዎች",
    newcomerSteps: [
      {
        title: "1. ሽፋንዎን ይወቁ",
        body: "OHIP፣ IFHP፣ የግል ዕቅዶችን እና አብዛኛውን ጊዜ የማይሸፈነውን ይረዱ። ለ OHIP የመጠበቂያ ጊዜ የለም - እንደደረሱ ወዲያውኑ ያመልክቱ።",
      },
      {
        title: "2. የመጀመሪያ ደረጃ ሕክምና መንገድዎን ያቅዱ",
        body: "በቤተሰብ ሐኪሞች፣ nurse practitioners (የላቀ ሥልጠና ያላቸው ነርሶች)፣ የተማሪ ክሊኒኮች፣ የማኅበረሰብ ጤና ማዕከላት እና ያለቀጠሮ ሕክምና መካከል ያለውን ልዩነት ይወቁ።",
      },
      {
        title: "3. ቀጥሎ ምን እንደሚሆን ይወቁ",
        body: "requisitions (የምርመራ ማዘዣዎች)፣ ሪፈራሎች፣ የምርመራ ውጤቶች እና የክትትል ጥሪዎች አብዛኛውን ጊዜ ምን ማለት እንደሆኑ ይወቁ።",
      },
    ],
    languageSupportKicker: "የቋንቋ ድጋፍ",
    languageSupportTitle: "እርዳታ ካስፈለገዎ እነዚህን ሐረጎች ያሳዩ",
    openLanguageHelp: "የቋንቋ እርዳታን ይክፈቱ",
    commonTasksKicker: "የተለመዱ ተግባራት",
    commonTasksTitle: "መጨረስ በሚፈልጉት ተግባር ይፈልጉ",
    openDirectory: "ሙሉ ማውጫውን ይክፈቱ",
    tasks: [
      {
        title: "የደም ምርመራ ወይም ራጅ (X-ray)",
        body: "ላቦራቶሪዎችን እና የምስል ምርመራ አገልግሎቶችን ያግኙ።",
      },
      {
        title: "የመድኃኒት ማዘዣ መሙላት",
        body: "ፋርማሲዎችን እና የመሙላት እርዳታ ያግኙ።",
      },
      {
        title: "የአእምሮ ጤና ድጋፍ",
        body: "የቀውስ፣ አስቸኳይ፣ መደበኛ እና የወጣቶች ድጋፍ።",
      },
      {
        title: "የጤና ካርድ ወይም የአዲስ መጤ ድጋፍ",
        body: "ServiceOntario፣ ISKA እና የስልክ ምክር ያግኙ።",
      },
    ],
    featuredKicker: "ተመራጭ አገልግሎቶች",
    featuredTitle: "ለመጀመር ጥሩ ቦታዎች",
    trustKicker: "እምነት እና ምንጮች",
    trustTitle: "ስለተረጋገጠው እና አሁንም እንደገና መረጋገጥ ስለሚያስፈልገው ሐቀኞች ነን",
    trustBody:
      "አንዳንድ ዝርዝሮች ከኦፊሴላዊ የአካባቢ ምንጮች ጋር ተመሳክረዋል። ሌሎች ግን የሥራ ሰዓታት፣ የመግቢያ ሂደት ወይም የመግቢያ ሕጎች በተደጋጋሚ ስለሚለወጡ አሁንም የአካባቢ ዳግም ማረጋገጫ ያስፈልጋቸዋል። ይህን ሁኔታ በግልጽ እናሳያለን፤ ጊዜ ያለፈባቸውን ዝርዝሮችም እንዲያሳውቁን እናበረታታለን።",
    trustChecklistTitle: "በአንድ ዝርዝር ላይ ከመተማመንዎ በፊት ያንብቡ",
    trustChecklist: [
      "የኦፊሴላዊ ምንጭ አገናኙን ይፈልጉ።",
      "የመጨረሻውን የግምገማ ቀን ይመልከቱ።",
      "ከመሄድዎ በፊት የዕለቱን የሥራ ሰዓታት እና ያለቀጠሮ መግባት ይቻል እንደሆነ ያረጋግጡ።",
      "ለውጥ ካስተዋሉ የሪፖርት ቅጹን ይጠቀሙ።",
    ],
    trustLink: "ምንጮችን እና የእምነት ማስታወሻዎችን ይመልከቱ",
  },
  contentPage: {
    breadcrumbHome: "መነሻ",
    badge: "በቀላል ቋንቋ የተጻፈ መመሪያ",
    reviewStatusTitle: "የግምገማ ሁኔታ",
    reviewLabels: {
      reviewed: "ይህ ፕሮጀክት በሚጠቀመው የአሁኑ የምንጭ ስብስብ ላይ ተመስርቶ ተገምግሟል።",
      "general-guidance":
        "እንደ አጠቃላይ መመሪያ ተገምግሟል። የአካባቢ ዝርዝሮች አሁንም በፍጥነት ሊለወጡ ይችላሉ።",
      "needs-local-recheck":
        "ጠቃሚ መመሪያ ነው፣ ነገር ግን የአካባቢ ዝርዝሮች አሁንም ተጨማሪ ማረጋገጫ ያስፈልጋቸዋል።",
    },
    lastReviewPrefix: "የመጨረሻ የገጽ ግምገማ፦",
    noReviewDate: "ይህ ገጽ የተመዘገበ የገጽ ደረጃ የግምገማ ቀን የለውም።",
    translationAside:
      "ይህን ገጽ የቋንቋ ምናሌውን በመጠቀም በብዙ ቋንቋዎች ማንበብ ይችላሉ። ለቀጠሮዎች፣ ለመድኃኒቶች፣ ለፈቃድ እና ለምርመራ መመሪያዎች የአስተርጓሚ ድጋፍ መኖሩን ይጠይቁ።",
    share: "አጋራ",
    print: "አትም",
    sourcesTitle: "የዚህ ገጽ ምንጮች",
    sourcesNote:
      "እነዚህ ለአሁኑ የገጽ ግምገማ የተጠቀምንባቸው ዋና ኦፊሴላዊ ወይም የመጀመሪያ ምንጮች ናቸው። የአካባቢ ሂደቶች በግምገማ ዑደቶች መካከል አሁንም ሊለወጡ ይችላሉ።",
    onThisPage: "በዚህ ገጽ ላይ",
    sourcesAnchorLabel: "ምንጮች",
    translationReminderTitle: "የትርጉም ማሳሰቢያ",
    translationReminderBody:
      "አንድ ነገር ሕክምናዎን ወይም ደህንነትዎን የሚነካ ከሆነ በትርጉም ብቻ ከመተማመን ይልቅ ከሐኪም ወይም ከአስተርጓሚ ጋር ያረጋግጡት።",
    linkCopiedTitle: "አገናኙ ተቀድቷል",
    linkCopiedBody: "አሁን የዚህን ገጽ አገናኝ በማንኛውም ቦታ መለጠፍ ይችላሉ።",
    shareCancelled: "ማጋራት ተሰርዟል",
  },
  directory: {
    seoTitle: "የአካባቢ አገልግሎቶች",
    seoDescription:
      "በ Kingston, Ontario ለአዲስ መጤዎች ምቹ የሆኑ የጤና፣ የአእምሮ ጤና፣ የፋርማሲ፣ የሽፋን እና የመምሪያ አገልግሎቶችን ይፈልጉ።",
    kicker: "የ Kingston ማውጫ",
    title: "የአካባቢ የጤና አገልግሎቶችን ይፈልጉ",
    lead: "በአገልግሎት፣ በሕመም ምልክት፣ በሰነድ ወይም በተግባር ይፈልጉ። ምሳሌዎች፦ walk in (ያለቀጠሮ)፣ ከሥራ ሰዓት ውጭ፣ የደም ምርመራ፣ መድኃኒት መሙላት፣ የጤና ካርድ፣ የተማሪ ክሊኒክ ወይም የአዲስ መጤ ድጋፍ።",
    searchPlaceholder: "በፍላጎት፣ በአገልግሎት ስም፣ በአድራሻ ወይም በቁልፍ ቃል ይፈልጉ",
    sortAriaLabel: "ውጤቶችን ደርድር",
    sortRelevance: "ደርድር፦ በተዛማጅነት",
    sortAlphabetical: "ደርድር፦ ከ A እስከ Z",
    sortRecentlyReviewed: "ደርድር፦ በቅርብ የተገመገሙ",
    sortArea: "ደርድር፦ በአካባቢ",
    gridViewLabel: "የፍርግርግ እይታ",
    listViewLabel: "የዝርዝር እይታ",
    allServices: "ሁሉም አገልግሎቶች",
    audienceTitle: "ለማን ነው",
    accessTitle: "የመግቢያ መንገድ",
    careLevelTitle: "የሕክምና ደረጃ",
    coverageAreaTitle: "ሽፋን እና አካባቢ",
    areaLabel: "አካባቢ",
    showingServices: "{count} አገልግሎቶች እየታዩ ነው",
    resetFilters: "ማጣሪያዎችን ዳግም አስጀምር",
    trustPanelTitle: "የእምነት እና የግምገማ ሁኔታ",
    trustPanelBody:
      "ይህ ማውጫ ቋሚ ነው፤ የቀጥታ አይደለም። የመጨረሻውን የተመዘገበ የግምገማ ቀን፣ ሲገኙ ኦፊሴላዊ የምንጭ አገናኞችን እና አሁንም የአካባቢ ዳግም ማረጋገጫ የሚያስፈልጋቸውን ዝርዝሮች እናሳያለን። ከመሄድዎ በፊት የሥራ ሰዓታትን እና የዕለቱን መግቢያ ያረጋግጡ።",
    verifiedLabel: "የተረጋገጠ",
    needsRecheckLabel: "ዳግም ማረጋገጫ ያስፈልጋል",
    noResultsTitle: "ከእነዚህ ማጣሪያዎች ጋር የሚዛመድ አገልግሎት አልተገኘም",
    noResultsBody:
      "እንደ የደም ምርመራ፣ መድኃኒት መሙላት፣ የአእምሮ ጤና፣ የጤና ካርድ ወይም walk in ያለ ሰፋ ያለ ፍለጋ ይሞክሩ። ሁሉንም ማጣሪያዎች አጽድተው እንደገና መጀመርም ይችላሉ።",
    notSureTitle: "ከየት መጀመር እንዳለብዎ እርግጠኛ አይደሉም?",
    notSureBody:
      "የድንገተኛ ሕክምና፣ አስቸኳይ ሕክምና፣ ያለቀጠሮ ክሊኒክ ወይም የፋርማሲ ድጋፍ እንደሚያስፈልግዎ እርግጠኛ ካልሆኑ፣ በአስቸኳይ መመሪያ ገጹ ይጀምሩ ወይም ለነርስ ምክር ለ Health811 ይደውሉ።",
    needHelpNowCta: "አሁን እርዳታ ይፈልጋሉ",
    callHealth811: "ለ Health811 ይደውሉ",
  },
  filters: {
    audience: {
      newcomers: "አዲስ መጤዎች",
      students: "የተማሪ ብቻ ወይም የካምፓስ",
      "children-youth": "ሕፃን ወይም ወጣት",
      adults: "አዋቂዎች",
      families: "ቤተሰቦች",
      "unattached-patients": "የቤተሰብ ሐኪም የሌላቸው",
    },
    access: {
      "walk-in": "ያለቀጠሮ (walk-in)",
      appointment: "በቀጠሮ",
      referral: "ሪፈራል ያስፈልጋል",
      virtual: "የመስመር ላይ (virtual)",
    },
    level: {
      emergency: "ድንገተኛ",
      urgent: "አስቸኳይ",
      primary: "የመጀመሪያ ደረጃ",
      community: "የማኅበረሰብ",
    },
    payment: {
      public: "በመንግሥት የሚሸፈን",
      community: "የማኅበረሰብ / ዝቅተኛ መሰናክል",
      mixed: "ድብልቅ ሽፋን",
      "student-plan": "የተማሪ ዕቅድ",
      private: "የግል ክፍያ",
    },
    location: {
      downtown: "መሃል ከተማ",
      "north-end": "ሰሜናዊ ክፍል (North End)",
      "west-end": "ምዕራባዊ ክፍል (West End)",
      campus: "ካምፓስ",
      online: "በመስመር ላይ",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "የድንገተኛ እና አስቸኳይ ሕክምና",
      shortLabel: "ድንገተኛ እና አስቸኳይ",
    },
    "primary-care": {
      label: "የመጀመሪያ ደረጃ ሕክምና",
      shortLabel: "የመጀመሪያ ደረጃ ሕክምና",
    },
    "community-health": {
      label: "የማኅበረሰብ ጤና ማዕከላት",
      shortLabel: "የማኅበረሰብ ጤና",
    },
    "mental-health": {
      label: "የአእምሮ ጤና እና የቀውስ ድጋፍ",
      shortLabel: "የአእምሮ ጤና",
    },
    "public-health": { label: "የሕዝብ ጤና", shortLabel: "የሕዝብ ጤና" },
    "labs-imaging": {
      label: "ላቦራቶሪዎች እና የምስል ምርመራ",
      shortLabel: "ላቦራቶሪ እና ምስል ምርመራ",
    },
    pharmacies: {
      label: "መድኃኒቶች እና ፋርማሲዎች",
      shortLabel: "ፋርማሲዎች",
    },
    "allied-community": {
      label: "ተጓዳኝ እና የማኅበረሰብ እንክብካቤ",
      shortLabel: "ተጓዳኝ እንክብካቤ",
    },
    "navigation-support": {
      label: "የመምሪያ እና የሽፋን ድጋፍ",
      shortLabel: "መምሪያ",
    },
  },
  serviceCard: {
    whenToUse: "መቼ እንደሚጠቀሙ፦",
    accessLabel: "መግቢያ",
    eligibilityLabel: "ብቁነት",
    eligibilityFallback:
      "ኦፊሴላዊው ምንጭ በሌላ መንገድ ካልገለጸ በስተቀር ለሕዝብ ሁሉ ክፍት ነው።",
    hoursLabel: "የሥራ ሰዓታት",
    phoneLabel: "ስልክ",
    trustDetails: "የእምነት እና የምንጭ ዝርዝሮች",
    lastReview: "የመጨረሻ ግምገማ፦",
    officialSource: "ኦፊሴላዊ ምንጭ",
    call: "ይደውሉ",
    officialWebsite: "ኦፊሴላዊ ድረ-ገጽ",
    directions: "አቅጣጫዎች",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
  },
  serviceDetail: {
    backToServices: "ወደ አካባቢ አገልግሎቶች ተመለስ",
    whenToUseTitle: "ይህን አገልግሎት መቼ እንደሚጠቀሙ",
    eligibilityTitle: "ብቁነት እና መግቢያ",
    eligibilityFallback:
      "ይህ አገልግሎት ለእርስዎ ክፍት መሆኑን እርግጠኛ ካልሆኑ ኦፊሴላዊውን ምንጭ ይመልከቱ።",
    whatToBringTitle: "ምን መያዝ እንዳለብዎ",
    contactTitle: "ግንኙነት እና እርምጃዎች",
    callNow: "አሁን ይደውሉ",
    officialWebsite: "ኦፊሴላዊ ድረ-ገጽ",
    directions: "አቅጣጫዎች",
    trustTitle: "እምነት እና ምንጭ",
    lastReview: "የመጨረሻ ግምገማ፦",
    viewOfficialSource: "ኦፊሴላዊውን ምንጭ ይመልከቱ",
  },
  verification: {
    verified: {
      label: "ከኦፊሴላዊ ምንጭ ጋር የተረጋገጠ",
      shortLabel: "የተረጋገጠ",
      description:
        "ዋና ዝርዝሮች በመጨረሻው የግምገማ ዑደት ከኦፊሴላዊ ምንጭ ጋር ተመሳክረዋል።",
    },
    "partially-verified": {
      label: "ኦፊሴላዊ ምንጭ ተያይዟል",
      shortLabel: "ኦፊሴላዊ አገናኝ",
      description:
        "ኦፊሴላዊ ምንጭ ተያይዟል፣ ነገር ግን አንድ ወይም ከዚያ በላይ ዝርዝሮች በተደጋጋሚ ሊለወጡ ስለሚችሉ ከመሄድዎ በፊት መረጋገጥ አለባቸው።",
    },
    "community-reported": {
      label: "በማኅበረሰብ የተዘገበ",
      shortLabel: "የማኅበረሰብ ዘገባ",
      description:
        "ይህ መረጃ ከማኅበረሰብ ዘገባ የመጣ ሲሆን አሁንም ገለልተኛ ማረጋገጫ ያስፈልገዋል።",
    },
    "needs-recheck": {
      label: "ዳግም ማረጋገጫ ያስፈልጋል",
      shortLabel: "ዳግም ማረጋገጫ ያስፈልጋል",
      description:
        "ይህ ዝርዝር አሁንም ሊረዳ ስለሚችል ይታያል፣ ነገር ግን ዋና ዝርዝሮች ጊዜ ያለፈባቸው ሊሆኑ ይችላሉ። ከመተማመንዎ በፊት ያረጋግጡ።",
    },
  },
  feedback: {
    badge: "ጊዜ ያለፈበት መረጃ ያሳውቁ",
    title: "ይህ መመሪያ ትክክለኛ ሆኖ እንዲቆይ ይርዱን",
    body: "ይህ የገጽ ወይም የአገልግሎት መረጃን የያዘ አስቀድሞ የተሞላ ኢሜይል ይከፍታል። የግል የሕክምና መረጃ አያካትቱ።",
    issueTypeLabel: "የችግር ዓይነት",
    issueTypes: {
      "outdated hours": "ጊዜ ያለፈባቸው የሥራ ሰዓታት",
      "wrong phone or website": "የተሳሳተ ስልክ ወይም ድረ-ገጽ",
      "eligibility or access issue": "የብቁነት ወይም የመግቢያ ችግር",
      "translation or accessibility problem": "የትርጉም ወይም የተደራሽነት ችግር",
      "missing service or content": "የጎደለ አገልግሎት ወይም ይዘት",
      other: "ሌላ",
    },
    detailsLabel: "ምን እንድናረጋግጥ ይፈልጋሉ?",
    detailsPlaceholder:
      "ምሳሌ፦ የስልክ ቁጥሩ ተቀይሯል፣ አንድ ክሊኒክ አሁን በቀጠሮ ብቻ ነው፣ ወይም አንድ አገናኝ አይሠራም።",
    contactLabel: "አማራጭ የመገናኛ መረጃ",
    contactPlaceholder: "መልስ ከፈለጉ የኢሜይል አድራሻ",
    openEmail: "የሪፖርት ኢሜይል ክፈት",
    copyText: "የሪፖርቱን ጽሑፍ ቅዳ",
    thanks:
      "እናመሰግናለን። ሪፖርቶች ጊዜ ያለፈባቸውን ገጾች፣ የማይሠሩ አገናኞችን እና የአካባቢ ዳግም ማረጋገጫ የሚያስፈልጋቸውን ዝርዝሮች ቅድሚያ እንድንሰጥ ይረዱናል።",
    toastEmailTitle: "የኢሜይል ረቂቅ ተከፍቷል",
    toastEmailBody: "ሪፖርትዎ የገጽ ወይም የአገልግሎት መረጃን ያካትታል።",
    toastCopyTitle: "የችግሩ ማጠቃለያ ተቀድቷል",
    toastCopyBody: "ካስፈለገ በራስዎ የኢሜይል መተግበሪያ ውስጥ መለጠፍ ይችላሉ።",
  },
  footer: {
    description:
      "ለ Kingston, Ontario በቀላል ቋንቋ የተጻፈ የጤና አገልግሎት መመሪያ። ይህ ድረ-ገጽ የሕክምና ምክር ወይም የቀጥታ የመጠበቂያ ጊዜዎችን አይሰጥም። ከመሄድዎ በፊት ጊዜን የሚነኩ ዝርዝሮችን ሁልጊዜ ከኦፊሴላዊው ምንጭ ጋር ያረጋግጡ።",
    trustModelTitle: "የእምነት ሞዴል",
    trustModelBody:
      "ኦፊሴላዊ የምንጭ አገናኞችን፣ የግምገማ ቀኖችን እና አሁንም ዳግም ማረጋገጫ የሚያስፈልጋቸውን ዝርዝሮች እናሳያለን። የሆነ ነገር የተሳሳተ መስሎ ከታየ ከገጹ ወይም ከአገልግሎቱ ላይ ያሳውቁ።",
    beforeYouGo: {
      title: "ከመሄድዎ በፊት",
      body: "ኦፊሴላዊ የሥራ ሰዓታትን፣ ቀጠሮ ወይም ሪፈራል ያስፈልግ እንደሆነ እና ምን ሰነዶች መያዝ እንዳለብዎ ያረጋግጡ።",
    },
    languageHelp: {
      title: "የቋንቋ እርዳታ",
      body: "የቋንቋ ምናሌውን በመጠቀም ይህን መመሪያ በቋንቋዎ ያንብቡ። ትክክለኛነት አስፈላጊ በሚሆንበት ጊዜ ለሕክምና ንግግሮች አስተርጓሚ ይጠይቁ።",
    },
    privacy: {
      title: "ግላዊነት",
      body: "ይህ ድረ-ገጽ በአሳሽዎ ውስጥ የሚቀመጡ የአካባቢ፣ ግላዊነትን የሚጠብቁ የማሻሻያ ምዝግቦችን ይጠቀማል። የግል ትንታኔ መረጃን ወደ ሩቅ አገልጋይ አይልክም።",
    },
    copyrightSuffix: "ለ Kingston, Ontario የማኅበረሰብ መረጃ ምንጭ።",
    disclaimer: "ማስተባበያ",
    privacyLink: "ግላዊነት",
    sourcesLink: "ምንጮች",
    reportLink: "ጊዜ ያለፈበት መረጃ ያሳውቁ",
  },
  notFound: {
    seoTitle: "ገጹ አልተገኘም",
    seoDescription:
      "የጠየቁት ገጽ ሊገኝ አልቻለም። በአስቸኳይ እርዳታ፣ በአዲስ መጤ መሠረታዊ ነገሮች፣ በአካባቢ አገልግሎቶች ወይም በተደጋጋሚ ጥያቄዎች ይጀምሩ።",
    badge: "404",
    title: "ያንን ገጽ ማግኘት አልቻልንም",
    body: "በፍጥነት ሕክምና ለማግኘት እየሞከሩ ከሆነ በአስቸኳይ መመሪያ ይጀምሩ ወይም የ Kingston አገልግሎቶች ማውጫን ይፈልጉ።",
    startHere: "ከዚህ ይጀምሩ",
    needHelpNow: "አሁን እርዳታ ይፈልጋሉ",
    localServices: "የአካባቢ አገልግሎቶች",
    faq: "ተደጋጋሚ ጥያቄዎች",
  },
};

export const pages: Record<string, PageContent> = {
  home: {
    title: "የ Kingston ጤና አገልግሎት መመሪያ",
    description:
      "በ Kingston, Ontario ጤና አገልግሎት ለማግኘት ለአዲስ መጤዎች ቅድሚያ የሚሰጥ፣ በቀላል ቋንቋ የተጻፈ መመሪያ።",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [],
    sections: [],
  },
  "start-here": {
    title: "ከዚህ ይጀምሩ",
    description:
      "ለ Kingston ወይም ለ Ontario ጤና አገልግሎት አዲስ ነዎት? ሥርዓቱ እንዴት እንደሚሠራ እና መጀመሪያ ምን ማድረግ እንዳለብዎ ለማወቅ ከዚህ ይጀምሩ።",
    reviewed_on: "2026-03-23",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario፦ በ Ontario ያለ የጤና እንክብካቤ",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "በ Ontario የተሸፈነ ሕክምና እንዴት እንደሚሠራ አጠቃላይ እይታ።",
      },
      {
        title: "Ontario፦ ለ OHIP ያመልክቱ እና የጤና ካርድ ያግኙ",
        url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
        note: "ኦፊሴላዊ የ OHIP ማመልከቻ እና የብቁነት መረጃ።",
      },
      {
        title: "Ontario፦ የቤተሰብ ሐኪም ወይም nurse practitioner ያግኙ",
        url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
        note: "የ Health Care Connect እና የመጀመሪያ ደረጃ ሕክምና መግቢያ መመሪያ።",
      },
      {
        title: "Canada፦ Interim Federal Health Program (IFHP)",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
        note: "ብቁ ለሆኑ ስደተኞች እና የጥገኝነት ጠያቂዎች የፌዴራል ሽፋን መረጃ።",
      },
    ],
    sections: [
      {
        id: "how-it-works",
        title: "በ Ontario ጤና አገልግሎት እንዴት እንደሚሠራ",
        type: "default",
        content: `የ Ontario ጤና አገልግሎት በ**የመጀመሪያ ደረጃ ሕክምና** ዙሪያ የተደራጀ ነው። የመጀመሪያ ደረጃ ሕክምና ማለት ለመደበኛ የጤና ፍላጎቶች፣ ለቀጣይ ሕመሞች፣ ለመድኃኒት ማዘዣዎች፣ ለሪፈራሎች እና ለመከላከል አብዛኛውን ጊዜ የሚጀምሩበት ቦታ ነው። የመጀመሪያ ደረጃ ሕክምና አቅራቢዎ የቤተሰብ ሐኪም፣ nurse practitioner (የላቀ ሥልጠና ያለው ነርስ)፣ የማኅበረሰብ ጤና ማዕከል ቡድን ወይም ብቁ ከሆኑ የተማሪ ጤና ክሊኒክ ሊሆን ይችላል።

**ሪፈራል (referral)** ማለት አንድ ሐኪም ሌላ አገልግሎት ወይም ስፔሻሊስት እንዲያይዎ ሲጠይቅ ነው። **Requisition (የምርመራ ማዘዣ)** ማለት ለላቦራቶሪ ወይም ለምስል ምርመራ ክሊኒክ ምን ምርመራ እንደሚያስፈልግዎ የሚነግር ቅጽ ነው።

ሥርዓቱን ሁሉ በመጀመሪያው ቀን መረዳት አያስፈልግዎትም። በጣም አስፈላጊዎቹ እርምጃዎች እነዚህ ናቸው፦ ሽፋንዎን ይወቁ፣ ለአስቸኳይ ችግሮች ወዴት መሄድ እንዳለብዎ ይወቁ፣ እና አቅራቢ ከሌለዎት ለመደበኛ ሕክምና ዕቅድ ያውጡ።`,
      },
      {
        id: "first-decisions",
        title: "የመጀመሪያ ውሳኔዎች",
        type: "grid",
        gridItems: [
          {
            title: "አስቸኳይ እርዳታ ሊያስፈልገኝ ይችላል",
            content:
              "ዛሬ ወይም ዛሬ ማታ ድንገተኛ ችግር ካለብዎ በድንገተኛ እና አስቸኳይ ሕክምና መመሪያ ይጀምሩ።",
            icon: "alert",
            link: { text: "አሁን እርዳታ ይፈልጋሉ", url: "/need-help-now" },
          },
          {
            title: "የቤተሰብ ሐኪም የለኝም",
            content:
              "የቤተሰብ ሐኪሞች፣ nurse practitioners፣ የማኅበረሰብ ጤና ማዕከላት፣ ያለቀጠሮ ክሊኒኮች እና የተማሪ ክሊኒኮች እንዴት እንደሚገናኙ ይወቁ።",
            icon: "stethoscope",
            link: { text: "የመጀመሪያ ደረጃ ሕክምና ያግኙ", url: "/get-a-family-doctor" },
          },
          {
            title: "ምን እንደሚሸፈን መረዳት እፈልጋለሁ",
            content:
              "ስለ OHIP፣ IFHP፣ የግል መድን፣ የተማሪ ዕቅዶች፣ የመድኃኒት ሽፋን እና የተለመዱ ከኪስ የሚወጡ ወጪዎች ያንብቡ።",
            icon: "shield",
            link: { text: "ወጪዎች እና ሽፋን", url: "/costs-and-coverage" },
          },
          {
            title: "የቋንቋ እርዳታ እፈልጋለሁ",
            content:
              "ይህን መመሪያ የቋንቋ ምናሌውን በመጠቀም በ33 ቋንቋዎች ያንብቡ፤ ለሕክምና ንግግሮች እና ለፈቃድ ስለ አስተርጓሚ ድጋፍ ይጠይቁ።",
            icon: "info",
            link: { text: "ተደራሽነት እና ቋንቋ", url: "/about#accessibility" },
          },
          {
            title: "የደም ምርመራ፣ የምስል ምርመራ ወይም መድኃኒት መሙላት እፈልጋለሁ",
            content:
              "ከጉብኝት በኋላ ቀጣዩን ተግባራዊ እርምጃ ለማግኘት የአካባቢውን ማውጫ ይጠቀሙ።",
            icon: "file",
            link: { text: "የአካባቢ አገልግሎቶችን ይፈልጉ", url: "/local-services" },
          },
          {
            title: "ከየት መጀመር እንዳለብኝ እርግጠኛ አይደለሁም",
            content:
              "ሁኔታዎ ምን ያህል አስቸኳይ እንደሆነ እርግጠኛ ካልሆኑ ለነርስ ምክር ለ Health811 ይደውሉ።",
            icon: "clock",
            link: { text: "Health811 እና የአስቸኳይ መመሪያ", url: "/need-help-now#after-hours" },
          },
        ],
      },
      {
        id: "first-week",
        title: "በመጀመሪያው ሳምንትዎ ጥሩ የመጀመሪያ እርምጃዎች",
        type: "steps",
        items: [
          "ሽፋንዎን ይወቁ: OHIP፣ IFHP፣ የግል መድን እና የተማሪ ዕቅዶች አብዛኛውን ጊዜ ምን እንደሚሸፍኑ ያንብቡ። ለ OHIP ብቁ ሊሆኑ የሚችሉ ከሆነ በተቻለ ፍጥነት ያመልክቱ።",
          "የአስቸኳይ ዕቅድዎን ይምረጡ: መቼ 911 መደወል እንዳለብዎ፣ መቼ በ Health811 መጀመር እንዳለብዎ እና በ Kingston አስቸኳይ ወይም የዕለቱ ሕክምና የት እንደሚገኝ ይወቁ።",
          "ለመደበኛ ሕክምና ያቅዱ: መደበኛ አቅራቢ ከሌለዎት ስለ ቤተሰብ ሐኪሞች፣ nurse practitioners፣ የማኅበረሰብ ጤና ማዕከላት፣ የተማሪ ክሊኒኮች፣ ያለቀጠሮ ክሊኒኮች እና የመስመር ላይ ሕክምና አማራጮችዎን ይወቁ።",
          "የጤና መረጃዎን አንድ ላይ ያስቀምጡ: የጤና ካርድዎን ወይም የ IFHP ወረቀቶችዎን፣ የመድኃኒት ዝርዝርዎን፣ የክትባት መዝገብዎን እና የማንኛውም requisitions ወይም ሪፈራሎች ቅጂዎችን ያስቀምጡ።",
        ],
      },
      {
        id: "if-no-coverage-yet",
        title: "ገና OHIP ከሌለዎት",
        type: "callout",
        content:
          "ሽፋንዎን ለማወቅ እስኪታመሙ አይጠብቁ። ለ OHIP ብቁ ከሆኑ ቀድመው ያመልክቱ። በ IFHP ወይም በትምህርት ቤት ወይም በግል ዕቅድ የሚሸፈኑ ከሆነ ያንን መረጃ ይዘው ይቆዩ። መድን ከሌለዎት ከጉብኝት በፊት ስለ ክፍያዎች ይጠይቁ፤ ተገቢ ሲሆንም የማኅበረሰብ ወይም ዝቅተኛ መሰናክል ያላቸውን አገልግሎቶች ይፈልጉ።",
        link: { text: "ስለ ሽፋን ያንብቡ", url: "/costs-and-coverage" },
      },
      {
        id: "keep-ready",
        title: "እነዚህን ነገሮች ዝግጁ ያድርጉ",
        type: "checklist",
        items: [
          "የጤና ካርድዎ፣ የ IFHP ወረቀቶችዎ ወይም የመድን መረጃዎ",
          "ጥቂት መድኃኒቶች ብቻ ቢወስዱም የመድኃኒት ዝርዝር",
          "ካለዎት የመጨረሻው ክሊኒክዎ ወይም አቅራቢዎ ስም እና ስልክ ቁጥር",
          "ማንኛውም የቅርብ ጊዜ requisitions፣ ሪፈራሎች፣ ከሆስፒታል የመውጫ ወረቀቶች ወይም የምርመራ መመሪያዎች",
          "በቀላል ቋንቋ መጠየቅ የሚፈልጓቸው ጥያቄዎች",
          "መጠየቅዎን እንዳይረሱ የአስተርጓሚ ፍላጎትዎ ተጽፎ",
        ],
      },
    ],
  },
  "need-help-now": {
    title: "አሁን እርዳታ ይፈልጋሉ?",
    description:
      "ዛሬ ወይም ዛሬ ማታ የጤና ችግር ሲኖርብዎ እና ከየት መጀመር እንዳለብዎ እርግጠኛ ካልሆኑ ይህን ገጽ ይጠቀሙ።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario፦ ከ Health811 የሕክምና ምክር ያግኙ",
        url: "https://www.ontario.ca/page/get-medical-advice-health811",
        note: "ኦፊሴላዊ የ24/7 የነርስ ምክር አገልግሎት።",
      },
      {
        title: "9-8-8፦ Suicide Crisis Helpline (የራስን ሕይወት ማጥፋት ቀውስ መስመር)",
        url: "https://988.ca/",
        note: "ኦፊሴላዊ ብሔራዊ የራስን ሕይወት ማጥፋት ቀውስ የእርዳታ መስመር። 9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ፤ ነጻ፣ 24/7።",
      },
      {
        title: "Kingston Health Sciences Centre",
        url: "https://kingstonhsc.ca/",
        note: "ለድንገተኛ፣ ለአስቸኳይ ሕክምና እና ለምስል ምርመራ መረጃ ኦፊሴላዊ የሆስፒታል አውታረ መረብ።",
      },
      {
        title: "AMHS-KFLA",
        url: "https://www.amhs-kfla.ca/",
        note: "ኦፊሴላዊ የአካባቢ የአእምሮ ጤና እና የቀውስ ድጋፍ ድርጅት።",
      },
    ],
    sections: [
      {
        id: "emergency-vs-urgent",
        title: "ድንገተኛ ወይስ አስቸኳይ?",
        type: "comparison",
        comparison: {
          left: {
            title: "እንደነዚህ ላሉ ችግሮች ወዲያውኑ ወደ ድንገተኛ ክፍል ይሂዱ፦",
            items: [
              "የደረት ሕመም፣ ከባድ የመተንፈስ ችግር ወይም የስትሮክ ምልክቶች",
              "ከባድ ደም መፍሰስ፣ ትልቅ ጉዳት ወይም ራስን መሳት",
              "ድንገተኛ መደናገር፣ የሚጥል በሽታ (seizure) ወይም ከባድ የአለርጂ ምላሽ",
              "መጠበቅ ሕይወትን ወይም አካልን አደጋ ላይ ሊጥል የሚችል የደህንነት ድንገተኛ ሁኔታ",
            ],
          },
          right: {
            title:
              "እንደነዚህ ላሉ ችግሮች በአስቸኳይ ሕክምና፣ በ Health811 ወይም በዕለቱ ክሊኒክ ይጀምሩ፦",
            items: [
              "መወጠር (sprain)፣ ቀላል ቁስሎች፣ ሽፍታ፣ የጆሮ ሕመም ወይም የድንገተኛ ማስጠንቀቂያ ምልክቶች የሌሉት ትኩሳት",
              "መደበኛ ቀጠሮ መጠበቅ የማይችሉ የመድኃኒት መሙላት ችግሮች",
              "ዛሬ ማታ አስቸኳይ ሕክምና ያስፈልገኛል ወይ የሚሉ ጥያቄዎች",
              "አስቸኳይ የሚመስል ግን ሕይወትን አደጋ ላይ የሚጥል መሆኑ ግልጽ ያልሆነ ችግር",
            ],
          },
        },
      },
      {
        id: "after-hours",
        title: "የተለመዱ ከሥራ ሰዓት ውጭ ሁኔታዎች",
        type: "table",
        columns: ["ሁኔታ", "ጥሩ የመጀመሪያ እርምጃ", "ማስታወስ ያለብዎ"],
        rows: [
          {
            cells: [
              "ይህ ምን ያህል አስቸኳይ እንደሆነ እርግጠኛ አይደለሁም",
              "ለ Health811 ይደውሉ",
              "ቤት መቆየት፣ አስቸኳይ ሕክምና መፈለግ ወይም ወደ ድንገተኛ ክፍል መሄድ እንዳለብዎ ለመወሰን ነርስ ሊረዳዎ ይችላል።",
            ],
          },
          {
            cells: [
              "ሐኪሜ ዝግ ነው፤ ዛሬ ማታ ምክር እፈልጋለሁ",
              "Health811 ወይም የአስቸኳይ ሕክምና መመሪያ",
              "የድንገተኛ ማስጠንቀቂያ ምልክቶች ከሌሉ ድንገተኛ ክፍል ብቸኛ አማራጭዎ ነው ብለው አያስቡ።",
            ],
          },
          {
            cells: [
              "ለልጄ ሕክምና እፈልጋለሁ",
              "ተመሳሳዮቹን የድንገተኛ ማስጠንቀቂያ ምልክቶች ይጠቀሙ፤ ከዚያ የዕለቱን ሕክምና ይፈልጉ ወይም እርግጠኛ ካልሆኑ ለ Health811 ይደውሉ",
              "የልጁን የጤና ካርድ፣ የመድኃኒት ዝርዝር እና ከተቻለ የምልክቶቹን የጊዜ ሂደት ይዘው ይምጡ።",
            ],
          },
          {
            cells: [
              "ዛሬ ማታ የአእምሮ ጤና እርዳታ እፈልጋለሁ",
              "9-8-8 (Suicide Crisis Helpline) ይደውሉ ወይም ጽሑፍ ይላኩ፣ ወይም ለ24/7 AMHS-KFLA የቀውስ መስመር ይደውሉ",
              "ለደህንነት ፈጣን አደጋ ካለ 911 ይደውሉ።",
            ],
          },
        ],
        caption:
          "ይህ ሰንጠረዥ አጠቃላይ መመሪያ ብቻ ነው። አንድ ሰው ፈጣን አደጋ ላይ ሊሆን የሚችል ከሆነ 911 ይደውሉ።",
      },
      {
        id: "kingston-start-points",
        title: "የ Kingston መነሻ ቦታዎች",
        type: "grid",
        gridItems: [
          {
            title: "የድንገተኛ ክፍል (Emergency Department)",
            content:
              "ሕይወትን አደጋ ላይ ለሚጥሉ ወይም ሊጥሉ ለሚችሉ ችግሮች የድንገተኛ ሕክምናን ይጠቀሙ።",
            icon: "alert",
            link: {
              text: "የድንገተኛ እና አስቸኳይ ዝርዝሮች",
              url: "/local-services?category=emergency-urgent",
            },
          },
          {
            title: "የአስቸኳይ ሕክምና ማዕከል (Urgent Care Centre)",
            content:
              "መጠበቅ ለማይችሉ ግን ግልጽ ድንገተኛ ላልሆኑ ብዙ የዕለቱ ችግሮች ጠቃሚ ነው።",
            icon: "clock",
            link: {
              text: "አስቸኳይ እና የዕለቱ ሕክምና",
              url: "/local-services?category=emergency-urgent&access=walk-in",
            },
          },
          {
            title: "Health811",
            content:
              "ወዴት መሄድ እንዳለብዎ እርግጠኛ ካልሆኑ የስልክ ወይም የመስመር ላይ የነርስ ምክር። የስልክ ድጋፍ በብዙ ቋንቋዎች ይገኛል።",
            icon: "info",
            link: { text: "የ Health811 ዝርዝር", url: "/local-services/health811" },
          },
          {
            title: "የአእምሮ ጤና የቀውስ ድጋፍ",
            content:
              "በማንኛውም ጊዜ 9-8-8 (Suicide Crisis Helpline) ይደውሉ ወይም ጽሑፍ ይላኩ፣ ወይም እንደ 24/7 የ AMHS-KFLA የቀውስ መስመር ያለ የአካባቢ የቀውስ ድጋፍ ይጠቀሙ።",
            icon: "heart",
            link: { text: "የአእምሮ ጤና ዝርዝሮች", url: "/local-services?category=mental-health" },
          },
          {
            title: "የወሲባዊ ጥቃት ድጋፍ",
            content:
              "ፈጣን ስሜታዊ ድጋፍ፣ ጥብቅና ወይም የደህንነት ዕቅድ ካስፈለገዎ ልዩ የቀውስ ድጋፍ ይጠቀሙ።",
            icon: "shield",
            link: {
              text: "የድጋፍ ዝርዝሮች",
              url: "/local-services?category=mental-health&q=sexual+assault",
            },
          },
          {
            title: "የተማሪ አስቸኳይ አማራጮች",
            content:
              "ተማሪ ከሆኑ ድንገተኛ ላልሆኑ ፍላጎቶች የካምፓስዎ የጤና አገልግሎት ምርጡ የመጀመሪያ ማረፊያ መሆኑን ያረጋግጡ።",
            icon: "stethoscope",
            link: { text: "የተማሪ ጤና ዝርዝሮች", url: "/local-services?audience=students" },
          },
        ],
      },
      {
        id: "what-to-do-next",
        title: "አሁንም እርግጠኛ ካልሆኑ",
        type: "callout",
        content:
          "ችግሩ ሕይወትን አደጋ ላይ የሚጥል መሆኑ ግልጽ ካልሆነ ግን መጠበቅ የሚያሳስብዎ ከሆነ በ Health811 ይጀምሩ። አንድ ሰው ደህንነቱ ላይጠበቅ የሚችል ከሆነ፣ በፍጥነት እየተባባሰ ሊሆን የሚችል ከሆነ፣ ወይም ትክክለኛውን እርዳታ በጊዜ ማግኘት ካልቻሉ የድንገተኛ አገልግሎቶችን ይጠቀሙ።",
        link: { text: "ለ Health811 ይደውሉ", url: "tel:811" },
      },
      {
        id: "bring-with-you",
        title: "ከቻሉ እነዚህን ይዘው ይምጡ",
        type: "checklist",
        items: [
          "የጤና ካርድ፣ የ IFHP ወረቀቶች ወይም ያለዎት ማንኛውም የመድን ካርድ",
          "የመድኃኒት ዝርዝር ወይም የመድኃኒት ጠርሙሶች ፎቶዎች",
          "ምልክቶቹ የጀመሩበት ጊዜ እና ያባባሳቸው ማንኛውም ነገር",
          "በኋላ በጭንቀት እንዳይረሱ የአስተርጓሚ ፍላጎትዎ ተጽፎ",
          "የስልክ ቻርጀር እና የሚረዳዎ ከሆነ አብሮዎ የሚሄድ ሰው",
        ],
      },
    ],
  },
  "get-a-family-doctor": {
    title: "የመጀመሪያ ደረጃ ሕክምና ማግኘት",
    description:
      "አስቀድሞ አቅራቢ ከሌለዎት በ Kingston ወደ መደበኛ ጤና አገልግሎት የሚወስዱ የተለያዩ መንገዶችን ይወቁ።",
    reviewed_on: "2026-03-23",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario፦ የቤተሰብ ሐኪም ወይም nurse practitioner ያግኙ",
        url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
        note: "ኦፊሴላዊ የ Health Care Connect መመሪያ።",
      },
      {
        title: "Kingston Community Health Centres",
        url: "https://kchc.ca/",
        note: "ስለ አካባቢው የማኅበረሰብ ጤና ማዕከል አገልግሎቶች ኦፊሴላዊ መረጃ።",
      },
      {
        title: "Queen's Student Wellness Services",
        url: "https://www.queensu.ca/studentwellness/",
        note: "ለ Queen's ተማሪዎች ኦፊሴላዊ የተማሪ ጤና መረጃ።",
      },
      {
        title: "St. Lawrence College Health and Wellness",
        url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
        note: "ለ St. Lawrence College ተማሪዎች ኦፊሴላዊ የተማሪ ጤና መረጃ።",
      },
    ],
    sections: [
      {
        id: "what-primary-care-means",
        title: "የመጀመሪያ ደረጃ ሕክምና ማለት ምን ማለት ነው",
        type: "default",
        content:
          "የመጀመሪያ ደረጃ ሕክምና ለመደበኛ የጤና ፍላጎቶች አብዛኛውን ጊዜ መጀመሪያ የሚሄዱበት ቦታ ነው። ይህ ምርመራዎችን (check-ups)፣ የመድኃኒት እድሳቶችን፣ የሥር የሰደደ በሽታ እንክብካቤን፣ ሪፈራሎችን፣ የመከላከያ እንክብካቤን እና ከአስቸኳይ ችግሮች በኋላ የሚደረግ ክትትልን ያካትታል።\n\nበ Kingston የመደበኛ የመጀመሪያ ደረጃ ሕክምና መንገድዎ የቤተሰብ ሐኪም፣ nurse practitioner፣ የማኅበረሰብ ጤና ማዕከል፣ የካምፓስ ክሊኒክ ወይም ይበልጥ የተረጋጋ ሕክምና እስኪያገኙ ድረስ የጊዜያዊ አማራጮች ጥምረት ሊያካትት ይችላል።",
      },
      {
        id: "access-matrix",
        title: "የመጀመሪያ ደረጃ ሕክምና መግቢያ መንገዶች",
        type: "table",
        columns: ["መንገድ", "ለምን ይመረጣል", "ማን ሊጠቀምበት ይችላል", "እንዴት እንደሚጀምሩ"],
        rows: [
          {
            cells: [
              "የቤተሰብ ሐኪም ወይም nurse practitioner",
              "ቀጣይነት ያለው መደበኛ ሕክምና እና የረጅም ጊዜ የጤና ዕቅድ",
              "ከአንድ አቅራቢ ዝርዝር ጋር መመዝገብ የሚችሉ ታካሚዎች",
              "Health Care Connect ይጠቀሙ እና የአካባቢ ክፍት ቦታዎችን ይከታተሉ",
            ],
          },
          {
            cells: [
              "የማኅበረሰብ ጤና ማዕከል",
              "በማኅበረሰብ ላይ የተመሠረተ እንክብካቤ፣ ዝቅተኛ መሰናክል ያለው ድጋፍ እና አንዳንድ የአዲስ መጤ ወይም ውስብስብ ፍላጎት እንክብካቤ",
              "ብቁነት በፕሮግራሙ እና በመግቢያ ሁኔታ ይወሰናል",
              "ድርጅቱን በቀጥታ ያግኙ እና ስለ መግቢያ ይጠይቁ",
            ],
          },
          {
            cells: [
              "የተማሪ ጤና አገልግሎት",
              "ለተመዘገቡ ተማሪዎች ፈጣን መግቢያ",
              "በትምህርት ቤቱ በኩል ብቁ የሆኑ ተማሪዎች ብቻ",
              "የካምፓስዎን የጤና ወይም የደህንነት አገልግሎት ይጠቀሙ",
            ],
          },
          {
            cells: [
              "ያለቀጠሮ ክሊኒክ ወይም አስቸኳይ የዕለቱ ሕክምና",
              "በሚጠብቁበት ጊዜ ወይም መደበኛ አቅራቢዎ በማይገኝበት ጊዜ የአጭር ጊዜ ሕክምና",
              "ለሕዝብ ሁሉ፣ በዕለታዊ የመግቢያ ሕጎች መሠረት",
              "ከመሄድዎ በፊት የአሁኑን መግቢያ ያረጋግጡ",
            ],
          },
          {
            cells: [
              "የመስመር ላይ (virtual) የመጀመሪያ ደረጃ ሕክምና",
              "አንዳንድ የመሙላት፣ የምክር እና መደበኛ ጉዳዮች",
              "በአቅራቢው እና በሽፋኑ ይለያያል",
              "አቅራቢው በመስመር ላይ ምን በደህና ማስተናገድ እንደሚችል እና እንደማይችል ያረጋግጡ",
            ],
          },
        ],
        caption:
          "ምርጡ መንገድ በብቁነትዎ፣ በአስቸኳይነቱ እና የአጭር ጊዜ ወይም ቀጣይ ሕክምና በማስፈለጉ ላይ ይወሰናል።",
      },
      {
        id: "if-you-have-no-provider",
        title: "መደበኛ አቅራቢ ከሌለዎት",
        type: "steps",
        items: [
          "በኦፊሴላዊው የክፍለ ሀገር መንገድ ይመዝገቡ: የቤተሰብ ሐኪም ወይም nurse practitioner ከሌለዎት Health Care Connect ይጠቀሙ።",
          "ለካምፓስ ወይም ለማኅበረሰብ ጤና አማራጮች ብቁ መሆንዎን ያረጋግጡ: ተማሪዎች በትምህርት ቤታቸው ክሊኒክ መጀመር አለባቸው። አንዳንድ የማኅበረሰብ ጤና አገልግሎቶች ልዩ የመግቢያ ቅድሚያዎች አሏቸው።",
          "ደህንነቱ የተጠበቀ ጊዜያዊ ዕቅድ ያውጡ: በሚጠብቁበት ጊዜ የትኞቹን ያለቀጠሮ፣ አስቸኳይ፣ የመስመር ላይ፣ የፋርማሲ እና የአእምሮ ጤና አገልግሎቶች መጠቀም እንደሚችሉ ይወቁ።",
          "የራስዎን መዝገቦች ይያዙ: የመድኃኒት ዝርዝሮችን፣ የምርመራ ውጤቶችን፣ ሪፈራሎችን እና ያዩዋቸውን ሐኪሞች ስም ያስቀምጡ።",
        ],
      },
      {
        id: "while-you-wait",
        title: "በሚጠብቁበት ጊዜ ምን ማድረግ እንዳለብዎ",
        type: "checklist",
        items: [
          "ተገቢ ሲሆን ለአጭር ጊዜ ፍላጎቶች ያለቀጠሮ፣ አስቸኳይ ወይም የመስመር ላይ ሕክምና ይጠቀሙ",
          "ምን የመሙላት እርዳታ ወይም የቀላል ሕመም እንክብካቤ ሊገኝ እንደሚችል ፋርማሲውን ይጠይቁ",
          "አንድ የተዘመነ የመድኃኒት ዝርዝር ይያዙ እና ወደ እያንዳንዱ ጉብኝት ይዘውት ይሂዱ",
          "እንክብካቤዎ የተበታተነ ሲሆን የአስፈላጊ ውጤቶችን ወይም የመውጫ ወረቀቶችን ቅጂዎች ይዘው ይምጡ",
          "ሕክምናዎ ትንሽ ይበልጥ ወጥ እንዲሆን ሲቻል ለክትትል ተመሳሳዩን ክሊኒክ ይጠቀሙ",
        ],
      },
      {
        id: "next-best-option",
        title: "ፍላጎትዎ አስቸኳይ ግን ድንገተኛ ካልሆነ",
        type: "callout",
        content:
          "የቤተሰብ ሐኪም አለመኖር አስፈላጊ ሕክምናን ማዘግየት አለብዎ ማለት አይደለም። ለፊትዎ ላለው ችግር ትክክለኛውን የአጭር ጊዜ አማራጭ ይጠቀሙ፤ ከዚያ አስቸኳዩ ችግር ከታከመ በኋላ ለቀጣይነት ዕቅድ ያውጡ።",
        link: { text: "የመጀመሪያ ደረጃ ሕክምና አማራጮችን ይፈልጉ", url: "/local-services?category=primary-care" },
      },
    ],
  },
  "costs-and-coverage": {
    title: "ወጪዎች እና ሽፋን",
    description:
      "ስለ OHIP፣ IFHP፣ Canadian Dental Care Plan፣ የተማሪ ወይም የግል ዕቅዶች እና የተለመዱ ከኪስ የሚወጡ ወጪዎች በቀላል ቋንቋ የተጻፈ የሽፋን መመሪያ።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario፦ ለ OHIP ያመልክቱ እና የጤና ካርድ ያግኙ",
        url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
        note: "ኦፊሴላዊ የ OHIP መመሪያ።",
      },
      {
        title: "Canada፦ Interim Federal Health Program (IFHP)",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
        note: "ኦፊሴላዊ የ IFHP ሽፋን መረጃ።",
      },
      {
        title: "Ontario Drug Benefit",
        url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
        note: "ኦፊሴላዊ የክፍለ ሀገር የመድኃኒት ሽፋን መመሪያ።",
      },
      {
        title: "Ontario፦ ለከፍተኛ የመድኃኒት ወጪዎች እርዳታ ያግኙ",
        url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
        note: "ኦፊሴላዊ የ Trillium Drug Program መመሪያ።",
      },
      {
        title: "Canada፦ Canadian Dental Care Plan",
        url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
        note: "ኦፊሴላዊ የፌዴራል የጥርስ ሽፋን ፕሮግራም መረጃ እና ብቁነት።",
      },
    ],
    sections: [
      {
        id: "coverage-basics",
        title: "የሽፋን መሠረታዊ ነገሮች",
        type: "default",
        content:
          "በ Ontario ሽፋን በሕጋዊ ሁኔታዎ፣ በዕድሜዎ፣ በገቢዎ፣ በፕሮግራም ብቁነትዎ እና የትምህርት ቤት ወይም የግል መድን ዕቅድ በመኖሩ ላይ ይወሰናል።\n\nብቁ ለሆኑ የ OHIP ታካሚዎች ብዙ በሕክምና አስፈላጊ የሆኑ የሐኪም እና የሆስፒታል አገልግሎቶች ይሸፈናሉ። ይህ ግን ሁሉም ነገር ነጻ ነው ማለት **አይደለም**። መድኃኒቶች፣ የጥርስ ሕክምና፣ የዓይን እንክብካቤ፣ ቅጾች፣ የሕመም ማስታወሻዎች እና ብዙ ተጓዳኝ የጤና አገልግሎቶች ብዙውን ጊዜ የተለየ ሽፋን ወይም ከኪስ ክፍያ ያስፈልጋቸዋል።\n\nአዲስ ከሆኑ መልካም ዜና አለ፦ **ለ OHIP የመጠበቂያ ጊዜ የለም**። ብቁ ከሆኑ Ontario እንደደረሱ ወዲያውኑ ማመልከት ይችላሉ፤ ማመልከቻዎ ከጸደቀ በኋላ ሽፋን ይጀምራል። ለማመልከት እስኪታመሙ አይጠብቁ።",
      },
      {
        id: "coverage-matrix",
        title: "የሽፋን መንገዶች በአንድ እይታ",
        type: "table",
        columns: [
          "የሽፋን ዓይነት",
          "አብዛኛውን ጊዜ የሚረዳው",
          "አሁንም ላይሸፈን የሚችለው",
          "ቀጥሎ ምን ማድረግ",
        ],
        rows: [
          {
            cells: [
              "OHIP",
              "ብዙ በሕክምና አስፈላጊ የሆኑ የሐኪም እና የሆስፒታል አገልግሎቶች",
              "ብዙ መድኃኒቶች፣ የጥርስ ሕክምና፣ የዓይን እንክብካቤ እና ቅጾች",
              "ብቁ ከሆኑ ያመልክቱ እና ካርድዎን ወቅታዊ ያድርጉ",
            ],
          },
          {
            cells: [
              "IFHP",
              "በፌዴራል ፕሮግራሙ መሠረት ብቁ ለሆኑ ስደተኞች እና የጥገኝነት ጠያቂዎች ሽፋን",
              "ዝርዝሮች በምድብ እና በአገልግሎት ይለያያሉ",
              "ኦፊሴላዊውን የ IFHP መመሪያ ይመልከቱ እና ክሊኒኩ ወይም ፋርማሲው እንደሚቀበለው ይጠይቁ",
            ],
          },
          {
            cells: [
              "የትምህርት ቤት ወይም የግል መድን",
              "ብዙውን ጊዜ ለመድኃኒቶች፣ ለምክር አገልግሎት፣ ለጥርስ፣ ለዓይን እና ለተጓዳኝ ጤና ይረዳል",
              "የሽፋን ገደቦች፣ የጋራ ክፍያዎች (co-pays) እና የአውታረ መረብ ሕጎች ይለያያሉ",
              "አንድ አገልግሎት ተሸፍኗል ብለው ከማሰብዎ በፊት የዕቅዱን ሰነድ ያንብቡ",
            ],
          },
          {
            cells: [
              "Canadian Dental Care Plan (CDCP)",
              "የግል የጥርስ መድን የሌላቸው እና የተስተካከለ የቤተሰብ ገቢያቸው ከ $90,000 በታች የሆኑ ብቁ ነዋሪዎች የጥርስ ሽፋን",
              "እያንዳንዱ ሕክምና አይሸፈንም፤ እንደ ገቢው የጋራ ክፍያ ሊኖር ይችላል",
              "ብቁነትን ያረጋግጡ እና በኦፊሴላዊው የ Government of Canada CDCP ገጽ በኩል ያመልክቱ",
            ],
          },
          {
            cells: [
              "ንቁ ሽፋን የለም",
              "አንዳንድ አገልግሎቶችን አሁንም ማግኘት ይችሉ ይሆናል፣ ግን ክፍያዎች ሊኖሩ ይችላሉ",
              "ለጉብኝቶች፣ ለምርመራዎች ወይም ለመድኃኒቶች ወጪዎች ከፍተኛ ሊሆኑ ይችላሉ",
              "ከጉብኝቱ በፊት ስለ ክፍያዎች ይጠይቁ እና ተገቢ ሲሆን የማኅበረሰብ አማራጮችን ይፈልጉ",
            ],
          },
        ],
      },
      {
        id: "what-is-often-not-covered",
        title: "ብዙውን ጊዜ ሙሉ በሙሉ የማይሸፈነው",
        type: "checklist",
        items: [
          "ለሕዝብ ፕሮግራም ብቁ ካልሆኑ ወይም ሌላ ዕቅድ ከሌለዎት ብዙ የሐኪም ማዘዣ መድኃኒቶች",
          "ለ Canadian Dental Care Plan፣ ለ Healthy Smiles Ontario፣ ለማኅበረሰብ የጥርስ ፕሮግራም ወይም ለጥቅማጥቅም ዕቅድ ብቁ ካልሆኑ የጥርስ ሕክምና",
          "ከተወሰኑ የብቁነት መንገዶች ውጭ የዓይን እንክብካቤ",
          "ፕሮግራም ወይም ዕቅድ ካልሸፈናቸው ፊዚዮቴራፒ፣ የምክር አገልግሎት፣ ማሳጅ እና ሌሎች ተጓዳኝ የጤና አገልግሎቶች",
          "ቅጾች፣ ደብዳቤዎች፣ የቀጠሮ መቅረት ክፍያዎች እና ሌሎች ብዙ አስተዳደራዊ ክፍያዎች",
        ],
      },
      {
        id: "drug-coverage",
        title: "የመድኃኒት ሽፋን መንገዶች",
        type: "default",
        content:
          "የመድኃኒት ሽፋን ብዙውን ጊዜ አዲስ መጤዎች የሚደነቁበት ጉዳይ ነው። የሐኪም ጉብኝት ሊሸፈን ይችላል፣ ግን መድኃኒቱ አሁንም ገንዘብ ሊያስከፍል ይችላል።\n\nየሕዝብ የመድኃኒት ፕሮግራሞች እንደ ዕድሜ፣ ገቢ እና ብቁነት ሊረዱ ይችላሉ። **Ontario Drug Benefit** ዕድሜያቸው 65 እና ከዚያ በላይ ለሆኑ ሰዎች እና በተወሰኑ ፕሮግራሞች ውስጥ ላሉ ሰዎች ብዙ መድኃኒቶችን ይሸፍናል፤ **OHIP+** ደግሞ የግል ዕቅድ ለሌላቸው ዕድሜያቸው 24 እና ከዚያ በታች ለሆኑ ሰዎች ብዙ የሐኪም ማዘዣዎችን ይሸፍናል። Ontario ከቤተሰብ ገቢ ጋር ሲነጻጸር ከፍተኛ የመድኃኒት ወጪ ላላቸው አንዳንድ ሰዎች **Trillium Drug Program** አለው። የትምህርት ቤት ወይም የግል ዕቅድ ካለዎት ከሕዝብ ሽፋን ጋር እንደሚቀናጅ ወይም እንደሚተካው ያረጋግጡ።",
      },
      {
        id: "coverage-scenarios",
        title: "የተለመዱ የሽፋን ጥያቄዎች",
        type: "faq",
        faqs: [
          {
            question: "ገና OHIP የለኝም። አሁንም ሕክምና ማግኘት እችላለሁ?",
            answer:
              "አዎ፣ ግን ክፍያዎች ሊኖሩ ይችላሉ፤ ምርጡ መንገድ በሁኔታዎ እና በአስቸኳይነቱ ላይ ይወሰናል። ሲቻል ድንገተኛ ላልሆነ ሕክምና አስቀድመው ስለ ወጪዎች ይጠይቁ፤ የሚመለከትዎ ከሆነም የ IFHP ወይም የትምህርት ቤት ወይም የግል ዕቅድ ብቁነትን ይመልከቱ።",
          },
          {
            question: "ዓለም አቀፍ ተማሪ ነኝ። OHIP ብቸኛ አማራጬ ነው?",
            answer:
              "ሁልጊዜ አይደለም። ብዙ ተማሪዎች ከ OHIP ይልቅ በትምህርት ቤት ወይም በግል መድን ዕቅድ ይተማመናሉ። ምን እንደሚሸፈን ለማረጋገጥ የትምህርት ቤትዎን ኦፊሴላዊ የዕቅድ ሰነዶች እና የተማሪ ጤና አገልግሎቶች ይጠቀሙ።",
          },
          {
            question: "ቀጠሮዬ ከተሸፈነ መድኃኒቴ ነጻ ይሆናል?",
            answer:
              "የግድ አይደለም። የቀጠሮ ሽፋን እና የመድኃኒት ሽፋን ብዙውን ጊዜ የተለያዩ ናቸው።",
          },
          {
            question: "የጥርስ ሕክምና ይሸፈናል?",
            answer:
              "ለአብዛኞቹ አዋቂዎች የጥርስ ሕክምና ከ OHIP የተለየ ነው። የፌዴራል Canadian Dental Care Plan አሁን የግል የጥርስ መድን የሌላቸውን እና የተስተካከለ የቤተሰብ ገቢያቸው ከ $90,000 በታች የሆኑ ብዙ ነዋሪዎችን ይሸፍናል — ለመብቃት ብዙውን ጊዜ የ Canada የግብር ማመልከቻ አስገብተው መሆን አለብዎ። ዝቅተኛ ገቢ ባላቸው ቤተሰቦች ውስጥ ያሉ ልጆች ለ Healthy Smiles Ontario ብቁ ሊሆኑ ይችላሉ፤ Kingston ደግሞ በተወሰኑ ፕሮግራሞች ውስጥ ላሉ ሰዎች የማኅበረሰብ የጥርስ ክሊኒክ አላት።",
          },
          {
            question: "አንድ አገልግሎት የሕዝብ፣ የማኅበረሰብ ወይም የግል መሆኑን እንዴት አውቃለሁ?",
            answer:
              "የማውጫውን ማጣሪያዎች ይጠቀሙ እና የዝርዝሩን ዝርዝሮች ይመልከቱ። እርግጠኛ ካልሆኑ ቀጠሮ ከመያዝዎ በፊት አገልግሎቱን ያግኙ።",
          },
        ],
      },
    ],
  },
  "your-visit": {
    title: "የጤና ጉብኝትዎ",
    description:
      "በጤና ጉብኝት ወቅት ምን መያዝ እንዳለብዎ፣ ጥያቄዎችን እንዴት እንደሚጠይቁ እና እንዴት በደህና እንደሚግባቡ።",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Ontario፦ በ Ontario ያለ የጤና እንክብካቤ",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "አጠቃላይ የሥርዓት መመሪያ።",
      },
    ],
    sections: [
      {
        id: "what-to-bring",
        title: "ምን መያዝ እንዳለብዎ",
        type: "checklist",
        items: [
          "የጤና ካርድዎ፣ የ IFHP ወረቀቶችዎ ወይም ሌላ የመድን መረጃ",
          "ቫይታሚኖችን እና ያለማዘዣ የሚገዙ መድኃኒቶችን ጨምሮ ሙሉ የመድኃኒት ዝርዝር",
          "የምልክቶቹ ስሞች፣ መቼ እንደጀመሩ እና ምን እንደተለወጠ",
          "ከመውጣትዎ በፊት መልስ የሚፈልጓቸው ጥያቄዎች",
          "ማንኛውም የቅርብ ጊዜ requisitions፣ ሪፈራሎች፣ የመውጫ ወረቀቶች ወይም የምርመራ ውጤቶች",
          "መጠየቅዎን እንዳይረሱ የአስተርጓሚ ፍላጎትዎ ተጽፎ",
        ],
      },
      {
        id: "during-the-visit",
        title: "በጉብኝቱ ወቅት",
        type: "steps",
        items: [
          "በዋናው ችግርዎ ይጀምሩ: ብዙ ቀጠሮዎች አጭር ናቸው፤ ስለዚህ ዛሬ በጣም በሚያሳስብዎ ጉዳይ ይጀምሩ።",
          "ቀላል ቋንቋ ይጠቀሙ: 'ያ ቃል አልገባኝም' ወይም 'በቀላል መንገድ ሊያብራሩልኝ ይችላሉ?' ማለት ችግር የለውም።",
          "ዕቅዱን መልሰው ይናገሩ: ምርመራ፣ ሪፈራል፣ መድኃኒት መሙላት ወይም የክትትል ቀጠሮ እንደሚያስፈልግዎ ለማወቅ ከመውጣትዎ በፊት ቀጣዮቹን እርምጃዎች ጮክ ብለው ይናገሩ።",
          "ነገሮች ቢባባሱ ምን ማድረግ እንዳለብዎ ይጠይቁ: መቼ መልሰው መደወል እንዳለብዎ፣ መቼ አስቸኳይ ሕክምና መጠቀም እንዳለብዎ እና መቼ የድንገተኛ ሕክምና መጠቀም እንዳለብዎ ማወቅ አለብዎ።",
        ],
      },
      {
        id: "interpreter-help",
        title: "የአስተርጓሚ እና የመግባቢያ እርዳታ",
        type: "default",
        content:
          "የቋንቋ እርዳታ ካስፈለገዎ ቀድመው ይጠይቁ። እስከ ቀጠሮው መጨረሻ አይጠብቁ። ይህን ድረ-ገጽ የቋንቋ ምናሌውን በመጠቀም በብዙ ቋንቋዎች ማንበብ ይችላሉ፤ ነገር ግን የድረ-ገጽ ትርጉም ለሕክምና ውሳኔዎች፣ ለመድኃኒት መመሪያዎች ወይም ለፈቃድ የአስተርጓሚ ድጋፍን መተካት የለበትም።\n\n**'እባክዎ አስተርጓሚ እፈልጋለሁ።'** ማለት ይችላሉ። Health811 (811 ይደውሉ) ደግሞ በብዙ ቋንቋዎች የስልክ ድጋፍ ይሰጣል። አብሮዎ የሚመጣ ደጋፊ ሰው ካለ፣ የቤተሰብ አባል ውስብስብ ወይም ሚስጥራዊ የሕክምና መረጃን ለመተርጎም ሁልጊዜ ምርጡ ወይም በጣም አስተማማኙ ሰው ላይሆን እንደሚችል ያስታውሱ።",
      },
      {
        id: "questions-to-ask",
        title: "መጠየቅ የሚገባቸው ጥያቄዎች",
        type: "checklist",
        items: [
          "ምን እየሆነ ነው ብለው ያስባሉ?",
          "ቀጥሎ ምን ማድረግ አለብኝ?",
          "ምርመራ፣ requisition፣ ሪፈራል ወይም የክትትል ጉብኝት ያስፈልገኛል?",
          "ውጤቶችን መቼ መስማት እጠብቃለሁ?",
          "የትኞቹ ማስጠንቀቂያ ምልክቶች መልሼ መደወል ወይም አስቸኳይ እርዳታ ማግኘት እንዳለብኝ ያሳያሉ?",
        ],
      },
      {
        id: "privacy",
        title: "ግላዊነት እና ፈቃድ",
        type: "default",
        content:
          "የጤና መረጃዎ ሚስጥራዊ ነው። መረጃዎን ማን እንደሚያይ እርግጠኛ ካልሆኑ ይጠይቁ። አንድ ቅጽ፣ የፈቃድ ንግግር ወይም የሕክምና ዕቅድ ካልገባዎ ሂደቱን ያዘግዩ እና ይበልጥ ግልጽ ማብራሪያ ይጠይቁ።",
      },
    ],
  },
  "after-visit": {
    title: "ከጉብኝቱ በኋላ",
    description:
      "ከጉብኝት በኋላ ምን እንደሚሆን ይወቁ፤ requisitions (የምርመራ ማዘዣዎች)፣ የምርመራ ውጤቶች፣ ሪፈራሎች እና መቼ መልሰው መደወል እንዳለብዎ ጨምሮ።",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Kingston Health Sciences Centre",
        url: "https://kingstonhsc.ca/",
        note: "የአካባቢ የሆስፒታል ሥርዓት መረጃ።",
      },
      {
        title: "LifeLabs",
        url: "https://www.lifelabs.com/",
        note: "የማኅበረሰብ ላቦራቶሪ ሂደት እና የታካሚ ፖርታል መረጃ።",
      },
    ],
    sections: [
      {
        id: "results-journey",
        title: "ከጉብኝት በኋላ ብዙውን ጊዜ የሚሆነው",
        type: "steps",
        items: [
          "ከዕቅድ ጋር ይወጣሉ: ይህ መድኃኒት፣ requisition፣ ሪፈራል፣ የክትትል ቀጠሮ ወይም የማስጠንቀቂያ ምልክቶችን የመከታተል መመሪያ ሊያካትት ይችላል።",
          "ቀጣዩን እርምጃ እራስዎ ማድረግ ሊኖርብዎ ይችላል: ለምሳሌ የደም ምርመራ፣ የምስል ምርመራ፣ ከፋርማሲ መድኃኒት መውሰድ ወይም የክትትል ጉብኝት ቀጠሮ መያዝ ሊኖርብዎ ይችላል።",
          "ውጤቶች ብዙውን ጊዜ ወዳዘዘው ሐኪም ይመለሳሉ: ላቦራቶሪው ወይም የምስል ምርመራ ቦታው ውጤቱን ወዲያውኑ ላያብራራልዎ ይችላል።",
          "ለእያንዳንዱ መደበኛ ውጤት ጥሪ ላያገኙ ይችላሉ: ምን እንደሚጠብቁ እንዲያውቁ የክሊኒኩ የክትትል ሂደት ምን እንደሆነ ይጠይቁ።",
        ],
      },
      {
        id: "common-terms",
        title: "የተለመዱ ከጉብኝት በኋላ ቃላት",
        type: "table",
        columns: ["ቃል", "በቀላል ቋንቋ ምን ማለት ነው", "ብዙውን ጊዜ ቀጥሎ የሚያደርጉት"],
        rows: [
          {
            cells: [
              "Requisition (የምርመራ ማዘዣ)",
              "ለላቦራቶሪ ወይም ለምስል ምርመራ ክሊኒክ ምን ምርመራ እንደሚያስፈልግዎ የሚነግር ቅጽ",
              "ምርመራውን ቀጠሮ ይያዙ ወይም ይገኙ፤ ከቻሉም ቅጂ ያስቀምጡ",
            ],
          },
          {
            cells: [
              "ሪፈራል (Referral)",
              "ከአንድ ሐኪም ወደ ሌላ አገልግሎት ወይም ስፔሻሊስት የሚደረግ ጥያቄ",
              "ግንኙነት ይጠብቁ፤ ክትትል እንዲያደርጉ ተነግሮዎት ምንም ካልሆነ መልሰው ይደውሉ",
            ],
          },
          {
            cells: [
              "ክትትል (Follow-up)",
              "ከሕክምና፣ ከምርመራ ወይም ከምልክት ለውጥ በኋላ የሚደረግ መከታተያ",
              "ከመውጣትዎ በፊት ክትትሉ መቼ እና እንዴት መሆን እንዳለበት ይጠይቁ",
            ],
          },
        ],
      },
      {
        id: "when-to-call-back",
        title: "መቼ መልሰው እንደሚደውሉ",
        type: "checklist",
        items: [
          "requisition፣ ሪፈራሉ ወይም የመድኃኒቱ መመሪያዎች ካልገቡዎ",
          "አንድ ሰው ያገኝዎታል ተብለው በተጠበቀው ጊዜ ውስጥ ምንም ካልሰሙ",
          "ምልክቶችዎ እየተባባሱ ከሆነ ወይም እንደተነገረዎ እየተሻሻሉ ካልሆነ",
          "ፋርማሲው፣ ላቦራቶሪው ወይም የምስል ምርመራ ክሊኒኩ ከወረቀቶቹ የጎደለ ነገር አለ ካሉ",
          "አንድ ውጤት ታልፎ ሊሆን ይችላል ብለው ካሰቡ ወይም አሁንም የሚያሳስብዎ ከሆነ",
        ],
      },
      {
        id: "after-visit-scenarios",
        title: "የተለመዱ ሁኔታዎች",
        type: "faq",
        faqs: [
          {
            question: "ከጉብኝት በኋላ የደም ምርመራ እፈልጋለሁ። ምን ላድርግ?",
            answer:
              "requisition እንዳለዎ እና ላቦራቶሪው ቀጠሮ መያዝ እንደሚፈልግ ያረጋግጡ። ከዚያ የላቦራቶሪ ቦታ ለማግኘት ማውጫውን ይጠቀሙ። requisition እና የሽፋን መረጃዎን ይዘው ይምጡ።",
          },
          {
            question: "requisition ወይም የሪፈራል ቅጹ አልገባኝም።",
            answer:
              "ለሰጠዎት ክሊኒክ ይደውሉ እና በቀላል ቋንቋ እንዲያብራሩልዎ ይጠይቁ። ቅጹ ለምን እንደሆነ፣ ወዴት መሄድ እንዳለበት እና እራስዎ ቀጠሮ መያዝ እንዳለብዎ መጠየቅ ተገቢ ነው።",
          },
          {
            question: "የምርመራ ውጤቶችን ማን ይከታተላል?",
            answer:
              "ብዙውን ጊዜ ምርመራውን ያዘዘው ሐኪም ነው። ለመደበኛ እና መደበኛ ላልሆኑ ውጤቶች የተለመደው ሂደታቸው ምን እንደሆነ የዚያን ሐኪም ቢሮ ይጠይቁ።",
          },
          {
            question: "ሪፈራሎች ምን ያህል ጊዜ ይወስዳሉ?",
            answer:
              "የሪፈራል ጊዜዎች በጣም ይለያያሉ። ለሁኔታዎ ምን ዓይነት መጠበቅ የተለመደ እንደሆነ እና መልስ ካላገኙ ምን ማድረግ እንዳለብዎ ይጠይቁ።",
          },
        ],
      },
      {
        id: "next-step-links",
        title: "ጠቃሚ ቀጣይ እርምጃዎች",
        type: "grid",
        gridItems: [
          {
            title: "ላቦራቶሪዎችን እና የምስል ምርመራ ያግኙ",
            content:
              "ለደም ምርመራ፣ ራጅ (X-ray)፣ አልትራሳውንድ እና የምስል ምርመራ ዝርዝሮች ማውጫውን ይጠቀሙ።",
            icon: "file",
            link: { text: "ላቦራቶሪዎች እና የምስል ምርመራ", url: "/local-services?category=labs-imaging" },
          },
          {
            title: "ፋርማሲ ያግኙ",
            content:
              "ለፋርማሲዎች፣ ለመሙላት እርዳታ እና ለመድኃኒት ድጋፍ ማውጫውን ይጠቀሙ።",
            icon: "shield",
            link: { text: "ፋርማሲዎች", url: "/local-services?category=pharmacies" },
          },
          {
            title: "የክትትል ሕክምና ማቀድ ይፈልጋሉ?",
            content:
              "የረጅም ጊዜ ክትትል የት መሆን እንዳለበት ካላወቁ የመጀመሪያ ደረጃ ሕክምና ገጹን ይጠቀሙ።",
            icon: "stethoscope",
            link: { text: "የመጀመሪያ ደረጃ ሕክምና ያግኙ", url: "/get-a-family-doctor" },
          },
        ],
      },
    ],
  },
  "medicines-and-pharmacies": {
    title: "መድኃኒቶች እና ፋርማሲዎች",
    description:
      "የሐኪም ማዘዣዎችን፣ መድኃኒት መሙላትን፣ የፋርማሲስት እርዳታን እና በ Ontario ለመድኃኒቶች እንዴት እንደሚከፈል ይረዱ።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario፦ ፋርማሲስቶች ምን ማድረግ ይችላሉ",
        url: "https://www.ontario.ca/page/pharmacies",
        note: "ኦፊሴላዊ የክፍለ ሀገር የፋርማሲስት እና የፋርማሲ መረጃ።",
      },
      {
        title: "Ontario Drug Benefit",
        url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
        note: "ኦፊሴላዊ የክፍለ ሀገር የመድኃኒት ሽፋን መመሪያ።",
      },
      {
        title: "Ontario፦ ለከፍተኛ የመድኃኒት ወጪዎች እርዳታ ያግኙ",
        url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
        note: "ኦፊሴላዊ የ Trillium Drug Program መመሪያ።",
      },
    ],
    sections: [
      {
        id: "pharmacist-role",
        title: "ፋርማሲስት በምን ሊረዳ ይችላል",
        type: "default",
        content:
          "ፋርማሲስቶች መድኃኒት ከመስጠት በላይ ይሠራሉ። መድኃኒትን እንዴት በደህና እንደሚወስዱ ማብራራት፣ የመድኃኒት መስተጋብሮችን ማረጋገጥ እና የጎንዮሽ ጉዳቶችን መገምገም ይችላሉ።\n\nበ Ontario ፋርማሲስቶች **ለ19 የተለመዱ ቀላል ሕመሞች መገምገም እና ማዘዝ** ይችላሉ — የዓይን መቅላት (pink eye)፣ የከንፈር ቁስለት (cold sores)፣ የሽንት መተላለፊያ ኢንፌክሽን (በሴቶች)፣ የነፍሳት ንክሻ እና ወቅታዊ አለርጂዎችን ጨምሮ። ግምገማው በ Ontario የጤና ካርድዎ ነጻ ነው፤ የሕመሞቹ ዝርዝርም መስፋቱን ሊቀጥል ይችላል።\n\nፋርማሲ ደግሞ እንደነዚህ ያሉ ተግባራዊ ጥያቄዎችን ለመጠየቅ ከምርጥ ቦታዎች አንዱ ነው፦ **ይህ መሙላት አስቸኳይ ነው? የበለጠ ርካሽ አማራጭ አለ? መጠን ካመለጠኝ ምን ማድረግ አለብኝ?**",
      },
      {
        id: "fill-a-prescription",
        title: "የሐኪም ማዘዣ እንዴት እንደሚሞሉ",
        type: "steps",
        items: [
          "ማዘዣውን ያግኙ: በወረቀት፣ በፋክስ ወይም በኤሌክትሮኒክ መንገድ ሊላክ ይችላል።",
          "ፋርማሲውን ይምረጡ: ተመሳሳዩን ፋርማሲ በመደበኛነት መጠቀም የመድኃኒት መስተጋብሮችን እና የመሙላት ታሪክ ችግሮችን እንዲይዙ ይረዳቸዋል።",
          "ስለ ጊዜ እና ወጪ ይጠይቁ: ፋርማሲው መቼ ዝግጁ እንደሚሆን እና ዕቅድዎ እንደሚሸፍነው ሊነግርዎ ይችላል።",
          "ምክሩን ያዳምጡ: መድኃኒቱ ለምን እንደሆነ፣ እንዴት እንደሚወስዱት እና ካልረዳ መቼ መልሰው መደወል እንዳለብዎ ይጠይቁ።",
        ],
      },
      {
        id: "refill-options",
        title: "የመሙላት እና የመድኃኒት ችግሮች",
        type: "table",
        columns: ["ሁኔታ", "ጥሩ የመጀመሪያ እርምጃ", "ለምን"],
        rows: [
          {
            cells: [
              "መደበኛ መሙላት እፈልጋለሁ",
              "በተለመደው ፋርማሲዎ ወይም በመደበኛ ሐኪምዎ ይጀምሩ",
              "መሙላት፣ እድሳት ወይም አዲስ ቀጠሮ እንደሚያስፈልግ ሊነግሩዎ ይችላሉ",
            ],
          },
          {
            cells: [
              "ሐኪሜ አይገኝም፤ መድኃኒቴ ሊያልቅ ይችላል",
              "ምን አማራጮች እንዳሉ ፋርማሲውን ይጠይቁ፤ ካስፈለገም ያለቀጠሮ፣ የመስመር ላይ ወይም አስቸኳይ ሕክምና ይጠቀሙ",
              "በጣም አስተማማኙ ቀጣይ እርምጃ በመድኃኒቱ እና በሁኔታዎ ላይ ይወሰናል",
            ],
          },
          {
            cells: [
              "ይህን መድኃኒት እንዴት እንደምወስድ አልገባኝም",
              "ፋርማሲስቱ በቀላል ቋንቋ እንደገና እንዲያብራራልዎ ይጠይቁ",
              "ይህ የአስተማማኝ የመድኃኒት አጠቃቀም አካል ነው",
            ],
          },
          {
            cells: [
              "መድኃኒቱ በጣም ውድ ነው",
              "ስለ ጄነሪክ (generic) ስሪቶች፣ የዕቅድ ሽፋን እና የሕዝብ ፕሮግራሞች ይጠይቁ",
              "የመድኃኒት ወጪዎች ይለያያሉ፤ ሽፋንም ብዙውን ጊዜ ከጉብኝቱ ራሱ የተለየ ነው",
            ],
          },
        ],
      },
      {
        id: "paying-for-medicines",
        title: "መድኃኒቶች ሊከፈሉ የሚችሉባቸው መንገዶች",
        type: "checklist",
        items: [
          "ብቁ ከሆኑ የሕዝብ የመድኃኒት ፕሮግራም",
          "የትምህርት ቤት ወይም የግል መድን ዕቅድ",
          "የሕዝብ እና የግል ሽፋን ጥምረት",
          "ምንም ፕሮግራም መድኃኒቱን ካልሸፈነ ከኪስ",
        ],
      },
      {
        id: "pharmacy-links",
        title: "የአካባቢ ፋርማሲ እርዳታ ይፈልጋሉ?",
        type: "callout",
        content:
          "የመድኃኒት ችግርን በፍጥነት ለመፍታት ሲሞክሩ ፋርማሲዎችን፣ የመሙላት ድጋፍን እና የመስመር ላይ ወይም የዕለቱ አማራጮችን ለማግኘት ማውጫውን ይጠቀሙ።",
        link: { text: "የፋርማሲ ዝርዝሮችን ይፈልጉ", url: "/local-services?category=pharmacies" },
      },
    ],
  },
  "mental-health": {
    title: "የአእምሮ ጤና ድጋፍ",
    description:
      "በ Kingston የአካባቢ የአእምሮ ጤና፣ የምክር አገልግሎት፣ የወጣቶች ድጋፍ እና የቀውስ መንገዶች።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "9-8-8፦ Suicide Crisis Helpline (የራስን ሕይወት ማጥፋት ቀውስ መስመር)",
        url: "https://988.ca/",
        note: "ኦፊሴላዊ ብሔራዊ የራስን ሕይወት ማጥፋት ቀውስ የእርዳታ መስመር። 9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ፤ ነጻ፣ 24/7።",
      },
      {
        title: "AMHS-KFLA",
        url: "https://www.amhs-kfla.ca/",
        note: "ኦፊሴላዊ የአዋቂዎች የአእምሮ ጤና እና የቀውስ ድጋፍ መረጃ።",
      },
      {
        title: "ConnexOntario",
        url: "https://www.connexontario.ca/",
        note: "ኦፊሴላዊ የ Ontario የአእምሮ ጤና እና የሱስ የእርዳታ መስመር።",
      },
      {
        title: "Maltby Centre",
        url: "https://maltbycentre.ca/",
        note: "ኦፊሴላዊ የሕፃናት እና ወጣቶች የአእምሮ ጤና መረጃ።",
      },
    ],
    sections: [
      {
        id: "crisis",
        title: "አንድ ሰው ደህንነቱ ላይጠበቅ የሚችል ከሆነ",
        type: "callout",
        content:
          "ለሕይወት ወይም ለደህንነት ፈጣን አደጋ ካለ 911 ይደውሉ። ለራስን ማጥፋት ሐሳቦች ወይም ለከባድ ጭንቀት በማንኛውም ጊዜ **9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ** (Suicide Crisis Helpline) — ነጻ፣ ሚስጥራዊ እና በ24/7 በእንግሊዝኛ እና በፈረንሳይኛ ይገኛል። እንዲሁም በ 613-544-4229 ለ24/7 የ AMHS-KFLA ቀውስ መስመር መደወል ይችላሉ። መደበኛ ቀጠሮ አይጠብቁ።",
        link: { text: "የአእምሮ ጤና ዝርዝሮች", url: "/local-services?category=mental-health" },
      },
      {
        id: "support-types",
        title: "የድጋፍ ዓይነቶች",
        type: "grid",
        gridItems: [
          {
            title: "የቀውስ ድጋፍ",
            content:
              "ለፈጣን ጭንቀት፣ ለደህንነት ስጋቶች ወይም መጠበቅ አስተማማኝ ካልሆነ ይህን ይጠቀሙ።",
            icon: "alert",
          },
          {
            title: "አስቸኳይ ድጋፍ",
            content:
              "ሁኔታው ከባድ ሲሆን እና በቅርቡ እርዳታ ሲያስፈልግዎ፣ ግን ፈጣን ሕይወትን አደጋ ላይ የሚጥል ድንገተኛ ካልሆነ ይህን ይጠቀሙ።",
            icon: "clock",
          },
          {
            title: "መደበኛ የምክር አገልግሎት",
            content:
              "ለቀጣይ ጭንቀት፣ ድብርት፣ ውጥረት፣ ሐዘን፣ የግንኙነት ችግሮች ወይም የሕይወት ሽግግሮች ይህን ይጠቀሙ።",
            icon: "heart",
          },
          {
            title: "የሕፃናት እና ወጣቶች አገልግሎቶች",
            content:
              "እንክብካቤ የሚፈልገው ሰው ሕፃን ወይም ታዳጊ ሲሆን ልዩ የወጣቶች የአእምሮ ጤና አገልግሎቶችን ይጠቀሙ።",
            icon: "info",
          },
          {
            title: "የካምፓስ ድጋፍ",
            content:
              "ተማሪዎች መጀመሪያ በካምፓሳቸው የደህንነት ወይም የምክር መንገዶች በተሻለ ሊስተናገዱ ይችላሉ።",
            icon: "stethoscope",
          },
          {
            title: "የወሲባዊ ጥቃት ድጋፍ",
            content:
              "ከወሲባዊ ጥቃት በኋላ ለቀውስ፣ ለምክር አገልግሎት፣ ለጥብቅና እና ለደህንነት ዕቅድ ልዩ ድጋፍ ይጠቀሙ።",
            icon: "shield",
          },
        ],
      },
      {
        id: "where-to-start",
        title: "በተለመዱ ሁኔታዎች ከየት እንደሚጀምሩ",
        type: "table",
        columns: ["ሁኔታ", "ምርጥ የመጀመሪያ ማረፊያ", "ለምን"],
        rows: [
          {
            cells: [
              "ዛሬ ማታ የአእምሮ ጤና እርዳታ እፈልጋለሁ",
              "9-8-8 ይደውሉ ወይም ጽሑፍ ይላኩ፣ ለ AMHS-KFLA ቀውስ መስመር ይደውሉ፣ ወይም ደህንነት አደጋ ላይ ከሆነ የድንገተኛ ሕክምና ይጠቀሙ",
              "ሁኔታው አስተማማኝ ካልመሰለ መደበኛ ቀጠሮ አይጠብቁ",
            ],
          },
          {
            cells: [
              "ምክር እፈልጋለሁ ግን አሁን ደህና ነኝ",
              "የማኅበረሰብ ምክር አገልግሎት፣ የቤተሰብ ሐኪም፣ nurse practitioner ወይም የግል ዕቅድ ድጋፎች",
              "እነዚህ ለቀጣይ እንክብካቤ እና ለሪፈራሎች ሊረዱ ይችላሉ",
            ],
          },
          {
            cells: [
              "ለልጄ እርዳታ እፈልጋለሁ",
              "የሕፃናት ወይም የወጣቶች የአእምሮ ጤና አገልግሎቶች እና ካስፈለገም የአስቸኳይ መመሪያ",
              "ሕፃናት እና ወጣቶች ብዙውን ጊዜ የተለዩ መንገዶች አሏቸው",
            ],
          },
          {
            cells: [
              "ተማሪ ነኝ",
              "ሁኔታው አስተማማኝ ካልሆነ ወይም ከባድ ካልሆነ በስተቀር መጀመሪያ የካምፓስ ጤና ወይም ምክር አገልግሎት",
              "የካምፓስ አገልግሎቶች ለተማሪዎች ፈጣኑ መግቢያ ሊሆኑ ይችላሉ",
            ],
          },
        ],
      },
      {
        id: "mental-health-scenarios",
        title: "የተለመዱ ጥያቄዎች",
        type: "faq",
        faqs: [
          {
            question: "አሁኑኑ ለማን መደወል ወይም ጽሑፍ መላክ እችላለሁ?",
            answer:
              "በማንኛውም ጊዜ **9-8-8** (Suicide Crisis Helpline) ይደውሉ ወይም ጽሑፍ ይላኩ — ነጻ፣ 24/7፣ ሪፈራል አያስፈልግም። በ Kingston የ AMHS-KFLA ቀውስ መስመር በ 613-544-4229 ደግሞ በ24/7 ይመልሳል። ደህንነት ፈጣን አደጋ ላይ ከሆነ 911 ይደውሉ።",
          },
          {
            question: "ይህ ቀውስ ይቆጠር እንደሆነ ካላወቅሁስ?",
            answer:
              "አንድ ሰው ደህንነቱ ላይጠበቅ የሚችል ከሆነ እርግጠኝነትን አይጠብቁ። የቀውስ ድጋፍ ወይም የድንገተኛ አገልግሎቶችን ይጠቀሙ።",
          },
          {
            question: "ዛሬ ማታ እርዳታ ካስፈለገኝ ግን ለማን መደወል እንዳለብኝ እርግጠኛ ካልሆንኩስ?",
            answer:
              "እስከ ጠዋት ከመጠበቅ ይልቅ የአካባቢውን የአእምሮ ጤና ማውጫ ገጽ ወይም የቀውስ ድጋፍ መንገድ ይጠቀሙ።",
          },
          {
            question: "እርዳታ የሚፈልገው ልጄ ከሆነስ?",
            answer:
              "በተለይ የሕፃናት እና ወጣቶች አገልግሎቶችን ይፈልጉ። የወጣቶች የአእምሮ ጤና መንገዶች ብዙውን ጊዜ ከአዋቂዎች እንክብካቤ የተለዩ ናቸው።",
          },
        ],
      },
    ],
  },
  "screening-prevention": {
    title: "ቅድመ ምርመራ እና መከላከል",
    description:
      "በ Ontario የመከላከያ እንክብካቤ፣ ክትባቶች እና ቅድመ ምርመራ (screening) መሠረታዊ ነገሮችን ይወቁ።",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "KFL&A Public Health",
        url: "https://www.kflaph.ca/",
        note: "የአካባቢ ክትባት እና የሕዝብ ጤና መረጃ።",
      },
      {
        title: "Ontario፦ በ Ontario ያለ የጤና እንክብካቤ",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "አጠቃላይ የጤና አገልግሎት መመሪያ።",
      },
    ],
    sections: [
      {
        id: "prevention-basics",
        title: "የመከላከያ እንክብካቤ ለምን አስፈላጊ ነው",
        type: "default",
        content:
          "የመከላከያ እንክብካቤ ማለት ችግሮችን ቀድሞ ለመያዝ ወይም ይበልጥ ከመባባሳቸው በፊት ለማስቆም መሞከር ነው። ይህ ክትባቶችን፣ የቅድመ ምርመራ (screening) ምርመራዎችን፣ መደበኛ የደም ግፊት ምርመራዎችን እና ከሐኪም ጋር ስለ ስጋት ምክንያቶች የሚደረጉ ንግግሮችን ያካትታል።",
      },
      {
        id: "common-prevention",
        title: "የተለመዱ የመከላከል ተግባራት",
        type: "checklist",
        items: [
          "ክትባቶችዎን ወቅታዊ ያድርጉ",
          "ለዕድሜዎ ወይም ለጤና ታሪክዎ የቅድመ ምርመራ ምርመራዎች ይመከራሉ ወይ ብለው ይጠይቁ",
          "ስለ ደም ግፊት፣ የስኳር በሽታ ወይም ሌሎች ስጋት ምክንያቶች ጥያቄዎችዎን ወደ መደበኛ ጉብኝቶች ይዘው ይምጡ",
          "የክትባት ወይም የመከላከል መረጃ ሲያስፈልግዎ የሕዝብ ጤና ሀብቶችን ይጠቀሙ",
        ],
      },
      {
        id: "prevention-next",
        title: "የአካባቢ የመከላከል አገልግሎቶች ይፈልጋሉ?",
        type: "callout",
        content:
          "በ Kingston ተጨባጭ መነሻ ቦታ ካስፈለገዎ ለሕዝብ ጤና፣ ለቅድመ ምርመራ እና ለፋርማሲ ዝርዝሮች የአካባቢ አገልግሎቶች ማውጫን ይጠቀሙ።",
        link: {
          text: "የሕዝብ ጤና እና የፋርማሲ ዝርዝሮች",
          url: "/local-services?category=public-health",
        },
      },
    ],
  },
  "community-allied-health": {
    title: "ተጓዳኝ እና የማኅበረሰብ እንክብካቤ",
    description:
      "የቤት እንክብካቤን፣ የጥርስ ሕክምናን፣ ተሃድሶን (rehab)፣ የምክር አገልግሎትን፣ የዓይን ድጋፍን እና ምን የሕዝብ፣ የማኅበረሰብ፣ የተማሪ ወይም የግል ሊሆን እንደሚችል ለመረዳት ይህን ገጽ ይጠቀሙ።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario Health atHome",
        url: "https://ontariohealthathome.ca/",
        note: "ኦፊሴላዊ የቤት እና የማኅበረሰብ እንክብካቤ ማስተባበሪያ መረጃ።",
      },
      {
        title: "Canada፦ Canadian Dental Care Plan",
        url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
        note: "ኦፊሴላዊ የፌዴራል የጥርስ ሽፋን ፕሮግራም መረጃ እና ብቁነት።",
      },
      {
        title: "Kingston Community Health Centres",
        url: "https://kchc.ca/",
        note: "ኦፊሴላዊ የማኅበረሰብ እና የጥርስ አገልግሎት መረጃ።",
      },
      {
        title: "CNIB Foundation",
        url: "https://www.cnib.ca/",
        note: "ኦፊሴላዊ የዓይን ድጋፍ መረጃ።",
      },
    ],
    sections: [
      {
        id: "what-allied-means",
        title: "ተጓዳኝ እና የማኅበረሰብ እንክብካቤ ማለት ምን ማለት ነው",
        type: "default",
        content:
          "ተጓዳኝ ጤና (allied health) ማለት እንደ ፊዚዮቴራፒስቶች፣ occupational therapists (የሥራ-ተኮር ቴራፒስቶች)፣ የአመጋገብ ባለሙያዎች፣ ማኅበራዊ ሠራተኞች፣ አማካሪዎች፣ የጥርስ ሐኪሞች ወይም የዓይን ድጋፍ ቡድኖች ካሉ ባለሙያዎች የሚገኝ እንክብካቤ ነው። የማኅበረሰብ እንክብካቤ ብዙውን ጊዜ ከሆስፒታል ውጭ የሚደረግ እንክብካቤ ማለት ነው — አንዳንዴ በቤትዎ፣ በትምህርት ቤት፣ በክሊኒክ ወይም በማኅበረሰብ ፕሮግራም ውስጥ።",
      },
      {
        id: "access-payment-matrix",
        title: "የመግቢያ እና የክፍያ ሰንጠረዥ",
        type: "table",
        columns: ["መንገድ", "ምሳሌዎች", "ክፍያ ብዙውን ጊዜ እንዴት እንደሚሠራ", "እንዴት እንደሚጀምሩ"],
        rows: [
          {
            cells: [
              "በመንግሥት የሚሸፈን የቤት እና የማኅበረሰብ እንክብካቤ",
              "የቤት ነርሲንግ፣ የቤት ቴራፒ፣ የእንክብካቤ ማስተባበር",
              "የፕሮግራም ሕጎችን ካሟሉ የሕዝብ ፕሮግራሞች ሊሠሩ ይችላሉ",
              "በሐኪም ሪፈራል ወይም በኦፊሴላዊው የቤት እንክብካቤ መንገድ ይጀምሩ",
            ],
          },
          {
            cells: [
              "በማኅበረሰብ ላይ የተመሠረቱ አገልግሎቶች",
              "የማኅበረሰብ ጤና ማዕከል የጥርስ ሕክምና ወይም ዝቅተኛ መሰናክል ድጋፎች",
              "እንደ አገልግሎቱ የሕዝብ ወይም የማኅበረሰብ የገንዘብ ድጋፍ ሊሠራ ይችላል",
              "ፕሮግራሙን በቀጥታ ያግኙ እና ስለ ብቁነት ይጠይቁ",
            ],
          },
          {
            cells: [
              "በትምህርት ቤት ላይ የተመሠረቱ ድጋፎች",
              "የካምፓስ ምክር አገልግሎት ወይም ከጤና ጋር የተያያዙ ድጋፎች",
              "ብዙውን ጊዜ ከተማሪ ብቁነት እና ከተማሪ ክፍያዎች ወይም ዕቅዶች ጋር የተያያዘ ነው",
              "መጀመሪያ የትምህርት ቤትዎን ኦፊሴላዊ የአገልግሎት ገጾች ይጠቀሙ",
            ],
          },
          {
            cells: [
              "የግል ተጓዳኝ እንክብካቤ",
              "ፊዚዮቴራፒ፣ የምክር አገልግሎት፣ ማሳጅ፣ የግል የጥርስ ሕክምና፣ የግል የዓይን አገልግሎቶች",
              "ሌላ ዕቅድ ካልሸፈነው ብዙውን ጊዜ የግል ክፍያ ነው",
              "ቀጠሮ ከመያዝዎ በፊት ሙሉ ክፍያዎችን እና የሽፋን ሕጎችን ይጠይቁ",
            ],
          },
        ],
      },
      {
        id: "allied-examples",
        title: "የተጓዳኝ እና የማኅበረሰብ እንክብካቤ ምሳሌዎች",
        type: "grid",
        gridItems: [
          {
            title: "የቤት እንክብካቤ",
            content:
              "አንድ ሰው ከሕመም፣ ከጉዳት ወይም ከሆስፒታል እንክብካቤ በኋላ በቤት ድጋፍ ሲፈልግ ጠቃሚ ነው።",
            icon: "clock",
            link: {
              text: "የቤት እንክብካቤ ዝርዝሮች",
              url: "/local-services?category=allied-community&q=home+care",
            },
          },
          {
            title: "የጥርስ ሕክምና",
            content:
              "የጥርስ ሽፋን ከመደበኛ የሐኪም ሽፋን የተለየ ነው። የፌዴራል Canadian Dental Care Plan አሁን የግል የጥርስ መድን የሌላቸውን ብዙ ሰዎች ይሸፍናል፤ እንደ Healthy Smiles Ontario ያሉ ፕሮግራሞች እና የማኅበረሰብ የጥርስ ክሊኒኮችም የተወሰኑ ቡድኖችን ይረዳሉ።",
            icon: "shield",
            link: {
              text: "የጥርስ እና የማኅበረሰብ ዝርዝሮች",
              url: "/local-services?category=allied-community&q=dental",
            },
          },
          {
            title: "ተሃድሶ እና ቴራፒ",
            content:
              "ፊዚዮቴራፒ፣ occupational therapy እና ተዛማጅ አገልግሎቶች እንደ መንገድዎ የሕዝብ፣ የማኅበረሰብ ወይም የግል ሊሆኑ ይችላሉ።",
            icon: "stethoscope",
            link: { text: "የተጓዳኝ እንክብካቤ ዝርዝሮች", url: "/local-services?category=allied-community" },
          },
          {
            title: "የዓይን ድጋፍ",
            content:
              "የዓይን ድጋፍ ከሕክምና የዓይን እንክብካቤ በተጨማሪ መሣሪያዎችን፣ የአቅጣጫ እርዳታን እና የማኅበረሰብ ድጋፎችን ሊያካትት ይችላል።",
            icon: "info",
            link: {
              text: "የዓይን ድጋፍ ዝርዝሮች",
              url: "/local-services?category=allied-community&q=vision",
            },
          },
        ],
      },
      {
        id: "before-you-book",
        title: "ቀጠሮ ከመያዝዎ በፊት",
        type: "checklist",
        items: [
          "ሪፈራል ያስፈልግ እንደሆነ ይጠይቁ",
          "አገልግሎቱ የሕዝብ፣ በማኅበረሰብ የሚደገፍ ወይም የግል ክፍያ መሆኑን ይጠይቁ",
          "አገልግሎቱ የግል ከሆነ ትክክለኛ ክፍያዎችን እና የመሰረዣ ሕጎችን ይጠይቁ",
          "የትምህርት ቤትዎ ወይም የግል ዕቅድዎ የወጪውን ከፊል እንደሚሸፍን ያረጋግጡ",
          "መዝገቦች፣ የምስል ምርመራ ወይም የሐኪም ማስታወሻ መያዝ እንዳለብዎ ይጠይቁ",
        ],
      },
    ],
  },
  faq: {
    title: "ተደጋጋሚ ጥያቄዎች እና መዝገበ-ቃላት",
    description:
      "የተለመዱ የአዲስ መጤ ሁኔታዎች፣ ተግባራዊ ጥያቄዎች እና በቀላል ቋንቋ የተጻፉ ትርጓሜዎች።",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Ontario፦ በ Ontario ያለ የጤና እንክብካቤ",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "አጠቃላይ የክፍለ ሀገር የጤና መመሪያ።",
      },
      {
        title: "Ontario፦ Health811",
        url: "https://www.ontario.ca/page/get-medical-advice-health811",
        note: "ኦፊሴላዊ የነርስ ምክር መመሪያ።",
      },
    ],
    sections: [
      {
        id: "scenarios",
        title: "የተለመዱ የአዲስ መጤ ሁኔታዎች",
        type: "faq",
        faqs: [
          {
            question: "ገና OHIP የለኝም። መጀመሪያ ምን ማድረግ አለብኝ?",
            answer:
              "መጀመሪያ የሽፋን መንገድዎን ይወቁ፤ ከዚያ ደህንነቱ የተጠበቀ ጊዜያዊ ዕቅድ ለማውጣት የአካባቢውን ማውጫ እና የአስቸኳይ መመሪያ ገጾችን ይጠቀሙ።",
          },
          {
            question: "ዓለም አቀፍ ተማሪ ነኝ። ከየት መጀመር አለብኝ?",
            answer:
              "በካምፓስዎ የጤና ወይም የደህንነት አገልግሎት እና በትምህርት ቤትዎ የመድን ሰነዶች ይጀምሩ፤ እነዚያ በቂ ካልሆኑ የማኅበረሰብ ወይም የአስቸኳይ አገልግሎቶችን ይጠቀሙ።",
          },
          {
            question: "አስተርጓሚ እፈልጋለሁ።",
            answer:
              "ቀድመው ይጠይቁ። ይህን ድረ-ገጽ የቋንቋ ምናሌውን በመጠቀም በ33 ቋንቋዎች ማንበብ ይችላሉ፤ በአስተርጓሚ እርዳታ ትሩ ውስጥ ያሉትን ፈጣን ሐረጎችም ለሠራተኞች ማሳየት ይችላሉ። ለቀጠሮዎች፣ ለመድኃኒት መመሪያዎች፣ ለፈቃድ እና ለምርመራ ውይይቶች ስለ ሙያዊ አስተርጓሚ ድጋፍ ይጠይቁ። Health811 (811 ይደውሉ) በብዙ ቋንቋዎች የስልክ ድጋፍ ይሰጣል።",
          },
          {
            question: "ከጉብኝት በኋላ የደም ምርመራ እፈልጋለሁ።",
            answer:
              "requisition እንዳለዎ ያረጋግጡ፤ ከዚያ በማውጫው ላቦራቶሪዎችን እና የምስል ምርመራን ይፈልጉ።",
          },
          {
            question: "መድኃኒት መሙላት እፈልጋለሁ፤ ሐኪሜ ግን አይገኝም።",
            answer:
              "በፋርማሲዎ ይጀምሩ፤ ከዚያ እንደ መድኃኒቱ እና አስቸኳይነቱ ተገቢ ሲሆን ያለቀጠሮ፣ የመስመር ላይ ወይም የአስቸኳይ መንገዶችን ይጠቀሙ።",
          },
          {
            question: "ለልጄ ሕክምና እፈልጋለሁ።",
            answer:
              "መጀመሪያ የድንገተኛ ማስጠንቀቂያ ምልክቶችን ይጠቀሙ፤ ከዚያ የዕለቱን ወይም የአስቸኳይ መመሪያን። የሕፃናት እና ወጣቶች የአእምሮ ጤና መንገዶች ብዙውን ጊዜ ከአዋቂዎች እንክብካቤ የተለዩ ናቸው።",
          },
          {
            question: "ዛሬ ማታ የአእምሮ ጤና እርዳታ እፈልጋለሁ።",
            answer:
              "በማንኛውም ጊዜ 9-8-8 (Suicide Crisis Helpline) ይደውሉ ወይም ጽሑፍ ይላኩ፣ ወይም በ 613-544-4229 ለ24/7 የ AMHS-KFLA ቀውስ መስመር ይደውሉ። ደህንነት አደጋ ላይ ከሆነ የድንገተኛ ሕክምና ይጠቀሙ። መደበኛ ቀጠሮ አይጠብቁ።",
          },
          {
            question: "requisition ወይም ሪፈራል አልገባኝም።",
            answer:
              "ለሰጠዎት ክሊኒክ ይደውሉ እና በቀላል ቋንቋ እንዲያብራሩልዎ ይጠይቁ። ለምን እንደሆነ፣ ወዴት እንደሚሄድ እና ማን ክትትል ማድረግ እንዳለበት መጠየቅ ይችላሉ።",
          },
        ],
      },
      {
        id: "more-questions",
        title: "ተጨማሪ የተለመዱ ጥያቄዎች",
        type: "faq",
        faqs: [
          {
            question: "ሐኪም ከሌለኝ በቀጥታ ወደ ድንገተኛ ክፍል መሄድ እችላለሁ?",
            answer:
              "ድንገተኛ ክፍል ለድንገተኛ ሁኔታዎች ነው። ችግሩ ሕይወትን አደጋ ላይ የሚጥል መሆኑ ግልጽ ካልሆነ በአስቸኳይ መመሪያ ገጹ፣ በ Health811፣ ያለቀጠሮ በሚያይ ክሊኒክ ወይም በሌላ የዕለቱ ሕክምና ይጀምሩ።",
          },
          {
            question: "አዲስ ከሆንኩ እና የትኛው አገልግሎት እንደሚስማማኝ ካላወቅሁስ?",
            answer:
              "ለተማሪዎች፣ ለአዲስ መጤዎች፣ ለሕፃናት እና ወጣቶች፣ ያለቀጠሮ ለሚታዩ፣ ለመስመር ላይ፣ ሪፈራል ለሚያስፈልጋቸው እና ለሽፋን ዓይነት የማውጫውን ማጣሪያዎች ይጠቀሙ።",
          },
          {
            question: "በዚህ ድረ-ገጽ ላይ ያለው መረጃ ጊዜ ያለፈበት መስሎ ከታየስ?",
            answer:
              "ቀጣዩ ግምገማ ባገኙት ለውጥ ላይ እንዲያተኩር በገጹ ወይም በዝርዝሩ ላይ ያለውን የሪፖርት ቅጽ ይጠቀሙ።",
          },
        ],
      },
      {
        id: "glossary",
        title: "መዝገበ-ቃላት",
        type: "checklist",
        items: [
          "የመጀመሪያ ደረጃ ሕክምና (Primary care): ለመደበኛ እና ቀጣይ የጤና ፍላጎቶች የመደበኛ ጤና አገልግሎት መንገድዎ።",
          "Nurse practitioner (NP): በብዙ ሁኔታዎች መገምገም፣ መመርመር፣ መድኃኒት ማዘዝ እና ሪፈራል መስጠት የሚችል የላቀ ሥልጠና ያለው ነርስ።",
          "ሪፈራል (Referral): ከአንድ ሐኪም ወደ ሌላ አገልግሎት ወይም ስፔሻሊስት የሚደረግ ጥያቄ።",
          "Requisition (የምርመራ ማዘዣ): ለላቦራቶሪ ወይም ለምስል ምርመራ ክሊኒክ ምን ምርመራ እንደሚያስፈልግዎ የሚነግር ቅጽ።",
          "Triage (ቅደም ተከተል መወሰን): በደህንነት እና በክብደት ላይ ተመስርቶ ማን መጀመሪያ አስቸኳይ ሕክምና እንደሚያስፈልገው የመወሰን ሂደት።",
          "ያለቀጠሮ ክሊኒክ (Walk-in clinic): በዕለታዊ የመግቢያ ሁኔታ መሠረት ያለተያዘ ቀጠሮ ታካሚዎችን ሊያይ የሚችል ክሊኒክ።",
          "አስቸኳይ ሕክምና (Urgent care): ሕይወትን አደጋ ላይ የሚጥሉ መሆናቸው ግልጽ ላልሆኑ አስቸኳይ ችግሮች የዕለቱ ሕክምና።",
          "የተመዘገበ (rostered) ታካሚ: ከመደበኛ የመጀመሪያ ደረጃ ሕክምና አቅራቢ ጋር ቀጣይ ግንኙነት ያለው ታካሚ።",
        ],
      },
    ],
  },
  about: {
    title: "ስለ እኛ፣ እምነት እና ግላዊነት",
    description:
      "ይህ መመሪያ እንዴት እንደሚሠራ፣ ምንጮች እና የግምገማ ሁኔታ እንዴት እንደሚያዙ እና ለውጦችን እንዴት እንደሚያሳውቁ ይወቁ።",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "የፕሮጀክት ምንጭ ማስታወሻዎች",
        url: "https://myprimarycareguide.ca/about#sources",
        note: "ፕሮጀክቱ እምነትን እና ምንጮችን እንዴት እንደሚይዝ ለሕዝብ የቀረበ ማጠቃለያ።",
      },
    ],
    sections: [
      {
        id: "mission",
        title: "ይህ ድረ-ገጽ ለምን እንደሆነ",
        type: "default",
        content:
          "MyPrimaryCareGuide.ca ለ Kingston, Ontario ለአዲስ መጤዎች ቅድሚያ የሚሰጥ የጤና አገልግሎት መመሪያ ነው። ሰዎች ትክክለኛውን ቀጣይ እርምጃ እንዲመርጡ፣ የተለመዱ የሥርዓት ቃላትን እንዲረዱ እና የታመኑ የአካባቢ አገልግሎት ዝርዝሮችን እንዲያገኙ ለመርዳት ተዘጋጅቷል።\n\nይህ ድረ-ገጽ የቀጥታ የመጠበቂያ ጊዜ መሣሪያ፣ የቀጠሮ መያዣ መድረክ ወይም የሕክምና ምክር አገልግሎት **አይደለም**።",
      },
      {
        id: "sources",
        title: "እምነት እና ምንጮች እንዴት እንደሚሠሩ",
        type: "default",
        content:
          "የአካባቢ ዝርዝሮችን በተቻለ መጠን ከኦፊሴላዊ የአገልግሎት ገጾች ጋር ለማገናኘት እንሞክራለን። እያንዳንዱ ዝርዝር የግምገማ ሁኔታ እና የመጨረሻ የግምገማ ቀን ያሳያል። አንዳንድ ግቤቶች ከኦፊሴላዊ ምንጮች ጋር ሙሉ በሙሉ ተረጋግጠዋል። ሌሎች ግን የሥራ ሰዓታት፣ የመግቢያ ሂደት ወይም የመግቢያ ሕጎች በተደጋጋሚ ስለሚለወጡ አሁንም የአካባቢ ዳግም ማረጋገጫ ያስፈልጋቸዋል።\n\nየገጽ ደረጃ የምንጭ ክፍሎች ለአሁኑ የግምገማ ዑደት የተጠቀሱትን ዋና ኦፊሴላዊ ማጣቀሻዎች ያሳያሉ።",
      },
      {
        id: "accessibility",
        title: "ተደራሽነት እና ቋንቋ",
        type: "default",
        content:
          "ይህ ድረ-ገጽ ለቁልፍ ሰሌዳ ምቹ፣ ለሞባይል ቅድሚያ የሚሰጥ እና በቀላል ቋንቋ የሚነበብ ሆኖ ተገንብቷል።\n\nሙሉውን መመሪያ በራስጌው ውስጥ ያለውን የቋንቋ ምናሌ በመጠቀም በ**33 ቋንቋዎች** ማንበብ ይችላሉ — ከ العربية እና Soomaali እስከ ਪੰਜਾਬੀ፣ ትግርኛ፣ Yorùbá እና Українська ድረስ — እያንዳንዱ ገጽ እና ምናሌ በቀጥታ በዚህ ድረ-ገጽ ላይ ይቀርባል። ሁሉም ትርጉሞች በማሽን የታገዙ ናቸው፤ ፈረንሳይኛ፣ ስፓኒሽ፣ ዓረብኛ እና ቀላል ቻይንኛ ተጨማሪ የግምገማ ምዕራፍ አግኝተዋል፣ የቀሩት ደግሞ ራስ-ሰር ትርጉም ተብለው ተመልክተዋል። **እንግሊዝኛ ዋቢ ቅጂ ሆኖ ይቆያል** — የተተረጎመ ዓረፍተ ነገር ግልጽ ካልሆነ ወይም የሚያስደንቅ ከሆነ የእንግሊዝኛውን ጽሑፍ ይመልከቱ ወይም አንድ ሰው እንዲያረጋግጥልዎ ይጠይቁ።\n\nበደርዘኖች የሚቆጠሩ ተጨማሪ ቋንቋዎች ከዚሁ ምናሌ ይህን ድረ-ገጽ በ Google Translate በኩል መክፈት ይችላሉ፤ የአስተርጓሚ እርዳታ ትሩ ደግሞ ለሠራተኞች ማሳየት የሚችሏቸውን ከ20 በላይ ቋንቋዎች ያሉ የአስቸኳይ ፈጣን ሐረጎችን ያካትታል።\n\nየማውጫ ዝርዝሮች (የአገልግሎት ስሞች፣ አድራሻዎች፣ ስልክ ቁጥሮች እና የሥራ ሰዓታት) ከኦፊሴላዊ ምንጮች ጋር በትክክል እንዲመሳሰሉ በእንግሊዝኛ ይቆያሉ።\n\nማንኛውም ዓይነት ትርጉም ለሕክምና ዝርዝሮች አሁንም ስህተት ሊሆን ይችላል፤ ስለዚህ ለቀጠሮዎች፣ ለመድኃኒት መመሪያዎች እና ለፈቃድ ስለ ሙያዊ አስተርጓሚ ድጋፍ ይጠይቁ። Health811 (811 ይደውሉ) በብዙ ቋንቋዎች የስልክ ድጋፍ ይሰጣል።",
      },
      {
        id: "privacy",
        title: "ግላዊነት",
        type: "default",
        content:
          "ይህ ድረ-ገጽ ጣልቃ-ገብ የርቀት ትንታኔዎችን አይጠቀምም። መረጃው ለጥገና ሆን ተብሎ ሲላክ አስተዳዳሪዎች የተለመዱ ፍለጋዎችን፣ ውጤት-አልባ ፍለጋዎችን፣ የአገልግሎት እይታዎችን እና የችግር ሪፖርቶችን እንዲረዱ ቀላል የማሻሻያ ቆጠራዎችን በራስዎ አሳሽ ውስጥ ያስቀምጣል።\n\nበአስተያየት ቅጹ ወይም በኢሜይል የግል የሕክምና መረጃ አይላኩ።",
      },
      {
        id: "contact",
        title: "ግንኙነት እና ለውጦችን ማሳወቅ",
        type: "default",
        content:
          "አንድ ገጽ ወይም ዝርዝር የተሳሳተ መስሎ ከታየ በዚያ ገጽ ላይ ያለውን የሪፖርት ቅጽ ይጠቀሙ። ሪፖርቶች ችግሩን መግለጽ አለባቸው እንጂ የግል የጤና ሁኔታዎን አይደለም።\n\nአጠቃላይ የመገናኛ ኢሜይል፦ **challengeat7@gmail.com**",
      },
      {
        id: "disclaimer",
        title: "ማስተባበያ",
        type: "default",
        content:
          "ይህ ድረ-ገጽ ለመምራት እና ለትምህርት ብቻ ነው። የሕክምና ምክር አይደለም፤ ለሙያዊ ምርመራ፣ ሕክምና ወይም ድንገተኛ እርዳታ ምትክም አይደለም። አንድ ሁኔታ ሕይወትን አደጋ ላይ የሚጥል ሊሆን የሚችል ከሆነ 911 ይደውሉ።",
      },
    ],
  },
};
