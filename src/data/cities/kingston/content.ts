import type { PageContent } from "../../../types";

const homePage: PageContent = {
  title: "Kingston Healthcare Navigation Guide",
  description:
    "A newcomer-first, plain-language guide to finding healthcare in Kingston, Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [],
  sections: [],
};

const startHerePage: PageContent = {
  title: "Start Here",
  description:
    "New to Kingston or new to Ontario healthcare? Start here to learn how the system works and what to do first.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Health care in Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "Overview of how insured care works in Ontario.",
    },
    {
      title: "Ontario: Apply for OHIP and get a health card",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Official OHIP application and eligibility information.",
    },
    {
      title: "Ontario: Find a family doctor or nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Health Care Connect and primary care access guidance.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Federal coverage information for eligible refugees and refugee claimants.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "How healthcare works in Ontario",
      type: "default",
      content: `Ontario healthcare is organized around **primary care**. Primary care means the place you usually start for routine health needs, ongoing conditions, prescriptions, referrals, and prevention. Your primary care provider may be a family doctor, a nurse practitioner, a community health centre team, or a student health clinic if you qualify.

A **referral** is when one clinician asks another service or specialist to see you. A **requisition** is a form that tells a lab or imaging clinic what test you need.

You do not need to understand every part of the system on day one. The most important steps are: learn your coverage, know where to go for urgent issues, and make a plan for regular care if you do not already have a provider.`,
    },
    {
      id: "first-decisions",
      title: "First decisions",
      type: "grid",
      gridItems: [
        {
          title: "I may need urgent help",
          content:
            "Start with emergency vs urgent care guidance if you have a sudden problem today or tonight.",
          icon: "alert",
          link: { text: "Need Help Now", url: "/need-help-now" },
        },
        {
          title: "I do not have a family doctor",
          content:
            "Learn how family doctors, nurse practitioners, community health centres, walk-in clinics, and student clinics fit together.",
          icon: "stethoscope",
          link: { text: "Find Primary Care", url: "/get-a-family-doctor" },
        },
        {
          title: "I need to understand what is covered",
          content:
            "Read about OHIP, IFHP, private insurance, student plans, drug coverage, and common out-of-pocket costs.",
          icon: "shield",
          link: { text: "Costs and Coverage", url: "/costs-and-coverage" },
        },
        {
          title: "I need language help",
          content:
            "Use browser translation for reading, but ask about interpreter support for clinical conversations and consent.",
          icon: "info",
          link: { text: "Accessibility and language", url: "/about#accessibility" },
        },
        {
          title: "I need bloodwork, imaging, or a refill",
          content:
            "Use the local directory to find the next practical step after a visit.",
          icon: "file",
          link: { text: "Search Local Services", url: "/local-services" },
        },
        {
          title: "I am not sure where to start",
          content:
            "Call Health811 for nurse advice if you are unsure how urgent your situation is.",
          icon: "clock",
          link: { text: "Health811 and urgent guidance", url: "/need-help-now#after-hours" },
        },
      ],
    },
    {
      id: "first-week",
      title: "Good first steps in your first week",
      type: "steps",
      items: [
        "Learn your coverage: Read what OHIP, IFHP, private insurance, and student plans usually cover. If you may qualify for OHIP, apply as soon as you can.",
        "Choose your urgent plan: Know when to call 911, when to start with Health811, and where to find urgent or same-day care in Kingston.",
        "Plan for regular care: If you do not have a regular provider, learn your options for family doctors, nurse practitioners, community health centres, student clinics, walk-in clinics, and virtual care.",
        "Keep your health information together: Save your health card or IFHP papers, medication list, vaccine record, and copies of any requisitions or referrals.",
      ],
    },
    {
      id: "if-no-coverage-yet",
      title: "If you do not have OHIP yet",
      type: "callout",
      content:
        "Do not wait until you are sick to learn your coverage path. If you are eligible for OHIP, apply early. If you are covered through IFHP or a school or private plan, keep that information with you. If you are uninsured, ask about fees before a visit and look for community or low-barrier services where appropriate.",
      link: { text: "Read about coverage", url: "/costs-and-coverage" },
    },
    {
      id: "keep-ready",
      title: "Keep these things ready",
      type: "checklist",
      items: [
        "Your health card, IFHP papers, or insurance information",
        "A medication list, even if you only take a few medicines",
        "The name and phone number of your last clinic or provider, if you have one",
        "Any recent requisitions, referrals, discharge papers, or test instructions",
        "Questions you want to ask in plain language",
        "Interpreter needs written down so you remember to ask",
      ],
    },
  ],
};

const needHelpNowPage: PageContent = {
  title: "Need Help Now?",
  description:
    "Use this page when you have a health problem today or tonight and are not sure where to start.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Get medical advice from Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Official 24/7 nurse advice service.",
    },
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Official hospital network for emergency, urgent care, and imaging information.",
    },
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Official local mental health and crisis support organization.",
    },
  ],
  sections: [
    {
      id: "emergency-vs-urgent",
      title: "Emergency or urgent?",
      type: "comparison",
      comparison: {
        left: {
          title: "Go to emergency right away for problems such as:",
          items: [
            "Chest pain, major trouble breathing, or signs of stroke",
            "Severe bleeding, major injury, or loss of consciousness",
            "Sudden confusion, seizure, or serious allergic reaction",
            "A safety emergency where waiting could put life or limb at risk",
          ],
        },
        right: {
          title: "Start with urgent care, Health811, or a same-day clinic for problems such as:",
          items: [
            "Sprains, minor cuts, rashes, ear pain, or fever without emergency warning signs",
            "Prescription refill problems that cannot wait for a routine appointment",
            "Questions about whether you need urgent care tonight",
            "A problem that feels urgent but not clearly life-threatening",
          ],
        },
      },
    },
    {
      id: "after-hours",
      title: "Common after-hours situations",
      type: "table",
      columns: ["Situation", "Good first step", "What to remember"],
      rows: [
        {
          cells: [
            "I am not sure how urgent this is",
            "Call Health811",
            "A nurse can help you decide whether to stay home, seek urgent care, or go to emergency.",
          ],
        },
        {
          cells: [
            "My doctor is closed and I need advice tonight",
            "Health811 or urgent care guidance",
            "Do not assume emergency is your only option if there are no emergency warning signs.",
          ],
        },
        {
          cells: [
            "I need care for my child",
            "Use the same emergency warning signs, then seek same-day care or call Health811 if you are unsure",
            "Bring the child's health card, medicine list, and the timeline of symptoms if possible.",
          ],
        },
        {
          cells: [
            "I need mental health help tonight",
            "Use crisis support right away if there is immediate danger or severe distress",
            "If there is immediate risk to safety, call 911.",
          ],
        },
      ],
      caption:
        "This table is general guidance only. If someone may be in immediate danger, call 911.",
    },
    {
      id: "kingston-start-points",
      title: "Kingston starting points",
      type: "grid",
      gridItems: [
        {
          title: "Emergency Department",
          content:
            "Use emergency care for life-threatening or potentially life-threatening problems.",
          icon: "alert",
          link: {
            text: "Emergency and urgent listings",
            url: "/local-services?category=emergency-urgent",
          },
        },
        {
          title: "Urgent Care Centre",
          content:
            "Useful for many same-day problems that cannot wait but are not clear emergencies.",
          icon: "clock",
          link: {
            text: "Urgent and same-day care",
            url: "/local-services?category=emergency-urgent&access=walk-in",
          },
        },
        {
          title: "Health811",
          content: "Phone or online nurse advice if you are unsure where to go.",
          icon: "info",
          link: { text: "Health811 listing", url: "/local-services/health811" },
        },
        {
          title: "Mental health crisis support",
          content:
            "Use local crisis support if you need urgent mental health help, especially outside clinic hours.",
          icon: "heart",
          link: { text: "Mental health listings", url: "/local-services?category=mental-health" },
        },
        {
          title: "Sexual violence support",
          content:
            "Use specialized crisis support if you need immediate emotional support, advocacy, or safety planning.",
          icon: "shield",
          link: {
            text: "Support listings",
            url: "/local-services?category=mental-health&q=sexual+assault",
          },
        },
        {
          title: "Student urgent options",
          content:
            "If you are a student, check whether your campus health service is the best first stop for non-emergency needs.",
          icon: "stethoscope",
          link: { text: "Student health listings", url: "/local-services?audience=students" },
        },
      ],
    },
    {
      id: "what-to-do-next",
      title: "If you still are not sure",
      type: "callout",
      content:
        "When the problem is not clearly life-threatening but you are worried about waiting, start with Health811. If someone may not be safe, may be getting worse quickly, or you cannot get the right help in time, use emergency services.",
      link: { text: "Call Health811", url: "tel:811" },
    },
    {
      id: "bring-with-you",
      title: "Bring these if you can",
      type: "checklist",
      items: [
        "Health card, IFHP papers, or any insurance card you have",
        "A medication list or photos of medicine bottles",
        "The time symptoms started and anything that made them worse",
        "Interpreter needs written down if you may be too stressed to remember later",
        "A phone charger and a support person if that helps you",
      ],
    },
  ],
};

const getPrimaryCarePage: PageContent = {
  title: "Finding Primary Care",
  description:
    "Learn the different pathways to regular healthcare in Kingston if you do not already have a provider.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Find a family doctor or nurse practitioner",
      url: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner",
      note: "Official Health Care Connect guidance.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Official information on local community health centre services.",
    },
    {
      title: "Queen's Student Wellness Services",
      url: "https://www.queensu.ca/studentwellness/",
      note: "Official student health information for Queen's students.",
    },
    {
      title: "St. Lawrence College Health and Wellness",
      url: "https://www.stlawrencecollege.ca/services/student-services/health-and-wellness",
      note: "Official student health information for St. Lawrence College students.",
    },
  ],
  sections: [
    {
      id: "what-primary-care-means",
      title: "What primary care means",
      type: "default",
      content:
        "Primary care is the place you usually go first for routine health needs. That includes check-ups, medicine renewals, chronic disease care, referrals, preventive care, and follow-up after urgent issues.\n\nIn Kingston, your regular primary care path may involve a family doctor, a nurse practitioner, a community health centre, a campus clinic, or a combination of temporary options while you wait for more stable care.",
    },
    {
      id: "access-matrix",
      title: "Primary care access pathways",
      type: "table",
      columns: ["Pathway", "Best for", "Who can use it", "How to start"],
      rows: [
        {
          cells: [
            "Family doctor or nurse practitioner",
            "Ongoing regular care and long-term health planning",
            "Patients who can register with a provider panel",
            "Use Health Care Connect and watch for local openings",
          ],
        },
        {
          cells: [
            "Community health centre",
            "Community-based care, lower-barrier support, and some newcomer or complex-needs care",
            "Eligibility depends on program and intake status",
            "Contact the organization directly and ask about intake",
          ],
        },
        {
          cells: [
            "Student health service",
            "Faster access for registered students",
            "Only students who qualify through the school",
            "Use your campus health or wellness service",
          ],
        },
        {
          cells: [
            "Walk-in clinic or urgent same-day care",
            "Short-term care while you wait or when your regular provider is unavailable",
            "General public, subject to daily intake rules",
            "Check current access before you go",
          ],
        },
        {
          cells: [
            "Virtual primary care",
            "Some refill, advice, and routine issues",
            "Varies by provider and coverage",
            "Check what the provider can and cannot safely manage online",
          ],
        },
      ],
      caption:
        "The best pathway depends on your eligibility, urgency, and whether you need short-term or ongoing care.",
    },
    {
      id: "if-you-have-no-provider",
      title: "If you do not have a regular provider",
      type: "steps",
      items: [
        "Register through the official provincial pathway: Use Health Care Connect if you do not have a family doctor or nurse practitioner.",
        "Check whether you qualify for campus or community health options: Students should start with their school clinic. Some community health services have specific intake priorities.",
        "Build a safe temporary plan: Know which walk-in, urgent, virtual, pharmacy, and mental health services you can use while waiting.",
        "Keep your own records: Save medicine lists, test results, referrals, and the names of clinicians you saw.",
      ],
    },
    {
      id: "while-you-wait",
      title: "What to do while you wait",
      type: "checklist",
      items: [
        "Use walk-in, urgent, or virtual care for short-term needs when appropriate",
        "Ask the pharmacy what refill help or minor ailment care may be available",
        "Keep one updated medication list and carry it to every visit",
        "Bring copies of important results or discharge papers when care is fragmented",
        "Use the same clinic for follow-up when possible so your care is a little more consistent",
      ],
    },
    {
      id: "next-best-option",
      title: "If your need is urgent but not an emergency",
      type: "callout",
      content:
        "Not having a family doctor does not mean you should delay important care. Use the right short-term option for the problem in front of you, then make a plan for continuity after the urgent problem is treated.",
      link: { text: "Search primary care options", url: "/local-services?category=primary-care" },
    },
  ],
};

const costsAndCoveragePage: PageContent = {
  title: "Costs and Coverage",
  description:
    "Plain-language coverage guidance for OHIP, IFHP, student or private plans, and common out-of-pocket costs.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: Apply for OHIP and get a health card",
      url: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
      note: "Official OHIP guidance.",
    },
    {
      title: "Canada: Interim Federal Health Program",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html",
      note: "Official IFHP coverage information.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Official provincial drug coverage guidance.",
    },
    {
      title: "Ontario: Get help with high prescription drug costs",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Official Trillium Drug Program guidance.",
    },
  ],
  sections: [
    {
      id: "coverage-basics",
      title: "Coverage basics",
      type: "default",
      content:
        "Coverage in Ontario depends on your legal status, age, income, program eligibility, and whether you have a school or private insurance plan.\n\nMany medically necessary doctor and hospital services are covered for eligible OHIP patients. That does **not** mean everything is free. Medicines, dental care, vision care, forms, sick notes, and many allied health services often involve separate coverage or out-of-pocket payment.",
    },
    {
      id: "coverage-matrix",
      title: "Coverage pathways at a glance",
      type: "table",
      columns: [
        "Coverage type",
        "Usually helps with",
        "What still may not be covered",
        "What to do next",
      ],
      rows: [
        {
          cells: [
            "OHIP",
            "Many medically necessary doctor and hospital services",
            "Many medicines, dental care, vision care, and forms",
            "Apply if eligible and keep your card current",
          ],
        },
        {
          cells: [
            "IFHP",
            "Coverage for eligible refugees and refugee claimants according to the federal program",
            "Details vary by category and service",
            "Check the official IFHP guide and ask the clinic or pharmacy if they accept it",
          ],
        },
        {
          cells: [
            "School or private insurance",
            "Often helps with medicines, counselling, dental, vision, and allied health",
            "Coverage limits, co-pays, and network rules vary",
            "Read the plan booklet before assuming a service is covered",
          ],
        },
        {
          cells: [
            "No active coverage",
            "You may still be able to access some services, but fees may apply",
            "Costs can be significant for visits, tests, or medicines",
            "Ask about fees before the visit and look for community options where appropriate",
          ],
        },
      ],
    },
    {
      id: "what-is-often-not-covered",
      title: "What is often not fully covered",
      type: "checklist",
      items: [
        "Many prescription medicines unless you qualify for a public program or have another plan",
        "Dental care outside specific programs or benefit plans",
        "Vision care outside specific eligibility pathways",
        "Physiotherapy, counselling, massage, and other allied health services unless a program or plan covers them",
        "Forms, letters, missed-appointment fees, and many other administrative charges",
      ],
    },
    {
      id: "drug-coverage",
      title: "Drug coverage pathways",
      type: "default",
      content:
        "Drug coverage is often where newcomers get surprised. A doctor visit may be covered, but the prescription may still cost money.\n\nPublic drug programs may help depending on age, income, and eligibility. Ontario also has the **Trillium Drug Program** for some people with high prescription costs compared with household income. If you have a school or private plan, check whether it coordinates with public coverage or replaces it.",
    },
    {
      id: "coverage-scenarios",
      title: "Common coverage questions",
      type: "faq",
      faqs: [
        {
          question: "I do not have OHIP yet. Can I still get care?",
          answer:
            "Yes, but fees may apply and the best pathway depends on your status and urgency. Ask about costs before non-emergency care when possible, and look at IFHP or school or private plan eligibility if that applies to you.",
        },
        {
          question: "I am an international student. Is OHIP my only option?",
          answer:
            "Not always. Many students rely on a school or private insurance plan instead of OHIP. Use your school's official plan documents and student health services to confirm what is covered.",
        },
        {
          question: "Will my medicine be free if my appointment was covered?",
          answer:
            "Not necessarily. Appointment coverage and prescription coverage are often separate.",
        },
        {
          question: "How do I know if a service is public, community, or private?",
          answer:
            "Use the directory filters and look at the listing details. If you are unsure, contact the service before you book.",
        },
      ],
    },
  ],
};

const yourVisitPage: PageContent = {
  title: "Your Healthcare Visit",
  description:
    "What to bring, how to ask questions, and how to communicate safely during a healthcare visit.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Health care in Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "General system guidance.",
    },
  ],
  sections: [
    {
      id: "what-to-bring",
      title: "What to bring",
      type: "checklist",
      items: [
        "Your health card, IFHP papers, or other insurance information",
        "A full medication list, including vitamins and over-the-counter medicines",
        "The names of symptoms, when they started, and what changed",
        "Questions you want answered before you leave",
        "Any recent requisitions, referrals, discharge papers, or test results",
        "Interpreter needs written down so you remember to ask",
      ],
    },
    {
      id: "during-the-visit",
      title: "During the visit",
      type: "steps",
      items: [
        "Start with your main problem: Many appointments are short, so begin with the concern that matters most today.",
        "Use plain language: It is okay to say, 'I do not understand that word' or 'Can you explain that in a simpler way?'",
        "Repeat the plan back: Before you leave, say the next steps out loud so you know whether you need a test, a referral, a refill, or a follow-up appointment.",
        "Ask what happens if things get worse: You should know when to call back, when to use urgent care, and when to use emergency care.",
      ],
    },
    {
      id: "interpreter-help",
      title: "Interpreter and communication help",
      type: "default",
      content:
        "If you need language help, ask early. Do not wait until the end of the appointment. Browser translation can help you read this website, but it should not replace interpreter support for treatment decisions, medication instructions, or consent.\n\nYou can say: **'I need an interpreter, please.'** If a support person comes with you, remember that a family member may not always be the best or safest person to interpret complex or sensitive medical information.",
    },
    {
      id: "questions-to-ask",
      title: "Questions worth asking",
      type: "checklist",
      items: [
        "What do you think is happening?",
        "What should I do next?",
        "Do I need a test, requisition, referral, or follow-up visit?",
        "When should I expect to hear results?",
        "What warning signs mean I should call back or get urgent help?",
      ],
    },
    {
      id: "privacy",
      title: "Privacy and consent",
      type: "default",
      content:
        "Your health information is sensitive. If you are unsure who will see your information, ask. If you do not understand a form, consent conversation, or treatment plan, slow the process down and ask for a clearer explanation.",
    },
  ],
};

const afterVisitPage: PageContent = {
  title: "After the Visit",
  description:
    "Learn what happens after a visit, including requisitions, test results, referrals, and when to call back.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Kingston Health Sciences Centre",
      url: "https://kingstonhsc.ca/",
      note: "Local hospital system information.",
    },
    {
      title: "LifeLabs",
      url: "https://www.lifelabs.com/",
      note: "Community lab process and patient portal information.",
    },
  ],
  sections: [
    {
      id: "results-journey",
      title: "What often happens after a visit",
      type: "steps",
      items: [
        "You leave with a plan: That may include a medicine, a requisition, a referral, a follow-up appointment, or instructions to watch for warning signs.",
        "You may need to do the next step yourself: For example, you may need to book bloodwork, imaging, a pharmacy pickup, or a follow-up visit.",
        "Results usually go back to the clinician who ordered them: The lab or imaging site may not explain the result to you on the spot.",
        "You may not get a call for every normal result: Ask what the clinic's follow-up process is so you know what to expect.",
      ],
    },
    {
      id: "common-terms",
      title: "Common after-visit terms",
      type: "table",
      columns: ["Term", "What it means in plain language", "What you usually do next"],
      rows: [
        {
          cells: [
            "Requisition",
            "A form telling the lab or imaging clinic what test you need",
            "Book or attend the test and keep a copy if you can",
          ],
        },
        {
          cells: [
            "Referral",
            "A request from one clinician to another service or specialist",
            "Wait for contact, then call back if you were told to follow up and nothing happens",
          ],
        },
        {
          cells: [
            "Follow-up",
            "A check-in after treatment, testing, or a change in symptoms",
            "Ask when and how the follow-up should happen before you leave",
          ],
        },
      ],
    },
    {
      id: "when-to-call-back",
      title: "When to call back",
      type: "checklist",
      items: [
        "You do not understand the requisition, referral, or medicine instructions",
        "You were told someone would contact you and you have not heard anything within the expected time",
        "Your symptoms are getting worse or not improving the way you were told to expect",
        "The pharmacy, lab, or imaging clinic told you something is missing from the paperwork",
        "You think a result may have been missed or you are still worried",
      ],
    },
    {
      id: "after-visit-scenarios",
      title: "Common scenarios",
      type: "faq",
      faqs: [
        {
          question: "I need bloodwork after a visit. What do I do?",
          answer:
            "Check whether you have a requisition and whether the lab wants booking. Then use the directory to find a lab location. Bring the requisition and your coverage information.",
        },
        {
          question: "I do not understand the requisition or referral form.",
          answer:
            "Call the clinic that gave it to you and ask them to explain it in plain language. It is reasonable to ask what the form is for, where it should go, and whether you need to book anything yourself.",
        },
        {
          question: "Who follows up on test results?",
          answer:
            "Usually the clinician who ordered the test. Ask that clinician's office what their usual process is for normal and abnormal results.",
        },
        {
          question: "How long do referrals take?",
          answer:
            "Referral timelines vary a lot. Ask what kind of wait is normal for your situation and what to do if you do not hear back.",
        },
      ],
    },
    {
      id: "next-step-links",
      title: "Useful next steps",
      type: "grid",
      gridItems: [
        {
          title: "Find labs and imaging",
          content:
            "Use the directory for bloodwork, X-ray, ultrasound, and imaging listings.",
          icon: "file",
          link: { text: "Labs and imaging", url: "/local-services?category=labs-imaging" },
        },
        {
          title: "Find a pharmacy",
          content:
            "Use the directory for pharmacies, refill help, and medication support.",
          icon: "shield",
          link: { text: "Pharmacies", url: "/local-services?category=pharmacies" },
        },
        {
          title: "Need to plan follow-up care?",
          content:
            "Use the primary care page if you do not know where long-term follow-up should happen.",
          icon: "stethoscope",
          link: { text: "Find Primary Care", url: "/get-a-family-doctor" },
        },
      ],
    },
  ],
};

const medicinesPage: PageContent = {
  title: "Medicines and Pharmacies",
  description:
    "Understand prescriptions, refills, pharmacist help, and how to pay for medicines in Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario: What pharmacists can do",
      url: "https://www.ontario.ca/page/pharmacies",
      note: "Official provincial pharmacist and pharmacy information.",
    },
    {
      title: "Ontario Drug Benefit",
      url: "https://www.ontario.ca/page/get-coverage-prescription-drugs",
      note: "Official provincial drug coverage guidance.",
    },
    {
      title: "Ontario: Get help with high prescription drug costs",
      url: "https://www.ontario.ca/page/get-help-high-prescription-drug-costs",
      note: "Official Trillium Drug Program guidance.",
    },
  ],
  sections: [
    {
      id: "pharmacist-role",
      title: "What a pharmacist can help with",
      type: "default",
      content:
        "Pharmacists do more than hand out medicine. They can explain how to take a medicine safely, check for interactions, review side effects, and in Ontario they may be able to assess or prescribe for some minor conditions depending on the current provincial rules.\n\nA pharmacy is also one of the best places to ask practical questions such as: **Is this refill urgent? Is there a cheaper option? What should I do if I missed a dose?**",
    },
    {
      id: "fill-a-prescription",
      title: "How to fill a prescription",
      type: "steps",
      items: [
        "Get the prescription: It may be paper, faxed, or sent electronically.",
        "Choose the pharmacy: Using the same pharmacy regularly helps them catch medicine interactions and refill history issues.",
        "Ask about timing and cost: The pharmacy can tell you when it will be ready and whether your plan is covering it.",
        "Listen to the counselling: Ask what the medicine is for, how to take it, and when you should call back if it does not help.",
      ],
    },
    {
      id: "refill-options",
      title: "Refill and medicine problems",
      type: "table",
      columns: ["Situation", "Good first step", "Why"],
      rows: [
        {
          cells: [
            "I need a routine refill",
            "Start with your usual pharmacy or regular clinician",
            "They can tell you whether a refill, renewal, or new appointment is needed",
          ],
        },
        {
          cells: [
            "My doctor is unavailable and I may run out",
            "Ask the pharmacy what options are available, then use walk-in, virtual, or urgent care if needed",
            "The safest next step depends on the medicine and your situation",
          ],
        },
        {
          cells: [
            "I do not understand how to take this medicine",
            "Ask the pharmacist to explain it again in plain language",
            "This is part of safe medicine use",
          ],
        },
        {
          cells: [
            "The medicine costs too much",
            "Ask about generic versions, plan coverage, and public programs",
            "Drug costs vary and coverage is often separate from the visit itself",
          ],
        },
      ],
    },
    {
      id: "paying-for-medicines",
      title: "Ways medicines may be paid for",
      type: "checklist",
      items: [
        "A public drug program, if you qualify",
        "A school or private insurance plan",
        "A combination of public and private coverage",
        "Out of pocket if no program covers the medicine",
      ],
    },
    {
      id: "pharmacy-links",
      title: "Need local pharmacy help?",
      type: "callout",
      content:
        "Use the directory to find pharmacies, refill support, and virtual or same-day options when you are trying to solve a medicine problem quickly.",
      link: { text: "Search pharmacy listings", url: "/local-services?category=pharmacies" },
    },
  ],
};

const mentalHealthPage: PageContent = {
  title: "Mental Health Support",
  description:
    "Local mental health, counselling, youth support, and crisis pathways in Kingston.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "AMHS-KFLA",
      url: "https://www.amhs-kfla.ca/",
      note: "Official adult mental health and crisis support information.",
    },
    {
      title: "ConnexOntario",
      url: "https://www.connexontario.ca/",
      note: "Official Ontario mental health and addiction helpline.",
    },
    {
      title: "Maltby Centre",
      url: "https://maltbycentre.ca/",
      note: "Official child and youth mental health information.",
    },
  ],
  sections: [
    {
      id: "crisis",
      title: "If someone may not be safe",
      type: "callout",
      content:
        "If there is immediate risk to life or safety, call 911. If there is urgent emotional distress or a mental health crisis, use local crisis support right away instead of waiting for a routine appointment.",
      link: { text: "Mental health listings", url: "/local-services?category=mental-health" },
    },
    {
      id: "support-types",
      title: "Types of support",
      type: "grid",
      gridItems: [
        {
          title: "Crisis support",
          content:
            "Use this for immediate distress, safety concerns, or when waiting is not safe.",
          icon: "alert",
        },
        {
          title: "Urgent support",
          content:
            "Use this when the situation is serious and you need help soon, but it is not an immediate life-threatening emergency.",
          icon: "clock",
        },
        {
          title: "Routine counselling",
          content:
            "Use this for ongoing anxiety, depression, stress, grief, relationship problems, or life transitions.",
          icon: "heart",
        },
        {
          title: "Child and youth services",
          content:
            "Use specialized youth mental health services when the person needing care is a child or teenager.",
          icon: "info",
        },
        {
          title: "Campus support",
          content:
            "Students may be best served by their campus wellness or counselling pathways first.",
          icon: "stethoscope",
        },
        {
          title: "Sexual violence support",
          content:
            "Use specialized support for crisis, counselling, advocacy, and safety planning after sexual violence.",
          icon: "shield",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Where to start in common situations",
      type: "table",
      columns: ["Situation", "Best first stop", "Why"],
      rows: [
        {
          cells: [
            "I need mental health help tonight",
            "Crisis support or emergency care if safety is at risk",
            "Do not wait for a routine appointment when the situation feels unsafe",
          ],
        },
        {
          cells: [
            "I need counselling but I am safe right now",
            "Community counselling, family doctor, nurse practitioner, or private plan supports",
            "These can help with ongoing care and referrals",
          ],
        },
        {
          cells: [
            "I need help for my child",
            "Child or youth mental health services and, if needed, urgent guidance",
            "Children and youth often have separate pathways",
          ],
        },
        {
          cells: [
            "I am a student",
            "Campus health or counselling first, unless the situation is unsafe or severe",
            "Campus services may be the fastest entry point for students",
          ],
        },
      ],
    },
    {
      id: "mental-health-scenarios",
      title: "Common questions",
      type: "faq",
      faqs: [
        {
          question: "What if I do not know whether this counts as a crisis?",
          answer:
            "If someone may not be safe, do not wait for certainty. Use crisis support or emergency services.",
        },
        {
          question: "What if I need help tonight but I am not sure who to call?",
          answer:
            "Use the local mental health directory page or crisis support pathway rather than waiting until morning.",
        },
        {
          question: "What if the person needing help is my child?",
          answer:
            "Look for child and youth services specifically. Youth mental health pathways are often different from adult care.",
        },
      ],
    },
  ],
};

const screeningPage: PageContent = {
  title: "Screening and Prevention",
  description:
    "Learn the basics of preventive care, vaccines, and screening in Ontario.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "KFL&A Public Health",
      url: "https://www.kflaph.ca/",
      note: "Local vaccine and public health information.",
    },
    {
      title: "Ontario: Health care in Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "General healthcare guidance.",
    },
  ],
  sections: [
    {
      id: "prevention-basics",
      title: "Why preventive care matters",
      type: "default",
      content:
        "Preventive care means trying to catch problems early or stop them before they become more serious. That includes vaccines, screening tests, regular blood pressure checks, and conversations about risk factors with a clinician.",
    },
    {
      id: "common-prevention",
      title: "Common prevention tasks",
      type: "checklist",
      items: [
        "Keep your vaccines up to date",
        "Ask whether screening tests are recommended for your age or health history",
        "Bring your questions about blood pressure, diabetes, or other risk factors to routine visits",
        "Use public health resources when you need vaccine or prevention information",
      ],
    },
    {
      id: "prevention-next",
      title: "Need local prevention services?",
      type: "callout",
      content:
        "Use the local services directory for public health, screening, and pharmacy listings if you need a concrete starting point in Kingston.",
      link: {
        text: "Public health and pharmacy listings",
        url: "/local-services?category=public-health",
      },
    },
  ],
};

const communityCarePage: PageContent = {
  title: "Allied and Community Care",
  description:
    "Use this page to understand home care, dental, rehab, counselling, vision support, and what may be public, community, student, or private.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Ontario Health atHome",
      url: "https://ontariohealthathome.ca/",
      note: "Official home and community care coordination information.",
    },
    {
      title: "Kingston Community Health Centres",
      url: "https://kchc.ca/",
      note: "Official community and dental service information.",
    },
    {
      title: "CNIB Foundation",
      url: "https://www.cnib.ca/",
      note: "Official vision support information.",
    },
  ],
  sections: [
    {
      id: "what-allied-means",
      title: "What allied and community care means",
      type: "default",
      content:
        "Allied health means care from professionals such as physiotherapists, occupational therapists, dietitians, social workers, counsellors, dentists, or vision support teams. Community care often means care that happens outside the hospital, sometimes in your home, school, clinic, or community program.",
    },
    {
      id: "access-payment-matrix",
      title: "Access and payment matrix",
      type: "table",
      columns: ["Route", "Examples", "How payment usually works", "How to start"],
      rows: [
        {
          cells: [
            "Publicly funded home and community care",
            "Home nursing, home therapy, care coordination",
            "Public programs may apply if you meet program rules",
            "Start with a clinician referral or official home care pathway",
          ],
        },
        {
          cells: [
            "Community-based services",
            "Community health centre dental or lower-barrier supports",
            "Public or community funding may apply depending on the service",
            "Contact the program directly and ask about eligibility",
          ],
        },
        {
          cells: [
            "School-based supports",
            "Campus counselling or health-related supports",
            "Usually tied to student eligibility and student fees or plans",
            "Use your school's official service pages first",
          ],
        },
        {
          cells: [
            "Private allied care",
            "Physiotherapy, counselling, massage, private dental, private vision services",
            "Often private pay unless another plan covers it",
            "Ask for full fees and coverage rules before booking",
          ],
        },
      ],
    },
    {
      id: "allied-examples",
      title: "Examples of allied and community care",
      type: "grid",
      gridItems: [
        {
          title: "Home care",
          content:
            "Useful when someone needs support at home after illness, injury, or hospital care.",
          icon: "clock",
          link: {
            text: "Home care listings",
            url: "/local-services?category=allied-community&q=home+care",
          },
        },
        {
          title: "Dental care",
          content:
            "Dental coverage is separate from regular doctor coverage. Some public or community dental programs exist for specific groups.",
          icon: "shield",
          link: {
            text: "Dental and community listings",
            url: "/local-services?category=allied-community&q=dental",
          },
        },
        {
          title: "Rehab and therapy",
          content:
            "Physiotherapy, occupational therapy, and related services may be public, community, or private depending on your pathway.",
          icon: "stethoscope",
          link: { text: "Allied care listings", url: "/local-services?category=allied-community" },
        },
        {
          title: "Vision support",
          content:
            "Vision support may involve devices, orientation help, and community supports as well as medical eye care.",
          icon: "info",
          link: {
            text: "Vision support listings",
            url: "/local-services?category=allied-community&q=vision",
          },
        },
      ],
    },
    {
      id: "before-you-book",
      title: "Before you book",
      type: "checklist",
      items: [
        "Ask whether a referral is needed",
        "Ask whether the service is public, community-funded, or private pay",
        "Ask for exact fees and cancellation rules if the service is private",
        "Check whether your school or private plan covers part of the cost",
        "Ask whether you need to bring records, imaging, or a doctor's note",
      ],
    },
  ],
};

const faqPage: PageContent = {
  title: "FAQ and Glossary",
  description:
    "Common newcomer scenarios, practical questions, and plain-language definitions.",
  reviewed_on: "2026-03-23",
  review_status: "general-guidance",
  sources: [
    {
      title: "Ontario: Health care in Ontario",
      url: "https://www.ontario.ca/page/health-care-ontario",
      note: "General provincial healthcare guidance.",
    },
    {
      title: "Ontario: Health811",
      url: "https://www.ontario.ca/page/get-medical-advice-health811",
      note: "Official nurse advice guidance.",
    },
  ],
  sections: [
    {
      id: "scenarios",
      title: "Common newcomer scenarios",
      type: "faq",
      faqs: [
        {
          question: "I have no OHIP yet. What should I do first?",
          answer:
            "Learn your coverage path first, then use the local directory and urgent guidance pages to make a safe temporary plan.",
        },
        {
          question: "I am an international student. Where should I start?",
          answer:
            "Start with your campus health or wellness service and your school insurance documents, then use community or urgent services when those are not enough.",
        },
        {
          question: "I need an interpreter.",
          answer:
            "Ask early. Use browser translation to read the site, but ask about interpreter support for appointments, medication instructions, consent, and test discussions.",
        },
        {
          question: "I need bloodwork after a visit.",
          answer:
            "Check that you have a requisition, then search the directory for labs and imaging.",
        },
        {
          question: "I need a refill and my doctor is unavailable.",
          answer:
            "Start with your pharmacy, then use walk-in, virtual, or urgent pathways as appropriate depending on the medicine and urgency.",
        },
        {
          question: "I need care for my child.",
          answer:
            "Use emergency warning signs first, then same-day or urgent guidance. Child and youth mental health pathways are often separate from adult care.",
        },
        {
          question: "I need mental health help tonight.",
          answer:
            "Use crisis support or emergency care if safety is at risk. Do not wait for a routine appointment.",
        },
        {
          question: "I do not understand a requisition or referral.",
          answer:
            "Call the clinic that gave it to you and ask them to explain it in plain language. You can ask what it is for, where it goes, and who should follow up.",
        },
      ],
    },
    {
      id: "more-questions",
      title: "More common questions",
      type: "faq",
      faqs: [
        {
          question: "Can I just go to emergency if I do not have a doctor?",
          answer:
            "Emergency is for emergencies. If the problem is not clearly life-threatening, start with the urgent guidance page, Health811, a walk-in clinic, or other same-day care.",
        },
        {
          question: "What if I am new and do not know which service fits me?",
          answer:
            "Use the directory filters for students, newcomers, children and youth, walk-in, virtual, referral needed, and coverage type.",
        },
        {
          question: "What if the information on this site looks outdated?",
          answer:
            "Use the report form on the page or listing so the next review can focus on the change you found.",
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossary",
      type: "checklist",
      items: [
        "Primary care: Your regular healthcare path for routine and ongoing health needs.",
        "Nurse practitioner (NP): An advanced practice nurse who can assess, diagnose, prescribe, and refer in many situations.",
        "Referral: A request from one clinician to another service or specialist.",
        "Requisition: A form telling a lab or imaging clinic what test you need.",
        "Triage: The process of deciding who needs urgent care first based on safety and severity.",
        "Walk-in clinic: A clinic that may see patients without a booked appointment, subject to daily intake.",
        "Urgent care: Same-day care for urgent problems that are not clearly life-threatening.",
        "Rostered or attached patient: A patient who has an ongoing relationship with a regular primary care provider.",
      ],
    },
  ],
};

const aboutPage: PageContent = {
  title: "About, Trust, and Privacy",
  description:
    "Learn how this guide works, how sources and review status are handled, and how to report changes.",
  reviewed_on: "2026-03-23",
  review_status: "reviewed",
  sources: [
    {
      title: "Project source notes",
      url: "https://myprimarycareguide.ca/about#sources",
      note: "Public-facing summary of how the project handles trust and sources.",
    },
  ],
  sections: [
    {
      id: "mission",
      title: "What this site is for",
      type: "default",
      content:
        "MyPrimaryCareGuide.ca is a newcomer-first healthcare navigation guide for Kingston, Ontario. It is designed to help people choose the right next step, understand common system terms, and find trusted local service listings.\n\nThis site is **not** a live wait-time tool, booking platform, or medical advice service.",
    },
    {
      id: "sources",
      title: "How trust and sourcing work",
      type: "default",
      content:
        "We try to link local listings to official service pages whenever possible. Each listing shows a review status and last review date. Some entries are fully verified against official sources. Others still need a local recheck because hours, intake, or access rules change often.\n\nPage-level source blocks show the main official references used for the current review cycle.",
    },
    {
      id: "accessibility",
      title: "Accessibility and language",
      type: "default",
      content:
        "This site is built to be keyboard friendly, mobile first, and readable in plain language. For language access, we support browser translation guidance plus multilingual quick-start phrases for urgent situations.\n\nCurrent translation priority is: urgent help, start-here guidance, and interpreter support prompts. Automatic translation can still be wrong for medical details, so ask about interpreter support for clinical conversations when you need one.",
    },
    {
      id: "privacy",
      title: "Privacy",
      type: "default",
      content:
        "This site does not use invasive remote analytics. It keeps lightweight improvement counts in your own browser so maintainers can understand common searches, zero-result searches, service views, and issue reports when the information is exported intentionally for maintenance.\n\nDo not send private medical information through the feedback form or email.",
    },
    {
      id: "contact",
      title: "Contact and reporting changes",
      type: "default",
      content:
        "If a page or listing looks wrong, use the report form on that page. Reports should describe the issue, not your personal health situation.\n\nGeneral contact email: **challengeat7@gmail.com**",
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      type: "default",
      content:
        "This website is for navigation and education only. It is not medical advice and it is not a substitute for professional diagnosis, treatment, or emergency help. If a situation may be life-threatening, call 911.",
    },
  ],
};

export const kingstonContent: Record<string, PageContent> = {
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
