# Desplegar en Vercel y configurar www.klickboost.cl

## 1. Subir a Vercel (dominio por defecto)

1. Conecta el repo de GitHub/GitLab/Bitbucket a [Vercel](https://vercel.com).
2. Deja que Vercel detecte el proyecto (Vite) y haga el build.
3. **No hace falta** configurar ninguna variable de entorno para la primera subida.
4. El sitio quedará en `tu-proyecto.vercel.app`. Todas las URLs (canonical, Open Graph, JSON-LD) se generan con ese dominio automáticamente.

## 2. Cuando tengas el dominio listo: www.klickboost.cl

### En el panel de tu dominio (donde compraste klickboost.cl)

- Añade un registro **CNAME** (o lo que te indique Vercel):
  - **Nombre:** `www` (o el subdominio que uses)
  - **Valor / Apunta a:** `cname.vercel-dns.com`

(O usa los registros **A** que te muestre Vercel si lo configuras por el dominio raíz.)

### En Vercel

1. Entra a tu proyecto → **Settings** → **Domains**.
2. Añade el dominio: `www.klickboost.cl` (y opcionalmente `klickboost.cl` si quieres).
3. Sigue las instrucciones para verificar (DNS).
4. **Variable de entorno (importante):**
   - **Settings** → **Environment Variables**
   - Añade:
     - **Name:** `VITE_SITE_URL`
     - **Value:** `https://www.klickboost.cl`
     - Marca **Production** (y Preview si quieres que las previews también usen ese dominio en sitemap/robots).
5. **Redeploy:** en **Deployments** → los tres puntos del último deploy → **Redeploy**.

Así el `build` volverá a generar `robots.txt` y `sitemap.xml` con `https://www.klickboost.cl`.

## 3. Resumen

| Dónde | Qué pasa |
|-------|----------|
| **Dominio actual** | La app usa siempre la URL desde la que se visita (`window.location.origin`). En `tu-proyecto.vercel.app` → canonical/OG serán de vercel.app; en `www.klickboost.cl` → serán de klickboost.cl. |
| **Sitemap y robots** | Se generan en cada `build`. Si defines `VITE_SITE_URL=https://www.klickboost.cl`, tendrán ese dominio. Si no, usan por defecto `https://www.klickboost.cl`. |
| **index.html** | Las meta OG tienen por defecto www.klickboost.cl. Al cargar la app, el componente SEO las actualiza al dominio actual. |

No hace falta tocar código al cambiar de dominio en Vercel; solo añadir la variable y volver a desplegar.
