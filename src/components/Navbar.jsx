import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "/#servicios" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Sobre nosotros", href: "/#acerca" },
    { label: "Testimonios", href: "/#testimonios" },
  ];

  const brandTextClass = scrolled
    ? "text-slate-900 dark:text-white"
    : "text-slate-900 dark:text-white";
  const logoBoxClass = scrolled
    ? "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
    : "bg-slate-900/10 text-slate-900 dark:bg-white/20 dark:text-white";
  const linkClass =
    (scrolled
      ? "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
      : "text-slate-600 hover:text-slate-900 dark:text-white/80 dark:hover:text-white") +
    " text-sm transition-colors";

  const headerClass =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b backdrop-blur " +
    (scrolled
      ? "supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60"
      : "supports-[backdrop-filter]:bg-slate-200/50 dark:supports-[backdrop-filter]:bg-slate-900/10 border-slate-200/50 dark:border-transparent");

  return (
    <header className={headerClass}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-900/20 to-transparent dark:via-white/20" />
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/#inicio" className="relative z-10 flex items-center">
          <img
            src="img/logo_vfinal.png"
            alt="Klick Boost"
            width={1024}
            height={1024}
            className="h-16 w-16 object-contain"
          />
          <span
            className={` font-bold text-2xl tracking-tight ${brandTextClass}`}
          >
            {/* Klick Boost */}
          </span>
        </a>

        <nav className="relative z-10 hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            variant={scrolled ? "default" : "outline"}
            className={
              scrolled
                ? "shadow-sm"
                : "border-slate-900/20 text-slate-900 hover:bg-slate-200/50 dark:border-white/40 dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
            }
          >
            <a href="/#contacto">Cotiza tu sitio</a>
          </Button>
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />

          {/* Controlamos el estado para cambiar ícono y accesibilidad */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className={
                  scrolled
                    ? "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
                    : "bg-slate-900/10 text-slate-900 hover:bg-slate-900/20 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                }
                aria-label="Abrir menú"
              >
                {/* Mostramos ambos íconos y que el estado lo maneje el propio <Sheet> con data-state */}
                <Menu className="h-5 w-5 data-[state=open]:hidden" />
                <X className="h-5 w-5 hidden data-[state=open]:block" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex flex-col p-0">
              {/* Top bar dentro del panel */}
              <div className="flex items-center justify-between border-b px-4 py-4">
                <SheetTitle className="text-base">Klick Boost</SheetTitle>
              </div>

              {/* Navegación */}
              <nav className="flex flex-col gap-1 p-4">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted focus:bg-muted focus:outline-none focus:ring-2 focus:ring-ring/40"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA sticky al fondo con safe-area */}
              <div className="mt-auto border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <a href="/#contacto">Cotiza tu sitio</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
