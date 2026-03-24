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
  CATEGORY_CONFIG,
  CATEGORY_ORDER,
  DIRECTORY_SORTS,
  LEVEL_FILTERS,
  LOCATION_FILTERS,
  PAYMENT_FILTERS,
} from "../config/site";
import { Seo } from "../components/Seo";
import { ServiceCard } from "../components/ServiceCard";
import { trackDirectorySearch } from "../lib/analytics";
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
        title="Local services"
        description="Search newcomer-friendly healthcare, mental health, pharmacy, coverage, and navigation services in Kingston, Ontario."
        path={`/local-services${searchParams.toString() ? `?${searchParams.toString()}` : ""}`}
      />

      <header className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Kingston directory
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Search local health services
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
            Search by service, symptom, document, or task. Examples: walk in, after hours,
            bloodwork, refill, health card, student clinic, or newcomer support.
          </p>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.6fr,auto,auto]">
            <label className="relative block">
              <Search
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
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
                placeholder="Search by need, service name, address, or keyword"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 py-4 pl-12 pr-4 text-sm"
              />
            </label>

            <label className="block">
              <span className="sr-only">Sort results</span>
              <select
                value={sort}
                onChange={(event) =>
                  updateSearchParams((params) => setParam(params, "sort", event.target.value))
                }
                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="alphabetical">Sort: A to Z</option>
                <option value="recently-verified">Sort: Recently reviewed</option>
                <option value="area">Sort: Area</option>
              </select>
            </label>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => updateSearchParams((params) => setParam(params, "view", "grid"))}
                className={`rounded-2xl border p-4 ${
                  view === "grid" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                type="button"
                onClick={() => updateSearchParams((params) => setParam(params, "view", "list"))}
                className={`rounded-2xl border p-4 ${
                  view === "list" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700"
                }`}
                aria-label="List view"
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
              All services
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
                {CATEGORY_CONFIG[slug].shortLabel}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-900">
                <Filter size={16} />
                Audience
              </div>
              <div className="space-y-2">
                {AUDIENCE_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={audience.includes(item.slug)}
                      onChange={() => toggleListFilter("audience", item.slug, audience)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-900">
                <SlidersHorizontal size={16} />
                Access
              </div>
              <div className="space-y-2">
                {ACCESS_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={access.includes(item.slug)}
                      onChange={() => toggleListFilter("access", item.slug, access)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 text-sm font-bold text-stone-900">Care level</div>
              <div className="space-y-2">
                {LEVEL_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={level.includes(item.slug)}
                      onChange={() => toggleListFilter("level", item.slug, level)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 text-sm font-bold text-stone-900">Coverage and area</div>
              <div className="space-y-2">
                {PAYMENT_FILTERS.map((item) => (
                  <label key={item.slug} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={payment.includes(item.slug)}
                      onChange={() => toggleListFilter("payment", item.slug, payment)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
                <div className="pt-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                  Area
                </div>
                {LOCATION_FILTERS.map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={location.includes(item)}
                      onChange={() => toggleListFilter("location", item, location)}
                    />
                    <span>{item.replace("-", " ")}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4 text-sm text-stone-600">
            <p>
              Showing <span className="font-bold text-stone-900">{filteredServices.length}</span> services
            </p>
            <button type="button" onClick={resetFilters} className="inline-flex items-center gap-2 font-bold text-emerald-700">
              <RefreshCcw size={16} />
              Reset filters
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-4 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">Trust and review status</h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-300">
            This directory is static, not live. We show the last recorded review date,
            official source links when available, and which listings still need a local recheck.
            Confirm hours and same-day access before you go.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Verified</p>
          <p className="mt-2 text-3xl font-extrabold">{verificationCounts.verified}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Needs recheck</p>
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
            <h2 className="text-2xl font-bold text-stone-900">No services matched those filters</h2>
            <p className="mt-3 text-stone-600">
              Try a broader search like bloodwork, refill, mental health, health card, or
              walk in. You can also clear all filters and start again.
            </p>
            <button type="button" onClick={resetFilters} className="btn-secondary mt-6">
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-stone-900">Not sure where to start?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
          If you are unsure whether you need emergency care, urgent care, a walk-in clinic, or
          pharmacy support, start with the urgent guidance page or call Health811 for nurse
          advice.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/need-help-now" className="btn-primary">
            Need Help Now
          </Link>
          <a href="tel:811" className="btn-secondary">
            Call Health811
          </a>
        </div>
      </section>
    </div>
  );
};
