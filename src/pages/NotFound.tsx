import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { useI18n } from "../i18n";

export const NotFound: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="section-container py-16">
      <Seo title={t.notFound.seoTitle} description={t.notFound.seoDescription} path="/404" />
      <div className="max-w-3xl space-y-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t.notFound.badge}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
            {t.notFound.title}
          </h1>
          <p className="text-lg text-stone-600">{t.notFound.body}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/start-here" className="btn-secondary text-center">
            {t.notFound.startHere}
          </Link>
          <Link to="/need-help-now" className="btn-primary text-center">
            {t.notFound.needHelpNow}
          </Link>
          <Link to="/local-services" className="btn-secondary text-center">
            {t.notFound.localServices}
          </Link>
          <Link to="/faq" className="btn-secondary text-center">
            {t.notFound.faq}
          </Link>
        </div>
      </div>
    </div>
  );
};
