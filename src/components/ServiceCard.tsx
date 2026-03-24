import React from "react";
import {
  CalendarClock,
  ChevronRight,
  ExternalLink,
  Globe,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceRecord } from "../types";
import { formatIsoDate } from "../lib/format";
import { getVerificationCopy } from "../lib/trust";

interface ServiceCardProps {
  service: ServiceRecord;
  viewMode?: "grid" | "list";
}

const toneClasses: Record<string, string> = {
  emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
  blue: "border-blue-100 bg-blue-50 text-blue-700",
  amber: "border-amber-100 bg-amber-50 text-amber-700",
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  viewMode = "grid",
}) => {
  const verification = getVerificationCopy(service.verification_status);

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5 ${
        viewMode === "list" ? "xl:flex-row" : ""
      }`}
    >
      <div className={`flex-1 space-y-5 p-6 ${viewMode === "list" ? "xl:border-r xl:border-stone-100" : ""}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="badge-emerald">{service.category_label}</span>
            <span className="badge-stone">{service.subcategory_label}</span>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                toneClasses[verification.tone]
              }`}
            >
              {verification.shortLabel}
            </span>
          </div>
          <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-stone-600">
            {service.location_label ?? service.neighbourhood}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-tight text-stone-900">
            <Link to={`/local-services/${service.id}`} className="hover:text-emerald-700">
              {service.name}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-stone-600">{service.summary}</p>
          <p className="rounded-2xl bg-stone-50 p-4 text-sm text-stone-700">
            <span className="font-bold text-stone-900">When to use:</span>{" "}
            {service.when_to_use}
          </p>
        </div>

        <dl className="grid gap-4 text-sm text-stone-600 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Access
            </dt>
            <dd className="mt-1">
              {service.access_modes.map((mode) => mode.replace("-", " ")).join(", ")}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Eligibility
            </dt>
            <dd className="mt-1">
              {service.eligibility_summary ??
                "Open to the general public unless the official source says otherwise."}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Hours
            </dt>
            <dd className="mt-1">{service.hours}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              Phone
            </dt>
            <dd className="mt-1">
              <a href={`tel:${service.phone}`} className="font-semibold text-emerald-700">
                {service.phone}
              </a>
            </dd>
          </div>
        </dl>

        <details className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <summary className="cursor-pointer list-none text-sm font-bold text-stone-900">
            Trust and source details
          </summary>
          <div className="mt-3 space-y-2 text-sm text-stone-600">
            <p>{verification.description}</p>
            <p>
              <span className="font-semibold text-stone-900">Last review:</span>{" "}
              {formatIsoDate(service.last_verified)}
            </p>
            {service.verification_notes ? <p>{service.verification_notes}</p> : null}
            {service.source_url ? (
              <a
                href={service.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-emerald-700"
              >
                Official source
                <ExternalLink size={14} />
              </a>
            ) : null}
          </div>
        </details>
      </div>

      <div
        className={`space-y-4 border-t border-stone-100 bg-stone-50 p-6 ${
          viewMode === "list" ? "xl:w-[18rem] xl:border-l xl:border-t-0" : ""
        }`}
      >
        <div className="space-y-3 text-sm text-stone-600">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-stone-400" />
            <span>{service.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <CalendarClock size={16} className="mt-0.5 shrink-0 text-stone-400" />
            <span>{formatIsoDate(service.last_verified)}</span>
          </div>
        </div>

        <div className="grid gap-3">
          <a
            href={`tel:${service.phone}`}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Globe size={16} />
            Official website
          </a>
          {service.directions_url ? (
            <a
              href={service.directions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Navigation size={16} />
              Directions
            </a>
          ) : null}
          <Link
            to={`/local-services/${service.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-stone-700 hover:bg-white"
          >
            View details
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};
