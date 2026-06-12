import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Sayfa yükleniyor...",
    directoryEnglishNote:
      "Rehber kayıtları; hizmet adları, adresler, telefon numaraları ve çalışma saatleri resmi kaynaklarla birebir eşleşsin diye İngilizce gösterilir.",
  },
  header: {
    emergencyBanner: "Hayati tehlike içeren acil durum mu? Hemen 911'i arayın.",
    tagline:
      "Kingston, Ontario için yeni gelenlere öncelik veren sağlık hizmeti rehberi",
    languageButton: "Dil",
    languageButtonAria: "Dil ve tercüman yardımı",
    openNavigation: "Menüyü aç",
    primaryNavLabel: "Ana menü",
  },
  languageModal: {
    title: "Dil ve tercüman yardımı",
    description:
      "Bu rehberi kendinizi en rahat hissettiğiniz dilde okuyun. Sağlıkla ilgili görüşmelerde ihtiyaç duyduğunuzda tercüman isteyin.",
    chooseLanguageTitle: "Dilinizi seçin",
    chooseLanguageNote:
      "Bu rehber bu sitede 33 dile eksiksiz çevrilmiştir; onlarca dil daha otomatik çeviriyle açılır. Rehber kayıtları resmi kaynaklarla birebir eşleşmeleri için İngilizce kalır. Bir şey belirsiz görünürse İngilizce sürüm esas alınır.",
    safetyTitle: "Güvenlik notu",
    safetyBody:
      "Web sitesi çevirisi okumak ve anlamak içindir. Randevular, test talimatları, ilaçlar veya onam için kliniğin ya da hastanenin profesyonel tercüman sağlayıp sağlayamayacağını sorun. Health811 (811'i arayın) birçok dilde telefon desteği sunar.",
    phrasesTitle: "Personele gösterebileceğiniz hazır cümleler",
    phrasesNote:
      "Dilinizi işaret edin ve bu satırları resepsiyona veya klinik personeline gösterin.",
    callHealth811: "Health811'i arayın",
    accessibilityCta: "Erişilebilirlik ve güven",
    close: "Dil yardımı penceresini kapat",
  },
  moreLanguages: {
    title: "Daha fazla dil (otomatik çeviri)",
    description:
      "Her dil bu tek menüden çalışır — Somalice, Yorubaca, İbo dili, Hausa dili, Amharca, Tigrinya, Svahili, Ukraynaca, Farsça, Urduca, Pencapça, Tamilce ve Vietnamca dahil.",
    selectLabel: "Herhangi bir dil seçin",
    selectPlaceholder: "Tüm diller — birini seçin…",
    openButton: "Bu dilde aç",
    disclaimer:
      "Otomatik olarak işaretlenen diller bu sayfayı Google Translate üzerinden açar ve gezinmeye devam ettikçe dilinizde kalır. Otomatik çeviri bu proje tarafından gözden geçirilmez — okumak için iyidir, ancak tıbbi ayrıntıları bir klinisyen veya tercümanla doğrulayın.",
  },
  funding: {
    acknowledgment:
      "Bu proje, Ontario Medical Students Association (OMSA) tarafından sağlanan bir hibeyle desteklenmektedir.",
    logoAlt: "Ontario Medical Students Association (OMSA) logosu",
  },
  languagePicker: {
    searchPlaceholder: "Dil arayın…",
    onSiteGroup: "Bu sitede çevrilmiş",
    proxyGroup: "Google Translate ile daha fazla dil",
    reviewedBadge: "Gözden geçirildi",
    automaticBadge: "Otomatik",
    interpreterTab: "Tercüman yardımı ve hazır cümleler",
    noMatches: "Aramanızla eşleşen dil yok.",
    note: "Çeviriler makine desteklidir ve bir şey belirsiz görünürse İngilizce sürüm esas alınır. Google Translate grubundaki diller bu sayfayı harici bir Google sitesinde açar. Rehber kayıtları resmi kaynaklarla birebir eşleşmeleri için İngilizce kalır.",
  },
  navigation: [
    {
      title: "Buradan başlayın",
      items: [
        {
          label: "Hemen Yardım Lazım",
          to: "/need-help-now",
          description: "Acil kararlar ve kriz desteği",
        },
        {
          label: "Buradan Başlayın",
          to: "/start-here",
          description: "Ontario sağlık sistemine yeni misiniz",
        },
        {
          label: "Birinci Basamak Bakım Bulun",
          to: "/get-a-family-doctor",
          description:
            "Doktorlar, NP'ler, toplum sağlığı merkezleri ve öğrenci seçenekleri",
        },
      ],
    },
    {
      title: "Bakımı anlayın",
      items: [
        {
          label: "Masraflar ve Kapsam",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, özel sigortalar ve ilaç kapsamı",
        },
        {
          label: "Ziyaretiniz",
          to: "/your-visit",
          description: "Yanınızda ne getirmeli ve nasıl soru sormalı",
        },
        {
          label: "Ziyaretten Sonra",
          to: "/after-visit",
          description: "Testler, istem formları, sevkler ve takip",
        },
        {
          label: "İlaçlar ve Eczaneler",
          to: "/medicines-and-pharmacies",
          description: "Reçeteler, ilaç yenileme ve eczacı yardımı",
        },
      ],
    },
    {
      title: "Yerel yardım",
      items: [
        {
          label: "Yerel Hizmetler",
          to: "/local-services",
          description: "Kingston hizmetlerinde arama yapın",
        },
        {
          label: "Ruh Sağlığı",
          to: "/mental-health",
          description: "Kriz, ivedi, rutin ve gençlik desteği",
        },
        {
          label: "Tarama ve Korunma",
          to: "/screening-prevention",
          description: "Aşılar ve koruyucu bakım",
        },
        {
          label: "Yardımcı ve Toplum Bakımı",
          to: "/community-allied-health",
          description: "Evde bakım, rehabilitasyon, diş ve toplum destekleri",
        },
        {
          label: "SSS",
          to: "/faq",
          description: "Yaygın yeni gelen senaryoları ve sözlük",
        },
        {
          label: "Hakkında ve Güven",
          to: "/about",
          description: "Kaynaklar, gizlilik, erişilebilirlik ve geri bildirim",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Hemen şimdi yardıma mı ihtiyacınız var?",
    items: {
      "call-911": {
        label: "911'i arayın",
        description: "Hayati tehlike içeren acil durum",
      },
      "call-811": {
        label: "Health811'i arayın",
        description: "Hemşire tavsiyesi, 7/24",
      },
      "call-988": {
        label: "9-8-8'i arayın veya mesaj atın",
        description: "İntihar Kriz Yardım Hattı, 7/24",
      },
      "call-crisis": {
        label: "Kriz Hattını arayın",
        description: "AMHS-KFLA kriz hattı",
      },
      "urgent-guide": {
        label: "İvedi bakım rehberi",
        description: "Mesai sonrası ve aynı gün seçenekleri",
      },
      "mental-health": {
        label: "Ruh sağlığı desteği",
        description: "Kriz, ivedi ve rutin yollar",
      },
    },
  },
  home: {
    seoTitle: "Kingston sağlık rehberi",
    seoDescription:
      "Kingston, Ontario için yeni gelenlere öncelik veren sağlık hizmeti rehberi: acil yardım, yerel hizmetler, kapsam temelleri, tercüman rehberliği ve ziyaret sonrası adımlar.",
    kicker: "Kingston, Ontario",
    heroTitle: "Kingston'da doğru bakımı tahmin yürütmeden bulun",
    heroLead:
      "Acil yardım, yeni gelen temelleri, kapsam veya yerel hizmetler rehberiyle başlayın. Bu rehber sade dillidir, mobil uyumludur ve nelerin hâlâ yeniden kontrol gerektirdiği konusunda dürüsttür.",
    cardNeedHelp: {
      title: "Hemen yardım lazım",
      body: "Acil durum, ivedi bakım, kriz ve mesai sonrası rehberliği.",
    },
    cardStartHere: {
      title: "Buradan başlayın",
      body: "Ontario sağlık sistemi nasıl işler ve önce ne yapmalı.",
    },
    cardSearch: {
      title: "Hizmet arayın",
      body: "Kan tahlili, ilaç yenileme, randevusuz bakım, ruh sağlığı ve daha fazlasını arayın.",
    },
    cardLanguage: {
      title: "Dil yardımı",
      body: "Bu rehberi kendi dilinizde okuyun; ayrıca tercüman rehberliği ve hazır cümleler.",
    },
    quickDecisionsKicker: "Hızlı kararlar",
    quickDecisionsTitle: "Bu sorularla başlayın",
    quickDecisionLines: [
      "Hayati tehlike olabilirse hemen 911'i arayın.",
      "Bu gece nereye gideceğinizden emin değilseniz Health811'i arayın.",
      "İntihar düşünceleri veya dayanılmaz sıkıntı için her zaman 9-8-8'i arayın veya mesaj atın.",
      "Aile doktorunuz yoksa randevusuz klinikleri, toplum sağlığını ve öğrenci seçeneklerini planınızda tutun.",
      "Kan tahlili, röntgen, ilaç yenileme veya sevk güncellemesi gerekiyorsa sonraki adımı bulmak için yerel rehberi kullanın.",
    ],
    trustNoteTitle: "Güven notu",
    trustNoteBody:
      "Bu statik bir rehberdir. Canlı bekleme süreleri göstermeyiz. Çalışma saatleri ve kayıt gibi zamana duyarlı ayrıntılar hızla değişebilir; bu yüzden her kayıtta bir kaynak bağlantısı ve gözden geçirme durumu bulunur.",
    newcomerKicker: "Yeni gelenler için hızlı başlangıç",
    newcomerTitle: "Kingston'a yeniyseniz ilk adımlar",
    newcomerSteps: [
      {
        title: "1. Kapsamınızı öğrenin",
        body: "OHIP, IFHP, özel planları ve genellikle nelerin kapsanmadığını anlayın. OHIP için bekleme süresi yoktur - varır varmaz başvurun.",
      },
      {
        title: "2. Birinci basamak bakım yolunuzu planlayın",
        body: "Aile doktorları, nurse practitioner'lar (ileri uygulama hemşireleri), öğrenci klinikleri, toplum sağlığı merkezleri ve randevusuz bakım arasındaki farkı öğrenin.",
      },
      {
        title: "3. Sonra ne olacağını bilin",
        body: "İstem formlarının, sevklerin, test sonuçlarının ve takip aramalarının genellikle ne anlama geldiğini öğrenin.",
      },
    ],
    languageSupportKicker: "Dil desteği",
    languageSupportTitle: "Yardıma ihtiyacınız olursa bu cümleleri gösterin",
    openLanguageHelp: "Dil yardımını aç",
    commonTasksKicker: "Yaygın işler",
    commonTasksTitle: "Bitirmeniz gereken işe göre arayın",
    openDirectory: "Tüm rehberi aç",
    tasks: [
      {
        title: "Kan tahlili veya röntgen",
        body: "Laboratuvar ve görüntüleme hizmetlerini bulun.",
      },
      {
        title: "Reçete yenileme",
        body: "Eczaneleri ve ilaç yenileme yardımını bulun.",
      },
      {
        title: "Ruh sağlığı desteği",
        body: "Kriz, ivedi, rutin ve gençlik desteği.",
      },
      {
        title: "Sağlık kartı veya yeni gelen desteği",
        body: "ServiceOntario, ISKA ve telefonla tavsiye hizmetlerini bulun.",
      },
    ],
    featuredKicker: "Öne çıkan hizmetler",
    featuredTitle: "Başlamak için iyi yerler",
    trustKicker: "Güven ve kaynaklar",
    trustTitle:
      "Neyin doğrulandığı ve neyin hâlâ yeniden kontrol gerektirdiği konusunda dürüst",
    trustBody:
      "Bazı kayıtlar resmi yerel kaynaklara göre kontrol edilmiştir. Diğerleri; çalışma saatleri, kayıt veya erişim kuralları sık değiştiği için hâlâ yerel bir yeniden kontrole ihtiyaç duyar. Bu durumu açıkça gösterir ve kullanıcıları güncelliğini yitirmiş ayrıntıları bildirmeye teşvik ederiz.",
    trustChecklistTitle: "Bir kayda güvenmeden önce okuyun",
    trustChecklist: [
      "Resmi kaynak bağlantısını arayın.",
      "Son gözden geçirme tarihini kontrol edin.",
      "Gitmeden önce aynı gün çalışma saatlerini ve randevusuz kabulü doğrulayın.",
      "Bir değişiklik fark ederseniz bildirim formunu kullanın.",
    ],
    trustLink: "Kaynakları ve güven notlarını görüntüleyin",
  },
  contentPage: {
    breadcrumbHome: "Ana sayfa",
    badge: "Sade dilde rehber",
    reviewStatusTitle: "Gözden geçirme durumu",
    reviewLabels: {
      reviewed:
        "Bu projenin kullandığı güncel kaynak setine göre gözden geçirildi.",
      "general-guidance":
        "Genel rehberlik olarak gözden geçirildi. Yerel ayrıntılar yine de hızla değişebilir.",
      "needs-local-recheck":
        "Yararlı rehberlik, ancak yerel ayrıntılar hâlâ daha fazla kontrol gerektiriyor.",
    },
    lastReviewPrefix: "Son sayfa gözden geçirmesi:",
    noReviewDate:
      "Bu sayfanın kayıtlı bir sayfa düzeyi gözden geçirme tarihi yok.",
    translationAside:
      "Bu sayfayı Dil menüsünü kullanarak birkaç dilde okuyabilirsiniz. Randevular, ilaçlar, onam ve test talimatları için tercüman desteğinin mevcut olup olmadığını sorun.",
    share: "Paylaş",
    print: "Yazdır",
    sourcesTitle: "Bu sayfanın kaynakları",
    sourcesNote:
      "Bunlar, güncel sayfa gözden geçirmesi için kullanılan başlıca resmi veya birincil kaynaklardır. Yerel süreçler gözden geçirme döngüleri arasında yine de değişebilir.",
    onThisPage: "Bu sayfada",
    sourcesAnchorLabel: "Kaynaklar",
    translationReminderTitle: "Çeviri hatırlatması",
    translationReminderBody:
      "Bir şey tedavinizi veya güvenliğinizi etkiliyorsa, yalnızca çeviriye güvenmek yerine bir klinisyen veya tercümanla doğrulayın.",
    linkCopiedTitle: "Bağlantı kopyalandı",
    linkCopiedBody:
      "Bu sayfa bağlantısını artık istediğiniz yere yapıştırabilirsiniz.",
    shareCancelled: "Paylaşım iptal edildi",
  },
  directory: {
    seoTitle: "Yerel hizmetler",
    seoDescription:
      "Kingston, Ontario'da yeni gelen dostu sağlık, ruh sağlığı, eczane, kapsam ve yol gösterme hizmetlerini arayın.",
    kicker: "Kingston rehberi",
    title: "Yerel sağlık hizmetlerini arayın",
    lead: "Hizmete, belirtiye, belgeye veya yapılacak işe göre arayın. Örnekler: randevusuz, mesai sonrası, kan tahlili, ilaç yenileme, sağlık kartı, öğrenci kliniği veya yeni gelen desteği.",
    searchPlaceholder:
      "İhtiyaca, hizmet adına, adrese veya anahtar kelimeye göre arayın",
    sortAriaLabel: "Sonuçları sırala",
    sortRelevance: "Sırala: İlgililik",
    sortAlphabetical: "Sırala: A'dan Z'ye",
    sortRecentlyReviewed: "Sırala: Son gözden geçirilenler",
    sortArea: "Sırala: Bölge",
    gridViewLabel: "Izgara görünümü",
    listViewLabel: "Liste görünümü",
    allServices: "Tüm hizmetler",
    audienceTitle: "Hedef kitle",
    accessTitle: "Erişim",
    careLevelTitle: "Bakım düzeyi",
    coverageAreaTitle: "Kapsam ve bölge",
    areaLabel: "Bölge",
    showingServices: "{count} hizmet gösteriliyor",
    resetFilters: "Filtreleri sıfırla",
    trustPanelTitle: "Güven ve gözden geçirme durumu",
    trustPanelBody:
      "Bu rehber statiktir, canlı değildir. Kayıtlı son gözden geçirme tarihini, varsa resmi kaynak bağlantılarını ve hangi kayıtların hâlâ yerel yeniden kontrol gerektirdiğini gösteririz. Gitmeden önce çalışma saatlerini ve aynı gün erişimi doğrulayın.",
    verifiedLabel: "Doğrulandı",
    needsRecheckLabel: "Yeniden kontrol gerekli",
    noResultsTitle: "Bu filtrelerle eşleşen hizmet bulunamadı",
    noResultsBody:
      "Kan tahlili, ilaç yenileme, ruh sağlığı, sağlık kartı veya randevusuz gibi daha geniş bir arama deneyin. Tüm filtreleri temizleyip yeniden de başlayabilirsiniz.",
    notSureTitle: "Nereden başlayacağınızdan emin değil misiniz?",
    notSureBody:
      "Acil servise mi, ivedi bakıma mı, randevusuz bir kliniğe mi yoksa eczane desteğine mi ihtiyacınız olduğundan emin değilseniz, ivedi durum rehberi sayfasıyla başlayın veya hemşire tavsiyesi için Health811'i arayın.",
    needHelpNowCta: "Hemen Yardım Lazım",
    callHealth811: "Health811'i arayın",
  },
  filters: {
    audience: {
      newcomers: "Yeni gelenler",
      students: "Yalnızca öğrenci veya kampüs",
      "children-youth": "Çocuk veya genç",
      adults: "Yetişkinler",
      families: "Aileler",
      "unattached-patients": "Aile doktoru yok",
    },
    access: {
      "walk-in": "Randevusuz",
      appointment: "Randevulu",
      referral: "Sevk gerekli",
      virtual: "Sanal",
    },
    level: {
      emergency: "Acil",
      urgent: "İvedi",
      primary: "Birinci basamak",
      community: "Toplum",
    },
    payment: {
      public: "Kamu tarafından finanse edilen",
      community: "Toplum / kolay erişimli",
      mixed: "Karma kapsam",
      "student-plan": "Öğrenci planı",
      private: "Özel ödeme",
    },
    location: {
      downtown: "Şehir merkezi",
      "north-end": "Kuzey Yakası",
      "west-end": "Batı Yakası",
      campus: "Kampüs",
      online: "Çevrim içi",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Acil servis ve ivedi bakım",
      shortLabel: "Acil ve ivedi",
    },
    "primary-care": {
      label: "Birinci basamak bakım",
      shortLabel: "Birinci basamak",
    },
    "community-health": {
      label: "Toplum sağlığı merkezleri",
      shortLabel: "Toplum sağlığı",
    },
    "mental-health": {
      label: "Ruh sağlığı ve kriz desteği",
      shortLabel: "Ruh sağlığı",
    },
    "public-health": { label: "Halk sağlığı", shortLabel: "Halk sağlığı" },
    "labs-imaging": {
      label: "Laboratuvarlar ve görüntüleme",
      shortLabel: "Laboratuvar ve görüntüleme",
    },
    pharmacies: {
      label: "İlaçlar ve eczaneler",
      shortLabel: "Eczaneler",
    },
    "allied-community": {
      label: "Yardımcı sağlık ve toplum bakımı",
      shortLabel: "Yardımcı bakım",
    },
    "navigation-support": {
      label: "Yol gösterme ve kapsam desteği",
      shortLabel: "Yol gösterme",
    },
  },
  serviceCard: {
    whenToUse: "Ne zaman kullanmalı:",
    accessLabel: "Erişim",
    eligibilityLabel: "Uygunluk",
    eligibilityFallback:
      "Resmi kaynak aksini söylemedikçe genel halka açıktır.",
    hoursLabel: "Çalışma saatleri",
    phoneLabel: "Telefon",
    trustDetails: "Güven ve kaynak ayrıntıları",
    lastReview: "Son gözden geçirme:",
    officialSource: "Resmi kaynak",
    call: "Ara",
    officialWebsite: "Resmi web sitesi",
    directions: "Yol tarifi",
    viewDetails: "Ayrıntıları görüntüle",
  },
  serviceDetail: {
    backToServices: "Yerel hizmetlere geri dön",
    whenToUseTitle: "Bu hizmet ne zaman kullanılır",
    eligibilityTitle: "Uygunluk ve erişim",
    eligibilityFallback:
      "Bu hizmetin size açık olup olmadığından emin değilseniz resmi kaynağa bakın.",
    whatToBringTitle: "Yanınızda ne getirmeli",
    contactTitle: "İletişim ve işlemler",
    callNow: "Şimdi ara",
    officialWebsite: "Resmi web sitesi",
    directions: "Yol tarifi",
    trustTitle: "Güven ve kaynak",
    lastReview: "Son gözden geçirme:",
    viewOfficialSource: "Resmi kaynağı görüntüle",
  },
  verification: {
    verified: {
      label: "Resmi kaynağa göre doğrulandı",
      shortLabel: "Doğrulandı",
      description:
        "Temel ayrıntılar son gözden geçirme döngüsünde resmi bir kaynağa göre kontrol edildi.",
    },
    "partially-verified": {
      label: "Resmi kaynak bağlantılı",
      shortLabel: "Resmi bağlantı",
      description:
        "Resmi bir kaynak bağlantısı var, ancak bir veya birden fazla ayrıntı sık değişebilir ve gitmeden önce doğrulanmalıdır.",
    },
    "community-reported": {
      label: "Topluluk bildirimi",
      shortLabel: "Topluluk bildirimi",
      description:
        "Bu bilgi topluluk bildirimlerinden geldi ve hâlâ bağımsız doğrulamaya ihtiyaç duyuyor.",
    },
    "needs-recheck": {
      label: "Yeniden kontrol gerekli",
      shortLabel: "Yeniden kontrol gerekli",
      description:
        "Bu kayıt hâlâ yardımcı olabileceği için görünür kalıyor, ancak önemli ayrıntılar güncelliğini yitirmiş olabilir. Güvenmeden önce doğrulayın.",
    },
  },
  feedback: {
    badge: "Güncel olmayan bilgiyi bildirin",
    title: "Bu rehberi doğru tutmamıza yardım edin",
    body: "Bu, sayfa veya hizmet bağlamı içeren önceden doldurulmuş bir e-posta gönderir. Özel tıbbi bilgi eklemeyin.",
    issueTypeLabel: "Sorun türü",
    issueTypes: {
      "outdated hours": "Güncel olmayan çalışma saatleri",
      "wrong phone or website": "Yanlış telefon veya web sitesi",
      "eligibility or access issue": "Uygunluk veya erişim sorunu",
      "translation or accessibility problem":
        "Çeviri veya erişilebilirlik sorunu",
      "missing service or content": "Eksik hizmet veya içerik",
      other: "Diğer",
    },
    detailsLabel: "Neyi kontrol etmeliyiz?",
    detailsPlaceholder:
      "Örnek: telefon numarası değişti, bir klinik artık yalnızca randevuyla çalışıyor veya bir bağlantı bozuk.",
    contactLabel: "İsteğe bağlı iletişim",
    contactPlaceholder: "Yanıt istiyorsanız e-posta adresiniz",
    openEmail: "Bildirim e-postasını aç",
    copyText: "Bildirim metnini kopyala",
    thanks:
      "Teşekkürler. Bildirimler; güncelliğini yitirmiş sayfalara, bozuk bağlantılara ve yerel yeniden kontrol gerektiren kayıtlara öncelik vermemize yardımcı olur.",
    toastEmailTitle: "E-posta taslağı açıldı",
    toastEmailBody: "Bildiriminiz sayfa veya hizmet bağlamını içeriyor.",
    toastCopyTitle: "Sorun özeti kopyalandı",
    toastCopyBody:
      "Gerekirse kendi e-posta uygulamanıza yapıştırabilirsiniz.",
  },
  footer: {
    description:
      "Kingston, Ontario için sade dilde bir sağlık hizmeti rehberi. Bu site tıbbi tavsiye veya canlı bekleme süreleri sunmaz. Gitmeden önce zamana duyarlı ayrıntıları her zaman resmi kaynakla doğrulayın.",
    trustModelTitle: "Güven modeli",
    trustModelBody:
      "Resmi kaynak bağlantılarını, gözden geçirme tarihlerini ve hâlâ yeniden kontrol gerektiren kayıtları gösteririz. Bir şey yanlış görünüyorsa sayfadan veya hizmet kaydından bildirin.",
    beforeYouGo: {
      title: "Gitmeden önce",
      body: "Resmi çalışma saatlerini, randevu veya sevk gerekip gerekmediğini ve hangi belgeleri getirmeniz gerektiğini kontrol edin.",
    },
    languageHelp: {
      title: "Dil yardımı",
      body: "Bu rehberi Dil menüsünü kullanarak kendi dilinizde okuyun. Doğruluk önemli olduğunda klinik görüşmeler için tercüman isteyin.",
    },
    privacy: {
      title: "Gizlilik",
      body: "Bu site, tarayıcınızda saklanan yerel ve gizliliğe duyarlı iyileştirme kayıtları kullanır. Kişisel analiz verilerini uzak bir sunucuya göndermez.",
    },
    copyrightSuffix: "Kingston, Ontario için topluluk bilgi kaynağı.",
    disclaimer: "Sorumluluk reddi",
    privacyLink: "Gizlilik",
    sourcesLink: "Kaynaklar",
    reportLink: "Güncel olmayan bilgiyi bildirin",
  },
  notFound: {
    seoTitle: "Sayfa bulunamadı",
    seoDescription:
      "İstediğiniz sayfa bulunamadı. Acil yardım, yeni gelen temelleri, yerel hizmetler veya SSS ile başlayın.",
    badge: "404",
    title: "Bu sayfayı bulamadık",
    body: "Hızla bakım almaya çalışıyorsanız, ivedi durum rehberiyle başlayın veya Kingston hizmetler rehberinde arama yapın.",
    startHere: "Buradan Başlayın",
    needHelpNow: "Hemen Yardım Lazım",
    localServices: "Yerel Hizmetler",
    faq: "SSS",
  },
};

const homePage: PageContent = {
  title: "Kingston Sağlık Hizmetleri Rehberi",
  description:
    "Kingston, Ontario'da sağlık hizmeti bulmak için yeni gelenlere öncelik veren, sade dilde bir rehber.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Buradan Başlayın",
  description:
    "Kingston'a veya Ontario sağlık sistemine yeni misiniz? Sistemin nasıl işlediğini ve önce ne yapmanız gerektiğini öğrenmek için buradan başlayın.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Ontario'da sağlık hizmetleri",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Ontario'da sigortalı bakımın nasıl işlediğine genel bakış.",
    },
    {
      title: "Ontario: OHIP'e başvurun ve sağlık kartı alın",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Resmi OHIP başvuru ve uygunluk bilgileri.",
    },
    {
      title: "Ontario: Aile doktoru veya nurse practitioner bulun",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect ve birinci basamak bakıma erişim rehberi.",
    },
    {
      title: "Kanada: Interim Federal Health Program (Geçici Federal Sağlık Programı)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Uygun mülteciler ve mülteci başvurusu sahipleri için federal kapsam bilgileri.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Ontario'da sağlık sistemi nasıl işler",
      type: "default",
      content: `Ontario sağlık sistemi **birinci basamak bakım** (primary care) etrafında örgütlenmiştir. Birinci basamak bakım; rutin sağlık ihtiyaçları, süregelen hastalıklar, reçeteler, sevkler ve korunma için genellikle ilk başvurduğunuz yerdir. Birinci basamak sağlayıcınız bir aile doktoru, bir nurse practitioner (ileri uygulama hemşiresi), bir toplum sağlığı merkezi ekibi veya uygunsanız bir öğrenci sağlık kliniği olabilir.

**Sevk** (referral), bir klinisyenin sizi görmesi için başka bir hizmete veya uzmana başvurmasıdır. **İstem formu** (requisition), laboratuvara veya görüntüleme kliniğine hangi teste ihtiyacınız olduğunu söyleyen bir formdur.

İlk günden sistemin her parçasını anlamanız gerekmez. En önemli adımlar şunlardır: kapsamınızı öğrenin, ivedi sorunlar için nereye gideceğinizi bilin ve henüz bir sağlayıcınız yoksa düzenli bakım için bir plan yapın.`,
    },
    {
      id: "first-decisions",
      title: "İlk kararlar",
      type: "grid",
      gridItems: [
        {
          title: "Acil yardıma ihtiyacım olabilir",
          content:
            "Bugün veya bu gece ani bir sorununuz varsa, acil servis ile ivedi bakım karşılaştırması rehberinden başlayın.",
          icon: "alert",
          link: { text: "Hemen Yardım Lazım", url: "/need-help-now" },
        },
        {
          title: "Aile doktorum yok",
          content:
            "Aile doktorlarının, nurse practitioner'ların, toplum sağlığı merkezlerinin, randevusuz (walk-in) kliniklerin ve öğrenci kliniklerinin birbirini nasıl tamamladığını öğrenin.",
          icon: "stethoscope",
          link: { text: "Birinci Basamak Bakım Bulun", url: "/get-a-family-doctor" },
        },
        {
          title: "Nelerin kapsandığını anlamam gerekiyor",
          content:
            "OHIP, IFHP, özel sigorta, öğrenci planları, ilaç kapsamı ve yaygın cepten ödemeler hakkında okuyun.",
          icon: "shield",
          link: { text: "Masraflar ve Kapsam", url: "/costs-and-coverage" },
        },
        {
          title: "Dil yardımına ihtiyacım var",
          content:
            "Bu rehberi Dil menüsünü kullanarak 33 dilde okuyun ve klinik görüşmeler ile onam için tercüman desteğini sorun.",
          icon: "info",
          link: { text: "Erişilebilirlik ve dil", url: "/about#accessibility" },
        },
        {
          title: "Kan tahlili, görüntüleme veya ilaç yenileme lazım",
          content:
            "Bir ziyaretten sonraki pratik adımı bulmak için yerel rehberi kullanın.",
          icon: "file",
          link: { text: "Yerel Hizmetlerde Arayın", url: "/local-services" },
        },
        {
          title: "Nereden başlayacağımdan emin değilim",
          content:
            "Durumunuzun ne kadar acil olduğundan emin değilseniz, hemşire tavsiyesi için Health811'i arayın.",
          icon: "clock",
          link: { text: "Health811 ve ivedi durum rehberi", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "İlk haftanızda iyi ilk adımlar",
      type: "steps",
      items: [
        "Kapsamınızı öğrenin: OHIP, IFHP, özel sigorta ve öğrenci planlarının genellikle neleri kapsadığını okuyun. OHIP için uygun olabilecekseniz, olabildiğince erken başvurun.",
        "Acil planınızı seçin: Ne zaman 911'i arayacağınızı, ne zaman Health811 ile başlayacağınızı ve Kingston'da ivedi veya aynı gün bakımı nerede bulacağınızı bilin.",
        "Düzenli bakım için plan yapın: Düzenli bir sağlayıcınız yoksa aile doktorları, nurse practitioner'lar, toplum sağlığı merkezleri, öğrenci klinikleri, randevusuz klinikler ve sanal bakım seçeneklerinizi öğrenin.",
        "Sağlık bilgilerinizi bir arada tutun: Sağlık kartınızı veya IFHP belgelerinizi, ilaç listenizi, aşı kaydınızı ve istem formları ile sevklerin kopyalarını saklayın.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Henüz OHIP'iniz yoksa",
      type: "callout",
      content:
        "Kapsam yolunuzu öğrenmek için hastalanana kadar beklemeyin. OHIP'e uygunsanız erken başvurun. IFHP veya bir okul ya da özel sigorta planı kapsamındaysanız, bu bilgileri yanınızda bulundurun. Sigortasızsanız, ziyaretten önce ücretleri sorun ve uygun olduğunda toplum temelli veya kolay erişimli hizmetlere bakın.",
      link: { text: "Kapsam hakkında okuyun", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Bunları hazır tutun",
      type: "checklist",
      items: [
        "Sağlık kartınız, IFHP belgeleriniz veya sigorta bilgileriniz",
        "Yalnızca birkaç ilaç kullanıyor olsanız bile bir ilaç listesi",
        "Varsa, son gittiğiniz kliniğin veya sağlayıcının adı ve telefon numarası",
        "Yakın tarihli istem formları, sevkler, taburcu belgeleri veya test talimatları",
        "Sade bir dille sormak istediğiniz sorular",
        "Sormayı unutmamak için yazıya dökülmüş tercüman ihtiyaçlarınız",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Hemen Yardım mı Lazım?",
  description:
    "Bugün veya bu gece bir sağlık sorununuz olduğunda ve nereden başlayacağınızdan emin olmadığınızda bu sayfayı kullanın.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Health811'den tıbbi tavsiye alın",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Resmi 7/24 hemşire tavsiye hizmeti.",
    },
    {
      title: "9-8-8: İntihar Kriz Yardım Hattı",
      url: "https://988.ca/",
      note: "Resmi ulusal intihar kriz yardım hattı. 9-8-8'i arayın veya mesaj atın; ücretsiz, 7/24.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Acil servis, ivedi bakım ve görüntüleme bilgileri için resmi hastane ağı.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Resmi yerel ruh sağlığı ve kriz destek kuruluşu.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Acil servis mi, ivedi bakım mı?",
      type: "comparison",
      comparison: {
        left: {
          title: "Şu tür sorunlar için hemen acil servise gidin:",
          items: [
            "Göğüs ağrısı, ciddi nefes darlığı veya inme belirtileri",
            "Şiddetli kanama, büyük yaralanma veya bilinç kaybı",
            "Ani bilinç bulanıklığı, nöbet veya ciddi alerjik reaksiyon",
            "Beklemenin yaşamı veya bir uzvu riske atabileceği bir güvenlik acili",
          ],
        },
        right: {
          title:
            "Şu tür sorunlar için ivedi bakım, Health811 veya aynı gün hizmet veren bir klinikle başlayın:",
          items: [
            "Burkulmalar, küçük kesikler, döküntüler, kulak ağrısı veya acil uyarı işaretleri olmayan ateş",
            "Rutin bir randevuyu bekleyemeyecek reçete yenileme sorunları",
            "Bu gece ivedi bakıma ihtiyacınız olup olmadığına dair sorular",
            "İvedi hissettiren ama açıkça hayati tehlike içermeyen bir sorun",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Yaygın mesai sonrası durumlar",
      type: "table",
      columns: ["Durum", "İyi bir ilk adım", "Hatırlanacaklar"],
      rows: [
        {
          cells: [
            "Bunun ne kadar acil olduğundan emin değilim",
            "Health811'i arayın",
            "Bir hemşire evde kalmanız mı, ivedi bakıma mı yoksa acil servise mi gitmeniz gerektiğine karar vermenize yardımcı olabilir.",
          ],
        },
        {
          cells: [
            "Doktorum kapalı ve bu gece tavsiyeye ihtiyacım var",
            "Health811 veya ivedi bakım rehberi",
            "Acil uyarı işaretleri yoksa, acil servisin tek seçeneğiniz olduğunu varsaymayın.",
          ],
        },
        {
          cells: [
            "Çocuğum için bakıma ihtiyacım var",
            "Aynı acil uyarı işaretlerini kullanın; sonra aynı gün bakım arayın veya emin değilseniz Health811'i arayın",
            "Mümkünse çocuğun sağlık kartını, ilaç listesini ve belirtilerin zaman çizelgesini getirin.",
          ],
        },
        {
          cells: [
            "Bu gece ruh sağlığı yardımına ihtiyacım var",
            "9-8-8'i (İntihar Kriz Yardım Hattı) arayın veya mesaj atın ya da 7/24 AMHS-KFLA kriz hattını arayın",
            "Güvenlik için ani bir risk varsa 911'i arayın.",
          ],
        },
      ],
      caption:
        "Bu tablo yalnızca genel rehberliktir. Birisi ani bir tehlike altında olabilirse 911'i arayın.",
    },
    {
      id: "kingston-start-points",
      title: "Kingston'da başlangıç noktaları",
      type: "grid",
      gridItems: [
        {
          title: "Acil Servis",
          content:
            "Hayati tehlike içeren veya içerebilecek sorunlar için acil servisi kullanın.",
          icon: "alert",
          link: {
            text: "Acil ve ivedi bakım kayıtları",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Urgent Care Centre (İvedi Bakım Merkezi)",
          content:
            "Bekleyemeyen ama açık bir acil durum olmayan birçok aynı gün sorunu için yararlıdır.",
          icon: "clock",
          link: {
            text: "İvedi ve aynı gün bakım",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Nereye gideceğinizden emin değilseniz telefonla veya çevrim içi hemşire tavsiyesi. Telefon desteği birçok dilde mevcuttur.",
          icon: "info",
          link: { text: "Health811 kaydı", url: "/local-services/health811" },
        },
        {
          title: "Ruh sağlığı kriz desteği",
          content:
            "Her zaman 9-8-8'i (İntihar Kriz Yardım Hattı) arayın veya mesaj atın ya da 7/24 AMHS-KFLA kriz hattı gibi yerel kriz desteğini kullanın.",
          icon: "heart",
          link: { text: "Ruh sağlığı kayıtları", url: "/local-services?category=mental-health" },
        },
        {
          title: "Cinsel şiddet desteği",
          content:
            "Acil duygusal destek, savunuculuk veya güvenlik planlamasına ihtiyacınız varsa uzmanlaşmış kriz desteğini kullanın.",
          icon: "shield",
          link: {
            text: "Destek kayıtları",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Öğrenciler için ivedi seçenekler",
          content:
            "Öğrenciyseniz, acil olmayan ihtiyaçlar için kampüs sağlık hizmetinizin en iyi ilk durak olup olmadığını kontrol edin.",
          icon: "stethoscope",
          link: { text: "Öğrenci sağlık kayıtları", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Hâlâ emin değilseniz",
      type: "callout",
      content:
        "Sorun açıkça hayati tehlike içermiyorsa ama beklemekten endişe ediyorsanız, Health811 ile başlayın. Birisi güvende olmayabilirse, hızla kötüleşiyor olabilirse veya doğru yardıma zamanında ulaşamıyorsanız acil servisleri kullanın.",
      link: { text: "Health811'i arayın", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Mümkünse bunları getirin",
      type: "checklist",
      items: [
        "Sağlık kartı, IFHP belgeleri veya sahip olduğunuz herhangi bir sigorta kartı",
        "İlaç listesi veya ilaç kutularının fotoğrafları",
        "Belirtilerin başladığı zaman ve onları kötüleştiren herhangi bir şey",
        "Sonradan hatırlayamayacak kadar stresli olabileceğinizi düşünüyorsanız yazıya dökülmüş tercüman ihtiyaçlarınız",
        "Telefon şarj cihazı ve size iyi gelecekse bir destek kişisi",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Birinci Basamak Bakım Bulma",
  description:
    "Henüz bir sağlayıcınız yoksa, Kingston'da düzenli sağlık hizmetine giden farklı yolları öğrenin.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Aile doktoru veya nurse practitioner bulun",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Resmi Health Care Connect rehberi.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Yerel toplum sağlığı merkezi hizmetleri hakkında resmi bilgiler.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Queen's öğrencileri için resmi öğrenci sağlık bilgileri.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "St. Lawrence College öğrencileri için resmi öğrenci sağlık bilgileri.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Birinci basamak bakım ne demektir",
      type: "default",
      content:
        "Birinci basamak bakım (primary care), rutin sağlık ihtiyaçları için genellikle ilk gittiğiniz yerdir. Buna kontroller, ilaç yenilemeleri, kronik hastalık bakımı, sevkler, koruyucu bakım ve ivedi sorunlardan sonraki takip dahildir.\n\nKingston'da düzenli birinci basamak bakım yolunuz bir aile doktoru, bir nurse practitioner, bir toplum sağlığı merkezi, bir kampüs kliniği veya daha kalıcı bir bakım beklerken geçici seçeneklerin bir birleşimi olabilir.",
    },
    {
      id: "access-matrix",
      title: "Birinci basamak bakıma erişim yolları",
      type: "table",
      columns: ["Yol", "En uygun olduğu durumlar", "Kimler kullanabilir", "Nasıl başlanır"],
      rows: [
        {
          cells: [
            "Aile doktoru veya nurse practitioner",
            "Süreklilik gösteren düzenli bakım ve uzun vadeli sağlık planlaması",
            "Bir sağlayıcının hasta listesine kaydolabilen hastalar",
            "Health Care Connect'i kullanın ve yerel boş yerleri takip edin",
          ],
        },
        {
          cells: [
            "Toplum sağlığı merkezi",
            "Toplum temelli bakım, kolay erişimli destek ve bazı yeni gelen veya karmaşık ihtiyaç bakımı",
            "Uygunluk programa ve kayıt durumuna göre değişir",
            "Kuruluşla doğrudan iletişime geçin ve kayıt sürecini sorun",
          ],
        },
        {
          cells: [
            "Öğrenci sağlık hizmeti",
            "Kayıtlı öğrenciler için daha hızlı erişim",
            "Yalnızca okul üzerinden uygunluk kazanan öğrenciler",
            "Kampüs sağlık veya esenlik hizmetinizi kullanın",
          ],
        },
        {
          cells: [
            "Randevusuz (walk-in) klinik veya ivedi aynı gün bakım",
            "Beklerken veya düzenli sağlayıcınız müsait olmadığında kısa süreli bakım",
            "Günlük kabul kurallarına tabi olarak genel halk",
            "Gitmeden önce güncel erişimi kontrol edin",
          ],
        },
        {
          cells: [
            "Sanal birinci basamak bakım",
            "Bazı ilaç yenileme, tavsiye ve rutin konular",
            "Sağlayıcıya ve kapsama göre değişir",
            "Sağlayıcının çevrim içi olarak neleri güvenle yönetip yönetemeyeceğini kontrol edin",
          ],
        },
      ],
      caption:
        "En iyi yol; uygunluğunuza, aciliyetinize ve kısa süreli mi yoksa sürekli bakıma mı ihtiyaç duyduğunuza bağlıdır.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Düzenli bir sağlayıcınız yoksa",
      type: "steps",
      items: [
        "Resmi eyalet yolu üzerinden kaydolun: Aile doktorunuz veya nurse practitioner'ınız yoksa Health Care Connect'i kullanın.",
        "Kampüs veya toplum sağlığı seçeneklerine uygun olup olmadığınızı kontrol edin: Öğrenciler okul klinikleriyle başlamalıdır. Bazı toplum sağlığı hizmetlerinin belirli kayıt öncelikleri vardır.",
        "Güvenli bir geçici plan oluşturun: Beklerken hangi randevusuz, ivedi, sanal, eczane ve ruh sağlığı hizmetlerini kullanabileceğinizi bilin.",
        "Kendi kayıtlarınızı tutun: İlaç listelerini, test sonuçlarını, sevkleri ve gördüğünüz klinisyenlerin adlarını saklayın.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Beklerken ne yapmalı",
      type: "checklist",
      items: [
        "Uygun olduğunda kısa süreli ihtiyaçlar için randevusuz, ivedi veya sanal bakımı kullanın",
        "Eczaneye hangi ilaç yenileme yardımının veya küçük rahatsızlık bakımının mevcut olabileceğini sorun",
        "Güncel tek bir ilaç listesi tutun ve her ziyarete yanınızda götürün",
        "Bakım parçalı olduğunda önemli sonuçların veya taburcu belgelerinin kopyalarını getirin",
        "Mümkün olduğunda takip için aynı kliniği kullanın; böylece bakımınız biraz daha tutarlı olur",
      ],
    },
    {
      id: "next-best-option",
      title: "İhtiyacınız ivedi ama acil durum değilse",
      type: "callout",
      content:
        "Aile doktorunuzun olmaması, önemli bakımı ertelemeniz gerektiği anlamına gelmez. Önünüzdeki sorun için doğru kısa süreli seçeneği kullanın; ivedi sorun tedavi edildikten sonra bakımın sürekliliği için bir plan yapın.",
      link: { text: "Birinci basamak bakım seçeneklerini arayın", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Masraflar ve Kapsam",
  description:
    "OHIP, IFHP, Canadian Dental Care Plan (Kanada Diş Bakım Planı), öğrenci veya özel sigorta planları ve yaygın cepten ödemeler için sade dilde kapsam rehberi.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: OHIP'e başvurun ve sağlık kartı alın",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Resmi OHIP rehberi.",
    },
    {
      title: "Kanada: Interim Federal Health Program (Geçici Federal Sağlık Programı)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Resmi IFHP kapsam bilgileri.",
    },
    {
      title: "Ontario Drug Benefit (Ontario İlaç Yardımı)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Resmi eyalet ilaç kapsamı rehberi.",
    },
    {
      title: "Ontario: Yüksek reçeteli ilaç maliyetleri için yardım alın",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Resmi Trillium Drug Program rehberi.",
    },
    {
      title: "Kanada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Resmi federal diş kapsamı programı bilgileri ve uygunluk.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Kapsamın temelleri",
      type: "default",
      content:
        "Ontario'da kapsam; yasal statünüze, yaşınıza, gelirinize, program uygunluğunuza ve bir okul veya özel sigorta planınızın olup olmadığına bağlıdır.\n\nUygun OHIP hastaları için tıbben gerekli birçok doktor ve hastane hizmeti kapsanır. Bu, her şeyin ücretsiz olduğu anlamına **gelmez**. İlaçlar, diş bakımı, göz bakımı, formlar, hastalık izin notları ve birçok yardımcı sağlık hizmeti genellikle ayrı kapsam veya cepten ödeme gerektirir.\n\nYeniyseniz iyi bir haber: **OHIP için bekleme süresi yoktur**. Uygunsanız, Ontario'ya varır varmaz başvurabilirsiniz ve kapsam başvurunuz onaylandığında başlar. Başvurmak için hastalanana kadar beklemeyin.",
    },
    {
      id: "coverage-matrix",
      title: "Kapsam yollarına bir bakış",
      type: "table",
      columns: [
        "Kapsam türü",
        "Genellikle yardımcı olduğu alanlar",
        "Yine de kapsanmayabilecekler",
        "Sonraki adım",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Tıbben gerekli birçok doktor ve hastane hizmeti",
            "Birçok ilaç, diş bakımı, göz bakımı ve formlar",
            "Uygunsanız başvurun ve kartınızı güncel tutun",
          ],
        },
        {
          cells: [
            "IFHP",
            "Federal programa göre uygun mülteciler ve mülteci başvurusu sahipleri için kapsam",
            "Ayrıntılar kategoriye ve hizmete göre değişir",
            "Resmi IFHP rehberine bakın ve kliniğin veya eczanenin kabul edip etmediğini sorun",
          ],
        },
        {
          cells: [
            "Okul veya özel sigorta",
            "Genellikle ilaçlar, danışmanlık, diş, göz ve yardımcı sağlık hizmetlerinde yardımcı olur",
            "Kapsam limitleri, katkı payları ve ağ kuralları değişir",
            "Bir hizmetin kapsandığını varsaymadan önce plan kitapçığını okuyun",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Özel diş sigortasına erişimi olmayan ve düzeltilmiş aile geliri $90,000'ın altında olan uygun sakinler için diş kapsamı",
            "Her işlem kapsanmaz ve gelire bağlı olarak katkı payı uygulanabilir",
            "Uygunluğu kontrol edin ve resmi Kanada Hükümeti CDCP sayfasından başvurun",
          ],
        },
        {
          cells: [
            "Aktif kapsam yok",
            "Bazı hizmetlere yine de erişebilirsiniz, ancak ücretler uygulanabilir",
            "Ziyaretler, testler veya ilaçlar için maliyetler önemli olabilir",
            "Ziyaretten önce ücretleri sorun ve uygun olduğunda toplum seçeneklerine bakın",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Genellikle tam kapsanmayanlar",
      type: "checklist",
      items: [
        "Bir kamu programına uygun değilseniz veya başka bir planınız yoksa birçok reçeteli ilaç",
        "Canadian Dental Care Plan, Healthy Smiles Ontario, bir toplum diş programı veya bir yan haklar planına uygun değilseniz diş bakımı",
        "Belirli uygunluk yolları dışında göz bakımı",
        "Bir program veya plan kapsamadığı sürece fizyoterapi, danışmanlık, masaj ve diğer yardımcı sağlık hizmetleri",
        "Formlar, yazılar, kaçırılan randevu ücretleri ve diğer birçok idari ücret",
      ],
    },
    {
      id: "drug-coverage",
      title: "İlaç kapsamı yolları",
      type: "default",
      content:
        "İlaç kapsamı, yeni gelenlerin sıkça şaşırdığı bir konudur. Doktor ziyareti kapsanmış olabilir, ancak reçete yine de para tutabilir.\n\nKamu ilaç programları yaşa, gelire ve uygunluğa bağlı olarak yardımcı olabilir. **Ontario Drug Benefit** (Ontario İlaç Yardımı), 65 yaş ve üzeri kişiler ile belirli programlardaki kişiler için birçok ilacı kapsar; **OHIP+** ise özel planı olmayan 24 yaş ve altı kişiler için birçok reçeteyi kapsar. Ontario'da ayrıca, hane gelirine kıyasla yüksek reçete maliyetleri olan bazı kişiler için **Trillium Drug Program** (Trillium İlaç Programı) vardır. Bir okul veya özel planınız varsa, kamu kapsamıyla birlikte mi çalıştığını yoksa onun yerine mi geçtiğini kontrol edin.",
    },
    {
      id: "coverage-scenarios",
      title: "Yaygın kapsam soruları",
      type: "faq",
      faqs: [
        {
          question: "Henüz OHIP'im yok. Yine de bakım alabilir miyim?",
          answer:
            "Evet, ancak ücretler uygulanabilir ve en iyi yol statünüze ve aciliyetinize bağlıdır. Mümkün olduğunda acil olmayan bakımdan önce maliyetleri sorun ve size uyuyorsa IFHP veya okul ya da özel plan uygunluğuna bakın.",
        },
        {
          question: "Uluslararası öğrenciyim. OHIP tek seçeneğim mi?",
          answer:
            "Her zaman değil. Birçok öğrenci OHIP yerine bir okul veya özel sigorta planına güvenir. Nelerin kapsandığını doğrulamak için okulunuzun resmi plan belgelerini ve öğrenci sağlık hizmetlerini kullanın.",
        },
        {
          question: "Randevum kapsandıysa ilacım ücretsiz mi olacak?",
          answer:
            "Şart değil. Randevu kapsamı ile reçete kapsamı genellikle ayrıdır.",
        },
        {
          question: "Diş bakımı kapsanıyor mu?",
          answer:
            "Diş bakımı çoğu yetişkin için OHIP'ten ayrıdır. Federal Canadian Dental Care Plan artık özel diş sigortası olmayan ve düzeltilmiş aile geliri $90,000'ın altında olan birçok sakini kapsıyor — uygun olmak için genellikle Kanada'da vergi beyannamesi vermiş olmanız gerekir. Düşük gelirli ailelerin çocukları Healthy Smiles Ontario için uygun olabilir ve Kingston'da belirli programlardaki kişiler için bir toplum diş kliniği vardır.",
        },
        {
          question: "Bir hizmetin kamu, toplum veya özel olduğunu nasıl bilebilirim?",
          answer:
            "Rehber filtrelerini kullanın ve kayıt ayrıntılarına bakın. Emin değilseniz, randevu almadan önce hizmetle iletişime geçin.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Sağlık Ziyaretiniz",
  description:
    "Bir sağlık ziyaretinde ne getirmeli, nasıl soru sormalı ve nasıl güvenli iletişim kurmalı.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Ontario'da sağlık hizmetleri",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Genel sistem rehberi.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Yanınızda ne getirmeli",
      type: "checklist",
      items: [
        "Sağlık kartınız, IFHP belgeleriniz veya diğer sigorta bilgileriniz",
        "Vitaminler ve reçetesiz ilaçlar dahil eksiksiz bir ilaç listesi",
        "Belirtilerin adları, ne zaman başladıkları ve nelerin değiştiği",
        "Ayrılmadan önce yanıtlanmasını istediğiniz sorular",
        "Yakın tarihli istem formları, sevkler, taburcu belgeleri veya test sonuçları",
        "Sormayı unutmamak için yazıya dökülmüş tercüman ihtiyaçlarınız",
      ],
    },
    {
      id: "during-the-visit",
      title: "Ziyaret sırasında",
      type: "steps",
      items: [
        "Ana sorununuzla başlayın: Birçok randevu kısadır; bu yüzden bugün en çok önem taşıyan endişeyle başlayın.",
        "Sade bir dil kullanın: 'O kelimeyi anlamadım' veya 'Bunu daha basit bir şekilde açıklayabilir misiniz?' demek sorun değildir.",
        "Planı geri tekrarlayın: Ayrılmadan önce sonraki adımları yüksek sesle söyleyin; böylece bir test, sevk, ilaç yenileme veya takip randevusu gerekip gerekmediğini bilirsiniz.",
        "İşler kötüye giderse ne olacağını sorun: Ne zaman geri arayacağınızı, ne zaman ivedi bakımı ve ne zaman acil servisi kullanacağınızı bilmelisiniz.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Tercüman ve iletişim yardımı",
      type: "default",
      content:
        "Dil yardımına ihtiyacınız varsa erken isteyin. Randevunun sonuna kadar beklemeyin. Bu web sitesini Dil menüsünü kullanarak birkaç dilde okuyabilirsiniz, ancak web sitesi çevirisi; tedavi kararları, ilaç talimatları veya onam için tercüman desteğinin yerini almamalıdır.\n\nŞöyle diyebilirsiniz: **'Bir tercümana ihtiyacım var, lütfen.'** Health811 (811'i arayın) de birçok dilde telefon desteği sunar. Yanınıza bir destek kişisi gelirse, karmaşık veya hassas tıbbi bilgileri çevirmek için bir aile üyesinin her zaman en iyi veya en güvenli kişi olmayabileceğini unutmayın.",
    },
    {
      id: "questions-to-ask",
      title: "Sormaya değer sorular",
      type: "checklist",
      items: [
        "Sizce ne oluyor?",
        "Bundan sonra ne yapmalıyım?",
        "Bir test, istem formu, sevk veya takip ziyareti gerekiyor mu?",
        "Sonuçları ne zaman duymayı beklemeliyim?",
        "Hangi uyarı işaretleri geri aramam veya ivedi yardım almam gerektiği anlamına gelir?",
      ],
    },
    {
      id: "privacy",
      title: "Gizlilik ve onam",
      type: "default",
      content:
        "Sağlık bilgileriniz hassastır. Bilgilerinizi kimin göreceğinden emin değilseniz, sorun. Bir formu, onam görüşmesini veya tedavi planını anlamıyorsanız, süreci yavaşlatın ve daha açık bir açıklama isteyin.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Ziyaretten Sonra",
  description:
    "İstem formları, test sonuçları, sevkler ve ne zaman geri aramanız gerektiği dahil, bir ziyaretten sonra neler olduğunu öğrenin.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Yerel hastane sistemi bilgileri.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Toplum laboratuvarı süreci ve hasta portalı bilgileri.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Bir ziyaretten sonra genellikle ne olur",
      type: "steps",
      items: [
        "Bir planla ayrılırsınız: Bu plan bir ilaç, bir istem formu, bir sevk, bir takip randevusu veya uyarı işaretlerini izleme talimatlarını içerebilir.",
        "Sonraki adımı kendiniz atmanız gerekebilir: Örneğin kan tahlili, görüntüleme, eczaneden ilaç alma veya takip ziyareti için randevu almanız gerekebilir.",
        "Sonuçlar genellikle testi isteyen klinisyene geri gider: Laboratuvar veya görüntüleme merkezi sonucu size o anda açıklamayabilir.",
        "Her normal sonuç için aranmayabilirsiniz: Ne bekleyeceğinizi bilmek için kliniğin takip sürecinin nasıl işlediğini sorun.",
      ],
    },
    {
      id: "common-terms",
      title: "Yaygın ziyaret sonrası terimler",
      type: "table",
      columns: ["Terim", "Sade dilde anlamı", "Genellikle bir sonraki adımınız"],
      rows: [
        {
          cells: [
            "İstem formu (requisition)",
            "Laboratuvara veya görüntüleme kliniğine hangi teste ihtiyacınız olduğunu söyleyen bir form",
            "Test için randevu alın veya teste gidin ve mümkünse bir kopyasını saklayın",
          ],
        },
        {
          cells: [
            "Sevk (referral)",
            "Bir klinisyenden başka bir hizmete veya uzmana yapılan bir başvuru",
            "İletişime geçilmesini bekleyin; takip etmeniz söylendiyse ve bir şey olmazsa geri arayın",
          ],
        },
        {
          cells: [
            "Takip (follow-up)",
            "Tedavi, test veya belirtilerdeki bir değişiklik sonrası yapılan kontrol",
            "Ayrılmadan önce takibin ne zaman ve nasıl olacağını sorun",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Ne zaman geri aramalı",
      type: "checklist",
      items: [
        "İstem formunu, sevki veya ilaç talimatlarını anlamıyorsanız",
        "Birinin sizinle iletişime geçeceği söylendi ve beklenen süre içinde haber alamadıysanız",
        "Belirtileriniz kötüleşiyorsa veya size söylenen şekilde iyileşmiyorsa",
        "Eczane, laboratuvar veya görüntüleme kliniği evraklarda bir eksik olduğunu söylediyse",
        "Bir sonucun gözden kaçmış olabileceğini düşünüyorsanız veya hâlâ endişeliyseniz",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Yaygın senaryolar",
      type: "faq",
      faqs: [
        {
          question: "Ziyaretten sonra kan tahliline ihtiyacım var. Ne yapmalıyım?",
          answer:
            "Bir istem formunuz olup olmadığını ve laboratuvarın randevu isteyip istemediğini kontrol edin. Sonra bir laboratuvar konumu bulmak için rehberi kullanın. İstem formunu ve kapsam bilgilerinizi yanınızda getirin.",
        },
        {
          question: "İstem formunu veya sevk formunu anlamıyorum.",
          answer:
            "Formu veren kliniği arayın ve sade bir dille açıklamalarını isteyin. Formun ne için olduğunu, nereye gitmesi gerektiğini ve kendinizin bir randevu alması gerekip gerekmediğini sormak gayet makuldür.",
        },
        {
          question: "Test sonuçlarını kim takip eder?",
          answer:
            "Genellikle testi isteyen klinisyen. O klinisyenin ofisine, normal ve anormal sonuçlar için olağan süreçlerinin ne olduğunu sorun.",
        },
        {
          question: "Sevkler ne kadar sürer?",
          answer:
            "Sevk süreleri çok değişkendir. Durumunuz için ne tür bir beklemenin normal olduğunu ve haber alamazsanız ne yapmanız gerektiğini sorun.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Yararlı sonraki adımlar",
      type: "grid",
      gridItems: [
        {
          title: "Laboratuvar ve görüntüleme bulun",
          content:
            "Kan tahlili, röntgen, ultrason ve görüntüleme kayıtları için rehberi kullanın.",
          icon: "file",
          link: { text: "Laboratuvarlar ve görüntüleme", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Eczane bulun",
          content:
            "Eczaneler, ilaç yenileme yardımı ve ilaç desteği için rehberi kullanın.",
          icon: "shield",
          link: { text: "Eczaneler", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Takip bakımı mı planlamanız gerekiyor?",
          content:
            "Uzun vadeli takibin nerede olması gerektiğini bilmiyorsanız birinci basamak bakım sayfasını kullanın.",
          icon: "stethoscope",
          link: { text: "Birinci Basamak Bakım Bulun", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "İlaçlar ve Eczaneler",
  description:
    "Reçeteleri, ilaç yenilemeyi, eczacı yardımını ve Ontario'da ilaçlar için nasıl ödeme yapıldığını anlayın.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Eczacılar neler yapabilir",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Resmi eyalet eczacı ve eczane bilgileri.",
    },
    {
      title: "Ontario Drug Benefit (Ontario İlaç Yardımı)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Resmi eyalet ilaç kapsamı rehberi.",
    },
    {
      title: "Ontario: Yüksek reçeteli ilaç maliyetleri için yardım alın",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Resmi Trillium Drug Program rehberi.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Bir eczacı nelerde yardımcı olabilir",
      type: "default",
      content:
        "Eczacılar ilaç vermekten fazlasını yapar. Bir ilacın nasıl güvenle kullanılacağını açıklayabilir, ilaç etkileşimlerini kontrol edebilir ve yan etkileri gözden geçirebilirler.\n\nOntario'da eczacılar ayrıca **19 yaygın küçük rahatsızlık için değerlendirme yapabilir ve reçete yazabilir** — buna göz nezlesi (konjonktivit), uçuk, idrar yolu enfeksiyonları (kadınlarda), böcek ısırıkları ve mevsimsel alerjiler dahildir. Değerlendirme Ontario sağlık kartınızla ücretsizdir ve durum listesi genişlemeye devam edebilir.\n\nEczane ayrıca şu tür pratik soruları sormak için en iyi yerlerden biridir: **Bu ilaç yenileme acil mi? Daha ucuz bir seçenek var mı? Bir dozu kaçırdıysam ne yapmalıyım?**",
    },
    {
      id: "fill-a-prescription",
      title: "Bir reçete nasıl yaptırılır",
      type: "steps",
      items: [
        "Reçeteyi alın: Kağıt, fakslanmış veya elektronik olarak gönderilmiş olabilir.",
        "Eczaneyi seçin: Düzenli olarak aynı eczaneyi kullanmak, ilaç etkileşimlerini ve yenileme geçmişi sorunlarını yakalamalarına yardımcı olur.",
        "Zamanlamayı ve maliyeti sorun: Eczane size ilacın ne zaman hazır olacağını ve planınızın bunu karşılayıp karşılamadığını söyleyebilir.",
        "Danışmanlığı dinleyin: İlacın ne için olduğunu, nasıl kullanılacağını ve işe yaramazsa ne zaman geri aramanız gerektiğini sorun.",
      ],
    },
    {
      id: "refill-options",
      title: "İlaç yenileme ve ilaç sorunları",
      type: "table",
      columns: ["Durum", "İyi bir ilk adım", "Neden"],
      rows: [
        {
          cells: [
            "Rutin bir ilaç yenilemeye ihtiyacım var",
            "Her zamanki eczanenizle veya düzenli klinisyeninizle başlayın",
            "Yenileme mi, yeniden reçete mi yoksa yeni bir randevu mu gerektiğini size söyleyebilirler",
          ],
        },
        {
          cells: [
            "Doktorum müsait değil ve ilacım bitebilir",
            "Eczaneye hangi seçeneklerin mevcut olduğunu sorun; gerekirse randevusuz, sanal veya ivedi bakımı kullanın",
            "En güvenli sonraki adım ilaca ve durumunuza bağlıdır",
          ],
        },
        {
          cells: [
            "Bu ilacı nasıl kullanacağımı anlamıyorum",
            "Eczacıdan sade bir dille tekrar açıklamasını isteyin",
            "Bu, güvenli ilaç kullanımının bir parçasıdır",
          ],
        },
        {
          cells: [
            "İlaç çok pahalı",
            "Jenerik (eşdeğer) ilaçları, plan kapsamını ve kamu programlarını sorun",
            "İlaç maliyetleri değişir ve kapsam genellikle ziyaretin kendisinden ayrıdır",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "İlaçlar için olası ödeme yolları",
      type: "checklist",
      items: [
        "Uygunsanız bir kamu ilaç programı",
        "Bir okul veya özel sigorta planı",
        "Kamu ve özel kapsamın bir birleşimi",
        "Hiçbir program ilacı kapsamıyorsa cepten ödeme",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Yerel eczane yardımına mı ihtiyacınız var?",
      type: "callout",
      content:
        "Bir ilaç sorununu hızla çözmeye çalışırken eczaneleri, ilaç yenileme desteğini ve sanal veya aynı gün seçeneklerini bulmak için rehberi kullanın.",
      link: { text: "Eczane kayıtlarını arayın", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Ruh Sağlığı Desteği",
  description:
    "Kingston'da yerel ruh sağlığı, danışmanlık, gençlik desteği ve kriz yolları.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: İntihar Kriz Yardım Hattı",
      url: "https://988.ca/",
      note: "Resmi ulusal intihar kriz yardım hattı. 9-8-8'i arayın veya mesaj atın; ücretsiz, 7/24.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Resmi yetişkin ruh sağlığı ve kriz desteği bilgileri.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Resmi Ontario ruh sağlığı ve bağımlılık yardım hattı.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Resmi çocuk ve genç ruh sağlığı bilgileri.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Birisi güvende olmayabilirse",
      type: "callout",
      content:
        "Yaşam veya güvenlik için ani bir risk varsa 911'i arayın. İntihar düşünceleri veya dayanılmaz bir sıkıntı için her zaman **9-8-8'i arayabilir veya mesaj atabilirsiniz** (İntihar Kriz Yardım Hattı) — ücretsizdir, gizlidir ve İngilizce ile Fransızca olarak 7/24 hizmet verir. Ayrıca 7/24 AMHS-KFLA kriz hattını 613-544-4229 numarasından arayabilirsiniz. Rutin bir randevuyu beklemeyin.",
      link: { text: "Ruh sağlığı kayıtları", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Destek türleri",
      type: "grid",
      gridItems: [
        {
          title: "Kriz desteği",
          content:
            "Ani sıkıntı, güvenlik endişeleri veya beklemenin güvenli olmadığı durumlarda bunu kullanın.",
          icon: "alert",
        },
        {
          title: "İvedi destek",
          content:
            "Durum ciddi olduğunda ve yakında yardıma ihtiyacınız olduğunda, ancak ani bir hayati tehlike acili olmadığında bunu kullanın.",
          icon: "clock",
        },
        {
          title: "Rutin danışmanlık",
          content:
            "Süregelen kaygı, depresyon, stres, yas, ilişki sorunları veya yaşam geçişleri için bunu kullanın.",
          icon: "heart",
        },
        {
          title: "Çocuk ve gençlik hizmetleri",
          content:
            "Bakıma ihtiyaç duyan kişi bir çocuk veya ergen olduğunda uzmanlaşmış gençlik ruh sağlığı hizmetlerini kullanın.",
          icon: "info",
        },
        {
          title: "Kampüs desteği",
          content:
            "Öğrenciler için en iyi ilk adım, kampüs esenlik veya danışmanlık yolları olabilir.",
          icon: "stethoscope",
        },
        {
          title: "Cinsel şiddet desteği",
          content:
            "Cinsel şiddet sonrası kriz, danışmanlık, savunuculuk ve güvenlik planlaması için uzmanlaşmış destek kullanın.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Yaygın durumlarda nereden başlamalı",
      type: "table",
      columns: ["Durum", "En iyi ilk durak", "Neden"],
      rows: [
        {
          cells: [
            "Bu gece ruh sağlığı yardımına ihtiyacım var",
            "9-8-8'i arayın veya mesaj atın, AMHS-KFLA kriz hattını arayın veya güvenlik risk altındaysa acil servisi kullanın",
            "Durum güvensiz hissettiriyorsa rutin bir randevuyu beklemeyin",
          ],
        },
        {
          cells: [
            "Danışmanlığa ihtiyacım var ama şu anda güvendeyim",
            "Toplum danışmanlığı, aile doktoru, nurse practitioner veya özel plan destekleri",
            "Bunlar sürekli bakım ve sevkler konusunda yardımcı olabilir",
          ],
        },
        {
          cells: [
            "Çocuğum için yardıma ihtiyacım var",
            "Çocuk veya gençlik ruh sağlığı hizmetleri ve gerekirse ivedi durum rehberi",
            "Çocukların ve gençlerin genellikle ayrı yolları vardır",
          ],
        },
        {
          cells: [
            "Öğrenciyim",
            "Durum güvensiz veya ağır olmadıkça önce kampüs sağlık veya danışmanlık hizmetleri",
            "Kampüs hizmetleri öğrenciler için en hızlı giriş noktası olabilir",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Yaygın sorular",
      type: "faq",
      faqs: [
        {
          question: "Şu anda kimi arayabilirim veya kime mesaj atabilirim?",
          answer:
            "Her zaman, ücretsiz, 7/24 **9-8-8**'i (İntihar Kriz Yardım Hattı) arayın veya mesaj atın — sevk gerekmez. Kingston'da 613-544-4229 numaralı AMHS-KFLA kriz hattı da 7/24 yanıt verir. Güvenlik ani risk altındaysa 911'i arayın.",
        },
        {
          question: "Bunun bir kriz sayılıp sayılmadığını bilmiyorsam ne olur?",
          answer:
            "Birisi güvende olmayabilirse, kesin olmasını beklemeyin. Kriz desteğini veya acil servisleri kullanın.",
        },
        {
          question: "Bu gece yardıma ihtiyacım var ama kimi arayacağımdan emin değilsem ne yapmalıyım?",
          answer:
            "Sabaha kadar beklemek yerine yerel ruh sağlığı rehber sayfasını veya kriz destek yolunu kullanın.",
        },
        {
          question: "Yardıma ihtiyacı olan kişi çocuğumsa ne yapmalıyım?",
          answer:
            "Özellikle çocuk ve gençlik hizmetlerini arayın. Gençlik ruh sağlığı yolları genellikle yetişkin bakımından farklıdır.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Tarama ve Korunma",
  description:
    "Ontario'da koruyucu bakımın, aşıların ve taramanın temellerini öğrenin.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Yerel aşı ve halk sağlığı bilgileri.",
    },
    {
      title: "Ontario: Ontario'da sağlık hizmetleri",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Genel sağlık hizmeti rehberi.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Koruyucu bakım neden önemli",
      type: "default",
      content:
        "Koruyucu bakım, sorunları erken yakalamaya veya daha ciddi hale gelmeden durdurmaya çalışmak demektir. Buna aşılar, tarama testleri, düzenli tansiyon kontrolleri ve bir klinisyenle risk faktörleri hakkında yapılan konuşmalar dahildir.",
    },
    {
      id: "common-prevention",
      title: "Yaygın korunma işleri",
      type: "checklist",
      items: [
        "Aşılarınızı güncel tutun",
        "Yaşınız veya sağlık geçmişiniz için tarama testlerinin önerilip önerilmediğini sorun",
        "Tansiyon, diyabet veya diğer risk faktörleriyle ilgili sorularınızı rutin ziyaretlere getirin",
        "Aşı veya korunma bilgisine ihtiyaç duyduğunuzda halk sağlığı kaynaklarını kullanın",
      ],
    },
    {
      id: "prevention-next",
      title: "Yerel korunma hizmetlerine mi ihtiyacınız var?",
      type: "callout",
      content:
        "Kingston'da somut bir başlangıç noktasına ihtiyacınız varsa halk sağlığı, tarama ve eczane kayıtları için yerel hizmetler rehberini kullanın.",
      link: {
        text: "Halk sağlığı ve eczane kayıtları",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Yardımcı Sağlık ve Toplum Bakımı",
  description:
    "Evde bakımı, diş, rehabilitasyon, danışmanlık ve görme desteğini ve nelerin kamu, toplum, öğrenci veya özel olabileceğini anlamak için bu sayfayı kullanın.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Resmi evde ve toplumda bakım koordinasyonu bilgileri.",
    },
    {
      title: "Kanada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Resmi federal diş kapsamı programı bilgileri ve uygunluk.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Resmi toplum ve diş hizmeti bilgileri.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Resmi görme desteği bilgileri.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Yardımcı sağlık ve toplum bakımı ne demektir",
      type: "default",
      content:
        "Yardımcı sağlık (allied health); fizyoterapistler, ergoterapistler, diyetisyenler, sosyal hizmet uzmanları, danışmanlar, diş hekimleri veya görme destek ekipleri gibi profesyonellerden alınan bakım demektir. Toplum bakımı ise genellikle hastane dışında — bazen evinizde, okulda, klinikte veya bir toplum programında — gerçekleşen bakım anlamına gelir.",
    },
    {
      id: "access-payment-matrix",
      title: "Erişim ve ödeme tablosu",
      type: "table",
      columns: ["Yol", "Örnekler", "Ödeme genellikle nasıl işler", "Nasıl başlanır"],
      rows: [
        {
          cells: [
            "Kamu tarafından finanse edilen evde ve toplumda bakım",
            "Evde hemşirelik, evde terapi, bakım koordinasyonu",
            "Program kurallarını karşılıyorsanız kamu programları geçerli olabilir",
            "Bir klinisyen sevkiyle veya resmi evde bakım yoluyla başlayın",
          ],
        },
        {
          cells: [
            "Toplum temelli hizmetler",
            "Toplum sağlığı merkezi diş hizmetleri veya kolay erişimli destekler",
            "Hizmete bağlı olarak kamu veya toplum finansmanı geçerli olabilir",
            "Programla doğrudan iletişime geçin ve uygunluğu sorun",
          ],
        },
        {
          cells: [
            "Okul temelli destekler",
            "Kampüs danışmanlığı veya sağlıkla ilgili destekler",
            "Genellikle öğrenci uygunluğuna ve öğrenci ücretlerine veya planlarına bağlıdır",
            "Önce okulunuzun resmi hizmet sayfalarını kullanın",
          ],
        },
        {
          cells: [
            "Özel yardımcı sağlık bakımı",
            "Fizyoterapi, danışmanlık, masaj, özel diş, özel görme hizmetleri",
            "Başka bir plan kapsamadığı sürece genellikle cepten ödenir",
            "Randevu almadan önce tüm ücretleri ve kapsam kurallarını sorun",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Yardımcı sağlık ve toplum bakımı örnekleri",
      type: "grid",
      gridItems: [
        {
          title: "Evde bakım",
          content:
            "Hastalık, yaralanma veya hastane bakımı sonrası birinin evde desteğe ihtiyacı olduğunda yararlıdır.",
          icon: "clock",
          link: {
            text: "Evde bakım kayıtları",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Diş bakımı",
          content:
            "Diş kapsamı, normal doktor kapsamından ayrıdır. Federal Canadian Dental Care Plan artık özel diş sigortası olmayan birçok kişiyi kapsıyor; Healthy Smiles Ontario gibi programlar ve toplum diş klinikleri belirli gruplara yardımcı olur.",
          icon: "shield",
          link: {
            text: "Diş ve toplum kayıtları",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehabilitasyon ve terapi",
          content:
            "Fizyoterapi, ergoterapi ve ilgili hizmetler, izlediğiniz yola bağlı olarak kamu, toplum veya özel olabilir.",
          icon: "stethoscope",
          link: { text: "Yardımcı bakım kayıtları", url: "/local-services?category=allied-community" },
        },
        {
          title: "Görme desteği",
          content:
            "Görme desteği; tıbbi göz bakımının yanı sıra cihazları, yön bulma yardımını ve toplum desteklerini içerebilir.",
          icon: "info",
          link: {
            text: "Görme desteği kayıtları",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Randevu almadan önce",
      type: "checklist",
      items: [
        "Sevk gerekip gerekmediğini sorun",
        "Hizmetin kamu, toplum finansmanlı veya özel ücretli olup olmadığını sorun",
        "Hizmet özelse kesin ücretleri ve iptal kurallarını sorun",
        "Okulunuzun veya özel planınızın maliyetin bir kısmını karşılayıp karşılamadığını kontrol edin",
        "Kayıtlar, görüntüleme veya doktor yazısı getirmeniz gerekip gerekmediğini sorun",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "SSS ve Sözlük",
  description:
    "Yaygın yeni gelen senaryoları, pratik sorular ve sade dilde tanımlar.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Ontario'da sağlık hizmetleri",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Genel eyalet sağlık hizmeti rehberi.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Resmi hemşire tavsiyesi rehberi.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Yaygın yeni gelen senaryoları",
      type: "faq",
      faqs: [
        {
          question: "Henüz OHIP'im yok. Önce ne yapmalıyım?",
          answer:
            "Önce kapsam yolunuzu öğrenin; sonra güvenli bir geçici plan yapmak için yerel rehberi ve ivedi durum rehberi sayfalarını kullanın.",
        },
        {
          question: "Uluslararası öğrenciyim. Nereden başlamalıyım?",
          answer:
            "Kampüs sağlık veya esenlik hizmetinizle ve okul sigorta belgelerinizle başlayın; bunlar yeterli olmadığında toplum veya ivedi hizmetleri kullanın.",
        },
        {
          question: "Bir tercümana ihtiyacım var.",
          answer:
            "Erken isteyin. Bu siteyi Dil menüsünü kullanarak 33 dilde okuyabilir ve tercüman yardımı sekmesindeki hazır cümleleri personele gösterebilirsiniz. Randevular, ilaç talimatları, onam ve test görüşmeleri için profesyonel tercüman desteğini sorun. Health811 (811'i arayın) birçok dilde telefon desteği sunar.",
        },
        {
          question: "Ziyaretten sonra kan tahliline ihtiyacım var.",
          answer:
            "Bir istem formunuz olduğundan emin olun; sonra rehberde laboratuvar ve görüntüleme hizmetlerini arayın.",
        },
        {
          question: "İlaç yenilemem gerekiyor ve doktorum müsait değil.",
          answer:
            "Eczanenizle başlayın; sonra ilaca ve aciliyete bağlı olarak uygun şekilde randevusuz, sanal veya ivedi yolları kullanın.",
        },
        {
          question: "Çocuğum için bakıma ihtiyacım var.",
          answer:
            "Önce acil uyarı işaretlerini kullanın, sonra aynı gün veya ivedi durum rehberini. Çocuk ve gençlik ruh sağlığı yolları genellikle yetişkin bakımından ayrıdır.",
        },
        {
          question: "Bu gece ruh sağlığı yardımına ihtiyacım var.",
          answer:
            "Her zaman 9-8-8'i (İntihar Kriz Yardım Hattı) arayın veya mesaj atın ya da 7/24 AMHS-KFLA kriz hattını 613-544-4229 numarasından arayın. Güvenlik risk altındaysa acil servisi kullanın. Rutin bir randevuyu beklemeyin.",
        },
        {
          question: "Bir istem formunu veya sevki anlamıyorum.",
          answer:
            "Formu veren kliniği arayın ve sade bir dille açıklamalarını isteyin. Ne için olduğunu, nereye gittiğini ve takibi kimin yapması gerektiğini sorabilirsiniz.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Daha fazla yaygın soru",
      type: "faq",
      faqs: [
        {
          question: "Doktorum yoksa doğrudan acil servise gidebilir miyim?",
          answer:
            "Acil servis acil durumlar içindir. Sorun açıkça hayati tehlike içermiyorsa ivedi durum rehberi sayfası, Health811, randevusuz bir klinik veya başka bir aynı gün bakım seçeneğiyle başlayın.",
        },
        {
          question: "Yeniysem ve hangi hizmetin bana uyduğunu bilmiyorsam ne olur?",
          answer:
            "Öğrenciler, yeni gelenler, çocuklar ve gençler, randevusuz, sanal, sevk gerekli ve kapsam türü için rehber filtrelerini kullanın.",
        },
        {
          question: "Bu sitedeki bilgiler güncelliğini yitirmiş görünüyorsa ne yapmalıyım?",
          answer:
            "Bir sonraki gözden geçirmenin bulduğunuz değişikliğe odaklanabilmesi için sayfadaki veya kayıttaki bildirim formunu kullanın.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Sözlük",
      type: "checklist",
      items: [
        "Birinci basamak bakım (primary care): Rutin ve süregelen sağlık ihtiyaçları için düzenli sağlık yolunuz.",
        "Nurse practitioner (NP): Birçok durumda değerlendirme yapabilen, tanı koyabilen, reçete yazabilen ve sevk edebilen ileri uygulama hemşiresi.",
        "Sevk (referral): Bir klinisyenden başka bir hizmete veya uzmana yapılan başvuru.",
        "İstem formu (requisition): Laboratuvara veya görüntüleme kliniğine hangi teste ihtiyacınız olduğunu söyleyen form.",
        "Triyaj (triage): Güvenlik ve ciddiyete göre kimin önce ivedi bakıma ihtiyacı olduğuna karar verme süreci.",
        "Randevusuz (walk-in) klinik: Günlük kabule bağlı olarak, önceden randevu almadan hastaları görebilen klinik.",
        "İvedi bakım (urgent care): Açıkça hayati tehlike içermeyen ivedi sorunlar için aynı gün bakım.",
        "Kayıtlı (rostered/attached) hasta: Düzenli bir birinci basamak sağlayıcısıyla süregelen bir ilişkisi olan hasta.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Hakkında, Güven ve Gizlilik",
  description:
    "Bu rehberin nasıl çalıştığını, kaynakların ve gözden geçirme durumunun nasıl ele alındığını ve değişikliklerin nasıl bildirileceğini öğrenin.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Proje kaynak notları",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Projenin güveni ve kaynakları nasıl ele aldığına dair halka açık özet.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Bu site ne içindir",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca, Kingston, Ontario için yeni gelenlere öncelik veren bir sağlık hizmeti rehberidir. İnsanların doğru sonraki adımı seçmesine, yaygın sistem terimlerini anlamasına ve güvenilir yerel hizmet kayıtlarını bulmasına yardımcı olmak için tasarlanmıştır.\n\nBu site bir canlı bekleme süresi aracı, randevu platformu veya tıbbi tavsiye hizmeti **değildir**.",
    },
    {
      id: "sources",
      title: "Güven ve kaynak gösterme nasıl işler",
      type: "default",
      content:
        "Yerel kayıtları mümkün olduğunda resmi hizmet sayfalarına bağlamaya çalışırız. Her kayıt bir gözden geçirme durumu ve son gözden geçirme tarihi gösterir. Bazı girişler resmi kaynaklara göre tamamen doğrulanmıştır. Diğerleri; çalışma saatleri, kayıt veya erişim kuralları sık değiştiği için hâlâ yerel bir yeniden kontrole ihtiyaç duyar.\n\nSayfa düzeyindeki kaynak blokları, güncel gözden geçirme döngüsünde kullanılan ana resmi referansları gösterir.",
    },
    {
      id: "accessibility",
      title: "Erişilebilirlik ve dil",
      type: "default",
      content:
        "Bu site klavye dostu, önce mobil ve sade dilde okunabilir olacak şekilde yapılmıştır.\n\nRehberin tamamını başlıktaki Dil menüsünü kullanarak **33 dilde** okuyabilirsiniz — العربية ve Soomaali'den ਪੰਜਾਬੀ, ትግርኛ, Yorùbá ve Українська'ya kadar — her sayfa ve menü doğrudan bu sitede sunulur. Tüm çeviriler makine desteklidir; Fransızca, İspanyolca, Arapça ve Basitleştirilmiş Çince ek bir gözden geçirme turundan geçmiştir, geri kalanlar ise otomatik çeviri olarak etiketlenmiştir. **Referans sürüm İngilizce olmaya devam eder** — çevrilmiş bir cümle belirsiz veya şaşırtıcı görünüyorsa İngilizce metne bakın veya birinden doğrulamasını isteyin.\n\nAynı menüden Google Translate üzerinden onlarca dil daha bu siteyi açabilir; tercüman yardımı sekmesi ayrıca personele gösterebileceğiniz, 20'den fazla dilde acil durum cümleleri içerir.\n\nRehber kayıtları (hizmet adları, adresler, telefon numaraları ve çalışma saatleri) resmi kaynaklarla birebir eşleşmeleri için İngilizce kalır.\n\nHer tür çeviri tıbbi ayrıntılarda yine de hatalı olabilir; bu yüzden randevular, ilaç talimatları ve onam için profesyonel tercüman desteğini sorun. Health811 (811'i arayın) birçok dilde telefon desteği sunar.",
    },
    {
      id: "privacy",
      title: "Gizlilik",
      type: "default",
      content:
        "Bu site müdahaleci uzak analiz araçları kullanmaz. Bakımı yapanların; bilgiler bakım amacıyla bilinçli olarak dışa aktarıldığında yaygın aramaları, sonuçsuz aramaları, hizmet görüntülemelerini ve sorun bildirimlerini anlayabilmesi için kendi tarayıcınızda hafif iyileştirme sayaçları tutar.\n\nGeri bildirim formu veya e-posta yoluyla özel tıbbi bilgi göndermeyin.",
    },
    {
      id: "contact",
      title: "İletişim ve değişiklik bildirme",
      type: "default",
      content:
        "Bir sayfa veya kayıt yanlış görünüyorsa, o sayfadaki bildirim formunu kullanın. Bildirimler kişisel sağlık durumunuzu değil, sorunu tarif etmelidir.\n\nGenel iletişim e-postası: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Sorumluluk reddi",
      type: "default",
      content:
        "Bu web sitesi yalnızca yol gösterme ve eğitim amaçlıdır. Tıbbi tavsiye değildir ve profesyonel tanı, tedavi veya acil yardımın yerine geçmez. Bir durum hayati tehlike içerebilirse 911'i arayın.",
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
