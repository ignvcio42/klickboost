import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground px-4">
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe."
        noIndex
      />
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-muted-foreground text-center">
        La página que buscas no existe o fue movida.
      </p>
      <Button asChild>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
