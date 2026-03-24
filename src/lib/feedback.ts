interface FeedbackPayload {
  contextLabel: string;
  contextUrl: string;
  issueType: string;
  details: string;
  contact?: string;
}

export const buildFeedbackBody = ({
  contextLabel,
  contextUrl,
  issueType,
  details,
  contact,
}: FeedbackPayload) =>
  [
    `Context: ${contextLabel}`,
    `Page or listing: ${contextUrl}`,
    `Issue type: ${issueType}`,
    "",
    "What looks wrong or outdated?",
    details || "[Please add details]",
    "",
    `Optional contact: ${contact || "[No contact provided]"}`,
    "",
    "Please do not include private medical information.",
  ].join("\n");

export const buildFeedbackMailto = ({
  contextLabel,
  contextUrl,
  issueType,
  details,
  contact,
}: FeedbackPayload) => {
  const subject = encodeURIComponent(
    `[MyPrimaryCareGuide] ${issueType} - ${contextLabel}`,
  );
  const body = encodeURIComponent(
    buildFeedbackBody({
      contextLabel,
      contextUrl,
      issueType,
      details,
      contact,
    }),
  );

  return `mailto:challengeat7@gmail.com?subject=${subject}&body=${body}`;
};
