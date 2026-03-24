import { CATEGORY_CONFIG } from "../config/site";
import type {
  AccessMode,
  AudienceTag,
  PaymentModel,
  RawServiceRecord,
  ServiceCategorySlug,
  ServiceLevel,
  ServiceRecord,
  ServiceVerificationStatus,
} from "../types";

export interface ServiceEnhancement {
  category?: ServiceCategorySlug;
  subcategory_label?: string;
  neighbourhood?: string;
  neighbourhood_slug?: string;
  location_label?: string;
  service_levels?: ServiceLevel[];
  access_modes?: AccessMode[];
  audiences?: AudienceTag[];
  payment_model?: PaymentModel;
  aliases?: string[];
  keywords?: string[];
  eligibility_summary?: string;
  access_notes?: string;
  detailed_description?: string;
  verification_status?: ServiceVerificationStatus;
  verification_notes?: string;
  last_verified?: string;
}

const RAW_CATEGORY_TO_SLUG: Record<string, ServiceCategorySlug> = {
  emergency: "emergency-urgent",
  "urgent care": "emergency-urgent",
  "family doctor / primary care": "primary-care",
  "community health centres": "community-health",
  "mental health / crisis": "mental-health",
  "public health": "public-health",
  labs: "labs-imaging",
  imaging: "labs-imaging",
  pharmacies: "pharmacies",
  "allied health / rehab": "allied-community",
  "social/navigation support": "navigation-support",
};

const MONTH_INDEX: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

const titleCase = (value: string) =>
  value
    .split(/[\s/-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const parseReviewDate = (value: string) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!match) {
    return value;
  }

  const month = MONTH_INDEX[match[1].toLowerCase()];
  if (!month) {
    return value;
  }

  return `${match[2]}-${month}-01`;
};

const defaultVerificationStatus = (
  rawService: RawServiceRecord,
): ServiceVerificationStatus =>
  rawService.verified ? "partially-verified" : "needs-recheck";

export const normalizeCategory = (rawCategory: string): ServiceCategorySlug =>
  RAW_CATEGORY_TO_SLUG[rawCategory.toLowerCase()] ?? "navigation-support";

export const buildServiceRecord = (
  rawService: RawServiceRecord,
  enhancement: ServiceEnhancement = {},
): ServiceRecord => {
  const category = enhancement.category ?? normalizeCategory(rawService.category);
  const accessModes = new Set<AccessMode>(
    enhancement.access_modes ??
      (rawService.appointment_required ? ["appointment"] : ["walk-in"]),
  );

  if (rawService.referral_required) {
    accessModes.add("referral");
  }

  const lastVerified = parseReviewDate(
    enhancement.last_verified ?? rawService.last_verified,
  );

  return {
    ...rawService,
    category,
    category_label: CATEGORY_CONFIG[category].label,
    category_parent: CATEGORY_CONFIG[category].parent,
    subcategory_label:
      enhancement.subcategory_label ?? titleCase(rawService.category),
    neighbourhood: enhancement.neighbourhood ?? "Kingston",
    neighbourhood_slug:
      enhancement.neighbourhood_slug ??
      slugify(enhancement.neighbourhood ?? "Kingston"),
    location_label: enhancement.location_label,
    service_levels: enhancement.service_levels ?? ["community"],
    access_modes: [...accessModes],
    audiences: enhancement.audiences ?? [],
    payment_model: enhancement.payment_model ?? "public",
    aliases: enhancement.aliases ?? [],
    keywords: enhancement.keywords ?? [],
    eligibility_summary: enhancement.eligibility_summary,
    access_notes: enhancement.access_notes,
    detailed_description: enhancement.detailed_description,
    verification_status:
      enhancement.verification_status ?? defaultVerificationStatus(rawService),
    verification_notes: enhancement.verification_notes,
    last_verified: lastVerified,
  };
};

export const normalizeServiceRecords = (
  rawServices: RawServiceRecord[],
  enhancements: Record<string, ServiceEnhancement>,
) => rawServices.map((service) => buildServiceRecord(service, enhancements[service.id]));
