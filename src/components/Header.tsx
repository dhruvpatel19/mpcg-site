import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AlertCircle,
  Check,
  ChevronDown,
  ExternalLink,
  Globe,
  HeartPulse,
  Menu,
  Search,
  X,
} from "lucide-react";
import { SITE_NAME } from "../config/site";
import {
  GENERATED_LANGUAGES,
  LANGUAGES,
  MORE_LANGUAGES,
  QUICK_PHRASES,
  buildTranslateUrl,
  coveredProxyCodes,
  isInAppLanguage,
  useI18n,
} from "../i18n";
import { en } from "../i18n/strings/en";
import { useCity } from "../CityContext";

interface PickerEntry {
  code: string;
  nativeName: string;
  englishName: string;
  kind: "reviewed" | "generated" | "proxy";
  htmlLang: string;
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const DesktopNavGroup: React.FC<{
  title: string;
  items: ReadonlyArray<{ label: string; to: string; description: string }>;
}> = ({ title, items }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const focusItem = (index: number) => {
    itemRefs.current[index]?.focus();
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={`inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-bold ${
          isOpen ? "bg-stone-100 text-stone-900" : "text-stone-700 hover:bg-stone-100"
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
            requestAnimationFrame(() => focusItem(0));
          }
        }}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label={title}
          className="absolute start-0 top-full z-50 mt-2 w-80 rounded-3xl border border-stone-200 bg-white p-2 shadow-2xl shadow-stone-900/10"
        >
          {items.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                role="menuitem"
                to={item.to}
                className={`block rounded-2xl px-4 py-3 ${
                  isActive ? "bg-emerald-50 text-emerald-800" : "text-stone-700 hover:bg-stone-50"
                }`}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    focusItem((index + 1) % items.length);
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    focusItem((index - 1 + items.length) % items.length);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    focusItem(0);
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    focusItem(items.length - 1);
                  }
                  if (event.key === "Escape") {
                    event.preventDefault();
                    setIsOpen(false);
                    buttonRef.current?.focus();
                  }
                }}
              >
                <span className="block font-bold">{item.label}</span>
                <span className="mt-1 block text-sm text-stone-500">{item.description}</span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dialogTab, setDialogTab] = useState<"languages" | "phrases">("languages");
  const [languageQuery, setLanguageQuery] = useState("");
  const { isLanguageModalOpen, setIsLanguageModalOpen } = useCity();
  const { t, language, setLanguage, meta } = useI18n();
  const lp = t.languagePicker ?? en.languagePicker!;

  /**
   * One picker, every language. On-site languages switch in place; proxy
   * languages open this same page through Google Translate's site proxy,
   * where every further click stays translated.
   */
  const handleLanguagePick = (code: string) => {
    if (isInAppLanguage(code)) {
      setLanguage(code);
      setIsLanguageModalOpen(false);
      return;
    }
    window.location.assign(buildTranslateUrl(code));
  };

  const pickerEntries = useMemo<PickerEntry[]>(() => {
    const covered = coveredProxyCodes();
    return [
      ...LANGUAGES.map((option) => ({
        code: option.code,
        nativeName: option.nativeName,
        englishName: option.englishName,
        kind: "reviewed" as const,
        htmlLang: option.htmlLang,
      })),
      ...GENERATED_LANGUAGES.map((option) => ({
        code: option.code,
        nativeName: option.nativeName,
        englishName: option.englishName,
        kind: "generated" as const,
        htmlLang: option.htmlLang,
      })),
      ...MORE_LANGUAGES.filter((option) => !covered.has(option.code)).map((option) => ({
        code: option.code,
        nativeName: option.nativeName,
        englishName: option.englishName,
        kind: "proxy" as const,
        htmlLang: option.code,
      })),
    ];
  }, []);

  const filteredEntries = useMemo(() => {
    const query = languageQuery.trim().toLowerCase();
    if (!query) {
      return pickerEntries;
    }
    return pickerEntries.filter(
      (entry) =>
        entry.nativeName.toLowerCase().includes(query) ||
        entry.englishName.toLowerCase().includes(query) ||
        entry.code.toLowerCase().includes(query),
    );
  }, [languageQuery, pickerEntries]);

  const onSiteEntries = filteredEntries.filter((entry) => entry.kind !== "proxy");
  const proxyEntries = filteredEntries.filter((entry) => entry.kind === "proxy");

  useEffect(() => {
    if (isLanguageModalOpen) {
      setDialogTab("languages");
      setLanguageQuery("");
    }
  }, [isLanguageModalOpen]);
  const location = useLocation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isLanguageModalOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageModalOpen(false);
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
        );
        if (!focusable.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [isLanguageModalOpen, setIsLanguageModalOpen]);

  const openLanguageModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    lastTriggerRef.current = event.currentTarget;
    setIsLanguageModalOpen(true);
  };

  const currentSection = useMemo(
    () =>
      t.navigation
        .flatMap((group) => group.items)
        .find((item) => item.to === location.pathname),
    [location.pathname, t.navigation],
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur print:hidden">
        <div className="bg-red-700 px-4 py-2 text-center text-xs font-bold text-white">
          <div className="section-container flex items-center justify-center gap-2">
            <AlertCircle size={14} />
            <span>{t.header.emergencyBanner}</span>
          </div>
        </div>

        <div className="section-container flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-600 p-2 text-white shadow-lg shadow-emerald-600/20">
              <HeartPulse size={22} />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-stone-900">{SITE_NAME}</span>
              <span className="block text-xs text-stone-500">{t.header.tagline}</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={t.header.primaryNavLabel}>
            {t.navigation.map((group) => (
              <DesktopNavGroup key={group.title} title={group.title} items={group.items} />
            ))}
            <button
              type="button"
              onClick={openLanguageModal}
              className="btn-ghost ms-2 inline-flex items-center gap-2"
              aria-label={t.header.languageButtonAria}
            >
              <Globe size={16} />
              {meta.nativeName}
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openLanguageModal}
              className="rounded-xl p-2 text-stone-700 hover:bg-stone-100"
              aria-label={t.header.languageButtonAria}
            >
              <Globe size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-xl p-2 text-stone-700 hover:bg-stone-100"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={t.header.openNavigation}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {currentSection ? (
          <div className="border-t border-stone-100 bg-stone-50/90 py-2 lg:hidden">
            <div className="section-container text-sm text-stone-600">
              <span className="font-semibold text-stone-900">{currentSection.label}</span>
              <span className="ms-2">{currentSection.description}</span>
            </div>
          </div>
        ) : null}

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-stone-200 bg-white lg:hidden">
            <div className="section-container space-y-6 py-4">
              {t.navigation.map((group) => (
                <div key={group.title} className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                    {group.title}
                  </h2>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block rounded-2xl border px-4 py-3 ${
                          location.pathname === item.to
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-stone-200 bg-white"
                        }`}
                      >
                        <span className="block font-bold text-stone-900">{item.label}</span>
                        <span className="mt-1 block text-sm text-stone-600">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {isLanguageModalOpen ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            aria-label={t.languageModal.close}
            onClick={() => setIsLanguageModalOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-help-title"
            aria-describedby="language-help-description"
            className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-stone-200 bg-white p-6 shadow-2xl shadow-stone-900/20 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h2 id="language-help-title" className="text-3xl font-extrabold text-stone-900">
                  {t.languageModal.title}
                </h2>
                <p id="language-help-description" className="max-w-2xl text-sm text-stone-600">
                  {t.languageModal.description}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsLanguageModalOpen(false)}
                className="rounded-full p-2 text-stone-700 hover:bg-stone-100"
                aria-label={t.languageModal.close}
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-5 flex gap-1 rounded-2xl bg-stone-100 p-1" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={dialogTab === "languages"}
                onClick={() => setDialogTab("languages")}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  dialogTab === "languages"
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {t.languageModal.chooseLanguageTitle}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={dialogTab === "phrases"}
                onClick={() => setDialogTab("phrases")}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  dialogTab === "phrases"
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {lp.interpreterTab}
              </button>
            </div>

            {dialogTab === "languages" ? (
              <div className="mt-5 space-y-4">
                <label className="relative block">
                  <Search
                    size={18}
                    className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    type="text"
                    value={languageQuery}
                    onChange={(event) => setLanguageQuery(event.target.value)}
                    placeholder={lp.searchPlaceholder}
                    className="w-full rounded-2xl border border-stone-200 bg-stone-50 py-3 ps-11 pe-4 text-sm"
                  />
                </label>

                <div className="max-h-[45vh] space-y-4 overflow-y-auto pe-1">
                  {onSiteEntries.length ? (
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                        {lp.onSiteGroup}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {onSiteEntries.map((entry) => {
                          const isActive = entry.code === language;
                          return (
                            <button
                              key={entry.code}
                              type="button"
                              onClick={() => handleLanguagePick(entry.code)}
                              aria-pressed={isActive}
                              className={`flex items-center justify-between gap-2 rounded-2xl border px-4 py-2.5 text-start ${
                                isActive
                                  ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                                  : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50"
                              }`}
                            >
                              <span className="min-w-0">
                                <span lang={entry.htmlLang} className="block truncate text-sm font-bold">
                                  {entry.nativeName}
                                </span>
                                {entry.nativeName !== entry.englishName ? (
                                  <span className="block truncate text-xs text-stone-500">
                                    {entry.englishName}
                                  </span>
                                ) : null}
                              </span>
                              {isActive ? (
                                <Check size={16} className="shrink-0 text-emerald-700" />
                              ) : entry.kind === "generated" ? (
                                <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                                  {lp.automaticBadge}
                                </span>
                              ) : (
                                <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                                  {lp.reviewedBadge}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {proxyEntries.length ? (
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                        {lp.proxyGroup}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {proxyEntries.map((entry) => (
                          <button
                            key={entry.code}
                            type="button"
                            onClick={() => handleLanguagePick(entry.code)}
                            className="flex items-center justify-between gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-start text-stone-700 hover:border-stone-300 hover:bg-stone-50"
                          >
                            <span className="min-w-0">
                              <span lang={entry.htmlLang} className="block truncate text-sm font-bold">
                                {entry.nativeName}
                              </span>
                              {entry.nativeName !== entry.englishName ? (
                                <span className="block truncate text-xs text-stone-500">
                                  {entry.englishName}
                                </span>
                              ) : null}
                            </span>
                            <ExternalLink size={14} className="shrink-0 text-stone-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {!onSiteEntries.length && !proxyEntries.length ? (
                    <p className="rounded-2xl border border-dashed border-stone-300 p-6 text-center text-sm text-stone-500">
                      {lp.noMatches}
                    </p>
                  ) : null}
                </div>

                <p className="text-xs leading-relaxed text-stone-500">{lp.note}</p>
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-sm font-bold text-amber-900">
                    {t.languageModal.safetyTitle}
                  </p>
                  <p className="mt-2 text-sm text-amber-800">{t.languageModal.safetyBody}</p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900">
                    {t.languageModal.phrasesTitle}
                  </h3>
                  <p className="text-sm text-stone-600">{t.languageModal.phrasesNote}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {QUICK_PHRASES.map((phrase) => (
                    <div
                      key={phrase.code}
                      className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                        <span lang={phrase.code}>{phrase.nativeName}</span>
                        {phrase.nativeName !== phrase.englishName ? (
                          <span className="ms-2 normal-case tracking-normal text-stone-400">
                            {phrase.englishName}
                          </span>
                        ) : null}
                      </p>
                      <p
                        lang={phrase.code}
                        dir={phrase.dir}
                        className="mt-2 text-sm font-semibold text-stone-900"
                      >
                        {phrase.urgent}
                      </p>
                      <p
                        lang={phrase.code}
                        dir={phrase.dir}
                        className="mt-1 text-sm text-stone-700"
                      >
                        {phrase.interpreter}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="tel:811" className="btn-secondary text-center">
                    {t.languageModal.callHealth811}
                  </a>
                  <Link
                    to="/about#accessibility"
                    onClick={() => setIsLanguageModalOpen(false)}
                    className="btn-primary text-center"
                  >
                    {t.languageModal.accessibilityCta}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};
