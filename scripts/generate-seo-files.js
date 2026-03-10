/**
 * Genera robots.txt y sitemap.xml en public/ usando VITE_SITE_URL.
 * Se ejecuta antes de `vite build`. En Vercel, configura la variable de entorno
 * VITE_SITE_URL=https://www.klickboost.cl cuando añadas el dominio custom.
 */
import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

const SITE_URL = (process.env.VITE_SITE_URL || "https://www.klickboost.cl").replace(/\/$/, "");

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/politicas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");
writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");

console.log("[SEO] Generados robots.txt y sitemap.xml con base:", SITE_URL);
