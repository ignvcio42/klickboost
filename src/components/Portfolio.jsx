import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const defaultProjects = [
  {
    title: "Proyecto demo",
    subtitle: "Sitio en construcción — pronto novedades",
    href: "#contacto",
    image: "/img/portfolio-1.webp",
    tags: ["Landing", "React", "SEO"],
  },
  {
    title: "Proyecto demo 2",
    subtitle: "Sitio en construcción — pronto novedades",
    href: "#contacto",
    image: "/img/portfolio-1.webp",
    tags: ["E-commerce", "UX", "Optimización"],
  },
  {
    title: "Proyecto demo 3",
    subtitle: "Sitio en construcción — pronto novedades",
    href: "#contacto",
    image: "/img/portfolio-1.webp",
    tags: ["Corporativo", "SSR", "SEO"],
  },
];

export default function Portafolio({ projects = defaultProjects }) {
  return (
    <section id="proyectos" className="scroll-mt-16 py-20 bg-[#698474] dark:bg-[#698474]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header centrado */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Nuestros trabajos
          </h1>
          <p className="mt-2 text-sm text-white">
            Un vistazo a los proyectos que hemos construido. Haz clic para visitar.
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Grid centrado: 1 → 2 → 3 columnas, con cards max-w-sm */}
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((p, idx) => (
            <Card
              key={`${p.title}-${idx}`}
              className="group relative w-full max-w-sm overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              {/* borde inferior lineal (como en servicios) */}
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              {/* Hace toda la card clickeable */}
              <a
                href={p.href}
                target={p.href?.startsWith("#") ? "_self" : "_blank"}
                rel={p.href?.startsWith("#") ? undefined : "noopener noreferrer"}
                className="absolute inset-0 z-10"
                aria-label={`Abrir ${p.title}`}
              />

              <CardContent className="p-0">
                {/* más compacta: 4/3 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay con título compacto */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                    <h3 className="text-base font-semibold leading-tight">{p.title}</h3>
                    {p.subtitle && <p className="text-xs opacity-90">{p.subtitle}</p>}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="mt-auto flex items-center justify-between gap-3 p-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] leading-5 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <a
                    href={p.href}
                    target={p.href?.startsWith("#") ? "_self" : "_blank"}
                    rel={p.href?.startsWith("#") ? undefined : "noopener noreferrer"}
                  >
                    Ver sitio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h9.19L9.47 5.78a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.47-3.47H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
