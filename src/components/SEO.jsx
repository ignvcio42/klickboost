import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { absoluteUrl, DEFAULT_SEO } from "@/lib/site";

/**
 * Actualiza título y meta tags por ruta para SEO.
 * Uso: <SEO title="..." description="..." image="..." />
 */
export default function SEO({
  title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  noIndex = false,
}) {
  const location = useLocation();
  const fullTitle = title ? `${title} | Klick Boost` : DEFAULT_SEO.title;
  const canonicalUrl = absoluteUrl(location.pathname + location.search);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noIndex ? "noindex, nofollow" : "index, follow");

    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", imageUrl);

    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;
  }, [fullTitle, description, imageUrl, canonicalUrl, noIndex]);

  return null;
}
