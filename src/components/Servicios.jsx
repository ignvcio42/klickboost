// src/components/Servicios.jsx
import { Code2, ShoppingCart, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";

const items = [
  {
    title: "Desarrollo Web",
    desc: "Sitios modernos, rápidos y optimizados para conversión.",
    points: ["Landing a medida", "React/Tailwind/shadcn", "SEO básico incluido"],
    icon: Code2,
  },
  {
    title: "E-commerce",
    desc: "Tiendas online listas para vender con pagos integrados.",
    points: ["Medios de pago", "Catálogo y stock", "Velocidad y seguridad"],
    icon: ShoppingCart,
  },
  {
    title: "Soporte Técnico",
    desc: "Mantenimiento, mejoras y monitoreo de tu sitio actual.",
    points: ["Fixes y mejoras", "Backups y uptime", "Soporte continuo"],
    icon: LifeBuoy,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-16 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header centrado */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-muted-foreground">
            Soluciones web completas para hacer crecer tu negocio.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Grid centrado */}
        <div className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map(({ title, desc, points, icon: Icon }) => (
            <Card
              key={title}
              className="group relative w-full max-w-sm overflow-hidden border bg-card text-card-foreground text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              {/* borde inferior lineal */}
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <CardHeader className="items-center">
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm">{desc}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex items-center justify-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="justify-center pt-4">
                <Button asChild className="group/btn inline-flex items-center gap-1">
                  <a href="#contacto">
                    Cotiza este servicio
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
