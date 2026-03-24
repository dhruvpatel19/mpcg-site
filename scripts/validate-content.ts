import { kingstonCityData } from "../src/data/cities";
import { DIRECTORY_QUERY_KEYS } from "../src/config/site";
import { VALID_DIRECTORY_VALUES } from "../src/lib/directory";
import { SECTION_TYPES } from "../src/types";

const errors: string[] = [];

const pageEntries = Object.entries(kingstonCityData.pages);
const pageIds = new Set(pageEntries.map(([pageId]) => pageId));
const serviceIds = new Set(kingstonCityData.services.map((service) => service.id));
const allowedDirectoryKeys = new Set(DIRECTORY_QUERY_KEYS);
const allowedSectionTypes = new Set(SECTION_TYPES);

const markdownInternalLinkPattern = /\((\/[^)\s]+)\)/g;

const requireValue = (value: unknown) =>
  Array.isArray(value)
    ? Array.isArray(value)
    : typeof value === "string"
      ? value.trim().length > 0
      : Boolean(value);

const addError = (message: string) => {
  errors.push(message);
};

const validateDirectoryParamValue = (key: string, value: string) => {
  if (key === "q") {
    return value.trim().length > 0;
  }

  if (key === "category" && value === "all") {
    return true;
  }

  const validValues = (VALID_DIRECTORY_VALUES as Record<string, readonly string[]>)[key];
  if (!validValues) {
    return false;
  }

  return value.split(",").every((entry) => validValues.includes(entry));
};

const getPageAnchorIds = (pageId: string) => {
  const page = kingstonCityData.pages[pageId];
  const ids = page.sections
    .map((section, index) => section.id ?? `section-${index}`)
    .concat(page.sources?.length ? ["sources"] : []);
  return new Set(ids);
};

const validateInternalUrl = (url: string, sourceLabel: string) => {
  if (/^(https?:|mailto:|tel:)/.test(url)) {
    return;
  }

  const parsed = new URL(url, "https://myprimarycareguide.ca");
  const pathname = parsed.pathname;

  if (pathname === "/") {
    return;
  }

  if (pathname === "/local-services") {
    for (const key of parsed.searchParams.keys()) {
      if (!allowedDirectoryKeys.has(key as (typeof DIRECTORY_QUERY_KEYS)[number])) {
        addError(`${sourceLabel}: invalid directory query key "${key}" in ${url}`);
      }
    }

    for (const [key, value] of parsed.searchParams.entries()) {
      if (!validateDirectoryParamValue(key, value)) {
        addError(`${sourceLabel}: invalid value "${value}" for query key "${key}" in ${url}`);
      }
    }

    return;
  }

  if (pathname.startsWith("/local-services/")) {
    const serviceId = pathname.replace("/local-services/", "");
    if (!serviceIds.has(serviceId)) {
      addError(`${sourceLabel}: unknown service permalink ${url}`);
    }
    return;
  }

  const pageId = pathname.replace(/^\//, "");
  if (!pageIds.has(pageId)) {
    addError(`${sourceLabel}: unknown route target ${url}`);
    return;
  }

  if (parsed.hash) {
    const targetIds = getPageAnchorIds(pageId);
    const hashId = parsed.hash.replace("#", "");
    if (!targetIds.has(hashId)) {
      addError(`${sourceLabel}: unknown hash "${parsed.hash}" in ${url}`);
    }
  }
};

for (const [pageId, page] of pageEntries) {
  const sectionIdSet = new Set<string>();

  page.sections.forEach((section, index) => {
    if (!allowedSectionTypes.has(section.type)) {
      addError(`${pageId}: unsupported section type "${section.type}"`);
    }

    const resolvedId = section.id ?? `section-${index}`;
    if (sectionIdSet.has(resolvedId)) {
      addError(`${pageId}: duplicate section id "${resolvedId}"`);
    }
    sectionIdSet.add(resolvedId);

    if (section.type === "grid" && !section.gridItems?.length) {
      addError(`${pageId}/${resolvedId}: grid section is missing gridItems`);
    }

    if (section.type === "table") {
      if (!section.columns?.length || !section.rows?.length) {
        addError(`${pageId}/${resolvedId}: table section is missing columns or rows`);
      }
      if (section.rows?.some((row) => row.cells.length !== section.columns?.length)) {
        addError(`${pageId}/${resolvedId}: table row cell counts do not match columns`);
      }
    }

    if (section.type === "faq" && !section.faqs?.length) {
      addError(`${pageId}/${resolvedId}: faq section is missing faqs`);
    }

    const links = [
      section.link?.url,
      ...(section.gridItems?.map((item) => item.link?.url) ?? []),
    ].filter(Boolean) as string[];

    links.forEach((linkUrl) =>
      validateInternalUrl(linkUrl, `${pageId}/${resolvedId}`),
    );

    const markdownSources = [
      section.content ?? "",
      ...(section.faqs?.map((faq) => faq.answer) ?? []),
    ];
    markdownSources.forEach((source) => {
      const matches = source.matchAll(markdownInternalLinkPattern);
      for (const match of matches) {
        validateInternalUrl(match[1], `${pageId}/${resolvedId}`);
      }
    });
  });
}

const seenServiceIds = new Set<string>();
kingstonCityData.services.forEach((service) => {
  if (seenServiceIds.has(service.id)) {
    addError(`services: duplicate service id "${service.id}"`);
  }
  seenServiceIds.add(service.id);

  const requiredFields = [
    ["name", service.name],
    ["summary", service.summary],
    ["when_to_use", service.when_to_use],
    ["phone", service.phone],
    ["address", service.address],
    ["website", service.website],
    ["hours", service.hours],
    ["what_to_bring", service.what_to_bring],
  ] as const;

  requiredFields.forEach(([field, value]) => {
    if (!requireValue(value)) {
      addError(`services/${service.id}: missing required field "${field}"`);
    }
  });

  if (!/^\d{4}-\d{2}-\d{2}$/.test(service.last_verified)) {
    addError(`services/${service.id}: last_verified must be ISO YYYY-MM-DD`);
  }
});

if (errors.length) {
  console.error("Content validation failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Content validation passed.");
