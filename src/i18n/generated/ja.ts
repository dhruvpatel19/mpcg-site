import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "ページを読み込んでいます…",
    directoryEnglishNote:
      "サービス名・住所・電話番号・営業時間が公式情報と正確に一致するよう、ディレクトリの掲載情報は英語で表示しています。",
  },
  header: {
    emergencyBanner: "命に関わる緊急事態ですか？今すぐ911に電話してください。",
    tagline: "オンタリオ州キングストンの新規移住者向け医療ナビゲーション",
    languageButton: "言語",
    languageButtonAria: "言語と通訳のサポート",
    openNavigation: "ナビゲーションを開く",
    primaryNavLabel: "メイン",
  },
  languageModal: {
    title: "言語と通訳のサポート",
    description:
      "このガイドは、いちばん読みやすい言語でお読みください。医療に関する会話では、必要なときに通訳を依頼してください。",
    chooseLanguageTitle: "言語を選んでください",
    chooseLanguageNote:
      "このガイドは、このサイト内で33の言語に完全に翻訳されており、さらに数十の言語が自動翻訳で開けます。ディレクトリの掲載情報は、公式情報と正確に一致するよう英語のままです。内容が分かりにくい場合は、英語版が基準となります。",
    safetyTitle: "安全に関する注意",
    safetyBody:
      "ウェブサイトの翻訳は、読んで理解するためのものです。予約、検査の指示、薬、同意については、クリニックや病院でプロの通訳を利用できるか尋ねてください。Health811（811に電話）は多くの言語で電話サポートを提供しています。",
    phrasesTitle: "スタッフに見せる簡単なフレーズ",
    phrasesNote:
      "ご自身の言語を指さして、受付や医療スタッフにこれらの文を見せてください。",
    callHealth811: "Health811に電話する",
    accessibilityCta: "アクセシビリティと信頼性",
    close: "言語ヘルプダイアログを閉じる",
  },
  moreLanguages: {
    title: "その他の言語（自動翻訳）",
    description:
      "ソマリ語、ヨルバ語、イボ語、ハウサ語、アムハラ語、ティグリニャ語、スワヒリ語、ウクライナ語、ペルシア語（ファルシ）、ウルドゥー語、パンジャブ語、タミル語、ベトナム語を含むすべての言語を、この一つのメニューから利用できます。",
    selectLabel: "言語を選択",
    selectPlaceholder: "すべての言語 — 1つ選択してください…",
    openButton: "この言語で開く",
    disclaimer:
      "「自動」と表示されている言語は、Google翻訳を通じてこのページを開き、閲覧を続けている間もその言語のまま表示されます。自動翻訳はこのプロジェクトでは確認されていません。読むのには便利ですが、医療の詳細は医療者または通訳に確認してください。",
  },
  funding: {
    acknowledgment:
      "このプロジェクトは Ontario Medical Students Association (OMSA) の助成金による支援を受けています。",
    logoAlt: "Ontario Medical Students Association (OMSA) のロゴ",
  },
  languagePicker: {
    searchPlaceholder: "言語を検索…",
    onSiteGroup: "このサイト内で翻訳済み",
    proxyGroup: "Google翻訳によるその他の言語",
    reviewedBadge: "確認済み",
    automaticBadge: "自動",
    interpreterTab: "通訳サポートとフレーズ",
    noMatches: "検索に一致する言語はありません。",
    note: "翻訳は機械の支援を受けて作成されており、内容が分かりにくい場合は英語版が基準となります。Google翻訳グループの言語は、外部のGoogleサイトでこのページを開きます。ディレクトリの掲載情報は、公式情報と正確に一致するよう英語のままです。",
  },
  navigation: [
    {
      title: "はじめに",
      items: [
        {
          label: "今すぐ助けが必要",
          to: "/need-help-now",
          description: "緊急時の判断と危機サポート",
        },
        {
          label: "はじめての方へ",
          to: "/start-here",
          description: "オンタリオ州の医療が初めての方に",
        },
        {
          label: "プライマリケアを探す",
          to: "/get-a-family-doctor",
          description: "医師、NP、CHC、学生向けの選択肢",
        },
      ],
    },
    {
      title: "医療を理解する",
      items: [
        {
          label: "費用と保険",
          to: "/costs-and-coverage",
          description: "OHIP、IFHP、民間プラン、薬の保険",
        },
        {
          label: "受診のとき",
          to: "/your-visit",
          description: "持ち物と質問の仕方",
        },
        {
          label: "受診のあと",
          to: "/after-visit",
          description: "検査、検査依頼書、紹介、フォローアップ",
        },
        {
          label: "薬と薬局",
          to: "/medicines-and-pharmacies",
          description: "処方箋、リフィル（補充）、薬剤師のサポート",
        },
      ],
    },
    {
      title: "地域のサポート",
      items: [
        {
          label: "地域のサービス",
          to: "/local-services",
          description: "キングストンのサービスを検索",
        },
        {
          label: "メンタルヘルス",
          to: "/mental-health",
          description: "危機、緊急、通常、若者向けのサポート",
        },
        {
          label: "検診と予防",
          to: "/screening-prevention",
          description: "ワクチンと予防医療",
        },
        {
          label: "関連医療と地域ケア",
          to: "/community-allied-health",
          description: "在宅ケア、リハビリ、歯科、地域の支援",
        },
        {
          label: "よくある質問",
          to: "/faq",
          description: "新規移住者によくある場面と用語集",
        },
        {
          label: "このサイトについて・信頼性",
          to: "/about",
          description: "情報源、プライバシー、アクセシビリティ、フィードバック",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "今すぐ助けが必要ですか？",
    items: {
      "call-911": {
        label: "911に電話",
        description: "命に関わる緊急事態",
      },
      "call-811": {
        label: "Health811に電話",
        description: "看護師による相談、24時間365日",
      },
      "call-988": {
        label: "9-8-8に電話またはテキスト",
        description: "自殺危機ヘルプライン、24時間365日",
      },
      "call-crisis": {
        label: "クライシスラインに電話",
        description: "AMHS-KFLAクライシスライン",
      },
      "urgent-guide": {
        label: "緊急時ケアガイド",
        description: "夜間・休日と当日受診の選択肢",
      },
      "mental-health": {
        label: "メンタルヘルスサポート",
        description: "危機・緊急・通常の支援の道筋",
      },
    },
  },
  home: {
    seoTitle: "キングストン医療ガイド",
    seoDescription:
      "オンタリオ州キングストンの新規移住者向け医療ナビゲーション。緊急時の助け、地域のサービス、保険の基本、通訳の案内、受診後の次のステップ。",
    kicker: "オンタリオ州キングストン",
    heroTitle: "迷わずにキングストンで適切な医療を見つける",
    heroLead:
      "緊急時の助け、新規移住者向けの基本、保険、地域サービスのディレクトリから始めましょう。このガイドは分かりやすい言葉で書かれ、スマートフォンでも読みやすく、まだ再確認が必要な情報については正直にお伝えします。",
    cardNeedHelp: {
      title: "今すぐ助けが必要",
      body: "救急、緊急時ケア、危機、夜間・休日の案内。",
    },
    cardStartHere: {
      title: "はじめての方へ",
      body: "オンタリオ州の医療の仕組みと、最初にすべきこと。",
    },
    cardSearch: {
      title: "サービスを検索",
      body: "血液検査、薬のリフィル、予約なし受診、メンタルヘルスなどを調べられます。",
    },
    cardLanguage: {
      title: "言語サポート",
      body: "このガイドをあなたの言語で読めます。通訳の案内や簡単なフレーズもあります。",
    },
    quickDecisionsKicker: "すぐの判断",
    quickDecisionsTitle: "まずはこれらの質問から",
    quickDecisionLines: [
      "命に関わる可能性がある場合は、今すぐ911に電話してください。",
      "今夜どこへ行けばよいか分からない場合は、Health811に電話してください。",
      "自殺を考えてしまうときや、抱えきれないほどつらいときは、いつでも9-8-8に電話またはテキストしてください。",
      "家庭医がいない場合は、ウォークイン（予約なし受診）、コミュニティヘルス、学生向けの選択肢を計画に入れておきましょう。",
      "血液検査、レントゲン、薬のリフィル、紹介の確認が必要な場合は、地域ディレクトリで次のステップを探してください。",
    ],
    trustNoteTitle: "信頼性に関する注意",
    trustNoteBody:
      "これは静的なガイドであり、リアルタイムの待ち時間は表示していません。営業時間や受け入れ状況など時間に左右される情報はすぐに変わることがあるため、すべての掲載情報に情報源へのリンクと確認状況を表示しています。",
    newcomerKicker: "新規移住者クイックスタート",
    newcomerTitle: "キングストンに来たばかりの方の最初のステップ",
    newcomerSteps: [
      {
        title: "1. 自分の保険を知る",
        body: "OHIP（オンタリオ州健康保険）、IFHP（連邦暫定保健プログラム）、民間プラン、そして通常カバーされないものを理解しましょう。OHIPには待機期間はありません。到着したらすぐに申請してください。",
      },
      {
        title: "2. プライマリケアの道筋を計画する",
        body: "家庭医、ナースプラクティショナー、学生クリニック、コミュニティヘルスセンター、ウォークイン（予約なし受診）の違いを学びましょう。",
      },
      {
        title: "3. 次に何が起こるかを知る",
        body: "検査依頼書、紹介、検査結果、フォローアップの連絡が通常どのような意味を持つかを学びましょう。",
      },
    ],
    languageSupportKicker: "言語サポート",
    languageSupportTitle: "助けが必要なときはこれらのフレーズを見せてください",
    openLanguageHelp: "言語ヘルプを開く",
    commonTasksKicker: "よくある用件",
    commonTasksTitle: "済ませたい用件から検索",
    openDirectory: "ディレクトリ全体を開く",
    tasks: [
      {
        title: "血液検査またはレントゲン",
        body: "検査機関と画像診断のサービスを探せます。",
      },
      {
        title: "処方薬のリフィル（補充）",
        body: "薬局とリフィルのサポートを探せます。",
      },
      {
        title: "メンタルヘルスサポート",
        body: "危機、緊急、通常、若者向けのサポート。",
      },
      {
        title: "健康保険証または新規移住者サポート",
        body: "ServiceOntario、ISKA、電話相談を探せます。",
      },
    ],
    featuredKicker: "おすすめのサービス",
    featuredTitle: "最初に頼れる場所",
    trustKicker: "信頼性と情報源",
    trustTitle: "確認済みの情報と再確認が必要な情報を正直に表示します",
    trustBody:
      "一部の掲載情報は地元の公式情報源と照合済みです。営業時間、受け入れ、利用条件は頻繁に変わるため、まだ現地での再確認が必要なものもあります。その状況を隠さずに表示し、古くなった情報の報告をお願いしています。",
    trustChecklistTitle: "掲載情報を頼りにする前にお読みください",
    trustChecklist: [
      "公式の情報源リンクを確認してください。",
      "最終確認日をチェックしてください。",
      "行く前に、当日の営業時間と予約なし受診の可否を確認してください。",
      "変更に気づいたら報告フォームをご利用ください。",
    ],
    trustLink: "情報源と信頼性に関する注意を見る",
  },
  contentPage: {
    breadcrumbHome: "ホーム",
    badge: "やさしい言葉のガイド",
    reviewStatusTitle: "確認状況",
    reviewLabels: {
      reviewed:
        "このプロジェクトで現在使用している情報源と照合して確認済みです。",
      "general-guidance":
        "一般的な案内として確認済みです。地域の詳細はすぐに変わる可能性があります。",
      "needs-local-recheck":
        "役立つ案内ですが、地域の詳細はさらに確認が必要です。",
    },
    lastReviewPrefix: "ページの最終確認：",
    noReviewDate: "このページには、ページ単位の確認日が記録されていません。",
    translationAside:
      "言語メニューから、このページを複数の言語で読むことができます。予約、薬、同意、検査の指示については、通訳のサポートが利用できるか尋ねてください。",
    share: "共有",
    print: "印刷",
    sourcesTitle: "このページの情報源",
    sourcesNote:
      "これらは、現在のページ確認に使用した主な公式または一次情報源です。確認サイクルの間に、地域の手続きが変わることがあります。",
    onThisPage: "このページの内容",
    sourcesAnchorLabel: "情報源",
    translationReminderTitle: "翻訳に関する注意",
    translationReminderBody:
      "治療や安全に関わることは、翻訳だけに頼らず、医療者または通訳に確認してください。",
    linkCopiedTitle: "リンクをコピーしました",
    linkCopiedBody: "このページのリンクをどこにでも貼り付けられます。",
    shareCancelled: "共有をキャンセルしました",
  },
  directory: {
    seoTitle: "地域のサービス",
    seoDescription:
      "オンタリオ州キングストンの、新規移住者にやさしい医療、メンタルヘルス、薬局、保険、ナビゲーションのサービスを検索できます。",
    kicker: "キングストン・ディレクトリ",
    title: "地域の医療サービスを検索",
    lead: "サービス、症状、書類、用件で検索できます。例：予約なし受診、夜間・休日、血液検査、リフィル、健康保険証、学生クリニック、新規移住者サポート。",
    searchPlaceholder: "用件、サービス名、住所、キーワードで検索",
    sortAriaLabel: "結果を並べ替え",
    sortRelevance: "並べ替え：関連度",
    sortAlphabetical: "並べ替え：A〜Z",
    sortRecentlyReviewed: "並べ替え：最近確認した順",
    sortArea: "並べ替え：地域",
    gridViewLabel: "グリッド表示",
    listViewLabel: "リスト表示",
    allServices: "すべてのサービス",
    audienceTitle: "対象者",
    accessTitle: "利用方法",
    careLevelTitle: "ケアのレベル",
    coverageAreaTitle: "保険と地域",
    areaLabel: "地域",
    showingServices: "{count}件のサービスを表示中",
    resetFilters: "フィルターをリセット",
    trustPanelTitle: "信頼性と確認状況",
    trustPanelBody:
      "このディレクトリは静的なもので、リアルタイムではありません。記録されている最終確認日、可能な場合は公式情報源へのリンク、現地での再確認がまだ必要な掲載情報を表示しています。行く前に、営業時間と当日受診の可否を確認してください。",
    verifiedLabel: "確認済み",
    needsRecheckLabel: "再確認が必要",
    noResultsTitle: "条件に一致するサービスが見つかりませんでした",
    noResultsBody:
      "血液検査、リフィル、メンタルヘルス、健康保険証、予約なし受診など、より広い言葉で検索してみてください。すべてのフィルターを解除してやり直すこともできます。",
    notSureTitle: "どこから始めればよいか分かりませんか？",
    notSureBody:
      "救急、緊急時ケア、ウォークインクリニック、薬局のサポートのどれが必要か分からない場合は、緊急時ガイドのページから始めるか、Health811に電話して看護師に相談してください。",
    needHelpNowCta: "今すぐ助けが必要",
    callHealth811: "Health811に電話する",
  },
  filters: {
    audience: {
      newcomers: "新規移住者",
      students: "学生限定またはキャンパス内",
      "children-youth": "子ども・若者",
      adults: "大人",
      families: "家族",
      "unattached-patients": "家庭医がいない方",
    },
    access: {
      "walk-in": "予約なし受診",
      appointment: "要予約",
      referral: "紹介が必要",
      virtual: "オンライン",
    },
    level: {
      emergency: "救急",
      urgent: "緊急",
      primary: "プライマリ",
      community: "コミュニティ",
    },
    payment: {
      public: "公費負担",
      community: "コミュニティ／利用しやすい",
      mixed: "混合",
      "student-plan": "学生プラン",
      private: "自費",
    },
    location: {
      downtown: "ダウンタウン",
      "north-end": "ノースエンド",
      "west-end": "ウェストエンド",
      campus: "キャンパス",
      online: "オンライン",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "救急・緊急時ケア",
      shortLabel: "救急・緊急",
    },
    "primary-care": { label: "プライマリケア", shortLabel: "プライマリケア" },
    "community-health": {
      label: "コミュニティヘルスセンター",
      shortLabel: "コミュニティヘルス",
    },
    "mental-health": {
      label: "メンタルヘルスと危機サポート",
      shortLabel: "メンタルヘルス",
    },
    "public-health": { label: "公衆衛生", shortLabel: "公衆衛生" },
    "labs-imaging": {
      label: "検査・画像診断",
      shortLabel: "検査・画像診断",
    },
    pharmacies: {
      label: "薬と薬局",
      shortLabel: "薬局",
    },
    "allied-community": {
      label: "関連医療と地域ケア",
      shortLabel: "関連医療",
    },
    "navigation-support": {
      label: "ナビゲーションと保険のサポート",
      shortLabel: "ナビゲーション",
    },
  },
  serviceCard: {
    whenToUse: "利用する場面：",
    accessLabel: "利用方法",
    eligibilityLabel: "利用資格",
    eligibilityFallback:
      "公式情報源に特に記載がない限り、一般の方が利用できます。",
    hoursLabel: "営業時間",
    phoneLabel: "電話",
    trustDetails: "信頼性と情報源の詳細",
    lastReview: "最終確認：",
    officialSource: "公式情報源",
    call: "電話する",
    officialWebsite: "公式サイト",
    directions: "道順",
    viewDetails: "詳細を見る",
  },
  serviceDetail: {
    backToServices: "地域のサービス一覧に戻る",
    whenToUseTitle: "このサービスを利用する場面",
    eligibilityTitle: "利用資格とアクセス",
    eligibilityFallback:
      "このサービスを利用できるか分からない場合は、公式情報源を確認してください。",
    whatToBringTitle: "持ち物",
    contactTitle: "連絡先とアクション",
    callNow: "今すぐ電話",
    officialWebsite: "公式サイト",
    directions: "道順",
    trustTitle: "信頼性と情報源",
    lastReview: "最終確認：",
    viewOfficialSource: "公式情報源を見る",
  },
  verification: {
    verified: {
      label: "公式情報源と照合して確認済み",
      shortLabel: "確認済み",
      description:
        "主要な情報は、直近の確認サイクルで公式情報源と照合されています。",
    },
    "partially-verified": {
      label: "公式情報源リンクあり",
      shortLabel: "公式リンク",
      description:
        "公式情報源へのリンクがありますが、頻繁に変わる可能性のある項目が含まれるため、行く前に確認してください。",
    },
    "community-reported": {
      label: "コミュニティからの報告",
      shortLabel: "コミュニティ報告",
      description:
        "この情報はコミュニティからの報告に基づくもので、まだ独立した確認が必要です。",
    },
    "needs-recheck": {
      label: "再確認が必要",
      shortLabel: "再確認が必要",
      description:
        "まだ役立つ可能性があるため掲載を続けていますが、重要な情報が古くなっている可能性があります。頼りにする前に確認してください。",
    },
  },
  feedback: {
    badge: "古い情報を報告",
    title: "このガイドを正確に保つためにご協力ください",
    body: "ページまたはサービスの情報をあらかじめ記入したメールが開きます。個人の医療情報は含めないでください。",
    issueTypeLabel: "問題の種類",
    issueTypes: {
      "outdated hours": "営業時間が古い",
      "wrong phone or website": "電話番号またはウェブサイトの誤り",
      "eligibility or access issue": "利用資格またはアクセスの問題",
      "translation or accessibility problem":
        "翻訳またはアクセシビリティの問題",
      "missing service or content": "サービスまたは内容の欠落",
      other: "その他",
    },
    detailsLabel: "確認すべき点を教えてください",
    detailsPlaceholder:
      "例：電話番号が変わった、クリニックが予約制になった、リンクが切れている、など。",
    contactLabel: "連絡先（任意）",
    contactPlaceholder: "返信を希望する場合はメールアドレス",
    openEmail: "報告メールを開く",
    copyText: "報告内容をコピー",
    thanks:
      "ありがとうございます。報告は、古くなったページ、切れたリンク、現地での再確認が必要な掲載情報の優先順位づけに役立ちます。",
    toastEmailTitle: "メールの下書きを開きました",
    toastEmailBody: "報告にはページまたはサービスの情報が含まれています。",
    toastCopyTitle: "問題の概要をコピーしました",
    toastCopyBody: "必要に応じて、ご自身のメールソフトに貼り付けられます。",
  },
  footer: {
    description:
      "オンタリオ州キングストンのための、やさしい言葉の医療ナビゲーションガイドです。このサイトは医療アドバイスやリアルタイムの待ち時間を提供しません。時間に左右される情報は、行く前に必ず公式情報源で確認してください。",
    trustModelTitle: "信頼性の方針",
    trustModelBody:
      "公式情報源へのリンク、確認日、再確認がまだ必要な掲載情報を表示しています。誤りに気づいた場合は、ページまたはサービスから報告してください。",
    beforeYouGo: {
      title: "行く前に",
      body: "公式の営業時間、予約や紹介が必要かどうか、持参する書類を確認してください。",
    },
    languageHelp: {
      title: "言語サポート",
      body: "言語メニューから、このガイドをあなたの言語で読めます。正確さが重要な医療の会話では、通訳を依頼してください。",
    },
    privacy: {
      title: "プライバシー",
      body: "このサイトは、お使いのブラウザ内に保存される、プライバシーに配慮した改善ログを使用しています。個人を特定する分析データを外部サーバーに送信することはありません。",
    },
    copyrightSuffix: "オンタリオ州キングストンのための地域情報リソース。",
    disclaimer: "免責事項",
    privacyLink: "プライバシー",
    sourcesLink: "情報源",
    reportLink: "古い情報を報告",
  },
  notFound: {
    seoTitle: "ページが見つかりません",
    seoDescription:
      "お探しのページが見つかりませんでした。緊急時の助け、新規移住者向けの基本、地域のサービス、よくある質問から始めてください。",
    badge: "404",
    title: "そのページは見つかりませんでした",
    body: "すぐに医療を受けたい場合は、緊急時ガイドから始めるか、キングストンのサービスディレクトリを検索してください。",
    startHere: "はじめての方へ",
    needHelpNow: "今すぐ助けが必要",
    localServices: "地域のサービス",
    faq: "よくある質問",
  },
};

const homePage: PageContent = {
  title: "キングストン医療ナビゲーションガイド",
  description:
    "オンタリオ州キングストンで医療を見つけるための、新規移住者向けのやさしい言葉のガイドです。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "はじめての方へ",
  description:
    "キングストンに来たばかりの方、オンタリオ州の医療が初めての方へ。仕組みと最初にすべきことを、ここから学びましょう。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "オンタリオ州：オンタリオ州の医療制度（Health care in Ontario）",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "オンタリオ州で保険適用の医療がどのように機能するかの概要。",
    },
    {
      title: "オンタリオ州：OHIPを申請して健康保険証を取得する",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "公式のOHIP（オンタリオ州健康保険）申請と利用資格の情報。",
    },
    {
      title: "オンタリオ州：家庭医またはナースプラクティショナーを探す",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connectとプライマリケアの利用に関する案内。",
    },
    {
      title: "カナダ政府：連邦暫定保健プログラム（IFHP）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "対象となる難民・難民申請者のための連邦の保険情報。",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "オンタリオ州の医療の仕組み",
      type: "default",
      content: `オンタリオ州の医療は**プライマリケア**を中心に組み立てられています。プライマリケアとは、日常的な健康の問題、継続的な持病、処方薬、紹介、予防について、ふだん最初に相談する場所のことです。プライマリケアの担当は、家庭医、ナースプラクティショナー、コミュニティヘルスセンターのチーム、または条件を満たす場合は学生向けヘルスクリニックのこともあります。

**紹介（referral）**とは、ある医療者が別のサービスや専門医にあなたの診察を依頼することです。**検査依頼書（requisition）**とは、検査機関や画像診断クリニックに、どの検査が必要かを伝える書類です。

初日から制度のすべてを理解する必要はありません。最も大切なステップは、自分の保険を知ること、緊急時にどこへ行くかを知ること、そして、かかりつけがまだいない場合は定期的なケアの計画を立てることです。`,
    },
    {
      id: "first-decisions",
      title: "最初の判断",
      type: "grid",
      gridItems: [
        {
          title: "緊急の助けが必要かもしれない",
          content:
            "今日や今夜、急な問題が起きた場合は、救急と緊急時ケアの判断ガイドから始めてください。",
          icon: "alert",
          link: { text: "今すぐ助けが必要", url: "/need-help-now" },
        },
        {
          title: "家庭医がいない",
          content:
            "家庭医、ナースプラクティショナー、コミュニティヘルスセンター、ウォークインクリニック、学生クリニックがどのように組み合わさるかを学びましょう。",
          icon: "stethoscope",
          link: { text: "プライマリケアを探す", url: "/get-a-family-doctor" },
        },
        {
          title: "何がカバーされるのか知りたい",
          content:
            "OHIP（オンタリオ州健康保険）、IFHP（連邦暫定保健プログラム）、民間保険、学生プラン、薬の保険、よくある自己負担費用について読みましょう。",
          icon: "shield",
          link: { text: "費用と保険", url: "/costs-and-coverage" },
        },
        {
          title: "言語サポートが必要",
          content:
            "言語メニューから、このガイドを33の言語で読むことができます。医療の会話や同意の場面では、通訳サポートについて尋ねてください。",
          icon: "info",
          link: { text: "アクセシビリティと言語", url: "/about#accessibility" },
        },
        {
          title: "血液検査、画像診断、薬のリフィルが必要",
          content:
            "受診後の実際的な次のステップは、地域ディレクトリで探してください。",
          icon: "file",
          link: { text: "地域のサービスを検索", url: "/local-services" },
        },
        {
          title: "どこから始めればよいか分からない",
          content:
            "状況がどのくらい緊急か分からない場合は、Health811に電話して看護師に相談してください。",
          icon: "clock",
          link: { text: "Health811と緊急時の案内", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "最初の1週間でしておきたいこと",
      type: "steps",
      items: [
        "自分の保険を知る：OHIP（オンタリオ州健康保険）、IFHP（連邦暫定保健プログラム）、民間保険、学生プランが通常何をカバーするかを読みましょう。OHIPの資格がありそうなら、できるだけ早く申請してください。",
        "緊急時の計画を決める：911に電話すべきとき、Health811から始めるべきとき、そしてキングストンで緊急または当日のケアをどこで探すかを知っておきましょう。",
        "定期的なケアを計画する：かかりつけがいない場合は、家庭医、ナースプラクティショナー、コミュニティヘルスセンター、学生クリニック、ウォークインクリニック、オンライン診療の選択肢を学びましょう。",
        "健康情報をひとまとめにしておく：健康保険証またはIFHPの書類、薬のリスト、ワクチン記録、検査依頼書や紹介状のコピーを保管しましょう。",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "まだOHIPがない場合",
      type: "callout",
      content:
        "病気になってから保険の道筋を調べるのではなく、今のうちに知っておきましょう。OHIPの資格がある場合は早めに申請してください。IFHPや学校・民間のプランでカバーされている場合は、その情報を携帯してください。無保険の場合は、受診前に費用を尋ね、状況に応じてコミュニティの利用しやすいサービスを探してください。",
      link: { text: "保険について読む", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "これらを準備しておきましょう",
      type: "checklist",
      items: [
        "健康保険証、IFHPの書類、または保険の情報",
        "薬のリスト（飲んでいる薬が少なくても）",
        "前回のクリニックや担当医の名前と電話番号（ある場合）",
        "最近の検査依頼書、紹介状、退院書類、検査の指示",
        "分かりやすい言葉で聞きたい質問",
        "通訳が必要なことを書いたメモ（忘れずに頼めるように）",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "今すぐ助けが必要ですか？",
  description:
    "今日または今夜、健康の問題があり、どこから始めればよいか分からないときに、このページをお使いください。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "オンタリオ州：Health811で医療アドバイスを受ける",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "公式の24時間365日対応の看護師相談サービス。",
    },
    {
      title: "9-8-8：自殺危機ヘルプライン",
      url: "https://988.ca/",
      note: "全国の公式自殺危機ヘルプライン。9-8-8に電話またはテキスト、無料、24時間365日。",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "救急、緊急時ケア、画像診断の情報を提供する公式の病院ネットワーク。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "地域の公式メンタルヘルス・危機サポート組織。",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "救急ですか、それとも緊急ですか？",
      type: "comparison",
      comparison: {
        left: {
          title: "次のような問題は、すぐに救急へ行ってください：",
          items: [
            "胸の痛み、ひどい呼吸困難、脳卒中の兆候",
            "大量の出血、大きなけが、意識消失",
            "突然の混乱、けいれん発作、重いアレルギー反応",
            "待つことで生命や手足に危険が及ぶ可能性のある、安全上の緊急事態",
          ],
        },
        right: {
          title: "次のような問題は、緊急時ケア、Health811、当日診療のクリニックから始めてください：",
          items: [
            "捻挫、小さな切り傷、発疹、耳の痛み、緊急の警告サインのない発熱",
            "通常の予約まで待てない、処方薬のリフィルの問題",
            "今夜、緊急時ケアが必要かどうかという疑問",
            "緊急に感じるけれど、明らかに命に関わるとは言えない問題",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "夜間・休日によくある状況",
      type: "table",
      columns: ["状況", "良い最初のステップ", "覚えておくこと"],
      rows: [
        {
          cells: [
            "どのくらい緊急か分からない",
            "Health811に電話",
            "自宅で様子を見るか、緊急時ケアを受けるか、救急に行くかを、看護師が一緒に判断してくれます。",
          ],
        },
        {
          cells: [
            "かかりつけ医が閉まっていて、今夜アドバイスが必要",
            "Health811または緊急時ケアの案内",
            "緊急の警告サインがなければ、救急だけが選択肢だと思い込まないでください。",
          ],
        },
        {
          cells: [
            "子どもの診察が必要",
            "まず同じ緊急の警告サインを確認し、その後、当日診療を探すか、迷う場合はHealth811に電話",
            "できれば、子どもの健康保険証、薬のリスト、症状の経過を持参してください。",
          ],
        },
        {
          cells: [
            "今夜メンタルヘルスの助けが必要",
            "9-8-8（自殺危機ヘルプライン）に電話またはテキスト、または24時間対応のAMHS-KFLAクライシスラインに電話",
            "安全への差し迫った危険がある場合は、911に電話してください。",
          ],
        },
      ],
      caption:
        "この表は一般的な案内です。誰かが差し迫った危険にさらされている可能性がある場合は、911に電話してください。",
    },
    {
      id: "kingston-start-points",
      title: "キングストンでの最初の窓口",
      type: "grid",
      gridItems: [
        {
          title: "救急外来（Emergency Department）",
          content:
            "命に関わる、またはその可能性がある問題には、救急医療を利用してください。",
          icon: "alert",
          link: {
            text: "救急・緊急の掲載一覧",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "アージェントケアセンター（Urgent Care Centre）",
          content:
            "待てないけれど明らかな救急ではない、多くの当日対応の問題に役立ちます。",
          icon: "clock",
          link: {
            text: "緊急・当日のケア",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "どこへ行けばよいか分からないときの、電話またはオンラインの看護師相談です。電話サポートは多くの言語に対応しています。",
          icon: "info",
          link: { text: "Health811の掲載情報", url: "/local-services/health811" },
        },
        {
          title: "メンタルヘルス危機サポート",
          content:
            "いつでも9-8-8（自殺危機ヘルプライン）に電話またはテキストするか、24時間対応のAMHS-KFLAクライシスラインなど、地域の危機サポートを利用してください。",
          icon: "heart",
          link: { text: "メンタルヘルスの掲載一覧", url: "/local-services?category=mental-health" },
        },
        {
          title: "性暴力の支援",
          content:
            "すぐに気持ちの支え、権利擁護、安全計画が必要な場合は、専門の危機サポートを利用してください。",
          icon: "shield",
          link: {
            text: "支援の掲載一覧",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "学生向けの緊急時の選択肢",
          content:
            "学生の方は、緊急ではない用件について、キャンパスのヘルスサービスが最適な最初の窓口かどうかを確認してください。",
          icon: "stethoscope",
          link: { text: "学生向け医療の掲載一覧", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "それでも判断に迷う場合",
      type: "callout",
      content:
        "問題が明らかに命に関わるものではないけれど、待つのが心配なときは、Health811から始めてください。誰かの安全が守れない可能性がある、急速に悪化している可能性がある、または適切な助けが間に合わない場合は、救急サービスを利用してください。",
      link: { text: "Health811に電話する", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "できればこれらを持参してください",
      type: "checklist",
      items: [
        "健康保険証、IFHPの書類、または手元にある保険証",
        "薬のリスト、または薬のボトルの写真",
        "症状が始まった時刻と、症状を悪化させたもの",
        "あとでストレスで思い出せないかもしれないので、通訳が必要なことを書いたメモ",
        "携帯電話の充電器と、助けになるなら付き添いの人",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "プライマリケアを探す",
  description:
    "かかりつけがまだいない場合に、キングストンで定期的な医療につながるさまざまな道筋を学びましょう。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "オンタリオ州：家庭医またはナースプラクティショナーを探す",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "公式のHealth Care Connect（家庭医登録サービス）の案内。",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "地域のコミュニティヘルスセンターのサービスに関する公式情報。",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Queen's大学の学生向けの公式健康情報。",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "St. Lawrence Collegeの学生向けの公式健康情報。",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "プライマリケアとは",
      type: "default",
      content:
        "プライマリケアとは、日常的な健康の問題で、ふだん最初に行く場所のことです。健康チェック、薬の継続処方、慢性疾患のケア、紹介、予防医療、緊急の問題のあとのフォローアップなどが含まれます。\n\nキングストンでは、定期的なプライマリケアの道筋として、家庭医、ナースプラクティショナー、コミュニティヘルスセンター、キャンパスのクリニック、または、より安定したケアを待つ間の一時的な選択肢の組み合わせが考えられます。",
    },
    {
      id: "access-matrix",
      title: "プライマリケアへの道筋",
      type: "table",
      columns: ["道筋", "向いている場面", "利用できる人", "始め方"],
      rows: [
        {
          cells: [
            "家庭医またはナースプラクティショナー",
            "継続的な定期ケアと長期的な健康計画",
            "医療者の患者名簿に登録できる方",
            "Health Care Connectを利用し、地域の空き情報に注意する",
          ],
        },
        {
          cells: [
            "コミュニティヘルスセンター",
            "地域に根ざしたケア、利用しやすい支援、新規移住者や複雑なニーズへのケアの一部",
            "利用資格はプログラムと受け入れ状況によります",
            "団体に直接連絡し、受け入れについて尋ねる",
          ],
        },
        {
          cells: [
            "学生向けヘルスサービス",
            "在籍学生のより早いアクセス",
            "学校を通じて資格のある学生のみ",
            "キャンパスのヘルス・ウェルネスサービスを利用する",
          ],
        },
        {
          cells: [
            "ウォークインクリニックまたは緊急・当日のケア",
            "待っている間の短期的なケアや、かかりつけが利用できないとき",
            "一般の方（当日の受け入れルールによります）",
            "行く前に最新の受け入れ状況を確認する",
          ],
        },
        {
          cells: [
            "オンラインのプライマリケア",
            "一部のリフィル、相談、日常的な問題",
            "提供者と保険によって異なります",
            "オンラインで安全に対応できる範囲とできない範囲を提供者に確認する",
          ],
        },
      ],
      caption:
        "最適な道筋は、利用資格、緊急度、短期的なケアと継続的なケアのどちらが必要かによって異なります。",
    },
    {
      id: "if-you-have-no-provider",
      title: "かかりつけがいない場合",
      type: "steps",
      items: [
        "州の公式の仕組みで登録する：家庭医もナースプラクティショナーもいない場合は、Health Care Connectを利用しましょう。",
        "キャンパスやコミュニティの選択肢に該当するか確認する：学生はまず学校のクリニックから始めましょう。一部のコミュニティヘルスサービスには、特定の受け入れ優先順位があります。",
        "安全な一時的プランを立てる：待っている間に利用できるウォークイン、緊急時、オンライン、薬局、メンタルヘルスのサービスを知っておきましょう。",
        "自分で記録を保管する：薬のリスト、検査結果、紹介状、診てもらった医療者の名前を保存しましょう。",
      ],
    },
    {
      id: "while-you-wait",
      title: "待っている間にできること",
      type: "checklist",
      items: [
        "短期的な必要には、適切な場合にウォークイン、緊急時、オンラインのケアを利用する",
        "どのようなリフィルのサポートや軽い症状のケアが利用できるか、薬局に尋ねる",
        "最新の薬のリストを1つにまとめ、毎回の受診に持参する",
        "ケアが分断されているときは、重要な検査結果や退院書類のコピーを持参する",
        "可能であればフォローアップは同じクリニックを利用し、ケアの一貫性を少しでも保つ",
      ],
    },
    {
      id: "next-best-option",
      title: "緊急だけれど救急ではない場合",
      type: "callout",
      content:
        "家庭医がいないからといって、大切なケアを先延ばしにしてよいわけではありません。目の前の問題に合った短期的な選択肢を使い、緊急の問題が治療されたあとに、継続的なケアの計画を立てましょう。",
      link: { text: "プライマリケアの選択肢を検索", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "費用と保険",
  description:
    "OHIP（オンタリオ州健康保険）、IFHP（連邦暫定保健プログラム）、Canadian Dental Care Plan（カナダ歯科ケアプラン）、学生・民間プラン、よくある自己負担費用について、やさしい言葉で案内します。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "オンタリオ州：OHIPを申請して健康保険証を取得する",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "公式のOHIPの案内。",
    },
    {
      title: "カナダ政府：連邦暫定保健プログラム（IFHP）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "公式のIFHP保険情報。",
    },
    {
      title: "Ontario Drug Benefit（オンタリオ州薬剤給付）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "州の公式な薬の保険に関する案内。",
    },
    {
      title: "オンタリオ州：高額な処方薬費用への支援を受ける",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "公式のTrillium Drug Program（トリリアム薬剤プログラム）の案内。",
    },
    {
      title: "カナダ政府：Canadian Dental Care Plan（カナダ歯科ケアプラン）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "連邦の歯科保険プログラムの公式情報と利用資格。",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "保険の基本",
      type: "default",
      content:
        "オンタリオ州での保険は、在留資格、年齢、収入、プログラムの利用資格、そして学校や民間の保険プランの有無によって決まります。\n\nOHIPの資格がある方は、医学的に必要な多くの医師・病院サービスがカバーされます。ただし、すべてが無料というわけでは**ありません**。薬、歯科ケア、眼科ケア、書類、診断書、多くの関連医療サービスには、別の保険や自己負担が必要になることがよくあります。\n\n新しく来た方への良い知らせがあります。**OHIPには待機期間がありません**。資格がある場合は、オンタリオ州に到着したらすぐに申請でき、申請が承認されると保険が始まります。病気になってから申請するのではなく、早めに申請しましょう。",
    },
    {
      id: "coverage-matrix",
      title: "保険の道筋の一覧",
      type: "table",
      columns: [
        "保険の種類",
        "通常役立つもの",
        "それでもカバーされない可能性のあるもの",
        "次にすべきこと",
      ],
      rows: [
        {
          cells: [
            "OHIP（オンタリオ州健康保険）",
            "医学的に必要な多くの医師・病院サービス",
            "多くの薬、歯科ケア、眼科ケア、書類",
            "資格があれば申請し、保険証を最新の状態に保つ",
          ],
        },
        {
          cells: [
            "IFHP（連邦暫定保健プログラム）",
            "連邦プログラムに基づく、対象となる難民・難民申請者への保険",
            "詳細はカテゴリーやサービスによって異なります",
            "公式のIFHPガイドを確認し、クリニックや薬局が取り扱っているか尋ねる",
          ],
        },
        {
          cells: [
            "学校または民間の保険",
            "薬、カウンセリング、歯科、眼科、関連医療に役立つことが多い",
            "保険の上限、自己負担金、ネットワークのルールはさまざま",
            "サービスがカバーされると思い込む前に、プランの冊子を読む",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)（カナダ歯科ケアプラン）",
            "民間の歯科保険がなく、調整後世帯収入が90,000ドル未満の対象住民への歯科保険",
            "すべての処置がカバーされるわけではなく、収入によっては自己負担が生じることがあります",
            "カナダ政府の公式CDCPページで資格を確認して申請する",
          ],
        },
        {
          cells: [
            "有効な保険なし",
            "一部のサービスは利用できる場合がありますが、費用がかかることがあります",
            "受診、検査、薬の費用が高額になることがあります",
            "受診前に費用を尋ね、状況に応じてコミュニティの選択肢を探す",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "全額カバーされないことが多いもの",
      type: "checklist",
      items: [
        "多くの処方薬（公的プログラムの資格や別のプランがない場合）",
        "歯科ケア（Canadian Dental Care Plan、Healthy Smiles Ontario、コミュニティの歯科プログラム、給付プランの対象でない場合）",
        "特定の資格条件にあてはまらない場合の眼科ケア",
        "理学療法、カウンセリング、マッサージなどの関連医療サービス（プログラムやプランがカバーしない場合）",
        "書類、診断書、予約キャンセル料など、多くの事務的な料金",
      ],
    },
    {
      id: "drug-coverage",
      title: "薬の保険の道筋",
      type: "default",
      content:
        "薬の保険は、新規移住者がよく驚く部分です。診察は保険でカバーされても、処方薬にはお金がかかることがあります。\n\n公的な薬剤プログラムは、年齢、収入、利用資格によって役立つ場合があります。**Ontario Drug Benefit（オンタリオ州薬剤給付）**は、65歳以上の方や特定のプログラムに参加している方の多くの薬をカバーし、**OHIP+**は、民間プランを持たない24歳以下の方の多くの処方薬をカバーします。また、オンタリオ州には、世帯収入に比べて処方薬の費用が高額な方のための**Trillium Drug Program（トリリアム薬剤プログラム）**もあります。学校や民間のプランがある場合は、公的保険と併用されるのか、それに代わるものなのかを確認してください。",
    },
    {
      id: "coverage-scenarios",
      title: "保険についてよくある質問",
      type: "faq",
      faqs: [
        {
          question: "まだOHIPがありません。それでも医療を受けられますか？",
          answer:
            "はい。ただし費用がかかることがあり、最適な道筋は在留資格と緊急度によって異なります。緊急でない医療の前には、できるだけ費用を尋ねてください。該当する場合は、IFHPや学校・民間プランの利用資格も確認しましょう。",
        },
        {
          question: "留学生です。OHIPだけが選択肢ですか？",
          answer:
            "そうとは限りません。多くの学生は、OHIPの代わりに学校または民間の保険プランを利用しています。何がカバーされるかは、学校の公式なプラン資料と学生向けヘルスサービスで確認してください。",
        },
        {
          question: "診察が保険でカバーされたら、薬も無料になりますか？",
          answer:
            "必ずしもそうではありません。診察の保険と処方薬の保険は、別々であることが多いです。",
        },
        {
          question: "歯科ケアはカバーされますか？",
          answer:
            "ほとんどの大人にとって、歯科ケアはOHIPとは別です。連邦のCanadian Dental Care Plan（カナダ歯科ケアプラン）は現在、民間の歯科保険がなく、調整後世帯収入が90,000ドル未満の多くの住民をカバーしています。資格を得るには、通常カナダで確定申告をしている必要があります。低所得世帯の子どもはHealthy Smiles Ontarioの対象となる場合があり、キングストンには特定のプログラム対象者のためのコミュニティ歯科クリニックがあります。",
        },
        {
          question: "サービスが公的、コミュニティ、民間のどれか、どうすれば分かりますか？",
          answer:
            "ディレクトリのフィルターを使い、掲載情報の詳細を見てください。分からない場合は、予約の前にサービスに問い合わせてください。",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "受診のとき",
  description:
    "持ち物、質問の仕方、受診中に安全にコミュニケーションする方法について。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "オンタリオ州：オンタリオ州の医療制度（Health care in Ontario）",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "制度に関する一般的な案内。",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "持ち物",
      type: "checklist",
      items: [
        "健康保険証、IFHPの書類、その他の保険情報",
        "ビタミン剤や市販薬を含む、すべての薬のリスト",
        "症状の内容、始まった時期、変化したこと",
        "帰る前に答えてほしい質問",
        "最近の検査依頼書、紹介状、退院書類、検査結果",
        "通訳が必要なことを書いたメモ（忘れずに頼めるように）",
      ],
    },
    {
      id: "during-the-visit",
      title: "受診中",
      type: "steps",
      items: [
        "いちばんの悩みから話す：多くの診察は時間が短いので、今日いちばん気になることから始めましょう。",
        "分かりやすい言葉を使う：「その言葉が分かりません」「もっと簡単に説明してもらえますか？」と言って構いません。",
        "計画を復唱する：帰る前に次のステップを声に出して確認し、検査、紹介、リフィル、フォローアップの予約が必要かどうかを把握しましょう。",
        "悪化した場合どうするか尋ねる：いつ電話をかけ直すべきか、いつ緊急時ケアを使うべきか、いつ救急を使うべきかを知っておきましょう。",
      ],
    },
    {
      id: "interpreter-help",
      title: "通訳とコミュニケーションのサポート",
      type: "default",
      content:
        "言語の助けが必要な場合は、早めに伝えてください。診察の最後まで待たないでください。言語メニューから、このウェブサイトを複数の言語で読めますが、治療の決定、薬の指示、同意については、ウェブサイトの翻訳を通訳サポートの代わりにしないでください。\n\n**「通訳をお願いします（I need an interpreter, please.）」**と伝えることができます。Health811（811に電話）も、多くの言語で電話サポートを提供しています。付き添いの人が一緒に来る場合でも、複雑またはデリケートな医療情報の通訳には、家族が常に最適で安全な選択とは限らないことを覚えておいてください。",
    },
    {
      id: "questions-to-ask",
      title: "聞いておきたい質問",
      type: "checklist",
      items: [
        "何が起きていると思われますか？",
        "次に何をすべきですか？",
        "検査、検査依頼書、紹介、フォローアップの受診は必要ですか？",
        "結果はいつごろ分かりますか？",
        "どんな警告サインがあれば、電話をかけ直したり、緊急の助けを求めたりすべきですか？",
      ],
    },
    {
      id: "privacy",
      title: "プライバシーと同意",
      type: "default",
      content:
        "あなたの健康情報はデリケートな情報です。誰があなたの情報を見るのか分からない場合は、尋ねてください。書類、同意の説明、治療計画が理解できない場合は、急がずに、より分かりやすい説明を求めてください。",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "受診のあと",
  description:
    "検査依頼書、検査結果、紹介、いつ電話をかけ直すべきかなど、受診後に起こることを学びましょう。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "地域の病院システムの情報。",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "地域の検査機関の手続きと患者ポータルの情報。",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "受診後によく起こること",
      type: "steps",
      items: [
        "計画を持って帰る：薬、検査依頼書、紹介、フォローアップの予約、または警告サインに注意するという指示が含まれることがあります。",
        "次のステップを自分で行う必要があるかもしれない：たとえば、血液検査、画像診断、薬局での受け取り、フォローアップ受診の予約が必要になることがあります。",
        "結果は通常、検査を指示した医療者に戻る：検査機関や画像診断の施設では、その場で結果を説明してもらえないことがあります。",
        "正常な結果のたびに電話が来るとは限らない：クリニックのフォローアップの流れを尋ねて、何を期待すべきか把握しましょう。",
      ],
    },
    {
      id: "common-terms",
      title: "受診後によく使われる用語",
      type: "table",
      columns: ["用語", "やさしい言葉での意味", "通常次にすること"],
      rows: [
        {
          cells: [
            "検査依頼書（Requisition）",
            "検査機関や画像診断クリニックに、どの検査が必要かを伝える書類",
            "検査を予約または受けに行き、できればコピーを保管する",
          ],
        },
        {
          cells: [
            "紹介（Referral）",
            "ある医療者から別のサービスや専門医への依頼",
            "連絡を待ち、フォローアップするよう言われたのに何も起こらない場合は電話する",
          ],
        },
        {
          cells: [
            "フォローアップ（Follow-up）",
            "治療、検査、症状の変化のあとの経過確認",
            "帰る前に、いつどのようにフォローアップが行われるか尋ねる",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "電話をかけ直すべきとき",
      type: "checklist",
      items: [
        "検査依頼書、紹介、薬の指示が理解できない",
        "連絡があると言われたのに、予定の期間内に何の連絡もない",
        "症状が悪化している、または言われたとおりに改善していない",
        "薬局、検査機関、画像診断クリニックから、書類に不足があると言われた",
        "結果が見落とされたかもしれないと思う、またはまだ心配がある",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "よくある場面",
      type: "faq",
      faqs: [
        {
          question: "受診後に血液検査が必要です。どうすればよいですか？",
          answer:
            "検査依頼書があるか、検査機関で予約が必要かを確認してください。次に、ディレクトリで検査機関の場所を探します。検査依頼書と保険の情報を持参してください。",
        },
        {
          question: "検査依頼書や紹介状が理解できません。",
          answer:
            "それを渡したクリニックに電話して、分かりやすい言葉で説明してもらってください。その書類が何のためのものか、どこに出すのか、自分で何か予約する必要があるのかを尋ねるのは当然のことです。",
        },
        {
          question: "検査結果のフォローアップは誰がしますか？",
          answer:
            "通常は、検査を指示した医療者です。その医療者のオフィスに、正常な結果と異常な結果それぞれの通常の流れを尋ねてください。",
        },
        {
          question: "紹介にはどのくらい時間がかかりますか？",
          answer:
            "紹介にかかる期間は大きく異なります。自分の状況ではどのくらいの待ち時間が普通か、連絡がない場合はどうすべきかを尋ねてください。",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "役立つ次のステップ",
      type: "grid",
      gridItems: [
        {
          title: "検査・画像診断を探す",
          content:
            "血液検査、レントゲン、超音波、画像診断の掲載情報は、ディレクトリで探してください。",
          icon: "file",
          link: { text: "検査・画像診断", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "薬局を探す",
          content:
            "薬局、リフィルのサポート、薬に関する支援は、ディレクトリで探してください。",
          icon: "shield",
          link: { text: "薬局", url: "/local-services?category=pharmacies" },
        },
        {
          title: "フォローアップのケアを計画したいですか？",
          content:
            "長期的なフォローアップをどこで受ければよいか分からない場合は、プライマリケアのページをお使いください。",
          icon: "stethoscope",
          link: { text: "プライマリケアを探す", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "薬と薬局",
  description:
    "処方箋、リフィル（補充）、薬剤師のサポート、オンタリオ州での薬の支払い方法を理解しましょう。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "オンタリオ州：薬剤師ができること",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "州の公式な薬剤師・薬局の情報。",
    },
    {
      title: "Ontario Drug Benefit（オンタリオ州薬剤給付）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "州の公式な薬の保険に関する案内。",
    },
    {
      title: "オンタリオ州：高額な処方薬費用への支援を受ける",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "公式のTrillium Drug Program（トリリアム薬剤プログラム）の案内。",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "薬剤師が手助けできること",
      type: "default",
      content:
        "薬剤師の仕事は、薬を渡すことだけではありません。薬の安全な飲み方の説明、飲み合わせの確認、副作用の確認もしてくれます。\n\nオンタリオ州では、薬剤師は**19の一般的な軽い症状について評価と処方**もできます。結膜炎（はやり目）、口唇ヘルペス、（女性の）尿路感染症、虫刺され、季節性アレルギーなどが含まれます。評価はオンタリオ州の健康保険証があれば無料で、対象となる症状のリストは今後も拡大する可能性があります。\n\n薬局はまた、**このリフィルは急ぎですか？もっと安い選択肢はありますか？飲み忘れたらどうすればよいですか？**といった実際的な質問をするのに最適な場所のひとつです。",
    },
    {
      id: "fill-a-prescription",
      title: "処方薬を受け取るには",
      type: "steps",
      items: [
        "処方箋を受け取る：紙、ファックス、または電子的に送られることがあります。",
        "薬局を選ぶ：いつも同じ薬局を使うと、飲み合わせやリフィル履歴の問題に気づいてもらいやすくなります。",
        "時間と費用を尋ねる：いつ受け取れるか、あなたのプランでカバーされるかを薬局が教えてくれます。",
        "服薬指導を聞く：この薬は何のためか、どう飲むのか、効かない場合はいつ連絡すべきかを尋ねましょう。",
      ],
    },
    {
      id: "refill-options",
      title: "リフィルと薬の問題",
      type: "table",
      columns: ["状況", "良い最初のステップ", "理由"],
      rows: [
        {
          cells: [
            "通常のリフィルが必要",
            "いつもの薬局またはかかりつけの医療者から始める",
            "リフィルでよいか、再処方が必要か、新しい予約が必要かを教えてもらえます",
          ],
        },
        {
          cells: [
            "医師と連絡が取れず、薬がなくなりそう",
            "薬局にどんな選択肢があるか尋ね、必要に応じてウォークイン、オンライン、緊急時ケアを利用する",
            "最も安全な次のステップは、薬と状況によって異なります",
          ],
        },
        {
          cells: [
            "この薬の飲み方が分からない",
            "薬剤師に、分かりやすい言葉でもう一度説明してもらう",
            "これは薬を安全に使うための大切な一部です",
          ],
        },
        {
          cells: [
            "薬が高すぎる",
            "ジェネリック医薬品、プランの適用、公的プログラムについて尋ねる",
            "薬の費用はさまざまで、保険は診察そのものとは別であることが多いです",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "薬の支払い方法の例",
      type: "checklist",
      items: [
        "公的な薬剤プログラム（資格がある場合）",
        "学校または民間の保険プラン",
        "公的保険と民間保険の組み合わせ",
        "どのプログラムもその薬をカバーしない場合は自己負担",
      ],
    },
    {
      id: "pharmacy-links",
      title: "地域の薬局のサポートが必要ですか？",
      type: "callout",
      content:
        "薬の問題を早く解決したいときは、ディレクトリで薬局、リフィルのサポート、オンラインや当日対応の選択肢を探してください。",
      link: { text: "薬局の掲載情報を検索", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "メンタルヘルスサポート",
  description:
    "キングストンの地域のメンタルヘルス、カウンセリング、若者支援、危機対応の道筋について。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8：自殺危機ヘルプライン",
      url: "https://988.ca/",
      note: "全国の公式自殺危機ヘルプライン。9-8-8に電話またはテキスト、無料、24時間365日。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "成人向けの公式メンタルヘルス・危機サポート情報。",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "オンタリオ州の公式メンタルヘルス・依存症ヘルプライン。",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "子ども・若者向けの公式メンタルヘルス情報。",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "誰かの安全が心配なとき",
      type: "callout",
      content:
        "生命や安全への差し迫った危険がある場合は、911に電話してください。自殺を考えてしまうときや、抱えきれないほどつらいときは、いつでも**9-8-8（自殺危機ヘルプライン）に電話またはテキスト**できます。無料・秘密厳守で、英語とフランス語で24時間365日利用できます。24時間対応のAMHS-KFLAクライシスライン（613-544-4229）にも電話できます。通常の予約を待たないでください。",
      link: { text: "メンタルヘルスの掲載一覧", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "サポートの種類",
      type: "grid",
      gridItems: [
        {
          title: "危機サポート",
          content:
            "今すぐのつらさ、安全への不安、待つことが安全でないときに利用してください。",
          icon: "alert",
        },
        {
          title: "緊急サポート",
          content:
            "状況が深刻で早めの助けが必要だけれど、命に関わる差し迫った緊急事態ではないときに利用してください。",
          icon: "clock",
        },
        {
          title: "通常のカウンセリング",
          content:
            "続く不安、うつ、ストレス、悲しみ（グリーフ）、人間関係の問題、人生の転機などに利用してください。",
          icon: "heart",
        },
        {
          title: "子ども・若者向けサービス",
          content:
            "ケアが必要なのが子どもやティーンエイジャーの場合は、若者専門のメンタルヘルスサービスを利用してください。",
          icon: "info",
        },
        {
          title: "キャンパスのサポート",
          content:
            "学生は、まずキャンパスのウェルネスやカウンセリングの窓口が最適な場合があります。",
          icon: "stethoscope",
        },
        {
          title: "性暴力の支援",
          content:
            "性暴力のあとの危機対応、カウンセリング、権利擁護、安全計画には、専門の支援を利用してください。",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "よくある状況での最初の窓口",
      type: "table",
      columns: ["状況", "最適な最初の窓口", "理由"],
      rows: [
        {
          cells: [
            "今夜メンタルヘルスの助けが必要",
            "9-8-8に電話またはテキスト、AMHS-KFLAクライシスラインに電話、安全に危険がある場合は救急医療を利用",
            "状況が安全でないと感じるときは、通常の予約を待たないでください",
          ],
        },
        {
          cells: [
            "カウンセリングが必要だが、今は安全",
            "コミュニティのカウンセリング、家庭医、ナースプラクティショナー、または民間プランのサポート",
            "継続的なケアと紹介に役立ちます",
          ],
        },
        {
          cells: [
            "子どものための助けが必要",
            "子ども・若者向けメンタルヘルスサービス、必要に応じて緊急時の案内",
            "子ども・若者には別の道筋があることが多いです",
          ],
        },
        {
          cells: [
            "学生です",
            "状況が安全でない、または深刻な場合を除き、まずキャンパスのヘルスまたはカウンセリング",
            "学生にとっては、キャンパスのサービスが最も早い入口かもしれません",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "よくある質問",
      type: "faq",
      faqs: [
        {
          question: "今すぐ誰に電話またはテキストできますか？",
          answer:
            "**9-8-8**（自殺危機ヘルプライン）に、いつでも電話またはテキストできます。無料、24時間365日、紹介は不要です。キングストンでは、AMHS-KFLAクライシスライン（613-544-4229）も24時間対応しています。安全への差し迫った危険がある場合は、911に電話してください。",
        },
        {
          question: "これが危機にあたるのか分からない場合は？",
          answer:
            "誰かの安全が守れない可能性があるなら、確信を待たないでください。危機サポートまたは救急サービスを利用してください。",
        },
        {
          question: "今夜助けが必要だけれど、誰に電話すればよいか分からない場合は？",
          answer:
            "朝まで待つのではなく、地域のメンタルヘルスディレクトリのページや危機サポートの窓口を利用してください。",
        },
        {
          question: "助けが必要なのが自分の子どもの場合は？",
          answer:
            "子ども・若者向けのサービスを特に探してください。若者のメンタルヘルスの道筋は、大人のケアとは異なることが多いです。",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "検診と予防",
  description:
    "オンタリオ州での予防医療、ワクチン、検診の基本を学びましょう。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health（KFL&A公衆衛生局）",
      url: "https://www.kflaph.ca/",
      note: "地域のワクチンと公衆衛生の情報。",
    },
    {
      title: "オンタリオ州：オンタリオ州の医療制度（Health care in Ontario）",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "医療に関する一般的な案内。",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "予防医療が大切な理由",
      type: "default",
      content:
        "予防医療とは、問題を早期に発見したり、より深刻になる前に防いだりすることです。ワクチン、検診、定期的な血圧チェック、医療者とのリスク要因についての会話などが含まれます。",
    },
    {
      id: "common-prevention",
      title: "よくある予防のタスク",
      type: "checklist",
      items: [
        "ワクチンを最新の状態に保つ",
        "自分の年齢や健康歴に応じて、検診が推奨されるか尋ねる",
        "血圧、糖尿病、その他のリスク要因についての質問を、定期受診のときに持っていく",
        "ワクチンや予防の情報が必要なときは、公衆衛生のリソースを利用する",
      ],
    },
    {
      id: "prevention-next",
      title: "地域の予防サービスが必要ですか？",
      type: "callout",
      content:
        "キングストンで具体的な出発点が必要な場合は、地域サービスのディレクトリで公衆衛生、検診、薬局の掲載情報を探してください。",
      link: {
        text: "公衆衛生と薬局の掲載一覧",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "関連医療と地域ケア",
  description:
    "在宅ケア、歯科、リハビリ、カウンセリング、視覚支援を理解し、何が公的・コミュニティ・学生向け・民間なのかを知るためのページです。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "公式の在宅・地域ケア調整の情報。",
    },
    {
      title: "カナダ政府：Canadian Dental Care Plan（カナダ歯科ケアプラン）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "連邦の歯科保険プログラムの公式情報と利用資格。",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "コミュニティと歯科サービスの公式情報。",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "公式の視覚支援情報。",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "関連医療と地域ケアとは",
      type: "default",
      content:
        "関連医療（アライドヘルス）とは、理学療法士、作業療法士、栄養士、ソーシャルワーカー、カウンセラー、歯科医師、視覚支援チームなどの専門職によるケアのことです。地域ケアは多くの場合、病院の外、たとえば自宅、学校、クリニック、地域のプログラムで行われるケアを指します。",
    },
    {
      id: "access-payment-matrix",
      title: "利用と支払いの一覧",
      type: "table",
      columns: ["経路", "例", "支払いの一般的な仕組み", "始め方"],
      rows: [
        {
          cells: [
            "公費による在宅・地域ケア",
            "在宅看護、在宅リハビリ、ケア調整",
            "プログラムの条件を満たす場合、公的プログラムが適用されることがあります",
            "医療者の紹介、または公式の在宅ケアの窓口から始める",
          ],
        },
        {
          cells: [
            "コミュニティベースのサービス",
            "コミュニティヘルスセンターの歯科や、利用しやすい支援",
            "サービスによって、公的またはコミュニティの資金が適用されることがあります",
            "プログラムに直接連絡し、利用資格を尋ねる",
          ],
        },
        {
          cells: [
            "学校ベースの支援",
            "キャンパスのカウンセリングや健康関連の支援",
            "通常、学生資格と学生費用またはプランに結びついています",
            "まず学校の公式サービスページを利用する",
          ],
        },
        {
          cells: [
            "民間の関連医療",
            "理学療法、カウンセリング、マッサージ、民間の歯科・眼科サービス",
            "他のプランがカバーしない限り、多くは自費です",
            "予約前に、費用の全額と保険のルールを尋ねる",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "関連医療と地域ケアの例",
      type: "grid",
      gridItems: [
        {
          title: "在宅ケア",
          content:
            "病気、けが、入院のあとに、自宅での支援が必要なときに役立ちます。",
          icon: "clock",
          link: {
            text: "在宅ケアの掲載一覧",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "歯科ケア",
          content:
            "歯科の保険は、通常の医師の保険とは別です。連邦のCanadian Dental Care Plan（カナダ歯科ケアプラン）は現在、民間の歯科保険を持たない多くの人をカバーしており、Healthy Smiles Ontarioやコミュニティ歯科クリニックなどのプログラムが特定のグループを支援しています。",
          icon: "shield",
          link: {
            text: "歯科とコミュニティの掲載一覧",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "リハビリとセラピー",
          content:
            "理学療法、作業療法、関連サービスは、経路によって公的、コミュニティ、民間のいずれかになります。",
          icon: "stethoscope",
          link: { text: "関連医療の掲載一覧", url: "/local-services?category=allied-community" },
        },
        {
          title: "視覚支援",
          content:
            "視覚支援には、医療的な眼科ケアだけでなく、補助機器、移動のための支援、地域の支援が含まれることがあります。",
          icon: "info",
          link: {
            text: "視覚支援の掲載一覧",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "予約する前に",
      type: "checklist",
      items: [
        "紹介が必要かどうか尋ねる",
        "サービスが公的、コミュニティ資金、自費のどれか尋ねる",
        "民間のサービスの場合、正確な費用とキャンセルのルールを尋ねる",
        "学校または民間のプランが費用の一部をカバーするか確認する",
        "記録、画像、医師の診断書を持参する必要があるか尋ねる",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "よくある質問と用語集",
  description:
    "新規移住者によくある場面、実際的な質問、やさしい言葉での用語の説明。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "オンタリオ州：オンタリオ州の医療制度（Health care in Ontario）",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "州の医療に関する一般的な案内。",
    },
    {
      title: "オンタリオ州：Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "公式の看護師相談の案内。",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "新規移住者によくある場面",
      type: "faq",
      faqs: [
        {
          question: "まだOHIPがありません。最初に何をすべきですか？",
          answer:
            "まず自分の保険の道筋を知り、その後、地域ディレクトリと緊急時ガイドのページを使って、安全な一時的プランを立てましょう。",
        },
        {
          question: "留学生です。どこから始めればよいですか？",
          answer:
            "まずキャンパスのヘルス・ウェルネスサービスと学校の保険の書類から始め、それで足りないときに、コミュニティや緊急時のサービスを利用しましょう。",
        },
        {
          question: "通訳が必要です。",
          answer:
            "早めに伝えてください。言語メニューを使ってこのサイトを33の言語で読むことができ、通訳ヘルプタブの簡単なフレーズをスタッフに見せることもできます。予約、薬の指示、同意、検査の相談については、プロの通訳サポートについて尋ねてください。Health811（811に電話）は、多くの言語で電話サポートを提供しています。",
        },
        {
          question: "受診後に血液検査が必要です。",
          answer:
            "検査依頼書があるか確認し、ディレクトリで検査・画像診断を検索してください。",
        },
        {
          question: "リフィルが必要ですが、医師と連絡が取れません。",
          answer:
            "まず薬局に相談し、薬と緊急度に応じて、ウォークイン、オンライン、緊急時の窓口を適切に利用してください。",
        },
        {
          question: "子どもの診察が必要です。",
          answer:
            "まず緊急の警告サインを確認し、その後、当日または緊急時の案内を利用してください。子ども・若者のメンタルヘルスの道筋は、大人のケアとは別であることが多いです。",
        },
        {
          question: "今夜メンタルヘルスの助けが必要です。",
          answer:
            "いつでも9-8-8（自殺危機ヘルプライン）に電話またはテキストするか、24時間対応のAMHS-KFLAクライシスライン（613-544-4229）に電話してください。安全に危険がある場合は、救急医療を利用してください。通常の予約を待たないでください。",
        },
        {
          question: "検査依頼書や紹介が理解できません。",
          answer:
            "それを渡したクリニックに電話して、分かりやすい言葉で説明してもらってください。何のためのものか、どこに出すのか、誰がフォローアップするのかを尋ねて構いません。",
        },
      ],
    },
    {
      id: "more-questions",
      title: "その他のよくある質問",
      type: "faq",
      faqs: [
        {
          question: "医師がいない場合、とりあえず救急に行ってもよいですか？",
          answer:
            "救急は緊急事態のためのものです。問題が明らかに命に関わるものでなければ、緊急時ガイドのページ、Health811、ウォークインクリニック、その他の当日のケアから始めてください。",
        },
        {
          question: "来たばかりで、どのサービスが自分に合うか分からない場合は？",
          answer:
            "学生、新規移住者、子ども・若者、予約なし受診、オンライン、要紹介、保険の種類といった、ディレクトリのフィルターを使ってください。",
        },
        {
          question: "このサイトの情報が古そうな場合は？",
          answer:
            "ページまたは掲載情報の報告フォームを使ってください。次回の確認で、あなたが見つけた変更に焦点を当てることができます。",
        },
      ],
    },
    {
      id: "glossary",
      title: "用語集",
      type: "checklist",
      items: [
        "プライマリケア：日常的・継続的な健康の問題のための、ふだんの医療の道筋。",
        "ナースプラクティショナー（NP）：多くの場面で評価、診断、処方、紹介ができる高度実践看護師。",
        "紹介（Referral）：ある医療者から別のサービスや専門医への依頼。",
        "検査依頼書（Requisition）：検査機関や画像診断クリニックに、どの検査が必要かを伝える書類。",
        "トリアージ（Triage）：安全性と重症度に基づき、誰が先に緊急のケアを必要とするかを決める手順。",
        "ウォークインクリニック：予約なしで受診できる場合があるクリニック（当日の受け入れ状況によります）。",
        "緊急時ケア（アージェントケア）：明らかに命に関わるとは言えない緊急の問題のための、当日のケア。",
        "登録患者（rostered／attached patient）：かかりつけのプライマリケア提供者と継続的な関係を持つ患者。",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "このサイトについて・信頼性・プライバシー",
  description:
    "このガイドの仕組み、情報源と確認状況の扱い方、変更の報告方法を説明します。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "プロジェクトの情報源に関する注記",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "プロジェクトが信頼性と情報源をどのように扱っているかの、一般公開向けの概要。",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "このサイトの目的",
      type: "default",
      content:
        "MyPrimaryCareGuide.caは、オンタリオ州キングストンのための、新規移住者向け医療ナビゲーションガイドです。適切な次のステップを選び、医療制度のよくある用語を理解し、信頼できる地域サービスの掲載情報を見つける手助けをするために作られています。\n\nこのサイトは、リアルタイムの待ち時間ツール、予約プラットフォーム、医療アドバイスのサービスでは**ありません**。",
    },
    {
      id: "sources",
      title: "信頼性と情報源の扱い方",
      type: "default",
      content:
        "地域の掲載情報は、可能な限り公式のサービスページにリンクするようにしています。各掲載情報には、確認状況と最終確認日が表示されます。一部の項目は公式情報源と完全に照合済みです。営業時間、受け入れ、利用条件は頻繁に変わるため、まだ現地での再確認が必要なものもあります。\n\nページ単位の情報源ブロックには、現在の確認サイクルで使用した主な公式参照先が表示されます。",
    },
    {
      id: "accessibility",
      title: "アクセシビリティと言語",
      type: "default",
      content:
        "このサイトは、キーボードで操作しやすく、モバイルファーストで、やさしい言葉で読めるように作られています。\n\nヘッダーの言語メニューから、このガイド全体を**33の言語**で読むことができます — العربيةやSoomaaliからਪੰਜਾਬੀ、ትግርኛ、Yorùbá、Українськаまで — すべてのページとメニューがこのサイト内で直接表示されます。すべての翻訳は機械の支援を受けて作成されています。フランス語、スペイン語、アラビア語、簡体字中国語は追加の確認が行われており、その他は自動翻訳と表示されています。**英語版が基準です** — 翻訳された文が分かりにくい、または意外に思える場合は、英語の本文を確認するか、誰かに確かめてもらってください。\n\nさらに数十の言語は、同じメニューからGoogle翻訳を通じてこのサイトを開くことができます。また、通訳ヘルプタブには、スタッフに見せられる20以上の言語の緊急時の簡単なフレーズが含まれています。\n\nディレクトリの掲載情報（サービス名、住所、電話番号、営業時間）は、公式情報と正確に一致するよう英語のままです。\n\nどのような翻訳でも医療の詳細については誤りがあり得るため、予約、薬の指示、同意については、プロの通訳サポートについて尋ねてください。Health811（811に電話）は、多くの言語で電話サポートを提供しています。",
    },
    {
      id: "privacy",
      title: "プライバシー",
      type: "default",
      content:
        "このサイトは、侵入的な外部の分析ツールを使用していません。よくある検索、結果が出なかった検索、サービスの閲覧、問題の報告を、メンテナンスのために意図的にエクスポートされたときに管理者が把握できるよう、軽量な改善カウントをあなた自身のブラウザ内に保存しています。\n\nフィードバックフォームやメールで、個人の医療情報を送らないでください。",
    },
    {
      id: "contact",
      title: "連絡先と変更の報告",
      type: "default",
      content:
        "ページや掲載情報に誤りがあるように見える場合は、そのページの報告フォームをお使いください。報告には、あなた個人の健康状態ではなく、問題の内容を記載してください。\n\n一般のお問い合わせメール：**challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "免責事項",
      type: "default",
      content:
        "このウェブサイトは、ナビゲーションと教育のためだけのものです。医療アドバイスではなく、専門家による診断、治療、緊急時の助けの代わりにはなりません。命に関わる可能性のある状況では、911に電話してください。",
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
