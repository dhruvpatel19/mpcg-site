import React, { useState } from "react";
import { ExternalLink, Mail, TriangleAlert } from "lucide-react";
import { REPORT_ISSUE_TYPES } from "../config/site";
import { buildFeedbackBody, buildFeedbackMailto } from "../lib/feedback";
import { trackReportIssue } from "../lib/analytics";
import { useI18n } from "../i18n";
import { useToast } from "./ToastProvider";

interface FeedbackFormProps {
  contextLabel: string;
  compact?: boolean;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  contextLabel,
  compact = false,
}) => {
  const [issueType, setIssueType] = useState<(typeof REPORT_ISSUE_TYPES)[number]>(
    "outdated hours",
  );
  const [details, setDetails] = useState("");
  const [contact, setContact] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const { t } = useI18n();
  const { showToast } = useToast();

  const mailto = buildFeedbackMailto({
    contextLabel,
    contextUrl: typeof window === "undefined" ? contextLabel : window.location.href,
    issueType,
    details,
    contact,
  });
  const feedbackBody = buildFeedbackBody({
    contextLabel,
    contextUrl: typeof window === "undefined" ? contextLabel : window.location.href,
    issueType,
    details,
    contact,
  });

  return (
    <section
      className={`space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm ${
        compact ? "" : "sm:p-8"
      }`}
    >
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
          <TriangleAlert size={14} />
          {t.feedback.badge}
        </div>
        <h2 className="text-xl font-bold text-stone-900">{t.feedback.title}</h2>
        <p className="text-sm text-stone-600">{t.feedback.body}</p>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">{t.feedback.issueTypeLabel}</span>
        <select
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          value={issueType}
          onChange={(event) =>
            setIssueType(event.target.value as (typeof REPORT_ISSUE_TYPES)[number])
          }
        >
          {REPORT_ISSUE_TYPES.map((option) => (
            <option key={option} value={option}>
              {t.feedback.issueTypes[option] ?? option}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">{t.feedback.detailsLabel}</span>
        <textarea
          rows={compact ? 3 : 5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          placeholder={t.feedback.detailsPlaceholder}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">{t.feedback.contactLabel}</span>
        <input
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          placeholder={t.feedback.contactPlaceholder}
        />
      </label>

      <div className="flex flex-wrap gap-3">
        <a
          href={mailto}
          onClick={() => {
            trackReportIssue(issueType);
            setWasSubmitted(true);
            showToast(t.feedback.toastEmailTitle, t.feedback.toastEmailBody);
          }}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Mail size={16} />
          {t.feedback.openEmail}
        </a>
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(feedbackBody);
            showToast(t.feedback.toastCopyTitle, t.feedback.toastCopyBody);
          }}
          className="btn-secondary inline-flex items-center gap-2"
        >
          <ExternalLink size={16} />
          {t.feedback.copyText}
        </button>
      </div>

      {wasSubmitted ? <p className="text-sm text-emerald-700">{t.feedback.thanks}</p> : null}
    </section>
  );
};
