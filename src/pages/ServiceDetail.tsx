import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarClock,
  ExternalLink,
  Globe,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { useCity } from "../CityContext";
import { Seo } from "../components/Seo";
import { FeedbackForm } from "../components/FeedbackForm";
import { MarkdownContent } from "../components/MarkdownContent";
import { formatIsoDate } from "../lib/format";
import { useI18n } from "../i18n";
import { trackServiceView } from "../lib/analytics";
import { NotFound } from "./NotFound";

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { city } = useCity();
  const { t, meta, language } = useI18n();

  const service = useMemo(
    () => city.services.find((entry) => entry.id === serviceId),
    [city.services, serviceId],
  );

  React.useEffect(() => {
    if (service) {
      trackServiceView(service.id);
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  const verification = t.verification[service.verification_status];

  return (
    <div className="section-container space-y-12 py-12">
      <Seo
        title={service.name}
        description={service.summary}
        path={`/local-services/${service.id}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: service.name,
          url: service.website,
          telephone: service.phone,
          address: service.address,
          areaServed: "Kingston, Ontario",
        }}
      />

      <div className="space-y-6">
        <Link
          to="/local-services"
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
        >
          <ArrowLeft size={16} className="rtl:rotate-180" />
          {t.serviceDetail.backToServices}
        </Link>
        {language !== "en" ? (
          <p className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
            {t.common.directoryEnglishNote}
          </p>
        ) : null}
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <section className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <span className="badge-emerald">
                {t.categories[service.category]?.label ?? service.category_label}
              </span>
              <span className="badge-stone">{service.subcategory_label}</span>
              <span className="badge-stone">
                {service.location_label ?? service.neighbourhood}
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
                {service.name}
              </h1>
              <p className="text-lg leading-relaxed text-stone-600" lang="en">
                {service.summary}
              </p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
                {t.serviceDetail.whenToUseTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700" lang="en">
                {service.when_to_use}
              </p>
            </div>
            {service.detailed_description ? (
              <MarkdownContent content={service.detailed_description} />
            ) : null}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <h2 className="text-lg font-bold text-stone-900">
                  {t.serviceDetail.eligibilityTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {service.eligibility_summary ? (
                    <span lang="en">{service.eligibility_summary}</span>
                  ) : (
                    t.serviceDetail.eligibilityFallback
                  )}
                </p>
                {service.access_notes ? (
                  <p className="mt-3 text-sm leading-relaxed text-stone-600" lang="en">
                    {service.access_notes}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.access_modes.map((mode) => (
                    <span key={mode} className="badge-stone">
                      {t.filters.access[mode] ?? mode}
                    </span>
                  ))}
                  {service.audiences.map((audience) => (
                    <span key={audience} className="badge-stone">
                      {t.filters.audience[audience] ?? audience}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <h2 className="text-lg font-bold text-stone-900">
                  {t.serviceDetail.whatToBringTitle}
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-stone-600" lang="en">
                  {service.what_to_bring.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <FeedbackForm contextLabel={service.name} compact />
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">
                {t.serviceDetail.contactTitle}
              </h2>
              <div className="mt-4 space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <span lang="en">{service.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <a href={`tel:${service.phone}`} className="font-semibold text-emerald-700">
                    {service.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarClock size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <span lang="en">{service.hours}</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <a href={`tel:${service.phone}`} className="btn-primary text-center">
                  {t.serviceDetail.callNow}
                </a>
                <a
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Globe size={16} />
                  {t.serviceDetail.officialWebsite}
                </a>
                {service.directions_url ? (
                  <a
                    href={service.directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <Navigation size={16} />
                    {t.serviceDetail.directions}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">{t.serviceDetail.trustTitle}</h2>
              <p className="mt-3 text-sm text-stone-600">{verification.description}</p>
              <p className="mt-3 text-sm text-stone-600">
                <span className="font-semibold text-stone-900">{t.serviceDetail.lastReview}</span>{" "}
                {formatIsoDate(service.last_verified, meta.localeTag)}
              </p>
              {service.verification_notes ? (
                <p className="mt-3 text-sm text-stone-600" lang="en">
                  {service.verification_notes}
                </p>
              ) : null}
              {service.source_url ? (
                <a
                  href={service.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
                >
                  {t.serviceDetail.viewOfficialSource}
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
