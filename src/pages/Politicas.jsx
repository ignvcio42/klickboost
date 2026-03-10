import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

export default function Politicas() {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    fetch("/docs/Políticas_de_privacidad.pdf")
      .then((res) => res.headers.get("Last-Modified"))
      .then((date) => {
        if (date) {
          const formatted = new Date(date).toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setLastModified(formatted);
        }
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Políticas de Privacidad"
        description="Políticas de privacidad de Klick Boost. Conoce cómo protegemos y tratamos tu información."
      />
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Título */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Políticas de Privacidad
            </h1>
            <p className="mt-2 text-muted-foreground text-sm">
              Conoce cómo protegemos tu información.
            </p>
          </div>

          {/* Visor PDF */}
          <div className="w-full h-[80vh] rounded-lg overflow-hidden border border-border shadow-sm">
            <iframe
              src="/docs/Políticas_de_privacidad.pdf"
              title="Políticas de Privacidad"
              className="w-full h-full"
            />
          </div>

          {/* Descarga + fecha */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:items-center">
            <Button asChild variant="outline">
              <a href="/docs/Políticas_de_privacidad.pdf" download>
                Descargar PDF
              </a>
            </Button>

            {lastModified && (
              <p className="text-sm text-muted-foreground">
                Última actualización:{" "}
                <span className="font-medium">{lastModified}</span>
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
