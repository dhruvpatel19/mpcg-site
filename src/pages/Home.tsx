import React from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { useCity } from "../CityContext";
import { Seo } from "../components/Seo";
import { ServiceCard } from "../components/ServiceCard";
import { QUICK_PHRASES, useI18n } from "../i18n";

const TASK_LINKS = [
  "/local-services?category=labs-imaging",
  "/local-services?category=pharmacies",
  "/local-services?category=mental-health",
  "/local-services?category=navigation-support",
] as const;

export const Home: React.FC = () => {
  const { city, setIsLanguageModalOpen } = useCity();
  const { t } = useI18n();

  const featuredServices = city.services.filter((service) =>
    ["health811", "hdh-ucc", "suicide-crisis-988", "serviceontario-division"].includes(
      service.id,
    ),
  );

  return (
    <div className="section-container space-y-12 py-12">
      <Seo title={t.home.seoTitle} description={t.home.seoDescription} path="/" />

      <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t.home.kicker}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              {t.home.heroTitle}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              {t.home.heroLead}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Link to="/need-help-now" className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <AlertCircle className="text-red-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">{t.home.cardNeedHelp.title}</p>
              <p className="mt-1 text-sm text-stone-600">{t.home.cardNeedHelp.body}</p>
            </Link>
            <Link to="/start-here" className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Stethoscope className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">{t.home.cardStartHere.title}</p>
              <p className="mt-1 text-sm text-stone-600">{t.home.cardStartHere.body}</p>
            </Link>
            <Link to="/local-services" className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Search className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">{t.home.cardSearch.title}</p>
              <p className="mt-1 text-sm text-stone-600">{t.home.cardSearch.body}</p>
            </Link>
            <button
              type="button"
              onClick={() => setIsLanguageModalOpen(true)}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-start"
            >
              <Globe className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">{t.home.cardLanguage.title}</p>
              <p className="mt-1 text-sm text-stone-600">{t.home.cardLanguage.body}</p>
            </button>
          </div>
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            {t.home.quickDecisionsKicker}
          </div>
          <h2 className="text-2xl font-bold">{t.home.quickDecisionsTitle}</h2>
          <div className="space-y-3 text-sm text-stone-300">
            {t.home.quickDecisionLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="rounded-3xl bg-white/5 p-4">
            <p className="text-sm font-bold text-white">{t.home.trustNoteTitle}</p>
            <p className="mt-2 text-sm text-stone-300">{t.home.trustNoteBody}</p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              {t.home.newcomerKicker}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              {t.home.newcomerTitle}
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { to: "/costs-and-coverage", step: t.home.newcomerSteps[0] },
              { to: "/get-a-family-doctor", step: t.home.newcomerSteps[1] },
              { to: "/after-visit", step: t.home.newcomerSteps[2] },
            ].map(({ to, step }) => (
              <Link key={to} to={to} className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-bold text-stone-900">{step.title}</p>
                <p className="mt-2 text-sm text-stone-600">{step.body}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              {t.home.languageSupportKicker}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              {t.home.languageSupportTitle}
            </h2>
          </div>
          <div className="mt-6 grid gap-3">
            {QUICK_PHRASES.slice(0, 4).map((phrase) => (
              <div key={phrase.code} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
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
                <p lang={phrase.code} dir={phrase.dir} className="mt-1 text-sm text-stone-700">
                  {phrase.interpreter}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsLanguageModalOpen(true)}
            className="btn-secondary mt-5 w-full"
          >
            {t.home.openLanguageHelp}
          </button>
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              {t.home.commonTasksKicker}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              {t.home.commonTasksTitle}
            </h2>
          </div>
          <Link to="/local-services" className="inline-flex items-center gap-2 font-bold text-emerald-700">
            {t.home.openDirectory}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.home.tasks.map((task, index) => (
            <Link
              key={task.title}
              to={TASK_LINKS[index] ?? "/local-services"}
              className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
            >
              <p className="font-bold text-stone-900">{task.title}</p>
              <p className="mt-2 text-sm text-stone-600">{task.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
            {t.home.featuredKicker}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
            {t.home.featuredTitle}
          </h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-emerald-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} />
              {t.home.trustKicker}
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">{t.home.trustTitle}</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/85">
              {t.home.trustBody}
            </p>
          </div>
          <div className="space-y-3 rounded-3xl bg-white/10 p-5">
            <p className="text-sm font-bold">{t.home.trustChecklistTitle}</p>
            <ul className="space-y-2 text-sm text-emerald-50/85">
              {t.home.trustChecklist.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <Link to="/about#sources" className="inline-flex items-center gap-2 font-bold text-white">
              {t.home.trustLink}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
