import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Ładowanie strony...",
    directoryEnglishNote:
      "Wpisy w katalogu są wyświetlane po angielsku, aby nazwy usług, adresy, numery telefonów i godziny dokładnie zgadzały się z oficjalnymi źródłami.",
  },
  header: {
    emergencyBanner: "Zagrożenie życia? Zadzwoń teraz pod 911.",
    tagline:
      "Kingston, Ontario — nawigacja po opiece zdrowotnej z myślą o nowo przybyłych",
    languageButton: "Język",
    languageButtonAria: "Pomoc językowa i tłumacz ustny",
    openNavigation: "Otwórz nawigację",
    primaryNavLabel: "Główna",
  },
  languageModal: {
    title: "Pomoc językowa i tłumacz ustny",
    description:
      "Czytaj ten przewodnik w języku, który jest dla Ciebie najwygodniejszy. W rozmowach o zdrowiu poproś o tłumacza ustnego, gdy go potrzebujesz.",
    chooseLanguageTitle: "Wybierz swój język",
    chooseLanguageNote:
      "Ten przewodnik jest w pełni przetłumaczony na 33 języki na tej stronie, a dziesiątki kolejnych otwierają się dzięki tłumaczeniu automatycznemu. Wpisy w katalogu pozostają po angielsku, aby dokładnie zgadzały się z oficjalnymi źródłami. Jeśli coś wydaje się niejasne, wersją odniesienia jest wersja angielska.",
    safetyTitle: "Uwaga dotycząca bezpieczeństwa",
    safetyBody:
      "Tłumaczenie strony służy do czytania i rozumienia. W sprawie wizyt, instrukcji do badań, leków lub zgody zapytaj, czy przychodnia lub szpital może zapewnić profesjonalnego tłumacza ustnego. Health811 (zadzwoń pod 811) oferuje pomoc telefoniczną w wielu językach.",
    phrasesTitle: "Krótkie zwroty do pokazania personelowi",
    phrasesNote:
      "Wskaż swój język i pokaż te zdania w rejestracji lub personelowi medycznemu.",
    callHealth811: "Zadzwoń do Health811",
    accessibilityCta: "Dostępność i zaufanie",
    close: "Zamknij okno pomocy językowej",
  },
  moreLanguages: {
    title: "Więcej języków (tłumaczenie automatyczne)",
    description:
      "Każdy język działa z tego jednego menu — w tym somalijski, joruba, igbo, hausa, amharski, tigrinia, suahili, ukraiński, farsi, urdu, pendżabski, tamilski i wietnamski.",
    selectLabel: "Wybierz dowolny język",
    selectPlaceholder: "Wszystkie języki — wybierz jeden…",
    openButton: "Otwórz w tym języku",
    disclaimer:
      "Języki oznaczone jako automatyczne otwierają tę stronę przez Google Translate i pozostają w Twoim języku podczas dalszego przeglądania. Tłumaczenie automatyczne nie jest sprawdzane przez ten projekt — nadaje się do czytania, ale szczegóły medyczne potwierdź z lekarzem lub tłumaczem.",
  },
  funding: {
    acknowledgment:
      "Ten projekt jest wspierany grantem Ontario Medical Students Association (OMSA).",
    logoAlt: "Logo Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Szukaj języków…",
    onSiteGroup: "Przetłumaczone na tej stronie",
    proxyGroup: "Więcej języków przez Google Translate",
    reviewedBadge: "Sprawdzone",
    automaticBadge: "Automatyczne",
    interpreterTab: "Pomoc tłumacza i zwroty",
    noMatches: "Żaden język nie pasuje do Twojego wyszukiwania.",
    note: "Tłumaczenia są wspomagane maszynowo, a jeśli coś wydaje się niejasne, wersją odniesienia jest wersja angielska. Języki z grupy Google Translate otwierają tę stronę w zewnętrznym serwisie Google. Wpisy w katalogu pozostają po angielsku, aby dokładnie zgadzały się z oficjalnymi źródłami.",
  },
  navigation: [
    {
      title: "Zacznij tutaj",
      items: [
        {
          label: "Pilna pomoc teraz",
          to: "/need-help-now",
          description: "Pilne decyzje i wsparcie w kryzysie",
        },
        {
          label: "Zacznij tutaj",
          to: "/start-here",
          description: "Dla nowych w systemie opieki zdrowotnej Ontario",
        },
        {
          label: "Znajdź podstawową opiekę",
          to: "/get-a-family-doctor",
          description:
            "Lekarze, pielęgniarki praktyki (NP), ośrodki środowiskowe (CHC) i opcje studenckie",
        },
      ],
    },
    {
      title: "Zrozum opiekę",
      items: [
        {
          label: "Koszty i ubezpieczenie",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, plany prywatne i pokrycie kosztów leków",
        },
        {
          label: "Twoja wizyta",
          to: "/your-visit",
          description: "Co zabrać i jak zadawać pytania",
        },
        {
          label: "Po wizycie",
          to: "/after-visit",
          description:
            "Badania, zlecenia na badania, skierowania i dalsza opieka",
        },
        {
          label: "Leki i apteki",
          to: "/medicines-and-pharmacies",
          description: "Recepty, odnawianie recept i pomoc farmaceuty",
        },
      ],
    },
    {
      title: "Pomoc lokalna",
      items: [
        {
          label: "Usługi lokalne",
          to: "/local-services",
          description: "Przeszukaj usługi w Kingston",
        },
        {
          label: "Zdrowie psychiczne",
          to: "/mental-health",
          description:
            "Wsparcie kryzysowe, pilne, rutynowe i dla młodzieży",
        },
        {
          label: "Badania przesiewowe i profilaktyka",
          to: "/screening-prevention",
          description: "Szczepienia i opieka profilaktyczna",
        },
        {
          label: "Opieka wspomagająca i środowiskowa",
          to: "/community-allied-health",
          description:
            "Opieka domowa, rehabilitacja, stomatologia i wsparcie środowiskowe",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Częste sytuacje nowo przybyłych i słowniczek",
        },
        {
          label: "O stronie i zaufanie",
          to: "/about",
          description: "Źródła, prywatność, dostępność i zgłoszenia",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Potrzebujesz pomocy teraz?",
    items: {
      "call-911": {
        label: "Zadzwoń pod 911",
        description: "Zagrożenie życia",
      },
      "call-811": {
        label: "Zadzwoń do Health811",
        description: "Porada pielęgniarska, 24/7",
      },
      "call-988": {
        label: "Zadzwoń lub napisz SMS pod 9-8-8",
        description: "Linia kryzysowa ds. samobójstw, 24/7",
      },
      "call-crisis": {
        label: "Zadzwoń na linię kryzysową",
        description: "Linia kryzysowa AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Przewodnik po pilnej opiece",
        description: "Opcje po godzinach i tego samego dnia",
      },
      "mental-health": {
        label: "Wsparcie zdrowia psychicznego",
        description: "Ścieżki kryzysowe, pilne i rutynowe",
      },
    },
  },
  home: {
    seoTitle: "Przewodnik po opiece zdrowotnej w Kingston",
    seoDescription:
      "Nawigacja po opiece zdrowotnej dla nowo przybyłych w Kingston, Ontario: pilna pomoc, usługi lokalne, podstawy ubezpieczenia, wskazówki dotyczące tłumaczy i dalsze kroki po wizycie.",
    kicker: "Kingston, Ontario",
    heroTitle: "Znajdź właściwą opiekę w Kingston bez zgadywania",
    heroLead:
      "Zacznij od pilnej pomocy, podstaw dla nowo przybyłych, ubezpieczenia lub katalogu usług lokalnych. Ten przewodnik jest napisany prostym językiem, przyjazny dla telefonu i uczciwie mówi, co jeszcze wymaga ponownego sprawdzenia.",
    cardNeedHelp: {
      title: "Pilna pomoc teraz",
      body: "Nagłe wypadki, pilna opieka, kryzys i wskazówki po godzinach pracy.",
    },
    cardStartHere: {
      title: "Zacznij tutaj",
      body: "Jak działa opieka zdrowotna w Ontario i co zrobić najpierw.",
    },
    cardSearch: {
      title: "Szukaj usług",
      body: "Znajdź badania krwi, odnawianie recept, opiekę bez umówienia, zdrowie psychiczne i więcej.",
    },
    cardLanguage: {
      title: "Pomoc językowa",
      body: "Czytaj ten przewodnik w swoim języku, plus wskazówki dotyczące tłumaczy i krótkie zwroty.",
    },
    quickDecisionsKicker: "Szybkie decyzje",
    quickDecisionsTitle: "Zacznij od tych pytań",
    quickDecisionLines: [
      "Jeśli sytuacja może zagrażać życiu, zadzwoń teraz pod 911.",
      "Jeśli nie wiesz, dokąd pójść dziś wieczorem, zadzwoń do Health811.",
      "Przy myślach samobójczych lub przytłaczającym cierpieniu zadzwoń lub napisz SMS pod 9-8-8 o każdej porze.",
      "Jeśli nie masz lekarza rodzinnego, uwzględnij w swoim planie kliniki bez umówienia (walk-in), ośrodki zdrowia środowiskowego i opcje studenckie.",
      "Jeśli potrzebujesz badania krwi, prześwietlenia, odnowienia recepty lub aktualizacji skierowania, użyj katalogu lokalnego, aby znaleźć następny krok.",
    ],
    trustNoteTitle: "Nota o zaufaniu",
    trustNoteBody:
      "To jest statyczny przewodnik. Nie pokazujemy czasów oczekiwania na żywo. Szczegóły wrażliwe na czas, takie jak godziny otwarcia i zasady przyjęć, mogą się szybko zmieniać, dlatego każdy wpis zawiera link do źródła i status przeglądu.",
    newcomerKicker: "Szybki start dla nowo przybyłych",
    newcomerTitle: "Pierwsze kroki, jeśli dopiero przyjeżdżasz do Kingston",
    newcomerSteps: [
      {
        title: "1. Poznaj swoje ubezpieczenie",
        body: "Zrozum OHIP, IFHP, plany prywatne i to, co zwykle nie jest pokrywane. Nie ma okresu oczekiwania na OHIP — złóż wniosek od razu po przyjeździe.",
      },
      {
        title: "2. Zaplanuj swoją ścieżkę podstawowej opieki",
        body: "Poznaj różnicę między lekarzami rodzinnymi, pielęgniarkami praktyki (nurse practitioner), klinikami studenckimi, środowiskowymi ośrodkami zdrowia i opieką bez umówienia.",
      },
      {
        title: "3. Wiedz, co dzieje się dalej",
        body: "Dowiedz się, co zwykle oznaczają zlecenia na badania, skierowania, wyniki badań i telefony kontrolne.",
      },
    ],
    languageSupportKicker: "Wsparcie językowe",
    languageSupportTitle: "Pokaż te zwroty, jeśli potrzebujesz pomocy",
    openLanguageHelp: "Otwórz pomoc językową",
    commonTasksKicker: "Częste zadania",
    commonTasksTitle: "Szukaj według zadania, które chcesz załatwić",
    openDirectory: "Otwórz pełny katalog",
    tasks: [
      {
        title: "Badanie krwi lub prześwietlenie",
        body: "Znajdź laboratoria i usługi obrazowania.",
      },
      {
        title: "Odnowienie recepty",
        body: "Znajdź apteki i pomoc w odnawianiu recept.",
      },
      {
        title: "Wsparcie zdrowia psychicznego",
        body: "Wsparcie kryzysowe, pilne, rutynowe i dla młodzieży.",
      },
      {
        title: "Karta zdrowia lub wsparcie dla nowo przybyłych",
        body: "Znajdź ServiceOntario, ISKA i poradę telefoniczną.",
      },
    ],
    featuredKicker: "Polecane usługi",
    featuredTitle: "Dobre miejsca na początek",
    trustKicker: "Zaufanie i źródła",
    trustTitle:
      "Uczciwie o tym, co jest zweryfikowane, a co wciąż wymaga ponownego sprawdzenia",
    trustBody:
      "Niektóre wpisy są sprawdzone z oficjalnymi lokalnymi źródłami. Inne wciąż wymagają lokalnego sprawdzenia, ponieważ godziny, zasady przyjęć lub dostęp często się zmieniają. Pokazujemy ten status otwarcie i zachęcamy do zgłaszania nieaktualnych informacji.",
    trustChecklistTitle: "Przeczytaj, zanim polegniesz na wpisie",
    trustChecklist: [
      "Szukaj linku do oficjalnego źródła.",
      "Sprawdź datę ostatniego przeglądu.",
      "Zanim pójdziesz, potwierdź godziny tego samego dnia i możliwość wejścia bez umówienia.",
      "Jeśli zauważysz zmianę, użyj formularza zgłoszenia.",
    ],
    trustLink: "Zobacz źródła i noty o zaufaniu",
  },
  contentPage: {
    breadcrumbHome: "Strona główna",
    badge: "Przewodnik prostym językiem",
    reviewStatusTitle: "Status przeglądu",
    reviewLabels: {
      reviewed:
        "Sprawdzono względem aktualnego zestawu źródeł używanego przez ten projekt.",
      "general-guidance":
        "Sprawdzono jako ogólne wskazówki. Lokalne szczegóły wciąż mogą szybko się zmieniać.",
      "needs-local-recheck":
        "Przydatne wskazówki, ale lokalne szczegóły wymagają jeszcze sprawdzenia.",
    },
    lastReviewPrefix: "Ostatni przegląd strony:",
    noReviewDate:
      "Ta strona nie ma zapisanej daty przeglądu na poziomie strony.",
    translationAside:
      "Możesz czytać tę stronę w kilku językach, używając menu Język. W sprawie wizyt, leków, zgody i instrukcji do badań zapytaj, czy dostępne jest wsparcie tłumacza ustnego.",
    share: "Udostępnij",
    print: "Drukuj",
    sourcesTitle: "Źródła tej strony",
    sourcesNote:
      "To główne oficjalne lub pierwotne źródła użyte w bieżącym przeglądzie strony. Lokalne procedury mogą się zmieniać między cyklami przeglądów.",
    onThisPage: "Na tej stronie",
    sourcesAnchorLabel: "Źródła",
    translationReminderTitle: "Przypomnienie o tłumaczeniu",
    translationReminderBody:
      "Jeśli coś dotyczy Twojego leczenia lub bezpieczeństwa, potwierdź to z lekarzem lub tłumaczem, zamiast polegać tylko na tłumaczeniu.",
    linkCopiedTitle: "Link skopiowany",
    linkCopiedBody: "Możesz teraz wkleić link do tej strony w dowolnym miejscu.",
    shareCancelled: "Udostępnianie anulowane",
  },
  directory: {
    seoTitle: "Usługi lokalne",
    seoDescription:
      "Wyszukuj przyjazne nowo przybyłym usługi zdrowotne, zdrowia psychicznego, apteczne, ubezpieczeniowe i nawigacyjne w Kingston, Ontario.",
    kicker: "Katalog Kingston",
    title: "Wyszukaj lokalne usługi zdrowotne",
    lead: "Szukaj według usługi, objawu, dokumentu lub zadania. Przykłady: walk in (bez umówienia), after hours (po godzinach), bloodwork (badanie krwi), refill (odnowienie recepty), health card (karta zdrowia), student clinic (klinika studencka) lub newcomer support (wsparcie dla nowo przybyłych).",
    searchPlaceholder:
      "Szukaj według potrzeby, nazwy usługi, adresu lub słowa kluczowego",
    sortAriaLabel: "Sortuj wyniki",
    sortRelevance: "Sortuj: Trafność",
    sortAlphabetical: "Sortuj: A do Z",
    sortRecentlyReviewed: "Sortuj: Ostatnio sprawdzane",
    sortArea: "Sortuj: Okolica",
    gridViewLabel: "Widok siatki",
    listViewLabel: "Widok listy",
    allServices: "Wszystkie usługi",
    audienceTitle: "Dla kogo",
    accessTitle: "Dostęp",
    careLevelTitle: "Poziom opieki",
    coverageAreaTitle: "Ubezpieczenie i okolica",
    areaLabel: "Okolica",
    showingServices: "Wyświetlane usługi: {count}",
    resetFilters: "Wyczyść filtry",
    trustPanelTitle: "Zaufanie i status przeglądu",
    trustPanelBody:
      "Ten katalog jest statyczny, nie działa na żywo. Pokazujemy ostatnią zapisaną datę przeglądu, linki do oficjalnych źródeł, gdy są dostępne, oraz wpisy, które wciąż wymagają lokalnego sprawdzenia. Zanim pójdziesz, potwierdź godziny i dostępność tego samego dnia.",
    verifiedLabel: "Zweryfikowano",
    needsRecheckLabel: "Wymaga sprawdzenia",
    noResultsTitle: "Żadne usługi nie pasują do tych filtrów",
    noResultsBody:
      "Spróbuj szerszego wyszukiwania, np. bloodwork (badanie krwi), refill (odnowienie recepty), mental health (zdrowie psychiczne), health card (karta zdrowia) lub walk in (bez umówienia). Możesz też wyczyścić wszystkie filtry i zacząć od nowa.",
    notSureTitle: "Nie wiesz, od czego zacząć?",
    notSureBody:
      "Jeśli nie masz pewności, czy potrzebujesz pomocy w nagłym wypadku, pilnej opieki, kliniki bez umówienia czy pomocy apteki, zacznij od strony z pilnymi wskazówkami lub zadzwoń do Health811 po poradę pielęgniarki.",
    needHelpNowCta: "Pilna pomoc teraz",
    callHealth811: "Zadzwoń do Health811",
  },
  filters: {
    audience: {
      newcomers: "Nowo przybyli",
      students: "Tylko studenci lub kampus",
      "children-youth": "Dzieci i młodzież",
      adults: "Dorośli",
      families: "Rodziny",
      "unattached-patients": "Bez lekarza rodzinnego",
    },
    access: {
      "walk-in": "Bez umówienia (walk-in)",
      appointment: "Po umówieniu wizyty",
      referral: "Wymagane skierowanie",
      virtual: "Wirtualnie",
    },
    level: {
      emergency: "Nagłe wypadki",
      urgent: "Pilne",
      primary: "Podstawowa",
      community: "Środowiskowa",
    },
    payment: {
      public: "Finansowane publicznie",
      community: "Środowiskowe / niskoprogowe",
      mixed: "Pokrycie mieszane",
      "student-plan": "Plan studencki",
      private: "Płatne prywatnie",
    },
    location: {
      downtown: "Centrum (Downtown)",
      "north-end": "North End (północ miasta)",
      "west-end": "West End (zachód miasta)",
      campus: "Kampus",
      online: "Online",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Pomoc w nagłych wypadkach i pilna opieka",
      shortLabel: "Nagłe i pilne",
    },
    "primary-care": {
      label: "Podstawowa opieka zdrowotna",
      shortLabel: "Podstawowa opieka",
    },
    "community-health": {
      label: "Środowiskowe ośrodki zdrowia",
      shortLabel: "Zdrowie środowiskowe",
    },
    "mental-health": {
      label: "Zdrowie psychiczne i wsparcie w kryzysie",
      shortLabel: "Zdrowie psychiczne",
    },
    "public-health": {
      label: "Zdrowie publiczne",
      shortLabel: "Zdrowie publiczne",
    },
    "labs-imaging": {
      label: "Laboratoria i obrazowanie",
      shortLabel: "Laboratoria i obrazowanie",
    },
    pharmacies: {
      label: "Leki i apteki",
      shortLabel: "Apteki",
    },
    "allied-community": {
      label: "Opieka wspomagająca i środowiskowa",
      shortLabel: "Opieka wspomagająca",
    },
    "navigation-support": {
      label: "Nawigacja i wsparcie w sprawach ubezpieczenia",
      shortLabel: "Nawigacja",
    },
  },
  serviceCard: {
    whenToUse: "Kiedy korzystać:",
    accessLabel: "Dostęp",
    eligibilityLabel: "Kto może korzystać",
    eligibilityFallback:
      "Otwarte dla wszystkich, chyba że oficjalne źródło mówi inaczej.",
    hoursLabel: "Godziny",
    phoneLabel: "Telefon",
    trustDetails: "Szczegóły zaufania i źródła",
    lastReview: "Ostatni przegląd:",
    officialSource: "Oficjalne źródło",
    call: "Zadzwoń",
    officialWebsite: "Oficjalna strona",
    directions: "Dojazd",
    viewDetails: "Zobacz szczegóły",
  },
  serviceDetail: {
    backToServices: "Powrót do usług lokalnych",
    whenToUseTitle: "Kiedy korzystać z tej usługi",
    eligibilityTitle: "Kto może korzystać i jak uzyskać dostęp",
    eligibilityFallback:
      "Sprawdź oficjalne źródło, jeśli nie masz pewności, czy ta usługa jest dla Ciebie dostępna.",
    whatToBringTitle: "Co zabrać",
    contactTitle: "Kontakt i działania",
    callNow: "Zadzwoń teraz",
    officialWebsite: "Oficjalna strona",
    directions: "Dojazd",
    trustTitle: "Zaufanie i źródło",
    lastReview: "Ostatni przegląd:",
    viewOfficialSource: "Zobacz oficjalne źródło",
  },
  verification: {
    verified: {
      label: "Zweryfikowano z oficjalnym źródłem",
      shortLabel: "Zweryfikowano",
      description:
        "Kluczowe dane sprawdzono z oficjalnym źródłem w ostatnim cyklu przeglądu.",
    },
    "partially-verified": {
      label: "Podlinkowane oficjalne źródło",
      shortLabel: "Oficjalny link",
      description:
        "Oficjalne źródło jest podlinkowane, ale jeden lub więcej szczegółów może się często zmieniać i należy je potwierdzić przed wizytą.",
    },
    "community-reported": {
      label: "Zgłoszone przez społeczność",
      shortLabel: "Zgłoszenie społeczności",
      description:
        "Te informacje pochodzą ze zgłoszeń społeczności i wciąż wymagają niezależnego potwierdzenia.",
    },
    "needs-recheck": {
      label: "Wymaga ponownego sprawdzenia",
      shortLabel: "Wymaga sprawdzenia",
      description:
        "Ten wpis pozostaje widoczny, ponieważ wciąż może pomóc, ale kluczowe dane mogą być nieaktualne. Potwierdź je, zanim na nich polegniesz.",
    },
  },
  feedback: {
    badge: "Zgłoś nieaktualne informacje",
    title: "Pomóż nam dbać o dokładność tego przewodnika",
    body: "To otwiera wstępnie wypełniony e-mail z kontekstem strony lub usługi. Nie podawaj prywatnych informacji medycznych.",
    issueTypeLabel: "Rodzaj problemu",
    issueTypes: {
      "outdated hours": "Nieaktualne godziny",
      "wrong phone or website": "Błędny telefon lub strona internetowa",
      "eligibility or access issue": "Problem z uprawnieniami lub dostępem",
      "translation or accessibility problem":
        "Problem z tłumaczeniem lub dostępnością",
      "missing service or content": "Brakująca usługa lub treść",
      other: "Inne",
    },
    detailsLabel: "Co powinniśmy sprawdzić?",
    detailsPlaceholder:
      "Przykład: zmienił się numer telefonu, klinika przyjmuje teraz tylko po umówieniu lub link nie działa.",
    contactLabel: "Kontakt (opcjonalnie)",
    contactPlaceholder: "Adres e-mail, jeśli chcesz otrzymać odpowiedź",
    openEmail: "Otwórz e-mail ze zgłoszeniem",
    copyText: "Skopiuj tekst zgłoszenia",
    thanks:
      "Dziękujemy. Zgłoszenia pomagają nam ustalać priorytety dla nieaktualnych stron, niedziałających linków i wpisów wymagających lokalnego sprawdzenia.",
    toastEmailTitle: "Otwarto szkic e-maila",
    toastEmailBody: "Twoje zgłoszenie zawiera kontekst strony lub usługi.",
    toastCopyTitle: "Skopiowano podsumowanie problemu",
    toastCopyBody:
      "W razie potrzeby możesz je wkleić do własnego programu pocztowego.",
  },
  footer: {
    description:
      "Przewodnik prostym językiem po opiece zdrowotnej w Kingston, Ontario. Ta strona nie udziela porad medycznych ani nie pokazuje czasów oczekiwania na żywo. Zawsze potwierdzaj szczegóły wrażliwe na czas z oficjalnym źródłem, zanim pójdziesz.",
    trustModelTitle: "Model zaufania",
    trustModelBody:
      "Pokazujemy linki do oficjalnych źródeł, daty przeglądów oraz wpisy, które wciąż wymagają sprawdzenia. Jeśli coś wygląda na błędne, zgłoś to ze strony lub z wpisu usługi.",
    beforeYouGo: {
      title: "Zanim pójdziesz",
      body: "Sprawdź oficjalne godziny, czy potrzebujesz umówionej wizyty lub skierowania oraz jakie dokumenty zabrać.",
    },
    languageHelp: {
      title: "Pomoc językowa",
      body: "Czytaj ten przewodnik w swoim języku, używając menu Język. Proś o tłumacza ustnego w rozmowach medycznych, gdy liczy się dokładność.",
    },
    privacy: {
      title: "Prywatność",
      body: "Ta strona używa lokalnych, dbających o prywatność dzienników ulepszeń przechowywanych w Twojej przeglądarce. Nie wysyła osobistych danych analitycznych na zdalny serwer.",
    },
    copyrightSuffix: "Społecznościowe źródło informacji dla Kingston, Ontario.",
    disclaimer: "Zastrzeżenie",
    privacyLink: "Prywatność",
    sourcesLink: "Źródła",
    reportLink: "Zgłoś nieaktualne informacje",
  },
  notFound: {
    seoTitle: "Nie znaleziono strony",
    seoDescription:
      "Nie udało się znaleźć żądanej strony. Zacznij od pilnej pomocy, podstaw dla nowo przybyłych, usług lokalnych lub FAQ.",
    badge: "404",
    title: "Nie mogliśmy znaleźć tej strony",
    body: "Jeśli chcesz szybko uzyskać opiekę, zacznij od pilnych wskazówek lub przeszukaj katalog usług w Kingston.",
    startHere: "Zacznij tutaj",
    needHelpNow: "Pilna pomoc teraz",
    localServices: "Usługi lokalne",
    faq: "FAQ",
  },
};

const homePage: PageContent = {
  title: "Przewodnik nawigacji po opiece zdrowotnej w Kingston",
  description:
    "Przewodnik prostym językiem, z myślą o nowo przybyłych, jak znaleźć opiekę zdrowotną w Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Zacznij tutaj",
  description:
    "Dopiero w Kingston albo w systemie opieki zdrowotnej Ontario? Zacznij tutaj, aby dowiedzieć się, jak działa system i co zrobić najpierw.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Opieka zdrowotna w Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Przegląd tego, jak działa ubezpieczona opieka w Ontario.",
    },
    {
      title: "Ontario: Złóż wniosek o OHIP i uzyskaj kartę zdrowia",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Oficjalne informacje o wniosku o OHIP i uprawnieniach.",
    },
    {
      title: "Ontario: Znajdź lekarza rodzinnego lub pielęgniarkę praktyki",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Wskazówki dotyczące Health Care Connect i dostępu do podstawowej opieki.",
    },
    {
      title: "Kanada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Informacje o federalnym ubezpieczeniu dla uprawnionych uchodźców i osób ubiegających się o status uchodźcy.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Jak działa opieka zdrowotna w Ontario",
      type: "default",
      content: `Opieka zdrowotna w Ontario jest zorganizowana wokół **podstawowej opieki zdrowotnej**. Podstawowa opieka to miejsce, od którego zwykle zaczynasz przy rutynowych potrzebach zdrowotnych, chorobach przewlekłych, receptach, skierowaniach i profilaktyce. Twoją podstawową opiekę może zapewniać lekarz rodzinny, pielęgniarka praktyki (nurse practitioner), zespół środowiskowego ośrodka zdrowia lub studencka klinika zdrowia, jeśli się kwalifikujesz.

**Skierowanie** (referral) to sytuacja, w której jeden lekarz prosi inną usługę lub specjalistę o przyjęcie Ciebie. **Zlecenie na badanie** (requisition) to formularz, który mówi laboratorium lub pracowni obrazowania, jakiego badania potrzebujesz.

Nie musisz rozumieć każdej części systemu pierwszego dnia. Najważniejsze kroki to: poznać swoje ubezpieczenie, wiedzieć, dokąd pójść w pilnych sprawach, i zaplanować regularną opiekę, jeśli nie masz jeszcze swojego lekarza lub przychodni.`,
    },
    {
      id: "first-decisions",
      title: "Pierwsze decyzje",
      type: "grid",
      gridItems: [
        {
          title: "Mogę potrzebować pilnej pomocy",
          content:
            "Zacznij od wskazówek, kiedy wybrać pomoc w nagłych wypadkach, a kiedy pilną opiekę, jeśli masz nagły problem dziś lub dziś wieczorem.",
          icon: "alert",
          link: { text: "Pilna pomoc teraz", url: "/need-help-now" },
        },
        {
          title: "Nie mam lekarza rodzinnego",
          content:
            "Dowiedz się, jak łączą się ze sobą lekarze rodzinni, pielęgniarki praktyki, środowiskowe ośrodki zdrowia, kliniki bez umówienia i kliniki studenckie.",
          icon: "stethoscope",
          link: { text: "Znajdź podstawową opiekę", url: "/get-a-family-doctor" },
        },
        {
          title: "Muszę zrozumieć, co jest pokrywane",
          content:
            "Przeczytaj o OHIP, IFHP, ubezpieczeniu prywatnym, planach studenckich, pokryciu kosztów leków i częstych wydatkach z własnej kieszeni.",
          icon: "shield",
          link: { text: "Koszty i ubezpieczenie", url: "/costs-and-coverage" },
        },
        {
          title: "Potrzebuję pomocy językowej",
          content:
            "Czytaj ten przewodnik w 33 językach, używając menu Język, i pytaj o wsparcie tłumacza w rozmowach medycznych i przy wyrażaniu zgody.",
          icon: "info",
          link: { text: "Dostępność i język", url: "/about#accessibility" },
        },
        {
          title: "Potrzebuję badania krwi, obrazowania lub odnowienia recepty",
          content:
            "Użyj katalogu lokalnego, aby znaleźć następny praktyczny krok po wizycie.",
          icon: "file",
          link: { text: "Przeszukaj usługi lokalne", url: "/local-services" },
        },
        {
          title: "Nie wiem, od czego zacząć",
          content:
            "Zadzwoń do Health811 po poradę pielęgniarki, jeśli nie masz pewności, jak pilna jest Twoja sytuacja.",
          icon: "clock",
          link: { text: "Health811 i pilne wskazówki", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Dobre pierwsze kroki w pierwszym tygodniu",
      type: "steps",
      items: [
        "Poznaj swoje ubezpieczenie: Przeczytaj, co zwykle pokrywają OHIP, IFHP, ubezpieczenie prywatne i plany studenckie. Jeśli możesz kwalifikować się do OHIP, złóż wniosek jak najszybciej.",
        "Wybierz swój plan na pilne sytuacje: Wiedz, kiedy dzwonić pod 911, kiedy zacząć od Health811 i gdzie w Kingston znaleźć pilną opiekę lub opiekę tego samego dnia.",
        "Zaplanuj regularną opiekę: Jeśli nie masz stałego lekarza lub przychodni, poznaj swoje opcje — lekarze rodzinni, pielęgniarki praktyki, środowiskowe ośrodki zdrowia, kliniki studenckie, kliniki bez umówienia i opieka wirtualna.",
        "Trzymaj swoje informacje zdrowotne razem: Zachowaj kartę zdrowia lub dokumenty IFHP, listę leków, kartę szczepień oraz kopie wszelkich zleceń na badania i skierowań.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Jeśli nie masz jeszcze OHIP",
      type: "callout",
      content:
        "Nie czekaj, aż zachorujesz, aby poznać swoją ścieżkę ubezpieczenia. Jeśli masz prawo do OHIP, złóż wniosek wcześnie. Jeśli masz ubezpieczenie z IFHP albo z planu szkolnego lub prywatnego, miej te informacje przy sobie. Jeśli nie masz ubezpieczenia, pytaj o opłaty przed wizytą i szukaj usług środowiskowych lub niskoprogowych tam, gdzie to odpowiednie.",
      link: { text: "Przeczytaj o ubezpieczeniu", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Miej te rzeczy pod ręką",
      type: "checklist",
      items: [
        "Twoja karta zdrowia, dokumenty IFHP lub informacje o ubezpieczeniu",
        "Lista leków, nawet jeśli bierzesz tylko kilka",
        "Nazwa i numer telefonu Twojej ostatniej przychodni lub lekarza, jeśli je masz",
        "Wszelkie niedawne zlecenia na badania, skierowania, wypisy ze szpitala lub instrukcje do badań",
        "Pytania, które chcesz zadać, zapisane prostym językiem",
        "Zapisane potrzeby dotyczące tłumacza, żeby pamiętać o poproszeniu",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Potrzebujesz pomocy teraz?",
  description:
    "Skorzystaj z tej strony, gdy masz problem zdrowotny dziś lub dziś wieczorem i nie wiesz, od czego zacząć.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Uzyskaj poradę medyczną od Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Oficjalna całodobowa usługa porad pielęgniarskich.",
    },
    {
      title: "9-8-8: Linia kryzysowa ds. samobójstw (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Oficjalna krajowa linia kryzysowa ds. samobójstw. Zadzwoń lub napisz SMS pod 9-8-8, bezpłatnie, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Oficjalna sieć szpitalna — informacje o pomocy w nagłych wypadkach, pilnej opiece i obrazowaniu.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Oficjalna lokalna organizacja wsparcia zdrowia psychicznego i pomocy w kryzysie.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Nagły wypadek czy pilna sprawa?",
      type: "comparison",
      comparison: {
        left: {
          title:
            "Jedź od razu na oddział ratunkowy przy problemach takich jak:",
          items: [
            "Ból w klatce piersiowej, poważne trudności z oddychaniem lub objawy udaru",
            "Silne krwawienie, poważny uraz lub utrata przytomności",
            "Nagłe splątanie, napad drgawek lub ciężka reakcja alergiczna",
            "Zagrożenie bezpieczeństwa, gdy czekanie mogłoby narazić życie lub kończynę",
          ],
        },
        right: {
          title:
            "Zacznij od pilnej opieki, Health811 lub kliniki tego samego dnia przy problemach takich jak:",
          items: [
            "Skręcenia, drobne skaleczenia, wysypki, ból ucha lub gorączka bez alarmowych objawów nagłego zagrożenia",
            "Problemy z odnowieniem recepty, które nie mogą czekać na rutynową wizytę",
            "Pytania, czy potrzebujesz pilnej opieki dziś wieczorem",
            "Problem, który wydaje się pilny, ale nie zagraża wyraźnie życiu",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Częste sytuacje po godzinach pracy",
      type: "table",
      columns: ["Sytuacja", "Dobry pierwszy krok", "O czym pamiętać"],
      rows: [
        {
          cells: [
            "Nie wiem, jak pilna jest ta sprawa",
            "Zadzwoń do Health811",
            "Pielęgniarka pomoże Ci zdecydować, czy zostać w domu, szukać pilnej opieki, czy jechać na oddział ratunkowy.",
          ],
        },
        {
          cells: [
            "Mój lekarz ma zamknięte, a potrzebuję porady dziś wieczorem",
            "Health811 lub wskazówki dotyczące pilnej opieki",
            "Nie zakładaj, że oddział ratunkowy to jedyna opcja, jeśli nie ma alarmowych objawów nagłego zagrożenia.",
          ],
        },
        {
          cells: [
            "Potrzebuję opieki dla mojego dziecka",
            "Kieruj się tymi samymi alarmowymi objawami nagłego zagrożenia, a potem poszukaj opieki tego samego dnia lub zadzwoń do Health811, jeśli masz wątpliwości",
            "Zabierz kartę zdrowia dziecka, listę leków i, jeśli to możliwe, przebieg objawów w czasie.",
          ],
        },
        {
          cells: [
            "Potrzebuję pomocy psychicznej dziś wieczorem",
            "Zadzwoń lub napisz SMS pod 9-8-8 (linia kryzysowa ds. samobójstw) albo zadzwoń na całodobową linię kryzysową AMHS-KFLA",
            "Jeśli istnieje bezpośrednie zagrożenie bezpieczeństwa, zadzwoń pod 911.",
          ],
        },
      ],
      caption:
        "Ta tabela to tylko ogólne wskazówki. Jeśli ktoś może być w bezpośrednim niebezpieczeństwie, zadzwoń pod 911.",
    },
    {
      id: "kingston-start-points",
      title: "Punkty startowe w Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Oddział ratunkowy",
          content:
            "Korzystaj z pomocy w nagłych wypadkach przy problemach zagrażających życiu lub mogących zagrażać życiu.",
          icon: "alert",
          link: {
            text: "Wpisy dla nagłych wypadków i pilnej opieki",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Centrum pilnej opieki (Urgent Care Centre)",
          content:
            "Przydatne przy wielu problemach tego samego dnia, które nie mogą czekać, ale nie są wyraźnym nagłym wypadkiem.",
          icon: "clock",
          link: {
            text: "Pilna opieka i opieka tego samego dnia",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Telefoniczna lub internetowa porada pielęgniarki, jeśli nie wiesz, dokąd pójść. Pomoc telefoniczna jest dostępna w wielu językach.",
          icon: "info",
          link: { text: "Wpis Health811", url: "/local-services/health811" },
        },
        {
          title: "Wsparcie w kryzysie zdrowia psychicznego",
          content:
            "Zadzwoń lub napisz SMS pod 9-8-8 (linia kryzysowa ds. samobójstw) o każdej porze albo skorzystaj z lokalnego wsparcia kryzysowego, np. całodobowej linii kryzysowej AMHS-KFLA.",
          icon: "heart",
          link: { text: "Wpisy dotyczące zdrowia psychicznego", url: "/local-services?category=mental-health" },
        },
        {
          title: "Wsparcie po przemocy seksualnej",
          content:
            "Skorzystaj ze specjalistycznego wsparcia kryzysowego, jeśli potrzebujesz natychmiastowego wsparcia emocjonalnego, rzecznictwa lub planowania bezpieczeństwa.",
          icon: "shield",
          link: {
            text: "Wpisy dotyczące wsparcia",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Pilne opcje dla studentów",
          content:
            "Jeśli studiujesz, sprawdź, czy uczelniana służba zdrowia jest najlepszym pierwszym miejscem przy sprawach, które nie są nagłym wypadkiem.",
          icon: "stethoscope",
          link: { text: "Wpisy dla zdrowia studentów", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Jeśli nadal nie masz pewności",
      type: "callout",
      content:
        "Gdy problem nie zagraża wyraźnie życiu, ale martwisz się czekaniem, zacznij od Health811. Jeśli ktoś może nie być bezpieczny, może szybko się pogarszać albo nie możesz na czas uzyskać właściwej pomocy, skorzystaj ze służb ratunkowych.",
      link: { text: "Zadzwoń do Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Jeśli możesz, zabierz ze sobą",
      type: "checklist",
      items: [
        "Kartę zdrowia, dokumenty IFHP lub jakąkolwiek kartę ubezpieczenia, którą masz",
        "Listę leków lub zdjęcia opakowań leków",
        "Godzinę, o której zaczęły się objawy, i wszystko, co je nasiliło",
        "Zapisane potrzeby dotyczące tłumacza, jeśli stres może utrudnić Ci pamiętanie",
        "Ładowarkę do telefonu i osobę towarzyszącą, jeśli to Ci pomaga",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Jak znaleźć podstawową opiekę",
  description:
    "Poznaj różne ścieżki do regularnej opieki zdrowotnej w Kingston, jeśli nie masz jeszcze swojego lekarza lub przychodni.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Znajdź lekarza rodzinnego lub pielęgniarkę praktyki",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Oficjalne wskazówki dotyczące Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Oficjalne informacje o usługach lokalnych środowiskowych ośrodków zdrowia.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Oficjalne informacje zdrowotne dla studentów Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Oficjalne informacje zdrowotne dla studentów St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Co oznacza podstawowa opieka",
      type: "default",
      content:
        "Podstawowa opieka to miejsce, do którego zwykle idziesz najpierw przy rutynowych potrzebach zdrowotnych. Obejmuje to kontrole, odnawianie leków, opiekę nad chorobami przewlekłymi, skierowania, profilaktykę i opiekę po pilnych problemach.\n\nW Kingston Twoja stała ścieżka podstawowej opieki może obejmować lekarza rodzinnego, pielęgniarkę praktyki (nurse practitioner), środowiskowy ośrodek zdrowia, klinikę na kampusie lub połączenie tymczasowych opcji w oczekiwaniu na bardziej stabilną opiekę.",
    },
    {
      id: "access-matrix",
      title: "Ścieżki dostępu do podstawowej opieki",
      type: "table",
      columns: ["Ścieżka", "Najlepsza do", "Kto może korzystać", "Jak zacząć"],
      rows: [
        {
          cells: [
            "Lekarz rodzinny lub pielęgniarka praktyki",
            "Stała, regularna opieka i długoterminowe planowanie zdrowia",
            "Pacjenci, którzy mogą zapisać się na listę pacjentów danego lekarza lub pielęgniarki",
            "Skorzystaj z Health Care Connect i obserwuj lokalne wolne miejsca",
          ],
        },
        {
          cells: [
            "Środowiskowy ośrodek zdrowia",
            "Opieka środowiskowa, wsparcie niskoprogowe oraz niektóre usługi dla nowo przybyłych lub osób ze złożonymi potrzebami",
            "Uprawnienia zależą od programu i statusu przyjęć",
            "Skontaktuj się bezpośrednio z organizacją i zapytaj o przyjęcia",
          ],
        },
        {
          cells: [
            "Studencka służba zdrowia",
            "Szybszy dostęp dla zapisanych studentów",
            "Tylko studenci, którzy kwalifikują się przez swoją uczelnię",
            "Skorzystaj z uczelnianego serwisu zdrowia lub dobrostanu",
          ],
        },
        {
          cells: [
            "Klinika bez umówienia (walk-in) lub pilna opieka tego samego dnia",
            "Krótkoterminowa opieka w czasie oczekiwania albo gdy Twój stały lekarz jest niedostępny",
            "Ogół społeczeństwa, w zależności od dziennych limitów przyjęć",
            "Sprawdź aktualny dostęp, zanim pójdziesz",
          ],
        },
        {
          cells: [
            "Wirtualna podstawowa opieka",
            "Niektóre odnowienia recept, porady i sprawy rutynowe",
            "Zależy od usługodawcy i ubezpieczenia",
            "Sprawdź, czym usługodawca może, a czym nie może bezpiecznie zająć się online",
          ],
        },
      ],
      caption:
        "Najlepsza ścieżka zależy od Twoich uprawnień, pilności oraz tego, czy potrzebujesz opieki krótkoterminowej, czy stałej.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Jeśli nie masz stałego lekarza lub przychodni",
      type: "steps",
      items: [
        "Zarejestruj się przez oficjalną ścieżkę prowincji: Skorzystaj z Health Care Connect, jeśli nie masz lekarza rodzinnego ani pielęgniarki praktyki.",
        "Sprawdź, czy kwalifikujesz się do opcji na kampusie lub w ośrodkach środowiskowych: Studenci powinni zacząć od kliniki swojej uczelni. Niektóre usługi środowiskowe mają określone priorytety przyjęć.",
        "Zbuduj bezpieczny plan tymczasowy: Wiedz, z których usług bez umówienia, pilnych, wirtualnych, aptecznych i zdrowia psychicznego możesz korzystać w czasie oczekiwania.",
        "Prowadź własną dokumentację: Zachowuj listy leków, wyniki badań, skierowania i nazwiska lekarzy, u których byłaś lub byłeś.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Co robić w czasie oczekiwania",
      type: "checklist",
      items: [
        "Korzystaj z opieki bez umówienia, pilnej lub wirtualnej przy krótkoterminowych potrzebach, gdy to odpowiednie",
        "Zapytaj w aptece, jaka pomoc z odnowieniem recepty lub przy drobnych dolegliwościach może być dostępna",
        "Prowadź jedną aktualną listę leków i zabieraj ją na każdą wizytę",
        "Zabieraj kopie ważnych wyników lub wypisów, gdy opieka jest rozproszona",
        "W miarę możliwości korzystaj z tej samej kliniki na wizyty kontrolne, aby Twoja opieka była trochę bardziej spójna",
      ],
    },
    {
      id: "next-best-option",
      title: "Jeśli Twoja potrzeba jest pilna, ale to nie nagły wypadek",
      type: "callout",
      content:
        "Brak lekarza rodzinnego nie oznacza, że masz odkładać ważną opiekę. Skorzystaj z właściwej krótkoterminowej opcji dla problemu, który masz teraz, a potem zaplanuj ciągłość opieki po wyleczeniu pilnego problemu.",
      link: { text: "Przeszukaj opcje podstawowej opieki", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Koszty i ubezpieczenie",
  description:
    "Wskazówki prostym językiem o ubezpieczeniu: OHIP, IFHP, Canadian Dental Care Plan, plany studenckie lub prywatne oraz częste wydatki z własnej kieszeni.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Złóż wniosek o OHIP i uzyskaj kartę zdrowia",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Oficjalne wskazówki dotyczące OHIP.",
    },
    {
      title: "Kanada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Oficjalne informacje o ubezpieczeniu IFHP.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Oficjalne prowincyjne wskazówki dotyczące pokrycia kosztów leków.",
    },
    {
      title: "Ontario: Uzyskaj pomoc przy wysokich kosztach leków na receptę",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Oficjalne wskazówki dotyczące programu Trillium Drug Program.",
    },
    {
      title: "Kanada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Oficjalne informacje o federalnym programie pokrycia kosztów opieki stomatologicznej i uprawnieniach.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Podstawy ubezpieczenia",
      type: "default",
      content:
        "Ubezpieczenie w Ontario zależy od Twojego statusu prawnego, wieku, dochodu, uprawnień do programów oraz tego, czy masz plan szkolny lub prywatny.\n\nWiele medycznie koniecznych usług lekarskich i szpitalnych jest pokrywanych dla uprawnionych pacjentów OHIP. To **nie** oznacza, że wszystko jest bezpłatne. Leki, opieka stomatologiczna, opieka okulistyczna, formularze, zwolnienia lekarskie i wiele usług opieki wspomagającej często wiąże się z osobnym ubezpieczeniem lub płatnością z własnej kieszeni.\n\nDobra wiadomość dla nowo przybyłych: **nie ma okresu oczekiwania na OHIP**. Jeśli masz uprawnienia, możesz złożyć wniosek od razu po przyjeździe do Ontario, a ubezpieczenie zaczyna działać po zatwierdzeniu wniosku. Nie czekaj z wnioskiem, aż zachorujesz.",
    },
    {
      id: "coverage-matrix",
      title: "Ścieżki ubezpieczenia w skrócie",
      type: "table",
      columns: [
        "Rodzaj ubezpieczenia",
        "Zwykle pomaga przy",
        "Co nadal może nie być pokryte",
        "Co zrobić dalej",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Wiele medycznie koniecznych usług lekarskich i szpitalnych",
            "Wiele leków, opieka stomatologiczna, opieka okulistyczna i formularze",
            "Złóż wniosek, jeśli masz uprawnienia, i dbaj o aktualność karty",
          ],
        },
        {
          cells: [
            "IFHP",
            "Ubezpieczenie dla uprawnionych uchodźców i osób ubiegających się o status uchodźcy zgodnie z programem federalnym",
            "Szczegóły zależą od kategorii i usługi",
            "Sprawdź oficjalny przewodnik IFHP i zapytaj klinikę lub aptekę, czy go akceptują",
          ],
        },
        {
          cells: [
            "Ubezpieczenie szkolne lub prywatne",
            "Często pomaga przy lekach, poradnictwie psychologicznym, stomatologii, okulistyce i opiece wspomagającej",
            "Limity pokrycia, dopłaty i zasady sieci usługodawców są różne",
            "Przeczytaj broszurę planu, zanim założysz, że usługa jest pokryta",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Pokrycie kosztów stomatologicznych dla uprawnionych mieszkańców bez dostępu do prywatnego ubezpieczenia stomatologicznego, ze skorygowanym dochodem rodziny poniżej 90 000 $",
            "Nie każdy zabieg jest pokryty, a w zależności od dochodu może obowiązywać dopłata",
            "Sprawdź uprawnienia i złóż wniosek przez oficjalną stronę rządu Kanady dotyczącą CDCP",
          ],
        },
        {
          cells: [
            "Brak aktywnego ubezpieczenia",
            "Nadal możesz mieć dostęp do niektórych usług, ale mogą obowiązywać opłaty",
            "Koszty wizyt, badań lub leków mogą być znaczne",
            "Pytaj o opłaty przed wizytą i szukaj opcji środowiskowych tam, gdzie to odpowiednie",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Co często nie jest w pełni pokrywane",
      type: "checklist",
      items: [
        "Wiele leków na receptę, chyba że kwalifikujesz się do programu publicznego lub masz inny plan",
        "Opieka stomatologiczna, chyba że kwalifikujesz się do Canadian Dental Care Plan, Healthy Smiles Ontario, środowiskowego programu stomatologicznego lub planu świadczeń",
        "Opieka okulistyczna poza określonymi ścieżkami uprawnień",
        "Fizjoterapia, poradnictwo psychologiczne, masaż i inne usługi opieki wspomagającej, chyba że pokrywa je jakiś program lub plan",
        "Formularze, zaświadczenia, opłaty za nieodwołane wizyty i wiele innych opłat administracyjnych",
      ],
    },
    {
      id: "drug-coverage",
      title: "Ścieżki pokrycia kosztów leków",
      type: "default",
      content:
        "Pokrycie kosztów leków to często miejsce, gdzie nowo przybyli są zaskakiwani. Wizyta u lekarza może być pokryta, ale recepta nadal może kosztować.\n\nPubliczne programy lekowe mogą pomóc w zależności od wieku, dochodu i uprawnień. **Ontario Drug Benefit** pokrywa wiele leków dla osób w wieku 65 lat i starszych oraz osób w określonych programach, a **OHIP+** pokrywa wiele recept dla osób w wieku 24 lat i młodszych, które nie mają planu prywatnego. Ontario ma też **Trillium Drug Program** dla niektórych osób z wysokimi kosztami leków w stosunku do dochodu gospodarstwa domowego. Jeśli masz plan szkolny lub prywatny, sprawdź, czy łączy się on z ubezpieczeniem publicznym, czy je zastępuje.",
    },
    {
      id: "coverage-scenarios",
      title: "Częste pytania o ubezpieczenie",
      type: "faq",
      faqs: [
        {
          question: "Nie mam jeszcze OHIP. Czy mimo to mogę uzyskać opiekę?",
          answer:
            "Tak, ale mogą obowiązywać opłaty, a najlepsza ścieżka zależy od Twojego statusu i pilności. Pytaj o koszty przed opieką, która nie jest nagła, gdy to możliwe, i sprawdź uprawnienia do IFHP albo planu szkolnego lub prywatnego, jeśli Cię to dotyczy.",
        },
        {
          question: "Jestem studentem z zagranicy. Czy OHIP to moja jedyna opcja?",
          answer:
            "Nie zawsze. Wielu studentów korzysta z planu szkolnego lub prywatnego ubezpieczenia zamiast OHIP. Skorzystaj z oficjalnych dokumentów planu swojej uczelni i studenckiej służby zdrowia, aby potwierdzić, co jest pokryte.",
        },
        {
          question: "Czy mój lek będzie bezpłatny, jeśli wizyta była pokryta?",
          answer:
            "Niekoniecznie. Pokrycie wizyty i pokrycie kosztów recepty to często osobne sprawy.",
        },
        {
          question: "Czy opieka stomatologiczna jest pokryta?",
          answer:
            "Dla większości dorosłych opieka stomatologiczna jest osobna od OHIP. Federalny Canadian Dental Care Plan pokrywa teraz koszty dla wielu mieszkańców, którzy nie mają prywatnego ubezpieczenia stomatologicznego i mają skorygowany dochód rodziny poniżej 90 000 $ — zwykle trzeba mieć złożone kanadyjskie zeznanie podatkowe, aby się kwalifikować. Dzieci z rodzin o niższych dochodach mogą kwalifikować się do Healthy Smiles Ontario, a w Kingston działa środowiskowa klinika stomatologiczna dla osób w określonych programach.",
        },
        {
          question:
            "Skąd mam wiedzieć, czy usługa jest publiczna, środowiskowa, czy prywatna?",
          answer:
            "Użyj filtrów katalogu i sprawdź szczegóły wpisu. Jeśli masz wątpliwości, skontaktuj się z usługą przed rezerwacją.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Twoja wizyta lekarska",
  description:
    "Co zabrać, jak zadawać pytania i jak bezpiecznie się porozumiewać podczas wizyty lekarskiej.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Opieka zdrowotna w Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Ogólne wskazówki dotyczące systemu.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Co zabrać",
      type: "checklist",
      items: [
        "Twoja karta zdrowia, dokumenty IFHP lub inne informacje o ubezpieczeniu",
        "Pełna lista leków, łącznie z witaminami i lekami bez recepty",
        "Nazwy objawów, kiedy się zaczęły i co się zmieniło",
        "Pytania, na które chcesz mieć odpowiedź przed wyjściem",
        "Wszelkie niedawne zlecenia na badania, skierowania, wypisy lub wyniki badań",
        "Zapisane potrzeby dotyczące tłumacza, żeby pamiętać o poproszeniu",
      ],
    },
    {
      id: "during-the-visit",
      title: "Podczas wizyty",
      type: "steps",
      items: [
        "Zacznij od głównego problemu: Wiele wizyt jest krótkich, więc zacznij od sprawy, która dziś jest najważniejsza.",
        "Mów prostym językiem: Można powiedzieć 'Nie rozumiem tego słowa' albo 'Czy może pan lub pani wyjaśnić to prościej?'.",
        "Powtórz plan na głos: Zanim wyjdziesz, powiedz głośno kolejne kroki, aby wiedzieć, czy potrzebujesz badania, skierowania, odnowienia recepty czy wizyty kontrolnej.",
        "Zapytaj, co zrobić, jeśli będzie gorzej: Powinnaś lub powinieneś wiedzieć, kiedy zadzwonić ponownie, kiedy skorzystać z pilnej opieki, a kiedy z pomocy w nagłych wypadkach.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Pomoc tłumacza i komunikacja",
      type: "default",
      content:
        "Jeśli potrzebujesz pomocy językowej, poproś o nią wcześnie. Nie czekaj do końca wizyty. Możesz czytać tę stronę w kilku językach, używając menu Język, ale tłumaczenie strony nie powinno zastępować wsparcia tłumacza ustnego przy decyzjach o leczeniu, instrukcjach dotyczących leków lub zgodzie.\n\nMożesz powiedzieć: **'I need an interpreter, please.' (Potrzebuję tłumacza, proszę.)** Health811 (zadzwoń pod 811) oferuje również pomoc telefoniczną w wielu językach. Jeśli przychodzi z Tobą osoba towarzysząca, pamiętaj, że członek rodziny nie zawsze jest najlepszą lub najbezpieczniejszą osobą do tłumaczenia skomplikowanych lub wrażliwych informacji medycznych.",
    },
    {
      id: "questions-to-ask",
      title: "Pytania warte zadania",
      type: "checklist",
      items: [
        "Co według pana lub pani się dzieje?",
        "Co powinnam lub powinienem zrobić dalej?",
        "Czy potrzebuję badania, zlecenia na badanie, skierowania lub wizyty kontrolnej?",
        "Kiedy mogę spodziewać się wyników?",
        "Jakie objawy ostrzegawcze oznaczają, że mam zadzwonić ponownie lub szukać pilnej pomocy?",
      ],
    },
    {
      id: "privacy",
      title: "Prywatność i zgoda",
      type: "default",
      content:
        "Twoje informacje zdrowotne są wrażliwe. Jeśli nie wiesz, kto zobaczy Twoje informacje, zapytaj. Jeśli nie rozumiesz formularza, rozmowy o zgodzie lub planu leczenia, zwolnij tempo i poproś o jaśniejsze wyjaśnienie.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Po wizycie",
  description:
    "Dowiedz się, co dzieje się po wizycie, w tym o zleceniach na badania, wynikach badań, skierowaniach i kiedy zadzwonić ponownie.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Informacje o lokalnym systemie szpitalnym.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Informacje o procedurach laboratorium i portalu pacjenta.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Co zwykle dzieje się po wizycie",
      type: "steps",
      items: [
        "Wychodzisz z planem: Może on obejmować lek, zlecenie na badanie, skierowanie, wizytę kontrolną lub instrukcje, na jakie objawy ostrzegawcze zwracać uwagę.",
        "Następny krok może należeć do Ciebie: Na przykład może być potrzebne umówienie badania krwi, obrazowania, odbioru leku w aptece lub wizyty kontrolnej.",
        "Wyniki zwykle wracają do lekarza, który je zlecił: Laboratorium lub pracownia obrazowania może nie wyjaśnić Ci wyniku na miejscu.",
        "Możesz nie dostać telefonu przy każdym prawidłowym wyniku: Zapytaj, jak wygląda procedura kontrolna kliniki, aby wiedzieć, czego się spodziewać.",
      ],
    },
    {
      id: "common-terms",
      title: "Częste pojęcia po wizycie",
      type: "table",
      columns: [
        "Pojęcie",
        "Co to znaczy prostym językiem",
        "Co zwykle robisz dalej",
      ],
      rows: [
        {
          cells: [
            "Zlecenie na badanie (requisition)",
            "Formularz mówiący laboratorium lub pracowni obrazowania, jakiego badania potrzebujesz",
            "Umów się lub zgłoś na badanie i, jeśli możesz, zachowaj kopię",
          ],
        },
        {
          cells: [
            "Skierowanie (referral)",
            "Prośba jednego lekarza do innej usługi lub specjalisty",
            "Czekaj na kontakt, a jeśli powiedziano Ci, żeby się dopytać, i nic się nie dzieje, zadzwoń ponownie",
          ],
        },
        {
          cells: [
            "Wizyta kontrolna (follow-up)",
            "Sprawdzenie stanu po leczeniu, badaniach lub zmianie objawów",
            "Zanim wyjdziesz, zapytaj, kiedy i jak ma się odbyć kontrola",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Kiedy zadzwonić ponownie",
      type: "checklist",
      items: [
        "Nie rozumiesz zlecenia na badanie, skierowania lub instrukcji dotyczących leku",
        "Powiedziano Ci, że ktoś się skontaktuje, a w oczekiwanym czasie nie było żadnej wiadomości",
        "Twoje objawy się pogarszają lub nie poprawiają się tak, jak Ci zapowiedziano",
        "Apteka, laboratorium lub pracownia obrazowania poinformowała, że w dokumentach czegoś brakuje",
        "Myślisz, że jakiś wynik mógł zostać przeoczony, lub nadal się martwisz",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Częste sytuacje",
      type: "faq",
      faqs: [
        {
          question: "Potrzebuję badania krwi po wizycie. Co mam zrobić?",
          answer:
            "Sprawdź, czy masz zlecenie na badanie i czy laboratorium wymaga umówienia. Następnie użyj katalogu, aby znaleźć placówkę laboratorium. Zabierz zlecenie i informacje o swoim ubezpieczeniu.",
        },
        {
          question: "Nie rozumiem zlecenia na badanie ani formularza skierowania.",
          answer:
            "Zadzwoń do kliniki, która Ci je wydała, i poproś o wyjaśnienie prostym językiem. To rozsądne pytać, do czego służy formularz, dokąd ma trafić i czy musisz coś umówić samodzielnie.",
        },
        {
          question: "Kto zajmuje się wynikami badań?",
          answer:
            "Zwykle lekarz, który zlecił badanie. Zapytaj w gabinecie tego lekarza, jak zwykle wygląda procedura przy wynikach prawidłowych i nieprawidłowych.",
        },
        {
          question: "Jak długo trwa realizacja skierowań?",
          answer:
            "Czas oczekiwania na skierowania bardzo się różni. Zapytaj, jakie oczekiwanie jest normalne w Twojej sytuacji i co zrobić, jeśli nikt się nie odezwie.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Przydatne kolejne kroki",
      type: "grid",
      gridItems: [
        {
          title: "Znajdź laboratoria i obrazowanie",
          content:
            "Użyj katalogu, aby znaleźć wpisy dotyczące badań krwi, prześwietleń, USG i obrazowania.",
          icon: "file",
          link: { text: "Laboratoria i obrazowanie", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Znajdź aptekę",
          content:
            "Użyj katalogu, aby znaleźć apteki, pomoc w odnawianiu recept i wsparcie dotyczące leków.",
          icon: "shield",
          link: { text: "Apteki", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Musisz zaplanować dalszą opiekę?",
          content:
            "Skorzystaj ze strony o podstawowej opiece, jeśli nie wiesz, gdzie powinna odbywać się długoterminowa opieka kontrolna.",
          icon: "stethoscope",
          link: { text: "Znajdź podstawową opiekę", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Leki i apteki",
  description:
    "Zrozum recepty, odnawianie recept, pomoc farmaceuty i sposoby płacenia za leki w Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Co mogą robić farmaceuci",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Oficjalne prowincyjne informacje o farmaceutach i aptekach.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Oficjalne prowincyjne wskazówki dotyczące pokrycia kosztów leków.",
    },
    {
      title: "Ontario: Uzyskaj pomoc przy wysokich kosztach leków na receptę",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Oficjalne wskazówki dotyczące programu Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "W czym może pomóc farmaceuta",
      type: "default",
      content:
        "Farmaceuci robią więcej, niż tylko wydają leki. Mogą wyjaśnić, jak bezpiecznie przyjmować lek, sprawdzić interakcje i omówić skutki uboczne.\n\nW Ontario farmaceuci mogą też **oceniać i przepisywać leki przy 19 częstych drobnych dolegliwościach** — w tym przy zapaleniu spojówek, opryszczce wargowej, zakażeniach układu moczowego (u kobiet), ukąszeniach owadów i alergiach sezonowych. Taka ocena jest bezpłatna z kartą zdrowia Ontario, a lista dolegliwości może się dalej powiększać.\n\nApteka to także jedno z najlepszych miejsc, by zadać praktyczne pytania, takie jak: **Czy to odnowienie recepty jest pilne? Czy jest tańsza opcja? Co zrobić, jeśli pominę dawkę?**",
    },
    {
      id: "fill-a-prescription",
      title: "Jak zrealizować receptę",
      type: "steps",
      items: [
        "Zdobądź receptę: Może być papierowa, przesłana faksem lub elektronicznie.",
        "Wybierz aptekę: Regularne korzystanie z tej samej apteki pomaga jej wychwytywać interakcje leków i problemy z historią odnowień.",
        "Zapytaj o czas i koszt: Apteka powie Ci, kiedy lek będzie gotowy i czy Twój plan go pokrywa.",
        "Wysłuchaj porady farmaceuty: Zapytaj, na co jest lek, jak go przyjmować i kiedy zgłosić się ponownie, jeśli nie pomaga.",
      ],
    },
    {
      id: "refill-options",
      title: "Problemy z odnowieniem recepty i lekami",
      type: "table",
      columns: ["Sytuacja", "Dobry pierwszy krok", "Dlaczego"],
      rows: [
        {
          cells: [
            "Potrzebuję rutynowego odnowienia recepty",
            "Zacznij od swojej zwykłej apteki lub stałego lekarza",
            "Mogą powiedzieć, czy potrzebne jest odnowienie, przedłużenie recepty czy nowa wizyta",
          ],
        },
        {
          cells: [
            "Mój lekarz jest niedostępny, a lek może mi się skończyć",
            "Zapytaj w aptece, jakie są opcje, a w razie potrzeby skorzystaj z opieki bez umówienia, wirtualnej lub pilnej",
            "Najbezpieczniejszy następny krok zależy od leku i Twojej sytuacji",
          ],
        },
        {
          cells: [
            "Nie rozumiem, jak przyjmować ten lek",
            "Poproś farmaceutę, aby wyjaśnił jeszcze raz prostym językiem",
            "To część bezpiecznego stosowania leków",
          ],
        },
        {
          cells: [
            "Lek kosztuje za dużo",
            "Zapytaj o wersje generyczne, pokrycie przez plan i programy publiczne",
            "Ceny leków się różnią, a pokrycie kosztów jest często osobne od samej wizyty",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Jak mogą być opłacane leki",
      type: "checklist",
      items: [
        "Publiczny program lekowy, jeśli się kwalifikujesz",
        "Plan szkolny lub prywatne ubezpieczenie",
        "Połączenie ubezpieczenia publicznego i prywatnego",
        "Z własnej kieszeni, jeśli żaden program nie pokrywa leku",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Potrzebujesz pomocy lokalnej apteki?",
      type: "callout",
      content:
        "Użyj katalogu, aby znaleźć apteki, wsparcie w odnawianiu recept oraz opcje wirtualne lub tego samego dnia, gdy chcesz szybko rozwiązać problem z lekiem.",
      link: { text: "Przeszukaj wpisy aptek", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Wsparcie zdrowia psychicznego",
  description:
    "Lokalne ścieżki zdrowia psychicznego, poradnictwa, wsparcia dla młodzieży i pomocy w kryzysie w Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Linia kryzysowa ds. samobójstw (Suicide Crisis Helpline)",
      url: "https://988.ca/",
      note: "Oficjalna krajowa linia kryzysowa ds. samobójstw. Zadzwoń lub napisz SMS pod 9-8-8, bezpłatnie, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Oficjalne informacje o zdrowiu psychicznym dorosłych i wsparciu w kryzysie.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Oficjalna infolinia Ontario ds. zdrowia psychicznego i uzależnień.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Oficjalne informacje o zdrowiu psychicznym dzieci i młodzieży.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Jeśli ktoś może nie być bezpieczny",
      type: "callout",
      content:
        "Jeśli istnieje bezpośrednie zagrożenie życia lub bezpieczeństwa, zadzwoń pod 911. Przy myślach samobójczych lub przytłaczającym cierpieniu możesz **zadzwonić lub napisać SMS pod 9-8-8** (linia kryzysowa ds. samobójstw) o każdej porze — to bezpłatne, poufne i dostępne 24/7 po angielsku i francusku. Możesz też zadzwonić na całodobową linię kryzysową AMHS-KFLA pod numer 613-544-4229. Nie czekaj na rutynową wizytę.",
      link: { text: "Wpisy dotyczące zdrowia psychicznego", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Rodzaje wsparcia",
      type: "grid",
      gridItems: [
        {
          title: "Wsparcie kryzysowe",
          content:
            "Korzystaj z niego przy nagłym cierpieniu, obawach o bezpieczeństwo lub gdy czekanie nie jest bezpieczne.",
          icon: "alert",
        },
        {
          title: "Wsparcie pilne",
          content:
            "Korzystaj z niego, gdy sytuacja jest poważna i potrzebujesz pomocy wkrótce, ale nie jest to bezpośrednie zagrożenie życia.",
          icon: "clock",
        },
        {
          title: "Rutynowe poradnictwo",
          content:
            "Korzystaj z niego przy utrzymującym się lęku, depresji, stresie, żałobie, problemach w relacjach lub zmianach życiowych.",
          icon: "heart",
        },
        {
          title: "Usługi dla dzieci i młodzieży",
          content:
            "Korzystaj ze specjalistycznych usług zdrowia psychicznego dla młodzieży, gdy osobą potrzebującą opieki jest dziecko lub nastolatek.",
          icon: "info",
        },
        {
          title: "Wsparcie na kampusie",
          content:
            "Dla studentów najlepszym pierwszym krokiem mogą być uczelniane ścieżki dobrostanu lub poradnictwa.",
          icon: "stethoscope",
        },
        {
          title: "Wsparcie po przemocy seksualnej",
          content:
            "Korzystaj ze specjalistycznego wsparcia w kryzysie, poradnictwa, rzecznictwa i planowania bezpieczeństwa po przemocy seksualnej.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Od czego zacząć w częstych sytuacjach",
      type: "table",
      columns: ["Sytuacja", "Najlepszy pierwszy krok", "Dlaczego"],
      rows: [
        {
          cells: [
            "Potrzebuję pomocy psychicznej dziś wieczorem",
            "Zadzwoń lub napisz SMS pod 9-8-8, zadzwoń na linię kryzysową AMHS-KFLA albo skorzystaj z pomocy w nagłych wypadkach, jeśli bezpieczeństwo jest zagrożone",
            "Nie czekaj na rutynową wizytę, gdy sytuacja wydaje się niebezpieczna",
          ],
        },
        {
          cells: [
            "Potrzebuję poradnictwa, ale teraz jestem bezpieczna lub bezpieczny",
            "Poradnictwo środowiskowe, lekarz rodzinny, pielęgniarka praktyki lub wsparcie z planu prywatnego",
            "Mogą pomóc w stałej opiece i skierowaniach",
          ],
        },
        {
          cells: [
            "Potrzebuję pomocy dla mojego dziecka",
            "Usługi zdrowia psychicznego dla dzieci i młodzieży, a w razie potrzeby pilne wskazówki",
            "Dzieci i młodzież często mają osobne ścieżki",
          ],
        },
        {
          cells: [
            "Jestem studentką lub studentem",
            "Najpierw uczelniana służba zdrowia lub poradnictwo, chyba że sytuacja jest niebezpieczna lub poważna",
            "Usługi na kampusie mogą być dla studentów najszybszym punktem wejścia",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Częste pytania",
      type: "faq",
      faqs: [
        {
          question: "Do kogo mogę teraz zadzwonić lub napisać SMS?",
          answer:
            "Zadzwoń lub napisz SMS pod **9-8-8** (linia kryzysowa ds. samobójstw) o każdej porze, bezpłatnie, 24/7 — skierowanie nie jest potrzebne. W Kingston całodobowo odbiera też linia kryzysowa AMHS-KFLA pod numerem 613-544-4229. Jeśli bezpieczeństwo jest bezpośrednio zagrożone, zadzwoń pod 911.",
        },
        {
          question: "Co jeśli nie wiem, czy to się liczy jako kryzys?",
          answer:
            "Jeśli ktoś może nie być bezpieczny, nie czekaj na pewność. Skorzystaj ze wsparcia kryzysowego lub służb ratunkowych.",
        },
        {
          question:
            "Co jeśli potrzebuję pomocy dziś wieczorem, ale nie wiem, do kogo zadzwonić?",
          answer:
            "Skorzystaj ze strony katalogu lokalnego zdrowia psychicznego lub ścieżki wsparcia kryzysowego, zamiast czekać do rana.",
        },
        {
          question: "Co jeśli osobą potrzebującą pomocy jest moje dziecko?",
          answer:
            "Szukaj konkretnie usług dla dzieci i młodzieży. Ścieżki zdrowia psychicznego dla młodzieży często różnią się od opieki dla dorosłych.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Badania przesiewowe i profilaktyka",
  description:
    "Poznaj podstawy opieki profilaktycznej, szczepień i badań przesiewowych w Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Lokalne informacje o szczepieniach i zdrowiu publicznym.",
    },
    {
      title: "Ontario: Opieka zdrowotna w Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Ogólne wskazówki dotyczące opieki zdrowotnej.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Dlaczego profilaktyka ma znaczenie",
      type: "default",
      content:
        "Opieka profilaktyczna oznacza próbę wykrycia problemów wcześnie lub powstrzymania ich, zanim staną się poważniejsze. Obejmuje to szczepienia, badania przesiewowe, regularne pomiary ciśnienia krwi i rozmowy z lekarzem o czynnikach ryzyka.",
    },
    {
      id: "common-prevention",
      title: "Częste zadania profilaktyczne",
      type: "checklist",
      items: [
        "Dbaj o aktualność szczepień",
        "Pytaj, czy badania przesiewowe są zalecane dla Twojego wieku lub historii zdrowia",
        "Przynoś na rutynowe wizyty pytania o ciśnienie krwi, cukrzycę i inne czynniki ryzyka",
        "Korzystaj z zasobów zdrowia publicznego, gdy potrzebujesz informacji o szczepieniach lub profilaktyce",
      ],
    },
    {
      id: "prevention-next",
      title: "Potrzebujesz lokalnych usług profilaktycznych?",
      type: "callout",
      content:
        "Użyj katalogu usług lokalnych, aby znaleźć wpisy zdrowia publicznego, badań przesiewowych i aptek, jeśli potrzebujesz konkretnego punktu startu w Kingston.",
      link: {
        text: "Wpisy zdrowia publicznego i aptek",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Opieka wspomagająca i środowiskowa",
  description:
    "Skorzystaj z tej strony, aby zrozumieć opiekę domową, stomatologię, rehabilitację, poradnictwo, wsparcie wzroku oraz co może być publiczne, środowiskowe, studenckie lub prywatne.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Oficjalne informacje o koordynacji opieki domowej i środowiskowej.",
    },
    {
      title: "Kanada: Canadian Dental Care Plan",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Oficjalne informacje o federalnym programie pokrycia kosztów opieki stomatologicznej i uprawnieniach.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Oficjalne informacje o usługach środowiskowych i stomatologicznych.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Oficjalne informacje o wsparciu wzroku.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Co oznacza opieka wspomagająca i środowiskowa",
      type: "default",
      content:
        "Opieka wspomagająca (allied health) to opieka świadczona przez specjalistów takich jak fizjoterapeuci, terapeuci zajęciowi, dietetycy, pracownicy socjalni, doradcy, dentyści czy zespoły wsparcia wzroku. Opieka środowiskowa często oznacza opiekę poza szpitalem — czasem w Twoim domu, szkole, klinice lub programie środowiskowym.",
    },
    {
      id: "access-payment-matrix",
      title: "Tabela dostępu i płatności",
      type: "table",
      columns: ["Ścieżka", "Przykłady", "Jak zwykle wygląda płatność", "Jak zacząć"],
      rows: [
        {
          cells: [
            "Publicznie finansowana opieka domowa i środowiskowa",
            "Pielęgniarstwo domowe, terapia w domu, koordynacja opieki",
            "Programy publiczne mogą mieć zastosowanie, jeśli spełniasz zasady programu",
            "Zacznij od skierowania od lekarza lub oficjalnej ścieżki opieki domowej",
          ],
        },
        {
          cells: [
            "Usługi środowiskowe",
            "Stomatologia w środowiskowym ośrodku zdrowia lub wsparcie niskoprogowe",
            "Może obowiązywać finansowanie publiczne lub środowiskowe, zależnie od usługi",
            "Skontaktuj się bezpośrednio z programem i zapytaj o uprawnienia",
          ],
        },
        {
          cells: [
            "Wsparcie przez uczelnię",
            "Poradnictwo na kampusie lub wsparcie związane ze zdrowiem",
            "Zwykle powiązane z uprawnieniami studenckimi oraz opłatami lub planami studenckimi",
            "Najpierw skorzystaj z oficjalnych stron usług swojej uczelni",
          ],
        },
        {
          cells: [
            "Prywatna opieka wspomagająca",
            "Fizjoterapia, poradnictwo, masaż, prywatna stomatologia, prywatne usługi okulistyczne",
            "Często płatność prywatna, chyba że pokrywa to inny plan",
            "Przed rezerwacją poproś o pełne ceny i zasady pokrycia kosztów",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Przykłady opieki wspomagającej i środowiskowej",
      type: "grid",
      gridItems: [
        {
          title: "Opieka domowa",
          content:
            "Przydatna, gdy ktoś potrzebuje wsparcia w domu po chorobie, urazie lub pobycie w szpitalu.",
          icon: "clock",
          link: {
            text: "Wpisy opieki domowej",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Opieka stomatologiczna",
          content:
            "Pokrycie kosztów stomatologii jest osobne od zwykłego ubezpieczenia lekarskiego. Federalny Canadian Dental Care Plan pokrywa teraz koszty dla wielu osób bez prywatnego ubezpieczenia stomatologicznego, a programy takie jak Healthy Smiles Ontario i środowiskowe kliniki stomatologiczne pomagają określonym grupom.",
          icon: "shield",
          link: {
            text: "Wpisy stomatologiczne i środowiskowe",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehabilitacja i terapia",
          content:
            "Fizjoterapia, terapia zajęciowa i powiązane usługi mogą być publiczne, środowiskowe lub prywatne, zależnie od Twojej ścieżki.",
          icon: "stethoscope",
          link: { text: "Wpisy opieki wspomagającej", url: "/local-services?category=allied-community" },
        },
        {
          title: "Wsparcie wzroku",
          content:
            "Wsparcie wzroku może obejmować urządzenia, pomoc w orientacji i wsparcie środowiskowe, a także medyczną opiekę okulistyczną.",
          icon: "info",
          link: {
            text: "Wpisy wsparcia wzroku",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Zanim zarezerwujesz",
      type: "checklist",
      items: [
        "Zapytaj, czy potrzebne jest skierowanie",
        "Zapytaj, czy usługa jest publiczna, finansowana środowiskowo, czy płatna prywatnie",
        "Jeśli usługa jest prywatna, poproś o dokładne ceny i zasady odwoływania wizyt",
        "Sprawdź, czy Twój plan szkolny lub prywatny pokrywa część kosztów",
        "Zapytaj, czy musisz przynieść dokumentację, obrazowanie lub zaświadczenie od lekarza",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ i słowniczek",
  description:
    "Częste sytuacje nowo przybyłych, praktyczne pytania i definicje prostym językiem.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Opieka zdrowotna w Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Ogólne prowincyjne wskazówki dotyczące opieki zdrowotnej.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Oficjalne wskazówki dotyczące porad pielęgniarskich.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Częste sytuacje nowo przybyłych",
      type: "faq",
      faqs: [
        {
          question: "Nie mam jeszcze OHIP. Co zrobić najpierw?",
          answer:
            "Najpierw poznaj swoją ścieżkę ubezpieczenia, a potem skorzystaj z katalogu lokalnego i stron z pilnymi wskazówkami, aby ułożyć bezpieczny plan tymczasowy.",
        },
        {
          question: "Jestem studentem z zagranicy. Od czego zacząć?",
          answer:
            "Zacznij od uczelnianej służby zdrowia lub dobrostanu oraz dokumentów ubezpieczenia swojej uczelni, a potem korzystaj z usług środowiskowych lub pilnych, gdy to nie wystarcza.",
        },
        {
          question: "Potrzebuję tłumacza.",
          answer:
            "Poproś wcześnie. Możesz czytać tę stronę w 33 językach, używając menu Język, i możesz pokazać personelowi krótkie zwroty z karty pomocy tłumacza. W sprawie wizyt, instrukcji dotyczących leków, zgody i omawiania badań pytaj o profesjonalne wsparcie tłumacza. Health811 (zadzwoń pod 811) oferuje pomoc telefoniczną w wielu językach.",
        },
        {
          question: "Potrzebuję badania krwi po wizycie.",
          answer:
            "Sprawdź, czy masz zlecenie na badanie, a potem wyszukaj w katalogu laboratoria i obrazowanie.",
        },
        {
          question: "Potrzebuję odnowienia recepty, a mój lekarz jest niedostępny.",
          answer:
            "Zacznij od swojej apteki, a potem w razie potrzeby skorzystaj ze ścieżek bez umówienia, wirtualnych lub pilnych, zależnie od leku i pilności.",
        },
        {
          question: "Potrzebuję opieki dla mojego dziecka.",
          answer:
            "Najpierw kieruj się alarmowymi objawami nagłego zagrożenia, potem wskazówkami dotyczącymi opieki tego samego dnia lub pilnej. Ścieżki zdrowia psychicznego dla dzieci i młodzieży są często osobne od opieki dla dorosłych.",
        },
        {
          question: "Potrzebuję pomocy psychicznej dziś wieczorem.",
          answer:
            "Zadzwoń lub napisz SMS pod 9-8-8 (linia kryzysowa ds. samobójstw) o każdej porze albo zadzwoń na całodobową linię kryzysową AMHS-KFLA pod numer 613-544-4229. Skorzystaj z pomocy w nagłych wypadkach, jeśli bezpieczeństwo jest zagrożone. Nie czekaj na rutynową wizytę.",
        },
        {
          question: "Nie rozumiem zlecenia na badanie ani skierowania.",
          answer:
            "Zadzwoń do kliniki, która Ci je wydała, i poproś o wyjaśnienie prostym językiem. Możesz zapytać, do czego służy, dokąd trafia i kto powinien się tym dalej zająć.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Więcej częstych pytań",
      type: "faq",
      faqs: [
        {
          question:
            "Czy mogę po prostu pojechać na oddział ratunkowy, jeśli nie mam lekarza?",
          answer:
            "Oddział ratunkowy jest dla nagłych wypadków. Jeśli problem nie zagraża wyraźnie życiu, zacznij od strony z pilnymi wskazówkami, Health811, kliniki bez umówienia lub innej opieki tego samego dnia.",
        },
        {
          question:
            "Co jeśli dopiero przyjechałam lub przyjechałem i nie wiem, która usługa do mnie pasuje?",
          answer:
            "Użyj filtrów katalogu dla studentów, nowo przybyłych, dzieci i młodzieży, opieki bez umówienia, wirtualnej, wymaganego skierowania i rodzaju ubezpieczenia.",
        },
        {
          question: "Co jeśli informacje na tej stronie wyglądają na nieaktualne?",
          answer:
            "Użyj formularza zgłoszenia na stronie lub przy wpisie, aby następny przegląd mógł skupić się na zmianie, którą znalazłaś lub znalazłeś.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Słowniczek",
      type: "checklist",
      items: [
        "Podstawowa opieka (primary care): Twoja stała ścieżka opieki zdrowotnej przy rutynowych i bieżących potrzebach zdrowotnych.",
        "Pielęgniarka praktyki (nurse practitioner, NP): Pielęgniarka zaawansowanej praktyki, która w wielu sytuacjach może oceniać, diagnozować, przepisywać leki i kierować dalej.",
        "Skierowanie (referral): Prośba jednego lekarza do innej usługi lub specjalisty.",
        "Zlecenie na badanie (requisition): Formularz mówiący laboratorium lub pracowni obrazowania, jakiego badania potrzebujesz.",
        "Triaż (triage): Proces decydowania, kto najpierw potrzebuje pilnej opieki, na podstawie bezpieczeństwa i ciężkości stanu.",
        "Klinika bez umówienia (walk-in clinic): Klinika, która może przyjmować pacjentów bez umówionej wizyty, w zależności od dziennego limitu przyjęć.",
        "Pilna opieka (urgent care): Opieka tego samego dnia przy pilnych problemach, które nie zagrażają wyraźnie życiu.",
        "Pacjent zapisany (rostered or attached): Pacjent, który ma stałą relację z regularnym dostawcą podstawowej opieki.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "O stronie, zaufanie i prywatność",
  description:
    "Dowiedz się, jak działa ten przewodnik, jak traktujemy źródła i status przeglądu oraz jak zgłaszać zmiany.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Noty o źródłach projektu",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Publiczne podsumowanie tego, jak projekt traktuje zaufanie i źródła.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Do czego służy ta strona",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca to przewodnik nawigacji po opiece zdrowotnej dla Kingston, Ontario, stworzony z myślą o nowo przybyłych. Ma pomagać ludziom wybrać właściwy następny krok, zrozumieć częste pojęcia systemowe i znaleźć zaufane wpisy usług lokalnych.\n\nTa strona **nie** jest narzędziem pokazującym czasy oczekiwania na żywo, platformą rezerwacji ani usługą porad medycznych.",
    },
    {
      id: "sources",
      title: "Jak działają zaufanie i źródła",
      type: "default",
      content:
        "Staramy się, gdy to możliwe, linkować lokalne wpisy do oficjalnych stron usług. Każdy wpis pokazuje status przeglądu i datę ostatniego przeglądu. Niektóre wpisy są w pełni zweryfikowane z oficjalnymi źródłami. Inne wciąż wymagają lokalnego sprawdzenia, ponieważ godziny, zasady przyjęć lub dostęp często się zmieniają.\n\nBloki źródeł na poziomie strony pokazują główne oficjalne odniesienia użyte w bieżącym cyklu przeglądu.",
    },
    {
      id: "accessibility",
      title: "Dostępność i język",
      type: "default",
      content:
        "Ta strona jest zbudowana tak, aby była przyjazna dla klawiatury, projektowana najpierw na telefon i czytelna prostym językiem.\n\nMożesz czytać cały przewodnik w **33 językach**, używając menu Język w nagłówku — od العربية i Soomaali po ਪੰਜਾਬੀ, ትግርኛ, Yorùbá i Українська — a każda strona i każde menu są udostępniane bezpośrednio w ramach tej witryny. Wszystkie tłumaczenia są wspomagane maszynowo; francuski, hiszpański, arabski i chiński uproszczony przeszły dodatkową rundę sprawdzania, a pozostałe są oznaczone jako tłumaczenie automatyczne. **Wersją odniesienia pozostaje angielska** — jeśli przetłumaczone zdanie wydaje się niejasne lub zaskakujące, sprawdź tekst angielski lub poproś kogoś o potwierdzenie.\n\nDziesiątki kolejnych języków mogą otwierać tę stronę przez Google Translate z tego samego menu, a karta pomocy tłumacza zawiera krótkie zwroty na pilne sytuacje w ponad 20 językach, które możesz pokazać personelowi.\n\nWpisy w katalogu (nazwy usług, adresy, numery telefonów i godziny) pozostają po angielsku, aby dokładnie zgadzały się z oficjalnymi źródłami.\n\nKażde tłumaczenie może być błędne w szczegółach medycznych, więc pytaj o profesjonalne wsparcie tłumacza ustnego przy wizytach, instrukcjach dotyczących leków i zgodzie. Health811 (zadzwoń pod 811) oferuje pomoc telefoniczną w wielu językach.",
    },
    {
      id: "privacy",
      title: "Prywatność",
      type: "default",
      content:
        "Ta strona nie używa inwazyjnej zdalnej analityki. Przechowuje lekkie liczniki ulepszeń w Twojej własnej przeglądarce, aby opiekunowie strony mogli zrozumieć częste wyszukiwania, wyszukiwania bez wyników, wyświetlenia usług i zgłoszenia problemów, gdy te informacje są celowo eksportowane do celów utrzymania strony.\n\nNie wysyłaj prywatnych informacji medycznych przez formularz zgłoszeń ani e-mail.",
    },
    {
      id: "contact",
      title: "Kontakt i zgłaszanie zmian",
      type: "default",
      content:
        "Jeśli strona lub wpis wyglądają na błędne, użyj formularza zgłoszenia na tej stronie. Zgłoszenia powinny opisywać problem, a nie Twoją osobistą sytuację zdrowotną.\n\nOgólny e-mail kontaktowy: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Zastrzeżenie",
      type: "default",
      content:
        "Ta strona internetowa służy wyłącznie do nawigacji i edukacji. Nie stanowi porady medycznej i nie zastępuje profesjonalnej diagnozy, leczenia ani pomocy w nagłych wypadkach. Jeśli sytuacja może zagrażać życiu, zadzwoń pod 911.",
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
