import React from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  HeartPulse,
  Info,
  MapPin,
  MessageCircleQuestion,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { PageSection } from "../types";
import { MarkdownContent } from "./MarkdownContent";

interface SectionProps {
  section: PageSection;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope size={24} />,
  heart: <HeartPulse size={24} />,
  map: <MapPin size={24} />,
  clock: <Clock size={24} />,
  file: <FileText size={24} />,
  info: <Info size={24} />,
  shield: <ShieldCheck size={24} />,
  alert: <AlertCircle size={24} />,
};

const SectionLink: React.FC<{
  url: string;
  text: string;
  className?: string;
}> = ({ url, text, className }) =>
  url.startsWith("http") ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span>{text}</span>
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </a>
  ) : (
    <Link to={url} className={className}>
      <span>{text}</span>
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );

export const Section: React.FC<SectionProps> = ({ section, index }) => {
  const renderContent = () => {
    switch (section.type) {
      case "checklist":
        return (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {section.items?.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="mt-1 rounded-full bg-emerald-100 p-1 text-emerald-700">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm leading-relaxed text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        );
      case "steps":
        return (
          <div className="space-y-8">
            {section.items?.map((item, itemIndex) => {
              const [heading, ...rest] = item.split(":");
              return (
                <div key={item} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-900 text-sm font-bold text-white">
                      {itemIndex + 1}
                    </div>
                    {itemIndex < (section.items?.length ?? 0) - 1 ? (
                      <div className="mt-3 h-full w-px bg-stone-200" />
                    ) : null}
                  </div>
                  <div className="space-y-2 pb-8">
                    <h3 className="text-xl font-bold text-stone-900">{heading}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">
                      {rest.join(":").trim() || item}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "comparison":
        if (!section.comparison) {
          return null;
        }

        return (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                block: section.comparison.left,
                classes:
                  "border-stone-200 bg-stone-50 text-stone-700 icon-bg:bg-emerald-100 icon-text:text-emerald-700",
              },
              {
                block: section.comparison.right,
                classes:
                  "border-amber-200 bg-amber-50 text-stone-700 icon-bg:bg-amber-100 icon-text:text-amber-700",
              },
            ].map(({ block, classes }) => (
              <div
                key={block.title}
                className={`rounded-3xl border p-6 shadow-sm ${classes}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 text-emerald-700 shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-emerald-700">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "grid":
        return (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {section.gridItems?.map((item) => (
              <div
                key={item.title}
                className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                {item.eyebrow ? (
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                    {item.eyebrow}
                  </p>
                ) : null}
                <div className="w-fit rounded-2xl bg-stone-50 p-3 text-stone-500">
                  {item.icon ? iconMap[item.icon] ?? <Info size={24} /> : <Info size={24} />}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{item.content}</p>
                </div>
                {item.link ? (
                  <SectionLink
                    url={item.link.url}
                    text={item.link.text}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
                  />
                ) : null}
              </div>
            ))}
          </div>
        );
      case "table":
        return (
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead className="bg-stone-50">
                  <tr>
                    {section.columns?.map((column) => (
                      <th
                        key={column}
                        className="border-b border-stone-200 px-4 py-4 text-left font-bold text-stone-900"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows?.map((row, rowIndex) => (
                    <tr key={`${section.title}-${rowIndex}`} className="align-top">
                      {row.cells.map((cell, cellIndex) => (
                        <td
                          key={`${rowIndex}-${cellIndex}`}
                          className="border-b border-stone-100 px-4 py-4 text-stone-600"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.caption ? (
              <p className="px-4 py-3 text-xs text-stone-500">{section.caption}</p>
            ) : null}
          </div>
        );
      case "faq":
        return (
          <div className="space-y-4">
            {section.faqs?.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left font-bold text-stone-900">
                  <span>{faq.question}</span>
                  <MessageCircleQuestion size={18} className="shrink-0 text-emerald-700" />
                </summary>
                <div className="pt-4 text-sm text-stone-600">
                  <MarkdownContent content={faq.answer} />
                </div>
              </details>
            ))}
          </div>
        );
      case "callout":
        return (
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-900 p-8 text-white shadow-2xl shadow-emerald-900/10 sm:p-10">
            <div className="relative z-10 space-y-5">
              <div className="w-fit rounded-2xl border border-emerald-700 bg-emerald-800 p-3 text-emerald-200">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">{section.title}</h3>
              <MarkdownContent
                content={section.content || ""}
                className="prose prose-invert max-w-2xl text-emerald-50"
              />
              {section.link ? (
                <SectionLink
                  url={section.link.url}
                  text={section.link.text}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-emerald-900"
                />
              ) : null}
            </div>
            <div className="absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        );
      default:
        return <MarkdownContent content={section.content || ""} />;
    }
  };

  return (
    <motion.section
      id={section.id || `section-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`scroll-mt-32 space-y-8 ${section.type === "callout" ? "py-6" : ""}`}
    >
      {section.type !== "callout" ? (
        <div className="space-y-3">
          <div className="h-1 w-10 rounded-full bg-emerald-600" />
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
            {section.title}
          </h2>
        </div>
      ) : null}

      {renderContent()}

      {section.link && section.type !== "callout" ? (
        <SectionLink
          url={section.link.url}
          text={section.link.text}
          className="group inline-flex items-center gap-2 pt-2 font-bold text-emerald-700"
        />
      ) : null}
    </motion.section>
  );
};
