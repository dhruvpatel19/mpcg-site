import {
  type AccessMode,
  type AudienceTag,
  type PaymentModel,
  type ServiceCategorySlug,
  type ServiceLevel,
} from "../types";

export const SITE_NAME = "MyPrimaryCareGuide.ca";
export const SITE_URL = "https://myprimarycareguide.ca";
export const SITE_DESCRIPTION =
  "Newcomer-first healthcare navigation for Kingston, Ontario with plain-language guidance, local services, and trust notes.";

export const DIRECTORY_VIEWS = ["grid", "list"] as const;
export type DirectoryView = (typeof DIRECTORY_VIEWS)[number];

export const DIRECTORY_SORTS = [
  "relevance",
  "alphabetical",
  "recently-verified",
  "area",
] as const;
export type DirectorySort = (typeof DIRECTORY_SORTS)[number];

export const CATEGORY_CONFIG: Record<
  ServiceCategorySlug,
  {
    slug: ServiceCategorySlug;
    label: string;
    shortLabel: string;
    description: string;
    parent: "urgent" | "ongoing" | "support";
  }
> = {
  "emergency-urgent": {
    slug: "emergency-urgent",
    label: "Emergency and urgent care",
    shortLabel: "Emergency and urgent",
    description: "Emergency departments, urgent care, and other same-day urgent options.",
    parent: "urgent",
  },
  "primary-care": {
    slug: "primary-care",
    label: "Primary care",
    shortLabel: "Primary care",
    description: "Family doctors, walk-in care, nurse practitioner clinics, and virtual primary care.",
    parent: "ongoing",
  },
  "community-health": {
    slug: "community-health",
    label: "Community health centres",
    shortLabel: "Community health",
    description: "Community health centres and low-barrier primary care programs.",
    parent: "ongoing",
  },
  "mental-health": {
    slug: "mental-health",
    label: "Mental health and crisis support",
    shortLabel: "Mental health",
    description: "Crisis, counselling, and mental health support services.",
    parent: "urgent",
  },
  "public-health": {
    slug: "public-health",
    label: "Public health",
    shortLabel: "Public health",
    description: "Vaccines, sexual health, prevention, and population health programs.",
    parent: "support",
  },
  "labs-imaging": {
    slug: "labs-imaging",
    label: "Labs and imaging",
    shortLabel: "Labs and imaging",
    description: "Bloodwork, lab testing, X-ray, ultrasound, and imaging services.",
    parent: "support",
  },
  pharmacies: {
    slug: "pharmacies",
    label: "Medicines and pharmacies",
    shortLabel: "Pharmacies",
    description: "Prescription fills, pharmacist advice, minor ailment assessment, and vaccines.",
    parent: "support",
  },
  "allied-community": {
    slug: "allied-community",
    label: "Allied and community care",
    shortLabel: "Allied care",
    description: "Home care, rehab, dental, vision, and other allied or community supports.",
    parent: "support",
  },
  "navigation-support": {
    slug: "navigation-support",
    label: "Navigation and coverage support",
    shortLabel: "Navigation",
    description: "Health card, settlement, phone advice, and care navigation support.",
    parent: "support",
  },
};

export const CATEGORY_ORDER = Object.keys(
  CATEGORY_CONFIG,
) as ServiceCategorySlug[];

export const ACCESS_FILTERS: Array<{ slug: AccessMode; label: string }> = [
  { slug: "walk-in", label: "Walk-in" },
  { slug: "appointment", label: "Appointment" },
  { slug: "referral", label: "Referral needed" },
  { slug: "virtual", label: "Virtual" },
];

export const AUDIENCE_FILTERS: Array<{ slug: AudienceTag; label: string }> = [
  { slug: "newcomers", label: "Newcomers" },
  { slug: "students", label: "Student-only or campus" },
  { slug: "children-youth", label: "Child or youth" },
  { slug: "families", label: "Families" },
  { slug: "unattached-patients", label: "No family doctor" },
];

export const LEVEL_FILTERS: Array<{ slug: ServiceLevel; label: string }> = [
  { slug: "emergency", label: "Emergency" },
  { slug: "urgent", label: "Urgent" },
  { slug: "primary", label: "Primary" },
  { slug: "community", label: "Community" },
];

export const PAYMENT_FILTERS: Array<{ slug: PaymentModel; label: string }> = [
  { slug: "public", label: "Publicly funded" },
  { slug: "community", label: "Community / low-barrier" },
  { slug: "mixed", label: "Mixed coverage" },
  { slug: "student-plan", label: "Student plan" },
  { slug: "private", label: "Private pay" },
];

export const LOCATION_FILTERS = [
  "downtown",
  "north-end",
  "west-end",
  "campus",
  "online",
] as const;
export type LocationFilter = (typeof LOCATION_FILTERS)[number];

export const DIRECTORY_QUERY_KEYS = [
  "q",
  "category",
  "sort",
  "view",
  "audience",
  "access",
  "level",
  "payment",
  "location",
] as const;

export const EMERGENCY_ACTIONS = [
  {
    id: "call-911",
    label: "Call 911",
    href: "tel:911",
    description: "Life-threatening emergency",
  },
  {
    id: "call-811",
    label: "Call Health811",
    href: "tel:811",
    description: "Nurse advice, 24/7",
  },
  {
    id: "call-988",
    label: "Call or text 9-8-8",
    href: "tel:988",
    description: "Suicide Crisis Helpline, 24/7",
  },
  {
    id: "call-crisis",
    label: "Call Crisis Line",
    href: "tel:6135444229",
    description: "AMHS-KFLA crisis line",
  },
  {
    id: "urgent-guide",
    label: "Urgent care guide",
    href: "/need-help-now",
    description: "After-hours and same-day options",
  },
  {
    id: "mental-health",
    label: "Mental health support",
    href: "/mental-health",
    description: "Crisis, urgent, and routine pathways",
  },
] as const;

export const REPORT_ISSUE_TYPES = [
  "outdated hours",
  "wrong phone or website",
  "eligibility or access issue",
  "translation or accessibility problem",
  "missing service or content",
  "other",
] as const;

// Navigation labels and descriptions live in src/i18n/strings/<lang>.ts so the
// whole menu translates. The English file (en.ts) is the canonical structure.

export { QUICK_PHRASES } from "../i18n/phrases";
