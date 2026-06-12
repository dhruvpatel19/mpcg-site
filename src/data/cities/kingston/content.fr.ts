import type { PageContent } from "../../../types";

const homePage: PageContent = {
  title: "Guide de navigation en soins de santé de Kingston",
  description:
    "Un guide en langage simple, pensé d'abord pour les nouveaux arrivants, pour trouver des soins de santé à Kingston (Ontario).",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Commencez ici",
  description:
    "Nouveau à Kingston ou nouveau dans le système de santé de l'Ontario? Commencez ici pour apprendre comment le système fonctionne et quoi faire en premier.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario : Les soins de santé en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Aperçu du fonctionnement des soins assurés en Ontario.",
    },
    {
      title: "Ontario : Demander l'OHIP et obtenir une carte Santé",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Information officielle sur la demande d'OHIP et l'admissibilité.",
    },
    {
      title:
        "Ontario : Trouver un médecin de famille ou une infirmière praticienne",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Conseils sur Accès Soins (Health Care Connect) et l'accès aux soins primaires.",
    },
    {
      title: "Canada : Programme fédéral de santé intérimaire",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Information sur la couverture fédérale pour les réfugiés admissibles et les demandeurs d'asile.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Comment fonctionnent les soins de santé en Ontario",
      type: "default",
      content: `Les soins de santé en Ontario sont organisés autour des **soins primaires**. Les soins primaires, c'est l'endroit où vous commencez habituellement pour les besoins de santé courants, les problèmes de santé continus, les ordonnances, les demandes de consultation et la prévention. Votre fournisseur de soins primaires peut être un médecin de famille, une infirmière praticienne ou un infirmier praticien, l'équipe d'un centre de santé communautaire, ou une clinique de santé étudiante si vous y êtes admissible.

Une **demande de consultation (référence)**, c'est quand un clinicien demande à un autre service ou à un spécialiste de vous voir. Une **réquisition (formulaire de demande d'examen)**, c'est un formulaire qui indique au laboratoire ou à la clinique d'imagerie quel examen il vous faut.

Vous n'avez pas besoin de comprendre chaque partie du système dès le premier jour. Les étapes les plus importantes sont : connaître votre couverture, savoir où aller pour les problèmes urgents et faire un plan pour les soins réguliers si vous n'avez pas encore de fournisseur.`,
    },
    {
      id: "first-decisions",
      title: "Premières décisions",
      type: "grid",
      gridItems: [
        {
          title: "J'ai peut-être besoin d'aide urgente",
          content:
            "Commencez par les conseils « urgences ou soins urgents » si vous avez un problème soudain aujourd'hui ou ce soir.",
          icon: "alert",
          link: { text: "Besoin d'aide maintenant", url: "/need-help-now" },
        },
        {
          title: "Je n'ai pas de médecin de famille",
          content:
            "Apprenez comment les médecins de famille, les infirmières praticiennes, les centres de santé communautaire, les cliniques sans rendez-vous et les cliniques étudiantes s'articulent ensemble.",
          icon: "stethoscope",
          link: { text: "Trouver des soins primaires", url: "/get-a-family-doctor" },
        },
        {
          title: "Je dois comprendre ce qui est couvert",
          content:
            "Lisez sur l'Assurance-santé de l'Ontario (OHIP), le Programme fédéral de santé intérimaire (IFHP), l'assurance privée, les régimes étudiants, la couverture des médicaments et les frais courants à payer de votre poche.",
          icon: "shield",
          link: { text: "Coûts et couverture", url: "/costs-and-coverage" },
        },
        {
          title: "J'ai besoin d'aide linguistique",
          content:
            "Lisez ce guide en 33 langues avec le menu Langue, et renseignez-vous sur le soutien d'interprète pour les conversations cliniques et le consentement.",
          icon: "info",
          link: { text: "Accessibilité et langue", url: "/about#accessibility" },
        },
        {
          title: "J'ai besoin d'une prise de sang, d'imagerie ou d'un renouvellement",
          content:
            "Utilisez le répertoire local pour trouver la prochaine étape pratique après une visite.",
          icon: "file",
          link: { text: "Chercher des services locaux", url: "/local-services" },
        },
        {
          title: "Je ne sais pas par où commencer",
          content:
            "Appelez Health811 pour des conseils d'une infirmière si vous ne savez pas à quel point votre situation est urgente.",
          icon: "clock",
          link: { text: "Health811 et aide urgente", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "De bonnes premières étapes pendant votre première semaine",
      type: "steps",
      items: [
        "Connaissez votre couverture: Lisez ce que l'OHIP, l'IFHP, l'assurance privée et les régimes étudiants couvrent habituellement. Si vous pourriez être admissible à l'OHIP, faites la demande dès que possible.",
        "Choisissez votre plan en cas d'urgence: Sachez quand appeler le 911, quand commencer par Health811 et où trouver des soins urgents ou le jour même à Kingston.",
        "Planifiez les soins réguliers: Si vous n'avez pas de fournisseur régulier, apprenez vos options pour les médecins de famille, les infirmières praticiennes, les centres de santé communautaire, les cliniques étudiantes, les cliniques sans rendez-vous et les soins virtuels.",
        "Gardez vos renseignements de santé ensemble: Conservez votre carte Santé ou vos papiers de l'IFHP, votre liste de médicaments, votre carnet de vaccination et des copies de toute réquisition ou demande de consultation.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Si vous n'avez pas encore l'OHIP",
      type: "callout",
      content:
        "N'attendez pas d'être malade pour connaître votre parcours de couverture. Si vous êtes admissible à l'OHIP, faites la demande tôt. Si vous êtes couvert par l'IFHP ou par un régime scolaire ou privé, gardez cette information avec vous. Si vous n'êtes pas assuré, demandez les frais avant une visite et cherchez des services communautaires ou à faible barrière quand c'est approprié.",
      link: { text: "Lire sur la couverture", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Gardez ces choses prêtes",
      type: "checklist",
      items: [
        "Votre carte Santé, vos papiers de l'IFHP ou vos renseignements d'assurance",
        "Une liste de médicaments, même si vous en prenez seulement quelques-uns",
        "Le nom et le numéro de téléphone de votre dernière clinique ou de votre dernier fournisseur, si vous en avez un",
        "Toute réquisition, demande de consultation, papier de congé ou consigne d'examen récents",
        "Les questions que vous voulez poser, en langage simple",
        "Vos besoins d'interprète notés par écrit pour ne pas oublier de demander",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Besoin d'aide maintenant?",
  description:
    "Utilisez cette page si vous avez un problème de santé aujourd'hui ou ce soir et que vous ne savez pas par où commencer.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario : Obtenir des conseils médicaux de Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Service officiel de conseils d'infirmières, 24 h/24, 7 j/7.",
    },
    {
      title: "9-8-8 : Ligne d'aide en cas de crise de suicide",
      url: "https://988.ca/",
      note: "Ligne nationale officielle d'aide en cas de crise de suicide. Appelez ou textez le 9-8-8, gratuit, 24 h/24, 7 j/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Réseau hospitalier officiel pour l'information sur les urgences, les soins urgents et l'imagerie.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Organisme local officiel de santé mentale et de soutien en cas de crise.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Urgence ou soins urgents?",
      type: "comparison",
      comparison: {
        left: {
          title:
            "Allez aux urgences tout de suite pour des problèmes comme :",
          items: [
            "Douleur à la poitrine, grande difficulté à respirer ou signes d'AVC",
            "Saignement grave, blessure majeure ou perte de conscience",
            "Confusion soudaine, convulsion ou réaction allergique grave",
            "Une urgence de sécurité où attendre pourrait mettre la vie ou un membre en danger",
          ],
        },
        right: {
          title:
            "Commencez par les soins urgents, Health811 ou une clinique le jour même pour des problèmes comme :",
          items: [
            "Entorses, petites coupures, éruptions cutanées, douleur à l'oreille ou fièvre sans signes d'alarme d'urgence",
            "Problèmes de renouvellement d'ordonnance qui ne peuvent pas attendre un rendez-vous régulier",
            "Questions pour savoir si vous avez besoin de soins urgents ce soir",
            "Un problème qui semble urgent, mais pas clairement une menace pour la vie",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Situations courantes après les heures d'ouverture",
      type: "table",
      columns: ["Situation", "Bonne première étape", "À retenir"],
      rows: [
        {
          cells: [
            "Je ne sais pas à quel point c'est urgent",
            "Appelez Health811",
            "Une infirmière peut vous aider à décider si vous restez à la maison, cherchez des soins urgents ou allez aux urgences.",
          ],
        },
        {
          cells: [
            "Mon médecin est fermé et j'ai besoin de conseils ce soir",
            "Health811 ou les conseils sur les soins urgents",
            "Ne supposez pas que les urgences sont votre seule option s'il n'y a pas de signes d'alarme d'urgence.",
          ],
        },
        {
          cells: [
            "J'ai besoin de soins pour mon enfant",
            "Utilisez les mêmes signes d'alarme d'urgence, puis cherchez des soins le jour même ou appelez Health811 en cas de doute",
            "Apportez la carte Santé de l'enfant, la liste de médicaments et la chronologie des symptômes si possible.",
          ],
        },
        {
          cells: [
            "J'ai besoin d'aide en santé mentale ce soir",
            "Appelez ou textez le 9-8-8 (Ligne d'aide en cas de crise de suicide), ou appelez la ligne de crise AMHS-KFLA, ouverte 24 h/24, 7 j/7",
            "S'il y a un risque immédiat pour la sécurité, appelez le 911.",
          ],
        },
      ],
      caption:
        "Ce tableau donne des conseils généraux seulement. Si quelqu'un peut être en danger immédiat, appelez le 911.",
    },
    {
      id: "kingston-start-points",
      title: "Points de départ à Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Service des urgences",
          content:
            "Utilisez les urgences pour les problèmes qui menacent la vie ou qui pourraient la menacer.",
          icon: "alert",
          link: {
            text: "Fiches urgences et soins urgents",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Centre de soins urgents",
          content:
            "Utile pour bien des problèmes le jour même qui ne peuvent pas attendre, mais qui ne sont pas des urgences claires.",
          icon: "clock",
          link: {
            text: "Soins urgents et le jour même",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Conseils d'une infirmière par téléphone ou en ligne si vous ne savez pas où aller. Le soutien téléphonique est offert dans de nombreuses langues.",
          icon: "info",
          link: { text: "Fiche Health811", url: "/local-services/health811" },
        },
        {
          title: "Soutien en cas de crise de santé mentale",
          content:
            "Appelez ou textez le 9-8-8 (Ligne d'aide en cas de crise de suicide) à tout moment, ou utilisez le soutien de crise local comme la ligne de crise AMHS-KFLA, ouverte 24 h/24, 7 j/7.",
          icon: "heart",
          link: { text: "Fiches en santé mentale", url: "/local-services?category=mental-health" },
        },
        {
          title: "Soutien après une violence sexuelle",
          content:
            "Utilisez le soutien de crise spécialisé si vous avez besoin de soutien émotionnel immédiat, d'accompagnement ou d'un plan de sécurité.",
          icon: "shield",
          link: {
            text: "Fiches de soutien",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Options urgentes pour étudiants",
          content:
            "Si vous êtes étudiant, vérifiez si le service de santé de votre campus est le meilleur premier arrêt pour les besoins qui ne sont pas des urgences.",
          icon: "stethoscope",
          link: { text: "Fiches de santé étudiante", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Si vous hésitez encore",
      type: "callout",
      content:
        "Quand le problème n'est pas clairement une menace pour la vie, mais que l'attente vous inquiète, commencez par Health811. Si quelqu'un n'est peut-être pas en sécurité, si son état pourrait s'aggraver vite ou si vous ne pouvez pas obtenir la bonne aide à temps, utilisez les services d'urgence.",
      link: { text: "Appeler Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Apportez ceci si vous le pouvez",
      type: "checklist",
      items: [
        "Carte Santé, papiers du Programme fédéral de santé intérimaire (IFHP) ou toute carte d'assurance que vous avez",
        "Une liste de médicaments ou des photos des bouteilles de médicaments",
        "L'heure où les symptômes ont commencé et tout ce qui les a aggravés",
        "Vos besoins d'interprète notés par écrit, au cas où le stress vous ferait oublier",
        "Un chargeur de téléphone et une personne de soutien si cela vous aide",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Trouver des soins primaires",
  description:
    "Découvrez les différents chemins vers des soins de santé réguliers à Kingston si vous n'avez pas encore de fournisseur.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title:
        "Ontario : Trouver un médecin de famille ou une infirmière praticienne",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Conseils officiels sur Accès Soins (Health Care Connect).",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Information officielle sur les services des centres de santé communautaire locaux.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Information officielle sur la santé étudiante pour les étudiants de Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Information officielle sur la santé étudiante pour les étudiants du St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Ce que veulent dire les soins primaires",
      type: "default",
      content:
        "Les soins primaires, c'est l'endroit où vous allez habituellement en premier pour vos besoins de santé courants. Cela comprend les bilans de santé, les renouvellements de médicaments, les soins pour les maladies chroniques, les demandes de consultation (références), les soins préventifs et le suivi après un problème urgent.\n\nÀ Kingston, votre parcours régulier de soins primaires peut passer par un médecin de famille, une infirmière praticienne ou un infirmier praticien, un centre de santé communautaire, une clinique de campus, ou une combinaison d'options temporaires en attendant des soins plus stables.",
    },
    {
      id: "access-matrix",
      title: "Chemins d'accès aux soins primaires",
      type: "table",
      columns: ["Chemin", "Idéal pour", "Qui peut l'utiliser", "Comment commencer"],
      rows: [
        {
          cells: [
            "Médecin de famille ou infirmière praticienne",
            "Soins réguliers continus et planification de la santé à long terme",
            "Les patients qui peuvent s'inscrire auprès d'un fournisseur",
            "Utilisez Accès Soins (Health Care Connect) et surveillez les ouvertures locales",
          ],
        },
        {
          cells: [
            "Centre de santé communautaire",
            "Soins communautaires, soutien à faible barrière et certains soins pour nouveaux arrivants ou besoins complexes",
            "L'admissibilité dépend du programme et du statut d'admission",
            "Communiquez directement avec l'organisme et demandez comment fonctionne l'admission",
          ],
        },
        {
          cells: [
            "Service de santé étudiant",
            "Accès plus rapide pour les étudiants inscrits",
            "Seulement les étudiants admissibles par leur école",
            "Utilisez le service de santé ou de mieux-être de votre campus",
          ],
        },
        {
          cells: [
            "Clinique sans rendez-vous ou soins urgents le jour même",
            "Soins à court terme pendant l'attente ou quand votre fournisseur régulier n'est pas disponible",
            "Grand public, selon les règles d'admission quotidiennes",
            "Vérifiez l'accès actuel avant d'y aller",
          ],
        },
        {
          cells: [
            "Soins primaires virtuels",
            "Certains renouvellements, conseils et problèmes courants",
            "Varie selon le fournisseur et la couverture",
            "Vérifiez ce que le fournisseur peut gérer en ligne de façon sécuritaire, et ce qu'il ne peut pas",
          ],
        },
      ],
      caption:
        "Le meilleur chemin dépend de votre admissibilité, de l'urgence et de votre besoin de soins à court terme ou continus.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Si vous n'avez pas de fournisseur régulier",
      type: "steps",
      items: [
        "Inscrivez-vous par le chemin provincial officiel: Utilisez Accès Soins (Health Care Connect) si vous n'avez pas de médecin de famille ni d'infirmière praticienne.",
        "Vérifiez si vous êtes admissible aux options de campus ou communautaires: Les étudiants devraient commencer par la clinique de leur école. Certains services de santé communautaires ont des priorités d'admission particulières.",
        "Faites-vous un plan temporaire sécuritaire: Sachez quels services sans rendez-vous, urgents, virtuels, de pharmacie et de santé mentale vous pouvez utiliser en attendant.",
        "Gardez vos propres dossiers: Conservez les listes de médicaments, les résultats d'examens, les demandes de consultation et les noms des cliniciens que vous avez vus.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Quoi faire pendant l'attente",
      type: "checklist",
      items: [
        "Utilisez les soins sans rendez-vous, urgents ou virtuels pour les besoins à court terme quand c'est approprié",
        "Demandez à la pharmacie quelle aide pour les renouvellements ou quels soins pour affections mineures sont offerts",
        "Gardez une seule liste de médicaments à jour et apportez-la à chaque visite",
        "Apportez des copies des résultats importants ou des papiers de congé quand vos soins sont morcelés",
        "Utilisez la même clinique pour le suivi quand c'est possible, pour des soins un peu plus constants",
      ],
    },
    {
      id: "next-best-option",
      title: "Si votre besoin est urgent, mais que ce n'est pas une urgence",
      type: "callout",
      content:
        "Ne pas avoir de médecin de famille ne veut pas dire que vous devriez retarder des soins importants. Utilisez la bonne option à court terme pour le problème devant vous, puis faites un plan pour la continuité des soins une fois le problème urgent traité.",
      link: { text: "Chercher des options de soins primaires", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Coûts et couverture",
  description:
    "Des conseils en langage simple sur la couverture : Assurance-santé de l'Ontario (OHIP), Programme fédéral de santé intérimaire (IFHP), Régime canadien de soins dentaires, régimes étudiants ou privés, et frais courants à payer de votre poche.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario : Demander l'OHIP et obtenir une carte Santé",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Conseils officiels sur l'OHIP.",
    },
    {
      title: "Canada : Programme fédéral de santé intérimaire",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Information officielle sur la couverture de l'IFHP.",
    },
    {
      title: "Programme de médicaments de l'Ontario (Ontario Drug Benefit)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Conseils officiels sur la couverture provinciale des médicaments.",
    },
    {
      title:
        "Ontario : Obtenir de l'aide pour les coûts élevés de médicaments sur ordonnance",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Conseils officiels sur le Programme de médicaments Trillium.",
    },
    {
      title: "Canada : Régime canadien de soins dentaires",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Information officielle sur le programme fédéral de couverture dentaire et l'admissibilité.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Les bases de la couverture",
      type: "default",
      content:
        "La couverture en Ontario dépend de votre statut légal, de votre âge, de votre revenu, de votre admissibilité aux programmes et de la présence d'un régime d'assurance scolaire ou privé.\n\nBeaucoup de services médicalement nécessaires des médecins et des hôpitaux sont couverts pour les patients admissibles à l'Assurance-santé de l'Ontario (OHIP). Cela ne veut **pas** dire que tout est gratuit. Les médicaments, les soins dentaires, les soins de la vue, les formulaires, les billets de maladie et plusieurs services paramédicaux demandent souvent une couverture séparée ou un paiement de votre poche.\n\nBonne nouvelle si vous venez d'arriver : il n'y a **aucun délai d'attente pour l'OHIP**. Si vous êtes admissible, vous pouvez faire la demande dès votre arrivée en Ontario, et la couverture commence une fois votre demande approuvée. N'attendez pas d'être malade pour faire la demande.",
    },
    {
      id: "coverage-matrix",
      title: "Les chemins de couverture en un coup d'œil",
      type: "table",
      columns: [
        "Type de couverture",
        "Aide habituellement pour",
        "Ce qui peut quand même ne pas être couvert",
        "Quoi faire ensuite",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Beaucoup de services médicalement nécessaires des médecins et des hôpitaux",
            "Beaucoup de médicaments, les soins dentaires, les soins de la vue et les formulaires",
            "Faites la demande si vous êtes admissible et gardez votre carte à jour",
          ],
        },
        {
          cells: [
            "IFHP",
            "Couverture pour les réfugiés admissibles et les demandeurs d'asile selon le programme fédéral",
            "Les détails varient selon la catégorie et le service",
            "Consultez le guide officiel de l'IFHP et demandez à la clinique ou à la pharmacie si elle l'accepte",
          ],
        },
        {
          cells: [
            "Assurance scolaire ou privée",
            "Aide souvent pour les médicaments, le counseling, les soins dentaires, les soins de la vue et les services paramédicaux",
            "Les limites de couverture, les quotes-parts et les règles de réseau varient",
            "Lisez le livret du régime avant de supposer qu'un service est couvert",
          ],
        },
        {
          cells: [
            "Régime canadien de soins dentaires (RCSD)",
            "Couverture dentaire pour les résidents admissibles qui n'ont pas accès à une assurance dentaire privée et dont le revenu familial ajusté est de moins de 90 000 $",
            "Tous les soins ne sont pas couverts, et une quote-part peut s'appliquer selon le revenu",
            "Vérifiez l'admissibilité et faites la demande sur la page officielle du RCSD du gouvernement du Canada",
          ],
        },
        {
          cells: [
            "Aucune couverture active",
            "Vous pouvez quand même avoir accès à certains services, mais des frais peuvent s'appliquer",
            "Les coûts peuvent être importants pour les visites, les examens ou les médicaments",
            "Demandez les frais avant la visite et cherchez des options communautaires quand c'est approprié",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Ce qui n'est souvent pas couvert en entier",
      type: "checklist",
      items: [
        "Beaucoup de médicaments sur ordonnance, sauf si vous êtes admissible à un programme public ou si vous avez un autre régime",
        "Les soins dentaires, sauf si vous êtes admissible au Régime canadien de soins dentaires, à Beaux sourires Ontario, à un programme dentaire communautaire ou à un régime d'avantages sociaux",
        "Les soins de la vue, en dehors de certains chemins d'admissibilité précis",
        "La physiothérapie, le counseling, les massages et d'autres services paramédicaux, sauf si un programme ou un régime les couvre",
        "Les formulaires, les lettres, les frais de rendez-vous manqué et plusieurs autres frais administratifs",
      ],
    },
    {
      id: "drug-coverage",
      title: "Les chemins de couverture des médicaments",
      type: "default",
      content:
        "La couverture des médicaments est souvent ce qui surprend les nouveaux arrivants. Une visite chez le médecin peut être couverte, mais l'ordonnance peut quand même coûter de l'argent.\n\nLes programmes publics de médicaments peuvent aider selon l'âge, le revenu et l'admissibilité. Le **Programme de médicaments de l'Ontario (Ontario Drug Benefit)** couvre beaucoup de médicaments pour les personnes de 65 ans et plus et les personnes dans certains programmes, et **OHIP+** couvre beaucoup d'ordonnances pour les personnes de 24 ans et moins qui n'ont pas de régime privé. L'Ontario offre aussi le **Programme de médicaments Trillium** pour certaines personnes dont les coûts d'ordonnances sont élevés par rapport au revenu du ménage. Si vous avez un régime scolaire ou privé, vérifiez s'il se coordonne avec la couverture publique ou s'il la remplace.",
    },
    {
      id: "coverage-scenarios",
      title: "Questions courantes sur la couverture",
      type: "faq",
      faqs: [
        {
          question: "Je n'ai pas encore l'OHIP. Puis-je quand même recevoir des soins?",
          answer:
            "Oui, mais des frais peuvent s'appliquer, et le meilleur chemin dépend de votre statut et de l'urgence. Demandez les coûts avant des soins non urgents quand c'est possible, et vérifiez votre admissibilité à l'IFHP ou à un régime scolaire ou privé si cela s'applique à vous.",
        },
        {
          question: "Je suis étudiant international. L'OHIP est-elle ma seule option?",
          answer:
            "Pas toujours. Beaucoup d'étudiants comptent sur un régime d'assurance scolaire ou privé plutôt que sur l'OHIP. Utilisez les documents officiels du régime de votre école et les services de santé étudiants pour confirmer ce qui est couvert.",
        },
        {
          question: "Mon médicament sera-t-il gratuit si mon rendez-vous était couvert?",
          answer:
            "Pas nécessairement. La couverture du rendez-vous et la couverture de l'ordonnance sont souvent séparées.",
        },
        {
          question: "Les soins dentaires sont-ils couverts?",
          answer:
            "Les soins dentaires sont séparés de l'OHIP pour la plupart des adultes. Le Régime canadien de soins dentaires fédéral couvre maintenant beaucoup de résidents qui n'ont pas d'assurance dentaire privée et dont le revenu familial ajusté est de moins de 90 000 $ — il faut habituellement avoir produit une déclaration de revenus canadienne pour être admissible. Les enfants des familles à plus faible revenu peuvent être admissibles à Beaux sourires Ontario, et Kingston a une clinique dentaire communautaire pour les personnes dans certains programmes.",
        },
        {
          question: "Comment savoir si un service est public, communautaire ou privé?",
          answer:
            "Utilisez les filtres du répertoire et regardez les détails de la fiche. En cas de doute, communiquez avec le service avant de réserver.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Votre visite de soins de santé",
  description:
    "Quoi apporter, comment poser vos questions et comment communiquer de façon sécuritaire pendant une visite de soins de santé.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario : Les soins de santé en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Conseils généraux sur le système.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Quoi apporter",
      type: "checklist",
      items: [
        "Votre carte Santé, vos papiers du Programme fédéral de santé intérimaire (IFHP) ou d'autres renseignements d'assurance",
        "Une liste complète de médicaments, y compris les vitamines et les médicaments en vente libre",
        "Le nom de vos symptômes, quand ils ont commencé et ce qui a changé",
        "Les questions auxquelles vous voulez une réponse avant de partir",
        "Toute réquisition (formulaire de demande d'examen), demande de consultation, papier de congé ou résultat d'examen récents",
        "Vos besoins d'interprète notés par écrit pour ne pas oublier de demander",
      ],
    },
    {
      id: "during-the-visit",
      title: "Pendant la visite",
      type: "steps",
      items: [
        "Commencez par votre problème principal: Beaucoup de rendez-vous sont courts, alors commencez par ce qui compte le plus aujourd'hui.",
        "Utilisez un langage simple: C'est correct de dire « Je ne comprends pas ce mot » ou « Pouvez-vous l'expliquer plus simplement? »",
        "Répétez le plan à voix haute: Avant de partir, dites les prochaines étapes à voix haute pour savoir si vous avez besoin d'un examen, d'une demande de consultation, d'un renouvellement ou d'un rendez-vous de suivi.",
        "Demandez quoi faire si les choses empirent: Vous devriez savoir quand rappeler, quand utiliser les soins urgents et quand utiliser les urgences.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Aide pour l'interprétation et la communication",
      type: "default",
      content:
        "Si vous avez besoin d'aide linguistique, demandez-la tôt. N'attendez pas la fin du rendez-vous. Vous pouvez lire ce site en plusieurs langues avec le menu Langue, mais la traduction du site ne devrait pas remplacer le soutien d'un interprète pour les décisions de traitement, les consignes de médicaments ou le consentement.\n\nVous pouvez dire : **« J'ai besoin d'un interprète, s'il vous plaît. »** Health811 (composez le 811) offre aussi du soutien téléphonique dans de nombreuses langues. Si une personne de soutien vous accompagne, rappelez-vous qu'un membre de la famille n'est pas toujours la meilleure personne, ni la plus sûre, pour interpréter de l'information médicale complexe ou délicate.",
    },
    {
      id: "questions-to-ask",
      title: "Des questions qui valent la peine d'être posées",
      type: "checklist",
      items: [
        "Que pensez-vous qu'il se passe?",
        "Que devrais-je faire ensuite?",
        "Ai-je besoin d'un examen, d'une réquisition, d'une demande de consultation ou d'une visite de suivi?",
        "Quand devrais-je m'attendre à recevoir les résultats?",
        "Quels signes d'alarme veulent dire que je devrais rappeler ou obtenir de l'aide urgente?",
      ],
    },
    {
      id: "privacy",
      title: "Confidentialité et consentement",
      type: "default",
      content:
        "Vos renseignements de santé sont sensibles. Si vous ne savez pas qui verra vos renseignements, demandez-le. Si vous ne comprenez pas un formulaire, une conversation sur le consentement ou un plan de traitement, ralentissez le processus et demandez une explication plus claire.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Après la visite",
  description:
    "Apprenez ce qui se passe après une visite, y compris les réquisitions, les résultats d'examens, les demandes de consultation et quand rappeler.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Information sur le réseau hospitalier local.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Information sur le processus des laboratoires communautaires et le portail des patients.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Ce qui se passe souvent après une visite",
      type: "steps",
      items: [
        "Vous partez avec un plan: Cela peut inclure un médicament, une réquisition (formulaire de demande d'examen), une demande de consultation (référence), un rendez-vous de suivi ou des consignes pour surveiller des signes d'alarme.",
        "Vous devrez peut-être faire la prochaine étape vous-même: Par exemple, vous devrez peut-être réserver une prise de sang, de l'imagerie, un ramassage à la pharmacie ou une visite de suivi.",
        "Les résultats retournent habituellement au clinicien qui les a demandés: Le laboratoire ou le site d'imagerie ne vous expliquera peut-être pas le résultat sur place.",
        "Vous ne recevrez peut-être pas d'appel pour chaque résultat normal: Demandez quel est le processus de suivi de la clinique pour savoir à quoi vous attendre.",
      ],
    },
    {
      id: "common-terms",
      title: "Termes courants après une visite",
      type: "table",
      columns: [
        "Terme",
        "Ce que cela veut dire en langage simple",
        "Ce que vous faites habituellement ensuite",
      ],
      rows: [
        {
          cells: [
            "Réquisition",
            "Un formulaire qui indique au laboratoire ou à la clinique d'imagerie quel examen il vous faut",
            "Réservez ou passez l'examen et gardez une copie si vous le pouvez",
          ],
        },
        {
          cells: [
            "Demande de consultation (référence)",
            "Une demande d'un clinicien à un autre service ou à un spécialiste",
            "Attendez qu'on vous contacte, puis rappelez si on vous a dit de faire un suivi et que rien ne se passe",
          ],
        },
        {
          cells: [
            "Suivi",
            "Une vérification après un traitement, des examens ou un changement de symptômes",
            "Demandez quand et comment le suivi devrait se faire avant de partir",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Quand rappeler",
      type: "checklist",
      items: [
        "Vous ne comprenez pas la réquisition, la demande de consultation ou les consignes de médicaments",
        "On vous a dit que quelqu'un vous contacterait et vous n'avez pas eu de nouvelles dans le délai prévu",
        "Vos symptômes empirent ou ne s'améliorent pas comme on vous l'avait dit",
        "La pharmacie, le laboratoire ou la clinique d'imagerie vous a dit qu'il manque quelque chose dans les papiers",
        "Vous pensez qu'un résultat a peut-être été manqué ou vous êtes encore inquiet",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Scénarios courants",
      type: "faq",
      faqs: [
        {
          question: "J'ai besoin d'une prise de sang après une visite. Que faire?",
          answer:
            "Vérifiez si vous avez une réquisition et si le laboratoire demande une réservation. Utilisez ensuite le répertoire pour trouver un laboratoire. Apportez la réquisition et vos renseignements de couverture.",
        },
        {
          question: "Je ne comprends pas la réquisition ou le formulaire de demande de consultation.",
          answer:
            "Appelez la clinique qui vous l'a donné et demandez une explication en langage simple. C'est raisonnable de demander à quoi sert le formulaire, où il doit aller et si vous devez réserver quelque chose vous-même.",
        },
        {
          question: "Qui fait le suivi des résultats d'examens?",
          answer:
            "Habituellement le clinicien qui a demandé l'examen. Demandez à son bureau quel est le processus habituel pour les résultats normaux et anormaux.",
        },
        {
          question: "Combien de temps prennent les demandes de consultation?",
          answer:
            "Les délais varient beaucoup. Demandez quel genre d'attente est normal pour votre situation et quoi faire si vous n'avez pas de nouvelles.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Prochaines étapes utiles",
      type: "grid",
      gridItems: [
        {
          title: "Trouver des laboratoires et de l'imagerie",
          content:
            "Utilisez le répertoire pour les fiches de prises de sang, radiographies, échographies et imagerie.",
          icon: "file",
          link: { text: "Laboratoires et imagerie", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Trouver une pharmacie",
          content:
            "Utilisez le répertoire pour les pharmacies, l'aide aux renouvellements et le soutien lié aux médicaments.",
          icon: "shield",
          link: { text: "Pharmacies", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Besoin de planifier les soins de suivi?",
          content:
            "Utilisez la page des soins primaires si vous ne savez pas où le suivi à long terme devrait se faire.",
          icon: "stethoscope",
          link: { text: "Trouver des soins primaires", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Médicaments et pharmacies",
  description:
    "Comprenez les ordonnances, les renouvellements, l'aide du pharmacien et comment payer les médicaments en Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario : Ce que les pharmaciens peuvent faire",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Information officielle provinciale sur les pharmaciens et les pharmacies.",
    },
    {
      title: "Programme de médicaments de l'Ontario (Ontario Drug Benefit)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Conseils officiels sur la couverture provinciale des médicaments.",
    },
    {
      title:
        "Ontario : Obtenir de l'aide pour les coûts élevés de médicaments sur ordonnance",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Conseils officiels sur le Programme de médicaments Trillium.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Comment un pharmacien peut aider",
      type: "default",
      content:
        "Les pharmaciens font plus que remettre des médicaments. Ils peuvent expliquer comment prendre un médicament de façon sécuritaire, vérifier les interactions et passer en revue les effets secondaires.\n\nEn Ontario, les pharmaciens peuvent aussi **évaluer et prescrire pour 19 affections mineures courantes** — y compris la conjonctivite, les feux sauvages (herpès labial), les infections urinaires (chez les femmes), les piqûres d'insectes et les allergies saisonnières. L'évaluation est gratuite avec votre carte Santé de l'Ontario, et la liste des affections pourrait continuer de s'allonger.\n\nLa pharmacie est aussi un des meilleurs endroits pour poser des questions pratiques comme : **Ce renouvellement est-il urgent? Y a-t-il une option moins chère? Que faire si j'ai oublié une dose?**",
    },
    {
      id: "fill-a-prescription",
      title: "Comment faire remplir une ordonnance",
      type: "steps",
      items: [
        "Obtenez l'ordonnance: Elle peut être sur papier, envoyée par télécopieur ou transmise électroniquement.",
        "Choisissez la pharmacie: Utiliser la même pharmacie régulièrement l'aide à repérer les interactions entre médicaments et les problèmes dans l'historique des renouvellements.",
        "Demandez le délai et le coût: La pharmacie peut vous dire quand ce sera prêt et si votre régime le couvre.",
        "Écoutez les conseils du pharmacien: Demandez à quoi sert le médicament, comment le prendre et quand rappeler s'il n'aide pas.",
      ],
    },
    {
      id: "refill-options",
      title: "Problèmes de renouvellement et de médicaments",
      type: "table",
      columns: ["Situation", "Bonne première étape", "Pourquoi"],
      rows: [
        {
          cells: [
            "J'ai besoin d'un renouvellement de routine",
            "Commencez par votre pharmacie habituelle ou votre clinicien régulier",
            "Ils peuvent vous dire s'il faut un renouvellement, une nouvelle ordonnance ou un nouveau rendez-vous",
          ],
        },
        {
          cells: [
            "Mon médecin n'est pas disponible et je risque de manquer de médicament",
            "Demandez à la pharmacie quelles options existent, puis utilisez les soins sans rendez-vous, virtuels ou urgents au besoin",
            "La prochaine étape la plus sécuritaire dépend du médicament et de votre situation",
          ],
        },
        {
          cells: [
            "Je ne comprends pas comment prendre ce médicament",
            "Demandez au pharmacien de l'expliquer encore une fois en langage simple",
            "Cela fait partie de l'usage sécuritaire des médicaments",
          ],
        },
        {
          cells: [
            "Le médicament coûte trop cher",
            "Demandez s'il existe une version générique, et renseignez-vous sur la couverture de votre régime et les programmes publics",
            "Les coûts des médicaments varient et la couverture est souvent séparée de la visite elle-même",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Comment les médicaments peuvent être payés",
      type: "checklist",
      items: [
        "Un programme public de médicaments, si vous y êtes admissible",
        "Un régime d'assurance scolaire ou privé",
        "Une combinaison de couverture publique et privée",
        "De votre poche, si aucun programme ne couvre le médicament",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Besoin d'aide d'une pharmacie locale?",
      type: "callout",
      content:
        "Utilisez le répertoire pour trouver des pharmacies, de l'aide pour les renouvellements et des options virtuelles ou le jour même quand vous essayez de régler un problème de médicament rapidement.",
      link: { text: "Chercher des fiches de pharmacies", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Soutien en santé mentale",
  description:
    "Santé mentale locale, counseling, soutien aux jeunes et parcours de crise à Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8 : Ligne d'aide en cas de crise de suicide",
      url: "https://988.ca/",
      note: "Ligne nationale officielle d'aide en cas de crise de suicide. Appelez ou textez le 9-8-8, gratuit, 24 h/24, 7 j/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Information officielle sur la santé mentale des adultes et le soutien en cas de crise.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Ligne d'aide officielle de l'Ontario en santé mentale et en dépendance.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Information officielle sur la santé mentale des enfants et des jeunes.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Si quelqu'un n'est peut-être pas en sécurité",
      type: "callout",
      content:
        "S'il y a un risque immédiat pour la vie ou la sécurité, appelez le 911. Pour des pensées suicidaires ou une détresse accablante, vous pouvez **appeler ou texter le 9-8-8** (Ligne d'aide en cas de crise de suicide) à tout moment — c'est gratuit, confidentiel et offert 24 h/24, 7 j/7, en français et en anglais. Vous pouvez aussi appeler la ligne de crise AMHS-KFLA, ouverte 24 h/24, 7 j/7, au 613-544-4229. N'attendez pas un rendez-vous régulier.",
      link: { text: "Fiches en santé mentale", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Types de soutien",
      type: "grid",
      gridItems: [
        {
          title: "Soutien en cas de crise",
          content:
            "Utilisez-le pour une détresse immédiate, des inquiétudes pour la sécurité ou quand attendre n'est pas sécuritaire.",
          icon: "alert",
        },
        {
          title: "Soutien urgent",
          content:
            "Utilisez-le quand la situation est sérieuse et que vous avez besoin d'aide bientôt, mais que ce n'est pas une urgence vitale immédiate.",
          icon: "clock",
        },
        {
          title: "Counseling régulier",
          content:
            "Utilisez-le pour l'anxiété qui dure, la dépression, le stress, le deuil, les problèmes relationnels ou les transitions de vie.",
          icon: "heart",
        },
        {
          title: "Services pour enfants et jeunes",
          content:
            "Utilisez des services de santé mentale spécialisés pour les jeunes quand la personne qui a besoin de soins est un enfant ou un adolescent.",
          icon: "info",
        },
        {
          title: "Soutien sur le campus",
          content:
            "Les étudiants sont souvent mieux servis en commençant par les services de mieux-être ou de counseling de leur campus.",
          icon: "stethoscope",
        },
        {
          title: "Soutien après une violence sexuelle",
          content:
            "Utilisez un soutien spécialisé pour la crise, le counseling, l'accompagnement et la planification de la sécurité après une violence sexuelle.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Par où commencer dans des situations courantes",
      type: "table",
      columns: ["Situation", "Meilleur premier arrêt", "Pourquoi"],
      rows: [
        {
          cells: [
            "J'ai besoin d'aide en santé mentale ce soir",
            "Appelez ou textez le 9-8-8, appelez la ligne de crise AMHS-KFLA, ou utilisez les urgences si la sécurité est en jeu",
            "N'attendez pas un rendez-vous régulier quand la situation semble dangereuse",
          ],
        },
        {
          cells: [
            "J'ai besoin de counseling, mais je suis en sécurité en ce moment",
            "Counseling communautaire, médecin de famille, infirmière praticienne ou soutien d'un régime privé",
            "Ils peuvent aider pour les soins continus et les demandes de consultation",
          ],
        },
        {
          cells: [
            "J'ai besoin d'aide pour mon enfant",
            "Services de santé mentale pour enfants ou jeunes et, au besoin, les conseils urgents",
            "Les enfants et les jeunes ont souvent des parcours séparés",
          ],
        },
        {
          cells: [
            "Je suis étudiant",
            "La santé ou le counseling du campus d'abord, sauf si la situation est dangereuse ou grave",
            "Les services du campus peuvent être la porte d'entrée la plus rapide pour les étudiants",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Questions courantes",
      type: "faq",
      faqs: [
        {
          question: "Qui puis-je appeler ou texter maintenant?",
          answer:
            "Appelez ou textez le **9-8-8** (Ligne d'aide en cas de crise de suicide) à tout moment, gratuitement, 24 h/24, 7 j/7 — aucune référence nécessaire. À Kingston, la ligne de crise AMHS-KFLA au 613-544-4229 répond aussi 24 h/24, 7 j/7. Si la sécurité est en danger immédiat, appelez le 911.",
        },
        {
          question: "Et si je ne sais pas si c'est vraiment une crise?",
          answer:
            "Si quelqu'un n'est peut-être pas en sécurité, n'attendez pas d'en être certain. Utilisez le soutien de crise ou les services d'urgence.",
        },
        {
          question: "Et si j'ai besoin d'aide ce soir, mais que je ne sais pas qui appeler?",
          answer:
            "Utilisez la page du répertoire local en santé mentale ou le parcours de soutien en cas de crise plutôt que d'attendre au matin.",
        },
        {
          question: "Et si la personne qui a besoin d'aide est mon enfant?",
          answer:
            "Cherchez précisément des services pour enfants et jeunes. Les parcours de santé mentale pour les jeunes sont souvent différents des soins pour adultes.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Dépistage et prévention",
  description:
    "Apprenez les bases des soins préventifs, des vaccins et du dépistage en Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Information locale sur les vaccins et la santé publique.",
    },
    {
      title: "Ontario : Les soins de santé en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Conseils généraux sur les soins de santé.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Pourquoi les soins préventifs comptent",
      type: "default",
      content:
        "Les soins préventifs visent à détecter les problèmes tôt ou à les empêcher de devenir plus graves. Cela comprend les vaccins, les tests de dépistage, les vérifications régulières de la tension artérielle et les conversations sur les facteurs de risque avec un clinicien.",
    },
    {
      id: "common-prevention",
      title: "Tâches de prévention courantes",
      type: "checklist",
      items: [
        "Gardez vos vaccins à jour",
        "Demandez si des tests de dépistage sont recommandés pour votre âge ou vos antécédents de santé",
        "Apportez vos questions sur la tension artérielle, le diabète ou d'autres facteurs de risque à vos visites de routine",
        "Utilisez les ressources de santé publique quand vous avez besoin d'information sur les vaccins ou la prévention",
      ],
    },
    {
      id: "prevention-next",
      title: "Besoin de services de prévention locaux?",
      type: "callout",
      content:
        "Utilisez le répertoire des services locaux pour les fiches de santé publique, de dépistage et de pharmacie si vous avez besoin d'un point de départ concret à Kingston.",
      link: {
        text: "Fiches de santé publique et de pharmacies",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Soins paramédicaux et communautaires",
  description:
    "Utilisez cette page pour comprendre les soins à domicile, les soins dentaires, la réadaptation, le counseling, le soutien pour la vue, et ce qui peut être public, communautaire, étudiant ou privé.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Santé à domicile Ontario (Ontario Health atHome)",
      url: "https://ontariohealthathome.ca/",
      note: "Information officielle sur la coordination des soins à domicile et en milieu communautaire.",
    },
    {
      title: "Canada : Régime canadien de soins dentaires",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Information officielle sur le programme fédéral de couverture dentaire et l'admissibilité.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Information officielle sur les services communautaires et dentaires.",
    },
    {
      title: "Fondation INCA (CNIB)",
      url: "https://www.cnib.ca/",
      note: "Information officielle sur le soutien pour la vue.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Ce que veulent dire soins paramédicaux et communautaires",
      type: "default",
      content:
        "Les soins paramédicaux, ce sont des soins donnés par des professionnels comme les physiothérapeutes, les ergothérapeutes, les diététistes, les travailleurs sociaux, les conseillers, les dentistes ou les équipes de soutien pour la vue. Les soins communautaires, ce sont souvent des soins donnés en dehors de l'hôpital, parfois chez vous, à l'école, en clinique ou dans un programme communautaire.",
    },
    {
      id: "access-payment-matrix",
      title: "Tableau de l'accès et du paiement",
      type: "table",
      columns: ["Voie", "Exemples", "Comment le paiement fonctionne habituellement", "Comment commencer"],
      rows: [
        {
          cells: [
            "Soins à domicile et communautaires financés par les fonds publics",
            "Soins infirmiers à domicile, thérapie à domicile, coordination des soins",
            "Des programmes publics peuvent s'appliquer si vous respectez les règles du programme",
            "Commencez par une demande de consultation (référence) d'un clinicien ou par la voie officielle des soins à domicile",
          ],
        },
        {
          cells: [
            "Services communautaires",
            "Soins dentaires d'un centre de santé communautaire ou soutiens à faible barrière",
            "Un financement public ou communautaire peut s'appliquer selon le service",
            "Communiquez directement avec le programme et demandez l'admissibilité",
          ],
        },
        {
          cells: [
            "Soutiens en milieu scolaire",
            "Counseling de campus ou soutiens liés à la santé",
            "Habituellement liés à l'admissibilité étudiante et aux frais ou régimes étudiants",
            "Utilisez d'abord les pages officielles des services de votre école",
          ],
        },
        {
          cells: [
            "Soins paramédicaux privés",
            "Physiothérapie, counseling, massothérapie, soins dentaires privés, services privés pour la vue",
            "Souvent payés de votre poche, sauf si un autre régime les couvre",
            "Demandez tous les frais et les règles de couverture avant de réserver",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Exemples de soins paramédicaux et communautaires",
      type: "grid",
      gridItems: [
        {
          title: "Soins à domicile",
          content:
            "Utiles quand quelqu'un a besoin de soutien à la maison après une maladie, une blessure ou des soins hospitaliers.",
          icon: "clock",
          link: {
            text: "Fiches de soins à domicile",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Soins dentaires",
          content:
            "La couverture dentaire est séparée de la couverture médicale habituelle. Le Régime canadien de soins dentaires (RCSD) fédéral couvre maintenant beaucoup de personnes sans assurance dentaire privée, et des programmes comme Beaux sourires Ontario et les cliniques dentaires communautaires aident des groupes précis.",
          icon: "shield",
          link: {
            text: "Fiches dentaires et communautaires",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Réadaptation et thérapie",
          content:
            "La physiothérapie, l'ergothérapie et les services connexes peuvent être publics, communautaires ou privés selon votre parcours.",
          icon: "stethoscope",
          link: { text: "Fiches de soins paramédicaux", url: "/local-services?category=allied-community" },
        },
        {
          title: "Soutien pour la vue",
          content:
            "Le soutien pour la vue peut inclure des appareils, de l'aide à l'orientation et des soutiens communautaires, en plus des soins médicaux des yeux.",
          icon: "info",
          link: {
            text: "Fiches de soutien pour la vue",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Avant de réserver",
      type: "checklist",
      items: [
        "Demandez si une demande de consultation (référence) est nécessaire",
        "Demandez si le service est public, financé par la communauté ou payant (privé)",
        "Demandez les frais exacts et les règles d'annulation si le service est privé",
        "Vérifiez si votre régime scolaire ou privé couvre une partie du coût",
        "Demandez si vous devez apporter des dossiers, de l'imagerie ou un billet du médecin",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ et glossaire",
  description:
    "Situations courantes des nouveaux arrivants, questions pratiques et définitions en langage simple.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario : Les soins de santé en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Conseils provinciaux généraux sur les soins de santé.",
    },
    {
      title: "Ontario : Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Conseils officiels sur le service de conseils d'infirmières.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Situations courantes des nouveaux arrivants",
      type: "faq",
      faqs: [
        {
          question:
            "Je n'ai pas encore l'Assurance-santé de l'Ontario (OHIP). Que faire en premier?",
          answer:
            "Apprenez d'abord votre parcours de couverture, puis utilisez le répertoire local et les pages d'aide urgente pour faire un plan temporaire sécuritaire.",
        },
        {
          question: "Je suis étudiant international. Par où commencer?",
          answer:
            "Commencez par le service de santé ou de mieux-être de votre campus et les documents d'assurance de votre école, puis utilisez les services communautaires ou urgents quand cela ne suffit pas.",
        },
        {
          question: "J'ai besoin d'un interprète.",
          answer:
            "Demandez tôt. Vous pouvez lire ce site en 33 langues avec le menu Langue, et vous pouvez montrer au personnel les phrases rapides de l'onglet d'aide à l'interprétation. Pour les rendez-vous, les consignes de médicaments, le consentement et les discussions sur les examens, demandez un soutien d'interprète professionnel. Health811 (composez le 811) offre du soutien téléphonique dans de nombreuses langues.",
        },
        {
          question: "J'ai besoin d'une prise de sang après une visite.",
          answer:
            "Vérifiez que vous avez une réquisition (formulaire de demande d'examen), puis cherchez les laboratoires et l'imagerie dans le répertoire.",
        },
        {
          question: "J'ai besoin d'un renouvellement et mon médecin n'est pas disponible.",
          answer:
            "Commencez par votre pharmacie, puis utilisez les parcours sans rendez-vous, virtuels ou urgents selon le médicament et l'urgence.",
        },
        {
          question: "J'ai besoin de soins pour mon enfant.",
          answer:
            "Vérifiez d'abord les signes d'alarme d'urgence, puis utilisez les conseils sur les soins le jour même ou urgents. Les parcours de santé mentale pour enfants et jeunes sont souvent séparés des soins pour adultes.",
        },
        {
          question: "J'ai besoin d'aide en santé mentale ce soir.",
          answer:
            "Appelez ou textez le 9-8-8 (Ligne d'aide en cas de crise de suicide) à tout moment, ou appelez la ligne de crise AMHS-KFLA, ouverte 24 h/24, 7 j/7, au 613-544-4229. Utilisez les urgences si la sécurité est en jeu. N'attendez pas un rendez-vous régulier.",
        },
        {
          question: "Je ne comprends pas une réquisition ou une demande de consultation.",
          answer:
            "Appelez la clinique qui vous l'a donnée et demandez une explication en langage simple. Vous pouvez demander à quoi elle sert, où elle va et qui doit faire le suivi.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "D'autres questions courantes",
      type: "faq",
      faqs: [
        {
          question: "Puis-je simplement aller aux urgences si je n'ai pas de médecin?",
          answer:
            "Les urgences sont pour les urgences. Si le problème n'est pas clairement une menace pour la vie, commencez par la page d'aide urgente, Health811, une clinique sans rendez-vous ou d'autres soins le jour même.",
        },
        {
          question: "Et si je suis nouveau et que je ne sais pas quel service me convient?",
          answer:
            "Utilisez les filtres du répertoire pour les étudiants, les nouveaux arrivants, les enfants et les jeunes, le sans rendez-vous, le virtuel, la référence requise et le type de couverture.",
        },
        {
          question: "Et si l'information sur ce site semble périmée?",
          answer:
            "Utilisez le formulaire de signalement sur la page ou la fiche pour que la prochaine révision se concentre sur le changement que vous avez trouvé.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossaire",
      type: "checklist",
      items: [
        "Soins primaires: Votre parcours de soins habituel pour les besoins de santé courants et continus.",
        "Infirmière praticienne ou infirmier praticien (IP): Une infirmière ou un infirmier en pratique avancée qui peut évaluer, diagnostiquer, prescrire et faire des demandes de consultation dans bien des situations.",
        "Demande de consultation (référence): Une demande d'un clinicien à un autre service ou à un spécialiste.",
        "Réquisition: Un formulaire qui indique à un laboratoire ou à une clinique d'imagerie quel examen il vous faut.",
        "Triage: Le processus pour décider qui a besoin de soins urgents en premier, selon la sécurité et la gravité.",
        "Clinique sans rendez-vous: Une clinique qui peut voir des patients sans rendez-vous réservé, selon l'admission quotidienne.",
        "Soins urgents: Des soins le jour même pour des problèmes urgents qui ne sont pas clairement une menace pour la vie.",
        "Patient inscrit ou rattaché: Un patient qui a une relation continue avec un fournisseur régulier de soins primaires.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "À propos, fiabilité et confidentialité",
  description:
    "Découvrez comment ce guide fonctionne, comment les sources et le statut de révision sont gérés, et comment signaler des changements.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Notes sur les sources du projet",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Résumé public de la façon dont le projet gère la fiabilité et les sources.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "À quoi sert ce site",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca est un guide de navigation en soins de santé pour Kingston (Ontario), pensé d'abord pour les nouveaux arrivants. Il est conçu pour aider les gens à choisir la bonne prochaine étape, à comprendre les termes courants du système et à trouver des fiches de services locaux fiables.\n\nCe site n'est **pas** un outil de temps d'attente en direct, une plateforme de réservation ni un service de conseils médicaux.",
    },
    {
      id: "sources",
      title: "Comment la fiabilité et les sources fonctionnent",
      type: "default",
      content:
        "Nous essayons de lier les fiches locales aux pages officielles des services chaque fois que c'est possible. Chaque fiche montre un statut de révision et la date de la dernière révision. Certaines entrées sont entièrement vérifiées auprès de sources officielles. D'autres doivent encore être revérifiées localement, parce que les heures, l'admission ou les règles d'accès changent souvent.\n\nLes blocs de sources au niveau de la page montrent les principales références officielles utilisées pour le cycle de révision actuel.",
    },
    {
      id: "accessibility",
      title: "Accessibilité et langue",
      type: "default",
      content:
        "Ce site est conçu pour être utilisable au clavier, pensé d'abord pour le mobile et lisible en langage simple.\n\nVous pouvez lire le guide au complet en **33 langues** avec le menu Langue dans l'en-tête — de العربية et Soomaali à ਪੰਜਾਬੀ, ትግርኛ, Yorùbá et Українська — chaque page et chaque menu étant servis directement sur ce site. Toutes les traductions sont assistées par la machine; le français, l'espagnol, l'arabe et le chinois simplifié ont reçu une révision supplémentaire, et les autres sont marquées comme traduction automatique. **L'anglais reste la version de référence** — si une phrase traduite semble floue ou surprenante, vérifiez le texte anglais ou demandez à quelqu'un de le confirmer.\n\nDes dizaines d'autres langues peuvent ouvrir ce site avec Google Traduction à partir du même menu, et l'onglet d'aide à l'interprétation inclut des phrases rapides d'urgence dans plus de 20 langues que vous pouvez montrer au personnel.\n\nLes fiches du répertoire (noms de services, adresses, numéros de téléphone et heures) restent en anglais pour correspondre exactement aux sources officielles.\n\nToute traduction peut quand même être inexacte pour les détails médicaux; demandez donc un soutien d'interprète professionnel pour les rendez-vous, les consignes de médicaments et le consentement. Health811 (composez le 811) offre du soutien téléphonique dans de nombreuses langues.",
    },
    {
      id: "privacy",
      title: "Confidentialité",
      type: "default",
      content:
        "Ce site n'utilise pas d'outils d'analyse à distance envahissants. Il garde de légers compteurs d'amélioration dans votre propre navigateur pour que les responsables puissent comprendre les recherches courantes, les recherches sans résultat, les consultations de services et les signalements de problèmes quand l'information est exportée volontairement pour l'entretien.\n\nN'envoyez pas de renseignements médicaux privés par le formulaire de commentaires ou par courriel.",
    },
    {
      id: "contact",
      title: "Contact et signalement des changements",
      type: "default",
      content:
        "Si une page ou une fiche semble inexacte, utilisez le formulaire de signalement sur cette page. Les signalements devraient décrire le problème, pas votre situation de santé personnelle.\n\nCourriel de contact général : **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Avis",
      type: "default",
      content:
        "Ce site web sert seulement à la navigation et à l'éducation. Ce n'est pas un avis médical et il ne remplace pas un diagnostic professionnel, un traitement ou de l'aide d'urgence. Si une situation peut menacer la vie, appelez le 911.",
    },
  ],
};

export const kingstonContentFr: Record<string, PageContent> = {
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
