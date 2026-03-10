// src/components/Acerca.jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HyperText } from "@/components/magicui/hyper-text";
import { Sparkles, Users, ShieldCheck, Rocket, BadgeCheck, Handshake, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Acerca() {
  const features = [
    { icon: Sparkles,    title: "Enfoque en resultados", desc: "Diseñamos experiencias que acercan a tus clientes y convierten." },
    { icon: Users,       title: "Equipo joven",          desc: "Talento fresco, curioso y con hambre de mejorar cada proyecto." },
    { icon: ShieldCheck, title: "Calidad y confianza",   desc: "Buenas prácticas, performance y soporte claro en cada entrega." },
    { icon: Rocket,      title: "Innovación constante",  desc: "Stack moderno y mejoras continuas para escalar contigo." },
  ];

  const valores = [
    {
      icon: BadgeCheck,
      title: "Calidad ante todo",
      desc: "Compromiso total con la excelencia: entregamos productos de alta calidad que no solo cumplen, sino que superan lo esperado.",
    },
    {
      icon: Handshake,
      title: "Enfocados en ti",
      desc: "Tu éxito es nuestro éxito. Trabajamos a tu lado para comprender y cubrir cada necesidad digital.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      desc: "Nos mantenemos a la vanguardia, adoptando tecnologías actuales para ofrecer soluciones modernas y diferenciadoras.",
    },
  ];

  return (
    <section id="acerca" className="scroll-mt-16 py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-balance text-5xl font-bold tracking-tight leading-tight text-foreground">
            Acerca de{" "}
            <HyperText className="inline align-baseline text-[inherit] leading-[inherit] bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
              Klick Boost
            </HyperText>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Somos un equipo de desarrolladores apasionados por construir
            soluciones digitales que elevan la manera en que las empresas se
            relacionan con sus clientes. Nos mueve crear productos útiles,
            rápidos y con una experiencia impecable.
          </p>
          <p className="mt-3 text-muted-foreground">
            Desde el inicio trabajamos con mentalidad de excelencia y un grupo
            de profesionales jóvenes y talentosos. En Klick Boost, combinamos
            innovación y calidad para llevar tu presencia digital al siguiente
            nivel.
          </p>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeInUp}>
                <Card
                  className="group relative overflow-hidden border bg-card text-card-foreground transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                    <CardDescription className="text-sm">{desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="order-last md:order-none"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto w-full max-w-md md:max-w-lg overflow-hidden rounded-xl border bg-card shadow-sm">
            <img
              src="/img/img_hero.webp"
              alt="Equipo de Klick Boost trabajando en un proyecto"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute left-3 top-3 rounded-full border bg-background/70 px-2 py-1 text-xs text-foreground backdrop-blur">
              Equipo joven • 100% digital
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          className="mx-auto mb-8 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Nuestros valores
          </h2>
          <p className="mt-2 text-muted-foreground">
            Lo que guía cada decisión y entrega en Klick Boost.
          </p>
          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {valores.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeInUp} className="w-full max-w-sm">
              <Card
                className="group relative w-full overflow-hidden border bg-card text-card-foreground text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <CardHeader className="items-center">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="text-sm">{desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
