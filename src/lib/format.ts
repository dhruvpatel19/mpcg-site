const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const formatIsoDate = (value?: string) => {
  if (!value) {
    return "Needs review";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return dateFormatter.format(date);
};

export const joinLabels = (values: string[]) => values.filter(Boolean).join(", ");
