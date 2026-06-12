import type { UIStrings } from "../types";

export const es: UIStrings = {
  common: {
    loadingPage: "Cargando la página...",
    directoryEnglishNote:
      "Los listados del directorio se muestran en inglés para que los nombres de los servicios, las direcciones, los teléfonos y los horarios coincidan exactamente con las fuentes oficiales.",
  },
  header: {
    emergencyBanner: "¿Emergencia que pone en riesgo la vida? Llame al 911 ahora.",
    tagline:
      "Guía de navegación de salud en Kingston, Ontario, pensada para recién llegados",
    languageButton: "Idioma",
    languageButtonAria: "Ayuda de idioma e intérpretes",
    openNavigation: "Abrir el menú de navegación",
    primaryNavLabel: "Principal",
  },
  languageModal: {
    title: "Ayuda de idioma e intérpretes",
    description:
      "Lea esta guía en el idioma con el que se sienta más cómodo. Para conversaciones de salud, pida un intérprete cuando lo necesite.",
    chooseLanguageTitle: "Elija su idioma",
    chooseLanguageNote:
      "Esta guía está totalmente traducida a 33 idiomas dentro de este sitio, y decenas de idiomas más se abren mediante traducción automática. Los listados del directorio se mantienen en inglés para que coincidan exactamente con las fuentes oficiales. El inglés es la versión de referencia si algo no queda claro.",
    safetyTitle: "Nota de seguridad",
    safetyBody:
      "La traducción del sitio web sirve para leer y entender. Para citas, instrucciones de exámenes, medicamentos o consentimiento, pregunte si la clínica o el hospital puede ofrecer un intérprete profesional. Health811 (llame al 811) ofrece atención telefónica en muchos idiomas.",
    phrasesTitle: "Frases rápidas para mostrar al personal",
    phrasesNote:
      "Señale su idioma y muestre estas frases al personal de recepción o al personal clínico.",
    callHealth811: "Llamar a Health811",
    accessibilityCta: "Accesibilidad y confianza",
    close: "Cerrar la ventana de ayuda de idioma",
  },
  moreLanguages: {
    title: "Más idiomas (traducción automática)",
    description:
      "Todos los idiomas funcionan desde este único menú, incluyendo somalí, yoruba, igbo, hausa, amárico, tigriña, suajili, ucraniano, farsi, urdu, panyabí, tamil y vietnamita.",
    selectLabel: "Elija cualquier idioma",
    selectPlaceholder: "Todos los idiomas — seleccione uno…",
    openButton: "Abrir en este idioma",
    disclaimer:
      "Los idiomas marcados como automáticos abren esta página a través de Google Translate y se mantienen en su idioma mientras sigue navegando. La traducción automática no está revisada por este proyecto: sirve para leer, pero confirme los detalles médicos con un profesional de salud o un intérprete.",
  },
  funding: {
    acknowledgment:
      "Este proyecto cuenta con el apoyo de una subvención de la Ontario Medical Students Association (OMSA).",
    logoAlt: "Logotipo de la Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Buscar idiomas…",
    onSiteGroup: "Traducidos en este sitio",
    proxyGroup: "Más idiomas a través de Google Translate",
    reviewedBadge: "Revisado",
    automaticBadge: "Automático",
    interpreterTab: "Ayuda de intérpretes y frases",
    noMatches: "Ningún idioma coincide con su búsqueda.",
    note: "Las traducciones se hacen con ayuda de máquinas y el inglés es la versión de referencia si algo no queda claro. Los idiomas del grupo de Google Translate abren esta página en un sitio externo de Google. Los listados del directorio se mantienen en inglés para que coincidan exactamente con las fuentes oficiales.",
  },
  navigation: [
    {
      title: "Empiece aquí",
      items: [
        {
          label: "Necesito ayuda ahora",
          to: "/need-help-now",
          description: "Decisiones urgentes y apoyo en crisis",
        },
        {
          label: "Empiece aquí",
          to: "/start-here",
          description: "Nuevo en el sistema de salud de Ontario",
        },
        {
          label: "Buscar atención primaria",
          to: "/get-a-family-doctor",
          description:
            "Médicos, enfermeros especializados, centros comunitarios y opciones para estudiantes",
        },
      ],
    },
    {
      title: "Entienda la atención",
      items: [
        {
          label: "Costos y cobertura",
          to: "/costs-and-coverage",
          description:
            "OHIP, IFHP, planes privados y cobertura de medicamentos",
        },
        {
          label: "Su visita",
          to: "/your-visit",
          description: "Qué llevar y cómo hacer preguntas",
        },
        {
          label: "Después de la visita",
          to: "/after-visit",
          description: "Exámenes, requisiciones, derivaciones y seguimiento",
        },
        {
          label: "Medicamentos y farmacias",
          to: "/medicines-and-pharmacies",
          description: "Recetas, resurtidos y ayuda del farmacéutico",
        },
      ],
    },
    {
      title: "Ayuda local",
      items: [
        {
          label: "Servicios locales",
          to: "/local-services",
          description: "Buscar servicios en Kingston",
        },
        {
          label: "Salud mental",
          to: "/mental-health",
          description: "Apoyo en crisis, urgente, de rutina y para jóvenes",
        },
        {
          label: "Detección y prevención",
          to: "/screening-prevention",
          description: "Vacunas y atención preventiva",
        },
        {
          label: "Atención comunitaria y de apoyo",
          to: "/community-allied-health",
          description:
            "Cuidado en el hogar, rehabilitación, dental y apoyos comunitarios",
        },
        {
          label: "Preguntas frecuentes",
          to: "/faq",
          description: "Situaciones comunes de recién llegados y glosario",
        },
        {
          label: "Acerca de y confianza",
          to: "/about",
          description:
            "Fuentes, privacidad, accesibilidad y comentarios",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "¿Necesita ayuda ahora mismo?",
    items: {
      "call-911": {
        label: "Llamar al 911",
        description: "Emergencia que pone en riesgo la vida",
      },
      "call-811": {
        label: "Llamar a Health811",
        description: "Consejo de enfermería, 24/7",
      },
      "call-988": {
        label: "Llamar o enviar un mensaje de texto al 9-8-8",
        description: "Línea de Ayuda en Crisis de Suicidio, 24/7",
      },
      "call-crisis": {
        label: "Llamar a la línea de crisis",
        description: "Línea de crisis de AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Guía de atención urgente",
        description: "Opciones fuera de horario y para el mismo día",
      },
      "mental-health": {
        label: "Apoyo de salud mental",
        description: "Rutas de crisis, urgentes y de rutina",
      },
    },
  },
  home: {
    seoTitle: "Guía de salud de Kingston",
    seoDescription:
      "Navegación de salud para recién llegados en Kingston, Ontario: ayuda urgente, servicios locales, conceptos básicos de cobertura, orientación sobre intérpretes y próximos pasos después de una visita.",
    kicker: "Kingston, Ontario",
    heroTitle: "Encuentre la atención correcta en Kingston sin adivinar",
    heroLead:
      "Empiece con la ayuda urgente, los conceptos básicos para recién llegados, la cobertura o el directorio de servicios locales. Esta guía usa lenguaje sencillo, funciona bien en el celular y es honesta sobre lo que todavía necesita volver a verificarse.",
    cardNeedHelp: {
      title: "Necesito ayuda ahora",
      body: "Orientación sobre emergencias, atención urgente, crisis y atención fuera de horario.",
    },
    cardStartHere: {
      title: "Empiece aquí",
      body: "Cómo funciona el sistema de salud de Ontario y qué hacer primero.",
    },
    cardSearch: {
      title: "Buscar servicios",
      body: "Encuentre análisis de sangre, resurtidos, atención sin cita previa, salud mental y más.",
    },
    cardLanguage: {
      title: "Ayuda de idioma",
      body: "Lea esta guía en su idioma, con orientación sobre intérpretes y frases rápidas.",
    },
    quickDecisionsKicker: "Decisiones rápidas",
    quickDecisionsTitle: "Empiece con estas preguntas",
    quickDecisionLines: [
      "Si podría poner en riesgo la vida, llame al 911 ahora.",
      "Si no sabe adónde ir esta noche, llame a Health811.",
      "Para pensamientos suicidas o angustia abrumadora, llame o envíe un mensaje de texto al 9-8-8 en cualquier momento.",
      "Si no tiene médico de familia, incluya en su plan las clínicas sin cita previa, los centros de salud comunitarios y las opciones para estudiantes.",
      "Si necesita análisis de sangre, una radiografía, un resurtido o una actualización de derivación, use el directorio local para encontrar el siguiente paso.",
    ],
    trustNoteTitle: "Nota de confianza",
    trustNoteBody:
      "Esta es una guía estática. No mostramos tiempos de espera en vivo. Los detalles que cambian con el tiempo, como horarios y procesos de admisión, pueden variar rápidamente, por eso cada listado incluye un enlace a la fuente y un estado de revisión.",
    newcomerKicker: "Inicio rápido para recién llegados",
    newcomerTitle: "Primeros pasos si es nuevo en Kingston",
    newcomerSteps: [
      {
        title: "1. Conozca su cobertura",
        body: "Entienda OHIP, IFHP, los planes privados y lo que normalmente no está cubierto. No hay período de espera para OHIP: solicítelo en cuanto llegue.",
      },
      {
        title: "2. Planifique su ruta de atención primaria",
        body: "Conozca la diferencia entre médicos de familia, enfermeros especializados (nurse practitioners), clínicas para estudiantes, centros de salud comunitarios y atención sin cita previa.",
      },
      {
        title: "3. Sepa qué viene después",
        body: "Aprenda qué significan normalmente las requisiciones, las derivaciones, los resultados de exámenes y las llamadas de seguimiento.",
      },
    ],
    languageSupportKicker: "Apoyo de idioma",
    languageSupportTitle: "Muestre estas frases si necesita ayuda",
    openLanguageHelp: "Abrir la ayuda de idioma",
    commonTasksKicker: "Tareas comunes",
    commonTasksTitle: "Busque según la tarea que necesita resolver",
    openDirectory: "Abrir el directorio completo",
    tasks: [
      {
        title: "Análisis de sangre o radiografía",
        body: "Encuentre laboratorios y servicios de imágenes.",
      },
      {
        title: "Resurtido de receta",
        body: "Encuentre farmacias y ayuda con resurtidos.",
      },
      {
        title: "Apoyo de salud mental",
        body: "Apoyo en crisis, urgente, de rutina y para jóvenes.",
      },
      {
        title: "Tarjeta de salud o apoyo para recién llegados",
        body: "Encuentre ServiceOntario, ISKA y consejo telefónico.",
      },
    ],
    featuredKicker: "Servicios destacados",
    featuredTitle: "Buenos lugares para empezar",
    trustKicker: "Confianza y fuentes",
    trustTitle:
      "Honestos sobre lo que está verificado y lo que todavía necesita revisarse de nuevo",
    trustBody:
      "Algunos listados están verificados contra fuentes oficiales locales. Otros todavía necesitan una nueva verificación local porque los horarios, la admisión o las reglas de acceso cambian con frecuencia. Mostramos ese estado abiertamente y animamos a las personas a reportar detalles desactualizados.",
    trustChecklistTitle: "Lea esto antes de confiar en un listado",
    trustChecklist: [
      "Busque el enlace a la fuente oficial.",
      "Revise la fecha de la última revisión.",
      "Confirme los horarios del mismo día y el acceso sin cita previa antes de ir.",
      "Use el formulario de reporte si nota algún cambio.",
    ],
    trustLink: "Ver fuentes y notas de confianza",
  },
  contentPage: {
    breadcrumbHome: "Inicio",
    badge: "Guía en lenguaje sencillo",
    reviewStatusTitle: "Estado de revisión",
    reviewLabels: {
      reviewed:
        "Revisado contra el conjunto de fuentes actual que usa este proyecto.",
      "general-guidance":
        "Revisado como orientación general. Los detalles locales todavía pueden cambiar rápidamente.",
      "needs-local-recheck":
        "Orientación útil, pero los detalles locales todavía necesitan más verificación.",
    },
    lastReviewPrefix: "Última revisión de la página:",
    noReviewDate:
      "Esta página no tiene una fecha de revisión registrada a nivel de página.",
    translationAside:
      "Puede leer esta página en varios idiomas usando el menú de Idioma. Para citas, medicamentos, consentimiento e instrucciones de exámenes, pregunte si hay apoyo de intérprete disponible.",
    share: "Compartir",
    print: "Imprimir",
    sourcesTitle: "Fuentes de esta página",
    sourcesNote:
      "Estas son las principales fuentes oficiales o primarias usadas en la revisión actual de la página. Los procesos locales todavía pueden cambiar entre ciclos de revisión.",
    onThisPage: "En esta página",
    sourcesAnchorLabel: "Fuentes",
    translationReminderTitle: "Recordatorio sobre la traducción",
    translationReminderBody:
      "Si algo afecta su tratamiento o su seguridad, confírmelo con un profesional de salud o un intérprete en lugar de confiar solo en la traducción.",
    linkCopiedTitle: "Enlace copiado",
    linkCopiedBody: "Ahora puede pegar el enlace de esta página donde quiera.",
    shareCancelled: "Se canceló el compartir",
  },
  directory: {
    seoTitle: "Servicios locales",
    seoDescription:
      "Busque servicios de salud, salud mental, farmacia, cobertura y orientación pensados para recién llegados en Kingston, Ontario.",
    kicker: "Directorio de Kingston",
    title: "Busque servicios de salud locales",
    lead: "Busque por servicio, síntoma, documento o tarea. Ejemplos: sin cita previa, fuera de horario, análisis de sangre, resurtido, tarjeta de salud, clínica para estudiantes o apoyo para recién llegados.",
    searchPlaceholder:
      "Busque por necesidad, nombre del servicio, dirección o palabra clave",
    sortAriaLabel: "Ordenar resultados",
    sortRelevance: "Orden: Relevancia",
    sortAlphabetical: "Orden: A a Z",
    sortRecentlyReviewed: "Orden: Revisados recientemente",
    sortArea: "Orden: Zona",
    gridViewLabel: "Vista de cuadrícula",
    listViewLabel: "Vista de lista",
    allServices: "Todos los servicios",
    audienceTitle: "Para quién",
    accessTitle: "Acceso",
    careLevelTitle: "Nivel de atención",
    coverageAreaTitle: "Cobertura y zona",
    areaLabel: "Zona",
    showingServices: "Mostrando {count} servicios",
    resetFilters: "Restablecer filtros",
    trustPanelTitle: "Confianza y estado de revisión",
    trustPanelBody:
      "Este directorio es estático, no está en vivo. Mostramos la última fecha de revisión registrada, enlaces a fuentes oficiales cuando están disponibles y qué listados todavía necesitan una nueva verificación local. Confirme los horarios y el acceso el mismo día antes de ir.",
    verifiedLabel: "Verificado",
    needsRecheckLabel: "Necesita nueva verificación",
    noResultsTitle: "Ningún servicio coincidió con esos filtros",
    noResultsBody:
      "Pruebe una búsqueda más amplia como análisis de sangre, resurtido, salud mental, tarjeta de salud o sin cita previa. También puede borrar todos los filtros y empezar de nuevo.",
    notSureTitle: "¿No sabe por dónde empezar?",
    notSureBody:
      "Si no está seguro de si necesita atención de emergencia, atención urgente, una clínica sin cita previa o ayuda de la farmacia, empiece con la página de orientación urgente o llame a Health811 para recibir consejo de enfermería.",
    needHelpNowCta: "Necesito ayuda ahora",
    callHealth811: "Llamar a Health811",
  },
  filters: {
    audience: {
      newcomers: "Recién llegados",
      students: "Solo estudiantes o campus",
      "children-youth": "Niños o jóvenes",
      adults: "Adultos",
      families: "Familias",
      "unattached-patients": "Sin médico de familia",
    },
    access: {
      "walk-in": "Sin cita previa",
      appointment: "Con cita",
      referral: "Requiere derivación",
      virtual: "Virtual",
    },
    level: {
      emergency: "Emergencia",
      urgent: "Urgente",
      primary: "Primaria",
      community: "Comunitaria",
    },
    payment: {
      public: "Financiado con fondos públicos",
      community: "Comunitario / bajo requisito",
      mixed: "Cobertura mixta",
      "student-plan": "Plan estudiantil",
      private: "Pago privado",
    },
    location: {
      downtown: "Centro",
      "north-end": "Zona norte",
      "west-end": "Zona oeste",
      campus: "Campus",
      online: "En línea",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Atención de emergencia y urgente",
      shortLabel: "Emergencia y urgente",
    },
    "primary-care": {
      label: "Atención primaria",
      shortLabel: "Atención primaria",
    },
    "community-health": {
      label: "Centros de salud comunitarios",
      shortLabel: "Salud comunitaria",
    },
    "mental-health": {
      label: "Salud mental y apoyo en crisis",
      shortLabel: "Salud mental",
    },
    "public-health": { label: "Salud pública", shortLabel: "Salud pública" },
    "labs-imaging": {
      label: "Laboratorios e imágenes",
      shortLabel: "Laboratorios e imágenes",
    },
    pharmacies: {
      label: "Medicamentos y farmacias",
      shortLabel: "Farmacias",
    },
    "allied-community": {
      label: "Atención comunitaria y de apoyo",
      shortLabel: "Atención de apoyo",
    },
    "navigation-support": {
      label: "Orientación y apoyo con la cobertura",
      shortLabel: "Orientación",
    },
  },
  serviceCard: {
    whenToUse: "Cuándo usarlo:",
    accessLabel: "Acceso",
    eligibilityLabel: "Elegibilidad",
    eligibilityFallback:
      "Abierto al público general, a menos que la fuente oficial indique lo contrario.",
    hoursLabel: "Horario",
    phoneLabel: "Teléfono",
    trustDetails: "Detalles de confianza y fuente",
    lastReview: "Última revisión:",
    officialSource: "Fuente oficial",
    call: "Llamar",
    officialWebsite: "Sitio web oficial",
    directions: "Cómo llegar",
    viewDetails: "Ver detalles",
  },
  serviceDetail: {
    backToServices: "Volver a servicios locales",
    whenToUseTitle: "Cuándo usar este servicio",
    eligibilityTitle: "Elegibilidad y acceso",
    eligibilityFallback:
      "Consulte la fuente oficial si no está seguro de si este servicio está abierto para usted.",
    whatToBringTitle: "Qué llevar",
    contactTitle: "Contacto y acciones",
    callNow: "Llamar ahora",
    officialWebsite: "Sitio web oficial",
    directions: "Cómo llegar",
    trustTitle: "Confianza y fuente",
    lastReview: "Última revisión:",
    viewOfficialSource: "Ver la fuente oficial",
  },
  verification: {
    verified: {
      label: "Verificado contra la fuente oficial",
      shortLabel: "Verificado",
      description:
        "Los detalles principales se verificaron contra una fuente oficial en el ciclo de revisión más reciente.",
    },
    "partially-verified": {
      label: "Fuente oficial enlazada",
      shortLabel: "Enlace oficial",
      description:
        "Hay un enlace a una fuente oficial, pero uno o más detalles pueden cambiar con frecuencia y conviene confirmarlos antes de ir.",
    },
    "community-reported": {
      label: "Reportado por la comunidad",
      shortLabel: "Reporte comunitario",
      description:
        "Esta información proviene de reportes de la comunidad y todavía necesita confirmación independiente.",
    },
    "needs-recheck": {
      label: "Necesita nueva verificación",
      shortLabel: "Necesita nueva verificación",
      description:
        "Este listado sigue visible porque todavía puede ayudar, pero algunos detalles clave pueden estar desactualizados. Confirme antes de confiar en él.",
    },
  },
  feedback: {
    badge: "Reportar información desactualizada",
    title: "Ayúdenos a mantener esta guía precisa",
    body: "Esto abre un correo prellenado con el contexto de la página o del servicio. No incluya información médica privada.",
    issueTypeLabel: "Tipo de problema",
    issueTypes: {
      "outdated hours": "Horarios desactualizados",
      "wrong phone or website": "Teléfono o sitio web incorrecto",
      "eligibility or access issue": "Problema de elegibilidad o acceso",
      "translation or accessibility problem":
        "Problema de traducción o accesibilidad",
      "missing service or content": "Falta un servicio o contenido",
      other: "Otro",
    },
    detailsLabel: "¿Qué deberíamos revisar?",
    detailsPlaceholder:
      "Ejemplo: el número de teléfono cambió, una clínica ahora atiende solo con cita o un enlace está roto.",
    contactLabel: "Contacto opcional",
    contactPlaceholder: "Correo electrónico si quiere una respuesta",
    openEmail: "Abrir el correo de reporte",
    copyText: "Copiar el texto del reporte",
    thanks:
      "Gracias. Los reportes nos ayudan a priorizar páginas desactualizadas, enlaces rotos y listados que necesitan nuevas verificaciones locales.",
    toastEmailTitle: "Borrador de correo abierto",
    toastEmailBody: "Su reporte incluye el contexto de la página o del servicio.",
    toastCopyTitle: "Resumen del problema copiado",
    toastCopyBody:
      "Puede pegarlo en su propio programa de correo si lo necesita.",
  },
  footer: {
    description:
      "Una guía de navegación de salud en lenguaje sencillo para Kingston, Ontario. Este sitio no ofrece consejos médicos ni tiempos de espera en vivo. Confirme siempre los detalles que cambian con el tiempo con la fuente oficial antes de ir.",
    trustModelTitle: "Modelo de confianza",
    trustModelBody:
      "Mostramos enlaces a fuentes oficiales, fechas de revisión y los listados que todavía necesitan nuevas verificaciones. Si algo parece incorrecto, repórtelo desde la página o el servicio.",
    beforeYouGo: {
      title: "Antes de ir",
      body: "Verifique los horarios oficiales, si necesita una cita o una derivación, y qué documentos llevar.",
    },
    languageHelp: {
      title: "Ayuda de idioma",
      body: "Lea esta guía en su idioma usando el menú de Idioma. Pida un intérprete para las conversaciones clínicas cuando la precisión sea importante.",
    },
    privacy: {
      title: "Privacidad",
      body: "Este sitio usa registros de mejora locales y respetuosos con la privacidad que se guardan en su navegador. No envía datos analíticos personales a un servidor remoto.",
    },
    copyrightSuffix: "Recurso de información comunitaria para Kingston, Ontario.",
    disclaimer: "Aviso legal",
    privacyLink: "Privacidad",
    sourcesLink: "Fuentes",
    reportLink: "Reportar información desactualizada",
  },
  notFound: {
    seoTitle: "Página no encontrada",
    seoDescription:
      "No se pudo encontrar la página que solicitó. Empiece con la ayuda urgente, los conceptos básicos para recién llegados, los servicios locales o las preguntas frecuentes.",
    badge: "404",
    title: "No pudimos encontrar esa página",
    body: "Si está tratando de recibir atención rápidamente, empiece con la orientación urgente o busque en el directorio de servicios de Kingston.",
    startHere: "Empiece aquí",
    needHelpNow: "Necesito ayuda ahora",
    localServices: "Servicios locales",
    faq: "Preguntas frecuentes",
  },
};
