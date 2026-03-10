// src/components/Footer.jsx
import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "motion/react";

const columnVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-background border-t text-foreground overflow-hidden">
      <motion.div
        className="container mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
      >
        {/* Logo y descripción */}
        <motion.div className="col-span-2" variants={columnVariants} custom={0}>
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/img/logo_vfinal.png"
              alt="Klick Boost"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg font-bold">Klick Boost</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Elevamos tu presencia digital con sitios web modernos, rápidos y funcionales. Tu éxito, nuestro compromiso.
          </p>
        </motion.div>

        {/* Enlaces rápidos */}
        <motion.div variants={columnVariants} custom={1}>
          <h4 className="text-base font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="/#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="/#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="/#contacto" className="hover:underline">Contacto</a></li>
            <li><a href="politicas" className="hover:underline">Politicas</a></li>
          </ul>
        </motion.div>

        {/* Contacto */}
        <motion.div variants={columnVariants} custom={2}>
          <h4 className="text-base font-semibold mb-4">Contáctanos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> <a href="mailto:info.klickboost@gmail.com">info.klickboost@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> <a href="tel:+56994023144">+56 9 9402 3144</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4" /> <a href="https://www.instagram.com/klickboostcl/" target="_blank" rel="noopener noreferrer">@klickboost</a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Línea inferior */}
      <div className="border-t text-center text-xs text-muted-foreground py-4">
        © {new Date().getFullYear()} Klick Boost. Todos los derechos reservados.
      </div>
    </footer>
  );
}
