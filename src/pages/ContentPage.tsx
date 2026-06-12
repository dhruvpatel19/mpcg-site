import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  Printer,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { useCity } from "../CityContext";
import { FeedbackForm } from "../components/FeedbackForm";
import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { formatIsoDate } from "../lib/format";
import { useI18n } from "../i18n";
import { useToast } from "../components/ToastProvider";
import { NotFound } from "./NotFound";

export const ContentPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const { city } = useCity();
  const { t, meta } = useI18n();
  const location = useLocation();
  const { showToast } = useToast();
  const page = pageId ? city.pages[pageId] : undefined;

  if (!page || pageId === "home") {
    return <NotFound />;
  }

  const handleShare = async () => {
    const shareData = {
      title: `${page.title} | MyPrimaryCareGuide.ca`,
      text: page.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast(t.contentPage.linkCopiedTitle, t.contentPage.linkCopiedBody);
      }
    } catch {
      showToast(t.contentPage.shareCancelled);
    }
  };

  return (
    <div className="section-container space-y-12 py-12">
      <Seo title={page.title} description={page.description} path={location.pathname + location.hash} />

      <header className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <Link to="/" className="hover:text-emerald-700">
              {t.contentPage.breadcrumbHome}
            </Link>
            <ChevronRight size={14} className="rtl:rotate-180" />
            <span className="text-stone-900">{page.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              <ShieldCheck size={14} />
              {t.contentPage.badge}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              {page.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              {page.description}
            </p>
          </div>
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
              {t.contentPage.reviewStatusTitle}
            </p>
            <p className="text-sm text-stone-700">
              {t.contentPage.reviewLabels[page.review_status ?? "general-guidance"]}
            </p>
            {page.reviewed_on ? (
              <p className="text-sm text-stone-600">
                {t.contentPage.lastReviewPrefix} {formatIsoDate(page.reviewed_on, meta.localeTag)}
              </p>
            ) : (
              <p className="text-sm text-stone-600">{t.contentPage.noReviewDate}</p>
            )}
          </div>
          <div className="rounded-2xl bg-stone-50 p-4 text-sm text-stone-600">
            {t.contentPage.translationAside}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={handleShare} className="btn-secondary inline-flex items-center justify-center gap-2">
              <Share2 size={16} />
              {t.contentPage.share}
            </button>
            <button type="button" onClick={() => window.print()} className="btn-secondary inline-flex items-center justify-center gap-2">
              <Printer size={16} />
              {t.contentPage.print}
            </button>
          </div>
        </aside>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr,18rem]">
        <main className="space-y-14">
          {page.sections.map((section, index) => (
            <Section key={section.id ?? `${section.title}-${index}`} section={section} index={index} />
          ))}

          {page.sources?.length ? (
            <section id="sources" className="space-y-4 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-stone-900">
                  {t.contentPage.sourcesTitle}
                </h2>
                <p className="text-sm text-stone-600">{t.contentPage.sourcesNote}</p>
              </div>
              <ul className="space-y-3">
                {page.sources.map((source) => (
                  <li key={source.url} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700"
                    >
                      {source.title}
                    </a>
                    {source.note ? <p className="mt-1 text-sm text-stone-600">{source.note}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <FeedbackForm contextLabel={page.title} />
        </main>

        <aside className="space-y-4">
          <div className="sticky top-32 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-900">{t.contentPage.onThisPage}</h2>
            <nav className="mt-4 space-y-3">
              {page.sections.map((section, index) => (
                <a
                  key={section.id ?? `${section.title}-${index}`}
                  href={`#${section.id ?? `section-${index}`}`}
                  className="block text-sm text-stone-600 hover:text-emerald-700"
                >
                  {section.title}
                </a>
              ))}
              {page.sources?.length ? (
                <a href="#sources" className="block text-sm text-stone-600 hover:text-emerald-700">
                  {t.contentPage.sourcesAnchorLabel}
                </a>
              ) : null}
            </nav>
            <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-sm text-stone-600">
              <div className="mb-2 inline-flex items-center gap-2 font-bold text-stone-900">
                <Globe size={14} />
                {t.contentPage.translationReminderTitle}
              </div>
              <p>{t.contentPage.translationReminderBody}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
