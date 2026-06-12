import type { PageContent } from "../../../types";

const homePage: PageContent = {
  title: "Guía de navegación de salud de Kingston",
  description:
    "Una guía en lenguaje sencillo, pensada para recién llegados, para encontrar atención de salud en Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Empiece aquí",
  description:
    "¿Nuevo en Kingston o nuevo en el sistema de salud de Ontario? Empiece aquí para aprender cómo funciona el sistema y qué hacer primero.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: La atención de salud en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Resumen de cómo funciona la atención asegurada en Ontario.",
    },
    {
      title: "Ontario: Solicite OHIP y obtenga una tarjeta de salud",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Información oficial sobre la solicitud y la elegibilidad de OHIP.",
    },
    {
      title:
        "Ontario: Encuentre un médico de familia o un enfermero especializado (nurse practitioner)",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Orientación oficial sobre Health Care Connect y el acceso a la atención primaria.",
    },
    {
      title: "Canadá: Programa Federal de Salud Provisional (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Información de cobertura federal para refugiados y solicitantes de refugio elegibles.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Cómo funciona el sistema de salud en Ontario",
      type: "default",
      content: `El sistema de salud de Ontario se organiza alrededor de la **atención primaria**. Atención primaria significa el lugar donde normalmente empieza para sus necesidades de salud de rutina, condiciones continuas, recetas, derivaciones y prevención. Su proveedor de atención primaria puede ser un médico de familia, un enfermero/a especializado/a (nurse practitioner), el equipo de un centro de salud comunitario o una clínica de salud para estudiantes si cumple los requisitos.

Una **derivación** es cuando un profesional de salud pide a otro servicio o especialista que lo atienda. Una **requisición** (orden para un examen) es un formulario que le indica al laboratorio o a la clínica de imágenes qué examen necesita.

No necesita entender cada parte del sistema desde el primer día. Los pasos más importantes son: conocer su cobertura, saber adónde ir para problemas urgentes y hacer un plan de atención regular si todavía no tiene un proveedor.`,
    },
    {
      id: "first-decisions",
      title: "Primeras decisiones",
      type: "grid",
      gridItems: [
        {
          title: "Puede que necesite ayuda urgente",
          content:
            "Empiece con la guía de emergencia vs. atención urgente si tiene un problema repentino hoy o esta noche.",
          icon: "alert",
          link: { text: "Necesito ayuda ahora", url: "/need-help-now" },
        },
        {
          title: "No tengo médico de familia",
          content:
            "Aprenda cómo encajan los médicos de familia, los enfermeros especializados (nurse practitioners), los centros de salud comunitarios, las clínicas sin cita previa y las clínicas para estudiantes.",
          icon: "stethoscope",
          link: { text: "Buscar atención primaria", url: "/get-a-family-doctor" },
        },
        {
          title: "Necesito entender qué está cubierto",
          content:
            "Lea sobre OHIP, el IFHP, los seguros privados, los planes estudiantiles, la cobertura de medicamentos y los gastos de bolsillo comunes.",
          icon: "shield",
          link: { text: "Costos y cobertura", url: "/costs-and-coverage" },
        },
        {
          title: "Necesito ayuda con el idioma",
          content:
            "Lea esta guía en 33 idiomas usando el menú de Idioma, y pregunte por el apoyo de intérprete para las conversaciones clínicas y el consentimiento.",
          icon: "info",
          link: { text: "Accesibilidad e idioma", url: "/about#accessibility" },
        },
        {
          title: "Necesito análisis de sangre, imágenes o un resurtido",
          content:
            "Use el directorio local para encontrar el siguiente paso práctico después de una visita.",
          icon: "file",
          link: { text: "Buscar servicios locales", url: "/local-services" },
        },
        {
          title: "No sé por dónde empezar",
          content:
            "Llame a Health811 para recibir consejo de enfermería si no está seguro de qué tan urgente es su situación.",
          icon: "clock",
          link: { text: "Health811 y orientación urgente", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Buenos primeros pasos en su primera semana",
      type: "steps",
      items: [
        "Conozca su cobertura: Lea lo que normalmente cubren OHIP, el IFHP, los seguros privados y los planes estudiantiles. Si podría calificar para OHIP, solicítelo lo antes posible.",
        "Elija su plan para urgencias: Sepa cuándo llamar al 911, cuándo empezar con Health811 y dónde encontrar atención urgente o del mismo día en Kingston.",
        "Planifique su atención regular: Si no tiene un proveedor habitual, conozca sus opciones de médicos de familia, enfermeros especializados (nurse practitioners), centros de salud comunitarios, clínicas para estudiantes, clínicas sin cita previa y atención virtual.",
        "Mantenga junta su información de salud: Guarde su tarjeta de salud o los papeles del IFHP, su lista de medicamentos, su registro de vacunas y copias de cualquier requisición o derivación.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Si todavía no tiene OHIP",
      type: "callout",
      content:
        "No espere a estar enfermo para conocer su ruta de cobertura. Si es elegible para OHIP, solicítelo pronto. Si tiene cobertura a través del IFHP o de un plan escolar o privado, lleve esa información con usted. Si no tiene seguro, pregunte por las tarifas antes de una visita y busque servicios comunitarios o de bajo requisito cuando corresponda.",
      link: { text: "Leer sobre la cobertura", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Tenga estas cosas listas",
      type: "checklist",
      items: [
        "Su tarjeta de salud, los papeles del IFHP o la información de su seguro",
        "Una lista de medicamentos, aunque solo tome unos pocos",
        "El nombre y el teléfono de su última clínica o proveedor, si tiene uno",
        "Cualquier requisición, derivación, papeles de alta o instrucciones de exámenes recientes",
        "Las preguntas que quiere hacer, en lenguaje sencillo",
        "Sus necesidades de intérprete anotadas para que recuerde pedirlo",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "¿Necesita ayuda ahora?",
  description:
    "Use esta página cuando tenga un problema de salud hoy o esta noche y no sepa por dónde empezar.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Obtenga consejo médico de Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Servicio oficial de consejo de enfermería disponible 24/7.",
    },
    {
      title: "9-8-8: Línea de Ayuda en Crisis de Suicidio",
      url: "https://988.ca/",
      note: "Línea nacional oficial de crisis de suicidio. Llame o envíe un mensaje de texto al 9-8-8, gratis, 24/7.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Red hospitalaria oficial para información sobre emergencias, atención urgente e imágenes.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Organización oficial local de salud mental y apoyo en crisis.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "¿Emergencia o urgencia?",
      type: "comparison",
      comparison: {
        left: {
          title: "Vaya a emergencias de inmediato por problemas como:",
          items: [
            "Dolor en el pecho, dificultad importante para respirar o señales de un derrame cerebral",
            "Sangrado intenso, lesión grave o pérdida del conocimiento",
            "Confusión repentina, convulsiones o una reacción alérgica grave",
            "Una emergencia de seguridad en la que esperar podría poner en riesgo la vida o una extremidad",
          ],
        },
        right: {
          title:
            "Empiece con atención urgente, Health811 o una clínica del mismo día por problemas como:",
          items: [
            "Esguinces, cortes menores, erupciones en la piel, dolor de oído o fiebre sin señales de alarma de emergencia",
            "Problemas con el resurtido de una receta que no pueden esperar a una cita de rutina",
            "Preguntas sobre si necesita atención urgente esta noche",
            "Un problema que se siente urgente, pero sin un riesgo claro para la vida",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Situaciones comunes fuera de horario",
      type: "table",
      columns: ["Situación", "Buen primer paso", "Qué recordar"],
      rows: [
        {
          cells: [
            "No estoy seguro de qué tan urgente es esto",
            "Llame a Health811",
            "Un enfermero puede ayudarle a decidir si quedarse en casa, buscar atención urgente o ir a emergencias.",
          ],
        },
        {
          cells: [
            "Mi médico está cerrado y necesito consejo esta noche",
            "Health811 u orientación de atención urgente",
            "No asuma que emergencias es su única opción si no hay señales de alarma de emergencia.",
          ],
        },
        {
          cells: [
            "Necesito atención para mi hijo o hija",
            "Use las mismas señales de alarma de emergencia y luego busque atención el mismo día o llame a Health811 si no está seguro",
            "Lleve la tarjeta de salud del niño, la lista de medicamentos y, si es posible, la cronología de los síntomas.",
          ],
        },
        {
          cells: [
            "Necesito ayuda de salud mental esta noche",
            "Llame o envíe un mensaje de texto al 9-8-8 (Línea de Ayuda en Crisis de Suicidio), o llame a la línea de crisis 24/7 de AMHS-KFLA",
            "Si hay un riesgo inmediato para la seguridad, llame al 911.",
          ],
        },
      ],
      caption:
        "Esta tabla es solo orientación general. Si alguien puede estar en peligro inmediato, llame al 911.",
    },
    {
      id: "kingston-start-points",
      title: "Puntos de partida en Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Departamento de Emergencias",
          content:
            "Use la atención de emergencia para problemas que ponen en riesgo la vida o que podrían ponerla en riesgo.",
          icon: "alert",
          link: {
            text: "Listados de emergencia y atención urgente",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Centro de Atención Urgente",
          content:
            "Útil para muchos problemas del mismo día que no pueden esperar pero que no son emergencias claras.",
          icon: "clock",
          link: {
            text: "Atención urgente y del mismo día",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Consejo de enfermería por teléfono o en línea si no sabe adónde ir. La atención telefónica está disponible en muchos idiomas.",
          icon: "info",
          link: { text: "Listado de Health811", url: "/local-services/health811" },
        },
        {
          title: "Apoyo en crisis de salud mental",
          content:
            "Llame o envíe un mensaje de texto al 9-8-8 (Línea de Ayuda en Crisis de Suicidio) en cualquier momento, o use el apoyo local en crisis, como la línea de crisis 24/7 de AMHS-KFLA.",
          icon: "heart",
          link: { text: "Listados de salud mental", url: "/local-services?category=mental-health" },
        },
        {
          title: "Apoyo en casos de violencia sexual",
          content:
            "Use el apoyo especializado en crisis si necesita apoyo emocional inmediato, acompañamiento o un plan de seguridad.",
          icon: "shield",
          link: {
            text: "Listados de apoyo",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Opciones urgentes para estudiantes",
          content:
            "Si es estudiante, verifique si el servicio de salud de su campus es la mejor primera parada para necesidades que no son emergencias.",
          icon: "stethoscope",
          link: { text: "Listados de salud para estudiantes", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Si todavía no está seguro",
      type: "callout",
      content:
        "Cuando el problema no pone claramente en riesgo la vida pero le preocupa esperar, empiece con Health811. Si alguien puede no estar seguro, puede estar empeorando rápidamente o usted no puede conseguir la ayuda adecuada a tiempo, use los servicios de emergencia.",
      link: { text: "Llamar a Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Lleve estas cosas si puede",
      type: "checklist",
      items: [
        "La tarjeta de salud, los papeles del IFHP o cualquier tarjeta de seguro que tenga",
        "Una lista de medicamentos o fotos de los frascos de los medicamentos",
        "La hora en que empezaron los síntomas y cualquier cosa que los empeoró",
        "Sus necesidades de intérprete anotadas, por si está demasiado estresado para recordarlas después",
        "Un cargador de teléfono y una persona de apoyo si eso le ayuda",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Cómo encontrar atención primaria",
  description:
    "Conozca las distintas rutas para tener atención de salud regular en Kingston si todavía no tiene un proveedor.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title:
        "Ontario: Encuentre un médico de familia o un enfermero especializado (nurse practitioner)",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Orientación oficial de Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Información oficial sobre los servicios de los centros de salud comunitarios locales.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Información oficial de salud para estudiantes de Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Información oficial de salud para estudiantes de St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "Qué significa atención primaria",
      type: "default",
      content:
        "La atención primaria es el lugar adonde normalmente va primero para sus necesidades de salud de rutina. Eso incluye chequeos, renovaciones de medicamentos, atención de enfermedades crónicas, derivaciones, atención preventiva y seguimiento después de problemas urgentes.\n\nEn Kingston, su ruta habitual de atención primaria puede incluir un médico de familia, un enfermero/a especializado/a (nurse practitioner), un centro de salud comunitario, una clínica del campus o una combinación de opciones temporales mientras espera una atención más estable.",
    },
    {
      id: "access-matrix",
      title: "Rutas de acceso a la atención primaria",
      type: "table",
      columns: ["Ruta", "Ideal para", "Quién puede usarla", "Cómo empezar"],
      rows: [
        {
          cells: [
            "Médico de familia o enfermero especializado (nurse practitioner)",
            "Atención regular continua y planificación de salud a largo plazo",
            "Pacientes que pueden registrarse en la lista de un proveedor",
            "Use Health Care Connect y esté atento a los cupos locales",
          ],
        },
        {
          cells: [
            "Centro de salud comunitario",
            "Atención comunitaria, apoyo con menos requisitos y cierta atención para recién llegados o necesidades complejas",
            "La elegibilidad depende del programa y del estado de admisión",
            "Comuníquese directamente con la organización y pregunte por la admisión",
          ],
        },
        {
          cells: [
            "Servicio de salud para estudiantes",
            "Acceso más rápido para estudiantes registrados",
            "Solo estudiantes que califican a través de su institución",
            "Use el servicio de salud o bienestar de su campus",
          ],
        },
        {
          cells: [
            "Clínica sin cita previa o atención urgente del mismo día",
            "Atención a corto plazo mientras espera o cuando su proveedor habitual no está disponible",
            "Público general, sujeto a las reglas de admisión diaria",
            "Verifique el acceso actual antes de ir",
          ],
        },
        {
          cells: [
            "Atención primaria virtual",
            "Algunos resurtidos, consejos y asuntos de rutina",
            "Varía según el proveedor y la cobertura",
            "Verifique qué puede y qué no puede manejar el proveedor de forma segura en línea",
          ],
        },
      ],
      caption:
        "La mejor ruta depende de su elegibilidad, de la urgencia y de si necesita atención a corto plazo o continua.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Si no tiene un proveedor habitual",
      type: "steps",
      items: [
        "Regístrese a través de la ruta provincial oficial: Use Health Care Connect si no tiene médico de familia ni enfermero especializado (nurse practitioner).",
        "Verifique si califica para opciones de salud del campus o comunitarias: Los estudiantes deben empezar con la clínica de su institución. Algunos servicios de salud comunitarios tienen prioridades de admisión específicas.",
        "Arme un plan temporal seguro: Sepa qué servicios sin cita previa, urgentes, virtuales, de farmacia y de salud mental puede usar mientras espera.",
        "Guarde sus propios registros: Conserve las listas de medicamentos, los resultados de exámenes, las derivaciones y los nombres de los profesionales que lo atendieron.",
      ],
    },
    {
      id: "while-you-wait",
      title: "Qué hacer mientras espera",
      type: "checklist",
      items: [
        "Use atención sin cita previa, urgente o virtual para necesidades a corto plazo cuando sea apropiado",
        "Pregunte en la farmacia qué ayuda con resurtidos o atención de malestares menores puede estar disponible",
        "Mantenga una sola lista de medicamentos actualizada y llévela a cada visita",
        "Lleve copias de los resultados importantes o de los papeles de alta cuando la atención esté fragmentada",
        "Use la misma clínica para el seguimiento cuando sea posible, para que su atención sea un poco más constante",
      ],
    },
    {
      id: "next-best-option",
      title: "Si su necesidad es urgente pero no es una emergencia",
      type: "callout",
      content:
        "No tener médico de familia no significa que deba retrasar la atención importante. Use la opción de corto plazo adecuada para el problema que tiene enfrente y luego haga un plan de continuidad después de tratar el problema urgente.",
      link: { text: "Buscar opciones de atención primaria", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Costos y cobertura",
  description:
    "Orientación en lenguaje sencillo sobre la cobertura de OHIP, el IFHP, el Plan Canadiense de Atención Dental, los planes estudiantiles o privados y los gastos de bolsillo comunes.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Solicite OHIP y obtenga una tarjeta de salud",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Orientación oficial de OHIP.",
    },
    {
      title: "Canadá: Programa Federal de Salud Provisional (IFHP)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Información oficial sobre la cobertura del IFHP.",
    },
    {
      title: "Ontario Drug Benefit (Beneficio de Medicamentos de Ontario)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Orientación oficial provincial sobre la cobertura de medicamentos.",
    },
    {
      title: "Ontario: Obtenga ayuda con los costos altos de medicamentos recetados",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Orientación oficial del Trillium Drug Program.",
    },
    {
      title: "Canadá: Plan Canadiense de Atención Dental (CDCP)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Información oficial del programa federal de cobertura dental y su elegibilidad.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Conceptos básicos de la cobertura",
      type: "default",
      content:
        "La cobertura en Ontario depende de su estatus legal, su edad, sus ingresos, la elegibilidad para programas y de si tiene un plan de seguro escolar o privado.\n\nMuchos servicios médicos y hospitalarios necesarios están cubiertos para los pacientes elegibles de OHIP. Eso **no** significa que todo sea gratis. Los medicamentos, la atención dental, la atención de la vista, los formularios, los certificados por enfermedad y muchos servicios de salud de apoyo suelen tener cobertura aparte o requerir pago de bolsillo.\n\nBuenas noticias si acaba de llegar: **no hay período de espera para OHIP**. Si es elegible, puede solicitarlo en cuanto llegue a Ontario, y la cobertura comienza una vez que se aprueba su solicitud. No espere a estar enfermo para solicitarla.",
    },
    {
      id: "coverage-matrix",
      title: "Rutas de cobertura de un vistazo",
      type: "table",
      columns: [
        "Tipo de cobertura",
        "Normalmente ayuda con",
        "Lo que aún puede no estar cubierto",
        "Qué hacer después",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Muchos servicios médicos y hospitalarios necesarios",
            "Muchos medicamentos, la atención dental, la atención de la vista y los formularios",
            "Solicítelo si es elegible y mantenga su tarjeta vigente",
          ],
        },
        {
          cells: [
            "IFHP",
            "Cobertura para refugiados y solicitantes de refugio elegibles según el programa federal",
            "Los detalles varían según la categoría y el servicio",
            "Consulte la guía oficial del IFHP y pregunte en la clínica o la farmacia si lo aceptan",
          ],
        },
        {
          cells: [
            "Seguro escolar o privado",
            "Suele ayudar con medicamentos, consejería, atención dental, de la vista y de salud de apoyo",
            "Los límites de cobertura, los copagos y las reglas de la red varían",
            "Lea el folleto del plan antes de suponer que un servicio está cubierto",
          ],
        },
        {
          cells: [
            "Plan Canadiense de Atención Dental (CDCP)",
            "Cobertura dental para residentes elegibles sin acceso a seguro dental privado y con un ingreso familiar ajustado menor de $90,000",
            "No todos los procedimientos están cubiertos, y puede aplicarse un copago según los ingresos",
            "Verifique la elegibilidad y solicite a través de la página oficial del CDCP del Gobierno de Canadá",
          ],
        },
        {
          cells: [
            "Sin cobertura activa",
            "Es posible que aún pueda acceder a algunos servicios, pero pueden aplicarse tarifas",
            "Los costos pueden ser significativos para visitas, exámenes o medicamentos",
            "Pregunte por las tarifas antes de la visita y busque opciones comunitarias cuando corresponda",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "Lo que a menudo no está cubierto por completo",
      type: "checklist",
      items: [
        "Muchos medicamentos recetados, a menos que califique para un programa público o tenga otro plan",
        "La atención dental, a menos que califique para el Plan Canadiense de Atención Dental, Healthy Smiles Ontario, un programa dental comunitario o un plan de beneficios",
        "La atención de la vista fuera de ciertas rutas de elegibilidad específicas",
        "La fisioterapia, la consejería, los masajes y otros servicios de salud de apoyo, a menos que un programa o plan los cubra",
        "Formularios, cartas, cargos por citas perdidas y muchos otros cobros administrativos",
      ],
    },
    {
      id: "drug-coverage",
      title: "Rutas de cobertura de medicamentos",
      type: "default",
      content:
        "La cobertura de medicamentos suele ser donde los recién llegados se llevan sorpresas. La visita al médico puede estar cubierta, pero la receta aun así puede costar dinero.\n\nLos programas públicos de medicamentos pueden ayudar según la edad, los ingresos y la elegibilidad. El **Ontario Drug Benefit** (Beneficio de Medicamentos de Ontario) cubre muchos medicamentos para personas de 65 años o más y para personas en ciertos programas, y **OHIP+** cubre muchas recetas para personas de 24 años o menos que no tienen un plan privado. Ontario también tiene el **Trillium Drug Program** (Programa de Medicamentos Trillium) para algunas personas con costos de medicamentos altos en comparación con los ingresos del hogar. Si tiene un plan escolar o privado, verifique si se coordina con la cobertura pública o si la reemplaza.",
    },
    {
      id: "coverage-scenarios",
      title: "Preguntas comunes sobre la cobertura",
      type: "faq",
      faqs: [
        {
          question: "Todavía no tengo OHIP. ¿Puedo recibir atención de todos modos?",
          answer:
            "Sí, pero pueden aplicarse tarifas, y la mejor ruta depende de su estatus y de la urgencia. Cuando sea posible, pregunte por los costos antes de recibir atención que no sea de emergencia, y revise la elegibilidad para el IFHP o para un plan escolar o privado si aplica en su caso.",
        },
        {
          question: "Soy estudiante internacional. ¿OHIP es mi única opción?",
          answer:
            "No siempre. Muchos estudiantes dependen de un plan de seguro escolar o privado en lugar de OHIP. Use los documentos oficiales del plan de su institución y los servicios de salud para estudiantes para confirmar qué está cubierto.",
        },
        {
          question: "¿Mi medicamento será gratis si mi cita estaba cubierta?",
          answer:
            "No necesariamente. La cobertura de la cita y la cobertura de la receta suelen ser independientes.",
        },
        {
          question: "¿La atención dental está cubierta?",
          answer:
            "La atención dental está separada de OHIP para la mayoría de los adultos. El Plan Canadiense de Atención Dental (CDCP), un programa federal, ahora cubre a muchos residentes que no tienen seguro dental privado y tienen un ingreso familiar ajustado menor de $90,000; normalmente necesita haber presentado una declaración de impuestos canadiense para calificar. Los niños de familias de ingresos más bajos pueden calificar para Healthy Smiles Ontario, y Kingston tiene una clínica dental comunitaria para personas en programas específicos.",
        },
        {
          question: "¿Cómo sé si un servicio es público, comunitario o privado?",
          answer:
            "Use los filtros del directorio y revise los detalles del listado. Si no está seguro, comuníquese con el servicio antes de reservar.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Su visita médica",
  description:
    "Qué llevar, cómo hacer preguntas y cómo comunicarse de forma segura durante una visita médica.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: La atención de salud en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientación general del sistema.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "Qué llevar",
      type: "checklist",
      items: [
        "Su tarjeta de salud, los papeles del IFHP u otra información de su seguro",
        "Una lista completa de medicamentos, incluyendo vitaminas y medicamentos de venta libre",
        "Los nombres de los síntomas, cuándo empezaron y qué cambió",
        "Las preguntas que quiere que le respondan antes de irse",
        "Cualquier requisición, derivación, papeles de alta o resultados de exámenes recientes",
        "Sus necesidades de intérprete anotadas para que recuerde pedirlo",
      ],
    },
    {
      id: "during-the-visit",
      title: "Durante la visita",
      type: "steps",
      items: [
        "Empiece con su problema principal: Muchas citas son cortas, así que comience con la preocupación que más importa hoy.",
        "Use lenguaje sencillo: Está bien decir 'No entiendo esa palabra' o '¿Puede explicarlo de una manera más simple?'.",
        "Repita el plan en voz alta: Antes de irse, diga los próximos pasos en voz alta para saber si necesita un examen, una derivación, un resurtido o una cita de seguimiento.",
        "Pregunte qué pasa si las cosas empeoran: Debe saber cuándo volver a llamar, cuándo usar la atención urgente y cuándo usar la atención de emergencia.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Ayuda con intérpretes y comunicación",
      type: "default",
      content:
        "Si necesita ayuda con el idioma, pídala desde el principio. No espere hasta el final de la cita. Puede leer este sitio web en varios idiomas usando el menú de Idioma, pero la traducción del sitio no debe reemplazar el apoyo de un intérprete para las decisiones de tratamiento, las instrucciones de los medicamentos o el consentimiento.\n\nPuede decir: **'Necesito un intérprete, por favor.'** Health811 (llame al 811) también ofrece atención telefónica en muchos idiomas. Si una persona de apoyo lo acompaña, recuerde que un familiar no siempre es la mejor opción ni la más segura para interpretar información médica compleja o delicada.",
    },
    {
      id: "questions-to-ask",
      title: "Preguntas que vale la pena hacer",
      type: "checklist",
      items: [
        "¿Qué cree que está pasando?",
        "¿Qué debo hacer ahora?",
        "¿Necesito un examen, una requisición, una derivación o una visita de seguimiento?",
        "¿Cuándo debería recibir los resultados?",
        "¿Qué señales de alarma significan que debo volver a llamar o buscar ayuda urgente?",
      ],
    },
    {
      id: "privacy",
      title: "Privacidad y consentimiento",
      type: "default",
      content:
        "Su información de salud es delicada. Si no sabe quién verá su información, pregunte. Si no entiende un formulario, una conversación de consentimiento o un plan de tratamiento, pida que el proceso vaya más despacio y que le den una explicación más clara.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Después de la visita",
  description:
    "Aprenda qué pasa después de una visita, incluyendo requisiciones, resultados de exámenes, derivaciones y cuándo volver a llamar.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Información del sistema hospitalario local.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Información sobre el proceso de los laboratorios comunitarios y el portal del paciente.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "Lo que suele pasar después de una visita",
      type: "steps",
      items: [
        "Se va con un plan: Puede incluir un medicamento, una requisición (orden para un examen), una derivación, una cita de seguimiento o instrucciones para vigilar las señales de alarma.",
        "Es posible que tenga que hacer el siguiente paso usted mismo: Por ejemplo, puede que tenga que reservar análisis de sangre o imágenes, recoger algo en la farmacia o agendar una visita de seguimiento.",
        "Los resultados suelen volver al profesional que los pidió: El laboratorio o el centro de imágenes puede no explicarle el resultado en el momento.",
        "Puede que no le llamen por cada resultado normal: Pregunte cuál es el proceso de seguimiento de la clínica para saber qué esperar.",
      ],
    },
    {
      id: "common-terms",
      title: "Términos comunes después de la visita",
      type: "table",
      columns: ["Término", "Qué significa en lenguaje sencillo", "Qué suele hacer usted después"],
      rows: [
        {
          cells: [
            "Requisición",
            "Un formulario que le indica al laboratorio o a la clínica de imágenes qué examen necesita",
            "Reserve o asista al examen y guarde una copia si puede",
          ],
        },
        {
          cells: [
            "Derivación",
            "Una solicitud de un profesional de salud a otro servicio o especialista",
            "Espere a que lo contacten y vuelva a llamar si le dijeron que hiciera seguimiento y no pasa nada",
          ],
        },
        {
          cells: [
            "Seguimiento",
            "Una revisión después de un tratamiento, un examen o un cambio en los síntomas",
            "Pregunte cuándo y cómo debe hacerse el seguimiento antes de irse",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Cuándo volver a llamar",
      type: "checklist",
      items: [
        "No entiende la requisición, la derivación o las instrucciones del medicamento",
        "Le dijeron que alguien lo contactaría y no ha sabido nada dentro del tiempo esperado",
        "Sus síntomas están empeorando o no mejoran como le dijeron que debía esperar",
        "La farmacia, el laboratorio o la clínica de imágenes le dijo que falta algo en los papeles",
        "Cree que un resultado pudo haberse pasado por alto o sigue preocupado",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Situaciones comunes",
      type: "faq",
      faqs: [
        {
          question: "Necesito análisis de sangre después de una visita. ¿Qué hago?",
          answer:
            "Verifique si tiene una requisición y si el laboratorio requiere reserva. Luego use el directorio para encontrar un laboratorio. Lleve la requisición y su información de cobertura.",
        },
        {
          question: "No entiendo el formulario de requisición o derivación.",
          answer:
            "Llame a la clínica que se lo dio y pida que se lo expliquen en lenguaje sencillo. Es razonable preguntar para qué es el formulario, adónde debe ir y si usted necesita reservar algo por su cuenta.",
        },
        {
          question: "¿Quién hace el seguimiento de los resultados de los exámenes?",
          answer:
            "Normalmente el profesional que pidió el examen. Pregunte en el consultorio de ese profesional cuál es su proceso habitual para los resultados normales y anormales.",
        },
        {
          question: "¿Cuánto tardan las derivaciones?",
          answer:
            "Los tiempos de las derivaciones varían mucho. Pregunte qué tipo de espera es normal para su situación y qué hacer si no recibe noticias.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Próximos pasos útiles",
      type: "grid",
      gridItems: [
        {
          title: "Encuentre laboratorios e imágenes",
          content:
            "Use el directorio para listados de análisis de sangre, radiografías, ecografías e imágenes.",
          icon: "file",
          link: { text: "Laboratorios e imágenes", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Encuentre una farmacia",
          content:
            "Use el directorio para farmacias, ayuda con resurtidos y apoyo con medicamentos.",
          icon: "shield",
          link: { text: "Farmacias", url: "/local-services?category=pharmacies" },
        },
        {
          title: "¿Necesita planificar la atención de seguimiento?",
          content:
            "Use la página de atención primaria si no sabe dónde debe hacerse el seguimiento a largo plazo.",
          icon: "stethoscope",
          link: { text: "Buscar atención primaria", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Medicamentos y farmacias",
  description:
    "Entienda las recetas, los resurtidos, la ayuda del farmacéutico y cómo pagar los medicamentos en Ontario.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Lo que pueden hacer los farmacéuticos",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Información oficial provincial sobre farmacéuticos y farmacias.",
    },
    {
      title: "Ontario Drug Benefit (Beneficio de Medicamentos de Ontario)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Orientación oficial provincial sobre la cobertura de medicamentos.",
    },
    {
      title: "Ontario: Obtenga ayuda con los costos altos de medicamentos recetados",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Orientación oficial del Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "En qué puede ayudar un farmacéutico",
      type: "default",
      content:
        "Los farmacéuticos hacen más que entregar medicamentos. Pueden explicarle cómo tomar un medicamento de forma segura, revisar las interacciones y repasar los efectos secundarios.\n\nEn Ontario, los farmacéuticos también pueden **evaluar y recetar para 19 malestares menores comunes**, incluyendo conjuntivitis, herpes labial, infecciones urinarias (en mujeres), picaduras de insectos y alergias estacionales. La evaluación es gratuita con su tarjeta de salud de Ontario, y la lista de condiciones puede seguir creciendo.\n\nLa farmacia también es uno de los mejores lugares para hacer preguntas prácticas como: **¿Este resurtido es urgente? ¿Hay una opción más barata? ¿Qué hago si olvidé una dosis?**",
    },
    {
      id: "fill-a-prescription",
      title: "Cómo surtir una receta",
      type: "steps",
      items: [
        "Obtenga la receta: Puede ser en papel, por fax o enviada electrónicamente.",
        "Elija la farmacia: Usar la misma farmacia con regularidad les ayuda a detectar interacciones entre medicamentos y problemas con el historial de resurtidos.",
        "Pregunte por el tiempo y el costo: La farmacia puede decirle cuándo estará lista y si su plan la está cubriendo.",
        "Escuche la orientación del farmacéutico: Pregunte para qué es el medicamento, cómo tomarlo y cuándo debe volver a llamar si no le ayuda.",
      ],
    },
    {
      id: "refill-options",
      title: "Problemas con resurtidos y medicamentos",
      type: "table",
      columns: ["Situación", "Buen primer paso", "Por qué"],
      rows: [
        {
          cells: [
            "Necesito un resurtido de rutina",
            "Empiece con su farmacia habitual o con su profesional de salud habitual",
            "Ellos pueden decirle si necesita un resurtido, una renovación o una cita nueva",
          ],
        },
        {
          cells: [
            "Mi médico no está disponible y puedo quedarme sin medicamento",
            "Pregunte en la farmacia qué opciones hay disponibles y luego use atención sin cita previa, virtual o urgente si es necesario",
            "El siguiente paso más seguro depende del medicamento y de su situación",
          ],
        },
        {
          cells: [
            "No entiendo cómo tomar este medicamento",
            "Pida al farmacéutico que se lo explique otra vez en lenguaje sencillo",
            "Esto es parte del uso seguro de los medicamentos",
          ],
        },
        {
          cells: [
            "El medicamento cuesta demasiado",
            "Pregunte por las versiones genéricas, la cobertura de su plan y los programas públicos",
            "Los costos de los medicamentos varían y la cobertura suele estar separada de la visita misma",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Formas en que pueden pagarse los medicamentos",
      type: "checklist",
      items: [
        "Un programa público de medicamentos, si califica",
        "Un plan de seguro escolar o privado",
        "Una combinación de cobertura pública y privada",
        "De su bolsillo, si ningún programa cubre el medicamento",
      ],
    },
    {
      id: "pharmacy-links",
      title: "¿Necesita ayuda de una farmacia local?",
      type: "callout",
      content:
        "Use el directorio para encontrar farmacias, apoyo con resurtidos y opciones virtuales o del mismo día cuando intente resolver rápidamente un problema con un medicamento.",
      link: { text: "Buscar listados de farmacias", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Apoyo de salud mental",
  description:
    "Rutas locales de salud mental, consejería, apoyo para jóvenes y crisis en Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Línea de Ayuda en Crisis de Suicidio",
      url: "https://988.ca/",
      note: "Línea nacional oficial de crisis de suicidio. Llame o envíe un mensaje de texto al 9-8-8, gratis, 24/7.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Información oficial sobre salud mental de adultos y apoyo en crisis.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Línea oficial de ayuda de salud mental y adicciones de Ontario.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Información oficial sobre salud mental infantil y juvenil.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Si alguien puede no estar seguro",
      type: "callout",
      content:
        "Si hay un riesgo inmediato para la vida o la seguridad, llame al 911. Para pensamientos suicidas o angustia abrumadora, puede **llamar o enviar un mensaje de texto al 9-8-8** (Línea de Ayuda en Crisis de Suicidio) en cualquier momento; es gratis, confidencial y está disponible 24/7 en inglés y francés. También puede llamar a la línea de crisis 24/7 de AMHS-KFLA al 613-544-4229. No espere a una cita de rutina.",
      link: { text: "Listados de salud mental", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Tipos de apoyo",
      type: "grid",
      gridItems: [
        {
          title: "Apoyo en crisis",
          content:
            "Úselo para angustia inmediata, preocupaciones de seguridad o cuando esperar no es seguro.",
          icon: "alert",
        },
        {
          title: "Apoyo urgente",
          content:
            "Úselo cuando la situación es seria y necesita ayuda pronto, pero no es una emergencia inmediata que ponga en riesgo la vida.",
          icon: "clock",
        },
        {
          title: "Consejería de rutina",
          content:
            "Úsela para ansiedad continua, depresión, estrés, duelo, problemas de relación o transiciones de vida.",
          icon: "heart",
        },
        {
          title: "Servicios para niños y jóvenes",
          content:
            "Use los servicios especializados de salud mental juvenil cuando la persona que necesita atención es un niño o un adolescente.",
          icon: "info",
        },
        {
          title: "Apoyo en el campus",
          content:
            "A los estudiantes a menudo les conviene empezar primero por las rutas de bienestar o consejería de su campus.",
          icon: "stethoscope",
        },
        {
          title: "Apoyo en casos de violencia sexual",
          content:
            "Use el apoyo especializado para crisis, consejería, acompañamiento y planes de seguridad después de violencia sexual.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Por dónde empezar en situaciones comunes",
      type: "table",
      columns: ["Situación", "Mejor primera parada", "Por qué"],
      rows: [
        {
          cells: [
            "Necesito ayuda de salud mental esta noche",
            "Llame o envíe un mensaje de texto al 9-8-8, llame a la línea de crisis de AMHS-KFLA o use la atención de emergencia si la seguridad está en riesgo",
            "No espere a una cita de rutina cuando la situación se siente insegura",
          ],
        },
        {
          cells: [
            "Necesito consejería pero estoy a salvo por ahora",
            "Consejería comunitaria, médico de familia, enfermero especializado (nurse practitioner) o los apoyos de un plan privado",
            "Pueden ayudar con la atención continua y las derivaciones",
          ],
        },
        {
          cells: [
            "Necesito ayuda para mi hijo o hija",
            "Servicios de salud mental para niños o jóvenes y, si es necesario, orientación urgente",
            "Los niños y jóvenes a menudo tienen rutas separadas",
          ],
        },
        {
          cells: [
            "Soy estudiante",
            "Primero la salud o consejería del campus, a menos que la situación sea insegura o grave",
            "Los servicios del campus pueden ser la vía de entrada más rápida para estudiantes",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Preguntas comunes",
      type: "faq",
      faqs: [
        {
          question: "¿A quién puedo llamar o escribir ahora mismo?",
          answer:
            "Llame o envíe un mensaje de texto al **9-8-8** (Línea de Ayuda en Crisis de Suicidio) en cualquier momento, gratis, 24/7, sin necesidad de derivación. En Kingston, la línea de crisis de AMHS-KFLA al 613-544-4229 también responde 24/7. Si la seguridad está en riesgo inmediato, llame al 911.",
        },
        {
          question: "¿Qué pasa si no sé si esto cuenta como una crisis?",
          answer:
            "Si alguien puede no estar seguro, no espere a tener certeza. Use el apoyo en crisis o los servicios de emergencia.",
        },
        {
          question: "¿Qué pasa si necesito ayuda esta noche pero no sé a quién llamar?",
          answer:
            "Use la página del directorio local de salud mental o la ruta de apoyo en crisis en lugar de esperar hasta la mañana.",
        },
        {
          question: "¿Qué pasa si quien necesita ayuda es mi hijo o hija?",
          answer:
            "Busque específicamente servicios para niños y jóvenes. Las rutas de salud mental juvenil suelen ser diferentes de la atención para adultos.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Detección y prevención",
  description:
    "Aprenda los conceptos básicos de la atención preventiva, las vacunas y las pruebas de detección en Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Información local sobre vacunas y salud pública.",
    },
    {
      title: "Ontario: La atención de salud en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientación general de salud.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Por qué importa la atención preventiva",
      type: "default",
      content:
        "La atención preventiva significa tratar de detectar los problemas temprano o evitar que se vuelvan más serios. Eso incluye vacunas, pruebas de detección, controles regulares de la presión arterial y conversaciones con un profesional de salud sobre los factores de riesgo.",
    },
    {
      id: "common-prevention",
      title: "Tareas comunes de prevención",
      type: "checklist",
      items: [
        "Mantenga sus vacunas al día",
        "Pregunte si se recomiendan pruebas de detección para su edad o su historial de salud",
        "Lleve sus preguntas sobre la presión arterial, la diabetes u otros factores de riesgo a las visitas de rutina",
        "Use los recursos de salud pública cuando necesite información sobre vacunas o prevención",
      ],
    },
    {
      id: "prevention-next",
      title: "¿Necesita servicios de prevención locales?",
      type: "callout",
      content:
        "Use el directorio de servicios locales para los listados de salud pública, detección y farmacias si necesita un punto de partida concreto en Kingston.",
      link: {
        text: "Listados de salud pública y farmacias",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Atención comunitaria y de apoyo",
  description:
    "Use esta página para entender el cuidado en el hogar, la atención dental, la rehabilitación, la consejería, el apoyo para la vista y qué puede ser público, comunitario, estudiantil o privado.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Información oficial sobre la coordinación del cuidado en el hogar y comunitario.",
    },
    {
      title: "Canadá: Plan Canadiense de Atención Dental (CDCP)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Información oficial del programa federal de cobertura dental y su elegibilidad.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Información oficial sobre servicios comunitarios y dentales.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Información oficial sobre el apoyo para la vista.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "Qué significa atención comunitaria y de apoyo",
      type: "default",
      content:
        "La salud de apoyo (allied health) significa atención de profesionales como fisioterapeutas, terapeutas ocupacionales, dietistas, trabajadores sociales, consejeros, dentistas o equipos de apoyo para la vista. La atención comunitaria suele significar atención que ocurre fuera del hospital, a veces en su casa, su escuela, una clínica o un programa comunitario.",
    },
    {
      id: "access-payment-matrix",
      title: "Tabla de acceso y pago",
      type: "table",
      columns: ["Vía", "Ejemplos", "Cómo suele funcionar el pago", "Cómo empezar"],
      rows: [
        {
          cells: [
            "Cuidado en el hogar y comunitario con fondos públicos",
            "Enfermería en el hogar, terapia en el hogar, coordinación de cuidados",
            "Los programas públicos pueden aplicar si cumple las reglas del programa",
            "Empiece con una derivación de un profesional de salud o con la vía oficial de cuidado en el hogar",
          ],
        },
        {
          cells: [
            "Servicios comunitarios",
            "Atención dental de centros de salud comunitarios o apoyos con menos requisitos",
            "Puede aplicar financiamiento público o comunitario según el servicio",
            "Comuníquese directamente con el programa y pregunte por la elegibilidad",
          ],
        },
        {
          cells: [
            "Apoyos escolares",
            "Consejería del campus o apoyos relacionados con la salud",
            "Normalmente ligados a la elegibilidad estudiantil y a las cuotas o planes estudiantiles",
            "Use primero las páginas oficiales de servicios de su institución",
          ],
        },
        {
          cells: [
            "Atención de apoyo privada",
            "Fisioterapia, consejería, masajes, atención dental privada, servicios privados de la vista",
            "A menudo es pago privado, a menos que otro plan lo cubra",
            "Pida las tarifas completas y las reglas de cobertura antes de reservar",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Ejemplos de atención comunitaria y de apoyo",
      type: "grid",
      gridItems: [
        {
          title: "Cuidado en el hogar",
          content:
            "Útil cuando alguien necesita apoyo en casa después de una enfermedad, una lesión o una atención hospitalaria.",
          icon: "clock",
          link: {
            text: "Listados de cuidado en el hogar",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Atención dental",
          content:
            "La cobertura dental está separada de la cobertura médica regular. El Plan Canadiense de Atención Dental (CDCP), un programa federal, ahora cubre a muchas personas sin seguro dental privado, y programas como Healthy Smiles Ontario y las clínicas dentales comunitarias ayudan a grupos específicos.",
          icon: "shield",
          link: {
            text: "Listados dentales y comunitarios",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehabilitación y terapia",
          content:
            "La fisioterapia, la terapia ocupacional y los servicios relacionados pueden ser públicos, comunitarios o privados según su vía de acceso.",
          icon: "stethoscope",
          link: { text: "Listados de atención de apoyo", url: "/local-services?category=allied-community" },
        },
        {
          title: "Apoyo para la vista",
          content:
            "El apoyo para la vista puede incluir dispositivos, ayuda de orientación y apoyos comunitarios, además de la atención médica de los ojos.",
          icon: "info",
          link: {
            text: "Listados de apoyo para la vista",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Antes de reservar",
      type: "checklist",
      items: [
        "Pregunte si se necesita una derivación",
        "Pregunte si el servicio es público, con financiamiento comunitario o de pago privado",
        "Pida las tarifas exactas y las reglas de cancelación si el servicio es privado",
        "Verifique si su plan escolar o privado cubre parte del costo",
        "Pregunte si necesita llevar registros, imágenes o una nota del médico",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "Preguntas frecuentes y glosario",
  description:
    "Situaciones comunes de recién llegados, preguntas prácticas y definiciones en lenguaje sencillo.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: La atención de salud en Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientación general provincial de salud.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Orientación oficial de consejo de enfermería.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Situaciones comunes de recién llegados",
      type: "faq",
      faqs: [
        {
          question: "Todavía no tengo OHIP. ¿Qué debo hacer primero?",
          answer:
            "Primero conozca su ruta de cobertura, y luego use el directorio local y las páginas de orientación urgente para hacer un plan temporal seguro.",
        },
        {
          question: "Soy estudiante internacional. ¿Por dónde empiezo?",
          answer:
            "Empiece con el servicio de salud o bienestar de su campus y los documentos del seguro de su institución, y luego use los servicios comunitarios o urgentes cuando esos no sean suficientes.",
        },
        {
          question: "Necesito un intérprete.",
          answer:
            "Pídalo desde el principio. Puede leer este sitio en 33 idiomas usando el menú de Idioma, y puede mostrar al personal las frases rápidas de la pestaña de ayuda de intérpretes. Para citas, instrucciones de medicamentos, consentimiento y conversaciones sobre exámenes, pregunte por el apoyo de un intérprete profesional. Health811 (llame al 811) ofrece atención telefónica en muchos idiomas.",
        },
        {
          question: "Necesito análisis de sangre después de una visita.",
          answer:
            "Verifique que tenga una requisición (orden para un examen) y luego busque laboratorios e imágenes en el directorio.",
        },
        {
          question: "Necesito un resurtido y mi médico no está disponible.",
          answer:
            "Empiece con su farmacia, y luego use las vías sin cita previa, virtuales o urgentes según corresponda, dependiendo del medicamento y de la urgencia.",
        },
        {
          question: "Necesito atención para mi hijo o hija.",
          answer:
            "Use primero las señales de alarma de emergencia y luego la orientación del mismo día o urgente. Las rutas de salud mental para niños y jóvenes suelen estar separadas de la atención para adultos.",
        },
        {
          question: "Necesito ayuda de salud mental esta noche.",
          answer:
            "Llame o envíe un mensaje de texto al 9-8-8 (Línea de Ayuda en Crisis de Suicidio) en cualquier momento, o llame a la línea de crisis 24/7 de AMHS-KFLA al 613-544-4229. Use la atención de emergencia si la seguridad está en riesgo. No espere a una cita de rutina.",
        },
        {
          question: "No entiendo una requisición o una derivación.",
          answer:
            "Llame a la clínica que se la dio y pida que se la expliquen en lenguaje sencillo. Puede preguntar para qué es, adónde va y quién debe hacer el seguimiento.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Más preguntas comunes",
      type: "faq",
      faqs: [
        {
          question: "¿Puedo ir directamente a emergencias si no tengo médico?",
          answer:
            "Emergencias es para emergencias. Si el problema no pone claramente en riesgo la vida, empiece con la página de orientación urgente, Health811, una clínica sin cita previa u otra atención del mismo día.",
        },
        {
          question: "¿Qué pasa si soy nuevo y no sé qué servicio me corresponde?",
          answer:
            "Use los filtros del directorio para estudiantes, recién llegados, niños y jóvenes, sin cita previa, virtual, con derivación necesaria y tipo de cobertura.",
        },
        {
          question: "¿Qué pasa si la información de este sitio parece desactualizada?",
          answer:
            "Use el formulario de reporte en la página o el listado para que la próxima revisión pueda enfocarse en el cambio que usted encontró.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glosario",
      type: "checklist",
      items: [
        "Atención primaria: Su ruta habitual de atención de salud para necesidades de rutina y continuas.",
        "Enfermero/a especializado/a (nurse practitioner, NP): Un enfermero de práctica avanzada que puede evaluar, diagnosticar, recetar y derivar en muchas situaciones.",
        "Derivación: Una solicitud de un profesional de salud a otro servicio o especialista.",
        "Requisición: Un formulario que le indica a un laboratorio o a una clínica de imágenes qué examen necesita.",
        "Triaje: El proceso de decidir quién necesita atención urgente primero según la seguridad y la gravedad.",
        "Clínica sin cita previa: Una clínica que puede atender pacientes sin una cita reservada, sujeta a la admisión diaria.",
        "Atención urgente: Atención el mismo día para problemas urgentes que no ponen claramente en riesgo la vida.",
        "Paciente registrado o asignado: Un paciente que tiene una relación continua con un proveedor habitual de atención primaria.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Acerca de, confianza y privacidad",
  description:
    "Conozca cómo funciona esta guía, cómo se manejan las fuentes y el estado de revisión, y cómo reportar cambios.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Notas de fuentes del proyecto",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Resumen público de cómo el proyecto maneja la confianza y las fuentes.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Para qué sirve este sitio",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca es una guía de navegación de salud pensada para recién llegados en Kingston, Ontario. Está diseñada para ayudar a las personas a elegir el siguiente paso correcto, entender los términos comunes del sistema y encontrar listados confiables de servicios locales.\n\nEste sitio **no** es una herramienta de tiempos de espera en vivo, ni una plataforma de reservas, ni un servicio de consejo médico.",
    },
    {
      id: "sources",
      title: "Cómo funcionan la confianza y las fuentes",
      type: "default",
      content:
        "Tratamos de enlazar los listados locales a las páginas oficiales de los servicios siempre que es posible. Cada listado muestra un estado de revisión y la fecha de la última revisión. Algunas entradas están completamente verificadas contra fuentes oficiales. Otras todavía necesitan una nueva verificación local porque los horarios, la admisión o las reglas de acceso cambian con frecuencia.\n\nLos bloques de fuentes a nivel de página muestran las principales referencias oficiales usadas en el ciclo de revisión actual.",
    },
    {
      id: "accessibility",
      title: "Accesibilidad e idioma",
      type: "default",
      content:
        "Este sitio está hecho para usarse con el teclado, pensado primero para el celular y legible en lenguaje sencillo.\n\nPuede leer la guía completa en **33 idiomas** usando el menú de Idioma en el encabezado — desde العربية y Soomaali hasta ਪੰਜਾਬੀ, ትግርኛ, Yorùbá y Українська — con cada página y cada menú servidos directamente en este sitio. Todas las traducciones se hacen con ayuda de máquinas; el francés, el español, el árabe y el chino simplificado recibieron una revisión adicional, y las demás están marcadas como traducción automática. **El inglés sigue siendo la versión de referencia**: si una frase traducida parece confusa o sorprendente, revise el texto en inglés o pida a alguien que lo confirme.\n\nDecenas de idiomas más pueden abrir este sitio a través de Google Translate desde el mismo menú, y la pestaña de ayuda de intérpretes incluye frases rápidas urgentes en más de 20 idiomas que puede mostrar al personal.\n\nLos listados del directorio (nombres de servicios, direcciones, teléfonos y horarios) se mantienen en inglés para que coincidan exactamente con las fuentes oficiales.\n\nCualquier tipo de traducción puede seguir siendo incorrecta en los detalles médicos, así que pregunte por el apoyo de un intérprete profesional para las citas, las instrucciones de los medicamentos y el consentimiento. Health811 (llame al 811) ofrece atención telefónica en muchos idiomas.",
    },
    {
      id: "privacy",
      title: "Privacidad",
      type: "default",
      content:
        "Este sitio no usa análisis remotos invasivos. Guarda conteos ligeros de mejora en su propio navegador para que los responsables del sitio puedan entender las búsquedas comunes, las búsquedas sin resultados, las vistas de servicios y los reportes de problemas cuando la información se exporta de manera intencional para el mantenimiento.\n\nNo envíe información médica privada a través del formulario de comentarios ni por correo electrónico.",
    },
    {
      id: "contact",
      title: "Contacto y reporte de cambios",
      type: "default",
      content:
        "Si una página o un listado parece incorrecto, use el formulario de reporte en esa página. Los reportes deben describir el problema, no su situación de salud personal.\n\nCorreo electrónico de contacto general: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Aviso legal",
      type: "default",
      content:
        "Este sitio web es solo para orientación y educación. No es consejo médico y no sustituye el diagnóstico, el tratamiento ni la ayuda de emergencia profesionales. Si una situación puede poner en riesgo la vida, llame al 911.",
    },
  ],
};

export const kingstonContentEs: Record<string, PageContent> = {
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
