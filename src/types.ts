export const SECTION_TYPES = [
  "default",
  "checklist",
  "steps",
  "callout",
  "grid",
  "comparison",
  "table",
  "faq",
] as const;

export type SectionType = (typeof SECTION_TYPES)[number];

export const SERVICE_VERIFICATION_STATUSES = [
  "verified",
  "partially-verified",
  "community-reported",
  "needs-recheck",
] as const;

export type ServiceVerificationStatus =
  (typeof SERVICE_VERIFICATION_STATUSES)[number];

export type ServiceCategorySlug =
  | "emergency-urgent"
  | "primary-care"
  | "community-health"
  | "mental-health"
  | "public-health"
  | "labs-imaging"
  | "pharmacies"
  | "allied-community"
  | "navigation-support";

export type ServiceLevel = "emergency" | "urgent" | "primary" | "community";
export type AccessMode = "walk-in" | "appointment" | "referral" | "virtual";
export type AudienceTag =
  | "newcomers"
  | "students"
  | "children-youth"
  | "adults"
  | "families"
  | "unattached-patients";
export type PaymentModel =
  | "public"
  | "private"
  | "mixed"
  | "student-plan"
  | "community";

export interface RawServiceRecord {
  id: string;
  name: string;
  category: string;
  summary: string;
  when_to_use: string;
  what_to_bring: string[];
  phone: string;
  address: string;
  website: string;
  hours: string;
  appointment_required: boolean;
  referral_required: boolean;
  verified: boolean;
  last_verified: string;
  source_url?: string;
  directions_url?: string;
}

export interface ServiceRecord extends Omit<RawServiceRecord, "category" | "verified"> {
  category: ServiceCategorySlug;
  category_label: string;
  category_parent?: string;
  subcategory_label: string;
  neighbourhood: string;
  neighbourhood_slug: string;
  location_label?: string;
  service_levels: ServiceLevel[];
  access_modes: AccessMode[];
  audiences: AudienceTag[];
  payment_model: PaymentModel;
  aliases: string[];
  keywords: string[];
  eligibility_summary?: string;
  access_notes?: string;
  detailed_description?: string;
  verification_status: ServiceVerificationStatus;
  verification_notes?: string;
}

export interface SourceReference {
  title: string;
  url: string;
  note?: string;
}

export interface SectionLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

export interface ComparisonColumn {
  title: string;
  items: string[];
}

export interface GridItem {
  title: string;
  content: string;
  icon?: string;
  eyebrow?: string;
  link?: SectionLink;
}

export interface TableRow {
  cells: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSection {
  id?: string;
  title: string;
  type: SectionType;
  content?: string;
  items?: string[];
  comparison?: {
    left: ComparisonColumn;
    right: ComparisonColumn;
  };
  gridItems?: GridItem[];
  link?: SectionLink;
  columns?: string[];
  rows?: TableRow[];
  caption?: string;
  faqs?: FaqItem[];
}

export interface PageContent {
  title: string;
  description: string;
  reviewed_on?: string;
  review_status?: "reviewed" | "general-guidance" | "needs-local-recheck";
  sources?: SourceReference[];
  sections: PageSection[];
}

export interface CityData {
  id: string;
  name: string;
  region: string;
  services: ServiceRecord[];
  pages: Record<string, PageContent>;
}
