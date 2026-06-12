import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Filter,
  List,
  LayoutGrid,
  RefreshCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useCity } from "../CityContext";
import {
  ACCESS_FILTERS,
  AUDIENCE_FILTERS,
  CATEGORY_ORDER,
  DIRECTORY_SORTS,
  LEVEL_FILTERS,
  LOCATION_FILTERS,
  PAYMENT_FILTERS,
} from "../config/site";
import { Seo } from "../components/Seo";
import { ServiceCard } from "../components/ServiceCard";
import { trackDirectorySearch } from "../lib/analytics";
import { fillTemplate, useI18n } from "../i18n";
import {
  filterServices,
  parseListParam,
  sortServices,
  VALID_DIRECTORY_VALUES,
} from "../lib/directory";
import type { AccessMode, AudienceTag, PaymentModel, ServiceLevel } from "../types";

const setParam = (searchParams: URLSearchParams, key: string, value?: string) => {
  if (!value) {
    searchParams.delete(key);
  } else {
    searchParams.set(key, value);
  }
};

const setListParam = (searchParams: URLSearchParams, key: string, values: string[]) => {
  setParam(searchParams, key, values.length ? values.join(",") : undefined);
};

export const LocalServices: React.FC = () => {
  const { city } = useCity();
  const { t, language } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get("q") ?? "");
  const deferredSearch = useDeferredValue(searchInput);

  useEffect(() => {
    setSearchInput(searchParams.get("q") ?? "");
  }, [searchParams]);

  const category = searchParams.get("category") ?? "all";
  const sort = DIRECTORY_SORTS.includes(
    (searchParams.get("sort") as (typeof DIRECTORY_SORTS)[number]) ?? "relevance",
  )
    ? ((searchParams.get("sort") as (typeof DIRECTORY_SORTS)[number]) ?? "relevance")
    : "relevance";
  const view =
    searchParams.get("view") === "list" || searchParams.get("view") === "grid"
      ? searchParams.get("view")
      : "grid";
  const audience = parseListParam(
    searchParams.get("audience"),
    VALID_DIRECTORY_VALUES.audience as AudienceTag[],
  );
  const access = parseListParam(
    searchParams.get("access"),
    VALID_DIRECTORY_VALUES.access as AccessMode[],
  );
  const level = parseListParam(
    searchParams.get("level"),
    VALID_DIRECTORY_VALUES.level as ServiceLevel[],
  );
  const payment = parseListParam(
    searchParams.get("payment"),
    VALID_DIRECTORY_VALUES.payment as PaymentModel[],
  );
  const location = parseListParam(
    searchParams.get("location"),
    VALID_DIRECTORY_VALUES.location,
  );

  const filteredServices = useMemo(() => {
    const filtered = filterServices(city.services, {
      query: deferredSearch,
      category,
      audience,
      access,
      level,
      payment,
      location,
    });

    return sortServices(filtered, sort, deferredSearch);
  }, [access, audience, category, city.services, deferredSearch, level, location, payment, sort]);

  useEffect(() => {
    if (deferredSearch.trim()) {
      trackDirectorySearch(deferredSearch, filteredServices.length);
    }
  }, [deferredSearch, filteredServices.length]);

  const updateSearchParams = (updater: (params: URLSearchParams) => void) => {
    const next = new URLSearchParams(searchParams);
    updater(next);
    setSearchParams(next, { replace: true });
  };

  const toggleListFilter = (key: string, value: string, currentValues: string[]) => {
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((entry) => entry !== value)
      : [...currentValues, value];
    updateSearchParams((params) => {
      setListParam(params, key, nextValues);
    });
  };

  const resetFilters = () => {
    setSearchInput("");
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const verificationCounts = useMemo(
    () =>
      city.services.reduce(
        (accumulator, service) => {
          accumulator[service.verification_status] += 1;
          return accumulator;
        },
        {
          verified: 0,
          "partially-verified": 0,
          "community-reported": 0,
          "needs-recheck": 0,
        } as Record<string, number>,
      ),
    [city.services],
  );

  return (
    <div className="section-container space-y-12 py-12">
      <Seo
        title={t.directory.seoTitle}
        description={t.directory.seoDescription}
        path={`/local-services${searchParams.toString() ? `?${searchParams.toString()}` : ""}`}
      />

      <header className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t.directory.kicker}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            {t.directory.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
            {t.directory.lead}
          </p>
          {language !== "en" ? (
            <p className="max-w-3xl rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
              {t.common.directoryEnglishNote}
            </p>
          ) : null}
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.6fr,auto,auto]">
            <label className="relative block">
              <Search
                size={20}
                className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                value={searchInput}
                onChange={(event) => {
                  const value = event.target.value;
                  setSearchInput(value);
                  updateSearchParams((params) => {
                    setParam(params, "q", value.trim() || undefined);
                  });
                }}
                placeholder={t.directory.searchPlaceholder}
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 py-4 ps-12 pe-4 text-sm"
              />
            </label>

            <label className="block">
              <span className="sr-only">{t.directory.sortAriaLabel}</span>
              <select
                value={sort}
                onChange={(event) =>
                  updateSearchParams((params) => setParam(params, "sort", event.target.value))
                }
                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm"
              >
                <option value="relevance">{t.directory.sortRelevance}</option>
                <option value="alphabetical">{t.directory.sortAlphabetical}</option>
                <option value="recently-verified">{t.directory.sortRecentlyReviewed}</option>
                <option value="area">{t.directory.sortArea}</option>
              </select>
            </label>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => updateSearchParams((params) => setParam(params, "view", "grid"))}
                className={`rounded-2xl border p-4 ${
                  view === "grid" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700"
                }`}
                aria-label={t.directory.gridViewLabel}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                type="button"
                onClick={() => updateSearchParams((params) => setParam(params, "view", "list"))}
                className={`rounded-2xl border p-4 ${
                  view === "list" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700"
                }`}
                aria-label={t.directory.listViewLabel}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => updateSearchParams((params) => setParam(params, "category", undefined))}
              className={`rounded-full border px-4 py-2 text-sm font-bold ${
                category === "all" ? "border-emerald-600 bg-emerald-600 text-white" : "border-stone-200 bg-stone-50 text-stone-700"
              }`}
            >
              {t.directory.allServices}
            </button>
            {CATEGORY_ORDER.map((slug) => (
              <button
                key={slug}
                type="button"
                onClick={() => updateSearchParams((params) => setParam(params, "category", slug))}
                className={`rounded-full border px-4 py-2 text-sm font-bold ${
                  category === slug ? "border-emerald-600 bg-emerald-600 text-white" : "border-stone-200 bg-stone-50 text-stone-700"
                }`}
              >
                {t.categories[slug].shortLabel}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-900">
                <Filter size={16} />
                {t.directory.audienceTitle}
              </div>
              <div className="space-y-2">
                {AUDIENCE_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={audience.includes(item.slug)}
                      onChange={() => toggleListFilter("audience", item.slug, audience)}
                    />
                    <span>{t.filters.audience[item.slug] ?? item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-900">
                <SlidersHorizontal size={16} />
                {t.directory.accessTitle}
              </div>
              <div className="space-y-2">
                {ACCESS_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={access.includes(item.slug)}
                      onChange={() => toggleListFilter("access", item.slug, access)}
                    />
                    <span>{t.filters.access[item.slug] ?? item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 text-sm font-bold text-stone-900">
                {t.directory.careLevelTitle}
              </div>
              <div className="space-y-2">
                {LEVEL_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={level.includes(item.slug)}
                      onChange={() => toggleListFilter("level", item.slug, level)}
                    />
                    <span>{t.filters.level[item.slug] ?? item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 text-sm font-bold text-stone-900">
                {t.directory.coverageAreaTitle}
              </div>
              <div className="space-y-2">
                {PAYMENT_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={payment.includes(item.slug)}
                      onChange={() => toggleListFilter("payment", item.slug, payment)}
                    />
                    <span>{t.filters.payment[item.slug] ?? item.label}</span>
                  </label>
                ))}
                <div className="pt-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                  {t.directory.areaLabel}
                </div>
                {LOCATION_FILTERS.map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={location.includes(item)}
                      onChange={() => toggleListFilter("location", item, location)}
                    />
                    <span>{t.filters.location[item] ?? item.replace("-", " ")}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4 text-sm text-stone-600">
            <p>{fillTemplate(t.directory.showingServices, { count: filteredServices.length })}</p>
            <button type="button" onClick={resetFilters} className="inline-flex items-center gap-2 font-bold text-emerald-700">
              <RefreshCcw size={16} />
              {t.directory.resetFilters}
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-4 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">{t.directory.trustPanelTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-300">{t.directory.trustPanelBody}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            {t.directory.verifiedLabel}
          </p>
          <p className="mt-2 text-3xl font-extrabold">{verificationCounts.verified}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
            {t.directory.needsRecheckLabel}
          </p>
          <p className="mt-2 text-3xl font-extrabold">{verificationCounts["needs-recheck"]}</p>
        </div>
      </section>

      <section>
        {filteredServices.length ? (
          <div className={view === "grid" ? "grid gap-6 xl:grid-cols-2" : "space-y-6"}>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} viewMode={view as "grid" | "list"} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900">{t.directory.noResultsTitle}</h2>
            <p className="mt-3 text-stone-600">{t.directory.noResultsBody}</p>
            <button type="button" onClick={resetFilters} className="btn-secondary mt-6">
              {t.directory.resetFilters}
            </button>
          </div>
        )}
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-stone-900">{t.directory.notSureTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
          {t.directory.notSureBody}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/need-help-now" className="btn-primary">
            {t.directory.needHelpNowCta}
          </Link>
          <a href="tel:811" className="btn-secondary">
            {t.directory.callHealth811}
          </a>
        </div>
      </section>
    </div>
  );
};
