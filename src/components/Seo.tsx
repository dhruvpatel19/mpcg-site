import React, { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../config/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  structuredData?: Record<string, unknown>;
}

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  structuredData,
}) => {
  useEffect(() => {
    const absoluteTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = absoluteTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description || SITE_DESCRIPTION,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: absoluteTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description || SITE_DESCRIPTION,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertLink("canonical", canonicalUrl);

    let script = document.getElementById(
      "structured-data",
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "structured-data";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(
      structuredData ?? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
      },
    );
  }, [description, path, structuredData, title]);

  return null;
};
