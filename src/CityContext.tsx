import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CityData, PageContent } from "./types";
import { kingstonCityData } from "./data/cities";
import {
  GENERATED_LANGUAGE_LOADERS,
  useI18n,
  type LanguageCode,
} from "./i18n";

interface CityContextType {
  city: CityData;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (isOpen: boolean) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

/**
 * Translated page content is code-split per language so the default bundle
 * only ships English. Directory data stays in English in every language so
 * names, addresses, and hours match official sources exactly.
 */
const contentLoaders: Record<
  LanguageCode,
  (() => Promise<Record<string, PageContent>>) | null
> = {
  en: null,
  fr: () =>
    import("./data/cities/kingston/content.fr").then(
      (module) => module.kingstonContentFr,
    ),
  es: () =>
    import("./data/cities/kingston/content.es").then(
      (module) => module.kingstonContentEs,
    ),
  ar: () =>
    import("./data/cities/kingston/content.ar").then(
      (module) => module.kingstonContentAr,
    ),
  zh: () =>
    import("./data/cities/kingston/content.zh").then(
      (module) => module.kingstonContentZh,
    ),
};

export const CityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const { language } = useI18n();
  const [pages, setPages] = useState(kingstonCityData.pages);

  useEffect(() => {
    let cancelled = false;
    const reviewedLoader = contentLoaders[language as LanguageCode];
    const generatedLoader = GENERATED_LANGUAGE_LOADERS[language];

    const load = reviewedLoader
      ? reviewedLoader()
      : generatedLoader
        ? generatedLoader().then((module) => module.pages)
        : null;

    if (!load) {
      setPages(kingstonCityData.pages);
      return undefined;
    }

    load
      .then((translatedPages) => {
        if (!cancelled) {
          setPages(translatedPages);
        }
      })
      .catch(() => {
        // If a translation chunk fails to load, fall back to English.
        if (!cancelled) {
          setPages(kingstonCityData.pages);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const city = useMemo<CityData>(
    () => ({ ...kingstonCityData, pages }),
    [pages],
  );

  return (
    <CityContext.Provider
      value={{
        city,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
