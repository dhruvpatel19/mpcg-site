import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Bogga waa la soo rarayaa...",
    directoryEnglishNote:
      "Liisaska adeegyada waxaa lagu muujiyaa Ingiriisi si magacyada adeegyada, cinwaannada, lambarada taleefanka, iyo saacadaha ay si sax ah ugu ekaadaan ilaha rasmiga ah.",
  },
  header: {
    emergencyBanner: "Xaalad degdeg ah oo naf halis gelinaysa? Wac 911 hadda.",
    tagline:
      "Hagid caafimaad oo dadka cusub mudnaan siisa Kingston, Ontario",
    languageButton: "Luqadda",
    languageButtonAria: "Caawimaadda luqadda iyo turjubaanka",
    openNavigation: "Fur hagidda bogga",
    primaryNavLabel: "Hagidda aasaasiga ah",
  },
  languageModal: {
    title: "Caawimaadda luqadda iyo turjubaanka",
    description:
      "Hagahan ku akhri luqadda kuugu fudud. Wadahadallada caafimaadka, weydiiso turjubaan markaad u baahato.",
    chooseLanguageTitle: "Dooro luqaddaada",
    chooseLanguageNote:
      "Hagahan waxaa si buuxda loogu turjumay 33 luqadood boggan gudihiisa, tobanaan luqadood oo kalena waxay ku furmaan turjumaad otomaatig ah. Liisaska adeegyadu waxay ku hadhaan Ingiriisi si ay si sax ah ugu ekaadaan ilaha rasmiga ah. Ingiriisigu waa nuqulka laga tixraaco haddii wax aan caddayn jiraan.",
    safetyTitle: "Ogeysiis badbaado",
    safetyBody:
      "Turjumaadda boggu waxay u taal akhris iyo faham. Ballamaha, tilmaamaha baaritaanka, daawooyinka, ama oggolaanshaha, weydii in kiliinikada ama isbitaalku bixin karaan turjubaan xirfad leh. Health811 (wac 811) waxay taleefan ku bixisaa taageero luqado badan.",
    phrasesTitle: "Weedho gaagaaban oo aad shaqaalaha tusto",
    phrasesNote:
      "Farta ku fiiqi luqaddaada oo sadarradan tus soo-dhaweynta ama shaqaalaha caafimaadka.",
    callHealth811: "Wac Health811",
    accessibilityCta: "Helitaanka iyo kalsoonida",
    close: "Xir daaqadda caawimaadda luqadda",
  },
  moreLanguages: {
    title: "Luqado kale (turjumaad otomaatig ah)",
    description:
      "Luqad kastaa waxay ka shaqaysaa liiskan keliya — oo ay ku jiraan Soomaali, Yoruba, Igbo, Hausa, Amxaari, Tigrinya, Sawaaxili, Yukreeniyaan, Faarsi, Urdu, Punjabi, Tamil, iyo Fiyetnaamiis.",
    selectLabel: "Dooro luqad kasta",
    selectPlaceholder: "Dhammaan luqadaha — mid dooro…",
    openButton: "Ku fur luqaddan",
    disclaimer:
      "Luqadaha ku calaamadaysan otomaatig waxay boggan ku furaan Google Translate, waxayna luqaddaada ku sii jiraan intaad sii baadhayso. Turjumaadda otomaatigga ah ma eegin mashruucan — way ku fiican tahay akhriska, laakiin faahfaahinta caafimaadka kala xaqiiji dhakhtar ama turjubaan.",
  },
  funding: {
    acknowledgment:
      "Mashruucan waxaa lagu taageeraa deeq ka timid Ontario Medical Students Association (OMSA).",
    logoAlt: "Astaanta Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Raadi luqadaha…",
    onSiteGroup: "Lagu turjumay boggan",
    proxyGroup: "Luqado kale oo loo maro Google Translate",
    reviewedBadge: "La eegay",
    automaticBadge: "Otomaatig",
    interpreterTab: "Caawimaad turjubaan iyo weedho",
    noMatches: "Ma jiraan luqado u dhigma raadintaada.",
    note: "Turjumaadaha waxaa lagu caawiyay mashiin, Ingiriisiguna waa nuqulka laga tixraaco haddii wax aan caddayn jiraan. Luqadaha kooxda Google Translate waxay boggan ku furaan bog Google ah oo dibadda ah. Liisaska adeegyadu waxay ku hadhaan Ingiriisi si ay si sax ah ugu ekaadaan ilaha rasmiga ah.",
  },
  navigation: [
    {
      title: "Halkan ka bilow",
      items: [
        {
          label: "Caawimaad hadda u baahan",
          to: "/need-help-now",
          description: "Go'aanno degdeg ah iyo taageero xiisadeed",
        },
        {
          label: "Halkan ka bilow",
          to: "/start-here",
          description: "Ku cusub caafimaadka Ontario",
        },
        {
          label: "Hel daryeelka aasaasiga ah",
          to: "/get-a-family-doctor",
          description:
            "Dhakhaatiir, kalkaaliyayaal heer sare ah (NP), xarumaha caafimaadka bulshada, iyo ikhtiyaarrada ardayda",
        },
      ],
    },
    {
      title: "Faham daryeelka",
      items: [
        {
          label: "Kharashka iyo caymiska",
          to: "/costs-and-coverage",
          description:
            "OHIP, IFHP, qorshayaal caymis oo gaar ah, iyo caymiska daawada",
        },
        {
          label: "Booqashadaada",
          to: "/your-visit",
          description: "Waxa aad keento iyo sida aad su'aalo u weydiiso",
        },
        {
          label: "Booqashada ka dib",
          to: "/after-visit",
          description:
            "Baaritaanno, foomamka baaritaanka, gudbinno, iyo dabagal",
        },
        {
          label: "Daawooyinka iyo farmashiyada",
          to: "/medicines-and-pharmacies",
          description:
            "Warqadaha daawada, dib-u-buuxinta, iyo caawimaadda farmashiistaha",
        },
      ],
    },
    {
      title: "Caawimaad maxalli ah",
      items: [
        {
          label: "Adeegyada maxalliga ah",
          to: "/local-services",
          description: "Baadh adeegyada Kingston",
        },
        {
          label: "Caafimaadka maskaxda",
          to: "/mental-health",
          description:
            "Taageero xiisadeed, degdeg ah, caadi ah, iyo mid dhallinyaro",
        },
        {
          label: "Baaritaanka hore iyo ka-hortagga",
          to: "/screening-prevention",
          description: "Tallaallada iyo daryeelka ka-hortagga",
        },
        {
          label: "Daryeel dheeri ah iyo bulsho",
          to: "/community-allied-health",
          description:
            "Daryeelka guriga, dhaqan-celinta, ilkaha, iyo taageerooyinka bulshada",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Xaalado caadi ah oo dadka cusub iyo qaamuus",
        },
        {
          label: "Ku saabsan iyo kalsoonida",
          to: "/about",
          description:
            "Ilaha, arrimaha gaarka ah, helitaanka, iyo fikradaha",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Caawimaad hadda ma u baahan tahay?",
    items: {
      "call-911": {
        label: "Wac 911",
        description: "Xaalad degdeg ah oo naf halis gelinaysa",
      },
      "call-811": {
        label: "Wac Health811",
        description: "Talo kalkaaliye, 24/7",
      },
      "call-988": {
        label: "Wac ama qoraal u dir 9-8-8",
        description: "Khadka Caawinta Xiisadda Isdilka, 24/7",
      },
      "call-crisis": {
        label: "Wac khadka xiisadda",
        description: "Khadka xiisadda ee AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Hagaha daryeelka degdegga ah",
        description: "Ikhtiyaarrada saacadaha-dambe iyo isla-maalinta",
      },
      "mental-health": {
        label: "Taageerada caafimaadka maskaxda",
        description: "Waddooyinka xiisadda, degdegga, iyo kuwa caadiga ah",
      },
    },
  },
  home: {
    seoTitle: "Hagaha caafimaadka Kingston",
    seoDescription:
      "Hagid caafimaad oo dadka cusub mudnaan siisa Kingston, Ontario: caawimaad degdeg ah, adeegyo maxalli ah, aasaaska caymiska, hagid turjubaan, iyo tallaabooyinka xiga booqasho ka dib.",
    kicker: "Kingston, Ontario",
    heroTitle: "Ka hel Kingston daryeelka saxda ah adigoo aan malo-awaalin",
    heroLead:
      "Ka bilow caawimaadda degdegga ah, aasaaska dadka cusub, caymiska, ama liiska adeegyada maxalliga ah. Hagahani waa luqad fudud, wuxuu ku shaqeeyaa mobilka, wuxuuna si daacad ah u sheegaa waxa weli u baahan in dib loo hubiyo.",
    cardNeedHelp: {
      title: "Caawimaad hadda u baahan",
      body: "Hagid gurmad, daryeel degdeg ah, xiisad, iyo saacadaha-dambe.",
    },
    cardStartHere: {
      title: "Halkan ka bilow",
      body: "Sida caafimaadka Ontario u shaqeeyo iyo waxa marka hore la sameeyo.",
    },
    cardSearch: {
      title: "Baadh adeegyada",
      body: "Raadi baaritaan dhiig, dib-u-buuxin daawo, daryeel walk-in ah, caafimaad maskaxeed, iyo wax kale.",
    },
    cardLanguage: {
      title: "Caawimaadda luqadda",
      body: "Hagahan ku akhri luqaddaada, oo hel hagid turjubaan iyo weedho gaagaaban.",
    },
    quickDecisionsKicker: "Go'aanno degdeg ah",
    quickDecisionsTitle: "Ka bilow su'aalahan",
    quickDecisionLines: [
      "Haddii ay noqon karto mid naf halis gelinaysa, wac 911 hadda.",
      "Haddii aadan hubin meesha aad caawa aadayso, wac Health811.",
      "Fikrado isdil ah ama murugo aad u culus, wac ama qoraal u dir 9-8-8 wakhti kasta.",
      "Haddii aadan lahayn dhakhtar qoys, qorshahaaga ku hay ikhtiyaarrada walk-in (ballan la'aan), caafimaadka bulshada, iyo kuwa ardayda.",
      "Haddii aad u baahan tahay baaritaan dhiig, raajo, dib-u-buuxin daawo, ama war gudbin, isticmaal liiska maxalliga ah si aad u hesho tallaabada xigta.",
    ],
    trustNoteTitle: "Ogeysiis kalsooni",
    trustNoteBody:
      "Kani waa hage joogto ah. Ma muujinno wakhtiyada sugitaanka ee tooska ah. Faahfaahinta wakhtiga ku xidhan sida saacadaha iyo diiwaangelintu si degdeg ah ayay isu beddeli karaan, sidaas darteed liis kastaa wuxuu leeyahay xidhiidh il rasmi ah iyo xaaladda dib-u-eegista.",
    newcomerKicker: "Bilow degdeg ah oo dadka cusub",
    newcomerTitle:
      "Tallaabooyinka ugu horreeya haddii aad ku cusub tahay Kingston",
    newcomerSteps: [
      {
        title: "1. Baro caymiskaaga",
        body: "Faham OHIP, IFHP, qorshayaasha gaarka ah, iyo waxa badanaa aan la daboolin. Ma jiro wakhti sugitaan oo OHIP ah - codso isla markaad timaado.",
      },
      {
        title: "2. Qorshee waddadaada daryeelka aasaasiga ah",
        body: "Baro faraqa u dhexeeya dhakhaatiirta qoyska, kalkaaliyayaasha heer sare ah, kiliinikada ardayda, xarumaha caafimaadka bulshada, iyo daryeelka walk-in ah.",
      },
      {
        title: "3. Ogow waxa xiga",
        body: "Baro waxa foomamka baaritaanka, gudbinta, natiijooyinka baaritaanka, iyo wicitaannada dabagalku badanaa ka dhigan yihiin.",
      },
    ],
    languageSupportKicker: "Taageerada luqadda",
    languageSupportTitle: "Tus weedhahan haddii aad caawimaad u baahato",
    openLanguageHelp: "Fur caawimaadda luqadda",
    commonTasksKicker: "Hawlaha caadiga ah",
    commonTasksTitle: "Ku baadh hawsha aad u baahan tahay inaad dhammayso",
    openDirectory: "Fur liiska oo dhan",
    tasks: [
      {
        title: "Baaritaan dhiig ama raajo",
        body: "Hel shaybaadhada iyo adeegyada sawirka.",
      },
      {
        title: "Dib-u-buuxin daawo",
        body: "Hel farmashiyada iyo caawimaadda dib-u-buuxinta.",
      },
      {
        title: "Taageerada caafimaadka maskaxda",
        body: "Taageero xiisadeed, degdeg ah, caadi ah, iyo mid dhallinyaro.",
      },
      {
        title: "Kaarka caafimaadka ama taageerada dadka cusub",
        body: "Hel ServiceOntario, ISKA, iyo talo taleefan.",
      },
    ],
    featuredKicker: "Adeegyo la soo bandhigay",
    featuredTitle: "Meelo wanaagsan oo laga bilaabo",
    trustKicker: "Kalsoonida iyo ilaha",
    trustTitle:
      "Daacad ku ah waxa la xaqiijiyay iyo waxa weli u baahan dib-u-hubin",
    trustBody:
      "Liisas qaarkood waxaa lagu hubiyay ilo maxalli ah oo rasmi ah. Kuwo kale weli waxay u baahan yihiin hubin maxalli ah sababtoo ah saacadaha, diiwaangelinta, ama xeerarka helitaanku marar badan way isbeddelaan. Xaaladdaas si furan ayaan u muujinaa, waxaana ku dhiirrigelinaa isticmaalayaasha inay soo sheegaan faahfaahin duugowday.",
    trustChecklistTitle: "Akhri ka hor intaadan liis ku tiirsanin",
    trustChecklist: [
      "Raadi xidhiidhka isha rasmiga ah.",
      "Hubi taariikhda dib-u-eegista ugu dambaysay.",
      "Xaqiiji saacadaha isla-maalinta iyo helitaanka walk-in ka hor intaadan tegin.",
      "Isticmaal foomka warbixinta haddii aad aragto isbeddel.",
    ],
    trustLink: "Eeg ilaha iyo ogeysiisyada kalsoonida",
  },
  contentPage: {
    breadcrumbHome: "Bogga hore",
    badge: "Hage luqad fudud ah",
    reviewStatusTitle: "Xaaladda dib-u-eegista",
    reviewLabels: {
      reviewed:
        "Waxaa lagu eegay ilaha uu mashruucani hadda isticmaalo.",
      "general-guidance":
        "Waxaa loo eegay sidii hagid guud. Faahfaahinta maxalligu weli si degdeg ah ayay isu beddeli kartaa.",
      "needs-local-recheck":
        "Hagid waxtar leh, laakiin faahfaahinta maxalligu weli waxay u baahan tahay hubin dheeraad ah.",
    },
    lastReviewPrefix: "Dib-u-eegistii boggii ugu dambaysay:",
    noReviewDate:
      "Boggani ma laha taariikh dib-u-eegis oo la diiwaangeliyay.",
    translationAside:
      "Boggan waxaad ku akhrin kartaa luqado dhowr ah adigoo isticmaalaya liiska Luqadda. Ballamaha, daawooyinka, oggolaanshaha, iyo tilmaamaha baaritaanka, weydii in taageero turjubaan la heli karo.",
    share: "La wadaag",
    print: "Daabac",
    sourcesTitle: "Ilaha boggan",
    sourcesNote:
      "Kuwani waa ilaha rasmiga ah ama aasaasiga ah ee ugu muhiimsan ee loo isticmaalay dib-u-eegista boggan ee hadda. Hababka maxalligu weli way isbeddeli karaan inta u dhaxaysa wareegyada dib-u-eegista.",
    onThisPage: "Boggan dhexdiisa",
    sourcesAnchorLabel: "Ilaha",
    translationReminderTitle: "Xusuusin turjumaad",
    translationReminderBody:
      "Haddii wax saamayn ku leeyihiin daawayntaada ama badbaadadaada, kala xaqiiji dhakhtar ama turjubaan, ha ku tiirsanaan turjumaadda keliya.",
    linkCopiedTitle: "Xidhiidhka waa la koobiyay",
    linkCopiedBody:
      "Hadda waxaad meel kasta ku dhejin kartaa xidhiidhka boggan.",
    shareCancelled: "Wadaagistii waa la joojiyay",
  },
  directory: {
    seoTitle: "Adeegyada maxalliga ah",
    seoDescription:
      "Baadh adeegyada caafimaadka, caafimaadka maskaxda, farmashiyada, caymiska, iyo hagidda ee dadka cusub ku habboon Kingston, Ontario.",
    kicker: "Liiska Kingston",
    title: "Baadh adeegyada caafimaadka maxalliga ah",
    lead: "Ku baadh adeeg, calaamad, dukumeenti, ama hawl. Tusaalooyin: walk in, saacadaha-dambe, baaritaan dhiig, dib-u-buuxin, kaarka caafimaadka, kiliinikada ardayda, ama taageerada dadka cusub.",
    searchPlaceholder: "Ku baadh baahi, magac adeeg, cinwaan, ama eray",
    sortAriaLabel: "Kala saar natiijooyinka",
    sortRelevance: "Kala saarid: Ku-habboonaanta",
    sortAlphabetical: "Kala saarid: A ilaa Z",
    sortRecentlyReviewed: "Kala saarid: Dhawaan la eegay",
    sortArea: "Kala saarid: Aagga",
    gridViewLabel: "Muuqaal shabakad",
    listViewLabel: "Muuqaal liis",
    allServices: "Dhammaan adeegyada",
    audienceTitle: "Dadka loogu talagalay",
    accessTitle: "Helitaanka",
    careLevelTitle: "Heerka daryeelka",
    coverageAreaTitle: "Caymiska iyo aagga",
    areaLabel: "Aagga",
    showingServices: "Waxaa la muujinayaa {count} adeeg",
    resetFilters: "Dib u dejiso shaandhooyinka",
    trustPanelTitle: "Kalsoonida iyo xaaladda dib-u-eegista",
    trustPanelBody:
      "Liiskani waa mid joogto ah, ma aha mid toos ah. Waxaan muujinaa taariikhda dib-u-eegista ugu dambaysay ee la diiwaangeliyay, xidhiidhada ilaha rasmiga ah marka la heli karo, iyo liisaska weli u baahan hubin maxalli ah. Xaqiiji saacadaha iyo helitaanka isla-maalinta ka hor intaadan tegin.",
    verifiedLabel: "La xaqiijiyay",
    needsRecheckLabel: "U baahan dib-u-hubin",
    noResultsTitle: "Adeeg ku habboon shaandhooyinkaas lama helin",
    noResultsBody:
      "Isku day baadhis ballaadhan sida baaritaan dhiig, dib-u-buuxin, caafimaadka maskaxda, kaarka caafimaadka, ama walk in. Waxaad kaloo tirtiri kartaa dhammaan shaandhooyinka oo mar kale bilaabi kartaa.",
    notSureTitle: "Ma hubtid meesha aad ka bilowdo?",
    notSureBody:
      "Haddii aadan hubin inaad u baahan tahay daryeel gurmad, daryeel degdeg ah, kiliinik walk-in, ama taageero farmashiye, ka bilow bogga hagidda degdegga ah ama wac Health811 si aad talo kalkaaliye u hesho.",
    needHelpNowCta: "Caawimaad hadda u baahan",
    callHealth811: "Wac Health811",
  },
  filters: {
    audience: {
      newcomers: "Dadka cusub",
      students: "Arday keliya ama kambas",
      "children-youth": "Carruur ama dhallinyaro",
      adults: "Dadka waaweyn",
      families: "Qoysas",
      "unattached-patients": "Dhakhtar qoys ma leh",
    },
    access: {
      "walk-in": "Walk-in (ballan la'aan)",
      appointment: "Ballan",
      referral: "Gudbin ayaa loo baahan yahay",
      virtual: "Khadka tooska ah (virtual)",
    },
    level: {
      emergency: "Gurmad",
      urgent: "Degdeg",
      primary: "Aasaasi",
      community: "Bulsho",
    },
    payment: {
      public: "Dadweyne ayaa maalgeliya",
      community: "Bulsho / caqabad yar",
      mixed: "Caymis isku dhafan",
      "student-plan": "Qorshaha ardayda",
      private: "Lacag gaar ah",
    },
    location: {
      downtown: "Bartamaha magaalada",
      "north-end": "Waqooyiga magaalada",
      "west-end": "Galbeedka magaalada",
      campus: "Kambaska",
      online: "Khadka tooska ah (online)",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Daryeelka gurmadka iyo degdegga",
      shortLabel: "Gurmad iyo degdeg",
    },
    "primary-care": {
      label: "Daryeelka aasaasiga ah",
      shortLabel: "Daryeel aasaasi",
    },
    "community-health": {
      label: "Xarumaha caafimaadka bulshada",
      shortLabel: "Caafimaadka bulshada",
    },
    "mental-health": {
      label: "Caafimaadka maskaxda iyo taageerada xiisadda",
      shortLabel: "Caafimaadka maskaxda",
    },
    "public-health": {
      label: "Caafimaadka dadweynaha",
      shortLabel: "Caafimaadka dadweynaha",
    },
    "labs-imaging": {
      label: "Shaybaadhada iyo sawirrada",
      shortLabel: "Shaybaadho iyo sawirro",
    },
    pharmacies: {
      label: "Daawooyinka iyo farmashiyada",
      shortLabel: "Farmashiyada",
    },
    "allied-community": {
      label: "Daryeel dheeri ah iyo daryeel bulsho",
      shortLabel: "Daryeel dheeri ah",
    },
    "navigation-support": {
      label: "Hagidda iyo taageerada caymiska",
      shortLabel: "Hagid",
    },
  },
  serviceCard: {
    whenToUse: "Goorta la isticmaalo:",
    accessLabel: "Helitaanka",
    eligibilityLabel: "U-qalmidda",
    eligibilityFallback:
      "U furan dadweynaha guud haddii aysan isha rasmigu si kale dhihin.",
    hoursLabel: "Saacadaha",
    phoneLabel: "Taleefanka",
    trustDetails: "Faahfaahinta kalsoonida iyo isha",
    lastReview: "Dib-u-eegistii ugu dambaysay:",
    officialSource: "Isha rasmiga ah",
    call: "Wac",
    officialWebsite: "Bogga rasmiga ah",
    directions: "Jihooyin",
    viewDetails: "Eeg faahfaahinta",
  },
  serviceDetail: {
    backToServices: "Ku noqo adeegyada maxalliga ah",
    whenToUseTitle: "Goorta adeeggan la isticmaalo",
    eligibilityTitle: "U-qalmidda iyo helitaanka",
    eligibilityFallback:
      "Hubi isha rasmiga ah haddii aadan hubin in adeeggani kuu furan yahay.",
    whatToBringTitle: "Waxa aad keento",
    contactTitle: "Xidhiidhka iyo tallaabooyinka",
    callNow: "Wac hadda",
    officialWebsite: "Bogga rasmiga ah",
    directions: "Jihooyin",
    trustTitle: "Kalsoonida iyo isha",
    lastReview: "Dib-u-eegistii ugu dambaysay:",
    viewOfficialSource: "Eeg isha rasmiga ah",
  },
  verification: {
    verified: {
      label: "Lagu xaqiijiyay il rasmi ah",
      shortLabel: "La xaqiijiyay",
      description:
        "Faahfaahinta muhiimka ah waxaa lagu hubiyay il rasmi ah wareeggii dib-u-eegista ee ugu dambeeyay.",
    },
    "partially-verified": {
      label: "Il rasmi ah ayaa ku xidhan",
      shortLabel: "Xidhiidh rasmi ah",
      description:
        "Il rasmi ah ayaa ku xidhan, laakiin hal ama dhowr faahfaahin ayaa marar badan isbeddeli kara, waana in la xaqiijiyo ka hor intaadan tegin.",
    },
    "community-reported": {
      label: "Bulshada ayaa soo sheegtay",
      shortLabel: "Warbixin bulsho",
      description:
        "Macluumaadkani wuxuu ka yimid warbixin bulsho, wuxuuna weli u baahan yahay xaqiijin madax-bannaan.",
    },
    "needs-recheck": {
      label: "U baahan dib-u-hubin",
      shortLabel: "U baahan dib-u-hubin",
      description:
        "Liiskani wuu muuqdaa sababtoo ah weli wuu caawin karaa, laakiin faahfaahinta muhiimka ahi way duugoobi karaan. Xaqiiji ka hor intaadan ku tiirsanin.",
    },
  },
  feedback: {
    badge: "Soo sheeg macluumaad duugoobay",
    title: "Naga caawi inaan hagahan saxsan ku ilaalino",
    body: "Tani waxay dirtaa iimayl horay loo buuxiyay oo wata macluumaadka bogga ama adeegga. Ha ku darin macluumaad caafimaad oo gaar ah.",
    issueTypeLabel: "Nooca dhibaatada",
    issueTypes: {
      "outdated hours": "Saacado duugoobay",
      "wrong phone or website": "Taleefan ama bog khaldan",
      "eligibility or access issue": "Dhibaato u-qalmid ama helitaan",
      "translation or accessibility problem":
        "Dhibaato turjumaad ama helitaan",
      "missing service or content": "Adeeg ama macluumaad maqan",
      other: "Wax kale",
    },
    detailsLabel: "Maxaan hubinnaa?",
    detailsPlaceholder:
      "Tusaale: lambarka taleefanku wuu beddelmay, kiliinik hadda ballan keliya ayay qaadataa, ama xidhiidh ayaa jaban.",
    contactLabel: "Xidhiidh ikhtiyaari ah",
    contactPlaceholder: "Cinwaanka iimaylka haddii aad rabto jawaab",
    openEmail: "Fur iimaylka warbixinta",
    copyText: "Koobi qoraalka warbixinta",
    thanks:
      "Mahadsanid. Warbixinnadu waxay naga caawiyaan inaan mudnaan siino bogagga duugoobay, xidhiidhada jaban, iyo liisaska u baahan hubin maxalli ah.",
    toastEmailTitle: "Qabyada iimaylka waa la furay",
    toastEmailBody:
      "Warbixintaadu waxay wadataa macluumaadka bogga ama adeegga.",
    toastCopyTitle: "Soo-koobidda dhibaatada waa la koobiyay",
    toastCopyBody:
      "Waxaad ku dhejin kartaa barnaamijka iimaylkaaga haddii loo baahdo.",
  },
  footer: {
    description:
      "Hage hagid caafimaad oo luqad fudud ah oo loogu talagalay Kingston, Ontario. Boggani ma bixiyo talo caafimaad ama wakhtiyada sugitaanka ee tooska ah. Mar walba kala xaqiiji isha rasmiga ah faahfaahinta wakhtiga ku xidhan ka hor intaadan tegin.",
    trustModelTitle: "Qaabka kalsoonida",
    trustModelBody:
      "Waxaan muujinaa xidhiidhada ilaha rasmiga ah, taariikhaha dib-u-eegista, iyo liisaska weli u baahan dib-u-hubin. Haddii wax khaldan u muuqdaan, ka soo sheeg bogga ama adeegga.",
    beforeYouGo: {
      title: "Ka hor intaadan tegin",
      body: "Hubi saacadaha rasmiga ah, in aad u baahan tahay ballan ama gudbin, iyo dukumeentiyada aad keenayso.",
    },
    languageHelp: {
      title: "Caawimaadda luqadda",
      body: "Hagahan ku akhri luqaddaada adigoo isticmaalaya liiska Luqadda. Weydiiso turjubaan wadahadallada caafimaadka marka saxnaantu muhiim tahay.",
    },
    privacy: {
      title: "Arrimaha gaarka ah",
      body: "Boggani wuxuu isticmaalaa diiwaanno horumarin oo maxalli ah oo ixtiraama arrimaha gaarka ah, kuna kaydsan browserkaaga. Ma u diro xog shakhsi ah server fog.",
    },
    copyrightSuffix:
      "Il macluumaad bulsho oo loogu talagalay Kingston, Ontario.",
    disclaimer: "Afeef",
    privacyLink: "Arrimaha gaarka ah",
    sourcesLink: "Ilaha",
    reportLink: "Soo sheeg macluumaad duugoobay",
  },
  notFound: {
    seoTitle: "Bogga lama helin",
    seoDescription:
      "Bogga aad codsatay lama helin. Ka bilow caawimaadda degdegga ah, aasaaska dadka cusub, adeegyada maxalliga ah, ama FAQ.",
    badge: "404",
    title: "Boggaas ma aannu helin",
    body: "Haddii aad isku dayayso inaad si degdeg ah daryeel u hesho, ka bilow hagidda degdegga ah ama baadh liiska adeegyada Kingston.",
    startHere: "Halkan ka bilow",
    needHelpNow: "Caawimaad hadda u baahan",
    localServices: "Adeegyada maxalliga ah",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Hagaha Hagidda Caafimaadka Kingston",
  description:
    "Hage luqad fudud ah oo dadka cusub mudnaan siiya si loo helo daryeel caafimaad Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Halkan ka bilow",
  description:
    "Ma ku cusub tahay Kingston ama caafimaadka Ontario? Halkan ka bilow si aad u barato sida nidaamku u shaqeeyo iyo waxa marka hore la sameeyo.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Daryeelka caafimaadka ee Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Guudmar ku saabsan sida daryeelka caymiska lihi ugu shaqeeyo Ontario.",
    },
    {
      title: "Ontario: Codso OHIP oo hel kaar caafimaad",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Macluumaadka rasmiga ah ee codsiga OHIP iyo u-qalmidda.",
    },
    {
      title: "Ontario: Hel dhakhtar qoys ama kalkaaliye heer sare ah",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Hagidda Health Care Connect iyo helitaanka daryeelka aasaasiga ah.",
    },
    {
      title:
        "Canada: Interim Federal Health Program (IFHP, caymiska caafimaadka federaalka ee ku-meel-gaadhka ah)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Macluumaadka caymiska federaalka ee qaxootiga u qalma iyo magangelyo-doonka.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Sida caafimaadku Ontario uga shaqeeyo",
      type: "default",
      content: `Caafimaadka Ontario wuxuu ku dhisan yahay **daryeelka aasaasiga ah** (primary care). Daryeelka aasaasigu waa meesha aad badanaa ka bilowdo baahiyaha caafimaadka caadiga ah, xaaladaha socda, daawooyinka, gudbinta, iyo ka-hortagga. Bixiyahaaga daryeelka aasaasigu wuxuu noqon karaa dhakhtar qoys, kalkaaliye heer sare ah (nurse practitioner), koox xarun caafimaad bulsho, ama kiliinik caafimaad oo arday haddii aad u qalanto.

**Gudbin** (referral) waa marka dhakhtar uu kaa codsado adeeg kale ama takhasusle inuu ku arko. **Foom baaritaan** (requisition) waa foom u sheegaya shaybaadhka ama kiliinikada sawirka baaritaanka aad u baahan tahay.

Uma baahnid inaad maalinta koowaad fahamto qayb kasta oo nidaamka ah. Tallaabooyinka ugu muhiimsani waa: baro caymiskaaga, ogow meesha aad u aadi karto arrimaha degdegga ah, oo samee qorshe daryeel joogto ah haddii aadan horay u lahayn bixiye.`,
    },
    {
      id: "first-decisions",
      title: "Go'aannada ugu horreeya",
      type: "grid",
      gridItems: [
        {
          title: "Waxaa laga yaabaa inaan u baahdo caawimaad degdeg ah",
          content:
            "Ka bilow hagidda gurmadka iyo daryeelka degdegga ah haddii aad qabto dhibaato kedis ah maanta ama caawa.",
          icon: "alert",
          link: { text: "Caawimaad hadda u baahan", url: "/need-help-now" },
        },
        {
          title: "Dhakhtar qoys ma lihi",
          content:
            "Baro sida dhakhaatiirta qoyska, kalkaaliyayaasha heer sare ah, xarumaha caafimaadka bulshada, kiliinikada walk-in, iyo kiliinikada ardaydu isugu xidhan yihiin.",
          icon: "stethoscope",
          link: {
            text: "Hel daryeelka aasaasiga ah",
            url: "/get-a-family-doctor",
          },
        },
        {
          title: "Waxaan u baahanahay inaan fahmo waxa la daboolay",
          content:
            "Akhri wax ku saabsan OHIP, IFHP, caymiska gaarka ah, qorshayaasha ardayda, caymiska daawada, iyo kharashyada jeebka ee caadiga ah.",
          icon: "shield",
          link: { text: "Kharashka iyo caymiska", url: "/costs-and-coverage" },
        },
        {
          title: "Waxaan u baahanahay caawimaad luqad",
          content:
            "Hagahan ku akhri 33 luqadood adigoo isticmaalaya liiska Luqadda, oo weydii taageero turjubaan wadahadallada caafimaadka iyo oggolaanshaha.",
          icon: "info",
          link: {
            text: "Helitaanka iyo luqadda",
            url: "/about#accessibility",
          },
        },
        {
          title: "Waxaan u baahanahay baaritaan dhiig, sawir, ama dib-u-buuxin",
          content:
            "Isticmaal liiska maxalliga ah si aad u hesho tallaabada xigta ee wax ku oolka ah booqasho ka dib.",
          icon: "file",
          link: {
            text: "Baadh adeegyada maxalliga ah",
            url: "/local-services",
          },
        },
        {
          title: "Ma hubo meesha aan ka bilaabo",
          content:
            "Wac Health811 si aad talo kalkaaliye u hesho haddii aadan hubin sida ay xaaladdaadu degdeg u tahay.",
          icon: "clock",
          link: {
            text: "Health811 iyo hagidda degdegga ah",
            url: "/need-help-now#after-hours",
          },
        },
      ],
    },
    {
      id: "first-week",
      title: "Tallaabooyin wanaagsan toddobaadkaaga koowaad",
      type: "steps",
      items: [
        "Baro caymiskaaga: Akhri waxa OHIP, IFHP, caymiska gaarka ah, iyo qorshayaasha ardaydu badanaa daboolaan. Haddii aad u qalmi karto OHIP, codso sida ugu dhakhsaha badan ee aad karto.",
        "Dooro qorshahaaga degdegga ah: Ogow goorta aad wacdo 911, goorta aad ka bilowdo Health811, iyo meesha aad ka heli karto Kingston daryeel degdeg ah ama isla-maalin ah.",
        "Qorshee daryeel joogto ah: Haddii aadan lahayn bixiye joogto ah, baro ikhtiyaarradaada dhakhaatiirta qoyska, kalkaaliyayaasha heer sare ah, xarumaha caafimaadka bulshada, kiliinikada ardayda, kiliinikada walk-in, iyo daryeelka khadka tooska ah.",
        "Macluumaadkaaga caafimaadka meel isugu hay: Kaydi kaarkaaga caafimaadka ama waraaqaha IFHP, liiska daawooyinka, diiwaanka tallaalka, iyo nuqullada foomamka baaritaanka ama gudbinta.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Haddii aadan weli haysan OHIP",
      type: "callout",
      content:
        "Ha sugin ilaa aad xanuunsato si aad u barato waddada caymiskaaga. Haddii aad u qalanto OHIP, goor hore codso. Haddii lagugu daboolay IFHP ama qorshe dugsi ama mid gaar ah, macluumaadkaas la soco. Haddii aadan caymis lahayn, weydiiso lacagta ka hor booqashada, oo raadi adeegyo bulsho ama kuwo caqabad yar meesha ay habboon tahay.",
      link: { text: "Akhri wax ku saabsan caymiska", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Waxyaalahan diyaar u hay",
      type: "checklist",
      items: [
        "Kaarkaaga caafimaadka, waraaqaha IFHP, ama macluumaadka caymiskaaga",
        "Liis daawooyin, xitaa haddii aad qaadato daawooyin yar oo keliya",
        "Magaca iyo lambarka taleefanka ee kiliinikadii ama bixiyihii kuu dambeeyay, haddii aad mid leedahay",
        "Foomam baaritaan, gudbinno, waraaqo isbitaal ka-bixid, ama tilmaamo baaritaan oo dhawaan ah",
        "Su'aalaha aad rabto inaad weydiiso oo luqad fudud ku qoran",
        "Baahiyahaaga turjubaanka oo qoran si aad u xasuusato inaad weydiiso",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Caawimaad hadda ma u baahan tahay?",
  description:
    "Isticmaal boggan marka aad qabto dhibaato caafimaad maanta ama caawa oo aadan hubin meesha aad ka bilowdo.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Talo caafimaad ka hel Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Adeegga rasmiga ah ee talada kalkaaliyaha, 24/7.",
    },
    {
      title:
        "9-8-8: Khadka Caawinta Xiisadda Isdilka (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Khadka qaranka ee rasmiga ah ee xiisadda isdilka. Wac ama qoraal u dir 9-8-8, bilaash, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Shabakadda isbitaalka rasmiga ah ee macluumaadka gurmadka, daryeelka degdegga ah, iyo sawirrada.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Ururka maxalliga ah ee rasmiga ah ee caafimaadka maskaxda iyo taageerada xiisadda.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Gurmad mise degdeg?",
      type: "comparison",
      comparison: {
        left: {
          title:
            "Isla markiiba aad qaybta gurmadka (emergency) dhibaatooyin sida:",
          items: [
            "Xanuun laab, dhibaato weyn oo neefsasho, ama calaamadaha istaroogga",
            "Dhiigbax daran, dhaawac weyn, ama miyir-beelid",
            "Jahawareer kedis ah, suuxdin, ama falcelin xasaasiyad oo daran",
            "Xaalad badbaado oo halis ah halka sugitaanku khatar gelin karo naf ama xubin jidh",
          ],
        },
        right: {
          title:
            "Ka bilow daryeelka degdegga ah, Health811, ama kiliinik isla-maalin ah dhibaatooyin sida:",
          items: [
            "Murqo-jeexid, nabarro yaryar, finan, xanuun dheg, ama qandho aan lahayn calaamadaha digniinta gurmadka",
            "Dhibaatooyin dib-u-buuxin daawo oo aan sugi karin ballan caadi ah",
            "Su'aalo ku saabsan inaad caawa u baahan tahay daryeel degdeg ah",
            "Dhibaato u muuqata degdeg laakiin aan si cad u ahayn mid naf halis gelinaysa",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Xaalado caadi ah oo saacadaha-dambe ah",
      type: "table",
      columns: [
        "Xaaladda",
        "Tallaabada koowaad ee wanaagsan",
        "Waxa la xasuusto",
      ],
      rows: [
        {
          cells: [
            "Ma hubo sida ay tani degdeg u tahay",
            "Wac Health811",
            "Kalkaaliye ayaa kaa caawin kara inaad go'aansato inaad guriga joogto, daryeel degdeg ah raadsato, ama aad gurmadka aado.",
          ],
        },
        {
          cells: [
            "Dhakhtarkaygu wuu xidhan yahay, waxaanan caawa u baahanahay talo",
            "Health811 ama hagidda daryeelka degdegga ah",
            "Ha u malayn in gurmadku yahay ikhtiyaarkaaga keliya haddii aysan jirin calaamado digniin gurmad.",
          ],
        },
        {
          cells: [
            "Waxaan daryeel ugu baahanahay ilmahayga",
            "Isticmaal isla calaamadaha digniinta gurmadka, kaddibna raadso daryeel isla-maalin ah ama wac Health811 haddii aadan hubin",
            "Keen kaarka caafimaadka ilmaha, liiska daawooyinka, iyo wakhtiyada calaamadaha haddii ay suurtogal tahay.",
          ],
        },
        {
          cells: [
            "Caawa waxaan u baahanahay caawimaad caafimaad maskaxeed",
            "Wac ama qoraal u dir 9-8-8 (Khadka Caawinta Xiisadda Isdilka), ama wac khadka xiisadda ee AMHS-KFLA oo shaqeeya 24/7",
            "Haddii ay jirto halis toos ah oo badbaado, wac 911.",
          ],
        },
      ],
      caption:
        "Shaxdani waa hagid guud oo keliya. Haddii qof khatar toos ah ku jiri karo, wac 911.",
    },
    {
      id: "kingston-start-points",
      title: "Meelaha laga bilaabo ee Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Qaybta Gurmadka (Emergency Department)",
          content:
            "Isticmaal daryeelka gurmadka dhibaatooyinka naf halis gelinaya ama kuwa laga yaabo inay naf halis geliyaan.",
          icon: "alert",
          link: {
            text: "Liisaska gurmadka iyo degdegga",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Xarunta Daryeelka Degdegga ah (Urgent Care Centre)",
          content:
            "Waxtar u leh dhibaatooyin badan oo isla-maalin ah oo aan sugi karin laakiin aan ahayn gurmad cad.",
          icon: "clock",
          link: {
            text: "Daryeelka degdegga ah iyo isla-maalinta",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Talo kalkaaliye oo taleefan ama khadka tooska ah haddii aadan hubin meesha aad aadayso. Taageerada taleefanku waxay ku jirtaa luqado badan.",
          icon: "info",
          link: { text: "Liiska Health811", url: "/local-services/health811" },
        },
        {
          title: "Taageerada xiisadda caafimaadka maskaxda",
          content:
            "Wac ama qoraal u dir 9-8-8 (Khadka Caawinta Xiisadda Isdilka) wakhti kasta, ama isticmaal taageero xiisadeed maxalli ah sida khadka xiisadda ee AMHS-KFLA oo shaqeeya 24/7.",
          icon: "heart",
          link: {
            text: "Liisaska caafimaadka maskaxda",
            url: "/local-services?category=mental-health",
          },
        },
        {
          title: "Taageerada xadgudubka galmada",
          content:
            "Isticmaal taageero xiisadeed oo takhasus leh haddii aad u baahan tahay taageero shucuureed oo degdeg ah, u-doodid, ama qorshe badbaado.",
          icon: "shield",
          link: {
            text: "Liisaska taageerada",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Ikhtiyaarrada degdegga ah ee ardayda",
          content:
            "Haddii aad arday tahay, hubi in adeegga caafimaadka kambaskaagu yahay meesha ugu fiican ee koowaad baahiyaha aan gurmadka ahayn.",
          icon: "stethoscope",
          link: {
            text: "Liisaska caafimaadka ardayda",
            url: "/local-services?audience=students",
          },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Haddii aadan weli hubin",
      type: "callout",
      content:
        "Marka dhibaatadu aysan si cad u ahayn mid naf halis gelinaysa laakiin aad ka walwalsan tahay sugitaanka, ka bilow Health811. Haddii qof laga yaabo inuusan ammaan ahayn, uu si degdeg ah u sii xumaanayo, ama aadan heli karin caawimaadda saxda ah wakhtigeeda, isticmaal adeegyada gurmadka.",
      link: { text: "Wac Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Kuwan keen haddii aad karto",
      type: "checklist",
      items: [
        "Kaarka caafimaadka, waraaqaha IFHP, ama kaar caymis kasta oo aad haysato",
        "Liis daawooyin ama sawirrada dhalooyinka daawada",
        "Wakhtiga ay calaamaduhu bilaabmeen iyo wax kasta oo ka sii daray",
        "Baahiyaha turjubaanka oo qoran haddii laga yaabo inaad aad u walwalsanaato oo aad mar dambe illowdo",
        "Shaarjar taleefan iyo qof ku taageera haddii ay taasi ku caawiso",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Helitaanka Daryeelka Aasaasiga ah",
  description:
    "Baro waddooyinka kala duwan ee daryeelka caafimaadka joogtada ah ee Kingston haddii aadan horay u lahayn bixiye.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Hel dhakhtar qoys ama kalkaaliye heer sare ah",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Hagidda rasmiga ah ee Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Macluumaadka rasmiga ah ee adeegyada xarumaha caafimaadka bulshada ee maxalliga ah.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Macluumaadka caafimaadka ardayda ee rasmiga ah ee ardayda Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Macluumaadka caafimaadka ardayda ee rasmiga ah ee ardayda St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Waxa daryeelka aasaasigu yahay",
      type: "default",
      content:
        "Daryeelka aasaasigu waa meesha aad badanaa marka hore u aaddo baahiyaha caafimaadka caadiga ah. Waxaa ku jira baaritaannada guud, cusboonaysiinta daawooyinka, daryeelka cudurrada raaga, gudbinta, daryeelka ka-hortagga, iyo dabagalka arrimaha degdegga ah ka dib.\n\nKingston gudaheeda, waddadaada daryeelka aasaasiga ah ee joogtada ahi waxay ku lug yeelan kartaa dhakhtar qoys, kalkaaliye heer sare ah, xarun caafimaad bulsho, kiliinik kambas, ama isku-dar ikhtiyaarro ku-meel-gaadh ah intaad sugayso daryeel xasilloon.",
    },
    {
      id: "access-matrix",
      title: "Waddooyinka helitaanka daryeelka aasaasiga ah",
      type: "table",
      columns: [
        "Waddada",
        "Waxay ugu fiican tahay",
        "Yaa isticmaali kara",
        "Sida loo bilaabo",
      ],
      rows: [
        {
          cells: [
            "Dhakhtar qoys ama kalkaaliye heer sare ah",
            "Daryeel joogto ah oo socda iyo qorshe caafimaad oo mustaqbal fog",
            "Bukaannada is-diiwaangelin kara liiska bukaannada ee bixiye",
            "Isticmaal Health Care Connect oo la soco furitaannada maxalliga ah",
          ],
        },
        {
          cells: [
            "Xarun caafimaad bulsho",
            "Daryeel bulshada ku salaysan, taageero caqabad yar, iyo qaar daryeel dadka cusub ama baahiyaha adag",
            "U-qalmiddu waxay ku xidhan tahay barnaamijka iyo xaaladda diiwaangelinta",
            "Si toos ah ula xidhiidh ururka oo weydii diiwaangelinta",
          ],
        },
        {
          cells: [
            "Adeegga caafimaadka ardayda",
            "Helitaan dhakhso badan oo ardayda diiwaangashan",
            "Kaliya ardayda dugsiga ku qalanta",
            "Isticmaal adeegga caafimaadka ama fayoobida kambaskaaga",
          ],
        },
        {
          cells: [
            "Kiliinik walk-in ama daryeel degdeg ah oo isla-maalin ah",
            "Daryeel muddo gaaban ah intaad sugayso ama marka bixiyahaaga joogtada ahi aanu diyaar ahayn",
            "Dadweynaha guud, iyadoo lagu xidhayo xeerarka diiwaangelinta maalinlaha ah",
            "Hubi helitaanka hadda ka hor intaadan tegin",
          ],
        },
        {
          cells: [
            "Daryeel aasaasi ah oo khadka tooska ah",
            "Qaar dib-u-buuxin, talo, iyo arrimo caadi ah",
            "Way kala duwan tahay bixiyaha iyo caymiska",
            "Hubi waxa bixiyuhu si badbaado leh khadka uga maarayn karo iyo waxa uusan karin",
          ],
        },
      ],
      caption:
        "Waddada ugu fiicani waxay ku xidhan tahay u-qalmiddaada, degdegga, iyo inaad u baahan tahay daryeel muddo gaaban ama mid socda.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Haddii aadan lahayn bixiye joogto ah",
      type: "steps",
      items: [
        "Iska diiwaangeli waddada rasmiga ah ee gobolka: Isticmaal Health Care Connect haddii aadan lahayn dhakhtar qoys ama kalkaaliye heer sare ah.",
        "Hubi inaad u qalanto ikhtiyaarrada kambaska ama caafimaadka bulshada: Ardaydu waa inay ka bilaabaan kiliinikada dugsigooda. Qaar adeegyada caafimaadka bulshada ahi waxay leeyihiin mudnaano diiwaangelin oo gaar ah.",
        "Dhis qorshe ku-meel-gaadh ah oo badbaado leh: Ogow adeegyada walk-in, degdegga, khadka tooska, farmashiyada, iyo caafimaadka maskaxda ee aad isticmaali karto intaad sugayso.",
        "Diiwaankaaga adigu hay: Kaydi liisaska daawooyinka, natiijooyinka baaritaanka, gudbinta, iyo magacyada dhakhaatiirta aad aragtay.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Waxa la sameeyo intaad sugayso",
      type: "checklist",
      items: [
        "Isticmaal daryeelka walk-in, degdegga, ama khadka tooska ah baahiyaha muddada gaaban marka ay habboon tahay",
        "Weydii farmashiyaha caawimaadda dib-u-buuxinta ama daryeelka cudurrada fudud ee laga yaabo in la heli karo",
        "Hayso hal liis daawooyin oo cusboonaysiisan oo booqasho kasta la qaado",
        "Keen nuqullada natiijooyinka muhiimka ah ama waraaqaha ka-bixidda marka daryeelku kala go'an yahay",
        "Isticmaal isla kiliinikada dabagalka marka ay suurtogal tahay si daryeelkaagu xoogaa isugu xidhnaado",
      ],
    },
    {
      id: "next-best-option",
      title: "Haddii baahidaadu tahay degdeg laakiin aysan ahayn gurmad",
      type: "callout",
      content:
        "Inaadan lahayn dhakhtar qoys macnaheedu maaha inaad dib u dhigto daryeel muhiim ah. Isticmaal ikhtiyaarka saxda ah ee muddada gaaban dhibaatada hortaada taal, kaddibna samee qorshe daryeel sii socda marka dhibaatada degdegga ah la daweeyo ka dib.",
      link: {
        text: "Baadh ikhtiyaarrada daryeelka aasaasiga ah",
        url: "/local-services?category=primary-care",
      },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Kharashka iyo Caymiska",
  description:
    "Hagid caymis oo luqad fudud ah oo ku saabsan OHIP, IFHP, Canadian Dental Care Plan, qorshayaasha ardayda ama kuwa gaarka ah, iyo kharashyada jeebka ee caadiga ah.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Codso OHIP oo hel kaar caafimaad",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Hagidda rasmiga ah ee OHIP.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Macluumaadka rasmiga ah ee caymiska IFHP.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Hagidda rasmiga ah ee caymiska daawada gobolka.",
    },
    {
      title:
        "Ontario: Caawimaad ka hel kharashyada daawada qoraalka ah ee sarreeya",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Hagidda rasmiga ah ee Trillium Drug Program.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Macluumaadka rasmiga ah ee barnaamijka caymiska ilkaha federaalka iyo u-qalmidda.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Aasaaska caymiska",
      type: "default",
      content:
        "Caymiska Ontario wuxuu ku xidhan yahay xaaladdaada sharci, da'daada, dakhligaaga, u-qalmidda barnaamijka, iyo inaad leedahay qorshe caymis dugsi ama mid gaar ah.\n\nAdeegyo badan oo dhakhtar iyo isbitaal oo caafimaad ahaan lagama maarmaan ah ayaa loo daboolaa bukaannada OHIP u qalma. Taasi **ma** aha in wax walba bilaash yihiin. Daawooyinka, daryeelka ilkaha, daryeelka aragga, foomamka, warqadaha jirrada, iyo adeegyo badan oo caafimaad oo dheeri ahi badanaa waxay leeyihiin caymis gaar ah ama lacag jeebka laga bixiyo.\n\nWar wanaagsan haddii aad cusub tahay: **ma jiro wakhti sugitaan oo OHIP ah**. Haddii aad u qalanto, waxaad codsan kartaa isla markaad timaado Ontario, caymiskuna wuxuu bilaabmaa marka codsigaaga la ansixiyo. Ha sugin ilaa aad xanuunsato si aad u codsato.",
    },
    {
      id: "coverage-matrix",
      title: "Waddooyinka caymiska hal jaleeco",
      type: "table",
      columns: [
        "Nooca caymiska",
        "Wuxuu badanaa ka caawiyaa",
        "Waxa weli laga yaabo in aan la daboolin",
        "Waxa xiga ee la sameeyo",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Adeegyo badan oo dhakhtar iyo isbitaal oo caafimaad ahaan lagama maarmaan ah",
            "Daawooyin badan, daryeelka ilkaha, daryeelka aragga, iyo foomamka",
            "Codso haddii aad u qalanto oo kaarkaaga cusboonaysii",
          ],
        },
        {
          cells: [
            "IFHP",
            "Caymis loogu talagalay qaxootiga u qalma iyo magangelyo-doonka sida uu qabo barnaamijka federaalka",
            "Faahfaahintu way ku kala duwan tahay qaybta iyo adeegga",
            "Hubi hagaha rasmiga ah ee IFHP oo weydii kiliinikada ama farmashiyaha inay aqbalaan",
          ],
        },
        {
          cells: [
            "Caymis dugsi ama mid gaar ah",
            "Badanaa wuxuu ka caawiyaa daawooyinka, la-talinta, ilkaha, aragga, iyo daryeelka dheeriga ah",
            "Xadka caymiska, lacagaha wadaagga, iyo xeerarka shabakaddu way kala duwan yihiin",
            "Akhri buugga qorshaha ka hor intaadan u malayn in adeeg la daboolay",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Caymis ilko oo loogu talagalay dadka deggan ee u qalma oo aan haysan caymis ilko oo gaar ah, dakhliga qoyskooda ee la hagaajiyayna ka yar yahay $90,000",
            "Hawl kasta lama daboolo, lacag-wadaagna way khusayn kartaa iyadoo ku xidhan dakhliga",
            "Hubi u-qalmidda oo ka codso bogga rasmiga ah ee CDCP ee Dowladda Kanada",
          ],
        },
        {
          cells: [
            "Caymis firfircoon ma jiro",
            "Weli waxaad heli kartaa qaar adeegyo ah, laakiin lacag ayaa lagaa qaadi kara",
            "Kharashyadu way badnaan karaan booqashooyinka, baaritaannada, ama daawooyinka",
            "Weydiiso lacagta ka hor booqashada oo raadi ikhtiyaarro bulsho meesha ay habboon tahay",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Waxa badanaa aan si buuxda loo daboolin",
      type: "checklist",
      items: [
        "Daawooyin badan oo qoraal ah haddii aadan u qalmin barnaamij dadweyne ama aadan lahayn qorshe kale",
        "Daryeelka ilkaha, haddii aadan u qalmin Canadian Dental Care Plan, Healthy Smiles Ontario, barnaamij ilko oo bulsho, ama qorshe gunno",
        "Daryeelka aragga marka laga reebo waddooyin u-qalmid oo gaar ah",
        "Fisiyoterabi, la-talin, duugis, iyo adeegyo kale oo caafimaad oo dheeri ah haddii aanu barnaamij ama qorshe daboolin",
        "Foomamka, warqadaha, lacagaha ballamaha la seego, iyo kharashyo kale oo maamul oo badan",
      ],
    },
    {
      id: "drug-coverage",
      title: "Waddooyinka caymiska daawada",
      type: "default",
      content:
        "Caymiska daawadu waa meesha dadka cusub badanaa lagu yaabaa. Booqashada dhakhtarka waa la daboolaa, laakiin daawada qoraalka ahi weli lacag ayay ku kici kartaa.\n\nBarnaamijyada daawada dadweynuhu way caawin karaan iyadoo ku xidhan da'da, dakhliga, iyo u-qalmidda. **Ontario Drug Benefit** waxay daboolaa daawooyin badan dadka 65 jir iyo ka weyn iyo dadka barnaamijyo gaar ah ku jira, **OHIP+** waxayna daboolaa daawooyin qoraal ah oo badan dadka 24 jir iyo ka yar ee aan lahayn qorshe gaar ah. Ontario waxay kaloo leedahay **Trillium Drug Program** oo loogu talagalay qaar dadka ah oo kharashka daawadoodu sarreeyo marka loo eego dakhliga qoyska. Haddii aad leedahay qorshe dugsi ama mid gaar ah, hubi inuu la shaqeeyo caymiska dadweynaha ama uu beddelo.",
    },
    {
      id: "coverage-scenarios",
      title: "Su'aalaha caymiska ee caadiga ah",
      type: "faq",
      faqs: [
        {
          question: "Weli ma haysto OHIP. Daryeel ma heli karaa?",
          answer:
            "Haa, laakiin lacag ayaa lagaa qaadi kara, waddada ugu fiicanina waxay ku xidhan tahay xaaladdaada iyo degdegga. Weydiiso kharashka ka hor daryeelka aan gurmadka ahayn marka ay suurtogal tahay, oo eeg u-qalmidda IFHP ama qorshe dugsi ama mid gaar ah haddii ay kugu khusayso.",
        },
        {
          question:
            "Waxaan ahay arday caalami ah. OHIP ma ikhtiyaarkayga keliya baa?",
          answer:
            "Maaha mar walba. Arday badani waxay ku tiirsan yihiin qorshe caymis dugsi ama mid gaar ah halkii OHIP. Isticmaal dukumeentiyada rasmiga ah ee qorshaha dugsigaaga iyo adeegyada caafimaadka ardayda si aad u xaqiijiso waxa la daboolay.",
        },
        {
          question:
            "Daawadaydu ma bilaash bay noqon doontaa haddii ballantayda la daboolay?",
          answer:
            "Maaha daruuri. Caymiska ballanta iyo caymiska daawada qoraalka ahi badanaa way kala go'an yihiin.",
        },
        {
          question: "Daryeelka ilkaha ma la daboolaa?",
          answer:
            "Daryeelka ilkuhu wuu ka go'an yahay OHIP dadka waaweyn intooda badan. Barnaamijka federaalka ee Canadian Dental Care Plan ayaa hadda dabool siiya dad badan oo deggan oo aan haysan caymis ilko oo gaar ah, dakhliga qoyskooda ee la hagaajiyayna ka yar yahay $90,000 — badanaa waxaad u baahan tahay inaad gudbisay canshuur-celin Kanadiyaan ah si aad ugu qalanto. Carruurta qoysaska dakhligoodu hooseeyo waxay u qalmi karaan Healthy Smiles Ontario, Kingston waxayna leedahay kiliinik ilko oo bulsho oo loogu talagalay dadka barnaamijyo gaar ah ku jira.",
        },
        {
          question:
            "Sideen ku ogaadaa in adeeg yahay mid dadweyne, bulsho, ama gaar ah?",
          answer:
            "Isticmaal shaandhooyinka liiska oo eeg faahfaahinta liiska. Haddii aadan hubin, la xidhiidh adeegga ka hor intaadan ballansan.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Booqashadaada Caafimaadka",
  description:
    "Waxa aad keento, sida aad su'aalo u weydiiso, iyo sida aad si badbaado leh ula xidhiidho inta lagu jiro booqasho caafimaad.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Daryeelka caafimaadka ee Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hagid guud oo nidaamka ah.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Waxa aad keento",
      type: "checklist",
      items: [
        "Kaarkaaga caafimaadka, waraaqaha IFHP, ama macluumaad kale oo caymis",
        "Liis daawooyin oo dhammaystiran, oo ay ku jiraan fiitamiinnada iyo daawooyinka aan qoraalka u baahnayn",
        "Magacyada calaamadaha, goorta ay bilaabmeen, iyo waxa isbeddelay",
        "Su'aalaha aad rabto in laga jawaabo ka hor intaadan bixin",
        "Foomam baaritaan, gudbinno, waraaqo ka-bixid, ama natiijooyin baaritaan oo dhawaan ah",
        "Baahiyaha turjubaanka oo qoran si aad u xasuusato inaad weydiiso",
      ],
    },
    {
      id: "during-the-visit",
      title: "Inta booqashadu socoto",
      type: "steps",
      items: [
        "Ka bilow dhibaatadaada ugu weyn: Ballamo badani way gaagaaban yihiin, sidaas darteed ka bilow walaaca maanta kuugu muhiimsan.",
        "Isticmaal luqad fudud: Waa caadi inaad tidhaahdo, 'Eraygaas ma fahmin' ama 'Si ka fudud ma iigu sharxi kartaa?'",
        "Dib u celi qorshaha: Ka hor intaadan bixin, kor u dheh tallaabooyinka xiga si aad u ogaato inaad u baahan tahay baaritaan, gudbin, dib-u-buuxin, ama ballan dabagal.",
        "Weydii waxa dhacaya haddii ay sii xumaadaan: Waa inaad ogaataa goorta aad dib u soo wacdo, goorta aad isticmaasho daryeelka degdegga ah, iyo goorta aad isticmaasho daryeelka gurmadka.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Caawimaadda turjubaanka iyo isgaadhsiinta",
      type: "default",
      content:
        "Haddii aad u baahan tahay caawimaad luqad, goor hore weydiiso. Ha sugin dhammaadka ballanta. Boggan waxaad ku akhrin kartaa luqado dhowr ah adigoo isticmaalaya liiska Luqadda, laakiin turjumaadda boggu waa inaysan beddelin taageerada turjubaanka go'aannada daawaynta, tilmaamaha daawada, ama oggolaanshaha.\n\nWaxaad dhihi kartaa: **'Waxaan u baahanahay turjubaan, fadlan.'** Health811 (wac 811) waxay sidoo kale taleefan ku bixisaa taageero luqado badan. Haddii qof ku taageera kula yimaado, xasuuso in qof qoyska ka mid ahi uusan mar walba ahayn qofka ugu fiican ama ugu badbaado badan ee turjuma macluumaad caafimaad oo adag ama xasaasi ah.",
    },
    {
      id: "questions-to-ask",
      title: "Su'aalo mudan in la weydiiyo",
      type: "checklist",
      items: [
        "Maxaad u malaynaysaa inuu dhacayo?",
        "Maxaan sameeyaa marka xigta?",
        "Ma u baahanahay baaritaan, foom baaritaan, gudbin, ama booqasho dabagal?",
        "Goorma ayaan filan karaa inaan natiijooyinka maqlo?",
        "Calaamadaha digniinta ee macnahoodu yahay inaan dib u soo waco ama caawimaad degdeg ah raadsado waa kuwee?",
      ],
    },
    {
      id: "privacy",
      title: "Arrimaha gaarka ah iyo oggolaanshaha",
      type: "default",
      content:
        "Macluumaadkaaga caafimaadku waa xasaasi. Haddii aadan hubin cidda arki doonta macluumaadkaaga, weydii. Haddii aadan fahmin foom, wadahadal oggolaansho, ama qorshe daawayn, gaabi hawsha oo weydiiso sharaxaad ka cad.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Booqashada ka dib",
  description:
    "Baro waxa dhacaya booqasho ka dib, oo ay ku jiraan foomamka baaritaanka, natiijooyinka baaritaanka, gudbinta, iyo goorta dib loo soo waco.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Macluumaadka nidaamka isbitaalka maxalliga ah.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Macluumaadka habka shaybaadhka bulshada iyo bogga bukaanka.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Waxa badanaa dhaca booqasho ka dib",
      type: "steps",
      items: [
        "Waxaad la baxdaa qorshe: Taasi waxay ku jiri kartaa daawo, foom baaritaan, gudbin, ballan dabagal, ama tilmaamo ah inaad la socoto calaamadaha digniinta.",
        "Waxaa laga yaabaa inaad adigu samayso tallaabada xigta: Tusaale ahaan, waxaa laga yaabaa inaad ballansato baaritaan dhiig, sawir, qaadasho farmashiye, ama booqasho dabagal.",
        "Natiijooyinku badanaa waxay ku noqdaan dhakhtarkii dalbaday: Shaybaadhka ama goobta sawirku isla goobta kuuguma sharxi karaan natiijada.",
        "Natiijo kasta oo caadi ah laguuma soo wici karo: Weydii habka dabagalka kiliinikada si aad u ogaato waxa la filayo.",
      ],
    },
    {
      id: "common-terms",
      title: "Erayada caadiga ah ee booqashada ka dib",
      type: "table",
      columns: [
        "Erayga",
        "Waxa uu luqad fudud ku yahay",
        "Waxa aad badanaa samayso marka xigta",
      ],
      rows: [
        {
          cells: [
            "Requisition (foom baaritaan)",
            "Foom u sheegaya shaybaadhka ama kiliinikada sawirka baaritaanka aad u baahan tahay",
            "Ballanso ama tag baaritaanka oo nuqul hayso haddii aad karto",
          ],
        },
        {
          cells: [
            "Referral (gudbin)",
            "Codsi uu dhakhtar u diro adeeg kale ama takhasusle",
            "Sug in lagula soo xidhiidho, kaddibna dib u soo wac haddii laguu sheegay inaad dabagal samayso oo aan waxba dhicin",
          ],
        },
        {
          cells: [
            "Follow-up (dabagal)",
            "Hubin ka dib daawayn, baaritaan, ama isbeddel calaamado",
            "Weydii goorta iyo sida dabagalku u dhici doono ka hor intaadan bixin",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Goorta dib loo soo waco",
      type: "checklist",
      items: [
        "Ma fahmin foomka baaritaanka, gudbinta, ama tilmaamaha daawada",
        "Waxaa laguu sheegay in qof kula soo xidhiidhi doono, waxbana kama aadan maqal wakhtigii la filayay",
        "Calaamadahaagu way sii xumaanayaan ama uma hagaagayaan sidii laguu sheegay inaad filayso",
        "Farmashiyaha, shaybaadhka, ama goobta sawirku waxay kuu sheegeen in wax ka maqan yihiin waraaqaha",
        "Waxaad u malaynaysaa in natiijo la seegay ama weli waad walwalsan tahay",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Xaalado caadi ah",
      type: "faq",
      faqs: [
        {
          question:
            "Booqasho ka dib waxaan u baahanahay baaritaan dhiig. Maxaan sameeyaa?",
          answer:
            "Hubi inaad haysato foom baaritaan iyo in shaybaadhku rabo ballan. Kaddib liiska isticmaal si aad u hesho goob shaybaadh. Keen foomka baaritaanka iyo macluumaadka caymiskaaga.",
        },
        {
          question: "Ma fahmin foomka baaritaanka ama gudbinta.",
          answer:
            "Wac kiliinikadii ku siisay oo weydiiso inay luqad fudud kuugu sharxaan. Waa wax macquul ah inaad weydiiso waxa foomku yahay, meesha uu aadayo, iyo inaad adigu wax ballansato.",
        },
        {
          question: "Yaa dabagala natiijooyinka baaritaanka?",
          answer:
            "Badanaa dhakhtarkii baaritaanka dalbaday. Weydii xafiiska dhakhtarkaas habkooda caadiga ah ee natiijooyinka caadiga ah iyo kuwa aan caadiga ahayn.",
        },
        {
          question: "Intee in le'eg ayay gudbintu qaadataa?",
          answer:
            "Wakhtiyada gudbintu aad bay u kala duwan yihiin. Weydii nooca sugitaanka ee caadiga ah xaaladdaada iyo waxa la sameeyo haddii aadan waxba maqlin.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Tallaabooyin xiga oo waxtar leh",
      type: "grid",
      gridItems: [
        {
          title: "Hel shaybaadho iyo sawirro",
          content:
            "Isticmaal liiska baaritaanka dhiigga, raajada, altarasawnka (ultrasound), iyo liisaska sawirka.",
          icon: "file",
          link: {
            text: "Shaybaadhada iyo sawirrada",
            url: "/local-services?category=labs-imaging",
          },
        },
        {
          title: "Hel farmashiye",
          content:
            "Isticmaal liiska farmashiyada, caawimaadda dib-u-buuxinta, iyo taageerada daawada.",
          icon: "shield",
          link: {
            text: "Farmashiyada",
            url: "/local-services?category=pharmacies",
          },
        },
        {
          title: "Ma u baahan tahay inaad qorshayso daryeel dabagal?",
          content:
            "Isticmaal bogga daryeelka aasaasiga ah haddii aadan garanayn meesha dabagalka mustaqbalka fog uu ka dhici lahaa.",
          icon: "stethoscope",
          link: {
            text: "Hel daryeelka aasaasiga ah",
            url: "/get-a-family-doctor",
          },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Daawooyinka iyo Farmashiyada",
  description:
    "Faham daawooyinka qoraalka ah, dib-u-buuxinta, caawimaadda farmashiistaha, iyo sida daawooyinka loogu bixiyo Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Waxa farmashiistayaashu samayn karaan",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Macluumaadka rasmiga ah ee farmashiistaha iyo farmashiyada gobolka.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Hagidda rasmiga ah ee caymiska daawada gobolka.",
    },
    {
      title:
        "Ontario: Caawimaad ka hel kharashyada daawada qoraalka ah ee sarreeya",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Hagidda rasmiga ah ee Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Waxa farmashiiste kaa caawin karo",
      type: "default",
      content:
        "Farmashiistayaashu wax ka badan daawo-bixin ayay qabtaan. Waxay kuu sharxi karaan sida daawo si badbaado leh loo qaato, waxay hubin karaan isdhexgalka daawooyinka, waxayna eegi karaan waxyeellooyinka.\n\nOntario gudaheeda, farmashiistayaashu waxay sidoo kale **qiimayn karaan oo daawo u qori karaan 19 cudur oo fudud oo caadi ah** — oo ay ku jiraan indho-casaan (pink eye), finanka bushimaha, infekshanka kaadi-mareenka (haweenka), qaniinyada cayayaanka, iyo xasaasiyadda xilliyeedka. Qiimayntu waa bilaash haddii aad haysato kaarka caafimaadka Ontario, liiska cudurraduna wuu sii kordhi karaa.\n\nFarmashiyuhu wuxuu kaloo yahay mid ka mid ah meelaha ugu fiican ee lagu weydiiyo su'aalo wax ku ool ah sida: **Dib-u-buuxintani ma degdeg baa? Ma jiraa ikhtiyaar ka jaban? Maxaan sameeyaa haddii aan qiyaas seego?**",
    },
    {
      id: "fill-a-prescription",
      title: "Sida daawo qoraal ah loo buuxsado",
      type: "steps",
      items: [
        "Hel warqadda daawada: Waxay noqon kartaa warqad, fakis, ama mid si elektaroonig ah loo diray.",
        "Dooro farmashiyaha: Isticmaalka isla farmashiyaha si joogto ah ayaa ka caawisa inay ogaadaan isdhexgalka daawooyinka iyo dhibaatooyinka taariikhda dib-u-buuxinta.",
        "Weydii wakhtiga iyo kharashka: Farmashiyuhu wuxuu kuu sheegi karaa goorta ay diyaar noqon doonto iyo in qorshahaagu daboolayo.",
        "Dhegayso la-talinta: Weydii waxa daawadu tahay, sida loo qaato, iyo goorta aad dib u soo wacdo haddii aysan caawin.",
      ],
    },
    {
      id: "refill-options",
      title: "Dhibaatooyinka dib-u-buuxinta iyo daawada",
      type: "table",
      columns: ["Xaaladda", "Tallaabada koowaad ee wanaagsan", "Sababta"],
      rows: [
        {
          cells: [
            "Waxaan u baahanahay dib-u-buuxin caadi ah",
            "Ka bilow farmashiyahaaga caadiga ah ama dhakhtarkaaga joogtada ah",
            "Waxay kuu sheegi karaan in loo baahan yahay dib-u-buuxin, cusboonaysiin, ama ballan cusub",
          ],
        },
        {
          cells: [
            "Dhakhtarkaygu ma diyaar aha, daawaduna way iga dhammaan kartaa",
            "Weydii farmashiyaha ikhtiyaarrada la heli karo, kaddibna isticmaal walk-in, khadka tooska, ama daryeelka degdegga haddii loo baahdo",
            "Tallaabada xigta ee ugu badbaado badani waxay ku xidhan tahay daawada iyo xaaladdaada",
          ],
        },
        {
          cells: [
            "Ma fahmin sida daawadan loo qaato",
            "Weydii farmashiistaha inuu mar kale luqad fudud kuugu sharxo",
            "Tani waa qayb ka mid ah isticmaalka daawada ee badbaadada leh",
          ],
        },
        {
          cells: [
            "Daawadu aad bay qaali u tahay",
            "Weydiiso noocyada generic-ga ah (isku daawo, qiimo jaban), caymiska qorshaha, iyo barnaamijyada dadweynaha",
            "Kharashyada daawadu way kala duwan yihiin, caymiskuna badanaa wuu ka go'an yahay booqashada lafteeda",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Siyaabaha daawooyinka loo bixin karo",
      type: "checklist",
      items: [
        "Barnaamij daawo oo dadweyne, haddii aad u qalanto",
        "Qorshe caymis dugsi ama mid gaar ah",
        "Isku-dar caymis dadweyne iyo mid gaar ah",
        "Jeebkaaga haddii aanu barnaamij daboolin daawada",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Ma u baahan tahay caawimaad farmashiye oo maxalli ah?",
      type: "callout",
      content:
        "Isticmaal liiska si aad u hesho farmashiyo, taageero dib-u-buuxin, iyo ikhtiyaarro khadka tooska ah ama isla-maalin ah marka aad isku dayayso inaad si degdeg ah u xalliso dhibaato daawo.",
      link: {
        text: "Baadh liisaska farmashiyada",
        url: "/local-services?category=pharmacies",
      },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Taageerada Caafimaadka Maskaxda",
  description:
    "Caafimaadka maskaxda maxalliga ah, la-talinta, taageerada dhallinyarada, iyo waddooyinka xiisadda ee Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title:
        "9-8-8: Khadka Caawinta Xiisadda Isdilka (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Khadka qaranka ee rasmiga ah ee xiisadda isdilka. Wac ama qoraal u dir 9-8-8, bilaash, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Macluumaadka rasmiga ah ee caafimaadka maskaxda dadka waaweyn iyo taageerada xiisadda.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Khadka caawinta rasmiga ah ee Ontario ee caafimaadka maskaxda iyo balwadda.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Macluumaadka rasmiga ah ee caafimaadka maskaxda carruurta iyo dhallinyarada.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Haddii qof laga yaabo inuusan ammaan ahayn",
      type: "callout",
      content:
        "Haddii ay jirto halis toos ah oo naf ama badbaado, wac 911. Fikradaha isdilka ama murugada aadka u culus, waxaad **waci kartaa ama qoraal u diri kartaa 9-8-8** (Khadka Caawinta Xiisadda Isdilka) wakhti kasta — waa bilaash, waa sir, wuxuuna diyaar yahay 24/7 Ingiriisi iyo Faransiis. Waxaad kaloo waci kartaa khadka xiisadda ee AMHS-KFLA oo shaqeeya 24/7 lambarka 613-544-4229. Ha sugin ballan caadi ah.",
      link: {
        text: "Liisaska caafimaadka maskaxda",
        url: "/local-services?category=mental-health",
      },
    },
    {
      id: "support-types",
      title: "Noocyada taageerada",
      type: "grid",
      gridItems: [
        {
          title: "Taageero xiisadeed",
          content:
            "Tan isticmaal murugo degdeg ah, walaac badbaado, ama marka sugitaanku aanu badbaado lahayn.",
          icon: "alert",
        },
        {
          title: "Taageero degdeg ah",
          content:
            "Tan isticmaal marka xaaladdu culus tahay oo aad dhawaan caawimaad u baahan tahay, laakiin aysan ahayn gurmad toos ah oo naf halis gelinaysa.",
          icon: "clock",
        },
        {
          title: "La-talin caadi ah",
          content:
            "Tan isticmaal walaac socda, niyad-jab, walbahaar, murugo, dhibaatooyin xidhiidh, ama isbeddellada nolosha.",
          icon: "heart",
        },
        {
          title: "Adeegyada carruurta iyo dhallinyarada",
          content:
            "Isticmaal adeegyada caafimaadka maskaxda ee dhallinyarada ee takhasuska leh marka qofka daryeelka u baahani yahay ilmo ama dhallinyaro.",
          icon: "info",
        },
        {
          title: "Taageerada kambaska",
          content:
            "Ardayda waxaa laga yaabaa inay ugu fiican tahay inay marka hore isticmaalaan waddooyinka fayoobida ama la-talinta kambaskooda.",
          icon: "stethoscope",
        },
        {
          title: "Taageerada xadgudubka galmada",
          content:
            "Isticmaal taageero takhasus leh xiisad, la-talin, u-doodid, iyo qorshe badbaado xadgudub galmo ka dib.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Meesha laga bilaabo xaaladaha caadiga ah",
      type: "table",
      columns: ["Xaaladda", "Meesha ugu fiican ee koowaad", "Sababta"],
      rows: [
        {
          cells: [
            "Caawa waxaan u baahanahay caawimaad caafimaad maskaxeed",
            "Wac ama qoraal u dir 9-8-8, wac khadka xiisadda ee AMHS-KFLA, ama isticmaal daryeelka gurmadka haddii badbaadadu halis ku jirto",
            "Ha sugin ballan caadi ah marka xaaladdu khatar dareensiinayso",
          ],
        },
        {
          cells: [
            "Waxaan u baahanahay la-talin laakiin hadda waan nabad qabaa",
            "La-talin bulsho, dhakhtar qoys, kalkaaliye heer sare ah, ama taageerooyinka qorshaha gaarka ah",
            "Kuwani waxay ku caawin karaan daryeel socda iyo gudbinno",
          ],
        },
        {
          cells: [
            "Waxaan caawimaad ugu baahanahay ilmahayga",
            "Adeegyada caafimaadka maskaxda ee carruurta ama dhallinyarada iyo, haddii loo baahdo, hagid degdeg ah",
            "Carruurta iyo dhallinyaradu badanaa waxay leeyihiin waddooyin gaar ah",
          ],
        },
        {
          cells: [
            "Waxaan ahay arday",
            "Caafimaadka ama la-talinta kambaska marka hore, haddii aysan xaaladdu ahayn mid aan badbaado lahayn ama daran",
            "Adeegyada kambasku waxay ardayda u noqon karaan meesha ugu dhakhsaha badan ee laga galo",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Su'aalaha caadiga ah",
      type: "faq",
      faqs: [
        {
          question: "Yaan waci karaa ama qoraal u diri karaa hadda?",
          answer:
            "Wac ama qoraal u dir **9-8-8** (Khadka Caawinta Xiisadda Isdilka) wakhti kasta, bilaash, 24/7 — gudbin looma baahna. Kingston gudaheeda, khadka xiisadda ee AMHS-KFLA ee 613-544-4229 ayaa sidoo kale ka jawaaba 24/7. Haddii badbaadadu halis toos ah ku jirto, wac 911.",
        },
        {
          question:
            "Maxaa dhacaya haddii aanan ogayn in tani tahay xiisad?",
          answer:
            "Haddii qof laga yaabo inuusan ammaan ahayn, ha sugin hubin. Isticmaal taageerada xiisadda ama adeegyada gurmadka.",
        },
        {
          question:
            "Maxaa dhacaya haddii aan caawa caawimaad u baahdo laakiin aanan hubin cidda aan waco?",
          answer:
            "Isticmaal bogga liiska caafimaadka maskaxda ee maxalliga ah ama waddada taageerada xiisadda halkii aad sugi lahayd ilaa subaxda.",
        },
        {
          question:
            "Maxaa dhacaya haddii qofka caawimaadda u baahani yahay ilmahayga?",
          answer:
            "Raadi adeegyada carruurta iyo dhallinyarada gaar ahaan. Waddooyinka caafimaadka maskaxda ee dhallinyaradu badanaa way ka duwan yihiin daryeelka dadka waaweyn.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Baaritaanka Hore iyo Ka-hortagga",
  description:
    "Baro aasaaska daryeelka ka-hortagga, tallaallada, iyo baaritaanka hore ee Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Macluumaadka tallaalka iyo caafimaadka dadweynaha ee maxalliga ah.",
    },
    {
      title: "Ontario: Daryeelka caafimaadka ee Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hagid caafimaad oo guud.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Sababta daryeelka ka-hortaggu muhiim u yahay",
      type: "default",
      content:
        "Daryeelka ka-hortaggu macnihiisu waa in la isku dayo in dhibaatooyinka goor hore la qabto ama la joojiyo ka hor intaysan sii xumaan. Waxaa ku jira tallaallada, baaritaannada hore, hubinta joogtada ah ee cadaadiska dhiigga, iyo wadahadallada arrimaha halista ah ee dhakhtarka.",
    },
    {
      id: "common-prevention",
      title: "Hawlaha ka-hortagga ee caadiga ah",
      type: "checklist",
      items: [
        "Tallaalladaada cusboonaysii",
        "Weydii in baaritaanno hore lagugula taliyay da'daada ama taariikhdaada caafimaad",
        "Su'aalahaaga ku saabsan cadaadiska dhiigga, sonkorowga, ama arrimo kale oo halis ah u keen booqashooyinka caadiga ah",
        "Isticmaal ilaha caafimaadka dadweynaha marka aad u baahan tahay macluumaad tallaal ama ka-hortag",
      ],
    },
    {
      id: "prevention-next",
      title: "Ma u baahan tahay adeegyo ka-hortag oo maxalli ah?",
      type: "callout",
      content:
        "Isticmaal liiska adeegyada maxalliga ah caafimaadka dadweynaha, baaritaanka hore, iyo liisaska farmashiyada haddii aad u baahan tahay meel cad oo Kingston laga bilaabo.",
      link: {
        text: "Liisaska caafimaadka dadweynaha iyo farmashiyada",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Daryeel Dheeri ah iyo Daryeel Bulsho",
  description:
    "Isticmaal boggan si aad u fahamto daryeelka guriga, ilkaha, dhaqan-celinta, la-talinta, taageerada aragga, iyo waxa noqon kara dadweyne, bulsho, arday, ama gaar.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Macluumaadka rasmiga ah ee isku-dubbaridka daryeelka guriga iyo bulshada.",
    },
    {
      title: "Canada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Macluumaadka rasmiga ah ee barnaamijka caymiska ilkaha federaalka iyo u-qalmidda.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Macluumaadka rasmiga ah ee adeegyada bulshada iyo ilkaha.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Macluumaadka rasmiga ah ee taageerada aragga.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Waxa daryeelka dheeriga ah iyo daryeelka bulshadu yihiin",
      type: "default",
      content:
        "Daryeelka dheeriga ah (allied health) macnihiisu waa daryeel ka yimaada xirfadlayaal sida fisiyoterabiyayaal, terabiyayaasha shaqada, khabiirrada nafaqada, shaqaalaha bulshada, la-taliyayaal, dhakhaatiirta ilkaha, ama kooxaha taageerada aragga. Daryeelka bulshadu badanaa waa daryeel ka dhaca isbitaalka dibaddiisa, mararka qaarna gurigaaga, dugsiga, kiliinikada, ama barnaamij bulsho gudahooda.",
    },
    {
      id: "access-payment-matrix",
      title: "Shaxda helitaanka iyo lacag-bixinta",
      type: "table",
      columns: [
        "Waddada",
        "Tusaalooyin",
        "Sida lacag-bixintu badanaa u shaqayso",
        "Sida loo bilaabo",
      ],
      rows: [
        {
          cells: [
            "Daryeelka guriga iyo bulshada ee dadweynuhu maalgeliyo",
            "Kalkaalin guri, terabi guri, isku-dubbarid daryeel",
            "Barnaamijyada dadweynuhu way khusayn karaan haddii aad buuxiso xeerarka barnaamijka",
            "Ka bilow gudbin dhakhtar ama waddada rasmiga ah ee daryeelka guriga",
          ],
        },
        {
          cells: [
            "Adeegyo bulshada ku salaysan",
            "Ilkaha xarunta caafimaadka bulshada ama taageerooyin caqabad yar",
            "Maalgelin dadweyne ama bulsho ayaa khusayn karta iyadoo ku xidhan adeegga",
            "Si toos ah ula xidhiidh barnaamijka oo weydii u-qalmidda",
          ],
        },
        {
          cells: [
            "Taageerooyin dugsi ku salaysan",
            "La-talinta kambaska ama taageerooyin caafimaad la xidhiidha",
            "Badanaa waxay ku xidhan yihiin u-qalmidda ardayga iyo lacagaha ama qorshayaasha ardayda",
            "Marka hore isticmaal bogagga adeegga rasmiga ah ee dugsigaaga",
          ],
        },
        {
          cells: [
            "Daryeel dheeri ah oo gaar ah",
            "Fisiyoterabi, la-talin, duugis, ilko gaar ah, adeegyo arag oo gaar ah",
            "Badanaa lacag gaar ah ayaa la bixiyaa haddii aanu qorshe kale daboolin",
            "Weydiiso lacagaha oo dhan iyo xeerarka caymiska ka hor intaadan ballansan",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Tusaalooyin daryeel dheeri ah iyo daryeel bulsho",
      type: "grid",
      gridItems: [
        {
          title: "Daryeelka guriga",
          content:
            "Waxtar leh marka qof guriga taageero ugu baahan yahay jirro, dhaawac, ama daryeel isbitaal ka dib.",
          icon: "clock",
          link: {
            text: "Liisaska daryeelka guriga",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Daryeelka ilkaha",
          content:
            "Caymiska ilkuhu wuu ka go'an yahay caymiska dhakhtarka caadiga ah. Barnaamijka federaalka ee Canadian Dental Care Plan ayaa hadda dabool siiya dad badan oo aan haysan caymis ilko oo gaar ah, barnaamijyo sida Healthy Smiles Ontario iyo kiliinikada ilkaha bulshaduna waxay caawiyaan kooxo gaar ah.",
          icon: "shield",
          link: {
            text: "Liisaska ilkaha iyo bulshada",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Dhaqan-celin iyo terabi",
          content:
            "Fisiyoterabi, terabiga shaqada, iyo adeegyo la xidhiidha ayaa noqon kara dadweyne, bulsho, ama gaar iyadoo ku xidhan waddadaada.",
          icon: "stethoscope",
          link: {
            text: "Liisaska daryeelka dheeriga ah",
            url: "/local-services?category=allied-community",
          },
        },
        {
          title: "Taageerada aragga",
          content:
            "Taageerada araggu waxay ku lug yeelan kartaa qalab, caawimaad jiho-raadis, iyo taageerooyin bulsho iyo sidoo kale daryeel indho oo caafimaad.",
          icon: "info",
          link: {
            text: "Liisaska taageerada aragga",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Ka hor intaadan ballansan",
      type: "checklist",
      items: [
        "Weydii in gudbin loo baahan yahay",
        "Weydii in adeeggu yahay dadweyne, bulsho-maalgelin, ama lacag gaar ah",
        "Weydiiso lacagaha saxda ah iyo xeerarka joojinta haddii adeeggu gaar yahay",
        "Hubi in dugsigaaga ama qorshahaaga gaarka ahi daboolayo qayb kharashka ah",
        "Weydii inaad u baahan tahay inaad keento diiwaanno, sawirro, ama warqad dhakhtar",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "Su'aalaha Badanaa la Weydiiyo iyo Qaamuuska",
  description:
    "Xaalado caadi ah oo dadka cusub, su'aalo wax ku ool ah, iyo qeexitaanno luqad fudud ah.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Daryeelka caafimaadka ee Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Hagidda caafimaadka guud ee gobolka.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Hagidda rasmiga ah ee talada kalkaaliyaha.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Xaalado caadi ah oo dadka cusub",
      type: "faq",
      faqs: [
        {
          question: "Weli ma haysto OHIP. Maxaan marka hore sameeyaa?",
          answer:
            "Marka hore baro waddadaada caymiska, kaddibna isticmaal liiska maxalliga ah iyo bogagga hagidda degdegga ah si aad u samayso qorshe ku-meel-gaadh ah oo badbaado leh.",
        },
        {
          question: "Waxaan ahay arday caalami ah. Xaggee ka bilaabaa?",
          answer:
            "Ka bilow adeegga caafimaadka ama fayoobida kambaskaaga iyo dukumeentiyada caymiska dugsigaaga, kaddibna isticmaal adeegyada bulshada ama kuwa degdegga ah marka kuwaasi aysan ku filnayn.",
        },
        {
          question: "Waxaan u baahanahay turjubaan.",
          answer:
            "Goor hore weydiiso. Boggan waxaad ku akhrin kartaa 33 luqadood adigoo isticmaalaya liiska Luqadda, waxaadna shaqaalaha tusi kartaa weedhaha gaagaaban ee ku jira tab-ka caawimaadda turjubaanka. Ballamaha, tilmaamaha daawada, oggolaanshaha, iyo wadahadallada baaritaanka, weydii taageero turjubaan oo xirfad leh. Health811 (wac 811) waxay taleefan ku bixisaa taageero luqado badan.",
        },
        {
          question: "Booqasho ka dib waxaan u baahanahay baaritaan dhiig.",
          answer:
            "Hubi inaad haysato foom baaritaan, kaddibna liiska ka baadh shaybaadhada iyo sawirrada.",
        },
        {
          question:
            "Waxaan u baahanahay dib-u-buuxin, dhakhtarkayguna ma diyaar aha.",
          answer:
            "Ka bilow farmashiyahaaga, kaddibna isticmaal waddooyinka walk-in, khadka tooska, ama kuwa degdegga ah sida ay habboon tahay iyadoo ku xidhan daawada iyo degdegga.",
        },
        {
          question: "Waxaan daryeel ugu baahanahay ilmahayga.",
          answer:
            "Marka hore isticmaal calaamadaha digniinta gurmadka, kaddibna hagidda isla-maalinta ama degdegga ah. Waddooyinka caafimaadka maskaxda ee carruurta iyo dhallinyaradu badanaa way ka go'an yihiin daryeelka dadka waaweyn.",
        },
        {
          question: "Caawa waxaan u baahanahay caawimaad caafimaad maskaxeed.",
          answer:
            "Wac ama qoraal u dir 9-8-8 (Khadka Caawinta Xiisadda Isdilka) wakhti kasta, ama wac khadka xiisadda ee AMHS-KFLA oo shaqeeya 24/7 lambarka 613-544-4229. Isticmaal daryeelka gurmadka haddii badbaadadu halis ku jirto. Ha sugin ballan caadi ah.",
        },
        {
          question: "Ma fahmin foom baaritaan ama gudbin.",
          answer:
            "Wac kiliinikadii ku siisay oo weydiiso inay luqad fudud kuugu sharxaan. Waxaad weydiin kartaa waxa loogu talagalay, meesha uu aadayo, iyo cidda dabagalka samaynaysa.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Su'aalo kale oo caadi ah",
      type: "faq",
      faqs: [
        {
          question:
            "Si toos ah ma u aadi karaa gurmadka haddii aanan dhakhtar lahayn?",
          answer:
            "Gurmadku wuxuu u taal xaaladaha gurmadka. Haddii dhibaatadu aysan si cad u ahayn mid naf halis gelinaysa, ka bilow bogga hagidda degdegga ah, Health811, kiliinik walk-in, ama daryeel kale oo isla-maalin ah.",
        },
        {
          question:
            "Maxaa dhacaya haddii aan cusub ahay oo aanan garanayn adeegga igu habboon?",
          answer:
            "Isticmaal shaandhooyinka liiska ee ardayda, dadka cusub, carruurta iyo dhallinyarada, walk-in, khadka tooska, gudbin loo baahan yahay, iyo nooca caymiska.",
        },
        {
          question:
            "Maxaa dhacaya haddii macluumaadka boggani u muuqdo mid duugoobay?",
          answer:
            "Isticmaal foomka warbixinta ee bogga ama liiska si dib-u-eegista xigtaa ay diiradda u saarto isbeddelka aad heshay.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Qaamuus",
      type: "checklist",
      items: [
        "Daryeelka aasaasiga ah (primary care): Waddadaada caafimaadka joogtada ah ee baahiyaha caadiga ah iyo kuwa socda.",
        "Kalkaaliye heer sare ah (nurse practitioner, NP): Kalkaaliye xirfad sare leh oo xaalado badan ku qiimayn kara, cudur ku ogaan kara, daawo ku qori kara, oo ku gudbin kara.",
        "Gudbin (referral): Codsi uu dhakhtar u diro adeeg kale ama takhasusle.",
        "Foom baaritaan (requisition): Foom u sheegaya shaybaadhka ama kiliinikada sawirka baaritaanka aad u baahan tahay.",
        "Kala-soocid (triage): Habka lagu go'aamiyo cidda marka hore u baahan daryeel degdeg ah iyadoo lagu salaynayo badbaadada iyo darnaanta.",
        "Kiliinik walk-in: Kiliinik laga yaabo inay aragto bukaanno aan ballan lahayn, iyadoo ku xidhan diiwaangelinta maalinlaha ah.",
        "Daryeel degdeg ah (urgent care): Daryeel isla-maalin ah oo loogu talagalay dhibaatooyinka degdegga ah ee aan si cad u ahayn naf-halis.",
        "Bukaan diiwaangashan ama ku xidhan (rostered/attached): Bukaan xidhiidh socda la leh bixiye daryeel aasaasi oo joogto ah.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Ku Saabsan, Kalsoonida, iyo Arrimaha Gaarka ah",
  description:
    "Baro sida hagahani u shaqeeyo, sida ilaha iyo xaaladda dib-u-eegista loo maareeyo, iyo sida isbeddellada loo soo sheego.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ogeysiisyada ilaha mashruuca",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Soo-koobid dadweyne oo ku saabsan sida mashruucu u maareeyo kalsoonida iyo ilaha.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Waxa boggan loogu talagalay",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca waa hage hagid caafimaad oo dadka cusub mudnaan siiya Kingston, Ontario. Waxaa loogu talagalay inuu dadka ka caawiyo inay doortaan tallaabada xigta ee saxda ah, fahmaan erayada nidaamka ee caadiga ah, oo helaan liisas adeegyo maxalli ah oo la aamini karo.\n\nBoggani **ma** aha qalab wakhtiyada sugitaanka oo toos ah, goob ballansi, ama adeeg talo caafimaad.",
    },
    {
      id: "sources",
      title: "Sida kalsoonida iyo il-raadintu u shaqeeyaan",
      type: "default",
      content:
        "Waxaan isku daynaa inaan liisaska maxalliga ah ku xidhno bogagga adeegga ee rasmiga ah mar kasta oo ay suurtogal tahay. Liis kastaa wuxuu muujiyaa xaaladda dib-u-eegista iyo taariikhda dib-u-eegista ugu dambaysay. Qaar gelitaannada ka mid ah ayaa si buuxda loogu xaqiijiyay ilo rasmi ah. Kuwo kale weli waxay u baahan yihiin hubin maxalli ah sababtoo ah saacadaha, diiwaangelinta, ama xeerarka helitaanku marar badan way isbeddelaan.\n\nQaybaha ilaha ee heerka boggu waxay muujiyaan tixraacyada rasmiga ah ee ugu muhiimsan ee loo isticmaalay wareegga dib-u-eegista ee hadda.",
    },
    {
      id: "accessibility",
      title: "Helitaanka iyo luqadda",
      type: "default",
      content:
        "Boggan waxaa loo dhisay inuu kiiboodhka si fiican ugu shaqeeyo, mobilka mudnaan siiyo, luqad fududna lagu akhriyi karo.\n\nHagaha oo dhan waxaad ku akhrin kartaa **33 luqadood** adigoo isticmaalaya liiska Luqadda ee madaxa bogga — laga bilaabo العربية iyo Soomaali ilaa ਪੰਜਾਬੀ, ትግርኛ, Yorùbá, iyo Українська — iyadoo bog kasta iyo liis kasta si toos ah boggan laga helo. Dhammaan turjumaadaha waxaa lagu caawiyay mashiin; Faransiiska, Isbaanishka, Carabiga, iyo Shiinaha la fududeeyay waxay heleen eegis dheeraad ah, inta kalena waxaa lagu calaamadeeyay turjumaad otomaatig ah. **Ingiriisigu wuxuu sii ahaanayaa nuqulka tixraaca** — haddii weedh la turjumay u muuqato mid aan caddayn ama la yaab leh, hubi qoraalka Ingiriisiga ama weydii qof inuu xaqiijiyo.\n\nTobanaan luqadood oo kale ayaa boggan ku furi kara Google Translate isla liiskaas, tab-ka caawimaadda turjubaanna wuxuu leeyahay weedho degdeg ah oo gaagaaban oo ku qoran in ka badan 20 luqadood oo aad shaqaalaha tusi karto.\n\nLiisaska adeegyada (magacyada adeegyada, cinwaannada, lambarada taleefanka, iyo saacadaha) waxay ku hadhaan Ingiriisi si ay si sax ah ugu ekaadaan ilaha rasmiga ah.\n\nTurjumaad nooc kasta ahi weli way ku khaldami kartaa faahfaahinta caafimaadka, sidaas darteed weydii taageero turjubaan oo xirfad leh ballamaha, tilmaamaha daawada, iyo oggolaanshaha. Health811 (wac 811) waxay taleefan ku bixisaa taageero luqado badan.",
    },
    {
      id: "privacy",
      title: "Arrimaha gaarka ah",
      type: "default",
      content:
        "Boggani ma isticmaalo xog-ururin fog oo faraha la gelisa. Wuxuu browserkaaga ku haystaa tirooyin horumarin oo fudud si ilaaliyayaasha boggu u fahmaan baadhitaannada caadiga ah, baadhitaannada aan natiijo lahayn, daawashada adeegyada, iyo warbixinnada dhibaatooyinka marka macluumaadka si ula kac ah loo dhoofiyo dayactir awgeed.\n\nHa ku dirin macluumaad caafimaad oo gaar ah foomka fikradaha ama iimaylka.",
    },
    {
      id: "contact",
      title: "Xidhiidhka iyo soo-sheegidda isbeddellada",
      type: "default",
      content:
        "Haddii bog ama liis u muuqdo khalad, isticmaal foomka warbixinta ee boggaas. Warbixinnadu waa inay sharxaan dhibaatada, ma aha xaaladdaada caafimaad ee gaarka ah.\n\nIimaylka guud ee xidhiidhka: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Afeef",
      type: "default",
      content:
        "Boggan waxaa loogu talagalay hagid iyo waxbarasho oo keliya. Ma aha talo caafimaad mana aha beddelka cudur-ogaansho, daawayn, ama caawimaad gurmad oo xirfad leh. Haddii xaalad noqon karto mid naf halis gelinaysa, wac 911.",
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
