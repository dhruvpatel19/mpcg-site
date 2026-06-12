const formatterCache = new Map<string, Intl.DateTimeFormat>();

const getFormatter = (localeTag: string) => {
  let formatter = formatterCache.get(localeTag);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(localeTag, {
      year: "numeric",
      month: "short",
      day: "numeric",
      // ISO dates parse as UTC midnight; format in UTC so the calendar day
      // shown matches the recorded date in every timezone.
      timeZone: "UTC",
    });
    formatterCache.set(localeTag, formatter);
  }
  return formatter;
};

export const formatIsoDate = (value?: string, localeTag = "en-CA") => {
  if (!value) {
    return "—";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return getFormatter(localeTag).format(date);
};

export const joinLabels = (values: string[]) => values.filter(Boolean).join(", ");
