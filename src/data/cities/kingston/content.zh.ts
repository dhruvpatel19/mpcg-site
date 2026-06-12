import type { PageContent } from "../../../types";

const homePage: PageContent = {
  title: "金斯顿医疗导航指南",
  description:
    "一份面向新移民、语言通俗的指南，帮助您在安大略省金斯顿找到医疗服务。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "从这里开始",
  description:
    "初到金斯顿，或初次接触安省医疗系统？从这里开始，了解系统如何运作以及第一步该做什么。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：安省的医疗服务",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "安省受保医疗服务运作方式概览。",
    },
    {
      title: "安大略省：申请 OHIP 并领取健康卡",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "OHIP 申请与资格的官方信息。",
    },
    {
      title: "安大略省：寻找家庭医生或执业护士",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect 与基础医疗就医指引。",
    },
    {
      title: "加拿大：联邦临时健康计划（IFHP）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "面向符合条件的难民和难民申请人的联邦保障信息。",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "安省的医疗系统如何运作",
      type: "default",
      content: `安省的医疗系统以**基础医疗**为核心。基础医疗是指您处理日常健康需求、长期慢性病、处方、转诊和预防保健时通常首先求助的地方。您的基础医疗提供者可能是家庭医生、执业护士、社区健康中心团队，或者（如果您符合条件）学生健康诊所。

**转诊**是指一位医护人员请另一项服务或专科医生为您诊治。**检查申请单**是一张告诉化验所或影像检查诊所您需要做什么检查的表格。

您不需要在第一天就弄懂系统的每个部分。最重要的几步是：了解您的保险，知道遇到紧急问题该去哪里，如果还没有固定的医疗提供者，就为常规就医做好计划。`,
    },
    {
      id: "first-decisions",
      title: "先做这些判断",
      type: "grid",
      gridItems: [
        {
          title: "我可能需要紧急帮助",
          content:
            "如果您今天或今晚突然出现健康问题，请先查看急诊与紧急护理的判断指引。",
          icon: "alert",
          link: { text: "现在需要帮助", url: "/need-help-now" },
        },
        {
          title: "我没有家庭医生",
          content:
            "了解家庭医生、执业护士、社区健康中心、免预约诊所和学生诊所如何配合使用。",
          icon: "stethoscope",
          link: { text: "寻找基础医疗", url: "/get-a-family-doctor" },
        },
        {
          title: "我想了解哪些项目有保障",
          content:
            "阅读关于 OHIP（安省健康保险）、IFHP（联邦临时健康计划）、私人保险、学生保险计划、药物保障以及常见自费项目的内容。",
          icon: "shield",
          link: { text: "费用与保险", url: "/costs-and-coverage" },
        },
        {
          title: "我需要语言帮助",
          content:
            "您可以通过“语言”菜单用 33 种语言阅读本指南，并就医疗对话和知情同意询问口译支持。",
          icon: "info",
          link: { text: "无障碍与语言", url: "/about#accessibility" },
        },
        {
          title: "我需要抽血化验、影像检查或续药",
          content:
            "使用本地服务目录，找到就诊之后切实可行的下一步。",
          icon: "file",
          link: { text: "搜索本地服务", url: "/local-services" },
        },
        {
          title: "我不确定从哪里开始",
          content:
            "如果不确定情况有多紧急，请拨打 Health811 获取护士咨询。",
          icon: "clock",
          link: { text: "Health811 与紧急指引", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "抵达后第一周值得做的事",
      type: "steps",
      items: [
        "了解您的保险：先了解 OHIP、IFHP、私人保险和学生保险计划通常涵盖哪些项目。如果您可能符合 OHIP 资格，请尽早申请。",
        "确定您的紧急就医计划：知道什么时候拨打 911、什么时候先拨打 Health811，以及在金斯顿哪里可以获得紧急或当日就医服务。",
        "为常规就医做计划：如果您没有固定的医疗提供者，请了解家庭医生、执业护士、社区健康中心、学生诊所、免预约诊所和线上就诊等选择。",
        "把健康信息集中保管：保存好您的健康卡或 IFHP 文件、药物清单、疫苗记录，以及任何检查申请单或转诊单的副本。",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "如果您还没有 OHIP",
      type: "callout",
      content:
        "不要等到生病了才去了解自己的保险途径。如果您符合 OHIP 资格，请尽早申请。如果您通过 IFHP、学校保险或私人保险获得保障，请随身保留相关信息。如果您没有任何保险，就诊前请先询问费用，并在合适的情况下寻找社区或低门槛服务。",
      link: { text: "了解保险信息", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "请把这些准备好",
      type: "checklist",
      items: [
        "您的健康卡、IFHP 文件或保险信息",
        "一份药物清单，即使您只服用少量药物",
        "您上一家诊所或医疗提供者的名称和电话号码（如果有）",
        "近期的检查申请单、转诊单、出院文件或检查说明",
        "您想用通俗语言提出的问题",
        "把口译需求写下来，以免忘记提出",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "现在需要帮助？",
  description:
    "当您今天或今晚遇到健康问题、又不确定从哪里开始时，请使用本页面。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：通过 Health811 获取医疗建议",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "官方护士咨询服务，全天 24 小时。",
    },
    {
      title: "9-8-8：自杀危机热线",
      url: "https://988.ca/",
      note: "官方全国自杀危机热线。拨打或发短信 9-8-8，免费，全天 24 小时。",
    },
    {
      title: "Kingston Health Sciences Centre（金斯顿健康科学中心）",
      url: "https://kingstonhsc.ca/",
      note: "提供急诊、紧急护理和影像检查信息的官方医院网络。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "本地官方心理健康与危机支持机构。",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "急诊还是紧急护理？",
      type: "comparison",
      comparison: {
        left: {
          title: "出现以下问题，请立即前往急诊：",
          items: [
            "胸痛、严重呼吸困难或中风征兆",
            "大出血、严重外伤或失去意识",
            "突发意识混乱、癫痫发作或严重过敏反应",
            "任何等待可能危及生命或肢体的安全紧急情况",
          ],
        },
        right: {
          title: "出现以下问题，可先选择紧急护理、Health811 或当日诊所：",
          items: [
            "扭伤、小伤口、皮疹、耳朵痛，或没有急诊警示征兆的发烧",
            "无法等到常规预约的处方续药问题",
            "不确定今晚是否需要紧急就医的疑问",
            "感觉紧急、但并非明显危及生命的问题",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "下班后的常见情况",
      type: "table",
      columns: ["情况", "建议的第一步", "需要记住的事"],
      rows: [
        {
          cells: [
            "我不确定情况有多紧急",
            "拨打 Health811",
            "护士可以帮您判断是留在家观察、寻求紧急护理，还是前往急诊。",
          ],
        },
        {
          cells: [
            "我的医生下班了，但我今晚需要建议",
            "拨打 Health811 或查看紧急护理指引",
            "如果没有急诊警示征兆，不要以为急诊是唯一的选择。",
          ],
        },
        {
          cells: [
            "我的孩子需要就医",
            "先对照同样的急诊警示征兆，再寻求当日就医；如果不确定，请拨打 Health811",
            "尽量带上孩子的健康卡、药物清单和症状出现的时间线。",
          ],
        },
        {
          cells: [
            "我今晚需要心理健康帮助",
            "拨打或发短信 9-8-8（自杀危机热线），或拨打 AMHS-KFLA 全天 24 小时危机热线",
            "如果安全面临直接威胁，请拨打 911。",
          ],
        },
      ],
      caption:
        "本表仅为一般性指引。如果有人可能处于直接危险中，请拨打 911。",
    },
    {
      id: "kingston-start-points",
      title: "金斯顿的起点",
      type: "grid",
      gridItems: [
        {
          title: "急诊科",
          content:
            "危及生命或可能危及生命的问题，请使用急诊服务。",
          icon: "alert",
          link: {
            text: "急诊与紧急服务列表",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "紧急护理中心",
          content:
            "适用于许多无法等待、但又不属于明确急诊的当日问题。",
          icon: "clock",
          link: {
            text: "紧急与当日就医",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content:
            "如果不确定该去哪里，可通过电话或在线获取护士咨询。电话支持提供多种语言。",
          icon: "info",
          link: { text: "Health811 服务条目", url: "/local-services/health811" },
        },
        {
          title: "心理健康危机支持",
          content:
            "随时可拨打或发短信 9-8-8（自杀危机热线），也可使用本地危机支持，例如 AMHS-KFLA 全天 24 小时危机热线。",
          icon: "heart",
          link: { text: "心理健康服务列表", url: "/local-services?category=mental-health" },
        },
        {
          title: "性暴力受害者支持",
          content:
            "如果您需要即时的情感支持、权益协助或安全计划，请使用专门的危机支持服务。",
          icon: "shield",
          link: {
            text: "支持服务列表",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "学生紧急就医选择",
          content:
            "如果您是学生，请先了解校园健康服务是否是处理非急诊需求的最佳第一站。",
          icon: "stethoscope",
          link: { text: "学生健康服务列表", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "如果您仍然不确定",
      type: "callout",
      content:
        "当问题并非明显危及生命、但您担心等待会有风险时，请先拨打 Health811。如果有人可能不安全、病情可能迅速恶化，或您无法及时获得合适的帮助，请使用急救服务。",
      link: { text: "拨打 Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "可以的话请带上这些",
      type: "checklist",
      items: [
        "健康卡、IFHP 文件或您持有的任何保险卡",
        "药物清单或药瓶的照片",
        "症状开始的时间，以及任何使症状加重的因素",
        "把口译需求写下来，以防之后太紧张而忘记",
        "手机充电器，以及（如果对您有帮助）一位陪同人员",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "寻找基础医疗",
  description:
    "如果您还没有固定的医疗提供者，了解在金斯顿获得常规医疗服务的各种途径。",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：寻找家庭医生或执业护士",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect 官方指引。",
    },
    {
      title: "Kingston Community Health Centres（金斯顿社区健康中心）",
      url: "https://kchc.ca/",
      note: "本地社区健康中心服务的官方信息。",
    },
    {
      title: "Queen's（女王大学）Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "面向女王大学学生的官方学生健康信息。",
    },
    {
      title: "St. Lawrence College（圣劳伦斯学院）Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "面向圣劳伦斯学院学生的官方学生健康信息。",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "什么是基础医疗",
      type: "default",
      content:
        "基础医疗是指您处理日常健康需求时通常首先去的地方，包括体检、药物续开、慢性病照护、转诊、预防保健，以及紧急问题之后的后续跟进。\n\n在金斯顿，您的常规基础医疗途径可能包括家庭医生、执业护士、社区健康中心、校园诊所，或在等待更稳定的医疗安排期间组合使用一些临时选择。",
    },
    {
      id: "access-matrix",
      title: "基础医疗的各种途径",
      type: "table",
      columns: ["途径", "适合", "适用人群", "如何开始"],
      rows: [
        {
          cells: [
            "家庭医生或执业护士",
            "持续的常规照护和长期健康规划",
            "能够在医疗提供者名册中登记的患者",
            "使用 Health Care Connect，并留意本地的收新患者信息",
          ],
        },
        {
          cells: [
            "社区健康中心",
            "社区型照护、低门槛支持，以及部分针对新移民或复杂需求的服务",
            "资格取决于具体项目和接收状态",
            "直接联系该机构，询问接收新患者的安排",
          ],
        },
        {
          cells: [
            "学生健康服务",
            "注册学生可更快获得服务",
            "仅限通过学校符合资格的学生",
            "使用您所在校园的健康或身心健康服务",
          ],
        },
        {
          cells: [
            "免预约诊所或紧急当日就医",
            "等待期间的短期照护，或您的固定医疗提供者无法就诊时",
            "面向公众，但受每日接诊规则限制",
            "出发前先确认当日的就诊安排",
          ],
        },
        {
          cells: [
            "线上基础医疗",
            "部分续药、咨询和常规问题",
            "因提供者和保险而异",
            "先确认该提供者在线上能安全处理哪些问题、不能处理哪些问题",
          ],
        },
      ],
      caption:
        "最合适的途径取决于您的资格、紧急程度，以及您需要的是短期还是长期照护。",
    },
    {
      id: "if-you-have-no-provider",
      title: "如果您没有固定的医疗提供者",
      type: "steps",
      items: [
        "通过官方省级途径登记：如果您没有家庭医生或执业护士，请使用 Health Care Connect。",
        "确认您是否符合校园或社区健康服务的条件：学生应先从学校诊所开始。部分社区健康服务有特定的优先接收对象。",
        "制定一个安全的临时计划：了解在等待期间您可以使用哪些免预约、紧急、线上、药房和心理健康服务。",
        "自己保管好记录：保存药物清单、检查结果、转诊单，以及为您看过病的医护人员姓名。",
      ],
    },
    {
      id: "while-you-wait",
      title: "等待期间可以做什么",
      type: "checklist",
      items: [
        "在合适的情况下，使用免预约、紧急或线上就诊解决短期需求",
        "向药房询问可能提供的续药帮助或轻微小病诊疗服务",
        "保持一份更新的药物清单，每次就诊都随身携带",
        "当就医比较分散时，带上重要检查结果或出院文件的副本",
        "尽量在同一家诊所做后续跟进，让您的照护更连贯一些",
      ],
    },
    {
      id: "next-best-option",
      title: "如果您的需求紧急但不是急诊",
      type: "callout",
      content:
        "没有家庭医生并不意味着您应该拖延重要的医疗。先用合适的短期选择处理眼前的问题，等紧急问题得到处理后，再为后续的连续照护做计划。",
      link: { text: "搜索基础医疗选项", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "费用与保险",
  description:
    "用通俗语言介绍 OHIP、IFHP、加拿大牙科保健计划、学生或私人保险，以及常见的自费项目。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：申请 OHIP 并领取健康卡",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "OHIP 官方指引。",
    },
    {
      title: "加拿大：联邦临时健康计划（IFHP）",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "IFHP 保障范围的官方信息。",
    },
    {
      title: "Ontario Drug Benefit（安省药物福利计划）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "省级药物保障的官方指引。",
    },
    {
      title: "安大略省：处方药费用过高时的帮助",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Trillium Drug Program（延龄草药物计划）官方指引。",
    },
    {
      title: "加拿大：加拿大牙科保健计划（CDCP）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "联邦牙科保障计划的官方信息与资格条件。",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "保险基础知识",
      type: "default",
      content:
        "在安省，保险保障取决于您的法律身份、年龄、收入、项目资格，以及您是否有学校或私人保险计划。\n\n对符合 OHIP 资格的患者来说，许多医学上必要的医生和医院服务都有保障。但这**并不**意味着一切都免费。药物、牙科、视力保健、表格、病假条以及许多辅助医疗服务，往往需要单独的保险或自费支付。\n\n如果您是新来的，有个好消息：**OHIP 没有等待期**。只要符合资格，您抵达安省后即可申请，申请获批后保障即开始生效。不要等到生病了才申请。",
    },
    {
      id: "coverage-matrix",
      title: "各类保障一览",
      type: "table",
      columns: [
        "保险类型",
        "通常有助于",
        "可能仍不在保障范围内",
        "下一步该做什么",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "许多医学上必要的医生和医院服务",
            "许多药物、牙科、视力保健和表格费用",
            "符合资格就尽早申请，并保持健康卡有效",
          ],
        },
        {
          cells: [
            "IFHP",
            "按照联邦计划，为符合条件的难民和难民申请人提供保障",
            "具体细节因类别和服务而异",
            "查阅官方 IFHP 指南，并询问诊所或药房是否接受",
          ],
        },
        {
          cells: [
            "学校或私人保险",
            "通常有助于支付药物、心理咨询、牙科、视力和辅助医疗费用",
            "保障上限、自付额和网络规则各不相同",
            "在认定某项服务有保障之前，先阅读保险手册",
          ],
        },
        {
          cells: [
            "Canadian Dental Care Plan（加拿大牙科保健计划 CDCP）",
            "为没有私人牙科保险、家庭调整后收入低于 $90,000 的符合条件居民提供牙科保障",
            "并非每项治疗都有保障，且可能按收入水平需要支付部分费用",
            "通过加拿大政府官方 CDCP 页面查询资格并申请",
          ],
        },
        {
          cells: [
            "没有有效保险",
            "您可能仍可使用部分服务，但可能需要付费",
            "就诊、检查或药物的费用可能相当高",
            "就诊前先询问费用，并在合适的情况下寻找社区资源",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "通常不完全在保障范围内的项目",
      type: "checklist",
      items: [
        "许多处方药，除非您符合某个公共药物计划的资格或有其他保险",
        "牙科护理，除非您符合加拿大牙科保健计划（CDCP）、Healthy Smiles Ontario、社区牙科项目或某项福利计划的条件",
        "特定资格途径之外的视力保健",
        "物理治疗、心理咨询、按摩及其他辅助医疗服务，除非有项目或保险计划承保",
        "表格、信件、爽约费以及许多其他行政收费",
      ],
    },
    {
      id: "drug-coverage",
      title: "药物保障的途径",
      type: "default",
      content:
        "药物保障常常是让新移民感到意外的地方。看医生可能有保障，但处方药仍可能需要花钱。\n\n公共药物计划可能根据年龄、收入和资格提供帮助。**Ontario Drug Benefit（安省药物福利计划）**为 65 岁及以上人士和某些项目中的人群承保许多药物；**OHIP+** 为 24 岁及以下、没有私人保险计划的人群承保许多处方药。安省还有 **Trillium Drug Program（延龄草药物计划）**，面向处方药费用相对家庭收入过高的部分人群。如果您有学校或私人保险计划，请确认它与公共保障是协调使用还是相互替代。",
    },
    {
      id: "coverage-scenarios",
      title: "常见的保险问题",
      type: "faq",
      faqs: [
        {
          question: "我还没有 OHIP。还能就医吗？",
          answer:
            "可以，但可能需要付费，最佳途径取决于您的身份和紧急程度。非急诊就医前尽量先询问费用；如果适用，也可以了解 IFHP 或学校、私人保险的资格。",
        },
        {
          question: "我是国际学生。OHIP 是我唯一的选择吗？",
          answer:
            "不一定。许多学生依靠学校或私人保险计划，而不是 OHIP。请通过学校的官方保险文件和学生健康服务确认保障范围。",
        },
        {
          question: "如果我的就诊有保障，药物会免费吗？",
          answer:
            "不一定。就诊保障和处方药保障通常是分开的。",
        },
        {
          question: "牙科有保障吗？",
          answer:
            "对大多数成年人来说，牙科与 OHIP 是分开的。联邦的加拿大牙科保健计划（CDCP）现已为许多没有私人牙科保险、家庭调整后收入低于 $90,000 的居民提供保障——通常需要报过加拿大税才符合资格。低收入家庭的儿童可能符合 Healthy Smiles Ontario 的条件，金斯顿也有一家面向特定项目人群的社区牙科诊所。",
        },
        {
          question: "我怎么知道某项服务是公共、社区还是私营的？",
          answer:
            "使用目录的筛选功能并查看条目详情。如果不确定，请在预约前联系该服务。",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "就诊指南",
  description:
    "就诊时需要带什么、如何提问，以及如何在就诊过程中安全地沟通。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "安大略省：安省的医疗服务",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "医疗系统一般性指引。",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "需要携带的物品",
      type: "checklist",
      items: [
        "您的健康卡、IFHP 文件或其他保险信息",
        "完整的药物清单，包括维生素和非处方药",
        "症状的名称、开始时间以及变化情况",
        "您希望在离开前得到解答的问题",
        "近期的检查申请单、转诊单、出院文件或检查结果",
        "把口译需求写下来，以免忘记提出",
      ],
    },
    {
      id: "during-the-visit",
      title: "就诊过程中",
      type: "steps",
      items: [
        "先说最主要的问题：很多门诊时间很短，请从今天最重要的健康问题说起。",
        "使用通俗的语言：可以直接说“我不明白那个词”，或者“您能用更简单的方式解释一下吗？”",
        "把计划复述一遍：离开前，把接下来的步骤说出来，确认您是否需要做检查、转诊、续药或复诊。",
        "问清楚情况变糟时该怎么办：您应该知道什么时候需要回电话、什么时候使用紧急护理、什么时候去急诊。",
      ],
    },
    {
      id: "interpreter-help",
      title: "口译与沟通帮助",
      type: "default",
      content:
        "如果您需要语言帮助，请尽早提出，不要等到就诊快结束时。您可以通过“语言”菜单用多种语言阅读本网站，但在治疗决定、用药说明或知情同意方面，网站翻译不能代替口译支持。\n\n您可以说：**“I need an interpreter, please.”（请帮我安排一位口译员。）** Health811（拨打 811）也提供多种语言的电话支持。如果有人陪同您就诊，请记住：对于复杂或敏感的医疗信息，家人不一定是最合适或最安全的翻译人选。",
    },
    {
      id: "questions-to-ask",
      title: "值得提出的问题",
      type: "checklist",
      items: [
        "您认为是什么情况？",
        "我接下来该做什么？",
        "我需要做检查、拿检查申请单、转诊还是复诊？",
        "我大概什么时候能得到结果？",
        "出现哪些警示征兆意味着我应该回电话或寻求紧急帮助？",
      ],
    },
    {
      id: "privacy",
      title: "隐私与知情同意",
      type: "default",
      content:
        "您的健康信息很敏感。如果不确定谁会看到您的信息，请询问。如果您不理解某份表格、知情同意谈话或治疗方案，请放慢节奏，要求对方解释得更清楚。",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "就诊之后",
  description:
    "了解就诊之后会发生什么，包括检查申请单、检查结果、转诊，以及什么时候应该回电话。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre（金斯顿健康科学中心）",
      url: "https://kingstonhsc.ca/",
      note: "本地医院系统信息。",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "社区化验流程与患者门户信息。",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "就诊之后通常会发生什么",
      type: "steps",
      items: [
        "您带着一个计划离开：可能包括药物、检查申请单、转诊、复诊预约，或观察警示征兆的指示。",
        "下一步可能需要您自己去办：例如，您可能需要预约抽血化验、影像检查、去药房取药或安排复诊。",
        "检查结果通常会送回开单的医护人员那里：化验所或影像检查机构不一定会当场向您解释结果。",
        "不是每个正常结果都会有人打电话通知您：请询问诊所的跟进流程，以便知道该期待什么。",
      ],
    },
    {
      id: "common-terms",
      title: "就诊后的常见词汇",
      type: "table",
      columns: ["词汇", "通俗解释", "您通常接下来要做的事"],
      rows: [
        {
          cells: [
            "检查申请单（requisition）",
            "一张告诉化验所或影像检查诊所您需要做什么检查的表格",
            "预约或前往检查，可以的话保留一份副本",
          ],
        },
        {
          cells: [
            "转诊（referral）",
            "一位医护人员向另一项服务或专科医生提出的诊治请求",
            "等待对方联系；如果按要求该有跟进却一直没有消息，请回电话询问",
          ],
        },
        {
          cells: [
            "后续跟进（follow-up）",
            "治疗、检查或症状变化之后的复查",
            "离开前问清楚后续跟进的时间和方式",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "什么时候应该回电话",
      type: "checklist",
      items: [
        "您看不懂检查申请单、转诊单或用药说明",
        "对方说会联系您，但超过预期时间仍没有任何消息",
        "您的症状在加重，或没有像预期那样好转",
        "药房、化验所或影像检查诊所告诉您文件缺少某些内容",
        "您认为某个结果可能被遗漏了，或者您仍然担心",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "常见情况",
      type: "faq",
      faqs: [
        {
          question: "就诊后我需要抽血化验。该怎么做？",
          answer:
            "先确认您是否拿到了检查申请单，以及化验所是否需要预约。然后使用服务目录查找化验地点。前往时请带上申请单和您的保险信息。",
        },
        {
          question: "我看不懂检查申请单或转诊表格。",
          answer:
            "打电话给开单的诊所，请他们用通俗语言解释。询问这份表格的用途、应该送到哪里、是否需要您自己预约，都是合理的。",
        },
        {
          question: "谁负责跟进检查结果？",
          answer:
            "通常是开单的医护人员。请向其诊所询问他们处理正常和异常结果的常规流程。",
        },
        {
          question: "转诊需要等多久？",
          answer:
            "转诊等待时间差别很大。请询问您的情况通常要等多久，以及一直没有消息时该怎么办。",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "有用的下一步",
      type: "grid",
      gridItems: [
        {
          title: "查找化验与影像检查",
          content:
            "使用目录查找抽血化验、X 光、超声和影像检查服务。",
          icon: "file",
          link: { text: "化验与影像检查", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "查找药房",
          content:
            "使用目录查找药房、续药帮助和用药支持。",
          icon: "shield",
          link: { text: "药房", url: "/local-services?category=pharmacies" },
        },
        {
          title: "需要规划后续照护？",
          content:
            "如果不知道长期的后续跟进应该在哪里进行，请查看基础医疗页面。",
          icon: "stethoscope",
          link: { text: "寻找基础医疗", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "药物与药房",
  description:
    "了解安省的处方、续药、药剂师帮助，以及药费如何支付。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "安大略省：药剂师可以做什么",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "省级药剂师与药房的官方信息。",
    },
    {
      title: "Ontario Drug Benefit（安省药物福利计划）",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "省级药物保障的官方指引。",
    },
    {
      title: "安大略省：处方药费用过高时的帮助",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Trillium Drug Program（延龄草药物计划）官方指引。",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "药剂师可以帮您做什么",
      type: "default",
      content:
        "药剂师做的不只是发药。他们可以解释如何安全用药、检查药物相互作用，并讲解副作用。\n\n在安省，药剂师还可以**评估并针对 19 种常见轻微小病开处方**——包括红眼病（结膜炎）、唇疱疹、（女性）尿路感染、虫咬和季节性过敏。持安省健康卡接受评估是免费的，可涵盖的病种还可能继续增加。\n\n药房也是询问实际问题的好地方，例如：**这次续药急不急？有没有更便宜的选择？漏服了一次药该怎么办？**",
    },
    {
      id: "fill-a-prescription",
      title: "如何取处方药",
      type: "steps",
      items: [
        "拿到处方：处方可能是纸质的、传真的或以电子方式发送的。",
        "选择药房：固定使用同一家药房，有助于他们发现药物相互作用和续药记录方面的问题。",
        "询问时间和费用：药房可以告诉您药什么时候配好，以及您的保险计划是否承保。",
        "认真听取用药指导：问清楚这种药是治什么的、怎么服用，以及如果没有效果应该什么时候回去咨询。",
      ],
    },
    {
      id: "refill-options",
      title: "续药与用药问题",
      type: "table",
      columns: ["情况", "建议的第一步", "原因"],
      rows: [
        {
          cells: [
            "我需要常规续药",
            "先联系您常用的药房或固定的医护人员",
            "他们能告诉您需要的是续药、重新开方还是新的预约",
          ],
        },
        {
          cells: [
            "我的医生联系不上，药可能快用完了",
            "先问药房有哪些选择，必要时再使用免预约、线上或紧急就诊",
            "最安全的下一步取决于药物种类和您的具体情况",
          ],
        },
        {
          cells: [
            "我不明白这种药该怎么吃",
            "请药剂师用通俗语言再解释一遍",
            "这是安全用药的一部分",
          ],
        },
        {
          cells: [
            "药费太高了",
            "询问仿制药、保险计划的承保情况和公共药物计划",
            "药价各不相同，药物保障往往与就诊本身的保障是分开的",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "药费可能的支付方式",
      type: "checklist",
      items: [
        "公共药物计划（如果您符合资格）",
        "学校或私人保险计划",
        "公共与私人保障组合使用",
        "如果没有任何计划承保这种药物，则自费支付",
      ],
    },
    {
      id: "pharmacy-links",
      title: "需要本地药房帮助？",
      type: "callout",
      content:
        "当您需要尽快解决用药问题时，请使用目录查找药房、续药支持，以及线上或当日服务。",
      link: { text: "搜索药房服务", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "心理健康支持",
  description:
    "金斯顿本地的心理健康、心理咨询、青少年支持与危机求助途径。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "9-8-8：自杀危机热线",
      url: "https://988.ca/",
      note: "官方全国自杀危机热线。拨打或发短信 9-8-8，免费，全天 24 小时。",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "官方成人心理健康与危机支持信息。",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "安省官方心理健康与成瘾帮助热线。",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "官方儿童与青少年心理健康信息。",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "如果有人可能不安全",
      type: "callout",
      content:
        "如果生命或安全面临直接威胁，请拨打 911。如有自杀念头或难以承受的痛苦，您可以随时**拨打或发短信 9-8-8**（自杀危机热线）——免费、保密，全天 24 小时提供英语和法语服务。您也可以拨打 AMHS-KFLA 全天 24 小时危机热线 613-544-4229。不要等待常规预约。",
      link: { text: "心理健康服务列表", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "支持的类型",
      type: "grid",
      gridItems: [
        {
          title: "危机支持",
          content:
            "适用于即时的强烈痛苦、安全方面的担忧，或等待并不安全的情况。",
          icon: "alert",
        },
        {
          title: "紧急支持",
          content:
            "适用于情况严重、需要尽快获得帮助，但并非即时危及生命的紧急情况。",
          icon: "clock",
        },
        {
          title: "常规心理咨询",
          content:
            "适用于持续的焦虑、抑郁、压力、哀伤、人际关系问题或人生转变。",
          icon: "heart",
        },
        {
          title: "儿童与青少年服务",
          content:
            "当需要帮助的是儿童或青少年时，请使用专门的青少年心理健康服务。",
          icon: "info",
        },
        {
          title: "校园支持",
          content:
            "对学生来说，先从校园身心健康或心理咨询渠道开始可能是最好的选择。",
          icon: "stethoscope",
        },
        {
          title: "性暴力受害者支持",
          content:
            "在遭遇性暴力后，可使用专门的危机、心理咨询、权益协助和安全计划支持。",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "常见情况下从哪里开始",
      type: "table",
      columns: ["情况", "最佳第一站", "原因"],
      rows: [
        {
          cells: [
            "我今晚需要心理健康帮助",
            "拨打或发短信 9-8-8，拨打 AMHS-KFLA 危机热线；如果安全有风险，请使用急诊",
            "当情况让人感到不安全时，不要等待常规预约",
          ],
        },
        {
          cells: [
            "我需要心理咨询，但目前是安全的",
            "社区心理咨询、家庭医生、执业护士或私人保险涵盖的支持",
            "这些途径可以提供持续照护和转诊",
          ],
        },
        {
          cells: [
            "我的孩子需要帮助",
            "儿童或青少年心理健康服务，必要时寻求紧急指引",
            "儿童和青少年通常有单独的求助途径",
          ],
        },
        {
          cells: [
            "我是学生",
            "先使用校园健康或心理咨询服务，除非情况不安全或很严重",
            "校园服务可能是学生最快的入口",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "常见问题",
      type: "faq",
      faqs: [
        {
          question: "我现在可以打电话或发短信给谁？",
          answer:
            "随时可拨打或发短信 **9-8-8**（自杀危机热线），免费、全天 24 小时，无需转诊。在金斯顿，AMHS-KFLA 危机热线 613-544-4229 也全天 24 小时接听。如果安全面临直接威胁，请拨打 911。",
        },
        {
          question: "如果我不知道这算不算危机怎么办？",
          answer:
            "如果有人可能不安全，不要等到确定了再行动。请使用危机支持或急救服务。",
        },
        {
          question: "如果我今晚需要帮助，却不知道该打给谁怎么办？",
          answer:
            "请使用本地心理健康目录页面或危机支持渠道，不要等到天亮。",
        },
        {
          question: "如果需要帮助的是我的孩子怎么办？",
          answer:
            "请专门寻找儿童与青少年服务。青少年心理健康的求助途径通常与成人照护不同。",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "筛查与预防",
  description:
    "了解安省预防保健、疫苗和筛查的基础知识。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "本地疫苗与公共卫生信息。",
    },
    {
      title: "安大略省：安省的医疗服务",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "一般医疗指引。",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "为什么预防保健很重要",
      type: "default",
      content:
        "预防保健是指尽早发现问题，或在问题变得更严重之前加以阻止。这包括疫苗、筛查检查、定期测量血压，以及与医护人员讨论风险因素。",
    },
    {
      id: "common-prevention",
      title: "常见的预防事项",
      type: "checklist",
      items: [
        "按时接种疫苗，保持疫苗记录更新",
        "询问您的年龄或健康史是否建议做某些筛查检查",
        "在常规就诊时提出关于血压、糖尿病或其他风险因素的问题",
        "需要疫苗或预防保健信息时，使用公共卫生资源",
      ],
    },
    {
      id: "prevention-next",
      title: "需要本地的预防服务？",
      type: "callout",
      content:
        "如果您需要在金斯顿找一个具体的起点，请使用本地服务目录查找公共卫生、筛查和药房条目。",
      link: {
        text: "公共卫生与药房服务列表",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "辅助与社区照护",
  description:
    "通过本页面了解居家照护、牙科、康复、心理咨询、视力支持，以及哪些可能属于公共、社区、学生或私营服务。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "官方居家与社区照护协调信息。",
    },
    {
      title: "加拿大：加拿大牙科保健计划（CDCP）",
      url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      note: "联邦牙科保障计划的官方信息与资格条件。",
    },
    {
      title: "Kingston Community Health Centres（金斯顿社区健康中心）",
      url: "https://kchc.ca/",
      note: "官方社区与牙科服务信息。",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "官方视力支持信息。",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "什么是辅助与社区照护",
      type: "default",
      content:
        "辅助医疗是指由物理治疗师、职业治疗师、营养师、社工、心理咨询师、牙医或视力支持团队等专业人员提供的照护。社区照护通常是指在医院之外进行的照护，有时在您的家中、学校、诊所或社区项目中进行。",
    },
    {
      id: "access-payment-matrix",
      title: "就医途径与付费一览",
      type: "table",
      columns: ["途径", "例子", "付费通常如何运作", "如何开始"],
      rows: [
        {
          cells: [
            "公共资助的居家与社区照护",
            "居家护理、居家治疗、照护协调",
            "符合项目规则时，可能适用公共项目",
            "从医护人员转诊或官方居家照护途径开始",
          ],
        },
        {
          cells: [
            "社区型服务",
            "社区健康中心的牙科或低门槛支持",
            "视服务而定，可能有公共或社区资助",
            "直接联系该项目并询问资格条件",
          ],
        },
        {
          cells: [
            "学校提供的支持",
            "校园心理咨询或健康相关支持",
            "通常与学生资格、学生费用或学生保险计划挂钩",
            "先使用您学校的官方服务页面",
          ],
        },
        {
          cells: [
            "私营辅助医疗",
            "物理治疗、心理咨询、按摩、私营牙科、私营视力服务",
            "除非有其他计划承保，通常需要自费",
            "预约前先问清全部费用和保险规则",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "辅助与社区照护的例子",
      type: "grid",
      gridItems: [
        {
          title: "居家照护",
          content:
            "适用于在患病、受伤或住院之后需要在家中获得支持的情况。",
          icon: "clock",
          link: {
            text: "居家照护服务列表",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "牙科护理",
          content:
            "牙科保障与普通的医生保障是分开的。联邦的加拿大牙科保健计划（CDCP）现已为许多没有私人牙科保险的人提供保障，Healthy Smiles Ontario 和社区牙科诊所等项目也帮助特定人群。",
          icon: "shield",
          link: {
            text: "牙科与社区服务列表",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "康复与治疗",
          content:
            "物理治疗、职业治疗及相关服务可能属于公共、社区或私营，取决于您的就医途径。",
          icon: "stethoscope",
          link: { text: "辅助照护服务列表", url: "/local-services?category=allied-community" },
        },
        {
          title: "视力支持",
          content:
            "视力支持可能包括辅助器具、定向行走帮助和社区支持，也包括医学眼科照护。",
          icon: "info",
          link: {
            text: "视力支持服务列表",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "预约之前",
      type: "checklist",
      items: [
        "询问是否需要转诊",
        "询问该服务是公共资助、社区资助还是需要自费",
        "如果是私营服务，问清确切费用和取消规则",
        "确认您的学校或私人保险计划是否能承担部分费用",
        "询问是否需要携带病历、影像资料或医生证明",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "常见问题与词汇表",
  description:
    "新移民常见情况、实用问题，以及通俗语言的词汇解释。",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "安大略省：安省的医疗服务",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "省级医疗服务的一般性指引。",
    },
    {
      title: "安大略省：Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "官方护士咨询指引。",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "新移民常见情况",
      type: "faq",
      faqs: [
        {
          question: "我还没有 OHIP。我应该先做什么？",
          answer:
            "先了解您的保险途径，然后使用本地服务目录和紧急指引页面，制定一个安全的临时计划。",
        },
        {
          question: "我是国际学生。应该从哪里开始？",
          answer:
            "先从您的校园健康或身心健康服务以及学校保险文件开始；当这些不够用时，再使用社区或紧急服务。",
        },
        {
          question: "我需要口译。",
          answer:
            "请尽早提出。您可以通过“语言”菜单用 33 种语言阅读本网站，也可以把口译帮助标签页中的常用语句出示给工作人员。涉及预约、用药说明、知情同意和检查结果讨论时，请询问专业口译支持。Health811（拨打 811）提供多种语言的电话支持。",
        },
        {
          question: "就诊后我需要抽血化验。",
          answer:
            "先确认您有检查申请单，然后在目录中搜索化验与影像检查服务。",
        },
        {
          question: "我需要续药，但联系不上医生。",
          answer:
            "先从您的药房开始，再根据药物种类和紧急程度，酌情使用免预约、线上或紧急就诊途径。",
        },
        {
          question: "我的孩子需要就医。",
          answer:
            "先对照急诊警示征兆，再参考当日或紧急就医指引。儿童与青少年的心理健康求助途径通常与成人照护分开。",
        },
        {
          question: "我今晚需要心理健康帮助。",
          answer:
            "随时可拨打或发短信 9-8-8（自杀危机热线），或拨打 AMHS-KFLA 全天 24 小时危机热线 613-544-4229。如果安全有风险，请使用急诊。不要等待常规预约。",
        },
        {
          question: "我看不懂检查申请单或转诊单。",
          answer:
            "打电话给开单的诊所，请他们用通俗语言解释。您可以询问它的用途、要送到哪里，以及由谁负责跟进。",
        },
      ],
    },
    {
      id: "more-questions",
      title: "更多常见问题",
      type: "faq",
      faqs: [
        {
          question: "我没有医生，可以直接去急诊吗？",
          answer:
            "急诊是留给紧急情况的。如果问题并非明显危及生命，请先查看紧急指引页面、拨打 Health811、使用免预约诊所或其他当日就医服务。",
        },
        {
          question: "我刚来，不知道哪项服务适合我，怎么办？",
          answer:
            "可以使用目录的筛选功能，按学生、新移民、儿童与青少年、免预约、线上就诊、需转诊和保险类型筛选。",
        },
        {
          question: "如果网站上的信息看起来过时了怎么办？",
          answer:
            "请使用页面或服务条目上的报告表单，这样下次审核就能重点核实您发现的变化。",
        },
      ],
    },
    {
      id: "glossary",
      title: "词汇表",
      type: "checklist",
      items: [
        "基础医疗（primary care）：您处理日常和长期健康需求的常规就医途径。",
        "执业护士（nurse practitioner，NP）：一种高级实践护士，在许多情况下可以进行评估、诊断、开处方和转诊。",
        "转诊（referral）：一位医护人员向另一项服务或专科医生提出的诊治请求。",
        "检查申请单（requisition）：一张告诉化验所或影像检查诊所您需要做什么检查的表格。",
        "分诊（triage）：根据安全程度和病情轻重，决定谁需要优先获得紧急照护的过程。",
        "免预约诊所（walk-in clinic）：可以不经预约接诊患者的诊所，受每日接诊量限制。",
        "紧急护理（urgent care）：针对紧急但并非明显危及生命问题的当日照护。",
        "已登记（rostered/attached）患者：与固定的基础医疗提供者建立了持续关系的患者。",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "关于、可信度与隐私",
  description:
    "了解本指南如何运作、信息来源和审核状态如何处理，以及如何报告信息变化。",
  reviewed_on: "2026-06-11",
  review_status: "reviewed",
  sources: [
    {
      title: "项目来源说明",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "面向公众的说明，介绍本项目如何处理可信度与信息来源。",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "本网站的用途",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca 是一份面向新移民的安大略省金斯顿医疗导航指南，旨在帮助人们选择正确的下一步、理解常见的系统术语，并找到可信的本地服务条目。\n\n本网站**不是**实时等候时间工具、预约平台或医疗建议服务。",
    },
    {
      id: "sources",
      title: "可信度与来源机制",
      type: "default",
      content:
        "我们尽可能将本地服务条目链接到官方服务页面。每个条目都显示审核状态和最近审核日期。部分条目已对照官方来源完全核实；其他条目因开放时间、接收新患者或就诊规则经常变动，仍需本地再核实。\n\n页面级的来源板块展示当前审核周期所使用的主要官方参考资料。",
    },
    {
      id: "accessibility",
      title: "无障碍与语言",
      type: "default",
      content:
        "本网站为键盘操作友好、移动优先而设计，并以通俗语言撰写。\n\n您可以通过页眉的“语言”菜单用 **33 种语言**阅读完整指南——从 العربية、Soomaali 到 ਪੰਜਾਬੀ、ትግርኛ、Yorùbá 和 Українська——每个页面和菜单都直接由本站提供。所有翻译均由机器辅助完成；法语、西班牙语、阿拉伯语和简体中文经过了额外的审核，其余语言标注为自动翻译。**英文版仍是参考版本**——如果某句翻译看起来不清楚或令人意外，请查看英文原文，或请人帮忙确认。\n\n通过同一菜单，还可以用数十种其他语言经 Google 翻译打开本网站；口译帮助标签页还提供 20 多种语言的紧急常用语句，可出示给工作人员。\n\n服务目录条目（服务名称、地址、电话号码和开放时间）保留英文，以便与官方来源完全一致。\n\n任何形式的翻译在医疗细节上仍可能出错，因此涉及预约、用药说明和知情同意时，请询问专业口译支持。Health811（拨打 811）提供多种语言的电话支持。",
    },
    {
      id: "privacy",
      title: "隐私",
      type: "default",
      content:
        "本网站不使用侵入式的远程分析工具。它只在您自己的浏览器中保存轻量的改进统计，以便在为维护目的而主动导出这些信息时，维护者能了解常见搜索、零结果搜索、服务浏览和问题报告的情况。\n\n请不要通过反馈表单或电子邮件发送私人医疗信息。",
    },
    {
      id: "contact",
      title: "联系方式与报告信息变化",
      type: "default",
      content:
        "如果某个页面或服务条目看起来有误，请使用该页面上的报告表单。报告应描述问题本身，而不是您的个人健康情况。\n\n一般联系邮箱：**challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "免责声明",
      type: "default",
      content:
        "本网站仅用于就医导航和教育目的。它不是医疗建议，也不能替代专业诊断、治疗或紧急救助。如果情况可能危及生命，请拨打 911。",
    },
  ],
};

export const kingstonContentZh: Record<string, PageContent> = {
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
