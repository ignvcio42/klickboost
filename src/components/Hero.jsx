import { Button } from "@/components/ui/button";

export default function HeroKlickBoost({
  onPrimaryClick,
  onSecondaryClick,
  navHeight = 0,
}) {
  const handlePrimary = (e) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
      return;
    }
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondary = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick();
      return;
    }
    document
      .querySelector("#proyectos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-teal-400 to-indigo-600"
      style={{ minHeight: `calc(100svh - ${navHeight}px)` }}
    >
      {/* Fondo blur
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 opacity-70 blur-3xl" /> */}

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
        {/* <div className="mb-8 w-24">
          <img
            src="/PNG/Nebula.png"
            alt="Logo Klick Boost"
            className="mx-auto h-16 w-auto object-contain hover:scale-250 transition-transform duration-300"
          />
        </div> */}

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
          Creando Experiencias Digitales
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          Desarrollo web profesional en Chile. Creamos sitios web modernos,
          responsivos y optimizados para tu negocio.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="default"
            className="rounded-full bg-white text-slate-900 hover:bg-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 cursor-pointer"
            onClick={handleSecondary}
          >
            Échale un vistazo a nuestro trabajo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white bg-white text-slate-900 hover:bg-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 cursor-pointer"
            onClick={handlePrimary}
          >
            Empieza tu proyecto
          </Button>
        </div>
      </div>
      <div></div>

      {/* Flecha scroll */}
      <div className="absolute bottom-6 z-10 animate-bounce">
        <a href="#proyectos" aria-label="Desplazarse a la siguiente sección">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7-7-7M12 21V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
