import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Ń gbé ojú-ìwé wá...",
    directoryEnglishNote:
      "A fi àwọn àkọsílẹ̀ inú àkójọ iṣẹ́ hàn ní èdè Gẹ̀ẹ́sì kí orúkọ iṣẹ́, àdírẹ́sì, nọ́mbà fóònù, àti wákàtí iṣẹ́ lè bá àwọn orísun aláṣẹ mu gẹ́lẹ́.",
  },
  header: {
    emergencyBanner: "Pàjáwìrì tó lè gba ẹ̀mí? Pe 911 báyìí.",
    tagline:
      "Ìtọ́sọ́nà ìtọ́jú ìlera tó fi àwọn tó ṣẹ̀ṣẹ̀ dé sí ipò àkọ́kọ́ ní Kingston, Ontario",
    languageButton: "Èdè",
    languageButtonAria: "Ìrànlọ́wọ́ èdè àti ògbufọ̀",
    openNavigation: "Ṣí àtòjọ ojú-ìwé",
    primaryNavLabel: "Àkọ́kọ́",
  },
  languageModal: {
    title: "Ìrànlọ́wọ́ èdè àti ògbufọ̀",
    description:
      "Ka ìtọ́sọ́nà yìí ní èdè tó rọrùn jù fún ọ. Fún àwọn ọ̀rọ̀ ìtọ́jú ìlera, béèrè fún ògbufọ̀ nígbà tí o bá nílò rẹ̀.",
    chooseLanguageTitle: "Yan èdè rẹ",
    chooseLanguageNote:
      "A túmọ̀ ìtọ́sọ́nà yìí ní kíkún sí èdè 33 lórí ojúlé wẹ́ẹ̀bù yìí, ọ̀pọ̀lọpọ̀ èdè mìíràn sì máa ń ṣí nípasẹ̀ ìtumọ̀ aládàáṣe. Àwọn àkọsílẹ̀ inú àkójọ iṣẹ́ máa wà ní èdè Gẹ̀ẹ́sì kí wọ́n lè bá àwọn orísun aláṣẹ mu gẹ́lẹ́. Èdè Gẹ̀ẹ́sì ni ẹ̀dà ìtọ́ka bí ohunkóhun bá dàbí èyí tí kò yé ọ.",
    safetyTitle: "Àkíyèsí ààbò",
    safetyBody:
      "Ìtumọ̀ ojúlé wẹ́ẹ̀bù wà fún kíkà àti òye nìkan. Fún àdéhùn ìpàdé, ìlànà àyẹ̀wò, oògùn, tàbí ìfọwọ́sí (consent), béèrè bóyá ilé ìwòsàn lè pèsè ògbufọ̀ akọ́ṣẹ́mọṣẹ́. Health811 (pe 811) ní ìrànlọ́wọ́ orí fóònù ní ọ̀pọ̀ èdè.",
    phrasesTitle: "Àwọn gbólóhùn kíákíá tí o lè fi han àwọn òṣìṣẹ́",
    phrasesNote:
      "Tọ́ka sí èdè rẹ kí o sì fi àwọn ìlà wọ̀nyí han àwọn òṣìṣẹ́ ibi ìgbàlejò tàbí àwọn òṣìṣẹ́ ìtọ́jú.",
    callHealth811: "Pe Health811",
    accessibilityCta: "Ìrọ̀rùn ìlò àti ìgbẹ́kẹ̀lé",
    close: "Ti fèrèsé ìrànlọ́wọ́ èdè",
  },
  moreLanguages: {
    title: "Àwọn èdè mìíràn (ìtumọ̀ aládàáṣe)",
    description:
      "Gbogbo èdè ló ń ṣiṣẹ́ láti inú mẹ́nù kan ṣoṣo yìí — pẹ̀lú Somali, Yorùbá, Igbo, Hausa, Amharic, Tigrinya, Swahili, Ukrainian, Farsi, Urdu, Punjabi, Tamil, àti Vietnamese.",
    selectLabel: "Yan èdè èyíkéyìí",
    selectPlaceholder: "Gbogbo èdè — yan ọ̀kan…",
    openButton: "Ṣí i ní èdè yìí",
    disclaimer:
      "Àwọn èdè tí a samì sí aládàáṣe máa ń ṣí ojú-ìwé yìí nípasẹ̀ Google Translate, wọ́n sì máa wà ní èdè rẹ bí o ṣe ń tẹ̀síwájú. Iṣẹ́ àgbékalẹ̀ yìí kò ṣàyẹ̀wò ìtumọ̀ aládàáṣe — ó dára fún kíkà, ṣùgbọ́n jẹ́rìí sí àwọn kúlẹ̀kúlẹ̀ ìṣègùn lọ́dọ̀ oníṣègùn tàbí ògbufọ̀.",
  },
  funding: {
    acknowledgment:
      "Iṣẹ́ àgbékalẹ̀ yìí ń gba àtìlẹyìn nípasẹ̀ ẹ̀bùn owó láti ọwọ́ Ontario Medical Students Association (OMSA).",
    logoAlt: "Àmì Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Wá àwọn èdè…",
    onSiteGroup: "A túmọ̀ rẹ̀ lórí ojúlé wẹ́ẹ̀bù yìí",
    proxyGroup: "Àwọn èdè mìíràn nípasẹ̀ Google Translate",
    reviewedBadge: "A ti ṣàyẹ̀wò",
    automaticBadge: "Aládàáṣe",
    interpreterTab: "Ìrànlọ́wọ́ ògbufọ̀ àti àwọn gbólóhùn",
    noMatches: "Kò sí èdè tó bá ìwádìí rẹ mu.",
    note: "Ẹ̀rọ ló ran àwọn ìtumọ̀ lọ́wọ́, èdè Gẹ̀ẹ́sì sì ni ẹ̀dà ìtọ́ka bí ohunkóhun bá dàbí èyí tí kò yé ọ. Àwọn èdè inú ẹgbẹ́ Google Translate máa ń ṣí ojú-ìwé yìí lórí ojúlé wẹ́ẹ̀bù Google lóde. Àwọn àkọsílẹ̀ inú àkójọ iṣẹ́ máa wà ní èdè Gẹ̀ẹ́sì kí wọ́n lè bá àwọn orísun aláṣẹ mu gẹ́lẹ́.",
  },
  navigation: [
    {
      title: "Bẹ̀rẹ̀ níbí",
      items: [
        {
          label: "Nílò Ìrànlọ́wọ́ Báyìí",
          to: "/need-help-now",
          description: "Ìpinnu kíákíá àti ìtìlẹ́yìn ìdààmú",
        },
        {
          label: "Bẹ̀rẹ̀ Níbí",
          to: "/start-here",
          description: "Ṣẹ̀ṣẹ̀ dé sí ètò ìlera Ontario",
        },
        {
          label: "Wá Ìtọ́jú Ìpìlẹ̀",
          to: "/get-a-family-doctor",
          description:
            "Dókítà, nurse practitioner, ilé ìlera àdúgbò, àti àṣàyàn akẹ́kọ̀ọ́",
        },
      ],
    },
    {
      title: "Lóye ìtọ́jú",
      items: [
        {
          label: "Iye Owó àti Ètò Ìsanwó",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, ètò aládàáni, àti ìsanwó oògùn",
        },
        {
          label: "Ìbẹ̀wò Rẹ",
          to: "/your-visit",
          description: "Ohun tí o máa mú lọ àti bí o ṣe lè béèrè ìbéèrè",
        },
        {
          label: "Lẹ́yìn Ìbẹ̀wò Náà",
          to: "/after-visit",
          description:
            "Àyẹ̀wò, requisition, referral, àti ìtẹ̀síwájú ìtọ́jú",
        },
        {
          label: "Oògùn àti Àwọn Fámásì",
          to: "/medicines-and-pharmacies",
          description: "Ìwé oògùn, refill, àti ìrànlọ́wọ́ fámásíìsì",
        },
      ],
    },
    {
      title: "Ìrànlọ́wọ́ àdúgbò",
      items: [
        {
          label: "Àwọn Iṣẹ́ Àdúgbò",
          to: "/local-services",
          description: "Wá àwọn iṣẹ́ Kingston",
        },
        {
          label: "Ìlera Ọpọlọ",
          to: "/mental-health",
          description: "Ìdààmú, kíákíá, déédéé, àti ìtìlẹ́yìn ọ̀dọ́",
        },
        {
          label: "Àyẹ̀wò Ìṣáájú àti Ìdènà",
          to: "/screening-prevention",
          description: "Abẹ́rẹ́ àjẹsára àti ìtọ́jú ìdènà",
        },
        {
          label: "Ìtọ́jú Àfikún àti ti Àdúgbò",
          to: "/community-allied-health",
          description:
            "Ìtọ́jú nílé, rehab (ìtọ́jú ìmúpadàbọ̀ ara), eyín, àti ìtìlẹ́yìn àdúgbò",
        },
        {
          label: "FAQ",
          to: "/faq",
          description:
            "Àwọn ipò tó wọ́pọ̀ fún àwọn tó ṣẹ̀ṣẹ̀ dé àti ìtumọ̀ ọ̀rọ̀",
        },
        {
          label: "Nípa Wa àti Ìgbẹ́kẹ̀lé",
          to: "/about",
          description: "Orísun, àṣírí, ìrọ̀rùn ìlò, àti èsì",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Ṣé o nílò ìrànlọ́wọ́ ní báyìí gan-an?",
    items: {
      "call-911": {
        label: "Pe 911",
        description: "Pàjáwìrì tó lè gba ẹ̀mí",
      },
      "call-811": {
        label: "Pe Health811",
        description: "Ìmọ̀ràn nọ́ọ̀sì, wákàtí 24, ọjọ́ 7",
      },
      "call-988": {
        label: "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8",
        description: "Suicide Crisis Helpline (laini ìdààmú ìpara-ẹni), 24/7",
      },
      "call-crisis": {
        label: "Pe Laini Ìdààmú",
        description: "Laini ìdààmú AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Ìtọ́sọ́nà ìtọ́jú kíákíá",
        description: "Àwọn àṣàyàn lẹ́yìn àkókò iṣẹ́ àti ti ọjọ́ kan náà",
      },
      "mental-health": {
        label: "Ìtìlẹ́yìn ìlera ọpọlọ",
        description: "Ọ̀nà ìdààmú, kíákíá, àti déédéé",
      },
    },
  },
  home: {
    seoTitle: "Ìtọ́sọ́nà ìlera Kingston",
    seoDescription:
      "Ìtọ́sọ́nà wíwá ìtọ́jú ìlera tó fi àwọn tó ṣẹ̀ṣẹ̀ dé sí ipò àkọ́kọ́ ní Kingston, Ontario: ìrànlọ́wọ́ kíákíá, àwọn iṣẹ́ àdúgbò, ìpìlẹ̀ ètò ìsanwó, ìtọ́sọ́nà ògbufọ̀, àti àwọn ìgbésẹ̀ tó kàn lẹ́yìn ìbẹ̀wò.",
    kicker: "Kingston, Ontario",
    heroTitle: "Wá ìtọ́jú tó tọ́ ní Kingston ní ọ̀nà tó dájú",
    heroLead:
      "Bẹ̀rẹ̀ pẹ̀lú ìrànlọ́wọ́ kíákíá, ìpìlẹ̀ fún àwọn tó ṣẹ̀ṣẹ̀ dé, ètò ìsanwó, tàbí àkójọ àwọn iṣẹ́ àdúgbò. Ìtọ́sọ́nà yìí wà ní èdè tó rọrùn, ó rọrùn lórí fóònù, ó sì ń sọ òtítọ́ nípa ohun tí ó ṣì nílò àtúnyẹ̀wò.",
    cardNeedHelp: {
      title: "Nílò ìrànlọ́wọ́ báyìí",
      body: "Ìtọ́sọ́nà pàjáwìrì, ìtọ́jú kíákíá, ìdààmú, àti lẹ́yìn àkókò iṣẹ́.",
    },
    cardStartHere: {
      title: "Bẹ̀rẹ̀ níbí",
      body: "Bí ètò ìlera Ontario ṣe ń ṣiṣẹ́ àti ohun tí o máa kọ́kọ́ ṣe.",
    },
    cardSearch: {
      title: "Wá àwọn iṣẹ́",
      body: "Wá àyẹ̀wò ẹ̀jẹ̀, refill oògùn, ìtọ́jú walk-in, ìlera ọpọlọ, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.",
    },
    cardLanguage: {
      title: "Ìrànlọ́wọ́ èdè",
      body: "Ka ìtọ́sọ́nà yìí ní èdè rẹ, pẹ̀lú ìtọ́sọ́nà ògbufọ̀ àti àwọn gbólóhùn kíákíá.",
    },
    quickDecisionsKicker: "Ìpinnu kíákíá",
    quickDecisionsTitle: "Bẹ̀rẹ̀ pẹ̀lú àwọn ìbéèrè wọ̀nyí",
    quickDecisionLines: [
      "Bí ó bá lè gba ẹ̀mí, pe 911 báyìí.",
      "Bí o kò bá mọ ibi tí o máa lọ lálẹ́ yìí, pe Health811.",
      "Fún èrò ìpara-ẹni tàbí ìdààmú tó pọ̀ jù, pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8 nígbàkigbà.",
      "Bí o kò bá ní dókítà ìdílé, fi walk-in, ilé ìlera àdúgbò, àti àwọn àṣàyàn akẹ́kọ̀ọ́ sínú ètò rẹ.",
      "Bí o bá nílò àyẹ̀wò ẹ̀jẹ̀, X-ray, refill, tàbí ìsọfúnni tuntun nípa referral, lo àkójọ iṣẹ́ àdúgbò láti wá ìgbésẹ̀ tó kàn.",
    ],
    trustNoteTitle: "Àkíyèsí ìgbẹ́kẹ̀lé",
    trustNoteBody:
      "Ìtọ́sọ́nà tí kò yí padà lẹ́sẹ̀kẹsẹ̀ ni èyí. A kì í fi àkókò ìdúró tí ń lọ lọ́wọ́ hàn. Àwọn kúlẹ̀kúlẹ̀ bíi wákàtí iṣẹ́ àti gbígba aláìsàn lè yí padà kíákíá, nítorí náà àkọsílẹ̀ kọ̀ọ̀kan ní ìjápọ̀ orísun àti ipò àtúnyẹ̀wò.",
    newcomerKicker: "Ìbẹ̀rẹ̀ kíákíá fún àwọn tó ṣẹ̀ṣẹ̀ dé",
    newcomerTitle: "Àwọn ìgbésẹ̀ àkọ́kọ́ bí o bá ṣẹ̀ṣẹ̀ dé sí Kingston",
    newcomerSteps: [
      {
        title: "1. Kọ́ nípa ètò ìsanwó rẹ",
        body: "Lóye OHIP, IFHP, ètò aládàáni, àti ohun tí kì í sábà sí lábẹ́ ìsanwó. Kò sí àkókò ìdúró fún OHIP - forúkọ sílẹ̀ ní kété tí o bá dé.",
      },
      {
        title: "2. Gbèrò ọ̀nà ìtọ́jú ìpìlẹ̀ rẹ",
        body: "Kọ́ ìyàtọ̀ láàrin dókítà ìdílé, nurse practitioner, ilé ìwòsàn akẹ́kọ̀ọ́, ilé ìlera àdúgbò, àti ìtọ́jú walk-in.",
      },
      {
        title: "3. Mọ ohun tó máa ṣẹlẹ̀ lẹ́yìn náà",
        body: "Kọ́ ohun tí requisition, referral, àbájáde àyẹ̀wò, àti ìpè ìtẹ̀síwájú sábà máa ń túmọ̀ sí.",
      },
    ],
    languageSupportKicker: "Ìtìlẹ́yìn èdè",
    languageSupportTitle: "Fi àwọn gbólóhùn wọ̀nyí hàn bí o bá nílò ìrànlọ́wọ́",
    openLanguageHelp: "Ṣí ìrànlọ́wọ́ èdè",
    commonTasksKicker: "Àwọn iṣẹ́ tó wọ́pọ̀",
    commonTasksTitle: "Wá nípa ohun tí o fẹ́ ṣe parí",
    openDirectory: "Ṣí gbogbo àkójọ iṣẹ́",
    tasks: [
      {
        title: "Àyẹ̀wò ẹ̀jẹ̀ tàbí X-ray",
        body: "Wá àwọn láàbù àti iṣẹ́ àwòrán ara.",
      },
      {
        title: "Refill oògùn",
        body: "Wá àwọn fámásì àti ìrànlọ́wọ́ refill.",
      },
      {
        title: "Ìtìlẹ́yìn ìlera ọpọlọ",
        body: "Ìdààmú, kíákíá, déédéé, àti ìtìlẹ́yìn ọ̀dọ́.",
      },
      {
        title: "Káàdì ìlera tàbí ìtìlẹ́yìn fún àwọn tó ṣẹ̀ṣẹ̀ dé",
        body: "Wá ServiceOntario, ISKA, àti ìmọ̀ràn orí fóònù.",
      },
    ],
    featuredKicker: "Àwọn iṣẹ́ pàtàkì",
    featuredTitle: "Àwọn ibi tó dára láti bẹ̀rẹ̀",
    trustKicker: "Ìgbẹ́kẹ̀lé àti orísun",
    trustTitle:
      "A ń sọ òtítọ́ nípa ohun tí a ti jẹ́rìí sí àti ohun tí ó ṣì nílò àtúnyẹ̀wò",
    trustBody:
      "A ti ṣàyẹ̀wò àwọn àkọsílẹ̀ kan pẹ̀lú àwọn orísun aláṣẹ àdúgbò. Àwọn mìíràn ṣì nílò àtúnyẹ̀wò àdúgbò nítorí pé wákàtí iṣẹ́, gbígba aláìsàn, tàbí òfin ìwọlé máa ń yí padà lọ́pọ̀ ìgbà. A máa ń fi ipò yẹn hàn kedere, a sì ń gba àwọn olùmúlò níyànjú láti jábọ̀ àwọn kúlẹ̀kúlẹ̀ tó ti pẹ́.",
    trustChecklistTitle: "Ka èyí kí o tó gbára lé àkọsílẹ̀ kan",
    trustChecklist: [
      "Wá ìjápọ̀ orísun aláṣẹ.",
      "Ṣàyẹ̀wò ọjọ́ àtúnyẹ̀wò tó kẹ́yìn.",
      "Jẹ́rìí sí wákàtí ọjọ́ kan náà àti ìwọlé walk-in kí o tó lọ.",
      "Lo fọ́ọ̀mù ìjábọ̀ bí o bá ṣàkíyèsí ìyípadà.",
    ],
    trustLink: "Wo àwọn orísun àti àkíyèsí ìgbẹ́kẹ̀lé",
  },
  contentPage: {
    breadcrumbHome: "Ilé",
    badge: "Ìtọ́sọ́nà ní èdè tó rọrùn",
    reviewStatusTitle: "Ipò àtúnyẹ̀wò",
    reviewLabels: {
      reviewed:
        "A ti ṣàyẹ̀wò rẹ̀ pẹ̀lú àkójọ orísun lọ́wọ́lọ́wọ́ tí iṣẹ́ àgbékalẹ̀ yìí ń lò.",
      "general-guidance":
        "A ṣàyẹ̀wò rẹ̀ gẹ́gẹ́ bí ìtọ́sọ́nà gbogbogbò. Àwọn kúlẹ̀kúlẹ̀ àdúgbò ṣì lè yí padà kíákíá.",
      "needs-local-recheck":
        "Ìtọ́sọ́nà tó wúlò, ṣùgbọ́n àwọn kúlẹ̀kúlẹ̀ àdúgbò ṣì nílò àyẹ̀wò sí i.",
    },
    lastReviewPrefix: "Àtúnyẹ̀wò ojú-ìwé tó kẹ́yìn:",
    noReviewDate: "Ojú-ìwé yìí kò ní ọjọ́ àtúnyẹ̀wò tí a kọ sílẹ̀.",
    translationAside:
      "O lè ka ojú-ìwé yìí ní oríṣiríṣi èdè nípa lílo mẹ́nù Èdè. Fún àdéhùn ìpàdé, oògùn, ìfọwọ́sí (consent), àti ìlànà àyẹ̀wò, béèrè bóyá ìtìlẹ́yìn ògbufọ̀ wà.",
    share: "Pín",
    print: "Tẹ̀ jáde",
    sourcesTitle: "Àwọn orísun fún ojú-ìwé yìí",
    sourcesNote:
      "Ìwọ̀nyí ni àwọn orísun aláṣẹ tàbí orísun àkọ́kọ́ pàtàkì tí a lò fún àtúnyẹ̀wò ojú-ìwé yìí lọ́wọ́lọ́wọ́. Àwọn ìlànà àdúgbò ṣì lè yí padà láàrin àwọn àkókò àtúnyẹ̀wò.",
    onThisPage: "Lórí ojú-ìwé yìí",
    sourcesAnchorLabel: "Àwọn orísun",
    translationReminderTitle: "Ìrántí nípa ìtumọ̀",
    translationReminderBody:
      "Bí ohunkóhun bá kan ìtọ́jú tàbí ààbò rẹ, jẹ́rìí sí i lọ́dọ̀ oníṣègùn tàbí ògbufọ̀ dípò kí o gbára lé ìtumọ̀ nìkan.",
    linkCopiedTitle: "A ti ṣe àdàkọ ìjápọ̀ náà",
    linkCopiedBody: "O ti lè lẹ ìjápọ̀ ojú-ìwé yìí síbikíbi báyìí.",
    shareCancelled: "A ti fagi lé pínpín",
  },
  directory: {
    seoTitle: "Àwọn iṣẹ́ àdúgbò",
    seoDescription:
      "Wá àwọn iṣẹ́ ìtọ́jú ìlera, ìlera ọpọlọ, fámásì, ètò ìsanwó, àti ìtọ́sọ́nà tó bá àwọn tó ṣẹ̀ṣẹ̀ dé mu ní Kingston, Ontario.",
    kicker: "Àkójọ iṣẹ́ Kingston",
    title: "Wá àwọn iṣẹ́ ìlera àdúgbò",
    lead: "Wá nípa iṣẹ́, àmì àìsàn, ìwé, tàbí ohun tí o fẹ́ ṣe. Àpẹẹrẹ: walk in, lẹ́yìn àkókò iṣẹ́, àyẹ̀wò ẹ̀jẹ̀, refill, káàdì ìlera, ilé ìwòsàn akẹ́kọ̀ọ́, tàbí ìtìlẹ́yìn fún àwọn tó ṣẹ̀ṣẹ̀ dé.",
    searchPlaceholder:
      "Wá nípa ohun tí o nílò, orúkọ iṣẹ́, àdírẹ́sì, tàbí ọ̀rọ̀ pàtàkì",
    sortAriaLabel: "Ṣètò àwọn àbájáde",
    sortRelevance: "Ìṣètò: Ìbáramu",
    sortAlphabetical: "Ìṣètò: A sí Z",
    sortRecentlyReviewed: "Ìṣètò: Àtúnyẹ̀wò àìpẹ́",
    sortArea: "Ìṣètò: Agbègbè",
    gridViewLabel: "Ìwò gíríìdì",
    listViewLabel: "Ìwò àtòjọ",
    allServices: "Gbogbo iṣẹ́",
    audienceTitle: "Àwọn tí ó wà fún",
    accessTitle: "Ìwọlé",
    careLevelTitle: "Ipele ìtọ́jú",
    coverageAreaTitle: "Ìsanwó àti agbègbè",
    areaLabel: "Agbègbè",
    showingServices: "Ń fi iṣẹ́ {count} hàn",
    resetFilters: "Tún àwọn asẹ́ bẹ̀rẹ̀",
    trustPanelTitle: "Ìgbẹ́kẹ̀lé àti ipò àtúnyẹ̀wò",
    trustPanelBody:
      "Àkójọ iṣẹ́ yìí kò yí padà lẹ́sẹ̀kẹsẹ̀. A máa ń fi ọjọ́ àtúnyẹ̀wò tó kẹ́yìn hàn, ìjápọ̀ orísun aláṣẹ nígbà tí ó bá wà, àti àwọn àkọsílẹ̀ tí ó ṣì nílò àtúnyẹ̀wò àdúgbò. Jẹ́rìí sí wákàtí iṣẹ́ àti ìwọlé ọjọ́ kan náà kí o tó lọ.",
    verifiedLabel: "Ti jẹ́rìí sí",
    needsRecheckLabel: "Nílò àtúnyẹ̀wò",
    noResultsTitle: "Kò sí iṣẹ́ tó bá àwọn asẹ́ yẹn mu",
    noResultsBody:
      "Gbìyànjú ìwáàdí tó gbòòrò sí i bíi àyẹ̀wò ẹ̀jẹ̀, refill, ìlera ọpọlọ, káàdì ìlera, tàbí walk in. O tún lè pa gbogbo asẹ́ rẹ́ kí o sì tún bẹ̀rẹ̀.",
    notSureTitle: "Kò dá ọ lójú ibi tí o máa bẹ̀rẹ̀?",
    notSureBody:
      "Bí o kò bá mọ̀ bóyá o nílò ìtọ́jú pàjáwìrì, ìtọ́jú kíákíá, ilé ìwòsàn walk-in, tàbí ìrànlọ́wọ́ fámásì, bẹ̀rẹ̀ pẹ̀lú ojú-ìwé ìtọ́sọ́nà kíákíá tàbí pe Health811 fún ìmọ̀ràn nọ́ọ̀sì.",
    needHelpNowCta: "Nílò Ìrànlọ́wọ́ Báyìí",
    callHealth811: "Pe Health811",
  },
  filters: {
    audience: {
      newcomers: "Àwọn tó ṣẹ̀ṣẹ̀ dé",
      students: "Akẹ́kọ̀ọ́ nìkan tàbí orí kámpọ́ọ̀sì",
      "children-youth": "Ọmọdé tàbí ọ̀dọ́",
      adults: "Àgbàlagbà",
      families: "Àwọn ìdílé",
      "unattached-patients": "Kò ní dókítà ìdílé",
    },
    access: {
      "walk-in": "Walk-in (láìsí àdéhùn)",
      appointment: "Àdéhùn ìpàdé",
      referral: "Nílò referral",
      virtual: "Orí ayélujára",
    },
    level: {
      emergency: "Pàjáwìrì",
      urgent: "Kíákíá",
      primary: "Ìpìlẹ̀",
      community: "Àdúgbò",
    },
    payment: {
      public: "Owó ìjọba ló ń sanwó",
      community: "Ti àdúgbò / ìdíwọ́ kéréje",
      mixed: "Ìsanwó alápapọ̀",
      "student-plan": "Ètò akẹ́kọ̀ọ́",
      private: "Sísan owó fúnra ẹni",
    },
    location: {
      downtown: "Àárín ìlú",
      "north-end": "Apá Àríwá (North End)",
      "west-end": "Apá Ìwọ̀-oòrùn (West End)",
      campus: "Kámpọ́ọ̀sì",
      online: "Orí ayélujára",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Ìtọ́jú pàjáwìrì àti kíákíá",
      shortLabel: "Pàjáwìrì àti kíákíá",
    },
    "primary-care": {
      label: "Ìtọ́jú ìpìlẹ̀ (primary care)",
      shortLabel: "Ìtọ́jú ìpìlẹ̀",
    },
    "community-health": {
      label: "Àwọn ilé ìlera àdúgbò",
      shortLabel: "Ìlera àdúgbò",
    },
    "mental-health": {
      label: "Ìlera ọpọlọ àti ìtìlẹ́yìn ìdààmú",
      shortLabel: "Ìlera ọpọlọ",
    },
    "public-health": {
      label: "Ìlera gbogbogbò",
      shortLabel: "Ìlera gbogbogbò",
    },
    "labs-imaging": {
      label: "Láàbù àti àwòrán ara",
      shortLabel: "Láàbù àti àwòrán ara",
    },
    pharmacies: {
      label: "Oògùn àti àwọn fámásì",
      shortLabel: "Àwọn fámásì",
    },
    "allied-community": {
      label: "Ìtọ́jú àfikún àti ti àdúgbò",
      shortLabel: "Ìtọ́jú àfikún",
    },
    "navigation-support": {
      label: "Ìtọ́sọ́nà àti ìtìlẹ́yìn ìsanwó",
      shortLabel: "Ìtọ́sọ́nà",
    },
  },
  serviceCard: {
    whenToUse: "Ìgbà tí o lè lò ó:",
    accessLabel: "Ìwọlé",
    eligibilityLabel: "Ẹ̀tọ́ ìlò",
    eligibilityFallback:
      "Ó wà fún gbogbo ènìyàn àyàfi bí orísun aláṣẹ bá sọ òdìkejì.",
    hoursLabel: "Wákàtí iṣẹ́",
    phoneLabel: "Fóònù",
    trustDetails: "Kúlẹ̀kúlẹ̀ ìgbẹ́kẹ̀lé àti orísun",
    lastReview: "Àtúnyẹ̀wò tó kẹ́yìn:",
    officialSource: "Orísun aláṣẹ",
    call: "Pè",
    officialWebsite: "Ojúlé wẹ́ẹ̀bù aláṣẹ",
    directions: "Ìtọ́nisọ́nà ọ̀nà",
    viewDetails: "Wo kúlẹ̀kúlẹ̀",
  },
  serviceDetail: {
    backToServices: "Padà sí àwọn iṣẹ́ àdúgbò",
    whenToUseTitle: "Ìgbà tí o lè lo iṣẹ́ yìí",
    eligibilityTitle: "Ẹ̀tọ́ ìlò àti ìwọlé",
    eligibilityFallback:
      "Ṣàyẹ̀wò orísun aláṣẹ bí kò bá dá ọ lójú bóyá iṣẹ́ yìí wà fún ọ.",
    whatToBringTitle: "Ohun tí o máa mú lọ",
    contactTitle: "Ìbánisọ̀rọ̀ àti ìgbésẹ̀",
    callNow: "Pè báyìí",
    officialWebsite: "Ojúlé wẹ́ẹ̀bù aláṣẹ",
    directions: "Ìtọ́nisọ́nà ọ̀nà",
    trustTitle: "Ìgbẹ́kẹ̀lé àti orísun",
    lastReview: "Àtúnyẹ̀wò tó kẹ́yìn:",
    viewOfficialSource: "Wo orísun aláṣẹ",
  },
  verification: {
    verified: {
      label: "Ti jẹ́rìí sí pẹ̀lú orísun aláṣẹ",
      shortLabel: "Ti jẹ́rìí sí",
      description:
        "A ṣàyẹ̀wò àwọn kúlẹ̀kúlẹ̀ pàtàkì pẹ̀lú orísun aláṣẹ nínú àyíká àtúnyẹ̀wò tó ṣẹ̀ṣẹ̀ kọjá.",
    },
    "partially-verified": {
      label: "Ìjápọ̀ orísun aláṣẹ wà",
      shortLabel: "Ìjápọ̀ aláṣẹ",
      description:
        "Ìjápọ̀ sí orísun aláṣẹ wà, ṣùgbọ́n ọ̀kan tàbí jù bẹ́ẹ̀ lọ nínú àwọn kúlẹ̀kúlẹ̀ lè máa yí padà lọ́pọ̀ ìgbà, ó sì yẹ kí o jẹ́rìí sí i kí o tó lọ.",
    },
    "community-reported": {
      label: "Ìjábọ̀ láti ọ̀dọ̀ àdúgbò",
      shortLabel: "Ìjábọ̀ àdúgbò",
      description:
        "Ìsọfúnni yìí wá láti ọ̀dọ̀ ìjábọ̀ àdúgbò, ó sì ṣì nílò ìjẹ́rìí aládàádúró.",
    },
    "needs-recheck": {
      label: "Nílò àtúnyẹ̀wò",
      shortLabel: "Nílò àtúnyẹ̀wò",
      description:
        "Àkọsílẹ̀ yìí ṣì wà ní ìhàn nítorí pé ó lè ṣèrànwọ́, ṣùgbọ́n àwọn kúlẹ̀kúlẹ̀ pàtàkì lè ti pẹ́. Jẹ́rìí sí i kí o tó gbára lé e.",
    },
  },
  feedback: {
    badge: "Jábọ̀ ìsọfúnni tó ti pẹ́",
    title: "Ràn wá lọ́wọ́ láti jẹ́ kí ìtọ́sọ́nà yìí péye",
    body: "Èyí máa ránṣẹ́ ímeèlì tí a ti kọ tẹ́lẹ̀ pẹ̀lú àlàyé ojú-ìwé tàbí iṣẹ́. Má ṣe fi ìsọfúnni ìṣègùn àdáni kún un.",
    issueTypeLabel: "Irú ìṣòro",
    issueTypes: {
      "outdated hours": "Wákàtí iṣẹ́ tó ti pẹ́",
      "wrong phone or website": "Fóònù tàbí ojúlé wẹ́ẹ̀bù tí kò tọ́",
      "eligibility or access issue": "Ìṣòro ẹ̀tọ́ ìlò tàbí ìwọlé",
      "translation or accessibility problem":
        "Ìṣòro ìtumọ̀ tàbí ìrọ̀rùn ìlò",
      "missing service or content": "Iṣẹ́ tàbí àkóónú tó sọnù",
      other: "Òmíràn",
    },
    detailsLabel: "Kí ni kí á ṣàyẹ̀wò?",
    detailsPlaceholder:
      "Àpẹẹrẹ: nọ́mbà fóònù ti yí padà, ilé ìwòsàn kan ti di àdéhùn-nìkan báyìí, tàbí ìjápọ̀ kan ti bàjẹ́.",
    contactLabel: "Ìbánisọ̀rọ̀ (kò pọn dandan)",
    contactPlaceholder: "Àdírẹ́sì ímeèlì bí o bá fẹ́ èsì",
    openEmail: "Ṣí ímeèlì ìjábọ̀",
    copyText: "Ṣe àdàkọ ọ̀rọ̀ ìjábọ̀",
    thanks:
      "A dúpẹ́. Àwọn ìjábọ̀ ń ràn wá lọ́wọ́ láti fi àyànfẹ́ sí àwọn ojú-ìwé tó ti pẹ́, ìjápọ̀ tó bàjẹ́, àti àwọn àkọsílẹ̀ tó nílò àtúnyẹ̀wò àdúgbò.",
    toastEmailTitle: "A ti ṣí àkọsílẹ̀ ímeèlì kan",
    toastEmailBody: "Ìjábọ̀ rẹ ní àlàyé ojú-ìwé tàbí iṣẹ́ nínú.",
    toastCopyTitle: "A ti ṣe àdàkọ àkópọ̀ ìṣòro náà",
    toastCopyBody: "O lè lẹ̀ ẹ́ sínú ètò ímeèlì tìrẹ bí o bá nílò rẹ̀.",
  },
  footer: {
    description:
      "Ìtọ́sọ́nà wíwá ìtọ́jú ìlera ní èdè tó rọrùn fún Kingston, Ontario. Ojúlé wẹ́ẹ̀bù yìí kì í fúnni ní ìmọ̀ràn ìṣègùn tàbí àkókò ìdúró tí ń lọ lọ́wọ́. Máa jẹ́rìí sí àwọn kúlẹ̀kúlẹ̀ tó ní àkókò lọ́dọ̀ orísun aláṣẹ kí o tó lọ.",
    trustModelTitle: "Ètò ìgbẹ́kẹ̀lé",
    trustModelBody:
      "A máa ń fi ìjápọ̀ orísun aláṣẹ hàn, ọjọ́ àtúnyẹ̀wò, àti àwọn àkọsílẹ̀ tó ṣì nílò àtúnyẹ̀wò. Bí ohunkóhun bá dàbí èyí tí kò tọ́, jábọ̀ rẹ̀ láti ojú-ìwé tàbí iṣẹ́ náà.",
    beforeYouGo: {
      title: "Kí o tó lọ",
      body: "Ṣàyẹ̀wò wákàtí iṣẹ́ aláṣẹ, bóyá o nílò àdéhùn ìpàdé tàbí referral, àti àwọn ìwé tí o máa mú lọ.",
    },
    languageHelp: {
      title: "Ìrànlọ́wọ́ èdè",
      body: "Ka ìtọ́sọ́nà yìí ní èdè rẹ nípa lílo mẹ́nù Èdè. Béèrè fún ògbufọ̀ fún àwọn ọ̀rọ̀ ìtọ́jú nígbà tí pípé ṣe pàtàkì.",
    },
    privacy: {
      title: "Àṣírí",
      body: "Ojúlé wẹ́ẹ̀bù yìí ń lo àkọsílẹ̀ ìmúdára tó bọ̀wọ̀ fún àṣírí, tí a fi pamọ́ sínú aṣàwákiri tìrẹ. Kì í fi ìsọfúnni àdáni ránṣẹ́ sí sáfà jíjìn.",
    },
    copyrightSuffix: "Ohun èlò ìsọfúnni àdúgbò fún Kingston, Ontario.",
    disclaimer: "Àlàyé ìkìlọ̀",
    privacyLink: "Àṣírí",
    sourcesLink: "Àwọn orísun",
    reportLink: "Jábọ̀ ìsọfúnni tó ti pẹ́",
  },
  notFound: {
    seoTitle: "A kò rí ojú-ìwé náà",
    seoDescription:
      "A kò lè rí ojú-ìwé tí o béèrè fún. Bẹ̀rẹ̀ pẹ̀lú ìrànlọ́wọ́ kíákíá, ìpìlẹ̀ fún àwọn tó ṣẹ̀ṣẹ̀ dé, àwọn iṣẹ́ àdúgbò, tàbí FAQ.",
    badge: "404",
    title: "A kò rí ojú-ìwé yẹn",
    body: "Bí o bá ń gbìyànjú láti rí ìtọ́jú kíákíá, bẹ̀rẹ̀ pẹ̀lú ìtọ́sọ́nà kíákíá tàbí wá inú àkójọ iṣẹ́ Kingston.",
    startHere: "Bẹ̀rẹ̀ Níbí",
    needHelpNow: "Nílò Ìrànlọ́wọ́ Báyìí",
    localServices: "Àwọn Iṣẹ́ Àdúgbò",
    faq: "FAQ",
  },
};

export const pages: Record<string, PageContent> = {
  home: {
    title: "Ìtọ́sọ́nà Wíwá Ìtọ́jú Ìlera ní Kingston",
    description:
      "Ìtọ́sọ́nà ní èdè tó rọrùn, tó fi àwọn tó ṣẹ̀ṣẹ̀ dé sí ipò àkọ́kọ́, fún wíwá ìtọ́jú ìlera ní Kingston, Ontario.",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [],
    sections: [],
  },
  "start-here": {
    title: "Bẹ̀rẹ̀ Níbí",
    description:
      "Ṣé o ṣẹ̀ṣẹ̀ dé sí Kingston tàbí o ṣẹ̀ṣẹ̀ bẹ̀rẹ̀ pẹ̀lú ètò ìlera Ontario? Bẹ̀rẹ̀ níbí láti kọ́ bí ètò náà ṣe ń ṣiṣẹ́ àti ohun tí o máa kọ́kọ́ ṣe.",
    reviewed_on: "2026-03-23",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario: Ìtọ́jú ìlera ní Ontario",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "Àkópọ̀ bí ìtọ́jú tí ìjọba ń sanwó fún ṣe ń ṣiṣẹ́ ní Ontario.",
      },
      {
        title: "Ontario: Forúkọ sílẹ̀ fún OHIP kí o sì gba káàdì ìlera",
        url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
        note: "Ìsọfúnni aláṣẹ nípa ìforúkọsílẹ̀ OHIP àti ẹ̀tọ́.",
      },
      {
        title: "Ontario: Wá dókítà ìdílé tàbí nurse practitioner",
        url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
        note: "Ìtọ́sọ́nà Health Care Connect àti ìwọlé sí ìtọ́jú ìpìlẹ̀.",
      },
      {
        title: "Canada: Interim Federal Health Program",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
        note: "Ìsọfúnni ìsanwó ìjọba àpapọ̀ fún àwọn asásálà tó ní ẹ̀tọ́ àti àwọn tó ń wá ipò asásálà.",
      },
    ],
    sections: [
      {
        id: "how-it-works",
        title: "Bí ìtọ́jú ìlera ṣe ń ṣiṣẹ́ ní Ontario",
        type: "default",
        content: `Ètò ìlera Ontario dá lórí **ìtọ́jú ìpìlẹ̀ (primary care)**. Ìtọ́jú ìpìlẹ̀ túmọ̀ sí ibi tí o sábà máa ń kọ́kọ́ bẹ̀rẹ̀ fún àwọn àìní ìlera ojoojúmọ́, àìsàn tó ń bá ni lọ, ìwé oògùn, referral, àti ìdènà àrùn. Olùtọ́jú ìpìlẹ̀ rẹ lè jẹ́ dókítà ìdílé, nurse practitioner (nọ́ọ̀sì tó lè ṣe àyẹ̀wò kó sì kọ oògùn), ẹgbẹ́ ilé ìlera àdúgbò, tàbí ilé ìwòsàn akẹ́kọ̀ọ́ bí o bá ní ẹ̀tọ́.

**Referral** ni nígbà tí oníṣègùn kan béèrè kí iṣẹ́ mìíràn tàbí alámọ̀já wò ọ́. **Requisition** ni fọ́ọ̀mù tó sọ fún láàbù tàbí ilé àwòrán ara irú àyẹ̀wò tí o nílò.

Kò pọn dandan kí o lóye gbogbo apá ètò náà ní ọjọ́ àkọ́kọ́. Àwọn ìgbésẹ̀ tó ṣe pàtàkì jù ni: kọ́ ètò ìsanwó rẹ, mọ ibi tí o máa lọ fún ìṣòro kíákíá, kí o sì ṣe ètò fún ìtọ́jú déédéé bí o kò bá tíì ní olùtọ́jú.`,
      },
      {
        id: "first-decisions",
        title: "Àwọn ìpinnu àkọ́kọ́",
        type: "grid",
        gridItems: [
          {
            title: "Mo lè nílò ìrànlọ́wọ́ kíákíá",
            content:
              "Bẹ̀rẹ̀ pẹ̀lú ìtọ́sọ́nà pàjáwìrì àti ìtọ́jú kíákíá bí o bá ní ìṣòro òjijì lónìí tàbí lálẹ́ yìí.",
            icon: "alert",
            link: { text: "Nílò Ìrànlọ́wọ́ Báyìí", url: "/need-help-now" },
          },
          {
            title: "Mi ò ní dókítà ìdílé",
            content:
              "Kọ́ bí dókítà ìdílé, nurse practitioner, ilé ìlera àdúgbò, ilé ìwòsàn walk-in, àti ilé ìwòsàn akẹ́kọ̀ọ́ ṣe jọ ń ṣiṣẹ́ pọ̀.",
            icon: "stethoscope",
            link: { text: "Wá Ìtọ́jú Ìpìlẹ̀", url: "/get-a-family-doctor" },
          },
          {
            title: "Mo nílò láti mọ ohun tí wọ́n ń sanwó fún",
            content:
              "Ka nípa OHIP, IFHP, ìnshọ́ránsì aládàáni, ètò akẹ́kọ̀ọ́, ìsanwó oògùn, àti àwọn ìnáwó tó wọ́pọ̀ tí ènìyàn ń san fúnra rẹ̀.",
            icon: "shield",
            link: { text: "Iye Owó àti Ètò Ìsanwó", url: "/costs-and-coverage" },
          },
          {
            title: "Mo nílò ìrànlọ́wọ́ èdè",
            content:
              "Ka ìtọ́sọ́nà yìí ní èdè 33 nípa lílo mẹ́nù Èdè, kí o sì béèrè nípa ìtìlẹ́yìn ògbufọ̀ fún àwọn ọ̀rọ̀ ìtọ́jú àti ìfọwọ́sí (consent).",
            icon: "info",
            link: { text: "Ìrọ̀rùn ìlò àti èdè", url: "/about#accessibility" },
          },
          {
            title: "Mo nílò àyẹ̀wò ẹ̀jẹ̀, àwòrán ara, tàbí refill",
            content:
              "Lo àkójọ iṣẹ́ àdúgbò láti wá ìgbésẹ̀ tó wúlò lẹ́yìn ìbẹ̀wò.",
            icon: "file",
            link: { text: "Wá Àwọn Iṣẹ́ Àdúgbò", url: "/local-services" },
          },
          {
            title: "Kò dá mi lójú ibi tí màá bẹ̀rẹ̀",
            content:
              "Pe Health811 fún ìmọ̀ràn nọ́ọ̀sì bí kò bá dá ọ lójú bí ọ̀rọ̀ rẹ ṣe yára tó.",
            icon: "clock",
            link: { text: "Health811 àti ìtọ́sọ́nà kíákíá", url: "/need-help-now#after-hours" },
          },
        ],
      },
      {
        id: "first-week",
        title: "Àwọn ìgbésẹ̀ àkọ́kọ́ tó dára ní ọ̀sẹ̀ àkọ́kọ́ rẹ",
        type: "steps",
        items: [
          "Kọ́ ètò ìsanwó rẹ: Ka ohun tí OHIP, IFHP, ìnshọ́ránsì aládàáni, àti ètò akẹ́kọ̀ọ́ sábà máa ń sanwó fún. Bí o bá lè ní ẹ̀tọ́ sí OHIP, forúkọ sílẹ̀ ní kété tí o bá lè.",
          "Yan ètò kíákíá rẹ: Mọ ìgbà tí o máa pe 911, ìgbà tí o máa bẹ̀rẹ̀ pẹ̀lú Health811, àti ibi tí o ti lè rí ìtọ́jú kíákíá tàbí ti ọjọ́ kan náà ní Kingston.",
          "Ṣe ètò fún ìtọ́jú déédéé: Bí o kò bá ní olùtọ́jú déédéé, kọ́ àwọn àṣàyàn rẹ fún dókítà ìdílé, nurse practitioner, ilé ìlera àdúgbò, ilé ìwòsàn akẹ́kọ̀ọ́, ilé ìwòsàn walk-in, àti ìtọ́jú orí ayélujára.",
          "Pa ìsọfúnni ìlera rẹ mọ́ pọ̀: Tọ́jú káàdì ìlera rẹ tàbí ìwé IFHP, àtòjọ oògùn, àkọsílẹ̀ abẹ́rẹ́ àjẹsára, àti ẹ̀dà requisition tàbí referral èyíkéyìí.",
        ],
      },
      {
        id: "if-no-coverage-yet",
        title: "Bí o kò bá tíì ní OHIP",
        type: "callout",
        content:
          "Má ṣe dúró títí tí o fi máa ṣàìsàn kí o tó kọ́ ọ̀nà ìsanwó rẹ. Bí o bá ní ẹ̀tọ́ sí OHIP, forúkọ sílẹ̀ ní kùtùkùtù. Bí IFHP tàbí ètò ilé ẹ̀kọ́ tàbí ti aládàáni bá ń bò ọ́, máa fi ìsọfúnni yẹn pamọ́ sọ́dọ̀ rẹ. Bí o kò bá ní ìnshọ́ránsì, béèrè nípa owó kí o tó lọ fún ìbẹ̀wò, kí o sì wá àwọn iṣẹ́ àdúgbò tàbí àwọn iṣẹ́ tí ìdíwọ́ wọn kéré níbi tí ó bá yẹ.",
        link: { text: "Ka nípa ètò ìsanwó", url: "/costs-and-coverage" },
      },
      {
        id: "keep-ready",
        title: "Jẹ́ kí àwọn nǹkan wọ̀nyí wà ní ìmúrasílẹ̀",
        type: "checklist",
        items: [
          "Káàdì ìlera rẹ, ìwé IFHP, tàbí ìsọfúnni ìnshọ́ránsì",
          "Àtòjọ oògùn, kódà bí o bá ń lo oògùn díẹ̀ péré",
          "Orúkọ àti nọ́mbà fóònù ilé ìwòsàn tàbí olùtọ́jú rẹ tó kẹ́yìn, bí o bá ní ọ̀kan",
          "Requisition, referral, ìwé ìjáde ilé ìwòsàn, tàbí ìlànà àyẹ̀wò àìpẹ́ èyíkéyìí",
          "Àwọn ìbéèrè tí o fẹ́ béèrè ní èdè tó rọrùn",
          "Kọ àìní ògbufọ̀ rẹ sílẹ̀ kí o lè rántí láti béèrè",
        ],
      },
    ],
  },
  "need-help-now": {
    title: "Ṣé O Nílò Ìrànlọ́wọ́ Báyìí?",
    description:
      "Lo ojú-ìwé yìí nígbà tí o bá ní ìṣòro ìlera lónìí tàbí lálẹ́ yìí tí kò sì dá ọ lójú ibi tí o máa bẹ̀rẹ̀.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario: Gba ìmọ̀ràn ìṣègùn láti ọ̀dọ̀ Health811",
        url: "https://www.ontario.ca/page/get-medical-advice-health811",
        note: "Iṣẹ́ ìmọ̀ràn nọ́ọ̀sì aláṣẹ, wákàtí 24, ọjọ́ 7.",
      },
      {
        title: "9-8-8: Suicide Crisis Helpline (laini ìdààmú ìpara-ẹni)",
        url: "https://988.ca/",
        note: "Laini ìdààmú ìpara-ẹni aláṣẹ ti orílẹ̀-èdè. Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8, ọ̀fẹ́, 24/7.",
      },
      {
        title: "Kingston Health Sciences Centre",
        url: "https://kingstonhsc.ca/",
        note: "Àjọ ilé ìwòsàn aláṣẹ fún ìsọfúnni pàjáwìrì, ìtọ́jú kíákíá, àti àwòrán ara.",
      },
      {
        title: "AMHS-KFLA",
        url: "https://www.amhs-kfla.ca/",
        note: "Àjọ àdúgbò aláṣẹ fún ìlera ọpọlọ àti ìtìlẹ́yìn ìdààmú.",
      },
    ],
    sections: [
      {
        id: "emergency-vs-urgent",
        title: "Pàjáwìrì ni tàbí kíákíá?",
        type: "comparison",
        comparison: {
          left: {
            title: "Lọ sí pàjáwìrì lẹ́sẹ̀kẹsẹ̀ fún àwọn ìṣòro bíi:",
            items: [
              "Ìrora àyà, ìṣòro mímí tó le, tàbí àmì àrùn rọpárọsẹ̀ (stroke)",
              "Ẹ̀jẹ̀ tí ń jáde lọ́pọ̀lọpọ̀, ìfarapa ńlá, tàbí dídákú",
              "Ìdàrúdàpọ̀ òjijì, gìrì, tàbí àléjì (allergy) tó le gan-an",
              "Pàjáwìrì ààbò níbi tí ìdúró lè fi ẹ̀mí tàbí ẹ̀yà ara sínú ewu",
            ],
          },
          right: {
            title:
              "Bẹ̀rẹ̀ pẹ̀lú ìtọ́jú kíákíá, Health811, tàbí ilé ìwòsàn ọjọ́ kan náà fún àwọn ìṣòro bíi:",
            items: [
              "Ríro ẹ̀yà ara, ojú ọgbẹ́ kékeré, roro ara, etí dídùn, tàbí ibà láìsí àmì ìkìlọ̀ pàjáwìrì",
              "Ìṣòro refill ìwé oògùn tí kò lè dúró de àdéhùn déédéé",
              "Àwọn ìbéèrè nípa bóyá o nílò ìtọ́jú kíákíá lálẹ́ yìí",
              "Ìṣòro tó dàbí kíákíá ṣùgbọ́n tí kò hàn gbangba pé ó lè gba ẹ̀mí",
            ],
          },
        },
      },
      {
        id: "after-hours",
        title: "Àwọn ipò tó wọ́pọ̀ lẹ́yìn àkókò iṣẹ́",
        type: "table",
        columns: ["Ipò", "Ìgbésẹ̀ àkọ́kọ́ tó dára", "Ohun tí o máa rántí"],
        rows: [
          {
            cells: [
              "Kò dá mi lójú bí èyí ṣe yára tó",
              "Pe Health811",
              "Nọ́ọ̀sì lè ràn ọ́ lọ́wọ́ láti pinnu bóyá kí o dúró sílé, wá ìtọ́jú kíákíá, tàbí lọ sí pàjáwìrì.",
            ],
          },
          {
            cells: [
              "Ọ́fíìsì dókítà mi ti tipa, mo sì nílò ìmọ̀ràn lálẹ́ yìí",
              "Health811 tàbí ìtọ́sọ́nà ìtọ́jú kíákíá",
              "Má ṣe rò pé pàjáwìrì nìkan ni àṣàyàn rẹ bí kò bá sí àmì ìkìlọ̀ pàjáwìrì.",
            ],
          },
          {
            cells: [
              "Mo nílò ìtọ́jú fún ọmọ mi",
              "Lo àwọn àmì ìkìlọ̀ pàjáwìrì kan náà, lẹ́yìn náà wá ìtọ́jú ọjọ́ kan náà tàbí pe Health811 bí kò bá dá ọ lójú",
              "Mú káàdì ìlera ọmọ náà, àtòjọ oògùn, àti àkókò tí àmì àìsàn bẹ̀rẹ̀ bí ó bá ṣeé ṣe.",
            ],
          },
          {
            cells: [
              "Mo nílò ìrànlọ́wọ́ ìlera ọpọlọ lálẹ́ yìí",
              "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8 (Suicide Crisis Helpline), tàbí pe laini ìdààmú AMHS-KFLA tó ń ṣiṣẹ́ 24/7",
              "Bí ewu bá wà lójú ẹsẹ̀ sí ààbò, pe 911.",
            ],
          },
        ],
        caption:
          "Ìtọ́sọ́nà gbogbogbò nìkan ni tábìlì yìí. Bí ẹnìkan bá lè wà nínú ewu lójú ẹsẹ̀, pe 911.",
      },
      {
        id: "kingston-start-points",
        title: "Àwọn ibi ìbẹ̀rẹ̀ ní Kingston",
        type: "grid",
        gridItems: [
          {
            title: "Ẹ̀ka Pàjáwìrì (Emergency Department)",
            content:
              "Lo ìtọ́jú pàjáwìrì fún àwọn ìṣòro tó lè gba ẹ̀mí tàbí tó ṣeé ṣe kí ó gba ẹ̀mí.",
            icon: "alert",
            link: {
              text: "Àwọn àkọsílẹ̀ pàjáwìrì àti kíákíá",
              url: "/local-services?category=emergency-urgent",
            },
          },
          {
            title: "Ilé Ìtọ́jú Kíákíá (Urgent Care Centre)",
            content:
              "Ó wúlò fún ọ̀pọ̀ ìṣòro ọjọ́ kan náà tí kò lè dúró ṣùgbọ́n tí kì í ṣe pàjáwìrì tó hàn gbangba.",
            icon: "clock",
            link: {
              text: "Ìtọ́jú kíákíá àti ti ọjọ́ kan náà",
              url: "/local-services?category=emergency-urgent&access=walk-in",
            },
          },
          {
            title: "Health811",
            content:
              "Ìmọ̀ràn nọ́ọ̀sì lórí fóònù tàbí orí ayélujára bí kò bá dá ọ lójú ibi tí o máa lọ. Ìrànlọ́wọ́ orí fóònù wà ní ọ̀pọ̀ èdè.",
            icon: "info",
            link: { text: "Àkọsílẹ̀ Health811", url: "/local-services/health811" },
          },
          {
            title: "Ìtìlẹ́yìn ìdààmú ìlera ọpọlọ",
            content:
              "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8 (Suicide Crisis Helpline) nígbàkigbà, tàbí lo ìtìlẹ́yìn ìdààmú àdúgbò bíi laini ìdààmú AMHS-KFLA tó ń ṣiṣẹ́ 24/7.",
            icon: "heart",
            link: { text: "Àwọn àkọsílẹ̀ ìlera ọpọlọ", url: "/local-services?category=mental-health" },
          },
          {
            title: "Ìtìlẹ́yìn lẹ́yìn ìwà ipá ìbálòpọ̀",
            content:
              "Lo ìtìlẹ́yìn ìdààmú alámọ̀já bí o bá nílò ìtìlẹ́yìn ẹ̀dùn ọkàn lẹ́sẹ̀kẹsẹ̀, agbawí (advocacy), tàbí ètò ààbò.",
            icon: "shield",
            link: {
              text: "Àwọn àkọsílẹ̀ ìtìlẹ́yìn",
              url: "/local-services?category=mental-health&q=sexual+assault",
            },
          },
          {
            title: "Àwọn àṣàyàn kíákíá fún akẹ́kọ̀ọ́",
            content:
              "Bí o bá jẹ́ akẹ́kọ̀ọ́, ṣàyẹ̀wò bóyá iṣẹ́ ìlera kámpọ́ọ̀sì rẹ ni ibi àkọ́kọ́ tó dára jù fún àwọn àìní tí kì í ṣe pàjáwìrì.",
            icon: "stethoscope",
            link: { text: "Àwọn àkọsílẹ̀ ìlera akẹ́kọ̀ọ́", url: "/local-services?audience=students" },
          },
        ],
      },
      {
        id: "what-to-do-next",
        title: "Bí kò bá ṣì dá ọ lójú",
        type: "callout",
        content:
          "Nígbà tí ìṣòro náà kò bá hàn gbangba pé ó lè gba ẹ̀mí ṣùgbọ́n tí ìdúró ń dà ọ́ láàmú, bẹ̀rẹ̀ pẹ̀lú Health811. Bí ẹnìkan kò bá lè wà láìléwu, tó ń burú sí i kíákíá, tàbí tí o kò lè rí ìrànlọ́wọ́ tó tọ́ lásìkò, lo iṣẹ́ pàjáwìrì.",
        link: { text: "Pe Health811", url: "tel:811" },
      },
      {
        id: "bring-with-you",
        title: "Mú àwọn wọ̀nyí lọ bí o bá lè",
        type: "checklist",
        items: [
          "Káàdì ìlera, ìwé IFHP, tàbí káàdì ìnshọ́ránsì èyíkéyìí tí o ní",
          "Àtòjọ oògùn tàbí fọ́tò àwọn ìgò oògùn",
          "Àkókò tí àmì àìsàn bẹ̀rẹ̀ àti ohunkóhun tó mú kí ó burú sí i",
          "Kọ àìní ògbufọ̀ rẹ sílẹ̀ bí ìdààmú bá lè mú kí o gbàgbé nígbà tó bá yá",
          "Ṣáàjà fóònù àti ẹni tí yóò tì ọ́ lẹ́yìn bí ìyẹn bá ràn ọ́ lọ́wọ́",
        ],
      },
    ],
  },
  "get-a-family-doctor": {
    title: "Wíwá Ìtọ́jú Ìpìlẹ̀ (Primary Care)",
    description:
      "Kọ́ àwọn ọ̀nà ọ̀tọ̀ọ̀tọ̀ sí ìtọ́jú ìlera déédéé ní Kingston bí o kò bá tíì ní olùtọ́jú.",
    reviewed_on: "2026-03-23",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario: Wá dókítà ìdílé tàbí nurse practitioner",
        url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
        note: "Ìtọ́sọ́nà aláṣẹ ti Health Care Connect.",
      },
      {
        title: "Kingston Community Health Centres",
        url: "https://kchc.ca/",
        note: "Ìsọfúnni aláṣẹ nípa àwọn iṣẹ́ ilé ìlera àdúgbò.",
      },
      {
        title: "Queen's Student Wellness Services",
        url: "https://www.queensu.ca/studentwellness/",
        note: "Ìsọfúnni ìlera akẹ́kọ̀ọ́ aláṣẹ fún àwọn akẹ́kọ̀ọ́ Queen's.",
      },
      {
        title: "St. Lawrence College Health and Wellness",
        url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
        note: "Ìsọfúnni ìlera akẹ́kọ̀ọ́ aláṣẹ fún àwọn akẹ́kọ̀ọ́ St. Lawrence College.",
      },
    ],
    sections: [
      {
        id: "what-primary-care-means",
        title: "Ohun tí ìtọ́jú ìpìlẹ̀ túmọ̀ sí",
        type: "default",
        content:
          "Ìtọ́jú ìpìlẹ̀ (primary care) ni ibi tí o sábà máa ń kọ́kọ́ lọ fún àwọn àìní ìlera ojoojúmọ́. Èyí ní àyẹ̀wò ara, ìmúdọ̀tun oògùn, ìtọ́jú àìsàn gígùn, referral, ìtọ́jú ìdènà, àti ìtẹ̀síwájú lẹ́yìn àwọn ìṣòro kíákíá nínú.\n\nNí Kingston, ọ̀nà ìtọ́jú ìpìlẹ̀ rẹ déédéé lè ní dókítà ìdílé, nurse practitioner, ilé ìlera àdúgbò, ilé ìwòsàn kámpọ́ọ̀sì, tàbí àkópọ̀ àwọn àṣàyàn ìgbà díẹ̀ nínú nígbà tí o bá ń dúró de ìtọ́jú tó dúró ṣinṣin.",
      },
      {
        id: "access-matrix",
        title: "Àwọn ọ̀nà ìwọlé sí ìtọ́jú ìpìlẹ̀",
        type: "table",
        columns: ["Ọ̀nà", "Ó dára jù fún", "Ẹni tó lè lò ó", "Bí o ṣe lè bẹ̀rẹ̀"],
        rows: [
          {
            cells: [
              "Dókítà ìdílé tàbí nurse practitioner",
              "Ìtọ́jú déédéé tó ń lọ àti ètò ìlera fún ìgbà pípẹ́",
              "Àwọn aláìsàn tó lè forúkọ sílẹ̀ pẹ̀lú olùtọ́jú kan",
              "Lo Health Care Connect kí o sì máa ṣọ́ àwọn àyè tó ṣí sílẹ̀ ní àdúgbò",
            ],
          },
          {
            cells: [
              "Ilé ìlera àdúgbò",
              "Ìtọ́jú orí àdúgbò, ìtìlẹ́yìn tí ìdíwọ́ rẹ̀ kéré, àti ìtọ́jú kan fún àwọn tó ṣẹ̀ṣẹ̀ dé tàbí tó ní àìní tó díjú",
              "Ẹ̀tọ́ dá lórí ètò àti ipò gbígba aláìsàn",
              "Kàn sí àjọ náà tààrà kí o sì béèrè nípa gbígba aláìsàn",
            ],
          },
          {
            cells: [
              "Iṣẹ́ ìlera akẹ́kọ̀ọ́",
              "Ìwọlé tó yára fún àwọn akẹ́kọ̀ọ́ tó forúkọ sílẹ̀",
              "Àwọn akẹ́kọ̀ọ́ tó ní ẹ̀tọ́ nípasẹ̀ ilé ẹ̀kọ́ nìkan",
              "Lo iṣẹ́ ìlera tàbí àlàáfíà kámpọ́ọ̀sì rẹ",
            ],
          },
          {
            cells: [
              "Ilé ìwòsàn walk-in tàbí ìtọ́jú kíákíá ọjọ́ kan náà",
              "Ìtọ́jú ìgbà díẹ̀ nígbà tí o bá ń dúró tàbí nígbà tí olùtọ́jú rẹ déédéé kò sí",
              "Gbogbo ènìyàn, gẹ́gẹ́ bí òfin gbígba aláìsàn ojoojúmọ́",
              "Ṣàyẹ̀wò ìwọlé lọ́wọ́lọ́wọ́ kí o tó lọ",
            ],
          },
          {
            cells: [
              "Ìtọ́jú ìpìlẹ̀ orí ayélujára",
              "Àwọn ọ̀rọ̀ refill, ìmọ̀ràn, àti ìṣòro déédéé kan",
              "Ó yàtọ̀ síra gẹ́gẹ́ bí olùtọ́jú àti ètò ìsanwó",
              "Ṣàyẹ̀wò ohun tí olùtọ́jú náà lè ṣe àti ohun tí kò lè ṣe láìléwu lórí ayélujára",
            ],
          },
        ],
        caption:
          "Ọ̀nà tó dára jù dá lórí ẹ̀tọ́ rẹ, bí ọ̀rọ̀ ṣe yára tó, àti bóyá o nílò ìtọ́jú ìgbà díẹ̀ tàbí èyí tó ń lọ títí.",
      },
      {
        id: "if-you-have-no-provider",
        title: "Bí o kò bá ní olùtọ́jú déédéé",
        type: "steps",
        items: [
          "Forúkọ sílẹ̀ nípasẹ̀ ọ̀nà aláṣẹ ti ìpínlẹ̀: Lo Health Care Connect bí o kò bá ní dókítà ìdílé tàbí nurse practitioner.",
          "Ṣàyẹ̀wò bóyá o ní ẹ̀tọ́ sí àwọn àṣàyàn kámpọ́ọ̀sì tàbí ìlera àdúgbò: Ó yẹ kí àwọn akẹ́kọ̀ọ́ bẹ̀rẹ̀ pẹ̀lú ilé ìwòsàn ilé ẹ̀kọ́ wọn. Àwọn iṣẹ́ ìlera àdúgbò kan ní àwọn àyànfẹ́ gbígba aláìsàn pàtó.",
          "Ṣe ètò ìgbà díẹ̀ tó láàbò: Mọ àwọn iṣẹ́ walk-in, kíákíá, orí ayélujára, fámásì, àti ìlera ọpọlọ tí o lè lò nígbà tí o bá ń dúró.",
          "Pa àkọsílẹ̀ tìrẹ mọ́: Tọ́jú àtòjọ oògùn, àbájáde àyẹ̀wò, referral, àti orúkọ àwọn oníṣègùn tí o rí.",
        ],
      },
      {
        id: "while-you-wait",
        title: "Ohun tí o lè ṣe nígbà tí o bá ń dúró",
        type: "checklist",
        items: [
          "Lo ìtọ́jú walk-in, kíákíá, tàbí orí ayélujára fún àwọn àìní ìgbà díẹ̀ níbi tí ó bá yẹ",
          "Béèrè lọ́wọ́ fámásì irú ìrànlọ́wọ́ refill tàbí ìtọ́jú àìsàn kéékèèké tó lè wà",
          "Máa lo àtòjọ oògùn kan ṣoṣo tí o ń ṣe ìmúdọ̀tun rẹ̀, kí o sì máa gbé e lọ sí gbogbo ìbẹ̀wò",
          "Mú ẹ̀dà àwọn àbájáde pàtàkì tàbí ìwé ìjáde ilé ìwòsàn lọ nígbà tí ìtọ́jú rẹ bá pín sí ibi púpọ̀",
          "Lo ilé ìwòsàn kan náà fún ìtẹ̀síwájú nígbà tí ó bá ṣeé ṣe kí ìtọ́jú rẹ lè wà ní ìṣọ̀kan díẹ̀ sí i",
        ],
      },
      {
        id: "next-best-option",
        title: "Bí àìní rẹ bá jẹ́ kíákíá ṣùgbọ́n kì í ṣe pàjáwìrì",
        type: "callout",
        content:
          "Àìní dókítà ìdílé kò túmọ̀ sí pé kí o sún ìtọ́jú pàtàkì síwájú. Lo àṣàyàn ìgbà díẹ̀ tó tọ́ fún ìṣòro tó wà níwájú rẹ, lẹ́yìn náà ṣe ètò fún ìtẹ̀síwájú ìtọ́jú lẹ́yìn tí a bá ti tọ́jú ìṣòro kíákíá náà.",
        link: { text: "Wá àwọn àṣàyàn ìtọ́jú ìpìlẹ̀", url: "/local-services?category=primary-care" },
      },
    ],
  },
  "costs-and-coverage": {
    title: "Iye Owó àti Ètò Ìsanwó (Coverage)",
    description:
      "Ìtọ́sọ́nà ní èdè tó rọrùn nípa OHIP, IFHP, Canadian Dental Care Plan, ètò akẹ́kọ̀ọ́ tàbí aládàáni, àti àwọn ìnáwó tó wọ́pọ̀ tí ènìyàn ń san fúnra rẹ̀.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario: Forúkọ sílẹ̀ fún OHIP kí o sì gba káàdì ìlera",
        url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
        note: "Ìtọ́sọ́nà OHIP aláṣẹ.",
      },
      {
        title: "Canada: Interim Federal Health Program",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
        note: "Ìsọfúnni ìsanwó IFHP aláṣẹ.",
      },
      {
        title: "Ontario Drug Benefit",
        url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
        note: "Ìtọ́sọ́nà aláṣẹ ti ìpínlẹ̀ nípa ìsanwó oògùn.",
      },
      {
        title: "Ontario: Gba ìrànlọ́wọ́ fún iye owó oògùn tó ga",
        url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
        note: "Ìtọ́sọ́nà aláṣẹ ti Trillium Drug Program.",
      },
      {
        title: "Canada: Canadian Dental Care Plan",
        url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
        note: "Ìsọfúnni aláṣẹ nípa ètò ìsanwó eyín ti ìjọba àpapọ̀ àti ẹ̀tọ́ rẹ̀.",
      },
    ],
    sections: [
      {
        id: "coverage-basics",
        title: "Ìpìlẹ̀ ètò ìsanwó",
        type: "default",
        content:
          "Ètò ìsanwó ní Ontario dá lórí ipò òfin rẹ, ọjọ́ orí, owó tí ń wọlé, ẹ̀tọ́ sí ètò, àti bóyá o ní ètò ìnshọ́ránsì ilé ẹ̀kọ́ tàbí aládàáni.\n\nỌ̀pọ̀ iṣẹ́ dókítà àti ilé ìwòsàn tó ṣe pàtàkì nípa ìṣègùn ni wọ́n ń sanwó fún fún àwọn aláìsàn OHIP tó ní ẹ̀tọ́. Ìyẹn **kò** túmọ̀ sí pé ohun gbogbo jẹ́ ọ̀fẹ́. Oògùn, ìtọ́jú eyín, ìtọ́jú ojú, fọ́ọ̀mù, ìwé àìsàn, àti ọ̀pọ̀ iṣẹ́ ìlera àfikún sábà máa ń ní ètò ìsanwó ọ̀tọ̀ tàbí sísan owó fúnra ẹni.\n\nÌròyìn ayọ̀ bí o bá ṣẹ̀ṣẹ̀ dé: **kò sí àkókò ìdúró fún OHIP**. Bí o bá ní ẹ̀tọ́, o lè forúkọ sílẹ̀ ní kété tí o bá dé sí Ontario, ìsanwó yóò sì bẹ̀rẹ̀ ní kété tí wọ́n bá fọwọ́ sí ìforúkọsílẹ̀ rẹ. Má ṣe dúró títí tí o fi máa ṣàìsàn kí o tó forúkọ sílẹ̀.",
      },
      {
        id: "coverage-matrix",
        title: "Àwọn ọ̀nà ìsanwó ní ṣókí",
        type: "table",
        columns: [
          "Irú ètò ìsanwó",
          "Ohun tó sábà máa ń ràn ọ́ lọ́wọ́ fún",
          "Ohun tí ó ṣì lè má sí lábẹ́ ìsanwó",
          "Ohun tí o máa ṣe lẹ́yìn náà",
        ],
        rows: [
          {
            cells: [
              "OHIP",
              "Ọ̀pọ̀ iṣẹ́ dókítà àti ilé ìwòsàn tó ṣe pàtàkì nípa ìṣègùn",
              "Ọ̀pọ̀ oògùn, ìtọ́jú eyín, ìtọ́jú ojú, àti fọ́ọ̀mù",
              "Forúkọ sílẹ̀ bí o bá ní ẹ̀tọ́ kí o sì jẹ́ kí káàdì rẹ wà ní ipò tuntun",
            ],
          },
          {
            cells: [
              "IFHP",
              "Ìsanwó fún àwọn asásálà tó ní ẹ̀tọ́ àti àwọn tó ń wá ipò asásálà gẹ́gẹ́ bí ètò ìjọba àpapọ̀",
              "Kúlẹ̀kúlẹ̀ yàtọ̀ síra gẹ́gẹ́ bí ẹ̀ka àti iṣẹ́",
              "Ṣàyẹ̀wò ìtọ́sọ́nà IFHP aláṣẹ kí o sì béèrè lọ́wọ́ ilé ìwòsàn tàbí fámásì bóyá wọ́n gbà á",
            ],
          },
          {
            cells: [
              "Ìnshọ́ránsì ilé ẹ̀kọ́ tàbí aládàáni",
              "Ó sábà máa ń ran ni lọ́wọ́ fún oògùn, ìgbani-nímọ̀ràn, eyín, ojú, àti ìlera àfikún",
              "Ààlà ìsanwó, owó àjọpín (co-pay), àti òfin nẹ́tíwọ́ọ̀kì yàtọ̀ síra",
              "Ka ìwé ètò náà kí o tó rò pé iṣẹ́ kan wà lábẹ́ ìsanwó",
            ],
          },
          {
            cells: [
              "Canadian Dental Care Plan (CDCP)",
              "Ìsanwó eyín fún àwọn olùgbé tó ní ẹ̀tọ́ tí kò ní ìnshọ́ránsì eyín aládàáni tí owó ìdílé wọn lẹ́yìn àtúnṣe kò sì tó $90,000",
              "Kì í ṣe gbogbo ìtọ́jú ni ó wà lábẹ́ rẹ̀, owó àjọpín sì lè wà gẹ́gẹ́ bí owó tí ń wọlé",
              "Ṣàyẹ̀wò ẹ̀tọ́ kí o sì forúkọ sílẹ̀ nípasẹ̀ ojú-ìwé CDCP aláṣẹ ti Ìjọba Canada",
            ],
          },
          {
            cells: [
              "Kò sí ètò ìsanwó kankan",
              "O ṣì lè rí àwọn iṣẹ́ kan gbà, ṣùgbọ́n owó lè wà",
              "Iye owó lè pọ̀ fún ìbẹ̀wò, àyẹ̀wò, tàbí oògùn",
              "Béèrè nípa owó kí o tó lọ fún ìbẹ̀wò, kí o sì wá àwọn àṣàyàn àdúgbò níbi tí ó bá yẹ",
            ],
          },
        ],
      },
      {
        id: "what-is-often-not-covered",
        title: "Ohun tí kì í sábà sí lábẹ́ ìsanwó ní kíkún",
        type: "checklist",
        items: [
          "Ọ̀pọ̀ oògùn tí dókítà kọ àyàfi bí o bá ní ẹ̀tọ́ sí ètò ìjọba tàbí o ní ètò mìíràn",
          "Ìtọ́jú eyín, àyàfi bí o bá ní ẹ̀tọ́ sí Canadian Dental Care Plan, Healthy Smiles Ontario, ètò eyín àdúgbò, tàbí ètò àǹfààní kan",
          "Ìtọ́jú ojú yàtọ̀ sí àwọn ọ̀nà ẹ̀tọ́ pàtó",
          "Physiotherapy (ìtọ́jú ara), ìgbani-nímọ̀ràn, ìfọwọ́ra ara, àti àwọn iṣẹ́ ìlera àfikún mìíràn àyàfi bí ètò kan bá sanwó fún wọn",
          "Fọ́ọ̀mù, lẹ́tà, owó àdéhùn tí o pàdánù, àti ọ̀pọ̀ owó ìṣàkóso mìíràn",
        ],
      },
      {
        id: "drug-coverage",
        title: "Àwọn ọ̀nà ìsanwó oògùn",
        type: "default",
        content:
          "Ìsanwó oògùn ni ibi tí ọ̀rọ̀ sábà máa ń ya àwọn tó ṣẹ̀ṣẹ̀ dé lẹ́nu. Wọ́n lè sanwó fún ìbẹ̀wò dókítà, ṣùgbọ́n oògùn náà lè ṣì ná ọ lówó.\n\nÀwọn ètò oògùn ìjọba lè ṣèrànwọ́ gẹ́gẹ́ bí ọjọ́ orí, owó tí ń wọlé, àti ẹ̀tọ́. **Ontario Drug Benefit** ń sanwó fún ọ̀pọ̀ oògùn fún àwọn ènìyàn tí ọjọ́ orí wọn jẹ́ 65 sókè àti àwọn ènìyàn nínú àwọn ètò kan, **OHIP+** sì ń sanwó fún ọ̀pọ̀ ìwé oògùn fún àwọn ènìyàn tí ọjọ́ orí wọn jẹ́ 24 sísàlẹ̀ tí kò ní ètò aládàáni. Ontario tún ní **Trillium Drug Program** fún àwọn ènìyàn kan tí iye owó oògùn wọn ga ní ìfiwéra pẹ̀lú owó tí ń wọ ilé wọn. Bí o bá ní ètò ilé ẹ̀kọ́ tàbí aládàáni, ṣàyẹ̀wò bóyá ó ń ṣiṣẹ́ pọ̀ pẹ̀lú ìsanwó ìjọba tàbí ó rọ́pò rẹ̀.",
      },
      {
        id: "coverage-scenarios",
        title: "Àwọn ìbéèrè ìsanwó tó wọ́pọ̀",
        type: "faq",
        faqs: [
          {
            question: "Mi ò tíì ní OHIP. Ṣé mo ṣì lè rí ìtọ́jú gbà?",
            answer:
              "Bẹ́ẹ̀ ni, ṣùgbọ́n owó lè wà, ọ̀nà tó dára jù sì dá lórí ipò rẹ àti bí ọ̀rọ̀ ṣe yára tó. Béèrè nípa iye owó kí o tó gba ìtọ́jú tí kì í ṣe pàjáwìrì nígbà tí ó bá ṣeé ṣe, kí o sì wo ẹ̀tọ́ IFHP tàbí ètò ilé ẹ̀kọ́ tàbí aládàáni bí ìyẹn bá kàn ọ́.",
          },
          {
            question: "Akẹ́kọ̀ọ́ ilẹ̀ òkèèrè ni mí. Ṣé OHIP nìkan ni àṣàyàn mi?",
            answer:
              "Kì í ṣe nígbà gbogbo. Ọ̀pọ̀ akẹ́kọ̀ọ́ máa ń gbára lé ètò ìnshọ́ránsì ilé ẹ̀kọ́ tàbí aládàáni dípò OHIP. Lo àwọn ìwé ètò aláṣẹ ti ilé ẹ̀kọ́ rẹ àti iṣẹ́ ìlera akẹ́kọ̀ọ́ láti jẹ́rìí sí ohun tó wà lábẹ́ ìsanwó.",
          },
          {
            question: "Ṣé oògùn mi yóò jẹ́ ọ̀fẹ́ bí wọ́n bá sanwó fún ìbẹ̀wò mi?",
            answer:
              "Kì í ṣe dandan. Ìsanwó fún ìbẹ̀wò àti ìsanwó fún ìwé oògùn sábà máa ń jẹ́ ọ̀tọ̀ọ̀tọ̀.",
          },
          {
            question: "Ṣé wọ́n ń sanwó fún ìtọ́jú eyín?",
            answer:
              "Ìtọ́jú eyín yàtọ̀ sí OHIP fún ọ̀pọ̀ àgbàlagbà. Canadian Dental Care Plan ti ìjọba àpapọ̀ ti ń bo ọ̀pọ̀ olùgbé báyìí tí kò ní ìnshọ́ránsì eyín aládàáni tí owó ìdílé wọn lẹ́yìn àtúnṣe kò sì tó $90,000 — ó sábà máa ń yẹ kí o ti fi ìwé orí (tax return) ti Canada sílẹ̀ kí o lè ní ẹ̀tọ́. Àwọn ọmọdé nínú àwọn ìdílé tí owó wọn kéré lè ní ẹ̀tọ́ sí Healthy Smiles Ontario, Kingston sì ní ilé ìwòsàn eyín àdúgbò fún àwọn ènìyàn nínú àwọn ètò pàtó.",
          },
          {
            question: "Báwo ni màá ṣe mọ̀ bóyá iṣẹ́ kan jẹ́ ti ìjọba, ti àdúgbò, tàbí ti aládàáni?",
            answer:
              "Lo àwọn asẹ́ àkójọ iṣẹ́ kí o sì wo kúlẹ̀kúlẹ̀ àkọsílẹ̀ náà. Bí kò bá dá ọ lójú, kàn sí iṣẹ́ náà kí o tó ṣe àdéhùn.",
          },
        ],
      },
    ],
  },
  "your-visit": {
    title: "Ìbẹ̀wò Ìtọ́jú Ìlera Rẹ",
    description:
      "Ohun tí o máa mú lọ, bí o ṣe lè béèrè ìbéèrè, àti bí o ṣe lè bára sọ̀rọ̀ láìléwu nígbà ìbẹ̀wò ìtọ́jú ìlera.",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Ontario: Ìtọ́jú ìlera ní Ontario",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "Ìtọ́sọ́nà gbogbogbò nípa ètò náà.",
      },
    ],
    sections: [
      {
        id: "what-to-bring",
        title: "Ohun tí o máa mú lọ",
        type: "checklist",
        items: [
          "Káàdì ìlera rẹ, ìwé IFHP, tàbí ìsọfúnni ìnshọ́ránsì mìíràn",
          "Àtòjọ oògùn pípé, pẹ̀lú fítámì àti àwọn oògùn tí a ń rà láìsí ìwé dókítà",
          "Orúkọ àwọn àmì àìsàn, ìgbà tí wọ́n bẹ̀rẹ̀, àti ohun tó yí padà",
          "Àwọn ìbéèrè tí o fẹ́ kí wọ́n dáhùn kí o tó kúrò",
          "Requisition, referral, ìwé ìjáde ilé ìwòsàn, tàbí àbájáde àyẹ̀wò àìpẹ́ èyíkéyìí",
          "Kọ àìní ògbufọ̀ rẹ sílẹ̀ kí o lè rántí láti béèrè",
        ],
      },
      {
        id: "during-the-visit",
        title: "Nígbà ìbẹ̀wò náà",
        type: "steps",
        items: [
          "Bẹ̀rẹ̀ pẹ̀lú ìṣòro rẹ pàtàkì jù: Ọ̀pọ̀ àdéhùn ìpàdé máa ń kúrú, nítorí náà bẹ̀rẹ̀ pẹ̀lú ọ̀rọ̀ tó ṣe pàtàkì jù lónìí.",
          "Lo èdè tó rọrùn: Kò burú láti sọ pé, 'Ọ̀rọ̀ yẹn kò yé mi' tàbí 'Ṣé o lè ṣàlàyé rẹ̀ ní ọ̀nà tó rọrùn sí i?'",
          "Tún ètò náà sọ padà: Kí o tó kúrò, sọ àwọn ìgbésẹ̀ tó kàn jáde sókè kí o lè mọ̀ bóyá o nílò àyẹ̀wò, referral, refill, tàbí àdéhùn ìtẹ̀síwájú.",
          "Béèrè ohun tó máa ṣẹlẹ̀ bí nǹkan bá burú sí i: Ó yẹ kí o mọ ìgbà tí o máa pè padà, ìgbà tí o máa lo ìtọ́jú kíákíá, àti ìgbà tí o máa lo ìtọ́jú pàjáwìrì.",
        ],
      },
      {
        id: "interpreter-help",
        title: "Ìrànlọ́wọ́ ògbufọ̀ àti ìbánisọ̀rọ̀",
        type: "default",
        content:
          "Bí o bá nílò ìrànlọ́wọ́ èdè, béèrè ní kùtùkùtù. Má ṣe dúró títí di òpin àdéhùn ìpàdé náà. O lè ka ojúlé wẹ́ẹ̀bù yìí ní oríṣiríṣi èdè nípa lílo mẹ́nù Èdè, ṣùgbọ́n ìtumọ̀ ojúlé wẹ́ẹ̀bù kò gbọ́dọ̀ rọ́pò ìtìlẹ́yìn ògbufọ̀ fún ìpinnu ìtọ́jú, ìlànà oògùn, tàbí ìfọwọ́sí (consent).\n\nO lè sọ pé: **'Mo nílò ògbufọ̀, jọ̀wọ́.'** Health811 (pe 811) tún ní ìrànlọ́wọ́ orí fóònù ní ọ̀pọ̀ èdè. Bí ẹnìkan bá bá ọ lọ láti tì ọ́ lẹ́yìn, rántí pé ọmọ ìdílé lè má jẹ́ ẹni tó dára jù tàbí tó láàbò jù láti túmọ̀ ìsọfúnni ìṣègùn tó díjú tàbí tó ṣe kókó.",
      },
      {
        id: "questions-to-ask",
        title: "Àwọn ìbéèrè tó yẹ ní bíbéèrè",
        type: "checklist",
        items: [
          "Kí ni o rò pé ó ń ṣẹlẹ̀?",
          "Kí ni kí n ṣe lẹ́yìn náà?",
          "Ṣé mo nílò àyẹ̀wò, requisition, referral, tàbí ìbẹ̀wò ìtẹ̀síwájú?",
          "Nígbà wo ni kí n retí láti gbọ́ àbájáde?",
          "Àwọn àmì ìkìlọ̀ wo ló túmọ̀ sí pé kí n pè padà tàbí kí n wá ìrànlọ́wọ́ kíákíá?",
        ],
      },
      {
        id: "privacy",
        title: "Àṣírí àti ìfọwọ́sí",
        type: "default",
        content:
          "Ìsọfúnni ìlera rẹ ṣe kókó. Bí kò bá dá ọ lójú ẹni tí yóò rí ìsọfúnni rẹ, béèrè. Bí fọ́ọ̀mù kan, ọ̀rọ̀ ìfọwọ́sí (consent), tàbí ètò ìtọ́jú kò bá yé ọ, jẹ́ kí ìlànà náà lọ́ra kí o sì béèrè fún àlàyé tó ṣe kedere sí i.",
      },
    ],
  },
  "after-visit": {
    title: "Lẹ́yìn Ìbẹ̀wò Náà",
    description:
      "Kọ́ ohun tó máa ń ṣẹlẹ̀ lẹ́yìn ìbẹ̀wò, pẹ̀lú requisition, àbájáde àyẹ̀wò, referral, àti ìgbà tí o máa pè padà.",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Kingston Health Sciences Centre",
        url: "https://kingstonhsc.ca/",
        note: "Ìsọfúnni nípa ètò ilé ìwòsàn àdúgbò.",
      },
      {
        title: "LifeLabs",
        url: "https://www.lifelabs.com/",
        note: "Ìsọfúnni nípa ìlànà láàbù àdúgbò àti ojú-ọ̀nà aláìsàn.",
      },
    ],
    sections: [
      {
        id: "results-journey",
        title: "Ohun tó sábà máa ń ṣẹlẹ̀ lẹ́yìn ìbẹ̀wò",
        type: "steps",
        items: [
          "O kúrò pẹ̀lú ètò kan: Èyí lè ní oògùn, requisition, referral, àdéhùn ìtẹ̀síwájú, tàbí ìlànà láti máa ṣọ́ àwọn àmì ìkìlọ̀ nínú.",
          "O lè nílò láti ṣe ìgbésẹ̀ tó kàn fúnra rẹ: Fún àpẹẹrẹ, o lè nílò láti ṣe àdéhùn àyẹ̀wò ẹ̀jẹ̀, àwòrán ara, gbígba oògùn ní fámásì, tàbí ìbẹ̀wò ìtẹ̀síwájú.",
          "Àbájáde sábà máa ń padà sọ́dọ̀ oníṣègùn tó pàṣẹ wọn: Láàbù tàbí ilé àwòrán ara lè má ṣàlàyé àbájáde fún ọ lójú ẹsẹ̀.",
          "Wọ́n lè má pè ọ́ fún gbogbo àbájáde tó dára: Béèrè bí ilé ìwòsàn náà ṣe ń ṣe ìtẹ̀síwájú kí o lè mọ ohun tí o máa retí.",
        ],
      },
      {
        id: "common-terms",
        title: "Àwọn ọ̀rọ̀ tó wọ́pọ̀ lẹ́yìn ìbẹ̀wò",
        type: "table",
        columns: ["Ọ̀rọ̀", "Ohun tó túmọ̀ sí ní èdè tó rọrùn", "Ohun tí o sábà máa ń ṣe lẹ́yìn náà"],
        rows: [
          {
            cells: [
              "Requisition",
              "Fọ́ọ̀mù tó sọ fún láàbù tàbí ilé àwòrán ara irú àyẹ̀wò tí o nílò",
              "Ṣe àdéhùn tàbí lọ fún àyẹ̀wò náà kí o sì pa ẹ̀dà kan mọ́ bí o bá lè",
            ],
          },
          {
            cells: [
              "Referral",
              "Ìbéèrè láti ọ̀dọ̀ oníṣègùn kan sí iṣẹ́ mìíràn tàbí alámọ̀já",
              "Dúró kí wọ́n kàn sí ọ, lẹ́yìn náà pè padà bí wọ́n bá sọ fún ọ pé kí o tẹ̀ lé e tí kò sì sí ohun tó ṣẹlẹ̀",
            ],
          },
          {
            cells: [
              "Ìtẹ̀síwájú (follow-up)",
              "Àyẹ̀wò ipò lẹ́yìn ìtọ́jú, àyẹ̀wò, tàbí ìyípadà nínú àmì àìsàn",
              "Béèrè ìgbà àti bí ìtẹ̀síwájú náà yóò ṣe wáyé kí o tó kúrò",
            ],
          },
        ],
      },
      {
        id: "when-to-call-back",
        title: "Ìgbà tí o máa pè padà",
        type: "checklist",
        items: [
          "Requisition, referral, tàbí ìlànà oògùn kò yé ọ",
          "Wọ́n sọ fún ọ pé ẹnìkan yóò kàn sí ọ, o kò sì tíì gbọ́ ohunkóhun láàrin àkókò tí wọ́n sọ",
          "Àmì àìsàn rẹ ń burú sí i tàbí kò sunwọ̀n sí i bí wọ́n ṣe sọ fún ọ pé kí o retí",
          "Fámásì, láàbù, tàbí ilé àwòrán ara sọ fún ọ pé ohun kan sọnù nínú ìwé náà",
          "O rò pé wọ́n lè ti fò àbájáde kan kọjá tàbí ọkàn rẹ kò ṣì balẹ̀",
        ],
      },
      {
        id: "after-visit-scenarios",
        title: "Àwọn ipò tó wọ́pọ̀",
        type: "faq",
        faqs: [
          {
            question: "Mo nílò àyẹ̀wò ẹ̀jẹ̀ lẹ́yìn ìbẹ̀wò. Kí ni kí n ṣe?",
            answer:
              "Ṣàyẹ̀wò bóyá o ní requisition àti bóyá láàbù náà fẹ́ kí o ṣe àdéhùn. Lẹ́yìn náà lo àkójọ iṣẹ́ láti wá ibi láàbù kan. Mú requisition náà àti ìsọfúnni ètò ìsanwó rẹ lọ.",
          },
          {
            question: "Fọ́ọ̀mù requisition tàbí referral kò yé mi.",
            answer:
              "Pe ilé ìwòsàn tó fún ọ kí o sì ní kí wọ́n ṣàlàyé rẹ̀ ní èdè tó rọrùn. Ó bọ́gbọ́n mu láti béèrè ohun tí fọ́ọ̀mù náà wà fún, ibi tó yẹ kó lọ, àti bóyá o nílò láti ṣe àdéhùn ohunkóhun fúnra rẹ.",
          },
          {
            question: "Ta ló máa tẹ̀ lé àbájáde àyẹ̀wò?",
            answer:
              "Oníṣègùn tó pàṣẹ àyẹ̀wò náà ni ó sábà máa ń ṣe é. Béèrè lọ́wọ́ ọ́fíìsì oníṣègùn yẹn bí wọ́n ṣe máa ń ṣe déédéé fún àbájáde tó dára àti èyí tí kò dára.",
          },
          {
            question: "Báwo ni referral ṣe máa ń pẹ́ tó?",
            answer:
              "Àkókò referral yàtọ̀ síra gan-an. Béèrè irú ìdúró tó jẹ́ déédéé fún ipò rẹ àti ohun tí o máa ṣe bí o kò bá gbọ́ ìró kankan.",
          },
        ],
      },
      {
        id: "next-step-links",
        title: "Àwọn ìgbésẹ̀ tó kàn tó wúlò",
        type: "grid",
        gridItems: [
          {
            title: "Wá láàbù àti àwòrán ara",
            content:
              "Lo àkójọ iṣẹ́ fún àyẹ̀wò ẹ̀jẹ̀, X-ray, ultrasound, àti àwọn àkọsílẹ̀ àwòrán ara.",
            icon: "file",
            link: { text: "Láàbù àti àwòrán ara", url: "/local-services?category=labs-imaging" },
          },
          {
            title: "Wá fámásì kan",
            content:
              "Lo àkójọ iṣẹ́ fún àwọn fámásì, ìrànlọ́wọ́ refill, àti ìtìlẹ́yìn oògùn.",
            icon: "shield",
            link: { text: "Àwọn fámásì", url: "/local-services?category=pharmacies" },
          },
          {
            title: "Ṣé o nílò láti gbèrò ìtọ́jú ìtẹ̀síwájú?",
            content:
              "Lo ojú-ìwé ìtọ́jú ìpìlẹ̀ bí o kò bá mọ ibi tí ìtẹ̀síwájú ìgbà pípẹ́ yẹ kó ti wáyé.",
            icon: "stethoscope",
            link: { text: "Wá Ìtọ́jú Ìpìlẹ̀", url: "/get-a-family-doctor" },
          },
        ],
      },
    ],
  },
  "medicines-and-pharmacies": {
    title: "Oògùn àti Àwọn Fámásì",
    description:
      "Lóye ìwé oògùn, refill, ìrànlọ́wọ́ fámásíìsì, àti bí o ṣe lè san owó oògùn ní Ontario.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario: Ohun tí àwọn fámásíìsì lè ṣe",
        url: "https://www.ontario.ca/page/pharmacies",
        note: "Ìsọfúnni aláṣẹ ti ìpínlẹ̀ nípa fámásíìsì àti fámásì.",
      },
      {
        title: "Ontario Drug Benefit",
        url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
        note: "Ìtọ́sọ́nà aláṣẹ ti ìpínlẹ̀ nípa ìsanwó oògùn.",
      },
      {
        title: "Ontario: Gba ìrànlọ́wọ́ fún iye owó oògùn tó ga",
        url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
        note: "Ìtọ́sọ́nà aláṣẹ ti Trillium Drug Program.",
      },
    ],
    sections: [
      {
        id: "pharmacist-role",
        title: "Ohun tí fámásíìsì lè ràn ọ́ lọ́wọ́ fún",
        type: "default",
        content:
          "Iṣẹ́ fámásíìsì (pharmacist) ju pípín oògùn lọ. Wọ́n lè ṣàlàyé bí o ṣe lè lo oògùn láìléwu, ṣàyẹ̀wò bí oògùn ṣe lè kọlu ara wọn, kí wọ́n sì ṣàtúnyẹ̀wò àwọn ipa ẹ̀gbẹ́.\n\nNí Ontario, àwọn fámásíìsì tún lè **ṣe àyẹ̀wò kí wọ́n sì kọ oògùn fún àìsàn kéékèèké 19 tó wọ́pọ̀** — pẹ̀lú ojú pupa (pink eye), egbò ètè (cold sores), àkóràn ojú ọ̀nà ìtọ̀ (nínú àwọn obìnrin), ibi tí kòkòrò jẹ ni, àti àléjì ìgbà (seasonal allergies). Àyẹ̀wò náà jẹ́ ọ̀fẹ́ pẹ̀lú káàdì ìlera Ontario rẹ, àtòjọ àwọn àìsàn náà sì lè máa pọ̀ sí i.\n\nFámásì tún jẹ́ ọ̀kan lára àwọn ibi tó dára jù láti béèrè àwọn ìbéèrè tó wúlò bíi: **Ṣé refill yìí jẹ́ kíákíá? Ṣé àṣàyàn tó wọ́n din wà? Kí ni kí n ṣe bí mo bá gbàgbé ìwọ̀n oògùn kan?**",
      },
      {
        id: "fill-a-prescription",
        title: "Bí o ṣe lè gba oògùn pẹ̀lú ìwé oògùn",
        type: "steps",
        items: [
          "Gba ìwé oògùn náà: Ó lè jẹ́ bébà, èyí tí a fi fáàṣì ránṣẹ́, tàbí èyí tí a fi ránṣẹ́ lórí ẹ̀rọ.",
          "Yan fámásì kan: Lílo fámásì kan náà déédéé máa ń ràn wọ́n lọ́wọ́ láti rí ìkọlu oògùn àti ìṣòro ìtàn refill.",
          "Béèrè nípa àkókò àti iye owó: Fámásì lè sọ fún ọ ìgbà tí yóò ṣetán àti bóyá ètò rẹ ń sanwó fún un.",
          "Fetí sí ìmọ̀ràn wọn: Béèrè ohun tí oògùn náà wà fún, bí o ṣe máa lò ó, àti ìgbà tí o máa pè padà bí kò bá ṣèrànwọ́.",
        ],
      },
      {
        id: "refill-options",
        title: "Refill àti àwọn ìṣòro oògùn",
        type: "table",
        columns: ["Ipò", "Ìgbésẹ̀ àkọ́kọ́ tó dára", "Ìdí"],
        rows: [
          {
            cells: [
              "Mo nílò refill déédéé",
              "Bẹ̀rẹ̀ pẹ̀lú fámásì rẹ déédéé tàbí oníṣègùn rẹ déédéé",
              "Wọ́n lè sọ fún ọ bóyá refill, ìmúdọ̀tun, tàbí àdéhùn tuntun ni o nílò",
            ],
          },
          {
            cells: [
              "Dókítà mi kò sí, oògùn mi sì lè tán",
              "Béèrè lọ́wọ́ fámásì àwọn àṣàyàn tó wà, lẹ́yìn náà lo walk-in, orí ayélujára, tàbí ìtọ́jú kíákíá bí o bá nílò rẹ̀",
              "Ìgbésẹ̀ tó láàbò jù dá lórí oògùn náà àti ipò rẹ",
            ],
          },
          {
            cells: [
              "Bí mo ṣe máa lo oògùn yìí kò yé mi",
              "Ní kí fámásíìsì tún ṣàlàyé rẹ̀ ní èdè tó rọrùn",
              "Ara lílo oògùn láìléwu ni èyí",
            ],
          },
          {
            cells: [
              "Oògùn náà wọ́n jù",
              "Béèrè nípa ẹ̀dà generic (oògùn kan náà tó wọ́n din), ìsanwó ètò rẹ, àti àwọn ètò ìjọba",
              "Iye owó oògùn yàtọ̀ síra, ìsanwó rẹ̀ sì sábà máa ń yàtọ̀ sí ti ìbẹ̀wò fúnra rẹ̀",
            ],
          },
        ],
      },
      {
        id: "paying-for-medicines",
        title: "Àwọn ọ̀nà tí a lè gbà san owó oògùn",
        type: "checklist",
        items: [
          "Ètò oògùn ìjọba, bí o bá ní ẹ̀tọ́",
          "Ètò ìnshọ́ránsì ilé ẹ̀kọ́ tàbí aládàáni",
          "Àkópọ̀ ìsanwó ìjọba àti ti aládàáni",
          "Sísan owó fúnra ẹni bí kò bá sí ètò tó bo oògùn náà",
        ],
      },
      {
        id: "pharmacy-links",
        title: "Ṣé o nílò ìrànlọ́wọ́ fámásì àdúgbò?",
        type: "callout",
        content:
          "Lo àkójọ iṣẹ́ láti wá àwọn fámásì, ìtìlẹ́yìn refill, àti àwọn àṣàyàn orí ayélujára tàbí ti ọjọ́ kan náà nígbà tí o bá ń gbìyànjú láti yanjú ìṣòro oògùn kíákíá.",
        link: { text: "Wá àwọn àkọsílẹ̀ fámásì", url: "/local-services?category=pharmacies" },
      },
    ],
  },
  "mental-health": {
    title: "Ìtìlẹ́yìn Ìlera Ọpọlọ",
    description:
      "Ìlera ọpọlọ àdúgbò, ìgbani-nímọ̀ràn, ìtìlẹ́yìn ọ̀dọ́, àti àwọn ọ̀nà ìdààmú ní Kingston.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "9-8-8: Suicide Crisis Helpline (laini ìdààmú ìpara-ẹni)",
        url: "https://988.ca/",
        note: "Laini ìdààmú ìpara-ẹni aláṣẹ ti orílẹ̀-èdè. Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8, ọ̀fẹ́, 24/7.",
      },
      {
        title: "AMHS-KFLA",
        url: "https://www.amhs-kfla.ca/",
        note: "Ìsọfúnni aláṣẹ nípa ìlera ọpọlọ àgbàlagbà àti ìtìlẹ́yìn ìdààmú.",
      },
      {
        title: "ConnexOntario",
        url: "https://www.connexontario.ca/",
        note: "Laini ìrànlọ́wọ́ aláṣẹ ti Ontario fún ìlera ọpọlọ àti ìṣòro oògùn olóró.",
      },
      {
        title: "Maltby Centre",
        url: "https://maltbycentre.ca/",
        note: "Ìsọfúnni aláṣẹ nípa ìlera ọpọlọ ọmọdé àti ọ̀dọ́.",
      },
    ],
    sections: [
      {
        id: "crisis",
        title: "Bí ẹnìkan kò bá lè wà láìléwu",
        type: "callout",
        content:
          "Bí ewu bá wà lójú ẹsẹ̀ sí ẹ̀mí tàbí ààbò, pe 911. Fún èrò ìpara-ẹni tàbí ìdààmú tó pọ̀ jù, o lè **pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8** (Suicide Crisis Helpline) nígbàkigbà — ó jẹ́ ọ̀fẹ́, àṣírí rẹ̀ wà ní ìpamọ́, ó sì wà ní wákàtí 24, ọjọ́ 7 ní èdè Gẹ̀ẹ́sì àti Faransé. O tún lè pe laini ìdààmú AMHS-KFLA tó ń ṣiṣẹ́ 24/7 ní 613-544-4229. Má ṣe dúró de àdéhùn déédéé.",
        link: { text: "Àwọn àkọsílẹ̀ ìlera ọpọlọ", url: "/local-services?category=mental-health" },
      },
      {
        id: "support-types",
        title: "Àwọn irú ìtìlẹ́yìn",
        type: "grid",
        gridItems: [
          {
            title: "Ìtìlẹ́yìn ìdààmú",
            content:
              "Lo èyí fún ìdààmú lójú ẹsẹ̀, àníyàn nípa ààbò, tàbí nígbà tí ìdúró kò láàbò.",
            icon: "alert",
          },
          {
            title: "Ìtìlẹ́yìn kíákíá",
            content:
              "Lo èyí nígbà tí ọ̀rọ̀ náà ṣe pàtàkì tí o sì nílò ìrànlọ́wọ́ láìpẹ́, ṣùgbọ́n tí kì í ṣe pàjáwìrì tó lè gba ẹ̀mí lójú ẹsẹ̀.",
            icon: "clock",
          },
          {
            title: "Ìgbani-nímọ̀ràn déédéé",
            content:
              "Lo èyí fún àníyàn tó ń bá ni lọ, ìrẹ̀wẹ̀sì ọkàn, wàhálà ọkàn, ìbànújẹ́ òfò, ìṣòro àjọṣe, tàbí àwọn ìyípadà ìgbé ayé.",
            icon: "heart",
          },
          {
            title: "Iṣẹ́ fún ọmọdé àti ọ̀dọ́",
            content:
              "Lo àwọn iṣẹ́ ìlera ọpọlọ ọ̀dọ́ alámọ̀já nígbà tí ẹni tó nílò ìtọ́jú bá jẹ́ ọmọdé tàbí ọ̀dọ́langba.",
            icon: "info",
          },
          {
            title: "Ìtìlẹ́yìn kámpọ́ọ̀sì",
            content:
              "Ó lè dára jù fún àwọn akẹ́kọ̀ọ́ láti kọ́kọ́ lo àwọn ọ̀nà àlàáfíà tàbí ìgbani-nímọ̀ràn kámpọ́ọ̀sì wọn.",
            icon: "stethoscope",
          },
          {
            title: "Ìtìlẹ́yìn lẹ́yìn ìwà ipá ìbálòpọ̀",
            content:
              "Lo ìtìlẹ́yìn alámọ̀já fún ìdààmú, ìgbani-nímọ̀ràn, agbawí (advocacy), àti ètò ààbò lẹ́yìn ìwà ipá ìbálòpọ̀.",
            icon: "shield",
          },
        ],
      },
      {
        id: "where-to-start",
        title: "Ibi tí o lè bẹ̀rẹ̀ ní àwọn ipò tó wọ́pọ̀",
        type: "table",
        columns: ["Ipò", "Ibi àkọ́kọ́ tó dára jù", "Ìdí"],
        rows: [
          {
            cells: [
              "Mo nílò ìrànlọ́wọ́ ìlera ọpọlọ lálẹ́ yìí",
              "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8, pe laini ìdààmú AMHS-KFLA, tàbí lo ìtọ́jú pàjáwìrì bí ààbò bá wà nínú ewu",
              "Má ṣe dúró de àdéhùn déédéé nígbà tí ipò náà kò bá dàbí èyí tó láàbò",
            ],
          },
          {
            cells: [
              "Mo nílò ìgbani-nímọ̀ràn ṣùgbọ́n mo wà láìléwu báyìí",
              "Ìgbani-nímọ̀ràn àdúgbò, dókítà ìdílé, nurse practitioner, tàbí ìtìlẹ́yìn ètò aládàáni",
              "Àwọn wọ̀nyí lè ṣèrànwọ́ fún ìtọ́jú tó ń lọ àti referral",
            ],
          },
          {
            cells: [
              "Mo nílò ìrànlọ́wọ́ fún ọmọ mi",
              "Iṣẹ́ ìlera ọpọlọ ọmọdé tàbí ọ̀dọ́ àti, bí o bá nílò rẹ̀, ìtọ́sọ́nà kíákíá",
              "Àwọn ọmọdé àti ọ̀dọ́ sábà máa ń ní ọ̀nà ọ̀tọ̀",
            ],
          },
          {
            cells: [
              "Akẹ́kọ̀ọ́ ni mí",
              "Ìlera tàbí ìgbani-nímọ̀ràn kámpọ́ọ̀sì lákọ̀ọ́kọ́, àyàfi bí ipò náà kò bá láàbò tàbí ó le gan-an",
              "Iṣẹ́ kámpọ́ọ̀sì lè jẹ́ ọ̀nà ìwọlé tó yára jù fún àwọn akẹ́kọ̀ọ́",
            ],
          },
        ],
      },
      {
        id: "mental-health-scenarios",
        title: "Àwọn ìbéèrè tó wọ́pọ̀",
        type: "faq",
        faqs: [
          {
            question: "Ta ni mo lè pè tàbí fi ọ̀rọ̀ ránṣẹ́ sí ní báyìí?",
            answer:
              "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí **9-8-8** (Suicide Crisis Helpline) nígbàkigbà, lọ́fẹ̀ẹ́, wákàtí 24, ọjọ́ 7 — kò nílò referral. Ní Kingston, laini ìdààmú AMHS-KFLA ní 613-544-4229 tún ń dáhùn 24/7. Bí ewu bá wà lójú ẹsẹ̀ sí ààbò, pe 911.",
          },
          {
            question: "Ǹjẹ́ bí mi ò bá mọ̀ bóyá èyí ka sí ìdààmú ńlá?",
            answer:
              "Bí ẹnìkan bá lè wà nínú ewu, má ṣe dúró de ìdánilójú. Lo ìtìlẹ́yìn ìdààmú tàbí iṣẹ́ pàjáwìrì.",
          },
          {
            question: "Ǹjẹ́ bí mo bá nílò ìrànlọ́wọ́ lálẹ́ yìí ṣùgbọ́n mi ò mọ ẹni tí màá pè?",
            answer:
              "Lo ojú-ìwé àkójọ ìlera ọpọlọ àdúgbò tàbí ọ̀nà ìtìlẹ́yìn ìdààmú dípò kí o dúró di àárọ̀.",
          },
          {
            question: "Ǹjẹ́ bí ẹni tó nílò ìrànlọ́wọ́ bá jẹ́ ọmọ mi?",
            answer:
              "Wá àwọn iṣẹ́ ọmọdé àti ọ̀dọ́ ní pàtó. Àwọn ọ̀nà ìlera ọpọlọ ọ̀dọ́ sábà máa ń yàtọ̀ sí ìtọ́jú àgbàlagbà.",
          },
        ],
      },
    ],
  },
  "screening-prevention": {
    title: "Àyẹ̀wò Ìṣáájú àti Ìdènà",
    description:
      "Kọ́ ìpìlẹ̀ ìtọ́jú ìdènà, abẹ́rẹ́ àjẹsára, àti àyẹ̀wò ìṣáájú (screening) ní Ontario.",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "KFL&A Public Health",
        url: "https://www.kflaph.ca/",
        note: "Ìsọfúnni àdúgbò nípa abẹ́rẹ́ àjẹsára àti ìlera gbogbogbò.",
      },
      {
        title: "Ontario: Ìtọ́jú ìlera ní Ontario",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "Ìtọ́sọ́nà ìtọ́jú ìlera gbogbogbò.",
      },
    ],
    sections: [
      {
        id: "prevention-basics",
        title: "Ìdí tí ìtọ́jú ìdènà fi ṣe pàtàkì",
        type: "default",
        content:
          "Ìtọ́jú ìdènà túmọ̀ sí gbígbìyànjú láti rí àwọn ìṣòro ní kùtùkùtù tàbí dá wọn dúró kí wọ́n tó le sí i. Èyí ní abẹ́rẹ́ àjẹsára, àyẹ̀wò ìṣáájú (screening), àyẹ̀wò ìfúnpá ẹ̀jẹ̀ déédéé, àti ìjíròrò pẹ̀lú oníṣègùn nípa àwọn ohun tó lè fa ewu nínú.",
      },
      {
        id: "common-prevention",
        title: "Àwọn iṣẹ́ ìdènà tó wọ́pọ̀",
        type: "checklist",
        items: [
          "Jẹ́ kí abẹ́rẹ́ àjẹsára rẹ wà ní ipò tuntun",
          "Béèrè bóyá wọ́n gba àyẹ̀wò ìṣáájú nímọ̀ràn fún ọjọ́ orí rẹ tàbí ìtàn ìlera rẹ",
          "Mú àwọn ìbéèrè rẹ nípa ìfúnpá ẹ̀jẹ̀, àtọ̀gbẹ (diabetes), tàbí àwọn ohun ewu mìíràn wá sí àwọn ìbẹ̀wò déédéé",
          "Lo àwọn ohun èlò ìlera gbogbogbò nígbà tí o bá nílò ìsọfúnni nípa abẹ́rẹ́ àjẹsára tàbí ìdènà",
        ],
      },
      {
        id: "prevention-next",
        title: "Ṣé o nílò àwọn iṣẹ́ ìdènà àdúgbò?",
        type: "callout",
        content:
          "Lo àkójọ àwọn iṣẹ́ àdúgbò fún ìlera gbogbogbò, àyẹ̀wò ìṣáájú, àti àwọn àkọsílẹ̀ fámásì bí o bá nílò ibi tó dájú láti bẹ̀rẹ̀ ní Kingston.",
        link: {
          text: "Àwọn àkọsílẹ̀ ìlera gbogbogbò àti fámásì",
          url: "/local-services?category=public-health",
        },
      },
    ],
  },
  "community-allied-health": {
    title: "Ìtọ́jú Àfikún àti ti Àdúgbò",
    description:
      "Lo ojú-ìwé yìí láti lóye ìtọ́jú nílé, eyín, rehab (ìtọ́jú ìmúpadàbọ̀ ara), ìgbani-nímọ̀ràn, ìtìlẹ́yìn ojú, àti ohun tó lè jẹ́ ti ìjọba, ti àdúgbò, ti akẹ́kọ̀ọ́, tàbí ti aládàáni.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Ontario Health atHome",
        url: "https://ontariohealthathome.ca/",
        note: "Ìsọfúnni aláṣẹ nípa ìṣètò ìtọ́jú nílé àti ti àdúgbò.",
      },
      {
        title: "Canada: Canadian Dental Care Plan",
        url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
        note: "Ìsọfúnni aláṣẹ nípa ètò ìsanwó eyín ti ìjọba àpapọ̀ àti ẹ̀tọ́ rẹ̀.",
      },
      {
        title: "Kingston Community Health Centres",
        url: "https://kchc.ca/",
        note: "Ìsọfúnni aláṣẹ nípa iṣẹ́ àdúgbò àti ti eyín.",
      },
      {
        title: "CNIB Foundation",
        url: "https://www.cnib.ca/",
        note: "Ìsọfúnni aláṣẹ nípa ìtìlẹ́yìn ojú.",
      },
    ],
    sections: [
      {
        id: "what-allied-means",
        title: "Ohun tí ìtọ́jú àfikún àti ti àdúgbò túmọ̀ sí",
        type: "default",
        content:
          "Ìlera àfikún (allied health) túmọ̀ sí ìtọ́jú láti ọwọ́ àwọn akọ́ṣẹ́mọṣẹ́ bíi physiotherapist (oníṣègùn ìtọ́jú ara), occupational therapist, onímọ̀ oúnjẹ, òṣìṣẹ́ àwùjọ, agbani-nímọ̀ràn, dókítà eyín, tàbí ẹgbẹ́ ìtìlẹ́yìn ojú. Ìtọ́jú àdúgbò sábà máa ń túmọ̀ sí ìtọ́jú tó ń wáyé lẹ́yìn òde ilé ìwòsàn ńlá, nígbà mìíràn nínú ilé rẹ, ilé ẹ̀kọ́, ilé ìwòsàn kékeré, tàbí ètò àdúgbò.",
      },
      {
        id: "access-payment-matrix",
        title: "Tábìlì ìwọlé àti ìsanwó",
        type: "table",
        columns: ["Ọ̀nà", "Àpẹẹrẹ", "Bí ìsanwó ṣe sábà máa ń rí", "Bí o ṣe lè bẹ̀rẹ̀"],
        rows: [
          {
            cells: [
              "Ìtọ́jú nílé àti ti àdúgbò tí ìjọba ń sanwó fún",
              "Iṣẹ́ nọ́ọ̀sì nílé, ìtọ́jú ara nílé, ìṣètò ìtọ́jú",
              "Àwọn ètò ìjọba lè kàn ọ́ bí o bá bá àwọn òfin ètò mu",
              "Bẹ̀rẹ̀ pẹ̀lú referral oníṣègùn tàbí ọ̀nà ìtọ́jú nílé aláṣẹ",
            ],
          },
          {
            cells: [
              "Àwọn iṣẹ́ orí àdúgbò",
              "Eyín ilé ìlera àdúgbò tàbí ìtìlẹ́yìn tí ìdíwọ́ rẹ̀ kéré",
              "Owó ìjọba tàbí ti àdúgbò lè kàn án gẹ́gẹ́ bí iṣẹ́ náà",
              "Kàn sí ètò náà tààrà kí o sì béèrè nípa ẹ̀tọ́",
            ],
          },
          {
            cells: [
              "Ìtìlẹ́yìn orí ilé ẹ̀kọ́",
              "Ìgbani-nímọ̀ràn kámpọ́ọ̀sì tàbí àwọn ìtìlẹ́yìn tó jẹ mọ́ ìlera",
              "Ó sábà máa ń so mọ́ ẹ̀tọ́ akẹ́kọ̀ọ́ àti owó tàbí ètò akẹ́kọ̀ọ́",
              "Kọ́kọ́ lo àwọn ojú-ìwé iṣẹ́ aláṣẹ ti ilé ẹ̀kọ́ rẹ",
            ],
          },
          {
            cells: [
              "Ìtọ́jú àfikún aládàáni",
              "Physiotherapy, ìgbani-nímọ̀ràn, ìfọwọ́ra ara, eyín aládàáni, iṣẹ́ ojú aládàáni",
              "Ó sábà máa ń jẹ́ sísan owó fúnra ẹni àyàfi bí ètò mìíràn bá bò ó",
              "Béèrè fún gbogbo owó àti òfin ìsanwó kí o tó ṣe àdéhùn",
            ],
          },
        ],
      },
      {
        id: "allied-examples",
        title: "Àwọn àpẹẹrẹ ìtọ́jú àfikún àti ti àdúgbò",
        type: "grid",
        gridItems: [
          {
            title: "Ìtọ́jú nílé",
            content:
              "Ó wúlò nígbà tí ẹnìkan bá nílò ìtìlẹ́yìn nílé lẹ́yìn àìsàn, ìfarapa, tàbí ìtọ́jú ilé ìwòsàn.",
            icon: "clock",
            link: {
              text: "Àwọn àkọsílẹ̀ ìtọ́jú nílé",
              url: "/local-services?category=allied-community&q=home+care",
            },
          },
          {
            title: "Ìtọ́jú eyín",
            content:
              "Ìsanwó eyín yàtọ̀ sí ìsanwó dókítà déédéé. Canadian Dental Care Plan ti ìjọba àpapọ̀ ti ń bo ọ̀pọ̀ ènìyàn báyìí tí kò ní ìnshọ́ránsì eyín aládàáni, àwọn ètò bíi Healthy Smiles Ontario àti àwọn ilé ìwòsàn eyín àdúgbò sì ń ran àwọn ẹgbẹ́ pàtó lọ́wọ́.",
            icon: "shield",
            link: {
              text: "Àwọn àkọsílẹ̀ eyín àti ti àdúgbò",
              url: "/local-services?category=allied-community&q=dental",
            },
          },
          {
            title: "Rehab àti ìtọ́jú ara",
            content:
              "Physiotherapy, occupational therapy, àti àwọn iṣẹ́ tó jọ wọ́n lè jẹ́ ti ìjọba, ti àdúgbò, tàbí ti aládàáni gẹ́gẹ́ bí ọ̀nà rẹ.",
            icon: "stethoscope",
            link: { text: "Àwọn àkọsílẹ̀ ìtọ́jú àfikún", url: "/local-services?category=allied-community" },
          },
          {
            title: "Ìtìlẹ́yìn ojú",
            content:
              "Ìtìlẹ́yìn ojú lè ní àwọn ohun èlò, ìrànlọ́wọ́ ìmọ̀ ọ̀nà, àti ìtìlẹ́yìn àdúgbò nínú àti ìtọ́jú ojú ti ìṣègùn pẹ̀lú.",
            icon: "info",
            link: {
              text: "Àwọn àkọsílẹ̀ ìtìlẹ́yìn ojú",
              url: "/local-services?category=allied-community&q=vision",
            },
          },
        ],
      },
      {
        id: "before-you-book",
        title: "Kí o tó ṣe àdéhùn",
        type: "checklist",
        items: [
          "Béèrè bóyá referral nílò",
          "Béèrè bóyá iṣẹ́ náà jẹ́ ti ìjọba, ti owó àdúgbò, tàbí sísan owó fúnra ẹni",
          "Béèrè fún iye owó gangan àti òfin ìfagilé bí iṣẹ́ náà bá jẹ́ ti aládàáni",
          "Ṣàyẹ̀wò bóyá ètò ilé ẹ̀kọ́ tàbí aládàáni rẹ ń san apá kan owó náà",
          "Béèrè bóyá o nílò láti mú àkọsílẹ̀, àwòrán ara, tàbí ìwé dókítà lọ",
        ],
      },
    ],
  },
  faq: {
    title: "FAQ àti Ìtumọ̀ Ọ̀rọ̀",
    description:
      "Àwọn ipò tó wọ́pọ̀ fún àwọn tó ṣẹ̀ṣẹ̀ dé, àwọn ìbéèrè tó wúlò, àti àwọn ìtumọ̀ ní èdè tó rọrùn.",
    reviewed_on: "2026-03-23",
    review_status: "general-guidance",
    sources: [
      {
        title: "Ontario: Ìtọ́jú ìlera ní Ontario",
        url: "https://www.ontario.ca/page/health-care-ontario",
        note: "Ìtọ́sọ́nà ìtọ́jú ìlera gbogbogbò ti ìpínlẹ̀.",
      },
      {
        title: "Ontario: Health811",
        url: "https://www.ontario.ca/page/get-medical-advice-health811",
        note: "Ìtọ́sọ́nà aláṣẹ nípa ìmọ̀ràn nọ́ọ̀sì.",
      },
    ],
    sections: [
      {
        id: "scenarios",
        title: "Àwọn ipò tó wọ́pọ̀ fún àwọn tó ṣẹ̀ṣẹ̀ dé",
        type: "faq",
        faqs: [
          {
            question: "Mi ò tíì ní OHIP. Kí ni kí n kọ́kọ́ ṣe?",
            answer:
              "Kọ́kọ́ kọ́ ọ̀nà ètò ìsanwó rẹ, lẹ́yìn náà lo àkójọ iṣẹ́ àdúgbò àti àwọn ojú-ìwé ìtọ́sọ́nà kíákíá láti ṣe ètò ìgbà díẹ̀ tó láàbò.",
          },
          {
            question: "Akẹ́kọ̀ọ́ ilẹ̀ òkèèrè ni mí. Níbo ni kí n ti bẹ̀rẹ̀?",
            answer:
              "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ ìlera tàbí àlàáfíà kámpọ́ọ̀sì rẹ àti àwọn ìwé ìnshọ́ránsì ilé ẹ̀kọ́ rẹ, lẹ́yìn náà lo àwọn iṣẹ́ àdúgbò tàbí kíákíá nígbà tí àwọn yẹn kò bá tó.",
          },
          {
            question: "Mo nílò ògbufọ̀.",
            answer:
              "Béèrè ní kùtùkùtù. O lè ka ojúlé wẹ́ẹ̀bù yìí ní èdè 33 nípa lílo mẹ́nù Èdè, o sì lè fi àwọn gbólóhùn kíákíá inú ojú-ìwé ìrànlọ́wọ́ ògbufọ̀ han àwọn òṣìṣẹ́. Fún àdéhùn ìpàdé, ìlànà oògùn, ìfọwọ́sí (consent), àti ìjíròrò àyẹ̀wò, béèrè nípa ìtìlẹ́yìn ògbufọ̀ akọ́ṣẹ́mọṣẹ́. Health811 (pe 811) ní ìrànlọ́wọ́ orí fóònù ní ọ̀pọ̀ èdè.",
          },
          {
            question: "Mo nílò àyẹ̀wò ẹ̀jẹ̀ lẹ́yìn ìbẹ̀wò.",
            answer:
              "Ṣàyẹ̀wò pé o ní requisition, lẹ́yìn náà wá láàbù àti àwòrán ara nínú àkójọ iṣẹ́.",
          },
          {
            question: "Mo nílò refill, dókítà mi kò sì sí.",
            answer:
              "Bẹ̀rẹ̀ pẹ̀lú fámásì rẹ, lẹ́yìn náà lo ọ̀nà walk-in, orí ayélujára, tàbí kíákíá bí ó bá yẹ, gẹ́gẹ́ bí oògùn náà àti bí ọ̀rọ̀ ṣe yára tó.",
          },
          {
            question: "Mo nílò ìtọ́jú fún ọmọ mi.",
            answer:
              "Kọ́kọ́ lo àwọn àmì ìkìlọ̀ pàjáwìrì, lẹ́yìn náà ìtọ́sọ́nà ọjọ́ kan náà tàbí kíákíá. Àwọn ọ̀nà ìlera ọpọlọ ọmọdé àti ọ̀dọ́ sábà máa ń yàtọ̀ sí ti àgbàlagbà.",
          },
          {
            question: "Mo nílò ìrànlọ́wọ́ ìlera ọpọlọ lálẹ́ yìí.",
            answer:
              "Pe tàbí fi ọ̀rọ̀ ránṣẹ́ sí 9-8-8 (Suicide Crisis Helpline) nígbàkigbà, tàbí pe laini ìdààmú AMHS-KFLA tó ń ṣiṣẹ́ 24/7 ní 613-544-4229. Lo ìtọ́jú pàjáwìrì bí ààbò bá wà nínú ewu. Má ṣe dúró de àdéhùn déédéé.",
          },
          {
            question: "Requisition tàbí referral kò yé mi.",
            answer:
              "Pe ilé ìwòsàn tó fún ọ kí o sì ní kí wọ́n ṣàlàyé rẹ̀ ní èdè tó rọrùn. O lè béèrè ohun tó wà fún, ibi tó ń lọ, àti ẹni tó yẹ kó tẹ̀ lé e.",
          },
        ],
      },
      {
        id: "more-questions",
        title: "Àwọn ìbéèrè mìíràn tó wọ́pọ̀",
        type: "faq",
        faqs: [
          {
            question: "Ṣé mo lè kàn lọ sí pàjáwìrì bí mi ò bá ní dókítà?",
            answer:
              "Pàjáwìrì wà fún pàjáwìrì. Bí ìṣòro náà kò bá hàn gbangba pé ó lè gba ẹ̀mí, bẹ̀rẹ̀ pẹ̀lú ojú-ìwé ìtọ́sọ́nà kíákíá, Health811, ilé ìwòsàn walk-in, tàbí ìtọ́jú ọjọ́ kan náà mìíràn.",
          },
          {
            question: "Ǹjẹ́ bí mo bá ṣẹ̀ṣẹ̀ dé tí mi ò sì mọ iṣẹ́ tó bá mi mu?",
            answer:
              "Lo àwọn asẹ́ àkójọ iṣẹ́ fún akẹ́kọ̀ọ́, àwọn tó ṣẹ̀ṣẹ̀ dé, ọmọdé àti ọ̀dọ́, walk-in, orí ayélujára, referral nílò, àti irú ètò ìsanwó.",
          },
          {
            question: "Ǹjẹ́ bí ìsọfúnni orí ojúlé wẹ́ẹ̀bù yìí bá dàbí èyí tó ti pẹ́?",
            answer:
              "Lo fọ́ọ̀mù ìjábọ̀ lórí ojú-ìwé tàbí àkọsílẹ̀ náà kí àtúnyẹ̀wò tó kàn lè dojú kọ ìyípadà tí o rí.",
          },
        ],
      },
      {
        id: "glossary",
        title: "Ìtumọ̀ Ọ̀rọ̀",
        type: "checklist",
        items: [
          "Ìtọ́jú ìpìlẹ̀ (primary care): Ọ̀nà ìtọ́jú ìlera rẹ déédéé fún àwọn àìní ojoojúmọ́ àti àwọn tó ń bá ni lọ.",
          "Nurse practitioner (NP): Nọ́ọ̀sì onímọ̀ gíga tó lè ṣe àyẹ̀wò, dá àìsàn mọ̀, kọ oògùn, àti ṣe referral ní ọ̀pọ̀ ipò.",
          "Referral: Ìbéèrè láti ọ̀dọ̀ oníṣègùn kan sí iṣẹ́ mìíràn tàbí alámọ̀já.",
          "Requisition: Fọ́ọ̀mù tó sọ fún láàbù tàbí ilé àwòrán ara irú àyẹ̀wò tí o nílò.",
          "Triage: Ìlànà ṣíṣe ìpinnu ẹni tó nílò ìtọ́jú kíákíá lákọ̀ọ́kọ́ gẹ́gẹ́ bí ààbò àti bí ọ̀rọ̀ ṣe le tó.",
          "Ilé ìwòsàn walk-in: Ilé ìwòsàn tó lè rí àwọn aláìsàn láìsí àdéhùn tí a ti ṣe tẹ́lẹ̀, gẹ́gẹ́ bí gbígba aláìsàn ojoojúmọ́.",
          "Ìtọ́jú kíákíá (urgent care): Ìtọ́jú ọjọ́ kan náà fún àwọn ìṣòro kíákíá tí kò hàn gbangba pé ó lè gba ẹ̀mí.",
          "Aláìsàn tó ní olùtọ́jú (rostered/attached patient): Aláìsàn tó ní àjọṣe tó ń lọ pẹ̀lú olùtọ́jú ìpìlẹ̀ déédéé kan.",
        ],
      },
    ],
  },
  about: {
    title: "Nípa Wa, Ìgbẹ́kẹ̀lé, àti Àṣírí",
    description:
      "Kọ́ bí ìtọ́sọ́nà yìí ṣe ń ṣiṣẹ́, bí a ṣe ń bójú tó orísun àti ipò àtúnyẹ̀wò, àti bí o ṣe lè jábọ̀ àwọn ìyípadà.",
    reviewed_on: "2026-06-11",
    review_status: "reviewed",
    sources: [
      {
        title: "Àkọsílẹ̀ orísun iṣẹ́ àgbékalẹ̀ náà",
        url: "https://myprimarycareguide.ca/about#sources",
        note: "Àkópọ̀ fún gbogbo ènìyàn nípa bí iṣẹ́ àgbékalẹ̀ yìí ṣe ń bójú tó ìgbẹ́kẹ̀lé àti orísun.",
      },
    ],
    sections: [
      {
        id: "mission",
        title: "Ohun tí ojúlé wẹ́ẹ̀bù yìí wà fún",
        type: "default",
        content:
          "MyPrimaryCareGuide.ca jẹ́ ìtọ́sọ́nà wíwá ìtọ́jú ìlera tó fi àwọn tó ṣẹ̀ṣẹ̀ dé sí ipò àkọ́kọ́ fún Kingston, Ontario. A ṣe é láti ran àwọn ènìyàn lọ́wọ́ láti yan ìgbésẹ̀ tó tọ́ tó kàn, lóye àwọn ọ̀rọ̀ ètò tó wọ́pọ̀, àti rí àwọn àkọsílẹ̀ iṣẹ́ àdúgbò tó ṣeé gbẹ́kẹ̀lé.\n\nOjúlé wẹ́ẹ̀bù yìí **kì í** ṣe ohun èlò àkókò ìdúró tí ń lọ lọ́wọ́, pèpéle ṣíṣe àdéhùn, tàbí iṣẹ́ ìmọ̀ràn ìṣègùn.",
      },
      {
        id: "sources",
        title: "Bí ìgbẹ́kẹ̀lé àti orísun ṣe ń ṣiṣẹ́",
        type: "default",
        content:
          "A máa ń gbìyànjú láti so àwọn àkọsílẹ̀ àdúgbò pọ̀ mọ́ àwọn ojú-ìwé iṣẹ́ aláṣẹ nígbàkigbà tí ó bá ṣeé ṣe. Àkọsílẹ̀ kọ̀ọ̀kan máa ń fi ipò àtúnyẹ̀wò àti ọjọ́ àtúnyẹ̀wò tó kẹ́yìn hàn. A ti jẹ́rìí sí àwọn àkọsílẹ̀ kan ní kíkún pẹ̀lú àwọn orísun aláṣẹ. Àwọn mìíràn ṣì nílò àtúnyẹ̀wò àdúgbò nítorí pé wákàtí iṣẹ́, gbígba aláìsàn, tàbí òfin ìwọlé máa ń yí padà lọ́pọ̀ ìgbà.\n\nÀwọn àkójọ orísun orí ojú-ìwé ń fi àwọn ìtọ́kasí aláṣẹ pàtàkì tí a lò fún àyíká àtúnyẹ̀wò lọ́wọ́lọ́wọ́ hàn.",
      },
      {
        id: "accessibility",
        title: "Ìrọ̀rùn ìlò àti èdè",
        type: "default",
        content:
          "A kọ́ ojúlé wẹ́ẹ̀bù yìí kí ó rọrùn fún kíbọ́ọ̀dù, kí ó kọ́kọ́ ṣiṣẹ́ dáadáa lórí fóònù, kí ó sì ṣeé kà ní èdè tó rọrùn.\n\nO lè ka odindi ìtọ́sọ́nà náà ní **èdè 33** nípa lílo mẹ́nù Èdè tó wà ní orí ojú-ìwé — láti العربية àti Soomaali dé ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, àti Українська — gbogbo ojú-ìwé àti mẹ́nù sì ń jáde tààrà lórí ojúlé wẹ́ẹ̀bù yìí. Ẹ̀rọ ló ran gbogbo àwọn ìtumọ̀ lọ́wọ́; Faransé, Sípáníìṣì, Lárúbáwá, àti Ṣáínà Onírọ̀rùn gba àyẹ̀wò àfikún kan, a sì samì sí àwọn yòókù gẹ́gẹ́ bí ìtumọ̀ aládàáṣe. **Èdè Gẹ̀ẹ́sì ṣì jẹ́ ẹ̀dà ìtọ́ka** — bí gbólóhùn tí a túmọ̀ bá dàbí èyí tí kò yé ọ tàbí tó yà ọ́ lẹ́nu, ṣàyẹ̀wò ọ̀rọ̀ Gẹ̀ẹ́sì tàbí ní kí ẹnìkan jẹ́rìí sí i.\n\nỌ̀pọ̀lọpọ̀ èdè mìíràn lè ṣí ojúlé wẹ́ẹ̀bù yìí nípasẹ̀ Google Translate láti inú mẹ́nù kan náà, ojú-ìwé ìrànlọ́wọ́ ògbufọ̀ sì ní àwọn gbólóhùn kíákíá fún pàjáwìrì ní èdè tó ju 20 lọ tí o lè fi han àwọn òṣìṣẹ́.\n\nÀwọn àkọsílẹ̀ àkójọ iṣẹ́ (orúkọ iṣẹ́, àdírẹ́sì, nọ́mbà fóònù, àti wákàtí iṣẹ́) máa wà ní èdè Gẹ̀ẹ́sì kí wọ́n lè bá àwọn orísun aláṣẹ mu gẹ́lẹ́.\n\nÌtumọ̀ irú èyíkéyìí ṣì lè ṣàṣìṣe fún àwọn kúlẹ̀kúlẹ̀ ìṣègùn, nítorí náà béèrè nípa ìtìlẹ́yìn ògbufọ̀ akọ́ṣẹ́mọṣẹ́ fún àdéhùn ìpàdé, ìlànà oògùn, àti ìfọwọ́sí (consent). Health811 (pe 811) ní ìrànlọ́wọ́ orí fóònù ní ọ̀pọ̀ èdè.",
      },
      {
        id: "privacy",
        title: "Àṣírí",
        type: "default",
        content:
          "Ojúlé wẹ́ẹ̀bù yìí kì í lo ìtúpalẹ̀ jíjìn tó ń wọ́ ọ̀rọ̀ ẹni. Ó ń pa àwọn òǹkà ìmúdára fẹ́ẹ́rẹ́ mọ́ sínú aṣàwákiri tìrẹ kí àwọn olùtọ́jú iṣẹ́ náà lè lóye àwọn ìwáàdí tó wọ́pọ̀, ìwáàdí tí kò ní àbájáde, ìwò iṣẹ́, àti ìjábọ̀ ìṣòro nígbà tí a bá mọ̀ọ́mọ̀ gbé ìsọfúnni náà jáde fún ìtọ́jú ojúlé wẹ́ẹ̀bù.\n\nMá ṣe fi ìsọfúnni ìṣègùn àdáni ránṣẹ́ nípasẹ̀ fọ́ọ̀mù èsì tàbí ímeèlì.",
      },
      {
        id: "contact",
        title: "Ìbánisọ̀rọ̀ àti jíjábọ̀ àwọn ìyípadà",
        type: "default",
        content:
          "Bí ojú-ìwé tàbí àkọsílẹ̀ kan bá dàbí èyí tí kò tọ́, lo fọ́ọ̀mù ìjábọ̀ lórí ojú-ìwé yẹn. Ó yẹ kí ìjábọ̀ ṣàpèjúwe ìṣòro náà, kì í ṣe ipò ìlera àdáni rẹ.\n\nÍmeèlì ìbánisọ̀rọ̀ gbogbogbò: **challengeat7@gmail.com**",
      },
      {
        id: "disclaimer",
        title: "Àlàyé ìkìlọ̀",
        type: "default",
        content:
          "Fún ìtọ́sọ́nà àti ẹ̀kọ́ nìkan ni ojúlé wẹ́ẹ̀bù yìí wà. Kì í ṣe ìmọ̀ràn ìṣègùn, kò sì lè rọ́pò àyẹ̀wò, ìtọ́jú, tàbí ìrànlọ́wọ́ pàjáwìrì lọ́dọ̀ akọ́ṣẹ́mọṣẹ́. Bí ipò kan bá lè gba ẹ̀mí, pe 911.",
      },
    ],
  },
};
