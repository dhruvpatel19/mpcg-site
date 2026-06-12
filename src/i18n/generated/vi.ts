import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Đang tải trang...",
    directoryEnglishNote:
      "Danh bạ dịch vụ được hiển thị bằng tiếng Anh để tên dịch vụ, địa chỉ, số điện thoại và giờ làm việc khớp chính xác với nguồn chính thức.",
  },
  header: {
    emergencyBanner: "Tình huống khẩn cấp đe dọa tính mạng? Gọi 911 ngay.",
    tagline:
      "Hướng dẫn tìm dịch vụ y tế tại Kingston, Ontario, ưu tiên người mới đến",
    languageButton: "Ngôn ngữ",
    languageButtonAria: "Trợ giúp về ngôn ngữ và thông dịch viên",
    openNavigation: "Mở menu điều hướng",
    primaryNavLabel: "Chính",
  },
  languageModal: {
    title: "Trợ giúp về ngôn ngữ và thông dịch viên",
    description:
      "Hãy đọc hướng dẫn này bằng ngôn ngữ bạn thấy thoải mái nhất. Khi trao đổi về chăm sóc sức khỏe, hãy yêu cầu thông dịch viên khi bạn cần.",
    chooseLanguageTitle: "Chọn ngôn ngữ của bạn",
    chooseLanguageNote:
      "Hướng dẫn này được dịch đầy đủ sang 33 ngôn ngữ ngay trên trang này, và hàng chục ngôn ngữ khác mở qua dịch tự động. Danh bạ dịch vụ giữ nguyên tiếng Anh để khớp chính xác với nguồn chính thức. Tiếng Anh là bản tham chiếu nếu có điều gì chưa rõ.",
    safetyTitle: "Lưu ý an toàn",
    safetyBody:
      "Bản dịch trang web chỉ dùng để đọc và hiểu. Với lịch hẹn, hướng dẫn xét nghiệm, thuốc men, hoặc việc ký đồng ý, hãy hỏi xem phòng khám hoặc bệnh viện có thể cung cấp thông dịch viên chuyên nghiệp hay không. Health811 (gọi 811) hỗ trợ qua điện thoại bằng nhiều ngôn ngữ.",
    phrasesTitle: "Câu nói nhanh để đưa cho nhân viên xem",
    phrasesNote:
      "Hãy chỉ vào ngôn ngữ của bạn và đưa những dòng này cho lễ tân hoặc nhân viên y tế xem.",
    callHealth811: "Gọi Health811",
    accessibilityCta: "Khả năng tiếp cận và độ tin cậy",
    close: "Đóng hộp thoại trợ giúp ngôn ngữ",
  },
  moreLanguages: {
    title: "Thêm ngôn ngữ khác (dịch tự động)",
    description:
      "Mọi ngôn ngữ đều dùng được từ menu này — bao gồm tiếng Somali, Yoruba, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukraina, Farsi, Urdu, Punjabi, Tamil và tiếng Việt.",
    selectLabel: "Chọn bất kỳ ngôn ngữ nào",
    selectPlaceholder: "Tất cả ngôn ngữ — chọn một…",
    openButton: "Mở bằng ngôn ngữ này",
    disclaimer:
      "Các ngôn ngữ được đánh dấu là tự động sẽ mở trang này qua Google Translate và giữ nguyên ngôn ngữ của bạn khi bạn tiếp tục xem. Bản dịch tự động không được dự án này rà soát — phù hợp để đọc, nhưng hãy xác nhận các chi tiết y khoa với nhân viên y tế hoặc thông dịch viên.",
  },
  funding: {
    acknowledgment:
      "Dự án này được hỗ trợ bởi một khoản tài trợ từ Ontario Medical Students Association (OMSA).",
    logoAlt: "Logo của Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Tìm ngôn ngữ…",
    onSiteGroup: "Được dịch trên trang này",
    proxyGroup: "Thêm ngôn ngữ qua Google Translate",
    reviewedBadge: "Đã rà soát",
    automaticBadge: "Tự động",
    interpreterTab: "Trợ giúp thông dịch và câu nói nhanh",
    noMatches: "Không có ngôn ngữ nào khớp với tìm kiếm của bạn.",
    note: "Các bản dịch được máy hỗ trợ và tiếng Anh là bản tham chiếu nếu có điều gì chưa rõ. Các ngôn ngữ trong nhóm Google Translate sẽ mở trang này trên một trang Google bên ngoài. Danh bạ dịch vụ giữ nguyên tiếng Anh để khớp chính xác với nguồn chính thức.",
  },
  navigation: [
    {
      title: "Bắt đầu tại đây",
      items: [
        {
          label: "Cần giúp đỡ ngay",
          to: "/need-help-now",
          description: "Quyết định khẩn cấp và hỗ trợ khủng hoảng",
        },
        {
          label: "Bắt đầu tại đây",
          to: "/start-here",
          description: "Mới làm quen với hệ thống y tế Ontario",
        },
        {
          label: "Tìm chăm sóc ban đầu",
          to: "/get-a-family-doctor",
          description:
            "Bác sĩ, y tá thực hành (NP), trung tâm y tế cộng đồng và lựa chọn cho sinh viên",
        },
      ],
    },
    {
      title: "Hiểu về chăm sóc",
      items: [
        {
          label: "Chi phí và bảo hiểm",
          to: "/costs-and-coverage",
          description:
            "OHIP, IFHP, bảo hiểm tư nhân và bảo hiểm thuốc",
        },
        {
          label: "Buổi khám của bạn",
          to: "/your-visit",
          description: "Cần mang gì và cách đặt câu hỏi",
        },
        {
          label: "Sau buổi khám",
          to: "/after-visit",
          description:
            "Xét nghiệm, phiếu chỉ định, giấy giới thiệu và theo dõi tiếp",
        },
        {
          label: "Thuốc và nhà thuốc",
          to: "/medicines-and-pharmacies",
          description: "Đơn thuốc, mua thêm thuốc và trợ giúp từ dược sĩ",
        },
      ],
    },
    {
      title: "Trợ giúp tại địa phương",
      items: [
        {
          label: "Dịch vụ địa phương",
          to: "/local-services",
          description: "Tìm kiếm dịch vụ ở Kingston",
        },
        {
          label: "Sức khỏe tâm thần",
          to: "/mental-health",
          description:
            "Hỗ trợ khủng hoảng, khẩn cấp, định kỳ và cho thanh thiếu niên",
        },
        {
          label: "Tầm soát và phòng ngừa",
          to: "/screening-prevention",
          description: "Vắc-xin và chăm sóc phòng ngừa",
        },
        {
          label: "Chăm sóc hỗ trợ và cộng đồng",
          to: "/community-allied-health",
          description:
            "Chăm sóc tại nhà, phục hồi chức năng, nha khoa và hỗ trợ cộng đồng",
        },
        {
          label: "Câu hỏi thường gặp",
          to: "/faq",
          description:
            "Các tình huống thường gặp của người mới đến và bảng thuật ngữ",
        },
        {
          label: "Giới thiệu và độ tin cậy",
          to: "/about",
          description:
            "Nguồn thông tin, quyền riêng tư, khả năng tiếp cận và phản hồi",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Cần giúp đỡ ngay bây giờ?",
    items: {
      "call-911": {
        label: "Gọi 911",
        description: "Khẩn cấp đe dọa tính mạng",
      },
      "call-811": {
        label: "Gọi Health811",
        description: "Tư vấn của y tá, 24/7",
      },
      "call-988": {
        label: "Gọi hoặc nhắn tin 9-8-8",
        description: "Đường dây hỗ trợ khủng hoảng tự tử, 24/7",
      },
      "call-crisis": {
        label: "Gọi đường dây khủng hoảng",
        description: "Đường dây khủng hoảng AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Hướng dẫn chăm sóc khẩn cấp",
        description: "Lựa chọn ngoài giờ và trong ngày",
      },
      "mental-health": {
        label: "Hỗ trợ sức khỏe tâm thần",
        description: "Các lối đi cho khủng hoảng, khẩn cấp và định kỳ",
      },
    },
  },
  home: {
    seoTitle: "Hướng dẫn y tế Kingston",
    seoDescription:
      "Hướng dẫn tìm dịch vụ y tế tại Kingston, Ontario, ưu tiên người mới đến: trợ giúp khẩn cấp, dịch vụ địa phương, kiến thức cơ bản về bảo hiểm, hướng dẫn về thông dịch viên và các bước tiếp theo sau buổi khám.",
    kicker: "Kingston, Ontario",
    heroTitle: "Tìm đúng nơi chăm sóc ở Kingston mà không phải đoán mò",
    heroLead:
      "Hãy bắt đầu với trợ giúp khẩn cấp, kiến thức cơ bản cho người mới đến, bảo hiểm, hoặc danh bạ dịch vụ địa phương. Hướng dẫn này dùng ngôn ngữ đơn giản, thân thiện với điện thoại di động, và nói thẳng về những gì còn cần kiểm tra lại.",
    cardNeedHelp: {
      title: "Cần giúp đỡ ngay",
      body: "Hướng dẫn về cấp cứu, chăm sóc khẩn cấp, khủng hoảng và ngoài giờ.",
    },
    cardStartHere: {
      title: "Bắt đầu tại đây",
      body: "Hệ thống y tế Ontario hoạt động thế nào và nên làm gì trước tiên.",
    },
    cardSearch: {
      title: "Tìm kiếm dịch vụ",
      body: "Tra cứu xét nghiệm máu, mua thêm thuốc, khám không cần hẹn, sức khỏe tâm thần và nhiều hơn nữa.",
    },
    cardLanguage: {
      title: "Trợ giúp ngôn ngữ",
      body: "Đọc hướng dẫn này bằng ngôn ngữ của bạn, cùng hướng dẫn về thông dịch viên và các câu nói nhanh.",
    },
    quickDecisionsKicker: "Quyết định nhanh",
    quickDecisionsTitle: "Bắt đầu với những câu hỏi này",
    quickDecisionLines: [
      "Nếu có thể đe dọa tính mạng, hãy gọi 911 ngay.",
      "Nếu bạn không chắc tối nay nên đi đâu, hãy gọi Health811.",
      "Nếu có ý nghĩ tự tử hoặc đau khổ quá mức, hãy gọi hoặc nhắn tin 9-8-8 bất cứ lúc nào.",
      "Nếu bạn chưa có bác sĩ gia đình, hãy giữ trong kế hoạch các lựa chọn khám không cần hẹn, y tế cộng đồng và dịch vụ cho sinh viên.",
      "Nếu bạn cần xét nghiệm máu, chụp X-quang, mua thêm thuốc, hoặc cập nhật giấy giới thiệu, hãy dùng danh bạ địa phương để tìm bước tiếp theo.",
    ],
    trustNoteTitle: "Lưu ý về độ tin cậy",
    trustNoteBody:
      "Đây là một hướng dẫn tĩnh. Chúng tôi không hiển thị thời gian chờ trực tiếp. Các chi tiết nhạy cảm về thời gian như giờ làm việc và quy trình tiếp nhận có thể thay đổi nhanh, nên mỗi mục đều có liên kết nguồn và trạng thái rà soát.",
    newcomerKicker: "Khởi đầu nhanh cho người mới đến",
    newcomerTitle: "Những bước đầu tiên nếu bạn mới đến Kingston",
    newcomerSteps: [
      {
        title: "1. Tìm hiểu bảo hiểm của bạn",
        body: "Hiểu về OHIP, IFHP, bảo hiểm tư nhân, và những gì thường không được chi trả. OHIP không có thời gian chờ - hãy nộp đơn ngay khi bạn đến.",
      },
      {
        title: "2. Lên kế hoạch cho chăm sóc ban đầu",
        body: "Tìm hiểu sự khác nhau giữa bác sĩ gia đình, y tá thực hành (NP), phòng khám sinh viên, trung tâm y tế cộng đồng và khám không cần hẹn.",
      },
      {
        title: "3. Biết điều gì xảy ra tiếp theo",
        body: "Tìm hiểu phiếu chỉ định xét nghiệm, giấy giới thiệu, kết quả xét nghiệm và các cuộc gọi theo dõi thường có ý nghĩa gì.",
      },
    ],
    languageSupportKicker: "Hỗ trợ ngôn ngữ",
    languageSupportTitle: "Đưa những câu này ra nếu bạn cần giúp đỡ",
    openLanguageHelp: "Mở trợ giúp ngôn ngữ",
    commonTasksKicker: "Việc thường gặp",
    commonTasksTitle: "Tìm kiếm theo việc bạn cần hoàn thành",
    openDirectory: "Mở danh bạ đầy đủ",
    tasks: [
      {
        title: "Xét nghiệm máu hoặc chụp X-quang",
        body: "Tìm phòng xét nghiệm và dịch vụ chẩn đoán hình ảnh.",
      },
      {
        title: "Mua thêm thuốc theo đơn",
        body: "Tìm nhà thuốc và trợ giúp mua thêm thuốc.",
      },
      {
        title: "Hỗ trợ sức khỏe tâm thần",
        body: "Hỗ trợ khủng hoảng, khẩn cấp, định kỳ và cho thanh thiếu niên.",
      },
      {
        title: "Thẻ y tế hoặc hỗ trợ người mới đến",
        body: "Tìm ServiceOntario, ISKA và tư vấn qua điện thoại.",
      },
    ],
    featuredKicker: "Dịch vụ nổi bật",
    featuredTitle: "Những nơi tốt để bắt đầu",
    trustKicker: "Độ tin cậy và nguồn thông tin",
    trustTitle:
      "Nói thẳng về những gì đã được xác minh và những gì còn cần kiểm tra lại",
    trustBody:
      "Một số mục đã được đối chiếu với nguồn chính thức tại địa phương. Một số khác vẫn cần kiểm tra lại tại chỗ vì giờ làm việc, quy trình tiếp nhận hoặc quy định tiếp cận thay đổi thường xuyên. Chúng tôi hiển thị trạng thái đó công khai và khuyến khích người dùng báo cáo các chi tiết đã lỗi thời.",
    trustChecklistTitle: "Đọc trước khi bạn dựa vào một mục trong danh bạ",
    trustChecklist: [
      "Tìm liên kết đến nguồn chính thức.",
      "Kiểm tra ngày rà soát gần nhất.",
      "Xác nhận giờ khám trong ngày và việc tiếp nhận không cần hẹn trước khi đi.",
      "Dùng mẫu báo cáo nếu bạn nhận thấy có thay đổi.",
    ],
    trustLink: "Xem nguồn thông tin và ghi chú về độ tin cậy",
  },
  contentPage: {
    breadcrumbHome: "Trang chủ",
    badge: "Hướng dẫn bằng ngôn ngữ đơn giản",
    reviewStatusTitle: "Trạng thái rà soát",
    reviewLabels: {
      reviewed:
        "Đã rà soát theo bộ nguồn hiện tại mà dự án này sử dụng.",
      "general-guidance":
        "Đã rà soát như hướng dẫn chung. Chi tiết tại địa phương vẫn có thể thay đổi nhanh.",
      "needs-local-recheck":
        "Hướng dẫn hữu ích, nhưng chi tiết tại địa phương vẫn cần kiểm tra thêm.",
    },
    lastReviewPrefix: "Lần rà soát trang gần nhất:",
    noReviewDate: "Trang này chưa có ngày rà soát cấp trang được ghi lại.",
    translationAside:
      "Bạn có thể đọc trang này bằng nhiều ngôn ngữ qua menu Ngôn ngữ. Với lịch hẹn, thuốc men, việc ký đồng ý và hướng dẫn xét nghiệm, hãy hỏi xem có hỗ trợ thông dịch viên hay không.",
    share: "Chia sẻ",
    print: "In",
    sourcesTitle: "Nguồn thông tin cho trang này",
    sourcesNote:
      "Đây là các nguồn chính thức hoặc nguồn gốc chính được dùng cho lần rà soát hiện tại của trang. Quy trình tại địa phương vẫn có thể thay đổi giữa các chu kỳ rà soát.",
    onThisPage: "Trên trang này",
    sourcesAnchorLabel: "Nguồn thông tin",
    translationReminderTitle: "Nhắc nhở về bản dịch",
    translationReminderBody:
      "Nếu điều gì đó ảnh hưởng đến việc điều trị hoặc sự an toàn của bạn, hãy xác nhận với nhân viên y tế hoặc thông dịch viên thay vì chỉ dựa vào bản dịch.",
    linkCopiedTitle: "Đã sao chép liên kết",
    linkCopiedBody: "Bây giờ bạn có thể dán liên kết trang này ở bất cứ đâu.",
    shareCancelled: "Đã hủy chia sẻ",
  },
  directory: {
    seoTitle: "Dịch vụ địa phương",
    seoDescription:
      "Tìm kiếm các dịch vụ y tế, sức khỏe tâm thần, nhà thuốc, bảo hiểm và hỗ trợ định hướng thân thiện với người mới đến tại Kingston, Ontario.",
    kicker: "Danh bạ Kingston",
    title: "Tìm kiếm dịch vụ y tế địa phương",
    lead: "Tìm theo dịch vụ, triệu chứng, giấy tờ hoặc việc cần làm. Ví dụ: khám không cần hẹn, ngoài giờ, xét nghiệm máu, mua thêm thuốc, thẻ y tế, phòng khám sinh viên, hoặc hỗ trợ người mới đến.",
    searchPlaceholder:
      "Tìm theo nhu cầu, tên dịch vụ, địa chỉ hoặc từ khóa",
    sortAriaLabel: "Sắp xếp kết quả",
    sortRelevance: "Sắp xếp: Liên quan nhất",
    sortAlphabetical: "Sắp xếp: A đến Z",
    sortRecentlyReviewed: "Sắp xếp: Rà soát gần đây",
    sortArea: "Sắp xếp: Khu vực",
    gridViewLabel: "Xem dạng lưới",
    listViewLabel: "Xem dạng danh sách",
    allServices: "Tất cả dịch vụ",
    audienceTitle: "Đối tượng",
    accessTitle: "Cách tiếp cận",
    careLevelTitle: "Mức độ chăm sóc",
    coverageAreaTitle: "Bảo hiểm và khu vực",
    areaLabel: "Khu vực",
    showingServices: "Đang hiển thị {count} dịch vụ",
    resetFilters: "Đặt lại bộ lọc",
    trustPanelTitle: "Độ tin cậy và trạng thái rà soát",
    trustPanelBody:
      "Danh bạ này là tĩnh, không phải trực tiếp. Chúng tôi hiển thị ngày rà soát gần nhất được ghi lại, liên kết nguồn chính thức khi có, và những mục còn cần kiểm tra lại tại chỗ. Hãy xác nhận giờ làm việc và khả năng tiếp nhận trong ngày trước khi đi.",
    verifiedLabel: "Đã xác minh",
    needsRecheckLabel: "Cần kiểm tra lại",
    noResultsTitle: "Không có dịch vụ nào khớp với các bộ lọc đó",
    noResultsBody:
      "Hãy thử tìm rộng hơn như xét nghiệm máu, mua thêm thuốc, sức khỏe tâm thần, thẻ y tế, hoặc khám không cần hẹn. Bạn cũng có thể xóa tất cả bộ lọc và bắt đầu lại.",
    notSureTitle: "Không chắc nên bắt đầu từ đâu?",
    notSureBody:
      "Nếu bạn không chắc mình cần cấp cứu, chăm sóc khẩn cấp, phòng khám không cần hẹn, hay hỗ trợ từ nhà thuốc, hãy bắt đầu với trang hướng dẫn khẩn cấp hoặc gọi Health811 để được y tá tư vấn.",
    needHelpNowCta: "Cần giúp đỡ ngay",
    callHealth811: "Gọi Health811",
  },
  filters: {
    audience: {
      newcomers: "Người mới đến",
      students: "Chỉ dành cho sinh viên hoặc trong khuôn viên trường",
      "children-youth": "Trẻ em hoặc thanh thiếu niên",
      adults: "Người lớn",
      families: "Gia đình",
      "unattached-patients": "Chưa có bác sĩ gia đình",
    },
    access: {
      "walk-in": "Không cần hẹn",
      appointment: "Cần đặt hẹn",
      referral: "Cần giấy giới thiệu",
      virtual: "Trực tuyến",
    },
    level: {
      emergency: "Cấp cứu",
      urgent: "Khẩn cấp",
      primary: "Ban đầu",
      community: "Cộng đồng",
    },
    payment: {
      public: "Được tài trợ công",
      community: "Cộng đồng / ít rào cản",
      mixed: "Bảo hiểm hỗn hợp",
      "student-plan": "Bảo hiểm sinh viên",
      private: "Tự trả",
    },
    location: {
      downtown: "Trung tâm thành phố",
      "north-end": "Khu phía Bắc",
      "west-end": "Khu phía Tây",
      campus: "Khuôn viên trường",
      online: "Trực tuyến",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Cấp cứu và chăm sóc khẩn cấp",
      shortLabel: "Cấp cứu và khẩn cấp",
    },
    "primary-care": {
      label: "Chăm sóc ban đầu",
      shortLabel: "Chăm sóc ban đầu",
    },
    "community-health": {
      label: "Trung tâm y tế cộng đồng",
      shortLabel: "Y tế cộng đồng",
    },
    "mental-health": {
      label: "Sức khỏe tâm thần và hỗ trợ khủng hoảng",
      shortLabel: "Sức khỏe tâm thần",
    },
    "public-health": {
      label: "Y tế công cộng",
      shortLabel: "Y tế công cộng",
    },
    "labs-imaging": {
      label: "Xét nghiệm và chẩn đoán hình ảnh",
      shortLabel: "Xét nghiệm và hình ảnh",
    },
    pharmacies: {
      label: "Thuốc và nhà thuốc",
      shortLabel: "Nhà thuốc",
    },
    "allied-community": {
      label: "Chăm sóc hỗ trợ và cộng đồng",
      shortLabel: "Chăm sóc hỗ trợ",
    },
    "navigation-support": {
      label: "Hỗ trợ định hướng và bảo hiểm",
      shortLabel: "Định hướng",
    },
  },
  serviceCard: {
    whenToUse: "Khi nào nên dùng:",
    accessLabel: "Cách tiếp cận",
    eligibilityLabel: "Điều kiện",
    eligibilityFallback:
      "Mở cho công chúng trừ khi nguồn chính thức nói khác.",
    hoursLabel: "Giờ làm việc",
    phoneLabel: "Điện thoại",
    trustDetails: "Chi tiết về độ tin cậy và nguồn",
    lastReview: "Rà soát gần nhất:",
    officialSource: "Nguồn chính thức",
    call: "Gọi",
    officialWebsite: "Trang web chính thức",
    directions: "Chỉ đường",
    viewDetails: "Xem chi tiết",
  },
  serviceDetail: {
    backToServices: "Quay lại dịch vụ địa phương",
    whenToUseTitle: "Khi nào nên dùng dịch vụ này",
    eligibilityTitle: "Điều kiện và cách tiếp cận",
    eligibilityFallback:
      "Hãy kiểm tra nguồn chính thức nếu bạn không chắc dịch vụ này có dành cho bạn hay không.",
    whatToBringTitle: "Cần mang theo gì",
    contactTitle: "Liên hệ và hành động",
    callNow: "Gọi ngay",
    officialWebsite: "Trang web chính thức",
    directions: "Chỉ đường",
    trustTitle: "Độ tin cậy và nguồn",
    lastReview: "Rà soát gần nhất:",
    viewOfficialSource: "Xem nguồn chính thức",
  },
  verification: {
    verified: {
      label: "Đã xác minh với nguồn chính thức",
      shortLabel: "Đã xác minh",
      description:
        "Các chi tiết chính đã được đối chiếu với nguồn chính thức trong chu kỳ rà soát gần nhất.",
    },
    "partially-verified": {
      label: "Có liên kết nguồn chính thức",
      shortLabel: "Liên kết chính thức",
      description:
        "Đã có liên kết đến nguồn chính thức, nhưng một hoặc vài chi tiết có thể thay đổi thường xuyên và nên được xác nhận trước khi bạn đi.",
    },
    "community-reported": {
      label: "Do cộng đồng báo cáo",
      shortLabel: "Báo cáo cộng đồng",
      description:
        "Thông tin này đến từ báo cáo của cộng đồng và vẫn cần được xác nhận độc lập.",
    },
    "needs-recheck": {
      label: "Cần kiểm tra lại",
      shortLabel: "Cần kiểm tra lại",
      description:
        "Mục này vẫn được hiển thị vì có thể vẫn hữu ích, nhưng các chi tiết quan trọng có thể đã cũ. Hãy xác nhận trước khi dựa vào nó.",
    },
  },
  feedback: {
    badge: "Báo cáo thông tin lỗi thời",
    title: "Giúp chúng tôi giữ cho hướng dẫn này chính xác",
    body: "Thao tác này sẽ gửi một email được điền sẵn kèm ngữ cảnh của trang hoặc dịch vụ. Không gửi kèm thông tin y tế riêng tư.",
    issueTypeLabel: "Loại vấn đề",
    issueTypes: {
      "outdated hours": "Giờ làm việc lỗi thời",
      "wrong phone or website": "Sai số điện thoại hoặc trang web",
      "eligibility or access issue": "Vấn đề về điều kiện hoặc tiếp cận",
      "translation or accessibility problem":
        "Vấn đề về bản dịch hoặc khả năng tiếp cận",
      "missing service or content": "Thiếu dịch vụ hoặc nội dung",
      other: "Khác",
    },
    detailsLabel: "Chúng tôi nên kiểm tra điều gì?",
    detailsPlaceholder:
      "Ví dụ: số điện thoại đã thay đổi, một phòng khám giờ chỉ nhận theo hẹn, hoặc một liên kết bị hỏng.",
    contactLabel: "Thông tin liên hệ (không bắt buộc)",
    contactPlaceholder: "Địa chỉ email nếu bạn muốn nhận phản hồi",
    openEmail: "Mở email báo cáo",
    copyText: "Sao chép nội dung báo cáo",
    thanks:
      "Cảm ơn bạn. Các báo cáo giúp chúng tôi ưu tiên những trang đã cũ, liên kết hỏng, và những mục cần kiểm tra lại tại chỗ.",
    toastEmailTitle: "Đã mở bản nháp email",
    toastEmailBody: "Báo cáo của bạn có kèm ngữ cảnh của trang hoặc dịch vụ.",
    toastCopyTitle: "Đã sao chép tóm tắt vấn đề",
    toastCopyBody:
      "Bạn có thể dán vào ứng dụng email của riêng mình nếu cần.",
  },
  footer: {
    description:
      "Một hướng dẫn định hướng dịch vụ y tế bằng ngôn ngữ đơn giản cho Kingston, Ontario. Trang này không cung cấp lời khuyên y khoa hay thời gian chờ trực tiếp. Luôn xác nhận các chi tiết nhạy cảm về thời gian với nguồn chính thức trước khi đi.",
    trustModelTitle: "Mô hình tin cậy",
    trustModelBody:
      "Chúng tôi hiển thị liên kết nguồn chính thức, ngày rà soát, và những mục còn cần kiểm tra lại. Nếu có gì trông không đúng, hãy báo cáo từ trang hoặc dịch vụ đó.",
    beforeYouGo: {
      title: "Trước khi bạn đi",
      body: "Kiểm tra giờ làm việc chính thức, xem bạn có cần đặt hẹn hay giấy giới thiệu không, và cần mang theo giấy tờ gì.",
    },
    languageHelp: {
      title: "Trợ giúp ngôn ngữ",
      body: "Đọc hướng dẫn này bằng ngôn ngữ của bạn qua menu Ngôn ngữ. Hãy yêu cầu thông dịch viên cho các cuộc trao đổi y khoa khi độ chính xác là quan trọng.",
    },
    privacy: {
      title: "Quyền riêng tư",
      body: "Trang này dùng nhật ký cải tiến cục bộ, tôn trọng quyền riêng tư, được lưu trong trình duyệt của bạn. Trang không gửi dữ liệu phân tích cá nhân đến máy chủ từ xa.",
    },
    copyrightSuffix:
      "Nguồn thông tin cộng đồng cho Kingston, Ontario.",
    disclaimer: "Miễn trừ trách nhiệm",
    privacyLink: "Quyền riêng tư",
    sourcesLink: "Nguồn thông tin",
    reportLink: "Báo cáo thông tin lỗi thời",
  },
  notFound: {
    seoTitle: "Không tìm thấy trang",
    seoDescription:
      "Không tìm thấy trang bạn yêu cầu. Hãy bắt đầu với trợ giúp khẩn cấp, kiến thức cơ bản cho người mới đến, dịch vụ địa phương, hoặc Câu hỏi thường gặp.",
    badge: "404",
    title: "Chúng tôi không tìm thấy trang đó",
    body: "Nếu bạn đang cần được chăm sóc nhanh, hãy bắt đầu với hướng dẫn khẩn cấp hoặc tìm kiếm trong danh bạ dịch vụ Kingston.",
    startHere: "Bắt đầu tại đây",
    needHelpNow: "Cần giúp đỡ ngay",
    localServices: "Dịch vụ địa phương",
    faq: "Câu hỏi thường gặp",
  },
};

const homePage: PageContent = {
  title: "Hướng dẫn định hướng dịch vụ y tế Kingston",
  description:
    "Hướng dẫn bằng ngôn ngữ đơn giản, ưu tiên người mới đến, để tìm dịch vụ y tế tại Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Bắt đầu tại đây",
  description:
    "Mới đến Kingston hoặc mới làm quen với hệ thống y tế Ontario? Hãy bắt đầu tại đây để tìm hiểu hệ thống hoạt động thế nào và nên làm gì trước tiên.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Chăm sóc sức khỏe ở Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Tổng quan về cách hoạt động của dịch vụ chăm sóc được bảo hiểm ở Ontario.",
    },
    {
      title: "Ontario: Nộp đơn xin OHIP và nhận thẻ y tế",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Thông tin chính thức về việc nộp đơn và điều kiện OHIP.",
    },
    {
      title: "Ontario: Tìm bác sĩ gia đình hoặc y tá thực hành",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Hướng dẫn về Health Care Connect và tiếp cận chăm sóc ban đầu.",
    },
    {
      title: "Canada: Chương trình Y tế Liên bang Tạm thời (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Thông tin bảo hiểm liên bang cho người tị nạn và người xin tị nạn đủ điều kiện.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Hệ thống y tế Ontario hoạt động thế nào",
      type: "default",
      content: `Hệ thống y tế Ontario được tổ chức xoay quanh **chăm sóc ban đầu**. Chăm sóc ban đầu là nơi bạn thường bắt đầu cho các nhu cầu sức khỏe thông thường, bệnh mạn tính, đơn thuốc, giấy giới thiệu và phòng ngừa. Người chăm sóc ban đầu của bạn có thể là bác sĩ gia đình, y tá thực hành (NP), đội ngũ trung tâm y tế cộng đồng, hoặc phòng khám sức khỏe sinh viên nếu bạn đủ điều kiện.

**Giấy giới thiệu (referral)** là khi một nhân viên y tế đề nghị một dịch vụ hoặc bác sĩ chuyên khoa khác khám cho bạn. **Phiếu chỉ định (requisition)** là mẫu giấy cho phòng xét nghiệm hoặc phòng chụp chiếu biết bạn cần làm xét nghiệm gì.

Bạn không cần hiểu mọi phần của hệ thống ngay từ ngày đầu. Những bước quan trọng nhất là: tìm hiểu bảo hiểm của bạn, biết nơi cần đến khi có vấn đề khẩn cấp, và lập kế hoạch cho việc chăm sóc thường xuyên nếu bạn chưa có người chăm sóc.`,
    },
    {
      id: "first-decisions",
      title: "Những quyết định đầu tiên",
      type: "grid",
      gridItems: [
        {
          title: "Tôi có thể cần giúp đỡ khẩn cấp",
          content:
            "Hãy bắt đầu với hướng dẫn phân biệt cấp cứu và chăm sóc khẩn cấp nếu bạn có vấn đề đột ngột hôm nay hoặc tối nay.",
          icon: "alert",
          link: { text: "Cần giúp đỡ ngay", url: "/need-help-now" },
        },
        {
          title: "Tôi chưa có bác sĩ gia đình",
          content:
            "Tìm hiểu cách bác sĩ gia đình, y tá thực hành, trung tâm y tế cộng đồng, phòng khám không cần hẹn và phòng khám sinh viên kết hợp với nhau.",
          icon: "stethoscope",
          link: { text: "Tìm chăm sóc ban đầu", url: "/get-a-family-doctor" },
        },
        {
          title: "Tôi cần hiểu những gì được bảo hiểm",
          content:
            "Đọc về OHIP, IFHP, bảo hiểm tư nhân, bảo hiểm sinh viên, bảo hiểm thuốc và các chi phí tự trả thường gặp.",
          icon: "shield",
          link: { text: "Chi phí và bảo hiểm", url: "/costs-and-coverage" },
        },
        {
          title: "Tôi cần trợ giúp ngôn ngữ",
          content:
            "Đọc hướng dẫn này bằng 33 ngôn ngữ qua menu Ngôn ngữ, và hỏi về hỗ trợ thông dịch viên cho các cuộc trao đổi y khoa và việc ký đồng ý.",
          icon: "info",
          link: { text: "Khả năng tiếp cận và ngôn ngữ", url: "/about#accessibility" },
        },
        {
          title: "Tôi cần xét nghiệm máu, chụp chiếu, hoặc mua thêm thuốc",
          content:
            "Dùng danh bạ địa phương để tìm bước thực tế tiếp theo sau buổi khám.",
          icon: "file",
          link: { text: "Tìm dịch vụ địa phương", url: "/local-services" },
        },
        {
          title: "Tôi không chắc nên bắt đầu từ đâu",
          content:
            "Gọi Health811 để được y tá tư vấn nếu bạn không chắc tình huống của mình khẩn cấp đến mức nào.",
          icon: "clock",
          link: { text: "Health811 và hướng dẫn khẩn cấp", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Những bước nên làm trong tuần đầu tiên",
      type: "steps",
      items: [
        "Tìm hiểu bảo hiểm của bạn: Đọc về những gì OHIP, IFHP, bảo hiểm tư nhân và bảo hiểm sinh viên thường chi trả. Nếu bạn có thể đủ điều kiện cho OHIP, hãy nộp đơn càng sớm càng tốt.",
        "Chọn kế hoạch khẩn cấp của bạn: Biết khi nào gọi 911, khi nào bắt đầu với Health811, và tìm chăm sóc khẩn cấp hoặc trong ngày ở Kingston tại đâu.",
        "Lên kế hoạch cho chăm sóc thường xuyên: Nếu bạn chưa có người chăm sóc cố định, hãy tìm hiểu các lựa chọn về bác sĩ gia đình, y tá thực hành, trung tâm y tế cộng đồng, phòng khám sinh viên, phòng khám không cần hẹn và chăm sóc trực tuyến.",
        "Giữ thông tin sức khỏe của bạn ở một chỗ: Lưu thẻ y tế hoặc giấy tờ IFHP, danh sách thuốc, sổ tiêm chủng, và bản sao của mọi phiếu chỉ định hoặc giấy giới thiệu.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Nếu bạn chưa có OHIP",
      type: "callout",
      content:
        "Đừng đợi đến lúc ốm mới tìm hiểu con đường bảo hiểm của mình. Nếu bạn đủ điều kiện cho OHIP, hãy nộp đơn sớm. Nếu bạn được bảo hiểm qua IFHP hoặc qua trường học hay bảo hiểm tư nhân, hãy mang theo thông tin đó bên mình. Nếu bạn không có bảo hiểm, hãy hỏi về chi phí trước buổi khám và tìm các dịch vụ cộng đồng hoặc ít rào cản khi phù hợp.",
      link: { text: "Đọc về bảo hiểm", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Hãy chuẩn bị sẵn những thứ này",
      type: "checklist",
      items: [
        "Thẻ y tế, giấy tờ IFHP, hoặc thông tin bảo hiểm của bạn",
        "Danh sách thuốc, kể cả khi bạn chỉ dùng vài loại thuốc",
        "Tên và số điện thoại của phòng khám hoặc người chăm sóc gần nhất, nếu có",
        "Mọi phiếu chỉ định, giấy giới thiệu, giấy ra viện hoặc hướng dẫn xét nghiệm gần đây",
        "Những câu hỏi bạn muốn hỏi bằng ngôn ngữ đơn giản",
        "Ghi sẵn nhu cầu thông dịch viên để bạn nhớ yêu cầu",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Cần giúp đỡ ngay?",
  description:
    "Dùng trang này khi bạn có vấn đề sức khỏe hôm nay hoặc tối nay và không chắc nên bắt đầu từ đâu.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nhận tư vấn y tế từ Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Dịch vụ tư vấn y tá chính thức 24/7.",
    },
    {
      title: "9-8-8: Đường dây hỗ trợ khủng hoảng tự tử",
      url: "https://988.ca/",
      note: "Đường dây hỗ trợ khủng hoảng tự tử quốc gia chính thức. Gọi hoặc nhắn tin 9-8-8, miễn phí, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Mạng lưới bệnh viện chính thức cho thông tin về cấp cứu, chăm sóc khẩn cấp và chẩn đoán hình ảnh.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Tổ chức chính thức tại địa phương về sức khỏe tâm thần và hỗ trợ khủng hoảng.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Cấp cứu hay khẩn cấp?",
      type: "comparison",
      comparison: {
        left: {
          title: "Đến phòng cấp cứu ngay cho các vấn đề như:",
          items: [
            "Đau ngực, khó thở nặng, hoặc dấu hiệu đột quỵ",
            "Chảy máu nặng, chấn thương lớn, hoặc mất ý thức",
            "Lú lẫn đột ngột, co giật, hoặc phản ứng dị ứng nghiêm trọng",
            "Tình huống mất an toàn mà việc chờ đợi có thể gây nguy hiểm đến tính mạng hoặc tay chân",
          ],
        },
        right: {
          title:
            "Bắt đầu với chăm sóc khẩn cấp, Health811, hoặc phòng khám trong ngày cho các vấn đề như:",
          items: [
            "Bong gân, vết cắt nhỏ, phát ban, đau tai, hoặc sốt không có dấu hiệu cảnh báo cấp cứu",
            "Vấn đề mua thêm thuốc theo đơn không thể đợi đến lịch hẹn thường lệ",
            "Câu hỏi về việc tối nay bạn có cần chăm sóc khẩn cấp hay không",
            "Một vấn đề cảm thấy khẩn cấp nhưng không rõ ràng đe dọa tính mạng",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Các tình huống ngoài giờ thường gặp",
      type: "table",
      columns: ["Tình huống", "Bước đầu nên làm", "Điều cần nhớ"],
      rows: [
        {
          cells: [
            "Tôi không chắc việc này khẩn cấp đến mức nào",
            "Gọi Health811",
            "Y tá có thể giúp bạn quyết định nên ở nhà, tìm chăm sóc khẩn cấp, hay đến phòng cấp cứu.",
          ],
        },
        {
          cells: [
            "Bác sĩ của tôi đã đóng cửa và tôi cần lời khuyên tối nay",
            "Health811 hoặc hướng dẫn chăm sóc khẩn cấp",
            "Đừng cho rằng cấp cứu là lựa chọn duy nhất nếu không có dấu hiệu cảnh báo cấp cứu.",
          ],
        },
        {
          cells: [
            "Tôi cần chăm sóc cho con tôi",
            "Dùng cùng các dấu hiệu cảnh báo cấp cứu, sau đó tìm chăm sóc trong ngày hoặc gọi Health811 nếu bạn không chắc",
            "Nếu có thể, hãy mang theo thẻ y tế của trẻ, danh sách thuốc, và diễn biến triệu chứng theo thời gian.",
          ],
        },
        {
          cells: [
            "Tôi cần trợ giúp về sức khỏe tâm thần tối nay",
            "Gọi hoặc nhắn tin 9-8-8 (Đường dây hỗ trợ khủng hoảng tự tử), hoặc gọi đường dây khủng hoảng AMHS-KFLA 24/7",
            "Nếu có nguy cơ tức thời đến sự an toàn, hãy gọi 911.",
          ],
        },
      ],
      caption:
        "Bảng này chỉ là hướng dẫn chung. Nếu ai đó có thể đang gặp nguy hiểm tức thời, hãy gọi 911.",
    },
    {
      id: "kingston-start-points",
      title: "Các điểm bắt đầu ở Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Khoa cấp cứu",
          content:
            "Dùng cấp cứu cho các vấn đề đe dọa tính mạng hoặc có khả năng đe dọa tính mạng.",
          icon: "alert",
          link: {
            text: "Danh sách cấp cứu và khẩn cấp",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Trung tâm chăm sóc khẩn cấp",
          content:
            "Hữu ích cho nhiều vấn đề trong ngày không thể chờ nhưng không rõ ràng là cấp cứu.",
          icon: "clock",
          link: {
            text: "Chăm sóc khẩn cấp và trong ngày",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Tư vấn của y tá qua điện thoại hoặc trực tuyến nếu bạn không chắc nên đi đâu. Hỗ trợ qua điện thoại có sẵn bằng nhiều ngôn ngữ.",
          icon: "info",
          link: { text: "Mục Health811", url: "/local-services/health811" },
        },
        {
          title: "Hỗ trợ khủng hoảng sức khỏe tâm thần",
          content:
            "Gọi hoặc nhắn tin 9-8-8 (Đường dây hỗ trợ khủng hoảng tự tử) bất cứ lúc nào, hoặc dùng hỗ trợ khủng hoảng tại địa phương như đường dây khủng hoảng AMHS-KFLA 24/7.",
          icon: "heart",
          link: { text: "Danh sách sức khỏe tâm thần", url: "/local-services?category=mental-health" },
        },
        {
          title: "Hỗ trợ về bạo lực tình dục",
          content:
            "Dùng hỗ trợ khủng hoảng chuyên biệt nếu bạn cần hỗ trợ tinh thần ngay, sự bảo vệ quyền lợi, hoặc lập kế hoạch an toàn.",
          icon: "shield",
          link: {
            text: "Danh sách dịch vụ hỗ trợ",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Lựa chọn khẩn cấp cho sinh viên",
          content:
            "Nếu bạn là sinh viên, hãy kiểm tra xem dịch vụ y tế của trường có phải là điểm dừng đầu tiên tốt nhất cho các nhu cầu không phải cấp cứu hay không.",
          icon: "stethoscope",
          link: { text: "Danh sách y tế sinh viên", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Nếu bạn vẫn không chắc",
      type: "callout",
      content:
        "Khi vấn đề không rõ ràng đe dọa tính mạng nhưng bạn lo lắng về việc chờ đợi, hãy bắt đầu với Health811. Nếu ai đó có thể không an toàn, có thể đang xấu đi nhanh, hoặc bạn không thể nhận được sự trợ giúp phù hợp kịp thời, hãy dùng dịch vụ cấp cứu.",
      link: { text: "Gọi Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Hãy mang theo những thứ này nếu có thể",
      type: "checklist",
      items: [
        "Thẻ y tế, giấy tờ IFHP, hoặc bất kỳ thẻ bảo hiểm nào bạn có",
        "Danh sách thuốc hoặc ảnh chụp các lọ thuốc",
        "Thời điểm triệu chứng bắt đầu và điều gì làm chúng nặng hơn",
        "Ghi sẵn nhu cầu thông dịch viên phòng khi bạn quá căng thẳng mà quên",
        "Sạc điện thoại và một người hỗ trợ đi cùng nếu điều đó giúp ích cho bạn",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Tìm chăm sóc ban đầu",
  description:
    "Tìm hiểu các con đường khác nhau để có chăm sóc sức khỏe thường xuyên ở Kingston nếu bạn chưa có người chăm sóc.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Tìm bác sĩ gia đình hoặc y tá thực hành",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Hướng dẫn chính thức về Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Thông tin chính thức về dịch vụ trung tâm y tế cộng đồng tại địa phương.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Thông tin y tế sinh viên chính thức cho sinh viên Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Thông tin y tế sinh viên chính thức cho sinh viên St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Chăm sóc ban đầu nghĩa là gì",
      type: "default",
      content:
        "Chăm sóc ban đầu là nơi bạn thường đến trước tiên cho các nhu cầu sức khỏe thông thường. Bao gồm khám tổng quát, gia hạn thuốc, chăm sóc bệnh mạn tính, giấy giới thiệu, chăm sóc phòng ngừa, và theo dõi sau các vấn đề khẩn cấp.\n\nỞ Kingston, con đường chăm sóc ban đầu thường xuyên của bạn có thể là bác sĩ gia đình, y tá thực hành (NP), trung tâm y tế cộng đồng, phòng khám trong khuôn viên trường, hoặc kết hợp các lựa chọn tạm thời trong khi chờ đợi sự chăm sóc ổn định hơn.",
    },
    {
      id: "access-matrix",
      title: "Các con đường tiếp cận chăm sóc ban đầu",
      type: "table",
      columns: ["Con đường", "Phù hợp nhất cho", "Ai có thể dùng", "Cách bắt đầu"],
      rows: [
        {
          cells: [
            "Bác sĩ gia đình hoặc y tá thực hành",
            "Chăm sóc thường xuyên lâu dài và lập kế hoạch sức khỏe dài hạn",
            "Bệnh nhân có thể đăng ký vào danh sách của một người chăm sóc",
            "Dùng Health Care Connect và theo dõi các chỗ nhận bệnh nhân mới tại địa phương",
          ],
        },
        {
          cells: [
            "Trung tâm y tế cộng đồng",
            "Chăm sóc dựa vào cộng đồng, hỗ trợ ít rào cản, và một số chăm sóc cho người mới đến hoặc nhu cầu phức tạp",
            "Điều kiện tùy thuộc vào chương trình và tình trạng tiếp nhận",
            "Liên hệ trực tiếp với tổ chức và hỏi về việc tiếp nhận",
          ],
        },
        {
          cells: [
            "Dịch vụ y tế sinh viên",
            "Tiếp cận nhanh hơn cho sinh viên đã đăng ký",
            "Chỉ sinh viên đủ điều kiện qua trường học",
            "Dùng dịch vụ y tế hoặc chăm sóc sức khỏe của trường",
          ],
        },
        {
          cells: [
            "Phòng khám không cần hẹn hoặc chăm sóc khẩn cấp trong ngày",
            "Chăm sóc ngắn hạn trong khi chờ hoặc khi người chăm sóc thường xuyên của bạn không có mặt",
            "Công chúng nói chung, tùy theo quy định tiếp nhận hằng ngày",
            "Kiểm tra khả năng tiếp nhận hiện tại trước khi đi",
          ],
        },
        {
          cells: [
            "Chăm sóc ban đầu trực tuyến",
            "Một số vấn đề về mua thêm thuốc, tư vấn và việc thông thường",
            "Khác nhau tùy nhà cung cấp và bảo hiểm",
            "Kiểm tra xem nhà cung cấp có thể và không thể xử lý an toàn những gì qua mạng",
          ],
        },
      ],
      caption:
        "Con đường tốt nhất tùy thuộc vào điều kiện của bạn, mức độ khẩn cấp, và việc bạn cần chăm sóc ngắn hạn hay lâu dài.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Nếu bạn chưa có người chăm sóc thường xuyên",
      type: "steps",
      items: [
        "Đăng ký qua con đường chính thức của tỉnh: Dùng Health Care Connect nếu bạn chưa có bác sĩ gia đình hoặc y tá thực hành.",
        "Kiểm tra xem bạn có đủ điều kiện cho các lựa chọn y tế của trường hoặc cộng đồng không: Sinh viên nên bắt đầu với phòng khám của trường. Một số dịch vụ y tế cộng đồng có ưu tiên tiếp nhận riêng.",
        "Xây dựng một kế hoạch tạm thời an toàn: Biết những dịch vụ khám không cần hẹn, khẩn cấp, trực tuyến, nhà thuốc và sức khỏe tâm thần nào bạn có thể dùng trong khi chờ.",
        "Tự giữ hồ sơ của mình: Lưu danh sách thuốc, kết quả xét nghiệm, giấy giới thiệu, và tên của các nhân viên y tế bạn đã gặp.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Nên làm gì trong khi chờ đợi",
      type: "checklist",
      items: [
        "Dùng chăm sóc không cần hẹn, khẩn cấp hoặc trực tuyến cho các nhu cầu ngắn hạn khi phù hợp",
        "Hỏi nhà thuốc xem có trợ giúp mua thêm thuốc hoặc chăm sóc bệnh nhẹ nào không",
        "Giữ một danh sách thuốc được cập nhật và mang theo mỗi lần khám",
        "Mang theo bản sao các kết quả quan trọng hoặc giấy ra viện khi việc chăm sóc bị phân tán",
        "Dùng cùng một phòng khám để theo dõi tiếp khi có thể để việc chăm sóc của bạn nhất quán hơn một chút",
      ],
    },
    {
      id: "next-best-option",
      title: "Nếu nhu cầu của bạn khẩn cấp nhưng không phải cấp cứu",
      type: "callout",
      content:
        "Chưa có bác sĩ gia đình không có nghĩa là bạn nên trì hoãn việc chăm sóc quan trọng. Hãy dùng đúng lựa chọn ngắn hạn cho vấn đề trước mắt, sau đó lập kế hoạch để duy trì chăm sóc liên tục sau khi vấn đề khẩn cấp được điều trị.",
      link: { text: "Tìm các lựa chọn chăm sóc ban đầu", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Chi phí và bảo hiểm",
  description:
    "Hướng dẫn bằng ngôn ngữ đơn giản về OHIP, IFHP, Canadian Dental Care Plan (chương trình chăm sóc răng của Canada), bảo hiểm sinh viên hoặc tư nhân, và các chi phí tự trả thường gặp.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Nộp đơn xin OHIP và nhận thẻ y tế",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Hướng dẫn OHIP chính thức.",
    },
    {
      title: "Canada: Chương trình Y tế Liên bang Tạm thời (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Thông tin bảo hiểm IFHP chính thức.",
    },
    {
      title: "Ontario Drug Benefit (Quyền lợi thuốc Ontario)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Hướng dẫn chính thức về bảo hiểm thuốc của tỉnh.",
    },
    {
      title: "Ontario: Nhận trợ giúp khi chi phí thuốc theo đơn cao",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Hướng dẫn chính thức về Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Thông tin chính thức về chương trình bảo hiểm răng liên bang và điều kiện.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Kiến thức cơ bản về bảo hiểm",
      type: "default",
      content:
        "Bảo hiểm ở Ontario tùy thuộc vào tình trạng pháp lý, tuổi, thu nhập, điều kiện chương trình, và việc bạn có bảo hiểm qua trường học hoặc tư nhân hay không.\n\nNhiều dịch vụ bác sĩ và bệnh viện cần thiết về mặt y khoa được chi trả cho bệnh nhân OHIP đủ điều kiện. Điều đó **không** có nghĩa là mọi thứ đều miễn phí. Thuốc men, chăm sóc răng, chăm sóc mắt, các loại giấy tờ, giấy nghỉ ốm, và nhiều dịch vụ y tế hỗ trợ thường cần bảo hiểm riêng hoặc tự trả tiền.\n\nTin tốt nếu bạn mới đến: **OHIP không có thời gian chờ**. Nếu bạn đủ điều kiện, bạn có thể nộp đơn ngay khi đến Ontario, và bảo hiểm bắt đầu khi đơn của bạn được duyệt. Đừng đợi đến lúc ốm mới nộp đơn.",
    },
    {
      id: "coverage-matrix",
      title: "Tổng quan nhanh các con đường bảo hiểm",
      type: "table",
      columns: [
        "Loại bảo hiểm",
        "Thường giúp với",
        "Những gì vẫn có thể không được chi trả",
        "Việc cần làm tiếp theo",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Nhiều dịch vụ bác sĩ và bệnh viện cần thiết về mặt y khoa",
            "Nhiều loại thuốc, chăm sóc răng, chăm sóc mắt và các loại giấy tờ",
            "Nộp đơn nếu đủ điều kiện và giữ thẻ của bạn còn hiệu lực",
          ],
        },
        {
          cells: [
            "IFHP",
            "Bảo hiểm cho người tị nạn và người xin tị nạn đủ điều kiện theo chương trình liên bang",
            "Chi tiết khác nhau tùy nhóm và dịch vụ",
            "Xem hướng dẫn IFHP chính thức và hỏi phòng khám hoặc nhà thuốc xem họ có chấp nhận không",
          ],
        },
        {
          cells: [
            "Bảo hiểm trường học hoặc tư nhân",
            "Thường giúp với thuốc, tư vấn tâm lý, răng, mắt và y tế hỗ trợ",
            "Hạn mức bảo hiểm, khoản đồng chi trả và quy định mạng lưới khác nhau",
            "Đọc tài liệu bảo hiểm trước khi cho rằng một dịch vụ được chi trả",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Bảo hiểm răng cho cư dân đủ điều kiện không có bảo hiểm răng tư nhân và thu nhập gia đình điều chỉnh dưới $90,000",
            "Không phải mọi thủ thuật đều được chi trả, và có thể có khoản đồng chi trả tùy theo thu nhập",
            "Kiểm tra điều kiện và nộp đơn qua trang CDCP chính thức của Chính phủ Canada",
          ],
        },
        {
          cells: [
            "Không có bảo hiểm đang hiệu lực",
            "Bạn vẫn có thể tiếp cận một số dịch vụ, nhưng có thể phải trả phí",
            "Chi phí có thể đáng kể cho buổi khám, xét nghiệm hoặc thuốc",
            "Hỏi về chi phí trước buổi khám và tìm các lựa chọn cộng đồng khi phù hợp",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Những gì thường không được chi trả đầy đủ",
      type: "checklist",
      items: [
        "Nhiều loại thuốc theo đơn trừ khi bạn đủ điều kiện cho một chương trình công hoặc có bảo hiểm khác",
        "Chăm sóc răng, trừ khi bạn đủ điều kiện cho Canadian Dental Care Plan, Healthy Smiles Ontario, một chương trình nha khoa cộng đồng, hoặc một gói quyền lợi",
        "Chăm sóc mắt ngoài các con đường điều kiện cụ thể",
        "Vật lý trị liệu, tư vấn tâm lý, mát-xa và các dịch vụ y tế hỗ trợ khác trừ khi có chương trình hoặc bảo hiểm chi trả",
        "Các loại giấy tờ, thư, phí lỡ hẹn và nhiều khoản phí hành chính khác",
      ],
    },
    {
      id: "drug-coverage",
      title: "Các con đường bảo hiểm thuốc",
      type: "default",
      content:
        "Bảo hiểm thuốc thường là điều khiến người mới đến bất ngờ. Buổi khám bác sĩ có thể được chi trả, nhưng đơn thuốc vẫn có thể tốn tiền.\n\nCác chương trình thuốc công có thể giúp tùy theo tuổi, thu nhập và điều kiện. **Ontario Drug Benefit** chi trả nhiều loại thuốc cho người từ 65 tuổi trở lên và người trong một số chương trình nhất định, và **OHIP+** chi trả nhiều đơn thuốc cho người từ 24 tuổi trở xuống không có bảo hiểm tư nhân. Ontario cũng có **Trillium Drug Program** cho một số người có chi phí thuốc cao so với thu nhập hộ gia đình. Nếu bạn có bảo hiểm trường học hoặc tư nhân, hãy kiểm tra xem nó phối hợp với bảo hiểm công hay thay thế nó.",
    },
    {
      id: "coverage-scenarios",
      title: "Các câu hỏi về bảo hiểm thường gặp",
      type: "faq",
      faqs: [
        {
          question: "Tôi chưa có OHIP. Tôi vẫn có thể được chăm sóc không?",
          answer:
            "Có, nhưng có thể phải trả phí và con đường tốt nhất tùy thuộc vào tình trạng và mức độ khẩn cấp của bạn. Hãy hỏi về chi phí trước khi nhận chăm sóc không phải cấp cứu khi có thể, và xem xét điều kiện IFHP hoặc bảo hiểm trường học hoặc tư nhân nếu phù hợp với bạn.",
        },
        {
          question: "Tôi là sinh viên quốc tế. OHIP có phải là lựa chọn duy nhất của tôi không?",
          answer:
            "Không phải lúc nào cũng vậy. Nhiều sinh viên dựa vào bảo hiểm của trường hoặc bảo hiểm tư nhân thay vì OHIP. Hãy dùng tài liệu bảo hiểm chính thức của trường và dịch vụ y tế sinh viên để xác nhận những gì được chi trả.",
        },
        {
          question: "Thuốc của tôi có miễn phí không nếu buổi khám đã được chi trả?",
          answer:
            "Không hẳn. Bảo hiểm cho buổi khám và bảo hiểm cho đơn thuốc thường là hai việc riêng biệt.",
        },
        {
          question: "Chăm sóc răng có được chi trả không?",
          answer:
            "Với hầu hết người lớn, chăm sóc răng tách biệt với OHIP. Canadian Dental Care Plan của liên bang hiện chi trả cho nhiều cư dân không có bảo hiểm răng tư nhân và có thu nhập gia đình điều chỉnh dưới $90,000 — bạn thường cần đã khai thuế ở Canada để đủ điều kiện. Trẻ em trong các gia đình thu nhập thấp hơn có thể đủ điều kiện cho Healthy Smiles Ontario, và Kingston có một phòng khám nha khoa cộng đồng cho người trong các chương trình cụ thể.",
        },
        {
          question: "Làm sao tôi biết một dịch vụ là công, cộng đồng, hay tư nhân?",
          answer:
            "Dùng các bộ lọc của danh bạ và xem chi tiết của mục đó. Nếu bạn không chắc, hãy liên hệ với dịch vụ trước khi đặt hẹn.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Buổi khám của bạn",
  description:
    "Cần mang gì, cách đặt câu hỏi, và cách giao tiếp an toàn trong một buổi khám sức khỏe.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Chăm sóc sức khỏe ở Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hướng dẫn chung về hệ thống.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Cần mang theo gì",
      type: "checklist",
      items: [
        "Thẻ y tế, giấy tờ IFHP, hoặc thông tin bảo hiểm khác của bạn",
        "Danh sách thuốc đầy đủ, bao gồm cả vitamin và thuốc không kê đơn",
        "Tên các triệu chứng, khi nào bắt đầu, và điều gì đã thay đổi",
        "Những câu hỏi bạn muốn được trả lời trước khi ra về",
        "Mọi phiếu chỉ định, giấy giới thiệu, giấy ra viện hoặc kết quả xét nghiệm gần đây",
        "Ghi sẵn nhu cầu thông dịch viên để bạn nhớ yêu cầu",
      ],
    },
    {
      id: "during-the-visit",
      title: "Trong buổi khám",
      type: "steps",
      items: [
        "Bắt đầu với vấn đề chính của bạn: Nhiều buổi hẹn rất ngắn, nên hãy bắt đầu với điều quan trọng nhất hôm nay.",
        "Dùng ngôn ngữ đơn giản: Hoàn toàn ổn khi nói 'Tôi không hiểu từ đó' hoặc 'Bạn có thể giải thích đơn giản hơn không?'",
        "Nhắc lại kế hoạch: Trước khi ra về, hãy nói to các bước tiếp theo để biết bạn có cần xét nghiệm, giấy giới thiệu, mua thêm thuốc, hay một buổi hẹn theo dõi không.",
        "Hỏi điều gì xảy ra nếu tình hình xấu đi: Bạn nên biết khi nào gọi lại, khi nào dùng chăm sóc khẩn cấp, và khi nào dùng cấp cứu.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Trợ giúp về thông dịch viên và giao tiếp",
      type: "default",
      content:
        "Nếu bạn cần trợ giúp ngôn ngữ, hãy yêu cầu sớm. Đừng đợi đến cuối buổi hẹn. Bạn có thể đọc trang web này bằng nhiều ngôn ngữ qua menu Ngôn ngữ, nhưng bản dịch trang web không nên thay thế hỗ trợ thông dịch viên cho các quyết định điều trị, hướng dẫn dùng thuốc, hoặc việc ký đồng ý.\n\nBạn có thể nói: **'I need an interpreter, please.' (Tôi cần một thông dịch viên.)** Health811 (gọi 811) cũng hỗ trợ qua điện thoại bằng nhiều ngôn ngữ. Nếu có người hỗ trợ đi cùng bạn, hãy nhớ rằng người thân trong gia đình không phải lúc nào cũng là người tốt nhất hoặc an toàn nhất để thông dịch các thông tin y khoa phức tạp hoặc nhạy cảm.",
    },
    {
      id: "questions-to-ask",
      title: "Những câu hỏi nên hỏi",
      type: "checklist",
      items: [
        "Bác sĩ nghĩ điều gì đang xảy ra?",
        "Tôi nên làm gì tiếp theo?",
        "Tôi có cần xét nghiệm, phiếu chỉ định, giấy giới thiệu, hay buổi khám theo dõi không?",
        "Khi nào tôi sẽ nhận được kết quả?",
        "Những dấu hiệu cảnh báo nào có nghĩa là tôi nên gọi lại hoặc tìm trợ giúp khẩn cấp?",
      ],
    },
    {
      id: "privacy",
      title: "Quyền riêng tư và việc ký đồng ý",
      type: "default",
      content:
        "Thông tin sức khỏe của bạn là nhạy cảm. Nếu bạn không chắc ai sẽ xem thông tin của mình, hãy hỏi. Nếu bạn không hiểu một mẫu giấy, cuộc trao đổi về việc ký đồng ý, hoặc kế hoạch điều trị, hãy làm chậm quá trình lại và yêu cầu giải thích rõ hơn.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Sau buổi khám",
  description:
    "Tìm hiểu điều gì xảy ra sau buổi khám, bao gồm phiếu chỉ định, kết quả xét nghiệm, giấy giới thiệu, và khi nào nên gọi lại.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Thông tin về hệ thống bệnh viện địa phương.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Thông tin về quy trình xét nghiệm cộng đồng và cổng thông tin bệnh nhân.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Điều thường xảy ra sau buổi khám",
      type: "steps",
      items: [
        "Bạn ra về với một kế hoạch: Có thể bao gồm thuốc, phiếu chỉ định, giấy giới thiệu, buổi hẹn theo dõi, hoặc hướng dẫn theo dõi các dấu hiệu cảnh báo.",
        "Bạn có thể phải tự làm bước tiếp theo: Ví dụ, bạn có thể cần đặt lịch xét nghiệm máu, chụp chiếu, lấy thuốc ở nhà thuốc, hoặc một buổi khám theo dõi.",
        "Kết quả thường được gửi về cho người đã chỉ định xét nghiệm: Phòng xét nghiệm hoặc nơi chụp chiếu có thể không giải thích kết quả cho bạn ngay tại chỗ.",
        "Bạn có thể không nhận được cuộc gọi cho mọi kết quả bình thường: Hãy hỏi quy trình theo dõi của phòng khám để biết điều gì sẽ xảy ra.",
      ],
    },
    {
      id: "common-terms",
      title: "Các thuật ngữ sau khám thường gặp",
      type: "table",
      columns: [
        "Thuật ngữ",
        "Nghĩa là gì bằng ngôn ngữ đơn giản",
        "Bạn thường làm gì tiếp theo",
      ],
      rows: [
        {
          cells: [
            "Phiếu chỉ định (requisition)",
            "Mẫu giấy cho phòng xét nghiệm hoặc phòng chụp chiếu biết bạn cần làm xét nghiệm gì",
            "Đặt lịch hoặc đến làm xét nghiệm và giữ một bản sao nếu có thể",
          ],
        },
        {
          cells: [
            "Giấy giới thiệu (referral)",
            "Đề nghị từ một nhân viên y tế đến một dịch vụ hoặc bác sĩ chuyên khoa khác",
            "Chờ được liên hệ, sau đó gọi lại nếu bạn được dặn phải theo dõi mà không thấy gì xảy ra",
          ],
        },
        {
          cells: [
            "Theo dõi tiếp (follow-up)",
            "Buổi kiểm tra lại sau điều trị, xét nghiệm, hoặc khi triệu chứng thay đổi",
            "Hỏi khi nào và bằng cách nào việc theo dõi sẽ diễn ra trước khi bạn ra về",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Khi nào nên gọi lại",
      type: "checklist",
      items: [
        "Bạn không hiểu phiếu chỉ định, giấy giới thiệu, hoặc hướng dẫn dùng thuốc",
        "Bạn được báo sẽ có người liên hệ nhưng chưa nghe gì trong thời gian dự kiến",
        "Triệu chứng của bạn đang xấu đi hoặc không cải thiện như đã được dự báo",
        "Nhà thuốc, phòng xét nghiệm hoặc phòng chụp chiếu nói rằng giấy tờ còn thiếu gì đó",
        "Bạn nghĩ một kết quả có thể đã bị bỏ sót hoặc bạn vẫn còn lo lắng",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Các tình huống thường gặp",
      type: "faq",
      faqs: [
        {
          question: "Tôi cần xét nghiệm máu sau buổi khám. Tôi phải làm gì?",
          answer:
            "Kiểm tra xem bạn có phiếu chỉ định không và phòng xét nghiệm có yêu cầu đặt lịch không. Sau đó dùng danh bạ để tìm địa điểm xét nghiệm. Mang theo phiếu chỉ định và thông tin bảo hiểm của bạn.",
        },
        {
          question: "Tôi không hiểu phiếu chỉ định hoặc giấy giới thiệu.",
          answer:
            "Gọi cho phòng khám đã đưa giấy đó cho bạn và nhờ họ giải thích bằng ngôn ngữ đơn giản. Hoàn toàn hợp lý khi hỏi mẫu giấy đó dùng để làm gì, cần gửi đến đâu, và bạn có cần tự đặt lịch gì không.",
        },
        {
          question: "Ai theo dõi kết quả xét nghiệm?",
          answer:
            "Thường là người đã chỉ định xét nghiệm. Hãy hỏi văn phòng của người đó về quy trình thông thường cho kết quả bình thường và bất thường.",
        },
        {
          question: "Giấy giới thiệu mất bao lâu?",
          answer:
            "Thời gian chờ giấy giới thiệu rất khác nhau. Hãy hỏi mức chờ nào là bình thường cho tình huống của bạn và nên làm gì nếu bạn không nghe được tin gì.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Các bước tiếp theo hữu ích",
      type: "grid",
      gridItems: [
        {
          title: "Tìm phòng xét nghiệm và chụp chiếu",
          content:
            "Dùng danh bạ để tìm các mục về xét nghiệm máu, X-quang, siêu âm và chẩn đoán hình ảnh.",
          icon: "file",
          link: { text: "Xét nghiệm và hình ảnh", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Tìm nhà thuốc",
          content:
            "Dùng danh bạ để tìm nhà thuốc, trợ giúp mua thêm thuốc và hỗ trợ về thuốc.",
          icon: "shield",
          link: { text: "Nhà thuốc", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Cần lập kế hoạch chăm sóc theo dõi?",
          content:
            "Dùng trang chăm sóc ban đầu nếu bạn không biết việc theo dõi lâu dài nên diễn ra ở đâu.",
          icon: "stethoscope",
          link: { text: "Tìm chăm sóc ban đầu", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Thuốc và nhà thuốc",
  description:
    "Hiểu về đơn thuốc, mua thêm thuốc, trợ giúp từ dược sĩ, và cách thanh toán thuốc ở Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Dược sĩ có thể làm gì",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Thông tin chính thức của tỉnh về dược sĩ và nhà thuốc.",
    },
    {
      title: "Ontario Drug Benefit (Quyền lợi thuốc Ontario)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Hướng dẫn chính thức về bảo hiểm thuốc của tỉnh.",
    },
    {
      title: "Ontario: Nhận trợ giúp khi chi phí thuốc theo đơn cao",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Hướng dẫn chính thức về Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Dược sĩ có thể giúp gì",
      type: "default",
      content:
        "Dược sĩ không chỉ phát thuốc. Họ có thể giải thích cách dùng thuốc an toàn, kiểm tra tương tác thuốc, và xem xét tác dụng phụ.\n\nỞ Ontario, dược sĩ cũng có thể **đánh giá và kê đơn cho 19 bệnh nhẹ thường gặp** — bao gồm đau mắt đỏ, mụn rộp môi, nhiễm trùng đường tiết niệu (ở phụ nữ), côn trùng cắn, và dị ứng theo mùa. Việc đánh giá miễn phí với thẻ y tế Ontario của bạn, và danh sách bệnh có thể tiếp tục mở rộng.\n\nNhà thuốc cũng là một trong những nơi tốt nhất để hỏi các câu thực tế như: **Lần mua thêm thuốc này có gấp không? Có lựa chọn nào rẻ hơn không? Tôi nên làm gì nếu lỡ quên một liều?**",
    },
    {
      id: "fill-a-prescription",
      title: "Cách mua thuốc theo đơn",
      type: "steps",
      items: [
        "Nhận đơn thuốc: Đơn có thể là giấy, gửi fax, hoặc gửi điện tử.",
        "Chọn nhà thuốc: Dùng cùng một nhà thuốc thường xuyên giúp họ phát hiện tương tác thuốc và các vấn đề về lịch sử mua thêm thuốc.",
        "Hỏi về thời gian và chi phí: Nhà thuốc có thể cho bạn biết khi nào thuốc sẵn sàng và bảo hiểm của bạn có chi trả hay không.",
        "Lắng nghe phần tư vấn: Hỏi thuốc dùng để làm gì, cách dùng, và khi nào bạn nên gọi lại nếu thuốc không có tác dụng.",
      ],
    },
    {
      id: "refill-options",
      title: "Các vấn đề về mua thêm thuốc và thuốc men",
      type: "table",
      columns: ["Tình huống", "Bước đầu nên làm", "Lý do"],
      rows: [
        {
          cells: [
            "Tôi cần mua thêm thuốc định kỳ",
            "Bắt đầu với nhà thuốc quen hoặc người chăm sóc thường xuyên của bạn",
            "Họ có thể cho bạn biết cần mua thêm thuốc, gia hạn đơn, hay một buổi hẹn mới",
          ],
        },
        {
          cells: [
            "Bác sĩ của tôi không có mặt và tôi sắp hết thuốc",
            "Hỏi nhà thuốc xem có những lựa chọn nào, sau đó dùng chăm sóc không cần hẹn, trực tuyến hoặc khẩn cấp nếu cần",
            "Bước tiếp theo an toàn nhất tùy thuộc vào loại thuốc và tình huống của bạn",
          ],
        },
        {
          cells: [
            "Tôi không hiểu cách dùng thuốc này",
            "Nhờ dược sĩ giải thích lại bằng ngôn ngữ đơn giản",
            "Đây là một phần của việc dùng thuốc an toàn",
          ],
        },
        {
          cells: [
            "Thuốc quá đắt",
            "Hỏi về thuốc gốc (generic), bảo hiểm của gói, và các chương trình công",
            "Giá thuốc khác nhau và bảo hiểm thuốc thường tách biệt với buổi khám",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Các cách thuốc có thể được thanh toán",
      type: "checklist",
      items: [
        "Một chương trình thuốc công, nếu bạn đủ điều kiện",
        "Bảo hiểm của trường học hoặc tư nhân",
        "Kết hợp bảo hiểm công và tư nhân",
        "Tự trả nếu không có chương trình nào chi trả cho thuốc đó",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Cần trợ giúp về nhà thuốc tại địa phương?",
      type: "callout",
      content:
        "Dùng danh bạ để tìm nhà thuốc, hỗ trợ mua thêm thuốc, và các lựa chọn trực tuyến hoặc trong ngày khi bạn cần giải quyết nhanh một vấn đề về thuốc.",
      link: { text: "Tìm danh sách nhà thuốc", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Hỗ trợ sức khỏe tâm thần",
  description:
    "Các lối đi tại Kingston về sức khỏe tâm thần, tư vấn tâm lý, hỗ trợ thanh thiếu niên và khủng hoảng.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Đường dây hỗ trợ khủng hoảng tự tử",
      url: "https://988.ca/",
      note: "Đường dây hỗ trợ khủng hoảng tự tử quốc gia chính thức. Gọi hoặc nhắn tin 9-8-8, miễn phí, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Thông tin chính thức về sức khỏe tâm thần người lớn và hỗ trợ khủng hoảng.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Đường dây trợ giúp chính thức của Ontario về sức khỏe tâm thần và nghiện.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Thông tin chính thức về sức khỏe tâm thần trẻ em và thanh thiếu niên.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Nếu ai đó có thể không an toàn",
      type: "callout",
      content:
        "Nếu có nguy cơ tức thời đến tính mạng hoặc sự an toàn, hãy gọi 911. Với ý nghĩ tự tử hoặc đau khổ quá mức, bạn có thể **gọi hoặc nhắn tin 9-8-8** (Đường dây hỗ trợ khủng hoảng tự tử) bất cứ lúc nào — miễn phí, bảo mật, và hoạt động 24/7 bằng tiếng Anh và tiếng Pháp. Bạn cũng có thể gọi đường dây khủng hoảng AMHS-KFLA 24/7 theo số 613-544-4229. Đừng đợi đến lịch hẹn thường lệ.",
      link: { text: "Danh sách sức khỏe tâm thần", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Các loại hỗ trợ",
      type: "grid",
      gridItems: [
        {
          title: "Hỗ trợ khủng hoảng",
          content:
            "Dùng khi đang đau khổ tột độ, có lo ngại về an toàn, hoặc khi việc chờ đợi là không an toàn.",
          icon: "alert",
        },
        {
          title: "Hỗ trợ khẩn cấp",
          content:
            "Dùng khi tình huống nghiêm trọng và bạn cần được giúp sớm, nhưng không phải là cấp cứu đe dọa tính mạng tức thời.",
          icon: "clock",
        },
        {
          title: "Tư vấn tâm lý định kỳ",
          content:
            "Dùng cho lo âu, trầm cảm, căng thẳng, đau buồn, vấn đề trong các mối quan hệ, hoặc những thay đổi lớn trong cuộc sống.",
          icon: "heart",
        },
        {
          title: "Dịch vụ cho trẻ em và thanh thiếu niên",
          content:
            "Dùng dịch vụ sức khỏe tâm thần chuyên biệt cho thanh thiếu niên khi người cần chăm sóc là trẻ em hoặc thiếu niên.",
          icon: "info",
        },
        {
          title: "Hỗ trợ trong trường học",
          content:
            "Sinh viên có thể được phục vụ tốt nhất qua các lối đi chăm sóc sức khỏe hoặc tư vấn của trường trước tiên.",
          icon: "stethoscope",
        },
        {
          title: "Hỗ trợ về bạo lực tình dục",
          content:
            "Dùng hỗ trợ chuyên biệt cho khủng hoảng, tư vấn tâm lý, bảo vệ quyền lợi, và lập kế hoạch an toàn sau bạo lực tình dục.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Nên bắt đầu từ đâu trong các tình huống thường gặp",
      type: "table",
      columns: ["Tình huống", "Điểm dừng đầu tiên tốt nhất", "Lý do"],
      rows: [
        {
          cells: [
            "Tôi cần trợ giúp về sức khỏe tâm thần tối nay",
            "Gọi hoặc nhắn tin 9-8-8, gọi đường dây khủng hoảng AMHS-KFLA, hoặc dùng cấp cứu nếu sự an toàn đang bị đe dọa",
            "Đừng đợi đến lịch hẹn thường lệ khi tình huống cảm thấy không an toàn",
          ],
        },
        {
          cells: [
            "Tôi cần tư vấn tâm lý nhưng hiện tại tôi an toàn",
            "Tư vấn tâm lý cộng đồng, bác sĩ gia đình, y tá thực hành, hoặc hỗ trợ qua bảo hiểm tư nhân",
            "Những nơi này có thể giúp chăm sóc lâu dài và giấy giới thiệu",
          ],
        },
        {
          cells: [
            "Tôi cần trợ giúp cho con tôi",
            "Dịch vụ sức khỏe tâm thần trẻ em hoặc thanh thiếu niên và, nếu cần, hướng dẫn khẩn cấp",
            "Trẻ em và thanh thiếu niên thường có lối đi riêng",
          ],
        },
        {
          cells: [
            "Tôi là sinh viên",
            "Y tế hoặc tư vấn của trường trước, trừ khi tình huống không an toàn hoặc nghiêm trọng",
            "Dịch vụ của trường có thể là cửa vào nhanh nhất cho sinh viên",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Câu hỏi thường gặp",
      type: "faq",
      faqs: [
        {
          question: "Tôi có thể gọi hoặc nhắn tin cho ai ngay bây giờ?",
          answer:
            "Gọi hoặc nhắn tin **9-8-8** (Đường dây hỗ trợ khủng hoảng tự tử) bất cứ lúc nào, miễn phí, 24/7 — không cần giấy giới thiệu. Ở Kingston, đường dây khủng hoảng AMHS-KFLA theo số 613-544-4229 cũng trả lời 24/7. Nếu sự an toàn đang bị đe dọa tức thời, hãy gọi 911.",
        },
        {
          question: "Nếu tôi không biết việc này có được coi là khủng hoảng hay không?",
          answer:
            "Nếu ai đó có thể không an toàn, đừng đợi đến khi chắc chắn. Hãy dùng hỗ trợ khủng hoảng hoặc dịch vụ cấp cứu.",
        },
        {
          question: "Nếu tôi cần giúp đỡ tối nay nhưng không chắc nên gọi cho ai?",
          answer:
            "Hãy dùng trang danh bạ sức khỏe tâm thần địa phương hoặc lối đi hỗ trợ khủng hoảng thay vì đợi đến sáng.",
        },
        {
          question: "Nếu người cần giúp đỡ là con tôi?",
          answer:
            "Hãy tìm cụ thể các dịch vụ cho trẻ em và thanh thiếu niên. Lối đi sức khỏe tâm thần cho thanh thiếu niên thường khác với chăm sóc người lớn.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Tầm soát và phòng ngừa",
  description:
    "Tìm hiểu kiến thức cơ bản về chăm sóc phòng ngừa, vắc-xin và tầm soát ở Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Thông tin về vắc-xin và y tế công cộng tại địa phương.",
    },
    {
      title: "Ontario: Chăm sóc sức khỏe ở Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hướng dẫn chung về chăm sóc sức khỏe.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Vì sao chăm sóc phòng ngừa quan trọng",
      type: "default",
      content:
        "Chăm sóc phòng ngừa nghĩa là cố gắng phát hiện vấn đề sớm hoặc ngăn chặn trước khi chúng trở nên nghiêm trọng hơn. Bao gồm vắc-xin, các xét nghiệm tầm soát, đo huyết áp định kỳ, và trao đổi về các yếu tố nguy cơ với nhân viên y tế.",
    },
    {
      id: "common-prevention",
      title: "Các việc phòng ngừa thường gặp",
      type: "checklist",
      items: [
        "Tiêm vắc-xin đầy đủ và đúng hạn",
        "Hỏi xem có xét nghiệm tầm soát nào được khuyến nghị cho độ tuổi hoặc tiền sử sức khỏe của bạn không",
        "Mang các câu hỏi về huyết áp, tiểu đường, hoặc các yếu tố nguy cơ khác đến các buổi khám định kỳ",
        "Dùng các nguồn y tế công cộng khi bạn cần thông tin về vắc-xin hoặc phòng ngừa",
      ],
    },
    {
      id: "prevention-next",
      title: "Cần dịch vụ phòng ngừa tại địa phương?",
      type: "callout",
      content:
        "Dùng danh bạ dịch vụ địa phương để tìm các mục về y tế công cộng, tầm soát và nhà thuốc nếu bạn cần một điểm bắt đầu cụ thể ở Kingston.",
      link: {
        text: "Danh sách y tế công cộng và nhà thuốc",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Chăm sóc hỗ trợ và cộng đồng",
  description:
    "Dùng trang này để hiểu về chăm sóc tại nhà, nha khoa, phục hồi chức năng, tư vấn tâm lý, hỗ trợ thị lực, và những gì có thể là công, cộng đồng, sinh viên, hay tư nhân.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Thông tin chính thức về điều phối chăm sóc tại nhà và cộng đồng.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Thông tin chính thức về chương trình bảo hiểm răng liên bang và điều kiện.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Thông tin chính thức về dịch vụ cộng đồng và nha khoa.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Thông tin chính thức về hỗ trợ thị lực.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Chăm sóc hỗ trợ và cộng đồng nghĩa là gì",
      type: "default",
      content:
        "Y tế hỗ trợ (allied health) nghĩa là chăm sóc từ các chuyên gia như chuyên viên vật lý trị liệu, chuyên viên hoạt động trị liệu, chuyên gia dinh dưỡng, nhân viên công tác xã hội, chuyên viên tư vấn tâm lý, nha sĩ, hoặc đội ngũ hỗ trợ thị lực. Chăm sóc cộng đồng thường nghĩa là chăm sóc diễn ra ngoài bệnh viện, đôi khi tại nhà, trường học, phòng khám, hoặc chương trình cộng đồng của bạn.",
    },
    {
      id: "access-payment-matrix",
      title: "Bảng tiếp cận và thanh toán",
      type: "table",
      columns: ["Con đường", "Ví dụ", "Cách thanh toán thường gặp", "Cách bắt đầu"],
      rows: [
        {
          cells: [
            "Chăm sóc tại nhà và cộng đồng được tài trợ công",
            "Điều dưỡng tại nhà, trị liệu tại nhà, điều phối chăm sóc",
            "Các chương trình công có thể áp dụng nếu bạn đáp ứng quy định của chương trình",
            "Bắt đầu với giấy giới thiệu của nhân viên y tế hoặc con đường chăm sóc tại nhà chính thức",
          ],
        },
        {
          cells: [
            "Dịch vụ dựa vào cộng đồng",
            "Nha khoa tại trung tâm y tế cộng đồng hoặc các hỗ trợ ít rào cản",
            "Tài trợ công hoặc cộng đồng có thể áp dụng tùy theo dịch vụ",
            "Liên hệ trực tiếp với chương trình và hỏi về điều kiện",
          ],
        },
        {
          cells: [
            "Hỗ trợ trong trường học",
            "Tư vấn tâm lý trong trường hoặc các hỗ trợ liên quan đến sức khỏe",
            "Thường gắn với điều kiện sinh viên và phí hoặc bảo hiểm sinh viên",
            "Dùng các trang dịch vụ chính thức của trường bạn trước",
          ],
        },
        {
          cells: [
            "Chăm sóc hỗ trợ tư nhân",
            "Vật lý trị liệu, tư vấn tâm lý, mát-xa, nha khoa tư nhân, dịch vụ thị lực tư nhân",
            "Thường tự trả trừ khi có bảo hiểm khác chi trả",
            "Hỏi đầy đủ về phí và quy định bảo hiểm trước khi đặt hẹn",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Ví dụ về chăm sóc hỗ trợ và cộng đồng",
      type: "grid",
      gridItems: [
        {
          title: "Chăm sóc tại nhà",
          content:
            "Hữu ích khi ai đó cần hỗ trợ tại nhà sau khi ốm, chấn thương, hoặc nằm viện.",
          icon: "clock",
          link: {
            text: "Danh sách chăm sóc tại nhà",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Chăm sóc răng",
          content:
            "Bảo hiểm răng tách biệt với bảo hiểm khám bác sĩ thông thường. Canadian Dental Care Plan của liên bang hiện chi trả cho nhiều người không có bảo hiểm răng tư nhân, và các chương trình như Healthy Smiles Ontario cùng các phòng khám nha khoa cộng đồng giúp những nhóm cụ thể.",
          icon: "shield",
          link: {
            text: "Danh sách nha khoa và cộng đồng",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Phục hồi chức năng và trị liệu",
          content:
            "Vật lý trị liệu, hoạt động trị liệu và các dịch vụ liên quan có thể là công, cộng đồng, hoặc tư nhân tùy theo con đường của bạn.",
          icon: "stethoscope",
          link: { text: "Danh sách chăm sóc hỗ trợ", url: "/local-services?category=allied-community" },
        },
        {
          title: "Hỗ trợ thị lực",
          content:
            "Hỗ trợ thị lực có thể bao gồm thiết bị, trợ giúp định hướng, và các hỗ trợ cộng đồng bên cạnh chăm sóc mắt y khoa.",
          icon: "info",
          link: {
            text: "Danh sách hỗ trợ thị lực",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Trước khi bạn đặt hẹn",
      type: "checklist",
      items: [
        "Hỏi xem có cần giấy giới thiệu không",
        "Hỏi xem dịch vụ là công, được cộng đồng tài trợ, hay tự trả",
        "Hỏi chính xác về phí và quy định hủy hẹn nếu dịch vụ là tư nhân",
        "Kiểm tra xem bảo hiểm trường học hoặc tư nhân của bạn có chi trả một phần chi phí không",
        "Hỏi xem bạn có cần mang hồ sơ, hình ảnh chụp chiếu, hoặc giấy của bác sĩ không",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "Câu hỏi thường gặp và bảng thuật ngữ",
  description:
    "Các tình huống thường gặp của người mới đến, câu hỏi thực tế, và các định nghĩa bằng ngôn ngữ đơn giản.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Chăm sóc sức khỏe ở Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hướng dẫn chung về chăm sóc sức khỏe của tỉnh.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Hướng dẫn chính thức về tư vấn của y tá.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Các tình huống thường gặp của người mới đến",
      type: "faq",
      faqs: [
        {
          question: "Tôi chưa có OHIP. Tôi nên làm gì trước tiên?",
          answer:
            "Hãy tìm hiểu con đường bảo hiểm của bạn trước, sau đó dùng danh bạ địa phương và các trang hướng dẫn khẩn cấp để lập một kế hoạch tạm thời an toàn.",
        },
        {
          question: "Tôi là sinh viên quốc tế. Tôi nên bắt đầu từ đâu?",
          answer:
            "Hãy bắt đầu với dịch vụ y tế hoặc chăm sóc sức khỏe của trường và tài liệu bảo hiểm của trường, sau đó dùng các dịch vụ cộng đồng hoặc khẩn cấp khi những lựa chọn đó không đủ.",
        },
        {
          question: "Tôi cần một thông dịch viên.",
          answer:
            "Hãy yêu cầu sớm. Bạn có thể đọc trang này bằng 33 ngôn ngữ qua menu Ngôn ngữ, và bạn có thể đưa cho nhân viên xem các câu nói nhanh trong thẻ trợ giúp thông dịch. Với lịch hẹn, hướng dẫn dùng thuốc, việc ký đồng ý và trao đổi về xét nghiệm, hãy hỏi về hỗ trợ thông dịch viên chuyên nghiệp. Health811 (gọi 811) hỗ trợ qua điện thoại bằng nhiều ngôn ngữ.",
        },
        {
          question: "Tôi cần xét nghiệm máu sau buổi khám.",
          answer:
            "Kiểm tra xem bạn có phiếu chỉ định không, sau đó tìm phòng xét nghiệm và chụp chiếu trong danh bạ.",
        },
        {
          question: "Tôi cần mua thêm thuốc và bác sĩ của tôi không có mặt.",
          answer:
            "Hãy bắt đầu với nhà thuốc của bạn, sau đó dùng các lối đi không cần hẹn, trực tuyến hoặc khẩn cấp tùy theo loại thuốc và mức độ gấp.",
        },
        {
          question: "Tôi cần chăm sóc cho con tôi.",
          answer:
            "Dùng các dấu hiệu cảnh báo cấp cứu trước, sau đó dùng hướng dẫn trong ngày hoặc khẩn cấp. Lối đi sức khỏe tâm thần cho trẻ em và thanh thiếu niên thường tách biệt với chăm sóc người lớn.",
        },
        {
          question: "Tôi cần trợ giúp về sức khỏe tâm thần tối nay.",
          answer:
            "Gọi hoặc nhắn tin 9-8-8 (Đường dây hỗ trợ khủng hoảng tự tử) bất cứ lúc nào, hoặc gọi đường dây khủng hoảng AMHS-KFLA 24/7 theo số 613-544-4229. Dùng cấp cứu nếu sự an toàn đang bị đe dọa. Đừng đợi đến lịch hẹn thường lệ.",
        },
        {
          question: "Tôi không hiểu một phiếu chỉ định hoặc giấy giới thiệu.",
          answer:
            "Gọi cho phòng khám đã đưa giấy đó cho bạn và nhờ họ giải thích bằng ngôn ngữ đơn giản. Bạn có thể hỏi giấy đó dùng để làm gì, gửi đến đâu, và ai nên theo dõi tiếp.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Thêm các câu hỏi thường gặp",
      type: "faq",
      faqs: [
        {
          question: "Tôi có thể cứ đến phòng cấp cứu nếu tôi không có bác sĩ không?",
          answer:
            "Cấp cứu là dành cho các trường hợp cấp cứu. Nếu vấn đề không rõ ràng đe dọa tính mạng, hãy bắt đầu với trang hướng dẫn khẩn cấp, Health811, phòng khám không cần hẹn, hoặc chăm sóc trong ngày khác.",
        },
        {
          question: "Nếu tôi mới đến và không biết dịch vụ nào phù hợp với mình?",
          answer:
            "Dùng các bộ lọc của danh bạ cho sinh viên, người mới đến, trẻ em và thanh thiếu niên, không cần hẹn, trực tuyến, cần giấy giới thiệu, và loại bảo hiểm.",
        },
        {
          question: "Nếu thông tin trên trang này có vẻ đã lỗi thời?",
          answer:
            "Hãy dùng mẫu báo cáo trên trang hoặc mục đó để lần rà soát tiếp theo có thể tập trung vào thay đổi mà bạn phát hiện.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Bảng thuật ngữ",
      type: "checklist",
      items: [
        "Chăm sóc ban đầu (primary care): Con đường chăm sóc sức khỏe thường xuyên của bạn cho các nhu cầu sức khỏe thông thường và lâu dài.",
        "Y tá thực hành (nurse practitioner, NP): Y tá hành nghề nâng cao có thể thăm khám, chẩn đoán, kê đơn và giới thiệu trong nhiều tình huống.",
        "Giấy giới thiệu (referral): Đề nghị từ một nhân viên y tế đến một dịch vụ hoặc bác sĩ chuyên khoa khác.",
        "Phiếu chỉ định (requisition): Mẫu giấy cho phòng xét nghiệm hoặc phòng chụp chiếu biết bạn cần làm xét nghiệm gì.",
        "Phân loại ưu tiên (triage): Quá trình quyết định ai cần chăm sóc khẩn cấp trước dựa trên sự an toàn và mức độ nghiêm trọng.",
        "Phòng khám không cần hẹn (walk-in clinic): Phòng khám có thể tiếp nhận bệnh nhân không đặt hẹn trước, tùy theo lượng tiếp nhận hằng ngày.",
        "Chăm sóc khẩn cấp (urgent care): Chăm sóc trong ngày cho các vấn đề khẩn cấp nhưng không rõ ràng đe dọa tính mạng.",
        "Bệnh nhân có đăng ký (rostered or attached patient): Bệnh nhân có mối quan hệ lâu dài với một người chăm sóc ban đầu thường xuyên.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Giới thiệu, độ tin cậy và quyền riêng tư",
  description:
    "Tìm hiểu cách hướng dẫn này hoạt động, cách xử lý nguồn và trạng thái rà soát, và cách báo cáo các thay đổi.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ghi chú nguồn của dự án",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Tóm tắt công khai về cách dự án xử lý độ tin cậy và nguồn thông tin.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Trang này dùng để làm gì",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca là một hướng dẫn định hướng dịch vụ y tế ưu tiên người mới đến cho Kingston, Ontario. Trang được thiết kế để giúp mọi người chọn đúng bước tiếp theo, hiểu các thuật ngữ thường gặp của hệ thống, và tìm các mục dịch vụ địa phương đáng tin cậy.\n\nTrang này **không phải** là công cụ xem thời gian chờ trực tiếp, nền tảng đặt lịch, hay dịch vụ tư vấn y khoa.",
    },
    {
      id: "sources",
      title: "Độ tin cậy và việc dẫn nguồn hoạt động thế nào",
      type: "default",
      content:
        "Chúng tôi cố gắng liên kết các mục địa phương với trang dịch vụ chính thức bất cứ khi nào có thể. Mỗi mục hiển thị trạng thái rà soát và ngày rà soát gần nhất. Một số mục được xác minh đầy đủ với nguồn chính thức. Một số khác vẫn cần kiểm tra lại tại chỗ vì giờ làm việc, quy trình tiếp nhận hoặc quy định tiếp cận thay đổi thường xuyên.\n\nKhối nguồn ở cấp trang hiển thị các tài liệu tham khảo chính thức chính được dùng cho chu kỳ rà soát hiện tại.",
    },
    {
      id: "accessibility",
      title: "Khả năng tiếp cận và ngôn ngữ",
      type: "default",
      content:
        "Trang này được xây dựng để thân thiện với bàn phím, ưu tiên điện thoại di động, và dễ đọc bằng ngôn ngữ đơn giản.\n\nBạn có thể đọc toàn bộ hướng dẫn bằng **33 ngôn ngữ** qua menu Ngôn ngữ ở đầu trang — từ العربية và Soomaali đến ਪੰਜਾਬੀ, ትግርኛ, Yorùbá và Українська — với mọi trang và menu được phục vụ trực tiếp ngay trên trang này. Tất cả các bản dịch đều được máy hỗ trợ; tiếng Pháp, Tây Ban Nha, Ả Rập và tiếng Trung giản thể được rà soát thêm một lượt, còn lại được gắn nhãn dịch tự động. **Tiếng Anh vẫn là bản tham chiếu** — nếu một câu dịch có vẻ không rõ hoặc gây ngạc nhiên, hãy xem bản tiếng Anh hoặc nhờ ai đó xác nhận.\n\nHàng chục ngôn ngữ khác có thể mở trang này qua Google Translate từ cùng menu đó, và thẻ trợ giúp thông dịch có các câu nói nhanh khẩn cấp bằng hơn 20 ngôn ngữ mà bạn có thể đưa cho nhân viên xem.\n\nDanh bạ dịch vụ (tên dịch vụ, địa chỉ, số điện thoại và giờ làm việc) giữ nguyên tiếng Anh để khớp chính xác với nguồn chính thức.\n\nBản dịch dưới mọi hình thức vẫn có thể sai về các chi tiết y khoa, nên hãy hỏi về hỗ trợ thông dịch viên chuyên nghiệp cho lịch hẹn, hướng dẫn dùng thuốc và việc ký đồng ý. Health811 (gọi 811) hỗ trợ qua điện thoại bằng nhiều ngôn ngữ.",
    },
    {
      id: "privacy",
      title: "Quyền riêng tư",
      type: "default",
      content:
        "Trang này không dùng các công cụ phân tích từ xa xâm phạm. Trang giữ các số đếm cải tiến nhẹ trong trình duyệt của riêng bạn để người duy trì có thể hiểu các tìm kiếm thường gặp, tìm kiếm không có kết quả, lượt xem dịch vụ và báo cáo vấn đề khi thông tin được xuất ra một cách có chủ đích để bảo trì.\n\nKhông gửi thông tin y tế riêng tư qua mẫu phản hồi hoặc email.",
    },
    {
      id: "contact",
      title: "Liên hệ và báo cáo thay đổi",
      type: "default",
      content:
        "Nếu một trang hoặc mục trông có vẻ sai, hãy dùng mẫu báo cáo trên trang đó. Báo cáo nên mô tả vấn đề, không phải tình trạng sức khỏe cá nhân của bạn.\n\nEmail liên hệ chung: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Miễn trừ trách nhiệm",
      type: "default",
      content:
        "Trang web này chỉ dành cho việc định hướng và giáo dục. Đây không phải là lời khuyên y khoa và không thay thế cho việc chẩn đoán, điều trị chuyên nghiệp hay trợ giúp cấp cứu. Nếu một tình huống có thể đe dọa tính mạng, hãy gọi 911.",
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
