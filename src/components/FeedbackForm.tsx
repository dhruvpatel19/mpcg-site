import React, { useState } from "react";
import { ExternalLink, Mail, TriangleAlert } from "lucide-react";
import { REPORT_ISSUE_TYPES } from "../config/site";
import { buildFeedbackBody, buildFeedbackMailto } from "../lib/feedback";
import { trackReportIssue } from "../lib/analytics";
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
          Report outdated information
        </div>
        <h2 className="text-xl font-bold text-stone-900">
          Help us keep this guide accurate
        </h2>
        <p className="text-sm text-stone-600">
          This sends a pre-filled email with page or service context. Do not include
          private medical information.
        </p>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">Issue type</span>
        <select
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          value={issueType}
          onChange={(event) =>
            setIssueType(event.target.value as (typeof REPORT_ISSUE_TYPES)[number])
          }
        >
          {REPORT_ISSUE_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">
          What should we check?
        </span>
        <textarea
          rows={compact ? 3 : 5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          placeholder="Example: the phone number changed, a clinic is appointment-only now, or a link is broken."
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-stone-900">
          Optional contact
        </span>
        <input
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm"
          placeholder="Email address if you want a reply"
        />
      </label>

      <div className="flex flex-wrap gap-3">
        <a
          href={mailto}
          onClick={() => {
            trackReportIssue(issueType);
            setWasSubmitted(true);
            showToast("Email draft opened", "Your report includes page or service context.");
          }}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Mail size={16} />
          Open report email
        </a>
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(feedbackBody);
            showToast(
              "Issue summary copied",
              "You can paste it into your own email client if needed.",
            );
          }}
          className="btn-secondary inline-flex items-center gap-2"
        >
          <ExternalLink size={16} />
          Copy report text
        </button>
      </div>

      {wasSubmitted ? (
        <p className="text-sm text-emerald-700">
          Thanks. Reports help us prioritize stale pages, broken links, and listings
          that need local rechecks.
        </p>
      ) : null}
    </section>
  );
};
