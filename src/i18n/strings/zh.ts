import type { UIStrings } from "../types";

export const zh: UIStrings = {
  common: {
    loadingPage: "页面加载中……",
    directoryEnglishNote:
      "服务目录以英文显示，以确保服务名称、地址、电话号码和开放时间与官方来源完全一致。",
  },
  header: {
    emergencyBanner: "有生命危险的紧急情况？请立即拨打 911。",
    tagline: "安大略省金斯顿（Kingston）面向新移民的医疗导航指南",
    languageButton: "语言",
    languageButtonAria: "语言与口译帮助",
    openNavigation: "打开导航菜单",
    primaryNavLabel: "主导航",
  },
  languageModal: {
    title: "语言与口译帮助",
    description:
      "请用您最熟悉的语言阅读本指南。在涉及医疗的对话中，如有需要请主动要求口译服务。",
    chooseLanguageTitle: "选择您的语言",
    chooseLanguageNote:
      "本指南已在本站内完整翻译为 33 种语言，还有数十种语言可通过自动翻译打开。服务目录保留英文，以便与官方来源完全一致。如有任何内容不清楚，请以英文版本为准。",
    safetyTitle: "安全提示",
    safetyBody:
      "网站翻译仅供阅读和理解之用。涉及预约、检查说明、药物或知情同意时，请询问诊所或医院能否提供专业口译。Health811（拨打 811）提供多种语言的电话支持。",
    phrasesTitle: "可出示给工作人员的常用语句",
    phrasesNote: "指向您的语言，把这些句子出示给前台或医护人员。",
    callHealth811: "拨打 Health811",
    accessibilityCta: "无障碍与可信度说明",
    close: "关闭语言帮助对话框",
  },
  moreLanguages: {
    title: "更多语言（自动翻译）",
    description:
      "所有语言都可以在这一个菜单中使用——包括索马里语、约鲁巴语、伊博语、豪萨语、阿姆哈拉语、提格里尼亚语、斯瓦希里语、乌克兰语、波斯语、乌尔都语、旁遮普语、泰米尔语和越南语。",
    selectLabel: "选择任意语言",
    selectPlaceholder: "所有语言——请选择……",
    openButton: "用此语言打开",
    disclaimer:
      "标注为自动翻译的语言会通过 Google 翻译打开本页面，并在您继续浏览时保持您的语言。自动翻译未经本项目审核——适合一般阅读，但涉及医疗细节时，请向医护人员或口译员确认。",
  },
  funding: {
    acknowledgment: "本项目获得安大略省医学生协会（OMSA）的资助支持。",
    logoAlt: "安大略省医学生协会（OMSA）标志",
  },
  languagePicker: {
    searchPlaceholder: "搜索语言……",
    onSiteGroup: "本站内已翻译",
    proxyGroup: "更多语言（通过 Google 翻译）",
    reviewedBadge: "已审核",
    automaticBadge: "自动翻译",
    interpreterTab: "口译帮助与常用语句",
    noMatches: "没有符合您搜索的语言。",
    note: "翻译由机器辅助完成；如有任何内容不清楚，请以英文版本为准。Google 翻译组中的语言会在 Google 的外部网站上打开本页面。服务目录保留英文，以便与官方来源完全一致。",
  },
  navigation: [
    {
      title: "从这里开始",
      items: [
        {
          label: "现在需要帮助",
          to: "/need-help-now",
          description: "紧急决策与危机支持",
        },
        {
          label: "从这里开始",
          to: "/start-here",
          description: "初到安省，了解医疗系统",
        },
        {
          label: "寻找基础医疗",
          to: "/get-a-family-doctor",
          description: "家庭医生、执业护士、社区健康中心与学生选项",
        },
      ],
    },
    {
      title: "了解就医",
      items: [
        {
          label: "费用与保险",
          to: "/costs-and-coverage",
          description: "OHIP、IFHP、私人保险与药物保障",
        },
        {
          label: "就诊指南",
          to: "/your-visit",
          description: "需要带什么、如何提问",
        },
        {
          label: "就诊之后",
          to: "/after-visit",
          description: "检查、申请单、转诊与后续跟进",
        },
        {
          label: "药物与药房",
          to: "/medicines-and-pharmacies",
          description: "处方、续药与药剂师帮助",
        },
      ],
    },
    {
      title: "本地帮助",
      items: [
        {
          label: "本地服务",
          to: "/local-services",
          description: "搜索金斯顿的服务",
        },
        {
          label: "心理健康",
          to: "/mental-health",
          description: "危机、紧急、常规与青少年支持",
        },
        {
          label: "筛查与预防",
          to: "/screening-prevention",
          description: "疫苗与预防保健",
        },
        {
          label: "辅助与社区照护",
          to: "/community-allied-health",
          description: "居家照护、康复、牙科与社区支持",
        },
        {
          label: "常见问题",
          to: "/faq",
          description: "新移民常见情况与词汇表",
        },
        {
          label: "关于与可信度",
          to: "/about",
          description: "信息来源、隐私、无障碍与反馈",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "现在就需要帮助？",
    items: {
      "call-911": {
        label: "拨打 911",
        description: "有生命危险的紧急情况",
      },
      "call-811": {
        label: "拨打 Health811",
        description: "护士咨询，全天 24 小时",
      },
      "call-988": {
        label: "拨打或发短信 9-8-8",
        description: "自杀危机热线，全天 24 小时",
      },
      "call-crisis": {
        label: "拨打危机热线",
        description: "AMHS-KFLA 危机热线",
      },
      "urgent-guide": {
        label: "紧急护理指南",
        description: "下班后与当日就医的选择",
      },
      "mental-health": {
        label: "心理健康支持",
        description: "危机、紧急与常规支持途径",
      },
    },
  },
  home: {
    seoTitle: "金斯顿医疗指南",
    seoDescription:
      "面向新移民的安大略省金斯顿医疗导航：紧急帮助、本地服务、保险基础、口译指引，以及就诊后的下一步。",
    kicker: "安大略省金斯顿",
    heroTitle: "在金斯顿找到合适的医疗服务，不用靠猜",
    heroLead:
      "从紧急帮助、新移民入门、保险知识或本地服务目录开始。本指南语言通俗、适合手机浏览，并坦诚标注哪些信息仍需再次核实。",
    cardNeedHelp: {
      title: "现在需要帮助",
      body: "急诊、紧急护理、危机支持与下班后的就医指引。",
    },
    cardStartHere: {
      title: "从这里开始",
      body: "了解安省医疗系统如何运作，以及第一步该做什么。",
    },
    cardSearch: {
      title: "搜索服务",
      body: "查找抽血化验、续药、免预约就诊、心理健康等服务。",
    },
    cardLanguage: {
      title: "语言帮助",
      body: "用您的语言阅读本指南，并获取口译指引和常用语句。",
    },
    quickDecisionsKicker: "快速判断",
    quickDecisionsTitle: "先从这些问题开始",
    quickDecisionLines: [
      "如果可能危及生命，请立即拨打 911。",
      "如果今晚不确定该去哪里，请拨打 Health811。",
      "如有自杀念头或难以承受的痛苦，可随时拨打或发短信 9-8-8。",
      "如果您没有家庭医生，请把免预约诊所（walk-in）、社区健康和学生服务纳入您的就医计划。",
      "如果您需要抽血化验、X 光、续药或了解转诊进展，请使用本地目录查找下一步。",
    ],
    trustNoteTitle: "可信度说明",
    trustNoteBody:
      "这是一份静态指南，不显示实时等候时间。开放时间、收新患者等时效性信息可能很快变化，因此每条服务都附有来源链接和审核状态。",
    newcomerKicker: "新移民快速入门",
    newcomerTitle: "初到金斯顿的第一步",
    newcomerSteps: [
      {
        title: "1. 了解您的保险",
        body: "了解 OHIP（安省健康保险）、IFHP（联邦临时健康计划）、私人保险，以及通常不在保障范围内的项目。OHIP 没有等待期——抵达后请尽快申请。",
      },
      {
        title: "2. 规划您的基础医疗途径",
        body: "了解家庭医生、执业护士（nurse practitioner）、学生诊所、社区健康中心和免预约就诊之间的区别。",
      },
      {
        title: "3. 了解接下来会发生什么",
        body: "了解检查申请单（requisition）、转诊、检查结果和后续跟进电话通常意味着什么。",
      },
    ],
    languageSupportKicker: "语言支持",
    languageSupportTitle: "需要帮助时可出示这些语句",
    openLanguageHelp: "打开语言帮助",
    commonTasksKicker: "常见事项",
    commonTasksTitle: "按您要办的事来搜索",
    openDirectory: "打开完整目录",
    tasks: [
      {
        title: "抽血化验或 X 光",
        body: "查找化验和影像检查服务。",
      },
      {
        title: "处方续药",
        body: "查找药房和续药帮助。",
      },
      {
        title: "心理健康支持",
        body: "危机、紧急、常规与青少年支持。",
      },
      {
        title: "健康卡或新移民支持",
        body: "查找 ServiceOntario、ISKA 和电话咨询。",
      },
    ],
    featuredKicker: "推荐服务",
    featuredTitle: "适合作为起点的服务",
    trustKicker: "可信度与来源",
    trustTitle: "坦诚标明哪些信息已核实、哪些仍需再次核实",
    trustBody:
      "部分服务条目已对照官方本地来源核实。其他条目因开放时间、收新患者或准入规则经常变动，仍需本地再核实。我们公开标注这一状态，并鼓励用户报告过时信息。",
    trustChecklistTitle: "依赖某条服务信息前请先阅读",
    trustChecklist: [
      "查看是否有官方来源链接。",
      "查看最近一次审核日期。",
      "出发前确认当日开放时间和免预约安排。",
      "如发现信息有变，请使用报告表单。",
    ],
    trustLink: "查看来源与可信度说明",
  },
  contentPage: {
    breadcrumbHome: "首页",
    badge: "通俗语言指南",
    reviewStatusTitle: "审核状态",
    reviewLabels: {
      reviewed: "已对照本项目当前使用的来源集进行审核。",
      "general-guidance":
        "已作为一般性指引审核。本地细节仍可能很快变化。",
      "needs-local-recheck":
        "内容有参考价值，但本地细节仍需进一步核实。",
    },
    lastReviewPrefix: "页面最近审核：",
    noReviewDate: "本页面没有记录页面级的审核日期。",
    translationAside:
      "您可以通过“语言”菜单用多种语言阅读本页面。涉及预约、药物、知情同意和检查说明时，请询问是否有口译支持。",
    share: "分享",
    print: "打印",
    sourcesTitle: "本页面的信息来源",
    sourcesNote:
      "以下是本页面当前审核所使用的主要官方或第一手来源。在两次审核之间，本地流程仍可能发生变化。",
    onThisPage: "本页内容",
    sourcesAnchorLabel: "信息来源",
    translationReminderTitle: "翻译提示",
    translationReminderBody:
      "凡是影响您治疗或安全的事项，请向医护人员或口译员确认，不要只依赖翻译。",
    linkCopiedTitle: "链接已复制",
    linkCopiedBody: "您现在可以把本页链接粘贴到任何地方。",
    shareCancelled: "已取消分享",
  },
  directory: {
    seoTitle: "本地服务",
    seoDescription:
      "搜索安大略省金斯顿对新移民友好的医疗、心理健康、药房、保险与导航支持服务。",
    kicker: "金斯顿服务目录",
    title: "搜索本地健康服务",
    lead: "可按服务、症状、文件或要办的事搜索。例如：免预约（walk in）、下班后、抽血化验、续药、健康卡、学生诊所或新移民支持。",
    searchPlaceholder: "按需求、服务名称、地址或关键词搜索",
    sortAriaLabel: "结果排序",
    sortRelevance: "排序：相关度",
    sortAlphabetical: "排序：按字母 A 到 Z",
    sortRecentlyReviewed: "排序：最近审核",
    sortArea: "排序：区域",
    gridViewLabel: "网格视图",
    listViewLabel: "列表视图",
    allServices: "全部服务",
    audienceTitle: "适用人群",
    accessTitle: "就诊方式",
    careLevelTitle: "护理级别",
    coverageAreaTitle: "保险与区域",
    areaLabel: "区域",
    showingServices: "显示 {count} 项服务",
    resetFilters: "重置筛选",
    trustPanelTitle: "可信度与审核状态",
    trustPanelBody:
      "本目录是静态信息，并非实时数据。我们会显示最近一次记录的审核日期、可用的官方来源链接，以及哪些条目仍需本地再核实。出发前请确认开放时间和当日就诊安排。",
    verifiedLabel: "已核实",
    needsRecheckLabel: "需再核实",
    noResultsTitle: "没有符合这些筛选条件的服务",
    noResultsBody:
      "试试更宽泛的搜索词，如抽血化验、续药、心理健康、健康卡或免预约。您也可以清除所有筛选条件重新开始。",
    notSureTitle: "不确定从哪里开始？",
    notSureBody:
      "如果您不确定需要的是急诊、紧急护理、免预约诊所还是药房帮助，请先查看紧急指引页面，或拨打 Health811 获取护士咨询。",
    needHelpNowCta: "现在需要帮助",
    callHealth811: "拨打 Health811",
  },
  filters: {
    audience: {
      newcomers: "新移民",
      students: "仅限学生或校园",
      "children-youth": "儿童或青少年",
      adults: "成人",
      families: "家庭",
      "unattached-patients": "没有家庭医生",
    },
    access: {
      "walk-in": "免预约",
      appointment: "需预约",
      referral: "需转诊",
      virtual: "线上就诊",
    },
    level: {
      emergency: "急诊",
      urgent: "紧急",
      primary: "基础医疗",
      community: "社区",
    },
    payment: {
      public: "公共资助",
      community: "社区 / 低门槛",
      mixed: "混合保障",
      "student-plan": "学生保险计划",
      private: "自费",
    },
    location: {
      downtown: "市中心",
      "north-end": "北区",
      "west-end": "西区",
      campus: "校园",
      online: "线上",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "急诊与紧急护理",
      shortLabel: "急诊与紧急",
    },
    "primary-care": { label: "基础医疗", shortLabel: "基础医疗" },
    "community-health": {
      label: "社区健康中心",
      shortLabel: "社区健康",
    },
    "mental-health": {
      label: "心理健康与危机支持",
      shortLabel: "心理健康",
    },
    "public-health": { label: "公共卫生", shortLabel: "公共卫生" },
    "labs-imaging": {
      label: "化验与影像检查",
      shortLabel: "化验与影像",
    },
    pharmacies: {
      label: "药物与药房",
      shortLabel: "药房",
    },
    "allied-community": {
      label: "辅助与社区照护",
      shortLabel: "辅助照护",
    },
    "navigation-support": {
      label: "导航与保险支持",
      shortLabel: "导航支持",
    },
  },
  serviceCard: {
    whenToUse: "适用情况：",
    accessLabel: "就诊方式",
    eligibilityLabel: "适用条件",
    eligibilityFallback: "除非官方来源另有说明，否则向公众开放。",
    hoursLabel: "开放时间",
    phoneLabel: "电话",
    trustDetails: "可信度与来源详情",
    lastReview: "最近审核：",
    officialSource: "官方来源",
    call: "拨打电话",
    officialWebsite: "官方网站",
    directions: "路线",
    viewDetails: "查看详情",
  },
  serviceDetail: {
    backToServices: "返回本地服务",
    whenToUseTitle: "什么情况下使用此服务",
    eligibilityTitle: "适用条件与就诊方式",
    eligibilityFallback:
      "如果不确定此服务是否对您开放，请查看官方来源。",
    whatToBringTitle: "需要携带的物品",
    contactTitle: "联系方式与操作",
    callNow: "立即拨打",
    officialWebsite: "官方网站",
    directions: "路线",
    trustTitle: "可信度与来源",
    lastReview: "最近审核：",
    viewOfficialSource: "查看官方来源",
  },
  verification: {
    verified: {
      label: "已对照官方来源核实",
      shortLabel: "已核实",
      description:
        "核心信息已在最近一轮审核中对照官方来源核实。",
    },
    "partially-verified": {
      label: "已附官方来源链接",
      shortLabel: "官方链接",
      description:
        "已附官方来源链接，但其中一项或多项信息可能经常变动，出发前请先确认。",
    },
    "community-reported": {
      label: "社区报告",
      shortLabel: "社区报告",
      description:
        "此信息来自社区报告，仍需独立核实确认。",
    },
    "needs-recheck": {
      label: "需再核实",
      shortLabel: "需再核实",
      description:
        "此条目仍然显示，因为它可能仍有帮助，但关键信息可能已过时。使用前请先确认。",
    },
  },
  feedback: {
    badge: "报告过时信息",
    title: "帮助我们保持本指南的准确性",
    body: "这会打开一封预填好页面或服务信息的电子邮件。请勿包含私人医疗信息。",
    issueTypeLabel: "问题类型",
    issueTypes: {
      "outdated hours": "开放时间已过时",
      "wrong phone or website": "电话或网站有误",
      "eligibility or access issue": "适用条件或就诊方式问题",
      "translation or accessibility problem": "翻译或无障碍问题",
      "missing service or content": "缺少服务或内容",
      other: "其他",
    },
    detailsLabel: "我们应该核实什么？",
    detailsPlaceholder:
      "例如：电话号码变了、某诊所现在只接受预约，或某个链接已失效。",
    contactLabel: "联系方式（选填）",
    contactPlaceholder: "如希望收到回复，请填写电子邮箱",
    openEmail: "打开报告邮件",
    copyText: "复制报告文本",
    thanks:
      "谢谢您。这些报告帮助我们优先处理过时页面、失效链接和需要本地再核实的条目。",
    toastEmailTitle: "邮件草稿已打开",
    toastEmailBody: "您的报告已包含页面或服务的相关信息。",
    toastCopyTitle: "问题摘要已复制",
    toastCopyBody: "如有需要，您可以把它粘贴到自己的邮件客户端中。",
  },
  footer: {
    description:
      "一份面向安大略省金斯顿的通俗语言医疗导航指南。本网站不提供医疗建议，也不显示实时等候时间。出发前请务必通过官方来源确认时效性信息。",
    trustModelTitle: "可信度机制",
    trustModelBody:
      "我们会显示官方来源链接、审核日期，以及仍需再核实的条目。如发现信息有误，请在相应页面或服务中报告。",
    beforeYouGo: {
      title: "出发之前",
      body: "请确认官方开放时间、是否需要预约或转诊，以及需要携带哪些文件。",
    },
    languageHelp: {
      title: "语言帮助",
      body: "通过“语言”菜单用您的语言阅读本指南。在涉及医疗、准确性很重要的对话中，请要求口译服务。",
    },
    privacy: {
      title: "隐私",
      body: "本网站使用存储在您浏览器中的本地化、注重隐私的改进日志，不会向远程服务器发送个人分析数据。",
    },
    copyrightSuffix: "安大略省金斯顿的社区信息资源。",
    disclaimer: "免责声明",
    privacyLink: "隐私",
    sourcesLink: "信息来源",
    reportLink: "报告过时信息",
  },
  notFound: {
    seoTitle: "未找到页面",
    seoDescription:
      "找不到您请求的页面。请从紧急帮助、新移民入门、本地服务或常见问题开始。",
    badge: "404",
    title: "我们找不到该页面",
    body: "如果您急需就医，请先查看紧急指引，或搜索金斯顿服务目录。",
    startHere: "从这里开始",
    needHelpNow: "现在需要帮助",
    localServices: "本地服务",
    faq: "常见问题",
  },
};
