/**
 * Configuración del sitio para SEO y meta tags.
 * En el navegador usa siempre el dominio actual (Vercel o www.klickboost.cl).
 * En build (sitemap/robots) usa VITE_SITE_URL o el dominio por defecto.
 */
const DEFAULT_DOMAIN = "https://www.klickboost.cl";

/** Base URL del sitio: en el navegador = dominio actual; en build = env o default */
export function getBaseUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return import.meta.env.VITE_SITE_URL || DEFAULT_DOMAIN;
}

/** Para scripts de build (sitemap, robots). No usa window. */
export const SITE_URL = import.meta.env.VITE_SITE_URL || DEFAULT_DOMAIN;

export const DEFAULT_SEO = {
  title: "Klick Boost | Desarrollo Web en Chile – Sitios Modernos y E-commerce",
  description:
    "Desarrollo web profesional en Chile. Creamos sitios web modernos, responsivos y optimizados para tu negocio. Landing pages, e-commerce y soporte técnico. Cotiza tu proyecto.",
  image: "/img/logo_vfinal.png",
  locale: "es_CL",
  twitterHandle: "@klickboost",
};

/** URL absoluta para una ruta. Usa el dominio actual en el cliente. */
export function absoluteUrl(path = "") {
  const base = getBaseUrl().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
