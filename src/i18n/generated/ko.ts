import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "페이지를 불러오는 중...",
    directoryEnglishNote:
      "서비스 목록은 기관 이름, 주소, 전화번호, 운영 시간이 공식 출처와 정확히 일치하도록 영어로 표시됩니다.",
  },
  header: {
    emergencyBanner: "생명이 위급한 응급 상황인가요? 지금 바로 911에 전화하세요.",
    tagline: "온타리오주 킹스턴의 신규 정착자를 위한 의료 길잡이",
    languageButton: "언어",
    languageButtonAria: "언어 및 통역 도움",
    openNavigation: "메뉴 열기",
    primaryNavLabel: "주 메뉴",
  },
  languageModal: {
    title: "언어 및 통역 도움",
    description:
      "가장 편한 언어로 이 안내서를 읽으세요. 의료 상담에서는 필요할 때 통역사를 요청하세요.",
    chooseLanguageTitle: "언어를 선택하세요",
    chooseLanguageNote:
      "이 안내서는 이 사이트 안에서 33개 언어로 완전히 번역되어 있으며, 수십 개의 다른 언어는 자동 번역으로 열 수 있습니다. 서비스 목록은 공식 출처와 정확히 일치하도록 영어로 유지됩니다. 내용이 불분명해 보이면 영어가 기준 버전입니다.",
    safetyTitle: "안전 안내",
    safetyBody:
      "웹사이트 번역은 읽고 이해하기 위한 것입니다. 진료 예약, 검사 안내, 약, 동의와 관련해서는 클리닉이나 병원에 전문 통역사를 제공할 수 있는지 문의하세요. Health811(811번 전화)은 여러 언어로 전화 지원을 제공합니다.",
    phrasesTitle: "직원에게 보여 줄 간단한 문구",
    phrasesNote:
      "본인의 언어를 가리키고 접수처나 의료진에게 이 문구를 보여 주세요.",
    callHealth811: "Health811에 전화하기",
    accessibilityCta: "접근성과 신뢰성",
    close: "언어 도움 창 닫기",
  },
  moreLanguages: {
    title: "더 많은 언어 (자동 번역)",
    description:
      "소말리어, 요루바어, 이그보어, 하우사어, 암하라어, 티그리냐어, 스와힐리어, 우크라이나어, 페르시아어(파르시), 우르두어, 펀자브어, 타밀어, 베트남어를 포함한 모든 언어를 이 메뉴 하나에서 사용할 수 있습니다.",
    selectLabel: "원하는 언어를 선택하세요",
    selectPlaceholder: "모든 언어 — 하나를 선택하세요…",
    openButton: "이 언어로 열기",
    disclaimer:
      "자동으로 표시된 언어는 Google 번역을 통해 이 페이지를 열며, 계속 둘러보는 동안 선택한 언어가 유지됩니다. 자동 번역은 이 프로젝트에서 검토하지 않습니다. 읽기에는 좋지만, 의학적 세부 내용은 의료진이나 통역사에게 확인하세요.",
  },
  funding: {
    acknowledgment:
      "이 프로젝트는 Ontario Medical Students Association (OMSA)의 보조금 지원을 받고 있습니다.",
    logoAlt: "Ontario Medical Students Association (OMSA) 로고",
  },
  languagePicker: {
    searchPlaceholder: "언어 검색…",
    onSiteGroup: "이 사이트에서 번역됨",
    proxyGroup: "Google 번역을 통한 더 많은 언어",
    reviewedBadge: "검토됨",
    automaticBadge: "자동",
    interpreterTab: "통역 도움과 문구",
    noMatches: "검색과 일치하는 언어가 없습니다.",
    note: "번역은 기계의 도움을 받아 만들어졌으며, 내용이 불분명해 보이면 영어가 기준 버전입니다. Google 번역 그룹의 언어는 외부 Google 사이트에서 이 페이지를 엽니다. 서비스 목록은 공식 출처와 정확히 일치하도록 영어로 유지됩니다.",
  },
  navigation: [
    {
      title: "여기서 시작",
      items: [
        {
          label: "지금 도움이 필요해요",
          to: "/need-help-now",
          description: "긴급한 판단과 위기 지원",
        },
        {
          label: "여기서 시작하기",
          to: "/start-here",
          description: "온타리오 의료가 처음이라면",
        },
        {
          label: "일차 의료 찾기",
          to: "/get-a-family-doctor",
          description: "가정의, 전문간호사(NP), 지역보건센터(CHC), 학생 옵션",
        },
      ],
    },
    {
      title: "의료 이해하기",
      items: [
        {
          label: "비용과 보장",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, 민간 보험, 약값 보장",
        },
        {
          label: "진료 방문",
          to: "/your-visit",
          description: "무엇을 가져가고 어떻게 질문할지",
        },
        {
          label: "진료 후",
          to: "/after-visit",
          description: "검사, 검사 의뢰서, 전문의 의뢰, 후속 조치",
        },
        {
          label: "약과 약국",
          to: "/medicines-and-pharmacies",
          description: "처방전, 약 재처방, 약사의 도움",
        },
      ],
    },
    {
      title: "지역 도움",
      items: [
        {
          label: "지역 서비스",
          to: "/local-services",
          description: "킹스턴 서비스 검색",
        },
        {
          label: "정신 건강",
          to: "/mental-health",
          description: "위기, 긴급, 일반, 청소년 지원",
        },
        {
          label: "검진과 예방",
          to: "/screening-prevention",
          description: "백신과 예방 의료",
        },
        {
          label: "보조·지역사회 의료",
          to: "/community-allied-health",
          description: "재택 돌봄, 재활, 치과, 지역사회 지원",
        },
        {
          label: "자주 묻는 질문",
          to: "/faq",
          description: "신규 정착자가 자주 겪는 상황과 용어 설명",
        },
        {
          label: "소개와 신뢰성",
          to: "/about",
          description: "출처, 개인정보, 접근성, 의견 보내기",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "지금 바로 도움이 필요하신가요?",
    items: {
      "call-911": {
        label: "911에 전화",
        description: "생명이 위급한 응급 상황",
      },
      "call-811": {
        label: "Health811에 전화",
        description: "간호사 상담, 연중무휴 24시간",
      },
      "call-988": {
        label: "9-8-8 전화 또는 문자",
        description: "자살 위기 상담전화, 연중무휴 24시간",
      },
      "call-crisis": {
        label: "위기 상담전화에 전화",
        description: "AMHS-KFLA 위기 상담전화",
      },
      "urgent-guide": {
        label: "긴급 진료 안내",
        description: "야간 및 당일 진료 옵션",
      },
      "mental-health": {
        label: "정신 건강 지원",
        description: "위기, 긴급, 일반 경로",
      },
    },
  },
  home: {
    seoTitle: "킹스턴 의료 안내서",
    seoDescription:
      "온타리오주 킹스턴의 신규 정착자를 위한 의료 길잡이: 긴급 도움, 지역 서비스, 보장의 기초, 통역 안내, 진료 후 다음 단계.",
    kicker: "온타리오주 킹스턴",
    heroTitle: "킹스턴에서 헤매지 않고 알맞은 의료 찾기",
    heroLead:
      "긴급 도움, 신규 정착자 기초, 보장, 또는 지역 서비스 목록에서 시작하세요. 이 안내서는 쉬운 말로 쓰였고, 모바일에서 보기 편하며, 아직 재확인이 필요한 부분을 솔직하게 알려 드립니다.",
    cardNeedHelp: {
      title: "지금 도움이 필요해요",
      body: "응급, 긴급 진료, 위기, 야간 진료 안내.",
    },
    cardStartHere: {
      title: "여기서 시작하기",
      body: "온타리오 의료가 어떻게 작동하는지, 무엇을 먼저 해야 하는지.",
    },
    cardSearch: {
      title: "서비스 검색",
      body: "혈액 검사, 약 재처방, 워크인 진료, 정신 건강 등을 찾아보세요.",
    },
    cardLanguage: {
      title: "언어 도움",
      body: "이 안내서를 내 언어로 읽고, 통역 안내와 간단한 문구도 확인하세요.",
    },
    quickDecisionsKicker: "빠른 판단",
    quickDecisionsTitle: "이 질문들로 시작하세요",
    quickDecisionLines: [
      "생명이 위급할 수 있다면 지금 바로 911에 전화하세요.",
      "오늘 밤 어디로 가야 할지 모르겠다면 Health811에 전화하세요.",
      "자살 생각이 들거나 감당하기 힘든 고통이 있다면 언제든지 9-8-8에 전화하거나 문자를 보내세요.",
      "가정의가 없다면 워크인 클리닉, 지역보건센터, 학생 옵션을 계획에 넣어 두세요.",
      "혈액 검사, 엑스레이, 약 재처방, 의뢰 관련 확인이 필요하다면 지역 서비스 목록에서 다음 단계를 찾으세요.",
    ],
    trustNoteTitle: "신뢰성 안내",
    trustNoteBody:
      "이 사이트는 정적인 안내서입니다. 실시간 대기 시간은 표시하지 않습니다. 운영 시간이나 접수처럼 시간에 민감한 정보는 빠르게 바뀔 수 있어, 모든 목록에 출처 링크와 검토 상태를 함께 표시합니다.",
    newcomerKicker: "신규 정착자 빠른 시작",
    newcomerTitle: "킹스턴에 처음 왔다면 먼저 할 일",
    newcomerSteps: [
      {
        title: "1. 내 보장 알아보기",
        body: "OHIP, IFHP, 민간 보험, 그리고 보통 보장되지 않는 항목을 이해하세요. OHIP에는 대기 기간이 없으니 도착하는 대로 바로 신청하세요.",
      },
      {
        title: "2. 일차 의료 경로 계획하기",
        body: "가정의, 전문간호사, 학생 클리닉, 지역보건센터, 워크인 진료의 차이를 알아보세요.",
      },
      {
        title: "3. 다음에 일어날 일 알아 두기",
        body: "검사 의뢰서, 전문의 의뢰, 검사 결과, 후속 전화가 보통 무엇을 의미하는지 알아보세요.",
      },
    ],
    languageSupportKicker: "언어 지원",
    languageSupportTitle: "도움이 필요할 때 이 문구를 보여 주세요",
    openLanguageHelp: "언어 도움 열기",
    commonTasksKicker: "자주 하는 일",
    commonTasksTitle: "끝내야 하는 일로 검색하세요",
    openDirectory: "전체 목록 열기",
    tasks: [
      {
        title: "혈액 검사 또는 엑스레이",
        body: "검사실과 영상 검사 서비스를 찾으세요.",
      },
      {
        title: "약 재처방",
        body: "약국과 재처방 도움을 찾으세요.",
      },
      {
        title: "정신 건강 지원",
        body: "위기, 긴급, 일반, 청소년 지원.",
      },
      {
        title: "건강보험카드 또는 신규 정착자 지원",
        body: "ServiceOntario, ISKA, 전화 상담을 찾으세요.",
      },
    ],
    featuredKicker: "추천 서비스",
    featuredTitle: "시작하기 좋은 곳",
    trustKicker: "신뢰와 출처",
    trustTitle: "확인된 내용과 재확인이 필요한 내용을 솔직하게 알려 드립니다",
    trustBody:
      "일부 목록은 공식 지역 출처와 대조해 확인했습니다. 운영 시간, 접수, 이용 규칙이 자주 바뀌기 때문에 아직 현지 재확인이 필요한 목록도 있습니다. 이 상태를 투명하게 표시하며, 오래된 정보를 발견하면 알려 주시기를 부탁드립니다.",
    trustChecklistTitle: "목록을 믿고 이용하기 전에 읽어 주세요",
    trustChecklist: [
      "공식 출처 링크를 확인하세요.",
      "마지막 검토 날짜를 확인하세요.",
      "방문 전에 당일 운영 시간과 워크인 가능 여부를 확인하세요.",
      "변경 사항을 발견하면 신고 양식을 이용하세요.",
    ],
    trustLink: "출처와 신뢰성 안내 보기",
  },
  contentPage: {
    breadcrumbHome: "홈",
    badge: "쉬운 말 안내서",
    reviewStatusTitle: "검토 상태",
    reviewLabels: {
      reviewed: "이 프로젝트에서 사용하는 현재 출처들과 대조해 검토했습니다.",
      "general-guidance":
        "일반 안내로 검토했습니다. 지역 세부 정보는 여전히 빠르게 바뀔 수 있습니다.",
      "needs-local-recheck":
        "유용한 안내이지만, 지역 세부 정보는 추가 확인이 필요합니다.",
    },
    lastReviewPrefix: "마지막 페이지 검토:",
    noReviewDate: "이 페이지에는 기록된 페이지 검토 날짜가 없습니다.",
    translationAside:
      "언어 메뉴를 사용해 이 페이지를 여러 언어로 읽을 수 있습니다. 진료 예약, 약, 동의, 검사 안내와 관련해서는 통역 지원이 가능한지 문의하세요.",
    share: "공유",
    print: "인쇄",
    sourcesTitle: "이 페이지의 출처",
    sourcesNote:
      "현재 페이지 검토에 사용한 주요 공식 또는 1차 출처입니다. 지역 절차는 검토 주기 사이에도 바뀔 수 있습니다.",
    onThisPage: "이 페이지의 내용",
    sourcesAnchorLabel: "출처",
    translationReminderTitle: "번역 관련 안내",
    translationReminderBody:
      "치료나 안전에 영향을 주는 내용이라면 번역에만 의존하지 말고 의료진이나 통역사에게 확인하세요.",
    linkCopiedTitle: "링크가 복사되었습니다",
    linkCopiedBody: "이제 이 페이지 링크를 어디에나 붙여 넣을 수 있습니다.",
    shareCancelled: "공유가 취소되었습니다",
  },
  directory: {
    seoTitle: "지역 서비스",
    seoDescription:
      "온타리오주 킹스턴에서 신규 정착자가 이용하기 좋은 의료, 정신 건강, 약국, 보장, 안내 서비스를 검색하세요.",
    kicker: "킹스턴 디렉터리",
    title: "지역 의료 서비스 검색",
    lead: "서비스, 증상, 서류, 할 일로 검색하세요. 예: 워크인, 야간 진료, 혈액 검사, 약 재처방, 건강보험카드, 학생 클리닉, 신규 정착자 지원.",
    searchPlaceholder: "필요한 것, 서비스 이름, 주소, 키워드로 검색",
    sortAriaLabel: "결과 정렬",
    sortRelevance: "정렬: 관련도순",
    sortAlphabetical: "정렬: 이름순",
    sortRecentlyReviewed: "정렬: 최근 검토순",
    sortArea: "정렬: 지역순",
    gridViewLabel: "격자 보기",
    listViewLabel: "목록 보기",
    allServices: "모든 서비스",
    audienceTitle: "대상",
    accessTitle: "이용 방식",
    careLevelTitle: "진료 단계",
    coverageAreaTitle: "보장과 지역",
    areaLabel: "지역",
    showingServices: "{count}개의 서비스 표시 중",
    resetFilters: "필터 초기화",
    trustPanelTitle: "신뢰와 검토 상태",
    trustPanelBody:
      "이 목록은 실시간이 아닌 정적 자료입니다. 마지막으로 기록된 검토 날짜, 가능한 경우 공식 출처 링크, 그리고 현지 재확인이 필요한 목록을 표시합니다. 방문 전에 운영 시간과 당일 이용 가능 여부를 확인하세요.",
    verifiedLabel: "확인됨",
    needsRecheckLabel: "재확인 필요",
    noResultsTitle: "이 필터에 맞는 서비스가 없습니다",
    noResultsBody:
      "혈액 검사, 약 재처방, 정신 건강, 건강보험카드, 워크인처럼 더 넓은 검색어를 시도해 보세요. 모든 필터를 지우고 다시 시작할 수도 있습니다.",
    notSureTitle: "어디서 시작할지 모르겠나요?",
    notSureBody:
      "응급 진료, 긴급 진료, 워크인 클리닉, 약국 도움 중 무엇이 필요한지 확실하지 않다면, 긴급 안내 페이지에서 시작하거나 Health811에 전화해 간호사 상담을 받으세요.",
    needHelpNowCta: "지금 도움이 필요해요",
    callHealth811: "Health811에 전화하기",
  },
  filters: {
    audience: {
      newcomers: "신규 정착자",
      students: "학생 전용 또는 캠퍼스",
      "children-youth": "어린이·청소년",
      adults: "성인",
      families: "가족",
      "unattached-patients": "가정의가 없는 분",
    },
    access: {
      "walk-in": "워크인(예약 없이 방문)",
      appointment: "예약",
      referral: "의뢰 필요",
      virtual: "비대면",
    },
    level: {
      emergency: "응급",
      urgent: "긴급",
      primary: "일차 의료",
      community: "지역사회",
    },
    payment: {
      public: "공공 재원",
      community: "지역사회 / 문턱 낮음",
      mixed: "혼합 보장",
      "student-plan": "학생 보험",
      private: "본인 부담",
    },
    location: {
      downtown: "다운타운",
      "north-end": "노스엔드",
      "west-end": "웨스트엔드",
      campus: "캠퍼스",
      online: "온라인",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "응급 및 긴급 진료",
      shortLabel: "응급·긴급",
    },
    "primary-care": { label: "일차 의료", shortLabel: "일차 의료" },
    "community-health": {
      label: "지역보건센터",
      shortLabel: "지역 보건",
    },
    "mental-health": {
      label: "정신 건강 및 위기 지원",
      shortLabel: "정신 건강",
    },
    "public-health": { label: "공중 보건", shortLabel: "공중 보건" },
    "labs-imaging": {
      label: "검사실 및 영상 검사",
      shortLabel: "검사·영상",
    },
    pharmacies: {
      label: "약과 약국",
      shortLabel: "약국",
    },
    "allied-community": {
      label: "보조·지역사회 의료",
      shortLabel: "보조 의료",
    },
    "navigation-support": {
      label: "안내 및 보장 지원",
      shortLabel: "안내",
    },
  },
  serviceCard: {
    whenToUse: "이용 시기:",
    accessLabel: "이용 방식",
    eligibilityLabel: "이용 자격",
    eligibilityFallback:
      "공식 출처에 별도 안내가 없는 한 일반 대중이 이용할 수 있습니다.",
    hoursLabel: "운영 시간",
    phoneLabel: "전화",
    trustDetails: "신뢰성 및 출처 정보",
    lastReview: "마지막 검토:",
    officialSource: "공식 출처",
    call: "전화",
    officialWebsite: "공식 웹사이트",
    directions: "길 찾기",
    viewDetails: "자세히 보기",
  },
  serviceDetail: {
    backToServices: "지역 서비스로 돌아가기",
    whenToUseTitle: "이 서비스를 이용해야 할 때",
    eligibilityTitle: "이용 자격과 방식",
    eligibilityFallback:
      "이 서비스를 이용할 수 있는지 확실하지 않다면 공식 출처를 확인하세요.",
    whatToBringTitle: "가져갈 것",
    contactTitle: "연락처 및 바로가기",
    callNow: "지금 전화하기",
    officialWebsite: "공식 웹사이트",
    directions: "길 찾기",
    trustTitle: "신뢰와 출처",
    lastReview: "마지막 검토:",
    viewOfficialSource: "공식 출처 보기",
  },
  verification: {
    verified: {
      label: "공식 출처와 대조해 확인됨",
      shortLabel: "확인됨",
      description:
        "최근 검토 주기에서 핵심 정보를 공식 출처와 대조해 확인했습니다.",
    },
    "partially-verified": {
      label: "공식 출처 연결됨",
      shortLabel: "공식 링크",
      description:
        "공식 출처가 연결되어 있지만, 일부 정보는 자주 바뀔 수 있으니 방문 전에 확인해야 합니다.",
    },
    "community-reported": {
      label: "커뮤니티 제보",
      shortLabel: "커뮤니티 제보",
      description:
        "이 정보는 커뮤니티 제보로 받은 것으로, 아직 독립적인 확인이 필요합니다.",
    },
    "needs-recheck": {
      label: "재확인 필요",
      shortLabel: "재확인 필요",
      description:
        "여전히 도움이 될 수 있어 목록에 남겨 두지만, 핵심 정보가 오래되었을 수 있습니다. 이용하기 전에 확인하세요.",
    },
  },
  feedback: {
    badge: "오래된 정보 신고",
    title: "이 안내서를 정확하게 유지하도록 도와주세요",
    body: "페이지 또는 서비스 정보가 미리 채워진 이메일이 열립니다. 개인 의료 정보는 적지 마세요.",
    issueTypeLabel: "문제 유형",
    issueTypes: {
      "outdated hours": "오래된 운영 시간",
      "wrong phone or website": "잘못된 전화번호 또는 웹사이트",
      "eligibility or access issue": "이용 자격 또는 접근 문제",
      "translation or accessibility problem": "번역 또는 접근성 문제",
      "missing service or content": "누락된 서비스 또는 내용",
      other: "기타",
    },
    detailsLabel: "무엇을 확인해야 할까요?",
    detailsPlaceholder:
      "예: 전화번호가 바뀌었거나, 클리닉이 이제 예약제로만 운영되거나, 링크가 깨졌습니다.",
    contactLabel: "연락처 (선택)",
    contactPlaceholder: "답장을 원하시면 이메일 주소를 적어 주세요",
    openEmail: "신고 이메일 열기",
    copyText: "신고 내용 복사",
    thanks:
      "감사합니다. 신고는 오래된 페이지, 깨진 링크, 현지 재확인이 필요한 목록의 우선순위를 정하는 데 도움이 됩니다.",
    toastEmailTitle: "이메일 초안이 열렸습니다",
    toastEmailBody: "신고에 페이지 또는 서비스 정보가 포함되어 있습니다.",
    toastCopyTitle: "문제 요약이 복사되었습니다",
    toastCopyBody: "필요하면 직접 사용하는 이메일 프로그램에 붙여 넣을 수 있습니다.",
  },
  footer: {
    description:
      "온타리오주 킹스턴을 위한 쉬운 말 의료 길잡이 안내서입니다. 이 사이트는 의학적 조언이나 실시간 대기 시간을 제공하지 않습니다. 시간에 민감한 정보는 방문 전에 항상 공식 출처에서 확인하세요.",
    trustModelTitle: "신뢰 모델",
    trustModelBody:
      "공식 출처 링크, 검토 날짜, 재확인이 필요한 목록을 표시합니다. 잘못된 내용이 보이면 해당 페이지나 서비스에서 신고해 주세요.",
    beforeYouGo: {
      title: "방문 전에",
      body: "공식 운영 시간, 예약이나 의뢰가 필요한지, 어떤 서류를 가져가야 하는지 확인하세요.",
    },
    languageHelp: {
      title: "언어 도움",
      body: "언어 메뉴를 사용해 이 안내서를 내 언어로 읽으세요. 정확성이 중요한 의료 상담에서는 통역사를 요청하세요.",
    },
    privacy: {
      title: "개인정보",
      body: "이 사이트는 사용자의 브라우저에 저장되는 개인정보 보호 중심의 로컬 개선 기록만 사용합니다. 개인 분석 데이터를 원격 서버로 보내지 않습니다.",
    },
    copyrightSuffix: "온타리오주 킹스턴을 위한 커뮤니티 정보 자료입니다.",
    disclaimer: "면책 안내",
    privacyLink: "개인정보",
    sourcesLink: "출처",
    reportLink: "오래된 정보 신고",
  },
  notFound: {
    seoTitle: "페이지를 찾을 수 없습니다",
    seoDescription:
      "요청하신 페이지를 찾을 수 없습니다. 긴급 도움, 신규 정착자 기초, 지역 서비스, 자주 묻는 질문에서 시작하세요.",
    badge: "404",
    title: "그 페이지를 찾을 수 없습니다",
    body: "빨리 진료를 받아야 한다면 긴급 안내에서 시작하거나 킹스턴 서비스 목록을 검색하세요.",
    startHere: "여기서 시작하기",
    needHelpNow: "지금 도움이 필요해요",
    localServices: "지역 서비스",
    faq: "자주 묻는 질문",
  },
};

const homePage: PageContent = {
  title: "킹스턴 의료 길잡이 안내서",
  description:
    "온타리오주 킹스턴에서 의료 서비스를 찾는 신규 정착자를 위한 쉬운 말 안내서입니다.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "여기서 시작하기",
  description:
    "킹스턴이 처음이거나 온타리오 의료가 처음인가요? 여기서 시스템이 어떻게 작동하는지, 무엇을 먼저 해야 하는지 알아보세요.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "온타리오주: 온타리오의 의료 (Health care in Ontario)",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "온타리오에서 보험 적용 의료가 어떻게 작동하는지에 대한 개요입니다.",
    },
    {
      title: "온타리오주: OHIP 신청 및 건강보험카드 발급",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "공식 OHIP 신청 및 자격 정보입니다.",
    },
    {
      title: "온타리오주: 가정의 또는 전문간호사 찾기",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect 및 일차 의료 이용 안내입니다.",
    },
    {
      title: "캐나다: 임시 연방 건강 프로그램 (Interim Federal Health Program, IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "자격이 되는 난민과 난민 신청자를 위한 연방 보장 정보입니다.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "온타리오 의료는 이렇게 작동합니다",
      type: "default",
      content: `온타리오 의료는 **일차 의료**를 중심으로 운영됩니다. 일차 의료란 일상적인 건강 문제, 지속적인 질환, 처방, 의뢰, 예방을 위해 보통 처음 찾는 곳을 말합니다. 일차 의료 제공자는 가정의, 전문간호사, 지역보건센터 팀일 수 있고, 자격이 된다면 학생 건강 클리닉일 수도 있습니다.

**의뢰(referral)**는 한 의료인이 다른 서비스나 전문의에게 진료를 요청하는 것입니다. **검사 의뢰서(requisition)**는 검사실이나 영상 클리닉에 어떤 검사가 필요한지 알려 주는 서류입니다.

첫날부터 시스템의 모든 부분을 이해할 필요는 없습니다. 가장 중요한 단계는 내 보장을 알아보고, 급한 문제가 생기면 어디로 가야 하는지 알아 두고, 아직 담당 의료 제공자가 없다면 정기적인 진료 계획을 세우는 것입니다.`,
    },
    {
      id: "first-decisions",
      title: "먼저 결정할 것들",
      type: "grid",
      gridItems: [
        {
          title: "긴급한 도움이 필요할 수 있어요",
          content:
            "오늘이나 오늘 밤 갑작스러운 문제가 생겼다면 응급과 긴급 진료를 구분하는 안내에서 시작하세요.",
          icon: "alert",
          link: { text: "지금 도움이 필요해요", url: "/need-help-now" },
        },
        {
          title: "가정의가 없어요",
          content:
            "가정의, 전문간호사, 지역보건센터, 워크인 클리닉, 학생 클리닉이 어떻게 연결되는지 알아보세요.",
          icon: "stethoscope",
          link: { text: "일차 의료 찾기", url: "/get-a-family-doctor" },
        },
        {
          title: "무엇이 보장되는지 알고 싶어요",
          content:
            "OHIP, IFHP, 민간 보험, 학생 보험, 약값 보장, 흔한 본인 부담 비용에 대해 읽어 보세요.",
          icon: "shield",
          link: { text: "비용과 보장", url: "/costs-and-coverage" },
        },
        {
          title: "언어 도움이 필요해요",
          content:
            "언어 메뉴를 사용해 이 안내서를 33개 언어로 읽을 수 있고, 의료 상담과 동의를 위한 통역 지원에 대해 문의하세요.",
          icon: "info",
          link: { text: "접근성과 언어", url: "/about#accessibility" },
        },
        {
          title: "혈액 검사, 영상 검사, 약 재처방이 필요해요",
          content:
            "지역 서비스 목록에서 진료 후의 실질적인 다음 단계를 찾으세요.",
          icon: "file",
          link: { text: "지역 서비스 검색", url: "/local-services" },
        },
        {
          title: "어디서 시작해야 할지 모르겠어요",
          content:
            "상황이 얼마나 급한지 확실하지 않다면 Health811에 전화해 간호사 상담을 받으세요.",
          icon: "clock",
          link: { text: "Health811과 긴급 안내", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "첫 주에 하면 좋은 일들",
      type: "steps",
      items: [
        "내 보장 알아보기: OHIP, IFHP, 민간 보험, 학생 보험이 보통 무엇을 보장하는지 읽어 보세요. OHIP 자격이 될 수 있다면 가능한 한 빨리 신청하세요.",
        "긴급 상황 계획 정하기: 언제 911에 전화할지, 언제 Health811로 시작할지, 킹스턴에서 긴급 또는 당일 진료를 어디서 받을 수 있는지 알아 두세요.",
        "정기 진료 계획 세우기: 담당 의료 제공자가 없다면 가정의, 전문간호사, 지역보건센터, 학생 클리닉, 워크인 클리닉, 비대면 진료 등의 선택지를 알아보세요.",
        "건강 정보 한곳에 모아 두기: 건강보험카드 또는 IFHP 서류, 복용 약 목록, 예방접종 기록, 그리고 검사 의뢰서나 의뢰서 사본을 보관하세요.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "아직 OHIP이 없다면",
      type: "callout",
      content:
        "아플 때까지 기다리지 말고 미리 보장 경로를 알아 두세요. OHIP 자격이 된다면 일찍 신청하세요. IFHP나 학교 또는 민간 보험으로 보장받는다면 그 정보를 항상 지니고 다니세요. 보험이 없다면 진료 전에 비용을 문의하고, 상황에 맞는 지역사회 서비스나 문턱이 낮은 서비스를 찾아보세요.",
      link: { text: "보장에 대해 읽기", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "이것들을 준비해 두세요",
      type: "checklist",
      items: [
        "건강보험카드, IFHP 서류 또는 보험 정보",
        "복용하는 약이 적더라도 약 목록",
        "이전에 다니던 클리닉이나 의료 제공자가 있다면 그 이름과 전화번호",
        "최근의 검사 의뢰서, 의뢰서, 퇴원 서류, 검사 안내문",
        "쉬운 말로 묻고 싶은 질문들",
        "잊지 않고 요청할 수 있도록 적어 둔 통역 필요 사항",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "지금 도움이 필요하신가요?",
  description:
    "오늘이나 오늘 밤 건강 문제가 생겼는데 어디서 시작해야 할지 모를 때 이 페이지를 이용하세요.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "온타리오주: Health811 의료 상담 받기",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "공식 연중무휴 24시간 간호사 상담 서비스입니다.",
    },
    {
      title: "9-8-8: 자살 위기 상담전화 (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "공식 전국 자살 위기 상담전화입니다. 9-8-8로 전화 또는 문자, 무료, 연중무휴 24시간.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "응급, 긴급 진료, 영상 검사 정보를 제공하는 공식 병원 네트워크입니다.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "공식 지역 정신 건강 및 위기 지원 기관입니다.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "응급인가요, 긴급인가요?",
      type: "comparison",
      comparison: {
        left: {
          title: "다음과 같은 문제는 바로 응급실로 가세요:",
          items: [
            "가슴 통증, 심한 호흡 곤란, 뇌졸중 징후",
            "심한 출혈, 큰 부상, 의식을 잃은 경우",
            "갑작스러운 의식 혼란, 발작, 심각한 알레르기 반응",
            "기다리면 생명이나 신체에 위험이 될 수 있는 안전 응급 상황",
          ],
        },
        right: {
          title: "다음과 같은 문제는 긴급 진료, Health811, 당일 클리닉에서 시작하세요:",
          items: [
            "삠, 가벼운 상처, 발진, 귀 통증, 응급 경고 징후가 없는 발열",
            "정기 예약까지 기다릴 수 없는 약 재처방 문제",
            "오늘 밤 긴급 진료가 필요한지에 대한 질문",
            "급하게 느껴지지만 생명이 위급해 보이지는 않는 문제",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "야간에 흔한 상황들",
      type: "table",
      columns: ["상황", "좋은 첫 단계", "기억할 점"],
      rows: [
        {
          cells: [
            "얼마나 급한지 모르겠어요",
            "Health811에 전화하세요",
            "간호사가 집에서 지켜볼지, 긴급 진료를 받을지, 응급실에 갈지 결정하도록 도와줍니다.",
          ],
        },
        {
          cells: [
            "병원이 문을 닫았는데 오늘 밤 상담이 필요해요",
            "Health811 또는 긴급 진료 안내",
            "응급 경고 징후가 없다면 응급실만이 유일한 선택이라고 생각하지 마세요.",
          ],
        },
        {
          cells: [
            "아이를 진료받게 해야 해요",
            "같은 응급 경고 징후를 확인한 뒤, 당일 진료를 찾거나 확실하지 않으면 Health811에 전화하세요",
            "가능하면 아이의 건강보험카드, 약 목록, 증상이 시작된 시간 기록을 가져가세요.",
          ],
        },
        {
          cells: [
            "오늘 밤 정신 건강 도움이 필요해요",
            "9-8-8(자살 위기 상담전화)에 전화하거나 문자를 보내거나, 24시간 AMHS-KFLA 위기 상담전화에 전화하세요",
            "당장 안전이 위험하다면 911에 전화하세요.",
          ],
        },
      ],
      caption:
        "이 표는 일반적인 안내일 뿐입니다. 누군가 당장 위험에 처해 있을 수 있다면 911에 전화하세요.",
    },
    {
      id: "kingston-start-points",
      title: "킹스턴에서 시작할 곳",
      type: "grid",
      gridItems: [
        {
          title: "응급실",
          content:
            "생명이 위급하거나 위급할 수 있는 문제에는 응급 진료를 이용하세요.",
          icon: "alert",
          link: {
            text: "응급 및 긴급 진료 목록",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "긴급 진료 센터 (Urgent Care Centre)",
          content:
            "기다릴 수 없지만 명백한 응급은 아닌 많은 당일 문제에 유용합니다.",
          icon: "clock",
          link: {
            text: "긴급 및 당일 진료",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "어디로 가야 할지 모를 때 전화 또는 온라인으로 간호사 상담을 받을 수 있습니다. 전화 지원은 여러 언어로 제공됩니다.",
          icon: "info",
          link: { text: "Health811 정보", url: "/local-services/health811" },
        },
        {
          title: "정신 건강 위기 지원",
          content:
            "언제든지 9-8-8(자살 위기 상담전화)에 전화하거나 문자를 보내고, 24시간 AMHS-KFLA 위기 상담전화 같은 지역 위기 지원도 이용하세요.",
          icon: "heart",
          link: { text: "정신 건강 목록", url: "/local-services?category=mental-health" },
        },
        {
          title: "성폭력 피해 지원",
          content:
            "즉각적인 정서 지원, 권익 옹호, 안전 계획이 필요하면 전문 위기 지원을 이용하세요.",
          icon: "shield",
          link: {
            text: "지원 목록",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "학생 긴급 옵션",
          content:
            "학생이라면 응급이 아닌 문제는 캠퍼스 건강 서비스가 가장 좋은 첫 방문지인지 확인해 보세요.",
          icon: "stethoscope",
          link: { text: "학생 건강 목록", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "그래도 확실하지 않다면",
      type: "callout",
      content:
        "문제가 명백히 생명을 위협하지는 않지만 기다리기 걱정된다면 Health811로 시작하세요. 누군가 안전하지 않을 수 있거나, 빠르게 나빠지고 있거나, 제때 알맞은 도움을 받을 수 없다면 응급 서비스를 이용하세요.",
      link: { text: "Health811에 전화하기", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "가능하면 이것들을 가져가세요",
      type: "checklist",
      items: [
        "건강보험카드, IFHP 서류 또는 가지고 있는 보험 카드",
        "약 목록 또는 약병 사진",
        "증상이 시작된 시간과 증상을 악화시킨 것",
        "나중에 너무 긴장해서 잊을 수 있으니 미리 적어 둔 통역 필요 사항",
        "휴대전화 충전기, 그리고 도움이 된다면 함께 가 줄 사람",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "일차 의료 찾기",
  description:
    "아직 담당 의료 제공자가 없다면 킹스턴에서 정기적인 의료를 받을 수 있는 여러 경로를 알아보세요.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "온타리오주: 가정의 또는 전문간호사 찾기",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "공식 Health Care Connect 안내입니다.",
    },
    {
      title: "Kingston Community Health Centres (킹스턴 지역보건센터)",
      url: "https://kchc.ca/",
      note: "지역보건센터 서비스에 대한 공식 정보입니다.",
    },
    {
      title: "Queen's Student Wellness Services (퀸스대학교 학생 웰니스 서비스)",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Queen's 학생을 위한 공식 학생 건강 정보입니다.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "St. Lawrence College 학생을 위한 공식 학생 건강 정보입니다.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "일차 의료란",
      type: "default",
      content:
        "일차 의료는 일상적인 건강 문제로 보통 가장 먼저 찾는 곳입니다. 건강 검진, 약 재처방, 만성 질환 관리, 의뢰, 예방 의료, 그리고 급한 문제 이후의 후속 진료가 여기에 포함됩니다.\n\n킹스턴에서 정기적인 일차 의료 경로는 가정의, 전문간호사, 지역보건센터, 캠퍼스 클리닉이 될 수도 있고, 더 안정적인 진료를 기다리는 동안 임시 옵션을 함께 쓰는 방식이 될 수도 있습니다.",
    },
    {
      id: "access-matrix",
      title: "일차 의료 이용 경로",
      type: "table",
      columns: ["경로", "이런 경우에 적합", "이용 대상", "시작 방법"],
      rows: [
        {
          cells: [
            "가정의 또는 전문간호사",
            "지속적인 정기 진료와 장기적인 건강 관리",
            "의료 제공자 명단에 등록할 수 있는 환자",
            "Health Care Connect를 이용하고 지역의 빈자리를 살펴보세요",
          ],
        },
        {
          cells: [
            "지역보건센터",
            "지역 기반 진료, 문턱 낮은 지원, 일부 신규 정착자 또는 복합적 필요 진료",
            "프로그램과 접수 상황에 따라 자격이 다릅니다",
            "기관에 직접 연락해 접수에 대해 문의하세요",
          ],
        },
        {
          cells: [
            "학생 건강 서비스",
            "등록된 학생을 위한 더 빠른 이용",
            "학교를 통해 자격이 되는 학생만",
            "캠퍼스 건강 또는 웰니스 서비스를 이용하세요",
          ],
        },
        {
          cells: [
            "워크인 클리닉 또는 긴급 당일 진료",
            "기다리는 동안 또는 담당 의료 제공자를 만날 수 없을 때의 단기 진료",
            "일반 대중, 단 하루 접수 규칙에 따라 다름",
            "방문 전에 현재 이용 가능 여부를 확인하세요",
          ],
        },
        {
          cells: [
            "비대면 일차 의료",
            "일부 약 재처방, 상담, 일상적인 문제",
            "제공자와 보장에 따라 다릅니다",
            "제공자가 온라인으로 안전하게 다룰 수 있는 것과 없는 것을 확인하세요",
          ],
        },
      ],
      caption:
        "가장 좋은 경로는 자격, 긴급한 정도, 그리고 단기 진료가 필요한지 지속적인 진료가 필요한지에 따라 달라집니다.",
    },
    {
      id: "if-you-have-no-provider",
      title: "담당 의료 제공자가 없다면",
      type: "steps",
      items: [
        "공식 주정부 경로로 등록하기: 가정의나 전문간호사가 없다면 Health Care Connect를 이용하세요.",
        "캠퍼스 또는 지역 보건 옵션 자격 확인하기: 학생은 학교 클리닉에서 시작하세요. 일부 지역 보건 서비스에는 특정 접수 우선순위가 있습니다.",
        "안전한 임시 계획 세우기: 기다리는 동안 이용할 수 있는 워크인, 긴급, 비대면, 약국, 정신 건강 서비스를 알아 두세요.",
        "내 기록 직접 보관하기: 약 목록, 검사 결과, 의뢰서, 만난 의료인의 이름을 저장해 두세요.",
      ],
    },
    {
      id: "while-you-wait",
      title: "기다리는 동안 할 일",
      type: "checklist",
      items: [
        "단기적인 필요에는 상황에 맞게 워크인, 긴급 또는 비대면 진료를 이용하세요",
        "약국에 어떤 재처방 도움이나 경미 질환 진료가 가능한지 물어보세요",
        "최신 약 목록 하나를 유지하고 진료 때마다 가져가세요",
        "진료가 여러 곳으로 나뉘어 있을 때는 중요한 결과나 퇴원 서류의 사본을 가져가세요",
        "가능하면 같은 클리닉에서 후속 진료를 받아 진료의 일관성을 조금이라도 높이세요",
      ],
    },
    {
      id: "next-best-option",
      title: "급하지만 응급은 아니라면",
      type: "callout",
      content:
        "가정의가 없다고 해서 중요한 진료를 미뤄야 하는 것은 아닙니다. 지금 눈앞의 문제에 맞는 단기 옵션을 이용하고, 급한 문제가 해결된 뒤에 연속적인 진료 계획을 세우세요.",
      link: { text: "일차 의료 옵션 검색", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "비용과 보장",
  description:
    "OHIP, IFHP, 캐나다 치과 보험 플랜(CDCP), 학생·민간 보험, 흔한 본인 부담 비용에 대한 쉬운 말 안내입니다.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "온타리오주: OHIP 신청 및 건강보험카드 발급",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "공식 OHIP 안내입니다.",
    },
    {
      title: "캐나다: 임시 연방 건강 프로그램 (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "공식 IFHP 보장 정보입니다.",
    },
    {
      title: "Ontario Drug Benefit (온타리오 약제 급여)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "공식 주정부 약값 보장 안내입니다.",
    },
    {
      title: "온타리오주: 높은 처방약 비용 지원받기",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "공식 Trillium Drug Program 안내입니다.",
    },
    {
      title: "캐나다: Canadian Dental Care Plan (캐나다 치과 보험 플랜)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "공식 연방 치과 보장 프로그램 정보 및 자격 안내입니다.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "보장의 기초",
      type: "default",
      content:
        "온타리오에서의 보장은 체류 신분, 나이, 소득, 프로그램 자격, 그리고 학교 또는 민간 보험 가입 여부에 따라 달라집니다.\n\nOHIP 자격이 있는 환자는 의학적으로 필요한 많은 의사 진료와 병원 서비스를 보장받습니다. 그렇다고 모든 것이 무료라는 뜻은 **아닙니다**. 약, 치과, 시력 관리, 서류 작성, 진단서, 그리고 많은 보조 의료 서비스는 별도의 보장이 필요하거나 본인 부담인 경우가 많습니다.\n\n새로 오신 분들에게 좋은 소식이 있습니다. **OHIP에는 대기 기간이 없습니다**. 자격이 된다면 온타리오에 도착하자마자 신청할 수 있고, 신청이 승인되면 보장이 시작됩니다. 아플 때까지 기다리지 말고 신청하세요.",
    },
    {
      id: "coverage-matrix",
      title: "한눈에 보는 보장 경로",
      type: "table",
      columns: [
        "보장 유형",
        "주로 도움이 되는 것",
        "여전히 보장되지 않을 수 있는 것",
        "다음에 할 일",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "의학적으로 필요한 많은 의사 진료와 병원 서비스",
            "많은 약, 치과, 시력 관리, 서류 작성",
            "자격이 되면 신청하고 카드를 최신 상태로 유지하세요",
          ],
        },
        {
          cells: [
            "IFHP",
            "연방 프로그램에 따라 자격이 되는 난민과 난민 신청자를 위한 보장",
            "세부 내용은 범주와 서비스에 따라 다릅니다",
            "공식 IFHP 안내를 확인하고 클리닉이나 약국에 IFHP를 받는지 물어보세요",
          ],
        },
        {
          cells: [
            "학교 또는 민간 보험",
            "약, 상담, 치과, 시력, 보조 의료에 도움이 되는 경우가 많습니다",
            "보장 한도, 본인 부담금, 네트워크 규칙이 보험마다 다릅니다",
            "서비스가 보장된다고 가정하기 전에 보험 안내 책자를 읽어 보세요",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "민간 치과 보험이 없고 조정 가족 소득이 $90,000 미만인 자격 대상 거주자를 위한 치과 보장",
            "모든 시술이 보장되는 것은 아니며, 소득에 따라 본인 부담금이 있을 수 있습니다",
            "공식 캐나다 정부 CDCP 페이지에서 자격을 확인하고 신청하세요",
          ],
        },
        {
          cells: [
            "보장이 없는 경우",
            "일부 서비스는 여전히 이용할 수 있지만 비용이 발생할 수 있습니다",
            "진료, 검사, 약 비용이 클 수 있습니다",
            "진료 전에 비용을 문의하고 상황에 맞는 지역사회 옵션을 찾아보세요",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "전액 보장되지 않는 경우가 많은 것",
      type: "checklist",
      items: [
        "공공 프로그램 자격이나 다른 보험이 없는 한 많은 처방약",
        "Canadian Dental Care Plan, Healthy Smiles Ontario, 지역사회 치과 프로그램 또는 복리후생 보험 자격이 없는 한 치과 진료",
        "특정 자격 경로 외의 시력 관리",
        "프로그램이나 보험이 보장하지 않는 한 물리치료, 상담, 마사지 등 보조 의료 서비스",
        "서류 작성, 소견서, 예약 불이행 수수료 등 많은 행정 비용",
      ],
    },
    {
      id: "drug-coverage",
      title: "약값 보장 경로",
      type: "default",
      content:
        "약값 보장은 신규 정착자가 자주 놀라는 부분입니다. 의사 진료는 보장되더라도 처방약은 여전히 돈이 들 수 있습니다.\n\n공공 약제 프로그램은 나이, 소득, 자격에 따라 도움이 될 수 있습니다. **Ontario Drug Benefit(온타리오 약제 급여)**은 65세 이상과 특정 프로그램에 속한 사람들의 많은 약을 보장하고, **OHIP+**는 민간 보험이 없는 24세 이하의 많은 처방약을 보장합니다. 온타리오에는 가구 소득에 비해 처방약 비용이 높은 일부 사람들을 위한 **Trillium Drug Program**도 있습니다. 학교 또는 민간 보험이 있다면 공공 보장과 함께 적용되는지, 아니면 대신 적용되는지 확인하세요.",
    },
    {
      id: "coverage-scenarios",
      title: "흔한 보장 질문",
      type: "faq",
      faqs: [
        {
          question: "아직 OHIP이 없어요. 그래도 진료를 받을 수 있나요?",
          answer:
            "네, 하지만 비용이 발생할 수 있고, 가장 좋은 경로는 신분과 긴급한 정도에 따라 다릅니다. 응급이 아닌 진료라면 가능하면 미리 비용을 문의하고, 해당된다면 IFHP나 학교 또는 민간 보험 자격을 살펴보세요.",
        },
        {
          question: "국제 학생인데 OHIP만이 유일한 선택인가요?",
          answer:
            "꼭 그렇지는 않습니다. 많은 학생이 OHIP 대신 학교 또는 민간 보험을 이용합니다. 학교의 공식 보험 문서와 학생 건강 서비스를 통해 무엇이 보장되는지 확인하세요.",
        },
        {
          question: "진료가 보장되었다면 약도 무료인가요?",
          answer:
            "꼭 그렇지는 않습니다. 진료 보장과 처방약 보장은 별개인 경우가 많습니다.",
        },
        {
          question: "치과 진료는 보장되나요?",
          answer:
            "대부분의 성인에게 치과는 OHIP과 별개입니다. 연방 Canadian Dental Care Plan은 이제 민간 치과 보험이 없고 조정 가족 소득이 $90,000 미만인 많은 거주자를 보장합니다. 자격을 얻으려면 보통 캐나다에서 세금 신고를 한 적이 있어야 합니다. 저소득 가정의 어린이는 Healthy Smiles Ontario 자격이 될 수 있고, 킹스턴에는 특정 프로그램 대상자를 위한 지역사회 치과 클리닉이 있습니다.",
        },
        {
          question: "서비스가 공공인지, 지역사회인지, 민간인지 어떻게 알 수 있나요?",
          answer:
            "디렉터리 필터를 사용하고 목록의 세부 정보를 살펴보세요. 확실하지 않으면 예약하기 전에 해당 서비스에 문의하세요.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "진료 방문",
  description:
    "진료 때 무엇을 가져가고, 어떻게 질문하고, 어떻게 안전하게 소통할지 알아보세요.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "온타리오주: 온타리오의 의료",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "일반적인 시스템 안내입니다.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "가져갈 것",
      type: "checklist",
      items: [
        "건강보험카드, IFHP 서류 또는 기타 보험 정보",
        "비타민과 일반의약품을 포함한 전체 약 목록",
        "증상의 이름, 시작된 시점, 달라진 점",
        "진료를 마치기 전에 답을 듣고 싶은 질문",
        "최근의 검사 의뢰서, 의뢰서, 퇴원 서류, 검사 결과",
        "잊지 않고 요청할 수 있도록 적어 둔 통역 필요 사항",
      ],
    },
    {
      id: "during-the-visit",
      title: "진료 중에",
      type: "steps",
      items: [
        "가장 중요한 문제부터 말하기: 진료 시간이 짧은 경우가 많으니 오늘 가장 중요한 걱정거리부터 시작하세요.",
        "쉬운 말 사용하기: '그 단어를 이해하지 못했어요' 또는 '더 쉽게 설명해 주시겠어요?'라고 말해도 괜찮습니다.",
        "계획을 다시 말해 보기: 진료를 마치기 전에 다음 단계를 소리 내어 말해 보세요. 그래야 검사, 의뢰, 약 재처방, 후속 예약 중 무엇이 필요한지 알 수 있습니다.",
        "나빠지면 어떻게 할지 물어보기: 언제 다시 전화해야 하는지, 언제 긴급 진료를 이용해야 하는지, 언제 응급 진료를 이용해야 하는지 알아 두어야 합니다.",
      ],
    },
    {
      id: "interpreter-help",
      title: "통역과 소통 도움",
      type: "default",
      content:
        "언어 도움이 필요하면 일찍 요청하세요. 진료가 끝날 때까지 기다리지 마세요. 언어 메뉴를 사용해 이 웹사이트를 여러 언어로 읽을 수 있지만, 치료 결정, 약 복용 안내, 동의에 대해서는 웹사이트 번역이 통역 지원을 대신해서는 안 됩니다.\n\n이렇게 말할 수 있습니다. **'통역사가 필요합니다.'** Health811(811번 전화)도 여러 언어로 전화 지원을 제공합니다. 누군가와 함께 간다면, 복잡하거나 민감한 의료 정보를 통역하기에 가족이 항상 가장 적절하거나 안전한 사람은 아닐 수 있다는 점을 기억하세요.",
    },
    {
      id: "questions-to-ask",
      title: "물어볼 만한 질문",
      type: "checklist",
      items: [
        "지금 무슨 문제라고 생각하시나요?",
        "다음에 무엇을 해야 하나요?",
        "검사, 검사 의뢰서, 전문의 의뢰 또는 후속 진료가 필요한가요?",
        "결과는 언제쯤 들을 수 있나요?",
        "어떤 경고 징후가 있으면 다시 전화하거나 긴급한 도움을 받아야 하나요?",
      ],
    },
    {
      id: "privacy",
      title: "개인정보와 동의",
      type: "default",
      content:
        "건강 정보는 민감한 정보입니다. 누가 내 정보를 보게 되는지 확실하지 않으면 물어보세요. 서류, 동의 절차, 치료 계획이 이해되지 않으면 진행을 늦추고 더 명확한 설명을 요청하세요.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "진료 후",
  description:
    "검사 의뢰서, 검사 결과, 전문의 의뢰, 다시 전화해야 할 때 등 진료 후에 일어나는 일을 알아보세요.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "지역 병원 시스템 정보입니다.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "지역 검사실 절차 및 환자 포털 정보입니다.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "진료 후 흔히 일어나는 일",
      type: "steps",
      items: [
        "계획을 가지고 나옵니다: 약, 검사 의뢰서, 전문의 의뢰, 후속 예약, 또는 경고 징후를 지켜보라는 안내가 포함될 수 있습니다.",
        "다음 단계를 직접 해야 할 수 있습니다: 예를 들어 혈액 검사, 영상 검사, 약 수령, 후속 진료를 직접 예약해야 할 수 있습니다.",
        "결과는 보통 검사를 지시한 의료인에게 전달됩니다: 검사실이나 영상 클리닉이 그 자리에서 결과를 설명해 주지 않을 수 있습니다.",
        "정상 결과는 모두 전화로 알려 주지 않을 수 있습니다: 클리닉의 후속 안내 절차가 어떻게 되는지 물어보고 무엇을 기대할지 알아 두세요.",
      ],
    },
    {
      id: "common-terms",
      title: "진료 후 자주 나오는 용어",
      type: "table",
      columns: ["용어", "쉬운 말로 풀면", "보통 다음에 할 일"],
      rows: [
        {
          cells: [
            "검사 의뢰서 (requisition)",
            "검사실이나 영상 클리닉에 어떤 검사가 필요한지 알려 주는 서류",
            "검사를 예약하거나 방문하고, 가능하면 사본을 보관하세요",
          ],
        },
        {
          cells: [
            "의뢰 (referral)",
            "한 의료인이 다른 서비스나 전문의에게 진료를 요청하는 것",
            "연락을 기다리고, 후속 확인을 하라고 들었는데 아무 연락이 없으면 다시 전화하세요",
          ],
        },
        {
          cells: [
            "후속 진료 (follow-up)",
            "치료, 검사 또는 증상 변화 이후의 확인 진료",
            "진료를 마치기 전에 후속 진료가 언제, 어떻게 이루어지는지 물어보세요",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "다시 전화해야 할 때",
      type: "checklist",
      items: [
        "검사 의뢰서, 의뢰서 또는 약 복용 안내가 이해되지 않을 때",
        "연락을 주기로 했는데 예상한 기간 안에 아무 소식이 없을 때",
        "증상이 나빠지거나 들었던 것과 다르게 나아지지 않을 때",
        "약국, 검사실 또는 영상 클리닉에서 서류에 빠진 것이 있다고 알려 줄 때",
        "결과가 누락되었을 수 있다고 생각하거나 여전히 걱정될 때",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "흔한 상황",
      type: "faq",
      faqs: [
        {
          question: "진료 후 혈액 검사가 필요해요. 어떻게 하나요?",
          answer:
            "검사 의뢰서가 있는지, 검사실이 예약을 원하는지 확인하세요. 그런 다음 디렉터리에서 검사실 위치를 찾으세요. 검사 의뢰서와 보장 정보를 가져가세요.",
        },
        {
          question: "검사 의뢰서나 의뢰서 양식이 이해되지 않아요.",
          answer:
            "그 서류를 준 클리닉에 전화해 쉬운 말로 설명해 달라고 요청하세요. 이 서류가 무엇을 위한 것인지, 어디로 보내야 하는지, 직접 예약해야 하는 것이 있는지 묻는 것은 당연한 일입니다.",
        },
        {
          question: "검사 결과는 누가 확인해 주나요?",
          answer:
            "보통 검사를 지시한 의료인입니다. 그 의료인의 사무실에 정상 결과와 비정상 결과를 보통 어떻게 처리하는지 물어보세요.",
        },
        {
          question: "의뢰는 얼마나 걸리나요?",
          answer:
            "의뢰 대기 기간은 매우 다양합니다. 내 상황에서 어느 정도 기다리는 것이 보통인지, 연락이 없으면 어떻게 해야 하는지 물어보세요.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "유용한 다음 단계",
      type: "grid",
      gridItems: [
        {
          title: "검사실과 영상 검사 찾기",
          content:
            "혈액 검사, 엑스레이, 초음파, 영상 검사 목록은 디렉터리를 이용하세요.",
          icon: "file",
          link: { text: "검사실 및 영상 검사", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "약국 찾기",
          content:
            "약국, 재처방 도움, 복약 지원은 디렉터리를 이용하세요.",
          icon: "shield",
          link: { text: "약국", url: "/local-services?category=pharmacies" },
        },
        {
          title: "후속 진료 계획이 필요하신가요?",
          content:
            "장기적인 후속 진료를 어디서 받아야 할지 모르겠다면 일차 의료 페이지를 이용하세요.",
          icon: "stethoscope",
          link: { text: "일차 의료 찾기", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "약과 약국",
  description:
    "온타리오에서 처방전, 약 재처방, 약사의 도움, 약값 지불 방법을 이해하세요.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "온타리오주: 약사가 할 수 있는 일",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "공식 주정부 약사 및 약국 정보입니다.",
    },
    {
      title: "Ontario Drug Benefit (온타리오 약제 급여)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "공식 주정부 약값 보장 안내입니다.",
    },
    {
      title: "온타리오주: 높은 처방약 비용 지원받기",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "공식 Trillium Drug Program 안내입니다.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "약사가 도와줄 수 있는 것",
      type: "default",
      content:
        "약사는 약을 건네주는 일만 하지 않습니다. 약을 안전하게 복용하는 방법을 설명하고, 약물 상호작용을 확인하고, 부작용을 검토할 수 있습니다.\n\n온타리오에서는 약사가 **19가지 흔한 경미 질환을 평가하고 처방**할 수도 있습니다. 결막염, 입술 포진, (여성의) 요로 감염, 벌레 물림, 계절성 알레르기 등이 포함됩니다. 이 평가는 온타리오 건강보험카드가 있으면 무료이며, 대상 질환 목록은 계속 늘어날 수 있습니다.\n\n약국은 또한 다음과 같은 실용적인 질문을 하기에 가장 좋은 곳 중 하나입니다. **이 재처방이 급한가요? 더 저렴한 옵션이 있나요? 복용을 한 번 놓쳤으면 어떻게 해야 하나요?**",
    },
    {
      id: "fill-a-prescription",
      title: "처방약을 받는 방법",
      type: "steps",
      items: [
        "처방전 받기: 종이로 받거나, 팩스로 보내지거나, 전자적으로 전송될 수 있습니다.",
        "약국 정하기: 같은 약국을 꾸준히 이용하면 약물 상호작용과 재처방 이력 문제를 더 잘 잡아낼 수 있습니다.",
        "시간과 비용 문의하기: 약국에서 언제 준비되는지, 보험이 적용되는지 알려 줄 수 있습니다.",
        "복약 상담 듣기: 이 약이 무엇을 위한 것인지, 어떻게 복용하는지, 효과가 없으면 언제 다시 연락해야 하는지 물어보세요.",
      ],
    },
    {
      id: "refill-options",
      title: "재처방과 약 문제",
      type: "table",
      columns: ["상황", "좋은 첫 단계", "이유"],
      rows: [
        {
          cells: [
            "정기 재처방이 필요해요",
            "평소 이용하는 약국이나 담당 의료인에게 먼저 문의하세요",
            "재처방, 처방 갱신, 새 진료 중 무엇이 필요한지 알려 줄 수 있습니다",
          ],
        },
        {
          cells: [
            "의사를 만날 수 없는데 약이 떨어질 것 같아요",
            "약국에 어떤 옵션이 있는지 물어본 뒤, 필요하면 워크인, 비대면 또는 긴급 진료를 이용하세요",
            "가장 안전한 다음 단계는 약과 상황에 따라 다릅니다",
          ],
        },
        {
          cells: [
            "이 약을 어떻게 복용하는지 모르겠어요",
            "약사에게 쉬운 말로 다시 설명해 달라고 요청하세요",
            "이것도 안전한 약 사용의 일부입니다",
          ],
        },
        {
          cells: [
            "약값이 너무 비싸요",
            "제네릭(복제약) 버전, 보험 적용, 공공 프로그램에 대해 물어보세요",
            "약값은 다양하고 보장은 진료 자체와 별개인 경우가 많습니다",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "약값을 지불하는 방법들",
      type: "checklist",
      items: [
        "자격이 된다면 공공 약제 프로그램",
        "학교 또는 민간 보험",
        "공공 보장과 민간 보장의 조합",
        "어떤 프로그램도 약을 보장하지 않으면 본인 부담",
      ],
    },
    {
      id: "pharmacy-links",
      title: "지역 약국 도움이 필요하신가요?",
      type: "callout",
      content:
        "약 문제를 빨리 해결해야 할 때는 디렉터리에서 약국, 재처방 지원, 비대면 또는 당일 옵션을 찾으세요.",
      link: { text: "약국 목록 검색", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "정신 건강 지원",
  description:
    "킹스턴의 지역 정신 건강, 상담, 청소년 지원, 위기 대응 경로입니다.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: 자살 위기 상담전화 (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "공식 전국 자살 위기 상담전화입니다. 9-8-8로 전화 또는 문자, 무료, 연중무휴 24시간.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "공식 성인 정신 건강 및 위기 지원 정보입니다.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "공식 온타리오 정신 건강 및 중독 상담전화입니다.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "공식 어린이·청소년 정신 건강 정보입니다.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "누군가 안전하지 않을 수 있다면",
      type: "callout",
      content:
        "생명이나 안전에 당장 위험이 있다면 911에 전화하세요. 자살 생각이 들거나 감당하기 힘든 고통이 있다면 언제든지 **9-8-8(자살 위기 상담전화)에 전화하거나 문자를 보낼 수 있습니다**. 무료이고 비밀이 보장되며 영어와 프랑스어로 연중무휴 24시간 운영됩니다. 24시간 AMHS-KFLA 위기 상담전화 613-544-4229로도 전화할 수 있습니다. 정기 예약을 기다리지 마세요.",
      link: { text: "정신 건강 목록", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "지원의 종류",
      type: "grid",
      gridItems: [
        {
          title: "위기 지원",
          content:
            "즉각적인 고통, 안전에 대한 걱정, 또는 기다리는 것이 안전하지 않을 때 이용하세요.",
          icon: "alert",
        },
        {
          title: "긴급 지원",
          content:
            "상황이 심각해서 곧 도움이 필요하지만, 당장 생명이 위급한 응급은 아닐 때 이용하세요.",
          icon: "clock",
        },
        {
          title: "일반 상담",
          content:
            "지속되는 불안, 우울, 스트레스, 애도, 관계 문제, 인생의 변화에 이용하세요.",
          icon: "heart",
        },
        {
          title: "어린이·청소년 서비스",
          content:
            "도움이 필요한 사람이 어린이나 청소년이라면 전문 청소년 정신 건강 서비스를 이용하세요.",
          icon: "info",
        },
        {
          title: "캠퍼스 지원",
          content:
            "학생은 캠퍼스 웰니스나 상담 경로에서 먼저 도움을 받는 것이 가장 좋을 수 있습니다.",
          icon: "stethoscope",
        },
        {
          title: "성폭력 피해 지원",
          content:
            "성폭력 이후의 위기 대응, 상담, 권익 옹호, 안전 계획에는 전문 지원을 이용하세요.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "흔한 상황에서 시작할 곳",
      type: "table",
      columns: ["상황", "가장 좋은 첫 방문지", "이유"],
      rows: [
        {
          cells: [
            "오늘 밤 정신 건강 도움이 필요해요",
            "9-8-8에 전화하거나 문자를 보내거나, AMHS-KFLA 위기 상담전화에 전화하거나, 안전이 위험하면 응급 진료를 이용하세요",
            "상황이 안전하지 않게 느껴질 때는 정기 예약을 기다리지 마세요",
          ],
        },
        {
          cells: [
            "상담이 필요하지만 지금은 안전해요",
            "지역사회 상담, 가정의, 전문간호사 또는 민간 보험 지원",
            "지속적인 관리와 의뢰에 도움이 될 수 있습니다",
          ],
        },
        {
          cells: [
            "아이를 위한 도움이 필요해요",
            "어린이·청소년 정신 건강 서비스, 필요하면 긴급 안내",
            "어린이와 청소년에게는 별도의 경로가 있는 경우가 많습니다",
          ],
        },
        {
          cells: [
            "저는 학생이에요",
            "상황이 안전하지 않거나 심각한 경우가 아니라면 캠퍼스 건강 또는 상담 서비스를 먼저 이용하세요",
            "학생에게는 캠퍼스 서비스가 가장 빠른 입구일 수 있습니다",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "자주 묻는 질문",
      type: "faq",
      faqs: [
        {
          question: "지금 당장 누구에게 전화하거나 문자를 보낼 수 있나요?",
          answer:
            "언제든지 **9-8-8**(자살 위기 상담전화)에 전화하거나 문자를 보내세요. 무료, 연중무휴 24시간이며 의뢰가 필요 없습니다. 킹스턴에서는 AMHS-KFLA 위기 상담전화 613-544-4229도 24시간 응답합니다. 당장 안전이 위험하다면 911에 전화하세요.",
        },
        {
          question: "이것이 위기인지 아닌지 모르겠으면 어떻게 하나요?",
          answer:
            "누군가 안전하지 않을 수 있다면 확신이 들 때까지 기다리지 마세요. 위기 지원이나 응급 서비스를 이용하세요.",
        },
        {
          question: "오늘 밤 도움이 필요한데 누구에게 전화해야 할지 모르겠어요.",
          answer:
            "아침까지 기다리지 말고 지역 정신 건강 디렉터리 페이지나 위기 지원 경로를 이용하세요.",
        },
        {
          question: "도움이 필요한 사람이 제 아이라면요?",
          answer:
            "어린이·청소년 전용 서비스를 찾아보세요. 청소년 정신 건강 경로는 성인 진료와 다른 경우가 많습니다.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "검진과 예방",
  description:
    "온타리오의 예방 의료, 백신, 검진의 기초를 알아보세요.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health (KFL&A 공중보건)",
      url: "https://www.kflaph.ca/",
      note: "지역 백신 및 공중 보건 정보입니다.",
    },
    {
      title: "온타리오주: 온타리오의 의료",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "일반적인 의료 안내입니다.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "예방 의료가 중요한 이유",
      type: "default",
      content:
        "예방 의료란 문제를 일찍 발견하거나 더 심각해지기 전에 막으려는 노력을 말합니다. 백신, 검진 검사, 정기적인 혈압 확인, 그리고 의료인과 위험 요인에 대해 나누는 대화가 여기에 포함됩니다.",
    },
    {
      id: "common-prevention",
      title: "흔한 예방 과제",
      type: "checklist",
      items: [
        "예방접종을 최신 상태로 유지하세요",
        "내 나이나 건강 이력에 권장되는 검진 검사가 있는지 물어보세요",
        "혈압, 당뇨, 기타 위험 요인에 대한 질문을 정기 진료 때 가져가세요",
        "백신이나 예방 정보가 필요할 때 공중 보건 자료를 이용하세요",
      ],
    },
    {
      id: "prevention-next",
      title: "지역 예방 서비스가 필요하신가요?",
      type: "callout",
      content:
        "킹스턴에서 구체적인 출발점이 필요하다면 지역 서비스 디렉터리에서 공중 보건, 검진, 약국 목록을 이용하세요.",
      link: {
        text: "공중 보건 및 약국 목록",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "보조·지역사회 의료",
  description:
    "재택 돌봄, 치과, 재활, 상담, 시력 지원을 이해하고, 무엇이 공공, 지역사회, 학생, 민간 서비스인지 알아보는 페이지입니다.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "공식 재택 및 지역사회 돌봄 조정 정보입니다.",
    },
    {
      title: "캐나다: Canadian Dental Care Plan (캐나다 치과 보험 플랜)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "공식 연방 치과 보장 프로그램 정보 및 자격 안내입니다.",
    },
    {
      title: "Kingston Community Health Centres (킹스턴 지역보건센터)",
      url: "https://kchc.ca/",
      note: "공식 지역사회 및 치과 서비스 정보입니다.",
    },
    {
      title: "CNIB Foundation (CNIB 재단)",
      url: "https://www.cnib.ca/",
      note: "공식 시력 지원 정보입니다.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "보조·지역사회 의료란",
      type: "default",
      content:
        "보조 의료(allied health)란 물리치료사, 작업치료사, 영양사, 사회복지사, 상담사, 치과의사, 시력 지원 팀 같은 전문가의 진료를 말합니다. 지역사회 돌봄은 보통 병원 밖에서 이루어지는 돌봄으로, 집, 학교, 클리닉 또는 지역사회 프로그램에서 제공되기도 합니다.",
    },
    {
      id: "access-payment-matrix",
      title: "이용 및 비용 안내표",
      type: "table",
      columns: ["경로", "예시", "비용은 보통 이렇게", "시작 방법"],
      rows: [
        {
          cells: [
            "공공 재원 재택 및 지역사회 돌봄",
            "방문 간호, 재택 치료, 돌봄 조정",
            "프로그램 규칙에 맞으면 공공 프로그램이 적용될 수 있습니다",
            "의료인의 의뢰 또는 공식 재택 돌봄 경로에서 시작하세요",
          ],
        },
        {
          cells: [
            "지역사회 기반 서비스",
            "지역보건센터 치과 또는 문턱 낮은 지원",
            "서비스에 따라 공공 또는 지역사회 재원이 적용될 수 있습니다",
            "프로그램에 직접 연락해 자격을 문의하세요",
          ],
        },
        {
          cells: [
            "학교 기반 지원",
            "캠퍼스 상담 또는 건강 관련 지원",
            "보통 학생 자격과 학생 회비 또는 보험에 연결되어 있습니다",
            "학교의 공식 서비스 페이지를 먼저 이용하세요",
          ],
        },
        {
          cells: [
            "민간 보조 의료",
            "물리치료, 상담, 마사지, 민간 치과, 민간 시력 서비스",
            "다른 보험이 보장하지 않는 한 보통 본인 부담입니다",
            "예약 전에 전체 비용과 보장 규칙을 문의하세요",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "보조·지역사회 의료의 예",
      type: "grid",
      gridItems: [
        {
          title: "재택 돌봄",
          content:
            "질병, 부상 또는 입원 치료 이후 집에서 지원이 필요할 때 유용합니다.",
          icon: "clock",
          link: {
            text: "재택 돌봄 목록",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "치과 진료",
          content:
            "치과 보장은 일반적인 의사 진료 보장과 별개입니다. 연방 Canadian Dental Care Plan은 이제 민간 치과 보험이 없는 많은 사람을 보장하며, Healthy Smiles Ontario와 지역사회 치과 클리닉 같은 프로그램이 특정 대상을 돕습니다.",
          icon: "shield",
          link: {
            text: "치과 및 지역사회 목록",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "재활과 치료",
          content:
            "물리치료, 작업치료 및 관련 서비스는 경로에 따라 공공, 지역사회 또는 민간일 수 있습니다.",
          icon: "stethoscope",
          link: { text: "보조 의료 목록", url: "/local-services?category=allied-community" },
        },
        {
          title: "시력 지원",
          content:
            "시력 지원에는 의료적인 안과 진료뿐 아니라 보조 기기, 방향 익히기 도움, 지역사회 지원이 포함될 수 있습니다.",
          icon: "info",
          link: {
            text: "시력 지원 목록",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "예약 전에",
      type: "checklist",
      items: [
        "의뢰가 필요한지 물어보세요",
        "서비스가 공공, 지역사회 재원, 민간 본인 부담 중 어디에 해당하는지 물어보세요",
        "민간 서비스라면 정확한 비용과 취소 규정을 물어보세요",
        "학교 또는 민간 보험이 비용 일부를 보장하는지 확인하세요",
        "기록, 영상 검사 자료 또는 의사 소견서를 가져가야 하는지 물어보세요",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "자주 묻는 질문과 용어집",
  description:
    "신규 정착자가 자주 겪는 상황, 실용적인 질문, 쉬운 말 풀이입니다.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "온타리오주: 온타리오의 의료",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "일반적인 주정부 의료 안내입니다.",
    },
    {
      title: "온타리오주: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "공식 간호사 상담 안내입니다.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "신규 정착자가 자주 겪는 상황",
      type: "faq",
      faqs: [
        {
          question: "아직 OHIP이 없어요. 무엇을 먼저 해야 하나요?",
          answer:
            "먼저 내 보장 경로를 알아본 다음, 지역 디렉터리와 긴급 안내 페이지를 이용해 안전한 임시 계획을 세우세요.",
        },
        {
          question: "국제 학생인데 어디서 시작해야 하나요?",
          answer:
            "캠퍼스 건강 또는 웰니스 서비스와 학교 보험 문서에서 시작하고, 그것으로 부족할 때 지역사회 또는 긴급 서비스를 이용하세요.",
        },
        {
          question: "통역사가 필요해요.",
          answer:
            "일찍 요청하세요. 언어 메뉴를 사용해 이 사이트를 33개 언어로 읽을 수 있고, 통역 도움 탭의 간단한 문구를 직원에게 보여 줄 수 있습니다. 진료 예약, 약 복용 안내, 동의, 검사 상담에서는 전문 통역 지원에 대해 문의하세요. Health811(811번 전화)은 여러 언어로 전화 지원을 제공합니다.",
        },
        {
          question: "진료 후 혈액 검사가 필요해요.",
          answer:
            "검사 의뢰서가 있는지 확인한 다음, 디렉터리에서 검사실과 영상 검사를 검색하세요.",
        },
        {
          question: "약 재처방이 필요한데 의사를 만날 수 없어요.",
          answer:
            "약국에 먼저 문의한 뒤, 약과 긴급한 정도에 따라 상황에 맞게 워크인, 비대면 또는 긴급 경로를 이용하세요.",
        },
        {
          question: "아이를 진료받게 해야 해요.",
          answer:
            "먼저 응급 경고 징후를 확인한 다음, 당일 또는 긴급 안내를 이용하세요. 어린이·청소년 정신 건강 경로는 성인 진료와 별개인 경우가 많습니다.",
        },
        {
          question: "오늘 밤 정신 건강 도움이 필요해요.",
          answer:
            "언제든지 9-8-8(자살 위기 상담전화)에 전화하거나 문자를 보내거나, 24시간 AMHS-KFLA 위기 상담전화 613-544-4229에 전화하세요. 안전이 위험하다면 응급 진료를 이용하세요. 정기 예약을 기다리지 마세요.",
        },
        {
          question: "검사 의뢰서나 의뢰서가 이해되지 않아요.",
          answer:
            "그 서류를 준 클리닉에 전화해 쉬운 말로 설명해 달라고 요청하세요. 무엇을 위한 것인지, 어디로 가는지, 누가 후속 확인을 해야 하는지 물어볼 수 있습니다.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "그 밖의 자주 묻는 질문",
      type: "faq",
      faqs: [
        {
          question: "의사가 없으면 그냥 응급실에 가도 되나요?",
          answer:
            "응급실은 응급 상황을 위한 곳입니다. 문제가 명백히 생명을 위협하지 않는다면 긴급 안내 페이지, Health811, 워크인 클리닉 또는 다른 당일 진료에서 시작하세요.",
        },
        {
          question: "처음 와서 어떤 서비스가 저에게 맞는지 모르겠어요.",
          answer:
            "학생, 신규 정착자, 어린이·청소년, 워크인, 비대면, 의뢰 필요, 보장 유형 등 디렉터리 필터를 이용하세요.",
        },
        {
          question: "이 사이트의 정보가 오래된 것 같으면 어떻게 하나요?",
          answer:
            "해당 페이지나 목록의 신고 양식을 이용하면 다음 검토에서 발견하신 변경 사항에 집중할 수 있습니다.",
        },
      ],
    },
    {
      id: "glossary",
      title: "용어집",
      type: "checklist",
      items: [
        "일차 의료(primary care): 일상적이고 지속적인 건강 문제를 위한 정기적인 의료 경로입니다.",
        "전문간호사(NP, nurse practitioner): 많은 상황에서 평가, 진단, 처방, 의뢰를 할 수 있는 상급 실무 간호사입니다.",
        "의뢰(referral): 한 의료인이 다른 서비스나 전문의에게 진료를 요청하는 것입니다.",
        "검사 의뢰서(requisition): 검사실이나 영상 클리닉에 어떤 검사가 필요한지 알려 주는 서류입니다.",
        "트리아지(triage): 안전과 심각성에 따라 누가 먼저 긴급 진료를 받을지 정하는 과정입니다.",
        "워크인 클리닉(walk-in clinic): 예약 없이 환자를 볼 수 있는 클리닉으로, 하루 접수 인원에 제한이 있을 수 있습니다.",
        "긴급 진료(urgent care): 명백히 생명을 위협하지는 않는 급한 문제를 위한 당일 진료입니다.",
        "등록 환자(rostered/attached patient): 담당 일차 의료 제공자와 지속적인 관계를 맺고 있는 환자입니다.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "소개, 신뢰성, 개인정보",
  description:
    "이 안내서가 어떻게 운영되는지, 출처와 검토 상태를 어떻게 다루는지, 변경 사항을 어떻게 신고하는지 알아보세요.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "프로젝트 출처 노트",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "이 프로젝트가 신뢰성과 출처를 다루는 방식에 대한 공개 요약입니다.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "이 사이트의 목적",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca는 온타리오주 킹스턴의 신규 정착자를 위한 의료 길잡이 안내서입니다. 알맞은 다음 단계를 선택하고, 흔한 시스템 용어를 이해하고, 신뢰할 수 있는 지역 서비스 목록을 찾도록 돕기 위해 만들어졌습니다.\n\n이 사이트는 실시간 대기 시간 도구, 예약 플랫폼, 의학적 조언 서비스가 **아닙니다**.",
    },
    {
      id: "sources",
      title: "신뢰성과 출처는 이렇게 다룹니다",
      type: "default",
      content:
        "가능하면 지역 목록을 공식 서비스 페이지에 연결하려고 노력합니다. 각 목록에는 검토 상태와 마지막 검토 날짜가 표시됩니다. 일부 항목은 공식 출처와 완전히 대조해 확인했습니다. 운영 시간, 접수, 이용 규칙이 자주 바뀌기 때문에 아직 현지 재확인이 필요한 항목도 있습니다.\n\n페이지 단위의 출처 블록에는 현재 검토 주기에 사용한 주요 공식 참고 자료가 표시됩니다.",
    },
    {
      id: "accessibility",
      title: "접근성과 언어",
      type: "default",
      content:
        "이 사이트는 키보드로 쓰기 편하고, 모바일 우선이며, 쉬운 말로 읽을 수 있도록 만들어졌습니다.\n\n헤더의 언어 메뉴를 사용해 이 안내서 전체를 **33개 언어**로 읽을 수 있습니다 — العربية와 Soomaali부터 ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, Українська까지 — 모든 페이지와 메뉴가 이 사이트에서 직접 제공됩니다. 모든 번역은 기계의 도움을 받아 만들어졌습니다. 프랑스어, 스페인어, 아랍어, 중국어 간체는 추가 검토를 거쳤고, 나머지는 자동 번역으로 표시됩니다. **영어가 기준 버전입니다** — 번역된 문장이 불분명하거나 이상하게 보이면 영어 원문을 확인하거나 다른 사람에게 확인을 부탁하세요.\n\n수십 개의 다른 언어는 같은 메뉴에서 Google 번역을 통해 이 사이트를 열 수 있으며, 통역 도움 탭에는 직원에게 보여 줄 수 있는 20개 이상 언어의 긴급 문구도 있습니다.\n\n서비스 목록(기관 이름, 주소, 전화번호, 운영 시간)은 공식 출처와 정확히 일치하도록 영어로 유지됩니다.\n\n어떤 번역이든 의학적 세부 내용에서는 틀릴 수 있으니, 진료 예약, 약 복용 안내, 동의에 대해서는 전문 통역 지원을 문의하세요. Health811(811번 전화)은 여러 언어로 전화 지원을 제공합니다.",
    },
    {
      id: "privacy",
      title: "개인정보",
      type: "default",
      content:
        "이 사이트는 침해적인 원격 분석을 사용하지 않습니다. 자주 검색되는 항목, 결과가 없는 검색, 서비스 조회, 문제 신고를 운영진이 파악할 수 있도록 가벼운 개선 기록을 사용자 본인의 브라우저에만 보관하며, 이 정보는 유지 관리를 위해 의도적으로 내보낼 때만 사용됩니다.\n\n의견 양식이나 이메일로 개인 의료 정보를 보내지 마세요.",
    },
    {
      id: "contact",
      title: "연락 및 변경 사항 신고",
      type: "default",
      content:
        "페이지나 목록이 잘못되어 보이면 해당 페이지의 신고 양식을 이용하세요. 신고에는 개인 건강 상황이 아니라 문제 자체를 적어 주세요.\n\n일반 문의 이메일: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "면책 안내",
      type: "default",
      content:
        "이 웹사이트는 길 안내와 교육 목적으로만 제공됩니다. 의학적 조언이 아니며 전문적인 진단, 치료 또는 응급 도움을 대신할 수 없습니다. 생명이 위급할 수 있는 상황이라면 911에 전화하세요.",
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
