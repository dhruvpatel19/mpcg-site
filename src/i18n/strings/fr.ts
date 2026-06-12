import type { UIStrings } from "../types";

export const fr: UIStrings = {
  common: {
    loadingPage: "Chargement de la page...",
    directoryEnglishNote:
      "Les fiches du répertoire sont affichées en anglais pour que les noms de services, les adresses, les numéros de téléphone et les heures correspondent exactement aux sources officielles.",
  },
  header: {
    emergencyBanner: "Urgence pouvant menacer la vie? Appelez le 911 maintenant.",
    tagline:
      "Navigation en soins de santé à Kingston (Ontario), pensée d'abord pour les nouveaux arrivants",
    languageButton: "Langue",
    languageButtonAria: "Aide pour la langue et l'interprétation",
    openNavigation: "Ouvrir la navigation",
    primaryNavLabel: "Principale",
  },
  languageModal: {
    title: "Aide pour la langue et l'interprétation",
    description:
      "Lisez ce guide dans la langue où vous êtes le plus à l'aise. Pour les conversations sur vos soins, demandez un interprète quand vous en avez besoin.",
    chooseLanguageTitle: "Choisissez votre langue",
    chooseLanguageNote:
      "Ce guide est entièrement traduit en 33 langues sur ce site, et des dizaines d'autres langues s'ouvrent grâce à la traduction automatique. Les fiches du répertoire restent en anglais pour correspondre exactement aux sources officielles. L'anglais est la version de référence si quelque chose semble flou.",
    safetyTitle: "Note de sécurité",
    safetyBody:
      "La traduction du site sert à lire et à comprendre. Pour les rendez-vous, les consignes d'examen, les médicaments ou le consentement, demandez si la clinique ou l'hôpital peut fournir un interprète professionnel. Health811 (composez le 811) offre du soutien téléphonique dans de nombreuses langues.",
    phrasesTitle: "Phrases rapides à montrer au personnel",
    phrasesNote:
      "Pointez votre langue et montrez ces lignes à la réception ou au personnel clinique.",
    callHealth811: "Appeler Health811",
    accessibilityCta: "Accessibilité et fiabilité",
    close: "Fermer la fenêtre d'aide linguistique",
  },
  moreLanguages: {
    title: "Plus de langues (traduction automatique)",
    description:
      "Toutes les langues fonctionnent à partir de ce seul menu — y compris le somali, le yoruba, l'igbo, le haoussa, l'amharique, le tigrinya, le swahili, l'ukrainien, le farsi, l'ourdou, le pendjabi, le tamoul et le vietnamien.",
    selectLabel: "Choisissez n'importe quelle langue",
    selectPlaceholder: "Toutes les langues — choisissez-en une…",
    openButton: "Ouvrir dans cette langue",
    disclaimer:
      "Les langues marquées « automatique » ouvrent cette page avec Google Traduction et restent dans votre langue pendant que vous continuez à naviguer. La traduction automatique n'est pas révisée par ce projet — utile pour lire, mais confirmez les détails médicaux avec un clinicien ou un interprète.",
  },
  funding: {
    acknowledgment:
      "Ce projet est soutenu par une subvention de l'Ontario Medical Students Association (OMSA).",
    logoAlt: "Logo de l'Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Rechercher une langue…",
    onSiteGroup: "Traduites sur ce site",
    proxyGroup: "Plus de langues via Google Traduction",
    reviewedBadge: "Révisée",
    automaticBadge: "Automatique",
    interpreterTab: "Aide à l'interprétation et phrases",
    noMatches: "Aucune langue ne correspond à votre recherche.",
    note: "Les traductions sont assistées par la machine et l'anglais est la version de référence si quelque chose semble flou. Les langues du groupe Google Traduction ouvrent cette page sur un site externe de Google. Les fiches du répertoire restent en anglais pour correspondre exactement aux sources officielles.",
  },
  navigation: [
    {
      title: "Pour commencer",
      items: [
        {
          label: "Besoin d'aide maintenant",
          to: "/need-help-now",
          description: "Décisions urgentes et soutien en cas de crise",
        },
        {
          label: "Commencez ici",
          to: "/start-here",
          description: "Nouveau dans le système de santé de l'Ontario",
        },
        {
          label: "Trouver des soins primaires",
          to: "/get-a-family-doctor",
          description:
            "Médecins, infirmières praticiennes, centres de santé communautaire et options pour étudiants",
        },
      ],
    },
    {
      title: "Comprendre les soins",
      items: [
        {
          label: "Coûts et couverture",
          to: "/costs-and-coverage",
          description: "OHIP, IFHP, régimes privés et couverture des médicaments",
        },
        {
          label: "Votre visite",
          to: "/your-visit",
          description: "Quoi apporter et comment poser vos questions",
        },
        {
          label: "Après la visite",
          to: "/after-visit",
          description: "Examens, réquisitions, demandes de consultation et suivi",
        },
        {
          label: "Médicaments et pharmacies",
          to: "/medicines-and-pharmacies",
          description: "Ordonnances, renouvellements et aide du pharmacien",
        },
      ],
    },
    {
      title: "Aide locale",
      items: [
        {
          label: "Services locaux",
          to: "/local-services",
          description: "Chercher des services à Kingston",
        },
        {
          label: "Santé mentale",
          to: "/mental-health",
          description: "Crise, soutien urgent, régulier et pour les jeunes",
        },
        {
          label: "Dépistage et prévention",
          to: "/screening-prevention",
          description: "Vaccins et soins préventifs",
        },
        {
          label: "Soins paramédicaux et communautaires",
          to: "/community-allied-health",
          description:
            "Soins à domicile, réadaptation, soins dentaires et soutien communautaire",
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Situations courantes des nouveaux arrivants et glossaire",
        },
        {
          label: "À propos et fiabilité",
          to: "/about",
          description: "Sources, confidentialité, accessibilité et commentaires",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Besoin d'aide tout de suite?",
    items: {
      "call-911": {
        label: "Appeler le 911",
        description: "Urgence qui menace la vie",
      },
      "call-811": {
        label: "Appeler Health811",
        description: "Conseils d'une infirmière, 24 h/24, 7 j/7",
      },
      "call-988": {
        label: "Appeler ou texter le 9-8-8",
        description: "Ligne d'aide en cas de crise de suicide, 24 h/24, 7 j/7",
      },
      "call-crisis": {
        label: "Appeler la ligne de crise",
        description: "Ligne de crise AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Guide des soins urgents",
        description: "Options après les heures d'ouverture et le jour même",
      },
      "mental-health": {
        label: "Soutien en santé mentale",
        description: "Parcours de crise, urgents et réguliers",
      },
    },
  },
  home: {
    seoTitle: "Guide des soins de santé à Kingston",
    seoDescription:
      "Navigation en soins de santé pour les nouveaux arrivants à Kingston (Ontario) : aide urgente, services locaux, bases de la couverture, conseils sur l'interprétation et prochaines étapes après une visite.",
    kicker: "Kingston (Ontario)",
    heroTitle: "Trouvez les bons soins à Kingston sans deviner",
    heroLead:
      "Commencez par l'aide urgente, les bases pour nouveaux arrivants, la couverture ou le répertoire des services locaux. Ce guide est en langage simple, adapté au mobile et honnête sur ce qui doit encore être revérifié.",
    cardNeedHelp: {
      title: "Besoin d'aide maintenant",
      body: "Urgences, soins urgents, crise et conseils après les heures d'ouverture.",
    },
    cardStartHere: {
      title: "Commencez ici",
      body: "Comment fonctionnent les soins de santé en Ontario et quoi faire en premier.",
    },
    cardSearch: {
      title: "Chercher des services",
      body: "Trouvez prises de sang, renouvellements, soins sans rendez-vous, santé mentale et plus encore.",
    },
    cardLanguage: {
      title: "Aide linguistique",
      body: "Lisez ce guide dans votre langue, avec des conseils sur l'interprétation et des phrases rapides.",
    },
    quickDecisionsKicker: "Décisions rapides",
    quickDecisionsTitle: "Commencez par ces questions",
    quickDecisionLines: [
      "Si la vie pourrait être en danger, appelez le 911 maintenant.",
      "Si vous ne savez pas où aller ce soir, appelez Health811.",
      "Pour des pensées suicidaires ou une détresse accablante, appelez ou textez le 9-8-8 à tout moment.",
      "Si vous n'avez pas de médecin de famille, gardez dans votre plan les options sans rendez-vous, de santé communautaire et pour étudiants.",
      "Si vous avez besoin d'une prise de sang, d'une radiographie, d'un renouvellement ou d'une mise à jour d'une demande de consultation, utilisez le répertoire local pour trouver la prochaine étape.",
    ],
    trustNoteTitle: "Note de fiabilité",
    trustNoteBody:
      "Ceci est un guide statique. Nous n'affichons pas les temps d'attente en direct. Les détails sensibles au temps, comme les heures et l'admission, peuvent changer vite; chaque fiche inclut donc un lien vers la source et un statut de révision.",
    newcomerKicker: "Démarrage rapide pour nouveaux arrivants",
    newcomerTitle: "Premières étapes si vous êtes nouveau à Kingston",
    newcomerSteps: [
      {
        title: "1. Connaissez votre couverture",
        body: "Comprenez l'Assurance-santé de l'Ontario (OHIP), le Programme fédéral de santé intérimaire (IFHP), les régimes privés et ce qui n'est habituellement pas couvert. Il n'y a pas de délai d'attente pour l'OHIP : faites la demande dès votre arrivée.",
      },
      {
        title: "2. Planifiez votre parcours de soins primaires",
        body: "Apprenez la différence entre les médecins de famille, les infirmières praticiennes, les cliniques étudiantes, les centres de santé communautaire et les soins sans rendez-vous.",
      },
      {
        title: "3. Sachez ce qui vient ensuite",
        body: "Apprenez ce que veulent dire en général les réquisitions, les demandes de consultation, les résultats d'examens et les appels de suivi.",
      },
    ],
    languageSupportKicker: "Soutien linguistique",
    languageSupportTitle: "Montrez ces phrases si vous avez besoin d'aide",
    openLanguageHelp: "Ouvrir l'aide linguistique",
    commonTasksKicker: "Tâches courantes",
    commonTasksTitle: "Cherchez selon la tâche à accomplir",
    openDirectory: "Ouvrir le répertoire complet",
    tasks: [
      {
        title: "Prise de sang ou radiographie",
        body: "Trouvez des laboratoires et des services d'imagerie.",
      },
      {
        title: "Renouvellement d'ordonnance",
        body: "Trouvez des pharmacies et de l'aide pour les renouvellements.",
      },
      {
        title: "Soutien en santé mentale",
        body: "Crise, soutien urgent, régulier et pour les jeunes.",
      },
      {
        title: "Carte Santé ou soutien aux nouveaux arrivants",
        body: "Trouvez ServiceOntario, ISKA et des conseils par téléphone.",
      },
    ],
    featuredKicker: "Services en vedette",
    featuredTitle: "De bons points de départ",
    trustKicker: "Fiabilité et sources",
    trustTitle:
      "Honnête sur ce qui est vérifié et ce qui doit encore être revérifié",
    trustBody:
      "Certaines fiches sont vérifiées auprès de sources locales officielles. D'autres doivent encore être revérifiées localement, parce que les heures, l'admission ou les règles d'accès changent souvent. Nous affichons ce statut ouvertement et nous encourageons les gens à signaler les détails périmés.",
    trustChecklistTitle: "À lire avant de vous fier à une fiche",
    trustChecklist: [
      "Cherchez le lien vers la source officielle.",
      "Vérifiez la date de la dernière révision.",
      "Confirmez les heures du jour même et l'accès sans rendez-vous avant d'y aller.",
      "Utilisez le formulaire de signalement si vous remarquez un changement.",
    ],
    trustLink: "Voir les sources et les notes de fiabilité",
  },
  contentPage: {
    breadcrumbHome: "Accueil",
    badge: "Guide en langage simple",
    reviewStatusTitle: "Statut de révision",
    reviewLabels: {
      reviewed:
        "Révisé selon l'ensemble de sources actuel utilisé par ce projet.",
      "general-guidance":
        "Révisé comme orientation générale. Les détails locaux peuvent quand même changer vite.",
      "needs-local-recheck":
        "Conseils utiles, mais les détails locaux doivent encore être vérifiés.",
    },
    lastReviewPrefix: "Dernière révision de la page :",
    noReviewDate:
      "Cette page n'a pas de date de révision enregistrée au niveau de la page.",
    translationAside:
      "Vous pouvez lire cette page en plusieurs langues avec le menu Langue. Pour les rendez-vous, les médicaments, le consentement et les consignes d'examen, demandez si un soutien d'interprète est offert.",
    share: "Partager",
    print: "Imprimer",
    sourcesTitle: "Sources de cette page",
    sourcesNote:
      "Voici les principales sources officielles ou primaires utilisées pour la révision actuelle de la page. Les processus locaux peuvent quand même changer entre les cycles de révision.",
    onThisPage: "Sur cette page",
    sourcesAnchorLabel: "Sources",
    translationReminderTitle: "Rappel sur la traduction",
    translationReminderBody:
      "Si quelque chose touche votre traitement ou votre sécurité, confirmez-le avec un clinicien ou un interprète plutôt que de vous fier seulement à la traduction.",
    linkCopiedTitle: "Lien copié",
    linkCopiedBody:
      "Vous pouvez maintenant coller le lien de cette page n'importe où.",
    shareCancelled: "Partage annulé",
  },
  directory: {
    seoTitle: "Services locaux",
    seoDescription:
      "Cherchez des services de santé, de santé mentale, de pharmacie, de couverture et de navigation adaptés aux nouveaux arrivants à Kingston (Ontario).",
    kicker: "Répertoire de Kingston",
    title: "Chercher des services de santé locaux",
    lead: "Cherchez par service, symptôme, document ou tâche. Exemples : sans rendez-vous, après les heures, prise de sang, renouvellement, carte Santé, clinique étudiante ou soutien aux nouveaux arrivants.",
    searchPlaceholder:
      "Cherchez par besoin, nom de service, adresse ou mot-clé",
    sortAriaLabel: "Trier les résultats",
    sortRelevance: "Tri : pertinence",
    sortAlphabetical: "Tri : de A à Z",
    sortRecentlyReviewed: "Tri : révisé récemment",
    sortArea: "Tri : secteur",
    gridViewLabel: "Vue en grille",
    listViewLabel: "Vue en liste",
    allServices: "Tous les services",
    audienceTitle: "Public",
    accessTitle: "Accès",
    careLevelTitle: "Niveau de soins",
    coverageAreaTitle: "Couverture et secteur",
    areaLabel: "Secteur",
    showingServices: "Affichage de {count} services",
    resetFilters: "Réinitialiser les filtres",
    trustPanelTitle: "Fiabilité et statut de révision",
    trustPanelBody:
      "Ce répertoire est statique, pas en direct. Nous montrons la dernière date de révision enregistrée, les liens vers les sources officielles quand ils existent, et les fiches qui doivent encore être revérifiées localement. Confirmez les heures et l'accès le jour même avant d'y aller.",
    verifiedLabel: "Vérifié",
    needsRecheckLabel: "À revérifier",
    noResultsTitle: "Aucun service ne correspond à ces filtres",
    noResultsBody:
      "Essayez une recherche plus large comme prise de sang, renouvellement, santé mentale, carte Santé ou sans rendez-vous. Vous pouvez aussi effacer tous les filtres et recommencer.",
    notSureTitle: "Vous ne savez pas par où commencer?",
    notSureBody:
      "Si vous ne savez pas si vous avez besoin des urgences, de soins urgents, d'une clinique sans rendez-vous ou de l'aide d'une pharmacie, commencez par la page d'aide urgente ou appelez Health811 pour des conseils d'une infirmière.",
    needHelpNowCta: "Besoin d'aide maintenant",
    callHealth811: "Appeler Health811",
  },
  filters: {
    audience: {
      newcomers: "Nouveaux arrivants",
      students: "Étudiants seulement ou campus",
      "children-youth": "Enfant ou jeune",
      adults: "Adultes",
      families: "Familles",
      "unattached-patients": "Sans médecin de famille",
    },
    access: {
      "walk-in": "Sans rendez-vous",
      appointment: "Sur rendez-vous",
      referral: "Référence requise",
      virtual: "Virtuel",
    },
    level: {
      emergency: "Urgence",
      urgent: "Urgent",
      primary: "Soins primaires",
      community: "Communautaire",
    },
    payment: {
      public: "Financement public",
      community: "Communautaire / faible barrière",
      mixed: "Couverture mixte",
      "student-plan": "Régime étudiant",
      private: "Paiement privé",
    },
    location: {
      downtown: "Centre-ville",
      "north-end": "Secteur nord",
      "west-end": "Secteur ouest",
      campus: "Campus",
      online: "En ligne",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Urgences et soins urgents",
      shortLabel: "Urgences et soins urgents",
    },
    "primary-care": { label: "Soins primaires", shortLabel: "Soins primaires" },
    "community-health": {
      label: "Centres de santé communautaire",
      shortLabel: "Santé communautaire",
    },
    "mental-health": {
      label: "Santé mentale et soutien en cas de crise",
      shortLabel: "Santé mentale",
    },
    "public-health": { label: "Santé publique", shortLabel: "Santé publique" },
    "labs-imaging": {
      label: "Laboratoires et imagerie",
      shortLabel: "Laboratoires et imagerie",
    },
    pharmacies: {
      label: "Médicaments et pharmacies",
      shortLabel: "Pharmacies",
    },
    "allied-community": {
      label: "Soins paramédicaux et communautaires",
      shortLabel: "Soins paramédicaux",
    },
    "navigation-support": {
      label: "Soutien à la navigation et à la couverture",
      shortLabel: "Navigation",
    },
  },
  serviceCard: {
    whenToUse: "Quand l'utiliser :",
    accessLabel: "Accès",
    eligibilityLabel: "Admissibilité",
    eligibilityFallback:
      "Ouvert au grand public, sauf indication contraire de la source officielle.",
    hoursLabel: "Heures",
    phoneLabel: "Téléphone",
    trustDetails: "Détails sur la fiabilité et la source",
    lastReview: "Dernière révision :",
    officialSource: "Source officielle",
    call: "Appeler",
    officialWebsite: "Site web officiel",
    directions: "Itinéraire",
    viewDetails: "Voir les détails",
  },
  serviceDetail: {
    backToServices: "Retour aux services locaux",
    whenToUseTitle: "Quand utiliser ce service",
    eligibilityTitle: "Admissibilité et accès",
    eligibilityFallback:
      "Consultez la source officielle si vous ne savez pas si ce service vous est ouvert.",
    whatToBringTitle: "Quoi apporter",
    contactTitle: "Contact et actions",
    callNow: "Appeler maintenant",
    officialWebsite: "Site web officiel",
    directions: "Itinéraire",
    trustTitle: "Fiabilité et source",
    lastReview: "Dernière révision :",
    viewOfficialSource: "Voir la source officielle",
  },
  verification: {
    verified: {
      label: "Vérifié auprès de la source officielle",
      shortLabel: "Vérifié",
      description:
        "Les détails principaux ont été vérifiés auprès d'une source officielle lors du dernier cycle de révision.",
    },
    "partially-verified": {
      label: "Source officielle liée",
      shortLabel: "Lien officiel",
      description:
        "Une source officielle est liée, mais un ou plusieurs détails peuvent changer souvent et devraient être confirmés avant d'y aller.",
    },
    "community-reported": {
      label: "Signalé par la communauté",
      shortLabel: "Signalement communautaire",
      description:
        "Cette information vient d'un signalement communautaire et doit encore être confirmée de façon indépendante.",
    },
    "needs-recheck": {
      label: "À revérifier",
      shortLabel: "À revérifier",
      description:
        "Cette fiche reste visible parce qu'elle peut encore aider, mais des détails clés peuvent être périmés. Confirmez avant de vous y fier.",
    },
  },
  feedback: {
    badge: "Signaler une information périmée",
    title: "Aidez-nous à garder ce guide exact",
    body: "Ceci ouvre un courriel prérempli avec le contexte de la page ou du service. N'incluez pas de renseignements médicaux privés.",
    issueTypeLabel: "Type de problème",
    issueTypes: {
      "outdated hours": "Heures périmées",
      "wrong phone or website": "Mauvais numéro de téléphone ou site web",
      "eligibility or access issue": "Problème d'admissibilité ou d'accès",
      "translation or accessibility problem":
        "Problème de traduction ou d'accessibilité",
      "missing service or content": "Service ou contenu manquant",
      other: "Autre",
    },
    detailsLabel: "Que devrions-nous vérifier?",
    detailsPlaceholder:
      "Exemple : le numéro de téléphone a changé, une clinique est maintenant sur rendez-vous seulement, ou un lien est brisé.",
    contactLabel: "Contact (facultatif)",
    contactPlaceholder: "Adresse courriel si vous voulez une réponse",
    openEmail: "Ouvrir le courriel de signalement",
    copyText: "Copier le texte du signalement",
    thanks:
      "Merci. Les signalements nous aident à prioriser les pages périmées, les liens brisés et les fiches à revérifier localement.",
    toastEmailTitle: "Brouillon de courriel ouvert",
    toastEmailBody:
      "Votre signalement inclut le contexte de la page ou du service.",
    toastCopyTitle: "Résumé du problème copié",
    toastCopyBody:
      "Vous pouvez le coller dans votre propre client de courriel au besoin.",
  },
  footer: {
    description:
      "Un guide de navigation en soins de santé en langage simple pour Kingston (Ontario). Ce site ne donne pas de conseils médicaux ni de temps d'attente en direct. Confirmez toujours les détails sensibles au temps avec la source officielle avant d'y aller.",
    trustModelTitle: "Modèle de fiabilité",
    trustModelBody:
      "Nous montrons les liens vers les sources officielles, les dates de révision et les fiches qui doivent encore être revérifiées. Si quelque chose semble inexact, signalez-le depuis la page ou le service.",
    beforeYouGo: {
      title: "Avant d'y aller",
      body: "Vérifiez les heures officielles, si vous avez besoin d'un rendez-vous ou d'une référence, et quels documents apporter.",
    },
    languageHelp: {
      title: "Aide linguistique",
      body: "Lisez ce guide dans votre langue avec le menu Langue. Demandez un interprète pour les conversations cliniques quand l'exactitude compte.",
    },
    privacy: {
      title: "Confidentialité",
      body: "Ce site utilise des journaux d'amélioration locaux et respectueux de la vie privée, stockés dans votre navigateur. Il n'envoie pas de données analytiques personnelles à un serveur distant.",
    },
    copyrightSuffix:
      "Ressource d'information communautaire pour Kingston (Ontario).",
    disclaimer: "Avis",
    privacyLink: "Confidentialité",
    sourcesLink: "Sources",
    reportLink: "Signaler une info périmée",
  },
  notFound: {
    seoTitle: "Page introuvable",
    seoDescription:
      "La page demandée est introuvable. Commencez par l'aide urgente, les bases pour nouveaux arrivants, les services locaux ou la FAQ.",
    badge: "404",
    title: "Nous n'avons pas trouvé cette page",
    body: "Si vous cherchez des soins rapidement, commencez par l'aide urgente ou cherchez dans le répertoire des services de Kingston.",
    startHere: "Commencez ici",
    needHelpNow: "Besoin d'aide maintenant",
    localServices: "Services locaux",
    faq: "FAQ",
  },
};
