import type { PageContent } from "../../types";
import type { UIStrings } from "../types";

export const strings: UIStrings = {
  common: {
    loadingPage: "Carregando página...",
    directoryEnglishNote:
      "As listagens do diretório são mostradas em inglês para que os nomes dos serviços, endereços, telefones e horários correspondam exatamente às fontes oficiais.",
  },
  header: {
    emergencyBanner: "Emergência com risco de vida? Ligue 911 agora.",
    tagline:
      "Navegação em saúde para recém-chegados em Kingston, Ontário",
    languageButton: "Idioma",
    languageButtonAria: "Ajuda com idioma e intérprete",
    openNavigation: "Abrir navegação",
    primaryNavLabel: "Principal",
  },
  languageModal: {
    title: "Ajuda com idioma e intérprete",
    description:
      "Leia este guia no idioma em que você se sente mais confortável. Para conversas sobre saúde, peça um intérprete quando precisar.",
    chooseLanguageTitle: "Escolha seu idioma",
    chooseLanguageNote:
      "Este guia está totalmente traduzido em 33 idiomas neste site, e dezenas de outros idiomas abrem por tradução automática. As listagens do diretório permanecem em inglês para corresponder exatamente às fontes oficiais. O inglês é a versão de referência se algo parecer pouco claro.",
    safetyTitle: "Aviso de segurança",
    safetyBody:
      "A tradução do site serve para leitura e compreensão. Para consultas, instruções de exames, medicamentos ou consentimento, pergunte se a clínica ou o hospital pode oferecer um intérprete profissional. O Health811 (ligue 811) oferece atendimento por telefone em muitos idiomas.",
    phrasesTitle: "Frases rápidas para mostrar à equipe",
    phrasesNote:
      "Aponte para o seu idioma e mostre estas frases à recepção ou à equipe clínica.",
    callHealth811: "Ligar para o Health811",
    accessibilityCta: "Acessibilidade e confiança",
    close: "Fechar a janela de ajuda de idiomas",
  },
  moreLanguages: {
    title: "Mais idiomas (tradução automática)",
    description:
      "Todos os idiomas funcionam a partir deste único menu — incluindo somali, iorubá, igbo, hauçá, amárico, tigrínia, suaíli, ucraniano, persa (farsi), urdu, panjabi, tâmil e vietnamita.",
    selectLabel: "Escolha qualquer idioma",
    selectPlaceholder: "Todos os idiomas — selecione um…",
    openButton: "Abrir neste idioma",
    disclaimer:
      "Os idiomas marcados como automáticos abrem esta página pelo Google Translate e continuam no seu idioma enquanto você navega. A tradução automática não é revisada por este projeto — é boa para leitura, mas confirme detalhes médicos com um profissional de saúde ou intérprete.",
  },
  funding: {
    acknowledgment:
      "Este projeto é apoiado por um subsídio da Ontario Medical Students Association (OMSA).",
    logoAlt: "Logotipo da Ontario Medical Students Association (OMSA)",
  },
  languagePicker: {
    searchPlaceholder: "Pesquisar idiomas…",
    onSiteGroup: "Traduzido neste site",
    proxyGroup: "Mais idiomas via Google Translate",
    reviewedBadge: "Revisado",
    automaticBadge: "Automático",
    interpreterTab: "Ajuda com intérprete e frases",
    noMatches: "Nenhum idioma corresponde à sua pesquisa.",
    note: "As traduções são assistidas por máquina e o inglês é a versão de referência se algo parecer pouco claro. Os idiomas no grupo do Google Translate abrem esta página em um site externo do Google. As listagens do diretório permanecem em inglês para corresponder exatamente às fontes oficiais.",
  },
  navigation: [
    {
      title: "Comece aqui",
      items: [
        {
          label: "Preciso de ajuda agora",
          to: "/need-help-now",
          description: "Decisões urgentes e apoio em crises",
        },
        {
          label: "Comece aqui",
          to: "/start-here",
          description: "Novo no sistema de saúde de Ontário",
        },
        {
          label: "Encontrar cuidados primários",
          to: "/get-a-family-doctor",
          description:
            "Médicos, nurse practitioners, centros comunitários e opções para estudantes",
        },
      ],
    },
    {
      title: "Entenda o atendimento",
      items: [
        {
          label: "Custos e cobertura",
          to: "/costs-and-coverage",
          description:
            "OHIP, IFHP, planos privados e cobertura de medicamentos",
        },
        {
          label: "Sua consulta",
          to: "/your-visit",
          description: "O que levar e como fazer perguntas",
        },
        {
          label: "Depois da consulta",
          to: "/after-visit",
          description:
            "Exames, requisições, encaminhamentos e acompanhamento",
        },
        {
          label: "Medicamentos e farmácias",
          to: "/medicines-and-pharmacies",
          description: "Receitas, renovações e ajuda do farmacêutico",
        },
      ],
    },
    {
      title: "Ajuda local",
      items: [
        {
          label: "Serviços locais",
          to: "/local-services",
          description: "Pesquisar serviços em Kingston",
        },
        {
          label: "Saúde mental",
          to: "/mental-health",
          description:
            "Crise, urgência, atendimento de rotina e apoio para jovens",
        },
        {
          label: "Rastreamento e prevenção",
          to: "/screening-prevention",
          description: "Vacinas e cuidados preventivos",
        },
        {
          label: "Cuidados complementares e comunitários",
          to: "/community-allied-health",
          description:
            "Cuidados domiciliares, reabilitação, atendimento odontológico e apoios comunitários",
        },
        {
          label: "Perguntas frequentes",
          to: "/faq",
          description: "Situações comuns de recém-chegados e glossário",
        },
        {
          label: "Sobre e confiança",
          to: "/about",
          description: "Fontes, privacidade, acessibilidade e feedback",
        },
      ],
    },
  ],
  emergencyActions: {
    heading: "Precisa de ajuda agora mesmo?",
    items: {
      "call-911": {
        label: "Ligue 911",
        description: "Emergência com risco de vida",
      },
      "call-811": {
        label: "Ligue para o Health811",
        description: "Orientação de enfermagem, 24 horas",
      },
      "call-988": {
        label: "Ligue ou envie mensagem para 9-8-8",
        description: "Linha de ajuda em crises de suicídio, 24 horas",
      },
      "call-crisis": {
        label: "Ligue para a linha de crise",
        description: "Linha de crise da AMHS-KFLA",
      },
      "urgent-guide": {
        label: "Guia de atendimento urgente",
        description: "Opções fora do horário e no mesmo dia",
      },
      "mental-health": {
        label: "Apoio em saúde mental",
        description: "Caminhos de crise, urgência e rotina",
      },
    },
  },
  home: {
    seoTitle: "Guia de saúde de Kingston",
    seoDescription:
      "Navegação em saúde para recém-chegados em Kingston, Ontário: ajuda urgente, serviços locais, noções de cobertura, orientação sobre intérpretes e próximos passos depois de uma consulta.",
    kicker: "Kingston, Ontário",
    heroTitle: "Encontre o atendimento certo em Kingston sem adivinhar",
    heroLead:
      "Comece pela ajuda urgente, pelas noções básicas para recém-chegados, pela cobertura ou pelo diretório de serviços locais. Este guia usa linguagem simples, funciona bem no celular e é honesto sobre o que ainda precisa de nova verificação.",
    cardNeedHelp: {
      title: "Preciso de ajuda agora",
      body: "Orientação sobre emergência, atendimento urgente, crises e fora do horário.",
    },
    cardStartHere: {
      title: "Comece aqui",
      body: "Como funciona a saúde em Ontário e o que fazer primeiro.",
    },
    cardSearch: {
      title: "Pesquisar serviços",
      body: "Procure exames de sangue, renovação de receitas, atendimento sem agendamento, saúde mental e mais.",
    },
    cardLanguage: {
      title: "Ajuda com idiomas",
      body: "Leia este guia no seu idioma, além de orientação sobre intérpretes e frases rápidas.",
    },
    quickDecisionsKicker: "Decisões rápidas",
    quickDecisionsTitle: "Comece por estas perguntas",
    quickDecisionLines: [
      "Se houver risco de vida, ligue 911 agora.",
      "Se você não sabe onde ir hoje à noite, ligue para o Health811.",
      "Para pensamentos suicidas ou sofrimento intenso, ligue ou envie mensagem de texto para 9-8-8 a qualquer hora.",
      "Se você não tem médico de família, mantenha no seu plano as opções de clínicas sem agendamento, saúde comunitária e serviços para estudantes.",
      "Se você precisa de exame de sangue, raio-X, renovação de receita ou atualização de um encaminhamento, use o diretório local para encontrar o próximo passo.",
    ],
    trustNoteTitle: "Nota de confiança",
    trustNoteBody:
      "Este é um guia estático. Não mostramos tempos de espera em tempo real. Detalhes sensíveis ao tempo, como horários e admissão, podem mudar rapidamente, por isso cada listagem inclui um link da fonte e o status de revisão.",
    newcomerKicker: "Início rápido para recém-chegados",
    newcomerTitle: "Primeiros passos se você é novo em Kingston",
    newcomerSteps: [
      {
        title: "1. Conheça sua cobertura",
        body: "Entenda o OHIP, o IFHP, os planos privados e o que normalmente não é coberto. Não há período de espera para o OHIP - solicite assim que chegar.",
      },
      {
        title: "2. Planeje seu caminho de cuidados primários",
        body: "Aprenda a diferença entre médicos de família, nurse practitioners (enfermeiros de prática avançada), clínicas para estudantes, centros de saúde comunitários e atendimento sem agendamento.",
      },
      {
        title: "3. Saiba o que acontece depois",
        body: "Aprenda o que requisições, encaminhamentos, resultados de exames e ligações de acompanhamento normalmente significam.",
      },
    ],
    languageSupportKicker: "Apoio de idiomas",
    languageSupportTitle: "Mostre estas frases se precisar de ajuda",
    openLanguageHelp: "Abrir ajuda de idiomas",
    commonTasksKicker: "Tarefas comuns",
    commonTasksTitle: "Pesquise pela tarefa que você precisa resolver",
    openDirectory: "Abrir diretório completo",
    tasks: [
      {
        title: "Exame de sangue ou raio-X",
        body: "Encontre laboratórios e serviços de imagem.",
      },
      {
        title: "Renovação de receita",
        body: "Encontre farmácias e ajuda com renovações.",
      },
      {
        title: "Apoio em saúde mental",
        body: "Crise, urgência, rotina e apoio para jovens.",
      },
      {
        title: "Cartão de saúde ou apoio a recém-chegados",
        body: "Encontre o ServiceOntario, a ISKA e orientação por telefone.",
      },
    ],
    featuredKicker: "Serviços em destaque",
    featuredTitle: "Bons lugares para começar",
    trustKicker: "Confiança e fontes",
    trustTitle:
      "Honestos sobre o que está verificado e o que ainda precisa de nova verificação",
    trustBody:
      "Algumas listagens são verificadas em fontes oficiais locais. Outras ainda precisam de uma nova verificação local porque horários, admissão ou regras de acesso mudam com frequência. Mostramos esse status abertamente e incentivamos as pessoas a relatar informações desatualizadas.",
    trustChecklistTitle: "Leia antes de confiar em uma listagem",
    trustChecklist: [
      "Procure o link da fonte oficial.",
      "Verifique a data da última revisão.",
      "Confirme os horários do mesmo dia e o atendimento sem agendamento antes de ir.",
      "Use o formulário de relato se notar uma mudança.",
    ],
    trustLink: "Ver fontes e notas de confiança",
  },
  contentPage: {
    breadcrumbHome: "Início",
    badge: "Guia em linguagem simples",
    reviewStatusTitle: "Status de revisão",
    reviewLabels: {
      reviewed:
        "Revisado com base no conjunto atual de fontes usado por este projeto.",
      "general-guidance":
        "Revisado como orientação geral. Detalhes locais ainda podem mudar rapidamente.",
      "needs-local-recheck":
        "Orientação útil, mas os detalhes locais ainda precisam de mais verificação.",
    },
    lastReviewPrefix: "Última revisão da página:",
    noReviewDate:
      "Esta página não tem uma data de revisão registrada.",
    translationAside:
      "Você pode ler esta página em vários idiomas usando o menu Idioma. Para consultas, medicamentos, consentimento e instruções de exames, pergunte se há apoio de intérprete disponível.",
    share: "Compartilhar",
    print: "Imprimir",
    sourcesTitle: "Fontes desta página",
    sourcesNote:
      "Estas são as principais fontes oficiais ou primárias usadas na revisão atual da página. Os processos locais ainda podem mudar entre os ciclos de revisão.",
    onThisPage: "Nesta página",
    sourcesAnchorLabel: "Fontes",
    translationReminderTitle: "Lembrete sobre tradução",
    translationReminderBody:
      "Se algo afeta seu tratamento ou sua segurança, confirme com um profissional de saúde ou intérprete em vez de confiar apenas na tradução.",
    linkCopiedTitle: "Link copiado",
    linkCopiedBody:
      "Agora você pode colar o link desta página em qualquer lugar.",
    shareCancelled: "Compartilhamento cancelado",
  },
  directory: {
    seoTitle: "Serviços locais",
    seoDescription:
      "Pesquise serviços de saúde, saúde mental, farmácia, cobertura e navegação acolhedores para recém-chegados em Kingston, Ontário.",
    kicker: "Diretório de Kingston",
    title: "Pesquisar serviços de saúde locais",
    lead: "Pesquise por serviço, sintoma, documento ou tarefa. Exemplos: walk in (sem agendamento), after hours (fora do horário), bloodwork (exame de sangue), refill (renovação de receita), health card (cartão de saúde), student clinic (clínica de estudantes) ou newcomer support (apoio a recém-chegados).",
    searchPlaceholder:
      "Pesquise por necessidade, nome do serviço, endereço ou palavra-chave",
    sortAriaLabel: "Ordenar resultados",
    sortRelevance: "Ordenar: Relevância",
    sortAlphabetical: "Ordenar: A a Z",
    sortRecentlyReviewed: "Ordenar: Revisados recentemente",
    sortArea: "Ordenar: Região",
    gridViewLabel: "Visualização em grade",
    listViewLabel: "Visualização em lista",
    allServices: "Todos os serviços",
    audienceTitle: "Público",
    accessTitle: "Acesso",
    careLevelTitle: "Nível de atendimento",
    coverageAreaTitle: "Cobertura e região",
    areaLabel: "Região",
    showingServices: "Mostrando {count} serviços",
    resetFilters: "Limpar filtros",
    trustPanelTitle: "Confiança e status de revisão",
    trustPanelBody:
      "Este diretório é estático, não em tempo real. Mostramos a última data de revisão registrada, links de fontes oficiais quando disponíveis e quais listagens ainda precisam de nova verificação local. Confirme os horários e o atendimento no mesmo dia antes de ir.",
    verifiedLabel: "Verificado",
    needsRecheckLabel: "Precisa de nova verificação",
    noResultsTitle: "Nenhum serviço correspondeu a esses filtros",
    noResultsBody:
      "Tente uma pesquisa mais ampla, como bloodwork, refill, mental health, health card ou walk in. Você também pode limpar todos os filtros e começar de novo.",
    notSureTitle: "Não sabe por onde começar?",
    notSureBody:
      "Se você não tem certeza se precisa de atendimento de emergência, atendimento urgente, uma clínica sem agendamento ou apoio da farmácia, comece pela página de orientação urgente ou ligue para o Health811 para orientação de enfermagem.",
    needHelpNowCta: "Preciso de ajuda agora",
    callHealth811: "Ligar para o Health811",
  },
  filters: {
    audience: {
      newcomers: "Recém-chegados",
      students: "Somente estudantes ou campus",
      "children-youth": "Crianças ou jovens",
      adults: "Adultos",
      families: "Famílias",
      "unattached-patients": "Sem médico de família",
    },
    access: {
      "walk-in": "Sem agendamento (walk-in)",
      appointment: "Com agendamento",
      referral: "Encaminhamento necessário",
      virtual: "Virtual",
    },
    level: {
      emergency: "Emergência",
      urgent: "Urgente",
      primary: "Primário",
      community: "Comunitário",
    },
    payment: {
      public: "Financiado publicamente",
      community: "Comunitário / baixa barreira",
      mixed: "Cobertura mista",
      "student-plan": "Plano estudantil",
      private: "Pagamento particular",
    },
    location: {
      downtown: "Centro",
      "north-end": "Zona Norte",
      "west-end": "Zona Oeste",
      campus: "Campus",
      online: "Online",
    },
  },
  categories: {
    "emergency-urgent": {
      label: "Atendimento de emergência e urgência",
      shortLabel: "Emergência e urgência",
    },
    "primary-care": {
      label: "Cuidados primários",
      shortLabel: "Cuidados primários",
    },
    "community-health": {
      label: "Centros de saúde comunitários",
      shortLabel: "Saúde comunitária",
    },
    "mental-health": {
      label: "Saúde mental e apoio em crises",
      shortLabel: "Saúde mental",
    },
    "public-health": {
      label: "Saúde pública",
      shortLabel: "Saúde pública",
    },
    "labs-imaging": {
      label: "Laboratórios e exames de imagem",
      shortLabel: "Laboratórios e imagem",
    },
    pharmacies: {
      label: "Medicamentos e farmácias",
      shortLabel: "Farmácias",
    },
    "allied-community": {
      label: "Cuidados complementares e comunitários",
      shortLabel: "Cuidados complementares",
    },
    "navigation-support": {
      label: "Apoio de navegação e cobertura",
      shortLabel: "Navegação",
    },
  },
  serviceCard: {
    whenToUse: "Quando usar:",
    accessLabel: "Acesso",
    eligibilityLabel: "Elegibilidade",
    eligibilityFallback:
      "Aberto ao público em geral, a menos que a fonte oficial diga o contrário.",
    hoursLabel: "Horários",
    phoneLabel: "Telefone",
    trustDetails: "Detalhes de confiança e fonte",
    lastReview: "Última revisão:",
    officialSource: "Fonte oficial",
    call: "Ligar",
    officialWebsite: "Site oficial",
    directions: "Como chegar",
    viewDetails: "Ver detalhes",
  },
  serviceDetail: {
    backToServices: "Voltar aos serviços locais",
    whenToUseTitle: "Quando usar este serviço",
    eligibilityTitle: "Elegibilidade e acesso",
    eligibilityFallback:
      "Consulte a fonte oficial se você não tem certeza se este serviço está aberto para você.",
    whatToBringTitle: "O que levar",
    contactTitle: "Contato e ações",
    callNow: "Ligar agora",
    officialWebsite: "Site oficial",
    directions: "Como chegar",
    trustTitle: "Confiança e fonte",
    lastReview: "Última revisão:",
    viewOfficialSource: "Ver fonte oficial",
  },
  verification: {
    verified: {
      label: "Verificado em fonte oficial",
      shortLabel: "Verificado",
      description:
        "Os detalhes principais foram verificados em uma fonte oficial no ciclo de revisão mais recente.",
    },
    "partially-verified": {
      label: "Fonte oficial vinculada",
      shortLabel: "Link oficial",
      description:
        "Há uma fonte oficial vinculada, mas um ou mais detalhes podem mudar com frequência e devem ser confirmados antes de ir.",
    },
    "community-reported": {
      label: "Relatado pela comunidade",
      shortLabel: "Relato comunitário",
      description:
        "Esta informação veio de relatos da comunidade e ainda precisa de confirmação independente.",
    },
    "needs-recheck": {
      label: "Precisa de nova verificação",
      shortLabel: "Precisa de verificação",
      description:
        "Esta listagem continua visível porque ainda pode ajudar, mas detalhes importantes podem estar desatualizados. Confirme antes de confiar nela.",
    },
  },
  feedback: {
    badge: "Relatar informação desatualizada",
    title: "Ajude-nos a manter este guia preciso",
    body: "Isto abre um e-mail pré-preenchido com o contexto da página ou do serviço. Não inclua informações médicas privadas.",
    issueTypeLabel: "Tipo de problema",
    issueTypes: {
      "outdated hours": "Horários desatualizados",
      "wrong phone or website": "Telefone ou site errado",
      "eligibility or access issue": "Problema de elegibilidade ou acesso",
      "translation or accessibility problem":
        "Problema de tradução ou acessibilidade",
      "missing service or content": "Serviço ou conteúdo faltando",
      other: "Outro",
    },
    detailsLabel: "O que devemos verificar?",
    detailsPlaceholder:
      "Exemplo: o número de telefone mudou, uma clínica agora atende só com agendamento, ou um link está quebrado.",
    contactLabel: "Contato opcional",
    contactPlaceholder: "Endereço de e-mail se você quiser uma resposta",
    openEmail: "Abrir e-mail de relato",
    copyText: "Copiar texto do relato",
    thanks:
      "Obrigado. Os relatos nos ajudam a priorizar páginas desatualizadas, links quebrados e listagens que precisam de novas verificações locais.",
    toastEmailTitle: "Rascunho de e-mail aberto",
    toastEmailBody: "Seu relato inclui o contexto da página ou do serviço.",
    toastCopyTitle: "Resumo do problema copiado",
    toastCopyBody:
      "Você pode colá-lo no seu próprio aplicativo de e-mail, se necessário.",
  },
  footer: {
    description:
      "Um guia de navegação em saúde em linguagem simples para Kingston, Ontário. Este site não oferece aconselhamento médico nem tempos de espera em tempo real. Sempre confirme detalhes sensíveis ao tempo com a fonte oficial antes de ir.",
    trustModelTitle: "Modelo de confiança",
    trustModelBody:
      "Mostramos links de fontes oficiais, datas de revisão e listagens que ainda precisam de novas verificações. Se algo parecer errado, relate a partir da página ou do serviço.",
    beforeYouGo: {
      title: "Antes de ir",
      body: "Verifique os horários oficiais, se você precisa de agendamento ou encaminhamento e quais documentos levar.",
    },
    languageHelp: {
      title: "Ajuda com idiomas",
      body: "Leia este guia no seu idioma usando o menu Idioma. Peça um intérprete para conversas clínicas quando a precisão for importante.",
    },
    privacy: {
      title: "Privacidade",
      body: "Este site usa registros locais de melhoria, respeitosos com a privacidade, armazenados no seu navegador. Ele não envia dados pessoais de análise para um servidor remoto.",
    },
    copyrightSuffix:
      "Recurso de informação comunitária para Kingston, Ontário.",
    disclaimer: "Aviso legal",
    privacyLink: "Privacidade",
    sourcesLink: "Fontes",
    reportLink: "Relatar informação desatualizada",
  },
  notFound: {
    seoTitle: "Página não encontrada",
    seoDescription:
      "A página que você solicitou não foi encontrada. Comece pela ajuda urgente, pelas noções básicas para recém-chegados, pelos serviços locais ou pelas perguntas frequentes.",
    badge: "404",
    title: "Não conseguimos encontrar essa página",
    body: "Se você está tentando conseguir atendimento rapidamente, comece pela orientação urgente ou pesquise no diretório de serviços de Kingston.",
    startHere: "Comece aqui",
    needHelpNow: "Preciso de ajuda agora",
    localServices: "Serviços locais",
    faq: "Perguntas frequentes",
  },
};

const homePage: PageContent = {
  title: "Guia de Navegação em Saúde de Kingston",
  description:
    "Um guia em linguagem simples, pensado para recém-chegados, sobre como encontrar atendimento de saúde em Kingston, Ontário.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Comece Aqui",
  description:
    "Novo em Kingston ou novo no sistema de saúde de Ontário? Comece aqui para aprender como o sistema funciona e o que fazer primeiro.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontário: Cuidados de saúde em Ontário",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Visão geral de como funciona o atendimento coberto em Ontário.",
    },
    {
      title: "Ontário: Solicite o OHIP e obtenha um cartão de saúde",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Informações oficiais sobre solicitação e elegibilidade do OHIP.",
    },
    {
      title: "Ontário: Encontre um médico de família ou nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Orientação sobre o Health Care Connect e o acesso a cuidados primários.",
    },
    {
      title: "Canadá: Interim Federal Health Program (Programa Federal Provisório de Saúde)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Informações de cobertura federal para refugiados e solicitantes de refúgio elegíveis.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "Como a saúde funciona em Ontário",
      type: "default",
      content: `O sistema de saúde de Ontário é organizado em torno dos **cuidados primários**. Cuidados primários são o lugar onde você normalmente começa para necessidades de saúde de rotina, condições contínuas, receitas, encaminhamentos e prevenção. Seu provedor de cuidados primários pode ser um médico de família, um nurse practitioner (enfermeiro de prática avançada), uma equipe de centro de saúde comunitário ou uma clínica de saúde estudantil, se você se qualificar.

Um **encaminhamento** é quando um profissional de saúde pede que outro serviço ou especialista atenda você. Uma **requisição** é um formulário que informa ao laboratório ou à clínica de imagem qual exame você precisa fazer.

Você não precisa entender todas as partes do sistema no primeiro dia. Os passos mais importantes são: conhecer sua cobertura, saber onde ir em situações urgentes e fazer um plano de cuidados regulares se você ainda não tem um provedor.`,
    },
    {
      id: "first-decisions",
      title: "Primeiras decisões",
      type: "grid",
      gridItems: [
        {
          title: "Posso precisar de ajuda urgente",
          content:
            "Comece pela orientação sobre emergência versus atendimento urgente se você tem um problema repentino hoje ou esta noite.",
          icon: "alert",
          link: { text: "Preciso de ajuda agora", url: "/need-help-now" },
        },
        {
          title: "Não tenho médico de família",
          content:
            "Aprenda como médicos de família, nurse practitioners, centros de saúde comunitários, clínicas sem agendamento e clínicas para estudantes se encaixam.",
          icon: "stethoscope",
          link: { text: "Encontrar cuidados primários", url: "/get-a-family-doctor" },
        },
        {
          title: "Preciso entender o que é coberto",
          content:
            "Leia sobre OHIP, IFHP, seguro privado, planos estudantis, cobertura de medicamentos e custos comuns pagos do próprio bolso.",
          icon: "shield",
          link: { text: "Custos e cobertura", url: "/costs-and-coverage" },
        },
        {
          title: "Preciso de ajuda com o idioma",
          content:
            "Leia este guia em 33 idiomas usando o menu Idioma, e pergunte sobre apoio de intérprete para conversas clínicas e consentimento.",
          icon: "info",
          link: { text: "Acessibilidade e idioma", url: "/about#accessibility" },
        },
        {
          title: "Preciso de exames de sangue, de imagem ou de uma renovação",
          content:
            "Use o diretório local para encontrar o próximo passo prático depois de uma consulta.",
          icon: "file",
          link: { text: "Pesquisar serviços locais", url: "/local-services" },
        },
        {
          title: "Não sei por onde começar",
          content:
            "Ligue para o Health811 para orientação de enfermagem se você não tem certeza da urgência da sua situação.",
          icon: "clock",
          link: { text: "Health811 e orientação urgente", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Bons primeiros passos na sua primeira semana",
      type: "steps",
      items: [
        "Conheça sua cobertura: Leia o que o OHIP, o IFHP, o seguro privado e os planos estudantis normalmente cobrem. Se você pode se qualificar para o OHIP, solicite assim que puder.",
        "Defina seu plano para urgências: Saiba quando ligar para o 911, quando começar pelo Health811 e onde encontrar atendimento urgente ou no mesmo dia em Kingston.",
        "Planeje os cuidados regulares: Se você não tem um provedor regular, conheça suas opções de médicos de família, nurse practitioners, centros de saúde comunitários, clínicas para estudantes, clínicas sem agendamento e atendimento virtual.",
        "Mantenha suas informações de saúde juntas: Guarde seu cartão de saúde ou documentos do IFHP, a lista de medicamentos, o registro de vacinas e cópias de quaisquer requisições ou encaminhamentos.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "Se você ainda não tem OHIP",
      type: "callout",
      content:
        "Não espere ficar doente para conhecer seu caminho de cobertura. Se você é elegível para o OHIP, solicite cedo. Se você é coberto pelo IFHP ou por um plano escolar ou privado, mantenha essa informação com você. Se você não tem seguro, pergunte sobre as taxas antes de uma consulta e procure serviços comunitários ou de baixa barreira quando apropriado.",
      link: { text: "Leia sobre cobertura", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Mantenha estas coisas à mão",
      type: "checklist",
      items: [
        "Seu cartão de saúde, documentos do IFHP ou informações do seguro",
        "Uma lista de medicamentos, mesmo que você tome só alguns",
        "O nome e o telefone da sua última clínica ou provedor, se você tiver",
        "Quaisquer requisições, encaminhamentos, documentos de alta ou instruções de exames recentes",
        "Perguntas que você quer fazer em linguagem simples",
        "Suas necessidades de intérprete anotadas para você lembrar de pedir",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Precisa de Ajuda Agora?",
  description:
    "Use esta página quando você tem um problema de saúde hoje ou esta noite e não sabe por onde começar.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontário: Receba orientação médica do Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Serviço oficial de orientação de enfermagem 24 horas.",
    },
    {
      title: "9-8-8: Suicide Crisis Helpline (Linha de Ajuda em Crises de Suicídio)",
      url: "https://988.ca/",
      note: "Linha nacional oficial para crises de suicídio. Ligue ou envie mensagem de texto para 9-8-8, gratuito, 24 horas.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Rede hospitalar oficial para informações de emergência, atendimento urgente e exames de imagem.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Organização oficial local de saúde mental e apoio em crises.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Emergência ou urgência?",
      type: "comparison",
      comparison: {
        left: {
          title: "Vá direto para a emergência em problemas como:",
          items: [
            "Dor no peito, grande dificuldade para respirar ou sinais de AVC",
            "Sangramento intenso, lesão grave ou perda de consciência",
            "Confusão súbita, convulsão ou reação alérgica grave",
            "Uma emergência de segurança em que esperar poderia colocar a vida ou um membro do corpo em risco",
          ],
        },
        right: {
          title:
            "Comece pelo atendimento urgente, pelo Health811 ou por uma clínica de mesmo dia em problemas como:",
          items: [
            "Entorses, cortes pequenos, erupções na pele, dor de ouvido ou febre sem sinais de alerta de emergência",
            "Problemas de renovação de receita que não podem esperar por uma consulta de rotina",
            "Dúvidas sobre se você precisa de atendimento urgente esta noite",
            "Um problema que parece urgente, mas sem risco claro de vida",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Situações comuns fora do horário",
      type: "table",
      columns: ["Situação", "Bom primeiro passo", "O que lembrar"],
      rows: [
        {
          cells: [
            "Não sei o quanto isso é urgente",
            "Ligue para o Health811",
            "Um profissional de enfermagem pode ajudar você a decidir entre ficar em casa, procurar atendimento urgente ou ir para a emergência.",
          ],
        },
        {
          cells: [
            "Meu médico está fechado e preciso de orientação esta noite",
            "Health811 ou orientação de atendimento urgente",
            "Não presuma que a emergência é sua única opção se não houver sinais de alerta de emergência.",
          ],
        },
        {
          cells: [
            "Preciso de atendimento para meu filho",
            "Use os mesmos sinais de alerta de emergência e depois procure atendimento no mesmo dia ou ligue para o Health811 se estiver em dúvida",
            "Leve o cartão de saúde da criança, a lista de medicamentos e, se possível, a linha do tempo dos sintomas.",
          ],
        },
        {
          cells: [
            "Preciso de ajuda de saúde mental esta noite",
            "Ligue ou envie mensagem de texto para 9-8-8 (Suicide Crisis Helpline), ou ligue para a linha de crise 24 horas da AMHS-KFLA",
            "Se houver risco imediato à segurança, ligue 911.",
          ],
        },
      ],
      caption:
        "Esta tabela é apenas orientação geral. Se alguém pode estar em perigo imediato, ligue 911.",
    },
    {
      id: "kingston-start-points",
      title: "Pontos de partida em Kingston",
      type: "grid",
      gridItems: [
        {
          title: "Departamento de Emergência",
          content:
            "Use o atendimento de emergência para problemas com risco de vida ou com possível risco de vida.",
          icon: "alert",
          link: {
            text: "Listagens de emergência e urgência",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Centro de Atendimento Urgente",
          content:
            "Útil para muitos problemas de mesmo dia que não podem esperar, mas que não são emergências claras.",
          icon: "clock",
          link: {
            text: "Atendimento urgente e no mesmo dia",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "Orientação de enfermagem por telefone ou online se você não sabe onde ir. O atendimento por telefone está disponível em muitos idiomas.",
          icon: "info",
          link: { text: "Listagem do Health811", url: "/local-services/health811" },
        },
        {
          title: "Apoio em crises de saúde mental",
          content:
            "Ligue ou envie mensagem de texto para 9-8-8 (Suicide Crisis Helpline) a qualquer hora, ou use o apoio local em crises, como a linha de crise 24 horas da AMHS-KFLA.",
          icon: "heart",
          link: { text: "Listagens de saúde mental", url: "/local-services?category=mental-health" },
        },
        {
          title: "Apoio em casos de violência sexual",
          content:
            "Use apoio especializado em crises se você precisa de apoio emocional imediato, defesa de direitos ou planejamento de segurança.",
          icon: "shield",
          link: {
            text: "Listagens de apoio",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Opções urgentes para estudantes",
          content:
            "Se você é estudante, verifique se o serviço de saúde do seu campus é a melhor primeira parada para necessidades que não são emergência.",
          icon: "stethoscope",
          link: { text: "Listagens de saúde estudantil", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "Se você ainda está em dúvida",
      type: "callout",
      content:
        "Quando o problema não apresenta risco claro de vida, mas você está preocupado em esperar, comece pelo Health811. Se alguém pode não estar seguro, pode estar piorando rapidamente ou você não consegue obter a ajuda certa a tempo, use os serviços de emergência.",
      link: { text: "Ligar para o Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Leve estas coisas se puder",
      type: "checklist",
      items: [
        "Cartão de saúde, documentos do IFHP ou qualquer cartão de seguro que você tenha",
        "Uma lista de medicamentos ou fotos dos frascos de remédio",
        "A hora em que os sintomas começaram e qualquer coisa que os tenha piorado",
        "Suas necessidades de intérprete anotadas, caso você esteja estressado demais para lembrar depois",
        "Um carregador de celular e uma pessoa de apoio, se isso ajudar você",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Encontrando Cuidados Primários",
  description:
    "Conheça os diferentes caminhos para ter atendimento de saúde regular em Kingston se você ainda não tem um provedor.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontário: Encontre um médico de família ou nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Orientação oficial do Health Care Connect.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Informações oficiais sobre os serviços dos centros de saúde comunitários locais.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Informações oficiais de saúde estudantil para estudantes da Queen's.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Informações oficiais de saúde estudantil para estudantes do St. Lawrence College.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "O que significam cuidados primários",
      type: "default",
      content:
        "Cuidados primários são o lugar aonde você normalmente vai primeiro para necessidades de saúde de rotina. Isso inclui check-ups, renovações de medicamentos, cuidado de doenças crônicas, encaminhamentos, cuidados preventivos e acompanhamento depois de problemas urgentes.\n\nEm Kingston, seu caminho regular de cuidados primários pode envolver um médico de família, um nurse practitioner (enfermeiro de prática avançada), um centro de saúde comunitário, uma clínica de campus ou uma combinação de opções temporárias enquanto você espera por um atendimento mais estável.",
    },
    {
      id: "access-matrix",
      title: "Caminhos de acesso aos cuidados primários",
      type: "table",
      columns: ["Caminho", "Melhor para", "Quem pode usar", "Como começar"],
      rows: [
        {
          cells: [
            "Médico de família ou nurse practitioner",
            "Cuidado regular contínuo e planejamento de saúde de longo prazo",
            "Pacientes que conseguem se registrar com um provedor",
            "Use o Health Care Connect e fique atento a vagas locais",
          ],
        },
        {
          cells: [
            "Centro de saúde comunitário",
            "Cuidado de base comunitária, apoio de baixa barreira e alguns cuidados para recém-chegados ou necessidades complexas",
            "A elegibilidade depende do programa e do status de admissão",
            "Entre em contato direto com a organização e pergunte sobre a admissão",
          ],
        },
        {
          cells: [
            "Serviço de saúde estudantil",
            "Acesso mais rápido para estudantes registrados",
            "Apenas estudantes que se qualificam pela instituição de ensino",
            "Use o serviço de saúde ou bem-estar do seu campus",
          ],
        },
        {
          cells: [
            "Clínica sem agendamento ou atendimento urgente no mesmo dia",
            "Cuidado de curto prazo enquanto você espera ou quando seu provedor regular não está disponível",
            "Público em geral, sujeito às regras diárias de admissão",
            "Verifique o acesso atual antes de ir",
          ],
        },
        {
          cells: [
            "Cuidados primários virtuais",
            "Algumas renovações, orientações e questões de rotina",
            "Varia conforme o provedor e a cobertura",
            "Verifique o que o provedor pode e não pode tratar com segurança online",
          ],
        },
      ],
      caption:
        "O melhor caminho depende da sua elegibilidade, da urgência e de você precisar de cuidado de curto prazo ou contínuo.",
    },
    {
      id: "if-you-have-no-provider",
      title: "Se você não tem um provedor regular",
      type: "steps",
      items: [
        "Registre-se pelo caminho oficial da província: Use o Health Care Connect se você não tem um médico de família ou nurse practitioner.",
        "Verifique se você se qualifica para opções de campus ou de saúde comunitária: Estudantes devem começar pela clínica da instituição. Alguns serviços de saúde comunitária têm prioridades específicas de admissão.",
        "Monte um plano temporário seguro: Saiba quais serviços sem agendamento, urgentes, virtuais, de farmácia e de saúde mental você pode usar enquanto espera.",
        "Guarde seus próprios registros: Salve listas de medicamentos, resultados de exames, encaminhamentos e os nomes dos profissionais que atenderam você.",
      ],
    },
    {
      id: "while-you-wait",
      title: "O que fazer enquanto espera",
      type: "checklist",
      items: [
        "Use atendimento sem agendamento, urgente ou virtual para necessidades de curto prazo, quando apropriado",
        "Pergunte na farmácia que ajuda com renovações ou cuidado de problemas menores pode estar disponível",
        "Mantenha uma única lista de medicamentos atualizada e leve-a a todas as consultas",
        "Leve cópias de resultados importantes ou documentos de alta quando o cuidado estiver fragmentado",
        "Use a mesma clínica para o acompanhamento sempre que possível, para que seu cuidado fique um pouco mais consistente",
      ],
    },
    {
      id: "next-best-option",
      title: "Se sua necessidade é urgente, mas não é uma emergência",
      type: "callout",
      content:
        "Não ter um médico de família não significa que você deva adiar cuidados importantes. Use a opção de curto prazo certa para o problema que está na sua frente e depois faça um plano de continuidade depois que o problema urgente for tratado.",
      link: { text: "Pesquisar opções de cuidados primários", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Custos e Cobertura",
  description:
    "Orientação de cobertura em linguagem simples sobre o OHIP, o IFHP, o Canadian Dental Care Plan, planos estudantis ou privados e custos comuns pagos do próprio bolso.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontário: Solicite o OHIP e obtenha um cartão de saúde",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Orientação oficial do OHIP.",
    },
    {
      title: "Canadá: Interim Federal Health Program (Programa Federal Provisório de Saúde)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Informações oficiais de cobertura do IFHP.",
    },
    {
      title: "Ontario Drug Benefit (benefício de medicamentos de Ontário)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Orientação oficial provincial de cobertura de medicamentos.",
    },
    {
      title: "Ontário: Obtenha ajuda com custos altos de medicamentos",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Orientação oficial do Trillium Drug Program.",
    },
    {
      title: "Canadá: Canadian Dental Care Plan (plano odontológico canadense)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Informações oficiais e elegibilidade do programa federal de cobertura odontológica.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Noções básicas de cobertura",
      type: "default",
      content:
        "A cobertura em Ontário depende do seu status legal, idade, renda, elegibilidade para programas e de você ter ou não um plano escolar ou de seguro privado.\n\nMuitos serviços médicos e hospitalares clinicamente necessários são cobertos para pacientes elegíveis do OHIP. Isso **não** significa que tudo é gratuito. Medicamentos, atendimento odontológico, cuidados com a visão, formulários, atestados e muitos serviços de saúde complementares costumam envolver cobertura separada ou pagamento do próprio bolso.\n\nBoa notícia se você acabou de chegar: **não há período de espera para o OHIP**. Se você é elegível, pode solicitar assim que chegar a Ontário, e a cobertura começa quando sua solicitação for aprovada. Não espere ficar doente para solicitar.",
    },
    {
      id: "coverage-matrix",
      title: "Caminhos de cobertura em resumo",
      type: "table",
      columns: [
        "Tipo de cobertura",
        "Normalmente ajuda com",
        "O que ainda pode não ser coberto",
        "O que fazer em seguida",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Muitos serviços médicos e hospitalares clinicamente necessários",
            "Muitos medicamentos, atendimento odontológico, cuidados com a visão e formulários",
            "Solicite se for elegível e mantenha seu cartão atualizado",
          ],
        },
        {
          cells: [
            "IFHP",
            "Cobertura para refugiados e solicitantes de refúgio elegíveis conforme o programa federal",
            "Os detalhes variam por categoria e serviço",
            "Consulte o guia oficial do IFHP e pergunte à clínica ou farmácia se eles o aceitam",
          ],
        },
        {
          cells: [
            "Seguro escolar ou privado",
            "Costuma ajudar com medicamentos, aconselhamento, atendimento odontológico, visão e saúde complementar",
            "Limites de cobertura, copagamentos e regras de rede variam",
            "Leia o manual do plano antes de presumir que um serviço é coberto",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan (CDCP)",
            "Cobertura odontológica para residentes elegíveis sem acesso a seguro odontológico privado e com renda familiar ajustada abaixo de $90.000",
            "Nem todo procedimento é coberto, e um copagamento pode se aplicar dependendo da renda",
            "Verifique a elegibilidade e solicite pela página oficial do CDCP do Governo do Canadá",
          ],
        },
        {
          cells: [
            "Sem cobertura ativa",
            "Você ainda pode conseguir acessar alguns serviços, mas taxas podem ser cobradas",
            "Os custos podem ser significativos para consultas, exames ou medicamentos",
            "Pergunte sobre as taxas antes da consulta e procure opções comunitárias quando apropriado",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "O que muitas vezes não é totalmente coberto",
      type: "checklist",
      items: [
        "Muitos medicamentos com receita, a menos que você se qualifique para um programa público ou tenha outro plano",
        "Atendimento odontológico, a menos que você se qualifique para o Canadian Dental Care Plan, o Healthy Smiles Ontario, um programa odontológico comunitário ou um plano de benefícios",
        "Cuidados com a visão fora de caminhos específicos de elegibilidade",
        "Fisioterapia, aconselhamento, massagem e outros serviços de saúde complementares, a menos que um programa ou plano os cubra",
        "Formulários, cartas, taxas por consulta perdida e muitas outras cobranças administrativas",
      ],
    },
    {
      id: "drug-coverage",
      title: "Caminhos de cobertura de medicamentos",
      type: "default",
      content:
        "A cobertura de medicamentos costuma ser onde os recém-chegados se surpreendem. A consulta médica pode estar coberta, mas a receita ainda pode custar dinheiro.\n\nProgramas públicos de medicamentos podem ajudar dependendo da idade, da renda e da elegibilidade. O **Ontario Drug Benefit** cobre muitos medicamentos para pessoas com 65 anos ou mais e pessoas em determinados programas, e o **OHIP+** cobre muitas receitas para pessoas com 24 anos ou menos que não têm plano privado. Ontário também tem o **Trillium Drug Program** para algumas pessoas com custos altos de medicamentos em relação à renda da família. Se você tem um plano escolar ou privado, verifique se ele se coordena com a cobertura pública ou a substitui.",
    },
    {
      id: "coverage-scenarios",
      title: "Perguntas comuns sobre cobertura",
      type: "faq",
      faqs: [
        {
          question: "Ainda não tenho OHIP. Posso receber atendimento mesmo assim?",
          answer:
            "Sim, mas taxas podem ser cobradas e o melhor caminho depende do seu status e da urgência. Pergunte sobre os custos antes de atendimentos que não são emergência, quando possível, e veja a elegibilidade para o IFHP ou para um plano escolar ou privado, se isso se aplicar a você.",
        },
        {
          question: "Sou estudante internacional. O OHIP é minha única opção?",
          answer:
            "Nem sempre. Muitos estudantes dependem de um plano de seguro escolar ou privado em vez do OHIP. Use os documentos oficiais do plano da sua instituição e os serviços de saúde estudantil para confirmar o que é coberto.",
        },
        {
          question: "Meu medicamento será gratuito se minha consulta foi coberta?",
          answer:
            "Não necessariamente. A cobertura da consulta e a cobertura da receita costumam ser separadas.",
        },
        {
          question: "O atendimento odontológico é coberto?",
          answer:
            "O atendimento odontológico é separado do OHIP para a maioria dos adultos. O Canadian Dental Care Plan federal agora cobre muitos residentes que não têm seguro odontológico privado e têm renda familiar ajustada abaixo de $90.000 — normalmente você precisa ter feito uma declaração de imposto de renda no Canadá para se qualificar. Crianças de famílias de baixa renda podem se qualificar para o Healthy Smiles Ontario, e Kingston tem uma clínica odontológica comunitária para pessoas em programas específicos.",
        },
        {
          question: "Como sei se um serviço é público, comunitário ou privado?",
          answer:
            "Use os filtros do diretório e veja os detalhes da listagem. Se você estiver em dúvida, entre em contato com o serviço antes de agendar.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Sua Consulta de Saúde",
  description:
    "O que levar, como fazer perguntas e como se comunicar com segurança durante uma consulta de saúde.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontário: Cuidados de saúde em Ontário",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientação geral sobre o sistema.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "O que levar",
      type: "checklist",
      items: [
        "Seu cartão de saúde, documentos do IFHP ou outras informações de seguro",
        "Uma lista completa de medicamentos, incluindo vitaminas e medicamentos sem receita",
        "Os nomes dos sintomas, quando começaram e o que mudou",
        "Perguntas que você quer ver respondidas antes de sair",
        "Quaisquer requisições, encaminhamentos, documentos de alta ou resultados de exames recentes",
        "Suas necessidades de intérprete anotadas para você lembrar de pedir",
      ],
    },
    {
      id: "during-the-visit",
      title: "Durante a consulta",
      type: "steps",
      items: [
        "Comece pelo seu problema principal: Muitas consultas são curtas, então comece pela preocupação que mais importa hoje.",
        "Use linguagem simples: Não há problema em dizer 'Não entendi essa palavra' ou 'Pode explicar de um jeito mais simples?'",
        "Repita o plano em voz alta: Antes de sair, diga os próximos passos em voz alta para saber se você precisa de um exame, um encaminhamento, uma renovação de receita ou uma consulta de acompanhamento.",
        "Pergunte o que acontece se as coisas piorarem: Você deve saber quando ligar de volta, quando usar o atendimento urgente e quando usar a emergência.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Ajuda com intérprete e comunicação",
      type: "default",
      content:
        "Se você precisa de ajuda com o idioma, peça cedo. Não espere até o final da consulta. Você pode ler este site em vários idiomas usando o menu Idioma, mas a tradução do site não deve substituir o apoio de um intérprete para decisões de tratamento, instruções de medicamentos ou consentimento.\n\nVocê pode dizer: **'I need an interpreter, please.' (Preciso de um intérprete, por favor.)** O Health811 (ligue 811) também oferece atendimento por telefone em muitos idiomas. Se uma pessoa de apoio for com você, lembre-se de que um familiar nem sempre é a melhor ou a mais segura pessoa para interpretar informações médicas complexas ou delicadas.",
    },
    {
      id: "questions-to-ask",
      title: "Perguntas que vale a pena fazer",
      type: "checklist",
      items: [
        "O que você acha que está acontecendo?",
        "O que devo fazer em seguida?",
        "Eu preciso de um exame, requisição, encaminhamento ou consulta de acompanhamento?",
        "Quando devo esperar receber os resultados?",
        "Quais sinais de alerta significam que devo ligar de volta ou procurar ajuda urgente?",
      ],
    },
    {
      id: "privacy",
      title: "Privacidade e consentimento",
      type: "default",
      content:
        "Suas informações de saúde são sensíveis. Se você não sabe quem verá suas informações, pergunte. Se você não entender um formulário, uma conversa de consentimento ou um plano de tratamento, desacelere o processo e peça uma explicação mais clara.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "Depois da Consulta",
  description:
    "Saiba o que acontece depois de uma consulta, incluindo requisições, resultados de exames, encaminhamentos e quando ligar de volta.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Informações do sistema hospitalar local.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Informações sobre o processo do laboratório comunitário e o portal do paciente.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "O que costuma acontecer depois de uma consulta",
      type: "steps",
      items: [
        "Você sai com um plano: Ele pode incluir um medicamento, uma requisição, um encaminhamento, uma consulta de acompanhamento ou instruções para observar sinais de alerta.",
        "Talvez você precise dar o próximo passo por conta própria: Por exemplo, pode ser preciso agendar exames de sangue, exames de imagem, uma retirada na farmácia ou uma consulta de acompanhamento.",
        "Os resultados normalmente voltam para o profissional que os pediu: O laboratório ou a clínica de imagem pode não explicar o resultado para você na hora.",
        "Você pode não receber uma ligação para cada resultado normal: Pergunte qual é o processo de acompanhamento da clínica para saber o que esperar.",
      ],
    },
    {
      id: "common-terms",
      title: "Termos comuns depois da consulta",
      type: "table",
      columns: [
        "Termo",
        "O que significa em linguagem simples",
        "O que você normalmente faz em seguida",
      ],
      rows: [
        {
          cells: [
            "Requisição",
            "Um formulário que informa ao laboratório ou à clínica de imagem qual exame você precisa fazer",
            "Agende ou compareça ao exame e guarde uma cópia, se puder",
          ],
        },
        {
          cells: [
            "Encaminhamento",
            "Um pedido de um profissional de saúde para outro serviço ou especialista",
            "Aguarde o contato e ligue de volta se disseram para você acompanhar e nada acontecer",
          ],
        },
        {
          cells: [
            "Acompanhamento",
            "Uma verificação depois de um tratamento, exame ou mudança nos sintomas",
            "Pergunte quando e como o acompanhamento deve acontecer antes de sair",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "Quando ligar de volta",
      type: "checklist",
      items: [
        "Você não entende a requisição, o encaminhamento ou as instruções do medicamento",
        "Disseram que alguém entraria em contato e você não recebeu nenhuma notícia no prazo esperado",
        "Seus sintomas estão piorando ou não estão melhorando como disseram que deveria acontecer",
        "A farmácia, o laboratório ou a clínica de imagem disse que falta algo na papelada",
        "Você acha que um resultado pode ter passado despercebido ou ainda está preocupado",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Situações comuns",
      type: "faq",
      faqs: [
        {
          question: "Preciso de exames de sangue depois de uma consulta. O que eu faço?",
          answer:
            "Verifique se você tem uma requisição e se o laboratório exige agendamento. Depois use o diretório para encontrar um laboratório. Leve a requisição e suas informações de cobertura.",
        },
        {
          question: "Não entendo a requisição ou o formulário de encaminhamento.",
          answer:
            "Ligue para a clínica que entregou o documento e peça que expliquem em linguagem simples. É razoável perguntar para que serve o formulário, para onde ele deve ir e se você precisa agendar algo por conta própria.",
        },
        {
          question: "Quem acompanha os resultados dos exames?",
          answer:
            "Normalmente o profissional que pediu o exame. Pergunte ao consultório desse profissional qual é o processo habitual para resultados normais e alterados.",
        },
        {
          question: "Quanto tempo demoram os encaminhamentos?",
          answer:
            "Os prazos de encaminhamento variam muito. Pergunte que tipo de espera é normal para a sua situação e o que fazer se você não receber notícias.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Próximos passos úteis",
      type: "grid",
      gridItems: [
        {
          title: "Encontre laboratórios e exames de imagem",
          content:
            "Use o diretório para listagens de exames de sangue, raio-X, ultrassom e imagem.",
          icon: "file",
          link: { text: "Laboratórios e imagem", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Encontre uma farmácia",
          content:
            "Use o diretório para farmácias, ajuda com renovações e apoio com medicamentos.",
          icon: "shield",
          link: { text: "Farmácias", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Precisa planejar o acompanhamento?",
          content:
            "Use a página de cuidados primários se você não sabe onde o acompanhamento de longo prazo deve acontecer.",
          icon: "stethoscope",
          link: { text: "Encontrar cuidados primários", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Medicamentos e Farmácias",
  description:
    "Entenda receitas, renovações, a ajuda do farmacêutico e como pagar por medicamentos em Ontário.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontário: O que os farmacêuticos podem fazer",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Informações oficiais provinciais sobre farmacêuticos e farmácias.",
    },
    {
      title: "Ontario Drug Benefit (benefício de medicamentos de Ontário)",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Orientação oficial provincial de cobertura de medicamentos.",
    },
    {
      title: "Ontário: Obtenha ajuda com custos altos de medicamentos",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Orientação oficial do Trillium Drug Program.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "Com o que um farmacêutico pode ajudar",
      type: "default",
      content:
        "Os farmacêuticos fazem mais do que entregar remédios. Eles podem explicar como tomar um medicamento com segurança, verificar interações e revisar efeitos colaterais.\n\nEm Ontário, os farmacêuticos também podem **avaliar e prescrever para 19 problemas de saúde menores comuns** — incluindo conjuntivite, herpes labial, infecções urinárias (em mulheres), picadas de inseto e alergias sazonais. A avaliação é gratuita com seu cartão de saúde de Ontário, e a lista de condições pode continuar crescendo.\n\nA farmácia também é um dos melhores lugares para fazer perguntas práticas como: **Esta renovação é urgente? Existe uma opção mais barata? O que devo fazer se esqueci uma dose?**",
    },
    {
      id: "fill-a-prescription",
      title: "Como retirar um medicamento com receita",
      type: "steps",
      items: [
        "Obtenha a receita: Ela pode ser em papel, enviada por fax ou eletronicamente.",
        "Escolha a farmácia: Usar a mesma farmácia regularmente ajuda a equipe a detectar interações entre medicamentos e problemas no histórico de renovações.",
        "Pergunte sobre prazo e custo: A farmácia pode dizer quando o medicamento ficará pronto e se o seu plano está cobrindo.",
        "Ouça a orientação: Pergunte para que serve o medicamento, como tomá-lo e quando você deve ligar de volta se ele não ajudar.",
      ],
    },
    {
      id: "refill-options",
      title: "Problemas com renovações e medicamentos",
      type: "table",
      columns: ["Situação", "Bom primeiro passo", "Por quê"],
      rows: [
        {
          cells: [
            "Preciso de uma renovação de rotina",
            "Comece pela sua farmácia habitual ou pelo seu profissional de saúde regular",
            "Eles podem dizer se você precisa de uma renovação, de uma nova receita ou de uma nova consulta",
          ],
        },
        {
          cells: [
            "Meu médico não está disponível e meu medicamento pode acabar",
            "Pergunte à farmácia quais opções estão disponíveis e depois use atendimento sem agendamento, virtual ou urgente, se necessário",
            "O próximo passo mais seguro depende do medicamento e da sua situação",
          ],
        },
        {
          cells: [
            "Não entendo como tomar este medicamento",
            "Peça ao farmacêutico para explicar de novo em linguagem simples",
            "Isso faz parte do uso seguro de medicamentos",
          ],
        },
        {
          cells: [
            "O medicamento custa caro demais",
            "Pergunte sobre versões genéricas, cobertura do plano e programas públicos",
            "Os custos dos medicamentos variam e a cobertura costuma ser separada da própria consulta",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Formas de pagar pelos medicamentos",
      type: "checklist",
      items: [
        "Um programa público de medicamentos, se você se qualificar",
        "Um plano de seguro escolar ou privado",
        "Uma combinação de cobertura pública e privada",
        "Do próprio bolso, se nenhum programa cobrir o medicamento",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Precisa de ajuda com farmácias locais?",
      type: "callout",
      content:
        "Use o diretório para encontrar farmácias, apoio com renovações e opções virtuais ou de mesmo dia quando você está tentando resolver um problema de medicamento rapidamente.",
      link: { text: "Pesquisar listagens de farmácias", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Apoio em Saúde Mental",
  description:
    "Saúde mental local, aconselhamento, apoio para jovens e caminhos de crise em Kingston.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8: Suicide Crisis Helpline (Linha de Ajuda em Crises de Suicídio)",
      url: "https://988.ca/",
      note: "Linha nacional oficial para crises de suicídio. Ligue ou envie mensagem de texto para 9-8-8, gratuito, 24 horas.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Informações oficiais de saúde mental para adultos e apoio em crises.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Linha oficial de ajuda de Ontário para saúde mental e dependência química.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Informações oficiais de saúde mental para crianças e jovens.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "Se alguém pode não estar seguro",
      type: "callout",
      content:
        "Se houver risco imediato à vida ou à segurança, ligue 911. Para pensamentos suicidas ou sofrimento intenso, você pode **ligar ou enviar mensagem de texto para 9-8-8** (Suicide Crisis Helpline) a qualquer hora — é gratuito, confidencial e disponível 24 horas por dia, 7 dias por semana, em inglês e francês. Você também pode ligar para a linha de crise 24 horas da AMHS-KFLA no número 613-544-4229. Não espere por uma consulta de rotina.",
      link: { text: "Listagens de saúde mental", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Tipos de apoio",
      type: "grid",
      gridItems: [
        {
          title: "Apoio em crises",
          content:
            "Use em casos de sofrimento imediato, preocupações com a segurança ou quando esperar não é seguro.",
          icon: "alert",
        },
        {
          title: "Apoio urgente",
          content:
            "Use quando a situação é séria e você precisa de ajuda em breve, mas não é uma emergência imediata com risco de vida.",
          icon: "clock",
        },
        {
          title: "Aconselhamento de rotina",
          content:
            "Use para ansiedade contínua, depressão, estresse, luto, problemas de relacionamento ou transições de vida.",
          icon: "heart",
        },
        {
          title: "Serviços para crianças e jovens",
          content:
            "Use serviços especializados de saúde mental juvenil quando a pessoa que precisa de cuidado é uma criança ou adolescente.",
          icon: "info",
        },
        {
          title: "Apoio no campus",
          content:
            "Estudantes podem ser mais bem atendidos começando pelos caminhos de bem-estar ou aconselhamento do campus.",
          icon: "stethoscope",
        },
        {
          title: "Apoio em casos de violência sexual",
          content:
            "Use apoio especializado para crise, aconselhamento, defesa de direitos e planejamento de segurança após violência sexual.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Por onde começar em situações comuns",
      type: "table",
      columns: ["Situação", "Melhor primeira parada", "Por quê"],
      rows: [
        {
          cells: [
            "Preciso de ajuda de saúde mental esta noite",
            "Ligue ou envie mensagem de texto para 9-8-8, ligue para a linha de crise da AMHS-KFLA ou use a emergência se a segurança estiver em risco",
            "Não espere por uma consulta de rotina quando a situação parece insegura",
          ],
        },
        {
          cells: [
            "Preciso de aconselhamento, mas estou seguro agora",
            "Aconselhamento comunitário, médico de família, nurse practitioner ou apoios do plano privado",
            "Essas opções podem ajudar com cuidado contínuo e encaminhamentos",
          ],
        },
        {
          cells: [
            "Preciso de ajuda para meu filho",
            "Serviços de saúde mental para crianças e jovens e, se necessário, orientação urgente",
            "Crianças e jovens costumam ter caminhos separados",
          ],
        },
        {
          cells: [
            "Sou estudante",
            "Saúde ou aconselhamento do campus primeiro, a menos que a situação seja insegura ou grave",
            "Os serviços do campus podem ser a porta de entrada mais rápida para estudantes",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Perguntas comuns",
      type: "faq",
      faqs: [
        {
          question: "Para quem posso ligar ou enviar mensagem agora mesmo?",
          answer:
            "Ligue ou envie mensagem de texto para **9-8-8** (Suicide Crisis Helpline) a qualquer hora, gratuito, 24 horas — sem necessidade de encaminhamento. Em Kingston, a linha de crise da AMHS-KFLA no número 613-544-4229 também atende 24 horas. Se a segurança estiver em risco imediato, ligue 911.",
        },
        {
          question: "E se eu não souber se isso conta como uma crise?",
          answer:
            "Se alguém pode não estar seguro, não espere por certeza. Use o apoio em crises ou os serviços de emergência.",
        },
        {
          question: "E se eu precisar de ajuda esta noite, mas não souber para quem ligar?",
          answer:
            "Use a página do diretório local de saúde mental ou o caminho de apoio em crises em vez de esperar até de manhã.",
        },
        {
          question: "E se a pessoa que precisa de ajuda for meu filho?",
          answer:
            "Procure especificamente serviços para crianças e jovens. Os caminhos de saúde mental juvenil costumam ser diferentes do atendimento para adultos.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Rastreamento e Prevenção",
  description:
    "Aprenda o básico sobre cuidados preventivos, vacinas e exames de rastreamento em Ontário.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Informações locais sobre vacinas e saúde pública.",
    },
    {
      title: "Ontário: Cuidados de saúde em Ontário",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientação geral de saúde.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Por que os cuidados preventivos importam",
      type: "default",
      content:
        "Cuidados preventivos significam tentar detectar problemas cedo ou impedi-los antes que fiquem mais sérios. Isso inclui vacinas, exames de rastreamento, verificações regulares da pressão arterial e conversas sobre fatores de risco com um profissional de saúde.",
    },
    {
      id: "common-prevention",
      title: "Tarefas comuns de prevenção",
      type: "checklist",
      items: [
        "Mantenha suas vacinas em dia",
        "Pergunte se exames de rastreamento são recomendados para a sua idade ou histórico de saúde",
        "Leve suas dúvidas sobre pressão arterial, diabetes ou outros fatores de risco para as consultas de rotina",
        "Use os recursos de saúde pública quando precisar de informações sobre vacinas ou prevenção",
      ],
    },
    {
      id: "prevention-next",
      title: "Precisa de serviços de prevenção locais?",
      type: "callout",
      content:
        "Use o diretório de serviços locais para listagens de saúde pública, rastreamento e farmácias se você precisa de um ponto de partida concreto em Kingston.",
      link: {
        text: "Listagens de saúde pública e farmácias",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Cuidados Complementares e Comunitários",
  description:
    "Use esta página para entender cuidados domiciliares, atendimento odontológico, reabilitação, aconselhamento, apoio à visão e o que pode ser público, comunitário, estudantil ou privado.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Informações oficiais de coordenação de cuidados domiciliares e comunitários.",
    },
    {
      title: "Canadá: Canadian Dental Care Plan (plano odontológico canadense)",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "Informações oficiais e elegibilidade do programa federal de cobertura odontológica.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Informações oficiais sobre serviços comunitários e odontológicos.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Informações oficiais de apoio à visão.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "O que significam cuidados complementares e comunitários",
      type: "default",
      content:
        "Saúde complementar (allied health) significa cuidado prestado por profissionais como fisioterapeutas, terapeutas ocupacionais, nutricionistas, assistentes sociais, conselheiros, dentistas ou equipes de apoio à visão. Cuidado comunitário geralmente significa cuidado que acontece fora do hospital, às vezes na sua casa, escola, clínica ou em um programa comunitário.",
    },
    {
      id: "access-payment-matrix",
      title: "Matriz de acesso e pagamento",
      type: "table",
      columns: ["Caminho", "Exemplos", "Como o pagamento normalmente funciona", "Como começar"],
      rows: [
        {
          cells: [
            "Cuidados domiciliares e comunitários com financiamento público",
            "Enfermagem domiciliar, terapia em casa, coordenação de cuidados",
            "Programas públicos podem se aplicar se você cumprir as regras do programa",
            "Comece com um encaminhamento de um profissional de saúde ou pelo caminho oficial de cuidados domiciliares",
          ],
        },
        {
          cells: [
            "Serviços de base comunitária",
            "Atendimento odontológico de centro de saúde comunitário ou apoios de baixa barreira",
            "Financiamento público ou comunitário pode se aplicar dependendo do serviço",
            "Entre em contato direto com o programa e pergunte sobre elegibilidade",
          ],
        },
        {
          cells: [
            "Apoios da instituição de ensino",
            "Aconselhamento de campus ou apoios relacionados à saúde",
            "Normalmente vinculados à elegibilidade estudantil e a taxas ou planos estudantis",
            "Use primeiro as páginas oficiais de serviços da sua instituição",
          ],
        },
        {
          cells: [
            "Cuidado complementar privado",
            "Fisioterapia, aconselhamento, massagem, atendimento odontológico privado, serviços privados de visão",
            "Geralmente pagamento particular, a menos que outro plano cubra",
            "Pergunte sobre os valores completos e as regras de cobertura antes de agendar",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Exemplos de cuidados complementares e comunitários",
      type: "grid",
      gridItems: [
        {
          title: "Cuidados domiciliares",
          content:
            "Úteis quando alguém precisa de apoio em casa depois de doença, lesão ou internação hospitalar.",
          icon: "clock",
          link: {
            text: "Listagens de cuidados domiciliares",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Atendimento odontológico",
          content:
            "A cobertura odontológica é separada da cobertura médica comum. O Canadian Dental Care Plan federal agora cobre muitas pessoas sem seguro odontológico privado, e programas como o Healthy Smiles Ontario e clínicas odontológicas comunitárias ajudam grupos específicos.",
          icon: "shield",
          link: {
            text: "Listagens odontológicas e comunitárias",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Reabilitação e terapia",
          content:
            "Fisioterapia, terapia ocupacional e serviços relacionados podem ser públicos, comunitários ou privados dependendo do seu caminho.",
          icon: "stethoscope",
          link: { text: "Listagens de cuidados complementares", url: "/local-services?category=allied-community" },
        },
        {
          title: "Apoio à visão",
          content:
            "O apoio à visão pode envolver dispositivos, ajuda de orientação e apoios comunitários, além do cuidado médico dos olhos.",
          icon: "info",
          link: {
            text: "Listagens de apoio à visão",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Antes de agendar",
      type: "checklist",
      items: [
        "Pergunte se é necessário um encaminhamento",
        "Pergunte se o serviço é público, financiado pela comunidade ou pago de forma particular",
        "Pergunte os valores exatos e as regras de cancelamento se o serviço for privado",
        "Verifique se o seu plano escolar ou privado cobre parte do custo",
        "Pergunte se você precisa levar registros, exames de imagem ou um atestado médico",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "Perguntas Frequentes e Glossário",
  description:
    "Situações comuns de recém-chegados, perguntas práticas e definições em linguagem simples.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontário: Cuidados de saúde em Ontário",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Orientação geral provincial de saúde.",
    },
    {
      title: "Ontário: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Orientação oficial do serviço de orientação de enfermagem.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Situações comuns de recém-chegados",
      type: "faq",
      faqs: [
        {
          question: "Ainda não tenho OHIP. O que devo fazer primeiro?",
          answer:
            "Primeiro conheça seu caminho de cobertura e depois use o diretório local e as páginas de orientação urgente para montar um plano temporário seguro.",
        },
        {
          question: "Sou estudante internacional. Por onde devo começar?",
          answer:
            "Comece pelo serviço de saúde ou bem-estar do seu campus e pelos documentos do seguro da sua instituição, e depois use serviços comunitários ou urgentes quando isso não for suficiente.",
        },
        {
          question: "Preciso de um intérprete.",
          answer:
            "Peça cedo. Você pode ler este site em 33 idiomas usando o menu Idioma e pode mostrar à equipe as frases rápidas na aba de ajuda com intérprete. Para consultas, instruções de medicamentos, consentimento e conversas sobre exames, pergunte sobre apoio de intérprete profissional. O Health811 (ligue 811) oferece atendimento por telefone em muitos idiomas.",
        },
        {
          question: "Preciso de exames de sangue depois de uma consulta.",
          answer:
            "Verifique se você tem uma requisição e depois pesquise laboratórios e exames de imagem no diretório.",
        },
        {
          question: "Preciso de uma renovação de receita e meu médico não está disponível.",
          answer:
            "Comece pela sua farmácia e depois use os caminhos sem agendamento, virtuais ou urgentes, conforme apropriado, dependendo do medicamento e da urgência.",
        },
        {
          question: "Preciso de atendimento para meu filho.",
          answer:
            "Use primeiro os sinais de alerta de emergência e depois a orientação de mesmo dia ou urgente. Os caminhos de saúde mental para crianças e jovens costumam ser separados do atendimento para adultos.",
        },
        {
          question: "Preciso de ajuda de saúde mental esta noite.",
          answer:
            "Ligue ou envie mensagem de texto para 9-8-8 (Suicide Crisis Helpline) a qualquer hora, ou ligue para a linha de crise 24 horas da AMHS-KFLA no número 613-544-4229. Use a emergência se a segurança estiver em risco. Não espere por uma consulta de rotina.",
        },
        {
          question: "Não entendo uma requisição ou um encaminhamento.",
          answer:
            "Ligue para a clínica que entregou o documento e peça que expliquem em linguagem simples. Você pode perguntar para que serve, para onde vai e quem deve fazer o acompanhamento.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "Mais perguntas comuns",
      type: "faq",
      faqs: [
        {
          question: "Posso simplesmente ir para a emergência se não tenho médico?",
          answer:
            "A emergência é para emergências. Se o problema não apresenta risco claro de vida, comece pela página de orientação urgente, pelo Health811, por uma clínica sem agendamento ou por outro atendimento de mesmo dia.",
        },
        {
          question: "E se eu for novo aqui e não souber qual serviço serve para mim?",
          answer:
            "Use os filtros do diretório para estudantes, recém-chegados, crianças e jovens, atendimento sem agendamento, virtual, encaminhamento necessário e tipo de cobertura.",
        },
        {
          question: "E se as informações deste site parecerem desatualizadas?",
          answer:
            "Use o formulário de relato na página ou na listagem para que a próxima revisão possa focar na mudança que você encontrou.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossário",
      type: "checklist",
      items: [
        "Cuidados primários: Seu caminho regular de atendimento para necessidades de saúde de rotina e contínuas.",
        "Nurse practitioner (NP): Um profissional de enfermagem de prática avançada que pode avaliar, diagnosticar, prescrever e encaminhar em muitas situações.",
        "Encaminhamento: Um pedido de um profissional de saúde para outro serviço ou especialista.",
        "Requisição: Um formulário que informa ao laboratório ou à clínica de imagem qual exame você precisa fazer.",
        "Triagem: O processo de decidir quem precisa de atendimento urgente primeiro, com base na segurança e na gravidade.",
        "Clínica sem agendamento (walk-in): Uma clínica que pode atender pacientes sem consulta marcada, sujeita à capacidade diária de admissão.",
        "Atendimento urgente: Atendimento no mesmo dia para problemas urgentes que não apresentam risco claro de vida.",
        "Paciente registrado (rostered ou attached): Um paciente que tem uma relação contínua com um provedor regular de cuidados primários.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "Sobre, Confiança e Privacidade",
  description:
    "Saiba como este guia funciona, como as fontes e o status de revisão são tratados e como relatar mudanças.",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Notas de fontes do projeto",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Resumo público de como o projeto trata confiança e fontes.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "Para que serve este site",
      type: "default",
      content:
        "O MyPrimaryCareGuide.ca é um guia de navegação em saúde pensado para recém-chegados em Kingston, Ontário. Ele foi criado para ajudar as pessoas a escolher o próximo passo certo, entender termos comuns do sistema e encontrar listagens confiáveis de serviços locais.\n\nEste site **não** é uma ferramenta de tempos de espera em tempo real, uma plataforma de agendamento nem um serviço de aconselhamento médico.",
    },
    {
      id: "sources",
      title: "Como funcionam a confiança e as fontes",
      type: "default",
      content:
        "Tentamos vincular as listagens locais às páginas oficiais dos serviços sempre que possível. Cada listagem mostra um status de revisão e a data da última revisão. Algumas entradas estão totalmente verificadas em fontes oficiais. Outras ainda precisam de nova verificação local porque horários, admissão ou regras de acesso mudam com frequência.\n\nOs blocos de fontes no nível da página mostram as principais referências oficiais usadas no ciclo de revisão atual.",
    },
    {
      id: "accessibility",
      title: "Acessibilidade e idioma",
      type: "default",
      content:
        "Este site foi feito para funcionar bem com teclado, priorizar o celular e ser legível em linguagem simples.\n\nVocê pode ler o guia completo em **33 idiomas** usando o menu Idioma no topo da página — de العربية e Soomaali a ਪੰਜਾਬੀ, ትግርኛ, Yorùbá e Українська — com todas as páginas e menus servidos diretamente neste site. Todas as traduções são assistidas por máquina; o francês, o espanhol, o árabe e o chinês simplificado receberam uma revisão adicional, e os demais idiomas são marcados como tradução automática. **O inglês continua sendo a versão de referência** — se uma frase traduzida parecer pouco clara ou surpreendente, verifique o texto em inglês ou peça a alguém para confirmar.\n\nDezenas de outros idiomas podem abrir este site pelo Google Translate a partir do mesmo menu, e a aba de ajuda com intérprete inclui frases rápidas urgentes em mais de 20 idiomas que você pode mostrar à equipe.\n\nAs listagens do diretório (nomes dos serviços, endereços, telefones e horários) permanecem em inglês para corresponder exatamente às fontes oficiais.\n\nQualquer tipo de tradução ainda pode estar errada em detalhes médicos, então pergunte sobre apoio de intérprete profissional para consultas, instruções de medicamentos e consentimento. O Health811 (ligue 811) oferece atendimento por telefone em muitos idiomas.",
    },
    {
      id: "privacy",
      title: "Privacidade",
      type: "default",
      content:
        "Este site não usa análises remotas invasivas. Ele mantém contagens leves de melhoria no seu próprio navegador, para que os mantenedores possam entender pesquisas comuns, pesquisas sem resultado, visualizações de serviços e relatos de problemas quando as informações são exportadas intencionalmente para manutenção.\n\nNão envie informações médicas privadas pelo formulário de feedback ou por e-mail.",
    },
    {
      id: "contact",
      title: "Contato e relato de mudanças",
      type: "default",
      content:
        "Se uma página ou listagem parecer errada, use o formulário de relato dessa página. Os relatos devem descrever o problema, não a sua situação pessoal de saúde.\n\nE-mail geral de contato: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Aviso legal",
      type: "default",
      content:
        "Este site serve apenas para navegação e educação. Ele não é aconselhamento médico e não substitui diagnóstico profissional, tratamento ou ajuda de emergência. Se uma situação pode apresentar risco de vida, ligue 911.",
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
