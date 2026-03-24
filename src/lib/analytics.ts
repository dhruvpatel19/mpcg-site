const STORAGE_KEY = "myprimarycareguide.analytics.v1";

interface AnalyticsStore {
  pageViews: Record<string, number>;
  serviceViews: Record<string, number>;
  searchTerms: Record<string, number>;
  zeroResultSearches: Record<string, number>;
  reportIssues: Record<string, number>;
}

const emptyStore = (): AnalyticsStore => ({
  pageViews: {},
  serviceViews: {},
  searchTerms: {},
  zeroResultSearches: {},
  reportIssues: {},
});

const readStore = (): AnalyticsStore => {
  if (typeof window === "undefined") {
    return emptyStore();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...emptyStore(), ...JSON.parse(raw) } : emptyStore();
  } catch {
    return emptyStore();
  }
};

const writeStore = (store: AnalyticsStore) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

const incrementBucket = (bucket: Record<string, number>, key: string) => {
  if (!key) {
    return bucket;
  }

  return {
    ...bucket,
    [key]: (bucket[key] ?? 0) + 1,
  };
};

export const trackPageView = (path: string) => {
  const store = readStore();
  writeStore({
    ...store,
    pageViews: incrementBucket(store.pageViews, path),
  });
};

export const trackServiceView = (serviceId: string) => {
  const store = readStore();
  writeStore({
    ...store,
    serviceViews: incrementBucket(store.serviceViews, serviceId),
  });
};

export const trackDirectorySearch = (term: string, resultCount: number) => {
  const normalized = term.trim().toLowerCase().slice(0, 60);
  if (!normalized) {
    return;
  }

  const store = readStore();
  writeStore({
    ...store,
    searchTerms: incrementBucket(store.searchTerms, normalized),
    zeroResultSearches:
      resultCount === 0
        ? incrementBucket(store.zeroResultSearches, normalized)
        : store.zeroResultSearches,
  });
};

export const trackReportIssue = (issueType: string) => {
  const store = readStore();
  writeStore({
    ...store,
    reportIssues: incrementBucket(store.reportIssues, issueType),
  });
};

export const getAnalyticsSnapshot = () => readStore();
