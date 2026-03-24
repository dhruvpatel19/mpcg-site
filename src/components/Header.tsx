import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlertCircle, ChevronDown, Globe, HeartPulse, Menu, X } from "lucide-react";
import { MULTILINGUAL_QUICK_START, NAVIGATION_GROUPS, SITE_NAME } from "../config/site";
import { useCity } from "../CityContext";

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
          className="absolute left-0 top-full z-50 mt-2 w-80 rounded-3xl border border-stone-200 bg-white p-2 shadow-2xl shadow-stone-900/10"
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
  const { isLanguageModalOpen, setIsLanguageModalOpen } = useCity();
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
      NAVIGATION_GROUPS.flatMap((group) => group.items).find(
        (item) => item.to === location.pathname,
      ),
    [location.pathname],
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur print:hidden">
        <div className="bg-red-700 px-4 py-2 text-center text-xs font-bold text-white">
          <div className="section-container flex items-center justify-center gap-2">
            <AlertCircle size={14} />
            <span>Life-threatening emergency? Call 911 now.</span>
          </div>
        </div>

        <div className="section-container flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-600 p-2 text-white shadow-lg shadow-emerald-600/20">
              <HeartPulse size={22} />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-stone-900">{SITE_NAME}</span>
              <span className="block text-xs text-stone-500">
                Kingston, Ontario newcomer-first healthcare navigation
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAVIGATION_GROUPS.map((group) => (
              <DesktopNavGroup key={group.title} title={group.title} items={group.items} />
            ))}
            <button
              type="button"
              onClick={openLanguageModal}
              className="btn-ghost ml-2 inline-flex items-center gap-2"
            >
              <Globe size={16} />
              Language
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openLanguageModal}
              className="rounded-xl p-2 text-stone-700 hover:bg-stone-100"
              aria-label="Language help"
            >
              <Globe size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-xl p-2 text-stone-700 hover:bg-stone-100"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {currentSection ? (
          <div className="border-t border-stone-100 bg-stone-50/90 py-2 lg:hidden">
            <div className="section-container text-sm text-stone-600">
              <span className="font-semibold text-stone-900">{currentSection.label}</span>
              <span className="ml-2">{currentSection.description}</span>
            </div>
          </div>
        ) : null}

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-stone-200 bg-white lg:hidden">
            <div className="section-container space-y-6 py-4">
              {NAVIGATION_GROUPS.map((group) => (
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
            aria-label="Close language help dialog"
            onClick={() => setIsLanguageModalOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-help-title"
            aria-describedby="language-help-description"
            className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-2xl shadow-stone-900/20 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h2 id="language-help-title" className="text-3xl font-extrabold text-stone-900">
                  Language and interpreter help
                </h2>
                <p id="language-help-description" className="max-w-2xl text-sm text-stone-600">
                  Browser translation can help you read the site, but automatic translation
                  can be wrong for symptoms, medicines, or clinical instructions. Ask for an
                  interpreter for healthcare conversations when you need one.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsLanguageModalOpen(false)}
                className="rounded-full p-2 text-stone-700 hover:bg-stone-100"
                aria-label="Close language help dialog"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">Safety note</p>
              <p className="mt-2 text-sm text-amber-800">
                Use machine translation for reading the website. For appointments, test
                instructions, medicines, or consent, ask whether the clinic or hospital can
                provide an interpreter.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Quick phrases to show staff</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {MULTILINGUAL_QUICK_START.map((block) => (
                  <div
                    key={block.language}
                    className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                      {block.language}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-stone-900">{block.urgent}</p>
                    <p className="mt-2 text-sm text-stone-700">{block.interpreter}</p>
                    {"transliteration" in block && block.transliteration ? (
                      <p className="mt-2 text-xs text-stone-500">{block.transliteration}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="tel:811" className="btn-secondary text-center">
                Call Health811
              </a>
              <Link
                to="/about#accessibility"
                onClick={() => setIsLanguageModalOpen(false)}
                className="btn-primary text-center"
              >
                Accessibility and trust
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
