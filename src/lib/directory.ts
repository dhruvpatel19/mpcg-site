import {
  ACCESS_FILTERS,
  AUDIENCE_FILTERS,
  CATEGORY_CONFIG,
  DIRECTORY_SORTS,
  DIRECTORY_VIEWS,
  LEVEL_FILTERS,
  LOCATION_FILTERS,
  PAYMENT_FILTERS,
} from "../config/site";
import type {
  AccessMode,
  AudienceTag,
  PaymentModel,
  ServiceLevel,
  ServiceRecord,
} from "../types";

export const VALID_DIRECTORY_VALUES = {
  category: Object.keys(CATEGORY_CONFIG),
  sort: [...DIRECTORY_SORTS],
  view: [...DIRECTORY_VIEWS],
  audience: AUDIENCE_FILTERS.map((item) => item.slug),
  access: ACCESS_FILTERS.map((item) => item.slug),
  level: LEVEL_FILTERS.map((item) => item.slug),
  payment: PAYMENT_FILTERS.map((item) => item.slug),
  location: [...LOCATION_FILTERS],
};

const SEARCH_SYNONYMS: Record<string, string[]> = {
  "walk in": ["walk-in", "same day", "clinic", "no appointment"],
  "after hours": ["urgent care", "evening", "same day", "health811"],
  bloodwork: ["blood work", "lab", "lifelabs", "dynacare", "requisition"],
  xray: ["x-ray", "imaging", "ultrasound"],
  refill: ["prescription", "pharmacy", "pharmacist", "virtual care"],
  immigration: ["newcomer", "settlement", "iska", "health card"],
  newcomer: ["immigrant", "settlement", "health card", "coverage"],
  student: ["campus", "queen's", "st. lawrence college", "student wellness"],
  child: ["youth", "family", "pediatric", "children"],
};

const normalize = (value: string) => value.trim().toLowerCase();

export const parseListParam = <T extends string>(
  rawValue: string | null,
  validValues: readonly T[],
) => {
  if (!rawValue) {
    return [];
  }

  const validSet = new Set(validValues);
  return rawValue
    .split(",")
    .map((value) => normalize(value) as T)
    .filter((value) => validSet.has(value));
};

export const buildSearchBlob = (service: ServiceRecord) =>
  [
    service.name,
    service.summary,
    service.when_to_use,
    service.what_to_bring.join(" "),
    service.address,
    service.hours,
    service.aliases.join(" "),
    service.keywords.join(" "),
    service.audiences.join(" "),
    service.access_modes.join(" "),
    service.service_levels.join(" "),
    service.category_label,
    service.subcategory_label,
    service.eligibility_summary ?? "",
    service.access_notes ?? "",
    service.location_label ?? service.neighbourhood,
  ]
    .join(" ")
    .toLowerCase();

const expandSearchTerms = (query: string) => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) {
    return [];
  }

  const directMatches = Object.entries(SEARCH_SYNONYMS)
    .filter(([key]) => normalizedQuery.includes(key))
    .flatMap(([, values]) => values);

  const tokenMatches = normalizedQuery
    .split(/\s+/)
    .flatMap((token) => SEARCH_SYNONYMS[token] ?? []);

  return [normalizedQuery, ...normalizedQuery.split(/\s+/), ...directMatches, ...tokenMatches];
};

export const getSearchScore = (service: ServiceRecord, query: string) => {
  if (!query.trim()) {
    return 1;
  }

  const blob = buildSearchBlob(service);
  const terms = expandSearchTerms(query);

  return terms.reduce((score, term) => {
    if (!term) {
      return score;
    }

    if (service.name.toLowerCase().includes(term)) {
      return score + 5;
    }
    if (service.aliases.some((alias) => alias.toLowerCase().includes(term))) {
      return score + 4;
    }
    if (blob.includes(term)) {
      return score + 2;
    }
    return score;
  }, 0);
};

const includesAll = (selected: string[], values: string[]) =>
  selected.every((value) => values.includes(value));

export const filterServices = (
  services: ServiceRecord[],
  {
    query,
    category,
    audience,
    access,
    level,
    payment,
    location,
  }: {
    query: string;
    category: string;
    audience: AudienceTag[];
    access: AccessMode[];
    level: ServiceLevel[];
    payment: PaymentModel[];
    location: string[];
  },
) =>
  services.filter((service) => {
    const score = getSearchScore(service, query);
    if (query.trim() && score <= 0) {
      return false;
    }

    if (category && category !== "all" && service.category !== category) {
      return false;
    }

    if (!includesAll(audience, service.audiences)) {
      return false;
    }

    if (!includesAll(access, service.access_modes)) {
      return false;
    }

    if (!includesAll(level, service.service_levels)) {
      return false;
    }

    if (payment.length && !payment.includes(service.payment_model)) {
      return false;
    }

    if (
      location.length &&
      !location.includes(service.neighbourhood_slug) &&
      !location.includes("online")
    ) {
      return false;
    }

    return true;
  });

export const sortServices = (
  services: ServiceRecord[],
  sort: (typeof DIRECTORY_SORTS)[number],
  query: string,
) => {
  return [...services].sort((left, right) => {
    if (sort === "alphabetical") {
      return left.name.localeCompare(right.name);
    }

    if (sort === "recently-verified") {
      return right.last_verified.localeCompare(left.last_verified);
    }

    if (sort === "area") {
      return (left.location_label ?? left.neighbourhood).localeCompare(
        right.location_label ?? right.neighbourhood,
      );
    }

    return (
      getSearchScore(right, query) - getSearchScore(left, query) ||
      left.name.localeCompare(right.name)
    );
  });
};
