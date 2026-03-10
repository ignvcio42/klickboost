// src/components/TestimoniosSimple.jsx
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const testimonios = [
  {
    name: "Hian Lartt",
    role: "Dueño, Hini Bricks.",
    quote:
      "El sitio que nos desarrollaron es bonito y cumple con todo lo que queríamos.",
    rating: 5,
  },
  {
    name: "Leonardo Ortega",
    role: "Dueño, Barberia 987.",
    quote:
      "Quedamos muy contentos; la comunicación fue clara y el resultado superó lo esperado.",
    rating: 4,
  },
];

// helper para iniciales del avatar
const initialsOf = (fullName = "") =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

export default function TestimoniosSimple({ items = testimonios }) {
  return (
    <section id="testimonios" className="scroll-mt-16 py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Lo que nuestros clientes dicen
          </h2>
          <p className="mt-2 text-muted-foreground">
            Opiniones que nos inspiran a seguir construyendo mejor.
          </p>
          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>

        {/* Grid 1 → 2 columnas, centrado */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                className="rounded-2xl border-0 bg-gradient-to-b from-amber-50 to-white shadow-md ring-1 ring-black/5 dark:from-slate-800 dark:to-slate-900 dark:ring-white/10"
              >
              <CardContent className="p-6 sm:p-7">
                {/* Estrellas */}
                <div className="mb-4 text-lg leading-none text-yellow-400">
                  {"★".repeat(t.rating ?? 5)}
                </div>

                {/* Cita */}
                <p className="text-[15px] italic leading-relaxed text-slate-700 dark:text-slate-300">
                  “{t.quote}”
                </p>

                {/* Autor */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                    <span className="text-sm font-medium">
                      {initialsOf(t.name)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
