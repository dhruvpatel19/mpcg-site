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
import { getVerificationCopy } from "../lib/trust";
import { trackServiceView } from "../lib/analytics";
import { NotFound } from "./NotFound";

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { city } = useCity();

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

  const verification = getVerificationCopy(service.verification_status);

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
          <ArrowLeft size={16} />
          Back to local services
        </Link>
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <section className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <span className="badge-emerald">{service.category_label}</span>
              <span className="badge-stone">{service.subcategory_label}</span>
              <span className="badge-stone">
                {service.location_label ?? service.neighbourhood}
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
                {service.name}
              </h1>
              <p className="text-lg leading-relaxed text-stone-600">{service.summary}</p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
                When to use this service
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {service.when_to_use}
              </p>
            </div>
            {service.detailed_description ? (
              <MarkdownContent content={service.detailed_description} />
            ) : null}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <h2 className="text-lg font-bold text-stone-900">Eligibility and access</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {service.eligibility_summary ??
                    "Check the official source if you are unsure whether this service is open to you."}
                </p>
                {service.access_notes ? (
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {service.access_notes}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.access_modes.map((mode) => (
                    <span key={mode} className="badge-stone">
                      {mode.replace("-", " ")}
                    </span>
                  ))}
                  {service.audiences.map((audience) => (
                    <span key={audience} className="badge-stone">
                      {audience.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <h2 className="text-lg font-bold text-stone-900">What to bring</h2>
                <ul className="mt-3 space-y-2 text-sm text-stone-600">
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
              <h2 className="text-lg font-bold text-stone-900">Contact and actions</h2>
              <div className="mt-4 space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <span>{service.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <a href={`tel:${service.phone}`} className="font-semibold text-emerald-700">
                    {service.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarClock size={16} className="mt-0.5 shrink-0 text-stone-400" />
                  <span>{service.hours}</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <a href={`tel:${service.phone}`} className="btn-primary text-center">
                  Call now
                </a>
                <a
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Globe size={16} />
                  Official website
                </a>
                {service.directions_url ? (
                  <a
                    href={service.directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <Navigation size={16} />
                    Directions
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">Trust and source</h2>
              <p className="mt-3 text-sm text-stone-600">{verification.description}</p>
              <p className="mt-3 text-sm text-stone-600">
                <span className="font-semibold text-stone-900">Last review:</span>{" "}
                {formatIsoDate(service.last_verified)}
              </p>
              {service.verification_notes ? (
                <p className="mt-3 text-sm text-stone-600">{service.verification_notes}</p>
              ) : null}
              {service.source_url ? (
                <a
                  href={service.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
                >
                  View official source
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
