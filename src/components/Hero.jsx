import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = { staggerChildren: 0.1, delayChildren: 0.15 };

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
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Creando Experiencias Digitales
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Desarrollo web profesional en Chile. Creamos sitios web modernos,
          responsivos y optimizados para tu negocio.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="#proyectos"
          aria-label="Desplazarse a la siguiente sección"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
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
        </motion.a>
      </motion.div>
    </section>
  );
}
