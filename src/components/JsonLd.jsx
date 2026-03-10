import { getBaseUrl, DEFAULT_SEO } from "@/lib/site";

function getOrganizationSchema() {
  const base = getBaseUrl().replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Klick Boost",
    url: base,
    logo: `${base}/img/logo_vfinal.png`,
    description: DEFAULT_SEO.description,
    email: "info.klickboost@gmail.com",
    sameAs: ["https://www.instagram.com/klickboostcl/"],
    address: { "@type": "PostalAddress", addressCountry: "CL" },
    areaServed: "Chile",
    knowsAbout: ["Desarrollo web", "E-commerce", "Landing pages", "React", "Diseño UX"],
  };
}

/**
 * Inyecta JSON-LD de Organization en el head para SEO.
 * Usa el dominio actual (Vercel o www.klickboost.cl).
 */
export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
    />
  );
}
