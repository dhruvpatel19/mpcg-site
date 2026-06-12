import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

/**
 * Traditional Chinese (繁體中文) — automatic, unreviewed translation generated
 * from the English source files (en.ts and content.ts). Labelled as automatic
 * translation in the UI. English remains the reference version.
 */

export const strings: UIStrings = {
  common: {
    loadingPage: "頁面載入中……",
    directoryEnglishNote:
      "服務目錄以英文顯示，以確保服務名稱、地址、電話號碼和開放時間與官方來源完全一致。",
  },
  header: {
    emergencyBanner: "危及生命的緊急情況？請立即致電 911。",
    tagline: "安大略省金斯頓（Kingston）以新移民為先的醫療導航指南",
    languageButton: "語言",
    languageButtonAria: "語言與口譯協助",
    openNavigation: "開啟導覽選單",
    primaryNavLabel: "主導覽",
  },
  languageModal: {
    title: "語言與口譯協助",
    description:
      "請用您最熟悉的語言閱讀本指南。在涉及醫療的對話中，如有需要請主動要求口譯服務。",
    chooseLanguageTitle: "選擇您的語言",
    chooseLanguageNote:
      "本指南已在本網站上完整翻譯成 33 種語言，另有數十種語言可透過自動翻譯開啟。服務目錄保留英文，以便與官方來源完全一致。如有任何內容不清楚，請以英文版本為準。",
    safetyTitle: "安全提示",
    safetyBody:
      "網站翻譯僅供閱讀和理解之用。涉及預約、檢查指示、藥物或知情同意時，請詢問診所或醫院能否提供專業口譯。Health811（致電 811）提供多種語言的電話支援。",
    phrasesTitle: "可出示給工作人員的常用語句",
    phrasesNote: "指向您的語言，把這些句子出示給櫃台或醫護人員。",
    callHealth811: "致電 Health811",
    accessibilityCta: "無障礙與可信度說明",
    close: "關閉語言協助對話框",
  },
  moreLanguages: {
    title: "更多語言（自動翻譯）",
    description:
      "所有語言都可以在這一個選單中使用——包括索馬里語、約魯巴語、伊博語、豪薩語、阿姆哈拉語、提格利尼亞語、斯瓦希里語、烏克蘭語、波斯語、烏爾都語、旁遮普語、泰米爾語和越南語。",
    selectLabel: "選擇任何語言",
    selectPlaceholder: "所有語言——請選擇……",
    openButton: "以此語言開啟",
    disclaimer:
      "標示為自動翻譯的語言會透過 Google 翻譯開啟本頁面，並在您繼續瀏覽時保持您的語言。自動翻譯未經本專案審核——適合一般閱讀，但涉及醫療細節時，請向醫護人員或口譯員確認。",
  },
  funding: {
    acknowledgment: "本專案獲得安大略省醫學生協會（OMSA）的資助支持。",
    logoAlt: "安大略省醫學生協會（OMSA）標誌",
  },
  languagePicker: {
    searchPlaceholder: "搜尋語言……",
    onSiteGroup: "本網站已翻譯",
    proxyGroup: "更多語言（透過 Google 翻譯）",
    reviewedBadge: "已審核",
    automaticBadge: "自動",
    interpreterTab: "口譯協助與常用語句",
    noMatches: "沒有符合您搜尋的語言。",
    note: "翻譯由機器輔助完成，如有任何內容不清楚，請以英文版本為準。「Google 翻譯」組別中的語言會在外部 Google 網站上開啟本頁面。服務目錄保留英文，以便與官方來源完全一致。",
  },
  navigation: [
    {
      title: "從這裡開始",
      items: [
        {
          label: "現在需要幫助",
          to: "/need-help-now",
          description: "緊急決定與危機支援",
        },
        {
          label: "從這裡開始",
          to: "/start-here",
          description: "初到安省，認識醫療系統",
        },
        {
          label: "尋找基層醫療",
          to: "/get-a-family-doctor",
          description: "家庭醫生、執業護士、社區健康中心與學生選項",
        },
      ],
    },
    {
      title: "認識就醫",
      items: [
        {
          label: "費用與保險",
          to: "/costs-and-coverage",
          description: "OHIP、IFHP、私人保險與藥物保障",
        },
        {
          label: "就診指南",
          to: "/your-visit",
          description: "需要帶什麼、如何提問",
        },
        {
          label: "就診之後",
          to: "/after-visit",
          description: "檢查、檢驗申請單、轉介與後續跟進",
        },
        {
          label: "藥物與藥房",
          to: "/medicines-and-pharmacies",
          description: "處方、續藥與藥劑師協助",
        },
      ],
    },
    {
      title: "本地協助",
      items: [
        {
          label: "本地服務",
          to: "/local-services",
          description: "搜尋金斯頓的服務",
        },
        {
          label: "心理健康",
          to: "/mental-health",
          description: "危機、緊急、常規與青少年支援",
        },
        {
          label: "篩檢與預防",
          to: "/screening-prevention",
          description: "疫苗與預防保健",
        },
        {
          label: "專職醫療與社區照護",
          to: "/community-allied-health",
          description: "居家照護、復健、牙科與社區支援",
        },
        {
          label: "常見問題",
          to: "/faq",
          description: "新移民常見情況與詞彙表",
        },
        {
          label: "關於與可信度",
          to: "/about",
          description: "資料來源、隱私、無障礙與意見回饋",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "現在就需要幫助？",
    items: {
      "call-911": {
        label: "致電 911",
        description: "危及生命的緊急情況",
      },
      "call-811": {
        label: "致電 Health811",
        description: "護士諮詢，24 小時全天候",
      },
      "call-988": {
        label: "致電或傳簡訊至 9-8-8",
        description: "自殺危機熱線，24 小時全天候",
      },
      "call-crisis": {
        label: "致電危機熱線",
        description: "AMHS-KFLA 危機熱線",
      },
      "urgent-guide": {
        label: "緊急照護指南",
        description: "非辦公時間與當日就醫的選擇",
      },
      "mental-health": {
        label: "心理健康支援",
        description: "危機、緊急與常規支援途徑",
      },
    },
  },
  home: {
    seoTitle: "金斯頓醫療指南",
    seoDescription:
      "以新移民為先的安大略省金斯頓醫療導航：緊急協助、本地服務、保險基礎、口譯指引，以及就診後的下一步。",
    kicker: "安大略省金斯頓",
    heroTitle: "在金斯頓找到合適的醫療服務，不必靠猜",
    heroLead:
      "從緊急協助、新移民入門、保險知識或本地服務目錄開始。本指南文字淺白、適合手機瀏覽，並坦誠標示哪些資訊仍需再次核實。",
    cardNeedHelp: {
      title: "現在需要幫助",
      body: "急診、緊急照護、危機支援與非辦公時間的就醫指引。",
    },
    cardStartHere: {
      title: "從這裡開始",
      body: "認識安省醫療系統如何運作，以及第一步該做什麼。",
    },
    cardSearch: {
      title: "搜尋服務",
      body: "查找抽血檢驗、續藥、免預約就診、心理健康等服務。",
    },
    cardLanguage: {
      title: "語言協助",
      body: "用您的語言閱讀本指南，並取得口譯指引和常用語句。",
    },
    quickDecisionsKicker: "快速判斷",
    quickDecisionsTitle: "先從這些問題開始",
    quickDecisionLines: [
      "如果情況可能危及生命，請立即致電 911。",
      "如果今晚不確定該去哪裡，請致電 Health811。",
      "如有自殺念頭或難以承受的痛苦，可隨時致電或傳簡訊至 9-8-8。",
      "如果您沒有家庭醫生，請把免預約診所（walk-in）、社區健康和學生服務納入您的就醫計劃。",
      "如果您需要抽血檢驗、X 光、續藥或了解轉介進度，請使用本地目錄查找下一步。",
    ],
    trustNoteTitle: "可信度說明",
    trustNoteBody:
      "這是一份靜態指南，不會顯示即時等候時間。開放時間、接收新患者等時效性資訊可能很快改變，因此每個服務條目都附有來源連結和審核狀態。",
    newcomerKicker: "新移民快速入門",
    newcomerTitle: "初到金斯頓的第一步",
    newcomerSteps: [
      {
        title: "1. 了解您的保險",
        body: "認識 OHIP（安省健康保險）、IFHP（聯邦臨時健康計劃）、私人保險，以及通常不在保障範圍內的項目。OHIP 沒有等候期——抵達後請盡快申請。",
      },
      {
        title: "2. 規劃您的基層醫療途徑",
        body: "了解家庭醫生、執業護士（nurse practitioner）、學生診所、社區健康中心和免預約就診之間的分別。",
      },
      {
        title: "3. 了解接下來會發生什麼",
        body: "了解檢驗申請單（requisition）、轉介、檢查結果和後續跟進電話通常代表什麼。",
      },
    ],
    languageSupportKicker: "語言支援",
    languageSupportTitle: "需要協助時可出示這些語句",
    openLanguageHelp: "開啟語言協助",
    commonTasksKicker: "常見事項",
    commonTasksTitle: "按您要辦的事來搜尋",
    openDirectory: "開啟完整目錄",
    tasks: [
      {
        title: "抽血檢驗或 X 光",
        body: "查找化驗與影像檢查服務。",
      },
      {
        title: "處方續藥",
        body: "查找藥房和續藥協助。",
      },
      {
        title: "心理健康支援",
        body: "危機、緊急、常規與青少年支援。",
      },
      {
        title: "健康卡或新移民支援",
        body: "查找 ServiceOntario、ISKA 和電話諮詢。",
      },
    ],
    featuredKicker: "精選服務",
    featuredTitle: "適合作為起點的服務",
    trustKicker: "可信度與來源",
    trustTitle: "坦誠標示哪些資訊已核實、哪些仍需再次核實",
    trustBody:
      "部分服務條目已對照官方本地來源核實。其他條目因開放時間、接收新患者或使用規則經常變動，仍需在本地再次核實。我們公開標示這個狀態，並鼓勵使用者回報過時資訊。",
    trustChecklistTitle: "倚賴某個服務條目前請先閱讀",
    trustChecklist: [
      "查看是否有官方來源連結。",
      "查看最近一次審核日期。",
      "出發前確認當日開放時間和免預約安排。",
      "如發現資訊有變，請使用回報表單。",
    ],
    trustLink: "查看資料來源與可信度說明",
  },
  contentPage: {
    breadcrumbHome: "首頁",
    badge: "淺白語言指南",
    reviewStatusTitle: "審核狀態",
    reviewLabels: {
      reviewed: "已對照本專案目前使用的來源集進行審核。",
      "general-guidance":
        "已作為一般性指引審核。本地細節仍可能很快改變。",
      "needs-local-recheck":
        "內容具參考價值，但本地細節仍需進一步核實。",
    },
    lastReviewPrefix: "頁面最近審核：",
    noReviewDate: "本頁面沒有記錄頁面層級的審核日期。",
    translationAside:
      "您可以透過「語言」選單用多種語言閱讀本頁面。涉及預約、藥物、知情同意和檢查指示時，請詢問是否有口譯支援。",
    share: "分享",
    print: "列印",
    sourcesTitle: "本頁面的資料來源",
    sourcesNote:
      "以下是本頁面目前審核所使用的主要官方或第一手來源。在兩次審核之間，本地流程仍可能改變。",
    onThisPage: "本頁內容",
    sourcesAnchorLabel: "資料來源",
    translationReminderTitle: "翻譯提示",
    translationReminderBody:
      "凡是影響您治療或安全的事項，請向醫護人員或口譯員確認，不要只依賴翻譯。",
    linkCopiedTitle: "連結已複製",
    linkCopiedBody: "您現在可以把本頁連結貼到任何地方。",
    shareCancelled: "已取消分享",
  },
  directory: {
    seoTitle: "本地服務",
    seoDescription:
      "搜尋安大略省金斯頓對新移民友善的醫療、心理健康、藥房、保險與導航支援服務。",
    kicker: "金斯頓服務目錄",
    title: "搜尋本地健康服務",
    lead: "可按服務、症狀、文件或要辦的事搜尋。例如：免預約（walk in）、非辦公時間、抽血檢驗、續藥、健康卡、學生診所或新移民支援。",
    searchPlaceholder: "按需求、服務名稱、地址或關鍵字搜尋",
    sortAriaLabel: "結果排序",
    sortRelevance: "排序：相關度",
    sortAlphabetical: "排序：按字母 A 到 Z",
    sortRecentlyReviewed: "排序：最近審核",
    sortArea: "排序：區域",
    gridViewLabel: "格狀檢視",
    listViewLabel: "清單檢視",
    allServices: "全部服務",
    audienceTitle: "適用對象",
    accessTitle: "就診方式",
    careLevelTitle: "照護層級",
    coverageAreaTitle: "保險與區域",
    areaLabel: "區域",
    showingServices: "顯示 {count} 項服務",
    resetFilters: "重設篩選",
    trustPanelTitle: "可信度與審核狀態",
    trustPanelBody:
      "本目錄是靜態資訊，並非即時資料。我們會顯示最近一次記錄的審核日期、可用的官方來源連結，以及哪些條目仍需在本地再次核實。出發前請確認開放時間和當日就診安排。",
    verifiedLabel: "已核實",
    needsRecheckLabel: "需再核實",
    noResultsTitle: "沒有符合這些篩選條件的服務",
    noResultsBody:
      "試試較寬鬆的搜尋字詞，例如抽血檢驗、續藥、心理健康、健康卡或免預約。您也可以清除所有篩選條件重新開始。",
    notSureTitle: "不確定從哪裡開始？",
    notSureBody:
      "如果您不確定需要的是急診、緊急照護、免預約診所還是藥房協助，請先查看緊急指引頁面，或致電 Health811 取得護士諮詢。",
    needHelpNowCta: "現在需要幫助",
    callHealth811: "致電 Health811",
  },
  filters: {
    audience: {
      newcomers: "新移民",
      students: "僅限學生或校園",
      "children-youth": "兒童或青少年",
      adults: "成人",
      families: "家庭",
      "unattached-patients": "沒有家庭醫生",
    },
    access: {
      "walk-in": "免預約",
      appointment: "需預約",
      referral: "需轉介",
      virtual: "線上就診",
    },
    level: {
      emergency: "急診",
      urgent: "緊急",
      primary: "基層醫療",
      community: "社區",
    },
    payment: {
      public: "公共資助",
      community: "社區／低門檻",
      mixed: "混合保障",
      "student-plan": "學生保險計劃",
      private: "自費",
    },
    location: {
      downtown: "市中心",
      "north-end": "北區",
      "west-end": "西區",
      campus: "校園",
      online: "線上",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "急診與緊急照護",
      shortLabel: "急診與緊急",
    },
    "primary-care": { label: "基層醫療", shortLabel: "基層醫療" },
    "community-health": {
      label: "社區健康中心",
      shortLabel: "社區健康",
    },
    "mental-health": {
      label: "心理健康與危機支援",
      shortLabel: "心理健康",
    },
    "public-health": { label: "公共衛生", shortLabel: "公共衛生" },
    "labs-imaging": {
      label: "化驗與影像檢查",
      shortLabel: "化驗與影像",
    },
    pharmacies: {
      label: "藥物與藥房",
      shortLabel: "藥房",
    },
    "allied-community": {
      label: "專職醫療與社區照護",
      shortLabel: "專職醫療",
    },
    "navigation-support": {
      label: "導航與保險支援",
      shortLabel: "導航支援",
    },
  },
  serviceCard: {
    whenToUse: "適用情況：",
    accessLabel: "就診方式",
    eligibilityLabel: "使用資格",
    eligibilityFallback: "除非官方來源另有說明，否則對公眾開放。",
    hoursLabel: "開放時間",
    phoneLabel: "電話",
    trustDetails: "可信度與來源詳情",
    lastReview: "最近審核：",
    officialSource: "官方來源",
    call: "致電",
    officialWebsite: "官方網站",
    directions: "路線",
    viewDetails: "查看詳情",
  },
  serviceDetail: {
    backToServices: "返回本地服務",
    whenToUseTitle: "什麼情況下使用此服務",
    eligibilityTitle: "使用資格與就診方式",
    eligibilityFallback:
      "如果不確定此服務是否對您開放，請查看官方來源。",
    whatToBringTitle: "需要攜帶的物品",
    contactTitle: "聯絡方式與操作",
    callNow: "立即致電",
    officialWebsite: "官方網站",
    directions: "路線",
    trustTitle: "可信度與來源",
    lastReview: "最近審核：",
    viewOfficialSource: "查看官方來源",
  },
  verification: {
    verified: {
      label: "已對照官方來源核實",
      shortLabel: "已核實",
      description:
        "核心資訊已在最近一輪審核中對照官方來源核實。",
    },
    "partially-verified": {
      label: "已附官方來源連結",
      shortLabel: "官方連結",
      description:
        "已附上官方來源連結，但其中一項或多項資訊可能經常變動，出發前請先確認。",
    },
    "community-reported": {
      label: "社區回報",
      shortLabel: "社區回報",
      description:
        "此資訊來自社區回報，仍需獨立核實確認。",
    },
    "needs-recheck": {
      label: "需再核實",
      shortLabel: "需再核實",
      description:
        "此條目仍然顯示，因為它可能仍有幫助，但關鍵資訊可能已過時。倚賴前請先確認。",
    },
  },
  feedback: {
    badge: "回報過時資訊",
    title: "協助我們保持本指南的準確性",
    body: "這會開啟一封已預先填入頁面或服務資訊的電子郵件。請勿包含私人醫療資訊。",
    issueTypeLabel: "問題類型",
    issueTypes: {
      "outdated hours": "開放時間已過時",
      "wrong phone or website": "電話或網站有誤",
      "eligibility or access issue": "使用資格或就診方式問題",
      "translation or accessibility problem": "翻譯或無障礙問題",
      "missing service or content": "缺少服務或內容",
      other: "其他",
    },
    detailsLabel: "我們應該核實什麼？",
    detailsPlaceholder:
      "例如：電話號碼改了、某診所現在只接受預約，或某個連結已失效。",
    contactLabel: "聯絡方式（選填）",
    contactPlaceholder: "如希望收到回覆，請填寫電郵地址",
    openEmail: "開啟回報電郵",
    copyText: "複製回報文字",
    thanks:
      "謝謝您。這些回報幫助我們優先處理過時頁面、失效連結和需要在本地再次核實的條目。",
    toastEmailTitle: "電郵草稿已開啟",
    toastEmailBody: "您的回報已包含頁面或服務的相關資訊。",
    toastCopyTitle: "問題摘要已複製",
    toastCopyBody: "如有需要，您可以把它貼到自己的電子郵件程式中。",
  },
  footer: {
    description:
      "一份以淺白語言撰寫、面向安大略省金斯頓的醫療導航指南。本網站不提供醫療建議，也不顯示即時等候時間。出發前請務必透過官方來源確認時效性資訊。",
    trustModelTitle: "可信度機制",
    trustModelBody:
      "我們會顯示官方來源連結、審核日期，以及仍需再次核實的條目。如發現資訊有誤，請在相應頁面或服務中回報。",
    beforeYouGo: {
      title: "出發之前",
      body: "請確認官方開放時間、是否需要預約或轉介，以及需要攜帶哪些文件。",
    },
    languageHelp: {
      title: "語言協助",
      body: "透過「語言」選單用您的語言閱讀本指南。在涉及醫療、準確性很重要的對話中，請要求口譯服務。",
    },
    privacy: {
      title: "隱私",
      body: "本網站使用儲存在您瀏覽器中、注重隱私的本地改進記錄，不會向遠端伺服器傳送個人分析資料。",
    },
    copyrightSuffix: "安大略省金斯頓的社區資訊資源。",
    disclaimer: "免責聲明",
    privacyLink: "隱私",
    sourcesLink: "資料來源",
    reportLink: "回報過時資訊",
  },
  notFound: {
    seoTitle: "找不到頁面",
    seoDescription:
      "找不到您要求的頁面。請從緊急協助、新移民入門、本地服務或常見問題開始。",
    badge: "404",
    title: "我們找不到該頁面",
    body: "如果您急需就醫，請先查看緊急指引，或搜尋金斯頓服務目錄。",
    startHere: "從這裡開始",
    needHelpNow: "現在需要幫助",
    localServices: "本地服務",
    faq: "常見問題",
  },
};

const homePage: PageContent = {
  title: "金斯頓醫療導航指南",
  description:
    "一份以新移民為先、文字淺白的指南，協助您在安大略省金斯頓找到醫療服務。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "從這裡開始",
  description:
    "初到金斯頓，或初次接觸安省醫療系統？從這裡開始，了解系統如何運作以及第一步該做什麼。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：安省的醫療服務",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "安省受保醫療服務運作方式概覽。",
    },
    {
      title: "安大略省：申請 OHIP 並領取健康卡",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "OHIP 申請與資格的官方資訊。",
    },
    {
      title: "安大略省：尋找家庭醫生或執業護士",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect 與基層醫療就醫指引。",
    },
    {
      title: "加拿大：IFHP（聯邦臨時健康計劃）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "為符合資格的難民和難民申請人提供的聯邦保障資訊。",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "安省的醫療系統如何運作",
      type: "default",
      content: `安省的醫療系統以**基層醫療**為核心。基層醫療是指您處理日常健康需求、長期病況、處方、轉介和預防保健時通常先求助的地方。您的基層醫療提供者可能是家庭醫生、執業護士、社區健康中心團隊，或者（如果您符合資格）學生健康診所。

**轉介**是指一位醫護人員請另一項服務或專科醫生為您診治。**檢驗申請單**是一張告訴化驗所或影像檢查診所您需要做什麼檢查的表格。

您不需要在第一天就弄懂系統的每個部分。最重要的幾步是：了解您的保險、知道遇到緊急問題該去哪裡，如果還沒有固定的醫療提供者，就為常規就醫做好計劃。`,
    },
    {
      id: "first-decisions",
      title: "先做這些判斷",
      type: "grid",
      gridItems: [
        {
          title: "我可能需要緊急協助",
          content:
            "如果您今天或今晚突然出現健康問題，請先查看急診與緊急照護的判斷指引。",
          icon: "alert",
          link: { text: "現在需要幫助", url: "/need-help-now" },
        },
        {
          title: "我沒有家庭醫生",
          content:
            "了解家庭醫生、執業護士、社區健康中心、免預約診所和學生診所如何互相配合。",
          icon: "stethoscope",
          link: { text: "尋找基層醫療", url: "/get-a-family-doctor" },
        },
        {
          title: "我想了解哪些項目有保障",
          content:
            "閱讀有關 OHIP（安省健康保險）、IFHP（聯邦臨時健康計劃）、私人保險、學生保險計劃、藥物保障以及常見自費項目的內容。",
          icon: "shield",
          link: { text: "費用與保險", url: "/costs-and-coverage" },
        },
        {
          title: "我需要語言協助",
          content:
            "您可以透過「語言」選單用 33 種語言閱讀本指南，並就醫療對話和知情同意詢問口譯支援。",
          icon: "info",
          link: { text: "無障礙與語言", url: "/about#accessibility" },
        },
        {
          title: "我需要抽血檢驗、影像檢查或續藥",
          content:
            "使用本地服務目錄，找到就診之後切實可行的下一步。",
          icon: "file",
          link: { text: "搜尋本地服務", url: "/local-services" },
        },
        {
          title: "我不確定從哪裡開始",
          content:
            "如果不確定情況有多緊急，請致電 Health811 取得護士諮詢。",
          icon: "clock",
          link: { text: "Health811 與緊急指引", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "抵達後第一週值得做的事",
      type: "steps",
      items: [
        "了解您的保險：先了解 OHIP、IFHP、私人保險和學生保險計劃通常涵蓋哪些項目。如果您可能符合 OHIP 資格，請盡早申請。",
        "確定您的緊急就醫計劃：知道什麼時候致電 911、什麼時候先致電 Health811，以及在金斯頓哪裡可以獲得緊急或當日就醫服務。",
        "為常規就醫做計劃：如果您沒有固定的醫療提供者，請了解家庭醫生、執業護士、社區健康中心、學生診所、免預約診所和線上就診等選擇。",
        "把健康資訊集中保管：妥善保存您的健康卡或 IFHP 文件、藥物清單、疫苗記錄，以及任何檢驗申請單或轉介信的副本。",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "如果您還沒有 OHIP",
      type: "callout",
      content:
        "不要等到生病了才去了解自己的保險途徑。如果您符合 OHIP 資格，請盡早申請。如果您透過 IFHP、學校保險或私人保險獲得保障，請隨身保留相關資料。如果您沒有任何保險，就診前請先詢問費用，並在合適的情況下尋找社區或低門檻服務。",
      link: { text: "了解保險資訊", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "請把這些準備好",
      type: "checklist",
      items: [
        "您的健康卡、IFHP 文件或保險資料",
        "一份藥物清單，即使您只服用少量藥物",
        "您上一間診所或醫療提供者的名稱和電話號碼（如果有）",
        "近期的檢驗申請單、轉介信、出院文件或檢查指示",
        "您想用淺白語言提出的問題",
        "把口譯需求寫下來，以免忘記提出",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "現在需要幫助？",
  description:
    "當您今天或今晚遇到健康問題、又不確定從哪裡開始時，請使用本頁面。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：透過 Health811 取得醫療建議",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "官方護士諮詢服務，24 小時全天候。",
    },
    {
      title: "9-8-8：自殺危機熱線",
      url: "https://988.ca/",
      note: "官方全國自殺危機熱線。致電或傳簡訊至 9-8-8，免費，24 小時全天候。",
    },
    {
      title: "Kingston Health Sciences Centre（金斯頓健康科學中心）",
      url: "https://kingstonhsc.ca/",
      note: "提供急診、緊急照護和影像檢查資訊的官方醫院網絡。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "本地官方心理健康與危機支援機構。",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "急診還是緊急照護？",
      type: "comparison",
      comparison: {
        left: {
          title: "出現以下問題，請立即前往急診：",
          items: [
            "胸痛、嚴重呼吸困難或中風徵兆",
            "嚴重出血、嚴重受傷或失去意識",
            "突然神智不清、癲癇發作或嚴重過敏反應",
            "任何一旦等待便可能危及生命或肢體的安全緊急情況",
          ],
        },
        right: {
          title: "出現以下問題，可先選擇緊急照護、Health811 或當日診所：",
          items: [
            "扭傷、小傷口、皮疹、耳痛，或沒有急診警示徵兆的發燒",
            "無法等到常規預約的處方續藥問題",
            "不確定今晚是否需要緊急就醫的疑問",
            "感覺緊急、但並非明顯危及生命的問題",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "非辦公時間的常見情況",
      type: "table",
      columns: ["情況", "建議的第一步", "需要記住的事"],
      rows: [
        {
          cells: [
            "我不確定情況有多緊急",
            "致電 Health811",
            "護士可以幫您判斷應留在家觀察、尋求緊急照護，還是前往急診。",
          ],
        },
        {
          cells: [
            "我的醫生診所關門了，但我今晚需要建議",
            "致電 Health811 或查看緊急照護指引",
            "如果沒有急診警示徵兆，不要以為急診是唯一的選擇。",
          ],
        },
        {
          cells: [
            "我的孩子需要就醫",
            "先對照同樣的急診警示徵兆，再尋求當日就醫；如果不確定，請致電 Health811",
            "盡量帶上孩子的健康卡、藥物清單和症狀出現的時間軸。",
          ],
        },
        {
          cells: [
            "我今晚需要心理健康協助",
            "致電或傳簡訊至 9-8-8（自殺危機熱線），或致電 AMHS-KFLA 24 小時危機熱線",
            "如果安全受到即時威脅，請致電 911。",
          ],
        },
      ],
      caption:
        "本表僅為一般性指引。如果有人可能身處即時危險，請致電 911。",
    },
    {
      id: "kingston-start-points",
      title: "金斯頓的起點",
      type: "grid",
      gridItems: [
        {
          title: "急診室",
          content:
            "危及生命或可能危及生命的問題，請使用急診服務。",
          icon: "alert",
          link: {
            text: "急診與緊急服務清單",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "緊急照護中心",
          content:
            "適用於許多無法等待、但又不屬於明確急診的當日問題。",
          icon: "clock",
          link: {
            text: "緊急與當日就醫",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "如果不確定該去哪裡，可透過電話或線上取得護士諮詢。電話支援提供多種語言。",
          icon: "info",
          link: { text: "Health811 服務條目", url: "/local-services/health811" },
        },
        {
          title: "心理健康危機支援",
          content:
            "隨時可致電或傳簡訊至 9-8-8（自殺危機熱線），也可使用本地危機支援，例如 AMHS-KFLA 24 小時危機熱線。",
          icon: "heart",
          link: { text: "心理健康服務清單", url: "/local-services?category=mental-health" },
        },
        {
          title: "性暴力支援",
          content:
            "如果您需要即時的情緒支援、權益倡導或安全計劃，請使用專門的危機支援服務。",
          icon: "shield",
          link: {
            text: "支援服務清單",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "學生緊急就醫選擇",
          content:
            "如果您是學生，請先確認校園健康服務是否是處理非急診需求的最佳第一站。",
          icon: "stethoscope",
          link: { text: "學生健康服務清單", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "如果您仍然不確定",
      type: "callout",
      content:
        "當問題並非明顯危及生命、但您擔心等待會有風險時，請先致電 Health811。如果有人可能不安全、病情可能迅速惡化，或您無法及時獲得合適的協助，請使用緊急救援服務。",
      link: { text: "致電 Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "可以的話請帶上這些",
      type: "checklist",
      items: [
        "健康卡、IFHP 文件或您持有的任何保險卡",
        "藥物清單或藥瓶的照片",
        "症狀開始的時間，以及任何使症狀加重的因素",
        "把口譯需求寫下來，以防之後太緊張而忘記",
        "手機充電器，以及（如果對您有幫助）一位陪同人士",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "尋找基層醫療",
  description:
    "如果您還沒有固定的醫療提供者，了解在金斯頓獲得常規醫療服務的各種途徑。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：尋找家庭醫生或執業護士",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect 官方指引。",
    },
    {
      title: "Kingston Community Health Centres（金斯頓社區健康中心）",
      url: "https://kchc.ca/",
      note: "本地社區健康中心服務的官方資訊。",
    },
    {
      title: "Queen's（皇后大學）Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "面向皇后大學學生的官方學生健康資訊。",
    },
    {
      title: "St. Lawrence College（聖勞倫斯學院）Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "面向聖勞倫斯學院學生的官方學生健康資訊。",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "什麼是基層醫療",
      type: "default",
      content:
        "基層醫療是指您處理日常健康需求時通常先去的地方，包括健康檢查、藥物續開、慢性病照護、轉介、預防保健，以及緊急問題之後的後續跟進。\n\n在金斯頓，您的常規基層醫療途徑可能包括家庭醫生、執業護士、社區健康中心、校園診所，或在等待更穩定的醫療安排期間組合使用一些臨時選擇。",
    },
    {
      id: "access-matrix",
      title: "基層醫療的各種途徑",
      type: "table",
      columns: ["途徑", "適合", "誰可以使用", "如何開始"],
      rows: [
        {
          cells: [
            "家庭醫生或執業護士",
            "持續的常規照護和長期健康規劃",
            "能夠在醫療提供者名冊中登記的患者",
            "使用 Health Care Connect，並留意本地接收新患者的消息",
          ],
        },
        {
          cells: [
            "社區健康中心",
            "社區型照護、低門檻支援，以及部分針對新移民或複雜需求的照護",
            "資格視乎個別計劃和接收狀態",
            "直接聯絡該機構，詢問接收新患者的安排",
          ],
        },
        {
          cells: [
            "學生健康服務",
            "在學學生可較快獲得服務",
            "僅限透過學校符合資格的學生",
            "使用您校園的健康或身心健康服務",
          ],
        },
        {
          cells: [
            "免預約診所或緊急當日就醫",
            "等待期間的短期照護，或您的固定醫療提供者無法應診時",
            "面向公眾，但受每日接診規則限制",
            "出發前先確認當日的就診安排",
          ],
        },
        {
          cells: [
            "線上基層醫療",
            "部分續藥、諮詢和常規問題",
            "因提供者和保險而異",
            "先確認該提供者在線上能安全處理哪些問題、不能處理哪些問題",
          ],
        },
      ],
      caption:
        "最合適的途徑取決於您的資格、緊急程度，以及您需要的是短期還是長期照護。",
    },
    {
      id: "if-you-have-no-provider",
      title: "如果您沒有固定的醫療提供者",
      type: "steps",
      items: [
        "透過官方省級途徑登記：如果您沒有家庭醫生或執業護士，請使用 Health Care Connect。",
        "確認您是否符合校園或社區健康服務的資格：學生應先從學校診所開始。部分社區健康服務有特定的優先接收對象。",
        "制定一個安全的臨時計劃：了解在等待期間您可以使用哪些免預約、緊急、線上、藥房和心理健康服務。",
        "自己保管好記錄：保存藥物清單、檢查結果、轉介信，以及曾為您診治的醫護人員姓名。",
      ],
    },
    {
      id: "while-you-wait",
      title: "等待期間可以做什麼",
      type: "checklist",
      items: [
        "在合適的情況下，使用免預約、緊急或線上就診處理短期需求",
        "向藥房詢問可能提供的續藥協助或輕微病症診治服務",
        "保持一份最新的藥物清單，每次就診都隨身攜帶",
        "當就醫比較分散時，帶上重要檢查結果或出院文件的副本",
        "盡量在同一間診所做後續跟進，讓您的照護更連貫一些",
      ],
    },
    {
      id: "next-best-option",
      title: "如果您的需求緊急但不是急診",
      type: "callout",
      content:
        "沒有家庭醫生並不代表您應該延誤重要的醫療。先用合適的短期選擇處理眼前的問題，待緊急問題處理好之後，再為後續的連續照護做計劃。",
      link: { text: "搜尋基層醫療選項", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "費用與保險",
  description:
    "以淺白語言介紹 OHIP、IFHP、Canadian Dental Care Plan（加拿大牙科保健計劃）、學生或私人保險，以及常見的自費項目。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：申請 OHIP 並領取健康卡",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "OHIP 官方指引。",
    },
    {
      title: "加拿大：IFHP（聯邦臨時健康計劃）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "IFHP 保障範圍的官方資訊。",
    },
    {
      title: "Ontario Drug Benefit（安省藥物福利計劃）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "省級藥物保障的官方指引。",
    },
    {
      title: "安大略省：處方藥費用過高時的協助",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Trillium Drug Program（延齡草藥物計劃）官方指引。",
    },
    {
      title: "加拿大：Canadian Dental Care Plan（加拿大牙科保健計劃）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "聯邦牙科保障計劃的官方資訊與資格條件。",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "保險基礎知識",
      type: "default",
      content:
        "在安省，保險保障取決於您的法律身份、年齡、收入、計劃資格，以及您是否有學校或私人保險。\n\n對符合 OHIP 資格的患者來說，許多醫療上必要的醫生和醫院服務都有保障。但這**並不**代表一切都免費。藥物、牙科、視力保健、表格、病假證明以及許多專職醫療服務，往往需要另外的保障或自費支付。\n\n如果您是新來的，有個好消息：**OHIP 沒有等候期**。只要符合資格，您抵達安省後即可申請，申請獲批後保障便開始生效。不要等到生病了才申請。",
    },
    {
      id: "coverage-matrix",
      title: "各類保障一覽",
      type: "table",
      columns: [
        "保障類型",
        "通常有助於",
        "可能仍不在保障範圍內",
        "下一步該做什麼",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "許多醫療上必要的醫生和醫院服務",
            "許多藥物、牙科、視力保健和表格費用",
            "符合資格就盡早申請，並保持健康卡有效",
          ],
        },
        {
          cells: [
            "IFHP",
            "按照聯邦計劃，為符合資格的難民和難民申請人提供保障",
            "具體細節因類別和服務而異",
            "查閱官方 IFHP 指南，並詢問診所或藥房是否接受",
          ],
        },
        {
          cells: [
            "學校或私人保險",
            "通常有助於支付藥物、心理諮商、牙科、視力和專職醫療費用",
            "保障上限、自付費用和指定服務網絡的規則各有不同",
            "在認定某項服務有保障之前，先閱讀保險手冊",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan（加拿大牙科保健計劃，CDCP）",
            "為沒有私人牙科保險、家庭調整後收入低於 $90,000 的合資格居民提供牙科保障",
            "並非每項治療都有保障，且可能按收入水平需支付部分費用",
            "透過加拿大政府官方 CDCP 頁面查核資格並申請",
          ],
        },
        {
          cells: [
            "沒有有效保障",
            "您可能仍可使用部分服務，但可能需要付費",
            "就診、檢查或藥物的費用可能相當高",
            "就診前先詢問費用，並在合適的情況下尋找社區選項",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "通常不完全在保障範圍內的項目",
      type: "checklist",
      items: [
        "許多處方藥，除非您符合某個公共藥物計劃的資格或有其他保險",
        "牙科護理，除非您符合 Canadian Dental Care Plan（加拿大牙科保健計劃）、Healthy Smiles Ontario、社區牙科計劃或某項福利計劃的資格",
        "特定資格途徑以外的視力保健",
        "物理治療、心理諮商、按摩及其他專職醫療服務，除非有計劃或保險承保",
        "表格、信件、失約費以及許多其他行政收費",
      ],
    },
    {
      id: "drug-coverage",
      title: "藥物保障的途徑",
      type: "default",
      content:
        "藥物保障常常是讓新移民感到意外的地方。看醫生可能有保障，但處方藥仍可能需要付費。\n\n公共藥物計劃可能按年齡、收入和資格提供協助。**Ontario Drug Benefit（安省藥物福利計劃）**為 65 歲及以上人士和某些計劃內的人士承保許多藥物；**OHIP+** 為 24 歲及以下、沒有私人保險的人士承保許多處方藥。安省還有 **Trillium Drug Program（延齡草藥物計劃）**，協助處方藥費用相對家庭收入過高的部分人士。如果您有學校或私人保險，請確認它與公共保障是互相配合還是互相取代。",
    },
    {
      id: "coverage-scenarios",
      title: "常見的保險問題",
      type: "faq",
      faqs: [
        {
          question: "我還沒有 OHIP。還能就醫嗎？",
          answer:
            "可以，但可能需要付費，最佳途徑取決於您的身份和緊急程度。非急診就醫前盡量先詢問費用；如果適用，也可以了解 IFHP 或學校、私人保險的資格。",
        },
        {
          question: "我是國際學生。OHIP 是我唯一的選擇嗎？",
          answer:
            "不一定。許多學生依靠學校或私人保險，而不是 OHIP。請透過學校的官方保險文件和學生健康服務確認保障範圍。",
        },
        {
          question: "如果我的就診有保障，藥物會免費嗎？",
          answer:
            "不一定。就診保障和處方藥保障通常是分開的。",
        },
        {
          question: "牙科有保障嗎？",
          answer:
            "對大多數成年人來說，牙科與 OHIP 是分開的。聯邦的 Canadian Dental Care Plan（加拿大牙科保健計劃）現已為許多沒有私人牙科保險、家庭調整後收入低於 $90,000 的居民提供保障——通常需要報過加拿大稅才符合資格。低收入家庭的兒童可能符合 Healthy Smiles Ontario 的資格，金斯頓也有一間服務特定計劃人士的社區牙科診所。",
        },
        {
          question: "我怎麼知道某項服務是公共、社區還是私營的？",
          answer:
            "使用目錄的篩選功能並查看條目詳情。如果不確定，請在預約前聯絡該服務。",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "就診指南",
  description:
    "就診時需要帶什麼、如何提問，以及如何在就診過程中安全地溝通。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "安大略省：安省的醫療服務",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "醫療系統一般指引。",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "需要攜帶的物品",
      type: "checklist",
      items: [
        "您的健康卡、IFHP 文件或其他保險資料",
        "完整的藥物清單，包括維他命和非處方藥",
        "症狀的名稱、開始時間以及變化情況",
        "您希望在離開前得到解答的問題",
        "近期的檢驗申請單、轉介信、出院文件或檢查結果",
        "把口譯需求寫下來，以免忘記提出",
      ],
    },
    {
      id: "during-the-visit",
      title: "就診過程中",
      type: "steps",
      items: [
        "先說最主要的問題：很多診症時間很短，請從今天最重要的健康問題說起。",
        "使用淺白的語言：您可以直接說「我不明白那個詞」，或者「您能用更簡單的方式解釋嗎？」",
        "把計劃複述一遍：離開前，把接下來的步驟說出來，確認您是否需要做檢查、轉介、續藥或複診。",
        "問清楚情況變差時該怎麼辦：您應該知道什麼時候需要回電、什麼時候使用緊急照護、什麼時候去急診。",
      ],
    },
    {
      id: "interpreter-help",
      title: "口譯與溝通協助",
      type: "default",
      content:
        "如果您需要語言協助，請盡早提出，不要等到診症快結束時。您可以透過「語言」選單用多種語言閱讀本網站，但在治療決定、用藥指示或知情同意方面，網站翻譯不能取代口譯支援。\n\n您可以說：**「I need an interpreter, please.」（請幫我安排一位口譯員。）** Health811（致電 811）也提供多種語言的電話支援。如果有人陪同您就診，請記住：對於複雜或敏感的醫療資訊，家人未必是最合適或最安全的翻譯人選。",
    },
    {
      id: "questions-to-ask",
      title: "值得提出的問題",
      type: "checklist",
      items: [
        "您認為是什麼情況？",
        "我接下來該做什麼？",
        "我需要做檢查、拿檢驗申請單、轉介還是複診？",
        "我大概什麼時候會收到結果？",
        "出現哪些警示徵兆代表我應該回電或尋求緊急協助？",
      ],
    },
    {
      id: "privacy",
      title: "隱私與知情同意",
      type: "default",
      content:
        "您的健康資訊很敏感。如果不確定誰會看到您的資料，請發問。如果您不理解某份表格、知情同意的談話或治療計劃，請放慢節奏，要求對方解釋得更清楚。",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "就診之後",
  description:
    "了解就診之後會發生什麼，包括檢驗申請單、檢查結果、轉介，以及什麼時候應該回電。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre（金斯頓健康科學中心）",
      url: "https://kingstonhsc.ca/",
      note: "本地醫院系統資訊。",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "社區化驗流程與患者入口網站資訊。",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "就診之後通常會發生什麼",
      type: "steps",
      items: [
        "您帶著一個計劃離開：可能包括藥物、檢驗申請單、轉介、複診預約，或留意警示徵兆的指示。",
        "下一步可能需要您自己去辦：例如，您可能需要預約抽血檢驗、影像檢查、到藥房取藥或安排複診。",
        "檢查結果通常會送回開單的醫護人員那裡：化驗所或影像檢查機構不一定會當場向您解釋結果。",
        "不是每個正常結果都會有人致電通知您：請詢問診所的跟進流程，以便知道該期待什麼。",
      ],
    },
    {
      id: "common-terms",
      title: "就診後的常見詞彙",
      type: "table",
      columns: ["詞彙", "淺白解釋", "您通常接下來要做的事"],
      rows: [
        {
          cells: [
            "檢驗申請單（requisition）",
            "一張告訴化驗所或影像檢查診所您需要做什麼檢查的表格",
            "預約或前往檢查，可以的話保留一份副本",
          ],
        },
        {
          cells: [
            "轉介（referral）",
            "一位醫護人員向另一項服務或專科醫生提出的診治請求",
            "等待對方聯絡；如果按指示應有跟進卻一直沒有消息，請回電查詢",
          ],
        },
        {
          cells: [
            "後續跟進（follow-up）",
            "治療、檢查或症狀變化之後的覆檢",
            "離開前問清楚後續跟進的時間和方式",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "什麼時候應該回電",
      type: "checklist",
      items: [
        "您看不懂檢驗申請單、轉介信或用藥指示",
        "對方說會聯絡您，但超過預期時間仍沒有任何消息",
        "您的症狀正在加重，或沒有像預期那樣好轉",
        "藥房、化驗所或影像檢查診所告訴您文件缺少某些內容",
        "您認為某個結果可能被遺漏了，或者您仍然擔心",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "常見情況",
      type: "faq",
      faqs: [
        {
          question: "就診後我需要抽血檢驗。該怎麼做？",
          answer:
            "先確認您是否拿到檢驗申請單，以及化驗所是否需要預約。然後使用服務目錄查找化驗地點。前往時請帶上申請單和您的保險資料。",
        },
        {
          question: "我看不懂檢驗申請單或轉介表格。",
          answer:
            "致電開單的診所，請他們用淺白語言解釋。詢問這份表格的用途、應該送到哪裡、是否需要您自己預約，都是合理的。",
        },
        {
          question: "誰負責跟進檢查結果？",
          answer:
            "通常是開單的醫護人員。請向其診所詢問他們處理正常和異常結果的一般流程。",
        },
        {
          question: "轉介需要等多久？",
          answer:
            "轉介的等候時間差別很大。請詢問您的情況通常要等多久，以及一直沒有消息時該怎麼辦。",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "有用的下一步",
      type: "grid",
      gridItems: [
        {
          title: "查找化驗與影像檢查",
          content:
            "使用目錄查找抽血檢驗、X 光、超音波和影像檢查服務。",
          icon: "file",
          link: { text: "化驗與影像檢查", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "查找藥房",
          content:
            "使用目錄查找藥房、續藥協助和用藥支援。",
          icon: "shield",
          link: { text: "藥房", url: "/local-services?category=pharmacies" },
        },
        {
          title: "需要規劃後續照護？",
          content:
            "如果不知道長期的後續跟進應該在哪裡進行，請查看基層醫療頁面。",
          icon: "stethoscope",
          link: { text: "尋找基層醫療", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "藥物與藥房",
  description:
    "了解安省的處方、續藥、藥劑師協助，以及藥費如何支付。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：藥劑師可以做什麼",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "省級藥劑師與藥房的官方資訊。",
    },
    {
      title: "Ontario Drug Benefit（安省藥物福利計劃）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "省級藥物保障的官方指引。",
    },
    {
      title: "安大略省：處方藥費用過高時的協助",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Trillium Drug Program（延齡草藥物計劃）官方指引。",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "藥劑師可以幫您做什麼",
      type: "default",
      content:
        "藥劑師做的不只是配藥。他們可以解釋如何安全用藥、檢查藥物相互作用，並講解副作用。\n\n在安省，藥劑師還可以**評估並針對 19 種常見輕微病症開立處方**——包括結膜炎（紅眼症）、唇皰疹、（女性）泌尿道感染、蚊蟲叮咬和季節性過敏。持安省健康卡接受評估是免費的，可涵蓋的病症日後還可能繼續增加。\n\n藥房也是詢問實際問題的好地方，例如：**這次續藥急不急？有沒有較便宜的選擇？漏服了一次藥該怎麼辦？**",
    },
    {
      id: "fill-a-prescription",
      title: "如何配處方藥",
      type: "steps",
      items: [
        "取得處方：處方可能是紙本、傳真或以電子方式發送的。",
        "選擇藥房：固定使用同一間藥房，有助他們發現藥物相互作用和續藥記錄方面的問題。",
        "詢問時間和費用：藥房可以告訴您藥什麼時候配好，以及您的保險是否承保。",
        "細心聽取用藥指導：問清楚這種藥是治什麼的、怎麼服用，以及如果沒有效果應該什麼時候回去查詢。",
      ],
    },
    {
      id: "refill-options",
      title: "續藥與用藥問題",
      type: "table",
      columns: ["情況", "建議的第一步", "原因"],
      rows: [
        {
          cells: [
            "我需要常規續藥",
            "先聯絡您常用的藥房或固定的醫護人員",
            "他們能告訴您需要的是續藥、重新開方還是新的預約",
          ],
        },
        {
          cells: [
            "我的醫生聯絡不上，藥可能快用完了",
            "先問藥房有哪些選擇，必要時再使用免預約、線上或緊急就診",
            "最安全的下一步取決於藥物種類和您的具體情況",
          ],
        },
        {
          cells: [
            "我不明白這種藥該怎麼服用",
            "請藥劑師用淺白語言再解釋一遍",
            "這是安全用藥的一部分",
          ],
        },
        {
          cells: [
            "藥費太高了",
            "詢問學名藥（非專利藥）、保險承保情況和公共藥物計劃",
            "藥價各有不同，藥物保障往往與就診本身的保障是分開的",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "藥費可能的支付方式",
      type: "checklist",
      items: [
        "公共藥物計劃（如果您符合資格）",
        "學校或私人保險",
        "公共與私人保障互相配合使用",
        "如果沒有任何計劃承保這種藥物，則自費支付",
      ],
    },
    {
      id: "pharmacy-links",
      title: "需要本地藥房協助？",
      type: "callout",
      content:
        "當您需要盡快解決用藥問題時，請使用目錄查找藥房、續藥支援，以及線上或當日服務。",
      link: { text: "搜尋藥房服務", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "心理健康支援",
  description:
    "金斯頓本地的心理健康、心理諮商、青少年支援與危機求助途徑。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8：自殺危機熱線",
      url: "https://988.ca/",
      note: "官方全國自殺危機熱線。致電或傳簡訊至 9-8-8，免費，24 小時全天候。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "官方成人心理健康與危機支援資訊。",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "安省官方心理健康與成癮協助熱線。",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "官方兒童與青少年心理健康資訊。",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "如果有人可能不安全",
      type: "callout",
      content:
        "如果生命或安全受到即時威脅，請致電 911。如有自殺念頭或難以承受的痛苦，您可以隨時**致電或傳簡訊至 9-8-8**（自殺危機熱線）——免費、保密，24 小時全天候提供英語和法語服務。您也可以致電 AMHS-KFLA 24 小時危機熱線 613-544-4229。不要等待常規預約。",
      link: { text: "心理健康服務清單", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "支援的類型",
      type: "grid",
      gridItems: [
        {
          title: "危機支援",
          content:
            "適用於即時的強烈痛苦、安全方面的擔憂，或等待並不安全的情況。",
          icon: "alert",
        },
        {
          title: "緊急支援",
          content:
            "適用於情況嚴重、需要盡快獲得協助，但並非即時危及生命的緊急情況。",
          icon: "clock",
        },
        {
          title: "常規心理諮商",
          content:
            "適用於持續的焦慮、抑鬱、壓力、哀傷、人際關係問題或人生轉變。",
          icon: "heart",
        },
        {
          title: "兒童與青少年服務",
          content:
            "當需要協助的是兒童或青少年時，請使用專門的青少年心理健康服務。",
          icon: "info",
        },
        {
          title: "校園支援",
          content:
            "對學生來說，先從校園身心健康或心理諮商渠道開始可能是最好的選擇。",
          icon: "stethoscope",
        },
        {
          title: "性暴力支援",
          content:
            "在遭遇性暴力後，可使用專門的危機、心理諮商、權益倡導和安全計劃支援。",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "常見情況下從哪裡開始",
      type: "table",
      columns: ["情況", "最佳第一站", "原因"],
      rows: [
        {
          cells: [
            "我今晚需要心理健康協助",
            "致電或傳簡訊至 9-8-8、致電 AMHS-KFLA 危機熱線；如果安全有風險，請使用急診",
            "當情況讓人感到不安全時，不要等待常規預約",
          ],
        },
        {
          cells: [
            "我需要心理諮商，但目前是安全的",
            "社區心理諮商、家庭醫生、執業護士或私人保險涵蓋的支援",
            "這些途徑可以提供持續照護和轉介",
          ],
        },
        {
          cells: [
            "我的孩子需要協助",
            "兒童或青少年心理健康服務，必要時尋求緊急指引",
            "兒童和青少年通常有獨立的求助途徑",
          ],
        },
        {
          cells: [
            "我是學生",
            "先使用校園健康或心理諮商服務，除非情況不安全或很嚴重",
            "校園服務可能是學生最快的入口",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "常見問題",
      type: "faq",
      faqs: [
        {
          question: "我現在可以致電或傳簡訊給誰？",
          answer:
            "隨時可致電或傳簡訊至 **9-8-8**（自殺危機熱線），免費、24 小時全天候，無需轉介。在金斯頓，AMHS-KFLA 危機熱線 613-544-4229 也是 24 小時接聽。如果安全受到即時威脅，請致電 911。",
        },
        {
          question: "如果我不知道這算不算危機怎麼辦？",
          answer:
            "如果有人可能不安全，不要等到確定了才行動。請使用危機支援或緊急救援服務。",
        },
        {
          question: "如果我今晚需要協助，卻不知道該找誰怎麼辦？",
          answer:
            "請使用本地心理健康目錄頁面或危機支援渠道，不要等到天亮。",
        },
        {
          question: "如果需要協助的是我的孩子怎麼辦？",
          answer:
            "請專門尋找兒童與青少年服務。青少年心理健康的求助途徑通常與成人照護不同。",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "篩檢與預防",
  description:
    "了解安省預防保健、疫苗和篩檢的基礎知識。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health（KFL&A 公共衛生局）",
      url: "https://www.kflaph.ca/",
      note: "本地疫苗與公共衛生資訊。",
    },
    {
      title: "安大略省：安省的醫療服務",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "一般醫療指引。",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "為什麼預防保健很重要",
      type: "default",
      content:
        "預防保健是指盡早發現問題，或在問題變得更嚴重之前加以阻止。這包括疫苗、篩檢、定期量血壓，以及與醫護人員討論風險因素。",
    },
    {
      id: "common-prevention",
      title: "常見的預防事項",
      type: "checklist",
      items: [
        "按時接種疫苗，保持疫苗記錄最新",
        "詢問您的年齡或健康史是否建議做某些篩檢",
        "在常規就診時提出關於血壓、糖尿病或其他風險因素的問題",
        "需要疫苗或預防保健資訊時，使用公共衛生資源",
      ],
    },
    {
      id: "prevention-next",
      title: "需要本地的預防服務？",
      type: "callout",
      content:
        "如果您需要在金斯頓找一個具體的起點，請使用本地服務目錄查找公共衛生、篩檢和藥房條目。",
      link: {
        text: "公共衛生與藥房服務清單",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "專職醫療與社區照護",
  description:
    "透過本頁面了解居家照護、牙科、復健、心理諮商、視力支援，以及哪些可能屬於公共、社區、學生或私營服務。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "官方居家與社區照護協調資訊。",
    },
    {
      title: "加拿大：Canadian Dental Care Plan（加拿大牙科保健計劃）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "聯邦牙科保障計劃的官方資訊與資格條件。",
    },
    {
      title: "Kingston Community Health Centres（金斯頓社區健康中心）",
      url: "https://kchc.ca/",
      note: "官方社區與牙科服務資訊。",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "官方視力支援資訊。",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "什麼是專職醫療與社區照護",
      type: "default",
      content:
        "專職醫療（allied health）是指由物理治療師、職能治療師（occupational therapist）、營養師、社工、心理諮商師、牙醫或視力支援團隊等專業人員提供的照護。社區照護通常是指在醫院以外進行的照護，有時在您的家中、學校、診所或社區計劃中進行。",
    },
    {
      id: "access-payment-matrix",
      title: "就醫途徑與付費一覽",
      type: "table",
      columns: ["途徑", "例子", "付費通常如何運作", "如何開始"],
      rows: [
        {
          cells: [
            "公共資助的居家與社區照護",
            "居家護理、居家治療、照護協調",
            "符合計劃規則時，可能適用公共計劃",
            "從醫護人員轉介或官方居家照護途徑開始",
          ],
        },
        {
          cells: [
            "社區型服務",
            "社區健康中心的牙科或低門檻支援",
            "視乎服務而定，可能有公共或社區資助",
            "直接聯絡該計劃並詢問資格條件",
          ],
        },
        {
          cells: [
            "學校提供的支援",
            "校園心理諮商或健康相關支援",
            "通常與學生資格、學生費用或學生保險掛鈎",
            "先使用您學校的官方服務頁面",
          ],
        },
        {
          cells: [
            "私營專職醫療",
            "物理治療、心理諮商、按摩、私營牙科、私營視力服務",
            "除非有其他計劃承保，通常需要自費",
            "預約前先問清全部費用和保險規則",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "專職醫療與社區照護的例子",
      type: "grid",
      gridItems: [
        {
          title: "居家照護",
          content:
            "適用於在患病、受傷或住院之後需要在家中獲得支援的情況。",
          icon: "clock",
          link: {
            text: "居家照護服務清單",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "牙科護理",
          content:
            "牙科保障與一般的醫生保障是分開的。聯邦的 Canadian Dental Care Plan（加拿大牙科保健計劃）現已為許多沒有私人牙科保險的人提供保障，Healthy Smiles Ontario 和社區牙科診所等計劃也協助特定群體。",
          icon: "shield",
          link: {
            text: "牙科與社區服務清單",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "復健與治療",
          content:
            "物理治療、職能治療及相關服務可能屬於公共、社區或私營，視乎您的就醫途徑而定。",
          icon: "stethoscope",
          link: { text: "專職醫療服務清單", url: "/local-services?category=allied-community" },
        },
        {
          title: "視力支援",
          content:
            "視力支援可能包括輔助器材、定向行動協助和社區支援，也包括醫療性的眼科照護。",
          icon: "info",
          link: {
            text: "視力支援服務清單",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "預約之前",
      type: "checklist",
      items: [
        "詢問是否需要轉介",
        "詢問該服務是公共資助、社區資助還是需要自費",
        "如果是私營服務，問清確切費用和取消規則",
        "確認您的學校或私人保險是否能承擔部分費用",
        "詢問是否需要攜帶病歷、影像資料或醫生證明",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "常見問題與詞彙表",
  description:
    "新移民常見情況、實用問題，以及淺白語言的詞彙解釋。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "安大略省：安省的醫療服務",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "省級醫療服務的一般指引。",
    },
    {
      title: "安大略省：Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "官方護士諮詢指引。",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "新移民常見情況",
      type: "faq",
      faqs: [
        {
          question: "我還沒有 OHIP。我應該先做什麼？",
          answer:
            "先了解您的保險途徑，然後使用本地服務目錄和緊急指引頁面，制定一個安全的臨時計劃。",
        },
        {
          question: "我是國際學生。應該從哪裡開始？",
          answer:
            "先從您的校園健康或身心健康服務以及學校保險文件開始；當這些不夠用時，再使用社區或緊急服務。",
        },
        {
          question: "我需要口譯。",
          answer:
            "請盡早提出。您可以透過「語言」選單用 33 種語言閱讀本網站，也可以把口譯協助分頁中的常用語句出示給工作人員。涉及預約、用藥指示、知情同意和檢查結果討論時，請詢問專業口譯支援。Health811（致電 811）提供多種語言的電話支援。",
        },
        {
          question: "就診後我需要抽血檢驗。",
          answer:
            "先確認您有檢驗申請單，然後在目錄中搜尋化驗與影像檢查服務。",
        },
        {
          question: "我需要續藥，但聯絡不上醫生。",
          answer:
            "先從您的藥房開始，再按藥物種類和緊急程度，酌情使用免預約、線上或緊急就診途徑。",
        },
        {
          question: "我的孩子需要就醫。",
          answer:
            "先對照急診警示徵兆，再參考當日或緊急就醫指引。兒童與青少年的心理健康求助途徑通常與成人照護分開。",
        },
        {
          question: "我今晚需要心理健康協助。",
          answer:
            "隨時可致電或傳簡訊至 9-8-8（自殺危機熱線），或致電 AMHS-KFLA 24 小時危機熱線 613-544-4229。如果安全有風險，請使用急診。不要等待常規預約。",
        },
        {
          question: "我看不懂檢驗申請單或轉介信。",
          answer:
            "致電開單的診所，請他們用淺白語言解釋。您可以詢問它的用途、要送到哪裡，以及由誰負責跟進。",
        },
      ],
    },
    {
      id: "more-questions",
      title: "更多常見問題",
      type: "faq",
      faqs: [
        {
          question: "我沒有醫生，可以直接去急診嗎？",
          answer:
            "急診是留給緊急情況的。如果問題並非明顯危及生命，請先查看緊急指引頁面、致電 Health811、使用免預約診所或其他當日就醫服務。",
        },
        {
          question: "我剛來，不知道哪項服務適合我，怎麼辦？",
          answer:
            "可以使用目錄的篩選功能，按學生、新移民、兒童與青少年、免預約、線上就診、需轉介和保障類型篩選。",
        },
        {
          question: "如果網站上的資訊看起來過時了怎麼辦？",
          answer:
            "請使用頁面或服務條目上的回報表單，這樣下次審核就能集中核實您發現的變化。",
        },
      ],
    },
    {
      id: "glossary",
      title: "詞彙表",
      type: "checklist",
      items: [
        "基層醫療（primary care）：您處理日常和長期健康需求的常規就醫途徑。",
        "執業護士（nurse practitioner，NP）：一種進階執業護士，在許多情況下可以進行評估、診斷、開處方和轉介。",
        "轉介（referral）：一位醫護人員向另一項服務或專科醫生提出的診治請求。",
        "檢驗申請單（requisition）：一張告訴化驗所或影像檢查診所您需要做什麼檢查的表格。",
        "檢傷分流（triage）：根據安全程度和病情輕重，決定誰需要優先獲得緊急照護的過程。",
        "免預約診所（walk-in clinic）：可以不經預約接診患者的診所，受每日接診量限制。",
        "緊急照護（urgent care）：針對緊急但並非明顯危及生命問題的當日照護。",
        "已登記（rostered／attached）患者：與固定的基層醫療提供者建立持續關係的患者。",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "關於本站、可信度與隱私",
  description:
    "了解本指南如何運作、資料來源和審核狀態如何處理，以及如何回報資訊變化。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "專案來源說明",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "面向公眾的摘要，介紹本專案如何處理可信度與資料來源。",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "本網站的用途",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca 是一份以新移民為先的安大略省金斯頓醫療導航指南，旨在協助大家選擇正確的下一步、理解常見的系統術語，並找到可信的本地服務條目。\n\n本網站**不是**即時等候時間工具、預約平台或醫療建議服務。",
    },
    {
      id: "sources",
      title: "可信度與來源機制",
      type: "default",
      content:
        "我們盡可能將本地服務條目連結到官方服務頁面。每個條目都顯示審核狀態和最近審核日期。部分條目已對照官方來源完全核實；其他條目因開放時間、接收新患者或使用規則經常變動，仍需在本地再次核實。\n\n頁面層級的來源區塊展示目前審核週期所使用的主要官方參考資料。",
    },
    {
      id: "accessibility",
      title: "無障礙與語言",
      type: "default",
      content:
        "本網站的設計支援鍵盤操作、以手機瀏覽為優先，並以淺白語言撰寫。\n\n您可以透過頁首的「語言」選單用 **33 種語言**閱讀完整指南——從 العربية 和 Soomaali 到 ਪੰਜਾਬੀ、ትግርኛ、Yorùbá 和 Українська——每個頁面和選單都直接在本網站上提供。所有翻譯均由機器輔助完成；法文、西班牙文、阿拉伯文和簡體中文經過額外的審核，其餘語言則標示為自動翻譯。**英文版仍是參考版本**——如果某句翻譯看起來不清楚或令人意外，請查看英文原文，或請人幫忙確認。\n\n另有數十種語言可在同一選單中透過 Google 翻譯開啟本網站；口譯協助分頁還提供 20 多種語言的緊急常用語句，可出示給工作人員。\n\n服務目錄條目（服務名稱、地址、電話號碼和開放時間）保留英文，以便與官方來源完全一致。\n\n任何形式的翻譯在醫療細節上仍可能出錯，因此涉及預約、用藥指示和知情同意時，請詢問專業口譯支援。Health811（致電 811）提供多種語言的電話支援。",
    },
    {
      id: "privacy",
      title: "隱私",
      type: "default",
      content:
        "本網站不使用侵入式的遠端分析工具。它只在您自己的瀏覽器中保存輕量的改進統計，讓維護者在為維護目的而主動匯出這些資料時，能了解常見搜尋、零結果搜尋、服務瀏覽和問題回報的情況。\n\n請不要透過意見回饋表單或電子郵件傳送私人醫療資訊。",
    },
    {
      id: "contact",
      title: "聯絡方式與回報資訊變化",
      type: "default",
      content:
        "如果某個頁面或服務條目看起來有誤，請使用該頁面上的回報表單。回報應描述問題本身，而不是您的個人健康情況。\n\n一般聯絡電郵：**challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "免責聲明",
      type: "default",
      content:
        "本網站僅供就醫導航和教育用途。它不是醫療建議，也不能取代專業診斷、治療或緊急救助。如果情況可能危及生命，請致電 911。",
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
