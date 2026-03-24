import type { ServiceRecord, ServiceVerificationStatus } from "../types";

export const VERIFICATION_COPY: Record<
  ServiceVerificationStatus,
  { label: string; shortLabel: string; description: string; tone: string }
> = {
  verified: {
    label: "Verified against official source",
    shortLabel: "Verified",
    description:
      "Core details were checked against an official source in the latest review cycle.",
    tone: "emerald",
  },
  "partially-verified": {
    label: "Official source linked",
    shortLabel: "Official link",
    description:
      "An official source is linked, but one or more details may change often and should be confirmed before you go.",
    tone: "blue",
  },
  "community-reported": {
    label: "Community-reported",
    shortLabel: "Community report",
    description:
      "This information came from community reporting and still needs independent confirmation.",
    tone: "amber",
  },
  "needs-recheck": {
    label: "Needs recheck",
    shortLabel: "Needs recheck",
    description:
      "This listing stays visible because it may still help, but key details may be stale. Confirm before relying on it.",
    tone: "amber",
  },
};

export const getVerificationCopy = (status: ServiceVerificationStatus) =>
  VERIFICATION_COPY[status];

export const getServiceTrustSummary = (service: ServiceRecord) => {
  const copy = getVerificationCopy(service.verification_status);
  return {
    ...copy,
    reviewedLabel: service.last_verified
      ? `Last review: ${service.last_verified}`
      : "Last review date not recorded",
  };
};
