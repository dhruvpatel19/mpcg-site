import React from "react";
import { Link } from "react-router-dom";
import { SITE_NAME } from "../config/site";
import { useI18n } from "../i18n";
import { en } from "../i18n/strings/en";

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const funding = t.funding ?? en.funding!;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 pb-28 pt-16 text-white lg:pb-12 print:hidden">
      <div className="section-container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold">{SITE_NAME}</h2>
            <p className="max-w-md text-sm leading-relaxed text-stone-300">
              {t.footer.description}
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-stone-300">
              <p className="font-bold text-white">{t.footer.trustModelTitle}</p>
              <p className="mt-2">{t.footer.trustModelBody}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {t.navigation.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="text-sm text-stone-300 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-white">{t.footer.beforeYouGo.title}</h3>
            <p className="mt-2 text-sm text-stone-300">{t.footer.beforeYouGo.body}</p>
          </div>
          <div>
            <h3 className="font-bold text-white">{t.footer.languageHelp.title}</h3>
            <p className="mt-2 text-sm text-stone-300">{t.footer.languageHelp.body}</p>
          </div>
          <div>
            <h3 className="font-bold text-white">{t.footer.privacy.title}</h3>
            <p className="mt-2 text-sm text-stone-300">{t.footer.privacy.body}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
          <a
            href="https://omsa.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-2xl bg-white p-2"
          >
            <img
              src="/omsa-logo.png"
              alt={funding.logoAlt}
              className="h-12 w-auto"
              loading="lazy"
            />
          </a>
          <p className="text-sm text-stone-300">{funding.acknowledgment}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE_NAME}. {t.footer.copyrightSuffix}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about#disclaimer" className="hover:text-white">
              {t.footer.disclaimer}
            </Link>
            <Link to="/about#privacy" className="hover:text-white">
              {t.footer.privacyLink}
            </Link>
            <Link to="/about#sources" className="hover:text-white">
              {t.footer.sourcesLink}
            </Link>
            <Link to="/about#contact" className="hover:text-white">
              {t.footer.reportLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
